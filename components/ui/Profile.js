"use client"
import ProfileCard from './ProfileCard'
import ProfileUpdate from './ProfileUpdate'

const Profile = ({ user }) => {
  return (
    <>
    <ProfileCard user={user} />

    <ProfileUpdate user={user} />
    </>
  )
}

export default Profile