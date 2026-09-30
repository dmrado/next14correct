'use client'

import { useState, type CSSProperties } from 'react'

/**
 * Обёртка для встроенных блоков с чужих сайтов — карт, календарей и прочего.
 *
 * Пока посетитель не нажал кнопку, на месте блока стоит заглушка, и браузер
 * никуда не обращается. Это важно: обычный <iframe> грузится сразу при
 * открытии страницы, и владелец чужого сервиса получает IP-адрес посетителя
 * до всякого согласия — именно за это и штрафуют по 152-ФЗ.
 *
 * Нажатие на кнопку и есть согласие: человек видит, кто получит его данные,
 * и решает сам.
 */

type Props = {
    /** Адрес встраиваемой страницы. */
    src: string
    /** Понятное название блока: «Карта», «Расписание встреч». */
    title: string
    /** Кому уйдут данные — так, как это поймёт посетитель: «Яндексу», «Google (США)». */
    recipient: string
    /** Высота блока в пикселях. */
    height: number
}

const boxStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    padding: '24px',
    border: '1px dashed #b0b0b0',
    borderRadius: '8px',
    background: '#f5f5f5',
    color: '#505050',
    textAlign: 'center',
}

const buttonStyle: CSSProperties = {
    padding: '10px 20px',
    border: 0,
    borderRadius: '6px',
    background: '#039BE5',
    color: '#fff',
    fontSize: '15px',
    cursor: 'pointer',
}

const ExternalEmbed = ({ src, title, recipient, height }: Props) => {
    const [ isShown, setIsShown ] = useState(false)

    if (isShown) {
        return (
            <iframe
                src={src}
                title={title}
                style={{ border: 0, width: '100%', height: `${height}px` }}
                loading="lazy"
                allowFullScreen
            />
        )
    }

    return (
        <div style={{ ...boxStyle, minHeight: `${height}px` }}>
            <strong style={{ fontSize: '17px' }}>{title}</strong>
            <span style={{ fontSize: '14px', maxWidth: '520px' }}>
                Этот блок загружается со стороннего сайта. Если вы его откроете,
                {' '}{recipient} получит ваш IP-адрес и сведения о браузере.
            </span>
            <button type="button" style={buttonStyle} onClick={() => setIsShown(true)}>
                Показать
            </button>
        </div>
    )
}

export default ExternalEmbed
