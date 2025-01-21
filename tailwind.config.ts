import type { Config } from "tailwindcss";

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
        'curve-dark': 'rgb(41, 41, 41)',
        primary: "#455ce9",
      },
      transitionDuration: {
        '400': '400ms',
      },
      spacing: {
        '99': '99px',
      },
     
    },
  },
  plugins: [],
} satisfies Config;
