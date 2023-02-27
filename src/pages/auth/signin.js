import Header from "@/components/Header";
import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

export default function signin({ providers }) {
  console.log(providers, "providers");
  return (
    <div>
      <Header />
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="flex flex-col items-center mt-40">
          <Image
            width={400}
            height={800}
            className="object-cover"
            src="https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png"
            alt=""
          />
          <p className="text-sm italic my-10 text-center">
            application for learning purposes
          </p>
          <button
            className="bg-red-400 text-white rounded-lg p-3 hover:bg-red-500"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  console.log(providers, "providers 1");
  return { props: { providers } };
}
