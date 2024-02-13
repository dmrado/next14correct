
const clientId = process.env.clientId

const Logout = () => {
  const onSuccess = (res) => {
    console.log('Login Success! Current user: ', res.profileObj)
  }

  const onFailure = (res) => {
    console.log('Login Failed! res ', res)
  }

  return <div id='signInButton'>
    <GoogleLogout
      clientId={clientId}
      buttonText={'Выход'}
      onLogoutSuccess={onSuccess}
    />

  </div>
}

export default Logout