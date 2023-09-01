"use client"
import Button from "../global/Button"
import Form from "../global/Form"
import { signUpWithCredentials } from "../../app/api/handleForm"

const Signup = () => {

  async function handleSignUpCredentials(formData) {
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    const res = await signUpWithCredentials({ name, email, password });

    if(res?.msg) {
      alert(res?.msg); // show success alert message
    }


  }

  return (
    <>
    <h2>Signup</h2>

    <Form action={handleSignUpCredentials} style={{margin: "30px 0"}}>
    <br></br><br></br>
      <input type="text" name="name" placeholder="Name" required />
      <br></br><br></br>
      <input type="email" name="email" placeholder="Email" required />
      <br></br><br></br>
      <input type="password" name="password" placeholder="Password" required />
      <br></br><br></br>
      <Button value={"Register"} />
    </Form>
    </>
  )
}

export default Signup