(self.webpackChunkdocs_testgram_ai=self.webpackChunkdocs_testgram_ai||[]).push([[671],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},426:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],s={id:"intro",slug:"/"},u={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"\ud83d\udc4b Welcome to Testgram",description:"Testgram, at its core is an AI-enabled web-testing framework that helps you build and deploy scalable simulations in pre-production environments.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",version:"current",frontMatter:{id:"intro",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Installing Testgram",permalink:"/getting-started/install"}},l=[{value:"Who uses Testgram?",id:"who-uses-testgram",children:[]},{value:"Will Testgram work for me?",id:"will-testgram-work-for-me",children:[]},{value:"Where does Testgram run?",id:"where-does-testgram-run",children:[]},{value:"Feedback (or come join us)!",id:"feedback-or-come-join-us",children:[]}],c={toc:l};function p(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Testgram, at its core is an AI-enabled web-testing framework that helps you ",(0,a.kt)("strong",{parentName:"p"},"build and deploy scalable simulations")," in pre-production environments.\nThe goal of these simulations is to help you ",(0,a.kt)("strong",{parentName:"p"},"quickly")," test your application in all the ways that it\u2019s really used by users\n",(0,a.kt)("strong",{parentName:"p"},"without")," having to author, manage, or maintain specific test cases.\nIt\u2019s built to address the key pain points we noticed developers have around web testing. "),(0,a.kt)("p",null,"Imagine the tools we use to monitor events and issues in production: Sentry, DataDog, Splunk, etc.\nTestgram helps you find, capture, and debug these types of events before they ever reach production."),(0,a.kt)("p",null,"If you are new here, you should check out our:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"getting-started/install"},"Installation Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"core/concepts"},"Core Concepts"))),(0,a.kt)("h2",{id:"who-uses-testgram"},"Who uses Testgram?"),(0,a.kt)("p",null,"Our users are typically developers or QA engineers building web applications using modern JavaScript frameworks."),(0,a.kt)("h2",{id:"will-testgram-work-for-me"},"Will Testgram work for me?"),(0,a.kt)("p",null,"Testgram learns from user interactions on the browser and simulates on the browser too.\nIf your application runs on the browser, there's a good chance Testgram will work for you.\nTestgram supports 30+ frameworks including Angular, React, Vue, Next.js, Angular.js, JQuery and Ember. "),(0,a.kt)("h2",{id:"where-does-testgram-run"},"Where does Testgram run?"),(0,a.kt)("p",null,"A fundamental goal of testing is early detection.\nTestgram is built to run early and often in your workflow: starting on your local machine, CI pipelines,\nintermediate QA/staging environments, or even production."),(0,a.kt)("h2",{id:"feedback-or-come-join-us"},"Feedback (or come join us)!"),(0,a.kt)("p",null,"We're making Testgram better every day, and we \ud83d\udc99 hearing your feedback! "),(0,a.kt)("p",null,"If you'd like to find out more about where we're headed, have some ideas, or just want to grab a drink with us\nplease reach out at ",(0,a.kt)("inlineCode",{parentName:"p"},"hello@testgram.ai"),"."),(0,a.kt)("p",null,"If you have a bunch of feedback and want to help make it a reality, come join our team!\nWe're a group of people who love building and creating world-class tools developers love."),(0,a.kt)("p",null,"-- Made with love by the ",(0,a.kt)("img",{src:r(3852).Z,title:"Space Dinosaur"})," at Testgram"))}p.isMDXComponent=!0},3852:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMyAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjE0NTEgNS41OTM1NFYzLjg3OTI1VjIuMTY0OTdIOS40MzA4VjAuNDUwNjg0SDcuNzE2NTJWMi4xNjQ5N0g2LjAwMjIzVjAuNDUwNjg0SDQuMjg3OTVWMi4xNjQ5N0gyLjU3MzY2VjMuODc5MjVWNS41OTM1NEgwLjg1OTM3NVY3LjMwNzgzVjkuMDIyMTFIMi41NzM2NlY3LjMwNzgzSDQuMjg3OTVWOS4wMjIxMUg2LjAwMjIzVjcuMzA3ODNINy43MTY1MlY5LjAyMjExSDkuNDMwOFY3LjMwNzgzSDExLjE0NTFWOS4wMjIxMUgxMi44NTk0VjcuMzA3ODNWNS41OTM1NEgxMS4xNDUxWk00LjI4Nzk1IDUuNTkzNTRWMy44NzkyNUg2LjAwMjIzVjUuNTkzNTRINC4yODc5NVpNNy43MTY1MiA1LjU5MzU0VjMuODc5MjVIOS40MzA4VjUuNTkzNTRINy43MTY1MloiIGZpbGw9IiM1MEFFRkYiLz4KPC9zdmc+Cg=="}}]);