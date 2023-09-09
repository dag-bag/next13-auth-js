import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000";

// Registration Function
async function registerUser(newUser) {
  try {
    const response = await axios.post(`${BASE_URL}/new-user`, newUser);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Login Function
async function loginUser(credentials) {
  try {
    const response = await axios.post(`${BASE_URL}/existing-user`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// OTP Validation Function
async function validateOTP(otpData) {
  try {
    const response = await axios.post(`${BASE_URL}/validate-user`, otpData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Export the functions
// Static email and password for comparison
const staticEmail = "example@example.com";
const staticPassword = "password123";

// Function to authenticate email and password
function authenticateUser(email, password) {
  if (email === staticEmail && password === staticPassword) {
    return {
      success: true,
      message: "Authentication successful",
      res: {
        user: {
          name: "virender",
          email: "virender@gmail.com",
          id: 222,
          // User properties
        },
        token: "your-api-token",
      },
    };
  } else {
    return { success: false, message: "Authentication failed" };
  }
}

export { registerUser, loginUser, validateOTP, authenticateUser };
