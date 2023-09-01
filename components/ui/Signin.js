"use client";
import React from 'react'
import { signIn } from 'next-auth/react'
import Link from 'next/link';

const Signin = ({ callbackUrl }) => {
  return (
    <>
    <div>
      <h1>This is a 
        <i style={{color: 'red'}}> Signin </i> page.
      </h1>
    </div>
    <hr></hr>
    <div>
        <h2>Sign In with NextAuth</h2>

        {/* Google Login */}
        <div style={{margin: '30px 0'}}>
            <button onClick={() => signIn('google', { callbackUrl })}>
            {/* window.history.back() for last route (not sure) */}
                Continue with Google
            </button>
        </div>

        <div style={{margin: '30px 0'}}>
          <Link style={{color: 'blue'}} href="/signup"> Sign Up </Link>
        </div>
    </div>
    </>
  )
}

export default Signin