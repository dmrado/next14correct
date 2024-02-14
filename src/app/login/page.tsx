import LoginPage from '@/components/LoginPage.tsx'
import SignIn from '@/components/SignIn.tsx'

const Login = () => {
   return <>
      {/*todo сделать рендер компнентов в зависимости от того кто ломится: хозяин блога - просто кнопку нажать, но если что можно и email, пароль ввести*/}
      <SignIn/>
      <LoginPage/>
   </>
}
export default Login