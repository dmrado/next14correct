import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { DefaultSession } from 'next-auth'

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // async signIn({ account, profile }) {
    //   if (account && account.provider === 'google') {
    //     console.warn('account', account)
    //     console.warn('profile', profile)
    //     return true
    //   }
    //   return true // Do different verification for other providers that don't have `email_verified`
    // },
    // async session({ session, token, user }) {
    //   console.warn('session', session)
    //   console.warn('token', token)
    //   console.warn('user', user)
    //   return new Promise<DefaultSession>(resolve => {
    //     // resolve({
    //     //   user: { name: 'XX', email: 'xx@yy.ru', image: null },
    //     //   expires: '' })
    //     resolve(session)
    //   })
    // }
  },
  providers: [
    GoogleProvider({
      clientId: '726764882743-id6e2d6sr1jkc6a2s2vvsksk303mim87.apps.googleusercontent.com',
      clientSecret: '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',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    }),
  ],
})

export { handler as GET, handler as POST }
