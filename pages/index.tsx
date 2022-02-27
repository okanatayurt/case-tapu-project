import React from "react";
import { RegisterForm } from "../src/components/forms";
import { Footer } from "../src/components/shared";
import { useSelector } from "react-redux";
import { selectUser } from "../src/store/slices/userSlice";
import { useAppDispatch } from "../src/store/hooks";
import { removeCurrentUser } from "../src/store/slices/userSlice";
import { clearBasket } from "../src/store/slices/basketSlice";
import LocationPicker from "../src/components/shared/location-picker";

export default function Home() {
  const currentUser = useSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <>
      <header className="w-full flex items-center justify-center"></header>
      <div className="flex-1 flex justify-center items-center p-6">
        <div className="w-full max-w-[420px] shadow-none  md:shadow-[0_7px_29px_0_rgb(149,157,165,0.2)] md:rounded-lg sm:pt-14 sm:pb-5 sm:px-10 mb-20">
          <div className="text-[32px] font-[600] pb-10">Account</div>
          {currentUser.email !== "" ? (
            <>
              <div className="flex flex-col gap-4 font-bold border-b pb-5 border-solid border-[#E6E6E6]">
                <span className="text-sm font-bold">
                  Email: {currentUser?.email}
                </span>
                <span className="text-sm font-bold">
                  Password: {currentUser?.password}
                </span>
                <span className="text-sm font-bold">
                  Locale: {currentUser?.locale}
                </span>
              </div>
              <LocationPicker />
              <button
                onClick={() => {
                  dispatch(removeCurrentUser());
                  dispatch(clearBasket());
                }}
                className={`w-full text-sm text-[#E82223] border border-[#E82223] font-bold cursor-pointer rounded-xl mt-40 py-4 mb-4 hover:opacity-80 `}
              >
                Log Out
              </button>
            </>
          ) : (
            <div>
              <RegisterForm />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
