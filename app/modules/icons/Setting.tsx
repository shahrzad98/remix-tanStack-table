import * as React from "react";
import type { SVGProps } from "react";
const SvgSetting = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g
      stroke="#5D6671"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M16.165 12.5a1.374 1.374 0 0 0 .275 1.516l.05.05a1.666 1.666 0 0 1-.54 2.72 1.666 1.666 0 0 1-1.818-.361l-.05-.05a1.375 1.375 0 0 0-1.517-.275 1.375 1.375 0 0 0-.833 1.258v.142a1.667 1.667 0 0 1-3.333 0v-.075a1.375 1.375 0 0 0-.9-1.259 1.375 1.375 0 0 0-1.517.275l-.05.05a1.667 1.667 0 1 1-2.358-2.358l.05-.05a1.375 1.375 0 0 0 .275-1.517 1.376 1.376 0 0 0-1.259-.833H2.5a1.667 1.667 0 0 1 0-3.333h.075a1.375 1.375 0 0 0 1.258-.9 1.375 1.375 0 0 0-.275-1.517l-.05-.05a1.667 1.667 0 1 1 2.358-2.358l.05.05a1.375 1.375 0 0 0 1.517.275h.067a1.375 1.375 0 0 0 .833-1.259V2.5a1.667 1.667 0 0 1 3.333 0v.075a1.374 1.374 0 0 0 .834 1.258 1.375 1.375 0 0 0 1.516-.275l.05-.05a1.667 1.667 0 1 1 2.359 2.358l-.05.05a1.375 1.375 0 0 0-.275 1.517V7.5a1.375 1.375 0 0 0 1.258.833h.142a1.667 1.667 0 0 1 0 3.333h-.075a1.376 1.376 0 0 0-1.259.834v0Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSetting;