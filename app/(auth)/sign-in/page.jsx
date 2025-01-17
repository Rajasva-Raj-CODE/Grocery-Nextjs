"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (jwt) {
      router.push("/");
    }
  }, []);
  
  const onSignIN = () => {
    GlobalApi.SignIn(email, password).then(
      (res) => {
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        sessionStorage.setItem("jwt", res.data.jwt);
        router.push("/");
        toast("Login Successfully");
      },
      (err) => {
        toast("Error while Signing In");
      }
    );
  };

  return (
    <div className="flex items-baseline justify-center my-20">
      <div className="flex flex-col items-center justify-center gap-5 p-10 bg-slate-200  border-gray-200">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
        <h2 className="font-bold text-3xl">Sign In to Account</h2>
        <h2 className="text-gray-500">
          Enter your Email and Password to Sign In
        </h2>
        <div className="flex flex-col gap-5 mt-7 w-full ">
          <Input
            className="bg-white p-5"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="bg-white p-5"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={() => onSignIN()} disabled={!(email || password)}>
            Sign In
          </Button>
          <p>
            Don't have an account ?
            <Link href="/create-account" className="text-blue-500">
              Click here to Create new Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
