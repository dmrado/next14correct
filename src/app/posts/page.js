import Link from "next/link"
// const {sequelize} = require('../../../backend/models')
// const Post = sequelize.models.Post
import Post from "@/app/db/post.model";

//todo в чем разница между таким запросом и правильным? почему здесь нет .json?
// const getPosts = async () => {
//     const res = await Post.findAll()
//     return await res.json()
// }

const Posts = async () => {
    //todo не понятно зачем мы мапим response, куда это потом применять? Где посмотреть в консоли на объект?
    const posts = await Post.findAll().then(res => res.map(r => r.dataValues))

    // const data = await getPosts()
    // const posts = data.items

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="mb-10 p-10">
                <Link href={'/posts/new'}>
                    <button>Новый пост</button>
                </Link>
            </div>
            <h1>Posts</h1>
            <ul className="">
                {posts.map((post, item) =>
                    <li key={item}>
                        <h3>{post.title}</h3>
                        <p>{post.text}</p>
                    </li>
                )}
            </ul>
        </main>
    )
}

export default Posts
