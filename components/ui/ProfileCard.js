import Image from "next/image";

const ProfileCard = ({ user }) => {
  return (
    <>
      <div>
        <h2>Name: {user?.name}</h2>

        {user?.image && 
            <Image src={user.image} alt="avatar" width={100} height={100} />
        }

        <h2>Email: {user?.email}</h2>
        <h2>Provider: {user?.provider}</h2>
        <h2>Role: {user?.role}</h2>
        <h2>Last updatedAt: {user?.updatedAt?.toString()}</h2>
        <div>

        <Image src={"https://lh3.googleusercontent.com/a/AAcHTtfvHjOVHsH9fIFbG4jx2LDxEkcF-DfisgSJ9-9aqKfXHcs=s96-c"} alt="avatar" width={100} height={100} />
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
