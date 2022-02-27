import * as React from "react";
import { SVGProps } from "react";

const SvgBasket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M10 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm3.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm1.336-5 1.977-7H0l2.938 7h11.898zm4.969-10-3.432 12H3.776l.839 2h13.239l3.474-12h1.929L24 3h-4.195z" />
  </svg>
);

export default SvgBasket;
