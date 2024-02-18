'use client'
import {useSession, signIn, signOut} from 'next-auth/react'


export default function Navigation() {
    const {data: session} = useSession()
    console.log('session', session)
    if (session) {
        return (
            <div className="flex flex-col justify-center items-center">
                Signed in as {session.user.email}
                <button className='min-w-40 border border-green-500 mt-8 hover:bg-[#D50000] px-4 py-1.5 rounded'
                        onClick={() => signOut()}>Sign out
                </button>
            </div>
        )
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div className='flex border border-[#D50000] px-2 py-1.5 mt-2 rounded hover:text-[#D50000]'>{
                !!session ? `Юзер ${session?.user?.email} залогинен` : 'Нет в сессии никакого юзера!'}
            </div>
                <button className='min-w-40 border border-green-500 mt-4 hover:bg-[#50d71e]  py-1.5 rounded'
                    onClick={() => signIn()}>Sign in
            </button>
        </div>
    )
}