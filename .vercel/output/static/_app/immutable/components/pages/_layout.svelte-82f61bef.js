import{S as de,i as ge,s as ne,B as te,v as C,w as A,x as q,C as _e,D as $e,q as F,o as D,y as H,E as se,F as je,G as ue,H as xe,I as ve,J as ke,K as fe,e as x,t as L,c as v,a as k,h as B,d as b,b as f,g as le,L as c,j as Fe,M as De,l as ye,k as M,N as Ie,O as Se,m as T,P as Ee,Q as Me,R as Te,u as Le,T as J}from"../../chunks/index-97bbca98.js";import{B as we,L as Be,s as Ce,a as Ae,D as qe}from"../../chunks/componentList-421e43d0.js";import{d as U}from"../../chunks/singletons-dd8fb9a6.js";import"../../chunks/Frame.svelte_svelte_type_style_lang-b50ee946.js";import{w as He}from"../../chunks/index-7150691d.js";const Ue=`<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#005cc5}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-code,.hljs-comment,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}</style>`,Ve=Ue;function Ge(t){let e;const a=t[1].default,r=ue(a,t,t[3],null);return{c(){r&&r.c()},l(o){r&&r.l(o)},m(o,l){r&&r.m(o,l),e=!0},p(o,l){r&&r.p&&(!e||l&8)&&xe(r,a,o,o[3],e?ke(a,o[3],l,null):ve(o[3]),null)},i(o){e||(F(r,o),e=!0)},o(o){D(r,o),e=!1},d(o){r&&r.d(o)}}}function Re(t){let e,a;const r=[{naked:!0},{contained:!0},t[0]];let o={$$slots:{default:[Ge]},$$scope:{ctx:t}};for(let l=0;l<r.length;l+=1)o=te(o,r[l]);return e=new we({props:o}),e.$on("click",t[2]),{c(){C(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,d){q(e,l,d),a=!0},p(l,[d]){const i=d&1?_e(r,[r[0],r[1],$e(l[0])]):{};d&8&&(i.$$scope={dirty:d,ctx:l}),e.$set(i)},i(l){a||(F(e.$$.fragment,l),a=!0)},o(l){D(e.$$.fragment,l),a=!1},d(l){H(e,l)}}}function Ne(){var a;const e=((a=localStorage.getItem("themeMode"))!=null?a:"light")==="light"?"dark":"light";document.body.setAttribute("data-theme",e),localStorage.setItem("themeMode",e)}function Oe(t,e,a){const r=[];let o=se(e,r),{$$slots:l={},$$scope:d}=e;const i=()=>{Ne()};return t.$$set=p=>{e=te(te({},e),je(p)),a(0,o=se(e,r)),"$$scope"in p&&a(3,d=p.$$scope)},[o,l,i,d]}class Pe extends de{constructor(e){super(),ge(this,e,Oe,Re,ne,{})}}U.disable_scroll_handling;const Ye=U.goto;U.invalidate;U.prefetch;U.prefetch_routes;U.before_navigate;U.after_navigate;function Ke(t){var l;let e,a=fe((l=t[1])==null?void 0:l.primary)+"",r,o;return{c(){e=x("a"),r=L(a),this.h()},l(d){e=v(d,"A",{slot:!0,href:!0});var i=k(e);r=B(i,a),i.forEach(b),this.h()},h(){var d,i;f(e,"slot","primary"),f(e,"href",o="/svelte-components/"+((i=(d=t[1])==null?void 0:d.data)==null?void 0:i.code))},m(d,i){le(d,e,i),c(e,r)},p(d,i){var p,m,y;i&2&&a!==(a=fe((p=d[1])==null?void 0:p.primary)+"")&&Fe(r,a),i&2&&o!==(o="/svelte-components/"+((y=(m=d[1])==null?void 0:m.data)==null?void 0:y.code))&&f(e,"href",o)},d(d){d&&b(e)}}}function Je(t){var r;let e,a;return e=new Ae({props:{data:(r=t[1])==null?void 0:r.data,$$slots:{primary:[Ke]},$$scope:{ctx:t}}}),{c(){C(e.$$.fragment)},l(o){A(e.$$.fragment,o)},m(o,l){q(e,o,l),a=!0},p(o,l){var i;const d={};l&2&&(d.data=(i=o[1])==null?void 0:i.data),l&6&&(d.$$scope={dirty:l,ctx:o}),e.$set(d)},i(o){a||(F(e.$$.fragment,o),a=!0)},o(o){D(e.$$.fragment,o),a=!1},d(o){H(e,o)}}}function Qe(t){let e,a;return e=new Be({props:{density:"default",onItemClick:t[0],data:Ce,selectorField:"code",height:"100%",$$slots:{default:[Je,({listItem:r})=>({1:r}),({listItem:r})=>r?2:0]},$$scope:{ctx:t}}}),{c(){C(e.$$.fragment)},l(r){A(e.$$.fragment,r)},m(r,o){q(e,r,o),a=!0},p(r,[o]){const l={};o&6&&(l.$$scope={dirty:o,ctx:r}),e.$set(l)},i(r){a||(F(e.$$.fragment,r),a=!0)},o(r){D(e.$$.fragment,r),a=!1},d(r){H(e,r)}}}function We(t){function e(a){var r;Ye("/svelte-components/"+((r=a==null?void 0:a.data)==null?void 0:r.code))}return[e]}class Xe extends de{constructor(e){super(),ge(this,e,We,Qe,ne,{})}}function Ze(t){let e,a;return e=new Xe({}),{c(){C(e.$$.fragment)},l(r){A(e.$$.fragment,r)},m(r,o){q(e,r,o),a=!0},i(r){a||(F(e.$$.fragment,r),a=!0)},o(r){D(e.$$.fragment,r),a=!1},d(r){H(e,r)}}}function er(t){let e,a,r,o,l,d,i,p,m,y,j,I,w,z,N,_,h,n,Q,O,W,X,P,Z,V,ee,re,E,oe,S,G,ze={flow:t[4].drawerFlow,isOpen:!0,$$slots:{default:[Ze]},$$scope:{ctx:t}};z=new qe({props:ze}),t[8](z),n=new we({props:{icon:"menu",iconFamily:"mdi"}}),n.$on("click",t[6]),E=new Pe({props:{iconFamily:"mdi",icon:"paint-outline",title:"toggle theme"}});const ae=t[7].default,u=ue(ae,t,t[12],null);return{c(){e=x("link"),a=new De(!1),r=ye(),o=x("style"),l=L(`{\r
			@html cssfabricVars;\r
		}\r
	`),d=x("style"),i=L(`{\r
			@html cssfabric;\r
		}\r
	`),p=x("style"),m=L(`{\r
			@html cssfabricThemer;\r
		}\r
	`),y=x("script"),j=L(`/* hack for legacy node app */\r
		var global = global || window;\r
		var Buffer = Buffer || [];\r
		var process = process || { env: { DEBUG: undefined }, version: [] };\r
		if (document.body) {\r
			document.body.setAttribute('data-theme', 'light');\r
			if (localStorage && localStorage.getItem('themeMode')) {\r
				document.body.setAttribute('data-theme', localStorage.getItem('themeMode'));\r
			}\r
		}\r
		window.addEventListener('load', function (event) {\r
			if (localStorage && localStorage.getItem('themeMode')) {\r
				document.body.setAttribute('data-theme', localStorage.getItem('themeMode'));\r
			}\r
		});`),I=M(),w=x("div"),C(z.$$.fragment),N=M(),_=x("div"),h=x("nav"),C(n.$$.fragment),Q=M(),O=x("h3"),W=L("SlotUi"),X=M(),P=x("div"),Z=M(),V=x("a"),ee=L("Components"),re=M(),C(E.$$.fragment),oe=M(),S=x("div"),u&&u.c(),this.h()},l(g){const s=Ie('[data-svelte="svelte-yj60zk"]',document.head);e=v(s,"LINK",{href:!0,rel:!0}),a=Se(s,!1),r=ye(),o=v(s,"STYLE",{type:!0});var R=k(o);l=B(R,`{\r
			@html cssfabricVars;\r
		}\r
	`),R.forEach(b),d=v(s,"STYLE",{});var ie=k(d);i=B(ie,`{\r
			@html cssfabric;\r
		}\r
	`),ie.forEach(b),p=v(s,"STYLE",{type:!0});var ce=k(p);m=B(ce,`{\r
			@html cssfabricThemer;\r
		}\r
	`),ce.forEach(b),y=v(s,"SCRIPT",{});var be=k(y);j=B(be,`/* hack for legacy node app */\r
		var global = global || window;\r
		var Buffer = Buffer || [];\r
		var process = process || { env: { DEBUG: undefined }, version: [] };\r
		if (document.body) {\r
			document.body.setAttribute('data-theme', 'light');\r
			if (localStorage && localStorage.getItem('themeMode')) {\r
				document.body.setAttribute('data-theme', localStorage.getItem('themeMode'));\r
			}\r
		}\r
		window.addEventListener('load', function (event) {\r
			if (localStorage && localStorage.getItem('themeMode')) {\r
				document.body.setAttribute('data-theme', localStorage.getItem('themeMode'));\r
			}\r
		});`),be.forEach(b),s.forEach(b),I=T(g),w=v(g,"DIV",{class:!0});var Y=k(w);A(z.$$.fragment,Y),N=T(Y),_=v(Y,"DIV",{id:!0});var K=k(_);h=v(K,"NAV",{class:!0});var $=k(h);A(n.$$.fragment,$),Q=T($),O=v($,"H3",{});var pe=k(O);W=B(pe,"SlotUi"),pe.forEach(b),X=T($),P=v($,"DIV",{class:!0}),k(P).forEach(b),Z=T($),V=v($,"A",{href:!0});var me=k(V);ee=B(me,"Components"),me.forEach(b),re=T($),A(E.$$.fragment,$),$.forEach(b),oe=T(K),S=v(K,"DIV",{id:!0,class:!0});var he=k(S);u&&u.l(he),he.forEach(b),K.forEach(b),Y.forEach(b),this.h()},h(){document.title="SlotUi",f(e,"href","https://fonts.googleapis.com/css?family=Rubik"),f(e,"rel","stylesheet"),a.a=r,f(o,"type","text/css"),f(p,"type","text/css"),f(P,"class","flex-main"),f(V,"href","svelte-components"),f(h,"class","nav flex-h pos-sticky pad flex-align-middle gap-small zI-10 w-full h-4 gap-medium"),f(S,"id","innerSlide"),f(S,"class","zI-0"),f(_,"id","contentSlide"),f(w,"class","flex-h h-full overflow-hidden")},m(g,s){c(document.head,e),a.m(Ve,document.head),c(document.head,r),c(document.head,o),c(o,l),c(document.head,d),c(d,i),c(document.head,p),c(p,m),c(document.head,y),c(y,j),le(g,I,s),le(g,w,s),q(z,w,null),c(w,N),c(w,_),c(_,h),q(n,h,null),c(h,Q),c(h,O),c(O,W),c(h,X),c(h,P),c(h,Z),c(h,V),c(V,ee),c(h,re),q(E,h,null),t[9](h),c(_,oe),c(_,S),u&&u.m(S,null),t[10](S),t[11](_),G=!0},p(g,[s]){const R={};s&16&&(R.flow=g[4].drawerFlow),s&4096&&(R.$$scope={dirty:s,ctx:g}),z.$set(R),u&&u.p&&(!G||s&4096)&&xe(u,ae,g,g[12],G?ke(ae,g[12],s,null):ve(g[12]),null)},i(g){G||(F(z.$$.fragment,g),F(n.$$.fragment,g),F(E.$$.fragment,g),F(u,g),G=!0)},o(g){D(z.$$.fragment,g),D(n.$$.fragment,g),D(E.$$.fragment,g),D(u,g),G=!1},d(g){b(e),b(r),g&&a.d(),b(o),b(d),b(p),b(y),g&&b(I),g&&b(w),t[8](null),H(z),H(n),H(E),t[9](null),u&&u.d(g),t[10](null),t[11](null)}}}function rr(t,e,a){let r,{$$slots:o={},$$scope:l}=e,d=He({drawerFlow:"fixed"});Ee("uiContext",d);let i=Me("uiContext");Te(t,i,n=>a(4,r=n));let p,m,y,j,I=!1;function w(){p.actions.toggle()}Le(()=>{m.addEventListener("scroll",function(n){(m==null?void 0:m.scrollTop)>32&&!I?(I=!0,j.classList.add("shad-3")):(m==null?void 0:m.scrollTop)<32&&(I=!1,j.classList.remove("shad-3"))})});function z(n){J[n?"unshift":"push"](()=>{p=n,a(0,p)})}function N(n){J[n?"unshift":"push"](()=>{j=n,a(3,j)})}function _(n){J[n?"unshift":"push"](()=>{y=n,a(2,y)})}function h(n){J[n?"unshift":"push"](()=>{m=n,a(1,m)})}return t.$$set=n=>{"$$scope"in n&&a(12,l=n.$$scope)},[p,m,y,j,r,i,w,o,z,N,_,h,l]}class gr extends de{constructor(e){super(),ge(this,e,rr,er,ne,{})}}export{gr as default};
