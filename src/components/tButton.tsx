'use client';

import { useEffect, useState } from 'react';

export const TButton = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;

      setVisible(position > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className={`!fixed bottom-16 ${visible ? 'end-6' : '-end-12'} z-15 overflow-hidden rounded-full bg-p2-orange p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition-all duration-1000 hover:bg-p2-red hover:shadow-lg focus:bg-p2-red focus:shadow-lg focus:outline-none focus:ring-0 active:bg-p2-red active:shadow-lg`}
      id="btn-back-to-top"
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }}
    >
      <span className="[&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
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
