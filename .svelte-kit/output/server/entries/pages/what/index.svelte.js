import { c as create_ssr_component, d as get_current_component, e as add_attribute, v as validate_component, f as escape } from "../../../chunks/index-fbd3851f.js";
import { c as createEventForwarder, V as VirtualList } from "../../../chunks/VirtualList-b0c0fb34.js";
var DataList_svelte_svelte_type_style_lang = "";
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
    $$rendered = `<div class="${"dataList"}"${add_attribute("this", element, 0)}>${slots.head ? slots.head({ item: val }) : `

    `}
    ${validate_component(VirtualList, "VirtualList").$$render($$result, { height: "100%", items }, {
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
var index_svelte_svelte_type_style_lang = "";
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
