export const manifest = {
	appDir: "_app",
	assets: new Set(["cssfabric/cssfabric.vars.css","cssfabric/cssfabric.vars.css.map","favicon.png","normalize.css"]),
	mimeTypes: {".css":"text/css",".map":"application/json",".png":"image/png"},
	_: {
		entry: {"file":"start-4e1d7902.js","js":["start-4e1d7902.js","chunks/index-dae3c301.js","chunks/index-98c77cfd.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "bootstrapp",
				pattern: /^\/bootstrapp\/?$/,
				names: [],
				types: [],
				path: "/bootstrapp",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "explorer",
				pattern: /^\/explorer\/?$/,
				names: [],
				types: [],
				path: "/explorer",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "svelte-component",
				pattern: /^\/svelte-component\/?$/,
				names: [],
				types: [],
				path: "/svelte-component",
				shadow: null,
				a: [0,5,6],
				b: [1]
			},
			{
				type: 'page',
				id: "what",
				pattern: /^\/what\/?$/,
				names: [],
				types: [],
				path: "/what",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "svelte-component/[component]",
				pattern: /^\/svelte-component\/([^/]+?)\/?$/,
				names: ["component"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,5,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
