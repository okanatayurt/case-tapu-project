import * as React from "react";
import { SVGProps } from "react";

const SvgDistance = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={13}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.305 10.66 6.07 14.91l-4.252-4.234a6 6 0 1 1 8.486-.017ZM6.059 9.091a2.667 2.667 0 1 0-.01-5.334 2.667 2.667 0 0 0 .01 5.334Zm-.003-1.334a1.333 1.333 0 1 1-.005-2.666 1.333 1.333 0 0 1 .005 2.666Z"
      fill="#0DAFC0"
    />
  </svg>
);

export default SvgDistance;
