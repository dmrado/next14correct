'use client'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Post, PostPreview } from '@/app/db/post.model'
import PostsPreview from '@/components/PostsPreview.tsx'
import { getPosts } from '@/app/getPosts.ts'

const NUMBER_OF_POSTS_TO_FETCH = 10

export default function PostList({ initialPosts }: { initialPosts: PostPreview[] }) {
    const [ offset, setOffset ] = useState(NUMBER_OF_POSTS_TO_FETCH)
    const [ posts, setPosts ] = useState<PostPreview[]>(initialPosts)
    const { ref, inView } = useInView()

    const loadMorePosts = async () => {
        const apiPosts = await getPosts(offset, NUMBER_OF_POSTS_TO_FETCH)
        setPosts([ ...posts, ...apiPosts ])
        setOffset(offset + NUMBER_OF_POSTS_TO_FETCH)
    }

    useEffect(() => {
        if (inView) {
            loadMorePosts()
        }
    }, [ inView ])

    return (
        <div className='flex flex-col gap-3'>
            {posts.map((post) => (
                <PostsPreview key={post.id} post={post}/>
            ))}
            <div ref={ref}>
                Loading...
            </div>
            {/* <button onClick={loadMorePosts}>Load more</button> */}
        </div>
    )
}
