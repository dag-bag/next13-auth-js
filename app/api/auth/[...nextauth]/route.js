import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/userModel"
import connectDb from "@/utils/database";

connectDb();

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
    ],
    pages: {
        signIn: "/signin",
    },
    callbacks : {
        async signIn({ user, account, profile, email, credentials }) {
            if(account.type === "oauth") {
                return await signInWithOAuth({ account, profile });
            }
            return true;
        },
        async jwt({ token, trigger, session }) {
            return token;
        },
        async session({ session, token }) {
            return session;
        },
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

/*============================================*/

// fucntion: signInWithOAuth
// description: 
async function signInWithOAuth({ account, profile }) {
    const user = await User.findOne({ email: profile.email });
    if(user) {
        return true; // user already exists in database
    }

    const newUser = await new User({
        name: profile.name,
        email: profile.email,
        image: profile.picture,
        provider: account.provider,
    }).save(); // save new user to database

    
    if(newUser) {
        console.log("New user created: ", newUser);
        return true; // user was created in database
    }

    console.log("Error creating new user: ", newUser);
    return false; // user was not created in database
}