'use client'
import {useEffect, } from "react";
import Link from "next/link";
import {useMainContext} from "../context/MainProvider";

const _LoginModal = () => {
    const {
        submitLoginHandler,
        getTokenFromLocalstorage,
        token, setToken,
        email, setEmail,
        password, setPassword,
        openLogin, setOpenLogin,
        message,
    } = useMainContext()


    //получение токена из localStorage когда admin пришел на сайт
    useEffect(() => {
        setToken(getTokenFromLocalstorage())
    }, [])

    //перезагрузка компонента при изменении (стирании) токена после логаута, иначе он заходит без токена и при этом не блокирует модальным окном страницу
    useEffect(() =>{
        setOpenLogin(true)
    }, [token])

    return (
        <>
            {!!openLogin & !token && <div className="container">
                <div className="modal open" id="my-modal">
                    <div className="modal__box">
                        {/*todo доделать мессадж красиво*/}
                        <div>{message}</div>

                        {
                        <form>
                            <div>
                                <h3>Здравствуйте, пастор, пожалуйста авторизуйтесь</h3>
                                <div className="modal__text-field-wrapper">
                                    <div className="modal__input-wrapper">
                                        <input type="text"
                                               className="modal__input-text"
                                               value={email}
                                               onChange={e => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="staticEmail"
                                               className="modal__input-label">Email</label>
                                    </div>
                                </div>
                                <div className="modal__text-field-wrapper">
                                    <div className="modal__input-wrapper">
                                        <input type="password"
                                               className="modal__input-text"
                                               id="inputPassword"
                                               value={password}
                                               onChange={e => setPassword(e.target.value)}
                                        />
                                        <label htmlFor="inputPassword"
                                               className="modal__input-label">Пароль</label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-blog"
                                        onClick={submitLoginHandler}>
                                    Войти
                                </button>

                                <Link href={'/posts'}>
                                    <button className="btn btn-blog">
                                        Вернуться
                                    </button>
                                </Link>

                            </div>
                        </form>
                        }

                    </div>
                </div>
            </div>
            }
        </>
    )
}
export default _LoginModal
