import React from 'react'
import { isAdmin } from '@/app/isAdmin.ts'
import Link from 'next/link'
import { getServerSession } from 'next-auth'

type Props = {
    title: string,
    text: string
}
export const Alert = async ({ text, title, setShowAlerts } : Props) => {
    const session = await getServerSession()
    return (
        <div className='alert'>
            <span className="alert_close_button" onClick={e => setShowAlerts(false)}>&times;</span>
            <div className="alert_title">
                <h1>{title}</h1>
            </div>
            <p className="alert_text">{text}</p>
            {isAdmin(session) &&
                <Link href={'/posts/new'}>
                    <button className='button_green'>Добавить пост</button>
                </Link>
            }
        </div>
    )
}