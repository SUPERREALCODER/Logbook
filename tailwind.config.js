import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        fadeOut: "fadeOut 1.5s ease-out forwards",
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, visibility: "hidden" },
        },
      },
      fontFamily: {
        dance: ["Dancing Script", "cursive"],
        roch: ["Rochester", "cursive"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
