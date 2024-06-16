import React from 'react'
import CookieConsent from '@/components/CookieConsent.tsx'
import { getConsentAccepted } from '@/app/actions/getCookiesAccepted.ts'
import BlogGreeting from '@/components/BlogGreeting.tsx'
import PostList from '@/components/PostList.tsx'
import PostsPreview from '@/components/PostsPreview.tsx'

export const metadata = {
    title: 'Бейт-Иешуа | Блог'
}

const Loading = async () => {
    const isAcceptedCookie = await getConsentAccepted()
    const emptyArray = new Array(10).fill(undefined)

    return (<>
        {!isAcceptedCookie && <div className="flex justify-center mt-36">
            <CookieConsent isAccepted={!!isAcceptedCookie}/>
        </div>}
        <BlogGreeting/>
        <div className='max-w-2xl overflow-hidden my-0 mr-auto ml-auto'>{/*container*/}
            <div className='flex float-left p-0 mt-9'>{/*card-list*/}
                <div>
                    {emptyArray.map((_, idx) => (<PostsPreview post={undefined} key={idx}/>))}
                </div>
            </div>
        </div>
    </>)
}

export default Loading
