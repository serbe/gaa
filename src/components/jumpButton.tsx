export const JumpButton = ({ points }: { points: string[] }) => {
  const jump = () => {
    const yOffset = window.screen.width < 1024 ? -72 : -56;
    for (const point of points) {
      const currentY = window.scrollY;
      const element = document.getElementById(point);
      if (!element) {
        return;
      }
      const nextY = element.getBoundingClientRect().top + window.scrollY + yOffset;
      if (nextY > currentY - yOffset) {
        window.scrollTo({ top: nextY, behavior: 'smooth' });
        return;
      }
    }
  };

  return (
    <button
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className={`bg-p2-orange hover:bg-p2-red focus:bg-p2-red active:bg-p2-red !fixed end-6 top-24 z-20 animate-bounce overflow-hidden rounded-full p-3 text-xs leading-tight font-medium text-white uppercase shadow-md duration-1000 hover:shadow-lg focus:ring-0 focus:shadow-lg focus:outline-none active:shadow-lg`}
      id="btn-back-to-top"
      onClick={() => {
        jump();
      }}
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
