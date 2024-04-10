'use server'

import { fileTypeFromBuffer } from 'file-type'
import { NextError } from 'next/dist/lib/is-error'
// import Error from 'next/error'
import sharp from 'sharp'
import { v4 as uuidv4 } from 'uuid'
import { Post } from '@/app/db/post.model.ts'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { FILE_LIMIT, TITLE_MIN_LENGTH } from '@/app/posts/constants.ts'

const saveFile = async (file: File) => {
    if (file.size > FILE_LIMIT) {
        return redirect('/api/error?code=400&message=TOO_BIG')
    }

    const buffer = Buffer.from(await file.arrayBuffer())

    //todo: (optional) место Date.now примеить uuid ГОТОВО ПЕРЕМЕННАЯ СОДЕРЖИТ УНИКАЛЬНОЕ ИМЯ ФАЙЛА НО НЕ СОХРАНЯЕТСЯ
    const uniqueFilename = uuidv4()
    console.log('uniqueFilename', uniqueFilename)
    const outputImagePath = `public/img/${uniqueFilename}`

    //todo: (optional) let sharp modify buffer then, save buffer with native fs
    sharp(buffer)
        .resize(300, 400)
        .webp({ lossless: true })
        .toFile(outputImagePath, (err, info) => {
            if (err) {
                console.error(err)
                return redirect('/api/error?code=400&message=FILE_FORMAT_WRONG')
            } else {
                console.log('Изображение успешно изменено и сохранено.')
            }
        })
}

export const handleForm = async (formData: FormData) => {
    // fixme: this guy always crete posts, but designed to crete/update. this need to be fixed!
    const title = formData.get('title')
    if (!title || title instanceof File) {
        // todo: send error message in query params
        return redirect('/api/error/400')
    }
    if (title.length < TITLE_MIN_LENGTH) {
        return redirect('/api/error/400')
    }

    const id = formData.get('id')

    const text = formData.get('text') as string
    const preview = text ? text.replace(/<[^>]+>/g, '').slice(0, 100) : ''//убираем HTML-разметку
    const formFile = formData.get('post_picture') as File | null

    if (formFile !== null) {
        await saveFile(formFile)
    }

    const filePath = formFile ? `/img/${formFile.name}` : ''

    await Post.create({
        // todo: when using this in Edit Post we rewrite with empty value
        title, text, preview, path: filePath
    })
    revalidatePath('/posts')
    redirect('/posts')
}
