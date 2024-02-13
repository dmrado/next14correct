import { useSession, signIn } from 'next-auth/react'
import { useState } from 'react'

const LoginModal = () => {
   const [ open, setOpen ] = useState(false)
   const session = useSession()

   if(!session.data?.user) {
      setOpen(true)
      signIn()
   }
   return <>
      {session}
   </>
}

export default LoginModal