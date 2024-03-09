'use server'
import { Post, PostPreview } from '@/app/db/post.model.ts'

export const getPosts = async (offset: number, limit: number): Promise<PostPreview[]> => {
    try {
        const response = await Post.findAll({ offset: +offset, limit: +limit, order: [ [ 'updatedAt', 'DESC' ] ],
            attributes: [ 'id', 'title', 'preview', 'createdAt' ]
        }).count()
        const data = (await response.json())
        return data.items //нет свойства posts в data
    } catch (error: unknown) {
        console.log(error)
        throw new Error(`An error happened: ${error}`)
    }
}

//
//     const data = (await response.json()) as UserAPIResponse
//     return data.users
//