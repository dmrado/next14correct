'use client'
import {useEffect, useState} from "react";
import Link from "next/link";

import dynamic from 'next/dynamic'
import LoginModal from "../LoginModal";
import {useMainContext} from "../../context/MainProvider";
import {useFileContext} from "../../context/FileProvider";
import {BACKEND_URL} from "../../../config";

const QuillEditor = dynamic(
    () => import('./Quill'),
    {ssr: false}
)

const EditPost = ({post, updatePost}) => {
    const {token, logoutHandler} = useMainContext()
    // const {updatePostPicture} = useFileContext()
    const [editedPost, setEditedPost] = useState(null)
    const [newPostPicture, setNewPostPicture] = useState('')
    //флаговые переменные
    const [openPictureList, setOpenPictureList] = useState(false)

    const [title, setTitle] = useState(post ? post.title : '')
    const [text, setText] = useState(post?.text || '')
    const [htmlBody, setHtmlBody] = useState(post?.htmlBody || '')
    const [previewId, setPreviewId] = useState(post?.previewId || null)

    //для Alert
    const [openAlert, setOpenAlert] = useState(false)

    const updatePostPicture = async () => {
        await fetch(BACKEND_URL + `/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({...post, imgLink: newPostPicture}),
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                // loadPosts()
                // setOpenPictureList(false)
            })
            .catch(err => console.log(err))
    }
    //записывает путь к файлу картинки внутри сайта т.е. в storage
    const loadPostPictureToStorage = async (file) => {
        const formdata = new FormData();
        formdata.append("file", file);

        await fetch(BACKEND_URL + '/files/upload', {
            headers: {
                // 'Content-type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
            method: 'POST',
            body: formdata
        })
            .then(res => res.json())
            .then(data => {
                // loadPostPicturesList()
                // setOpenPictureList(false)
            })
            .catch(err => console.log(err))
    }


    return (<>
            <div className="container">
                <LoginModal/>

                <div className="one-post-banner">

                    <div className="one-post-banner">
                        <button onClick={() => updatePostPicture}>Изменить картинку</button>

                        <img
                            // src={!!imgLink ? BACKEND_URL + imgLink : postPicture} alt="Pic"
                            onClick={() => {
                                // if(!token){
                                //     return
                                // }
                                setOpenPictureList(true)
                                // setEditedPost(item)
                                setActiveImgLink(imgLink)
                            }}
                        />
                    </div>
                </div>

                <form className="form__add-post" action={formData => updatePost(formData, htmlBody, text, token)}>
                    <h1>Приступим к редактированию...</h1>

                    <div className="modal__text-field-wrapper">
                        <div className="modal__input-wrapper">
                            <input defaultValue={title}
                                   onChange={e => setTitle(e.target.value)}
                                   type="text" required name="title"
                                   className="modal__input-text"
                            />
                            <label htmlFor="staticEmail"
                                   className="modal__input-label">Заголовок</label>
                        </div>
                    </div>

                    <input type="hidden" name="id" value={post.id}/>
                    <div className="modal__text-field-wrapper">
                        <QuillEditor classmName="modal__input-text"
                                     planeValue={text}
                                     setPlaneValue={setText}
                                     value={htmlBody}
                                     setValue={setHtmlBody}
                                     onChange={e => setText(e.target.value)}
                        />
                    </div>

                    <div className="btn-blog-wrapper">
                        <button className="btn btn-blog" type="submit" value="Add post">Сохранить</button>
                        <Link href={`/posts/${post.id}`}>
                            <button className="btn btn-blog">Вернутся</button>
                        </Link>
                    </div>
                    <button className="btn btn-blog" onClick={logoutHandler}>Выйти</button>
                </form>
            </div>
        </>
    );
};

export default EditPost
