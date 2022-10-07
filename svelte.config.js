import adapter from '@sveltejs/adapter-vercel'; 
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mm from 'micromatch'; 
import path from 'path'

function filterExport(filepath) { 
	
	// return mm.contains(filepath,'Backdrop.svelte')

	return !mm.contains(filepath, [
		'*.demo.svelte',
		'*Demo.svelte',
		'*preview.svelte',
		'*sitedata*',
		'*.md',
		'*Example.svelte',
		'*indexApi*',
		'*Readme*',
	])
}
/** @type {import('@sveltejs/kit').Config} */
const config = {
		logLevel: 'info'	,
	package: {
		exports: (filepath) => filterExport(filepath),
		files: (filepath) => filterExport(filepath),
	},
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter({
			edge: false,
			external: ['@sveltejs/kit/install-fetch'],
			split: true
		}),
		paths: { 
			base: ''
		}
	}
};

export default config;
