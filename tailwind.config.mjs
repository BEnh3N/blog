const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  // darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ["JetBrains Mono", ...defaultTheme.fontFamily.serif],
        'body': ["Inter var", "monospace"],
      },
      colors: {
        'background': 'rgb(0, 0, 0)',
        'backgorund-backdrop': 'rgba(0, 0, 0, 0.5)',
        'accent': 'rgb(225, 225, 225)',
        'accent-subtext': 'rgb(110, 110, 110)',
        'accent-highlight': 'rgba(225, 225, 225, 4%)',
        'accent-hover': 'rgb(30, 30, 30)',
        'accent-button': 'rgb(25, 25, 25)',
        'accent-button-elevated': 'rgb(42, 42, 42)',
      },
      boxShadow: {
        'border': 'inset 0 0 0 1.6px rgba(225, 225, 225, 4%)'
      },
    },
  },
  plugins: [],
};
