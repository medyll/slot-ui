/* import sveld from 'sveld';
import sveltePreprocess from 'svelte-preprocess';
import * as svelte from 'svelte/compiler'; */
import qs from 'query-string';
export default function pluginDoc() {
	return {
		name: 'plugin-doc',
		async transform(src, id) {
			// console.log(src.split('export default '));
			const query = qs.parse(id.split('?')[1]);

			//if ('raw' in query && 'sveld' in query) {
			if (id.endsWith('.svelte')) {
				console.log(id);
				//const raw = JSON.parse(src.split('export default ')[1]);

				/* let { code } = await svelte.preprocess(raw, sveltePreprocess(), {
				filename: id
			}); */
				/* const data = new sveld.ComponentParser({
				verbose: false
			}).parseSvelteComponent(code, {
				filePath: id,
				moduleName: id
			}); */

				const data = {};
				/* return {
					code: ``,
					map: null
				}; */
			}
		}
	};
}
