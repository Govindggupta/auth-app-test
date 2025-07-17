"use client";
import { useSession } from "next-auth/react";

export default function ClientProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You are not signed in.</div>;
  }

  return (
    <div>
      <h1>Client Profile</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <p>Hello {session.user?.name}</p>
      <p>Your email is {session.user?.email}</p>
      <img src={session.user?.image as string} alt="Profile" />
    </div>
  );
}