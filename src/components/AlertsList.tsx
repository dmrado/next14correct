'use client'
import React, { useState } from 'react'
import Link from 'next/link'

type AlertsListProps = {
    title: string,
    text: string
}
const AlertsList = ({ title, text } : AlertsListProps) => {

    return (
        <div className="flex">
            <div className="flex-1 p-4 border-r border-gray-300">
                <h1 className='flex justify-center'>{title}</h1>
                <p>{text}</p>
                {/*todo запустиь функцию поиска алерта по id и попадание его в форму справа*/}
                <Link className='flex justify-end' href={'/alerts'}>
                    <button className='button_blue'>Редактировать</button>
                </Link>
            </div>
        </div>
    )
}

export default AlertsList
