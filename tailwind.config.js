/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#E0E0E0',
        background: "#121212",
        secondary: '#B0B0B0',
        border: '#444444',
        accent: '#A855F7',
        card: "#"
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float var(--duration) ease-in-out var(--delay) infinite alternate",
      },
    },
  },
  plugins: [],
}

