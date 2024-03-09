'use server'
import { Post, PostPreview } from '@/app/db/post.model.ts'

export const getPosts = async (offset: number, limit: number): Promise<PostPreview[]> => {
    try {
        const response: PostPreview[] = await Post.findAll({ offset: +offset, limit: +limit, order: [ [ 'updatedAt', 'DESC' ] ],
            attributes: [ 'id', 'title', 'preview', 'createdAt' ]
        })
        const data = (await response.json())//as what???
        return data.item //нет свойства posts в data как пишет ts
    } catch (error: unknown) {
        console.log(error)
        throw new Error(`An error happened: ${error}`)
    }
}