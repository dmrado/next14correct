'use client'
import {useEffect, useState} from "react";
import {BACKEND_URL} from "../config.js";
import {ReCAPTCHA} from "react-google-recaptcha";
import PersonalDatesModal from "./PersonalDatesModal.tsx"

const CONTACTS = {
    headerAddres1: 'Адрес: ',
    headerAddres2: 'Приморский край г. Артем, ул. Пушкина 16. Остановка автобуса "Дом Культуры Угольщиков"',
    refMail: 'halom6755@yandex.ru',
    phone1: '+7 924 269 30 05',
    phone2: '+7 914 652 09 55',
    instructionTransport: '',
    textAddres2: '',
    yandexMaps: 'yandexMaps',
    bankCard: '2202 2063 2702 1692'
}

const ContactsPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [personalDatesModal, setPersonalDatesModal] = useState(false)

    // useEffect(() => {
    //     if (typeof AOS !== 'undefined') {
    //         AOS.init()
    //         console.log('is working')
    //
    //     } else {
    //         console.log('check')
    //     }
    // }, [])

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(name, email, title, body)
        await fetch(BACKEND_URL + '/mailContacts', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({name, email, title, body})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(e))
        setName('')
        setEmail('')
        setTitle('')
        setBody('')
    }
    return <div>

        <div className="contact__header">
            <h1>Приезжайте к нам</h1>
            <p>Приглашаем вас на Богослужения, каждую субботу в 11-00, по адресу г. Артем, ул Пушкина 16. <br/> Примите
                участие в радостном прославлении Бога, молитве и изученнии Библии. <br/> У
                нас вы найдёте хороших друзей, мы будем рады общению с вами.</p>
        </div>

        <div className="contact__map">

            <div style={{position: "relative"}}>
                <a
                    href="https://yandex.ru/maps/11406/artem/?utm_medium=mapframe&utm_source=maps"
                    style={{color: "#eee", fontSize: 12, position: "absolute", top: 0}}
                >
                    Артём
                </a>
                <a
                    href="https://yandex.ru/maps/11406/artem/house/ulitsa_pushkina_16/ZUoEaAZnQUUBWkJuYGJydXVlZwA=/?from=mapframe&ll=132.179308%2C43.349194&utm_medium=mapframe&utm_source=maps&z=16.39"
                    style={{color: "#eee", fontSize: 12, position: "absolute", top: 14}}
                >
                    Улица Пушкина, 16 Еврейская община города Артем — Яндекс&nbsp;Карты
                </a>
                <iframe style={{border: 0, width: '100%', height: '350px'}}
                        src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=132.179308%2C43.349194&mode=whatshere&whatshere%5Bpoint%5D=132.178066%2C43.349638&whatshere%5Bzoom%5D=17&z=16.39"
                        width="1670" height="400"

                    // frameBorder={0}
                        allowFullScreen="true"
                    // style={{ position: "relative" }}
                />
            </div>
        </div>


        {/*ADDRESS===============================================================*/}
        <div className="container">
            <div className="google__calendar">
                <iframe
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Asia%2FVladivostok&bgcolor=%23ebebeb&src=MDhiOTRmNmRkODM4ODVmNjcwMzQ3NmE0OTMzNWU0Nzg0YmYyYzk1MjdmOGEwNmRiNGIxYWVkYzdlYjdkYzJhYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=cnUucnVzc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%230B8043"
                    style={{borderWidth: 0}}
                    width={1040}
                    height={600}
                ></iframe>
            </div>

            <div className="address__wrapper">

                <div className="address__list">
                    <div className="address thin">
                        {/*<i className="bi bi-geo-alt"/>*/}
                        <h4>{CONTACTS.headerAddres1}</h4>
                        <p>
                            {/*<i className="fa-solid fa-location-dot"></i>*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
                                 fill="none">
                                <path
                                    d="M17.0001 2.83337C14.0138 2.83322 11.1482 4.0117 9.02601 6.11266C6.90382 8.21362 5.69661 11.0673 5.66675 14.0534C5.66675 21.8167 15.6542 30.4584 16.0792 30.8267C16.3359 31.0462 16.6624 31.1668 17.0001 31.1668C17.3377 31.1668 17.6643 31.0462 17.9209 30.8267C18.4167 30.4584 28.3334 21.8167 28.3334 14.0534C28.3036 11.0673 27.0963 8.21362 24.9742 6.11266C22.852 4.0117 19.9863 2.83322 17.0001 2.83337ZM17.0001 18.4167C16.0194 18.4167 15.0608 18.1259 14.2454 17.5811C13.43 17.0362 12.7945 16.2619 12.4192 15.3558C12.0439 14.4498 11.9457 13.4529 12.137 12.4911C12.3283 11.5292 12.8006 10.6457 13.494 9.9523C14.1874 9.25887 15.0709 8.78663 16.0328 8.59531C16.9946 8.404 17.9915 8.50219 18.8976 8.87747C19.8036 9.25276 20.578 9.88828 21.1228 10.7037C21.6676 11.5191 21.9584 12.4777 21.9584 13.4584C21.9584 14.7734 21.436 16.0346 20.5062 16.9644C19.5763 17.8943 18.3151 18.4167 17.0001 18.4167Z"
                                    fill="#505050"/>
                            </svg>
                            <path
                                d="M 17.0001 2.83337 C 14.0138 2.83322 11.1482 4.0117 9.02601 6.11266 C 6.90382 8.21362 5.69661 11.0673 5.66675 14.0534 C 5.66675 21.8167 15.6542 30.4584 16.0792 30.8267 C 16.3359 31.0462 16.6624 31.1668 17.0001 31.1668 C 17.3377 31.1668 17.6643 31.0462 17.9209 30.8267 C 18.4167 30.4584 28.3334 21.8167 28.3334 14.0534 C 28.3036 11.0673 27.0963 8.21362 24.9742 6.11266 C 22.852 4.0117 19.9863 2.83322 17.0001 2.83337 Z M 17.0001 18.4167 C 16.0194 18.4167 15.0608 18.1259 14.2454 17.5811 C 13.43 17.0362 12.7945 16.2619 12.4192 15.3558 C 12.0439 14.4498 11.9457 13.4529 12.137 12.4911 C 12.3283 11.5292 12.8006 10.6457 13.494 9.9523 C 14.1874 9.25887 15.0709 8.78663 16.0328 8.59531 C 16.9946 8.404 17.9915 8.50219 18.8976 8.87747 C 19.8036 9.25276 20.578 9.88828 21.1228 10.7037 C 21.6676 11.5191 21.9584 12.4777 21.9584 13.4584 C 21.9584 14.7734 21.436 16.0346 20.5062 16.9644 C 19.5763 17.8943 18.3151 18.4167 17.0001 18.4167 Z"
                                fill="#505050"/>
                            &nbsp;&nbsp;&nbsp;{CONTACTS.headerAddres2}</p>
                    </div>

                    <div className="email thin">
                        {/*<i className="bi bi-envelope"/>*/}
                        <h4>Напишите нам:</h4>
                        <p>
                            {/*<i className="fa-solid fa-envelope"></i>*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
                                 fill="none">
                                <path
                                    d="M 31.1666 10.6746 V 24.0833 C 31.1666 25.1674 30.7525 26.2105 30.0088 26.9992 C 29.2651 27.7879 28.2481 28.2626 27.1659 28.3262 L 26.9166 28.3333 H 7.08325 C 5.9992 28.3334 4.95611 27.9192 4.16738 27.1755 C 3.37866 26.4318 2.90393 25.4148 2.84034 24.3326 L 2.83325 24.0833 V 10.6746 L 16.2137 19.5953 L 16.378 19.6888 C 16.5717 19.7834 16.7844 19.8326 16.9999 19.8326 C 17.2155 19.8326 17.4282 19.7834 17.6218 19.6888 L 17.7862 19.5953 L 31.1666 10.6746 Z"
                                    fill="#505050"/>
                                <path xmlns="http://www.w3.org/2000/svg"
                                      d="M26.9168 5.66663C28.4468 5.66663 29.7884 6.47413 30.5364 7.68821L17.0001 16.7124L3.46387 7.68821C3.81907 7.1113 4.30709 6.62769 4.8872 6.27775C5.46732 5.92781 6.12271 5.72167 6.7987 5.67654L7.08345 5.66663H26.9168Z"
                                      fill="#505050"/>
                                <defs xmlns="http://www.w3.org/2000/svg">
                                    <clipPath id="clip0_172_25">
                                        <rect width="34" height="34" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            &nbsp;&nbsp;&nbsp;{CONTACTS.refMail}
                        </p>
                    </div>

                    <div className="phone thin">
                        {/*<i className="bi bi-phone"/>*/}
                        <h4>Позвоните нам:</h4>
                        <p>
                            {/*<i className="fa-solid fa-phone"></i>*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
                                 fill="none">
                                <path
                                    d="M 23.4544 18.2835 L 22.8098 18.9253 C 22.8098 18.9253 21.2756 20.4496 17.0893 16.2874 C 12.9031 12.1253 14.4373 10.6009 14.4373 10.6009 L 14.8425 10.1958 C 15.8441 9.20126 15.939 7.60326 15.0649 6.43593 L 13.2799 4.05168 C 12.1976 2.60668 10.108 2.41543 8.86841 3.64793 L 6.64424 5.85793 C 6.03082 6.46993 5.61999 7.26043 5.66957 8.13876 C 5.79707 10.387 6.81424 15.2221 12.4866 20.8633 C 18.5032 26.8444 24.1486 27.0824 26.4563 26.8671 C 27.1873 26.7991 27.822 26.4279 28.3334 25.9179 L 30.3451 23.9176 C 31.7051 22.5675 31.3226 20.2513 29.5829 19.3063 L 26.8771 17.8344 C 25.7352 17.2153 24.3469 17.3967 23.4544 18.2835 Z"
                                    fill="#505050"/>
                            </svg>
                            &nbsp;&nbsp;&nbsp;{CONTACTS.phone1}</p>
                        <p>
                            {/*<i className="fa-solid fa-phone"></i>*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
                                 fill="none">
                                <path
                                    d="M 23.4544 18.2835 L 22.8098 18.9253 C 22.8098 18.9253 21.2756 20.4496 17.0893 16.2874 C 12.9031 12.1253 14.4373 10.6009 14.4373 10.6009 L 14.8425 10.1958 C 15.8441 9.20126 15.939 7.60326 15.0649 6.43593 L 13.2799 4.05168 C 12.1976 2.60668 10.108 2.41543 8.86841 3.64793 L 6.64424 5.85793 C 6.03082 6.46993 5.61999 7.26043 5.66957 8.13876 C 5.79707 10.387 6.81424 15.2221 12.4866 20.8633 C 18.5032 26.8444 24.1486 27.0824 26.4563 26.8671 C 27.1873 26.7991 27.822 26.4279 28.3334 25.9179 L 30.3451 23.9176 C 31.7051 22.5675 31.3226 20.2513 29.5829 19.3063 L 26.8771 17.8344 C 25.7352 17.2153 24.3469 17.3967 23.4544 18.2835 Z"
                                    fill="#505050"/>
                            </svg>
                            &nbsp;&nbsp;&nbsp;{CONTACTS.phone2}</p>
                    </div>

                    <div className="email thin">
                        {/*<i className="bi bi-envelope"/>*/}
                        <h4>Номер карты для пожертвований:</h4>
                        <p>
                            {/*<i className="fa-solid fa-credit-card"></i>*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
                                 fill="none">
                                <path
                                    d="M 1.37573 10.7671 H 32.6242 V 9.44349 C 32.6242 6.51281 31.1306 5.03259 28.1562 5.03259 H 5.84369 C 2.8699 5.03259 1.37512 6.51281 1.37512 9.44409 L 1.37573 10.7671 Z M 1.37573 24.5705 C 1.37573 27.5017 2.8693 28.9674 5.84369 28.9674 H 28.1562 C 31.13 28.9674 32.6248 27.5017 32.6248 24.5705 V 13.9977 H 1.37451 L 1.37573 24.5705 Z M 6.12844 21.0982 V 18.4656 C 6.12844 17.6691 6.68337 17.0996 7.52305 17.0996 H 11.0093 C 11.8489 17.0996 12.4039 17.6691 12.4039 18.4656 V 21.0982 C 12.4039 21.9093 11.8489 22.4643 11.0093 22.4643 H 7.52244 C 6.68276 22.4643 6.12844 21.9093 6.12844 21.0982 Z"
                                    fill="#505050"/>
                            </svg>
                            &nbsp;&nbsp;&nbsp;{CONTACTS.bankCard}</p>
                    </div>

                </div>
                {/*ADDRESS END====================================================*/}

                <div className="form__wrapper">
                    <h1>Напишите нам</h1>
                    <form onSubmit={submitHandler} method="post" role="form" className="form">
                        <div className="form__person">
                            <input type="text" name="name" className="form-control input_name" id="name"
                                   placeholder="Ваше имя" required
                                   value={name}
                                   onChange={e => setName(e.target.value)}
                            />

                            <input type="email" className="form-control input_email" name="email" id="email"
                                   placeholder="Ваш Email" required
                                   value={email}
                                   onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form__message">
                            <input type="text" className="form-control input_title" name="subject" id="subject"
                                   placeholder="Заголовок сообщения" required
                                   value={title}
                                   onChange={e => setTitle(e.target.value)}
                            />

                            <textarea className="form-control input_message" name="message" placeholder="Сообщение"
                                      required defaultValue={""}
                                      value={body}
                                      onChange={e => setBody(e.target.value)}
                            />
                        </div>
                        <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            size="normal"
                        />
                        {/*<br style={{padding: '0', margin: '0'}}/>*/}

                        {/*<div className="loading">Загрузка...</div>*/}
                        {/*<div className="error-message"/>*/}
                        {/*<div className="sent-message">Ваше сообщение отправлено. Большое спасибо!</div>*/}
                        <div className="form__submit">
                        <p>Нажимая кнопку отправить вы принимаете условие
                            <button className="button_blue" onClick={e => setPersonalDatesModal(true)}>Соглашения</button>
                            об обработке персональных данных</p>
                            {!!personalDatesModal && <PersonalDatesModal setPersonalDatesModal={setPersonalDatesModal}/>}
                            <button className="btn contact__form_btn" type="submit">Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


}
export default ContactsPage
