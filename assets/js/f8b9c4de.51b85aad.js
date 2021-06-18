(self.webpackChunkdocs_testgram_ai=self.webpackChunkdocs_testgram_ai||[]).push([[363],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var p=n.createContext({}),l=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=l(a),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,i(i({ref:e},c),{},{components:a})):n.createElement(h,i({ref:e},c))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1323:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i=["components"],s={},p={unversionedId:"mapping/data",id:"mapping/data",isDocsHomePage:!1,title:"Mapping",description:"Data collection is an important step in getting Testgram to be able to simulate usage on your application.",source:"@site/docs/mapping/data.md",sourceDirName:"mapping",slug:"/mapping/data",permalink:"/mapping/data",editUrl:"https://github.com/testgram/docs.testgram.ai/docs/mapping/data.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/core/architecture"},next:{title:"Data Practices",permalink:"/mapping/privacy"}},l=[{value:"Option One: Automatic Mapping (Recommended)",id:"option-one-automatic-mapping-recommended",children:[{value:"Do I have to collect data in production for this to work?",id:"do-i-have-to-collect-data-in-production-for-this-to-work",children:[]},{value:"Ignoring Certain Domains",id:"ignoring-certain-domains",children:[]}]},{value:"Option Two: Manual Mapping",id:"option-two-manual-mapping",children:[]},{value:"What now?",id:"what-now",children:[]},{value:"What data does Testgram collect?",id:"what-data-does-testgram-collect",children:[]},{value:"What does it do with this data?",id:"what-does-it-do-with-this-data",children:[]}],c={toc:l};function u(t){var e=t.components,a=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Data collection is an important step in getting Testgram to be able to simulate usage on your application.\nSimilar to Google Analytics, Testgram has it's own Javascript snippet. "),(0,r.kt)("p",null,"There are two ways to feed Testgram. The best part is that you don't have to choose. You can choose to do one or both at any time!"),(0,r.kt)("h2",{id:"option-one-automatic-mapping-recommended"},"Option One: Automatic Mapping (Recommended)"),(0,r.kt)("p",null,"Each world has a unique snippet associated with it so that we can associate the data we collect with your world.\nYou can find your world's snippet in the ",(0,r.kt)("inlineCode",{parentName:"p"},"World > Settings"),". It will look something like "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="http://app.testgram.ai/js/world/{YOUR_WORLD_ID}" type="text/javascript"><\/script>\n')),(0,r.kt)("p",null,"Directly inject the Javascript snippet as the first tag in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," of your ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," file.\nThe same snippet can be used across all environments (eg. you can use the same snippet in your local, QA, staging, or even production environments)."),(0,r.kt)("p",null,"This option is recommended because it allows Testgram to passively learn new functionality as you, your team, your company, or even your real users are using your application.\nIt's the best way to ensure that the data we collect remains fresh and your simulations and players are most effective."),(0,r.kt)("h3",{id:"do-i-have-to-collect-data-in-production-for-this-to-work"},"Do I have to collect data in production for this to work?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Absolutely not!!!")," Testgram needs data for how ",(0,r.kt)("em",{parentName:"p"},"people")," use your application. We work great just collecting data from your dev team, QA team, or anyone else\nin pre-prod environments."),(0,r.kt)("h3",{id:"ignoring-certain-domains"},"Ignoring Certain Domains"),(0,r.kt)("p",null,"If you want to collect data from all environments ",(0,r.kt)("em",{parentName:"p"},"except")," a certain environment, you can ignore certain domains.\nYou can set this up through your ",(0,r.kt)("inlineCode",{parentName:"p"},"World > Settings")," page."),(0,r.kt)("h2",{id:"option-two-manual-mapping"},"Option Two: Manual Mapping"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In fact, the manual option is actually just a utility wrapper around the Javascript snippet to make the process of getting started easier.\nWhen you run ",(0,r.kt)("inlineCode",{parentName:"p"},"tg map"),", we just spin up a browser with the Javascript snippet pre-injected. This is why you can you can always use either option, or both!"))),(0,r.kt)("p",null,"If you don't want to inject the Javascript snippet directly into your codebase, you can easily get your feet wet with Testgram using the manual mapping."),(0,r.kt)("p",null,"Ensure you have the ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/install"},"cli installed on your local machine"),". "),(0,r.kt)("p",null,"Now run ",(0,r.kt)("inlineCode",{parentName:"p"},"tg map")," in your command line to spin up a browser with the snippet pre-injected."),(0,r.kt)("p",null,"We recommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"tg map")," as a way to seed Testgram with information about your application.\nTry to do short sprints no longer than a few minutes showing Testgram how to use certain parts of the application you intent to test."),(0,r.kt)("h2",{id:"what-now"},"What now?"),(0,r.kt)("p",null,"Once you've collected some data, it's time to design your first simulation by creating a ",(0,r.kt)("a",{parentName:"p",href:"/players/player"},"Player"),"."),(0,r.kt)("h2",{id:"what-data-does-testgram-collect"},"What data does Testgram collect?"),(0,r.kt)("p",null,"As we were building the data infrastructure at Testgram, we have taken every conceiveable measure to make sure that ",(0,r.kt)("strong",{parentName:"p"},"we don't collect ",(0,r.kt)("em",{parentName:"strong"},"any")," end user data"),".\nAs an AI product, we care about understanding aggregate patterns of behavior, not the behavior or infromation of any specific user.\nIf you want to find out more, ",(0,r.kt)("a",{parentName:"p",href:"privacy"},"check out our page on what data we collect and how we store it"),"."),(0,r.kt)("h2",{id:"what-does-it-do-with-this-data"},"What does it do with this data?"),(0,r.kt)("p",null,"AI systems are always data hungry, and Testgram is training these systems to understand, interact with, and test your application for you.\nWe use this data to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understand what your application looks like (eg. understand how your application is laid out, which pages/URLs exist, which APIs exist, and how they relate)"),(0,r.kt)("li",{parentName:"ul"},"Learn to replicate user behavior (eg. how a typical in your application would edit their profile, login, or generate a report)"),(0,r.kt)("li",{parentName:"ul"},"Adapt to your changing application (eg. learn how to interact with new or changed features)"),(0,r.kt)("li",{parentName:"ul"},"Help you make better and more complete Players (eg. autocomplete goals, suggested rules, etc.)"),(0,r.kt)("li",{parentName:"ul"},"... and much more!")),(0,r.kt)("p",null,"In short, the data we collect keeps our system alive."))}u.isMDXComponent=!0}}]);