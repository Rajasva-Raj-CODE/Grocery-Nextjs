"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Username, setUsername] = useState("");

  const onCreateAccount = () => {
    

  }

  return (
    <div className="flex items-baseline justify-center my-10">
      <div className="flex flex-col items-center justify-center gap-5 p-10 bg-slate-100  border-gray-200">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
        <h2 className="font-bold text-3xl">Create Account</h2>
        <h2 className="text-gray-500">
          Enter your Email and Password to Create an account
        </h2>
        <div className="flex flex-col gap-5 mt-7 w-full">
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={() => onCreateAccount()}>Create Account</Button>
          <p>
            Already have an account?{" "}
            <Link href="/sign-in" className="text-blue-500">
              Click here to Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
