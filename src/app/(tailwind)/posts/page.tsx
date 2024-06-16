import PostList from '@/components/PostList.tsx'
import React, { Suspense } from 'react'
import { getPosts } from '@/app/actions/getPosts.ts'
import { NUMBER_OF_POSTS_TO_FETCH } from '@/app/constants.ts'
import CookieConsent from '@/components/CookieConsent.tsx'
import { getConsentAccepted } from '@/app/actions/getCookiesAccepted.ts'
import BlogGreeting from '@/components/BlogGreeting.tsx'
import Loading from '@/app/(tailwind)/posts/loading.tsx'

export const metadata = {
    title: 'Бейт-Иешуа | Блог'
}

const Posts = async () => {
    const isAcceptedCookie = await getConsentAccepted()
    const { posts } = await getPosts(0, NUMBER_OF_POSTS_TO_FETCH)

    return (
        <Suspense fallback={<Loading/>}>
            {!isAcceptedCookie && <div className="flex justify-center mt-36">
                <CookieConsent isAccepted={!!isAcceptedCookie}/>
            </div>}
            <BlogGreeting/>
            <div className='max-w-2xl overflow-hidden my-0 mr-auto ml-auto'>{/*container*/}
                <div className='flex float-left p-0 mt-9'>{/*card-list*/}
                    <PostList initialPosts={posts}/>
                </div>
            </div>
        </Suspense>)
}

export default Posts
