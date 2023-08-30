"use client";
import Profile from '@components/ui/Profile'
import { useSession } from 'next-auth/react'

const ProfilePage = () => {
  const { data: session } = useSession()
  return (
    <>
    <div>
      <h1>This is a 
        <i style={{color: 'red'}}> Client-Side </i> Profile page.
      </h1>
      <Profile user={session?.user} />
    </div>
    </>
  )
}

export default ProfilePage