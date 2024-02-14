import NextAuth from 'next-auth'
import { authConfig } from '../../../../config/auth.ts'

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST } from '../../../../config/auth.ts'
