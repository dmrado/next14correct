import '../../public/css/bem.css'
import {Dosis} from 'next/font/google'

import YandexMetrika from "@/components/YandexMetrika";
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const inter = Dosis({subsets: ['latin']})
export const metadata = {
    icons: {
        icon: 'img/favicon.svg', // /public path
    }
}

export default function RootLayout({children}) {
    return (
        <html lang="en">

        <body className={inter.className}>

        <YandexMetrika/>

        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
                async defer>
        </script>
        <script src="https://kit.fontawesome.com/42b4beafb6.js" crossOrigin="anonymous"></script>

        <Header/>

        <main>{children}</main>

        <Footer/>

        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

        </body>
        </html>
    )
}

