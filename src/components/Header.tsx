import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'

export default async function Header() {
   const session = await getServerSession()
   console.log('session', session)
   if (session && session.user) {
      return (
         <div
            className='flex justify-between items-center h-24 min-w-full fixed top-0 left-o right-0 py-2 px-12 bg-black opacity-95 z-40 shadow-lg shadow-[#50d71e]'>
            <div className='flex justify-between items-center py-2'>
               <p className='mr-2 sm:px-2 sm:flex-nowrap'>{session.user.name}</p>
               <div className='mr-4'>
                  {
                     !!session.user.image && !!session.user.name &&
                          <Image
                             src={session.user.image}
                             alt={session.user.name}
                             width={52}
                             height={52}
                             className='rounded-full'
                          />
                  }
               </div>
            </div>
            <Link className='flex px-10 py-2 hover:border hover:border-[#D50000] hover:rounded hover:text-[#D50000]'
               href="/api/auth/signout">Выйти</Link>
         </div>
      )
   }
   return (
      <div
         className='flex justify-between items-center h-24 min-w-full fixed top-0 left-o right-1 py-2 px-12 duration-300  bg-black opacity-95 z-40 shadow-xl shadow-[#004E98]'>
         <p className='mr-20'>Вход не выполнен</p>
         <Link
            className='flex justify-center items-center min-w-40 hover:border hover:border-[#50d71e] hover:text-[#50d71e] py-1.5 rounded'
            href="/api/auth/signin">Войти</Link>
      </div>
   )
}