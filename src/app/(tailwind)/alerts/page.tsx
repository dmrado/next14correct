'use client'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import React, { useEffect, useState } from 'react'
import { isAdmin } from '@/app/isAdmin.ts'
import { isSessionExpired } from '@/app/isSessionExpired.ts'
import { redirect } from 'next/navigation'
import { handleAlert } from '@/app/actions/handleAlert.ts'

const AddAlert = () => {
    const [ session, setSession ] = useState(null)
    const [ title, setTitle ] = useState('')
    const [ text, setText ] = useState('')

    // todo клиентский компонент не поддерживает асинхронные запросы к серверу поэтому добавлена эта конструкция

    useEffect(() => {
        const fetchSession = async () => {
            const sessionData = await getServerSession()
            setSession(sessionData)
        }
        fetchSession()
    }, [])

    // todo разобраться чего она не работает здесь ниже наверно потому что компонент клиентский, тогда почему работает server action
    // if (!session || !isAdmin(session) || isSessionExpired(session)) {
    //     return redirect('/api/auth/signin')
    // }

    const onSubmit = (formData: FormData) => {
        handleAlert(formData)
        setTitle('')
        setText('')
    }

    return (<>
        <div className="flex justify-center">
            <h1 className="mt-6 pb-2">Создадим новый объявление...</h1>
        </div>

        <div className="items-center p-5">
            {/*<PostForm post={{ title: '', text: '' }}/>*/}
            <form className="bg-white rounded px-8 pt-6 pb-8" action={onSubmit}>
                <div className="mb-4">
                    <input
                        required
                        value={title}
                        onChange={(e) => {
                            if (e.target?.value) {
                                setTitle(e.target.value)
                            }
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" name='title' placeholder="Заголовок не менее 3 и не более 180 символов"/>
                    {/*{!isTitleValid() && <span style={{ color: 'red' }}>Error</span>}*/}
                </div>
                <div className="mb-4">
                    <textarea
                        required
                        value={text}
                        onChange={(e) => {
                            if (e.target?.value) {
                                setText(e.target.value)
                            }
                        }}
                        rows="7"
                        style={{ width: '100%' }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Введите текст здесь..."
                    />
                </div>
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
    </>)
}
export default AddAlert