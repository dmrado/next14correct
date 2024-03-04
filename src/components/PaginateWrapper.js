'use client'
import { useEffect, useState } from 'react'
import PostsPreview from './PostsPreview.tsx'
import { revalidatePath } from 'next/cache'

const PaginateWrapper = ({ posts }) => {
    //устанавливаем отображаемые посты
    const [ displayedPostCount, setDisplayedPostCount ] = useState(4)

    const displayMorePosts = () => {
        setDisplayedPostCount(prevCount => prevCount + 3)
    }

    const removePosts = () => {
        // Получаем все превьюшки
        const countPostsPreview = document.querySelectorAll('.posts_preview')
        // если на странице три и менее превьюшки то не удаляем
        if (countPostsPreview.length <= 3) {
            window.location.reload()
        }
        // Если на странице более трех превьюшек
        if (countPostsPreview.length >= 3) {
            // Удаляем первые три
            for (let i = 0; i < 3; i++) {
                countPostsPreview[i].remove()
            }
        }
    }

    //вызываем displayMorePosts и removePosts при достижении прокрутки до 100px от нижней грани видимой области
    const scrollHandler = (e) => {
        console.log('scroll')
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            removePosts(3)
            displayMorePosts()
        }
    }

    //прослушивание события прокрутки для удаления постов сверху и добавления снизу
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

    return <>
        {posts.slice(0, displayedPostCount).map(post =>
            <div className='posts_preview' key={post.id}>
                <PostsPreview post={post}/>
            </div>
        )}
    </>
}

export default PaginateWrapper
