"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Form from "../global/Form";
import Button from "../global/Button";

const Signin = ({ callbackUrl }) => {
  async function handleCredentailsLogin(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    
    await signIn("credentials", {
      email,
      password,
      callbackUrl,
    });
  }
  return (
    <>
      <div>
        <h1>
          This is a<i style={{ color: "red" }}> Signin </i> page.
        </h1>
      </div>
      <hr></hr>
      <div>
        <h2>Sign In with NextAuth</h2>

        {/* Google Login */}
        <div style={{ margin: "30px 0" }}>
          <button onClick={() => signIn("google", { callbackUrl })}>
            {/* window.history.back() for last route (not sure) */}
            Continue with Google
          </button>
        </div>

        {/* Signin with Credentails */}
        <Form action={handleCredentailsLogin} style={{margin: "30px 0"}}>
          <br></br>
          <br></br>
          <input type="email" name="email" placeholder="Email" required />
          <br></br>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <br></br>
          <br></br>
          <Button value={"Credentails Login"} />
        </Form>

        <div style={{ margin: "30px 0" }}>
          <Link style={{ color: "blue" }} href="/signup">
            {" "}
            Sign Up{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signin;
