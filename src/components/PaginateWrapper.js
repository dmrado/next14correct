'use client'
import { useEffect, useState } from 'react'
import PostsPreview from './PostsPreview.tsx'

const PostsComponent = ({ posts }) => {
    //устанавливаем отображаемые посты
    const [ displayedPostCount, setDisplayedPostCount ] = useState(3)
    // удаляем посты сверху
    const [ removedPostCount, setRemovedPostCount ] = useState(0)

    const displayMorePosts = () => {
        setDisplayedPostCount(prevCount => prevCount + 3)
    }

    // функция для удаления постов сверху
    const removePosts = (count) => {
        setDisplayedPostCount(prevCount => prevCount - count)
        setRemovedPostCount(prevRemovedCount => prevRemovedCount + count)
    }

    //вызывем removePosts при достижении верхней границы
    const handleScroll = () => {
        if (window.pageYOffset > 2100) {
            removePosts(3) //todo Удалить 3 поста сверху, а пока удаляются снизу
        }
    }

    //прослушивание события прокрутки для удаления постов сверху
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return <>
        {posts.slice(0, displayedPostCount).map(post => PostsPreview(post))}
        <div className="flex items-center justify-center my-10">
            <button
                className='opacity-70 hover:opacity-100 py-2 px-4 border-[#000] border-2 hover:text-my_l_green hover:border-2 hover:border-my_l_green rounded'
                onClick={displayMorePosts}>Загрузить еще
            </button>
        </div>
    </>
}

export default PostsComponent