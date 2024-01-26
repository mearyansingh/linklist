/**This is a login page component */
/**This component handles the logic of login with google */
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import LoginWithGoogle from '@/components/buttons/LoginWithGoogle'
import { authOptions } from '../../api/auth/[...nextauth]/route'


export const metadata = {
   title: 'Sign In',
}

async function LoginPage() {

   const session = await getServerSession(authOptions)

   if (session) {
      return redirect('/')
   }

   return (
      <section className='flex-grow-1 d-flex align-items-center justify-content-center'>
         <div className='container'>
            <h1 className='fw-bold text-center'>Sign In</h1>
            <p className='text-center'>Sign in to your account using one of the methods below</p>
            <LoginWithGoogle />
         </div>
      </section>
   )
}

export default LoginPage