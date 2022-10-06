import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path'
// import preprocess from 'svelte-preprocess';

/** @type {import('vite').UserConfig} */
const config = { 
	plugins: [sveltekit()],
	resolve: {alias:{
		'$components': path.resolve('./src/components'),  
		'$contexts': path.resolve('./src/contexts'),
		'$scripts': path.resolve('./src/lib/scripts'),
		'$engine': path.resolve('./src/lib/engine'),
		'$uses': path.resolve('./src/lib/uses'),
		'$typings': path.resolve('./src/lib/types'),
		'$sitedata': path.resolve('./src/sitedata'),
	}},
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			// allow: ['..']
		}
	},
	optimizeDeps: {
		include: [],
		exclude: [],
	},    
	package: {
		dir: 'package',
		emitTypes: true,
		exports: (filepath) => true,	
		logLevel: 'info'	
	},
	external:['@sveltejs/kit/install-fetch'],
};

export default config;
