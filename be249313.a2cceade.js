(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),b=(n(0),n(194)),o={title:"Notebook REST API"},l={unversionedId:"userDocs/api/notebook",id:"userDocs/api/notebook",isDocsHomePage:!1,title:"Notebook REST API",description:"\x3c!--",source:"@site/docs/userDocs/api/notebook.md",slug:"/userDocs/api/notebook",permalink:"/docs/next/userDocs/api/notebook",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/userDocs/api/notebook.md",version:"current",sidebar:"docs",previous:{title:"Experiment Template REST API",permalink:"/docs/next/userDocs/api/experiment-template"},next:{title:"Experiment Client",permalink:"/docs/next/userDocs/submarine-sdk/experiment-client"}},c=[{value:"Create a Notebook Instance",id:"create-a-notebook-instance",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Code Example",id:"code-example",children:[]}]},{value:"List notebook instances which belong to user",id:"list-notebook-instances-which-belong-to-user",children:[{value:"Parameters",id:"parameters-1",children:[]},{value:"Code Example",id:"code-example-1",children:[]}]},{value:"Get the notebook instance",id:"get-the-notebook-instance",children:[{value:"Parameters",id:"parameters-2",children:[]},{value:"Code Example",id:"code-example-2",children:[]}]},{value:"Delete the notebook instance",id:"delete-the-notebook-instance",children:[{value:"Parameters",id:"parameters-3",children:[]},{value:"Code Example",id:"code-example-3",children:[]}]}],p={toc:c};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"create-a-notebook-instance"},"Create a Notebook Instance"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"POST /api/v1/notebook\n")),Object(b.b)("h3",{id:"parameters"},"Parameters"),Object(b.b)("p",null,"NotebookSpec in request body."),Object(b.b)("h4",{id:"notebookspec"},Object(b.b)("strong",{parentName:"h4"},"NotebookSpec")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Field Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"meta"),Object(b.b)("td",{parentName:"tr",align:null},"NotebookMeta"),Object(b.b)("td",{parentName:"tr",align:null},"Meta data of the notebook.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"environment"),Object(b.b)("td",{parentName:"tr",align:null},"EnvironmentSpec"),Object(b.b)("td",{parentName:"tr",align:null},"Environment of the experiment template.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"spec"),Object(b.b)("td",{parentName:"tr",align:null},"NotebookPodSpec"),Object(b.b)("td",{parentName:"tr",align:null},"Spec of the notebook pods.")))),Object(b.b)("h4",{id:"notebookmeta"},Object(b.b)("strong",{parentName:"h4"},"NotebookMeta")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Field Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"name"),Object(b.b)("td",{parentName:"tr",align:null},"String"),Object(b.b)("td",{parentName:"tr",align:null},"Notebook name.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"namespace"),Object(b.b)("td",{parentName:"tr",align:null},"String"),Object(b.b)("td",{parentName:"tr",align:null},"Notebook namespace.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ownerId"),Object(b.b)("td",{parentName:"tr",align:null},"String"),Object(b.b)("td",{parentName:"tr",align:null},"User id.")))),Object(b.b)("h4",{id:"environmentspec"},Object(b.b)("strong",{parentName:"h4"},"EnvironmentSpec")),Object(b.b)("p",null,"See more details in ",Object(b.b)("a",{parentName:"p",href:"https://submarine.apache.org/docs/userDocs/api/environment"},"environment api"),"."),Object(b.b)("h4",{id:"notebookpodspec"},Object(b.b)("strong",{parentName:"h4"},"NotebookPodSpec")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Field Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"envVars"),Object(b.b)("td",{parentName:"tr",align:null},"Map<String, String",">"),Object(b.b)("td",{parentName:"tr",align:null},"Environmental variables.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"resources"),Object(b.b)("td",{parentName:"tr",align:null},"String"),Object(b.b)("td",{parentName:"tr",align:null},"Resourecs of the pod.")))),Object(b.b)("h3",{id:"code-example"},"Code Example"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"shell")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" -d \'\n{\n  "meta": {\n    "name": "test-nb",\n    "namespace": "default",\n    "ownerId": "e9ca23d68d884d4ebb19d07889727dae"\n  },\n  "environment": {\n    "name": "notebook-env"\n  },\n  "spec": {\n    "envVars": {\n      "TEST_ENV": "test"\n    },\n    "resources": "cpu=1,memory=1.0Gi"\n  }\n}\n\' http://127.0.0.1:32080/api/v1/notebook\n')),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"response:")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":"Create a notebook instance",\n  "result":{\n    "notebookId":"notebook_1626160071451_0001",\n    "name":"test-nb",\n    "uid":"a56713da-f2a3-40d0-ae2e-45fdc0bb15f5",\n    "url":"/notebook/default/test-nb/lab",\n    "status":"creating",\n    "reason":"The notebook instance is creating",\n    "createdTime":"2021-07-13T16:23:38.000+08:00",\n    "deletedTime":null,\n    "spec":{\n      "meta":{\n        "name":"test-nb",\n        "namespace":"default",\n        "ownerId":"e9ca23d68d884d4ebb19d07889727dae"\n      },\n      "environment":{\n        "name":"notebook-env",\n        "dockerImage":"apache/submarine:jupyter-notebook-0.7.0",\n        "kernelSpec":{\n          "name":"submarine_jupyter_py3",\n          "channels":["defaults"],\n          "condaDependencies":[],\n          "pipDependencies":[]\n        },\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "envVars":{"TEST_ENV":"test"},\n        "resources":"cpu\\u003d1,memory\\u003d1.0Gi"\n      }\n    }\n  },\n  "attributes":{}\n}\n')),Object(b.b)("h2",{id:"list-notebook-instances-which-belong-to-user"},"List notebook instances which belong to user"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"GET /api/v1/notebook\n")),Object(b.b)("h3",{id:"parameters-1"},"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Field Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"In"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"id"),Object(b.b)("td",{parentName:"tr",align:null},"String"),Object(b.b)("td",{parentName:"tr",align:null},"query"),Object(b.b)("td",{parentName:"tr",align:null},"User id.")))),Object(b.b)("h3",{id:"code-example-1"},"Code Example"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"shell")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/notebook?id=e9ca23d68d884d4ebb19d07889727dae\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"response")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":"List all notebook instances",\n  "result":\n  [{\n    "notebookId":"notebook_1626160071451_0001",\n    "name":"test-nb",\n    "uid":"a56713da-f2a3-40d0-ae2e-45fdc0bb15f5",\n    "url":"/notebook/default/test-nb/lab",\n    "status":"waiting",\n    "reason":"ContainerCreating",\n    "createdTime":"2021-07-13T16:23:38.000+08:00",\n    "deletedTime":null,\n    "spec":{\n      "meta":{\n        "name":"test-nb",\n        "namespace":"default",\n        "ownerId":"e9ca23d68d884d4ebb19d07889727dae"\n      },\n      "environment":{\n        "name":"notebook-env",\n        "dockerImage":"apache/submarine:jupyter-notebook-0.7.0",\n        "kernelSpec":{\n          "name":"submarine_jupyter_py3",\n          "channels":["defaults"],\n          "condaDependencies":[],\n          "pipDependencies":[]\n        },\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "envVars":{"TEST_ENV":"test"},\n        "resources":"cpu\\u003d1,memory\\u003d1.0Gi"\n      }\n    }\n  }],\n  "attributes":{}\n}\n')),Object(b.b)("h2",{id:"get-the-notebook-instance"},"Get the notebook instance"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"GET /api/v1/notebook/{id}\n")),Object(b.b)("h3",{id:"parameters-2"},"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Field Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"In"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"id"),Object(b.b)("td",{parentName:"tr",align:null},"String"),Object(b.b)("td",{parentName:"tr",align:null},"path"),Object(b.b)("td",{parentName:"tr",align:null},"Notebook id.")))),Object(b.b)("h3",{id:"code-example-2"},"Code Example"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"shell")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/notebook/notebook_1626160071451_0001\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"response")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":"Get the notebook instance",\n  "result":{\n    "notebookId":"notebook_1626160071451_0001",\n    "name":"test-nb",\n    "uid":"a56713da-f2a3-40d0-ae2e-45fdc0bb15f5",\n    "url":"/notebook/default/test-nb/lab",\n    "status":"waiting",\n    "reason":"ContainerCreating",\n    "createdTime":"2021-07-13T16:23:38.000+08:00",\n    "deletedTime":null,\n    "spec":{\n      "meta":{\n        "name":"test-nb",\n        "namespace":"default",\n        "ownerId":"e9ca23d68d884d4ebb19d07889727dae"\n      },\n      "environment":{\n        "name":"notebook-env",\n        "dockerImage":"apache/submarine:jupyter-notebook-0.7.0",\n        "kernelSpec":{\n          "name":"submarine_jupyter_py3",\n          "channels":["defaults"],\n          "condaDependencies":[],\n          "pipDependencies":[]\n        },\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "envVars":{"TEST_ENV":"test"},\n        "resources":"cpu\\u003d1,memory\\u003d1.0Gi"\n      }\n    }\n  },\n  "attributes":{}\n}\n')),Object(b.b)("h2",{id:"delete-the-notebook-instance"},"Delete the notebook instance"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre"},"DELETE /api/v1/notebook/{id}\n")),Object(b.b)("h3",{id:"parameters-3"},"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Field Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"In"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"id"),Object(b.b)("td",{parentName:"tr",align:null},"String"),Object(b.b)("td",{parentName:"tr",align:null},"path"),Object(b.b)("td",{parentName:"tr",align:null},"Notebook id.")))),Object(b.b)("h3",{id:"code-example-3"},"Code Example"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"shell")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-sh"},"curl -X DELETE http://127.0.0.1:32080/api/v1/notebook/notebook_1626160071451_0001\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"response:")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":"Delete the notebook instance",\n  "result":{\n    "notebookId":"notebook_1626160071451_0001",\n    "name":"test-nb",\n    "uid":"a56713da-f2a3-40d0-ae2e-45fdc0bb15f5",\n    "url":"/notebook/default/test-nb/lab",\n    "status":"terminating",\n    "reason":"The notebook instance is terminating",\n    "createdTime":"2021-07-13T16:23:38.000+08:00",\n    "deletedTime":null,\n    "spec":{\n      "meta":{\n        "name":"test-nb",\n        "namespace":"default",\n        "ownerId":"e9ca23d68d884d4ebb19d07889727dae"\n      },\n      "environment":{\n        "name":"notebook-env",\n        "dockerImage":"apache/submarine:jupyter-notebook-0.7.0",\n        "kernelSpec":{\n          "name":"submarine_jupyter_py3",\n          "channels":["defaults"],\n          "condaDependencies":[],\n          "pipDependencies":[]\n        },\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "envVars":{"TEST_ENV":"test"},\n        "resources":"cpu\\u003d1,memory\\u003d1.0Gi"\n      }\n    }\n  },\n  "attributes":{}\n}\n')))}i.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=i(n),m=a,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||b;return n?r.a.createElement(u,l(l({ref:t},p),{},{components:n})):r.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,o=new Array(b);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<b;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);