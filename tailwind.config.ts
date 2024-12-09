import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        '404': "url('/404/404.png')",
      },
      colors: {
        'p1-deepdarkgreen': '#001c1e',
        'p1-darkgreen': '#004146',
        'p1-green': '#018076',
        'p1-cyan': '#03BFB5',
        'p1-gray': '#949398',
        'p1-white': '#eff5f9',
        'p2-orange': '#FF9700',
        'p2-red': '#EB3800',
        'p2-blue': '#005FDB',
        'p2-black': '#050505',
        'p2-white2': '#FCFEFE',
        'p3-red': '#FF0026',
        'p3-yellow': '#FFEA00',
        'p3-black': '#12142D',
        'p3-violet': '#1B2B5A',
        'p3-blue': '#6674A3',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
export default config;
