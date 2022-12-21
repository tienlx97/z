import * as React from 'react';
export default function svgComp() {
  return (
    <svg
      id="z12511"
      className="acjk"
      version="1.1"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <path
        id="z12511d1"
        d="M403 172C472 221 537 288 596 308C636 322 638 263 619 235C598 202 483 163 414 138C373 124 314 108 403 172Z"
      />
      <path
        id="z12511d2"
        d="M387 430C454 476 531 562 597 584C639 598 633 524 609 499C576 465 477 430 402 404C354 386 328 389 387 430Z"
      />
      <path
        id="z12511d3"
        d="M371 697C441 750 543 854 619 895C665 920 672 835 643 802C604 757 502 714 368 652C332 636 298 642 342 676C361 690 361 690 371 697Z"
      />
      <defs>
        <clipPath id="z12511c1">
          <use xlinkHref="#z12511d1" />
        </clipPath>
        <clipPath id="z12511c2">
          <use xlinkHref="#z12511d2" />
        </clipPath>
        <clipPath id="z12511c3">
          <use xlinkHref="#z12511d3" />
        </clipPath>
      </defs>
      <path
        style={{'--d': '1s'} as any}
        pathLength="3333"
        clipPath="url(#z12511c1)"
        d="M 367,134 576,243 607,302"
      />
      <path
        style={{'--d': '2s'} as any}
        pathLength="3333"
        clipPath="url(#z12511c2)"
        d="M 367,404 577,504 609,580"
      />
      <path
        style={{'--d': '3s'} as any}
        pathLength="3333"
        clipPath="url(#z12511c3)"
        d="M 331,655 619,827 638,887"
      />
    </svg>
  );
}
