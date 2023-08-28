"use server";
import React from 'react'

const ProtectedServerPage = () => {
  return (
    <>
    <div>
      <h1>This is a 
        <i style={{color: 'red'}}> Server-Side </i> protected page.
      </h1>
    </div>
    </>
  )
}

export default ProtectedServerPage