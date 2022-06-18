export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\svelte-components\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\svelte-components\\[component]\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\explorer\\index.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\svelte-components\\[component]\\index.svelte"),
	() => import("..\\..\\src\\routes\\svelte-components\\index.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"explorer": [[0, 4], [1]],
	"svelte-components": [[0, 2, 7], [1]],
	"svelte-components/[component]": [[0, 2, 3, 6], [1], 1]
};