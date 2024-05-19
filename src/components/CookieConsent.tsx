'use client'
import { useState } from 'react'
import { setConsentAccepted } from '@/app/actions/setCookiesAccepted.ts'

const CookieConsent = ({ isAccepted }: {isAccepted: boolean}) => {

    const [ showMessage, setShowMessage ] = useState(true)
    const handleAccept = async () => {
        setConsentAccepted()
        setShowMessage(false)
    }
    if (isAccepted) return <></>
    if (!showMessage) return <></>

    return (
        <div
            className="flex flex-col fixed justify-between items-center bg-amber-600 rounded pt-8 px-10 w-700 text-white text-2xl transform text-center z-20">
                Мы используем куки на этом сайте. Для продолжения, если согласны, нажмите пожалуйста "Согласен".
            <form action={handleAccept}>
                <button
                    className='my-8 justify-center items-center text-white text-2xl border-amber-600 hover:shadow-amber-900 hover:shadow-xl py-2 px-8 rounded focus:outline-none focus:shadow-outline'
                >
                        Согласен
                </button>
            </form>
        </div>
    )
}
export default CookieConsent
