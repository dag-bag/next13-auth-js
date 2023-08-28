"use client";
import { useSession } from "next-auth/react";

const ProtectedClientPage = () => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <>
      <div>
        <h1>
          This is a<i style={{ color: "red" }}> Client-Side </i> protected page.
        </h1>

        <p>
          Logged in as :
          <i style={{ color: "red" }}>
            {" "}
            {status === "loading" ? (
              <>Loading...</>
            ) : (
              <>{session?.user?.name}</>
            )}{" "}
          </i>
        </p>
      </div>
    </>
  );
};

export default ProtectedClientPage;
