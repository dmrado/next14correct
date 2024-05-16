import { Inter } from 'next/font/google'
import './tailwind.css'
import React from 'react'
import HeaderPosts from '@/components/HeaderPosts'

const inter = Inter({ subsets: [ 'latin' ] })

export const metadata = {
    title: 'Бейт-Иешуа | Блог',
    icons: {
        icon: 'img/favicon.svg', // /public path
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className='light'>
        <body className='bg-black light:bg-white box-border list-none decoration-0'>
        <HeaderPosts/>
        <main className='mt-36 text-white min-h-screen justify-center p-2 sm:pl-2 sm:pr-2'>
            <div className='flex flex-col items-center max-w-4xl overflow-hidden my-0 mx-auto'>{/*container*/}
                {children}
            </div>
        </main>{/*вылезаем из под header*/}
        </body>
        </html>
    )
}