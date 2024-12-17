import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Event colors
    'bg-blue-100',
    'bg-blue-200',
    'bg-blue-500',
    'bg-green-100',
    'bg-green-200',
    'bg-green-500',
    'bg-red-100',
    'bg-red-200',
    'bg-red-500',
    'bg-yellow-100',
    'bg-yellow-200',
    'bg-yellow-500',
    'bg-purple-100',
    'bg-purple-200',
    'bg-purple-500',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
