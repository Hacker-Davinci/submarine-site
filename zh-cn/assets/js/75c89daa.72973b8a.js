"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9509],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=o(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2835:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],s={title:"Generic Experiment Spec"},p=void 0,o={unversionedId:"designDocs/submarine-server/experimentSpec",id:"version-0.7.0/designDocs/submarine-server/experimentSpec",title:"Generic Experiment Spec",description:"\x3c!--",source:"@site/versioned_docs/version-0.7.0/designDocs/submarine-server/experimentSpec.md",sourceDirName:"designDocs/submarine-server",slug:"/designDocs/submarine-server/experimentSpec",permalink:"/zh-cn/docs/designDocs/submarine-server/experimentSpec",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.7.0/designDocs/submarine-server/experimentSpec.md",tags:[],version:"0.7.0",frontMatter:{title:"Generic Experiment Spec"},sidebar:"docs",previous:{title:"Submarine Server Implementation",permalink:"/zh-cn/docs/designDocs/submarine-server/architecture"},next:{title:"Submarine Launcher",permalink:"/zh-cn/docs/designDocs/wip-designs/submarine-launcher"}},m={},u=[{value:"Motivation",id:"motivation",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Library Spec",id:"library-spec",level:3},{value:"Submitter Spec",id:"submitter-spec",level:3},{value:"Task Spec",id:"task-spec",level:3},{value:"Implements",id:"implements",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"motivation"},"Motivation"),(0,l.kt)("p",null,"As the machine learning platform, the submarine should support multiple machine learning frameworks, such as Tensorflow, Pytorch etc. But different framework has different distributed components for the training experiment. So that we designed a generic experiment spec to abstract the training experiment across different frameworks. In this way, the submarine-server can hide the complexity of underlying infrastructure differences and provide a cleaner interface to manager experiments"),(0,l.kt)("h2",{id:"proposal"},"Proposal"),(0,l.kt)("p",null,"Considering the Tensorflow and Pytorch framework, we propose one spec which consists of library spec, submitter spec and task specs etc. Such as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "mnist"\nlibrarySpec:\n  name: "TensorFlow"\n  version: "2.1.0"\n  image: "apache/submarine:tf-mnist-with-summaries-1.0"\n  cmd: "python /var/tf_mnist/mnist_with_summaries.py --log_dir=/train/log --learning_rate=0.01 --batch_size=150"\n  envVars:\n    ENV_1: "ENV1"\nsubmitterSpec:\n  type: "k8s"\n  namespace: "submarine"\ntaskSpecs:\n  Ps:\n    name: tensorflow\n    replicas: 2\n    resources: "cpu=4,memory=2048M,nvidia.com/gpu=1"\n  Worker:\n    name: tensorflow\n    replicas: 2\n    resources: "cpu=4,memory=2048M,nvidia.com/gpu=1"\n')),(0,l.kt)("h3",{id:"library-spec"},"Library Spec"),(0,l.kt)("p",null,"The library spec describes the info about machine learning framework. All the fields as below:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"optional"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Machine Learning Framework name. Only ",(0,l.kt)("inlineCode",{parentName:"td"},'"tensorflow"')," and ",(0,l.kt)("inlineCode",{parentName:"td"},'"pytorch"')," is supported. It doesn't matter if the value is uppercase or lowercase.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"The version of ML framework. Such as: 2.1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"The public image used for each task if not specified. Such as: apache/submarine")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cmd"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"The public entry cmd for the task if not specified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"envVars"),(0,l.kt)("td",{parentName:"tr",align:null},"key/value"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"The public env vars for the task if not specified.")))),(0,l.kt)("h3",{id:"submitter-spec"},"Submitter Spec"),(0,l.kt)("p",null,"It describes the info of submitter which the user specified, such as k8s. All the fields as below:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"optional"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"The submitter type, supports ",(0,l.kt)("inlineCode",{parentName:"td"},"k8s")," now")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"configPath"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"The config path of the specified resource manager. You can set it in submarine-site.xml if run submarine-server locally")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"It's known as namespace in Kubernetes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kind"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"It's used for k8s submitter, supports TFJob and PyTorchJob")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apiVersion"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"It should pair with the kind, such as the TFJob's api version is ",(0,l.kt)("inlineCode",{parentName:"td"},"kubeflow.org/v1"))))),(0,l.kt)("h3",{id:"task-spec"},"Task Spec"),(0,l.kt)("p",null,"It describes the task info, the tasks make up the experiment. So it must be specified when submit the experiment. All the tasks should putted into the key value collection. Such as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'taskSpecs:\n  Ps:\n    name: tensorflow\n    replicas: 2\n    resources: "cpu=4,memory=2048M,nvidia.com/gpu=1"\n  Worker:\n    name: tensorflow\n    replicas: 2\n    resources: "cpu=4,memory=2048M,nvidia.com/gpu=1"\n')),(0,l.kt)("p",null,"All the fields as below:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"optional"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"The experiment name, if not specify using the library name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"The experiment docker image")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cmd"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"The entry command for running task")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"envVars"),(0,l.kt)("td",{parentName:"tr",align:null},"key/value"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"The environment variables for the task")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resources"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"The limit resource for the task. Formatter: cpu=%s,memory=%s,nvidia.com/gpu=%s")))),(0,l.kt)("h2",{id:"implements"},"Implements"),(0,l.kt)("p",null,"For more info see ",(0,l.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/SUBMARINE-321"},"SUBMARINE-321")))}d.isMDXComponent=!0}}]);