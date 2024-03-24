'use server'
import React from 'react';
import sharp from "sharp";
import {Post} from "@/app/db/post.model.ts";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

interface PostFormData {
    title: string
    text: string
    post_picture: File | null
}

    export const addPost = async (formData: FormData & PostFormData) => {
        const title: string = formData.get('title') as string
        const text: string = formData.get('text') as string
        const preview = text ? text.replace(/<[^>]+>/g, '').slice(0, 100) : ''//убираем HTML-разметку
        const formFile = formData.get('post_picture') as File | null

        if (formFile.name === 'undefined') {
            throw new Error('No file selected')
            //todo отправить сообщение об ошибке на фронтенд
        }

        const buffer = Buffer.from(await formFile.arrayBuffer())
        //todo место Date.now примеить uuid
        const outputImagePath = `public/img/${Date.now()}_${formFile.name}`

        sharp(buffer)
            .resize(1356, 668)
            .webp({lossless: true})
            .toFile(outputImagePath, (err, info) => {
                if (err) {
                    console.error(err)
                } else {
                    console.log('Изображение успешно изменено и сохранено.')
                }
            })

        console.log('>>>>>>>> formFile', formFile)

        // if (title === '') {
        //     throw new Error('Title cannot be empty')
        // }
        const newPost = await Post.create({
            title, text, preview, path: `/img/${formFile.name}`
        })
        revalidatePath('/posts')
        redirect('/posts')
    }

