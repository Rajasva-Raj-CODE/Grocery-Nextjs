"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import GlobalApi from "../_utils/GlobalApi";
import { toast } from "sonner";

const ProductItemDetail = ({ product }) => {
  const jwt = sessionStorage.getItem("jwt");
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [productTotalPrice, setProductTotalPrice] = useState(
    product.sellingPrice ? product.sellingPrice : product.mrp
  );

  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const addToCart = () => {
    if (!jwt) {
      router.push("/sign-in");
      return;
    }

    const data = {
      data: {  
        quantity: quantity,
        amount: (quantity * productTotalPrice).toFixed(2),
        products: product.id,
        users_permissions_users: user.id,
      },
    };

    console.log(data);

    GlobalApi.addToCart(data, jwt).then(
      (res) => {
        console.log("addToCart--->Res", res);
        toast("Added to Cart");
      },
      (err) => {
        toast("Error" + err.response?.data?.error?.message);
      }
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black">
      <Image
        src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.images[0]?.url}
        alt={product.name}
        width={300}
        height={300}
        className="w-[300px] h-[320px] object-contain bg-slate-200 p-5 rounded-lg"
      />

      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-2xl">{product.name}</h2>
        <h2 className="font-bold text-sm text-gray-500">
          {product.description}
        </h2>

        <div className="flex gap-3">
          {product.sellingPrice && (
            <h2
              className={`font-bold text-3xl ${
                product.sellingPrice && "line-through text-gray-500"
              }`}
            >
              ${product.sellingPrice}
            </h2>
          )}
          <h2 className="font-bold text-3xl">${product.mrp}</h2>
        </div>
        <h2 className="font-medium text-lg">
          Quantity ({product.itemQuantityType})
        </h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-10 items-center border p-2 px-5">
              <button
                disabled={quantity == 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>
              <h2>{quantity}</h2>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <h2 className="text-2xl font-bold">
              = ${quantity * productTotalPrice}
            </h2>
          </div>
          <Button className="flex gap-3 " onClick={() => addToCart()}>
            <Image
              src="/grocery-cart.png"
              alt="ShoopingCartIcon"
              width={30}
              height={30}
            />
            Add to Cart
          </Button>
        </div>
        <h2>
          <span className="font-bold">Category: </span>
          {product.categories[0].name}
        </h2>
      </div>
    </div>
  );
};

export default ProductItemDetail;
