"use client"
import ProfileCard from './ProfileCard'
import ProfileUpdate from './ProfileUpdate'
import { useSession } from "next-auth/react"

const Profile = ({ user }) => {
  const { data: session,update } = useSession();

  console.log({session})

  return (
    <>
    <ProfileCard user={ session?.user || user } />

    <ProfileUpdate update={update} />
    </>
  )
}

export default Profile