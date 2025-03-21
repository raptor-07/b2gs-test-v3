import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "500px",
        md: "768px",
        lg: "1024px",
        xl: "1270px",
        "2xl": "1400px",
        "3xl": "1520px",
        "4xl": "1720px",
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--s-text-brown-01)',
            maxWidth: 'none',
            h2: {
              color: 'var(--s-text-brown-01)',
              fontWeight: '600',
            },
            h3: {
              color: 'var(--s-text-brown-01)',
              fontWeight: '600',
            },
            'ul > li': {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem',
            },
            'ul > li::marker': {
              color: 'var(--p-brown-300)',
            },
            'ol > li': {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              paddingLeft: '0.5rem',
            },
            'ol > li::marker': {
              color: 'var(--p-brown-300)',
            },
          },
        },
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scrollLeft: "scrollLeft 40s linear infinite",
        scrollRight: "scrollRight 40s linear infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      colors: {
        gray: {
          50: "var(--p-gray-50)",
          100: "var(--p-gray-100)",
          200: "var(--p-gray-200)",
          300: "var(--p-gray-300)",
          400: "var(--p-gray-400)",
          500: "var(--p-gray-500)",
          600: "var(--p-gray-600)",
          700: "var(--p-gray-700)",
          800: "var(--p-gray-800)",
        },
        brown: {
          100: "var(--p-brown-100)",
          200: "var(--p-brown-200)",
          300: "var(--p-brown-300)",
          400: "var(--p-brown-400)",
          500: "var(--p-brown-500)",
          600: "var(--p-brown-600)",
          700: "var(--p-brown-700)",
        },
        green: {
          100: "var(--p-green-100)",
          200: "var(--p-green-200)",
          300: "var(--p-green-300)",
          400: "var(--p-green-400)",
        },
        olive: {
          100: "var(--p-olive-100)",
          200: "var(--p-olive-200)",
          300: "var(--p-olive-300)",
          400: "var(--p-olive-400)",
        },
        lime: {
          100: "var(--p-lime-100)",
          200: "var(--p-lime-200)",
          300: "var(--p-lime-300)",
          400: "var(--p-lime-400)",
          500: "var(--p-lime-500)",
        },
        surface: {
          "brown-01": "var(--s-surface-brown-01)",
          "brown-02": "var(--s-surface-brown-02)",
          "brown-03": "var(--s-surface-brown-03)",
          "green-01": "var(--s-surface-green-01)",
          "green-02": "var(--s-surface-green-02)",
          "green-03": "var(--s-surface-green-03)",
        },
        bg: {
          "olive-01": "var(--s-background-olive-01)",
          "olive-02": "var(--s-background-olive-02)",
          "olive-03": "var(--s-background-olive-03)",
          "olive-04": "var(--s-background-olive-04)",
          "brown-01": "var(--s-background-brown-01)",
          "brown-02": "var(--s-background-brown-02)",
        },
        text: {
          "brown-01": "var(--s-text-brown-01)",
          "lime-01": "var(--s-text-lime-01)",
          "lime-02": "var(--s-text-lime-02)",
          "lime-03": "var(--s-text-lime-03)",
          "lime-04": "var(--s-text-lime-04)",
        },
        brand: {
          brown: "var(--s-brand-brown)",
          green: "var(--s-brand-green)",
        },
      },
      fontFamily: {
        lexend: ["var(--font-lexend)"],
        aleo: ["var(--font-aleo)"],
      },
      fontSize: {
        xs: ["var(--p-font-size-xs)", "1.2"],
        sm: ["var(--p-font-size-sm)", "1.2"],
        base: ["var(--p-font-size-base)", "1.5"],
        md: ["var(--p-font-size-md)", "1.5"],
        lg: ["var(--p-font-size-lg)", "1.5"],
        xl: ["var(--p-font-size-xl)", "1.5"],
        "2xl": ["var(--p-font-size-2xl)", "1.2"],
        "3xl": ["var(--p-font-size-3xl)", "1.2"],
        "4xl": ["var(--p-font-size-4xl)", "1.2"],
        "5xl": ["var(--p-font-size-5xl)", "1.1"],
        "6xl": ["var(--p-font-size-6xl)", "1.1"],
        "7xl": ["var(--p-font-size-7xl)", "1.1"],
        "8xl": ["var(--p-font-size-8xl)", "1.1"],
      },
    },
  },
  plugins: [typography],
  safelist: [
    "min-h-[500vh]",
    "min-h-[600vh]",
    "min-h-[700vh]",
    "min-h-[200vh]",
    "min-h-[100vh]",
    "h-[500vh]",
    "h-[600vh]",
    "h-[700vh]",
    "h-[200vh]",
    "h-[100vh]",
  ],
};
export default config;
