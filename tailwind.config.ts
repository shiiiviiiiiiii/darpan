
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#121212',
        foreground: '#f5f5f5',

        primary: {
          DEFAULT: '#FF5A3D',
          foreground: '#121212',
        },
        secondary: {
          DEFAULT: '#8B5CF6', // Purple
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#FDCA40', // Bright yellow
          foreground: '#121212',
        },
        funky: {
          green: '#25D366',
          purple: '#8B5CF6',
          yellow: '#FDCA40',
          orange: '#FF5A3D',
          blue: '#4285F4',
        },
        card: {
          DEFAULT: '#1E1E1E',
          foreground: '#ffffff',
        },
        sidebar: {
          DEFAULT: '#1E1E1E',
          foreground: '#ffffff',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
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
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.3s cubic-bezier(0.4,0,0.2,1)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
