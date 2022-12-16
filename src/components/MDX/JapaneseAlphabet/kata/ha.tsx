import * as React from 'react';
export default function svgComp() {
  return (
    <svg
      id="z12495"
      className="acjk"
      version="1.1"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <path
        id="z12495d1"
        d="M328 340C318 354 322 383 302 425C258 516 204 587 131 653C77 703 113 705 150 679C292 581 355 487 415 445C463 410 420 379 409 367C386 345 353 307 328 340Z"
      />
      <path
        id="z12495d2"
        d="M613 373C689 449 749 527 794 625C808 663 846 704 889 678C929 643 886 578 859 541C789 451 715 397 620 334C573 302 562 322 613 373Z"
      />
      <defs>
        <clipPath id="z12495c1">
          <use xlinkHref="#z12495d1" />
        </clipPath>
        <clipPath id="z12495c2">
          <use xlinkHref="#z12495d2" />
        </clipPath>
      </defs>
      <path
        style={{'--d': '1s'} as any}
        pathLength="3333"
        clipPath="url(#z12495c1)"
        d="M 348,340 372,421 253,581 128,678.9"
      />
      <path
        style={{'--d': '2s'} as any}
        pathLength="3333"
        clipPath="url(#z12495c2)"
        d="M 591,326 835,548 875,674.5"
      />
    </svg>
  );
}
