import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.md'],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			$components: '/src/components',
			$stores: '/src/stores',
			$utils: '/src/utils',
			$styles: '/src/styles',
			$lib: '/src/lib'
		}
	}
});
