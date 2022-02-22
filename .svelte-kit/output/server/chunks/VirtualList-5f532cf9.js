import { c as create_ssr_component, f as escape, i as add_attribute, h as each } from "./index-9e1741a1.js";
var Divider_svelte_svelte_type_style_lang = "";
var VirtualList_svelte_svelte_type_style_lang = "";
const css = {
  code: "svelte-virtual-list-viewport.svelte-1tqh76q{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-1tqh76q,svelte-virtual-list-row.svelte-1tqh76q{display:block}svelte-virtual-list-row.svelte-1tqh76q{overflow:hidden}",
  map: null
};
const VirtualList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  let { height = "100%" } = $$props;
  let { itemHeight = void 0 } = $$props;
  let { start = 0 } = $$props;
  let { end = 0 } = $$props;
  let viewport;
  let contents;
  let visible;
  let top = 0;
  let bottom = 0;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  $$result.css.add(css);
  visible = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });
  return `<svelte-virtual-list-viewport style="${"height: " + escape(height) + ";"}" class="${"svelte-1tqh76q"}"${add_attribute("this", viewport, 0)}><svelte-virtual-list-contents style="${"padding-top: " + escape(top) + "px; padding-bottom: " + escape(bottom) + "px;"}" class="${"svelte-1tqh76q"}"${add_attribute("this", contents, 0)}>${each(visible, (row) => {
    return `<svelte-virtual-list-row class="${"svelte-1tqh76q"}">${slots.default ? slots.default({ item: row.data }) : `Missing template`}
			</svelte-virtual-list-row>`;
  })}</svelte-virtual-list-contents></svelte-virtual-list-viewport>`;
});
export { VirtualList as V };
