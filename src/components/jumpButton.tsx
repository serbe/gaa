'use client';

import { useState } from 'react';

export const JumpButton = ({ points }: { points: string[] }) => {
  const [position, setPosition] = useState(1);

  const nextPosition = () => {
    const next = position + 1 < points.length ? position + 1 : 0;
    setPosition(next);
  };

  const jump = () => {
    const element = document.getElementById(points[position]);
    const yOffset = -70;
    if (!element) {
      return;
    }
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    nextPosition();
  };

  return (
    <button
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className={`!fixed end-6 top-24 z-20 animate-bounce overflow-hidden rounded-full bg-p2-orange p-3 text-xs font-medium uppercase leading-tight text-white shadow-md duration-1000 hover:bg-p2-red hover:shadow-lg focus:bg-p2-red focus:shadow-lg focus:outline-none focus:ring-0 active:bg-p2-red active:shadow-lg`}
      id="btn-back-to-top"
      onClick={() => jump()}
    >
      <span className="[&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          transform="scale(1 -1)"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </span>
    </button>
  );
};
