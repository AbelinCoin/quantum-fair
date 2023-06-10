/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#653AA3',
        'secondary-purple': '#653AA3',
        'light-purple': '#9678EF',
        'bg-grey': '#F8F8F8',
        'dark-grey': '#585858',
        'light-grey': '#C3C3C3',
        'blue': '#2D49C1',
        'secondary-blue': "#4760C9",
        'grey-blue': '#EAEEFF',
        'black-soft': "#2B2B2B",
        'grey-soft': "#545454",
        'light-green': "#20CF9F",
        'purple-grey': "#F6F2FC",
        'light-yellow': "#FFC34C",
      },
      fontFamily: {
        'sans': ['sans-serif'],
      },
      width: {
        '560': '35rem',
      }
    },
  },
  plugins: [],
}