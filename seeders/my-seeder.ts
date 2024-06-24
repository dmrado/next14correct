import { Post } from '@/app/db/post.model'
import { faker } from '@faker-js/faker'

type PostData = Pick<Post, 'title'| 'text'| 'preview'>

const fakePostDataFactory = (number = 10, suffix = ''): Array<PostData> => {
    return Array(number).map(() => {
        const text = faker.lorem.text().substring(0, 200)
        return {
            title: faker.lorem.sentence() + suffix,
            text: text,
            preview: text
        }})
}

const seedPost = async () => {
    await Post.create({ title: 'New Post', text: 'Post from seeder', preview: 'Post from seeder' })
    const postData = fakePostDataFactory(3)
    await Promise.all(postData.map(async (post) => {
        return await Post.create({ title: post.title, text: post.text, preview: post.preview })
    }))
    const postData2 = fakePostDataFactory(3, '_bulk')
    await Post.bulkCreate(postData2)
}
