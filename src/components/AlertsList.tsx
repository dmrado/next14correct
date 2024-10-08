'use client'
import React, { useState } from 'react'
import Link from 'next/link'

type AlertsListProps = {
    id: number,
    title: string,
    text: string,
    getAlertForEdit: (id: number) => void;}
const AlertsList = ({ id, title, text, getAlertForEdit } : AlertsListProps) => {

    return (
        <div className="flex">
            <div className="flex-1 p-4 border-r border-gray-300">
                <h1 className='flex justify-center'>{title}</h1>
                <h2 className='flex justify-center'>id: {id}</h2>
                <p>{text}</p>

                {/*<Link className='flex justify-end' href={'/alerts'}>*/}

                <button className='button_blue' onClick={() => getAlertForEdit(id)}>Редактировать</button>

                {/*</Link>*/}
            </div>
        </div>
    )
}

export default AlertsList
