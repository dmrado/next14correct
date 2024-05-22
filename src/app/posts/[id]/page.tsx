import Link from 'next/link'
import React from 'react'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Post } from '@/app/db/post.model.ts'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import CookieConsent from '@/components/CookieConsent.tsx'
import { getConsentAccepted } from '@/app/actions/getCookiesAccepted.ts'
import '../tailwind.css'

type PostPageParams = { params: { id: number } }
const PostPage = async ({ params }: PostPageParams) => {
    const session = await getServerSession()
    const isAcceptedCookie = await getConsentAccepted()
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
        <div className="max-w-4xl overflow-hidden mx-auto my-32 mb-0 pr-1 pl-1">
            {!isAcceptedCookie && <div className="flex justify-center mt-36">
                <CookieConsent isAccepted={!!isAcceptedCookie}/>
            </div>}
            <div
                className="flex items-center align-c w-full h-full bg-no-repeat bg-center bg-cover bg-fixed text-center overflow-hidden rounded-lg">
                <img src={post.path ? post.path : '../img/postspage/cloudsWIDE.webp'}
                    alt="Картинка поста"/>
            </div>

            <div className="px-5 flex flex-col justify-center items-center text-justify">
                {!!session && !!session.user && session.user.email === process.env.USER_EMAIL &&
                        <h5 className="p-5 opacity-70">Post id: {post.id}</h5>
                }
                <h1 className="text-[#505050] text-2xl font-bold p-5">{post.title}</h1>

                <div className="text-[#505050] text-xl p-5" dangerouslySetInnerHTML={{ __html: post.text }}
                ></div>

                <p className="justify-end italic p-5 opacity-65">Добавлено:&nbsp;
                    {post.createdAt.toLocaleDateString('ru-RU', {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>

                <div className="flex flex-wrap p-5 justify-between items-center">
                    <Link href={'/posts'}>
                        <button className='button_blue'>Вернуться</button>
                    </Link>

                    {!!session && !!session.user && session.user.email === process.env.USER_EMAIL &&
                            <Link href={`/posts/${post.id}/edit`}>
                                <button className='button_green text-dark'>Редактировать</button>
                            </Link>
                    }
                </div>

                {!!session && !!session.user && session.user.email === process.env.USER_EMAIL &&
                        <form action={removePost.bind(null, post.id)}>
                            <input className='button_red' type='submit' value="Удалить пост"/>
                        </form>
                }
            </div>
        </div>
    </>
    )

}

export default PostPage
