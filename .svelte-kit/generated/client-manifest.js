export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\svelte-component\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\bootstrapp\\index.svelte"),
	() => import("..\\..\\src\\routes\\explorer\\index.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\svelte-component\\[component].svelte"),
	() => import("..\\..\\src\\routes\\svelte-component\\index.svelte"),
	() => import("..\\..\\src\\routes\\what\\index.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"bootstrapp": [[0, 3], [1]],
	"explorer": [[0, 4], [1]],
	"svelte-component": [[0, 2, 7], [1]],
	"what": [[0, 8], [1]],
	"svelte-component/[component]": [[0, 2, 6], [1]]
};