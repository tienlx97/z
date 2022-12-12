import * as React from 'react';
export default function svgComp() {
  return (
    <svg
      id="z12491"
      className="acjk"
      version="1.1"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <path
        id="z12491d1"
        d="M328 313C205 323 343 371 408 360C579 329 638 335 731 323C746 320 775 293 692 271C654 260 653 284 328 313Z"
      />
      <path
        id="z12491d2"
        d="M864 670C912 672 901 644 892 636C870 615 832 571 765 583C581 615 234 640 142 642C101 642 130 673 145 685C157 695 184 717 231 709C543 654 622 659 864 670Z"
      />
      <defs>
        <clipPath id="z12491c1">
          <use xlinkHref="#z12491d1" />
        </clipPath>
        <clipPath id="z12491c2">
          <use xlinkHref="#z12491d2" />
        </clipPath>
      </defs>
      <path
        style={{'--d': '1s'} as any}
        pathLength="3333"
        clipPath="url(#z12491c1)"
        d="M 301,327 420,332 734,293"
      />
      <path
        style={{'--d': '2s'} as any}
        pathLength="3333"
        clipPath="url(#z12491c2)"
        d="M 129,655 206,676 779,621 896,651"
      />
    </svg>
  );
}
