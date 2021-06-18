(self.webpackChunkdocs_testgram_ai=self.webpackChunkdocs_testgram_ai||[]).push([[692],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9776:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],l={},s={unversionedId:"players/goals",id:"players/goals",isDocsHomePage:!1,title:"Goals",description:"Goals tell a Player what to test.",source:"@site/docs/players/goals.md",sourceDirName:"players",slug:"/players/goals",permalink:"/players/goals",editUrl:"https://github.com/testgram/docs.testgram.ai/docs/players/goals.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to Players",permalink:"/players/player"},next:{title:"Rules",permalink:"/players/rules"}},c=[{value:"Creating Goals",id:"creating-goals",children:[{value:"API Endpoint Goals",id:"api-endpoint-goals",children:[]},{value:"URL Goals",id:"url-goals",children:[]}]},{value:"Checkout Cindy&#39;s Goals (Example)",id:"checkout-cindys-goals-example",children:[]}],p={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Goals tell a Player what to test.\nThey can be specified using glob patterns to select either API endpoints or Page URLs in your application."),(0,o.kt)("h2",{id:"creating-goals"},"Creating Goals"),(0,o.kt)("p",null,"When a goal is created on a Player,\nTestgram identifies each of the behaviorally unique ways those goals are achieved given the data we've collected.\nWhen that Player is run, it tries to reproduce each of the different ways that those goals can be achieved."),(0,o.kt)("p",null,"There are two types of goals a player can have. Goals can be specified as glob patterns.\nThe easiest way to get started is to enter ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," and let the IDE-style experience guide you to selecting. "),(0,o.kt)("p",null,"As you enter your goals, we'll begin dynamically displaying the suggested rules we think will be necessary to fill underneath. ",(0,o.kt)("a",{parentName:"p",href:"rules"},"Don't worry, that's next.")),(0,o.kt)("h3",{id:"api-endpoint-goals"},"API Endpoint Goals"),(0,o.kt)("p",null,"API endpoint goals tell the Player to test each of the ways in which that particular endpoint is called.\nFor example, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"/validate/user")," endpoint is called when you login and when you enter the settings page, setting the API\ngoal as ",(0,o.kt)("inlineCode",{parentName:"p"},"/validate/user")," would tell the Player to test all of the ways that the endpoint is called on both the login page and the settings page."),(0,o.kt)("p",null,"API goals are thus are highly directed. It tells the Player you want to simulate the journeys that are correlated with a specific action."),(0,o.kt)("h3",{id:"url-goals"},"URL Goals"),(0,o.kt)("p",null,"URL goals tell the Player to test each of the ways in which that particular page is used.\nTestgram first to find each of the unique interactable elements ",(0,o.kt)("em",{parentName:"p"},"and")," APIs that correlate with a page.\nThese elements and APIs then become anchor points for the Player to find meaningful journeys around that page."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Goals map to multiple journeys")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Goals on a Player can map to multiple journeys in the application. This means that in just a few bullets, you can\ntell a Player to test tens, or even hundreds of different journeys."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"If the autocomplete doesn't work...")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the autocomplete doesn't work, it probably means we haven't collected any data for that area yet.\nYou can still create goal entries for areas we haven't learned yet. "))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Anti-pattern: Setting ",(0,o.kt)("inlineCode",{parentName:"h5"},"/**")," as a goal")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Avoid setting your goals too broad.\nMaking a single Player test every API end-point or URL will make it difficult to parallelize, debug, and interpret your simulation results."))),(0,o.kt)("h2",{id:"checkout-cindys-goals-example"},"Checkout Cindy's Goals (Example)"),(0,o.kt)("p",null,"These goals for Cindy can be expressed on the Player page as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[URL]"," /#/cart/checkout"),(0,o.kt)("li",{parentName:"ul"},"[API]"," /validate/address")),(0,o.kt)("p",null,"This expresses Cindy's intent to test all of the different ways that users would interact with the checkout page,\nwith an explicit emphasis on the journeys around entering an address that would call the ",(0,o.kt)("inlineCode",{parentName:"p"},"/validate/address")," endpoint,"))}d.isMDXComponent=!0}}]);