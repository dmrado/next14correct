'use server'
import { Post, PostPreview } from '@/app/db/post.model.ts'

export const getPosts = async (offset: number, limit: number) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 5_000))
        const posts = await Post.findAll({
            offset: offset, limit: limit, order: [ [ 'updatedAt', 'DESC' ] ],
            attributes: [ 'id', 'title', 'preview', 'path', 'createdAt' ]
        })
        const count = await Post.count()
        return {
            posts: posts.map(post => post.toJSON()),
            count: count
        }
    } catch (error: unknown) {
        console.log(error)
        throw new Error(`An error happened: ${error}`)
    }
}
