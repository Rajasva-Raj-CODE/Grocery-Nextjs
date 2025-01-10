import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProductItem = ({ product }) => {
  return (
    <div className="md:p-6 p-2 flex flex-col gap-3 items-center justify-center border rounded-lg hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-300 cursor-pointer">
      <Image
        src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.images[0]?.url}
        alt={product.name}
        width={500}
        height={200}
        className="w-[200px] h-[200px] object-contain"
      />

      <h2 className="font-bold text-lg">{product.name}</h2>
      <div className="flex gap-3">
        {product.sellingPrice && (
          <h2
            className={`font-bold text-lg ${
              product.sellingPrice && "line-through text-gray-500"
            }`}
          >
            ${product.sellingPrice}
          </h2>
        )}
        <h2 className="font-bold text-lg">${product.mrp}</h2>
      </div>

      <Dialog>
        <DialogTrigger>
          {" "}
          <Button
            variant="outline"
            className="text-primary hover:text-white hover:bg-primary"
          >
            Add to Cart
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductItem;
