'use client'
import React, { useState } from 'react'
import PersonalDatesModal from '@/components/PersonalDatesModal.tsx'
import { useFormStatus, useFormState } from 'react-dom'
import { handleContactForm } from '@/app/actions/handleContactForm.ts'
import { generateConsentToken } from '@/app/actions/generateConsentToken.ts'
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
    const [ consentToken, setConsentToken ] = useState('')
    const [ consentLoading, setConsentLoading ] = useState(false)

    const onCaptchaChange = (token: string | null) => {
        if (!token || token.length < 1) {
            console.warn('Token is empty')
            return
        }
        setRecaptchaToken(token)
    }

    const handleConsentChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setConsentLoading(true)
            try {
                const token = await generateConsentToken()
                setConsentToken(token)
            } catch {
                setConsentToken('')
            } finally {
                setConsentLoading(false)
            }
        } else {
            setConsentToken('')
        }
    }

    const isSubmitDisabled = recaptchaToken.length === 0 || consentToken.length === 0 || consentLoading

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
                        <input hidden type="text" name="consent_token" value={consentToken} readOnly/>
                    </div>

                    <ReCAPTCHA
                        onChange={onCaptchaChange}
                        sitekey={KEY}
                        size="normal"
                    />

                    <div className="form__submit">
                        <label className="form__consent">
                            <input
                                type="checkbox"
                                className="form__consent_checkbox"
                                onChange={handleConsentChange}
                                disabled={consentLoading}
                                style={{
                                    borderRadius: 0,
                                    width: 20,
                                    height: 20,
                                    minHeight: 20,
                                    maxHeight: 20,
                                }}
                            />
                            <span className="form__consent_text">
                                {consentLoading ? 'Проверка...' : (<>
                                    Я согласен с условиями{' '}
                                    <button type="button" className="btn-personalDatesModalOpen"
                                            onClick={() => setPersonalDatesModal(true)}>
                                        Соглашения
                                    </button>{' '}
                                    об обработке персональных данных
                                </>)}
                            </span>
                        </label>

                        {!!personalDatesModal &&
                            <PersonalDatesModal setPersonalDatesModal={setPersonalDatesModal}/>}

                        <SubmitButton disabled={isSubmitDisabled}/>
                    </div>
                </>)}
        </form>
    )
}

export default ContactForm