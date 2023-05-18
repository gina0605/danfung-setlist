/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        poster: "url('/danfung-setlist/poster.jpeg')",
      },
      fontFamily: {
        suite: ['"SUITE-Regular"'],
      },
    },
  },
  plugins: [],
};
