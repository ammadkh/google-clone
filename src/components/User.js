import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
export default function User() {
  const { data: session } = useSession();
  console.log(session, "user");
  if (session) {
    return (
      <img
        src={session.user.image}
        alt=""
        onClick={signOut}
        className="h-10 w-10 rounded-full hover:bg-gray-200 p-1 cursor-pointer"
      />
    );
  }
  return (
    <button
      onClick={signIn}
      className="bg-blue-500 px-7 py-2 text-white rounded-md font-medium hover:brightness-105 hover:shadow-md"
    >
      sign in
    </button>
  );
}
