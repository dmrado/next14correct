'use client'
import {useState} from 'react'
import {setConsentAccepted} from '@/app/actions/setCookiesAccepted.ts'
import Link from 'next/link'

const CookieConsent = ({isAccepted}: { isAccepted: boolean }) => {

    const [showMessage, setShowMessage] = useState(true)
    const handleAccept = async () => {
        await setConsentAccepted()
        setShowMessage(false)
    }
    if (isAccepted) return <></>
    if (!showMessage) return <></>

    return (
        <div
            className="flex flex-col fixed bottom-0 left-0 right-0 mx-auto z-50 shadow-2xl
        w-11/12      // На мобильных: Занимаем 91.6% ширины экрана
        max-w-lg     // Максимальная ширина на всех экранах (xl = 36rem/576px)
        md:max-w-lg  // На средних экранах max 32rem/512px

        // Стиль:

        bg-gray-600 rounded-lg p-4 text-white text-xs text-left space-y-3">
            <h3 className="flex justify-center text-[16px] font-bold">Использование файлов cookie</h3>

            <div className="text-[14px]">
                Наш сайт использует файлы cookie для улучшения вашего опыта, персонализации контента и сбора статистики.

                Эти файлы включают собственные данные и данные сторонних сервисов: Google (зарегистрированный товарный знак Google LLC) и Яндекс (зарегистрированный товарный знак Яндекса). Мы применяем Google reCAPTCHA для защиты сайта от спама и злоумышленников, подтверждая, что вы человек, а не программа. Мы используем Яндекс.Карты для предоставления удобных карт, местоположений, адресов и маршрутов.

                Как разработчик, мы также используем cookie для сохранения вашего выбора об их использовании. Подробная информация об обработке данных доступна в нашей:
            </div>
            <Link href={'/policy'}><u>Политике конфиденциальности в отношении персональных данных</u></Link>

            <div className="text-[12px]">
                Продолжая использовать наш сайт, вы подтверждаете свое согласие с использованием указанных файлов cookie в соответствии с нашей Политикой.
            </div>
            <form className='flex justify-center' action={handleAccept}>
                <button className='btn btn-blog' style={{marginRight: '21px'}}>Согласен</button>
            </form>
        </div>
    )
}
export default CookieConsent
