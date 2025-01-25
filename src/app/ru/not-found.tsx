import { headers } from 'next/headers';

export default async function NotFound() {
  const headerList = await headers();
  const pathname = headerList.get('x-current-path');

  return (
    <div className="bg-404 min-h-screen">
      <div className="pt-20 text-center text-5xl">Страница: {pathname} не найдена</div>
    </div>
  );
}
