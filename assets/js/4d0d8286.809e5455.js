"use strict";(self.webpackChunkbf_canaly_blog=self.webpackChunkbf_canaly_blog||[]).push([[626],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),y=o,m=p["".concat(l,".").concat(y)]||p[y]||f[y]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="Overview",s={unversionedId:"analysis/overview",id:"analysis/overview",title:"Overview",description:"CAJ files are proprietary file formats, so the only way to parse them is to reverse engineer them. (Well you can guess if you're lucky, but that's not the case here.)",source:"@site/docs/analysis/overview.md",sourceDirName:"analysis",slug:"/analysis/overview",permalink:"/canaly/docs/analysis/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"analysisSidebar",next:{title:"Versions of libreaderex",permalink:"/canaly/docs/analysis/versions"}},l={},c=[{value:"What is CAJ?",id:"what-is-caj",level:2},{value:"How to reverse engineer CAJ?",id:"how-to-reverse-engineer-caj",level:2}],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"CAJ files are proprietary file formats, so the only way to parse them is to reverse engineer them. (Well you can guess if you're lucky, but that's not the case here.)\nThe lucky thing is that with the help of modern technologies, we can do this a lot easier than before."),(0,o.kt)("h2",{id:"what-is-caj"},"What is CAJ?"),(0,o.kt)("p",null,"CAJ, or Chinese Academic Journal, is widely used to store articles, books, and other documents.\nFirst, a clarification: CAJ is not a file format, but a set of file formats, the most common of which is CAJ."),(0,o.kt)("h2",{id:"how-to-reverse-engineer-caj"},"How to reverse engineer CAJ?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Reverse engineer the file format itself. "),(0,o.kt)("li",{parentName:"ol"},"Analyze the ",(0,o.kt)("inlineCode",{parentName:"li"},"libreaderex"),", a proprietary library used to parse CAJ files.\nMost information about CAJ is based on the analysis of ",(0,o.kt)("inlineCode",{parentName:"li"},"libreaderex"),".\nIn these posts, you'll see how we do this.")))}f.isMDXComponent=!0}}]);