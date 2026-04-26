/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#ff4500',
        'dark': '#111',
        'light': '#ffffee',
        'grey-1': '#333',
        'grey-2': '#999', 
        'grey-3': '#ccc',
        'grey-4': '#eee'
      },   
    },
  },
  plugins: [],
}

