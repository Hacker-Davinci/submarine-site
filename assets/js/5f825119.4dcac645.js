"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2450],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,b=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(b,s(s({ref:t},m),{},{components:n})):a.createElement(b,s({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7644:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],o={title:"Quickstart"},l=void 0,c={unversionedId:"gettingStarted/quickstart",id:"gettingStarted/quickstart",title:"Quickstart",description:"\x3c!--",source:"@site/docs/gettingStarted/quickstart.md",sourceDirName:"gettingStarted",slug:"/gettingStarted/quickstart",permalink:"/docs/next/gettingStarted/quickstart",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/gettingStarted/quickstart.md",tags:[],version:"current",frontMatter:{title:"Quickstart"},sidebar:"docs",next:{title:"Jupyter Notebook",permalink:"/docs/next/gettingStarted/notebook"}},m={},u=[{value:"Installation",id:"installation",level:2},{value:"Prepare a Kubernetes cluster",id:"prepare-a-kubernetes-cluster",level:3},{value:"Launch submarine in the cluster",id:"launch-submarine-in-the-cluster",level:3},{value:"Ensure submarine is ready",id:"ensure-submarine-is-ready",level:3},{value:"Connect to workbench",id:"connect-to-workbench",level:3},{value:"Example: Submit a mnist distributed example",id:"example-submit-a-mnist-distributed-example",level:2},{value:"1. Write a python script for distributed training",id:"1-write-a-python-script-for-distributed-training",level:3},{value:"2. Prepare an environment compatible with the training",id:"2-prepare-an-environment-compatible-with-the-training",level:3},{value:"3. Submit the experiment",id:"3-submit-the-experiment",level:3},{value:"4. Monitor the process",id:"4-monitor-the-process",level:3},{value:"5. Serve the model",id:"5-serve-the-model",level:3}],p={toc:u};function d(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document gives you a quick view on the basic usage of Submarine platform. You can finish each step of ML model lifecycle on the platform without messing up with the troublesome environment problems."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"prepare-a-kubernetes-cluster"},"Prepare a Kubernetes cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prerequisite")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/devDocs/Dependencies"},"dependency page")," for the compatible version"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," (Helm v3 is minimum requirement.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/setup/getting-started/#download"},"istioctl"))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Start minikube cluster and install Istio")),(0,r.kt)("p",null,"Start minikube"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# You can go to https://minikube.sigs.k8s.io/docs/start/ and follow the tutorial to install minikube.\n# Then you can start kubernetes with minikube:\nminikube start --vm-driver=docker --cpus 8 --memory 8192 --kubernetes-version v1.24.12\n\n# The version of k8s can be adjusted to the range of your current minikube. \n# For example, minikube v1.28.0 can provide versions from v1.25.0 to v1.25.3 in k8s 1.25\n\n# Or if you want to support Pod Security Policy (https://minikube.sigs.k8s.io/docs/tutorials/using_psp) in k8s 1.21 or 1.22, you can use the following command to start cluster\nminikube start --extra-config=apiserver.enable-admission-plugins=PodSecurityPolicy --addons=pod-security-policy --vm-driver=docker --cpus 8 --memory 8192 --kubernetes-version v1.21.2\n")),(0,r.kt)("p",null,"Install Istio, there are two ways to install: Command-Istioctl-based, or Helm-based"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# You can go to the https://github.com/istio/istio/releases/ to download the istioctl for your k8s version\n# e.g. we can execute the following command to download the istio version adapted to k8s 1.24.12\n# wget https://github.com/istio/istio/releases/download/1.17.1/istio-1.17.1-linux-amd64.tar.gz\nistioctl install -y\n\n# Alternatively, you can use istio's helm to install\n# This is the link: https://istio.io/latest/docs/setup/install/helm/\n## Add istio repo\nhelm repo add istio https://istio-release.storage.googleapis.com/charts\nhelm repo update\n## Create istio-system namespace\nkubectl create namespace istio-system\n## Install istio resources\nhelm install istio-base istio/base -n istio-system\nhelm install istiod istio/istiod -n istio-system\nhelm install istio-ingressgateway istio/gateway -n istio-system\n")),(0,r.kt)("h3",{id:"launch-submarine-in-the-cluster"},"Launch submarine in the cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone the project")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/apache/submarine.git\ncd submarine\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create necessary namespaces")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# create namespace for submarine, training, notebook and seldon-core operators\nkubectl create namespace submarine\nkubectl label namespace submarine istio-injection=enabled\n\n# create namespace for deploying submarine-server\nkubectl create namespace submarine-user-test\nkubectl label namespace submarine-user-test istio-injection=enabled\n\n# After k8s 1.25, we can turn on PSA (Pod Security Admission) labels for namespace.\n# We use a common PSA enforcement level. If you want to use a more detailed configuration, you can refer to\n# https://kubernetes.io/docs/concepts/security/pod-security-admission/#pod-security-admission-labels-for-namespaces\nkubectl label namespace submarine-user-test 'pod-security.kubernetes.io/enforce=privileged'\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Install the submarine operator and dependencies by helm chart")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Update helm dependency.\nhelm dependency update ./helm-charts/submarine\n# Install submarine operator in namespace submarine.\nhelm install submarine ./helm-charts/submarine --set seldon-core-operator.istio.gateway=submarine/seldon-gateway -n submarine\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Create a Submarine custom resource and the operator will create the submarine server, database, etc. for us.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f submarine-cloud-v3/config/samples/_v1_submarine.yaml -n submarine-user-test\n")),(0,r.kt)("h3",{id:"ensure-submarine-is-ready"},"Ensure submarine is ready"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pods -n submarine\nNAME                                              READY   STATUS    RESTARTS   AGE\nnotebook-controller-deployment-66d85984bf-x562z   1/1     Running   0          7h7m\ntraining-operator-6dcd5b9c64-nxwr2                1/1     Running   0          7h7m\nsubmarine-operator-9cb7bc84d-brddz                1/1     Running   0          7h7m\n\n$ kubectl get pods -n submarine-user-test\nNAME                                     READY   STATUS    RESTARTS   AGE\nsubmarine-database-0                     1/1     Running   0          7h6m\nsubmarine-minio-686b8777ff-zg4d2         2/2     Running   0          7h6m\nsubmarine-mlflow-68c5559dcb-lkq4g        2/2     Running   0          7h6m\nsubmarine-server-7c6d7bcfd8-5p42w        2/2     Running   0          9m33s\nsubmarine-tensorboard-57c5b64778-t4lww   2/2     Running   0          7h6m\n")),(0,r.kt)("h3",{id:"connect-to-workbench"},"Connect to workbench"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Exposing service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward --address 0.0.0.0 -n istio-system service/istio-ingressgateway 32080:80\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"View workbench")),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://0.0.0.0:32080"),"\n",(0,r.kt)("img",{src:n(1339).Z,width:"1442",height:"781"})),(0,r.kt)("h2",{id:"example-submit-a-mnist-distributed-example"},"Example: Submit a mnist distributed example"),(0,r.kt)("p",null,"We put the code of this example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/submarine/tree/master/dev-support/examples/quickstart"},"here"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"train.py")," is our training script, and ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sh")," is the script to build a docker image."),(0,r.kt)("h3",{id:"1-write-a-python-script-for-distributed-training"},"1. Write a python script for distributed training"),(0,r.kt)("p",null,"Take a simple mnist tensorflow script as an example. We choose ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiWorkerMirroredStrategy")," as our distributed strategy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'"""\n./dev-support/examples/quickstart/train.py\nReference: https://github.com/kubeflow/training-operator/blob/master/examples/tensorflow/distribution_strategy/keras-API/multi_worker_strategy-with-keras.py\n"""\n\nimport tensorflow as tf\nimport tensorflow_datasets as tfds\nfrom packaging.version import Version\nfrom tensorflow.keras import layers, models\n\nimport submarine\n\n\ndef make_datasets_unbatched():\n    BUFFER_SIZE = 10000\n\n    # Scaling MNIST data from (0, 255] to (0., 1.]\n    def scale(image, label):\n        image = tf.cast(image, tf.float32)\n        image /= 255\n        return image, label\n\n    # If we use tensorflow_datasets > 3.1.0, we need to disable GCS\n    # https://github.com/tensorflow/datasets/issues/2761#issuecomment-1187413141\n    if Version(tfds.__version__) > Version("3.1.0"):\n        tfds.core.utils.gcs_utils._is_gcs_disabled = True\n    datasets, _ = tfds.load(name="mnist", with_info=True, as_supervised=True)\n\n    return datasets["train"].map(scale).cache().shuffle(BUFFER_SIZE)\n\n\ndef build_and_compile_cnn_model():\n    model = models.Sequential()\n    model.add(layers.Conv2D(32, (3, 3), activation="relu", input_shape=(28, 28, 1)))\n    model.add(layers.MaxPooling2D((2, 2)))\n    model.add(layers.Conv2D(64, (3, 3), activation="relu"))\n    model.add(layers.MaxPooling2D((2, 2)))\n    model.add(layers.Conv2D(64, (3, 3), activation="relu"))\n    model.add(layers.Flatten())\n    model.add(layers.Dense(64, activation="relu"))\n    model.add(layers.Dense(10, activation="softmax"))\n\n    model.summary()\n\n    model.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])\n\n    return model\n\n\ndef main():\n    strategy = tf.distribute.experimental.MultiWorkerMirroredStrategy(\n        communication=tf.distribute.experimental.CollectiveCommunication.AUTO\n    )\n\n    BATCH_SIZE_PER_REPLICA = 4\n    BATCH_SIZE = BATCH_SIZE_PER_REPLICA * strategy.num_replicas_in_sync\n\n    with strategy.scope():\n        ds_train = make_datasets_unbatched().batch(BATCH_SIZE).repeat()\n        options = tf.data.Options()\n        options.experimental_distribute.auto_shard_policy = (\n            tf.data.experimental.AutoShardPolicy.DATA\n        )\n        ds_train = ds_train.with_options(options)\n        # Model building/compiling need to be within `strategy.scope()`.\n        multi_worker_model = build_and_compile_cnn_model()\n\n    class MyCallback(tf.keras.callbacks.Callback):\n        def on_epoch_end(self, epoch, logs=None):\n            # monitor the loss and accuracy\n            print(logs)\n            submarine.log_metric("loss", logs["loss"], epoch)\n            submarine.log_metric("accuracy", logs["accuracy"], epoch)\n\n    multi_worker_model.fit(ds_train, epochs=10, steps_per_epoch=70, callbacks=[MyCallback()])\n    # save model\n    submarine.save_model(multi_worker_model, "tensorflow")\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,r.kt)("h3",{id:"2-prepare-an-environment-compatible-with-the-training"},"2. Prepare an environment compatible with the training"),(0,r.kt)("p",null,"Build a docker image equipped with the requirement of the environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eval $(minikube docker-env)\n./dev-support/examples/quickstart/build.sh\n")),(0,r.kt)("h3",{id:"3-submit-the-experiment"},"3. Submit the experiment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open submarine workbench and click ",(0,r.kt)("inlineCode",{parentName:"p"},"+ New Experiment"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"Define your experiment"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill the form accordingly. Here we set 3 workers."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Step 1\n",(0,r.kt)("img",{src:n(6356).Z,width:"1606",height:"943"})),(0,r.kt)("li",{parentName:"ol"},"Step 2\n",(0,r.kt)("img",{src:n(3573).Z,width:"1610",height:"946"})),(0,r.kt)("li",{parentName:"ol"},"Step 3\n",(0,r.kt)("img",{src:n(5842).Z,width:"1607",height:"943"})),(0,r.kt)("li",{parentName:"ol"},"The experiment is successfully submitted\n",(0,r.kt)("img",{src:n(9173).Z,width:"1610",height:"946"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the meantime, we have built this image in docker hub and you can run this experiment directly if you choose ",(0,r.kt)("inlineCode",{parentName:"p"},"quickstart")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"From predefined experiment library"),"."))),(0,r.kt)("h3",{id:"4-monitor-the-process"},"4. Monitor the process"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In our code, we use ",(0,r.kt)("inlineCode",{parentName:"li"},"submarine")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"submarine-sdk")," to record the metrics. To see the result, click corresponding experiment with name ",(0,r.kt)("inlineCode",{parentName:"li"},"mnist-example")," in the workbench."),(0,r.kt)("li",{parentName:"ol"},"To see the metrics of each worker, you can select a worker from the left top list.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2076).Z,width:"1598",height:"945"})),(0,r.kt)("h3",{id:"5-serve-the-model"},"5. Serve the model"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Before serving, we need to register a new model.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(64).Z,width:"1361",height:"873"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"And then, check the output model in experiment page.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3641).Z,width:"1075",height:"336"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Click the button and register the model.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(64).Z,width:"1361",height:"873"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Go to the model page and deploy our model for serving.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4786).Z,width:"1356",height:"871"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"We can run the following commands to get the ",(0,r.kt)("inlineCode",{parentName:"li"},"VirtualService")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Endpoint")," that use istio for external port forward or ingress.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## get VirtualService with your model name\nkubectl describe VirtualService -n submarine-user-test -l model-name=tf-mnist\n\nName:         submarine-model-1-2508dd65692740b18ff5c6c6c162b863\nNamespace:    submarine-user-test\nLabels:       model-id=2508dd65692740b18ff5c6c6c162b863\n              model-name=tf-mnist\n              model-version=1\nAnnotations:  <none>\nAPI Version:  networking.istio.io/v1beta1\nKind:         VirtualService\nMetadata:\n  Creation Timestamp:  2022-09-18T05:26:38Z\n  Generation:          1\n  Managed Fields:\n    ...\nSpec:\n  Gateways:\n    submarine/seldon-gateway\n  Hosts:\n    *\n  Http:\n    Match:\n      Uri:\n        Prefix:  /seldon/submarine-user-test/1/1/\n    Rewrite:\n      Uri:  /\n    Route:\n      Destination:\n        Host:  submarine-model-1-2508dd65692740b18ff5c6c6c162b863\n        Port:\n          Number:  8000\nEvents:            <none>\n")),(0,r.kt)("p",null,"To confirm that the serving endpoint is available, try using the swagger address to confirm the availability of the interface.\nIn our example, the address of the swagger is: http://localhost:32080/seldon/submarine-user-test/1/1/api/v1.0/doc/"),(0,r.kt)("p",null,"More details can be found in the official seldon documentation: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.seldon.io/projects/seldon-core/en/latest/workflow/serving.html#generated-documentation-swagger-ui"},"https://docs.seldon.io/projects/seldon-core/en/latest/workflow/serving.html#generated-documentation-swagger-ui")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"After successfully serving the model, we can test the results of serving using the test python code ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/dev-support/examples/quickstart/serve_predictions.py"},"serve_predictions.py"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(874).Z,width:"1360",height:"862"})))}d.isMDXComponent=!0},3641:function(e,t,n){t.Z=n.p+"assets/images/quickstart-artifacts-31b0ede0bd1f74695a266b185c70c1f1.png"},6356:function(e,t,n){t.Z=n.p+"assets/images/quickstart-submit-1-0-7-0-cec455a03933cc7b038a35a141a743b9.png"},3573:function(e,t,n){t.Z=n.p+"assets/images/quickstart-submit-2-0-7-0-2bce3b75c9f7c0ee0f44ee9b2bdb742e.png"},5842:function(e,t,n){t.Z=n.p+"assets/images/quickstart-submit-3-0-7-0-f7f3107669746b2c2a58e0794051a24b.png"},9173:function(e,t,n){t.Z=n.p+"assets/images/quickstart-submit-4-0-7-0-34946a5790013de952eb32d1246f4a23.png"},2076:function(e,t,n){t.Z=n.p+"assets/images/quickstart-ui-0-7-0-821f5ad73116d9a9d3088cddcb576836.png"},1339:function(e,t,n){t.Z=n.p+"assets/images/quickstart-worbench-0d8c2f6217f22460d4cf8e9b05d06f6b.png"},64:function(e,t,n){t.Z=n.p+"assets/images/submarine-register-model-6540e8f76744c0f1e84013e7e6d78341.png"},4786:function(e,t,n){t.Z=n.p+"assets/images/submarine-serve-model-37ce5e2709d59223d7a7461ecd4f90d1.png"},874:function(e,t,n){t.Z=n.p+"assets/images/submarine-serve-prediction-c6038a5bfd49f11d234ba11442618067.png"}}]);