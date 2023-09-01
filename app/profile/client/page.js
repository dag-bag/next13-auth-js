"use client";
import Profile from '@/components/ui/ProfilePage'

const ProfilePage = () => {
  return (
    <>
    <div>
      <h1>This is a 
        <i style={{color: 'red'}}> Client-Side </i> Profile page.
      </h1>
      <Profile />
    </div>
    </>
  )
}

export default ProfilePage