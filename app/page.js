import React from "react";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";

const page = async () => {
  const sliderList = await GlobalApi.getSliders();
  const categoryList = await GlobalApi.getCategoryList();
  const ProductsList= await GlobalApi.getAllProducts();

  return (
    <div className="p-5 md:px-16">
      <Slider sliderList = {sliderList} />
      <CategoryList categoryList = {categoryList} />
      <ProductList ProductsList = {ProductsList} />

    </div>
  );
};

export default page;
