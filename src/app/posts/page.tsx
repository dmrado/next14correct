import PostList from '@/components/PostList.tsx'
import React from 'react'
import { getPosts } from '@/app/actions/getPosts.ts'
import { NUMBER_OF_POSTS_TO_FETCH } from '@/app/constants.ts'
import CookieConsent from '@/components/CookieConsent.tsx'
import { getConsentAccepted } from '@/app/actions/getCookiesAccepted.ts'
import './tailwind.css'

export const metadata = {
    title: 'Бейт-Иешуа | Блог'
}

const Posts = async () => {
    const isAcceptedCookie = await getConsentAccepted()
    const { posts } = await getPosts(0, NUMBER_OF_POSTS_TO_FETCH)

    return (<>
        <CookieConsent isAccepted={!!isAcceptedCookie}/>
        <img src="img/postspage/blog1.webp" alt="Photo" className="h-60 w-60 rounded-full mb-10"/>

        <h1 className='opacity-70'>Блог пастора</h1>
        <p className='text-white mt-6 px-4 indent-12 opacity-70 italic'>"Сила веры и духа"

            В этом месте мы собираемся, чтобы искать Божью истину,
            Вдохновляться Его словом и делиться любовью Христа.
            Пусть каждый шаг будет направлен Духом Святым,
            И каждая молитва возносится с верой и надеждой.

            Здесь мы обретаем силу для преодоления трудностей,
            И находим радость в служении друг другу.
            Пусть этот блог станет светом на нашем пути,
            И источником благословений для всех, кто ищет Бога.
        </p>
        <div className='max-w-2xl overflow-hidden my-0 mr-auto ml-auto'>{/*container*/}
            <div className='flex float-left p-0 mt-9'>{/*card-list*/}
                <PostList initialPosts={posts}/>
            </div>
        </div>
    </>)
}

export default Posts
