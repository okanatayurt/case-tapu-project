import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 5.172 2.05.222.636 1.636 7 8l6.364-6.364L11.95.222 7 5.172Z"
      fill="#64738C"
    />
  </svg>
);

export default SvgArrowDown;
