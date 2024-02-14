import { signOut } from 'next-auth/react'

const SignOut = () => {
   return (
      <div>
         <form action={async () => {
            'use server'
            await signOut({ callbackUrl: '/' })
         }}>
            <button className="hover:bg-[#D50000] p-2 rounded"
               type="submit"
            >Выйти
            </button>
         </form>
      </div>
   )
}
export default SignOut