'use server'
import { createHmac } from 'crypto'

const SECRET = process.env.CONSENT_SECRET ?? 'fallback-secret-change-in-prod'

export async function generateConsentToken(): Promise<string> {
    const timestamp = Date.now()
    const payload = `consent:${timestamp}`
    const sig = createHmac('sha256', SECRET).update(payload).digest('hex')
    return `${payload}:${sig}`
}