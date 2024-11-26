import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"
import forms from "@tailwindcss/forms"
import tailwindcssAnimate from "tailwindcss-animate"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultTheme,
    darkMode: "false",
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#D72B00",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#6E6E6E",
          foreground: "hsl(var(--secondary-foreground))",
        },
        orange: "#FF5900",
        icon: "#5D5D5D",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        step: "20px",
        title: "36px",
        "5xl": "48px",
        description: "20px",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(180deg, #D72B00 0%, #FF5900 100%)",
      },
      boxShadow: {
        card: "7px 8px 12.3px rgba(0, 0, 0, 0.13)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [forms, tailwindcssAnimate],
}

export default config
