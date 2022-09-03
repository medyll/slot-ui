import adapter from '@sveltejs/adapter-vercel';
import path from 'path';
import preprocess from 'svelte-preprocess';
import { sx4uPreprocess } from './src/lib/uses/sx4u/sx4uPreprocess.js';
import { mdsvex } from 'mdsvex';

const dev = 'production' === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),
		paths: {
			// base: dev ? "" : "",
			base: ''
		},
		prerender: {
			default: true
		},
	}
};

export default config;
