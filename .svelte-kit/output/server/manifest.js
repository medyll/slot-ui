export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-68b391be.js","js":["start-68b391be.js","chunks/vendor-cb99cb04.js","chunks/singletons-a6a7384f.js"],"css":["assets/vendor-ed5447c5.css"]},
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
