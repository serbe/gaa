'use client';

export const TopButton = () => {
  return (
    <a
      href="#"
      title="Вернуться к началу страницы"
      className={`fixed bottom-20 right-10 rounded-3xl border-2 border-red-600 bg-lime-300 px-2 py-4 text-orange-500`}
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }}
    >
      Вверх
    </a>
  );
};
