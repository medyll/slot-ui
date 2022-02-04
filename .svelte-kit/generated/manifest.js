const c = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\explorer\\index.svelte"),
	() => import("..\\..\\src\\routes\\what\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]], null, 1],

	// src/routes/explorer/index.svelte
	[/^\/explorer\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/what/index.svelte
	[/^\/what\/?$/, [c[0], c[4]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];