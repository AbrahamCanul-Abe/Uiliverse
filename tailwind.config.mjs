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
	},
	plugins: [
	],
}
