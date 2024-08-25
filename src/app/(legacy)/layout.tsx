import '@/bem.css'
import { Dosis } from 'next/font/google'
import React, { ReactNode } from 'react'

import YandexMetrika from '@/components/YandexMetrika'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getConsentAccepted } from '@/app/actions/getCookiesAccepted.ts'
import CookieConsent from '@/components/CookieConsent.tsx'

const inter = Dosis({ subsets: [ 'latin' ] })
export const metadata = {
    icons: {
        icon: 'img/favicon.svg', // /public path
    }
}

export default async function RootLayout({ children }: {children: ReactNode}) {
    const isAcceptedCookie = await getConsentAccepted()

    return (
        <html lang="ru">

            <body className={inter.className}>

                <YandexMetrika/>

                <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
                    async defer>
                </script>
                {!isAcceptedCookie && <div className="flex justify-center mt-36">
                    <div className='cookie-consent-information'>
                        <CookieConsent
                            isAccepted={!!isAcceptedCookie}
                        />
                    </div>
                </div>}

                <Header/>

                <main>{children}</main>

                <Footer/>

            </body>
        </html>
    )
}
