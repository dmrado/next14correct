import Link from "next/link"
import {Post} from '../db/post.model'

import {revalidatePath} from "next/cache";
import PostsPage from "@/components/PostsPage";
import React from "react";


const Posts = async () => {
    //response мапим что бы получить объект секвелайз, а не огромной модели даннх
    const posts = await Post.findAll({order: [['updatedAt', 'DESC']]})
    // .then(res => res.map(r => r.dataValues))
    console.log(posts)

    const formData = new FormData();
    // todo всю голову сломал как в серверном компоненте передать в deletePost id удаляемого поста? С клиенским компонентом можно было бы использовать onSubmit=(e => deletePost(post.id)), но хочется остаться в серверной парадигме
    // formData.append('id', post.id);

    // const deletePost = async (id: number) => {
    //     "use server"
    //     // const {id} = Object.fromEntries(formData)
    //     console.log('formData', formData)
    //
    //     // const id = formData.get('id')
    //     await Post.destroy({
    //         where: {id}
    //     })
    //     revalidatePath('/posts')
    // }


    return (
        <main className="flex min-h-screen flex-col items-center justify-between sm:pl-2 sm:pr-2">

            <div className="flex flex-col justify-center content-center items-center mt-40">{/*blog-header*/}
                <img src="img/postspage/blog1.webp" alt="Photo" className="h-60 w-60 rounded-full mb-10"/>

                <h1>Блог пастора</h1>

                <Link className=" mt-10" href={'/posts/new'}>
                    <button>Новый пост</button>
                </Link>
            </div>

            <div className="max-w-2xl overflow-hidden mt-0 mr-auto mb-0 ml-auto">{/*container*/}
                <div className="flex float-left p-0 mt-9">{/*card-list*/}

                    <ul>
                        {posts.map(post => PostsPage(post)

                            // <li key={post.id} className="p-5 mb-3 text-justify hover:bg-[#004E98] rounded-md">
                            //     <Link href={`posts/${post.id}`}>
                            //         {/*todo правильное ли здесь решения дважды использовать Link что бы вывести кнопку удалить из под него?*/}
                            //         <div className="flex justify-between">
                            //             <h2 className="p-2 text-justify text-2xl">{post.title}</h2>
                            //             <p className="p-2 text-justify">Post id: {post.id}</p>
                            //         </div>
                            //     </Link>
                            //     <div className="flex justify-between">
                            //         <Link href={`posts/${post.id}`}>
                            //             <p className="p-2 text-justify mr-10">{post.text}</p>
                            //         </Link>
                            //
                            //         {/*<form action={deletePost}>*/}
                            //         {/*    <input type="hidden" name={post.id}/>*/}
                            //         {/*    <button type="submit"*/}
                            //         {/*            className="max-h-12 border-dotted border-2 border-red-500 bg-none hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">*/}
                            //         {/*            onClick=*/}
                            //         {/*        Удалить*/}
                            //         {/*    </button>*/}
                            //         {/*</form>*/}
                            //

                            //
                            //     </div>
                            // </li>
                        )}
                    </ul>
                </div>
            </div>

        </main>
    )
}

export default Posts
