import React from "react";
import { ProductItemInterface } from "../../models/product-item";
import Image from "next/image";
import { Distance, Rating, AddBasket } from "../icons";

// Custom Interfaces
interface IProductItemProps extends ProductItemInterface {
  onRemoveClicked: (
    id: number,
    title: string,
    text: string,
    imagePath: string,
    rating: number,
    distance: number,
    price: number
  ) => void;
}

export const BasketProductItem = ({
  id,
  title,
  text,
  imagePath,
  rating,
  distance,
  price,
  onRemoveClicked,
}: IProductItemProps): JSX.Element => {
  return (
    <>
      <div className="flex gap-4">
        <div>
          <div>
            <Image
              src={imagePath}
              alt="Product"
              width={75}
              height={75}
              layout="fixed"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col cursor-default">
          <h1 className="text-base font-[600] pb-1">{title}</h1>
          <span className="text-xs pb-3">{text}</span>
          <div className="flex gap-6  select-none">
            <div className="flex gap-1.5 items-center">
              <Rating />
              <span className="text-xs pb-0.5">{rating}</span>
            </div>
            <div className="flex gap-2 items-center">
              <Distance />
              <span className="text-xs">{distance} km</span>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() =>
          onRemoveClicked(id, title, text, imagePath, rating, distance, price)
        }
        className="flex items-center justify-center gap-2.5 cursor-pointer select-none pt-7"
      >
        <AddBasket />
        <span className="text-xs font-bold text-[#E82223]">SEPETTEN ÇIKAR</span>
      </div>
    </>
  );
};
