'use client'
import BooksModal from "./BooksModal";
import {books} from "./books.js";
import {useEffect, useState} from "react";


const BooksPage = () => {
const [item, setItem] = useState('')
const [openBookModal, setOpenBookModal] = useState(false)

    const handleClick = (book) =>{
        setOpenBookModal(true)
        setItem(book)
        console.log('book это', book)
    }

    return (
        <div className="container">

            <div className="books__wrapper">
                <h2>Наши книги</h2>
            </div>
            {!! openBookModal && <BooksModal book={item} setOpenBookModal={setOpenBookModal}/>}
            <div className="books__list">
                <ul>
                    {books.map(book => <li key={book.id}>

                        <div className="books__item" onClick={() => handleClick(book)}>
                            <img src={book.href} alt="Picture"/>
                        </div>
                    </li>)
                    }
                </ul>
            </div>

        </div>
    );
};

export default BooksPage;