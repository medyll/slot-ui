import { g as get_store_value, c as create_ssr_component, a as subscribe, s as setContext, b as compute_slots, d as getContext, e as set_store_value, f as escape, n as null_to_empty, v as validate_component, h as each, i as add_attribute, j as get_current_component } from "../../chunks/index-9e1741a1.js";
import { w as writable, D as Divider, I as IconButton, a as Icon, L as List, T as TopBar, b as ListItem } from "../../chunks/List-3360d3e6.js";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-solid-svg-icons";
import "../../chunks/VirtualList-5f532cf9.js";
import "@neodrag/svelte";
import "color";
import "lodash";
const presets = {
  light: {
    colors: {
      text: "#282230",
      background: {
        _: "#f1f1f1",
        contrast: "#b1b1b1"
      },
      primary: "#01796f",
      primary_dark: "#016159",
      secondary: "#562931"
    }
  },
  dark: {
    colors: {
      text: "#f1f1f1",
      background: {
        _: "#27323a",
        contrast: "#0d1215"
      },
      primary: "#01978b",
      primary_dark: "#00887c",
      secondary: "#fe8690"
    }
  },
  forest: {
    colors: {
      text: "#f9f2cf",
      background: {
        _: "#3b6c4c",
        contrast: "#1d492c"
      },
      primary: "#efdc7e",
      primary_dark: "#e4d589",
      secondary: "#4a875f"
    }
  }
};
const currentThemeName = writable();
const currentThemeObject = writable();
const themes$1 = writable();
function toggle() {
  let themes2 = get_store_value(themes$1);
  currentThemeName.update((current) => {
    let keys = Object.keys(themes2);
    return keys.reduce((newCurrent, theme, index, source) => {
      if (theme === current) {
        if (source[index + 1])
          return source[index + 1];
        else
          return source[0];
      }
      return newCurrent;
    }, "");
  });
}
function processConfig(obj) {
  const result = {};
  const recurse = (obj2, current) => {
    for (let prop in obj2) {
      const value = obj2[prop];
      const key = (current ? `${current}-${prop}` : prop).replace(/-_$/g, "").replace(/([A-Z])([A-Z])(?=[a-z])/g, "$1-$2").toLowerCase();
      if (value && typeof value === "object") {
        recurse(value, key);
      } else {
        result[key] = value;
      }
    }
  };
  recurse(obj);
  return result;
}
function createCSSVariableName({ variablePrefix, prop, key }) {
  if (key)
    return `${variablePrefix}-${key}-${prop}`;
  else
    return `${variablePrefix}-${prop}`;
}
function createCSSVariableStatement(variableName, value) {
  return `${variableName}: ${value};`;
}
function createCSSVariableOverride({
  initialVariableName,
  themeVariableName
}) {
  return `${initialVariableName}: var(${themeVariableName});`;
}
function createCSSTemplate(prefix, base = {}) {
  const variablePrefix = prefix ? `--${prefix}` : "-";
  const themes2 = get_store_value(themes$1);
  const processedBaseConfig = processConfig(base);
  const baseCSSVariables = Object.entries(processedBaseConfig).map(([prop, value]) => [createCSSVariableName({ variablePrefix, prop }), value]);
  const rootCSSVariables = [].concat(baseCSSVariables);
  const themeCSSContent = [];
  for (let [themeName, themeValues] of Object.entries(themes2)) {
    const processed = processConfig(themeValues);
    const overrides = [];
    for (let [prop, value] of Object.entries(processed)) {
      const initialVariableName = createCSSVariableName({
        variablePrefix,
        prop
      });
      if (!rootCSSVariables.some(([variableName]) => variableName === initialVariableName)) {
        rootCSSVariables.push([initialVariableName, value]);
      }
      rootCSSVariables.push([
        createCSSVariableName({ variablePrefix, prop, key: themeName }),
        value
      ]);
      overrides.push(createCSSVariableOverride({
        initialVariableName,
        themeVariableName: createCSSVariableName({
          variablePrefix,
          prop,
          key: themeName
        })
      }));
    }
    const themeCSSClassName = prefix ? `${prefix}--${themeName}` : themeName;
    themeCSSContent.push(`
      [theme='${themeName}'],
      .${themeCSSClassName} {
        ${overrides.join("\n	")}
      }
    `);
  }
  const template = `
    <style>
      :root {
        ${rootCSSVariables.map((vars) => createCSSVariableStatement(...vars)).join("")}
      }

      ${themeCSSContent.join("")}
    </style>
  `;
  return template.trim();
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
const STORAGE_KEY = "__svelte-themer__theme";
const CONTEXT_KEY = "theme";
const VARIABLE_PREFIX = "theme";
const VALID_MODES = ["auto", "light", "dark"];
const INVALID_THEMES_MESSAGE = "Invalid themes object supplied";
const INVALID_PREFIX_MESSAGE = "Invalid prefix string supplied";
const INVALID_MODE_MESSAGE = `Invalid mode string supplied, must be one of: ${VALID_MODES.join(", ")}`;
const ThemeWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentThemeName, $$unsubscribe_currentThemeName;
  $$unsubscribe_currentThemeName = subscribe(currentThemeName, (value) => $currentThemeName = value);
  let { key = STORAGE_KEY } = $$props;
  let { themes: themes2 = presets } = $$props;
  let { theme = null } = $$props;
  let { prefix = VARIABLE_PREFIX } = $$props;
  let { mode = "auto" } = $$props;
  let { base = {} } = $$props;
  if (!isObject(themes2) || !Object.keys(themes2).length)
    throw new Error(INVALID_THEMES_MESSAGE);
  if (typeof prefix === "string" && !prefix.trim().length)
    throw new Error(INVALID_PREFIX_MESSAGE);
  if (!VALID_MODES.includes(mode))
    throw new Error(INVALID_MODE_MESSAGE);
  themes$1.set(themes2);
  const [fallback] = Object.keys(themes2);
  if (!Object.keys(themes2).includes($currentThemeName)) {
    currentThemeName.set(fallback);
  }
  const style = createCSSTemplate(prefix, base);
  setContext(CONTEXT_KEY, {
    current: currentThemeName,
    toggle,
    theme: currentThemeName
  });
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.themes === void 0 && $$bindings.themes && themes2 !== void 0)
    $$bindings.themes(themes2);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.base === void 0 && $$bindings.base && base !== void 0)
    $$bindings.base(base);
  {
    currentThemeObject.set(themes2[$currentThemeName]);
  }
  $$unsubscribe_currentThemeName();
  return `${$$result.head += `<!-- HTML_TAG_START -->${style}<!-- HTML_TAG_END -->`, ""}

${slots.default ? slots.default({}) : `
  
`}`;
});
var ThemeToggle_svelte_svelte_type_style_lang = "";
var Popper_svelte_svelte_type_style_lang = "";
var MenuItem_svelte_svelte_type_style_lang = "";
const css$g = {
  code: ".menu{min-width:150px;padding:0.25rem;cursor:pointer;background-color:var(--theme-color-background);color:var(--theme-color-text);border:0.5px solid rgba(255, 255, 255, 0.1);border-radius:6px}.menu.density-tight .menuItem{padding:0.5rem 0;margin:0.125rem 0}.menu.density-default .menuItem{padding:1rem 0;margin:0.25rem 0}.menu.density-kind .menuItem{padding:1.5rem 0;margin:0.5rem 0}.menu .menuItem{border-radius:6px;overflow:hidden;display:flex}.menu .menuItem:hover{background-color:rgba(255, 255, 255, 0.3)}.menu .menuItem .menuItemIcon{width:24px;max-width:24px;text-align:center;overflow:hidden}.menu .menuItem .menuItemText{padding:0 0.25rem}.menu .menuItem.density-tight{padding:0.5rem 0;margin:0.125rem 0}.menu .menuItem.density-default{padding:1rem 0;margin:0.25rem 0}.menu .menuItem.density-kind{padding:1.5rem 0;margin:0.5rem 0}",
  map: null
};
const MenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let $menuStateContext, $$unsubscribe_menuStateContext;
  let { text } = $$props;
  let { icon } = $$props;
  let { divider } = $$props;
  const menuStateContext = getContext("menuStateContext");
  $$unsubscribe_menuStateContext = subscribe(menuStateContext, (value) => $menuStateContext = value);
  if (icon || $$slots.menuItemIconSlot) {
    set_store_value(menuStateContext, $menuStateContext.hasIcon = true, $menuStateContext);
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  $$result.css.add(css$g);
  $$unsubscribe_menuStateContext();
  return `<li class="${"menuItem"}" role="${"menuitem"}">${$menuStateContext.hasIcon ? `<div class="${"menuItemIcon"}">${slots.menuItemIconSlot ? slots.menuItemIconSlot({}) : `${escape(null_to_empty(icon))}`}</div>` : ``}
    <div class="${"menuItemText"}">${slots.default ? slots.default({}) : `
            ${slots.menuItemTextSlot ? slots.menuItemTextSlot({}) : `${escape(text)}`}
        `}</div></li>
${divider ? `<li>${validate_component(Divider, "Divider").$$render($$result, { extension: "none" }, {}, {})}</li>` : ``}`;
});
function createStore() {
  const initialData = { density: "default" };
  const innerStore = writable(initialData);
  const { subscribe: subscribe2, set, update } = innerStore;
  return {
    subscribe: subscribe2,
    set,
    update
  };
}
const createMenuStore = () => createStore();
var Menu_svelte_svelte_type_style_lang = "";
const css$f = {
  code: ".menu{min-width:150px;padding:0.25rem;cursor:pointer;background-color:var(--theme-color-background);color:var(--theme-color-text);border:0.5px solid rgba(255, 255, 255, 0.1);border-radius:6px}.menu.density-tight .menuItem{padding:0.5rem 0;margin:0.125rem 0}.menu.density-default .menuItem{padding:1rem 0;margin:0.25rem 0}.menu.density-kind .menuItem{padding:1.5rem 0;margin:0.5rem 0}.menu .menuItem{border-radius:6px;overflow:hidden;display:flex}.menu .menuItem:hover{background-color:rgba(255, 255, 255, 0.3)}.menu .menuItem .menuItemIcon{width:24px;max-width:24px;text-align:center;overflow:hidden}.menu .menuItem .menuItemText{padding:0 0.25rem}.menu .menuItem.density-tight{padding:0.5rem 0;margin:0.125rem 0}.menu .menuItem.density-default{padding:1rem 0;margin:0.25rem 0}.menu .menuItem.density-kind{padding:1.5rem 0;margin:0.5rem 0}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $menuStore, $$unsubscribe_menuStore;
  let { menuList } = $$props;
  let { density = "tight" } = $$props;
  const menuStore = createMenuStore();
  $$unsubscribe_menuStore = subscribe(menuStore, (value) => $menuStore = value);
  setContext("menuStateContext", menuStore);
  set_store_value(menuStore, $menuStore.density = density, $menuStore);
  if ($$props.menuList === void 0 && $$bindings.menuList && menuList !== void 0)
    $$bindings.menuList(menuList);
  if ($$props.density === void 0 && $$bindings.density && density !== void 0)
    $$bindings.density(density);
  $$result.css.add(css$f);
  $$unsubscribe_menuStore();
  return `<ul role="${"menu"}" class="${"density-" + escape(density) + " menu"}">${menuList ? `${each(menuList, (menuItem) => {
    return `${slots.default ? slots.default({ menuItem }) : `
				${validate_component(MenuItem, "MenuItem").$$render($$result, Object.assign(menuItem), {}, {})}
			`}`;
  })}` : ``}
	${slots.default ? slots.default({}) : ``}
</ul>`;
});
const ButtonAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "faList" } = $$props;
  let { actionComponent } = $$props;
  let { actionComponentProps } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.actionComponent === void 0 && $$bindings.actionComponent && actionComponent !== void 0)
    $$bindings.actionComponent(actionComponent);
  if ($$props.actionComponentProps === void 0 && $$bindings.actionComponentProps && actionComponentProps !== void 0)
    $$bindings.actionComponentProps(actionComponentProps);
  return `${validate_component(IconButton, "IconButton").$$render($$result, {
    icon: "faEllipsisH",
    iconFontSize: "small"
  }, {}, {})}`;
});
var Cartouche_svelte_svelte_type_style_lang = "";
var Tabs_svelte_svelte_type_style_lang = "";
var ServiceBox_svelte_svelte_type_style_lang = "";
var Taskbar_svelte_svelte_type_style_lang = "";
const css$e = {
  code: ".bar.svelte-1xhd9rd{grid-gap:8px;background-size:auto;background-color:rgba(255, 255, 255, 0.5);backdrop-filter:blur(20px);min-height:48px;box-sizing:border-box;border-bottom:1px solid rgba(255, 255, 255, 0.2)}",
  map: null
};
const Taskbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$e);
  return `<div class="${"bar flex-h flex-align-middle svelte-1xhd9rd"}">${slots.default ? slots.default({}) : `
        ${slots.taskBarLeft ? slots.taskBarLeft({}) : ``}
    `}
    <div class="${"flex-main"}"><button>Service Box
        </button></div>
    ${slots.taskBarRIght ? slots.taskBarRIght({}) : ``}
</div>`;
});
var Badge_svelte_svelte_type_style_lang = "";
var Avatar_svelte_svelte_type_style_lang = "";
const css$d = {
  code: ".avatar.svelte-1imhe8o{position:relative;border-radius:20%;border:1px solid rgba(255, 255, 255, 0.3);display:grid;place-items:center;overflow:hidden}",
  map: null
};
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "large" } = $$props;
  const sizes = {
    tiny: "2rem",
    small: "4rem",
    medium: "8rem",
    large: "12rem",
    full: "100%"
  };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$d);
  return `<div class="${"avatar svelte-1imhe8o"}" style="${"width:" + escape(sizes[size]) + ";height:" + escape(sizes[size])}">${slots.badge ? slots.badge({}) : ``}
    ${slots.default ? slots.default({}) : ``}
</div>`;
});
var Alert_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ".alert.svelte-ip86fr.svelte-ip86fr{position:relative;min-width:350px;display:inline-block;border-radius:6px;border:1px solid rgba(255, 255, 255, 0.1);background-color:rgba(0, 0, 0, 0.5);overflow:hidden}.alert.svelte-ip86fr .dot.svelte-ip86fr{display:inline-block;padding:0.25rem;border:1px solid rgba(255, 255, 255, 0.1);border-radius:6px;margin-right:1rem}.alert.svelte-ip86fr .close.svelte-ip86fr{position:absolute;right:0;top:0;border-radius:6px;margin:0.25rem;padding:0.25rem}",
  map: null
};
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { level = "info" } = $$props;
  let { action } = $$props;
  let { data } = $$props;
  let { text } = $$props;
  let { message } = $$props;
  let { isDragable = false } = $$props;
  let { isOpen = true } = $$props;
  const actions = {
    open: () => {
      isOpen = true;
    },
    toggle: () => {
      isOpen = !isOpen;
    },
    close: () => {
      isOpen = !isOpen;
    }
  };
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.isDragable === void 0 && $$bindings.isDragable && isDragable !== void 0)
    $$bindings.isDragable(isDragable);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0)
    $$bindings.actions(actions);
  $$result.css.add(css$c);
  return `${isOpen ? `<div class="${"alert shad-4 svelte-ip86fr"}"><div class="${"pad-1 pad-ii-2 border-b-4 border-color-scheme-" + escape(level) + " svelte-ip86fr"}"><div class="${"flex-h flex-align-top pad-tb-1"}"><div class="${"pad-1"}"><div class="${"dot bg-themed-scheme-" + escape(level) + " svelte-ip86fr"}"></div></div>				
				<div class="${"pad-1"}">${slots.default ? slots.default({}) : ``}</div></div>
			${$$slots.messageSlot ? `${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
				<div class="${"pad-1"}">${slots.messageSlot ? slots.messageSlot({}) : `message`}</div>` : ``}</div>
		${$$slots.action ? `${slots.action ? slots.action({}) : ``}` : ``}
		${$$slots.buttonZoneSlot ? `<div class="${"pad-tb-1 pad-ii-2 flex-h flex-align-right"}">${slots.buttonZoneSlot ? slots.buttonZoneSlot({}) : ``}</div>` : ``}
		<div class="${"close svelte-ip86fr"}">${validate_component(IconButton, "IconButton").$$render($$result, {
    iconFontSize: "small",
    icon: "faWindowClose"
  }, {}, {})}</div></div>` : ``}`;
});
var Select_svelte_svelte_type_style_lang = "";
const css$b = {
  code: ".select{background-color:rgba(255, 255, 255, 0.2);height:160px;width:160px;border-radius:6px}",
  map: null
};
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerRef;
  let inputRef;
  $$result.css.add(css$b);
  return `<input id="${"cool"}"${add_attribute("this", inputRef, 0)}>
<div class="${"pos-abs shad-16 select inputBorder"}" style="${"display:" + escape("none")}"${add_attribute("this", innerRef, 0)}>ss
</div>`;
});
var Paper_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".paper{background-color:var(--theme-color-background-contrast);border-radius:6px}",
  map: null
};
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { density = "default" } = $$props;
  let densityClass = {
    none: "",
    tight: "pad-1 marg-1",
    default: "pad-2 marg-2",
    kind: "pad-3 marg-3"
  };
  if ($$props.density === void 0 && $$bindings.density && density !== void 0)
    $$bindings.density(density);
  $$result.css.add(css$a);
  return `<div class="${"paper shad-8 " + escape(densityClass[density])}">${slots.default ? slots.default({}) : ``}
</div>`;
});
var Card_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".card.svelte-1obb16e{border-radius:6px;background-color:var(--theme-color-background-paper);border:1px solid rgba(208, 191, 151, 0.1);padding:0.5rem;height:120px}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return `<div class="${"card flex-v shad-32 svelte-1obb16e"}"><div class="${"title"}">${slots.title ? slots.title({}) : ``}</div>
    <div class="${"content flex-main"}">${slots.cardContentSlot ? slots.cardContentSlot({}) : `${slots.default ? slots.default({}) : ``}`}</div>
    ${validate_component(Divider, "Divider").$$render($$result, { extension: "full" }, {}, {})}
    <div class="${"footer"}">${slots.footer ? slots.footer({}) : ``}</div>
</div>`;
});
var TitleBar_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".titleBar{border-bottom:1px solid rgba(255, 255, 255, 0.1)}",
  map: null
};
const TitleBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClose } = $$props;
  let { hasMenu = true } = $$props;
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  if ($$props.hasMenu === void 0 && $$bindings.hasMenu && hasMenu !== void 0)
    $$bindings.hasMenu(hasMenu);
  $$result.css.add(css$8);
  return `<div class="${"titleBar flex-h marg-b-1 pad-1"}"><div class="${"title flex-main flex-h flex-align-middle"}"><div class="${"pad-ii-1 text-center"}">${slots.iconSlot ? slots.iconSlot({}) : `
                ${validate_component(Icon, "Icon").$$render($$result, { fontSize: "small", icon: "faWorld" }, {}, {})}
            `}</div>
        <div class="${"flex-main pad-l-1"}">${slots.titleSlot ? slots.titleSlot({}) : ``}</div></div>
    ${hasMenu ? `<div class="${""}">${validate_component(ButtonAction, "ButtonAction").$$render($$result, {}, {}, {})}</div>` : ``}
    ${onClose ? `<div class="${""}">${validate_component(IconButton, "IconButton").$$render($$result, {
    iconFontSize: "small",
    icon: "faWindowClose"
  }, {}, {})}</div>` : ``}
</div>`;
});
var Box_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".box{min-height:160px;min-width:320px;background-color:var(--theme-color-background-contrast);border-bottom:0.5px solid rgba(255, 255, 255, 0.1)}",
  map: null
};
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let { onClose } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  $$result.css.add(css$7);
  return `<div class="${"box flex-v " + escape(className)}">${validate_component(TitleBar, "TitleBar").$$render($$result, { onClose }, {}, {
    titleSlot: () => {
      return `${slots.titleSlot ? slots.titleSlot({ slot: "titleSlot" }) : ``}`;
    },
    iconSlot: () => {
      return `${slots.iconSlot ? slots.iconSlot({ slot: "iconSlot" }) : ``}`;
    }
  })}
    <div class="${"content flex-main pad-2"}">${slots.contentSlot ? slots.contentSlot({}) : `
            ${slots.default ? slots.default({}) : ``}
        `}</div>
    <div class="${"buttonZone pad-2"}">${slots.buttonZoneSlot ? slots.buttonZoneSlot({}) : ``}</div>
</div>`;
});
var Dashboard_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".gridIcon.svelte-jelpzm{width:100%;display:grid;align-items:center;grid-gap:32px;grid-template-columns:repeat(auto-fill, minmax(130px, auto))}",
  map: null
};
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const menuData = [
    { text: "text 1" },
    { text: "text 2" },
    { text: "text 3" },
    { text: "text 3" },
    { text: "text 3" },
    { text: "text 3", icon: "i" }
  ];
  $$result.css.add(css$6);
  return `<div class="${"pos-abs w-full h-full overflow-hidden pad-8"}" style="${"z-index:0"}"><div class="${"flex-h"}"><div>${validate_component(Avatar, "Avatar").$$render($$result, { size: "small" }, {}, {
    default: () => {
      return `${validate_component(Icon, "Icon").$$render($$result, { icon: "faCode" }, {}, {})}`;
    }
  })}
            ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
            ${validate_component(Select, "Select").$$render($$result, {}, {}, {})}
            ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
            ${validate_component(Paper, "Paper").$$render($$result, { density: "tight" }, {}, {
    default: () => {
      return `<div class="${"pad-4 dsp-block-inline flex-v flex-align-middle-center"}"><button fullwidth>explorer</button>
                    <br>
                    <button>what</button></div>`;
    }
  })}
            ${validate_component(Paper, "Paper").$$render($$result, { density: "tight" }, {}, {
    default: () => {
      return `${validate_component(ButtonAction, "ButtonPanel").$$render($$result, {
        actionComponent: Menu,
        actionComponentProps: { menuList: menuData }
      }, {}, {
        default: () => {
          return `button is what
                `;
        }
      })}`;
    }
  })}
            ${validate_component(Menu, "Menu").$$render($$result, { menuList: menuData }, {}, {})}</div>
        <div class="${"flex-main pad-4 overflow-auto"}">${validate_component(Paper, "Paper").$$render($$result, { density: "kind" }, {}, {
    default: () => {
      return `${validate_component(Alert, "Alert").$$render($$result, {
        level: "success",
        message: "message here"
      }, {}, {
        default: () => {
          return `Simple alert`;
        }
      })}
                ${validate_component(Alert, "Alert").$$render($$result, { level: "info", message: "message here" }, {}, {
        default: () => {
          return `Simple alert`;
        }
      })}
                ${validate_component(Alert, "Alert").$$render($$result, { level: "error", message: "message here" }, {}, {
        buttonZoneSlot: () => {
          return `<button data-close slot="${"buttonZoneSlot"}">button</button>`;
        },
        default: () => {
          return `Simple alert
                    `;
        }
      })}
                ${validate_component(Alert, "Alert").$$render($$result, {
        level: "warning",
        message: "message here"
      }, {}, {
        default: () => {
          return `Simple alert`;
        }
      })}
                ${validate_component(Alert, "Alert").$$render($$result, { level: "alert", message: "message here" }, {}, {
        default: () => {
          return `Simple <br>alert`;
        }
      })}
                ${validate_component(Alert, "Alert").$$render($$result, {
        level: "discrete",
        message: "message here"
      }, {}, {
        default: () => {
          return `Simple alert`;
        }
      })}
                ${validate_component(Alert, "Alert").$$render($$result, { message: "message here" }, {}, {
        buttonZoneSlot: () => {
          return `<button data-close slot="${"buttonZoneSlot"}">button</button>`;
        },
        messageSlot: () => {
          return `<div slot="${"messageSlot"}">message here</div>`;
        },
        default: () => {
          return `alert red
                    `;
        }
      })}`;
    }
  })}
            <div class="${"dsp-block-inline shad-16"}">${validate_component(Box, "Box").$$render($$result, { onClose: "cd" }, {}, {
    buttonZoneSlot: () => {
      return `<span slot="${"buttonZoneSlot"}"><button>button</button></span>`;
    },
    titleSlot: () => {
      return `<span slot="${"titleSlot"}">Title of the box</span>`;
    },
    iconSlot: () => {
      return `${validate_component(Icon, "Icon").$$render($$result, {
        slot: "iconSlot",
        fontSize: "small",
        icon: "faClock"
      }, {}, {})}`;
    },
    default: () => {
      return `Content of the box
                `;
    }
  })}</div>
            ${validate_component(Paper, "Paper").$$render($$result, { density: "kind" }, {}, {
    default: () => {
      return `<div class="${"gridIcon svelte-jelpzm"}">${each([...Array(20)], (key, val) => {
        return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
          footer: () => {
            return `<span slot="${"footer"}">Footer of the box</span>`;
          },
          title: () => {
            return `<span slot="${"title"}">Title of the box</span>`;
          },
          default: () => {
            return `content
                            
                        `;
          }
        })}`;
      })}</div>`;
    }
  })}</div></div>
</div>`;
});
var Panel_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".panel.svelte-4uh7at.svelte-4uh7at{position:relative;margin-bottom:2rem}.panel.svelte-4uh7at .panelBar.svelte-4uh7at{margin-bottom:2rem;display:flex;min-width:auto;align-items:center;padding-right:0.5rem}.panel.svelte-4uh7at .panelBar button.svelte-4uh7at{padding:0 0.5rem;border:1px solid rgba(255, 255, 255, 0.05);background-color:rgba(255, 255, 255, 0.1)}",
  map: null
};
const Panel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "not set" } = $$props;
  let ref;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$5);
  return `



<div class="${"panel svelte-4uh7at"}"${add_attribute("this", ref, 0)}><div class="${"panelBar svelte-4uh7at"}"><div style="${"flex:1"}">${escape(title)}</div>
        <button class="${"svelte-4uh7at"}">go there or back ? &gt;</button></div>
    <div class="${"panelContent"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
var PanelSlide_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".sidePanel.svelte-uv8u6f{position:absolute;top:0;bottom:0;padding:1rem 2rem;width:100%}",
  map: null
};
const PanelSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  const actions = {
    open: () => {
      setVisible(true);
    },
    close: () => {
      setVisible(false);
    },
    toggle: () => {
      setVisible(!open);
    }
  };
  function setVisible(vis) {
    open = vis;
  }
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0)
    $$bindings.actions(actions);
  $$result.css.add(css$4);
  return `


${open ? `<div class="${"sidePanel svelte-uv8u6f"}">${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const windowListObjects = /* @__PURE__ */ new Map([]);
const activeFrame = writable(null);
function createWindowStore() {
  const { subscribe: subscribe2, set, update } = writable(windowListObjects);
  activeFrame.subscribe((value) => {
  });
  return {
    subscribe: subscribe2,
    activeFrame,
    create: (payload) => update((n) => n.set(payload.frameId, { ...payload })),
    open: (payload) => update((n) => {
      activeFrame.set(payload.frameId);
      const obj = n.get(payload.frameId) ?? {};
      console.log({ ...obj, ...payload, open: true, minimized: false, maximized: true });
      return n.set(payload.frameId, { ...obj, ...payload, open: true, minimized: false, maximized: true });
    }),
    close: (frameId) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, { ...payload, open: false });
    }),
    minimize: (frameId) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, { ...payload, minimized: true });
    }),
    toggle: (frameId) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, { ...payload, minimized: !payload.minimized });
    }),
    remove: (frameId) => update((n) => {
      n.delete(frameId);
      return n;
    }),
    updatePos: (frameId, position) => update((n) => {
      const payload = n.get(frameId);
      n.set(frameId, { ...payload, position });
      return n;
    }),
    makeOnTop: (frameId) => update((n) => {
      const values = Array.from(n);
      const payload = n.get(frameId);
      const z = values.reduce((prev, val) => {
        return val[1]?.zIndex >= prev ? val[1]?.zIndex + 1 : prev;
      }, 0);
      n.set(frameId, { ...payload, zIndex: z });
      return n;
    }),
    reset: () => set(/* @__PURE__ */ new Map([]))
  };
}
const windowsStore = createWindowStore();
var Window_svelte_svelte_type_style_lang = "";
const startMenuStore = writable(true);
var StartMenu_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".startMenu.svelte-ko7k4i.svelte-ko7k4i{background-color:rgba(90, 67, 52, 0.9);backdrop-filter:blur(10px);color:white;display:flex;flex-direction:column;max-height:600px;height:80%;left:50%;transform:translate(-50%, 0);box-shadow:0px 0px 3px 1px rgba(51, 51, 51, 0.5);overflow:hidden;z-index:3000;position:absolute;margin-top:1rem}.startMenu.svelte-ko7k4i .startMenuContent.svelte-ko7k4i{flex:1;overflow-y:auto;overflow-x:hidden}.buttonPole.svelte-ko7k4i.svelte-ko7k4i{border-radius:4px;border:1px solid rgba(208, 191, 151, 0.3);padding:0.5rem}.gridIcon.svelte-ko7k4i.svelte-ko7k4i{width:100%;display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(30%, auto))}.gridIconBis.svelte-ko7k4i.svelte-ko7k4i{width:100%;display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(15%, auto))}.gridIconMid.svelte-ko7k4i.svelte-ko7k4i{width:100%;display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(49%, auto))}.gridOne.svelte-ko7k4i.svelte-ko7k4i{width:100%;display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(100%, auto))}.bottomBar.svelte-ko7k4i.svelte-ko7k4i{box-shadow:0px 0px 3px 1px rgba(51, 51, 51, 0.5)}",
  map: null
};
const StartMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_menuStore;
  let $startMenuStore, $$unsubscribe_startMenuStore;
  $$unsubscribe_startMenuStore = subscribe(startMenuStore, (value) => $startMenuStore = value);
  const menuStore = writable(null);
  $$unsubscribe_menuStore = subscribe(menuStore, (value) => value);
  let slideLeft;
  let slideRight;
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `


${$startMenuStore ? `<div class="${"startMenu svelte-ko7k4i"}"><div style="${"margin-bottom:2rem"}"><input style="${"width: 100%;"}" type="${"search"}" placeholder="${"Recherche"}"></div>
        <div style="${"position:relative"}" class="${"startMenuContent svelte-ko7k4i"}">${validate_component(PanelSlide, "PanelSlide").$$render($$result, { open: true, this: slideLeft }, {
      this: ($$value) => {
        slideLeft = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(Panel, "Panel").$$render($$result, { title: "Pinned Items" }, {}, {
          default: () => {
            return `<div class="${"gridIcon svelte-ko7k4i"}">${each([...Array(9)], (key, val) => {
              return `<div class="${"buttonPole svelte-ko7k4i"}">key
                            </div>`;
            })}</div>`;
          }
        })}
                ${validate_component(Panel, "Panel").$$render($$result, { title: "Recent Items" }, {}, {
          default: () => {
            return `<div class="${"gridIconBis svelte-ko7k4i"}">${each([...Array(12)], (key) => {
              return `<div class="${"buttonPole svelte-ko7k4i"}">here</div>`;
            })}</div>`;
          }
        })}
                ${validate_component(Panel, "Panel").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="${"gridOne svelte-ko7k4i"}">${each([...Array(3)], (key) => {
              return `<div class="${"buttonPole svelte-ko7k4i"}">here</div>`;
            })}</div>`;
          }
        })}`;
      }
    })}
            ${validate_component(PanelSlide, "PanelSlide").$$render($$result, { open: false, this: slideRight }, {
      this: ($$value) => {
        slideRight = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(Panel, "Panel").$$render($$result, { title: "Zoom area" }, {}, {
          default: () => {
            return `<div class="${"gridIconMid svelte-ko7k4i"}">${each([...Array(130)], (key) => {
              return `<div class="${"buttonPole svelte-ko7k4i"}">here</div>`;
            })}</div>`;
          }
        })}`;
      }
    })}</div>
        <div class="${"bottomBar flex-h flex-align-right pad-tb-1 pad-ii-4 svelte-ko7k4i"}">${validate_component(IconButton, "IconButton").$$render($$result, { style: "color:white", icon: "faBed" }, {}, {})}
            ${validate_component(IconButton, "IconButton").$$render($$result, { style: "color:white", icon: "faTruck" }, {}, {})}
            ${validate_component(IconButton, "IconButton").$$render($$result, { style: "color:white", icon: "faSign" }, {}, {})}</div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_menuStore();
  $$unsubscribe_startMenuStore();
  return $$rendered;
});
var Login_svelte_svelte_type_style_lang = "";
const TaskBarContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $windowsStore, $$unsubscribe_windowsStore;
  $$unsubscribe_windowsStore = subscribe(windowsStore, (value) => $windowsStore = value);
  get_current_component();
  getContext("theme");
  let windows;
  windows = $windowsStore;
  $$unsubscribe_windowsStore();
  return `${validate_component(IconButton, "IconButton").$$render($$result, {
    style: "color:white;font-size: large",
    icon: "faBarcode"
  }, {}, {})}
${each([...windows], ([key, value]) => {
    return `${validate_component(IconButton, "IconButton").$$render($$result, {
      style: "color:white;font-size: large",
      icon: "faWindow"
    }, {}, {})}`;
  })}`;
});
var BottomBar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".bottomBar.density-tight.svelte-1v6ew1i{padding:0.5rem 0;margin:0.125rem 0}.bottomBar.density-default.svelte-1v6ew1i{padding:1rem 0;margin:0.25rem 0}.bottomBar.density-kind.svelte-1v6ew1i{padding:1.5rem 0;margin:0.5rem 0}",
  map: null
};
const BottomBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { density = "default" } = $$props;
  if ($$props.density === void 0 && $$bindings.density && density !== void 0)
    $$bindings.density(density);
  $$result.css.add(css$2);
  return `${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
<div class="${"bottomBar density-" + escape(density) + " svelte-1v6ew1i"}">${slots.default ? slots.default({}) : `bottom bar`}
</div>`;
});
var Drawer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".drawer.svelte-hf6hb5.svelte-hf6hb5{color:white;background-color:rgba(59, 59, 59, 0.99);backdrop-filter:blur(10px);position:fixed;width:350px;height:100%;top:0;bottom:0;z-index:3000;right:0}.drawer.svelte-hf6hb5 .header.svelte-hf6hb5{border-bottom:1px solid rgba(255, 255, 255, 0.2);min-height:48px;display:flex;align-items:center}",
  map: null
};
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { title } = $$props;
  let drawerRef;
  let { isOpen = true } = $$props;
  let { hideCloseIcon = false } = $$props;
  function toggle2(visibleSate) {
    isOpen = visibleSate !== void 0 ? visibleSate : !isOpen;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.hideCloseIcon === void 0 && $$bindings.hideCloseIcon && hideCloseIcon !== void 0)
    $$bindings.hideCloseIcon(hideCloseIcon);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle2 !== void 0)
    $$bindings.toggle(toggle2);
  $$result.css.add(css$1);
  return `${isOpen ? `<div class="${"drawer flex-v h-full svelte-hf6hb5"}"${add_attribute("this", drawerRef, 0)}>${$$slots.drawerMenuBar || Boolean(title) ? `<div class="${"header flex-h svelte-hf6hb5"}"><div class="${"flex-main flex-h flex-align-middle "}">${title ? `<span style="${"font-size:18px;"}" class="${"pad-l-4"}">${escape(title)}</span>` : ``}
                    ${slots.drawerMenuBar ? slots.drawerMenuBar({}) : ``}</div>
                ${!hideCloseIcon ? `<div>${validate_component(IconButton, "IconButton").$$render($$result, {
    iconFontSize: "small",
    icon: "faWindowClose"
  }, {}, {})}</div>` : ``}</div>` : ``}
        ${$$slots.content ? `<div class="${"flex-main"}">${slots.content ? slots.content({}) : `content`}</div>` : ``}
        ${validate_component(BottomBar, "BottomBar").$$render($$result, {}, {}, {
    default: () => {
      return `bar bottom
        `;
    }
  })}</div>` : ``}`;
});
const themes = {
  light: {
    color: {
      text: "#282230",
      background: {
        _: "#f1f1f1",
        paper: "#ededed",
        contrast: "#b1b1b1"
      },
      primary: "#01796f",
      primary_dark: "#016159",
      secondary: "#562931"
    }
  },
  dark: {
    color: {
      text: "#f1f1f1",
      background: {
        _: "#27323a",
        paper: "#3a3b3b",
        contrast: "#0d1215"
      },
      primary: "#01978b",
      primary_dark: "#00887c",
      secondary: "#fe8690",
      secondary_dark: "#fe8690"
    },
    surface: {
      _: "red",
      text: "white"
    },
    paper: {
      _: "red",
      text: "white"
    }
  }
};
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: `@import url(ress/ress.css);@import url(../css/cssFabric/cssfabric.min.css);@import url("https://fonts.googleapis.com/css?family=Rubik");html{font-size:12px;height:100%}body{height:100%;width:100%;overflow:hidden;background-size:cover;font-family:'Rubik';background-color:var(--theme-color-background);color:var(--theme-color-text)}#svelte{height:100%}button{border:0.5px solid rgba(255, 255, 255, 0.2);padding:0.25rem 0.5rem;border-radius:4px;background-color:rgba(255, 255, 255, 0.1)}button:hover{background-color:#ededed}.inputBorder{border:1px solid rgba(255, 255, 255, 0.1) !important}input{border:1px solid rgba(208, 191, 151, 0.5);border-bottom:2px solid #d0bf97;border-radius:4px;padding:0.5rem;box-shadow:inset 0px 0px 3px 1px rgba(51, 51, 51, 0.8);background-color:rgba(59, 59, 59, 0.99);color:white}`,
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let drawerRef;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(ThemeWrapper, "ThemeWrapper").$$render($$result, { theme: "dark", themes }, {}, {
      default: () => {
        return `${validate_component(StartMenu, "StartMenu").$$render($$result, {}, {}, {})}
    <div style="${"height:100%;max-height:100%;overflow:hidden;display:flex;flex-direction: column"}">${`${validate_component(Taskbar, "Taskbar").$$render($$result, {}, {}, {
          taskBarRIght: () => {
            return `<div slot="${"taskBarRIght"}">${validate_component(IconButton, "IconButton").$$render($$result, {
              iconFontSize: "small",
              icon: "faAccusoft"
            }, {}, {})}</div>`;
          },
          default: () => {
            return `${validate_component(TaskBarContent, "TaskBarContent").$$render($$result, {}, {}, {})}`;
          }
        })}
            <br>
            <div style="${"flex: 1;overflow:hidden"}">${validate_component(Dashboard, "Dashboard").$$render($$result, {}, {}, {})}</div>`}</div>
    ${validate_component(Drawer, "Drawer").$$render($$result, { isOpen: false, this: drawerRef }, {
          this: ($$value) => {
            drawerRef = $$value;
            $$settled = false;
          }
        }, {
          content: () => {
            return `<div class="${"pad-2"}" slot="${"content"}">${validate_component(List, "List").$$render($$result, {
              onItemClick: () => {
              }
            }, {}, {
              default: () => {
                return `${each([...Array(10)], (key, val) => {
                  return `${validate_component(ListItem, "ListItem").$$render($$result, {}, {}, {
                    action: () => {
                      return `<span slot="${"action"}"><button>fds de action</button></span>`;
                    },
                    primary: () => {
                      return `<span slot="${"primary"}">Some idiom ${escape(val)}</span>`;
                    }
                  })}`;
                })}`;
              }
            })}</div>`;
          },
          drawerMenuBar: () => {
            return `${validate_component(TopBar, "TopBar").$$render($$result, { title: "Drawer with menu bar " }, {}, {
              menuBarSwitcher: () => {
                return `<div class="${"pad-1"}"><input placeholder="${"Search in Bar"}" style="${"width:100%;"}" type="${"text"}"></div>`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { _layout as default };
