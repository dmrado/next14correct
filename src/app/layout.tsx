// import { Inter } from 'next/font/google'
// import './tailwind.css'
// import React from 'react'
// import Header from '@/components/Header'
//
// const inter = Inter({ subsets: [ 'latin' ] })
//
// export const metadata = {
//     title: 'Бейт-Иешуа | Блог',
//     icons: {
//         icon: 'img/favicon.svg', // /public path
//     }
// }
//
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//     return (
//         <html lang="en" className='light'>
//             <body className='bg-black light:bg-white box-border list-none decoration-0'>
//                 {/*<Header />*/}
//                 <main className='mt-36 text-white min-h-screen justify-center p-2 sm:pl-2 sm:pr-2'>
//                     <div className='flex flex-col items-center max-w-4xl overflow-hidden my-0 mx-auto'>{/*container*/}
//                         {children}
//                     </div>
//                 </main>{/*вылезаем из под header*/}
//             </body>
//         </html>
//     )
// }

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

