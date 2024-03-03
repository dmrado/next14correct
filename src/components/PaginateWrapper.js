'use client'
import { useEffect, useState } from 'react'
import PostsPreview from './PostsPreview.tsx'

const PaginateWrapper = ({ posts }) => {
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

    //вызываем displayMorePosts и removePosts при достижении прокрутки до 100px от нижней грани видимой области
    const scrollHandler = (e) => {
        console.log('scroll')
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            // removePosts(3) //todo Удалить 3 поста сверху, а пока удаляются снизу
            displayMorePosts()
        }
    }

    //прослушивание события прокрутки для удаления постов сверху
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

    return <>
        {posts.slice(0, displayedPostCount).map(post => PostsPreview(post))}
        <div className="flex items-center justify-center my-10">
            {/*<button*/}
            {/*    className='opacity-70 hover:opacity-100 py-2 px-4 border-[#000] border-2 hover:text-my_l_green hover:border-2 hover:border-my_l_green rounded'*/}
            {/*    onClick={displayMorePosts}>Загрузить еще*/}
            {/*</button>*/}
        </div>
    </>
}

export default PaginateWrapper
