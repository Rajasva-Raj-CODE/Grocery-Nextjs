"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
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

const Header = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      console.log("Category List Resp", res.data.data);
      setCategoryList(res.data.data);
    });
  };
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
              return (
                <DropdownMenuItem key={index}>
                  <Image src={category?.icon[0]?.formats?.small?.url} alt="icon" width={20} height={20} />
                  <h2>{category.name}</h2>
                </DropdownMenuItem>
              );
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
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
