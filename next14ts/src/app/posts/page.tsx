import Link from "next/link"
import {Post} from '../db/post.model'

import {revalidatePath} from "next/cache";



const Posts = async () => {
    //todo не понятно зачем мы мапим response, куда это потом применять?
    const posts = await Post.findAll({order: [['updatedAt', 'DESC']]}).then(res => res.map(r => r.dataValues))

    const formData = new FormData();
    // todo всю голову сломал как в серверном компоненте передать в deletePost id удаляемого поста? С клиенским компонентом можно было бы использовать onSubmit=(e => deletePost(post.id)), но хочется остаться в серверной парадигме
    // formData.append('id', post.id);

    const deletePost = async () => {
        "use server"
        const {id} = Object.fromEntries(formData)
        console.log('formData', formData)

        // const id = formData.get('id')
        await Post.destroy({
            where: {id}
        })
        revalidatePath('/posts')
    }


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="mb-5 p-5">
                <Link href={'/posts/new'}>
                    <button>Новый пост</button>
                </Link>
            </div>

            <h1>Posts</h1>

            <div className="mt-5">
                <ul className="">
                    {posts.map(post =>

                        <li key={post.id} className="p-5 mb-3 text-justify hover:bg-[#004E98] rounded-md">
                            <Link href={`posts/${post.id}`}>
                                {/*todo правильное ли здесь решения дважды использовать Link что бы вывести кнопку удалить из под него?*/}
                                <div className="flex justify-between">
                                    <h2 className="p-2 text-justify text-2xl">{post.title}</h2>
                                    <p className="p-2 text-justify">Post id: {post.id}</p>
                                </div>
                            </Link>
                            <div className="flex justify-between">
                                <Link href={`posts/${post.id}`}>
                                    <p className="p-2 text-justify mr-10">{post.text}</p>
                                </Link>

                                <form action={deletePost}>
                                    <input type="hidden" name={post.id}/>
                                    <button type="submit" className="max-h-12 border-dotted border-2 border-red-500 bg-none hover:bg-red-700 text-white py-2 px-4 rounded
            focus:outline-none focus:shadow-outline">
                                        Удалить
                                    </button>
                                </form>

                                {/*<DeletePost id={post.id}/>*/}

                            </div>
                        </li>
                    )}
                </ul>
            </div>

        </main>
    )
}

export default Posts
