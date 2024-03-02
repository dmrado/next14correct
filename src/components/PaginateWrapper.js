'use client'
import { useState } from 'react'
import PostsPreview from './PostsPreview.tsx'
const PostsComponent = ({ posts }) => {
    const [ displayedPostCount, setDisplayedPostCount ] = useState(3)
    const displayMorePosts = () => {
        setDisplayedPostCount(prevCount => prevCount + 3)
    }
    return <>
        {posts.slice(0, displayedPostCount).map(post => PostsPreview(post))}

        <button onClick={displayMorePosts}>Load More</button>
    </>
}

export default PostsComponent