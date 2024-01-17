import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import mdsvexConfig from './mdsvex.config.js';
import path from 'path';

function filterExport(filepath) { 
	
	// return mm.contains(filepath,'Backdrop.svelte')

	return !mm.contains(filepath, [
		'*.demo.svelte',
		'*Demo.svelte',
		'*preview.svelte',
		// '*sitedata*',
		'*.md',
		//'*Example.svelte',
		'*indexApi*',
		'*Readme*',
	])
} 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	/* package: {
		exports: (filepath) => filterExport(filepath),
		files: (filepath) => filterExport(filepath),
	}, */
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	// extensions: ['.svelte', '.md'],
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
		}
	}
};

export default config; 
