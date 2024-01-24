import Link from "next/link"
import React from "react";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {Post} from '@/app/db/post.model.ts';
import Custom404 from "@/app/404.tsx";


type PostPageParams = { params: { id: number } }
const PostPage = async ({params}: PostPageParams) => {
    //todo как делается обработка ошибок здесь?
    // try {
    const post = await Post.findByPk(params.id)
    // if (!post) {
    // revalidatePath('/404')
    // }
    // } catch (error) {
    //     console.log(error)
    // }

    if (post === null) {
        // todo: return 404 status
        return <Custom404/>
    }

    async function removePost  (id: number) {
        'use server'
        await Post.destroy({ where: { id } });
        revalidatePath('/posts')
        redirect('/posts')
    };


    return (<>
            <div className="max-w-2xl overflow-hidden mt-0 mr-auto mb-0 ml-auto pr-1 pl-1">
                <div
                    className="flex items-center align-c w-full h-full bg-no-repeat bg-center bg-cover bg-fixed text-center">
                    <img className="one-post-banner__img"
                         src='../img/postspage/cloudsWIDE.webp'
                        // src={post.imgLink}
                         alt="Картинка поста"/>
                </div>

                <div className="pl-5 pr-5 flex flex-col justify-center items-center text-justify">
                    <h5 className="p-5">Post id: {post.id}</h5>
                    <h1 className="p-5">{post.title}</h1>
                    <p className="">{post.text}</p>

                    {/*<p className="text-end text-blue-950">{moment(updatedAt).format("DD.MM.YYYY")}</p>*/}
                    <p className="text-end text-white mt-10 italic">Дата публикации</p>

                    <form action={removePost.bind(null, post.id)}>
                        <input type='submit' value="Удалить пост"/>
                    </form>

                    <div className="mb-10 p-10">
                        <Link href={`/posts`}>
                            <button
                                className="bg-main-blue hover:bg-hov-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Вернуться
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
        ;
};

export default PostPage;
