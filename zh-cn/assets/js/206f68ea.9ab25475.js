"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2953],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return d}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,v=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?t.createElement(v,s(s({ref:n},c),{},{components:r})):t.createElement(v,s({ref:n},c))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3639:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={title:"Submarine Server Implementation"},l=void 0,u={unversionedId:"designDocs/submarine-server/architecture",id:"version-0.7.0/designDocs/submarine-server/architecture",title:"Submarine Server Implementation",description:"\x3c!--",source:"@site/versioned_docs/version-0.7.0/designDocs/submarine-server/architecture.md",sourceDirName:"designDocs/submarine-server",slug:"/designDocs/submarine-server/architecture",permalink:"/zh-cn/docs/designDocs/submarine-server/architecture",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.7.0/designDocs/submarine-server/architecture.md",tags:[],version:"0.7.0",frontMatter:{title:"Submarine Server Implementation"},sidebar:"docs",previous:{title:"Storage Implementation",permalink:"/zh-cn/docs/designDocs/storage-implementation"},next:{title:"Generic Experiment Spec",permalink:"/zh-cn/docs/designDocs/submarine-server/experimentSpec"}},c={},m=[{value:"Architecture Overview",id:"architecture-overview",level:2},{value:"Submarine Server and its APIs",id:"submarine-server-and-its-apis",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Submarine Server Components",id:"submarine-server-components",level:2},{value:"Experiment Manager",id:"experiment-manager",level:3},{value:"Notebook Sessions Manager",id:"notebook-sessions-manager",level:3},{value:"Environment Manager",id:"environment-manager",level:3},{value:"Model Registry",id:"model-registry",level:3},{value:"Model Serving Manager",id:"model-serving-manager",level:3},{value:"Compute Cluster Manager",id:"compute-cluster-manager",level:3},{value:"Dataset Manager",id:"dataset-manager",level:3},{value:"User/team permissions manager",id:"userteam-permissions-manager",level:3},{value:"Metadata Manager",id:"metadata-manager",level:3},{value:"Components/services outside of Submarine Server&#39;s scope",id:"componentsservices-outside-of-submarine-servers-scope",level:2}],p={toc:m};function d(e){var n=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"architecture-overview"},"Architecture Overview"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    +---------------Submarine Server ---+\n    |                                   |\n    | +------------+ +------------+     |\n    | |Web Svc/Prxy| |Backend Svc |     |    +--Submarine Asset +\n    | +------------+ +------------+     |    |Project/Notebook  |\n    |   ^         ^                     |    |Model/Metrics     |\n    +---|---------|---------------------+    |Libraries/Dataset |\n        |         |                          +------------------+\n        |         |\n        |      +--|-Compute Cluster 1---+    +--Image Registry--+\n        +      |  |                     |    |   User's Images  |\n      User /   |  +                     |    |                  |\n      Admin    | User Notebook Instance |    +------------------+\n               | Experiment Runs        |\n               +------------------------+    +-Data Storage-----+\n                                             | S3/HDFS, etc.    |\n               +----Compute Cluster 2---+    |                  |\n                                             +------------------+\n                        ...\n")),(0,o.kt)("p",null,"Here's a diagram to illustrate the Submarine's deployment."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Submarine Server consists of web service/proxy, and backend services. They\'re like "control planes" of Submarine, and users will interact with these services.'),(0,o.kt)("li",{parentName:"ul"},"Submarine server could be a microservice architecture and can be deployed to one of the compute clusters. (see below, this will be useful when we only have one cluster)."),(0,o.kt)("li",{parentName:"ul"},"There're multiple compute clusters that could be used by Submarine service. For user's running notebook instance, jobs, etc. they will be placed to one of the compute clusters by user's preference or defined policies."),(0,o.kt)("li",{parentName:"ul"},"Submarine's asset includes project/notebook(content)/models/metrics/dataset-meta, etc. can be stored inside Submarine's own database."),(0,o.kt)("li",{parentName:"ul"},"Datasets can be stored in various locations such as S3/HDFS."),(0,o.kt)("li",{parentName:"ul"},"Users can push container (such as Docker) images to a preconfigured registry in Submarine, so Submarine service can know how to pull required container images."),(0,o.kt)("li",{parentName:"ul"},"Image Registry/Data-Storage, etc. are outside of Submarine server's scope and should be managed by 3rd party applications.")),(0,o.kt)("h2",{id:"submarine-server-and-its-apis"},"Submarine Server and its APIs"),(0,o.kt)("p",null,"Submarine server is designed to allow data scientists to access notebooks, submit/manage jobs, manage models, create model training workflows, access datasets, etc."),(0,o.kt)("p",null,"Submarine Server exposed UI and REST API. Users can also use CLI / SDK to manage assets inside Submarine Server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"           +----------+\n           | CLI      |+---+\n           +----------+    v              +----------------+\n                         +--------------+ | Submarine      |\n           +----------+  | REST API     | |                |\n           | SDK      |+>|              |+>  Server        |\n           +----------+  +--------------+ |                |\n                           ^              +----------------+\n           +----------+    |\n           | UI       |+---+\n           +----------+\n")),(0,o.kt)("p",null,"REST API will be used by the other 3 approaches. (CLI/SDK/UI)"),(0,o.kt)("p",null,"The REST API Service handles HTTP requests and is responsible for authentication. It acts as the caller for the JobManager component."),(0,o.kt)("p",null,"The REST component defines the generic job spec which describes the detailed info about job. For more details, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1kd-5UzsHft6gV7EuZiPXeWIKJtPqVwkNlqMvy0P_pAw/edit#"},"here"),". (Please note that we're converting REST endpoint description from Java-based REST API to swagger definition, once that is done, we should replace the link with swagger definition spec)."),(0,o.kt)("h2",{id:"proposal"},"Proposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n+-----------+\n|           |\n| workbench +---+   +----------------------------------+\n|           |   |   | +------+ +---------------------+ |\n+-----------+   |   | |      | |      +-------+      | |     +---------------------+\n                |   | |      | |      |  K8s  |      | |     | +--------+   +----+ |\n+-----------+   |   | |      | |      +-------+      | |     | |        +--\x3e+job1| |\n|           |   |   | |      | |      submitter      | |     | |        |   +----+ |\n|    CLI    +------\x3e+ | REST | +---------------------+ +----\x3e+ |operator|   +----+ |\n|           |   |   | |      | +---------------------+ |     | |        +--\x3e+job2| |\n+-----------+   |   | |      | | +-------+ +-------+ | |     | +--------+   +----+ |\n                |   | |      | | |PlugMgr| |monitor| | |     |     K8s Cluster     |\n+-----------+   |   | |      | | +-------+ +-------+ | |     +---------------------+\n|           |   |   | |      | |      JobManager     | |\n|    SDK    +---+   | +------+ +---------------------+ |\n|           |       +----------------------------------+\n+-----------+\n   client                          server\n")),(0,o.kt)("p",null,"We propose to split the original core module in the old layout into two modules, CLI and server as shown in FIG. The submarine-client calls the REST APIs to submit and retrieve the job info. The submarine-server provides the REST service, job management, submitting the job to cluster, and running job in different clusters through the corresponding runtime."),(0,o.kt)("h2",{id:"submarine-server-components"},"Submarine Server Components"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n   +----------------------Submarine Server--------------------------------+\n   | +-----------------+ +------------------+ +--------------------+      |\n   | |  Experiment     | |Notebook Session  | |Environment Mgr     |      |\n   | |  Mgr            | |Mgr               | |                    |      |\n   | +-----------------+ +------------------+ +--------------------+      |\n   |                                                                      |\n   | +-----------------+ +------------------+ +--------------------+      |\n   | |  Model Registry | |Model Serving Mgr | |Compute Cluster Mgr |      |\n   | |                 | |                  | |                    |      |\n   | +-----------------+ +------------------+ +--------------------+      |\n   |                                                                      |\n   | +-----------------+ +------------------+ +--------------------+      |\n   | | DataSet Mgr     | |User/Team         | |Metadata Mgr        |      |\n   | |                 | |Permission Mgr    | |                    |      |\n   | +-----------------+ +------------------+ +--------------------+      |\n   +----------------------------------------------------------------------+\n")),(0,o.kt)("h3",{id:"experiment-manager"},"Experiment Manager"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h3",{id:"notebook-sessions-manager"},"Notebook Sessions Manager"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h3",{id:"environment-manager"},"Environment Manager"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h3",{id:"model-registry"},"Model Registry"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h3",{id:"model-serving-manager"},"Model Serving Manager"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h3",{id:"compute-cluster-manager"},"Compute Cluster Manager"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h3",{id:"dataset-manager"},"Dataset Manager"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h3",{id:"userteam-permissions-manager"},"User/team permissions manager"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h3",{id:"metadata-manager"},"Metadata Manager"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h2",{id:"componentsservices-outside-of-submarine-servers-scope"},"Components/services outside of Submarine Server's scope"),(0,o.kt)("p",null,"TODO: Describe what are the out-of-scope components, which should be handled and managed outside of Submarine server. Candidates are: Identity management, data storage, metastore storage, etc."))}d.isMDXComponent=!0}}]);