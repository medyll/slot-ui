export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-cd200310.js","js":["start-cd200310.js","chunks/vendor-ba10a141.js","chunks/singletons-a6a7384f.js"],"css":["assets/vendor-1da33c5e.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'endpoint',
				pattern: /^\/$/,
				params: null,
				load: () => import('./entries/endpoints/index.ts.js')
			},
			{
				type: 'page',
				pattern: /^\/explorer\/?$/,
				params: null,
				path: "/explorer",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/what\/?$/,
				params: null,
				path: "/what",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		]
	}
};
