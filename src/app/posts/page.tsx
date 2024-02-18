import Link from 'next/link'
import { Post } from '../db/post.model'

import { revalidatePath } from 'next/cache'
import PostsPage from '@/components/PostsPage'
import React from 'react'
import { getServerSession } from 'next-auth'

const Posts = async () => {
   const session = await getServerSession()
   console.log('session появления кнопки добавить пост', session)

   const posts = await Post.findAll({ order: [ [ 'updatedAt', 'DESC' ] ] })
   //response мапим что бы получить объект секвелайз, а не огромной модели данных
   // .then(res => res.map(r => r.dataValues))
   // console.log(posts)

   const formData = new FormData()
   // formData.append('id', post.id);

   // const deletePost = async (id: number) => {
   //     "use server"
   //     // const {id} = Object.fromEntries(formData)
   //     console.log('formData', formData)
   //
   //     // const id = formData.get('id')
   //     await Post.destroy({
   //         where: {id}
   //     })
   //     revalidatePath('/posts')
   // }

   return (
      <main className="flex min-h-screen flex-col items-center justify-between sm:pl-2 sm:pr-2">
         <div className='max-w-4xl overflow-hidden mt-0 mr-auto mb-0 ml-auto italic'>{/*container*/}
            <div className="flex flex-col justify-center content-center items-center mt-40">{/*blog-header*/}
               <img src="img/postspage/blog1.webp" alt="Photo" className="h-60 w-60 rounded-full mb-10"/>

               <h1>Блог пастора</h1>
               <p className='mt-6 px-4 indent-12'>Некий эпиграф к блогу Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur commodi consequatur deleniti dignissimos dolor enim ex excepturi facilis harum id illo ipsum laborum laudantium magnam maiores modi molestias natus necessitatibus odit quam quia quod repellendus, reprehenderit saepe sit tempora tenetur ut, velit voluptatibus. Ab accusantium ad atque consequatur ea ex illo illum laudantium nesciunt nisi ratione repudiandae sapiente similique, vel vitae. At eaque excepturi libero minima, mollitia nesciunt nisi perspiciatis voluptate. Ab ad amet animi, autem blanditiis culpa cum cupiditate deleniti dolore doloremque eos est ex laborum laudantium magnam maiores natus nulla obcaecati provident quos, reiciendis sint tempore, ut!</p>

               {!!session && !!session.user && session.user.email === process.env.USER_EMAIL &&
                  <Link className="mt-6" href={'/posts/new'}>
                     <button>Новый пост</button>
                  </Link>
               }

            </div>
         </div>

         <div className='max-w-2xl overflow-hidden mt-0 mr-auto mb-0 ml-auto'>{/*container*/}
            <div className='flex float-left p-0 mt-9'>{/*card-list*/}

               <ul>
                  {posts.map(post => PostsPage(post)

                     // <li key={post.id} className="p-5 mb-3 text-justify hover:bg-[#004E98] rounded-md">
                     //     <Link href={`posts/${post.id}`}>
                     //         {/*todo правильное ли здесь решения дважды использовать Link что бы вывести кнопку удалить из под него?*/}
                     //         <div className="flex justify-between">
                     //             <h2 className="p-2 text-justify text-2xl">{post.title}</h2>
                     //             <p className="p-2 text-justify">Post id: {post.id}</p>
                     //         </div>
                     //     </Link>
                     //     <div className="flex justify-between">
                     //         <Link href={`posts/${post.id}`}>
                     //             <p className="p-2 text-justify mr-10">{post.text}</p>
                     //         </Link>
                     //
                     //         {/*<form action={deletePost}>*/}
                     //         {/*    <input type="hidden" name={post.id}/>*/}
                     //         {/*    <button type="submit"*/}
                     //         {/*            className="max-h-12 border-dotted border-2 border-red-500 bg-none hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">*/}
                     //         {/*            onClick=*/}
                     //         {/*        Удалить*/}
                     //         {/*    </button>*/}
                     //         {/*</form>*/}
                     //

                     //
                     //     </div>
                     // </li>
                  )}
               </ul>
            </div>
         </div>

      </main>
   )
}

export default Posts
