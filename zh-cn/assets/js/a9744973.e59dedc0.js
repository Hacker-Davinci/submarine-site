"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4935],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5693:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Quickstart"},s=void 0,c={unversionedId:"gettingStarted/quickstart",id:"version-0.6.0/gettingStarted/quickstart",title:"Quickstart",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/gettingStarted/quickstart.md",sourceDirName:"gettingStarted",slug:"/gettingStarted/quickstart",permalink:"/zh-cn/docs/0.6.0/gettingStarted/quickstart",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/gettingStarted/quickstart.md",tags:[],version:"0.6.0",frontMatter:{title:"Quickstart"},sidebar:"docs",next:{title:"Jupyter Notebook",permalink:"/zh-cn/docs/0.6.0/gettingStarted/notebook"}},m={},p=[{value:"Installation",id:"installation",level:2},{value:"Prepare a Kubernetes cluster",id:"prepare-a-kubernetes-cluster",level:3},{value:"Launch submarine in the cluster",id:"launch-submarine-in-the-cluster",level:3},{value:"Ensure submarine is ready",id:"ensure-submarine-is-ready",level:3},{value:"Connect to workbench",id:"connect-to-workbench",level:3},{value:"Example: Submit a mnist distributed example",id:"example-submit-a-mnist-distributed-example",level:2},{value:"1. Write a python script for distributed training",id:"1-write-a-python-script-for-distributed-training",level:3},{value:"2. Prepare an environment compatible with the training",id:"2-prepare-an-environment-compatible-with-the-training",level:3},{value:"3. Submit the experiment",id:"3-submit-the-experiment",level:3},{value:"4. Monitor the process (modelClient)",id:"4-monitor-the-process-modelclient",level:3},{value:"5. Serve the model (In development)",id:"5-serve-the-model-in-development",level:3}],u={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document gives you a quick view on the basic usage of Submarine platform. You can finish each step of ML model lifecycle on the platform without messing up with the troublesome environment problems."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"prepare-a-kubernetes-cluster"},"Prepare a Kubernetes cluster"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Prerequisite")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check ",(0,i.kt)("a",{parentName:"li",href:"/zh-cn/docs/0.6.0/devDocs/Dependencies"},"dependency page")," for the compatible version"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," (Helm v3 is minimum requirement.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),".")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Start minikube cluster")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ minikube start --vm-driver=docker --cpus 8 --memory 4096 --kubernetes-version v1.15.11\n")),(0,i.kt)("h3",{id:"launch-submarine-in-the-cluster"},"Launch submarine in the cluster"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone the project")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git clone https://github.com/apache/submarine.git\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Install the resources by helm chart")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ cd submarine\n$ helm install submarine ./helm-charts/submarine\n")),(0,i.kt)("h3",{id:"ensure-submarine-is-ready"},"Ensure submarine is ready"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use kubectl to query the status of pods")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl get pods\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Make sure each pod is ",(0,i.kt)("inlineCode",{parentName:"li"},"Running"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NAME                                              READY   STATUS    RESTARTS   AGE\nnotebook-controller-deployment-5d4f5f874c-vwds8   1/1     Running   0          3h33m\npytorch-operator-844c866d54-q5ztd                 1/1     Running   0          3h33m\nsubmarine-database-674987ff7d-r8zqs               1/1     Running   0          3h33m\nsubmarine-minio-5fdd957785-xd987                  1/1     Running   0          3h33m\nsubmarine-mlflow-76bbf5c7b-g2ntd                  1/1     Running   0          3h33m\nsubmarine-server-66f7b8658b-sfmv8                 1/1     Running   0          3h33m\nsubmarine-tensorboard-6c44944dfb-tvbr9            1/1     Running   0          3h33m\nsubmarine-traefik-7cbcfd4bd9-4bczn                1/1     Running   0          3h33m\ntf-job-operator-6bb69fd44-mc8ww                   1/1     Running   0          3h33m\n")),(0,i.kt)("h3",{id:"connect-to-workbench"},"Connect to workbench"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Port-forwarding")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# using port-forwarding\n$ kubectl port-forward --address 0.0.0.0 service/submarine-traefik 32080:80\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},"http://0.0.0.0:32080"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1339).Z,width:"1442",height:"781"})),(0,i.kt)("h2",{id:"example-submit-a-mnist-distributed-example"},"Example: Submit a mnist distributed example"),(0,i.kt)("p",null,"We put the code of this example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/submarine/tree/master/dev-support/examples/quickstart"},"here"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"train.py")," is our training script, and ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sh")," is the script to build a docker image."),(0,i.kt)("h3",{id:"1-write-a-python-script-for-distributed-training"},"1. Write a python script for distributed training"),(0,i.kt)("p",null,"Take a simple mnist tensorflow script as an example. We choose ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiWorkerMirroredStrategy")," as our distributed strategy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\"\"\"\n./dev-support/examples/quickstart/train.py\nReference: https://github.com/kubeflow/tf-operator/blob/master/examples/v1/distribution_strategy/keras-API/multi_worker_strategy-with-keras.py\n\"\"\"\n\nimport tensorflow_datasets as tfds\nimport tensorflow as tf\nfrom tensorflow.keras import layers, models\nfrom submarine import ModelsClient\n\ndef make_datasets_unbatched():\n  BUFFER_SIZE = 10000\n\n  # Scaling MNIST data from (0, 255] to (0., 1.]\n  def scale(image, label):\n    image = tf.cast(image, tf.float32)\n    image /= 255\n    return image, label\n\n  datasets, _ = tfds.load(name='mnist', with_info=True, as_supervised=True)\n\n  return datasets['train'].map(scale).cache().shuffle(BUFFER_SIZE)\n\n\ndef build_and_compile_cnn_model():\n  model = models.Sequential()\n  model.add(\n      layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)))\n  model.add(layers.MaxPooling2D((2, 2)))\n  model.add(layers.Conv2D(64, (3, 3), activation='relu'))\n  model.add(layers.MaxPooling2D((2, 2)))\n  model.add(layers.Conv2D(64, (3, 3), activation='relu'))\n  model.add(layers.Flatten())\n  model.add(layers.Dense(64, activation='relu'))\n  model.add(layers.Dense(10, activation='softmax'))\n\n  model.summary()\n\n  model.compile(optimizer='adam',\n                loss='sparse_categorical_crossentropy',\n                metrics=['accuracy'])\n\n  return model\n\ndef main():\n  strategy = tf.distribute.experimental.MultiWorkerMirroredStrategy(\n      communication=tf.distribute.experimental.CollectiveCommunication.AUTO)\n\n  BATCH_SIZE_PER_REPLICA = 4\n  BATCH_SIZE = BATCH_SIZE_PER_REPLICA * strategy.num_replicas_in_sync\n\n  with strategy.scope():\n    ds_train = make_datasets_unbatched().batch(BATCH_SIZE).repeat()\n    options = tf.data.Options()\n    options.experimental_distribute.auto_shard_policy = \\\n        tf.data.experimental.AutoShardPolicy.DATA\n    ds_train = ds_train.with_options(options)\n    # Model building/compiling need to be within `strategy.scope()`.\n    multi_worker_model = build_and_compile_cnn_model()\n\n  class MyCallback(tf.keras.callbacks.Callback):\n    def on_epoch_end(self, epoch, logs=None):\n      # monitor the loss and accuracy\n      print(logs)\n      modelClient.log_metrics({\"loss\": logs[\"loss\"], \"accuracy\": logs[\"accuracy\"]}, epoch)\n\n  with modelClient.start() as run:\n    multi_worker_model.fit(ds_train, epochs=10, steps_per_epoch=70, callbacks=[MyCallback()])\n\n\nif __name__ == '__main__':\n  modelClient = ModelsClient()\n  main()\n")),(0,i.kt)("h3",{id:"2-prepare-an-environment-compatible-with-the-training"},"2. Prepare an environment compatible with the training"),(0,i.kt)("p",null,"Build a docker image equipped with the requirement of the environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./dev-support/examples/quickstart/build.sh \n")),(0,i.kt)("h3",{id:"3-submit-the-experiment"},"3. Submit the experiment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open submarine workbench and click ",(0,i.kt)("inlineCode",{parentName:"p"},"+ New Experiment"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill the form accordingly. Here we set 3 workers."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Step 1\n",(0,i.kt)("img",{src:n(9632).Z,width:"2880",height:"1574"})),(0,i.kt)("li",{parentName:"ol"},"Step 2\n",(0,i.kt)("img",{src:n(610).Z,width:"2872",height:"1568"})),(0,i.kt)("li",{parentName:"ol"},"Step 3\n",(0,i.kt)("img",{src:n(4721).Z,width:"2869",height:"1580"})),(0,i.kt)("li",{parentName:"ol"},"The experiment is successfully submitted\n",(0,i.kt)("img",{src:n(1503).Z,width:"2876",height:"1558"}))))),(0,i.kt)("h3",{id:"4-monitor-the-process-modelclient"},"4. Monitor the process (modelClient)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In our code, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"modelClient")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"submarine-sdk")," to record the metrics. To see the result, click ",(0,i.kt)("inlineCode",{parentName:"p"},"MLflow UI")," in the workbench.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To compare the metrics of each worker, you can select all workers and then click ",(0,i.kt)("inlineCode",{parentName:"p"},"compare")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(5367).Z,width:"2869",height:"1582"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(9629).Z,width:"2876",height:"1552"})))),(0,i.kt)("h3",{id:"5-serve-the-model-in-development"},"5. Serve the model (In development)"))}d.isMDXComponent=!0},9629:function(e,t,n){t.Z=n.p+"assets/images/quickstart-mlflow-2-d83b03b1ba4bdefc55540a54f6214a13.png"},5367:function(e,t,n){t.Z=n.p+"assets/images/quickstart-mlflow-055f1780671b88621e0c6324f408dbbe.png"},9632:function(e,t,n){t.Z=n.p+"assets/images/quickstart-submit-1-666fc27e30765ab0ddad117e3a354814.png"},610:function(e,t,n){t.Z=n.p+"assets/images/quickstart-submit-2-9c78114774db9e88702cc8e72722ceca.png"},4721:function(e,t,n){t.Z=n.p+"assets/images/quickstart-submit-3-c412f456d672e509be26040750826a76.png"},1503:function(e,t,n){t.Z=n.p+"assets/images/quickstart-submit-4-00c8dfb8d7d8a1bd1fe52f43712fc4a9.png"},1339:function(e,t,n){t.Z=n.p+"assets/images/quickstart-worbench-0d8c2f6217f22460d4cf8e9b05d06f6b.png"}}]);