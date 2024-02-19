import { Post } from '@/app/db/post.model'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

const AddPost = async () => {
   const session = await getServerSession()

   const posts = await Post.findAll().then(res => res.map(r => r.dataValues))

   const addPost = async (formData: FormData) => {
      'use server'
      const title: string = formData.get('title') as string

      if (title === '') {
         throw new Error('Title cannot be empty')
      }
      const newPost = await Post.create({
         title,
         text: formData.get('text') as string
      })
      revalidatePath('/posts')
      redirect('/posts')
   }

   if (!!session && !!session.user && session.user.email === process.env.USER_EMAIL) {
      return (
         <main className="flex flex-col">
            <div className="mt-40">{/*вылезаем из под header*/}
               <div className="flex justify-center"><h1 className="p-5">Создадим новый пост...</h1></div>

               <div className="items-center h-screen p-5">
                  <form className="bg-white rounded px-8 pt-6 pb-8 mb-4"
                     action={addPost}>
                     <div className="mb-4">
                        <input
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="text" name='title' placeholder="Заголовок"/>
                     </div>

                     <div className="mb-6">
                        <textarea
                           className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                           rows={5} cols={50} name='text' placeholder="Текст"/>
                     </div>
                     <div className="flex items-center justify-center">
                        <button
                           className='border-2 border-my_white border-solid text-[#000] hover:text-my_l_green hover:border-2 hover:border-my_l_green pt-1.5 pr-5 pb-1.5 pl-5 p-2 rounded'
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
            </div>
         </main>
      )
   }
}

export default AddPost
