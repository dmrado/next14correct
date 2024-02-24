import { NextResponse } from 'next/server'

async function GET(Request: Request) {
    return new NextResponse('Not authorised', { status: 403 })
}

export { GET }
