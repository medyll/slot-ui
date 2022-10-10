import type { LayoutServerLoad } from "./$types";
import { slotuiCatalog } from "$lib/slotuiCatalog.js";

export const load: LayoutServerLoad = async () => {
  return {slotuiCatalog};
};
