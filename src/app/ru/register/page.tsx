'use client';
import { useRouter } from '@/i18n/routing';
import { sendRegister } from '@/utils/api';
import { useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendRegister(username, password);
      router.push('/login');
    } catch {
      setError('Registration failed. Please try again.');
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
              <h1 className="text-2xl font-bold text-p1-darkgreen dark:text-p1-cyan">Register</h1>
              <div className=" pb-2">{error && <p style={{ color: 'red' }}>{error}</p>}</div>

              <div className="pb-2"> </div>

              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-lg border border-stone-400 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p1-green focus:ring-p1-green dark:border-gray-600 dark:bg-p1-darkgreen dark:text-p1-white dark:placeholder:text-p1-gray dark:focus:border-p1-cyan dark:focus:ring-p1-cyan"
              />
              <div className="pb-2"> </div>

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-lg border border-stone-400 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p1-green focus:ring-p1-green dark:border-gray-600 dark:bg-p1-darkgreen dark:text-p1-white dark:placeholder:text-p1-gray dark:focus:border-p1-cyan dark:focus:ring-p1-cyan"
              />
              <button
                onClick={handleRegister}
                className="rounded-xl border-2 border-stone-400 bg-p2-white2 px-4 py-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:bg-stone-400 hover:text-p1-white md:mt-10 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan"
              >
                Register
              </button>
            </div>
            <div className="pb-4"> </div>
          </div>
        </div>
      </section>
    </div>
  );
}
