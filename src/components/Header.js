'use client'
import { useEffect } from 'react'
import { gapi } from 'gapi-script'
import { signIn } from 'next-auth/react'

const clientId = process.env.clientId

const Header = () => {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }

    gapi.load('client:auth2', start)
  }, [])

  const handleSignIn = (e) => {
    e.preventDefault()
    // Инициируем вход через Google
    signIn('google', { callbackUrl: '/' })
      .then((res) => {
        console.log('Аутентификация прошла успешно', res)
        // Дополнительные действия после успешной аутентификации
      })
      .catch((error) => {
        console.error('Ошибка аутентификации', error)
        // Обработка ошибки аутентификации
      })
  }

  // let accessToken = gapi.auth.getToken().access_token

  return <div className="flex flex-wrap h-20 justify-center items-center">
    <a className="mr-3"
      href="/api/auth/signin">
      <button
        className="hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Войти с Google
      </button>
    </a>

    <a href="/api/auth/signout">
      <button
        className="hover:bg-[#D50000] p-2 rounded">Выйти с Google
      </button>
    </a>

  </div>
}

export default Header