'use server'

import { cookies } from 'next/headers'
import { CONSENT_KEY } from '@/app/actions/getCookiesAccepted.ts'

export const setConsentAccepted = async () => {
    const oneWeek = 7 * 24 * 60 * 60 * 1000
    cookies().set(CONSENT_KEY, 'true', { expires: Date.now() + oneWeek })
}

/**
 * Отказ посетителя. Пишем его тем же ключом, но другим значением: баннер
 * больше не появляется, а согласием это не считается — закон требует, чтобы
 * отказаться было так же просто, как согласиться.
 */
export const setConsentDeclined = async () => {
    const oneWeek = 7 * 24 * 60 * 60 * 1000
    cookies().set(CONSENT_KEY, 'declined', { expires: Date.now() + oneWeek })
}
