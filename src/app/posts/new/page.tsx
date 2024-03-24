'use client'
import path from 'path'
import fs from 'fs'
import {Post} from '@/app/db/post.model'
import {revalidatePath} from 'next/cache'
import Link from 'next/link'
import {redirect} from 'next/navigation'
import {getServerSession} from 'next-auth'
import {isAuthorized} from '@/app/isAuthorized.ts'
import {isSessionExpired} from '@/app/isSessionExpired.ts'
import React from 'react'
import dynamic from 'next/dynamic'
import sharp from 'sharp'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {addPost} from "@/app/addPost.ts"


const Editor = dynamic(() => import('@/components/Editor'), {
    ssr: false,
})


const AddPost = async () => {
    const session = await getServerSession()

    if (!session || !isAuthorized(session) || isSessionExpired(session)) {
        return redirect('/posts')
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Для сохранения поста нужно заполнить заголовок'),
        // text: Yup.string().required('Нужно написать статью'),
    })


    return (
        <main className="flex flex-col">
            <div className="mt-40">{/*вылезаем из под header*/}
                <div className="flex justify-center"><h1 className="p-5">Создадим новый пост...</h1></div>

                <div className="items-center h-screen p-5">
                    <Formik className="bg-white rounded px-8 pt-6 pb-8 mb-4"
                            //todo странная ошибка при наличии null  в строк post_picture: File | null
                          initialValues={{
                              title: '',
                              text: '',
                              // post_picture:  File | null
                          }}
                          validationSchema={validationSchema}
                            //todo у Formik onSubmit - обязательный параметр
                          onSubmit={addPost}
                          // action={addPost}
                    >
                        {({ errors, touched }) => (
                            <Form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <Field
                                        name="title"
                                        type="text"
                                        placeholder="Заголовок не более 180 символов"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.title && touched.title && <div>{errors.title}</div>}
                                </div>

                                <Editor/>

                                <label htmlFor="title" className="form-label">Выбор картинки</label>

                                <input type='file' name='post_picture'/>

                                <div className="flex items-center justify-center">
                                    <button
                                        className='border-2 border-my_white border-solid text-[#000] hover:text-my_l_green hover:border-2 hover:border-my_l_green pt-1.5 pr-5 pb-1.5 pl-5 p-2 rounded'
                                        type="submit">Записать
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className="flex justify-center mb-10 p-10">
                        <Link href={'/posts'}>
                            <button
                                className='text-white border-2 border-[#000] hover:text-my_l_blue hover:border-2 hover:border-my_l_blue py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                            >Вернуться
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AddPost
