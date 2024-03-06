'use client'
import React, { useEffect, useState, Fragment } from 'react'
import PostsPreview from './PostsPreview.tsx'
import { revalidatePath } from 'next/cache'

const PaginateWrapper = ({ posts }) => {

    //устанавливаем отображаемые посты
    const [ displayedPostCount, setDisplayedPostCount ] = useState(4)

    //для определения массива для удаленных превьюшек
    const [ deletedPreviews, setDeletedPreviews ] = useState([])

    //нужен стейт для направления скролла
    const [ scrollTop, setScrollTop ] = useState(false)

    //restoredPreviews
    const [ restoredPreviews, setRestoredPreviews ] = useState([])

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
                const arr = []
                arr.push(countPostsPreview[i])
                setDeletedPreviews(arr)
            }
        }
    }
    console.log('deletedPreviews', deletedPreviews)

    //вызываем displayMorePosts и removePosts при достижении прокрутки до 100px от нижней грани видимой области
    const scrollHandler = (e) => {
        console.log('scroll')
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            removePosts()
            displayMorePosts()
        }
        if (e.target.documentElement.scrollTop < 300) {
            const array = []
            array.push(deletedPreviews.slice(0, posts.length).reverse())
            setRestoredPreviews(array)
        }
    }
    console.log('restoredPreviews', restoredPreviews)

    // useEffect(() => {
    //     //todo когда получится пофиксить эту функцию, логику прокрутки вверх или вниз можно будет разделить здесь
    //     document.addEventListener('wheel', function(e) {
    //         if (e.originalEvent.wheelDelta >= 0) {
    //             setScrollTop(true)
    //             console.log('Прокрутка вверх')
    //         } else {
    //             setScrollTop(false)
    //             console.log('Прокрутка вниз')
    //         }
    //     })
    // }, [])

    //прослушивание события прокрутки для удаления постов сверху и добавления снизу
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

    return <>
        {!!scrollTop ?
            deletedPreviews.slice(0, deletedPreviews.length).map(post => (
                <React.Fragment key={post.id}>
                    <div className='posts_preview'>
                        <PostsPreview post={post}/>
                    </div>
                </React.Fragment>
            )) :
            posts.slice(0, displayedPostCount).map(post => (
                <React.Fragment key={post.id}>
                    <div className='posts_preview'>
                        <PostsPreview post={post}/>
                    </div>
                </React.Fragment>
            ))}
    </>
}

export default PaginateWrapper
