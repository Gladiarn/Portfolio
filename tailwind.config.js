/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			foreground: '#EEEEEE',
  			background: '#121212',
  			secondary: {
  				DEFAULT: '#AAAAAA',
  				foreground: '#121212'
  			},
  			border: '#1f2937',
  			accent: {
  				DEFAULT: '#f97316',
  				foreground: '#fff'
  			},
  			card: {
  				DEFAULT: '#1a1a1a',
  				foreground: '#f8fafc'
  			}
  		},
  		keyframes: {
  			float: {
  				'0%': {
  					transform: 'translateY(0px)'
  				},
  				'100%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			float: 'float var(--duration) ease-in-out var(--delay) infinite alternate',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [],
};
