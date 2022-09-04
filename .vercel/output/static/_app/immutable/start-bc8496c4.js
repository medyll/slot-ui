var We=Object.defineProperty;var He=(i,e,n)=>e in i?We(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var pe=(i,e,n)=>(He(i,typeof e!="symbol"?e+"":e,n),n);import{S as Fe,i as Ge,s as Me,e as Ye,c as Xe,a as Qe,d as q,b as _e,f as G,g as z,t as Ze,h as xe,j as et,k as tt,l as P,m as nt,n as K,o as O,p as W,q as j,r as rt,u as me,v as U,w as Y,x as D,y as C,z as Ue}from"./chunks/index-97bbca98.js";import{g as De,f as Ce,a as Te,s as Z,b as ge,i as at,c as it}from"./chunks/singletons-dd8fb9a6.js";import"./chunks/index-7150691d.js";class ne{constructor(e,n){pe(this,"name","HttpError");pe(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class Ve{constructor(e,n){this.status=e,this.location=n}}function st(i,e){return i==="/"||e==="ignore"?i:e==="never"?i.endsWith("/")?i.slice(0,-1):i:e==="always"&&!i.endsWith("/")?i+"/":i}function ot(i){for(const e in i)i[e]=i[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return i}const lt=["href","pathname","search","searchParams","toString","toJSON"];function ct(i,e){const n=new URL(i);for(const a of lt){let r=n[a];Object.defineProperty(n,a,{get(){return e(),r},enumerable:!0,configurable:!0})}return n[Symbol.for("nodejs.util.inspect.custom")]=(a,r,f)=>f(i,r),ft(n),n}function ft(i){Object.defineProperty(i,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ut(i){let e=5381,n=i.length;if(typeof i=="string")for(;n;)e=e*33^i.charCodeAt(--n);else for(;n;)e=e*33^i[--n];return(e>>>0).toString(36)}const re=window.fetch;function pt(i,e){let a=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof i=="string"?i:i.url)}]`;e&&typeof e.body=="string"&&(a+=`[sveltekit\\:data-body="${ut(e.body)}"]`);const r=document.querySelector(a);if(r&&r.textContent){const{body:f,...t}=JSON.parse(r.textContent);return Promise.resolve(new Response(f,t))}return re(i,e)}const _t=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function dt(i){const e=[],n=[];let a=!0;if(/\]\[/.test(i))throw new Error(`Invalid route ${i} \u2014 parameters must be separated`);if(qe("[",i)!==qe("]",i))throw new Error(`Invalid route ${i} \u2014 brackets are unbalanced`);return{pattern:i===""?/^\/$/:new RegExp(`^${i.split(/(?:\/|$)/).filter(ht).map((f,t,o)=>{const s=decodeURIComponent(f),c=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(c)return e.push(c[1]),n.push(c[2]),"(?:/(.*))?";const h=t===o.length-1;return s&&"/"+s.split(/\[(.+?)\]/).map((k,I)=>{if(I%2){const B=_t.exec(k);if(!B)throw new Error(`Invalid param: ${k}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,T,L,x]=B;return e.push(L),n.push(x),T?"(.*?)":"([^/]+?)"}return h&&k.includes(".")&&(a=!1),k.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${a?"/?":""}$`),names:e,types:n}}function ht(i){return!/^\([^)]+\)$/.test(i)}function mt(i,e,n,a){const r={};for(let f=0;f<e.length;f+=1){const t=e[f],o=n[f],s=i[f+1]||"";if(o){const c=a[o];if(!c)throw new Error(`Missing "${o}" param matcher`);if(!c(s))return}r[t]=s}return r}function qe(i,e){let n=0;for(let a=0;a<e.length;a+=1)e[a]===i&&(n+=1);return n}function gt(i,e,n){return Object.entries(e).map(([a,[r,f,t]])=>{const{pattern:o,names:s,types:c}=dt(a),h=r<0;h&&(r=~r);const k={id:a,exec:I=>{const B=o.exec(I);if(B)return mt(B,s,c,n)},errors:[1,...t||[]].map(I=>i[I]),layouts:[0,...f||[]].map(I=>i[I]),leaf:i[r],uses_server_data:h};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k})}function wt(i,e){return new ne(i,e)}function bt(i){let e,n,a;var r=i[0][0];function f(t){return{props:{data:t[1],errors:t[6]}}}return r&&(e=new r(f(i))),{c(){e&&U(e.$$.fragment),n=P()},l(t){e&&Y(e.$$.fragment,t),n=P()},m(t,o){e&&D(e,t,o),z(t,n,o),a=!0},p(t,o){const s={};if(o&2&&(s.data=t[1]),o&64&&(s.errors=t[6]),r!==(r=t[0][0])){if(e){K();const c=e;O(c.$$.fragment,1,0,()=>{C(c,1)}),W()}r?(e=new r(f(t)),U(e.$$.fragment),j(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){a||(e&&j(e.$$.fragment,t),a=!0)},o(t){e&&O(e.$$.fragment,t),a=!1},d(t){t&&q(n),e&&C(e,t)}}}function $t(i){let e,n,a;var r=i[0][0];function f(t){return{props:{data:t[1],errors:t[6],$$slots:{default:[jt]},$$scope:{ctx:t}}}}return r&&(e=new r(f(i))),{c(){e&&U(e.$$.fragment),n=P()},l(t){e&&Y(e.$$.fragment,t),n=P()},m(t,o){e&&D(e,t,o),z(t,n,o),a=!0},p(t,o){const s={};if(o&2&&(s.data=t[1]),o&64&&(s.errors=t[6]),o&4221&&(s.$$scope={dirty:o,ctx:t}),r!==(r=t[0][0])){if(e){K();const c=e;O(c.$$.fragment,1,0,()=>{C(c,1)}),W()}r?(e=new r(f(t)),U(e.$$.fragment),j(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){a||(e&&j(e.$$.fragment,t),a=!0)},o(t){e&&O(e.$$.fragment,t),a=!1},d(t){t&&q(n),e&&C(e,t)}}}function vt(i){let e,n,a;var r=i[0][1];function f(t){return{props:{data:t[2],errors:t[6]}}}return r&&(e=new r(f(i))),{c(){e&&U(e.$$.fragment),n=P()},l(t){e&&Y(e.$$.fragment,t),n=P()},m(t,o){e&&D(e,t,o),z(t,n,o),a=!0},p(t,o){const s={};if(o&4&&(s.data=t[2]),o&64&&(s.errors=t[6]),r!==(r=t[0][1])){if(e){K();const c=e;O(c.$$.fragment,1,0,()=>{C(c,1)}),W()}r?(e=new r(f(t)),U(e.$$.fragment),j(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){a||(e&&j(e.$$.fragment,t),a=!0)},o(t){e&&O(e.$$.fragment,t),a=!1},d(t){t&&q(n),e&&C(e,t)}}}function yt(i){let e,n,a;var r=i[0][1];function f(t){return{props:{data:t[2],errors:t[6],$$slots:{default:[Ot]},$$scope:{ctx:t}}}}return r&&(e=new r(f(i))),{c(){e&&U(e.$$.fragment),n=P()},l(t){e&&Y(e.$$.fragment,t),n=P()},m(t,o){e&&D(e,t,o),z(t,n,o),a=!0},p(t,o){const s={};if(o&4&&(s.data=t[2]),o&64&&(s.errors=t[6]),o&4217&&(s.$$scope={dirty:o,ctx:t}),r!==(r=t[0][1])){if(e){K();const c=e;O(c.$$.fragment,1,0,()=>{C(c,1)}),W()}r?(e=new r(f(t)),U(e.$$.fragment),j(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){a||(e&&j(e.$$.fragment,t),a=!0)},o(t){e&&O(e.$$.fragment,t),a=!1},d(t){t&&q(n),e&&C(e,t)}}}function kt(i){let e,n,a;var r=i[0][2];function f(t){return{props:{data:t[3],errors:t[6]}}}return r&&(e=new r(f(i))),{c(){e&&U(e.$$.fragment),n=P()},l(t){e&&Y(e.$$.fragment,t),n=P()},m(t,o){e&&D(e,t,o),z(t,n,o),a=!0},p(t,o){const s={};if(o&8&&(s.data=t[3]),o&64&&(s.errors=t[6]),r!==(r=t[0][2])){if(e){K();const c=e;O(c.$$.fragment,1,0,()=>{C(c,1)}),W()}r?(e=new r(f(t)),U(e.$$.fragment),j(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){a||(e&&j(e.$$.fragment,t),a=!0)},o(t){e&&O(e.$$.fragment,t),a=!1},d(t){t&&q(n),e&&C(e,t)}}}function Et(i){let e,n,a;var r=i[0][2];function f(t){return{props:{data:t[3],errors:t[6],$$slots:{default:[Pt]},$$scope:{ctx:t}}}}return r&&(e=new r(f(i))),{c(){e&&U(e.$$.fragment),n=P()},l(t){e&&Y(e.$$.fragment,t),n=P()},m(t,o){e&&D(e,t,o),z(t,n,o),a=!0},p(t,o){const s={};if(o&8&&(s.data=t[3]),o&64&&(s.errors=t[6]),o&4209&&(s.$$scope={dirty:o,ctx:t}),r!==(r=t[0][2])){if(e){K();const c=e;O(c.$$.fragment,1,0,()=>{C(c,1)}),W()}r?(e=new r(f(t)),U(e.$$.fragment),j(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){a||(e&&j(e.$$.fragment,t),a=!0)},o(t){e&&O(e.$$.fragment,t),a=!1},d(t){t&&q(n),e&&C(e,t)}}}function Rt(i){let e,n,a;var r=i[0][3];function f(t){return{props:{data:t[4],errors:t[6]}}}return r&&(e=new r(f(i))),{c(){e&&U(e.$$.fragment),n=P()},l(t){e&&Y(e.$$.fragment,t),n=P()},m(t,o){e&&D(e,t,o),z(t,n,o),a=!0},p(t,o){const s={};if(o&16&&(s.data=t[4]),o&64&&(s.errors=t[6]),r!==(r=t[0][3])){if(e){K();const c=e;O(c.$$.fragment,1,0,()=>{C(c,1)}),W()}r?(e=new r(f(t)),U(e.$$.fragment),j(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){a||(e&&j(e.$$.fragment,t),a=!0)},o(t){e&&O(e.$$.fragment,t),a=!1},d(t){t&&q(n),e&&C(e,t)}}}function Lt(i){let e,n,a;var r=i[0][3];function f(t){return{props:{data:t[4],errors:t[6],$$slots:{default:[St]},$$scope:{ctx:t}}}}return r&&(e=new r(f(i))),{c(){e&&U(e.$$.fragment),n=P()},l(t){e&&Y(e.$$.fragment,t),n=P()},m(t,o){e&&D(e,t,o),z(t,n,o),a=!0},p(t,o){const s={};if(o&16&&(s.data=t[4]),o&64&&(s.errors=t[6]),o&4129&&(s.$$scope={dirty:o,ctx:t}),r!==(r=t[0][3])){if(e){K();const c=e;O(c.$$.fragment,1,0,()=>{C(c,1)}),W()}r?(e=new r(f(t)),U(e.$$.fragment),j(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){a||(e&&j(e.$$.fragment,t),a=!0)},o(t){e&&O(e.$$.fragment,t),a=!1},d(t){t&&q(n),e&&C(e,t)}}}function St(i){let e,n,a;var r=i[0][4];function f(t){return{props:{data:t[5]}}}return r&&(e=new r(f(i))),{c(){e&&U(e.$$.fragment),n=P()},l(t){e&&Y(e.$$.fragment,t),n=P()},m(t,o){e&&D(e,t,o),z(t,n,o),a=!0},p(t,o){const s={};if(o&32&&(s.data=t[5]),r!==(r=t[0][4])){if(e){K();const c=e;O(c.$$.fragment,1,0,()=>{C(c,1)}),W()}r?(e=new r(f(t)),U(e.$$.fragment),j(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){a||(e&&j(e.$$.fragment,t),a=!0)},o(t){e&&O(e.$$.fragment,t),a=!1},d(t){t&&q(n),e&&C(e,t)}}}function Pt(i){let e,n,a,r;const f=[Lt,Rt],t=[];function o(s,c){return s[0][4]?0:1}return e=o(i),n=t[e]=f[e](i),{c(){n.c(),a=P()},l(s){n.l(s),a=P()},m(s,c){t[e].m(s,c),z(s,a,c),r=!0},p(s,c){let h=e;e=o(s),e===h?t[e].p(s,c):(K(),O(t[h],1,1,()=>{t[h]=null}),W(),n=t[e],n?n.p(s,c):(n=t[e]=f[e](s),n.c()),j(n,1),n.m(a.parentNode,a))},i(s){r||(j(n),r=!0)},o(s){O(n),r=!1},d(s){t[e].d(s),s&&q(a)}}}function Ot(i){let e,n,a,r;const f=[Et,kt],t=[];function o(s,c){return s[0][3]?0:1}return e=o(i),n=t[e]=f[e](i),{c(){n.c(),a=P()},l(s){n.l(s),a=P()},m(s,c){t[e].m(s,c),z(s,a,c),r=!0},p(s,c){let h=e;e=o(s),e===h?t[e].p(s,c):(K(),O(t[h],1,1,()=>{t[h]=null}),W(),n=t[e],n?n.p(s,c):(n=t[e]=f[e](s),n.c()),j(n,1),n.m(a.parentNode,a))},i(s){r||(j(n),r=!0)},o(s){O(n),r=!1},d(s){t[e].d(s),s&&q(a)}}}function jt(i){let e,n,a,r;const f=[yt,vt],t=[];function o(s,c){return s[0][2]?0:1}return e=o(i),n=t[e]=f[e](i),{c(){n.c(),a=P()},l(s){n.l(s),a=P()},m(s,c){t[e].m(s,c),z(s,a,c),r=!0},p(s,c){let h=e;e=o(s),e===h?t[e].p(s,c):(K(),O(t[h],1,1,()=>{t[h]=null}),W(),n=t[e],n?n.p(s,c):(n=t[e]=f[e](s),n.c()),j(n,1),n.m(a.parentNode,a))},i(s){r||(j(n),r=!0)},o(s){O(n),r=!1},d(s){t[e].d(s),s&&q(a)}}}function ze(i){let e,n=i[8]&&Be(i);return{c(){e=Ye("div"),n&&n.c(),this.h()},l(a){e=Xe(a,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=Qe(e);n&&n.l(r),r.forEach(q),this.h()},h(){_e(e,"id","svelte-announcer"),_e(e,"aria-live","assertive"),_e(e,"aria-atomic","true"),G(e,"position","absolute"),G(e,"left","0"),G(e,"top","0"),G(e,"clip","rect(0 0 0 0)"),G(e,"clip-path","inset(50%)"),G(e,"overflow","hidden"),G(e,"white-space","nowrap"),G(e,"width","1px"),G(e,"height","1px")},m(a,r){z(a,e,r),n&&n.m(e,null)},p(a,r){a[8]?n?n.p(a,r):(n=Be(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(a){a&&q(e),n&&n.d()}}}function Be(i){let e;return{c(){e=Ze(i[9])},l(n){e=xe(n,i[9])},m(n,a){z(n,e,a)},p(n,a){a&512&&et(e,n[9])},d(n){n&&q(e)}}}function At(i){let e,n,a,r,f;const t=[$t,bt],o=[];function s(h,k){return h[0][1]?0:1}e=s(i),n=o[e]=t[e](i);let c=i[7]&&ze(i);return{c(){n.c(),a=tt(),c&&c.c(),r=P()},l(h){n.l(h),a=nt(h),c&&c.l(h),r=P()},m(h,k){o[e].m(h,k),z(h,a,k),c&&c.m(h,k),z(h,r,k),f=!0},p(h,[k]){let I=e;e=s(h),e===I?o[e].p(h,k):(K(),O(o[I],1,1,()=>{o[I]=null}),W(),n=o[e],n?n.p(h,k):(n=o[e]=t[e](h),n.c()),j(n,1),n.m(a.parentNode,a)),h[7]?c?c.p(h,k):(c=ze(h),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(h){f||(j(n),f=!0)},o(h){O(n),f=!1},d(h){o[e].d(h),h&&q(a),c&&c.d(h),h&&q(r)}}}function Nt(i,e,n){let{stores:a}=e,{page:r}=e,{components:f}=e,{data_0:t=null}=e,{data_1:o=null}=e,{data_2:s=null}=e,{data_3:c=null}=e,{data_4:h=null}=e,{errors:k}=e;rt(a.page.notify);let I=!1,B=!1,T=null;return me(()=>{const L=a.page.subscribe(()=>{I&&(n(8,B=!0),n(9,T=document.title||"untitled page"))});return n(7,I=!0),L}),i.$$set=L=>{"stores"in L&&n(10,a=L.stores),"page"in L&&n(11,r=L.page),"components"in L&&n(0,f=L.components),"data_0"in L&&n(1,t=L.data_0),"data_1"in L&&n(2,o=L.data_1),"data_2"in L&&n(3,s=L.data_2),"data_3"in L&&n(4,c=L.data_3),"data_4"in L&&n(5,h=L.data_4),"errors"in L&&n(6,k=L.errors)},i.$$.update=()=>{i.$$.dirty&3072&&a.page.set(r)},[f,t,o,s,c,h,k,I,B,T,a,r]}class It extends Fe{constructor(e){super(),Ge(this,e,Nt,At,Me,{stores:10,page:11,components:0,data_0:1,data_1:2,data_2:3,data_3:4,data_4:5,errors:6})}}const Ut=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Dt=function(i,e){return new URL(i,e).href},Je={},M=function(e,n,a){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=Dt(r,a),r in Je)return;Je[r]=!0;const f=r.endsWith(".css"),t=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=f?"stylesheet":Ut,f||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),f)return new Promise((s,c)=>{o.addEventListener("load",s),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Ct={},ae=[()=>M(()=>import("./chunks/0-6a0934f4.js"),["chunks\\0-6a0934f4.js","components\\pages\\_layout.svelte-82f61bef.js","assets\\+layout-47bf80b2.css","chunks\\index-97bbca98.js","chunks\\componentList-421e43d0.js","chunks\\Frame.svelte_svelte_type_style_lang-b50ee946.js","assets\\Frame-e06116ae.css","chunks\\index-7150691d.js","chunks\\singletons-dd8fb9a6.js"],import.meta.url),()=>M(()=>import("./chunks/1-cedabe00.js"),["chunks\\1-cedabe00.js","components\\error.svelte-3f1501f9.js","chunks\\index-97bbca98.js","chunks\\singletons-dd8fb9a6.js","chunks\\index-7150691d.js"],import.meta.url),()=>M(()=>import("./chunks/2-2dde6fb3.js"),["chunks\\2-2dde6fb3.js","components\\pages\\svelte-components\\_layout.svelte-7a8faebc.js","chunks\\index-97bbca98.js"],import.meta.url),()=>M(()=>import("./chunks/3-30656901.js"),["chunks\\3-30656901.js","chunks\\_layout-781cbb69.js","components\\pages\\svelte-components\\_component_\\_layout.svelte-6dccc6a1.js","chunks\\index-97bbca98.js","chunks\\Frame.svelte_svelte_type_style_lang-b50ee946.js","assets\\Frame-e06116ae.css"],import.meta.url),()=>M(()=>import("./chunks/4-3571e567.js"),["chunks\\4-3571e567.js","components\\pages\\svelte-components\\_component_\\api\\_layout.svelte-bf0f19b8.js","chunks\\index-97bbca98.js"],import.meta.url),()=>M(()=>import("./chunks/5-69142862.js"),["chunks\\5-69142862.js","components\\pages\\_page.svelte-228df989.js","assets\\+page-af128a52.css","chunks\\index-97bbca98.js"],import.meta.url),()=>M(()=>import("./chunks/6-9fe779a8.js"),["chunks\\6-9fe779a8.js","chunks\\_page-b1d4a593.js","components\\pages\\svelte-components\\_page.svelte-8952846f.js","assets\\+page-09fc37b2.css","chunks\\index-97bbca98.js","chunks\\componentList-421e43d0.js","chunks\\Frame.svelte_svelte_type_style_lang-b50ee946.js","assets\\Frame-e06116ae.css","chunks\\index-7150691d.js"],import.meta.url),()=>M(()=>import("./chunks/7-43964298.js"),["chunks\\7-43964298.js","chunks\\_page-74d72278.js","components\\pages\\svelte-components\\_component_\\_page.svelte-1d49a65f.js","chunks\\index-97bbca98.js","chunks\\componentList-421e43d0.js","chunks\\Frame.svelte_svelte_type_style_lang-b50ee946.js","assets\\Frame-e06116ae.css","chunks\\index-7150691d.js"],import.meta.url),()=>M(()=>import("./chunks/8-edfe22a6.js"),["chunks\\8-edfe22a6.js","chunks\\_page-d39c0ea4.js","components\\pages\\svelte-components\\_component_\\api\\_page.svelte-7f5b474f.js","chunks\\index-97bbca98.js"],import.meta.url)],Tt={"":[5],"svelte-components":[6,[2]],"svelte-components/[component]":[7,[2,3]],"svelte-components/[component]/api":[8,[2,3,4]]},Ke="sveltekit:scroll",Q="sveltekit:index",de=gt(ae,Tt,Ct),we=ae[0],be=ae[1];we();be();let ee={};try{ee=JSON.parse(sessionStorage[Ke])}catch{}function he(i){ee[i]=ge()}function Vt({target:i,base:e,trailing_slash:n}){var Pe;const a=[],r={id:null,promise:null},f={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,session_id:0,url:null},o=!1,s=!0,c=!1,h=1,k=null,I,B=!0,T=(Pe=history.state)==null?void 0:Pe[Q];T||(T=Date.now(),history.replaceState({...history.state,[Q]:T},"",location.href));const L=ee[T];L&&(history.scrollRestoration="manual",scrollTo(L.x,L.y));let x=!1,ie,$e;async function ve(l,{noscroll:_=!1,replaceState:d=!1,keepfocus:u=!1,state:p={}},$){if(typeof l=="string"&&(l=new URL(l,De(document))),B)return ce({url:l,scroll:_?ge():null,keepfocus:u,redirect_chain:$,details:{state:p,replaceState:d},accepted:()=>{},blocked:()=>{}});await X(l)}async function ye(l){const _=Se(l);if(!_)throw new Error("Attempted to prefetch a URL that does not belong to this app");return r.promise=Le(_),r.id=_.id,r.promise}async function ke(l,_,d,u){var b,R,N;const p=Se(l),$=$e={};let m=p&&await Le(p);if(!m&&l.origin===location.origin&&l.pathname===location.pathname&&(m=await le({status:404,error:new Error(`Not found: ${l.pathname}`),url:l,routeId:null})),!m)return await X(l),!1;if(l=(p==null?void 0:p.url)||l,$e!==$)return!1;if(a.length=0,m.type==="redirect")if(_.length>10||_.includes(l.pathname))m=await le({status:500,error:new Error("Redirect loop"),url:l,routeId:null});else return B?ve(new URL(m.location,l).href,{},[..._,l.pathname]):await X(new URL(m.location,location.href)),!1;else((R=(b=m.props)==null?void 0:b.page)==null?void 0:R.status)>=400&&await Z.updated.check()&&await X(l);if(c=!0,d&&d.details){const{details:y}=d,S=y.replaceState?0:1;y.state[Q]=T+=S,history[y.replaceState?"replaceState":"pushState"](y.state,"",l)}if(o?(t=m.state,m.props.page&&(m.props.page.url=l),I.$set(m.props)):Ee(m),d){const{scroll:y,keepfocus:S}=d;if(!S){const E=document.body,V=E.getAttribute("tabindex");E.tabIndex=-1,E.focus({preventScroll:!0}),setTimeout(()=>{var w;(w=getSelection())==null||w.removeAllRanges()}),V!==null?E.setAttribute("tabindex",V):E.removeAttribute("tabindex")}if(await Ue(),s){const E=l.hash&&document.getElementById(l.hash.slice(1));y?scrollTo(y.x,y.y):E?E.scrollIntoView():scrollTo(0,0)}}else await Ue();r.promise=null,r.id=null,s=!0,m.props.page&&(ie=m.props.page);const v=m.state.branch[m.state.branch.length-1];B=((N=v==null?void 0:v.node.shared)==null?void 0:N.router)!==!1,u&&u(),c=!1}function Ee(l){t=l.state;const _=document.querySelector("style[data-sveltekit]");if(_&&_.remove(),ie=l.props.page,I=new It({target:i,props:{...l.props,stores:Z},hydrate:!0}),B){const d={from:null,to:new URL(location.href)};f.after_navigate.forEach(u=>u(d))}o=!0}async function te({url:l,params:_,branch:d,status:u,error:p,routeId:$,validation_errors:m}){const v=d.filter(Boolean),b={type:"loaded",state:{url:l,params:_,branch:d,error:p,session_id:h},props:{components:v.map(S=>S.node.component),errors:m}};let R={},N=!1;for(let S=0;S<v.length;S+=1)R={...R,...v[S].data},(N||!t.branch.some(E=>E===v[S]))&&(b.props[`data_${S}`]=R,N=!0);if(!t.url||l.href!==t.url.href||t.error!==p||N){b.props.page={error:p,params:_,routeId:$,status:u,url:l,data:R};const S=(E,V)=>{Object.defineProperty(b.props.page,E,{get:()=>{throw new Error(`$page.${E} has been replaced by $page.url.${V}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return b}async function se({loader:l,parent:_,url:d,params:u,routeId:p,server_data_node:$}){var R,N,y,S,E;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},b=await l();if((R=b.shared)!=null&&R.load){let V=function(...g){for(const A of g){const{href:H}=new URL(A,d);v.dependencies.add(H)}};const w={};for(const g in u)Object.defineProperty(w,g,{get(){return v.params.add(g),u[g]},enumerable:!0});const J={routeId:p,params:w,data:(N=$==null?void 0:$.data)!=null?N:null,url:ct(d,()=>{v.url=!0}),async fetch(g,A){let H;typeof g=="string"?H=g:(H=g.url,A={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...A});const F=new URL(H,d).href;return V(F),o?re(F,A):pt(H,A)},setHeaders:()=>{},depends:V,parent(){return v.parent=!0,_()}};Object.defineProperties(J,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(y=await b.shared.load.call(null,J))!=null?y:null}return{node:b,loader:l,server:$,shared:(S=b.shared)!=null&&S.load?{type:"data",data:m,uses:v}:null,data:(E=m!=null?m:$==null?void 0:$.data)!=null?E:null}}function Re(l,_,d){if(!d)return!1;if(d.parent&&_||l.url&&d.url)return!0;for(const u of l.params)if(d.params.has(u))return!0;for(const u of d.dependencies)if(a.some(p=>p(u)))return!0;return!1}function oe(l){var _,d;return(l==null?void 0:l.type)==="data"?{type:"data",data:l.data,uses:{dependencies:new Set((_=l.uses.dependencies)!=null?_:[]),params:new Set((d=l.uses.params)!=null?d:[]),parent:!!l.uses.parent,url:!!l.uses.url}}:null}async function Le({id:l,url:_,params:d,route:u}){if(r.id===l&&r.promise)return r.promise;const{errors:p,layouts:$,leaf:m}=u,v=t.url&&{url:l!==t.url.pathname+t.url.search,params:Object.keys(d).filter(w=>t.params[w]!==d[w])};[...p,...$,m].forEach(w=>w==null?void 0:w().catch(()=>{}));const b=[...$,m];let R=null;const N=b.reduce((w,J,g)=>{var F;const A=t.branch[g],H=J&&((A==null?void 0:A.loader)!==J||Re(v,w.some(Boolean),(F=A.server)==null?void 0:F.uses));return w.push(H),w},[]);if(u.uses_server_data&&N.some(Boolean)){try{const w=await re(`${_.pathname}${_.pathname.endsWith("/")?"":"/"}__data.json${_.search}`,{headers:{"x-sveltekit-invalidated":N.map(J=>J?"1":"").join(",")}});if(R=await w.json(),!w.ok)throw R}catch{X(_);return}if(R.type==="redirect")return R}const y=R==null?void 0:R.nodes;let S=!1;const E=b.map(async(w,J)=>{var fe,Oe,je,Ae;if(!w)return;const g=t.branch[J],A=(fe=y==null?void 0:y[J])!=null?fe:null;if((!A||A.type==="skip")&&w===(g==null?void 0:g.loader)&&!Re(v,S,(Oe=g.shared)==null?void 0:Oe.uses))return g;if(S=!0,(A==null?void 0:A.type)==="error")throw A.httperror?wt(A.httperror.status,A.httperror.message):A.error;return se({loader:w,url:_,params:d,routeId:u.id,parent:async()=>{var Ie;const Ne={};for(let ue=0;ue<J;ue+=1)Object.assign(Ne,(Ie=await E[ue])==null?void 0:Ie.data);return Ne},server_data_node:(Ae=(je=oe(A))!=null?je:g==null?void 0:g.server)!=null?Ae:null})});for(const w of E)w.catch(()=>{});const V=[];for(let w=0;w<b.length;w+=1)if(b[w])try{V.push(await E[w])}catch(J){const g=J;if(g instanceof Ve)return{type:"redirect",location:g.location};const A=J instanceof ne?J.status:500;for(;w--;)if(p[w]){let H,F=w;for(;!V[F];)F-=1;try{return H={node:await p[w](),loader:p[w],data:{},server:null,shared:null},await te({url:_,params:d,branch:V.slice(0,F+1).concat(H),status:A,error:g,routeId:u.id})}catch{continue}}X(_);return}else V.push(void 0);return await te({url:_,params:d,branch:V,status:200,error:null,routeId:u.id})}async function le({status:l,error:_,url:d,routeId:u}){var R;const p={},$=await we();let m=null;if($.server){const N=await re(`${d.pathname}${d.pathname.endsWith("/")?"":"/"}__data.json${d.search}`,{headers:{"x-sveltekit-invalidated":"1"}}),y=await N.json();if(m=(R=y==null?void 0:y[0])!=null?R:null,!N.ok||(y==null?void 0:y.type)!=="data"){X(d);return}}const v=await se({loader:we,url:d,params:p,routeId:u,parent:()=>Promise.resolve({}),server_data_node:oe(m)}),b={node:await be(),loader:be,shared:null,server:null,data:null};return await te({url:d,params:p,branch:[v,b],status:l,error:_,routeId:u})}function Se(l){if(l.origin!==location.origin||!l.pathname.startsWith(e))return;const _=decodeURI(l.pathname.slice(e.length)||"/");for(const d of de){const u=d.exec(_);if(u){const p=new URL(l.origin+st(l.pathname,n)+l.search+l.hash);return{id:p.pathname+p.search,route:d,params:ot(u),url:p}}}}async function ce({url:l,scroll:_,keepfocus:d,redirect_chain:u,details:p,accepted:$,blocked:m}){const v=t.url;let b=!1;const R={from:v,to:l,cancel:()=>b=!0};if(f.before_navigate.forEach(N=>N(R)),b){m();return}he(T),$(),o&&Z.navigating.set({from:t.url,to:l}),await ke(l,u,{scroll:_,keepfocus:d,details:p},()=>{const N={from:v,to:l};f.after_navigate.forEach(y=>y(N)),Z.navigating.set(null)})}function X(l){return location.href=l.href,new Promise(()=>{})}return{after_navigate:l=>{me(()=>(f.after_navigate.push(l),()=>{const _=f.after_navigate.indexOf(l);f.after_navigate.splice(_,1)}))},before_navigate:l=>{me(()=>(f.before_navigate.push(l),()=>{const _=f.before_navigate.indexOf(l);f.before_navigate.splice(_,1)}))},disable_scroll_handling:()=>{(c||!o)&&(s=!1)},goto:(l,_={})=>ve(l,_,[]),invalidate:l=>{var _,d;if(l===void 0){for(const u of t.branch)(_=u==null?void 0:u.server)==null||_.uses.dependencies.add(""),(d=u==null?void 0:u.shared)==null||d.uses.dependencies.add("");a.push(()=>!0)}else if(typeof l=="function")a.push(l);else{const{href:u}=new URL(l,location.href);a.push(p=>p===u)}return k||(k=Promise.resolve().then(async()=>{await ke(new URL(location.href),[]),k=null})),k},prefetch:async l=>{const _=new URL(l,De(document));await ye(_)},prefetch_routes:async l=>{const d=(l?de.filter(u=>l.some(p=>u.exec(p))):de).map(u=>Promise.all([...u.layouts,u.leaf].map(p=>p==null?void 0:p())));await Promise.all(d)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",u=>{let p=!1;const $={from:t.url,to:null,cancel:()=>p=!0};f.before_navigate.forEach(m=>m($)),p?(u.preventDefault(),u.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){he(T);try{sessionStorage[Ke]=JSON.stringify(ee)}catch{}}});const l=u=>{const p=Ce(u);p&&p.href&&p.hasAttribute("sveltekit:prefetch")&&ye(Te(p))};let _;const d=u=>{clearTimeout(_),_=setTimeout(()=>{var p;(p=u.target)==null||p.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",l),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",l),addEventListener("click",u=>{if(!B||u.button||u.which!==1||u.metaKey||u.ctrlKey||u.shiftKey||u.altKey||u.defaultPrevented)return;const p=Ce(u);if(!p||!p.href)return;const $=p instanceof SVGAElement,m=Te(p);if(!$&&!(m.protocol==="https:"||m.protocol==="http:"))return;const v=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||v.includes("external")||p.hasAttribute("sveltekit:reload")||($?p.target.baseVal:p.target))return;const[b,R]=m.href.split("#");if(R!==void 0&&b===location.href.split("#")[0]){x=!0,he(T),Z.page.set({...ie,url:m}),Z.page.notify();return}ce({url:m,scroll:p.hasAttribute("sveltekit:noscroll")?ge():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>u.preventDefault(),blocked:()=>u.preventDefault()})}),addEventListener("popstate",u=>{if(u.state&&B){if(u.state[Q]===T)return;ce({url:new URL(location.href),scroll:ee[u.state[Q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=u.state[Q]},blocked:()=>{const p=T-u.state[Q];history.go(p)}})}}),addEventListener("hashchange",()=>{x&&(x=!1,history.replaceState({...history.state,[Q]:++T},"",location.href))});for(const u of document.querySelectorAll("link"))u.rel==="icon"&&(u.href=u.href);addEventListener("pageshow",u=>{u.persisted&&Z.navigating.set(null)})},_hydrate:async({status:l,error:_,node_ids:d,params:u,routeId:p})=>{const $=new URL(location.href);let m;try{const v=(y,S)=>{const E=document.querySelector(`script[sveltekit\\:data-type="${y}"]`);return E!=null&&E.textContent?JSON.parse(E.textContent):S},b=v("server_data",[]),R=v("validation_errors",void 0),N=d.map(async(y,S)=>se({loader:ae[y],url:$,params:u,routeId:p,parent:async()=>{const E={};for(let V=0;V<S;V+=1)Object.assign(E,(await N[V]).data);return E},server_data_node:oe(b[S])}));m=await te({url:$,params:u,branch:await Promise.all(N),status:l,error:_!=null&&_.__is_http_error?new ne(_.status,_.message):_,validation_errors:R,routeId:p})}catch(v){const b=v;if(b instanceof Ve){await X(new URL(v.location,location.href));return}m=await le({status:b instanceof ne?b.status:500,error:b,url:$,routeId:p})}Ee(m)}}}function Kt(i){}async function Wt({paths:i,target:e,route:n,spa:a,trailing_slash:r,hydrate:f}){const t=Vt({target:e,base:i.base,trailing_slash:r});at({client:t}),it(i),f&&await t._hydrate(f),n&&(a&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Kt as set_public_env,Wt as start};
