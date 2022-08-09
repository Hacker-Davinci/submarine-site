"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[519],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),c=r,k=d["".concat(p,".").concat(c)]||d[c]||o[c]||l;return t?a.createElement(k,m(m({ref:n},u),{},{components:t})):a.createElement(k,m({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,m=new Array(l);m[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,m[1]=i;for(var s=2;s<l;s++)m[s]=t[s];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1477:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return o}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),m=["components"],i={title:"Experiment REST API"},p=void 0,s={unversionedId:"userDocs/api/experiment",id:"version-0.6.0/userDocs/api/experiment",title:"Experiment REST API",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/userDocs/api/experiment.md",sourceDirName:"userDocs/api",slug:"/userDocs/api/experiment",permalink:"/zh-cn/docs/0.6.0/userDocs/api/experiment",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/userDocs/api/experiment.md",tags:[],version:"0.6.0",frontMatter:{title:"Experiment REST API"},sidebar:"docs",previous:{title:"Jupyter Notebook",permalink:"/zh-cn/docs/0.6.0/gettingStarted/notebook"},next:{title:"Environment REST API",permalink:"/zh-cn/docs/0.6.0/userDocs/api/environment"}},u={},o=[{value:"Create Experiment (Using Anonymous/Embedded Environment)",id:"create-experiment-using-anonymousembedded-environment",level:2},{value:"Parameters",id:"parameters",level:3},{value:"<strong>ExperimentSpec</strong>",id:"experimentspec",level:4},{value:"<strong>ExperimentMeta</strong>",id:"experimentmeta",level:4},{value:"<strong>EnvironmentSpec</strong>",id:"environmentspec",level:4},{value:"<strong>ExperimentTaskSpec</strong>",id:"experimenttaskspec",level:4},{value:"<strong>CodeSpec</strong>",id:"codespec",level:4},{value:"Code Example",id:"code-example",level:3},{value:"Create Experiment (Using Pre-defined/Stored Environment)",id:"create-experiment-using-pre-definedstored-environment",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Code Example",id:"code-example-1",level:3},{value:"List Experiment",id:"list-experiment",level:2},{value:"Code Example",id:"code-example-2",level:3},{value:"Get Experiment",id:"get-experiment",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Code Example",id:"code-example-3",level:3},{value:"Patch Experiment",id:"patch-experiment",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Code Example",id:"code-example-4",level:3},{value:"Delete Experiment",id:"delete-experiment",level:3},{value:"Parameters",id:"parameters-4",level:3},{value:"Code Example",id:"code-example-5",level:3},{value:"List Experiment Log",id:"list-experiment-log",level:2},{value:"Code Example",id:"code-example-6",level:3},{value:"Get Experiment Log",id:"get-experiment-log",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Code Example",id:"code-example-7",level:3}],d={toc:o};function c(e){var n=e.components,t=(0,r.Z)(e,m);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"create-experiment-using-anonymousembedded-environment"},"Create Experiment (Using Anonymous/Embedded Environment)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"POST /api/v1/experiment\n")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"Put ExperimentSpec in request body."),(0,l.kt)("h4",{id:"experimentspec"},(0,l.kt)("strong",{parentName:"h4"},"ExperimentSpec")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meta"),(0,l.kt)("td",{parentName:"tr",align:null},"ExperimentMeta"),(0,l.kt)("td",{parentName:"tr",align:null},"Meta data of the experiment template.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"environment"),(0,l.kt)("td",{parentName:"tr",align:null},"EnvironmentSpec"),(0,l.kt)("td",{parentName:"tr",align:null},"Environment of the experiment template.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec"),(0,l.kt)("td",{parentName:"tr",align:null},"Map<String, ExperimentTaskSpec>"),(0,l.kt)("td",{parentName:"tr",align:null},"Spec of pods.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"CodeSpec"),(0,l.kt)("td",{parentName:"tr",align:null},"Experiment codespec.")))),(0,l.kt)("h4",{id:"experimentmeta"},(0,l.kt)("strong",{parentName:"h4"},"ExperimentMeta")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Experiment name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Experiment namespace.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"framework"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Experiemnt framework.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cmd"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"envVars"),(0,l.kt)("td",{parentName:"tr",align:null},"Map<String, String>"),(0,l.kt)("td",{parentName:"tr",align:null},"Environmental variables.")))),(0,l.kt)("h4",{id:"environmentspec"},(0,l.kt)("strong",{parentName:"h4"},"EnvironmentSpec")),(0,l.kt)("p",null,"There are two types of environment: Anonymous and Predefined."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Anonymous environment: only specify ",(0,l.kt)("inlineCode",{parentName:"li"},"dockerImage")," in environment spec. The container will be built on the docker image."),(0,l.kt)("li",{parentName:"ul"},"Embedded environment: specify ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," in environment spec. The container will be built on the existing environment (including dockerImage and kernalSpec).")),(0,l.kt)("p",null,"See more details in ",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/0.6.0/userDocs/api/environment"},"environment api"),"."),(0,l.kt)("h4",{id:"experimenttaskspec"},(0,l.kt)("strong",{parentName:"h4"},"ExperimentTaskSpec")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replicas"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Numbers of replicas.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resoureces"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Resouces of the task")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Task name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Image name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cmd"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"envVars"),(0,l.kt)("td",{parentName:"tr",align:null},"Map<String, String>"),(0,l.kt)("td",{parentName:"tr",align:null},"Environmental variables.")))),(0,l.kt)("h4",{id:"codespec"},(0,l.kt)("strong",{parentName:"h4"},"CodeSpec")),(0,l.kt)("p",null,"Currently only support pulling from github. HDFS, NFS and s3 are in development"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"syncMode"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","(","git","|","hdfs","|","nfs","|","s3",")"),(0,l.kt)("td",{parentName:"tr",align:null},"sync mode of code spec.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"url of code spec.")))),(0,l.kt)("h3",{id:"code-example"},"Code Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"shell")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" -d \'\n{\n  "meta": {\n    "name": "tf-mnist-json",\n    "namespace": "default",\n    "framework": "TensorFlow",\n    "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n    "envVars": {\n      "ENV_1": "ENV1"\n    }\n  },\n  "environment": {\n    "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n  },\n  "spec": {\n    "Ps": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=1024M"\n    },\n    "Worker": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=2048M"\n    }\n  }\n}\n\' http://127.0.0.1:32080/api/v1/experiment\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "experimentId":"experiment_1626160071451_0002",\n    "name":"tf-mnist-json",\n    "uid":"5a6ec922-6c90-43d4-844f-039f6804ed36",\n    "status":"Accepted",\n    "acceptedTime":"2021-07-13T16:47:51.000+08:00",\n    "createdTime":null,\n    "runningTime":null,\n    "finishedTime":null,\n    "spec":{\n      "meta":{\n        "name":"tf-mnist-json",\n        "namespace":"default",\n        "framework":"TensorFlow",\n        "cmd":"python /var/tf_mnist/mnist_with_summaries.py --log_dir\\u003d/train/log --learning_rate\\u003d0.01 --batch_size\\u003d150",\n        "envVars":{"ENV_1":"ENV1"}\n      },\n      "environment":{\n        "name":null,\n        "dockerImage":null,\n        "kernelSpec":null,\n        "description":null,\n        "image":"apache/submarine:tf-mnist-with-summaries-1.0"\n      },\n      "spec":{\n        "Ps":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        },\n        "Worker":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d2048M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"2048M","cpu":"1"}\n        }\n      },\n      "code":null\n    }\n  },\n  "attributes":{}\n}\n')),(0,l.kt)("h2",{id:"create-experiment-using-pre-definedstored-environment"},"Create Experiment (Using Pre-defined/Stored Environment)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /api/v1/experiment\n")),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("p",null,"Put ExperimentSpec in request body."),(0,l.kt)("h3",{id:"code-example-1"},"Code Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"shell")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" -d \'\n{\n  "meta": {\n    "name": "tf-mnist-json",\n    "namespace": "default",\n    "framework": "TensorFlow",\n    "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n    "envVars": {\n      "ENV_1": "ENV1"\n    }\n  },\n  "environment": {\n    "name": "my-submarine-env"\n  },\n  "spec": {\n    "Ps": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=1024M"\n    },\n    "Worker": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=2048M"\n    }\n  }\n}\n\' http://127.0.0.1:32080/api/v1/experiment\n')),(0,l.kt)("p",null,'Above example assume environment "my-submarine-env" already exists in Submarine. Please refer Environment API Reference doc to ',(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/0.6.0/userDocs/api/environment"},"environment rest api"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "experimentId":"experiment_1626160071451_0005",\n    "name":"tf-mnist-json",\n    "uid":"4944c603-0f21-49e5-826a-2ff820bb4d93",\n    "status":"Accepted",\n    "acceptedTime":"2021-07-13T16:57:27.000+08:00",\n    "createdTime":null,\n    "runningTime":null,\n    "finishedTime":null,\n    "spec":{\n      "meta":{\n        "name":"tf-mnist-json",\n        "namespace":"default",\n        "framework":"TensorFlow",\n        "cmd":"python /var/tf_mnist/mnist_with_summaries.py --log_dir\\u003d/train/log --learning_rate\\u003d0.01 --batch_size\\u003d150",\n        "envVars":{"ENV_1":"ENV1"}\n      },\n      "environment":{\n        "name":"my-submarine-env",\n        "dockerImage":null,\n        "kernelSpec":null,\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "Ps":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        },\n        "Worker":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d2048M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"2048M","cpu":"1"}\n        }\n      },\n      "code":null\n    }\n  },\n  "attributes":{}\n}\n')),(0,l.kt)("h2",{id:"list-experiment"},"List Experiment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /api/v1/experiment\n")),(0,l.kt)("h3",{id:"code-example-2"},"Code Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"shell")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/experiment\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":\n  [{\n    "experimentId":"experiment_1626160071451_0001",\n    "name":"newexperiment1",\n    "uid":"b895985c-411c-4e89-90e0-c60a2a8a4235",\n    "status":"Succeeded",\n    "acceptedTime":"2021-07-13T16:21:31.000+08:00",\n    "createdTime":"2021-07-13T16:21:31.000+08:00",\n    "runningTime":"2021-07-13T16:21:46.000+08:00",\n    "finishedTime":"2021-07-13T16:26:54.000+08:00",\n    "spec":{\n      "meta":{\n        "name":"newexperiment1",\n        "namespace":"default",\n        "framework":"TensorFlow",\n        "cmd":"python /var/tf_mnist/mnist_with_summaries.py --log_dir\\u003d/train/log --learning_rate\\u003d0.01 --batch_size\\u003d150",\n        "envVars":{"ENV1":"ENV1"}\n      },\n      "environment":{\n        "name":null,\n        "dockerImage":null,\n        "kernelSpec":null,\n        "description":null,\n        "image":"apache/submarine:tf-mnist-with-summaries-1.0"\n      },\n      "spec":{\n        "Ps":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        },\n        "Worker":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        }\n      },\n      "code":null\n    }\n  },\n  {\n    "experimentId":"experiment_1626160071451_0005",\n    "name":"tf-mnist-json",\n    "uid":"4944c603-0f21-49e5-826a-2ff820bb4d93",\n    "status":"Accepted",\n    "acceptedTime":"2021-07-13T16:57:27.000+08:00",\n    "createdTime":null,\n    "runningTime":null,\n    "finishedTime":null,\n    "spec":{\n      "meta":{\n        "name":"tf-mnist-json",\n        "namespace":"default",\n        "framework":"TensorFlow",\n        "cmd":"python /var/tf_mnist/mnist_with_summaries.py --log_dir\\u003d/train/log --learning_rate\\u003d0.01 --batch_size\\u003d150",\n        "envVars":{"ENV_1":"ENV1"}\n      },\n      "environment":{\n        "name":"my-submarine-env",\n        "dockerImage":null,\n        "kernelSpec":null,\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "Ps":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        },\n        "Worker":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d2048M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"2048M","cpu":"1"}\n        }\n      },\n      "code":null\n    }\n  }],\n  "attributes":{}\n}\n')),(0,l.kt)("h2",{id:"get-experiment"},"Get Experiment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /api/v1/experiment/{id}\n")),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"Experiment id.")))),(0,l.kt)("h3",{id:"code-example-3"},"Code Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"shell")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/experiment/experiment_1626160071451_0005\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "experimentId":"experiment_1626160071451_0005",\n    "name":"tf-mnist-json",\n    "uid":"4944c603-0f21-49e5-826a-2ff820bb4d93",\n    "status":"Accepted",\n    "acceptedTime":"2021-07-13T16:57:27.000+08:00",\n    "createdTime":null,\n    "runningTime":null,\n    "finishedTime":null,\n    "spec":{\n      "meta":{\n        "name":"tf-mnist-json",\n        "namespace":"default",\n        "framework":"TensorFlow",\n        "cmd":"python /var/tf_mnist/mnist_with_summaries.py --log_dir\\u003d/train/log --learning_rate\\u003d0.01 --batch_size\\u003d150",\n        "envVars":{"ENV_1":"ENV1"}\n      },\n      "environment":{\n        "name":"my-submarine-env",\n        "dockerImage":null,\n        "kernelSpec":null,\n        "description":null,\n        "image":null\n      },\n      "spec":{\n        "Ps":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        },\n        "Worker":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d2048M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"2048M","cpu":"1"}\n        }\n      },\n      "code":null\n    }\n  },\n  "attributes":{}\n}\n')),(0,l.kt)("h2",{id:"patch-experiment"},"Patch Experiment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PATCH /api/v1/experiment/{id}\n")),(0,l.kt)("h3",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"Experiment id.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meta"),(0,l.kt)("td",{parentName:"tr",align:null},"ExperimentMeta"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"Meta data of the experiment template.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"environment"),(0,l.kt)("td",{parentName:"tr",align:null},"EnvironmentSpec"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"Environment of the experiment template.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec"),(0,l.kt)("td",{parentName:"tr",align:null},"Map<String, ExperimentTaskSpec>"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"Spec of pods.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"CodeSpec"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"TODO")))),(0,l.kt)("h3",{id:"code-example-4"},"Code Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"shell")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X PATCH -H "Content-Type: application/json" -d \'\n{\n  "meta": {\n    "name": "tf-mnist-json",\n    "namespace": "default",\n    "framework": "TensorFlow",\n    "cmd": "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150",\n      "envVars": {\n      "ENV_1": "ENV1"\n    }\n  },\n  "environment": {\n    "image": "apache/submarine:tf-mnist-with-summaries-1.0"\n  },\n  "spec": {\n    "Ps": {\n      "replicas": 1,\n      "resources": "cpu=1,memory=1024M"\n    },\n    "Worker": {\n      "replicas": 2,\n      "resources": "cpu=1,memory=2048M"\n    }\n  }\n}\n\' http://127.0.0.1:32080/api/v1/experiment/experiment_1626160071451_0005\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "experimentId":"experiment_1626160071451_0005",\n    "name":"tf-mnist-json",\n    "uid":"4944c603-0f21-49e5-826a-2ff820bb4d93",\n    "status":"Accepted",\n    "acceptedTime":"2021-07-13T16:57:27.000+08:00",\n    "createdTime":null,\n    "runningTime":null,\n    "finishedTime":null,\n    "spec":{\n      "meta":{\n        "name":"tf-mnist-json",\n        "namespace":"default",\n        "framework":"TensorFlow",\n        "cmd":"python /var/tf_mnist/mnist_with_summaries.py --log_dir\\u003d/train/log --learning_rate\\u003d0.01 --batch_size\\u003d150",\n        "envVars":{"ENV_1":"ENV1"}\n      },\n      "environment":{\n        "name":null,\n        "dockerImage":null,\n        "kernelSpec":null,\n        "description":null,\n        "image":"apache/submarine:tf-mnist-with-summaries-1.0"\n      },\n      "spec":{\n        "Ps":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        },\n        "Worker":{\n          "replicas":2,\n          "resources":"cpu\\u003d1,memory\\u003d2048M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"2048M","cpu":"1"}\n        }\n      },\n      "code":null\n    }\n  },\n  "attributes":{}\n}\n')),(0,l.kt)("h3",{id:"delete-experiment"},"Delete Experiment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DELETE /api/v1/experiment/{id}\n")),(0,l.kt)("h3",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"Experiment id.")))),(0,l.kt)("h3",{id:"code-example-5"},"Code Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"shell")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X DELETE http://127.0.0.1:32080/api/v1/experiment/experiment_1626160071451_0005\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "experimentId":"experiment_1626160071451_0005",\n    "name":"tf-mnist-json",\n    "uid":"4944c603-0f21-49e5-826a-2ff820bb4d93",\n    "status":"Deleted",\n    "acceptedTime":null,\n    "createdTime":null,\n    "runningTime":null,\n    "finishedTime":null,\n    "spec":{\n      "meta":{\n        "name":"tf-mnist-json",\n        "namespace":"default",\n        "framework":"TensorFlow",\n        "cmd":"python /var/tf_mnist/mnist_with_summaries.py --log_dir\\u003d/train/log --learning_rate\\u003d0.01 --batch_size\\u003d150",\n        "envVars":{"ENV_1":"ENV1"}\n      },\n      "environment":{\n        "name":null,\n        "dockerImage":null,\n        "kernelSpec":null,\n        "description":null,\n        "image":"apache/submarine:tf-mnist-with-summaries-1.0"\n      },\n      "spec":{\n        "Ps":{\n          "replicas":1,\n          "resources":"cpu\\u003d1,memory\\u003d1024M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"1024M","cpu":"1"}\n        },\n        "Worker":{\n          "replicas":2,\n          "resources":"cpu\\u003d1,memory\\u003d2048M",\n          "name":null,\n          "image":null,\n          "cmd":null,\n          "envVars":null,\n          "resourceMap":{"memory":"2048M","cpu":"1"}\n        }\n      },\n      "code":null\n    }\n  },\n  "attributes":{}\n}\n')),(0,l.kt)("h2",{id:"list-experiment-log"},"List Experiment Log"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /api/v1/experiment/logs\n")),(0,l.kt)("h3",{id:"code-example-6"},"Code Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"shell")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/experiment/logs\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":\n  [{\n    "experimentId":"experiment_1626160071451_0001",\n    "logContent":\n    [{\n      "podName":"newexperiment1-ps-0",\n      "podLog":[]\n    },\n    {\n      "podName":"newexperiment1-worker-0",\n      "podLog":[]\n    }]\n  }],\n  "attributes":{}\n}\n')),(0,l.kt)("h2",{id:"get-experiment-log"},"Get Experiment Log"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /api/v1/experiment/logs/{id}\n")),(0,l.kt)("h3",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"Experiment id.")))),(0,l.kt)("h3",{id:"code-example-7"},"Code Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"shell")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:32080/api/v1/experiment/logs/experiment_1626160071451_0001\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status":"OK",\n  "code":200,\n  "success":true,\n  "message":null,\n  "result":{\n    "experimentId":"experiment_1626160071451_0001",\n    "logContent":\n    [{\n      "podName":"newexperiment1-ps-0",\n      "podLog":[]\n    },\n    {\n      "podName":"newexperiment1-worker-0",\n      "podLog":[]\n    }]\n  },\n  "attributes":{}\n}\n')))}c.isMDXComponent=!0}}]);