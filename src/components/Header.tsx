import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Header() {
    const session = await getServerSession()
    console.log('session', session)
    if (session && session.user) {
        return (<>
            <div
                className='flex justify-between items-center h-24 min-w-full fixed top-0 left-0 right-0 py-2 px-10 bg-black opacity-95 z-40 shadow-lg shadow-[#217c02]'>            {/* Header shadow-green*/}
                <div className='flex justify-between items-center py-2'>
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
                    </div>
                </div>
                <div className='flex flex-wrap '>
                    {!!session && !!session.user && session.user.email === process.env.USER_EMAIL &&
                            <Link href={'/posts/new'}>
                                <button
                                    className='px-6 py-2 border-[#000] border-2 hover:text-my_l_green hover:border-2 hover:border-my_l_green rounded'
                                >Добавить
                                </button>
                            </Link>
                    }

                    <Link
                        className='px-6 py-2 ml-2 border-[#000] border-2 hover:border-2 hover:border-[#D50000] hover:rounded hover:text-[#D50000]'
                        href="/api/auth/signout">Выйти</Link>
                </div>
            </div>
            <div
                className='h-24  min-w-full fixed top-0 left-0 right-1 py-2 px-12 duration-30 bg-black z-2 shadow-xl shadow-[#217c02] animate-glow'></div>
            {/*второй Header для анимации тени*/}
        </>
        )
    }
    return (<>
        <div
            className='flex justify-between items-center h-24 min-w-full fixed top-0 left-0 right-1 py-2 px-12 duration-30 bg-black z-40 '>{/*Header shadow-blue*/}
            <p className='mr-20 text-[#004E98]'>Вход не выполнен</p>
            <Link
                className='flex justify-center items-center min-w-40 hover:border hover:border-[#50d71e] hover:text-[#50d71e] py-1.5 rounded'
                href="/api/auth/signin">Войти</Link>
        </div>
        <div
            className='h-24  min-w-full fixed top-0 left-0 right-1 py-2 px-12 duration-30 bg-black z-2 shadow-xl shadow-[#004E98] animate-glow'></div>
        {/*второй Header для анимации тени*/}
    </>
    )
}