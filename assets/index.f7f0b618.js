(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function T(){}function ge(e,t){for(const n in t)e[n]=t[n];return e}function oe(e){return e()}function Y(){return Object.create(null)}function M(e){e.forEach(oe)}function re(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let O;function be(e,t){return O||(O=document.createElement("a")),O.href=t,e===O.href}function ye(e){return Object.keys(e).length===0}function _e(e,t,n,o){if(e){const r=ie(e,t,n,o);return e[0](r)}}function ie(e,t,n,o){return e[1]&&o?ge(n.ctx.slice(),e[1](o(t))):n.ctx}function xe(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const i=[],s=Math.max(t.dirty.length,r.length);for(let l=0;l<s;l+=1)i[l]=t.dirty[l]|r[l];return i}return t.dirty|r}return t.dirty}function ve(e,t,n,o,r,i){if(r){const s=ie(t,n,o,i);e.p(s,r)}}function we(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let o=0;o<n;o++)t[o]=-1;return t}return-1}function _(e,t){e.appendChild(t)}function C(e,t,n){e.insertBefore(t,n||null)}function B(e){e.parentNode&&e.parentNode.removeChild(e)}function Be(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function se(e){return document.createTextNode(e)}function H(){return se(" ")}function ke(){return se("")}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Se(e){return Array.from(e.childNodes)}function z(e,t,n,o){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function Z(e,t,n){e.classList[n?"add":"remove"](t)}let F;function D(e){F=e}function Ce(){if(!F)throw new Error("Function called outside component initialization");return F}function Ee(e){Ce().$$.on_mount.push(e)}const S=[],I=[];let E=[];const j=[],Ae=Promise.resolve();let q=!1;function ze(){q||(q=!0,Ae.then(ae))}function P(e){E.push(e)}function le(e){j.push(e)}const R=new Set;let k=0;function ae(){if(k!==0)return;const e=F;do{try{for(;k<S.length;){const t=S[k];k++,D(t),De(t.$$)}}catch(t){throw S.length=0,k=0,t}for(D(null),S.length=0,k=0;I.length;)I.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];R.has(n)||(R.add(n),n())}E.length=0}while(S.length);for(;j.length;)j.pop()();q=!1,R.clear(),D(e)}function De(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}function Fe(e){const t=[],n=[];E.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),E=t}const L=new Set;let Ie;function N(e,t){e&&e.i&&(L.delete(e),e.i(t))}function U(e,t,n,o){if(e&&e.o){if(L.has(e))return;L.add(e),Ie.c.push(()=>{L.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function ce(e,t,n){const o=e.$$.props[t];o!==void 0&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function fe(e){e&&e.c()}function V(e,t,n,o){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),o||P(()=>{const s=e.$$.on_mount.map(oe).filter(re);e.$$.on_destroy?e.$$.on_destroy.push(...s):M(s),e.$$.on_mount=[]}),i.forEach(P)}function G(e,t){const n=e.$$;n.fragment!==null&&(Fe(n.after_update),M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){e.$$.dirty[0]===-1&&(S.push(e),ze(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,o,r,i,s,l=[-1]){const f=F;D(e);const a=e.$$={fragment:null,ctx:[],props:i,update:T,not_equal:r,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:Y(),dirty:l,skip_bound:!1,root:t.target||f.$$.root};s&&s(a.root);let p=!1;if(a.ctx=n?n(e,t.props||{},(u,h,...m)=>{const b=m.length?m[0]:h;return a.ctx&&r(a.ctx[u],a.ctx[u]=b)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](b),p&&$e(e,u)),h}):[],a.update(),p=!0,M(a.before_update),a.fragment=o?o(a.ctx):!1,t.target){if(t.hydrate){const u=Se(t.target);a.fragment&&a.fragment.l(u),u.forEach(B)}else a.fragment&&a.fragment.c();t.intro&&N(e.$$.fragment),V(e,t.target,t.anchor,t.customElement),ae()}D(f)}class Q{$destroy(){G(this,1),this.$destroy=T}$on(t,n){if(!re(n))return T;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ee=['Debris flows are common in B.C.\u2019s coastal coastal mountains because heavy rains fall on steep slopes covered in loose sediment. The Sea to Sky Highway between Horseshoe Bay and Britannia has a history of destructive debris flows. <span class="scroll-more">Scroll for more...</span>',"Heavy rains can swell streams along the mountain crest and cause sediment to slide into the rapid waters, forming debris flows.","Debris flows can pick up trees, sediment and speed as they pass through mountainside canyons.","As the debris flows exit the canyons, they form a fan that can damage roads, bridges and homes.."];function Oe(e){let t,n;const o=e[7].default,r=_e(o,e,e[6],null);return{c(){t=g("div"),r&&r.c()},m(i,s){C(i,t,s),r&&r.m(t,null),e[8](t),n=!0},p(i,[s]){r&&r.p&&(!n||s&64)&&ve(r,o,i,i[6],n?xe(o,i[6],s,null):we(i[6]),null)},i(i){n||(N(r,i),n=!0)},o(i){U(r,i),n=!1},d(i){i&&B(t),r&&r.d(i),e[8](null)}}}function He(e,t,n){let{$$slots:o={},$$scope:r}=t,{root:i=null}=t,{top:s=0}=t,{bottom:l=0}=t,{increments:f=100}=t,{value:a=void 0}=t;const p=[],u=[];let h=[],m=[],b;const A=()=>{!h.length||h.forEach(x)},d=()=>{let c=0,v=0;for(let w=0;w<p.length;w++)p[w]>c&&(c=p[w],v=w);c>0?n(1,a=v):n(1,a=void 0)},x=(c,v)=>{const w=X=>{X[0].isIntersecting;const he=X[0].intersectionRatio;p[v]=he,d()},ue=s?s*-1:0,de=l?l*-1:0,pe=`${ue}px 0px ${de}px 0px`,me={root:i,rootMargin:pe,threshold:u};m[v]&&m[v].disconnect();const W=new IntersectionObserver(w,me);W.observe(c),m[v]=W};Ee(()=>{for(let c=0;c<f+1;c++)u.push(c/f);h=b.querySelectorAll(":scope > *"),A()});function $(c){I[c?"unshift":"push"](()=>{b=c,n(0,b)})}return e.$$set=c=>{"root"in c&&n(2,i=c.root),"top"in c&&n(3,s=c.top),"bottom"in c&&n(4,l=c.bottom),"increments"in c&&n(5,f=c.increments),"value"in c&&n(1,a=c.value),"$$scope"in c&&n(6,r=c.$$scope)},e.$$.update=()=>{e.$$.dirty&24&&A()},[b,a,i,s,l,f,r,o,$]}class Le extends Q{constructor(t){super(),J(this,t,He,Oe,K,{root:2,top:3,bottom:4,increments:5,value:1})}}function te(e,t,n){const o=e.slice();return o[2]=t[n],o[4]=n,o}function ne(e){let t,n,o,r=e[2]+"",i;return{c(){t=g("li"),n=g("div"),o=g("p"),i=H(),y(n,"class","step-content svelte-13p4ff6"),y(t,"class","step svelte-13p4ff6"),Z(t,"active",e[0]===e[4])},m(s,l){C(s,t,l),_(t,n),_(n,o),o.innerHTML=r,_(t,i)},p(s,l){l&1&&Z(t,"active",s[0]===s[4])},d(s){s&&B(t)}}}function Me(e){let t,n=ee,o=[];for(let r=0;r<n.length;r+=1)o[r]=ne(te(e,n,r));return{c(){for(let r=0;r<o.length;r+=1)o[r].c();t=ke()},m(r,i){for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(r,i);C(r,t,i)},p(r,i){if(i&1){n=ee;let s;for(s=0;s<n.length;s+=1){const l=te(r,n,s);o[s]?o[s].p(l,i):(o[s]=ne(l),o[s].c(),o[s].m(t.parentNode,t))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},d(r){Be(o,r),r&&B(t)}}}function Ne(e){let t,n,o;function r(s){e[1](s)}let i={$$slots:{default:[Me]},$$scope:{ctx:e}};return e[0]!==void 0&&(i.value=e[0]),t=new Le({props:i}),I.push(()=>ce(t,"value",r)),{c(){fe(t.$$.fragment)},m(s,l){V(t,s,l),o=!0},p(s,[l]){const f={};l&33&&(f.$$scope={dirty:l,ctx:s}),!n&&l&1&&(n=!0,f.value=s[0],le(()=>n=!1)),t.$set(f)},i(s){o||(N(t.$$.fragment,s),o=!0)},o(s){U(t.$$.fragment,s),o=!1},d(s){G(t,s)}}}function Re(e,t,n){let{currentStep:o}=t;function r(i){o=i,n(0,o)}return e.$$set=i=>{"currentStep"in i&&n(0,o=i.currentStep)},[o,r]}class Te extends Q{constructor(t){super(),J(this,t,Re,Ne,K,{currentStep:0})}}function je(e){let t,n,o,r,i,s,l,f,a,p,u,h,m;function b(d){e[1](d)}let A={};return e[0]!==void 0&&(A.currentStep=e[0]),u=new Te({props:A}),I.push(()=>ce(u,"currentStep",b)),{c(){t=g("section"),n=g("header"),n.innerHTML="<h1>How landslides form in Howe Sound</h1>",o=H(),r=g("div"),i=g("iframe"),l=H(),f=g("div"),f.innerHTML='<a class="flourish-credit" href="https://public.flourish.studio/visualisation/3706064/?utm_source=embed&amp;utm_campaign=visualisation/3706064" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"/></a>',a=H(),p=g("ul"),fe(u.$$.fragment),be(i.src,s=Pe)||y(i,"src",s),y(i,"frameborder","0"),y(i,"scrolling","no"),z(i,"width","100%"),z(i,"height",qe),y(i,"title","flourish-embed"),y(r,"class","chart sticky svelte-h0tfb1"),z(f,"width","100%!"),z(f,"margin-top","4px",1),z(f,"text-align","right",1),y(t,"class","scrollyteller sticky svelte-h0tfb1"),y(p,"class","steps svelte-h0tfb1")},m(d,x){C(d,t,x),_(t,n),_(t,o),_(t,r),_(r,i),_(t,l),_(t,f),C(d,a,x),C(d,p,x),V(u,p,null),m=!0},p(d,[x]){const $={};!h&&x&1&&(h=!0,$.currentStep=d[0],le(()=>h=!1)),u.$set($)},i(d){m||(N(u.$$.fragment,d),m=!0)},o(d){U(u.$$.fragment,d),m=!1},d(d){d&&B(t),d&&B(a),d&&B(p),G(u)}}}const qe="575px",Pe="https://flo.uri.sh/story/2782064/embed";function Ke(e,t,n){let o,r;const i=function(l){r=document.querySelector("#app .chart > iframe"),r.src=r.src.replace(/#slide-.*/,"")+"#slide-"+l};function s(l){o=l,n(0,o)}return e.$$.update=()=>{e.$$.dirty&1&&(o===0||o===1||o===2||o===3)&&i(o)},[o,s]}class Ue extends Q{constructor(t){super(),J(this,t,Ke,je,K,{})}}new Ue({target:document.getElementById("app")});
