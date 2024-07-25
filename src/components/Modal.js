'use client'
import { useEffect } from 'react'

const Modal = ({ book, holiday, setOpenModal }) => {

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
                            <img src={book ? book.href : holiday.href} alt="Picture"/>
                            <h2>{book ? book.name : holiday.name}</h2>
                        </div>

                        <p>{book ? book.annot : holiday.annot}</p>

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
