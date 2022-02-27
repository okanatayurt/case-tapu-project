import React from "react";
import { Account, List, Basket } from "../icons";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";

export const Footer = () => {
  // Next Router
  const router = useRouter();

  const currentUser = useSelector(selectUser);

  return (
    <footer className="fixed bottom-0 right-0 left-0 flex items-center justify-center gap-16 xs:gap-24 bg-[#FAFAFA] pb-6 pt-3">
      {currentUser.email !== "" ? (
        <>
          <a
            href=""
            onClick={(e) => [router.push("/basket"), e.preventDefault()]}
            title={"User Account"}
            className={`cursor-pointer flex flex-col gap-2 justify-center items-center fill-[#4D4D4D] hover:fill-[#E82223] hover:text-[#E82223] ${
              router.asPath === "/basket" ? "fill-[#E82223] text-[#E82223]" : ""
            }`}
          >
            <Basket />
            <span className="text-xs font-[600]">Basket</span>
          </a>
          <a
            href=""
            onClick={(e) => [router.push("/product-list"), e.preventDefault()]}
            title={"Product List"}
            className={`cursor-pointer flex flex-col gap-2.5 justify-center items-center fill-[#4D4D4D] hover:fill-[#E82223] hover:text-[#E82223] ${
              router.asPath === "/product-list"
                ? "fill-[#E82223] text-[#E82223]"
                : ""
            }`}
          >
            <List />
            <span className="text-xs font-[600]">List</span>
          </a>
        </>
      ) : null}

      <a
        href=""
        onClick={(e) => [router.push("/"), e.preventDefault()]}
        title={"User Account"}
        className={`cursor-pointer flex flex-col gap-2.5 justify-center items-center fill-[#4D4D4D] hover:fill-[#E82223] hover:text-[#E82223] ${
          router.asPath === "/" ? "fill-[#E82223] text-[#E82223]" : ""
        }`}
      >
        <Account />
        <span className="text-xs font-[600]">Account</span>
      </a>
    </footer>
  );
};
