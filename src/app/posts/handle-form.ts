'use server'

import { fileTypeFromBuffer } from 'file-type'
import { NextError } from 'next/dist/lib/is-error'
// import Error from 'next/error'
import sharp from 'sharp'
import { Post } from '@/app/db/post.model.ts'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

async function checkFileType(buffer: Buffer) {
    const allowedTypes = [ 'image/jpeg', 'image/jpg', 'image/JPG', 'image/png', 'image/webp', 'image/HEIC', 'image/heic' ]

    console.log('buffer', buffer)
    let type = await fileTypeFromBuffer(buffer)
    console.log('fileTypeFromFile(buffer)', type)

    // if(type.ext && type.ext.toLowerCase() === 'heic'){
    //     const output = await convert({
    //         buffer: type, // the HEIC file buffer
    //         format: 'JPEG',      // output format
    //         quality: 1           // the jpeg compression quality, between 0 and 1
    //     })
    //     console.log('output', output)
    //     type = output? output: type
    // }

    if (type) {
        console.log(`Тип файла: ${type.mime}`)
        console.log(`Расширение файла: ${type.ext}`)

        // Проверка, является ли обнаруженный тип файла допустимым
        if (allowedTypes.includes(type.mime)) {
            console.log('Тип файла допустим')
            return true
        } else {
            console.log('Тип файла не допустим')
            return false
        }
    } else {
        console.log('Не удалось определить тип файла')
        return false
    }
}

const saveFile = async (file: File) => {
    const buffer = Buffer.from(await file.arrayBuffer())
    // if (!await checkFileType(buffer)) {
    //     throw new Error('File type is invalid')
    // }

    //todo место Date.now примеить uuid
    const outputImagePath = `public/img/${Date.now()}_${file.name}`

    sharp(buffer)
        .resize(300, 400)
        .webp({ lossless: true })
        .toFile(outputImagePath, (err, info) => {
            if (err) {
                console.error(err)
            } else {
                console.log('Изображение успешно изменено и сохранено.')
            }
        })
}

export const handleForm = async (formData: FormData) => {
    // try {
    // 'use server'
    //Описываем функцию проверки типа файла

    const title = formData.get('title')
    if (!title || title instanceof File) {
        throw new Error('Post title required. It should not be a file')
    }
    if (title.length < 100) {
        // todo: handle error
        // return { message: 'Database Error: Failed to Delete Invoice.' }
        throw new Error('Title too short')
    }

    const text: string = formData.get('text') as string
    const preview = text ? text.replace(/<[^>]+>/g, '').slice(0, 100) : ''//убираем HTML-разметку
    const formFile = formData.get('post_picture') as File | null

    // if (formFile !== null) {
    //     await saveFile(formFile)
    // }

    await Post.create({
        // todo: when using this in Edit Post we rewrite with empty value
        title, text, preview, path: formFile ? `/img/${formFile.name}` : ''
    })
    // } catch (e) {
    //     return { message: 'Dummy message' }
    // }
    revalidatePath('/posts')
    redirect('/posts')
}
