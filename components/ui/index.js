"use client"
import ProfileCard from './ProfileCard'
import ProfileUpdate from './ProfileUpdate'

const Profile = ({ user, update }) => {
  return (
    <>
    <ProfileCard user={user} />

    <ProfileUpdate update={update} />
    </>
  )
}

export default Profile