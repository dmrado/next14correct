import { revalidatePath } from 'next/cache'
import { notFound, redirect } from 'next/navigation'
import { Post } from '@/app/db/post.model.ts'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { isAuthorizedCheck } from '@/app/isAuthorizedCheck.ts'
import { isSessionExpiresCheck } from '@/app/isSessionExpiresCheck.ts'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('@/components/Editor'), {
    ssr: false,
})

type PostPageParams = { params: { id: number } }

const EditPost = async ({ params }: PostPageParams) => {
    const session = await getServerSession()
    if(!isAuthorizedCheck(session) && !isSessionExpiresCheck(session)) {
        return redirect('/posts')
    }

    const post: Post | null = await Post.findByPk(params.id)
    if (!post) {
        return notFound()
    }

    async function updatePost(data: FormData) {
        'use server'
        const title = data.get('title')

        // const text = { defaultValue }
        const text = data.get('text')

        if (typeof title !== 'string' || typeof text !== 'string') {
            throw new Error('Files cannot be loaded through form')
        }
        const idValue = data.get('id')
        if (typeof idValue !== 'string' || Number.isNaN(idValue)) {
            throw new Error('Invalid id')
        }
        await Post.update({ title: title, text: text }, { where: { id: Number(idValue) } })

        revalidatePath('/posts')
        redirect('/posts')
    }

    return <>
        <main className="flex flex-col">
            <div className="flex justify-center mt-40"><h1 className="p-5">Отредактируем по-новому...</h1></div>

            <div className="items-center h-screen p-5">
                <form className="h-auto max-h-none min-h-fit flex flex-col items-stretch bg-white rounded px-8 pt-6 pb-8 mb-4 opacity-75"
                    action={updatePost}>

                    <div className="mb-4">
                        <input defaultValue={post.title}
                            className="border w-full h-fit py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" name='title' placeholder="Заголовок"/>
                    </div>

                    <Editor defaultValue={post.text}/>

                    <input type="hidden" name="id" value={post.id}/>

                    <div className="flex items-center justify-center relative">
                        <button
                            className='border-2 border-my_white border-solid text-[#000] hover:text-my_l_green hover:border-2 hover:border-my_l_green mt-4 pt-1.5 pr-5 pb-1.5 pl-5 p-2 rounded'
                            type="submit">Сохранить
                        </button>
                    </div>
                </form>

                <div className="flex justify-center mb-10 p-10">
                    <Link href={'/posts'}>
                        <button
                            className='border-2 border-[#000] hover:text-my_l_blue hover:border-2 hover:border-my_l_blue py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        >Не сохранять
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    </>
}

export default EditPost
