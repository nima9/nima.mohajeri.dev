/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      matrixGreen: "#b0f70d",
    },
    extend: {
      fontFamily: {
        cageroll: ["Cageroll", "sans-serif"],
      },
    },
  },

  plugins: [],
};
