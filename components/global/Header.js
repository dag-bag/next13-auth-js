"use server";
import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import SignOut from "@components/ui/Signout";

const Header = async () => {
  const session = await getServerSession(authOptions);

  // console.log({ session });
  return (
    <>
      <header style={{display: 'flex', gap: 30}}>
        <Link href="/"> Home </Link>
        <Link href="/protected/client"> Proctected (client) </Link>
        <Link href="/protected/server"> Proctected (server) </Link>

        {/* Session */}
        {session ? (
          <>
            <Link href="/profile/client"> Profile (client) </Link>
            <Link href="/profile/server"> Profile (server) </Link>
            <Link href="/dashboard"> Dashboard (Admins) </Link>
            <SignOut />
          </>
        ) : (
          <>
            <Link href="/signin"> Signin </Link>
            <Link href="/signup"> Signup </Link>

          </>
        )}
      </header>
    </>
  );
};

export default Header;
