"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Slider = ({ sliderList }) => {
  return (
    <Carousel>
      <CarouselContent>
        {sliderList.map((slider, index) => (
          <CarouselItem key={index}>
            <Image
              src={
                slider?.Image?.[0]?.formats?.url
                  ? `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${slider?.Image[0]?.formats?.url}`
                  : `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${
                      slider?.Image?.[0]?.url || ""
                    }`
              }
              alt={slider?.name || "slider"}
              width={1000}
              height={400}
              className="w-full sm:h-[200px] md:h-[400px] object-cover rounded-2xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
