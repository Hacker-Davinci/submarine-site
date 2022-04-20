(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(193)),i={title:"Architecture and Requirment"},s={unversionedId:"designDocs/architecture-and-requirements",id:"designDocs/architecture-and-requirements",isDocsHomePage:!1,title:"Architecture and Requirment",description:"\x3c!--",source:"@site/docs/designDocs/architecture-and-requirements.md",slug:"/designDocs/architecture-and-requirements",permalink:"/docs/next/designDocs/architecture-and-requirements",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/designDocs/architecture-and-requirements.md",version:"current",sidebar:"docs",previous:{title:"Resources",permalink:"/docs/next/community/Resources"},next:{title:"Implementation Notes",permalink:"/docs/next/designDocs/implementation-notes"}},l=[{value:"Terminology",id:"terminology",children:[]},{value:"Background",id:"background",children:[]},{value:"Machine Learning Workflows &amp; Pain points",id:"machine-learning-workflows--pain-points",children:[{value:"Pain #1 Complex workflow/steps from raw data to model, different tools needed by different steps, hard to make changes to workflow, and not error-proof",id:"pain-1-complex-workflowsteps-from-raw-data-to-model-different-tools-needed-by-different-steps-hard-to-make-changes-to-workflow-and-not-error-proof",children:[]},{value:"Pain #2 Dependencies of underlying resource management platform",id:"pain-2-dependencies-of-underlying-resource-management-platform",children:[]},{value:"Pain #3 Data scientist are forced to interact with lower-level platform components",id:"pain-3-data-scientist-are-forced-to-interact-with-lower-level-platform-components",children:[]},{value:"Pain #4 Comply with data security/governance requirements",id:"pain-4-comply-with-data-securitygovernance-requirements",children:[]},{value:"Pain #5 No good way to reduce routine ML code development",id:"pain-5-no-good-way-to-reduce-routine-ml-code-development",children:[]}]},{value:"Overview",id:"overview",children:[{value:"A little bit history",id:"a-little-bit-history",children:[]},{value:"Why Submarine?",id:"why-submarine",children:[]}]},{value:"Requirements and non-requirements",id:"requirements-and-non-requirements",children:[{value:"Notebook",id:"notebook",children:[]},{value:"Experiment",id:"experiment",children:[]},{value:"Environment Profiles",id:"environment-profiles",children:[]},{value:"Model",id:"model",children:[]},{value:"Metrics for training job and model",id:"metrics-for-training-job-and-model",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Security / Access Control / User Management / Quota Management",id:"security--access-control--user-management--quota-management",children:[]},{value:"Dataset",id:"dataset",children:[]}]},{value:"Architecture Overview",id:"architecture-overview",children:[{value:"Architecture Diagram",id:"architecture-diagram",children:[]}]}],c={toc:l};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"terminology"},"Terminology"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Term"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"User"),Object(o.b)("td",{parentName:"tr",align:null},"A single data-scientist/data-engineer. User has resource quota, credentials")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Team"),Object(o.b)("td",{parentName:"tr",align:null},"User belongs to one or more teams, teams have ACLs for artifacts sharing such as notebook content, model, etc.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Admin"),Object(o.b)("td",{parentName:"tr",align:null},"Also called SRE, who manages user's quotas, credentials, team, and other components.")))),Object(o.b)("h2",{id:"background"},"Background"),Object(o.b)("p",null,"Everybody talks about machine learning today, and lots of companies are trying to leverage machine learning to push the business to the next level. Nowadays, as more and more developers, infrastructure software companies coming to this field, machine learning becomes more and more achievable."),Object(o.b)("p",null,"In the last decade, the software industry has built many open source tools for machine learning to solve the pain points:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"It was not easy to build machine learning algorithms manually, such as logistic regression, GBDT, and many other algorithms:\n",Object(o.b)("strong",{parentName:"p"},"Answer to that:")," Industries have open sourced many algorithm libraries, tools, and even pre-trained models so that data scientists can directly reuse these building blocks to hook up to their data without knowing intricate details inside these algorithms and models.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'It was not easy to achieve "WYSIWYG, what you see is what you get" from IDEs: not easy to get output, visualization, troubleshooting experiences at the same place.\n',Object(o.b)("strong",{parentName:"p"},"Answer to that:")," Notebooks concept was added to this picture, notebook brought the experiences of interactive coding, sharing, visualization, debugging under the same user interface. There're popular open-source notebooks like Apache Zeppelin/Jupyter.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"It was not easy to manage dependencies: ML applications can run on one machine is hard to deploy on another machine because it has lots of libraries dependencies.\n",Object(o.b)("strong",{parentName:"p"},"Answer to that:"),' Containerization becomes popular and a standard to packaging dependencies to make it easier to "build once, run anywhere".')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fragmented tools, libraries were hard for ML engineers to learn. Experiences learned in one company are not naturally migratable to another company.\n",Object(o.b)("strong",{parentName:"p"},"Answer to that:")," A few dominant open-source frameworks reduced the overhead of learning too many different frameworks, concepts. Data-scientist can learn a few libraries such as Tensorflow/PyTorch, and a few high-level wrappers like Keras will be able to create your machine learning application from other open-source building blocks.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Similarly, models built by one library (such as libsvm) were hard to be integrated into machine learning pipeline since there's no standard format.\n",Object(o.b)("strong",{parentName:"p"},"Answer to that:")," Industry has built successful open-source standard machine learning frameworks such as Tensorflow/PyTorch/Keras so their format can be easily shared across. And efforts to build an even more general model format such as ONNX.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"It was hard to build a data pipeline that flows/transform data from a raw data source to whatever required by ML applications.\n",Object(o.b)("strong",{parentName:"p"},"Answer to that:")," Open source big data industry plays an important role in providing, simplify, unify processes and building blocks for data flows, transformations, etc."))),Object(o.b)("p",null,"The machine learning industry is moving on the right track to solve major roadblocks. So what are the pain points now for companies which have machine learning needs? What can we help here? To answer this question, let's look at machine learning workflow first."),Object(o.b)("h2",{id:"machine-learning-workflows--pain-points"},"Machine Learning Workflows & Pain points"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"1) From different data sources such as edge, clickstream, logs, etc.\n   => Land to data lakes\n\n2) From data lake, data transformation:\n   => Data transformations: Cleanup, remove invalid rows/columns,\n                            select columns, sampling, split train/test\n                            data-set, join table, etc.\n   => Data prepared for training.\n\n3) From prepared data:\n   => Training, model hyper-parameter tuning, cross-validation, etc.\n   => Models saved to storage.\n\n4) From saved models:\n   => Model assurance, deployment, A/B testing, etc.\n   => Model deployed for online serving or offline scoring.\n")),Object(o.b)("p",null,"Typically data scientists responsible for item 2)-4), 1) typically handled by a different team (called Data Engineering team in many companies, some Data Engineering team also responsible for part of data transformation)"),Object(o.b)("h3",{id:"pain-1-complex-workflowsteps-from-raw-data-to-model-different-tools-needed-by-different-steps-hard-to-make-changes-to-workflow-and-not-error-proof"},"Pain ","#","1 Complex workflow/steps from raw data to model, different tools needed by different steps, hard to make changes to workflow, and not error-proof"),Object(o.b)("p",null,"It is a complex workflow from raw data to usable models, after talking to many different data scientists, we have learned that a typical procedure to train a new model and push to production can take months to 1-2 years."),Object(o.b)("p",null,"It is also a wide skill set required by this workflow. For example, data transformation needs tools like Spark/Hive for large scale and tools like Pandas for a small scale. And model training needs to be switched between XGBoost, Tensorflow, Keras, PyTorch. Building a data pipeline requires Apache Airflow or Oozie."),Object(o.b)("p",null,"Yes, there are great, standardized open-source tools built for many of such purposes. But how about changes need to be made for a particular part of the data pipeline? How about adding a few columns to the training data for experiments? How about training models, and push models to validation, A/B testing before rolling to production? All these steps need jumping between different tools, UIs, and very hard to make changes, and it is not error-proof during these procedures."),Object(o.b)("h3",{id:"pain-2-dependencies-of-underlying-resource-management-platform"},"Pain ","#","2 Dependencies of underlying resource management platform"),Object(o.b)("p",null,"To make jobs/services required by a machine learning platform to be able to run, we need an underlying resource management platform. There're some choices of resource management platform, and they have distinct advantages and disadvantages."),Object(o.b)("p",null,"For example, there're many machine learning platform built on top of K8s. It is relatively easy to get a K8s from a cloud vendor, easy to orchestrate machine learning required services/daemons run on K8s. However, K8s doesn't offer good support jobs like Spark/Flink/Hive. So if your company has Spark/Flink/Hive running on YARN, there're gaps and a significant amount of work to move required jobs from YARN to K8s. Maintaining a separate K8s cluster is also overhead to Hadoop-based data infrastructure."),Object(o.b)("p",null,"Similarly, if your company's data pipelines are mostly built on top of cloud resources and SaaS offerings, asking you to install a separate YARN cluster to run a new machine learning platform doesn't make a lot of sense."),Object(o.b)("h3",{id:"pain-3-data-scientist-are-forced-to-interact-with-lower-level-platform-components"},"Pain ","#","3 Data scientist are forced to interact with lower-level platform components"),Object(o.b)("p",null,"In addition to the above pain, we do see Data Scientists are forced to learn underlying platform knowledge to be able to build a real-world machine learning workflow."),Object(o.b)("p",null,"For most of the data scientists we talked with, they're experts of ML algorithms/libraries, feature engineering, etc. They're also most familiar with Python, R, and some of them understand Spark, Hive, etc."),Object(o.b)("p",null,"If they're asked to do interactions with lower-level components like fine-tuning a Spark job's performance; or troubleshooting job failed to launch because of resource constraints; or write a K8s/YARN job spec and mount volumes, set networks properly. They will scratch their heads and typically cannot perform these operations efficiently."),Object(o.b)("h3",{id:"pain-4-comply-with-data-securitygovernance-requirements"},"Pain ","#","4 Comply with data security/governance requirements"),Object(o.b)("p",null,"TODO: Add more details."),Object(o.b)("h3",{id:"pain-5-no-good-way-to-reduce-routine-ml-code-development"},"Pain ","#","5 No good way to reduce routine ML code development"),Object(o.b)("p",null,"After the data is prepared, the data scientist needs to do several routine tasks to build the ML pipeline. To get a sense of the existing the data set, it usually needs a split of the data set, the statistics of data set. These tasks have a common duplicate part of code, which reduces the efficiency of data scientists."),Object(o.b)("p",null,"An abstraction layer/framework to help the developer to boost ML pipeline development could be valuable. It's better than the developer only needs to fill callback function to focus on their key logic."),Object(o.b)("h1",{id:"submarine"},"Submarine"),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("h3",{id:"a-little-bit-history"},"A little bit history"),Object(o.b)("p",null,"Initially, Submarine is built to solve problems of running deep learning jobs like Tensorflow/PyTorch on Apache Hadoop YARN, allows admin to monitor launched deep learning jobs, and manage generated models."),Object(o.b)("p",null,"It was part of YARN initially, and code resides under ",Object(o.b)("inlineCode",{parentName:"p"},"hadoop-yarn-applications"),". Later, the community decided to convert it to be a subproject within Hadoop (Sibling project of YARN, HDFS, etc.) because we want to support other resource management platforms like K8s. And finally, we're reconsidering Submarine's charter, and the Hadoop community voted that it is the time to moved Submarine to a separate Apache TLP."),Object(o.b)("h3",{id:"why-submarine"},"Why Submarine?"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ONE PLATFORM")),Object(o.b)("p",null,"Submarine is the ONE PLATFORM to allow Data Scientists to create end-to-end machine learning workflow. ",Object(o.b)("inlineCode",{parentName:"p"},"ONE PLATFORM")," means it supports Data Scientists and data engineers to finish their jobs on the same platform without frequently switching their toolsets. From dataset exploring data pipeline creation, model training, and tuning, and push model to production. All these steps can be completed within the ",Object(o.b)("inlineCode",{parentName:"p"},"ONE PLATFORM"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Resource Management Independent")),Object(o.b)("p",null,"It is also designed to be resource management independent, no matter if you have Apache Hadoop YARN, K8s, or just a container service, you will be able to run Submarine on top it."),Object(o.b)("h2",{id:"requirements-and-non-requirements"},"Requirements and non-requirements"),Object(o.b)("h3",{id:"notebook"},"Notebook"),Object(o.b)("p",null,"1) Users should be able to create, edit, delete a notebook. (P0)\n2) Notebooks can be persisted to storage and can be recovered if failure happens. (P0)\n3) Users can trace back to history versions of a notebook. (P1)\n4) Notebooks can be shared with different users. (P1)\n5) Users can define a list of parameters of a notebook (looks like parameters of the notebook's main function) to allow executing a notebook like a job. (P1)\n6) Different users can collaborate on the same notebook at the same time. (P2)"),Object(o.b)("p",null,"A running notebook instance is called notebook session (or session for short)."),Object(o.b)("h3",{id:"experiment"},"Experiment"),Object(o.b)("p",null,"Experiments of Submarine is an offline task. It could be a shell command, a Python command, a Spark job, a SQL query, or even a workflow."),Object(o.b)("p",null,"The primary purposes of experiments under Submarine's context is to do training tasks, offline scoring, etc. However, experiment can be generalized to do other tasks as well."),Object(o.b)("p",null,"Major requirement of experiment:"),Object(o.b)("p",null,"1) Experiments can be submitted from UI/CLI/SDK.\n2) Experiments can be monitored/managed from UI/CLI/SDK.\n3) Experiments should not bind to one resource management platform (K8s)."),Object(o.b)("h4",{id:"type-of-experiments"},"Type of experiments"),Object(o.b)("p",null,Object(o.b)("img",{src:n(230).default})),Object(o.b)("p",null,"There're two types of experiments:\n",Object(o.b)("inlineCode",{parentName:"p"},"Adhoc experiments"),": which includes a Python/R/notebook, or even an adhoc Tensorflow/PyTorch task, etc."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Predefined experiment library"),": This is specialized experiments, which including developed libraries such as CTR, BERT, etc. Users are only required to specify a few parameters such as input, output, hyper parameters, etc. Instead of worrying about where's training script/dependencies located."),Object(o.b)("h4",{id:"adhoc-experiment"},"Adhoc experiment"),Object(o.b)("p",null,"Requirements:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Allow run adhoc scripts."),Object(o.b)("li",{parentName:"ul"},"Allow model engineer, data scientist to run Tensorflow/Pytorch programs on K8s/Container-cloud."),Object(o.b)("li",{parentName:"ul"},"Allow jobs easy access data/models in HDFS/s3, etc."),Object(o.b)("li",{parentName:"ul"},"Support run distributed Tensorflow/Pytorch jobs with simple configs."),Object(o.b)("li",{parentName:"ul"},"Support run user-specified Docker images."),Object(o.b)("li",{parentName:"ul"},"Support specify GPU and other resources.")),Object(o.b)("h4",{id:"predefined-experiment-library"},"Predefined experiment library"),Object(o.b)("p",null,"Here's an example of predefined experiment library to train deepfm model:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "input": {\n    "train_data": ["hdfs:///user/submarine/data/tr.libsvm"],\n    "valid_data": ["hdfs:///user/submarine/data/va.libsvm"],\n    "test_data": ["hdfs:///user/submarine/data/te.libsvm"],\n    "type": "libsvm"\n  },\n  "output": {\n    "save_model_dir": "hdfs:///user/submarine/deepfm",\n    "metric": "auc"\n  },\n  "training": {\n    "batch_size" : 512,\n    "field_size": 39,\n    "num_epochs": 3,\n    "feature_size": 117581,\n    ...\n  }\n}\n')),Object(o.b)("p",null,"Predefined experiment libraries can be shared across users on the same platform, users can also add new or modified predefined experiment library via UI/REST API."),Object(o.b)("p",null,"We will also model AutoML, auto hyper-parameter tuning to predefined experiment library."),Object(o.b)("h4",{id:"pipeline"},"Pipeline"),Object(o.b)("p",null,"Pipeline is a special kind of experiment:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A pipeline is a DAG of experiments."),Object(o.b)("li",{parentName:"ul"},"Can be also treated as a special kind of experiment."),Object(o.b)("li",{parentName:"ul"},"Users can submit/terminate a pipeline."),Object(o.b)("li",{parentName:"ul"},"Pipeline can be created/submitted via UI/API.")),Object(o.b)("h3",{id:"environment-profiles"},"Environment Profiles"),Object(o.b)("p",null,"Environment profiles (or environment for short) defines a set of libraries and when Docker is being used, a Docker image in order to run an experiment or a notebook."),Object(o.b)("p",null,"Docker or VM image (such as AMI: Amazon Machine Images) defines the base layer of the environment."),Object(o.b)("p",null,"On top of that, users can define a set of libraries (such as Python/R) to install."),Object(o.b)("p",null,"Users can save different environment configs which can be also shared across the platform. Environment profiles can be used to run a notebook (e.g. by choosing different kernel from Jupyter), or an experiment. Predefined experiment library includes what environment to use so users don't have to choose which environment to use."),Object(o.b)("p",null,"Environments can be added/listed/deleted/selected through CLI/SDK."),Object(o.b)("h3",{id:"model"},"Model"),Object(o.b)("h4",{id:"model-management"},"Model management"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Model artifacts are generated by experiments or notebook."),Object(o.b)("li",{parentName:"ul"},"A model consists of artifacts from one or multiple files."),Object(o.b)("li",{parentName:"ul"},"Users can choose to save, tag, version a produced model."),Object(o.b)("li",{parentName:"ul"},"Once The Model is saved, Users can do the online model serving or offline scoring of the model.")),Object(o.b)("h4",{id:"model-serving"},"Model serving"),Object(o.b)("p",null,"After model saved, users can specify a serving script, a model and create a web service to serve the model."),Object(o.b)("p",null,'We call the web service to "endpoint". Users can manage (add/stop) model serving endpoints via CLI/API/UI.'),Object(o.b)("h3",{id:"metrics-for-training-job-and-model"},"Metrics for training job and model"),Object(o.b)("p",null,"Submarine-SDK provides tracking/metrics APIs, which allows developers to add tracking/metrics and view tracking/metrics from Submarine Workbench UI."),Object(o.b)("h3",{id:"deployment"},"Deployment"),Object(o.b)("p",null,"Submarine Services (See architecture overview below) should be deployed easily on-prem / on-cloud. Since there're more and more public cloud offering for compute/storage management on cloud, we need to support deploy Submarine compute-related workloads (such as notebook session, experiments, etc.) to cloud-managed clusters."),Object(o.b)("p",null,"This also include Submarine may need to take input parameters from customers and create/manage clusters if needed. It is also a common requirement to use hybrid of on-prem/on-cloud clusters."),Object(o.b)("h3",{id:"security--access-control--user-management--quota-management"},"Security / Access Control / User Management / Quota Management"),Object(o.b)("p",null,"There're 4 kinds of objects need access-control:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Assets belong to Submarine system, which includes notebook, experiments and results, models, predefined experiment libraries, environment profiles."),Object(o.b)("li",{parentName:"ul"},"Data security. (Who owns what data, and what data can be accessed by each users)."),Object(o.b)("li",{parentName:"ul"},"User credentials. (Such as LDAP)."),Object(o.b)("li",{parentName:"ul"},"Other security, such as Git repo access, etc.")),Object(o.b)("p",null,"For the data security / user credentials / other security, it will be delegated to 3rd libraries such as Apache Ranger, IAM roles, etc."),Object(o.b)("p",null,"Assets belong to Submarine system will be handled by Submarine itself."),Object(o.b)("p",null,"Here're operations which Submarine admin can do for users / teams which can be used to access Submarine's assets."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Operations for admins")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Admin uses "User Management System" to onboard new users, upload user credentials, assign resource quotas, etc.'),Object(o.b)("li",{parentName:"ul"},"Admins can create new users, new teams, update user/team mappings. Or remove users/teams."),Object(o.b)("li",{parentName:"ul"},"Admin can set resource quotas (if different from system default), permissions, upload/update necessary credentials (like Kerberos keytab) of a user."),Object(o.b)("li",{parentName:"ul"},"A DE/DS can also be an admin if the DE/DS has admin access. (Like a privileged user). This will be useful when a cluster is exclusively shared by a user or only shared by a small team."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Resource Quota Management System")," helps admin to manage resources quotas of teams, organizations. Resources can be machine resources like CPU/Memory/Disk, etc. It can also include non-machine resources like $$-based budgets.")),Object(o.b)("h3",{id:"dataset"},"Dataset"),Object(o.b)("p",null,"There's also need to tag dataset which will be used for training and shared across the platform by different users."),Object(o.b)("p",null,"Like mentioned above, access to the actual data will be handled by 3rd party system like Apache Ranger / Hive Metastore which is out of the Submarine's scope."),Object(o.b)("h2",{id:"architecture-overview"},"Architecture Overview"),Object(o.b)("h3",{id:"architecture-diagram"},"Architecture Diagram"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"     +-----------------------------------------------------------------+\n     |            Submarine UI / CLI / REST API / SDK                  |\n     |                 Mini-Submarine                                  |\n     +-----------------------------------------------------------------+\n\n     +--------------------Submarine Server-----------------------------+\n     | +---------+ +---------+ +----------+ +----------+ +------------+|\n     | |Data set | |Notebooks| |Experiment| |Models    | |Servings    ||\n     | +---------+ +---------+ +----------+ +----------+ +------------+|\n     |-----------------------------------------------------------------|\n     |                                                                 |\n     | +-----------------+ +-----------------+ +---------------------+ |\n     | |Experiment       | |Compute Resource | |Other Management     | |\n     | |Manager          | |   Manager       | |Services             | |\n     | +-----------------+ +-----------------+ +---------------------+ |\n     |   Spark, template      K8s/Docker                          |\n     |   TF, PyTorch, pipeline                                         |\n     |                                                                 |\n     + +-----------------+                                             +\n     | |Submarine Meta   |                                             |\n     | |    Store        |                                             |\n     | +-----------------+                                             |\n     |                                                                 |\n     +-----------------------------------------------------------------+\n\n      (You can use http://stable.ascii-flow.appspot.com/#Draw\n      to draw such diagrams)\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Compute Resource Manager")," Helps to manage compute resources on-prem/on-cloud, this module can also handle cluster creation / management, etc."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Experiment Manager"),' Work with "Compute Resource Manager" to submit different kinds of workloads such as (distributed) Tensorflow / Pytorch, etc.'),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Submarine SDK")," provides Java/Python/REST API to allow DS or other engineers to integrate into Submarine services. It also includes a ",Object(o.b)("inlineCode",{parentName:"p"},"mini-submarine")," component that launches Submarine components from a single Docker container (or a VM image)."),Object(o.b)("p",null,"Details of Submarine Server design can be found at ",Object(o.b)("a",{parentName:"p",href:"/docs/next/designDocs/submarine-server/architecture"},"submarine-server-design"),"."))}d.isMDXComponent=!0},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,u=m["".concat(i,".").concat(p)]||m[p]||b[p]||o;return n?r.a.createElement(u,s(s({ref:t},c),{},{components:n})):r.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},230:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/experiments-7a09831687ecbc0e1dcf01b0c6f45445.png"}}]);