/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'violet-primary': '#944175',
        'cyan-primary': '#75c5c0'
      }
    },
  },
  plugins: [],
};