import * as React from "react";
import { SVGProps } from "react";

const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 0v6h8V0h-8Zm0 18h8V8h-8v10ZM0 18h8v-6H0v6Zm0-8h8V0H0v10Z" />
  </svg>
);

export default SvgList;
