import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {alias:{
		'$scripts': path.resolve('./src/lib/scripts'),
		'$engine': path.resolve('./src/lib/engine'),
		'$uses': path.resolve('./src/lib/uses'),
		'$types': path.resolve('./src/lib/types'),
		'$sitedata': path.resolve('./src/lib/sitedata'),
	}},
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			// allow: ['..']
		}
	},
	optimizeDeps: {
		include: ['highlight.js', 'highlight.js/lib/core']
	},    
};

export default config;
