import User from "@/models/userModel"

// fucntion: signInWithOAuth
// description: creates new user in database if user does not exist
export async function signInWithOAuth({ account, profile }) {
    // check if user exists in database
    const user = await User.findOne({ email: profile.email });
    
    if(user) return true; // user exists in database

    // create new user in database
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

// function: getUserByEmail
// description: gets user from database by email
export async function getUserByEmail({ email }) {
    const user = await User.findOne({ email }).select('-password');
    
    if(!user) {
        throw new Error("User not found, check provided email"); // user does not exist in database
    }

    // user exists in database
    return { ...user._doc, _id: user._id.toString() };
}