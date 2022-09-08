import adapter from '@sveltejs/adapter-vercel';
import path from 'path';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mm from "micromatch"
const dev = 'production' === 'development';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	package: {
		emitTypes : false,
		exports: (filepath) => !mm.contains(filepath, ['*.demo.svelte', '*Demo.svelte', '*preview.svelte','*sitedata','*.md']),
	   files: (filepath)=> !mm.contains(filepath, ['*.demo.svelte', '*Demo.svelte', '*preview.svelte','*sitedata','*.md'])
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
			external:['@sveltejs/kit/install-fetch'],
			split:true
		}),
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
