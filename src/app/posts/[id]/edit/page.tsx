import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Post } from '@/app/db/post.model.ts'
import Link from 'next/link'
import Custom404 from '@/app/404.js'
import React from 'react'
import { getServerSession } from 'next-auth'

type PostPageParams = { params: { id: number } }

const EditPost = async ({ params }: PostPageParams) => {
   const session = await getServerSession()
   const post : Post | null = await Post.findByPk(params.id)
   if (post === null) {
      // todo: return 404 status
      return
   }

   async function updatePost (data: FormData) {
      'use server'
      const title = data.get('title')
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

   if (!!session && !!session.user && session.user.email === process.env.USER_EMAIL) {
      return <>
         <main className="flex flex-col">
            <div className="flex justify-center mt-40"><h1 className="p-5">Отредактируем по-новому...</h1></div>

            <div className="items-center h-screen p-5">
               <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 ml-20 mr-20"
                  action={updatePost}>

                  <div className="mb-4">
                     <input defaultValue={post.title}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" name='title' placeholder="Заголовок"/>
                  </div>

                  <div className="mb-6">
                     <textarea defaultValue={post.text}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows={5} cols={50} name='text' placeholder="Текст"/>
                  </div>
                  <div className="flex items-center justify-center">

                     <input type="hidden" name="id" value={post.id}/>

                     <button
                        className="border-solid border-2 border-[#50d71e] pt-1.5 pr-5 pb-1.5 pl-5 hover:bg-[#50d71e] p-2 rounded"
                        type="submit">Записать
                     </button>
                  </div>
               </form>

               <div className="flex justify-center mb-10 p-10">
                  <Link href={'/posts'}>
                     <button
                        className="hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Вернуться
                     </button>
                  </Link>
               </div>
            </div>
         </main>
      </>
   }
}

export default EditPost
