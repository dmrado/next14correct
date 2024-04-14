'use client'
import {useState} from 'react'
import {cookies} from "next/headers"

const CookieConsent = (
    // {cookie}
) => {
    const [showMessage, setShowMessage] = useState(true)
    const [cookieConsent, setCookieConsent] = useState('')


    const handleAccept = () => {
        setShowMessage(false)
        // setCookieConsent(cookie)
    }

    return (
        <>
            {showMessage &&
                // !cookie &&
                (
                <div
                    className="flex flex-col fixed justify-between items-center bg-amber-600 rounded pt-8 px-10 w-700 text-xl transform text-center z-20">
                    Мы используем куки на этом сайте. Для продолжения, если согласны, нажмите пожалуйста "Согласен".
                    <button
                        className='my-8 justify-center items-center text-white border-amber-600 hover:shadow-amber-900 hover:shadow-xl py-2 px-8 rounded focus:outline-none focus:shadow-outline'
                        onClick={handleAccept}>
                        Согласен
                    </button>
                </div>
            )}
        </>
    )
}
export default CookieConsent
