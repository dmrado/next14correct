import { Dosis } from 'next/font/google'

import YandexMetrika from '@/components/YandexMetrika'
import Header from '@/components/Header.tsx'
import Footer from '@/components/Footer'
import './tailwind.css'
import React, { ReactNode } from 'react'
import { getAlerts } from '@/actions/getAlerts.ts'

const inter = Dosis({ subsets: [ 'latin' ] })
export const metadata = {
    icons: {
        icon: 'img/favicon.svg', // /public path
    }
}

export default async function RootLayout({ children }: {children: ReactNode}) {
    const alerts = await getAlerts()
    return (
        <html lang="ru">

            <body className={'flex flex-col min-h-screen ' + inter.className}>

                <YandexMetrika/>

                <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
                    async defer>
                </script>

                <Header alerts={alerts}/>

                <main className="flex-grow">{children}</main>

                <Footer/>

            </body>
        </html>
    )
}
