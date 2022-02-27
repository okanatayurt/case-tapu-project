import React, { useState, useEffect } from "react";
import { Footer } from "../src/components/shared";
import map from "lodash/map";
import api from "./api/products";
import { ProductItemInterface } from "../src/models/product-item";
import { ProductItem } from "../src/components/items/product-item";
import { useAppDispatch } from "../src/store/hooks";
import { addToBasket } from "../src/store/slices/basketSlice";

interface IProductListPageProps {
  products: Array<ProductItemInterface>;
}

export default function ProductList({ products }: IProductListPageProps) {
  const dispatch = useAppDispatch();

  const onProductAddClicked = (
    id: number,
    title: string,
    text: string,
    imagePath: string,
    rating: number,
    distance: number,
    price: number
  ) => {
    const product = {
      id,
      title,
      text,
      imagePath,
      rating,
      distance,
      price,
    };
    dispatch(addToBasket(product));
  };

  return (
    <>
      <div className="flex-1 flex sm:justify-center items-center p-6 pb-32">
        <div className="max-w-xl w-full shadow-none md:shadow-[0_7px_29px_0_rgb(149,157,165,0.2)] md:rounded-lg sm:py-14 sm:px-10">
          <div className="grid sm:grid-cols-2 gap-5">
            {map(products, (item: ProductItemInterface, i) => (
              <div className="border-b border-solid border-[#F1F3F5] pb-5">
                <ProductItem
                  onAddClicked={onProductAddClicked}
                  key={`product_${i}`}
                  {...item}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  // Get ProductDetail
  const response = await api.get(
    "https://case-tapu-placeholder.herokuapp.com/products"
  );

  return {
    props: {
      products: response.data.products,
    },
  };
};
