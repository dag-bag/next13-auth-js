import GoogleProvider from "next-auth/providers/google";
import { signInWithOAuth, getUserByEmail } from "./modules";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.type === "oauth") {
        return await signInWithOAuth({ account, profile });
      }
      return true;
    },
    async jwt({ token, trigger, session }) {
      console.log({ trigger, session });

      if (trigger === "update") {
        token.user.name = session.name;
        token.user.image = session.image;
      } else {
        const user = await getUserByEmail({ email: token.email });
        token.user = user;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
};
