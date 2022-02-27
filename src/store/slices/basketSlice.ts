import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketProductItem } from "../../components/items/basket-product-item";
import { ProductItemInterface } from "../../models/product-item";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<ProductItemInterface>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(
        (BasketProductItem) => BasketProductItem.id === action.payload
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "You can't remove this product since its not in your basket."
        );
      }

      state.items = newBasket;
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const { addToBasket, removeFromBasket, clearBasket } =
  basketSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce(
    (total: number, BasketProductItem: ProductItemInterface) =>
      total + BasketProductItem.price,
    0
  );

export default basketSlice.reducer;
