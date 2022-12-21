import * as React from 'react';
export default function svgComp() {
  return (
    <svg
      id="z12531"
      className="acjk"
      version="1.1"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <path
        id="z12531d1"
        d="M242 221C296 273 327 325 384 373C414 399 455 375 440 335C413 268 317 218 252 183C158 130 214 193 242 221Z"
      />
      <path
        id="z12531d2"
        d="M769 315C646 461 524 610 359 710C313 737 273 750 222 759C175 768 233 816 253 836C272 855 304 880 330 857C507 702 663 551 785 338C818 282 796 282 769 315Z"
      />
      <defs>
        <clipPath id="z12531c1">
          <use xlinkHref="#z12531d1" />
        </clipPath>
        <clipPath id="z12531c2">
          <use xlinkHref="#z12531d2" />
        </clipPath>
      </defs>
      <path
        style={{'--d': '1s'} as any}
        pathLength="3333"
        clipPath="url(#z12531c1)"
        d="M 214,175 422,379"
      />
      <path
        style={{'--d': '2s'} as any}
        pathLength="3333"
        clipPath="url(#z12531c2)"
        d="M 227,776 306,814 538,631 791,308"
      />
    </svg>
  );
}
