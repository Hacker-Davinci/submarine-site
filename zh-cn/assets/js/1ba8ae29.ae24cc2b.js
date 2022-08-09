"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5618],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return t?o.createElement(b,a(a({ref:n},u),{},{components:t})):o.createElement(b,a({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9101:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],s={title:"Notebook Implementation"},l=void 0,c={unversionedId:"designDocs/notebook-implementation",id:"version-0.7.0/designDocs/notebook-implementation",title:"Notebook Implementation",description:"\x3c!--",source:"@site/versioned_docs/version-0.7.0/designDocs/notebook-implementation.md",sourceDirName:"designDocs",slug:"/designDocs/notebook-implementation",permalink:"/zh-cn/docs/designDocs/notebook-implementation",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.7.0/designDocs/notebook-implementation.md",tags:[],version:"0.7.0",frontMatter:{title:"Notebook Implementation"},sidebar:"docs",previous:{title:"Experiment Implementation",permalink:"/zh-cn/docs/designDocs/experiment-implementation"},next:{title:"Storage Implementation",permalink:"/zh-cn/docs/designDocs/storage-implementation"}},u={},m=[{value:"Overview",id:"overview",level:2},{value:"User&#39;s interaction",id:"users-interaction",level:3},{value:"Admin&#39;s interaction",id:"admins-interaction",level:3},{value:"Relationship with other components",id:"relationship-with-other-components",level:2},{value:"Metadata store",id:"metadata-store",level:3},{value:"Submarine Server",id:"submarine-server",level:3},{value:"Resource manager",id:"resource-manager",level:3},{value:"Storage",id:"storage",level:3},{value:"Environment",id:"environment",level:3},{value:"Submarine SDK (For Experiment, etc.)",id:"submarine-sdk-for-experiment-etc",level:3},{value:"Security",id:"security",level:3}],p={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("h3",{id:"users-interaction"},"User's interaction"),(0,i.kt)("p",null,"Users can start N (N >= 0) number of Notebook sessions, a notebook session is a running notebook instance."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Notebook session can be launched by Submarine UI (P0), and Submarine CLI (P2). "),(0,i.kt)("li",{parentName:"ul"},"When launch notebook session, users can choose T-shirt size of notebook session (how much mem/cpu/gpu resources, or resource profile such as small, medium, large, etc.). (P0)"),(0,i.kt)("li",{parentName:"ul"},"And user can choose an environment for notebook. More details please refer to ",(0,i.kt)("a",{parentName:"li",href:"/zh-cn/docs/designDocs/environments-implementation"},"environment implementation")," (P0)"),(0,i.kt)("li",{parentName:"ul"},"When start a notebook, user can choose what code to be initialized, similar to experiment. (P1)"),(0,i.kt)("li",{parentName:"ul"},"Optionally, users can choose to attach a persistent volume to a notebook session. (P2)")),(0,i.kt)("p",null,"Users can get a list of notebook sessions belongs to themselves, and connect to notebook session. "),(0,i.kt)("p",null,"User can choose to terminate a running notebook session."),(0,i.kt)("h3",{id:"admins-interaction"},"Admin's interaction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How many concurrent notebook sessions can be launched by each user is determined by resource quota limits of each user, and maximum concurrent notebook sessions can be launched by each user. (P2)")),(0,i.kt)("h2",{id:"relationship-with-other-components"},"Relationship with other components"),(0,i.kt)("h3",{id:"metadata-store"},"Metadata store"),(0,i.kt)("p",null,"Running notebook sessions' metadata need persistented in Submarine's metadata store (Database)."),(0,i.kt)("h3",{id:"submarine-server"},"Submarine Server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n  +--------------+  +--------Submarine Server--------------------+\n  |Submarine UI  |  | +-------------------+                      |\n  |              |+---\x3e  Submarine        |                      |\n  |  Notebook    |  | |  Notebook REST API|                      |\n  +--------------+  | |                   |                      |\n                    | +--------+----------+     +--------------+ |\n                    |          |             +->|Metastore     | |\n                    | +--------v----------+  |  |DB            | |\n                    | | Submarine         +--+  +--------------+ |\n                    | | Notebook Mgr      |                      |\n                    | |                   |                      |\n                    | |                   |                      |\n                    | +--------+----------+                      |\n                    |          |                                 |\n                    +----------|---------------------------------+\n                               |\n                +--------------+\n       +--------v---------+\n       | Notebook Session |\n       |                  |\n       |   instance       |\n       |                  |\n       +------------------+\n")),(0,i.kt)("p",null,"Once user use Submarine UI to launch a notebook session, Submarine notebook manager inside Submarine Server will persistent notebook session's metadata, and launch a new notebook session instance. "),(0,i.kt)("h3",{id:"resource-manager"},"Resource manager"),(0,i.kt)("p",null,"When using K8s as resource manager, Submarine notebook session will run as a new POD."),(0,i.kt)("h3",{id:"storage"},"Storage"),(0,i.kt)("p",null,"There're several different types of storage requirements for Submarine notebook. "),(0,i.kt)("p",null,"For code, environment, etc, storage, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/docs/designDocs/storage-implementation"},"storage implementation"),', check "Localization of experiment/notebook/model-serving code".'),(0,i.kt)("p",null,"When there're needs to attach volume (such as user's home folder) to Submarine notebook session, please check ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/docs/designDocs/storage-implementation"},"storage implementation"),', check "Attachable volume".'),(0,i.kt)("h3",{id:"environment"},"Environment"),(0,i.kt)("p",null,"Submarine notebook's environment should be used to run experiment, model serving, etc. Please check ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/docs/designDocs/environments-implementation"},"environment implementation"),'. (More specific to notebook, please check "How to implement to make user can easily use Submarine environments")'),(0,i.kt)("p",null,"Please note that notebook's Environment should include right version of notebook libraries, and admin should follow the guidance to build correct Docker image, Conda libraries to correctly run Notebook."),(0,i.kt)("h3",{id:"submarine-sdk-for-experiment-etc"},"Submarine SDK (For Experiment, etc.)"),(0,i.kt)("p",null,"Users can run new experiment, access metrics information, or do model operations using Submarine SDK. "),(0,i.kt)("p",null,"Submarine SDK is a Python library which can talk to Submarine Server which need Submarine Server's endpoint as well as user credentials."),(0,i.kt)("p",null,"To ensure better experience, we recommend always install proper version of Submarine SDK from environment which users can use Submarine SDK directly from commandline. (We as Submarine community can provide sample Dockerfile or Conda environment which have correct base libraries installed for Submarine SDK)."),(0,i.kt)("p",null,"Submarine Server IP will be configured automatically by Submarine Server, and added as an envar when Submarine notebook session got launched."),(0,i.kt)("h3",{id:"security"},"Security"),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/docs/designDocs/wip-designs/security-implementation"},"Security Implementation")),(0,i.kt)("p",null,"Once user accessed to a running notebook session, the user can also access resources of the notebook, capability of submit new experiment, and access data. This is also very dangerous so we have to protect it. "),(0,i.kt)("p",null,"A simple solution is to use token-based authentication ",(0,i.kt)("a",{parentName:"p",href:"https://jupyter-notebook.readthedocs.io/en/stable/security.html"},"https://jupyter-notebook.readthedocs.io/en/stable/security.html"),". A more common way is to use solutions like KNOX to support SSO. "),(0,i.kt)("p",null,"We need expand this section to more details. (TODO)."))}d.isMDXComponent=!0}}]);