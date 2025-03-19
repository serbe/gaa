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
    <div className="h-screen bg-[url('/background/bgsky.png')] bg-cover bg-center p-2 dark:brightness-75">
      <section className="">
        <div className="mx-auto max-w-(--breakpoint-sm) px-4 py-8 lg:gap-16 lg:py-16">
          <div className="my-8 w-full place-self-center rounded-2xl bg-p1-white/30">
            <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between">
              <div className="px-2 text-2xl font-semibold text-nowrap text-stone-400 md:pt-2 md:text-4xl dark:text-p1-darkgreen">
                RaceLads
              </div>
              <div className="px-2 text-2xl font-semibold text-stone-400 md:pt-2 md:text-4xl dark:text-p1-darkgreen">
                by GAA
              </div>
            </div>
            <div className="m-4 rounded-3xl border-stone-400 bg-p1-white/75 p-4 md:border-4 md:shadow-lg dark:border-stone-900 dark:bg-p1-deepdarkgreen">
              <h2 className="text-2xl font-bold text-p1-darkgreen dark:text-p1-cyan">
                Авторизация
              </h2>
              <form className="mt-8 space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
                  >
                    Логин
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="username"
                    className="block w-full rounded-lg border border-stone-400 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p1-green focus:ring-p1-green dark:border-gray-600 dark:bg-p1-darkgreen dark:text-p1-white dark:placeholder:text-p1-gray dark:focus:border-p1-cyan dark:focus:ring-p1-cyan"
                    placeholder="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
                  >
                    Пароль
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-stone-400 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p1-green focus:ring-p1-green dark:border-gray-600 dark:bg-p1-darkgreen dark:text-p1-white dark:placeholder:text-p1-gray dark:focus:border-p1-cyan dark:focus:ring-p1-cyan"
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
                      className="size-4 rounded-xs border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
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
                  className="rounded-xl border-2 border-stone-400 bg-p2-white2 px-4 py-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:bg-stone-400 hover:text-p1-white md:mt-10 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan"
                  onClick={handleLogin}
                >
                  Вход
                </button>
                <div className="text-sm font-medium text-p1-darkgreen dark:text-p1-cyan">
                  Не зарегистрированы?
                  <Link
                    href="/register"
                    className="px-4 text-blue-600 hover:underline dark:text-p1-cyan"
                  >
                    Регистрация
                  </Link>
                </div>
              </form>
            </div>
            <div className="pb-4"> </div>
          </div>
        </div>
      </section>
    </div>
  );
}
