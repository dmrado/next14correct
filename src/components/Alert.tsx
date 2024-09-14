import React from 'react'

type Props = {
    title: string,
    text: string
}
export const Alert = ({ text, title, setShowAlerts } : Props) => {
    return (
        <div className='alert'>
            <span className="alert_close_button" onClick={e => setShowAlerts(false)}>&times;</span>
            <div className="alert_title">
                <h1>{title}</h1>
            </div>
            <p className="alert_text">{text}</p>
        </div>
    )
}