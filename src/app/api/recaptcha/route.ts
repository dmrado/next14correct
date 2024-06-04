import { NextResponse } from 'next/server'
import fetch from 'node-fetch'

const recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify'
const serverSecret = process.env.RECAPTCHA_SERVER_SECRET

async function GET(request: Request) {
    const queryString = new URL(request.url).search
    const params = new URLSearchParams(queryString)
    const token = params.get('token')
    // todo: try to send userIp to google for better bot recognising
    // const userIp = request.headers.get('x-forwarded-for')?.split(',')[0]
    const url = recaptchaUrl + `?secret=${serverSecret}&response=${token}`
    const isSuccess = await fetch(url, { method: 'POST' })
        .then(res => res.json())
        .then((data:any) => {
            //todo handle errors
            return !!data.success

        }).catch(err => {
            console.warn('Error while verifying recaptcha', err)
            return false
        })
    if (isSuccess) {
        return new NextResponse('Token is valid', { status: 200 })
    }
    return new NextResponse('Token is invalid', { status: 400 })
}

export { GET }
