import React, { useEffect, useState } from 'react'

type Props = {
    title: string;
    text: string;
    handleCloseModal: () => void;
};

export const Alert = ({ text, title, handleCloseModal }: Props) => {
    return (
        <div className='alert'>
            <span className="alert_close_button" onClick={handleCloseModal}>&times;</span>
            <div className="alert_title">
                <h1>{title}</h1>
            </div>
            <p className="alert_text">{text}</p>
        </div>
    )
}
