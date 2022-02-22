(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{181:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return b}));var t=n(3),i=n(7),a=(n(0),n(194)),o={title:"Project Architecture"},c={unversionedId:"devDocs/README",id:"devDocs/README",isDocsHomePage:!1,title:"Project Architecture",description:"\x3c!--",source:"@site/docs/devDocs/README.md",slug:"/devDocs/README",permalink:"/docs/next/devDocs/README",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/devDocs/README.md",version:"current",sidebar:"docs",previous:{title:"Tensorboard",permalink:"/docs/next/userDocs/others/tensorboard"},next:{title:"Dependencies for Submarine",permalink:"/docs/next/devDocs/Dependencies"}},s=[{value:"1. Introduction",id:"1-introduction",children:[]},{value:"2. Submarine Project Structure",id:"2-submarine-project-structure",children:[{value:"2.1. submarine-client",id:"21-submarine-client",children:[]},{value:"2.2. submarine-cloud-v2",id:"22-submarine-cloud-v2",children:[]},{value:"2.3. submarine-commons",id:"23-submarine-commons",children:[]},{value:"2.4. submarine-dist",id:"24-submarine-dist",children:[]},{value:"2.5. submarine-sdk",id:"25-submarine-sdk",children:[]},{value:"2.6. submarine-server",id:"26-submarine-server",children:[]},{value:"2.7. submarine-test",id:"27-submarine-test",children:[]},{value:"2.8. submarine-workbench",id:"28-submarine-workbench",children:[]},{value:"2.9 dev-support",id:"29-dev-support",children:[]}]}],u={toc:s};function b(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(a.b)("p",null,"This document mainly describes the structure of each module of the Submarine project, the development and test description of each module."),Object(a.b)("h2",{id:"2-submarine-project-structure"},"2. Submarine Project Structure"),Object(a.b)("h3",{id:"21-submarine-client"},"2.1. submarine-client"),Object(a.b)("p",null,"Provide the CLI interface for submarine user. (Currently only support YARN service (deprecated))"),Object(a.b)("h3",{id:"22-submarine-cloud-v2"},"2.2. submarine-cloud-v2"),Object(a.b)("p",null,"The operator for Submarine application. For details, please see the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/apache/submarine/blob/master/submarine-cloud-v2/README.md"},"README on github"),"."),Object(a.b)("h3",{id:"23-submarine-commons"},"2.3. submarine-commons"),Object(a.b)("p",null,"Define utility function used in multiple packages, mainly related to hadoop."),Object(a.b)("h3",{id:"24-submarine-dist"},"2.4. submarine-dist"),Object(a.b)("p",null,"Store the pre-release files."),Object(a.b)("h3",{id:"25-submarine-sdk"},"2.5. submarine-sdk"),Object(a.b)("p",null,"Provide Python SDK for submarine user."),Object(a.b)("h3",{id:"26-submarine-server"},"2.6. submarine-server"),Object(a.b)("p",null,"Include core server, restful api, and k8s submitter."),Object(a.b)("h3",{id:"27-submarine-test"},"2.7. submarine-test"),Object(a.b)("p",null,"Provide end-to-end and k8s test for submarine."),Object(a.b)("h3",{id:"28-submarine-workbench"},"2.8. submarine-workbench"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"workbench-server: is a Jetty-based web server service. Workbench-server provides RESTful interface and Websocket interface. The RESTful interface provides workbench-web with management capabilities for databases such as project, department, user, and role."),Object(a.b)("li",{parentName:"ul"},"workbench-web: is a web front-end service based on Angular.js framework. With workbench-web users can manage Submarine project, department, user, role through browser. You can also use the notebook to develop machine learning algorithms, model release and other lifecycle management.")),Object(a.b)("h3",{id:"29-dev-support"},"2.9 dev-support"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"mini-submarine"),": by using the docker image provided by Submarine, you can\nexperience all the functions of Submarine in a single docker environment, while\nmini-submarine also provides developers with a development and testing\nenvironment, Avoid the hassle of installing and deploying the runtime\nenvironment."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"submarine-installer"),": submarine-installer is our submarine runtime\nenvironment installation tool for yarn-3.1+ and above.By using\nsubmarine-installer, it is easy to install and deploy system services such as\n",Object(a.b)("inlineCode",{parentName:"li"},"docker"),", ",Object(a.b)("inlineCode",{parentName:"li"},"nvidia-docker"),", ",Object(a.b)("inlineCode",{parentName:"li"},"nvidia driver"),", ",Object(a.b)("inlineCode",{parentName:"li"},"ETCD"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Calico network")," etc.\nrequired by yarn-3.1+.")))}b.isMDXComponent=!0},194:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return p}));var t=n(0),i=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),b=function(e){var r=i.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=b(e.components);return i.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},m=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=b(n),m=t,p=l["".concat(o,".").concat(m)]||l[m]||d[m]||a;return n?i.a.createElement(p,c(c({ref:r},u),{},{components:n})):i.a.createElement(p,c({ref:r},u))}));function p(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);