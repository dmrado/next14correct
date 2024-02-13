'use client'
// import { useEffect } from 'react'
// import { gapi } from 'gapi-script'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import RootLayout from '@/app/layout.js/RootLayout'

const clientId = process.env.clientId
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  return {
    props: { session }
  }
  // const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  // const user = await res.json()
  // console.log(user)
  // return {
  //   props: { session: user.id }, // will be passed to the page component as props
  // }
}

const Header = ({session}) => {
  //содержит инфу об аутентифицированном пользователе
  const { data: session, status } = useSession()

  // статус пользователя
  if (status === 'loading') return <h1> loading...</h1>
  if (status === 'authenticated') {
    return (
        <RootLayout session={session>}>
      <div>
        <h1> hi {session.user.name}</h1>
        <img src={session.user.image} alt={session.user.name + ' photo'} />
        <button onClick={signOut}>sign out</button>
      </div>
      <RootLayout/>
            )
  }
  return (
    <div>
      <button onClick={() => signIn('google')}>sign in</button>
    </div>
  )


  //
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
  //   <a className="mr-3"
  //     href="/api/auth/signin">
  //     <button
  //       className="hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Войти с Google
  //     </button>
  //   </a>
  //
  //   <a href="/api/auth/signout">
  //     <button
  //       className="hover:bg-[#D50000] p-2 rounded">Выйти с Google
  //     </button>
  //   </a>
  //
  // </div>
}

export default Header