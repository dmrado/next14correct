import { createHmac } from 'crypto'

const SECRET = process.env.CONSENT_SECRET ?? 'fallback-secret-change-in-prod'

export function verifyConsentToken(token: string): boolean {
    try {
        const parts = token.split(':')
        if (parts.length !== 3) return false
        const [prefix, timestamp, sig] = parts
        if (prefix !== 'consent') return false
        if (Date.now() - Number(timestamp) > 3_600_000) return false

        const payload = `${prefix}:${timestamp}`
        const expected = createHmac('sha256', SECRET).update(payload).digest('hex')
        return sig === expected
    } catch {
        return false
    }
}