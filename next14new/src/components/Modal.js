'use client'
import { useEffect } from 'react'

const Modal = ({ item, setOpenModal }) => {

    useEffect(() => {

    }, [])

    const handleClick = () => {
        setOpenModal(false)
    }

    return (
        <>
            <div className="container">
                <div className="modal open" id="my-modal">
                    <div className="modal__box book_box">

                        <div className="book_box-header">
                            <img src={item.href} alt="Picture"/>
                            <h2>{item.name}</h2>
                        </div>

                        <p>{item.annot}</p>

                        <div className="book_box-header">
                            <div className="books__price">
                                {/*Цена: {book.price} p.*/}
                            </div>
                            <button className="btn" onClick={handleClick}>
                                Закрыть
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
