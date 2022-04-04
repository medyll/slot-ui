import { t as listen, u as bubble, c as create_ssr_component, f as escape, e as add_attribute, h as each } from "./index-fbd3851f.js";
function createEventForwarder(component, exclude = []) {
  let $on;
  let events = [];
  component.$on = (eventType, callback) => {
    let destructor = () => {
    };
    if (exclude.includes(eventType)) {
      const callbacks = component.$$.callbacks[eventType] || (component.$$.callbacks[eventType] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    return () => destructor();
  };
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    const forward = (e) => bubble(component, e);
    $on = (eventType, callback) => {
      let handler = callback;
      let options = false;
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (const event of events) {
      $on(event[0], event[1]);
    }
    return {
      destroy: () => {
        for (const destructor of destructors) {
          destructor();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
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
export { VirtualList as V, createEventForwarder as c };
