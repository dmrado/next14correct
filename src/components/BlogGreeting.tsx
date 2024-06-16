import HeaderButtons from '@/components/HeaderButtons.tsx'
import React from 'react'

const BlogGreeting = () => {
    return (
        <div className='flex flex-col justify-between items-center mt-32'>

            <img src="img/postspage/blog1.webp" alt="Photo" className="h-60 w-60 rounded-full mb-10"/>
            <HeaderButtons/>
            <h1 className='text-[#505050] font-bold text-4xl'>Блог пастора</h1>
            <p className='text-[#505050] font-bold text-2xl mt-6 px-12 indent-12'>

                В этом месте мы собираемся, чтобы искать Божью истину,
                вдохновляться Его словом и делиться любовью Христа.
                Пусть каждый шаг будет направлен Духом Святым,
                и каждая молитва возносится с верой и надеждой.

                Здесь мы обретаем силу для преодоления трудностей,
                и находим радость в служении друг другу.
                Пусть этот блог станет светом на нашем пути,
                и источником благословений для всех, кто ищет Бога.
            </p>
        </div>
    )
}
export default BlogGreeting
