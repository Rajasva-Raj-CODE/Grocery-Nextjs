import GlobalApi from "@/app/_utils/GlobalApi";
import React from "react";

const ProductCategory = async ({ params }) => {
  const productList = await GlobalApi.getProductsByCategory(
    params.categoryName
  );
  return (
    <div>
      <h2 className="p-4 bg-primary text-white font-bold text-3xl text-center">
        {params.categoryName}
      </h2>
    </div>
  );
};

export default ProductCategory;
