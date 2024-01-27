import {Post} from "@/app/db/post.model";

const seedPost = async ()=>{
    await Post.create({title: 'New Post', text:"Post from seeder"})
}

await seedPost()

