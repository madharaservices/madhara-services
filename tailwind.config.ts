// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Colors (Default)
        'primary': '#0052cc',
        'primary-dark': '#0041a3',
        'secondary': '#f8fafc',
        'dark': '#1a202c',
        'muted': '#64748b',
        'light': '#ffffff',
        'border-color': '#e2e8f0',

        // Dark Mode Colors
        'dark-primary': '#3b82f6',    // Brighter blue for dark background
        'dark-secondary': '#1e293b',  // Dark blue-gray background
        'dark-text': '#f8fafc',       // Light text
        'dark-muted': '#94a3b8',      // Lighter muted text
        'dark-border': '#334155',    // Slate border color
        'dark-card': '#0f172a'        // Very dark card background
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'lifted': '0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.07)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
export default config;