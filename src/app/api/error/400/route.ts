import { NextResponse } from 'next/server'

async function GET(request: Request) {
    return new NextResponse('Bad request', { status: 400 })
}

export { GET }
