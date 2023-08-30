"use server";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Profile from '@components/ui/Profile'
import { getServerSession } from 'next-auth/next'

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
    <div>
      <h1>This is a 
        <i style={{color: 'red'}}> Server-side </i> Profile page.
      </h1>
      <Profile user={session?.user} />
    </div>
    </>
  )
}

export default ProfilePage