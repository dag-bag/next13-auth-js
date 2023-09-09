import Signin from '@/components/ui/Signin'
import React from 'react'

const SigninPage = ({searchParams: { callbackUrl }}) => {
  return (
    <>
      <Signin callbackUrl={callbackUrl} />
    </>
  )
}

export default SigninPage