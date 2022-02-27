import React, { useState, useEffect } from "react";
import { Footer } from "../src/components/shared";
import map from "lodash/map";
import { ProductItemInterface } from "../src/models/product-item";
import { BasketProductItem } from "../src/components/items/basket-product-item";
import { useAppDispatch } from "../src/store/hooks";

import {
  removeFromBasket,
  selectItems,
  selectTotal,
} from "../src/store/slices/basketSlice";
import { useSelector } from "react-redux";

export default function Basket() {
  const dispatch = useAppDispatch();
  const basketItems = useSelector(selectItems);
  const basketTotal = useSelector(selectTotal);

  const onProductRemoveClicked = (
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
    dispatch(removeFromBasket(product.id));
  };

  return (
    <>
      <div className="flex-1 flex sm:justify-center items-center p-6 pb-32">
        <div className="max-w-xl w-full shadow-none md:shadow-[0_7px_29px_0_rgb(149,157,165,0.2)] md:rounded-lg sm:py-14 sm:px-10">
          {basketItems.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                {map(basketItems, (item: ProductItemInterface, i) => (
                  <div className="border-b border-solid border-[#F1F3F5] pb-5">
                    <BasketProductItem
                      onRemoveClicked={onProductRemoveClicked}
                      key={`product_${i}`}
                      {...item}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col pt-10">
                <h1 className="font-bold text-2xl pb-4">Ürünlerin Toplamı:</h1>
                <span className="text-sm pb-2">
                  Toplam: {basketTotal.toFixed(2)} TL
                </span>
                <span className="text-sm pb-4">
                  Vergiler + Kargo: {(basketTotal / 10).toFixed(2)} TL
                </span>
                <h2 className="font-bold text-lg">
                  Genel Toplam: {(basketTotal * 1.1).toFixed(2)} TL
                </h2>
              </div>
            </>
          ) : (
            <div className="flex items-center text-center justify-center">
              <h1 className="font-bold text-2xl pb-4">
                Sepetinizde Ürün Bulunmamaktadır.
              </h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
