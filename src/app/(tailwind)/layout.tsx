// import '../../public/css/bem.css'
import { Dosis } from 'next/font/google'

import YandexMetrika from '@/components/YandexMetrika'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './tailwind.css'
import '@/bem.css'

const inter = Dosis({ subsets: [ 'latin' ] })
export const metadata = {
    icons: {
        icon: 'img/favicon.svg', // /public path
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="ru">

            <body className={'flex flex-col min-h-screen ' + inter.className}>

                <YandexMetrika/>

                <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
                    async defer>
                </script>

                <Header/>

                <main className="flex-grow">{children}</main>

                <Footer/>

            </body>
        </html>
    )
}
