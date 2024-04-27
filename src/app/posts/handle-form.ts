'use server'

import sharp from 'sharp'
import { v4 as uuidv4 } from 'uuid'
import { Post } from '@/app/db/post.model.ts'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { FILE_LIMIT, TITLE_MIN_LENGTH } from '@/app/posts/constants.ts'

const saveFile = async (file: File): Promise<string> => {
    const buffer = Buffer.from(await file.arrayBuffer())

    const uniqueFilename = uuidv4()
    console.log('uniqueFilename', uniqueFilename)
    const outputImagePath = `public/img/${uniqueFilename}`
    //todo: add file extention

    // todo: (optional) let sharp modify buffer then, save buffer with native fs
    // todo: pseudocode to real code
    // try {
    //     const residedBuffer = sharp(buffer)
    //         .resize(300, 400)
    //         .toBuffer((er, data, info) => data)
    // } catch (e) {
    //     console.error(e)
    //     return redirect('/api/')
    // }
    // try {
    //     fs.writeFileSync(residedBuffer, '')
    // } catch (e) {
    //     console.error('writeFileSync error', e)
    //     throw e
    // }

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
    return uniqueFilename
}

type PostData = {
    id: number | undefined,
    title: string,
    text: string
}
const cleanFormData = (formData: FormData): PostData => {
    const id = formData.get('id')
    const title = formData.get('title')
    const text = formData.get('text')
    if (id instanceof File || title instanceof File || text instanceof File) {
        throw new Error('Filedata in text fields')
    }
    if (!title || !text) {
        throw new Error('Title or text is null')
    }
    if (title.length < TITLE_MIN_LENGTH) {
        throw new Error('Title too short')
    }
    return { title, text, id: id ? Number(id) : undefined }
}

const cleanFormFile = (formData: FormData): File | undefined => {
    const file = formData.get('post_picture')
    if (file == null) {
        return undefined
    }
    if (typeof file === 'string') {
        throw new Error('Unexpected post_picture in string format')
    }

    if (file.size === 0) {
        return undefined
    }
    if (file.size > FILE_LIMIT) {
        throw new Error(`File is bigger than limit: "${FILE_LIMIT}"`)
    }
    return file
}

export const handleForm = async (formData: FormData) => {
    try {
        const { id, title, text } = cleanFormData(formData)
        const preview = text ? text.replace(/<[^>]+>/g, '').slice(0, 100) : ''//убираем HTML-разметку

        const [ post, isUpdated ] = await Post.upsert({ id: id, title, text, preview })

        const formFile = cleanFormFile(formData)

        if (formFile) {
            const fileName = await saveFile(formFile)
            await Post.update({ path: `/img/${fileName}` }, { where: { id: post.id } })
        }
    } catch (e) {
        // todo: send error message in query params
        console.error('Error on handleForm:  ', e)
        return redirect('/api/error/400')
    }
    revalidatePath('/posts')
    redirect('/posts')
}
