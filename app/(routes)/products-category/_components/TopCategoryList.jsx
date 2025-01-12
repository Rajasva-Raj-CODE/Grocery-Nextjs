import React from "react";
import Link from "next/link";
import Image from "next/image";

const TopCategoryList = ({ categoryList, selectedCategory }) => {
  return (
    <div className=" flex gap-5 mt-2 overflow-auto mx-7 md:mx-20 justify-center">
      {categoryList.map((category, index) => (
        <Link
          href={"/products-category/" + category.name}
          key={index}
          className={`flex flex-col bg-green-50 gap-2 items-center p-3 rounded-lg group cursor-pointer hover:bg-green-600 *
        w-[150px] min-w-[100px] ${
          selectedCategory == category.name && "bg-green-600 text-white"
        }`}
        >
          <Image
            src={
              process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category.icon[0]?.url
            }
            alt="icon"
            width={50}
            height={50}
            className="group-hover:scale-125 transition-all ease-in-out duration-300"
          />
          <h2
            className={`text-green-800 group-hover:text-green-400  ${
              selectedCategory == category.name && " text-white"
            }`}
          >
            {category.name}
          </h2>
        </Link>
      ))}
    </div>
  );
};

export default TopCategoryList;
