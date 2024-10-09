'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import AlertForm from '@/components/AlertForm.tsx'

type AlertsListProps = {
    id: number,
    title: string,
    text: string,
}
const AlertsList = ({ alerts } : any) => {
    const [ editId, setEditId ] = useState(null)
    // const [ editText, setEditText ] = useState('')
    return (
        <div className="flex">
            <h1 className='flex justify-center'>{editId}</h1>
            <ul>
                {alerts.map(alert => (
                    alert.id === editId
                        ? <AlertForm key={alert.id} id={alert.id} title={alert.title} text={alert.text}/>
                        : <li key={alert.id}>
                            <div className="flex-1 p-4 border-r border-gray-300">
                                <h1 className='flex justify-center'>{alert.title}</h1>
                                <h2 className='flex justify-center'>id: {alert.id}</h2>
                                <p>{alert.text}</p>

                                {/*<Link className='flex justify-end' href={'/alerts'}>*/}

                                <button className='button_blue' onClick={() => setEditId(alert.id)}>Редактировать
                                </button>

                                {/*</Link>*/}
                            </div>
                        </li>
                ))}
            </ul>

        </div>
    )
}

export default AlertsList
