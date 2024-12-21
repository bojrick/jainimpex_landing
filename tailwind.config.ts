import type { Config } from "tailwindcss";
import { theme } from "./lib/theme";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: "1rem",
  			sm: "2rem",
  			lg: "4rem",
  			xl: "5rem",
  			"2xl": "6rem",
  		},
  		screens: {
  			"2xl": "1400px",
  		},
  	},
  	extend: {
  		colors: {
  			...theme.colors,
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  			primary: theme.colors.primary,
  			secondary: theme.colors.secondary,
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)",
  		},
  		keyframes: {
  			"accordion-down": {
  				from: { height: "0" },
  				to: { height: "var(--radix-accordion-content-height)" },
  			},
  			"accordion-up": {
  				from: { height: "var(--radix-accordion-content-height)" },
  				to: { height: "0" },
  			},
  			float: {
  				"0%, 100%": { transform: "translateY(0)" },
  				"50%": { transform: "translateY(-20px)" },
  			},
  			"float-delayed": {
  				"0%, 100%": { transform: "translateY(0)" },
  				"50%": { transform: "translateY(-20px)" },
  			},
  			"fade-up": {
  				"0%": { opacity: "0", transform: "translateY(20px)" },
  				"100%": { opacity: "1", transform: "translateY(0)" },
  			},
  			"fade-in": {
  				"0%": { opacity: "0" },
  				"100%": { opacity: "1" },
  			},
  			"slide-in-right": {
  				"0%": { transform: "translateX(100%)", opacity: "0" },
  				"100%": { transform: "translateX(0)", opacity: "1" },
  			},
  			"slide-in-left": {
  				"0%": { transform: "translateX(-100%)", opacity: "0" },
  				"100%": { transform: "translateX(0)", opacity: "1" },
  			},
  			"scale-up": {
  				"0%": { transform: "scale(0.95)", opacity: "0" },
  				"100%": { transform: "scale(1)", opacity: "1" },
  			},
  			"rotate-180": {
  				"0%": { transform: "rotate(0deg)" },
  				"100%": { transform: "rotate(180deg)" },
  			},
  			bounce: {
  				"0%, 100%": { transform: "translateY(-5%)" },
  				"50%": { transform: "translateY(0)" },
  			},
  		},
  		animation: {
  			"accordion-down": "accordion-down 0.2s ease-out",
  			"accordion-up": "accordion-up 0.2s ease-out",
  			"float": "float 6s ease-in-out infinite",
  			"float-delayed": "float-delayed 6s ease-in-out infinite 3s",
  			"fade-up": "fade-up 0.5s ease-out",
  			"fade-in": "fade-in 0.5s ease-out",
  			"slide-in-right": "slide-in-right 0.5s ease-out",
  			"slide-in-left": "slide-in-left 0.5s ease-out",
  			"scale-up": "scale-up 0.3s ease-out",
  			"rotate-180": "rotate-180 0.3s ease-out",
  			"bounce-slow": "bounce 2s ease-in-out infinite",
  		},
  		transitionProperty: {
  			'height': 'height',
  			'spacing': 'margin, padding',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
