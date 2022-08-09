"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5496],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),m=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=m(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(n),p=r,k=u["".concat(s,".").concat(p)]||u[p]||c[p]||o;return n?l.createElement(k,a(a({ref:t},d),{},{components:n})):l.createElement(k,a({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var m=2;m<o;m++)a[m]=n[m];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3131:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var l=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],i={title:"Model Client"},s=void 0,m={unversionedId:"userDocs/submarine-sdk/model-client",id:"version-0.6.0/userDocs/submarine-sdk/model-client",title:"Model Client",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/userDocs/submarine-sdk/model-client.md",sourceDirName:"userDocs/submarine-sdk",slug:"/userDocs/submarine-sdk/model-client",permalink:"/zh-cn/docs/0.6.0/userDocs/submarine-sdk/model-client",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/userDocs/submarine-sdk/model-client.md",tags:[],version:"0.6.0",frontMatter:{title:"Model Client"},sidebar:"docs",previous:{title:"Experiment Client",permalink:"/zh-cn/docs/0.6.0/userDocs/submarine-sdk/experiment-client"},next:{title:"Tracking",permalink:"/zh-cn/docs/0.6.0/userDocs/submarine-sdk/tracking"}},d={},c=[{value:"class ModelClient()",id:"class-modelclient",level:2},{value:"<code>ModelsClient(tracking_uri=None, registry_uri=None)-&gt;ModelsClient</code>",id:"modelsclienttracking_urinone-registry_urinone-modelsclient",level:3},{value:"<code>ModelsClient.start()-&gt;[Active Run]</code>",id:"modelsclientstart-active-run",level:3},{value:"<code>ModelsClient.log_param(key, value)-&gt;None</code>",id:"modelsclientlog_paramkey-value-none",level:3},{value:"<code>ModelsClient.log_params(params)-&gt;None</code>",id:"modelsclientlog_paramsparams-none",level:3},{value:"<code>ModelsClient.log_metric(self, key, value, step=None)-&gt;None</code>",id:"modelsclientlog_metricself-key-value-stepnone-none",level:3},{value:"<code>ModelsClient.log_metrics(self, metrics, step=None)-&gt;None</code>",id:"modelsclientlog_metricsself-metrics-stepnone-none",level:3},{value:"<code>(Beta) ModelsClient.save_model(self, model_type, model, artifact_path, registered_model_name=None)</code>",id:"beta-modelsclientsave_modelself-model_type-model-artifact_path-registered_model_namenone",level:3},{value:"<code>(Beta) ModelsClient.load_model(self, name, version)-&gt;mlflow.pyfunc.PyFuncModel</code>",id:"beta-modelsclientload_modelself-name-version-mlflowpyfuncpyfuncmodel",level:3},{value:"<code>(Beta) ModelsClient.update_model(self, name, new_name)-&gt;None</code>",id:"beta-modelsclientupdate_modelself-name-new_name-none",level:3},{value:"<code>(Beta) ModelsClient.delete_model(self, name, version)-&gt;None</code>",id:"beta-modelsclientdelete_modelself-name-version-none",level:3}],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"class-modelclient"},"class ModelClient()"),(0,o.kt)("p",null,"The submarine ModelsClient provides a high-level API for logging metrics / parameters and managing models."),(0,o.kt)("h3",{id:"modelsclienttracking_urinone-registry_urinone-modelsclient"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModelsClient(tracking_uri=None, registry_uri=None)->ModelsClient")),(0,o.kt)("p",null,"Initialize a ",(0,o.kt)("inlineCode",{parentName:"p"},"ModelsClient")," instance."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"tracking_uri"),": If run in Submarine, you do not need to specify it. Otherwise, specify the external tracking_uri."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"registry_uri"),":  If run in Submarine, you do not need to specify it. Otherwise, specify the external registry_uri."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"ModelsClient instance"))),(0,o.kt)("p",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from submarine import ModelsClient\n\nmodelClient = ModelsClient(tracking_uri="0.0.0.0:4000", registry_uri="0.0.0.0:5000")\n')),(0,o.kt)("h3",{id:"modelsclientstart-active-run"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModelsClient.start()->[Active Run]")),(0,o.kt)("p",null,"For details of ",(0,o.kt)("a",{parentName:"p",href:"https://mlflow.org/docs/latest/_modules/mlflow/tracking/fluent.html#ActiveRun"},"Active Run")),(0,o.kt)("p",null,'Start a new Mlflow run, and direct the logging of the artifacts and metadata to the Run named "worker_i" under Experiment "job_id". If in distributed training, worker and job id would be parsed from environment variable. If in local traning, worker and job id will be generated.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Active Run"))),(0,o.kt)("h3",{id:"modelsclientlog_paramkey-value-none"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModelsClient.log_param(key, value)->None")),(0,o.kt)("p",null,"Log parameter under the current run."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"key")," \u2013 Parameter name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"value")," \u2013 Parameter value"))),(0,o.kt)("p",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from submarine import ModelsClient\n\nmodelClient = ModelsClient()\nwith modelClient.start() as run:\n  modelClient.log_param("learning_rate", 0.01)\n')),(0,o.kt)("h3",{id:"modelsclientlog_paramsparams-none"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModelsClient.log_params(params)->None")),(0,o.kt)("p",null,"Log a batch of params for the current run."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"params")," \u2013 Dictionary of param_name: String -> value"))),(0,o.kt)("p",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from submarine import ModelsClient\n\nparams = {"learning_rate": 0.01, "n_estimators": 10}\n\nmodelClient = ModelsClient()\nwith modelClient.start() as run:\n  modelClient.log_params(params)\n')),(0,o.kt)("h3",{id:"modelsclientlog_metricself-key-value-stepnone-none"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModelsClient.log_metric(self, key, value, step=None)->None")),(0,o.kt)("p",null,"Log a metric under the current run."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"key")," \u2013 Metric name (string)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"value")," \u2013 Metric value (float)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"step")," \u2013 Metric step (int). Defaults to zero if unspecified."))),(0,o.kt)("p",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from submarine import ModelsClient\n\nmodelClient = ModelsClient()\nwith modelClient.start() as run:\n  modelClient.log_metric("mse", 2500.00)\n')),(0,o.kt)("h3",{id:"modelsclientlog_metricsself-metrics-stepnone-none"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModelsClient.log_metrics(self, metrics, step=None)->None")),(0,o.kt)("p",null,"Log multiple metrics for the current run."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"metrics")," \u2013 Dictionary of metric_name: String -> value: Float."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"step")," \u2013 A single integer step at which to log the specified Metrics. If unspecified, each metric is logged at step zero."))),(0,o.kt)("p",null,"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from submarine import ModelsClient\n\nmetrics = {"mse": 2500.00, "rmse": 50.00}\n\nmodelClient = ModelsClient()\nwith modelClient.start() as run:\n  modelClient.log_metrics(metrics)\n')),(0,o.kt)("h3",{id:"beta-modelsclientsave_modelself-model_type-model-artifact_path-registered_model_namenone"},(0,o.kt)("inlineCode",{parentName:"h3"},"(Beta) ModelsClient.save_model(self, model_type, model, artifact_path, registered_model_name=None)")),(0,o.kt)("p",null,"Save model to model registry."),(0,o.kt)("h3",{id:"beta-modelsclientload_modelself-name-version-mlflowpyfuncpyfuncmodel"},(0,o.kt)("inlineCode",{parentName:"h3"},"(Beta) ModelsClient.load_model(self, name, version)->mlflow.pyfunc.PyFuncModel")),(0,o.kt)("p",null,"Load a model from model registry."),(0,o.kt)("h3",{id:"beta-modelsclientupdate_modelself-name-new_name-none"},(0,o.kt)("inlineCode",{parentName:"h3"},"(Beta) ModelsClient.update_model(self, name, new_name)->None")),(0,o.kt)("p",null,"Update a model by new name."),(0,o.kt)("h3",{id:"beta-modelsclientdelete_modelself-name-version-none"},(0,o.kt)("inlineCode",{parentName:"h3"},"(Beta) ModelsClient.delete_model(self, name, version)->None")),(0,o.kt)("p",null,"Delete a model in model registry."))}p.isMDXComponent=!0}}]);