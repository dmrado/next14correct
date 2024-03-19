import Link from 'next/link'
import React from 'react'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Post } from '@/app/db/post.model.ts'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'

type PostPageParams = { params: { id: number } }
const PostPage = async ({ params }: PostPageParams) => {
    const session = await getServerSession()

    const post = await Post.findByPk(params.id)
    if (!post) {
        return notFound()
    }

    async function removePost(id: number) {
        'use server'
        await Post.destroy({ where: { id } })
        revalidatePath('/posts')
        redirect('/posts')
    };

    return (<>
        <div className="max-w-2xl overflow-hidden mt-40 mr-auto mb-0 ml-auto pr-1 pl-1">
            <div
                className="flex items-center align-c w-full h-full bg-no-repeat bg-center bg-cover bg-fixed text-center">
                <img className="one-post-banner__img"
                    src={post.path ? post.path : '../img/postspage/cloudsWIDE.webp'}
                    alt="Картинка поста"/>
            </div>

            <div className="pl-5 pr-5 flex flex-col justify-center items-center text-justify">
                {!!session && !!session.user && session.user.email === process.env.USER_EMAIL &&
                        <h5 className="p-5 opacity-70">Post id: {post.id}</h5>
                }
                <h1 className="p-5 opacity-70">{post.title}</h1>

                <div className="p-5 opacity-70" dangerouslySetInnerHTML={{ __html: post.text }}
                ></div>

                <p className="justify-end text-white italic mt-10p-5 opacity-65">Добавлено:&nbsp;
                    {post.createdAt.toLocaleDateString('ru-RU', {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>

                <div className="flex flex-wrap p-5 justify-between items-center">
                    <Link href={'/posts'}>
                        <button
                            className='opacity-70 hover:opacity-100 py-2 px-4 border-2 border-[#000] hover:text-my_l_blue hover:border-2 hover:border-my_l_blue  rounded focus:outline-none focus:shadow-outline'
                        >Вернуться
                        </button>
                    </Link>

                    {!!session && !!session.user && session.user.email === process.env.USER_EMAIL &&
                            <Link
                                className='text-white opacity-70 hover:opacity-100 py-2 px-4 border-[#000] border-2 hover:text-my_l_green hover:border-2 hover:border-my_l_green rounded'
                                href={`/posts/${post.id}/edit`}>Редактировать
                            </Link>
                    }
                </div>
                {!!session && !!session.user && session.user.email === process.env.USER_EMAIL &&
                        <form
                            className='text-white opacity-70 hover:opacity-100 flex mt-10 px-6 py-2 ml-2 border-[#000] border-2 hover:border-2 hover:border-[#D50000] hover:rounded hover:text-[#D50000]
                            animate-dangerous-hover'
                            action={removePost.bind(null, post.id)}>
                            <input type='submit' value="Удалить пост"/>
                        </form>
                }
            </div>
        </div>
    </>
    )

}

export default PostPage
