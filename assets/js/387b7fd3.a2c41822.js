(self.webpackChunkdocs_testgram_ai=self.webpackChunkdocs_testgram_ai||[]).push([[171],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3022:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],i={},l={unversionedId:"event/event",id:"event/event",isDocsHomePage:!1,title:"Introduction to Events",description:"Events are issues that occur while a Player is running a simulation.",source:"@site/docs/event/event.md",sourceDirName:"event",slug:"/event/event",permalink:"/event/event",version:"current",frontMatter:{}},u=[{value:"Event API",id:"event-api",children:[]},{value:"Testgram finds Events, not Assertions",id:"testgram-finds-events-not-assertions",children:[{value:"There are no false positives.",id:"there-are-no-false-positives",children:[]},{value:"Testgram&#39;s AI can easily adapt to new features, flows, and data.",id:"testgrams-ai-can-easily-adapt-to-new-features-flows-and-data",children:[]},{value:"We often find regressions you didn&#39;t know you were looking for.",id:"we-often-find-regressions-you-didnt-know-you-were-looking-for",children:[]},{value:"Collecting debug information is easier.",id:"collecting-debug-information-is-easier",children:[]}]},{value:"Architecture",id:"architecture",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Events are issues that occur while a ",(0,o.kt)("a",{parentName:"p",href:"/player/player"},"Player")," is running a simulation."),(0,o.kt)("p",null,"It's easiest to compare these to the types of events that you would send a tool like Sentry, Datadog, or Splunk."),(0,o.kt)("p",null,"The types of Events are highly configurable using: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Listeners (Plugins): "),(0,o.kt)("li",{parentName:"ul"},"Custom Event API:")),(0,o.kt)("h2",{id:"event-api"},"Event API"),(0,o.kt)("p",null,"The events that Testgram listens for can be customized using our "),(0,o.kt)("p",null,"Testgram listens for a few basic events out of the box, but this is one of the most customizable\nfeatures in Testgram! You can add event listeners anywhere you want."),(0,o.kt)("p",null,"By default, Testgram listens for Javascript Errors, Unhandled Rejections, and 404/5xx status codes."),(0,o.kt)("p",null,"You can customize which event listeners"),(0,o.kt)("p",null,"Based on your preference, we have many more pre-built listeners you can enable"),(0,o.kt)("p",null,"There are many more you can enable based on what you want Testgram looking for. These include but are not limited to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Broken link detection"),(0,o.kt)("li",{parentName:"ul"},"Text Overflow (Text flowing outside of its specified bounding box)"),(0,o.kt)("li",{parentName:"ul"})),(0,o.kt)("p",null,"You can add your own custom event listeners"),(0,o.kt)("p",null,"As a Player is running a Simulation, it is looking for specific ",(0,o.kt)("strong",{parentName:"p"},"Events"),"."),(0,o.kt)("h2",{id:"testgram-finds-events-not-assertions"},"Testgram finds Events, not Assertions"),(0,o.kt)("p",null,"Testgram takes a monitoring, event driven approach to finding issues in your application.\nThis gives us a couple of architectural advantages that enable some of the best things in Testgram. "),(0,o.kt)("h3",{id:"there-are-no-false-positives"},"There are no false positives."),(0,o.kt)("p",null,"Another way to say this is that Testgram finds issues that happened (as opposed to assertions, where it tells you what was supposed to happen, but didn't).\nWhen Testgram captures an event, we can be sure that the event occurred."),(0,o.kt)("h3",{id:"testgrams-ai-can-easily-adapt-to-new-features-flows-and-data"},"Testgram's AI can easily adapt to new features, flows, and data."),(0,o.kt)("p",null,"Assertions are fundamnetally brittle. They try to induce a specific state in the application, and assert over some property in that state.\nWhile assertions are useful in some tests, we often just want to find what ",(0,o.kt)("em",{parentName:"p"},"really is breaking")," in our applications."),(0,o.kt)("p",null,"On the other hand, Players do not (and will not ever) assert over a specific state.\nThis is because a single Player can run tens, or even hundreds of individual tests to test different flows over your application driven by the data we collect.\nThis also means that when your application changes, new features are introduced, or the underlying dataset changes, our tests don't break!"),(0,o.kt)("h3",{id:"we-often-find-regressions-you-didnt-know-you-were-looking-for"},"We often find regressions you didn't know you were looking for."),(0,o.kt)("p",null,"The most painful regressions often creep up on us. A button stops rendering correctly on WebKit/Safari, our API response time gets unacceptably slow,\na seemingly innocous Javascript error shows up, etc, and our automated tests almost never catch them because often, they aren't even looking."),(0,o.kt)("p",null,"Testgram constantly watches for the events specify, and always keep a look out for them in every simulation you run. The moment they pop up, you're the first to know."),(0,o.kt)("h3",{id:"collecting-debug-information-is-easier"},"Collecting debug information is easier."),(0,o.kt)("p",null,"An event is captured with all of it's contextual metadata along with a live step-by-step browser replay of the steps that led up to it. This makes reproducing\nan event much easier."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"In a Player runtime, Testgram exposes the ",(0,o.kt)("inlineCode",{parentName:"p"},"testgram.event({...})")," function in the browser's context."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function x(): string {\n    \n}\n")))}p.isMDXComponent=!0}}]);