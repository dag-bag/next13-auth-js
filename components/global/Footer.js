"use server";
import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Header = async () => {
  const session = await getServerSession(authOptions);

  // console.log({ session });
  return (
    <>
      <footer> Footer </footer>
    </>
  );
};

export default Header;

//   <header style={{display: 'flex', gap: 30}}>
//     <Link href="/"> Home </Link>
//     <Link href="/protected/client"> Proctected (client) </Link>
//     <Link href="/protected/server"> Proctected (server) </Link>

//     {/* Session */}
//     {session ? (
//       <>
//         <Link href="/profile/client"> Profile (client) </Link>
//         <Link href="/profile/server"> Profile (server) </Link>
//         <Link href="/dashboard"> Dashboard (Admins) </Link>
//       </>
//     ) : (
//       <>
//         <Link href="/signin"> Signin </Link>

//       </>
//     )}
//   </header>
