"use server";
import axios from "axios";

// Function to send the phone number to the server
async function sendPhoneNumber(e: FormData) {
  const number = e.get("number")?.toString();
  try {
    const response = await axios.post("http://localhost:3000/api/send-otp", {
      phoneNumber: `+91${number}`,
    });
    console.log(response.data); // You can handle the response here
  } catch (error) {
    console.error("Error sending phone number:", error);
  }
}
// Function to verify OTP
async function verifyOTP(enteredOTP: number) {
  try {
    const response = await axios.post("/api/verify-otp", { enteredOTP });
    console.log(response.data); // You can handle the response here
  } catch (error) {
    console.error("Error verifying OTP:", error);
  }
}

export { sendPhoneNumber, verifyOTP };
