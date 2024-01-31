import {Post} from "@/app/db/post.model";
import { faker } from "@faker-js/faker"

type PostData = Pick<Post, 'title'| 'text'>

const fakePostDataFactory=(number = 10, suffix = ""): Array<PostData>=>{
    return [...Array(number).keys()].map(()=>({
        title: faker.lorem.sentence() + suffix,
        text: faker.lorem.text().substring(0, 200)
    }))
}

const seedPost = async ()=>{
    const postData = fakePostDataFactory(3)
    postData.forEach(post=>{
        if(post.text.length>210){
            console.log(post)
            throw Error('Error')
        }
    })
    await Promise.all(postData.map(async (post)=> {
        return await Post.create({title: post.title, text: post.text})
    }))
    const postData2 = fakePostDataFactory(3, "_bulk")
    await Post.bulkCreate(postData2)
}

await seedPost()

