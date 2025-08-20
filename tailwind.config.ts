
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
				sans: ['Inter', 'sans-serif'],
				display: ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					rich: 'hsl(var(--primary-rich))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				golden: {
					50: 'hsl(47 89% 94%)',
					100: 'hsl(47 85% 87%)',
					200: 'hsl(47 81% 74%)',
					300: 'hsl(47 77% 61%)',
					400: 'hsl(47 73% 48%)',
					500: 'hsl(47 69% 35%)',
					600: 'hsl(39 69% 30%)',
					700: 'hsl(31 69% 25%)',
					800: 'hsl(23 69% 20%)',
					900: 'hsl(15 69% 15%)',
					950: 'hsl(7 69% 10%)',
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
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				slideUp: {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				},
				slideInLeft: {
					from: { transform: 'translateX(-20px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				slideInRight: {
					from: { transform: 'translateX(20px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'spin-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'golden-shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'golden-pulse': {
					'0%': { 
						boxShadow: '0 0 0 0 rgba(178, 136, 50, 0.6)',
						transform: 'scale(1)'
					},
					'70%': { 
						boxShadow: '0 0 0 20px rgba(178, 136, 50, 0)',
						transform: 'scale(1.02)'
					},
					'100%': { 
						boxShadow: '0 0 0 0 rgba(178, 136, 50, 0)',
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.7s ease-out forwards',
				'slide-up': 'slideUp 0.7s ease-out forwards',
				'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
				'slide-in-right': 'slideInRight 0.7s ease-out forwards',
				'float': 'float 5s ease-in-out infinite',
				'pulse': 'pulse 3s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'golden-shimmer': 'golden-shimmer 2s infinite',
				'golden-pulse': 'golden-pulse 2s infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'linear-gradient(to right bottom, rgba(7, 33, 66, 0.8), rgba(44, 83, 131, 0.8))',
				'service-gradient': 'linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%)',
				'golden-gradient': 'linear-gradient(135deg, #b28832 0%, #d4a853 50%, #996f2a 100%)',
				'golden-radial': 'radial-gradient(circle, rgba(178, 136, 50, 0.3) 0%, transparent 70%)',
			},
			boxShadow: {
				'elegant': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
				'card': '0 5px 15px rgba(0, 0, 0, 0.03), 0 2px 5px rgba(0, 0, 0, 0.02)',
				'button': '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
				'nav': '0 10px 40px rgba(0, 0, 0, 0.06)',
				'golden': '0 8px 25px rgba(178, 136, 50, 0.4), 0 4px 12px rgba(0, 0, 0, 0.2)',
				'golden-glow': '0 0 20px rgba(178, 136, 50, 0.6)',
				'golden-elegant': '0 10px 30px rgba(178, 136, 50, 0.3), 0 5px 15px rgba(0, 0, 0, 0.2)',
			},
			transitionDuration: {
				'2000': '2000ms',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
