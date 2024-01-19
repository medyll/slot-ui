import type { LayoutLoad } from './$types.js';
import { slotuiCatalog } from '$sitedata/slotuiCatalog.js';

const fetchIt = async () =>
	new Promise((resolve, reject) => {
		resolve(slotuiCatalog);
	});

export const load: LayoutLoad = async (params) => {
	// console.log(params)
	return {
		...params,
		slotuiCatalog,
		streamed: {
			slotuiCatalog: fetchIt()
		}
	};
};
