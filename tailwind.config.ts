/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        md: '2rem',
      },
    },
    extend: {
      colors: {
        main: "#333333",
        primary: "#10846f",
        secondary: "#146ff5",
      },
    },
  },
  plugins: [],
};
