'use client'
/**LogoutButton Component */
import { signOut } from 'next-auth/react'

function LogoutButton() {

   return (
      <button
         className='btn btn-secondary btn-sm w-100'
         onClick={() => signOut()}
      >
         Logout<i className="ps-2 fs-6 bi bi-box-arrow-right"></i>
      </button>
   )
}

export default LogoutButton