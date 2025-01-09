import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProductItem = ({ product }) => {
  return (
    <div className="md:p-6 p-2 flex flex-col gap-3 items-center justify-center border rounded-lg">
      <Image
        src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.images[0]?.url}
        alt={product.name}
        width={500}
        height={200}
        className="w-[200px] h-[200px] object-contain"
      />
      <h2 className="font-bold text-lg">{product.name}</h2>
      {product.sellingPrice && (
        <h2 className="line-through font-bold">${product.sellingPrice}</h2>
      )}
      <h2 className="font-bold">${product.mrp}</h2>
      <Button
        variant="outline"
        className="text-primary hover:text-white hover:bg-primary"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductItem;
