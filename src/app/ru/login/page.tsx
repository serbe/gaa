'use client';
import { useState } from 'react';
import { Link, useRouter } from '@/i18n/routing';
import { sendLogin } from '@/utils/api';
import { useGaaStore } from '@/context/gaa-store-provider';
import { useSetCookie } from 'cookies-next/client';
// import useSWR from 'swr';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const { mutate } = useSWR('/api/protected');
  const [{ login }] = useGaaStore((state) => state);
  const router = useRouter();
  const setCookie = useSetCookie();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await sendLogin(username, password);
      login(username, response.token);
      setCookie('token', response.token);
      // await mutate();
      router.push('/');
    } catch {
      // setError('Invalid credentials');
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Мощный заголовок
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Мотивирующий текст
            </p>
            <a
              href="#"
              className="inline-flex items-center text-lg font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Ссылка для любителей почитать
              <svg
                className="ms-2 size-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div>
            <div className="w-full space-y-8 rounded-lg bg-white p-6 shadow-xl sm:p-8 lg:max-w-xl dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Авторизация</h2>
              <form className="mt-8 space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Логин
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="username"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Пароль
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      name="remember"
                      type="checkbox"
                      className="size-4 rounded-sm border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div className="ms-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="font-medium text-gray-500 dark:text-gray-400"
                    >
                      Remember this device
                    </label>
                  </div>
                  <Link
                    href="#"
                    className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </Link>
                </div> */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleLogin}
                >
                  Вход
                </button>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Не зарегистрированы?
                  <Link
                    href="/register"
                    className="px-4 text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Регистрация
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
