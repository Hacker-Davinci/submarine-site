"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1238],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return b}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=c(n),b=r,k=l["".concat(p,".").concat(b)]||l[b]||u[b]||i;return n?o.createElement(k,a(a({ref:t},m),{},{components:n})):o.createElement(k,a({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},7045:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"Jupyter Notebook"},p=void 0,c={unversionedId:"gettingStarted/notebook",id:"version-0.6.0/gettingStarted/notebook",title:"Jupyter Notebook",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/gettingStarted/notebook.md",sourceDirName:"gettingStarted",slug:"/gettingStarted/notebook",permalink:"/zh-cn/docs/0.6.0/gettingStarted/notebook",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/gettingStarted/notebook.md",tags:[],version:"0.6.0",frontMatter:{title:"Jupyter Notebook"},sidebar:"docs",previous:{title:"Quickstart",permalink:"/zh-cn/docs/0.6.0/gettingStarted/quickstart"},next:{title:"Experiment REST API",permalink:"/zh-cn/docs/0.6.0/userDocs/api/experiment"}},m={},u=[{value:"Working with notebooks",id:"working-with-notebooks",level:2},{value:"Notebooks Web UI",id:"notebooks-web-ui",level:3},{value:"Experiment with your notebook",id:"experiment-with-your-notebook",level:2}],l={toc:u};function b(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide describes how to use Jupyter notebook in Submarine to launch\nand manage Jupyter notebooks."),(0,i.kt)("h2",{id:"working-with-notebooks"},"Working with notebooks"),(0,i.kt)("p",null,"We recommend using Web UI to manage notebooks."),(0,i.kt)("h3",{id:"notebooks-web-ui"},"Notebooks Web UI"),(0,i.kt)("p",null,"Notebooks can be started from the Web UI. You can click the \u201cNotebook\u201d tab in the\nleft-hand panel to manage your notebooks."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8604).Z,width:"2483",height:"1016"})),(0,i.kt)("p",null,"To create a new notebook server, click \u201cNew Notebook\u201d. You should see a form for entering\ndetails of your new notebook server."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Notebook Name : Name of the notebook server. It should follow the rules below.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Contain at most 63 characters."),(0,i.kt)("li",{parentName:"ol"},"Contain only lowercase alphanumeric characters or '-'."),(0,i.kt)("li",{parentName:"ol"},"Start with an alphabetic character."),(0,i.kt)("li",{parentName:"ol"},"End with an alphanumeric character."))),(0,i.kt)("li",{parentName:"ul"},"Environment : It defines a set of libraries and docker image."),(0,i.kt)("li",{parentName:"ul"},"CPU and Memory"),(0,i.kt)("li",{parentName:"ul"},"GPU (optional)"),(0,i.kt)("li",{parentName:"ul"},"EnvVar (optional) : Injects environment variables into the notebook.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If you\u2019re not sure which environment you need, please choose the environment \u201cnotebook-env\u201d\nfor the new notebook.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9443).Z,width:"1299",height:"646"})),(0,i.kt)("p",null,"You should see your new notebook server. Click the name of your notebook server to connect to it."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5672).Z,width:"1298",height:"647"})),(0,i.kt)("h2",{id:"experiment-with-your-notebook"},"Experiment with your notebook"),(0,i.kt)("p",null,"The environment \u201cnotebook-env\u201d includes Submarine Python SDK which can talk to Submarine Server to\ncreate experiments, as the example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from __future__ import print_function\nimport submarine\nfrom submarine.experiment.models.environment_spec import EnvironmentSpec\nfrom submarine.experiment.models.experiment_spec import ExperimentSpec\nfrom submarine.experiment.models.experiment_task_spec import ExperimentTaskSpec\nfrom submarine.experiment.models.experiment_meta import ExperimentMeta\nfrom submarine.experiment.models.code_spec import CodeSpec\n\n# Create Submarine Client\nsubmarine_client = submarine.ExperimentClient()\n\n# Define TensorFlow experiment spec\nenvironment = EnvironmentSpec(image='apache/submarine:tf-dist-mnist-test-1.0')\nexperiment_meta = ExperimentMeta(name='mnist-dist',\n                                 namespace='default',\n                                 framework='Tensorflow',\n                                 cmd='python /var/tf_dist_mnist/dist_mnist.py --train_steps=100',\n                                 env_vars={'ENV1': 'ENV1'})\n\nworker_spec = ExperimentTaskSpec(resources='cpu=1,memory=1024M',\n                                 replicas=1)\nps_spec = ExperimentTaskSpec(resources='cpu=1,memory=1024M',\n                                 replicas=1)\ncode_spec = CodeSpec(sync_mode='git', url='https://github.com/apache/submarine.git')\n\nexperiment_spec = ExperimentSpec(meta=experiment_meta,\n                                 environment=environment,\n                                 code=code_spec,\n                                 spec={'Ps' : ps_spec,'Worker': worker_spec})\n\n# Create experiment\nexperiment = submarine_client.create_experiment(experiment_spec=experiment_spec)\n\n")),(0,i.kt)("p",null,"You can create a new notebook, paste the above code and run it. Or, you can find the notebook ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/submarine/blob/master/submarine-sdk/pysubmarine/example/submarine_experiment_sdk.ipynb"},(0,i.kt)("inlineCode",{parentName:"a"},"submarine_experiment_sdk.ipynb"))," inside the launched notebook session. You can open it, try it out."),(0,i.kt)("p",null,"After experiment submitted to Submarine server, you can find the experiment jobs on the UI."))}b.isMDXComponent=!0},5672:function(e,t,n){t.Z=n.p+"assets/images/created-notebook-360544388021273ece4a1d7fba8900ee.png"},9443:function(e,t,n){t.Z=n.p+"assets/images/notebook-form-1c2959c2de638b11edb28f20e2fe171b.png"},8604:function(e,t,n){t.Z=n.p+"assets/images/notebook-list-507c0f9a50f6cd5637891c13c62d4650.png"}}]);