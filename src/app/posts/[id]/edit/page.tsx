import { notFound, redirect } from 'next/navigation'
import { Post } from '@/app/db/post.model.ts'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { isAuthorized } from '@/app/isAuthorized.ts'
import { isSessionExpired } from '@/app/isSessionExpired.ts'
import PostForm from '@/app/posts/post-form.tsx'

type PostPageParams = { params: { id: number } }

const EditPost = async ({ params }: PostPageParams) => {
    const session = await getServerSession()
    if (!session || !isAuthorized(session) || isSessionExpired(session)) {
        return redirect('/api/auth/signin')
    }

    const post = await Post.findByPk(params.id)
    if (!post) {
        return notFound()
    }

    return <>

        <div className="flex justify-center text-white">
            <h1 className="p-5">Отредактируем по новому...</h1>
        </div>

        <div className="items-center h-screen p-5">
            <PostForm post={{ title: post.title, text: post.text, id: post.id }}/>
            <div className="flex justify-center p-10">
                <Link href={'/posts'}>
                    <button
                        className='text-white border-2 border-[#000] hover:text-my_l_blue hover:border-2 hover:border-my_l_blue py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >Вернуться
                    </button>
                </Link>
            </div>
        </div>
    </>
}

export default EditPost
