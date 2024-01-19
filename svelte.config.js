import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import mdsvexConfig from './mdsvex.config.js';
import path from 'path';

const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),
		alias: {
			$components: path.resolve('./src/components'),
			$stores: path.resolve('./src/stores'),
			$utils: path.resolve('./src/utils'),
			$styles: path.resolve('./src/styles'),
			$lib: path.resolve('./src/lib'),
			$sitedata: path.resolve('./src/sitedata'),
			$slotuiDefs: path.resolve('./src/sitedata/slotuiDefs'),
		}
	}
};

export default config; 
