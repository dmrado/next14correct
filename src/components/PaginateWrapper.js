'use client'
import { useEffect, useState } from 'react'
import PostsPreview from './PostsPreview.tsx'
import { revalidatePath } from 'next/cache'

const PaginateWrapper = ({ posts }) => {
    //При передаче данных из Компонента Сервера в Клиентский Компонент в Next.js от Vercel важно убедиться, что вы передаете только простые объекты JavaScript, а не объекты с пользовательскими методами, такими как toJSON(). Компоненты Сервера от Vercel не поддерживают передачу объектов с пользовательскими методами напрямую в Клиентские Компоненты.  Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props. Все равно не исчезла
    const simplifiedPostObject = posts.map(post => ({
        id: post.id,
        title: post.title,
        preview: post.preview,
        createdAt: post.createdAt
    }))
    console.log('post on PaginateWrapper', posts)

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
            removePosts()
            displayMorePosts()
        }
        if (e.target.documentElement.scrollTop < 300) {
            window.location.reload()
            // Удаляем последний пост из массива posts
            // const updatedPosts = posts.slice(0, posts.length - 1)
        }

    }

    //прослушивание события прокрутки для удаления постов сверху и добавления снизу
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

    return <>
        {simplifiedPostObject.slice(0, displayedPostCount).map(post =>
            <div className='posts_preview' key={post.id}>
                <PostsPreview post={post}/>
            </div>
        )}
    </>
}

export default PaginateWrapper
