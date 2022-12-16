import * as React from 'react';
export default function svgComp() {
  return (
    <svg
      id="z12523"
      className="acjk"
      version="1.1"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <path
        id="z12523d1"
        d="M287 325C250 320 268 360 272 374C292 434 248 610 151 754C78 861 81 881 167 789C246 705 303 605 335 493C348 444 351 425 363 388C376 347 334 333 287 325Z"
      />
      <path
        id="z12523d2"
        d="M495 212C516 253 514 322 505 596C503 662 503 718 478 780C461 821 536 889 557 873C593 846 607 835 639 807C758 701 834 652 910 540C954 477 991 385 884 511C800 609 726 672 594 749C551 774 560 721 561 690C563 589 571 340 589 272C606 209 578 191 546 170C460 116 478 177 495 212Z"
      />
      <defs>
        <clipPath id="z12523c1">
          <use xlinkHref="#z12523d1" />
        </clipPath>
        <clipPath id="z12523c2">
          <use xlinkHref="#z12523d2" />
        </clipPath>
      </defs>
      <path
        style={{'--d': '1s'} as any}
        pathLength="3333"
        clipPath="url(#z12523c1)"
        d="M 276,335 324,373 257,630 110,834"
      />
      <path
        style={{'--d': '2s'} as any}
        pathLength="3333"
        clipPath="url(#z12523c2)"
        d="M 494,163 543,228 513,785 561,836 726,712 938,468"
      />
    </svg>
  );
}
