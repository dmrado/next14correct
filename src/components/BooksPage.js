'use client'
import Modal from './Modal.js'
import { books } from './books.js'
import { useState } from 'react'

const BooksPage = () => {
    const [ item, setItem ] = useState('')
    const [ openModal, setOpenModal ] = useState(false)

    const handleClick = (book) => {
        setOpenModal(true)
        setItem(book)
        console.log('book это', book)
    }

    return (
        <div className="container">

            <div className="books__wrapper">
                <h2>Наши книги</h2>
            </div>
            {!! openModal && <Modal book={item} setOpenModal={setOpenModal}/>}
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
    )
}

export default BooksPage
