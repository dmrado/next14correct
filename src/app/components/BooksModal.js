'use client'
import {useEffect, useState} from "react";
import Link from "next/link";

const BooksModal = ({book, setOpenBookModal}) => {

    useEffect(() => {

    }, [])

    const handleClick = () => {
        setOpenBookModal(false)
    }

    return (
        <>
            <div className="container">
                <div className="modal open" id="my-modal">
                    <div className="modal__box book_box">

                        <div className="book_box-header">
                            <img src={book.href} alt="Picture"/>
                            <h2>{book.name}</h2>
                        </div>

                        <p>{book.annot}</p>

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
    );
};

export default BooksModal;