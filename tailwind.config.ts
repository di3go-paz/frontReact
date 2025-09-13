import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        darkBgStart: '#1e1e2f',
        darkBgEnd: '#2c2c3a',
        cardGlass: 'rgba(40,40,55,0.7)',
        textMain: '#ffffff',
        textSecondary: '#a0a0b2',
        accentGreen: '#4ade80',
        accentRed: '#f87171',
        accentYellow: '#facc15',
        accentPurpleStart: '#8b5cf6',
        accentPurpleEnd: '#a855f7',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Poppins', 'sans-serif'],
      },
      borderRadius: {
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        soft: '0 4px 24px 0 rgba(0,0,0,0.12)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, #1e1e2f 0%, #2c2c3a 100%)',
        'purple-gradient': 'linear-gradient(90deg, #8b5cf6 0%, #a855f7 100%)',
      },
      backdropBlur: {
        glass: '8px',
      },
    },
  },
  plugins: [],
};

export default config;
