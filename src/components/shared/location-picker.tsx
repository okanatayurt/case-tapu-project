import React, { useState } from "react";
import { ArrowDown } from "../icons";
import { useAppDispatch } from "../../store/hooks";
import { addCurrentUser } from "../../store/slices/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";

export default function LocationPicker() {
  const currentUser = useSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <div className="relative mt-9 cursor-pointer">
      <select
        value={currentUser.locale}
        id="locale"
        autoComplete="off"
        className={`cursor-pointer border-solid border-b-2 border-[#64738C] font-600 pt-4 pb-2 peer w-full appearance-none`}
        onChange={(e) => {
          dispatch(addCurrentUser({ locale: e.target.value }));
        }}
      >
        <option selected key={1} value={"Türkiye"}>
          TR
        </option>
        <option key={2} value={"İngiltere"}>
          EN
        </option>
        <option key={3} value={"Amerika"}>
          US
        </option>
      </select>
      <label
        htmlFor="locale"
        className={` cursor-pointer text-[#64738C] font-400  peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-xs transition-all select-none duration-300 absolute left-0
    ${
      currentUser.locale !== ""
        ? "bg-white -top-2.5 text-xs"
        : "top-4 text-base"
    }`}
      >
        Locale
      </label>
      <ArrowDown className="absolute right-2.5 top-6" />
    </div>
  );
}
