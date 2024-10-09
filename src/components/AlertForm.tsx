'use client'
import React, { useEffect, useState } from 'react'

type AlertForm = {
    id: number,
    title: string;
    text: string;
    HandleSubmit: (formData: FormData) => Promise<void>;
}

const AlertForm = ({ HandleSubmit, id, title, text }: AlertForm) => {
    const [ editedTitle, setEditedTitle ] = useState(title ? title : '')
    const [ editedText, setEditedText ] = useState(text ? text : '')

    return (
        <form className="edit bg-white rounded px-8 pt-6 pb-8" action={HandleSubmit}>
            <div className="mb-4">
                <input
                    value={editedTitle}
                    onChange={(e) => {
                        if (e.target?.value) {
                            setEditedTitle(e.target.value)
                        }
                    }}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" name='title' placeholder="Заголовок не менее 3 и не более 180 символов"/>
            </div>
            <div className="mb-4">
                <textarea
                    value={editedText}
                    onChange={(e) => {
                        if (e.target?.value) {
                            setEditedText(e.target.value)
                        }
                    }}
                    name='text'
                    rows={7}
                    style={{ width: '100%' }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Введите текст здесь..."
                />
            </div>
            <div className="row">
                <div>
                    <label htmlFor="start">Дата начала:</label>

                    <input type="date" id="start" name="start_date"/>
                </div>

                <div>
                    <label htmlFor="start">Дата окончания:</label>

                    <input type="date" id="start" name="end_date"/>
                </div>
            </div>

            <input hidden type="number" name="id" value='' readOnly/>

            <div className="flex items-center justify-center mt-2">
                <button type='submit' className='button_green'>Записать</button>
            </div>
        </form>
    )
}

export default AlertForm