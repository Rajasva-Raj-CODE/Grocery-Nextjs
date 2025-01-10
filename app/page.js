import React from "react";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Image from "next/image";
import Footer from "./_components/Footer";

const page = async () => {
  const sliderList = await GlobalApi.getSliders();
  const categoryList = await GlobalApi.getCategoryList();
  const ProductsList = await GlobalApi.getAllProducts();

  return (
    <div className="p-5 md:px-16">
      <Slider sliderList={sliderList} />
      <CategoryList categoryList={categoryList} />
      <ProductList ProductsList={ProductsList} />

      {/*Banner*/}
      <Image
        src="/banner.png"
        alt="logo"
        width={1000}
        height={300}
        className="w-full h-[400px] object-contain"
      />

      {/*Footer*/}
      <Footer />
    </div>
  );
};

export default page;
