"use client";
import React from "react";
import Image from "next/image";

const CategoryList = ({ categoryList }) => {
 
  return (
    <div className="mt-5">
      <h2 className="text-green-600 font-bold text-2xl">Shop By Category</h2>
      <div>
        {categoryList.map((category, index) => (
          <div key={index}>
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category.icon[0]?.url
              }
              alt="icon"
              width={50}
              height={50}
            />
            <h2 className="text-lg">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
