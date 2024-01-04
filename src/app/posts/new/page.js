import Post from "@/app/db/post.model";
import {revalidatePath} from "next/cache";
import Link from "next/link";


const AddPost = async () => {
    const posts = await Post.findAll().then(res => res.map(r => r.dataValues))

    const addPost = async (formData) => {
        "use server"
        const newPost = await Post.create({
            title: formData.get('title'),
            text: formData.get('text')
        })
        revalidatePath('/posts')
    }


    return (
        <main className="flex flex-col">
            <h5 className="p-5">Для проверки</h5>
            <ul className="flex flex-wrap h-28 p-5 overflow-hidden">
                {posts.map(post =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )}
            </ul>

            <div className="justify-center items-center h-screen p-5">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3"
                      action={addPost}>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" name='title' placeholder="Заголовок"/>
                    </div>

                    <div className="mb-6">
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows={5} cols={50} name='text' placeholder="Текст"/>
                    </div>
                    <div className="flex items-center justify-between">

                        <button className="bg-main-blue hover:bg-hov-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">Добавить
                        </button>
                    </div>
                </form>

                <div className="mb-10 p-10">
                    <Link href={`/posts`}>
                        <button className="bg-main-blue hover:bg-hov-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Вернуться</button>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default AddPost
