import React from 'react'
import Link from 'next/link'
import { Post } from '@/app/db/post.model'

const PostsPage = (post: Post) => {
   return <li key={post.id}>

      <div className="flex flex-col mt-20 h-full pt-0 pr-30 pb-0 pl-30 content-center items-center">{/*card*/}

         <div className="overflow-hidden h-full">{/*card wrapper для эффекта hover-scale картинки*/}
            <img className="transform hover:scale-150 ease-in-out duration-700 w-full h-fit rounded-lg"
               src='img/postspage/cloudsWIDE.webp' alt="Post image"/>{/*card-img*/}
         </div>

         <div
            className="flex flex-col h-52 sm:h-60 w-96 md:w-[24rem] min-h-40 -mt-4 sm:-mt-24 z-10 bottom-0 pt-2.5 pr-7 pb-2 pl-7 overflow-hidden bg-indigo-50  ease-in-out duration-300 border-t-8 border-transparent hover:border-t-8 hover:border-[#004E98]">{/*card-body*/}
            <h5 className="text-center text-blue-950 font-semibold mt-8 mb-8">
               <Link className="hover:text-orange-500 transform hover:scale-150 ease-in-out duration-300 text-2xl"
                  href={`/posts/${post.id}`}>{post.title}</Link>
            </h5>
            <p className="text-justify text-blue-950">{post.text.slice(0, 100)}...</p>

            <p className="text-end text-blue-950 bottom-2 italic">Опубликовано: {
               post.createdAt.toLocaleDateString('ru-RU', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
         </div>

      </div>

   </li>
}

export default PostsPage
