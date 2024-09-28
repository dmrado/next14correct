import React, { useEffect, useState } from 'react'
import { isAdmin } from '@/app/isAdmin.ts'
import Link from 'next/link'
import { getServerSession } from 'next-auth'

type Props = {
    title: string;
    text: string;
    handleCloseModal: () => void;
};

export const Alert = ({ text, title, handleCloseModal }: Props) => {
    const [ session, setSession ] = useState(null)

    useEffect(() => {
        const fetchSession = async () => {
            const sessionData = await getServerSession()
            setSession(sessionData)
        }
        fetchSession()
    }, [])

    return (
        <div className='alert'>
            <span className="alert_close_button" onClick={handleCloseModal}>&times;</span>
            <div className="alert_title">
                <h1>{title}</h1>
            </div>
            <p className="alert_text">{text}</p>
            {/*{isAdmin(session) &&*/}
            <Link href={'/posts/new'}>
                <button className='button_green'>Добавить пост</button>
            </Link>
            {/*}*/}
        </div>
    )
}
