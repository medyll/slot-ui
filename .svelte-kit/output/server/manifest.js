export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-13ef3591.js","js":["start-13ef3591.js","chunks/vendor-7533cb4a.js","chunks/singletons-d1fb5791.js"],"css":["assets/vendor-ed5447c5.css"]},
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
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: () => import('./entries/endpoints/index.ts.js'),
				a: [0,2],
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
				a: [0,3],
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
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
