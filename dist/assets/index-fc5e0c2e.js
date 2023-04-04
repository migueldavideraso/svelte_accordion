(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function L(){}function ie(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function Q(){return Object.create(null)}function M(t){t.forEach(Z)}function ee(t){return typeof t=="function"}function F(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function le(t){return Object.keys(t).length===0}function te(t,e,n,r){if(t){const o=ne(t,e,n,r);return t[0](o)}}function ne(t,e,n,r){return t[1]&&r?ie(n.ctx.slice(),t[1](r(e))):n.ctx}function re(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const s=[],c=Math.max(e.dirty.length,o.length);for(let _=0;_<c;_+=1)s[_]=e.dirty[_]|o[_];return s}return e.dirty|o}return e.dirty}function oe(t,e,n,r,o,s){if(o){const c=ne(e,n,r,s);t.p(c,o)}}function se(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function R(t){return t??""}function m(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function T(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function S(){return A(" ")}function fe(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ue(t){return Array.from(t.childNodes)}let H;function z(t){H=t}const E=[],U=[];let O=[];const V=[],ae=Promise.resolve();let q=!1;function de(){q||(q=!0,ae.then(ce))}function D(t){O.push(t)}const B=new Set;let k=0;function ce(){if(k!==0)return;const t=H;do{try{for(;k<E.length;){const e=E[k];k++,z(e),_e(e.$$)}}catch(e){throw E.length=0,k=0,e}for(z(null),E.length=0,k=0;U.length;)U.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];B.has(n)||(B.add(n),n())}O.length=0}while(E.length);for(;V.length;)V.pop()();q=!1,B.clear(),z(t)}function _e(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function he(t){const e=[],n=[];O.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),O=e}const j=new Set;let x;function pe(){x={r:0,c:[],p:x}}function me(){x.r||M(x.c),x=x.p}function y(t,e){t&&t.i&&(j.delete(t),t.i(e))}function b(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),x.c.push(()=>{j.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function P(t){t&&t.c()}function C(t,e,n,r){const{fragment:o,after_update:s}=t.$$;o&&o.m(e,n),r||D(()=>{const c=t.$$.on_mount.map(Z).filter(ee);t.$$.on_destroy?t.$$.on_destroy.push(...c):M(c),t.$$.on_mount=[]}),s.forEach(D)}function N(t,e){const n=t.$$;n.fragment!==null&&(he(n.after_update),M(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(t,e){t.$$.dirty[0]===-1&&(E.push(t),de(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,n,r,o,s,c,_=[-1]){const d=H;z(t);const a=t.$$={fragment:null,ctx:[],props:s,update:L,not_equal:o,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:Q(),dirty:_,skip_bound:!1,root:e.target||d.$$.root};c&&c(a.root);let p=!1;if(a.ctx=n?n(t,e.props||{},(h,i,...l)=>{const u=l.length?l[0]:i;return a.ctx&&o(a.ctx[h],a.ctx[h]=u)&&(!a.skip_bound&&a.bound[h]&&a.bound[h](u),p&&ge(t,h)),i}):[],a.update(),p=!0,M(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const h=ue(e.target);a.fragment&&a.fragment.l(h),h.forEach(g)}else a.fragment&&a.fragment.c();e.intro&&y(t.$$.fragment),C(t,e.target,e.anchor,e.customElement),ce()}z(d)}class G{$destroy(){N(this,1),this.$destroy=L}$on(e,n){if(!ee(n))return L;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!le(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function $e(t){let e,n,r;return{c(){e=T("svg"),n=T("path"),r=T("path"),f(n,"stroke","none"),f(n,"d","M0 0h24v24H0z"),f(n,"fill","none"),f(r,"d","M18 15l-6 -6l-6 6h12"),f(r,"transform","rotate(90 12 12)"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width",t[0]),f(e,"height",t[0]),f(e,"viewBox","0 0 24 24"),f(e,"stroke-width",t[1]),f(e,"stroke","#2c3e50"),f(e,"fill","#2c3e50"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round")},m(o,s){v(o,e,s),m(e,n),m(e,r)},p(o,[s]){s&1&&f(e,"width",o[0]),s&1&&f(e,"height",o[0]),s&2&&f(e,"stroke-width",o[1])},i:L,o:L,d(o){o&&g(e)}}}function ye(t,e,n){let{size:r=15}=e,{strokeSize:o=3}=e;return t.$$set=s=>{"size"in s&&n(0,r=s.size),"strokeSize"in s&&n(1,o=s.strokeSize)},[r,o]}class ve extends G{constructor(e){super(),K(this,e,ye,$e,F,{size:0,strokeSize:1})}}const we=t=>({}),W=t=>({}),be=t=>({}),X=t=>({});function Y(t){let e,n;const r=t[3].content,o=te(r,t,t[2],W);return{c(){e=w("main"),o&&o.c(),f(e,"class","svelte-97yap")},m(s,c){v(s,e,c),o&&o.m(e,null),n=!0},p(s,c){o&&o.p&&(!n||c&4)&&oe(o,r,s,s[2],n?re(r,s[2],c,we):se(s[2]),W)},i(s){n||(y(o,s),n=!0)},o(s){b(o,s),n=!1},d(s){s&&g(e),o&&o.d(s)}}}function xe(t){let e,n,r,o,s,c,_,d,a,p;o=new ve({});const h=t[3].header,i=te(h,t,t[2],X);let l=!t[0]&&Y(t);return{c(){e=w("div"),n=w("header"),r=w("button"),P(o.$$.fragment),c=S(),i&&i.c(),_=S(),l&&l.c(),f(r,"class",s=R(t[0]?"collapsed":"")+" svelte-97yap"),f(n,"class","svelte-97yap"),f(e,"class","accodion svelte-97yap")},m(u,$){v(u,e,$),m(e,n),m(n,r),C(o,r,null),m(n,c),i&&i.m(n,null),m(e,_),l&&l.m(e,null),d=!0,a||(p=fe(r,"click",t[1]),a=!0)},p(u,[$]){(!d||$&1&&s!==(s=R(u[0]?"collapsed":"")+" svelte-97yap"))&&f(r,"class",s),i&&i.p&&(!d||$&4)&&oe(i,h,u,u[2],d?re(h,u[2],$,be):se(u[2]),X),u[0]?l&&(pe(),b(l,1,1,()=>{l=null}),me()):l?(l.p(u,$),$&1&&y(l,1)):(l=Y(u),l.c(),y(l,1),l.m(e,null))},i(u){d||(y(o.$$.fragment,u),y(i,u),y(l),d=!0)},o(u){b(o.$$.fragment,u),b(i,u),b(l),d=!1},d(u){u&&g(e),N(o),i&&i.d(u),l&&l.d(),a=!1,p()}}}function Ae(t,e,n){let{$$slots:r={},$$scope:o}=e,{collapsed:s=!0}=e;const c=()=>{n(0,s=!s)};return t.$$set=_=>{"collapsed"in _&&n(0,s=_.collapsed),"$$scope"in _&&n(2,o=_.$$scope)},[s,c,o,r]}class I extends G{constructor(e){super(),K(this,e,Ae,xe,F,{collapsed:0})}}function ke(t){let e;return{c(){e=A("Accordion Title")},m(n,r){v(n,e,r)},d(n){n&&g(e)}}}function Ee(t){let e;return{c(){e=A("Accordion Content")},m(n,r){v(n,e,r)},d(n){n&&g(e)}}}function Oe(t){let e;return{c(){e=A("Accordion Title")},m(n,r){v(n,e,r)},d(n){n&&g(e)}}}function Se(t){let e;return{c(){e=A("Accordion Content")},m(n,r){v(n,e,r)},d(n){n&&g(e)}}}function ze(t){let e;return{c(){e=A("Accordion Title")},m(n,r){v(n,e,r)},d(n){n&&g(e)}}}function Ce(t){let e;return{c(){e=A("Accordion Content")},m(n,r){v(n,e,r)},d(n){n&&g(e)}}}function Ne(t){let e,n,r,o,s,c,_,d,a,p,h;return c=new I({props:{collapsed:!1,$$slots:{content:[Ee],header:[ke]},$$scope:{ctx:t}}}),d=new I({props:{$$slots:{content:[Se],header:[Oe]},$$scope:{ctx:t}}}),p=new I({props:{$$slots:{content:[Ce],header:[ze]},$$scope:{ctx:t}}}),{c(){e=w("main"),n=w("div"),r=w("section"),r.textContent="Default Settings",o=S(),s=w("section"),P(c.$$.fragment),_=S(),P(d.$$.fragment),a=S(),P(p.$$.fragment),f(r,"class","header_container svelte-9at0pu"),f(s,"class","container svelte-9at0pu"),f(n,"class","card svelte-9at0pu"),f(e,"class","svelte-9at0pu")},m(i,l){v(i,e,l),m(e,n),m(n,r),m(n,o),m(n,s),C(c,s,null),m(s,_),C(d,s,null),m(s,a),C(p,s,null),h=!0},p(i,[l]){const u={};l&1&&(u.$$scope={dirty:l,ctx:i}),c.$set(u);const $={};l&1&&($.$$scope={dirty:l,ctx:i}),d.$set($);const J={};l&1&&(J.$$scope={dirty:l,ctx:i}),p.$set(J)},i(i){h||(y(c.$$.fragment,i),y(d.$$.fragment,i),y(p.$$.fragment,i),h=!0)},o(i){b(c.$$.fragment,i),b(d.$$.fragment,i),b(p.$$.fragment,i),h=!1},d(i){i&&g(e),N(c),N(d),N(p)}}}class Le extends G{constructor(e){super(),K(this,e,null,Ne,F,{})}}new Le({target:document.getElementById("app")});