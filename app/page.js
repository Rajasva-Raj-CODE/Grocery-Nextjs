import React from "react";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";

const page = async () => {
  const sliderList = await GlobalApi.getSliders();

  return (
    <div className="p-5 md:p-10 px-16">
      <Slider sliderList={sliderList} />
    </div>
  );
};

export default page;
