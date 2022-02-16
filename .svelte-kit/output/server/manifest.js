export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-ec5018c6.js","js":["start-ec5018c6.js","chunks/vendor-bfa849eb.js","chunks/singletons-a6a7384f.js"],"css":["assets/vendor-ed5447c5.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: () => import('./entries/endpoints/index.ts.js'),
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/explorer\/?$/,
				params: null,
				path: "/explorer",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/what\/?$/,
				params: null,
				path: "/what",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		]
	}
};
