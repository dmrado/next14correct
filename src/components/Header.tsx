'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signIn } from 'next-auth/react'
import SignOut from '@/components/SignOut.tsx'

type NavLink = {
    label: string,
    href: string
}
type Props = { navLinks: NavLink[] }

const Header = ({ navLinks }: Props) => {
   const pathName = usePathname()
   const session = useSession()
   console.log(session)

   return (
      <header className='bottom-1 border-b-blue-600 h-20'>
         <nav className='px-4 py-2.5'>
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
               <h1>Блог</h1>
               <div>{session?.user ? (
                  <div className='flex item-center gap-4'>
                     {
                        // !!session.user.image &&
                        !!session.user.name && <Image
                           src={session.user.image}
                           alt={session.user.name}
                           width={32}
                           height={32}
                           className='rounded-full'
                        />}
                     {/*<SignOut/>*/}
                  </div>
               ) : (
                  <Link href='../app/api/auth/route.ts'>
                     <button
                        className="min-w-48 hover:bg-[#50d71e] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => signIn('google')}
                     >Войти
                     </button>
                  </Link>
               )}
               </div>
               {/*<img src={session.user.image} alt='photo'/>*/}
            </div>
         </nav>
      </header>
   )
}
export default Header