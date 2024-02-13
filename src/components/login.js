import { GoogleLogin } from 'react-google-login'

const clientId = '511592118187-cg6kmvv6u58dqlg23u2oi36u9839rfsn.apps.googleusercontent.com'

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
      buttonText="Войти"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />

  </div>
}

export default Login