<<<<<<< HEAD
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "0px", // < 576px (Phones portrait)
      sm: "570px", // ≥ 576px (Phones landscape, small tablets)
      md: "750px", // ≥ 768px (Tablets portrait)
      lg: "992px", // ≥ 992px (Tablets landscape, small laptops)
      xl: "1200px", // ≥ 1200px (Desktops, large laptops)
      "2xl": "1400px", // ≥ 1400px (Very large desktops, 4K displays)
    },
    extend: {
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      colors: {
        // Primitive Colors
        forest: {
          50: "var(--color-forest-50)",
          100: "var(--color-forest-100)",
          200: "var(--color-forest-200)",
          300: "var(--color-forest-300)",
          400: "var(--color-forest-400)",
          500: "var(--color-forest-500)",
          600: "var(--color-forest-600)",
          700: "var(--color-forest-700)",
          800: "var(--color-forest-800)",
          900: "var(--color-forest-900)",
        },
        gray: {
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
        },
        brown: {
          50: "var(--color-brown-50)",
          100: "var(--color-brown-100)",
          200: "var(--color-brown-200)",
          300: "var(--color-brown-300)",
          400: "var(--color-brown-400)",
          500: "var(--color-brown-500)",
          600: "var(--color-brown-600)",
          700: "var(--color-brown-700)",
          800: "var(--color-brown-800)",
        },
        green: {
          100: "var(--color-green-100)",
          200: "var(--color-green-200)",
          300: "var(--color-green-300)",
          400: "var(--color-green-400)",
          500: "var(--color-green-500)",
          600: "var(--color-green-600)",
          700: "var(--color-green-700)",
          800: "var(--color-green-800)",
        },
        olive: {
          100: "var(--color-olive-100)",
          200: "var(--color-olive-200)",
          300: "var(--color-olive-300)",
          400: "var(--color-olive-400)",
          500: "var(--color-olive-500)",
          600: "var(--color-olive-600)",
          700: "var(--color-olive-700)",
          800: "var(--color-olive-800)",
        },
        lime: {
          100: "var(--color-lime-100)",
          200: "var(--color-lime-200)",
          300: "var(--color-lime-300)",
          400: "var(--color-lime-400)",
          500: "var(--color-lime-500)",
          600: "var(--color-lime-600)",
        },
        mint: {
          50: "var(--color-mint-50)",
          100: "var(--color-mint-100)",
          200: "var(--color-mint-200)",
          300: "var(--color-mint-300)",
          400: "var(--color-mint-400)",
          500: "var(--color-mint-500)",
          600: "var(--color-mint-600)",
          700: "var(--color-mint-700)",
          800: "var(--color-mint-800)",
          900: "var(--color-mint-900)",
          950: "var(--color-mint-950)",
        },
        yellow: {
          100: "var(--color-yellow-100)",
          200: "var(--color-yellow-200)",
          300: "var(--color-yellow-300)",
          400: "var(--color-yellow-400)",
          500: "var(--color-yellow-500)",
          600: "var(--color-yellow-600)",
        },
        red: {
          50: "var(--color-red-50)",
          100: "var(--color-red-100)",
          200: "var(--color-red-200)",
        },

        // Schematic Colors
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
        },
        secondary: {
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
        },
        complementary: {
          50: "var(--complementary-50)",
          100: "var(--complementary-100)",
          200: "var(--complementary-200)",
          300: "var(--complementary-300)",
          400: "var(--complementary-400)",
          500: "var(--complementary-500)",
        },
        accent: {
          50: "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          red: {
            50: "var(--accent-red-50)",
            100: "var(--accent-red-100)",
            200: "var(--accent-red-200)",
          },
          lime: {
            100: "var(--accent-lime-100)",
            200: "var(--accent-lime-200)",
            300: "var(--accent-lime-300)",
            400: "var(--accent-lime-400)",
            500: "var(--accent-lime-500)",
          },
        },
        illustrations: {
          50: "var(--illustrations-50)",
          100: "var(--illustrations-100)",
          200: "var(--illustrations-200)",
          300: "var(--illustrations-300)",
          400: "var(--illustrations-400)",
          500: "var(--illustrations-500)",
          olive: {
            50: "var(--illustrations-olive-50)",
            100: "var(--illustrations-olive-100)",
            200: "var(--illustrations-olive-200)",
            300: "var(--illustrations-olive-300)",
          },
          lime: {
            50: "var(--illustrations-lime-50)",
            100: "var(--illustrations-lime-100)",
            200: "var(--illustrations-lime-200)",
            300: "var(--illustrations-lime-300)",
            400: "var(--illustrations-lime-400)",
            500: "var(--illustrations-lime-500)",
          },
          forest: {
            100: "var(--illustrations-forest-100)",
            200: "var(--illustrations-forest-200)",
            300: "var(--illustrations-forest-300)",
            400: "var(--illustrations-forest-400)",
            500: "var(--illustrations-forest-500)",
          },
          sun: {
            100: "var(--illustrations-sun-100)",
            200: "var(--illustrations-sun-200)",
            300: "var(--illustrations-sun-300)",
            400: "var(--illustrations-sun-400)",
            500: "var(--illustrations-sun-500)",
          },
          green: {
            100: "var(--illustrations-green-100)",
            200: "var(--illustrations-green-200)",
            300: "var(--illustrations-green-300)",
            400: "var(--illustrations-green-400)",
            500: "var(--illustrations-green-500)",
          },
        },
      },
      fontSize: {
        xs: "var(--typography-font-size-xs)",
        sm: "var(--typography-font-size-sm)",
        base: "var(--typography-font-size-base)",
        md: "var(--typography-font-size-md)",
        lg: "var(--typography-font-size-lg)",
        xl: "var(--typography-font-size-xl)",
        "2xl": "var(--typography-font-size-2xl)",
        "3xl": "var(--typography-font-size-3xl)",
        "4xl": "var(--typography-font-size-4xl)",
        "5xl": "var(--typography-font-size-5xl)",
        "6xl": "var(--typography-font-size-6xl)",
        "7xl": "var(--typography-font-size-7xl)",
        "8xl": "var(--typography-font-size-8xl)",
        "9xl": "var(--typography-font-size-9xl)",
        "10xl": "var(--typography-font-size-10xl)",
        "11xl": "var(--typography-font-size-11xl)",
        "12xl": "var(--typography-font-size-12xl)",
        "13xl": "var(--typography-font-size-13xl)",
        "14xl": "var(--typography-font-size-14xl)",
      },
      fontFamily: {
        lexend: ["var(--typography-fonts-lexend)", "system-ui", "sans-serif"],
        ibm: ["var(--typography-fonts-ibm)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
=======
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
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
            color: "var(--s-text-brown-01)",
            maxWidth: "none",
            h2: {
              color: "var(--s-text-brown-01)",
              fontWeight: "600",
            },
            h3: {
              color: "var(--s-text-brown-01)",
              fontWeight: "600",
            },
            "ul > li": {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              paddingLeft: "0.5rem",
            },
            "ul > li::marker": {
              color: "var(--p-brown-300)",
            },
            "ol > li": {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              paddingLeft: "0.5rem",
            },
            "ol > li::marker": {
              color: "var(--p-brown-300)",
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
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      borderWidth: {
        "3": "3px",
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
          500: "var(--p-olive-500)",
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
>>>>>>> 2e201a4b04102ec8db85801264d10a900fedab08
