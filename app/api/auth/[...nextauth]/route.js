import NextAuth from "next-auth";
import connectDb from "@/utils/database";
import { authOptions } from "./options";

connectDb();

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };