'use client';
/** LoginWithGoogle component::*/
import { signIn } from 'next-auth/react'

function LoginWithGoogle() {

   return (
      <button className='btn btn-dark mx-auto d-block' onClick={() => signIn('google')}>
         <i className="bi bi-google pe-2"></i>Sign in with Google
      </button>

   )
}

export default LoginWithGoogle