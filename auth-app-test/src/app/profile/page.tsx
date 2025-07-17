import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function Profile() {
  const session = await getServerSession(authOptions);

  const image = session?.user?.image;  

  return (
    <div>
      <h1>Profile</h1>
      <p>Hello {session?.user?.name}</p>
      <p>Your email is {session?.user?.email}</p>
      <img src={image as string} alt="Profile" />
    </div>
  );
}
