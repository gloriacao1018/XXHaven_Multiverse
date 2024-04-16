/** @type {import('tailwindcss').Config} */
import { withUt } from "uploadthing/tw";

export default withUt({
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {       
        'heroImage' : "url('../app/assets/hero.png')",
      },
    },
  },
  corePlugins: {
    space: true,
  },
  variants: {},
  plugins: [],
})