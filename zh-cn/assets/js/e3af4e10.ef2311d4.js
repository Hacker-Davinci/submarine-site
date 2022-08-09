"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3198],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5888:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Architecture and Requirment"},l=void 0,d={unversionedId:"designDocs/architecture-and-requirements",id:"designDocs/architecture-and-requirements",title:"Architecture and Requirment",description:"\x3c!--",source:"@site/docs/designDocs/architecture-and-requirements.md",sourceDirName:"designDocs",slug:"/designDocs/architecture-and-requirements",permalink:"/zh-cn/docs/next/designDocs/architecture-and-requirements",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/designDocs/architecture-and-requirements.md",tags:[],version:"current",frontMatter:{title:"Architecture and Requirment"},sidebar:"docs",previous:{title:"Resources",permalink:"/zh-cn/docs/next/community/Resources"},next:{title:"Implementation Notes",permalink:"/zh-cn/docs/next/designDocs/implementation-notes"}},c={},m=[{value:"Terminology",id:"terminology",level:2},{value:"Background",id:"background",level:2},{value:"Machine Learning Workflows &amp; Pain points",id:"machine-learning-workflows--pain-points",level:2},{value:"Pain #1 Complex workflow/steps from raw data to model, different tools needed by different steps, hard to make changes to workflow, and not error-proof",id:"pain-1-complex-workflowsteps-from-raw-data-to-model-different-tools-needed-by-different-steps-hard-to-make-changes-to-workflow-and-not-error-proof",level:3},{value:"Pain #2 Dependencies of underlying resource management platform",id:"pain-2-dependencies-of-underlying-resource-management-platform",level:3},{value:"Pain #3 Data scientist are forced to interact with lower-level platform components",id:"pain-3-data-scientist-are-forced-to-interact-with-lower-level-platform-components",level:3},{value:"Pain #4 Comply with data security/governance requirements",id:"pain-4-comply-with-data-securitygovernance-requirements",level:3},{value:"Pain #5 No good way to reduce routine ML code development",id:"pain-5-no-good-way-to-reduce-routine-ml-code-development",level:3},{value:"Overview",id:"overview",level:2},{value:"A little bit history",id:"a-little-bit-history",level:3},{value:"Why Submarine?",id:"why-submarine",level:3},{value:"Requirements and non-requirements",id:"requirements-and-non-requirements",level:2},{value:"Notebook",id:"notebook",level:3},{value:"Experiment",id:"experiment",level:3},{value:"Type of experiments",id:"type-of-experiments",level:4},{value:"Adhoc experiment",id:"adhoc-experiment",level:4},{value:"Predefined experiment library",id:"predefined-experiment-library",level:4},{value:"Pipeline",id:"pipeline",level:4},{value:"Environment Profiles",id:"environment-profiles",level:3},{value:"Model",id:"model",level:3},{value:"Model management",id:"model-management",level:4},{value:"Model serving",id:"model-serving",level:4},{value:"Metrics for training job and model",id:"metrics-for-training-job-and-model",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Security / Access Control / User Management / Quota Management",id:"security--access-control--user-management--quota-management",level:3},{value:"Dataset",id:"dataset",level:3},{value:"Architecture Overview",id:"architecture-overview",level:2},{value:"Architecture Diagram",id:"architecture-diagram",level:3}],u={toc:m};function p(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"terminology"},"Terminology"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Term"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"User"),(0,o.kt)("td",{parentName:"tr",align:null},"A single data-scientist/data-engineer. User has resource quota, credentials")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Team"),(0,o.kt)("td",{parentName:"tr",align:null},"User belongs to one or more teams, teams have ACLs for artifacts sharing such as notebook content, model, etc.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Admin"),(0,o.kt)("td",{parentName:"tr",align:null},"Also called SRE, who manages user's quotas, credentials, team, and other components.")))),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"Everybody talks about machine learning today, and lots of companies are trying to leverage machine learning to push the business to the next level. Nowadays, as more and more developers, infrastructure software companies coming to this field, machine learning becomes more and more achievable."),(0,o.kt)("p",null,"In the last decade, the software industry has built many open source tools for machine learning to solve the pain points:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It was not easy to build machine learning algorithms manually, such as logistic regression, GBDT, and many other algorithms:\n",(0,o.kt)("strong",{parentName:"p"},"Answer to that:")," Industries have open sourced many algorithm libraries, tools, and even pre-trained models so that data scientists can directly reuse these building blocks to hook up to their data without knowing intricate details inside these algorithms and models.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'It was not easy to achieve "WYSIWYG, what you see is what you get" from IDEs: not easy to get output, visualization, troubleshooting experiences at the same place.\n',(0,o.kt)("strong",{parentName:"p"},"Answer to that:")," Notebooks concept was added to this picture, notebook brought the experiences of interactive coding, sharing, visualization, debugging under the same user interface. There're popular open-source notebooks like Apache Zeppelin/Jupyter.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It was not easy to manage dependencies: ML applications can run on one machine is hard to deploy on another machine because it has lots of libraries dependencies.\n",(0,o.kt)("strong",{parentName:"p"},"Answer to that:"),' Containerization becomes popular and a standard to packaging dependencies to make it easier to "build once, run anywhere".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fragmented tools, libraries were hard for ML engineers to learn. Experiences learned in one company are not naturally migratable to another company.\n",(0,o.kt)("strong",{parentName:"p"},"Answer to that:")," A few dominant open-source frameworks reduced the overhead of learning too many different frameworks, concepts. Data-scientist can learn a few libraries such as Tensorflow/PyTorch, and a few high-level wrappers like Keras will be able to create your machine learning application from other open-source building blocks.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Similarly, models built by one library (such as libsvm) were hard to be integrated into machine learning pipeline since there's no standard format.\n",(0,o.kt)("strong",{parentName:"p"},"Answer to that:")," Industry has built successful open-source standard machine learning frameworks such as Tensorflow/PyTorch/Keras so their format can be easily shared across. And efforts to build an even more general model format such as ONNX.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It was hard to build a data pipeline that flows/transform data from a raw data source to whatever required by ML applications.\n",(0,o.kt)("strong",{parentName:"p"},"Answer to that:")," Open source big data industry plays an important role in providing, simplify, unify processes and building blocks for data flows, transformations, etc."))),(0,o.kt)("p",null,"The machine learning industry is moving on the right track to solve major roadblocks. So what are the pain points now for companies which have machine learning needs? What can we help here? To answer this question, let's look at machine learning workflow first."),(0,o.kt)("h2",{id:"machine-learning-workflows--pain-points"},"Machine Learning Workflows & Pain points"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1) From different data sources such as edge, clickstream, logs, etc.\n   => Land to data lakes\n\n2) From data lake, data transformation:\n   => Data transformations: Cleanup, remove invalid rows/columns,\n                            select columns, sampling, split train/test\n                            data-set, join table, etc.\n   => Data prepared for training.\n\n3) From prepared data:\n   => Training, model hyper-parameter tuning, cross-validation, etc.\n   => Models saved to storage.\n\n4) From saved models:\n   => Model assurance, deployment, A/B testing, etc.\n   => Model deployed for online serving or offline scoring.\n")),(0,o.kt)("p",null,"Typically data scientists responsible for item 2)-4), 1) typically handled by a different team (called Data Engineering team in many companies, some Data Engineering team also responsible for part of data transformation)"),(0,o.kt)("h3",{id:"pain-1-complex-workflowsteps-from-raw-data-to-model-different-tools-needed-by-different-steps-hard-to-make-changes-to-workflow-and-not-error-proof"},"Pain ","#","1 Complex workflow/steps from raw data to model, different tools needed by different steps, hard to make changes to workflow, and not error-proof"),(0,o.kt)("p",null,"It is a complex workflow from raw data to usable models, after talking to many different data scientists, we have learned that a typical procedure to train a new model and push to production can take months to 1-2 years."),(0,o.kt)("p",null,"It is also a wide skill set required by this workflow. For example, data transformation needs tools like Spark/Hive for large scale and tools like Pandas for a small scale. And model training needs to be switched between XGBoost, Tensorflow, Keras, PyTorch. Building a data pipeline requires Apache Airflow or Oozie."),(0,o.kt)("p",null,"Yes, there are great, standardized open-source tools built for many of such purposes. But how about changes need to be made for a particular part of the data pipeline? How about adding a few columns to the training data for experiments? How about training models, and push models to validation, A/B testing before rolling to production? All these steps need jumping between different tools, UIs, and very hard to make changes, and it is not error-proof during these procedures."),(0,o.kt)("h3",{id:"pain-2-dependencies-of-underlying-resource-management-platform"},"Pain ","#","2 Dependencies of underlying resource management platform"),(0,o.kt)("p",null,"To make jobs/services required by a machine learning platform to be able to run, we need an underlying resource management platform. There're some choices of resource management platform, and they have distinct advantages and disadvantages."),(0,o.kt)("p",null,"For example, there're many machine learning platform built on top of K8s. It is relatively easy to get a K8s from a cloud vendor, easy to orchestrate machine learning required services/daemons run on K8s. However, K8s doesn't offer good support jobs like Spark/Flink/Hive. So if your company has Spark/Flink/Hive running on YARN, there're gaps and a significant amount of work to move required jobs from YARN to K8s. Maintaining a separate K8s cluster is also overhead to Hadoop-based data infrastructure."),(0,o.kt)("p",null,"Similarly, if your company's data pipelines are mostly built on top of cloud resources and SaaS offerings, asking you to install a separate YARN cluster to run a new machine learning platform doesn't make a lot of sense."),(0,o.kt)("h3",{id:"pain-3-data-scientist-are-forced-to-interact-with-lower-level-platform-components"},"Pain ","#","3 Data scientist are forced to interact with lower-level platform components"),(0,o.kt)("p",null,"In addition to the above pain, we do see Data Scientists are forced to learn underlying platform knowledge to be able to build a real-world machine learning workflow."),(0,o.kt)("p",null,"For most of the data scientists we talked with, they're experts of ML algorithms/libraries, feature engineering, etc. They're also most familiar with Python, R, and some of them understand Spark, Hive, etc."),(0,o.kt)("p",null,"If they're asked to do interactions with lower-level components like fine-tuning a Spark job's performance; or troubleshooting job failed to launch because of resource constraints; or write a K8s/YARN job spec and mount volumes, set networks properly. They will scratch their heads and typically cannot perform these operations efficiently."),(0,o.kt)("h3",{id:"pain-4-comply-with-data-securitygovernance-requirements"},"Pain ","#","4 Comply with data security/governance requirements"),(0,o.kt)("p",null,"TODO: Add more details."),(0,o.kt)("h3",{id:"pain-5-no-good-way-to-reduce-routine-ml-code-development"},"Pain ","#","5 No good way to reduce routine ML code development"),(0,o.kt)("p",null,"After the data is prepared, the data scientist needs to do several routine tasks to build the ML pipeline. To get a sense of the existing the data set, it usually needs a split of the data set, the statistics of data set. These tasks have a common duplicate part of code, which reduces the efficiency of data scientists."),(0,o.kt)("p",null,"An abstraction layer/framework to help the developer to boost ML pipeline development could be valuable. It's better than the developer only needs to fill callback function to focus on their key logic."),(0,o.kt)("h1",{id:"submarine"},"Submarine"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("h3",{id:"a-little-bit-history"},"A little bit history"),(0,o.kt)("p",null,"Initially, Submarine is built to solve problems of running deep learning jobs like Tensorflow/PyTorch on Apache Hadoop YARN, allows admin to monitor launched deep learning jobs, and manage generated models."),(0,o.kt)("p",null,"It was part of YARN initially, and code resides under ",(0,o.kt)("inlineCode",{parentName:"p"},"hadoop-yarn-applications"),". Later, the community decided to convert it to be a subproject within Hadoop (Sibling project of YARN, HDFS, etc.) because we want to support other resource management platforms like K8s. And finally, we're reconsidering Submarine's charter, and the Hadoop community voted that it is the time to moved Submarine to a separate Apache TLP."),(0,o.kt)("h3",{id:"why-submarine"},"Why Submarine?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ONE PLATFORM")),(0,o.kt)("p",null,"Submarine is the ONE PLATFORM to allow Data Scientists to create end-to-end machine learning workflow. ",(0,o.kt)("inlineCode",{parentName:"p"},"ONE PLATFORM")," means it supports Data Scientists and data engineers to finish their jobs on the same platform without frequently switching their toolsets. From dataset exploring data pipeline creation, model training, and tuning, and push model to production. All these steps can be completed within the ",(0,o.kt)("inlineCode",{parentName:"p"},"ONE PLATFORM"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Resource Management Independent")),(0,o.kt)("p",null,"It is also designed to be resource management independent, no matter if you have Apache Hadoop YARN, K8s, or just a container service, you will be able to run Submarine on top it."),(0,o.kt)("h2",{id:"requirements-and-non-requirements"},"Requirements and non-requirements"),(0,o.kt)("h3",{id:"notebook"},"Notebook"),(0,o.kt)("p",null,"1) Users should be able to create, edit, delete a notebook. (P0)\n2) Notebooks can be persisted to storage and can be recovered if failure happens. (P0)\n3) Users can trace back to history versions of a notebook. (P1)\n4) Notebooks can be shared with different users. (P1)\n5) Users can define a list of parameters of a notebook (looks like parameters of the notebook's main function) to allow executing a notebook like a job. (P1)\n6) Different users can collaborate on the same notebook at the same time. (P2)"),(0,o.kt)("p",null,"A running notebook instance is called notebook session (or session for short)."),(0,o.kt)("h3",{id:"experiment"},"Experiment"),(0,o.kt)("p",null,"Experiments of Submarine is an offline task. It could be a shell command, a Python command, a Spark job, a SQL query, or even a workflow."),(0,o.kt)("p",null,"The primary purposes of experiments under Submarine's context is to do training tasks, offline scoring, etc. However, experiment can be generalized to do other tasks as well."),(0,o.kt)("p",null,"Major requirement of experiment:"),(0,o.kt)("p",null,"1) Experiments can be submitted from UI/CLI/SDK.\n2) Experiments can be monitored/managed from UI/CLI/SDK.\n3) Experiments should not bind to one resource management platform (K8s)."),(0,o.kt)("h4",{id:"type-of-experiments"},"Type of experiments"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(464).Z,width:"946",height:"734"})),(0,o.kt)("p",null,"There're two types of experiments:\n",(0,o.kt)("inlineCode",{parentName:"p"},"Adhoc experiments"),": which includes a Python/R/notebook, or even an adhoc Tensorflow/PyTorch task, etc."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Predefined experiment library"),": This is specialized experiments, which including developed libraries such as CTR, BERT, etc. Users are only required to specify a few parameters such as input, output, hyper parameters, etc. Instead of worrying about where's training script/dependencies located."),(0,o.kt)("h4",{id:"adhoc-experiment"},"Adhoc experiment"),(0,o.kt)("p",null,"Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Allow run adhoc scripts."),(0,o.kt)("li",{parentName:"ul"},"Allow model engineer, data scientist to run Tensorflow/Pytorch programs on K8s/Container-cloud."),(0,o.kt)("li",{parentName:"ul"},"Allow jobs easy access data/models in HDFS/s3, etc."),(0,o.kt)("li",{parentName:"ul"},"Support run distributed Tensorflow/Pytorch jobs with simple configs."),(0,o.kt)("li",{parentName:"ul"},"Support run user-specified Docker images."),(0,o.kt)("li",{parentName:"ul"},"Support specify GPU and other resources.")),(0,o.kt)("h4",{id:"predefined-experiment-library"},"Predefined experiment library"),(0,o.kt)("p",null,"Here's an example of predefined experiment library to train deepfm model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "input": {\n    "train_data": ["hdfs:///user/submarine/data/tr.libsvm"],\n    "valid_data": ["hdfs:///user/submarine/data/va.libsvm"],\n    "test_data": ["hdfs:///user/submarine/data/te.libsvm"],\n    "type": "libsvm"\n  },\n  "output": {\n    "save_model_dir": "hdfs:///user/submarine/deepfm",\n    "metric": "auc"\n  },\n  "training": {\n    "batch_size" : 512,\n    "field_size": 39,\n    "num_epochs": 3,\n    "feature_size": 117581,\n    ...\n  }\n}\n')),(0,o.kt)("p",null,"Predefined experiment libraries can be shared across users on the same platform, users can also add new or modified predefined experiment library via UI/REST API."),(0,o.kt)("p",null,"We will also model AutoML, auto hyper-parameter tuning to predefined experiment library."),(0,o.kt)("h4",{id:"pipeline"},"Pipeline"),(0,o.kt)("p",null,"Pipeline is a special kind of experiment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A pipeline is a DAG of experiments."),(0,o.kt)("li",{parentName:"ul"},"Can be also treated as a special kind of experiment."),(0,o.kt)("li",{parentName:"ul"},"Users can submit/terminate a pipeline."),(0,o.kt)("li",{parentName:"ul"},"Pipeline can be created/submitted via UI/API.")),(0,o.kt)("h3",{id:"environment-profiles"},"Environment Profiles"),(0,o.kt)("p",null,"Environment profiles (or environment for short) defines a set of libraries and when Docker is being used, a Docker image in order to run an experiment or a notebook."),(0,o.kt)("p",null,"Docker or VM image (such as AMI: Amazon Machine Images) defines the base layer of the environment."),(0,o.kt)("p",null,"On top of that, users can define a set of libraries (such as Python/R) to install."),(0,o.kt)("p",null,"Users can save different environment configs which can be also shared across the platform. Environment profiles can be used to run a notebook (e.g. by choosing different kernel from Jupyter), or an experiment. Predefined experiment library includes what environment to use so users don't have to choose which environment to use."),(0,o.kt)("p",null,"Environments can be added/listed/deleted/selected through CLI/SDK."),(0,o.kt)("h3",{id:"model"},"Model"),(0,o.kt)("h4",{id:"model-management"},"Model management"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Model artifacts are generated by experiments or notebook."),(0,o.kt)("li",{parentName:"ul"},"A model consists of artifacts from one or multiple files."),(0,o.kt)("li",{parentName:"ul"},"Users can choose to save, tag, version a produced model."),(0,o.kt)("li",{parentName:"ul"},"Once The Model is saved, Users can do the online model serving or offline scoring of the model.")),(0,o.kt)("h4",{id:"model-serving"},"Model serving"),(0,o.kt)("p",null,"After model saved, users can specify a serving script, a model and create a web service to serve the model."),(0,o.kt)("p",null,'We call the web service to "endpoint". Users can manage (add/stop) model serving endpoints via CLI/API/UI.'),(0,o.kt)("h3",{id:"metrics-for-training-job-and-model"},"Metrics for training job and model"),(0,o.kt)("p",null,"Submarine-SDK provides tracking/metrics APIs, which allows developers to add tracking/metrics and view tracking/metrics from Submarine Workbench UI."),(0,o.kt)("h3",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"Submarine Services (See architecture overview below) should be deployed easily on-prem / on-cloud. Since there're more and more public cloud offering for compute/storage management on cloud, we need to support deploy Submarine compute-related workloads (such as notebook session, experiments, etc.) to cloud-managed clusters."),(0,o.kt)("p",null,"This also include Submarine may need to take input parameters from customers and create/manage clusters if needed. It is also a common requirement to use hybrid of on-prem/on-cloud clusters."),(0,o.kt)("h3",{id:"security--access-control--user-management--quota-management"},"Security / Access Control / User Management / Quota Management"),(0,o.kt)("p",null,"There're 4 kinds of objects need access-control:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assets belong to Submarine system, which includes notebook, experiments and results, models, predefined experiment libraries, environment profiles."),(0,o.kt)("li",{parentName:"ul"},"Data security. (Who owns what data, and what data can be accessed by each users)."),(0,o.kt)("li",{parentName:"ul"},"User credentials. (Such as LDAP)."),(0,o.kt)("li",{parentName:"ul"},"Other security, such as Git repo access, etc.")),(0,o.kt)("p",null,"For the data security / user credentials / other security, it will be delegated to 3rd libraries such as Apache Ranger, IAM roles, etc."),(0,o.kt)("p",null,"Assets belong to Submarine system will be handled by Submarine itself."),(0,o.kt)("p",null,"Here're operations which Submarine admin can do for users / teams which can be used to access Submarine's assets."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Operations for admins")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Admin uses "User Management System" to onboard new users, upload user credentials, assign resource quotas, etc.'),(0,o.kt)("li",{parentName:"ul"},"Admins can create new users, new teams, update user/team mappings. Or remove users/teams."),(0,o.kt)("li",{parentName:"ul"},"Admin can set resource quotas (if different from system default), permissions, upload/update necessary credentials (like Kerberos keytab) of a user."),(0,o.kt)("li",{parentName:"ul"},"A DE/DS can also be an admin if the DE/DS has admin access. (Like a privileged user). This will be useful when a cluster is exclusively shared by a user or only shared by a small team."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Resource Quota Management System")," helps admin to manage resources quotas of teams, organizations. Resources can be machine resources like CPU/Memory/Disk, etc. It can also include non-machine resources like $$-based budgets.")),(0,o.kt)("h3",{id:"dataset"},"Dataset"),(0,o.kt)("p",null,"There's also need to tag dataset which will be used for training and shared across the platform by different users."),(0,o.kt)("p",null,"Like mentioned above, access to the actual data will be handled by 3rd party system like Apache Ranger / Hive Metastore which is out of the Submarine's scope."),(0,o.kt)("h2",{id:"architecture-overview"},"Architecture Overview"),(0,o.kt)("h3",{id:"architecture-diagram"},"Architecture Diagram"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"     +-----------------------------------------------------------------+\n     |            Submarine UI / CLI / REST API / SDK                  |\n     |                 Mini-Submarine                                  |\n     +-----------------------------------------------------------------+\n\n     +--------------------Submarine Server-----------------------------+\n     | +---------+ +---------+ +----------+ +----------+ +------------+|\n     | |Data set | |Notebooks| |Experiment| |Models    | |Servings    ||\n     | +---------+ +---------+ +----------+ +----------+ +------------+|\n     |-----------------------------------------------------------------|\n     |                                                                 |\n     | +-----------------+ +-----------------+ +---------------------+ |\n     | |Experiment       | |Compute Resource | |Other Management     | |\n     | |Manager          | |   Manager       | |Services             | |\n     | +-----------------+ +-----------------+ +---------------------+ |\n     |   Spark, template      K8s/Docker                          |\n     |   TF, PyTorch, pipeline                                         |\n     |                                                                 |\n     + +-----------------+                                             +\n     | |Submarine Meta   |                                             |\n     | |    Store        |                                             |\n     | +-----------------+                                             |\n     |                                                                 |\n     +-----------------------------------------------------------------+\n\n      (You can use http://stable.ascii-flow.appspot.com/#Draw\n      to draw such diagrams)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Compute Resource Manager")," Helps to manage compute resources on-prem/on-cloud, this module can also handle cluster creation / management, etc."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Experiment Manager"),' Work with "Compute Resource Manager" to submit different kinds of workloads such as (distributed) Tensorflow / Pytorch, etc.'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Submarine SDK")," provides Java/Python/REST API to allow DS or other engineers to integrate into Submarine services. It also includes a ",(0,o.kt)("inlineCode",{parentName:"p"},"mini-submarine")," component that launches Submarine components from a single Docker container (or a VM image)."),(0,o.kt)("p",null,"Details of Submarine Server design can be found at ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/designDocs/submarine-server/architecture"},"submarine-server-design"),"."))}p.isMDXComponent=!0},464:function(e,t,n){t.Z=n.p+"assets/images/experiments-7a09831687ecbc0e1dcf01b0c6f45445.png"}}]);