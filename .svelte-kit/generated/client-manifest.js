export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')];

			export const server_loads = [0];

			export const dictionary = {
	"": [6],
	"about": [7,[2]],
	"svelte-components": [8,[3]],
	"svelte-components/[component]": [9,[3,4]],
	"svelte-components/[component]/api": [10,[3,4,5]]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};