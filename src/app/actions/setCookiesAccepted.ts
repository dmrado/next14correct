'use server'

import { cookies } from 'next/headers'
import { CONSENT_KEY } from '@/app/actions/getCookiesAccepted.ts'

export const setConsentAccepted = async () => {
    cookies().set(CONSENT_KEY, 'true')
}
