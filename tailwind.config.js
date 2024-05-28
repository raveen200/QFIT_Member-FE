import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        "nav-cream": "#F9F7F3"
      },
      minHeight: {
        "80vh": "80vh"
      }
    }
  },
  plugins: [flowbite.plugin()]
};
