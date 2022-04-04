export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\explorer\\index.svelte"),
	() => import("..\\..\\src\\routes\\what\\index.svelte")
];

export const dictionary = {
	"": [[0, 2], [1], 1],
	"explorer": [[0, 3], [1]],
	"what": [[0, 4], [1]]
};