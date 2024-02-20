import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { DefaultSession } from 'next-auth'

// declare module 'next-auth' {
//     interface User {
//         // email: string | null | undefined
//         password: string | null | undefined
//     }
// }

export const authConfig = {
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ account, profile }) {
            if (account && account.provider === 'google') {
                console.warn('account', account)
                console.warn('profile', profile)
                return true
            }
            return true // Do different verification for other providers that don't have `email_verified`
        },
        async session({ session, token, user }) {
            console.warn('session', session)
            console.warn('token', token)
            console.warn('user', user)
            return new Promise<DefaultSession>(resolve => {
                // resolve({
                //   user: { name: 'XX', email: 'xx@yy.ru', image: null },
                //   expires: '' })
                resolve(session)
            })
        }
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        }),
        // Credentials({
        // credentials: {
        //    email: { label: 'email', type: 'email', required: true },
        //    password: { label: 'password', type: 'password', required: true }
        // },
        // async authorize(credentials) {
        //    if(!credentials?.email || !credentials.password) return null
        //    const currentUser: User = users.find(user => user.email === credentials.email): User
        //    if(currentUser && currentUser.password === credentials.password) {
        //       const{ password, ...userWithoutPassword } = currentUser
        //       return userWithoutPassword as User
        //    }
        //    return null
        // }
        // })
    ],
    //пример приватного роута
    // pages: {
    //    signIn: '/signin'
    // }
}