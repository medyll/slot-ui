import { k as noop, l as safe_not_equal, c as create_ssr_component, i as add_attribute, f as escape, n as null_to_empty, v as validate_component, b as compute_slots, d as getContext, a as subscribe, g as get_store_value, s as setContext, e as set_store_value } from "./index-9e1741a1.js";
import { V as VirtualList } from "./VirtualList-5f532cf9.js";
import _ from "lodash";
import * as All3 from "@fortawesome/free-regular-svg-icons";
import * as All2 from "@fortawesome/free-brands-svg-icons";
import * as All1 from "@fortawesome/free-solid-svg-icons";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const parseNumber = parseFloat;
function joinCss(obj, separator = ";") {
  let texts;
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text);
  } else {
    texts = [];
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`);
      }
    }
  }
  return texts.join(separator);
}
function getStyles(style, size, pull, fw) {
  let float;
  let width;
  const height = "1em";
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = "-.125em";
  const overflow = "visible";
  if (fw) {
    textAlign = "center";
    width = "1.25em";
  }
  if (pull) {
    float = pull;
  }
  if (size) {
    if (size == "lg") {
      fontSize = "1.33333em";
      lineHeight = ".75em";
      verticalAlign = "-.225em";
    } else if (size == "xs") {
      fontSize = ".75em";
    } else if (size == "sm") {
      fontSize = ".875em";
    } else {
      fontSize = size.replace("x", "em");
    }
  }
  return joinCss([
    joinCss({
      float,
      width,
      height,
      "line-height": lineHeight,
      "font-size": fontSize,
      "text-align": textAlign,
      "vertical-align": verticalAlign,
      "transform-origin": "center",
      overflow
    }),
    style
  ]);
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  return joinCss([
    `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
    `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
    rotate && `rotate(${rotate}${rotateUnit})`
  ], " ");
}
var fa_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".spin.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 2s 0s infinite linear}.pulse.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 1s infinite steps(8)}@keyframes svelte-1cj2gr0-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  let { fw = false } = $$props;
  let { pull = "" } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = "" } = $$props;
  let { flip = false } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let i;
  let c;
  let s;
  let transform;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css$5);
  i = icon && icon.icon || [0, 0, "", [], ""];
  c = joinCss([clazz, "svelte-fa", spin && "spin", pulse && "pulse"], " ");
  s = getStyles(style, size, pull, fw);
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? `<svg${add_attribute("id", id, 0)} class="${escape(null_to_empty(c)) + " svelte-1cj2gr0"}"${add_attribute("style", s, 0)}${add_attribute("viewBox", `0 0 ${i[0]} ${i[1]}`, 0)} aria-hidden="${"true"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}"><g${add_attribute("transform", `translate(${i[0] / 2} ${i[1] / 2})`, 0)}${add_attribute("transform-origin", `${i[0] / 4} 0`, 0)}><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)}${add_attribute("transform", `translate(${i[0] / -2} ${i[1] / -2})`, 0)}></path>` : `<path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)}${add_attribute("transform", `translate(${i[0] / -2} ${i[1] / -2})`, 0)}></path>
          <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)}${add_attribute("transform", `translate(${i[0] / -2} ${i[1] / -2})`, 0)}></path>`}</g></g></svg>` : ``}`;
});
var Fa$1 = Fa;
let IconTypes = { ...All1, ...All2, ...All3 };
const sizes = {
  tiny: 8,
  small: 16,
  medium: 24,
  default: 32,
  large: 48,
  big: 64
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "faQuestion" } = $$props;
  let { fontSize = "medium" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  return `${validate_component(Fa$1, "Fa").$$render($$result, {
    style: "font-size:" + sizes[fontSize] + "px",
    icon: IconTypes[icon]
  }, {}, {})}`;
});
var IconButton_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "button.svelte-8f7jh8.svelte-8f7jh8{padding:8px;position:relative;background-color:transparent;border:1px solid transparent}button.svelte-8f7jh8.svelte-8f7jh8:hover{border:1px solid rgba(255, 255, 255, 0.1);background-color:rgba(255, 255, 255, 0.2);backdrop-filter:blur(10px)}button.svelte-8f7jh8 span.svelte-8f7jh8{display:flex;grid-gap:4px}button.svelte-8f7jh8 .chip.svelte-8f7jh8{position:absolute;height:6px;left:50%;transform:translate(-50%, 0);width:50%;background-color:blue;border-radius:16px;bottom:0px}",
  map: null
};
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  let { element = null } = $$props;
  let { icon } = $$props;
  let { style = "" } = $$props;
  let { showShip = false } = $$props;
  let { iconFontSize = "medium" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.showShip === void 0 && $$bindings.showShip && showShip !== void 0)
    $$bindings.showShip(showShip);
  if ($$props.iconFontSize === void 0 && $$bindings.iconFontSize && iconFontSize !== void 0)
    $$bindings.iconFontSize(iconFontSize);
  $$result.css.add(css$4);
  return `<button${add_attribute("style", style, 0)} class="${escape(null_to_empty(className)) + " svelte-8f7jh8"}"><span class="${"svelte-8f7jh8"}"><span class="${"icon svelte-8f7jh8"}">${validate_component(Icon, "Icon").$$render($$result, { icon, fontSize: iconFontSize }, {}, {})}</span>
		${slots.default ? slots.default({}) : ``}</span>
	${showShip ? `<span class="${"chip svelte-8f7jh8"}"></span>` : ``}
</button>`;
});
const css$3 = {
  code: "@use './Divider.scss';",
  map: null
};
const Divider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { density = "default" } = $$props;
  let { direction = "horizontal" } = $$props;
  let { extension = "centered" } = $$props;
  let extensionClass = {
    full: "marg-tb-1 ",
    padded: "marg-tb-1 marg-ii-2",
    centered: "marg-tb-1 marg-ii-4"
  };
  if ($$props.density === void 0 && $$bindings.density && density !== void 0)
    $$bindings.density(density);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.extension === void 0 && $$bindings.extension && extension !== void 0)
    $$bindings.extension(extension);
  $$result.css.add(css$3);
  return `<hr${add_attribute("class", extensionClass[extension], 0)}>`;
});
const ContentSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "faToggleOff" } = $$props;
  let { parent } = $$props;
  let thisHolderRef;
  let thisRef;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  return `${validate_component(IconButton, "IconButton").$$render($$result, { iconFontSize: "small", icon }, {}, {})}
<div style="${"display:none"}"${add_attribute("this", thisHolderRef, 0)}><div class="${"flex-h flex-align-middle"}" style="${"width:100%;flex:1;"}"${add_attribute("this", thisRef, 0)}><div>${validate_component(IconButton, "IconButton").$$render($$result, {
    iconFontSize: "small",
    icon: "faChevronLeft"
  }, {}, {})}</div>
		<div class="${"flex-main"}">${slots.default ? slots.default({}) : ``}</div></div></div>`;
});
const TopBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let headerRef;
  let { title } = $$props;
  let { orientation = "right" } = $$props;
  const posTitle = orientation === "right" ? 1 : 3;
  const posCloser = orientation === "right" ? 3 : 1;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  return `<div class="${"flex-h flex-align-middle flex-main"}"${add_attribute("this", headerRef, 0)}><div class="${"title flex-main text-500"}" style="${"order:" + escape(posTitle) + ";min-width:auto"}">${$$slots.menuBarTitle || Boolean(title) ? `${slots.menuBarTitle ? slots.menuBarTitle({}) : `
				<div style="${"font-size:18px;min-width:auto;overflow:hidden;"}" class="${"overflow-hidden text-ellipsis pad-l-4 "}"><h5 class="${"text-ellipsis"}">${escape(title)}</h5></div>
			`}` : ``}</div>
	<div style="${"order:2"}">${slots.menuBarButtons ? slots.menuBarButtons({}) : ``}</div> 
	${$$slots.menuBarSwitcher ? `<div style="${"order:" + escape(posCloser)}">${validate_component(ContentSwitcher, "ContentSwitcher").$$render($$result, { parent: headerRef, icon: "faSearch" }, {}, {
    default: () => {
      return `${slots.menuBarSwitcher ? slots.menuBarSwitcher({}) : ``}`;
    }
  })}</div>` : ``}</div>`;
});
var ListItem_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "li.listItemTitle,li.listItem{display:flex;align-items:center;position:relative;border-radius:4px}li.listItemTitle .listItemContent,li.listItem .listItemContent{flex:1;padding:0 0.5rem}li.listItemTitle .listItemAction,li.listItem .listItemAction{padding:0 0.5rem}li.listItemTitle .listItemIcon,li.listItem .listItemIcon{text-align:center;padding:0 0.5rem;overflow:hidden}li.listItemTitle.density-tight,li.listItem.density-tight{padding:0.5rem 0;margin:0.125rem 0}li.listItemTitle.density-default,li.listItem.density-default{padding:1rem 0;margin:0.25rem 0}li.listItemTitle.density-kind,li.listItem.density-kind{padding:1.5rem 0;margin:0.5rem 0}.listItemTitle .listItemContent [slot=primary]{color:red}li.listItem:hover{background-color:rgba(255, 255, 255, 0.3)}li.listItem.isActive{background-color:rgba(255, 255, 255, 0.3)}li.listItem.isActive .listItemChip{position:absolute;height:50%;width:3px;background-color:maroon;border-radius:8px;left:-1px}.listItem.density-tight{padding:0.5rem 0;margin:0.125rem 0}.listItem.density-default{padding:1rem 0;margin:0.25rem 0}.listItem.density-kind{padding:1.5rem 0;margin:0.5rem 0}.listItemIcon{text-align:center;padding:0 0.5rem;width:2rem;overflow:hidden;opacity:0.8}",
  map: null
};
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $listStateContext, $$unsubscribe_listStateContext;
  let { icon } = $$props;
  let { primary } = $$props;
  let { secondary } = $$props;
  let { action } = $$props;
  let { data = {} } = $$props;
  let { density = "default" } = $$props;
  let ref;
  let listStateContext = getContext("listStateContext");
  $$unsubscribe_listStateContext = subscribe(listStateContext, (value) => $listStateContext = value);
  let isActive = false;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.density === void 0 && $$bindings.density && density !== void 0)
    $$bindings.density(density);
  $$result.css.add(css$2);
  {
    if ($listStateContext?.selectorField) {
      isActive = listStateContext.selector($listStateContext.selectorField, data);
    }
  }
  $$unsubscribe_listStateContext();
  return `<li class="${["listItem density-" + escape(density), isActive ? "isActive" : ""].join(" ").trim()}"${add_attribute("this", ref, 0)}><span class="${"listItemChip"}"></span>
	<div class="${"listItemIcon"}">${slots.icon ? slots.icon({}) : ``}</div>
	<div class="${"listItemContent"}"><div>${slots.primary ? slots.primary({}) : ``}</div>
		<div>${slots.secondary ? slots.secondary({}) : ``}</div></div>
	<div class="${"listItemAction"}">${slots.action ? slots.action({}) : ``}</div></li>
${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}`;
});
function createStore() {
  const initialData = { activeData: {}, selectorField: "id", density: "default" };
  const innerStore = writable(initialData);
  const { subscribe: subscribe2, set, update } = innerStore;
  return {
    subscribe: subscribe2,
    set,
    update,
    setSelectorField: (selectorField) => update((n) => {
      return { ...n, selectorField };
    }),
    setActiveData: (data) => {
      update((n) => {
        return { ...n, activeData: data };
      });
    },
    selector: (field, data) => {
      return get_store_value(innerStore).activeData[field] === data[field];
    }
  };
}
const createListStore = () => createStore();
const propsXy = (props, data) => {
  let ret = [];
  for (const dta of data) {
    let out = {};
    for (const prop of props) {
      const keyFrom = prop[1];
      const keyTo = prop[0];
      if (dta[keyFrom])
        out[keyTo] = dta[keyFrom];
    }
    out["data"] = dta;
    ret.push(out);
  }
  return ret;
};
const toFa = function(strIn) {
  return strIn ? "fa" + _.capitalize(_.camelCase(strIn)) : "";
};
var ListTitle_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "li.listItemTitle,li.listItem{display:flex;align-items:center;position:relative;border-radius:4px}li.listItemTitle .listItemContent,li.listItem .listItemContent{flex:1;padding:0 0.5rem}li.listItemTitle .listItemAction,li.listItem .listItemAction{padding:0 0.5rem}li.listItemTitle .listItemIcon,li.listItem .listItemIcon{text-align:center;padding:0 0.5rem;overflow:hidden}li.listItemTitle.density-tight,li.listItem.density-tight{padding:0.5rem 0;margin:0.125rem 0}li.listItemTitle.density-default,li.listItem.density-default{padding:1rem 0;margin:0.25rem 0}li.listItemTitle.density-kind,li.listItem.density-kind{padding:1.5rem 0;margin:0.5rem 0}.listItemTitle .listItemContent [slot=primary]{color:red}li.listItem:hover{background-color:rgba(255, 255, 255, 0.3)}li.listItem.isActive{background-color:rgba(255, 255, 255, 0.3)}li.listItem.isActive .listItemChip{position:absolute;height:50%;width:3px;background-color:maroon;border-radius:8px;left:-1px}",
  map: null
};
const ListTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { icon } = $$props;
  let { primary } = $$props;
  let { secondary } = $$props;
  let { action } = $$props;
  let { density = "default" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.density === void 0 && $$bindings.density && density !== void 0)
    $$bindings.density(density);
  $$result.css.add(css$1);
  return `<li class="${"listItemTitle density-" + escape(density)}">${icon || $$slots.icon ? `<div class="${"listItemIcon"}">${slots.icon ? slots.icon({}) : ``}</div>` : ``}
    <div class="${"listItemContent"}">${primary || $$slots.primary ? `<h5>${slots.primary ? slots.primary({}) : `${escape(primary)}`}</h5>` : ``}
        ${secondary || $$slots.secondary ? `<div>${slots.secondary ? slots.secondary({}) : `${escape(secondary)}`}</div>` : ``}</div>
    <div class="${"listItemAction"}">${slots.action ? slots.action({}) : ``}</div></li>





${slots.iloveslots ? slots.iloveslots({}) : ``}

<slot:iloveslots></slot:iloveslots>`;
});
var List_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.listItemTitle,li.listItem{display:flex;align-items:center;position:relative;border-radius:4px}li.listItemTitle .listItemContent,li.listItem .listItemContent{flex:1;padding:0 0.5rem}li.listItemTitle .listItemAction,li.listItem .listItemAction{padding:0 0.5rem}li.listItemTitle .listItemIcon,li.listItem .listItemIcon{text-align:center;padding:0 0.5rem;overflow:hidden}li.listItemTitle.density-tight,li.listItem.density-tight{padding:0.5rem 0;margin:0.125rem 0}li.listItemTitle.density-default,li.listItem.density-default{padding:1rem 0;margin:0.25rem 0}li.listItemTitle.density-kind,li.listItem.density-kind{padding:1.5rem 0;margin:0.5rem 0}.listItemTitle .listItemContent [slot=primary]{color:red}li.listItem:hover{background-color:rgba(255, 255, 255, 0.3)}li.listItem.isActive{background-color:rgba(255, 255, 255, 0.3)}li.listItem.isActive .listItemChip{position:absolute;height:50%;width:3px;background-color:maroon;border-radius:8px;left:-1px}",
  map: null
};
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let $listStore, $$unsubscribe_listStore;
  let { listItems } = $$props;
  let { direction = "vertical" } = $$props;
  let { style = "" } = $$props;
  let { selectorField } = $$props;
  let { onItemClick } = $$props;
  let { title } = $$props;
  let { density = "default" } = $$props;
  let ref;
  const listStore = createListStore();
  $$unsubscribe_listStore = subscribe(listStore, (value) => $listStore = value);
  setContext("listStateContext", listStore);
  set_store_value(listStore, $listStore.density = density, $listStore);
  listStore.setSelectorField(selectorField);
  if ($$props.listItems === void 0 && $$bindings.listItems && listItems !== void 0)
    $$bindings.listItems(listItems);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.selectorField === void 0 && $$bindings.selectorField && selectorField !== void 0)
    $$bindings.selectorField(selectorField);
  if ($$props.onItemClick === void 0 && $$bindings.onItemClick && onItemClick !== void 0)
    $$bindings.onItemClick(onItemClick);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.density === void 0 && $$bindings.density && density !== void 0)
    $$bindings.density(density);
  $$result.css.add(css);
  $$unsubscribe_listStore();
  return `<ul class="${"density-" + escape(density)}"${add_attribute("style", style, 0)}${add_attribute("this", ref, 0)}>${$$slots.title || title ? `${slots.title ? slots.title({ listItem: item }) : `
            ${validate_component(ListTitle, "ListTitle").$$render($$result, { primary: title }, {}, {})}
        `}` : ``}
    ${listItems ? `${validate_component(VirtualList, "VirtualList").$$render($$result, { items: listItems }, {}, {
    default: ({ item: item2 }) => {
      return `${slots.default ? slots.default({ listItem: item2 }) : `
                ${validate_component(ListItem, "ListItem").$$render($$result, { density, data: item2.data }, {}, {
        action: () => {
          return `<span slot="${"action"}">${escape(null_to_empty(item2.action))}</span>`;
        },
        primary: () => {
          return `<span slot="${"primary"}">${escape(null_to_empty(item2.primary))}</span>`;
        },
        icon: () => {
          return `<span slot="${"icon"}">${validate_component(Icon, "Icon").$$render($$result, { fontSize: "tiny", icon: toFa(item2.icon) }, {}, {})}</span>`;
        }
      })}
            `}`;
    }
  })}` : ``}
    ${!listItems ? `${slots.default ? slots.default({}) : ``}` : ``}
</ul>`;
});
export { Divider as D, IconButton as I, List as L, TopBar as T, Icon as a, ListItem as b, propsXy as p, toFa as t, writable as w };
