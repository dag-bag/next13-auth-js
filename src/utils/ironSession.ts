import { withIronSession, Session } from "next-iron-session";
import { NextApiRequest, NextApiResponse } from "next";

export default function withSession(
  handler: (
    req: NextApiRequest & { session: Session },
    res: NextApiResponse
  ) => void | Promise<void>
) {
  return withIronSession(handler, {
    password: process.env.SESSION_SECRET || "jksdfjkldfjkl",
    cookieName: "otp_session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });
}
