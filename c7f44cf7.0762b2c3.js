(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{128:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return p})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return m}));var t=r(3),a=r(7),c=(r(0),r(143)),o={title:"Run PyTorch Experiment Guide (REST)"},p={unversionedId:"userDocs/k8s/run-pytorch-experiment-rest",id:"userDocs/k8s/run-pytorch-experiment-rest",isDocsHomePage:!1,title:"Run PyTorch Experiment Guide (REST)",description:"\x3c!--",source:"@site/docs/userDocs/k8s/run-pytorch-experiment-rest.md",slug:"/userDocs/k8s/run-pytorch-experiment-rest",permalink:"/docs/userDocs/k8s/run-pytorch-experiment-rest",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/userDocs/k8s/run-pytorch-experiment-rest.md",version:"current"},s=[{value:"Experiment Spec",id:"experiment-spec",children:[]},{value:"Create Experiment by REST API",id:"create-experiment-by-rest-api",children:[]}],i={toc:s};function m(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},i,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"experiment-spec"},"Experiment Spec"),Object(c.b)("p",null,"The experiment is represented in ",Object(c.b)("a",{parentName:"p",href:"https://www.json.org"},"JSON")," or ",Object(c.b)("a",{parentName:"p",href:"https://yaml.org"},"YAML")," format."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"YAML Format:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"meta:\n  name: pytorch-mnist-yaml\n  namespace: default\n  framework: PyTorch\n  cmd: python /var/mnist.py --backend gloo\n  envVars:\n    ENV_1: ENV1\nenvironment:\n  image: apache/submarine:pytorch-dist-mnist-1.0\nspec:\n  Master:\n    replicas: 1\n    resources: cpu=1,memory=1024M\n  Worker:\n    replicas: 1\n    resources: cpu=1,memory=1024M\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"JSON Format:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "meta": {\n    "name": "pytorch-mnist-json",\n    "namespace": "default",\n    "framework": "PyTorch",\n    "cmd": "python /var/mnist.py --backend gloo",\n    "envVars": {\n      "ENV_1": "ENV1"\n    }\n  },\n  "environment": {\n    "image": "apache/submarine:pytorch-dist-mnist-1.0"\n  },\n  "spec": {\n    "Master": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=1024M"\n    },\n    "Worker": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=1024M"\n    }\n  }\n}\n\n')),Object(c.b)("h2",{id:"create-experiment-by-rest-api"},"Create Experiment by REST API"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"POST /api/v1/experiment")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example Request")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" -d \'\n{\n  "meta": {\n    "name": "pytorch-mnist-json",\n    "namespace": "default",\n    "framework": "PyTorch",\n    "cmd": "python /var/mnist.py --backend gloo",\n    "envVars": {\n      "ENV_1": "ENV1"\n    }\n  },\n  "environment": {\n    "image": "apache/submarine:pytorch-dist-mnist-1.0"\n  },\n  "spec": {\n    "Master": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=1024M"\n    },\n    "Worker": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=1024M"\n    }\n  }\n}\n\' http://127.0.0.1:32080/api/v1/experiment\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example Response:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "OK",\n    "code": 200,\n    "result": {\n        "experimentId": "experiment_1592057447228_0002",\n        "name": "mnist",\n        "uid": "38e39dcd-77d4-11ea-8dbb-0242ac110003",\n        "status": "Accepted",\n        "acceptedTime": "2020-06-13T22:19:29.000+08:00",\n        "spec": {\n            "meta": {\n                "name": "pytorch-mnist-json",\n                "namespace": "default",\n                "framework": "PyTorch",\n                "cmd": "python /var/mnist.py --backend gloo",\n                "envVars": {\n                    "ENV_1": "ENV1"\n                }\n            },\n            "environment": {\n                "image": "apache/submarine:pytorch-dist-mnist-1.0"\n            },\n            "spec": {\n                "Master": {\n                    "replicas": 1,\n                    "resources": "cpu=1,memory=1024M"\n                },\n                "Worker": {\n                    "replicas": 1,\n                    "resources": "cpu=1,memory=1024M"\n                }\n            }\n        }\n    }\n}\n')),Object(c.b)("p",null,"More info see ",Object(c.b)("a",{parentName:"p",href:"/docs/api/experiment"},"Experiment API Reference"),"."))}m.isMDXComponent=!0},143:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return y}));var t=r(0),a=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),m=function(e){var n=a.a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},u=function(e){var n=m(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=m(r),b=t,y=u["".concat(o,".").concat(b)]||u[b]||l[b]||c;return r?a.a.createElement(y,p(p({ref:n},i),{},{components:r})):a.a.createElement(y,p({ref:n},i))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,o=new Array(c);o[0]=b;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:t,o[1]=p;for(var i=2;i<c;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);