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
            const user = await getUserByEmail({ email: token.email });
            token.user = user;
            // console.log({user});
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

/*============================================*/

// fucntion: signInWithOAuth
// description: creates new user in database if user does not exist
async function signInWithOAuth({ account, profile }) {
    // check if user exists in database
    const user = await User.findOne({ email: profile.email });
    
    if(user) return true; // user exists in database

    console.log("before picture URL : ", profile.picture);
    // create new user in database
    const newUser = await new User({
        name: profile.name,
        email: profile.email,
        image: "https://lh3.googleusercontent.com/a/AAcHTtfvHjOVHsH9fIFbG4jx2LDxEkcF-DfisgSJ9-9aqKfXHcs=s96-c",
        provider: account.provider,
    }).save(); // save new user to database

    console.log("after picture URL : ", profile.picture);
    
    if(newUser) {
        console.log("New user created: ", newUser);
        return true; // user was created in database
    }

    console.log("Error creating new user: ", newUser);
    return false; // user was not created in database
}

// function: getUserByEmail
// description: gets user from database by email
async function getUserByEmail({ email }) {
    const user = await User.findOne({ email }).select('-password');
    
    if(!user) {
        throw new Error("User not found, check provided email"); // user does not exist in database
    }

    // user exists in database
    return { ...user._doc, _id: user._id.toString() };
}