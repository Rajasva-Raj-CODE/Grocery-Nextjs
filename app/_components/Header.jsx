"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CircleUserRound, LayoutGrid, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalApi from "../_utils/GlobalApi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [categoryList, setCategoryList] = useState([]);
  const isLogin = sessionStorage.getItem("jwt") ? true : false;
  const router = useRouter()

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      console.log("Category List Resp", res.data.data);
      setCategoryList(res.data.data);
    });
  };

  const onSignOut=()=>{
  sessionStorage.clear()
  router.push('/sign-in')
  }
  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" alt="logo" width={150} height={100} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="md:flex hidden gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
              <LayoutGrid className="h-5 w-5" /> Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, index) => {
              <Link key={index} href={"/products-category/" + category.name}>
                <DropdownMenuItem
                  key={index}
                  className="flex gap-4 items-center cursor-pointer"
                >
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                      category?.icon[0]?.formats?.small?.url
                    }
                    alt="icon"
                    width={30}
                    height={30}
                  />
                  <h2 className="text-lg">{category.name}</h2>
                </DropdownMenuItem>
              </Link>;
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          {" "}
          <ShoppingBag /> 0
        </h2>
        {!isLogin ? (
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <CircleUserRound className=" cursor-pointer  h-10 w-10 p-2 rounded-full bg-green-200 text-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>My Orders</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>onSignOut()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default Header;
