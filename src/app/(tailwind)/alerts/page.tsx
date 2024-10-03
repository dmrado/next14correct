import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { isAdmin } from '@/app/isAdmin.ts'
import { isSessionExpired } from '@/app/isSessionExpired.ts'
import { redirect } from 'next/navigation'
import { handleAlert } from '@/app/actions/handleAlert.ts'
import { getAlerts } from '@/app/actions/getAlerts.ts'
import React from 'react'
import AlertsList from '@/components/AlertsList.tsx'

const AddAlert = async () => {
    const alerts = await getAlerts()
    const session = await getServerSession()

    if (!session || !isAdmin(session) || isSessionExpired(session)) {
        return redirect('/api/auth/signin')
    }

    const onSubmit = async (formData: FormData) => {
        'use server'
        await handleAlert(formData)
    }

    return (<>
        <div className="flex">
            <div className="flex-1 p-4">
                {/* Первая колонка - список alerts */}
                <div className="flex justify-center">
                    <h1 className="mt-6 pb-2">Список объявлений</h1>
                </div>

                <div className="flex-1 p-4 border-r border-gray-300">
                    {alerts.map((alert) =>
                        <AlertsList key={alert.id} title={alert.title} text={alert.text}/>
                    )}
                </div>
            </div>
            {/* Вторая колонка - форма для добавления нового alert */}
            <div className="flex-1 p-4">
                <div className="flex justify-center">
                    <h1 className="mt-6 pb-2">Создадим новое объявление...</h1>
                </div>

                <div className="items-center p-5">
                    <form className="edit bg-white rounded px-8 pt-6 pb-8" action={onSubmit}>
                        <div className="mb-4">
                            <input
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" name='title' placeholder="Заголовок не менее 3 и не более 180 символов"/>
                        </div>
                        <div className="mb-4">
                            <textarea
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
                    <div className="flex justify-center p-10">
                        <Link href={'/posts'}>
                            <button className='button_blue'>Вернуться</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default AddAlert