"use client";
import { useSession } from "next-auth/react"

const ProtectedComponent = ({ user }) => {
    const { data: session } = useSession();
  return (
    <>
      <p>
        Logged in as :<b style={{ color: "red" }}>{ session?.user?.name || user?.name }</b>
      </p>
    </>
  );
};

export default ProtectedComponent;
