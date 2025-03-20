'use client';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useFavicon } from '@/utils/hooks';

export default function Page() {
  useFavicon('/Logo/Socials.png ');

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="pb-2 text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-green dark:hover:text-p1-cyan">
        Социальные сети
      </div>

      <div className="mx-5 grid grid-cols-1 place-items-center gap-2 rounded-3xl border-p1-darkgreen text-center text-p1-darkgreen md:grid-cols-2 md:border-4 md:p-5 md:shadow-lg xl:grid-cols-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
        <div className="flex flex-row">
          <div className="text-center">
            <div className="mx-auto justify-center rounded-3xl grayscale duration-500 hover:scale-105 hover:grayscale-0">
              <Link href="https://x.com/RaceLads">
                <Image width={200} height={600} src="/Logo/twitterlogox.png" alt="twitter" />
              </Link>
            </div>
            <p>X.com / Twitter</p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <button className="mx-auto justify-center rounded-3xl grayscale duration-500 hover:scale-105 hover:grayscale-0">
              <Link href="https://discord.gg/gaa">
                <Image width={200} height={600} src="/Logo/discordlogomini.png" alt="discord" />
              </Link>
            </button>
            <p>Discord</p>
          </div>
        </div>

        <div className="text-center">
          <button className="mx-auto justify-center rounded-3xl grayscale duration-500 hover:scale-105 hover:grayscale-0">
            <Link href="https://t.me/GlobalAutomotiveAssociation">
              <Image
                width={200}
                height={600}
                src="/Logo/telegramlogomini.png"
                alt="telegram_channel"
              />
            </Link>
          </button>
          <p>Telegram News Channel</p>
        </div>

        <div className="text-center">
          <button className="mx-auto justify-center rounded-3xl grayscale duration-500 hover:scale-105 hover:grayscale-0">
            <Link href="https://t.me/GAAChat">
              <Image
                width={200}
                height={600}
                src="/Logo/telegramlogomini.png"
                alt="telegram_chat"
              />
            </Link>
          </button>
          <p>Telegram Community</p>
        </div>

        <div className="flex flex-row">
          <div className="text-center">
            <button className="mx-auto justify-center rounded-3xl grayscale duration-500 hover:scale-105 hover:grayscale-0">
              <Link href="">
                <Image width={200} height={600} src="/Logo/youtubelogomini.png" alt="youtube" />
              </Link>
            </button>
            <p>YouTube</p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <button className="mx-auto justify-center rounded-3xl grayscale duration-500 hover:scale-105 hover:grayscale-0">
              <Link href="">
                <Image width={200} height={600} src="/Logo/instagramlogomini.png" alt="instagram" />
              </Link>
            </button>
            <p>Instagram</p>
          </div>
        </div>

        <div className="text-center">
          <button className="mx-auto justify-center rounded-3xl grayscale duration-500 hover:scale-105 hover:grayscale-0">
            <Link href="">
              <Image width={200} height={600} src="/Logo/facebooklogomini.png" alt="facebook" />
            </Link>
          </button>
          <p>Facebook</p>
        </div>

        <div className="text-center">
          <button className="mx-auto justify-center rounded-3xl grayscale duration-500 hover:scale-105 hover:grayscale-0">
            <Link href="">
              <Image width={200} height={600} src="/Logo/tiktoklogomini.png" alt="tiktok" />
            </Link>
          </button>
          <p>Tik-Tok</p>
        </div>
      </div>

      <div className="pb-2 text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-green dark:hover:text-p1-cyan">
        Подпишись с помощью
      </div>

      <div className="mx-5 grid grid-cols-1 place-items-center gap-2 rounded-3xl text-center text-p1-darkgreen md:grid-cols-2 md:p-5 xl:grid-cols-5">
        <div className="flex flex-row">
          <button
            type="button"
            className="mb-2 me-2 inline-flex items-center rounded-lg bg-[#3b5998] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#3b5998]/90 focus:outline-none focus:ring-4 focus:ring-[#3b5998]/50 dark:focus:ring-[#3b5998]/55"
          >
            <svg
              className="me-2 size-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            Sign in with Facebook
          </button>
        </div>
        <div>
          <button
            type="button"
            className="mb-2 me-2 inline-flex items-center rounded-lg bg-[#1da1f2] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#1da1f2]/90 focus:outline-none focus:ring-4 focus:ring-[#1da1f2]/50 dark:focus:ring-[#1da1f2]/55"
          >
            <svg
              className="me-2 size-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fillRule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clipRule="evenodd"
              />
            </svg>
            Sign in with Twitter
          </button>
        </div>

        <div>
          <button
            type="button"
            className="mb-2 me-2 inline-flex items-center rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500"
          >
            <svg
              className="-ms-1 me-2 size-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            Sign in with Github
          </button>
        </div>

        <div>
          <button
            type="button"
            className="mb-2 me-2 inline-flex items-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55"
          >
            <svg
              className="-ms-1 me-2 size-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fillRule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clipRule="evenodd"
              />
            </svg>
            Sign in with Google
          </button>
        </div>

        <div>
          <button
            type="button"
            className="mb-2 me-2 inline-flex items-center rounded-lg bg-[#050708] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#050708]/90 focus:outline-none focus:ring-4 focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-[#050708]/50"
          >
            <svg
              className="me-2 size-10"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="apple"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              ></path>
            </svg>
            Sign in with Apple
          </button>
        </div>
      </div>

      <div></div>

      <div className="w-96">
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="none"
            stroke="lightgrey"
            d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
          />

          <circle r="5" fill="red">
            <animateMotion
              dur="10s"
              repeatCount="indefinite"
              path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}
