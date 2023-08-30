"use server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

const ProtectedServerPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <>
      <div>
        <h1>
          This is a<i style={{ color: "red" }}> Server-Side </i> protected page.
        </h1>

        <p>
          Logged in as :<i style={{ color: "red" }}>{session?.user?.name}</i>
        </p>
      </div>
    </>
  );
};

export default ProtectedServerPage;
