import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			manifest: {
				background_color: '#1e293b',
				display: 'standalone',
				name: 'Atlas-Weather',
				orientation: 'any',
				scope: '/',
				short_name: 'atlasweather',
				start_url: '/',
				theme_color: '#1e293b',
				icons: [
					{
						src: './favicon.png',
						type: 'image/png',
						sizes: '512x512'
					}
				],
				id: 'atlas-weather.vercel.app',
				description: 'Weather application'
			}
		})
	]
});
