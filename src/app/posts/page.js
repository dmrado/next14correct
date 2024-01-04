import Link from "next/link"
const {sequelize} = require('../models')
const Post = sequelize.models.Post
import {revalidatePath} from "next/cache";


const Posts = async () => {
    const posts = await Post.findAll().then(res=> res.map(r => r.dataValues))

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Posts
            {posts}
        </main>
    )
}

export default Posts
