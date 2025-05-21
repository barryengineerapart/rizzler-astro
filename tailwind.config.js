/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        grotesque: ['"Bricolage Grotesque"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

