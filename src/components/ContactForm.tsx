'use client'
import React, { useState } from 'react'
import PersonalDatesModal from '@/components/PersonalDatesModal.tsx'
import { useFormStatus, useFormState } from 'react-dom'
import { handleContactForm } from '@/app/actions/handleContactForm.ts'
import ReCAPTCHA from 'react-google-recaptcha'

const KEY = '6LeLOkgpAAAAAMP0GZre1UiAWepWg52rKPXPWXiZ'

const SubmitButton = ({ disabled = false }) => {
    const { pending } = useFormStatus()
    return (
        <>
            <button className="btn contact__form_btn" type="submit"
                disabled={pending || disabled}
            >
                {pending ? '...Отправляем' : 'Отправить'}
            </button>
        </>)
}

const ContactForm = () => {
    const [ personalDatesModal, setPersonalDatesModal ] = useState(false)
    const [ formState, action ] = useFormState(handleContactForm, {
        message: '',
    })
    const [ recaptchaToken, setRecaptchaToken ] = useState('')

    const onCaptchaChange = (token: string|null) => {
        if (!token || token.length < 1) {
            console.warn('Token is empty')
            return
        }
        setRecaptchaToken(token)
    }

    return (
        <form action={action} role="form" className="form">
            {formState.message
                ? <span>{formState.message}</span>
                : (<>
                    <div className="form__person">
                        <input type="text" name="name" className="form-control input_name" id="name"
                            placeholder="Ваше имя" required
                        />

                        <input type="email" className="form-control input_email" name="email" id="email"
                            placeholder="Ваш Email" required
                        />
                    </div>

                    <div className="form__message">
                        <input type="text" className="form-control input_title" name="title" id="subject"
                            placeholder="Заголовок сообщения" required
                        />

                        <textarea className="form-control input_message" name="message" placeholder="Сообщение"
                            required
                        />
                        <input hidden type="text" name="recaptcha_token" value={recaptchaToken} readOnly/>
                    </div>
                    <ReCAPTCHA
                        onChange={onCaptchaChange}
                        sitekey={KEY}
                        size="normal"
                    />

                    <div className="form__submit">
                        <p><span style={{ color: '#FF6700', fontWeight: 'bold' }}>ВНИМАНИЕ:</span> нажимая кнопку &quot;ОТПРАВИТЬ&quot;
                                Вы принимаете условие
                        <button type="button" className="btn-personalDatesModalOpen"
                            onClick={e => setPersonalDatesModal(true)}>Соглашения</button>
                                об обработке персональных данных
                        </p>
                        {!!personalDatesModal && <PersonalDatesModal setPersonalDatesModal={setPersonalDatesModal}/>}
                        <SubmitButton disabled={recaptchaToken.length === 0}/>
                    </div>
                </>)}
        </form>
    )
}

export default ContactForm
