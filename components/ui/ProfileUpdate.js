"use client"
import Form from "../global/Form";
import { updateUser } from "@/app/api/handleForm";
import Button from "../global/Button";

const ProfileUpdate = ({ update }) => {

  async function handleUpdateProfile(formData) {
    const name = formData.get("name");
    const image = formData.get("image");

    // update data by rerender page but only for client-side page
    if(update) {
      update({ name, image });
    }

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
          <Button value="Update Profile" />
          <br></br>
        </Form>
      </div>
    </>
  );
};

export default ProfileUpdate;
