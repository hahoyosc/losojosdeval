/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["AvenirNextLTPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
