(function(){"use strict";var e={826:function(e,t,n){n(454);var o=n(751),a=n(641);const r={class:"container medium-content py-2"},i={class:"d-flex justify-content-between align-items-center"},c={class:"list-group list-group-horizontal list-unstyled"},s={class:"mx-2 my-0"},l=(0,a.Lk)("div",{class:"nav-buffer"},null,-1);function u(e,t){const n=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("nav",null,[(0,a.Lk)("div",r,[(0,a.Lk)("div",i,[(0,a.bF)(n,{class:"logo",to:"/"},{default:(0,a.k6)((()=>[(0,a.eW)("STEFAN AUVACHE")])),_:1}),(0,a.Lk)("div",null,[(0,a.Lk)("ul",c,[(0,a.Lk)("li",s,[(0,a.bF)(n,{to:"/articles"},{default:(0,a.k6)((()=>[(0,a.eW)("Articles")])),_:1})])])])])])]),l],64)}var d=n(262);const m={},f=(0,d.A)(m,[["render",u]]);var h=f,p=n(33),b=n(953);const v=(0,b.Kh)({year:2024});var g=n(31);const y={class:"bg-gray text-center py-4"},w={class:"container"},k={class:"row"},A={class:"m-0 tagline"};var L={__name:"Footer",setup(e){return(e,t)=>((0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(g.A),(0,a.Lk)("footer",null,[(0,a.Lk)("section",y,[(0,a.Lk)("div",w,[(0,a.Lk)("div",k,[(0,a.Lk)("p",A,"Property of Stefan Auvache Bradley, "+(0,p.v_)((0,b.R1)(v).year),1)])])])])],64))}};const T=L;var E=T;const x={id:"mainContent",class:"loading"};var F={__name:"App",setup(e){return(e,t)=>{const n=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(h),(0,a.Lk)("div",x,[(0,a.bF)(n)]),(0,a.bF)(E)],64)}}};const j=F;var C=j,O=n(220);const M=[{path:"/",name:"Home",component:()=>n.e(308).then(n.bind(n,308)),meta:{title:"Stefan Auvache",canonical:"https://www.stefanauvache.com",metaTags:[{name:"description",content:""},{name:"keywords",content:""},{name:"robots",content:"index, follow"}]}},{path:"/:catchAll(.*)*",name:"PageNotFound",component:()=>n.e(555).then(n.bind(n,555)),meta:{title:"Requested Page Not Found",metaTags:[{name:"description",content:"Requested Page Not Found on"}]}},{path:"/articles",name:"Articles",component:()=>n.e(505).then(n.bind(n,505)),meta:{title:"About Me",canonical:"https://www.stefanauvache.com/articles",metaTags:[{name:"description",content:""},{name:"keywords",content:""},{name:"robots",content:"index, follow"}]}},{path:"/music",name:"Music",component:()=>n.e(742).then(n.bind(n,742)),meta:{title:"About Me",canonical:"https://www.stefanauvache.com/music",metaTags:[{name:"description",content:""},{name:"keywords",content:""},{name:"robots",content:"index, follow"}]}},{path:"/articles/better-business-writing",name:"BetterBusinessWriting",component:()=>n.e(932).then(n.bind(n,932)),meta:{title:"Better Business Writing",canonical:"https://www.stefanauvache.com/articles/better-business-writing",metaTags:[{name:"description",content:""},{name:"keywords",content:""},{name:"robots",content:"index, follow"}]}},{path:"/articles/books-that-have-changed-my-life",name:"BooksThatHaveChangedMyLife",component:()=>n.e(939).then(n.bind(n,939)),meta:{title:"Books That Have Changed My Life",canonical:"https://www.stefanauvache.com/articles/books-that-have-changed-my-life",metaTags:[{name:"description",content:""},{name:"keywords",content:""},{name:"robots",content:"index, follow"}]}},{path:"/articles/mastery",name:"Mastery",component:()=>n.e(293).then(n.bind(n,293)),meta:{title:"Mastery",canonical:"https://www.stefanauvache.com/articles/mastery",metaTags:[{name:"description",content:""},{name:"keywords",content:""},{name:"robots",content:"index, follow"}]}}],S=(0,O.aE)({history:(0,O.LA)("/"),scrollBehavior(e,t,n){return e.hash?{el:e.hash,top:80}:n||{top:0}},routes:M});S.beforeEach(((e,t,n)=>{const o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),a=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),r=e.matched.slice().reverse().find((e=>e.meta&&e.meta.canonical)),i=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(o?document.title=o.meta.title:i&&(document.title=i.meta.title),r){const e=document.createElement("link");e.setAttribute("rel","canonical"),e.setAttribute("href",r.meta.canonical),document.head.append(e)}if(Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!a)return n();a.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((n=>{t.setAttribute(n,e[n])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),n();let c=document.querySelectorAll("[id$=Modal]");for(let s=0;s<c.length;s++){let e=c[s].id.replace("Modal","");closeModal(e)}}));var P=S;(0,o.Ef)(C).use(P).mount("#app")},31:function(e,t,n){n.d(t,{A:function(){return m}});var o=n(641);const a={class:"py-3 bg-dark-blue"},r={class:"container medium-content text-center"},i=(0,o.Lk)("p",{class:"white mb-0"},[(0,o.eW)("Subscribe to my "),(0,o.Lk)("span",{class:"fw-bold fst-italic"},"Food 4 Thought"),(0,o.eW)(" news letter for recommendations and lessons from technology, music, books, and life.")],-1),c={class:"subscribe d-flex flex-column flex-sm-row justify-content-center align-items-center"};function s(e,t){return(0,o.uX)(),(0,o.CE)("section",a,[(0,o.Lk)("div",r,[(0,o.Lk)("div",null,[i,(0,o.Lk)("div",null,[(0,o.Lk)("div",c,[((0,o.uX)(),(0,o.Wv)((0,o.$y)("script"),{async:"","data-uid":"0396ab84d5",src:"https://stefan-bradley.ck.page/0396ab84d5/index.js"}))])])])])])}var l=n(262);const u={},d=(0,l.A)(u,[["render",s]]);var m=d}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],r=e[u][2];for(var c=!0,s=0;s<o.length;s++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(c=!1,r<i&&(i=r));if(c){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,a,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{293:"0b9ba035",308:"bf2e89f4",505:"85ffc947",555:"e0a96afb",742:"f83b35b4",932:"9226ab41",939:"c036b6c9"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mhn:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var c,s;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+r),c.src=o),e[o]=[a];var m=function(t,n){c.onerror=c.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),c=new Error,s=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,a[1](c)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],c=o[1],s=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(s)var u=s(n)}for(t&&t(o);l<i.length;l++)r=i[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkmhn"]=self["webpackChunkmhn"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(826)}));o=n.O(o)})();
//# sourceMappingURL=app.b7d5f445.js.map