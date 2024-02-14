import GoogleButton from '@/components/GoogleButton.tsx'

const SignIn = () => {
   return <div className='flex flex-col justify-center items-center'>
      <h1 className='my-10'>Пожалуйста авторизуйтесь </h1>
      <GoogleButton/>
   </div>
}
export default SignIn