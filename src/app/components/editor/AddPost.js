'use client'
import {useState, useEffect, useRouter} from "react";
import Link from "next/link";
import dynamic from 'next/dynamic'
import LoginModal from "../LoginModal";
import {BACKEND_URL} from "../../../config";
import {useMainContext} from "../../context/MainProvider";
import {useFileContext} from "../../context/FileProvider";
// import {useRouter} from "next/dist/client/compat/router";

const QuillEditor = dynamic(
    () => import('./Quill'),
    {ssr: false}
)


const AddPost = ({createPost}) => {
    const {token, logoutHandler} = useMainContext()
    const {
        postPicturesList,
        loadPostPicturesList,
        imgLink, setImgLink,
        updatePostPicture,
        setNewPostPicture,
        editedPost, setEditedPost
    } = useFileContext()


    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [htmlBody, setHtmlBody] = useState('')

    useEffect(() => {
        loadPostPicturesList()
    }, [])


    return (<>
            <div className="container">

                {!token && <LoginModal/>}


                <div className="btn-blog-wrapper">
                    <button className="btn" onClick={loadPostPicturesList}>Список картинок</button>

                    {/*todo пробросили imgLink вместе с постом*/}

                </div>

                <form className="form__add-post"
                      action={formData => {
                          createPost(formData, htmlBody, text, token, imgLink)
                      }}>

                    <div className="blog__img-edit">
                        {/*item - это картинка - объект модели файл*/}
                        {postPicturesList.map(item => {
                            return <div className={`${imgLink === item.path ? "activeImage" : ''}`} key={item.id}>
                                <img
                                    src={BACKEND_URL + item.path} onClick={() => {
                                    //файл path идет в updatePostPicture
                                    setNewPostPicture(item.path)
                                    //для выделения выбранной картинки className activeImage и передачи ссылки на картинку в модель Post imgLink
                                    setImgLink(item.path)
                                }}
                                    alt="Картинка"/>

                            </div>
                        })}
                    </div>

                    <h1>Создадим новый пост...</h1>

                    <div className="modal__text-field-wrapper">
                        <div className="modal__input-wrapper">
                            <input defaultValue={title}
                                   onChange={e => setTitle(e.target.value)}
                                   type="text" required name="title" className="modal__input-text"
                            />
                            <label htmlFor="staticEmail"
                                   className="modal__input-label">Заголовок</label>
                        </div>
                    </div>


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
                        <button className="btn btn-blog" type="submit" value="Add post">
                            Сохранить
                        </button>
                        <Link href={'/posts'}>
                            <button className="btn">
                                Вернуться
                            </button>
                        </Link>
                        <button className="btn btn-service btn-service-danger" onClick={logoutHandler}>
                            Выйти
                        </button>

                    </div>
                </form>

                <div className="btn-blog-wrapper">
                    <button className="btn"
                            style={{
                                textAlign: 'center',
                                backgroundColor: 'white',
                                color: '#FF6700',
                                border: '2px solid #FF6700'
                            }}
                        // onClick={}
                    >Объявление
                    </button>
                </div>


            </div>


        </>
    );
};

export default AddPost
