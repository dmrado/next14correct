'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import { FocusEventHandler, useState } from 'react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
   const [ open, setOpen ] = useState(true)
   const router = useRouter()

   const submitHandler: FocusEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const result = await signIn('credentials', {
         email: formdata.get('email'),
         password: formdata.get('password'),
         redirect: false,
      })

      if(result && !result.error) {
         // setOpen(false)
         router.push('/posts')
      }else {
         console.log('Не аутентифицирован', result)
      }
   }
   return <>
      <form onSubmit={submitHandler}>
         <div className='flex flex-col justify-center items-center mx-8 '>
            <input type='email' name='email' required placeholder='email' className='rounded p-2 m-3'/>
            <input type='password' name='password' required placeholder='password' className='rounded p-2 m-3'/>

            <button className="min-w-48 hover:bg-[#50d71e] px-10 py-2 mt-3 rounded min-w-10"
               type="submit"
            >Войти
            </button>
         </div>
      </form>
   </>
}

export default LoginPage