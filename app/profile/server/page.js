"use server";
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import Profile from '@/components/ui/ProfilePage'
import { getServerSession } from 'next-auth/next'

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  // console.log({session});
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