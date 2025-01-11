import React from 'react'

const TopCategoryList = ({ categoryList }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 sm:grid-cols-4 lg:grid-cols-7 gap-5 mt-2">
    {categoryList.map((category, index) => (
      <Link
        href={"/products-category/" + category.name}
        key={index}
        className="flex flex-col bg-green-50 gap-2 items-center p-3 rounded-lg group cursor-pointer hover:bg-green-600
         "
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
        <h2 className="text-green-800 group-hover:text-green-400">
          {category.name}
        </h2>
      </Link>
    ))}
  </div>
  )
}

export default TopCategoryList