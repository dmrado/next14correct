import React from 'react'
import Link from 'next/link'

const Policy = () => {
    return <div className='container'>
        <h1 style={{ textAlign: 'center' }}><strong>Политика конфиденциальности в отношении персональных данных</strong></h1>
        <br/>
        <p>
            Настоящая политика конфиденциальности определяет порядок обработки и защиты персональных данных
            пользователей нашего сайта в соответствии с требованиями Федерального закона от 27 июля 2006 года №
            152-ФЗ &quot;О персональных данных&quot;.
            <br/>
            <strong>Сбор и использование информации</strong>
            <br/>
            Мы собираем персональные данные пользователей (имя, адрес электронной почты) только при предоставлении
            ими
            таких данных добровольно через форму обратной связи на сайте. Собранные данные используются
            исключительно
            для обратной связи с пользователями и ответа на их запросы.
            <br/>
            <strong>Защита информации</strong>
            <br/>
            Мы обеспечиваем безопасность персональных данных пользователей, предпринимая необходимые организационные
            и
            технические меры для защиты информации от несанкционированного доступа, уничтожения, изменения,
            блокирования, копирования, распространения и иных неправомерных действий третьих лиц.
            <br/>
            <strong>Передача данных третьим лицам</strong>
            <br/>
            Мы не передаем персональные данные пользователей третьим лицам без их согласия, за исключением случаев,
            предусмотренных законодательством Российской Федерации.
            <br/>
            <strong>Изменения в политике конфиденциальности</strong>
            <br/>
            Мы оставляем за собой право вносить изменения в настоящую политику конфиденциальности. Любые изменения
            будут
            опубликованы на данной странице.
            <br/>
            <strong>Контакты</strong>
            <br/>
            По всем вопросам, касающимся политики конфиденциальности, вы можете связаться с нами по адресу halom6755@yandex.ru
        </p>
        <Link href={'/information'} className='!text-[#505050] py-4 font-bold'>Назад</Link>
    </div>
}
export default Policy