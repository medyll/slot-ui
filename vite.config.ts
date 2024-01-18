import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import pluginDoc from './plugin-doc.js';
//import svelteMd from 'vite-plugin-svelte-md';
// svelteMd(),
export default defineConfig({
	plugins: [pluginDoc(), sveltekit()],
	assetsInclude: ['**/*.md'],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
