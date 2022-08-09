"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2450],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7644:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Quickstart"},l=void 0,c={unversionedId:"gettingStarted/quickstart",id:"gettingStarted/quickstart",title:"Quickstart",description:"\x3c!--",source:"@site/docs/gettingStarted/quickstart.md",sourceDirName:"gettingStarted",slug:"/gettingStarted/quickstart",permalink:"/zh-cn/docs/next/gettingStarted/quickstart",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/gettingStarted/quickstart.md",tags:[],version:"current",frontMatter:{title:"Quickstart"},sidebar:"docs",next:{title:"Jupyter Notebook",permalink:"/zh-cn/docs/next/gettingStarted/notebook"}},u={},m=[{value:"Installation",id:"installation",level:2},{value:"Prepare a Kubernetes cluster",id:"prepare-a-kubernetes-cluster",level:3},{value:"Launch submarine in the cluster",id:"launch-submarine-in-the-cluster",level:3},{value:"Ensure submarine is ready",id:"ensure-submarine-is-ready",level:3},{value:"Connect to workbench",id:"connect-to-workbench",level:3},{value:"Example: Submit a mnist distributed example",id:"example-submit-a-mnist-distributed-example",level:2},{value:"1. Write a python script for distributed training",id:"1-write-a-python-script-for-distributed-training",level:3},{value:"2. Prepare an environment compatible with the training",id:"2-prepare-an-environment-compatible-with-the-training",level:3},{value:"3. Submit the experiment",id:"3-submit-the-experiment",level:3},{value:"4. Monitor the process",id:"4-monitor-the-process",level:3},{value:"5. Serve the model (In development)",id:"5-serve-the-model-in-development",level:3}],p={toc:m};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document gives you a quick view on the basic usage of Submarine platform. You can finish each step of ML model lifecycle on the platform without messing up with the troublesome environment problems."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"prepare-a-kubernetes-cluster"},"Prepare a Kubernetes cluster"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Prerequisite")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check ",(0,i.kt)("a",{parentName:"li",href:"/zh-cn/docs/next/devDocs/Dependencies"},"dependency page")," for the compatible version"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," (Helm v3 is minimum requirement.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/setup/getting-started/#download"},"istioctl"))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Start minikube cluster and install Istio")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"minikube start --vm-driver=docker --cpus 8 --memory 8192 --kubernetes-version v1.21.2\nistioctl install -y\n# Or if you want to support Pod Security Policy (https://minikube.sigs.k8s.io/docs/tutorials/using_psp), you can use the following command to start cluster\nminikube start --extra-config=apiserver.enable-admission-plugins=PodSecurityPolicy --addons=pod-security-policy --vm-driver=docker --cpus 8 --memory 4096 --kubernetes-version v1.21.2\n")),(0,i.kt)("h3",{id:"launch-submarine-in-the-cluster"},"Launch submarine in the cluster"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone the project")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/apache/submarine.git\ncd submarine\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create necessary namespaces")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create namespace submarine\nkubectl create namespace submarine-user-test\nkubectl label namespace submarine istio-injection=enabled\nkubectl label namespace submarine-user-test istio-injection=enabled\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Install the submarine operator and dependencies by helm chart")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm install submarine ./helm-charts/submarine -n submarine\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Create a Submarine custom resource and the operator will create the submarine server, database, etc. for us.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl apply -f submarine-cloud-v2/artifacts/examples/example-submarine.yaml -n submarine-user-test\n")),(0,i.kt)("h3",{id:"ensure-submarine-is-ready"},"Ensure submarine is ready"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl get pods -n submarine\nNAME                                              READY   STATUS    RESTARTS   AGE\nnotebook-controller-deployment-66d85984bf-x562z   1/1     Running   0          7h7m\npytorch-operator-7d778f4859-g7xph                 2/2     Running   0          7h7m\ntf-job-operator-7d895bf77c-75n72                  2/2     Running   0          7h7m\n\n$ kubectl get pods -n submarine-user-test\nNAME                                     READY   STATUS    RESTARTS   AGE\nsubmarine-database-bdcb77549-rq2ds       2/2     Running   0          7h6m\nsubmarine-minio-686b8777ff-zg4d2         2/2     Running   0          7h6m\nsubmarine-mlflow-68c5559dcb-lkq4g        2/2     Running   0          7h6m\nsubmarine-server-7c6d7bcfd8-5p42w        2/2     Running   0          9m33s\nsubmarine-tensorboard-57c5b64778-t4lww   2/2     Running   0          7h6m\n")),(0,i.kt)("h3",{id:"connect-to-workbench"},"Connect to workbench"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Exposing service")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl port-forward --address 0.0.0.0 -n istio-system service/istio-ingressgateway 32080:80\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"View workbench")),(0,i.kt)("p",null,"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://0.0.0.0:32080"),"\n",(0,i.kt)("img",{src:n(1339).Z,width:"1442",height:"781"})),(0,i.kt)("h2",{id:"example-submit-a-mnist-distributed-example"},"Example: Submit a mnist distributed example"),(0,i.kt)("p",null,"We put the code of this example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/submarine/tree/master/dev-support/examples/quickstart"},"here"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"train.py")," is our training script, and ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sh")," is the script to build a docker image."),(0,i.kt)("h3",{id:"1-write-a-python-script-for-distributed-training"},"1. Write a python script for distributed training"),(0,i.kt)("p",null,"Take a simple mnist tensorflow script as an example. We choose ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiWorkerMirroredStrategy")," as our distributed strategy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\"\"\"\n./dev-support/examples/quickstart/train.py\nReference: https://github.com/kubeflow/tf-operator/blob/master/examples/v1/distribution_strategy/keras-API/multi_worker_strategy-with-keras.py\n\"\"\"\n\nimport tensorflow_datasets as tfds\nimport tensorflow as tf\nfrom tensorflow.keras import layers, models\nimport submarine\n\ndef make_datasets_unbatched():\n  BUFFER_SIZE = 10000\n\n  # Scaling MNIST data from (0, 255] to (0., 1.]\n  def scale(image, label):\n    image = tf.cast(image, tf.float32)\n    image /= 255\n    return image, label\n\n  datasets, _ = tfds.load(name='mnist', with_info=True, as_supervised=True)\n\n  return datasets['train'].map(scale).cache().shuffle(BUFFER_SIZE)\n\n\ndef build_and_compile_cnn_model():\n  model = models.Sequential()\n  model.add(\n      layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)))\n  model.add(layers.MaxPooling2D((2, 2)))\n  model.add(layers.Conv2D(64, (3, 3), activation='relu'))\n  model.add(layers.MaxPooling2D((2, 2)))\n  model.add(layers.Conv2D(64, (3, 3), activation='relu'))\n  model.add(layers.Flatten())\n  model.add(layers.Dense(64, activation='relu'))\n  model.add(layers.Dense(10, activation='softmax'))\n\n  model.summary()\n\n  model.compile(optimizer='adam',\n                loss='sparse_categorical_crossentropy',\n                metrics=['accuracy'])\n\n  return model\n\ndef main():\n  strategy = tf.distribute.experimental.MultiWorkerMirroredStrategy(\n      communication=tf.distribute.experimental.CollectiveCommunication.AUTO)\n\n  BATCH_SIZE_PER_REPLICA = 4\n  BATCH_SIZE = BATCH_SIZE_PER_REPLICA * strategy.num_replicas_in_sync\n\n  with strategy.scope():\n    ds_train = make_datasets_unbatched().batch(BATCH_SIZE).repeat()\n    options = tf.data.Options()\n    options.experimental_distribute.auto_shard_policy = \\\n        tf.data.experimental.AutoShardPolicy.DATA\n    ds_train = ds_train.with_options(options)\n    # Model building/compiling need to be within `strategy.scope()`.\n    multi_worker_model = build_and_compile_cnn_model()\n\n  class MyCallback(tf.keras.callbacks.Callback):\n    def on_epoch_end(self, epoch, logs=None):\n      # monitor the loss and accuracy\n      print(logs)\n      submarine.log_metrics({\"loss\": logs[\"loss\"], \"accuracy\": logs[\"accuracy\"]}, epoch)\n\n  multi_worker_model.fit(ds_train, epochs=10, steps_per_epoch=70, callbacks=[MyCallback()])\n\n\nif __name__ == '__main__':\n  main()\n")),(0,i.kt)("h3",{id:"2-prepare-an-environment-compatible-with-the-training"},"2. Prepare an environment compatible with the training"),(0,i.kt)("p",null,"Build a docker image equipped with the requirement of the environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"eval $(minikube docker-env)\n./dev-support/examples/quickstart/build.sh\n")),(0,i.kt)("h3",{id:"3-submit-the-experiment"},"3. Submit the experiment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open submarine workbench and click ",(0,i.kt)("inlineCode",{parentName:"p"},"+ New Experiment"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Define your experiment"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill the form accordingly. Here we set 3 workers."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Step 1\n",(0,i.kt)("img",{src:n(6356).Z,width:"1606",height:"943"})),(0,i.kt)("li",{parentName:"ol"},"Step 2\n",(0,i.kt)("img",{src:n(3573).Z,width:"1610",height:"946"})),(0,i.kt)("li",{parentName:"ol"},"Step 3\n",(0,i.kt)("img",{src:n(5842).Z,width:"1607",height:"943"})),(0,i.kt)("li",{parentName:"ol"},"The experiment is successfully submitted\n",(0,i.kt)("img",{src:n(9173).Z,width:"1610",height:"946"}))))),(0,i.kt)("h3",{id:"4-monitor-the-process"},"4. Monitor the process"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In our code, we use ",(0,i.kt)("inlineCode",{parentName:"li"},"submarine")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"submarine-sdk")," to record the metrics. To see the result, click corresponding experiment with name ",(0,i.kt)("inlineCode",{parentName:"li"},"mnist-example")," in the workbench."),(0,i.kt)("li",{parentName:"ol"},"To see the metrics of each worker, you can select a worker from the left top list.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2076).Z,width:"1598",height:"945"})),(0,i.kt)("h3",{id:"5-serve-the-model-in-development"},"5. Serve the model (In development)"))}d.isMDXComponent=!0},6356:function(e,t,n){t.Z=n.p+"assets/images/quickstart-submit-1-0-7-0-cec455a03933cc7b038a35a141a743b9.png"},3573:function(e,t,n){t.Z=n.p+"assets/images/quickstart-submit-2-0-7-0-2bce3b75c9f7c0ee0f44ee9b2bdb742e.png"},5842:function(e,t,n){t.Z=n.p+"assets/images/quickstart-submit-3-0-7-0-f7f3107669746b2c2a58e0794051a24b.png"},9173:function(e,t,n){t.Z=n.p+"assets/images/quickstart-submit-4-0-7-0-34946a5790013de952eb32d1246f4a23.png"},2076:function(e,t,n){t.Z=n.p+"assets/images/quickstart-ui-0-7-0-821f5ad73116d9a9d3088cddcb576836.png"},1339:function(e,t,n){t.Z=n.p+"assets/images/quickstart-worbench-0d8c2f6217f22460d4cf8e9b05d06f6b.png"}}]);