import { NextResponse } from "next/server";
import twilio from "twilio";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
// Generate a random OTP
function generateOTP() {
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp;
}

export async function POST(request: Request) {
  const { phoneNumber } = await request.json();
  const twilioClient = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  const otp = generateOTP(); // Generate OTP

  try {
    await twilioClient.messages.create({
      to: phoneNumber,
      from: process.env.TWILIO_PHONE_NUMBER,
      body: `Your OTP is: ${otp}`,
    });
    const hashedOTP = await bcrypt.hash(otp.toString(), 10);
    const twoMinutes = 2 * 60 * 1000; // 2 minutes in milliseconds
    const expirationTime = Date.now() + twoMinutes;
    cookies().set("hashedOTP", hashedOTP, {
      expires: expirationTime,
    });

    // await storeOTPInSession(request, otp); // Store OTP in session

    return new Response("OTP Verified SuccessFully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error Sending OTP", { status: 500 });
  }
}
