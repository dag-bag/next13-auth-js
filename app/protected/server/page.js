"use server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import ProtectedComponent from "@/components/ui/ProtectedComponent";

const ProtectedServerPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div>
        <h1>
          This is a<i style={{ color: "red" }}> Server-Side </i> protected page.
        </h1>

        <ProtectedComponent user={session?.user} />
      </div>
    </>
  );
};

export default ProtectedServerPage;
