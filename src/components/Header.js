import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import RootLayout from '@/app/layout'

const clientId = process.env.clientId

export async function getServerSideProps(ctx) {
   const session = await getSession(ctx)
   console.log('ctx', ctx)
   console.log('session', ctx)
   return {
      props: { session }
   }
}

const Header = () => {
   // Содержит информацию об аутентифицированном пользователе
   const { data: session, status } = useSession()

   // Статус пользователя
   if (status === 'loading') return <h1>Загрузка...</h1>
   if (status === 'authenticated') {
      return (
         <div>
            <h1>Привет, {session.user.name}</h1>
            <img src={session.user.image} alt='photo' />
            <button className="hover:bg-[#D50000] p-2 rounded"
               onClick={signOut}>Выйти</button>
         </div>
      )
   }

   return (
      <div>

         <button className="hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => signIn('google')}>Войти</button>
      </div>
   )
}

export default function AuthPage({ session }) {
   return (
      <RootLayout>
         <Header session={session} />
      </RootLayout>
   )
}

// useEffect(() => {
//   function start() {
//     gapi.client.init({
//       clientId: clientId,
//       scope: ''
//     })
//   }
//   gapi.load('client:auth2', start)
// }, [])

// const handleSignIn = (e) => {
//   e.preventDefault()
//   // Инициируем вход через Google
//   signIn('google', { callbackUrl: '/' })
//     .then((res) => {
//       console.log('Аутентификация прошла успешно', res)
//       // Дополнительные действия после успешной аутентификации
//     })
//     .catch((error) => {
//       console.error('Ошибка аутентификации', error)
//       // Обработка ошибки аутентификации
//     })
// }

// let accessToken = gapi.auth.getToken().access_token

// return <div className="flex flex-wrap h-20 justify-center items-center">
//   <a className="mr-3" href="/api/auth/signin"></s>
//   <a href="/api/auth/signout"></a>
// </div>
