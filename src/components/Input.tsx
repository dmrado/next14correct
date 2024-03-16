'use client'
import { uploadFile } from '@/app/actions/uploadFile.ts'

import {useEffect, useState} from "react";
import UiModal from "./uiModal"

export const Input = () => {
    // для картинки поста
    const [newPostPicture, setNewPostPicture] = useState('')
    //массив картинок из модели File
    const [postPicturesList, setPostPicturesList] = useState(null)
    const [postPicturesCount, setPostPicturesCount] = useState(null)
    //актуальная ссылка на файл для записи в модель Post
    const [activeImgLink, setActiveImgLink] = useState('')
    // флаг модального окна картинок
    const [openModalPicture, setOpenModalPicture] = useState(false)

    const loadPostPicturesList = () => {
        //получаем картинки со всеми атрибутами из storage
        fetch(BACKEND_URL + `/files`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                // Authorization: `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.items){
                    return
                }
                //получаем картинки со свеми атрибутами из storage, далее в PostPicturesListModal сохраним картинку в модель Post
                setPostPicturesList(data.items)
                //postPicturesCount - припасен для пагинации картинок если их будет через чур
                setPostPicturesCount(data.count)
                console.log("data.items in loadPostPicturesList", data.items)
            })
            .catch(err => console.log(err))
    }

    const loadPost = (id) => {
        console.log('id поста из router.query в функции loadPost', id)
        fetch(BACKEND_URL + `/posts/${id}`)
            .then(res => res.json())
            .then(data => setActivePost(data.item))
            .catch(err => console.log(err))
    }

    //для получения постов в useEffect и загрузки submitCreatePost
    const loadPosts = (activePage = 0) => {
        const skip = (activePage) * elementsCount
        fetch(BACKEND_URL + `/posts?skip=${skip}&limit=${elementsCount}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data.items)
                setPostsCount(data.count)
            })
            .catch(err => console.log(err))
    }

    const {
        editedPost,
    } = useMainContext()



    //меняет imgLink на ссылку на storage и сохраняет ссылку на картинку для поста с конкретным id
    const updatePostPicture = async () => {
        await fetch(BACKEND_URL + `/posts/${editedPost.id}`, {
            method: 'PUT',
            body: JSON.stringify({...editedPost, imgLink: newPostPicture}),
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                loadPosts()
                setOpenModalPicture(false)
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
                loadPostPicturesList()
                // setOpenModalPicture(false)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        loadPostPicturesList()
    }, [])


    const button = (
        <button className="btn btn-outline-primary" type="submit" onClick={updatePostPicture}>Сохранить</button>)

    return <UiModal
        closeModal={() => setOpenModalPicture(false)}
        button={button}
        title="Редактирование поста"
        // buttonForStorePic={buttonForStorePic}
        handleSubmit={updatePostPicture}>

        <label htmlFor="title" className="form-label">Выбор картинки</label>

        <div className="row">
            {/*file - картинки из storage */}
            {postPicturesList.map(item => {
                return <div className={`col-md-4 ${activeImgLink === item.path ? "activeImage" : ''}`} key={item.id}>
                    <img src={BACKEND_URL + item.path} onClick={() => {
                        setNewPostPicture(item.path)
                        setActiveImgLink(item.path)
                    }}
                         className="w-100" alt="Картинка"/>

                </div>
            })}
        </div>
        <form>
            <input type="file" multiple={true} onChange={e => loadPostPictureToStorage(e.target.files[0])}/>
        </form>
    </UiModal>
}
export default Input