import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import basketReducer from "./slices/basketSlice";
import userReducer from "./slices/userSlice";

// Global Store
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
