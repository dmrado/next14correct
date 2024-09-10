import '@/bem.css'
import { Dosis } from 'next/font/google'
import React, { ReactNode } from 'react'

import YandexMetrika from '@/components/YandexMetrika'
import Header from '@/components/Header.tsx'
import Footer from '@/components/Footer'
import { getConsentAccepted } from '@/app/actions/getCookiesAccepted.ts'
import CookieConsent from '@/components/CookieConsent.tsx'
import { Alert as AlertModel } from '@/app/db/alert.model.ts'

const inter = Dosis({ subsets: [ 'latin' ] })
export const metadata = {
    icons: {
        icon: 'img/favicon.svg', // /public path
    }
}

export default async function RootLayout({ children }: {children: ReactNode}) {
    const isAcceptedCookie = await getConsentAccepted()
    const alert = await AlertModel.findByPk(1)
    console.log('alert', alert?.id, alert?.title, alert?.text)
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

                <Header alertText={alert?.text} alertTitle={alert?.title}/>

                <main>{children}</main>

                <Footer/>

            </body>
        </html>
    )
}
