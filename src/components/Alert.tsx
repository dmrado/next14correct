import React from 'react'

type Props = {
    title: string,
    text: string
}
export const Alert = ({ text, title } : Props) => {
    return (
        <div className='alert'>
            <span className="alert_close_button">&times;</span>
            title: {title}
            text : {text}
        </div>
    )
}