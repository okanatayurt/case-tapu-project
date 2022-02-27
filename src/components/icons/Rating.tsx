import * as React from "react";
import { SVGProps } from "react";

const SvgRating = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.061 6.713 3.148 9.226l1.056-4.68-3.493-3.12 4.576-.394L7.042-3.41l1.772 4.437 4.578.374-3.481 3.135 1.074 4.676L7.06 6.713Z"
      fill="#ECD03F"
    />
  </svg>
);

export default SvgRating;
