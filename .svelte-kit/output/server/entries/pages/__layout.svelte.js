var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { g as get_store_value, c as create_ssr_component, a as subscribe, s as setContext, b as add_attribute, e as escape, v as validate_component, d as each, f as getContext, m as missing_component, h as get_current_component } from "../../chunks/index-80980bc6.js";
import { c as chromeFrameStore, a as chromeFrameListRef, L as Login, T as Taskbar, C as ChromeFrameButtonList } from "../../chunks/ChromeFrameButtonList-c75e323a.js";
import { w as writable, d as derived, T as TopBar, L as List, a as ListItem } from "../../chunks/List-b3a68661.js";
import "@neodrag/svelte";
import { I as IconButton, F as Frame, D as Drawer } from "../../chunks/Frame-7ef9c5be.js";
import { c as createEventForwarder } from "../../chunks/Divider.svelte_svelte_type_style_lang-e9de6a95.js";
import "highlight.js/lib/core";
import "highlight.js";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
const githubDark = `<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub Dark
  Description: Dark theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-dark
  Current colors taken from GitHub's CSS
*/.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}</style>`;
var github = githubDark;
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
var ThemeToggle_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "button.svelte-1mg28x0{border:none;padding:8px 12px;border-radius:3px;background-color:lightgrey;cursor:pointer;min-width:8ch;max-width:15ch;max-height:60px;color:black}")();
var Panel_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".panel.svelte-1ntb437.svelte-1ntb437{position:relative;margin-bottom:2rem}.panel.svelte-1ntb437 .panelBar.svelte-1ntb437{margin-bottom:2rem;display:flex;min-width:auto;align-items:center;padding-right:0.5rem}.panel.svelte-1ntb437 .panelBar button.svelte-1ntb437{padding:0 0.5rem;border:1px solid rgba(255, 255, 255, 0.05);background-color:rgba(255, 255, 255, 0.1)}")();
const css$4 = {
  code: ".panel.svelte-1ntb437.svelte-1ntb437{position:relative;margin-bottom:2rem}.panel.svelte-1ntb437 .panelBar.svelte-1ntb437{margin-bottom:2rem;display:flex;min-width:auto;align-items:center;padding-right:0.5rem}.panel.svelte-1ntb437 .panelBar button.svelte-1ntb437{padding:0 0.5rem;border:1px solid rgba(255, 255, 255, 0.05);background-color:rgba(255, 255, 255, 0.1)}",
  map: null
};
const Panel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "not set" } = $$props;
  let ref;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$4);
  return `



<div class="${"panel svelte-1ntb437"}"${add_attribute("this", ref, 0)}><div class="${"panelBar svelte-1ntb437"}"><div style="${"flex:1"}">${escape(title)}</div>
        <button class="${"svelte-1ntb437"}">go there or back ? &gt;</button></div>
    <div class="${"panelContent"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
var PanelSlide_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".sidePanel.svelte-b2ug41{position:absolute;top:0;bottom:0;padding:1rem 2rem;width:100%}")();
const css$3 = {
  code: ".sidePanel.svelte-b2ug41{position:absolute;top:0;bottom:0;padding:1rem 2rem;width:100%}",
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
  $$result.css.add(css$3);
  return `


${open ? `<div class="${"sidePanel svelte-b2ug41"}">${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const windowListObjects = /* @__PURE__ */ new Map([]);
const activeFrame = writable("");
function createWindowStore() {
  const { subscribe: subscribe2, set, update } = writable(windowListObjects);
  activeFrame.subscribe((value) => {
  });
  return {
    subscribe: subscribe2,
    activeFrame,
    create: (payload) => update((n) => n.set(payload.frameId, __spreadValues({}, payload))),
    open: (payload) => update((n) => {
      activeFrame.set(payload.frameId);
      const obj = n.get(payload.frameId) ?? {};
      return n.set(payload.frameId, __spreadProps(__spreadValues(__spreadValues({}, obj), payload), { open: true, minimized: false, maximized: true }));
    }),
    close: (frameId) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, __spreadProps(__spreadValues({}, payload), { frameId, open: false }));
    }),
    minimize: (frameId) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, __spreadProps(__spreadValues({}, payload), { frameId, minimized: true }));
    }),
    toggle: (frameId) => update((n) => {
      const payload = n.get(frameId);
      return n.set(frameId, __spreadProps(__spreadValues({}, payload), { frameId, minimized: !(payload == null ? void 0 : payload.minimized) }));
    }),
    remove: (frameId) => update((n) => {
      n.delete(frameId);
      return n;
    }),
    updatePos: (frameId, position) => update((n) => {
      const payload = n.get(frameId);
      n.set(frameId, __spreadProps(__spreadValues({}, payload), { frameId, position }));
      return n;
    }),
    makeOnTop: (frameId) => update((n) => {
      const values = Array.from(n);
      const payload = n.get(frameId);
      const z = values.reduce((prev, val) => {
        var _a, _b;
        return ((_a = val[1]) == null ? void 0 : _a.zIndex) >= prev ? ((_b = val[1]) == null ? void 0 : _b.zIndex) + 1 : prev;
      }, 0);
      n.set(frameId, __spreadProps(__spreadValues({}, payload), { frameId, zIndex: z }));
      return n;
    }),
    reset: () => set(/* @__PURE__ */ new Map([]))
  };
}
const windowsStore = createWindowStore();
const browser = false;
var Window_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".window.svelte-h65vre.svelte-h65vre{display:block;border-radius:6px;background-color:var(--theme-color-background);color:var(--theme-color-text);border:1px solid rgba(255, 255, 255, 0.1);min-width:720px;position:absolute;top:0;left:0;overflow:hidden;z-index:3000}.window.svelte-h65vre .bar.svelte-h65vre{display:flex;align-items:center;text-align:center;background-color:#3c3f41;color:white}.window.svelte-h65vre .bar .handle.svelte-h65vre{flex:1;cursor:pointer}.window.svelte-h65vre .buttonZone.svelte-h65vre{border-top:1px solid #ccc;padding:0.5rem;display:flex;justify-content:end}.iconZone.svelte-h65vre.svelte-h65vre{display:flex}.iconZone.svelte-h65vre >{color:red}")();
const startMenuStore = writable(false);
var StartMenu_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".startMenu.svelte-6sticm.svelte-6sticm{background-color:rgba(90, 67, 52, 0.9);backdrop-filter:blur(10px);color:white;display:flex;flex-direction:column;max-height:600px;height:80%;left:50%;transform:translate(-50%, 0);box-shadow:0px 0px 3px 1px rgba(51, 51, 51, 0.5);overflow:hidden;z-index:3000;position:absolute;margin-top:1rem}.startMenu.svelte-6sticm .startMenuContent.svelte-6sticm{flex:1;overflow-y:auto;overflow-x:hidden}.buttonPole.svelte-6sticm.svelte-6sticm{border-radius:4px;border:1px solid rgba(208, 191, 151, 0.3);padding:0.5rem}.gridIcon.svelte-6sticm.svelte-6sticm{width:100%;display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(30%, auto))}.gridIconBis.svelte-6sticm.svelte-6sticm{width:100%;display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(15%, auto))}.gridIconMid.svelte-6sticm.svelte-6sticm{width:100%;display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(49%, auto))}.gridOne.svelte-6sticm.svelte-6sticm{width:100%;display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(100%, auto))}.bottomBar.svelte-6sticm.svelte-6sticm{box-shadow:0px 0px 3px 1px rgba(51, 51, 51, 0.5)}")();
const css$2 = {
  code: ".startMenu.svelte-6sticm.svelte-6sticm{background-color:rgba(90, 67, 52, 0.9);backdrop-filter:blur(10px);color:white;display:flex;flex-direction:column;max-height:600px;height:80%;left:50%;transform:translate(-50%, 0);box-shadow:0px 0px 3px 1px rgba(51, 51, 51, 0.5);overflow:hidden;z-index:3000;position:absolute;margin-top:1rem}.startMenu.svelte-6sticm .startMenuContent.svelte-6sticm{flex:1;overflow-y:auto;overflow-x:hidden}.buttonPole.svelte-6sticm.svelte-6sticm{border-radius:4px;border:1px solid rgba(208, 191, 151, 0.3);padding:0.5rem}.gridIcon.svelte-6sticm.svelte-6sticm{width:100%;display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(30%, auto))}.gridIconBis.svelte-6sticm.svelte-6sticm{width:100%;display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(15%, auto))}.gridIconMid.svelte-6sticm.svelte-6sticm{width:100%;display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(49%, auto))}.gridOne.svelte-6sticm.svelte-6sticm{width:100%;display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill, minmax(100%, auto))}.bottomBar.svelte-6sticm.svelte-6sticm{box-shadow:0px 0px 3px 1px rgba(51, 51, 51, 0.5)}",
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
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `


${$startMenuStore ? `<div class="${"startMenu svelte-6sticm"}"><div style="${"margin-bottom:2rem"}"><input style="${"width: 100%;"}" type="${"search"}" placeholder="${"Recherche"}"></div>
        <div style="${"position:relative"}" class="${"startMenuContent svelte-6sticm"}">${validate_component(PanelSlide, "PanelSlide").$$render($$result, { open: true, this: slideLeft }, {
      this: ($$value) => {
        slideLeft = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(Panel, "Panel").$$render($$result, { title: "Pinned Items" }, {}, {
          default: () => {
            return `<div class="${"gridIcon svelte-6sticm"}">${each([...Array(9)], (key, val) => {
              return `<div class="${"buttonPole svelte-6sticm"}">key
                            </div>`;
            })}</div>`;
          }
        })}
                ${validate_component(Panel, "Panel").$$render($$result, { title: "Recent Items" }, {}, {
          default: () => {
            return `<div class="${"gridIconBis svelte-6sticm"}">${each([...Array(12)], (key) => {
              return `<div class="${"buttonPole svelte-6sticm"}">here</div>`;
            })}</div>`;
          }
        })}
                ${validate_component(Panel, "Panel").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="${"gridOne svelte-6sticm"}">${each([...Array(3)], (key) => {
              return `<div class="${"buttonPole svelte-6sticm"}">here</div>`;
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
            return `<div class="${"gridIconMid svelte-6sticm"}">${each([...Array(130)], (key) => {
              return `<div class="${"buttonPole svelte-6sticm"}">here</div>`;
            })}</div>`;
          }
        })}`;
      }
    })}</div>
        <div class="${"bottomBar flex-h flex-align-right pad-tb-1 pad-ii-4 svelte-6sticm"}">${validate_component(IconButton, "IconButton").$$render($$result, { style: "color:white", icon: "faBed" }, {}, {})}
            ${validate_component(IconButton, "IconButton").$$render($$result, { style: "color:white", icon: "faTruck" }, {}, {})}
            ${validate_component(IconButton, "IconButton").$$render($$result, { style: "color:white", icon: "faSign" }, {}, {})}</div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_menuStore();
  $$unsubscribe_startMenuStore();
  return $$rendered;
});
var ButtonAction_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".buttonWrapper.svelte-1oxq748.svelte-1oxq748{color:white;display:inline-block;position:relative;width:64px}.buttonWrapper.svelte-1oxq748 button.svelte-1oxq748{padding:16px 16px;display:block;width:64px;background-color:rgba(255, 255, 255, 0.2);border:1px solid rgba(255, 255, 255, 0.2);position:relative}.buttonWrapper.svelte-1oxq748 button.svelte-1oxq748:hover{background-color:rgba(255, 255, 255, 0.3)}.buttonWrapper.svelte-1oxq748 button .action.svelte-1oxq748{position:absolute;display:block;top:0;bottom:0;right:0;background-color:rgba(255, 255, 255, 0.1);width:30%;padding:0.5rem}.buttonWrapper.svelte-1oxq748 button .action.svelte-1oxq748:hover{background-color:rgba(255, 255, 255, 0.5)}")();
var ServiceBox_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".gridIconBis.svelte-98fgh4{width:100%;display:grid;grid-gap:8px;grid-template-columns:repeat(auto-fill, minmax(30%, auto))}.serviceBox.svelte-98fgh4{width:360px;height:360px}")();
const TaskBarContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $windowsStore, $$unsubscribe_windowsStore;
  $$unsubscribe_windowsStore = subscribe(windowsStore, (value) => $windowsStore = value);
  getContext("theme");
  let windows;
  windows = $windowsStore;
  $$unsubscribe_windowsStore();
  return `${each([...windows], ([key, value]) => {
    return `${validate_component(IconButton, "IconButton").$$render($$result, {
      style: "color:white;font-size: large",
      icon: "home"
    }, {}, {})}`;
  })}
${slots.default ? slots.default({}) : ``}
`;
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
      primary: "rgba(208, 191, 151, 0.5)",
      primary_dark: "#016159",
      secondary: "#562931",
      secondary_dark: "#562931"
    },
    border_color: "rgba(157, 157, 157, 0.3)",
    overlay_color: "rgba(255,255,255, 0.5)"
  },
  dark: {
    color: {
      text: "#f1f1f1",
      background: {
        _: "#27323a",
        paper: "#3a3b3b",
        contrast: "#0d1215"
      },
      primary: "rgba(208, 191, 151, 0.5)",
      primary_dark: "#00887c",
      secondary: "#562931",
      secondary_dark: "#562931"
    },
    border_color: "rgba(255, 255, 255, 0.1)",
    overlay_color: "rgba(157, 157, 157, 0.1)"
  }
};
const css$1 = {
  code: ".chromeFrame{color:var(--theme-color-foreground);background-color:var(--theme-color-background)}",
  map: null
};
const ChromeFrame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $frameStore, $$unsubscribe_frameStore;
  let { frameId } = $$props;
  let { showCommands } = $$props;
  const frameStore = getChromeFrame(frameId);
  $$unsubscribe_frameStore = subscribe(frameStore, (value) => $frameStore = value);
  if ($$props.frameId === void 0 && $$bindings.frameId && frameId !== void 0)
    $$bindings.frameId(frameId);
  if ($$props.showCommands === void 0 && $$bindings.showCommands && showCommands !== void 0)
    $$bindings.showCommands(showCommands);
  $$result.css.add(css$1);
  $$unsubscribe_frameStore();
  return `<div class="${"chromeFrame flex-v pos-abs top-0 h-full overflow-hidden w-full "}" style="${"z-index:" + escape($frameStore == null ? void 0 : $frameStore.zIndex) + ";display:" + escape(($frameStore == null ? void 0 : $frameStore.minimized) ? "none" : "")}">${($frameStore == null ? void 0 : $frameStore.showCommandBar) ? `<div class="${"flex-h flex-align-middle gap-medium pad-1 pad-ii-2 border-b"}"><div class="${"flex-main h3"}">${escape(frameId)}</div>
			<div>${escape(frameId)}</div>
			<button>hide</button>
			<button>close</button></div>` : ``}
	<div class="${"flex-main pos-rel overflow-hidden"}">${validate_component(($frameStore == null ? void 0 : $frameStore.component) || missing_component, "svelte:component").$$render($$result, Object.assign($frameStore == null ? void 0 : $frameStore.componentProps), {}, {})}</div>
</div>`;
});
function getChromeFrame(frameId) {
  const { subscribe: subscribe2 } = derived([chromeFrameStore], ([$windowsStore]) => {
    return $windowsStore.get(frameId);
  });
  return {
    subscribe: subscribe2,
    updatePos: (position) => chromeFrameStore.updatePos(frameId, position),
    remove: () => chromeFrameStore.remove(frameId),
    makeOnTop: () => chromeFrameStore.makeOnTop(frameId),
    minimize: () => chromeFrameStore.minimize(frameId),
    toggle: () => chromeFrameStore.toggle(frameId)
  };
}
const ChromeFrameList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $chromeFrameStore, $$unsubscribe_chromeFrameStore;
  let $$unsubscribe_defaultConfig;
  $$unsubscribe_chromeFrameStore = subscribe(chromeFrameStore, (value) => $chromeFrameStore = value);
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { element = null } = $$props;
  createEventForwarder(get_current_component());
  let { chromeListConfig = {} } = $$props;
  let defaultConfig = chromeFrameStore.defaultConfigStore;
  $$unsubscribe_defaultConfig = subscribe(defaultConfig, (value) => value);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.chromeListConfig === void 0 && $$bindings.chromeListConfig && chromeListConfig !== void 0)
    $$bindings.chromeListConfig(chromeListConfig);
  {
    if (chromeListConfig) {
      chromeFrameStore.defaultConfigStore.set(chromeListConfig);
    }
  }
  Boolean(browser) && $chromeFrameStore.forEach((args, frameId) => {
    console.log(element);
    if (!args.noFrameListButton && !chromeFrameListRef[frameId]) {
      chromeFrameListRef[frameId] = new ChromeFrame({
        target: element,
        props: __spreadProps(__spreadValues(__spreadValues({
          title: frameId
        }, chromeListConfig), args), {
          frameId
        })
      });
    }
  });
  Boolean(browser) && Object.keys(chromeFrameListRef).forEach((frameId) => {
    if (!$chromeFrameStore.get(frameId)) {
      console.log("destroy !");
      chromeFrameListRef[frameId].$destroy();
      delete chromeFrameListRef[frameId];
    }
  });
  {
    console.log("chromeFrameStore from chrome frame list", $chromeFrameStore);
  }
  {
    console.log("var browser, from chrome frame list", browser);
  }
  {
    console.log("chromeFrameListRef, from chrome frame list", chromeFrameListRef);
  }
  $$unsubscribe_chromeFrameStore();
  $$unsubscribe_defaultConfig();
  return `

<div class="${"pos-abs h-full w-full top-0 " + escape(className)}" style="${"z-index:9000;display:none;" + escape(style)}"${add_attribute("this", element, 0)}></div>`;
});
var TitleBar_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".titleBar{border-bottom:1px solid var(--theme-border_color)}.titleBar .title{min-height:34px}")();
var Box_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".boxRoot{min-height:160px;min-width:320px;background-color:var(--theme-color-background);border-bottom:1px solid var(--theme-border_color);border-radius:6px}.boxRoot .boxButtonZone{text-align:right}")();
var Avatar_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".avatar.svelte-1owsv8p{position:relative;border-radius:var(--css-avatar-radius, 20%);border:1px solid var(--cass-avatar-border-color, var(--theme-color-border));display:grid;place-items:center;overflow:hidden}")();
var Alert_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".alert.svelte-s9oavi.svelte-s9oavi{position:relative;min-width:350px;display:inline-block;border-radius:6px;border:1px solid var(--theme-border_color);background-color:var(--theme-color-background);overflow:hidden}.alert.svelte-s9oavi .dot.svelte-s9oavi{display:inline-block;padding:0.25rem;border:1px solid var(--theme-border_color);border-radius:6px;margin-right:1rem;transform:translate(-50%, 0)}.alert.svelte-s9oavi .close.svelte-s9oavi{position:absolute;right:0;top:0;border-radius:6px;margin:0.25rem;padding:0.25rem}")();
var Select_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".selectRoot{background-color:var(--theme-overlay_color);height:160px;width:160px;border-radius:6px}")();
var Paper_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".paper{background-color:var(--theme-color-background-contrast);border-radius:6px}")();
var Card_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".cardRoot.svelte-sf3y87.svelte-sf3y87{border-radius:6px;background-color:var(--theme-color-background-paper);min-height:120px;overflow:hidden}.cardRoot.svelte-sf3y87 .cardHero.svelte-sf3y87{min-height:64px;text-align:center}.cardRoot.svelte-sf3y87 .cardHero .innerHero.svelte-sf3y87{border-radius:6px;margin:0.5rem;display:grid;place-items:center;overflow:hidden;min-height:64px;border:1px solid var(--theme-border_color)}.cardRoot.svelte-sf3y87 .cardTitle.svelte-sf3y87{text-align:center}.cardRoot.svelte-sf3y87 .cardContent.svelte-sf3y87{flex:1;padding:0.5rem;background-color:var(--theme-color-background-paper);min-height:96px}.cardRoot.svelte-sf3y87 .cardFooter.svelte-sf3y87{text-align:center;padding:0.5rem}")();
var Card_demo_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".gridDemo.svelte-1kepr8j{flex:1;width:100%;display:grid;align-items:stretch;grid-gap:32px;grid-template-columns:repeat(auto-fill, minmax(150px, auto))}")();
var Highlight_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "pre.langtag.svelte-1xjucv4{position:relative}pre.langtag.svelte-1xjucv4::after{content:attr(data-language);position:absolute;top:0;right:0;padding:1em;display:flex;align-items:center;justify-content:center;background:inherit;color:inherit;background:var(--hljs-background);color:var(--hljs-foreground);border-radius:var(--hljs-radius)}")();
var HighlightAuto_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "pre.langtag.svelte-1xjucv4{position:relative}pre.langtag.svelte-1xjucv4::after{content:attr(data-language);position:absolute;top:0;right:0;padding:1em;display:flex;align-items:center;justify-content:center;background:inherit;color:inherit;background:var(--hljs-background);color:var(--hljs-foreground);border-radius:var(--hljs-radius)}")();
var HighlightSvelte_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "pre.langtag.svelte-1xjucv4{position:relative}pre.langtag.svelte-1xjucv4::after{content:attr(data-language);position:absolute;top:0;right:0;padding:1em;display:flex;align-items:center;justify-content:center;background:inherit;color:inherit;background:var(--hljs-background);color:var(--hljs-foreground);border-radius:var(--hljs-radius)}")();
var Dashboard_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".gridDemo.svelte-1e035y5{width:100%;display:grid;align-items:stretch;grid-gap:32px;grid-template-columns:repeat(auto-fill, minmax(30%, auto))}")();
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => 'html{font-size:12px;height:100%}body{height:100%;width:100%;overflow:hidden;background-image:url("wallp (4).jpg");background-size:cover;font-family:"Rubik";background-color:var(--theme-color-background);color:var(--theme-color-text)}#svelte{height:100%}.inputBorder{border:1px solid rgba(255, 255, 255, 0.1) !important}input{border:1px solid rgba(208, 191, 151, 0.5);border-bottom:2px solid rgb(208, 191, 151);border-radius:4px;padding:0.5rem;box-shadow:inset 0px 0px 3px 1px rgba(51, 51, 51, 0.8);background-color:rgba(59, 59, 59, 0.99);color:white;height:1rem}')();
const css = {
  code: 'html{font-size:12px;height:100%}body{height:100%;width:100%;overflow:hidden;background-image:url("wallp (4).jpg");background-size:cover;font-family:"Rubik";background-color:var(--theme-color-background);color:var(--theme-color-text)}#svelte{height:100%}.inputBorder{border:1px solid rgba(255, 255, 255, 0.1) !important}input{border:1px solid rgba(208, 191, 151, 0.5);border-bottom:2px solid rgb(208, 191, 151);border-radius:4px;padding:0.5rem;box-shadow:inset 0px 0px 3px 1px rgba(51, 51, 51, 0.8);background-color:rgba(59, 59, 59, 0.99);color:white;height:1rem}',
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let frameRef;
  let drawerRef;
  let drawerRefDash;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>SlotUi</title>`, ""}<link href="${"../../static/cssfabric/cssfabric.vars.css"}" rel="${"stylesheet"}" data-svelte="svelte-edx0o6"><link href="${"https://fonts.googleapis.com/css?family=Rubik"}" rel="${"stylesheet"}" data-svelte="svelte-edx0o6"><link href="${"./node_modules/@medyll/cssfabric/src/lib/styles/cssfabric.min.css"}" lang="${"scss"}" rel="${"stylesheet"}" data-svelte="svelte-edx0o6"><!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END --><style data-svelte="svelte-edx0o6">{@html cssfabric}</style>`, ""}

${validate_component(ThemeWrapper, "ThemeWrapper").$$render($$result, { theme: "dark", themes }, {}, {
      default: () => {
        return `${validate_component(StartMenu, "StartMenu").$$render($$result, {}, {}, {})}
	<div class="${"h-full overflow-hidden flex-v"}">${validate_component(Login, "Login").$$render($$result, { showLogin: false }, {}, {
          default: () => {
            return `${validate_component(Taskbar, "Taskbar").$$render($$result, {}, {}, {
              taskBarLeft: () => {
                return `
					<button>button 1</button>
					<button>button 2</button>
					<button>button 3</button>

					<button>explorer</button>
				`;
              },
              default: () => {
                return `${validate_component(ChromeFrameButtonList, "ChromeFrameButtonList").$$render($$result, {}, {}, {})}
				${validate_component(TaskBarContent, "TaskBarContent").$$render($$result, {}, {}, {})}
				`;
              }
            })}
			<div id="${"layout"}" class="${"flex-main overflow-hidden pos-rel"}">${slots.default ? slots.default({}) : ``}
				${validate_component(Frame, "Frame").$$render($$result, {
              frameDrawerRef: drawerRefDash,
              this: frameRef
            }, {
              frameDrawerRef: ($$value) => {
                drawerRefDash = $$value;
                $$settled = false;
              },
              this: ($$value) => {
                frameRef = $$value;
                $$settled = false;
              }
            }, {
              frameDrawerSlot: () => {
                return `<div slot="${"frameDrawerSlot"}">nav left</div>`;
              }
            })}
				${validate_component(ChromeFrameList, "ChromeFrameList").$$render($$result, {
              chromeListConfig: {
                showCommandBar: true,
                parent: "#layout",
                onClose: (chromeFrame) => {
                  console.log(chromeFrame);
                }
              }
            }, {}, {})}</div>`;
          }
        })}</div>
	${validate_component(Drawer, "Drawer").$$render($$result, { isOpen: false, this: drawerRef }, {
          this: ($$value) => {
            drawerRef = $$value;
            $$settled = false;
          }
        }, {
          drawerMenuBar: () => {
            return `${validate_component(TopBar, "TopBar").$$render($$result, { title: "Drawer with menu bar " }, {}, {
              menuBarSwitcher: () => {
                return `<div class="${"pad-1"}"><input placeholder="${"Search in Bar"}" style="${"width:100%;"}" type="${"text"}"></div>`;
              }
            })}
		`;
          },
          default: () => {
            return `<div class="${"pad-2"}">${validate_component(List, "List").$$render($$result, {
              onItemClick: () => {
              }
            }, {}, {
              default: () => {
                return `${each([...Array(10)], (key, val) => {
                  return `${validate_component(ListItem, "ListItem").$$render($$result, {}, {}, {
                    action: () => {
                      return `<span slot="${"action"}"><button>fds de action</button></span>`;
                    },
                    secondary: () => {
                      return `<span slot="${"secondary"}">secondary ${escape(val)}</span>`;
                    },
                    primary: () => {
                      return `<span slot="${"primary"}">Some idioms ${escape(val)}</span>`;
                    }
                  })}`;
                })}`;
              }
            })}</div>`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { _layout as default };
