(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var o=t(3),r=t(7),i=(t(0),t(140)),a={title:"Notebook Implementation"},s={unversionedId:"designDocs/notebook-implementation",id:"designDocs/notebook-implementation",isDocsHomePage:!1,title:"Notebook Implementation",description:"\x3c!--",source:"@site/docs/designDocs/notebook-implementation.md",slug:"/designDocs/notebook-implementation",permalink:"/docs/designDocs/notebook-implementation",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/designDocs/notebook-implementation.md",version:"current",sidebar:"docs",previous:{title:"Experiment Implementation",permalink:"/docs/designDocs/experiment-implementation"},next:{title:"Storage Implementation",permalink:"/docs/designDocs/storage-implementation"}},c=[{value:"Overview",id:"overview",children:[{value:"User&#39;s interaction",id:"users-interaction",children:[]},{value:"Admin&#39;s interaction",id:"admins-interaction",children:[]}]},{value:"Relationship with other components",id:"relationship-with-other-components",children:[{value:"Metadata store",id:"metadata-store",children:[]},{value:"Submarine Server",id:"submarine-server",children:[]},{value:"Resource manager",id:"resource-manager",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Submarine SDK (For Experiment, etc.)",id:"submarine-sdk-for-experiment-etc",children:[]},{value:"Security",id:"security",children:[]}]}],l={toc:c};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("h3",{id:"users-interaction"},"User's interaction"),Object(i.b)("p",null,"Users can start N (N >= 0) number of Notebook sessions, a notebook session is a running notebook instance."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Notebook session can be launched by Submarine UI (P0), and Submarine CLI (P2). "),Object(i.b)("li",{parentName:"ul"},"When launch notebook session, users can choose T-shirt size of notebook session (how much mem/cpu/gpu resources, or resource profile such as small, medium, large, etc.). (P0)"),Object(i.b)("li",{parentName:"ul"},"And user can choose an environment for notebook. More details please refer to ",Object(i.b)("a",{parentName:"li",href:"/docs/designDocs/environments-implementation"},"environment implementation")," (P0)"),Object(i.b)("li",{parentName:"ul"},"When start a notebook, user can choose what code to be initialized, similar to experiment. (P1)"),Object(i.b)("li",{parentName:"ul"},"Optionally, users can choose to attach a persistent volume to a notebook session. (P2)")),Object(i.b)("p",null,"Users can get a list of notebook sessions belongs to themselves, and connect to notebook session. "),Object(i.b)("p",null,"User can choose to terminate a running notebook session."),Object(i.b)("h3",{id:"admins-interaction"},"Admin's interaction"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"How many concurrent notebook sessions can be launched by each user is determined by resource quota limits of each user, and maximum concurrent notebook sessions can be launched by each user. (P2)")),Object(i.b)("h2",{id:"relationship-with-other-components"},"Relationship with other components"),Object(i.b)("h3",{id:"metadata-store"},"Metadata store"),Object(i.b)("p",null,"Running notebook sessions' metadata need persistented in Submarine's metadata store (Database)."),Object(i.b)("h3",{id:"submarine-server"},"Submarine Server"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\n  +--------------+  +--------Submarine Server--------------------+\n  |Submarine UI  |  | +-------------------+                      |\n  |              |+---\x3e  Submarine        |                      |\n  |  Notebook    |  | |  Notebook REST API|                      |\n  +--------------+  | |                   |                      |\n                    | +--------+----------+     +--------------+ |\n                    |          |             +->|Metastore     | |\n                    | +--------v----------+  |  |DB            | |\n                    | | Submarine         +--+  +--------------+ |\n                    | | Notebook Mgr      |                      |\n                    | |                   |                      |\n                    | |                   |                      |\n                    | +--------+----------+                      |\n                    |          |                                 |\n                    +----------|---------------------------------+\n                               |\n                +--------------+\n       +--------v---------+\n       | Notebook Session |\n       |                  |\n       |   instance       |\n       |                  |\n       +------------------+\n")),Object(i.b)("p",null,"Once user use Submarine UI to launch a notebook session, Submarine notebook manager inside Submarine Server will persistent notebook session's metadata, and launch a new notebook session instance. "),Object(i.b)("h3",{id:"resource-manager"},"Resource manager"),Object(i.b)("p",null,"When using K8s as resource manager, Submarine notebook session will run as a new POD."),Object(i.b)("h3",{id:"storage"},"Storage"),Object(i.b)("p",null,"There're several different types of storage requirements for Submarine notebook. "),Object(i.b)("p",null,"For code, environment, etc, storage, please refer to ",Object(i.b)("a",{parentName:"p",href:"/docs/designDocs/storage-implementation"},"storage implementation"),', check "Localization of experiment/notebook/model-serving code".'),Object(i.b)("p",null,"When there're needs to attach volume (such as user's home folder) to Submarine notebook session, please check ",Object(i.b)("a",{parentName:"p",href:"/docs/designDocs/storage-implementation"},"storage implementation"),', check "Attachable volume".'),Object(i.b)("h3",{id:"environment"},"Environment"),Object(i.b)("p",null,"Submarine notebook's environment should be used to run experiment, model serving, etc. Please check ",Object(i.b)("a",{parentName:"p",href:"/docs/designDocs/environments-implementation"},"environment implementation"),'. (More specific to notebook, please check "How to implement to make user can easily use Submarine environments")'),Object(i.b)("p",null,"Please note that notebook's Environment should include right version of notebook libraries, and admin should follow the guidance to build correct Docker image, Conda libraries to correctly run Notebook."),Object(i.b)("h3",{id:"submarine-sdk-for-experiment-etc"},"Submarine SDK (For Experiment, etc.)"),Object(i.b)("p",null,"Users can run new experiment, access metrics information, or do model operations using Submarine SDK. "),Object(i.b)("p",null,"Submarine SDK is a Python library which can talk to Submarine Server which need Submarine Server's endpoint as well as user credentials."),Object(i.b)("p",null,"To ensure better experience, we recommend always install proper version of Submarine SDK from environment which users can use Submarine SDK directly from commandline. (We as Submarine community can provide sample Dockerfile or Conda environment which have correct base libraries installed for Submarine SDK)."),Object(i.b)("p",null,"Submarine Server IP will be configured automatically by Submarine Server, and added as an envar when Submarine notebook session got launched."),Object(i.b)("h3",{id:"security"},"Security"),Object(i.b)("p",null,"Please refer to ",Object(i.b)("a",{parentName:"p",href:"/docs/designDocs/wip-designs/security-implementation"},"Security Implementation")),Object(i.b)("p",null,"Once user accessed to a running notebook session, the user can also access resources of the notebook, capability of submit new experiment, and access data. This is also very dangerous so we have to protect it. "),Object(i.b)("p",null,"A simple solution is to use token-based authentication ",Object(i.b)("a",{parentName:"p",href:"https://jupyter-notebook.readthedocs.io/en/stable/security.html"},"https://jupyter-notebook.readthedocs.io/en/stable/security.html"),". A more common way is to use solutions like KNOX to support SSO. "),Object(i.b)("p",null,"We need expand this section to more details. (TODO)."))}b.isMDXComponent=!0},140:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(t),p=o,d=u["".concat(a,".").concat(p)]||u[p]||m[p]||i;return t?r.a.createElement(d,s(s({ref:n},l),{},{components:t})):r.a.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);