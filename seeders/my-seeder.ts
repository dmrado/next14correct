import { Post } from '@/app/db/post.model'
import { faker } from '@faker-js/faker'

type PostData = Pick<Post, 'title'| 'text'>

const fakePostDataFactory = (number = 10, suffix = ''): Array<PostData> => {
  return [ ...Array(number).keys() ].map(() => ({
    title: faker.lorem.sentence() + suffix,
    text: faker.lorem.text().substring(0, 200)
  }))
}

const seedPost = async () => {
  await Post.create({ title: 'New Post', text: 'Post from seeder' })
  const postData = fakePostDataFactory(3)
  await Promise.all(postData.map(async (post) => {
    return await Post.create({ title: post.title, text: post.text })
  }))
  const postData2 = fakePostDataFactory(3, '_bulk')
  await Post.bulkCreate(postData2)
}
