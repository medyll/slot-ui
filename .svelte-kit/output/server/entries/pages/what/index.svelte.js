import { c as create_ssr_component, e as escape, b as add_attribute, d as each, h as get_current_component, v as validate_component } from "../../../chunks/index-80980bc6.js";
import { c as createEventForwarder } from "../../../chunks/Divider.svelte_svelte_type_style_lang-e9de6a95.js";
var VirtualList_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "svelte-virtual-list-viewport.svelte-1tqh76q{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-1tqh76q,svelte-virtual-list-row.svelte-1tqh76q{display:block}svelte-virtual-list-row.svelte-1tqh76q{overflow:hidden}")();
const css$2 = {
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
  $$result.css.add(css$2);
  visible = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });
  return `<svelte-virtual-list-viewport style="${"height: " + escape(height) + ";"}" class="${"svelte-1tqh76q"}"${add_attribute("this", viewport, 0)}><svelte-virtual-list-contents style="${"padding-top: " + escape(top) + "px; padding-bottom: " + escape(bottom) + "px;"}" class="${"svelte-1tqh76q"}"${add_attribute("this", contents, 0)}>${each(visible, (row) => {
    return `<svelte-virtual-list-row class="${"svelte-1tqh76q"}">${slots.default ? slots.default({ item: row.data }) : `Missing template`}
			</svelte-virtual-list-row>`;
  })}</svelte-virtual-list-contents></svelte-virtual-list-viewport>`;
});
var DataList_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".dataList{height:100%;position:relative}.dataList .dataListHead{display:table-row}.dataList .dataListHead .dataListCell{display:table-cell;padding:8px}.dataList .dataListRow{display:inline-flex;border:1px solid rgba(0, 0, 0, 0.1);border-radius:6px;margin:0.25rem 0}.dataList .dataListRow .dataListCell{display:table-cell;padding:8px;color:var(--theme-color-text)}")();
const css$1 = {
  code: ".dataList{height:100%;position:relative}.dataList .dataListHead{display:table-row}.dataList .dataListHead .dataListCell{display:table-cell;padding:8px}.dataList .dataListRow{display:inline-flex;border:1px solid rgba(0, 0, 0, 0.1);border-radius:6px;margin:0.25rem 0}.dataList .dataListRow .dataListCell{display:table-cell;padding:8px;color:var(--theme-color-text)}",
  map: null
};
const DataList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  let { element = null } = $$props;
  createEventForwarder(get_current_component());
  let { items = [] } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"dataList " + escape(className)}"${add_attribute("this", element, 0)}>${validate_component(VirtualList, "VirtualList").$$render($$result, { height: "100%", items }, {
      items: ($$value) => {
        items = $$value;
        $$settled = false;
      }
    }, {
      default: ({ val: val2 }) => {
        return `${slots.default ? slots.default({ item: val2 }) : `
        `}`;
      }
    })}
    ${slots.foot ? slots.foot({ item: val }) : `

    `}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const DataListRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"dataListRow"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const DataListCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"dataListCell"}">${slots.default ? slots.default({}) : ``}</div>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".what{background-color:var(--theme-color-background);color:var(--theme-color-text)}")();
const css = {
  code: ".what{background-color:var(--theme-color-background);color:var(--theme-color-text)}",
  map: null
};
const What = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [...Array(7e4)];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"what h-full pos-rel overflow-auto pad-4"}">${validate_component(DataList, "DataList").$$render($$result, { items }, {
      items: ($$value) => {
        items = $$value;
        $$settled = false;
      }
    }, {
      default: ({ item }) => {
        return `
        ${validate_component(DataListRow, "DataListRow").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(DataListCell, "DataListCell").$$render($$result, {}, {}, {
              default: () => {
                return `${escape(item)}`;
              }
            })}
            ${validate_component(DataListCell, "DataListCell").$$render($$result, {}, {}, {
              default: () => {
                return `121512`;
              }
            })}
            ${validate_component(DataListCell, "DataListCell").$$render($$result, {}, {}, {
              default: () => {
                return `121512`;
              }
            })}
            ${validate_component(DataListCell, "DataListCell").$$render($$result, {}, {}, {
              default: () => {
                return `vfbgfbgf`;
              }
            })}
            ${validate_component(DataListCell, "DataListCell").$$render($$result, {}, {}, {
              default: () => {
                return `vfbgfbgf`;
              }
            })}
            ${validate_component(DataListCell, "DataListCell").$$render($$result, {}, {}, {
              default: () => {
                return `vfbgfbgf`;
              }
            })}`;
          }
        })}`;
      }
    })}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export { What as default };
