import NextAuth, { DefaultSession } from 'next-auth'
import YandexProvider from 'next-auth/providers/yandex'
// todo: no sense to have this constant separately
const handler = NextAuth({
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
                resolve(session)
            })
        }
    },
    providers: [
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID!,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        //     authorization: {
        //         params: {
        //             prompt: 'consent',
        //             access_type: 'offline',
        //             response_type: 'code'
        //         }
        //     },
        // }),
        YandexProvider({
            clientId: process.env.YANDEX_CLIENT_ID ?? '',
            clientSecret: process.env.YANDEX_CLIENT_SECRET ?? ''
        })
    ],
})

export { handler as GET, handler as POST }
