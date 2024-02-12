'use client'
import { useEffect } from 'react'
import { gapi } from 'gapi-script'
import LoginButton from './login.js'
import LogoutButton from './logout.js'

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

  let accessToken = gapi.auth.getToken().access_token

  return <div>
    <LoginButton/>
    <LogoutButton/>
  </div>
}

export default Header