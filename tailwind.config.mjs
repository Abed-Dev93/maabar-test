import { transform } from 'next/dist/build/swc/generated-native';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        moveLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-80vw)' },
        },
        slideMaabarLeft: {
          '0%': { transform: 'translateX(110%)' },
          '100%': { transform: 'translateX(-5vw)' },
        },
        slideMaabarRight: {
          '0%': { transform: 'translateX(-110%)' },
          '100%': { transform: 'translateX(2vw)' },
        },
        slideMaabarRightHow: {
          '0%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(3vw)' },
        },
        slideMaabarTop: {
          '0%': { transform: 'translateY(110%)' },
          '100%': { transform: 'translateY(-5vh)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        moveLeft: 'moveLeft 3s ease-out forwards', 
        slideMaabarLeft: 'slideMaabarLeft 3s ease-out forwards',
        slideMaabarRight: 'slideMaabarRight 3s ease-out forwards',
        slideMaabarRightHow: 'slideMaabarRightHow 3s ease-out forwards',
        slideMaabarTop: 'slideMaabarTop 3s ease-out forwards',
      },
      clipPath: {
        wave: 'polygon(0% 90%, 5% 85%, 10% 90%, 15% 85%, 20% 90%, 25% 85%, 30% 90%, 35% 85%, 40% 90%, 45% 85%, 50% 90%, 55% 85%, 60% 90%, 65% 85%, 70% 90%, 75% 85%, 80% 90%, 85% 85%, 90% 90%, 95% 85%, 100% 90%)',
      },
    },
  },
  plugins: [],
};
