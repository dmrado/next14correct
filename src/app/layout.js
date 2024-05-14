import '../../public/css/bem.css'
import {Dosis} from 'next/font/google'
import Footer from "../components/Footer";
import Header from "../components/Header";
import {MainProvider} from '../context/MainProvider'
import {FileProvider} from "../context/FileProvider"
import YandexMetrika from "@/src/components/YandexMetrika";


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

        <MainProvider>
            <FileProvider>
                <main>{children}</main>
            </FileProvider>
        </MainProvider>

        <Footer/>

        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

        </body>
        </html>
    )
}
