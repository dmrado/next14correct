import { revalidatePath } from 'next/cache'
import { notFound, redirect } from 'next/navigation'
import { Post } from '@/app/db/post.model.ts'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { isAuth } from '@/app/isAuth.ts'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('@/components/Editor'), {
    ssr: false,
})

type PostPageParams = { params: { id: number } }

const EditPost = async ({ params }: PostPageParams) => {
    const session = await getServerSession()
    isAuth(session)
    const post: Post | null = await Post.findByPk(params.id)

    if (!post) {
        return notFound()
    }

    async function updatePost(data: FormData) {
        'use server'
        const title = data.get('title')

        // const text = { defaultValue }
        const text = data.get('my_hidden_html')

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
                <form className="min-h-fit bg-white rounded px-8 pt-6 pb-8 mb-4 opacity-75"
                    action={updatePost}>

                    <div className="mb-4">
                        <input defaultValue={post.title}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" name='title' placeholder="Заголовок"/>
                    </div>

                    <div className="mb-6 pt-4 h-12 z-6">
                        <Editor defaultValue={post.text}/>
                        {/*<textarea defaultValue={post.text}*/}
                        {/*    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
                        {/*    rows={5} cols={50} name='text' placeholder="Текст"/>*/}
                    </div>
                    <div className="flex items-center justify-center">

                        <input type="hidden" name="id" value={post.id}/>
                        <input type="hidden" id='hidden_html' name="my_hidden_html" value='aaa'/>

                        <button
                            className='mt-12 border-2 border-my_white border-solid text-[#000] hover:text-my_l_green hover:border-2 hover:border-my_l_green pt-1.5 pr-5 pb-1.5 pl-5 p-2 rounded'
                            type="submit">Записать
                        </button>
                    </div>
                </form>

                <div className="flex justify-center mb-10 p-10">
                    <Link href={'/posts'}>
                        <button
                            className='border-2 border-[#000] hover:text-my_l_blue hover:border-2 hover:border-my_l_blue py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        >Вернуться
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    </>
}

export default EditPost
