// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';

import preprocess from 'svelte-preprocess';
import { sx4uPreprocess } from './src/lib/uses/sx4u/sx4uPreprocess.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			aliases: [['sx4u', 'sx4uLanguage']],
			sx4uLanguage(args) {
				return sx4uPreprocess.render(args);
			}
		})
	],
	kit: {
		adapter: adapter(),
		package: {
			dir: 'package',
			emitTypes: true,
			exports: (filepath) => true
		},
		vite: {
			server: {
				fs: {
					// Allow serving files from one level up to the project root
					allow: ['..']
				}
			},
			optimizeDeps: {
				include: ['highlight.js', 'highlight.js/lib/core']
			}
		}
	}
};

export default config;
