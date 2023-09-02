import { verifyWithCredentials } from "../api/handleForm";

const page = async ({ searchParams: { token } }) => {
  const res = await verifyWithCredentials(token);
  // if (res?.msg) {
  //   console.log(res.msg);
  // }
  return (
        <>
        <h1 style={{color: "green"}}>Verify Page</h1>
        <p>{res?.msg}</p>
    </>
  )
};

export default page;
