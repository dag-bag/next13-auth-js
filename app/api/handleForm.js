"use server";
import { getServerSession } from "next-auth/next";
import bcrypt from "bcrypt";
import { authOptions } from "./auth/[...nextauth]/options";
import User from "@models/userModel";
import { redirect } from "next/navigation";
import { generateToken } from "@/utils/token";
import sendEmail from "@/utils/sendEmail";

const allowedDomains = process.env.ALLOW_DOMAIN.split(',');
const BASE_URL = process.env.NEXTAUTH_URL;

// signin wih OAuth Google
export async function updateUser({ name, image }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Not authenticated"); // if no session, return unauthorized
  }

  // validate image domain
  const imageUrl = new URL(image);
  if (!allowedDomains.includes(imageUrl.hostname)) {
    throw new Error("Invalid Image URL, Must be Whitelisted Hostname");
  }

  try {
    // update user
    const user = await User.findByIdAndUpdate(
      session?.user?._id,
      {
        name,
        image,
      },
      { new: true }
    ).select("-password");

    if (!user) {
      throw new Error("User not found"); // if no user, return not found
    }

    return { msg: "User Updated Successfully" };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

// signup wih credentials
export async function signUpWithCredentials( data ) {
  
  try {
    const user = await User.findOne({email: data.email});

    if(user) {
      throw new Error("User already exists"); // if user exists, return error
    }

    if(data.password) {
      data.password = await bcrypt.hash(data.password, 12);
    } // if password exists, hash password

    const token = generateToken({ user: data });

    await sendEmail({
      to: data.email,
      url: `${BASE_URL}/verify?token=${token}`,
      text: "Verify your email address",
    });
    


    return { msg: "Signup Success! Check your Email to complete the Registration" };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}
