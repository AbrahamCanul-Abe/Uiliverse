/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'Gyoza': ['Gyoza']
			},
			textShadow: {
				'custom': '2px 2px black', // Ajusta los valores según tus preferencias
			},
		},
		screens: {
			'xxs': '320px',
			'xs': '475px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [
	],
}
