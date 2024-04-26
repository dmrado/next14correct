import PostList from '@/components/PostList.tsx'
import React from 'react'
import { getPosts } from '@/app/actions/getPosts.ts'
import { NUMBER_OF_POSTS_TO_FETCH } from '@/app/constants.ts'
import CookieConsent from '@/components/CookieConsent.tsx'
import { getConsentAccepted } from '@/app/actions/getCookiesAccepted.ts'

const Posts = async () => {
    const isAcceptedCookie = await getConsentAccepted()
    const { posts } = await getPosts(0, NUMBER_OF_POSTS_TO_FETCH)

    return (<>
        <div className='flex flex-col items-center max-w-4xl overflow-hidden my-0 mx-auto italic'>{/*container*/}

            <CookieConsent isAccepted={!!isAcceptedCookie}/>
            <img src="img/postspage/blog1.webp" alt="Photo" className="h-60 w-60 rounded-full mb-10"/>

            <h1 className='opacity-70'>Блог пастора</h1>
            <p className='text-white mt-6 px-4 indent-12 opacity-70'>Некий эпиграф к блогу Lorem ipsum dolor sit
                    amet, consectetur
                    adipisicing elit. Amet aspernatur commodi consequatur deleniti dignissimos dolor enim ex
                    excepturi facilis harum id illo ipsum laborum laudantium magnam maiores modi molestias natus
            </p>

        </div>

        <div className='max-w-2xl overflow-hidden my-0 mr-auto ml-auto'>{/*container*/}
            <div className='flex float-left p-0 mt-9'>{/*card-list*/}
                <PostList initialPosts={posts}/>
            </div>
        </div>
    </>)
}

export default Posts
