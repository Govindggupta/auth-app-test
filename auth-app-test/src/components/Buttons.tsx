"use client";

import {
  useSession,
  signIn,
  signOut,
} from "next-auth/react";

export default function Buttons() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={() => signOut()}>
            Sign out
          </button>
      ) : (
        <div className="flex justify-center">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={() => signIn()}>
            Sign in
          </button>
        </div>
      )}
      
    </>
  );
}
