import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      fontFamily: {
        eestec: ['Roboto', 'sans-serif']
      },
      colors: {
        eestec: "#0f800f"
      },
      backgroundColor: {
        eestec: "#0f800f"
      },
      fill: {
        eestec: "#0f800f"
      },
      border: {
        eestec: "#0f800f"
      },
    },
  },
  plugins: [],
};
export default config;
