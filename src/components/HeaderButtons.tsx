import Image from 'next/image'
import Link from 'next/link'
import {getServerSession} from 'next-auth'
import React from 'react'

export default async function HeaderButtons() {
    const session = await getServerSession()
    if (session && session.user) {
        return (<>
                <div
                    className='flex justify-between items-center h-24 fixed top-16 left-0 right-0 py-2 px-10 '>            {/* Header shadow-green*/}
                {/*    <div className='flex justify-between items-center py-2'>*/}
                <p className='mr-2 sm:px-2 sm:flex-nowrap'>{session.user.name}</p>
                <div className='mr-4'>
                    {
                        !!session.user.image && !!session.user.name &&
                        <Image
                            src={session.user.image}
                            alt={session.user.name}
                            width={52}
                            height={52}
                            className='rounded-full'
                        />
                    }
                    {/*    </div>*/}
                </div>

                <div className='flex flex-wrap '>
                    {!!session && !!session.user && session.user.email === process.env.USER_EMAIL &&
                        <Link href={'/posts/new'}>
                            <button className='button_green'>Добавить пост</button>
                        </Link>
                    }

                    {/*<Link href={'/'}>*/}
                    {/*    <button*/}
                    {/*        className='text-white opacity-70 hover:opacity-100 py-2 px-4 border-2 border-[#000] hover:text-my_l_blue hover:border-2 hover:border-my_l_blue  rounded focus:outline-none focus:shadow-outline'*/}
                    {/*    >На сайт*/}
                    {/*    </button>*/}
                    {/*</Link>*/}

                    <Link href={'/api/auth/signout'}>
                        <button className='button_red'>Выйти из аккаунта</button>
                    </Link>

                </div>
                </div>
                {/*<div*/}
                {/*    className='h-24  min-w-full fixed top-0 left-0 right-1 py-2 px-12 duration-30 bg-black z-2 shadow-xl shadow-header_green animate-glow'></div>*/}
                {/*второй Header для анимации тени*/}
            </>
        )
    }
    return (<>
            {/*<div*/}
            {/*    className='flex justify-between items-center h-24 min-w-full fixed top-0 left-0 right-1 py-2 px-12 duration-30 bg-black z-40'>*/}
            {/*Header shadow-blue*/}
            {/*<p className='mr-20 text-[#004E98]'>Вход не выполнен</p>*/}

            {/*<Link href={'/'}>*/}
            {/*    <button*/}
            {/*        className='text-white opacity-70 hover:opacity-100 py-2 px-4 border-2 border-[#000] hover:text-my_l_blue hover:border-2 hover:border-my_l_blue rounded focus:outline-none focus:shadow-outline'*/}
            {/*    >На сайт*/}
            {/*    </button>*/}
            {/*</Link>*/}

            <Link href={'/api/auth/signin'}>
               <button className='button_green'>Войти</button>
            </Link>
            {/*</div>*/}
            {/*<div*/}
            {/*    className='h-24 min-w-full fixed top-0 left-0 right-1 py-2 px-12 duration-30 bg-black z-2 shadow-xl shadow-[#004E98] animate-glow'></div>*/}
            {/*второй Header для анимации тени*/}
        </>
    )
}
