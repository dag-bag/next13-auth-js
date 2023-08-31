"use server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]/options";
import User from "@models/userModel";
import { redirect } from "next/navigation";

const allowedDomains = process.env.ALLOW_DOMAIN.split(',');

export async function updateUser({ name, image }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Not authenticated"); // if no session, return unauthorized
  }

  // validate image domain
  const imageUrl = new URL(image);
  if (!allowedDomains.includes(imageUrl.hostname)) {
    return { msg: "Not Whitelisted hostname for image url"};
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
