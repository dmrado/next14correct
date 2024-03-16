'use client'
import {useEffect, useState} from "react";
import Link from "next/link";

const uiModal = () => {



    const handleClick = () => {
        setOpenHolidayModal(false)
    }

    return (
        <>
            <div className="container">
                <div className="modal open" id="my-modal">
                    <div className="modal__box book_box">

                        <div className="book_box-header book_box-header_holiday">
                            <img src={item.href} alt="Picture"/>
                            <div className="holiday__name">
                                <h2>{holiday.name}</h2>
                            </div>
                        </div>

                        <p>{holiday.annot}</p>

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

export default uiModal;