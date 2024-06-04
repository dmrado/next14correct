'use client'
import React, { useState } from 'react'
import PersonalDatesModal from '@/components/PersonalDatesModal.tsx'
import { handleContactForm } from '@/app/actions/handleContactForm.ts'
import ReCAPTCHA from 'react-google-recaptcha'

const KEY = '6LeLOkgpAAAAAMP0GZre1UiAWepWg52rKPXPWXiZ'

const ContactForm = () => {
    // todo: remove state from here
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')
    const [ personalDatesModal, setPersonalDatesModal ] = useState(false)
    const [ isUserARobot, setIsUserARobot ] = useState(true)

    const onSubmit = (formData: FormData) => {
        // console.log('formData', formData)
        handleContactForm(formData)
    }
    const onCaptchaChange = (token: string|null) => {
        if (!token || token.length < 1) {
            return
        }
        fetch(`/api/recaptcha?token=${token}`).then(res => {
            if (res.ok) {
                setIsUserARobot(false)
            }
        }).catch((e) => {
            console.error('Error on verifying recaptcha')
        })
    }

    return (
        <form action={onSubmit} role="form" className="form">
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
                <input type="text" className="form-control input_title" name="title" id="subject"
                    placeholder="Заголовок сообщения" required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <textarea className="form-control input_message" name="message" placeholder="Сообщение"
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
            </div>
            <ReCAPTCHA
                onChange={onCaptchaChange}
                sitekey={KEY}
                size="normal"
            />
            {/*<br style={{ padding: '0', margin: '0' }}/>*/}

            {/*<div className="loading">Загрузка...</div>*/}
            {/*<div className="error-message"/>*/}
            {/*<div className="sent-message">Ваше сообщение отправлено. Большое спасибо!</div>*/}
            <div className="form__submit">
                <p><span style={{ color: '#FF6700', fontWeight: 'bold' }}>ВНИМАНИЕ:</span> нажимая кнопку "ОТПРАВИТЬ"
                        Вы принимаете условие
                <button className="btn-personalDatesModalOpen"
                    onClick={e => setPersonalDatesModal(true)}>Соглашения</button>
                        об обработке персональных данных
                </p>
                {!!personalDatesModal && <PersonalDatesModal setPersonalDatesModal={setPersonalDatesModal}/>}
                <button className="btn contact__form_btn" type="submit" disabled={isUserARobot}>Отправить</button>
            </div>
        </form>
    )
}

export default ContactForm
