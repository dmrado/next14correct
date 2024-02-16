import type { AuthOptions, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

declare module 'next-auth' {
    interface User {
        // email: string | null | undefined
        password: string | null | undefined
    }
}

export const authConfig: AuthOptions = {
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID!,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      Credentials({
         credentials: {
            email: { label: 'email', type: 'email', required: true },
            password: { label: 'password', type: 'password', required: true }
         },
         // async authorize(credentials) {
         //    if(!credentials?.email || !credentials.password) return null
         //    const currentUser: User = users.find(user => user.email === credentials.email): User
         //    if(currentUser && currentUser.password === credentials.password) {
         //       const{ password, ...userWithoutPassword } = currentUser
         //       return userWithoutPassword as User
         //    }
         //    return null
         // }
      })
   ],
   //пример приватного роута
   pages: {
      signIn: '/signin'
   }
}

// import NextAuth from 'next-auth'
//
// declare module 'next-auth' {
//     interface User {
//         email: string | null | undefined
//     }
// }
//
// export const { auth } = NextAuth({
//     callbacks: {
//         session({ session, token, user}){
//             return{
//                 ...session,
//                 user: {
//                     ...session.user,
//                     address: user.email,
//                 }
//             }
//         }
//     }
// })