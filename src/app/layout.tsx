import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import Header from '@/components/Header'

const inter = Inter({ subsets: [ 'latin' ] })

export const metadata = {
    title: 'Бейт-Иешуа | Блог',
    icons: {
        icon: 'img/favicon.svg', // /public path
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className='box-border list-none decoration-0'>
                <Header />
                <main className='mt-36 text-white flex min-h-screen flex-col items-center justify-center p-2 sm:pl-2 sm:pr-2'>{children}</main>{/*вылезаем из под header*/}
            </body>
        </html>
    )
}
