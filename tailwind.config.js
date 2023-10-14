/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
    fontFamily: {
      sans: ["var(--font-sans)"],
      serif: ["var(--font-serif)"],
    },
    colors: {
      "dark-pink": "#ba4270",
      white: "#fbfcfe",
      "blue-grey": "#36536b",
      "dark-grey": "#1b262f",
      "light-pink": "#da6d97",
      "light-grey": "#6c8294",
    },
    fontSize: {
      "h1-l": "72px",
      "h1-s": "56px",
      h2: "48px",
      "h3-l": "32px",
      "h3-s": "18px",
      h4: "24px",
      body: "15px",
    },
    lineHeight: {
      "h1-l": "72px",
      "h1-s": "56px",
      h2: "56px",
      "h3-l": "40px",
      "h3-s": "25px",
      h4: "32px",
      body: "28px",
    },
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
