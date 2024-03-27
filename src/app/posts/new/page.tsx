// 'use client'
import path from 'path'
import fs from 'fs'
import Link from 'next/link'
import { Post } from '@/app/db/post.model'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { isAuthorized } from '@/app/isAuthorized.ts'
import { isSessionExpired } from '@/app/isSessionExpired.ts'
import React from 'react'
import dynamic from 'next/dynamic'
// import sharp from 'sharp'
// import { fileTypeFromBuffer } from 'file-type'
// import { convert } from 'heic-convert'
import { handleForm } from '@/app/posts/handle-form.ts'
import PostForm from '@/app/posts/post-form.tsx'
// import Error from 'next/error'

// const Editor = dynamic(() => import('@/components/Editor'), {
//     ssr: false,
// })

const AddPost = async () => {
    // const [ emptyTitle, setEmptyTitle ] = useState(false)
    const session = await getServerSession()

    if (!session || !isAuthorized(session) || isSessionExpired(session)) {
        // return <Error statusCode={999}/>
        throw new Error('not authorised')
        // return redirect('/error')
    }

    // const addPost = (formData: FormData) => {
    //     handleForm(formData)
    //     revalidatePath('/posts')
    //     redirect('/posts')
    // }

    return (
        <main className="flex flex-col">
            <div className="mt-40">{/*вылезаем из под header*/}
                <div className="flex justify-center"><h1 className="p-5">Создадим новый пост...</h1></div>

                <div className="items-center h-screen p-5">
                    <PostForm />
                    <div className="flex justify-center mb-10 p-10">
                        <Link href={'/posts'}>
                            <button
                                className='text-white border-2 border-[#000] hover:text-my_l_blue hover:border-2 hover:border-my_l_blue py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                            >Вернуться
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AddPost
