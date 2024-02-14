'use client'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

const GoogleButton = () => {
   const searchParams = useSearchParams()
   const callbackUrl = searchParams.get('callbackUrl') || '/posts'
   return <>
      <button className='min-w-48 hover:bg-[#50d71e] my-10 text-white font-bold py-2 px-4 rounded ' onClick={() => signIn('google', { callbackUrl })}>Войти с Google</button>
   </>
}

export default GoogleButton