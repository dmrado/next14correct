import Link from 'next/link'
import { getServerSession } from 'next-auth'
import React from 'react'
import PostForm from '@/app/posts/post-form.tsx'
import { isAuthorized } from '@/app/isAuthorized.ts'
import { isSessionExpired } from '@/app/isSessionExpired.ts'
import { redirect } from 'next/navigation'

const AddPost = async () => {
    const session = await getServerSession()

    if (!session || !isAuthorized(session) || isSessionExpired(session)) {
        return redirect('/api/auth/signin')
    }

    return (<>
        <div className="flex justify-center text-white">
            <h1 className="pb-5">Создадим новый пост...</h1>
        </div>

        <div className="items-center h-screen p-5">
            <PostForm post={{ title: '', text: '' }}/>
            <div className="flex justify-center p-10">
                <Link href={'/posts'}>
                    <button
                        className='text-white border-2 border-[#000] hover:text-my_l_blue hover:border-2 hover:border-my_l_blue py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >Вернуться
                    </button>
                </Link>
            </div>
        </div>
    </>)
}

export default AddPost
