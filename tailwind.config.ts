import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
         'bounce-slow': 'bounce 2s infinite'
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(-8%)',
            animationTimingFunction: 'ease-in-out',
          },
        }
      },
      screens: {
        'xs': '190px',
        'sm': '316px',
        'md': '879px',
        'lg': '1203px',
        'xl': '1680px',
        '2xl': '1536px',
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
