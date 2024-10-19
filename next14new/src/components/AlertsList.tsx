'use client'
import React, { useState } from 'react'
import AlertForm from '@/components/AlertForm.tsx'
import { deleteAlert } from '@/app/actions/handleAlert.ts'
import { Alert } from '@/app/db/alert.model.ts'

type AlertsListProps = {
    id: number,
    title: string,
    text: string,
}
const Confirmation = ({ id, title, onClose }) => {
    return (<>
        <div className='alert'>
            <span className="alert_close_button" onClick={() => onClose()}>&times;</span>
            <div className="alert_title">
                <h1>{title}</h1>
            </div>
            <p className="alert_text">Вы удаляете объявление с названием: {title}</p>
            <button className='button_blue' onClick={() => deleteAlert(id).then(() => {onClose()})}>Подтвердить удаление</button>
            <button className='button_red' onClick={() => onClose()}>Отменить удаление</button>
        </div>
    </>)
}

const AlertsList = ({ alerts }: {alerts : Alert[]}) => {
    const [ editId, setEditId ] = useState(null)
    const [ deleteConfirmationId, setDeleteConfirmationId ] = useState<number | null>(null)

    const hideAlertForm = () => {
        setEditId(null)
    }

    const deleteConfirmationTitle = deleteConfirmationId ? alerts.find(alert => alert.id === deleteConfirmationId)?.title ?? '' : ''

    return (
        <div className="flex">
            { deleteConfirmationId && <Confirmation id={deleteConfirmationId} title={deleteConfirmationTitle} onClose={() => setDeleteConfirmationId(null) }/> }
            <ul>
                {alerts.map(alert => (
                    alert.id === editId
                        ? <AlertForm key={alert.id} id={alert.id} title={alert.title} text={alert.text} startDate={alert.startDate} endDate={alert.endDate} onSubmit={hideAlertForm}/>
                        : <li key={alert.id}>
                            <div className="flex-1 p-4 border-r border-gray-300">
                                <h1 className='flex justify-center'>{alert.title}</h1>
                                <h2 className='flex justify-center'>id: {alert.id}</h2>
                                <p>{alert.text}</p>

                                <button className='button_blue' onClick={() => setEditId(alert.id)}>Редактировать </button>

                                <button className='button_red' onClick={() => setDeleteConfirmationId(alert.id)}>Удалить</button>
                            </div>
                        </li>
                ))}
            </ul>

        </div>
    )
}

export default AlertsList
