import React from "react";
import Form from "../global/Form";
import { updateUser } from "@/app/api/handleForm";
const ProfileUpdate = () => {

  async function handleUpdateProfile(formData) {
    const name = formData.get("name");
    const image = formData.get("image");

    // update user function
    const response = await updateUser({ name, image });
    // console.log(response);
    if (response?.msg) {
      alert(response?.msg);
    }

  }
  return (
    <>
      <div>
        <br></br>
        <hr></hr>
        <br></br>
        <h2>Update Profile</h2>

        <Form action={handleUpdateProfile} style={{nargin: '20px 0'}}>
          <br></br>
          <input type="text" name="name" placeholder="Name" required />
          <br></br>
          <input type="text" name="image" placeholder="Image" required />
          <br></br> <br></br>
          <button>Update</button>
          <br></br>
        </Form>
      </div>
    </>
  );
};

export default ProfileUpdate;
