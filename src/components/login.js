import { GoogleLogin } from 'react-google-login'
//todo cors проверить

const clientId = process.env.clientId

const Login = () => {
  const onSuccess = (res) => {
    console.log('Login Success! Current user: ', res.profileObj)
  }

  const onFailure = (res) => {
    console.log('Login Failed! res ', res)
  }

  return <div id='signInButton'>
    <GoogleLogin
      clientId={clientId}
      buttonText={'Войти'}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  </div>
}

export default Login