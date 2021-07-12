(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(143)),s={},i={unversionedId:"userDocs/yarn/docker/tensorflow/with-cifar10-models/ubuntu-18.04/cifar10_estimator_tf_1.13.1/README",id:"userDocs/yarn/docker/tensorflow/with-cifar10-models/ubuntu-18.04/cifar10_estimator_tf_1.13.1/README",isDocsHomePage:!1,title:"README",description:"\x3c!--",source:"@site/docs/userDocs/yarn/docker/tensorflow/with-cifar10-models/ubuntu-18.04/cifar10_estimator_tf_1.13.1/README.md",slug:"/userDocs/yarn/docker/tensorflow/with-cifar10-models/ubuntu-18.04/cifar10_estimator_tf_1.13.1/README",permalink:"/docs/userDocs/yarn/docker/tensorflow/with-cifar10-models/ubuntu-18.04/cifar10_estimator_tf_1.13.1/README",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/userDocs/yarn/docker/tensorflow/with-cifar10-models/ubuntu-18.04/cifar10_estimator_tf_1.13.1/README.md",version:"current"},l=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Training on a single machine with GPUs or CPU",id:"training-on-a-single-machine-with-gpus-or-cpu",children:[]},{value:"Run distributed training",id:"run-distributed-training",children:[{value:"(Optional) Running on Google Cloud Machine Learning Engine",id:"optional-running-on-google-cloud-machine-learning-engine",children:[]},{value:"Set TF_CONFIG",id:"set-tf_config",children:[]},{value:"Running script",id:"running-script",children:[]}]},{value:"Visualizing results with TensorBoard",id:"visualizing-results-with-tensorboard",children:[]},{value:"Warnings",id:"warnings",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"(Copied from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/tensorflow/models/tree/master/tutorials/image/cifar10_estimator"},"https://github.com/tensorflow/models/tree/master/tutorials/image/cifar10_estimator"),")"),Object(o.b)("p",null,"CIFAR-10 is a common benchmark in machine learning for image recognition."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://www.cs.toronto.edu/~kriz/cifar.html"},"http://www.cs.toronto.edu/~kriz/cifar.html")),Object(o.b)("p",null,"Code in this directory focuses on how to use TensorFlow Estimators to train and\nevaluate a CIFAR-10 ResNet model on:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A single host with one CPU;"),Object(o.b)("li",{parentName:"ul"},"A single host with multiple GPUs;"),Object(o.b)("li",{parentName:"ul"},"Multiple hosts with CPU or multiple GPUs;")),Object(o.b)("p",null,"Before trying to run the model we highly encourage you to read all the README."),Object(o.b)("h2",{id:"prerequisite"},"Prerequisite"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.tensorflow.org/install/"},"Install")," TensorFlow version 1.2.1 or\nlater.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download the CIFAR-10 dataset and generate TFRecord files using the provided\nscript.  The script and associated command below will download the CIFAR-10\ndataset and then generate a TFRecord for the training, validation, and\nevaluation datasets."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"python generate_cifar10_tfrecords.py --data-dir=${PWD}/cifar-10-data\n")),Object(o.b)("p",null,"After running the command above, you should see the following files in the\n--data-dir (",Object(o.b)("inlineCode",{parentName:"p"},"ls -R cifar-10-data"),"):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"train.tfrecords"),Object(o.b)("li",{parentName:"ul"},"validation.tfrecords"),Object(o.b)("li",{parentName:"ul"},"eval.tfrecords")),Object(o.b)("h2",{id:"training-on-a-single-machine-with-gpus-or-cpu"},"Training on a single machine with GPUs or CPU"),Object(o.b)("p",null,"Run the training on CPU only. After training, it runs the evaluation."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"python cifar10_main.py --data-dir=${PWD}/cifar-10-data \\\n                       --job-dir=/tmp/cifar10 \\\n                       --num-gpus=0 \\\n                       --train-steps=1000\n")),Object(o.b)("p",null,"Run the model on 2 GPUs using CPU as parameter server. After training, it runs\nthe evaluation."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"python cifar10_main.py --data-dir=${PWD}/cifar-10-data \\\n                       --job-dir=/tmp/cifar10 \\\n                       --num-gpus=2 \\\n                       --train-steps=1000\n")),Object(o.b)("p",null,"Run the model on 2 GPUs using GPU as parameter server.\nIt will run an experiment, which for local setting basically means it will run\nstop training\na couple of times to perform evaluation."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"python cifar10_main.py --data-dir=${PWD}/cifar-10-data \\\n                       --job-dir=/tmp/cifar10 \\\n                       --variable-strategy GPU \\\n                       --num-gpus=2 \\\n")),Object(o.b)("p",null,"There are more command line flags to play with; run\n",Object(o.b)("inlineCode",{parentName:"p"},"python cifar10_main.py --help")," for details."),Object(o.b)("h2",{id:"run-distributed-training"},"Run distributed training"),Object(o.b)("h3",{id:"optional-running-on-google-cloud-machine-learning-engine"},"(Optional) Running on Google Cloud Machine Learning Engine"),Object(o.b)("p",null,"This example can be run on Google Cloud Machine Learning Engine (ML Engine),\nwhich will configure the environment and take care of running workers,\nparameters servers, and masters in a fault tolerant way."),Object(o.b)("p",null,"To install the command line tool, and set up a project and billing, see the\nquickstart ",Object(o.b)("a",{parentName:"p",href:"https://cloud.google.com/ml-engine/docs/quickstarts/command-line"},"here"),"."),Object(o.b)("p",null,"You'll also need a Google Cloud Storage bucket for the data. If you followed the\ninstructions above, you can just run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"MY_BUCKET=gs://<my-bucket-name>\ngsutil cp -r ${PWD}/cifar-10-data $MY_BUCKET/\n")),Object(o.b)("p",null,"Then run the following command from the ",Object(o.b)("inlineCode",{parentName:"p"},"tutorials/image")," directory of this\nrepository (the parent directory of this README):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"gcloud ml-engine jobs submit training cifarmultigpu \\\n    --runtime-version 1.2 \\\n    --job-dir=$MY_BUCKET/model_dirs/cifarmultigpu \\\n    --config cifar10_estimator/cmle_config.yaml \\\n    --package-path cifar10_estimator/ \\\n    --module-name cifar10_estimator.cifar10_main \\\n    -- \\\n    --data-dir=$MY_BUCKET/cifar-10-data \\\n    --num-gpus=4 \\\n    --train-steps=1000\n")),Object(o.b)("h3",{id:"set-tf_config"},"Set TF_CONFIG"),Object(o.b)("p",null,"Considering that you already have multiple hosts configured, all you need is a\n",Object(o.b)("inlineCode",{parentName:"p"},"TF_CONFIG")," environment variable on each host. You can set up the hosts manually\nor check ",Object(o.b)("a",{parentName:"p",href:"https://github.com/tensorflow/ecosystem"},"tensorflow/ecosystem")," for\ninstructions about how to set up a Cluster."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"TF_CONFIG")," will be used by the ",Object(o.b)("inlineCode",{parentName:"p"},"RunConfig")," to know the existing hosts and\ntheir task: ",Object(o.b)("inlineCode",{parentName:"p"},"master"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ps")," or ",Object(o.b)("inlineCode",{parentName:"p"},"worker"),"."),Object(o.b)("p",null,"Here's an example of ",Object(o.b)("inlineCode",{parentName:"p"},"TF_CONFIG"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"cluster = {'master': ['master-ip:8000'],\n           'ps': ['ps-ip:8000'],\n           'worker': ['worker-ip:8000']}\n\nTF_CONFIG = json.dumps(\n  {'cluster': cluster,\n   'task': {'type': master, 'index': 0},\n   'model_dir': 'gs://<bucket_path>/<dir_path>',\n   'environment': 'cloud'\n  })\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Cluster")),Object(o.b)("p",null,"A cluster spec, which is basically a dictionary that describes all of the tasks\nin the cluster. More about it ",Object(o.b)("a",{parentName:"p",href:"https://www.tensorflow.org/deploy/distributed"},"here"),"."),Object(o.b)("p",null,"In this cluster spec we are defining a cluster with 1 master, 1 ps and 1 worker."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"ps"),": saves the parameters among all workers. All workers can\nread/write/update the parameters for model via ps. As some models are\nextremely large the parameters are shared among the ps (each ps stores a\nsubset).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"worker"),": does the training.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"master"),": basically a special worker, it does training, but also restores and\nsaves checkpoints and do evaluation."))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Task")),Object(o.b)("p",null,"The Task defines what is the role of the current node, for this example the node\nis the master on index 0 on the cluster spec, the task will be different for\neach node. An example of the ",Object(o.b)("inlineCode",{parentName:"p"},"TF_CONFIG")," for a worker would be:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"cluster = {'master': ['master-ip:8000'],\n           'ps': ['ps-ip:8000'],\n           'worker': ['worker-ip:8000']}\n\nTF_CONFIG = json.dumps(\n  {'cluster': cluster,\n   'task': {'type': worker, 'index': 0},\n   'model_dir': 'gs://<bucket_path>/<dir_path>',\n   'environment': 'cloud'\n  })\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Model_dir")),Object(o.b)("p",null,"This is the path where the master will save the checkpoints, graph and\nTensorBoard files. For a multi host environment you may want to use a\nDistributed File System, Google Storage and DFS are supported."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Environment")),Object(o.b)("p",null,"By the default environment is ",Object(o.b)("em",{parentName:"p"},"local"),", for a distributed setting we need to\nchange it to ",Object(o.b)("em",{parentName:"p"},"cloud"),"."),Object(o.b)("h3",{id:"running-script"},"Running script"),Object(o.b)("p",null,"Once you have a ",Object(o.b)("inlineCode",{parentName:"p"},"TF_CONFIG")," configured properly on each host you're ready to run\non distributed settings."),Object(o.b)("h4",{id:"master"},"Master"),Object(o.b)("p",null,"Run this on master:\nRuns an Experiment in sync mode on 4 GPUs using CPU as parameter server for\n40000 steps. It will run evaluation a couple of times during training. The\nnum_workers argument is used only to update the learning rate correctly. Make\nsure the model_dir is the same as defined on the TF_CONFIG."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"python cifar10_main.py --data-dir=gs://path/cifar-10-data \\\n                       --job-dir=gs://path/model_dir/ \\\n                       --num-gpus=4 \\\n                       --train-steps=40000 \\\n                       --sync \\\n                       --num-workers=2\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Output:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"INFO:tensorflow:Using model_dir in TF_CONFIG: gs://path/model_dir/\nINFO:tensorflow:Using config: {'_save_checkpoints_secs': 600, '_num_ps_replicas': 1, '_keep_checkpoint_max': 5, '_task_type': u'master', '_is_chief': True, '_cluster_spec': <tensorflow.python.training.server_lib.ClusterSpec object at 0x7fd16fb2be10>, '_model_dir': 'gs://path/model_dir/', '_save_checkpoints_steps': None, '_keep_checkpoint_every_n_hours': 10000, '_session_config': intra_op_parallelism_threads: 1\ngpu_options {\n}\nallow_soft_placement: true\n, '_tf_random_seed': None, '_environment': u'cloud', '_num_worker_replicas': 1, '_task_id': 0, '_save_summary_steps': 100, '_tf_config': gpu_options {\n  per_process_gpu_memory_fraction: 1.0\n}\n, '_evaluation_master': '', '_master': u'grpc://master-ip:8000'}\n...\n2017-08-01 19:59:26.496208: I tensorflow/core/common_runtime/gpu/gpu_device.cc:940] Found device 0 with properties:\nname: Tesla K80\nmajor: 3 minor: 7 memoryClockRate (GHz) 0.8235\npciBusID 0000:00:04.0\nTotal memory: 11.17GiB\nFree memory: 11.09GiB\n2017-08-01 19:59:26.775660: I tensorflow/core/common_runtime/gpu/gpu_device.cc:940] Found device 1 with properties:\nname: Tesla K80\nmajor: 3 minor: 7 memoryClockRate (GHz) 0.8235\npciBusID 0000:00:05.0\nTotal memory: 11.17GiB\nFree memory: 11.10GiB\n...\n2017-08-01 19:59:29.675171: I tensorflow/core/distributed_runtime/rpc/grpc_server_lib.cc:316] Started server with target: grpc://localhost:8000\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_1/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_2/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_3/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_4/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_5/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_6/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1/avg_pool/: (?, 16, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_1/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_2/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_3/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_4/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_1/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_2/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_3/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_4/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_5/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_6/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1/avg_pool/: (?, 32, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_1/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_2/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_3/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_4/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_5/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_6/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/global_avg_pool/: (?, 64)\nINFO:tensorflow:image after unit resnet/tower_0/fully_connected/: (?, 11)\nINFO:tensorflow:SyncReplicasV2: replicas_to_aggregate=1; total_num_replicas=1\nINFO:tensorflow:Create CheckpointSaverHook.\nINFO:tensorflow:Restoring parameters from gs://path/model_dir/model.ckpt-0\n2017-08-01 19:59:37.560775: I tensorflow/core/distributed_runtime/master_session.cc:999] Start master session 156fcb55fe6648d6 with config:\nintra_op_parallelism_threads: 1\ngpu_options {\n  per_process_gpu_memory_fraction: 1\n}\nallow_soft_placement: true\n\nINFO:tensorflow:Saving checkpoints for 1 into gs://path/model_dir/model.ckpt.\nINFO:tensorflow:loss = 1.20682, step = 1\nINFO:tensorflow:loss = 1.20682, learning_rate = 0.1\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_1/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_2/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_3/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_4/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_5/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_6/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1/avg_pool/: (?, 16, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_1/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_2/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_3/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_4/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_5/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_6/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1/avg_pool/: (?, 32, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_1/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_2/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_3/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_4/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_5/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_6/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/global_avg_pool/: (?, 64)\nINFO:tensorflow:image after unit resnet/tower_0/fully_connected/: (?, 11)\nINFO:tensorflow:SyncReplicasV2: replicas_to_aggregate=2; total_num_replicas=2\nINFO:tensorflow:Starting evaluation at 2017-08-01-20:00:14\n2017-08-01 20:00:15.745881: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1030] Creating TensorFlow device (/gpu:0) -> (device: 0, name: Tesla K80, pci bus id: 0000:00:04.0)\n2017-08-01 20:00:15.745949: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1030] Creating TensorFlow device (/gpu:1) -> (device: 1, name: Tesla K80, pci bus id: 0000:00:05.0)\n2017-08-01 20:00:15.745958: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1030] Creating TensorFlow device (/gpu:2) -> (device: 2, name: Tesla K80, pci bus id: 0000:00:06.0)\n2017-08-01 20:00:15.745964: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1030] Creating TensorFlow device (/gpu:3) -> (device: 3, name: Tesla K80, pci bus id: 0000:00:07.0)\n2017-08-01 20:00:15.745969: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1030] Creating TensorFlow device (/gpu:4) -> (device: 4, name: Tesla K80, pci bus id: 0000:00:08.0)\n2017-08-01 20:00:15.745975: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1030] Creating TensorFlow device (/gpu:5) -> (device: 5, name: Tesla K80, pci bus id: 0000:00:09.0)\n2017-08-01 20:00:15.745987: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1030] Creating TensorFlow device (/gpu:6) -> (device: 6, name: Tesla K80, pci bus id: 0000:00:0a.0)\n2017-08-01 20:00:15.745997: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1030] Creating TensorFlow device (/gpu:7) -> (device: 7, name: Tesla K80, pci bus id: 0000:00:0b.0)\nINFO:tensorflow:Restoring parameters from gs://path/model_dir/model.ckpt-10023\nINFO:tensorflow:Evaluation [1/100]\nINFO:tensorflow:Evaluation [2/100]\nINFO:tensorflow:Evaluation [3/100]\nINFO:tensorflow:Evaluation [4/100]\nINFO:tensorflow:Evaluation [5/100]\nINFO:tensorflow:Evaluation [6/100]\nINFO:tensorflow:Evaluation [7/100]\nINFO:tensorflow:Evaluation [8/100]\nINFO:tensorflow:Evaluation [9/100]\nINFO:tensorflow:Evaluation [10/100]\nINFO:tensorflow:Evaluation [11/100]\nINFO:tensorflow:Evaluation [12/100]\nINFO:tensorflow:Evaluation [13/100]\n...\nINFO:tensorflow:Evaluation [100/100]\nINFO:tensorflow:Finished evaluation at 2017-08-01-20:00:31\nINFO:tensorflow:Saving dict for global step 1: accuracy = 0.0994, global_step = 1, loss = 630.425\n")),Object(o.b)("h4",{id:"worker"},"Worker"),Object(o.b)("p",null,"Run this on worker:\nRuns an Experiment in sync mode on 4 GPUs using CPU as parameter server for\n40000 steps. It will run evaluation a couple of times during training. Make sure\nthe model_dir is the same as defined on the TF_CONFIG."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"python cifar10_main.py --data-dir=gs://path/cifar-10-data \\\n                       --job-dir=gs://path/model_dir/ \\\n                       --num-gpus=4 \\\n                       --train-steps=40000 \\\n                       --sync\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Output:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"INFO:tensorflow:Using model_dir in TF_CONFIG: gs://path/model_dir/\nINFO:tensorflow:Using config: {'_save_checkpoints_secs': 600,\n'_num_ps_replicas': 1, '_keep_checkpoint_max': 5, '_task_type': u'worker',\n'_is_chief': False, '_cluster_spec':\n<tensorflow.python.training.server_lib.ClusterSpec object at 0x7f6918438e10>,\n'_model_dir': 'gs://<path>/model_dir/',\n'_save_checkpoints_steps': None, '_keep_checkpoint_every_n_hours': 10000,\n'_session_config': intra_op_parallelism_threads: 1\ngpu_options {\n}\nallow_soft_placement: true\n, '_tf_random_seed': None, '_environment': u'cloud', '_num_worker_replicas': 1,\n'_task_id': 0, '_save_summary_steps': 100, '_tf_config': gpu_options {\n  per_process_gpu_memory_fraction: 1.0\n  }\n...\n2017-08-01 19:59:26.496208: I tensorflow/core/common_runtime/gpu/gpu_device.cc:940] Found device 0 with properties:\nname: Tesla K80\nmajor: 3 minor: 7 memoryClockRate (GHz) 0.8235\npciBusID 0000:00:04.0\nTotal memory: 11.17GiB\nFree memory: 11.09GiB\n2017-08-01 19:59:26.775660: I tensorflow/core/common_runtime/gpu/gpu_device.cc:940] Found device 1 with properties:\nname: Tesla K80\nmajor: 3 minor: 7 memoryClockRate (GHz) 0.8235\npciBusID 0000:00:05.0\nTotal memory: 11.17GiB\nFree memory: 11.10GiB\n...\n2017-08-01 19:59:29.675171: I tensorflow/core/distributed_runtime/rpc/grpc_server_lib.cc:316] Started server with target: grpc://localhost:8000\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_1/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_2/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_3/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_4/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_5/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage/residual_v1_6/: (?, 16, 32, 32)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1/avg_pool/: (?, 16, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_1/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_2/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_3/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_4/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_1/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_2/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_3/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_4/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_5/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_1/residual_v1_6/: (?, 32, 16, 16)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1/avg_pool/: (?, 32, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_1/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_2/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_3/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_4/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_5/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/stage_2/residual_v1_6/: (?, 64, 8, 8)\nINFO:tensorflow:image after unit resnet/tower_0/global_avg_pool/: (?, 64)\nINFO:tensorflow:image after unit resnet/tower_0/fully_connected/: (?, 11)\nINFO:tensorflow:SyncReplicasV2: replicas_to_aggregate=2; total_num_replicas=2\nINFO:tensorflow:Create CheckpointSaverHook.\n2017-07-31 22:38:04.629150: I\ntensorflow/core/distributed_runtime/master.cc:209] CreateSession still waiting\nfor response from worker: /job:master/replica:0/task:0\n2017-07-31 22:38:09.263492: I\ntensorflow/core/distributed_runtime/master_session.cc:999] Start master\nsession cc58f93b1e259b0c with config:\nintra_op_parallelism_threads: 1\ngpu_options {\nper_process_gpu_memory_fraction: 1\n}\nallow_soft_placement: true\nINFO:tensorflow:loss = 5.82382, step = 0\nINFO:tensorflow:loss = 5.82382, learning_rate = 0.8\nINFO:tensorflow:Average examples/sec: 1116.92 (1116.92), step = 10\nINFO:tensorflow:Average examples/sec: 1233.73 (1377.83), step = 20\nINFO:tensorflow:Average examples/sec: 1485.43 (2509.3), step = 30\nINFO:tensorflow:Average examples/sec: 1680.27 (2770.39), step = 40\nINFO:tensorflow:Average examples/sec: 1825.38 (2788.78), step = 50\nINFO:tensorflow:Average examples/sec: 1929.32 (2697.27), step = 60\nINFO:tensorflow:Average examples/sec: 2015.17 (2749.05), step = 70\nINFO:tensorflow:loss = 37.6272, step = 79 (19.554 sec)\nINFO:tensorflow:loss = 37.6272, learning_rate = 0.8 (19.554 sec)\nINFO:tensorflow:Average examples/sec: 2074.92 (2618.36), step = 80\nINFO:tensorflow:Average examples/sec: 2132.71 (2744.13), step = 90\nINFO:tensorflow:Average examples/sec: 2183.38 (2777.21), step = 100\nINFO:tensorflow:Average examples/sec: 2224.4 (2739.03), step = 110\nINFO:tensorflow:Average examples/sec: 2240.28 (2431.26), step = 120\nINFO:tensorflow:Average examples/sec: 2272.12 (2739.32), step = 130\nINFO:tensorflow:Average examples/sec: 2300.68 (2750.03), step = 140\nINFO:tensorflow:Average examples/sec: 2325.81 (2745.63), step = 150\nINFO:tensorflow:Average examples/sec: 2347.14 (2721.53), step = 160\nINFO:tensorflow:Average examples/sec: 2367.74 (2754.54), step = 170\nINFO:tensorflow:loss = 27.8453, step = 179 (18.893 sec)\n...\n")),Object(o.b)("h4",{id:"ps"},"PS"),Object(o.b)("p",null,"Run this on ps:\nThe ps will not do training so most of the arguments won't affect the execution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"python cifar10_main.py --job-dir=gs://path/model_dir/\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Output:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"INFO:tensorflow:Using model_dir in TF_CONFIG: gs://path/model_dir/\nINFO:tensorflow:Using config: {'_save_checkpoints_secs': 600, '_num_ps_replicas': 1, '_keep_checkpoint_max': 5, '_task_type': u'ps', '_is_chief': False, '_cluster_spec': <tensorflow.python.training.server_lib.ClusterSpec object at 0x7f48f1addf90>, '_model_dir': 'gs://path/model_dir/', '_save_checkpoints_steps': None, '_keep_checkpoint_every_n_hours': 10000, '_session_config': intra_op_parallelism_threads: 1\ngpu_options {\n}\nallow_soft_placement: true\n, '_tf_random_seed': None, '_environment': u'cloud', '_num_worker_replicas': 1, '_task_id': 0, '_save_summary_steps': 100, '_tf_config': gpu_options {\n  per_process_gpu_memory_fraction: 1.0\n}\n, '_evaluation_master': '', '_master': u'grpc://master-ip:8000'}\n2017-07-31 22:54:58.928088: I tensorflow/core/distributed_runtime/rpc/grpc_channel.cc:215] Initialize GrpcChannelCache for job master -> {0 -> master-ip:8000}\n2017-07-31 22:54:58.928153: I tensorflow/core/distributed_runtime/rpc/grpc_channel.cc:215] Initialize GrpcChannelCache for job ps -> {0 -> localhost:8000}\n2017-07-31 22:54:58.928160: I tensorflow/core/distributed_runtime/rpc/grpc_channel.cc:215] Initialize GrpcChannelCache for job worker -> {0 -> worker-ip:8000}\n2017-07-31 22:54:58.929873: I tensorflow/core/distributed_runtime/rpc/grpc_server_lib.cc:316] Started server with target: grpc://localhost:8000\n")),Object(o.b)("h2",{id:"visualizing-results-with-tensorboard"},"Visualizing results with TensorBoard"),Object(o.b)("p",null,"When using Estimators you can also visualize your data in TensorBoard, with no\nchanges in your code. You can use TensorBoard to visualize your TensorFlow\ngraph, plot quantitative metrics about the execution of your graph, and show\nadditional data like images that pass through it."),Object(o.b)("p",null,'You\'ll see something similar to this if you "point" TensorBoard to the\n',Object(o.b)("inlineCode",{parentName:"p"},"job dir")," parameter you used to train or evaluate your model."),Object(o.b)("p",null,"Check TensorBoard during training or after it. Just point TensorBoard to the\nmodel_dir you chose on the previous step."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'tensorboard --log-dir="<job dir>"\n')),Object(o.b)("h2",{id:"warnings"},"Warnings"),Object(o.b)("p",null,"When running ",Object(o.b)("inlineCode",{parentName:"p"},"cifar10_main.py")," with ",Object(o.b)("inlineCode",{parentName:"p"},"--sync")," argument you may see an error\nsimilar to:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'File "cifar10_main.py", line 538, in <module>\n    tf.app.run()\nFile "/usr/local/lib/python2.7/dist-packages/tensorflow/python/platform/app.py", line 48, in run\n    _sys.exit(main(_sys.argv[:1] + flags_passthrough))\nFile "cifar10_main.py", line 518, in main\n    hooks), run_config=config)\nFile "/usr/local/lib/python2.7/dist-packages/tensorflow/contrib/learn/python/learn/learn_runner.py", line 210, in run\n    return _execute_schedule(experiment, schedule)\nFile "/usr/local/lib/python2.7/dist-packages/tensorflow/contrib/learn/python/learn/learn_runner.py", line 47, in _execute_schedule\n    return task()\nFile "/usr/local/lib/python2.7/dist-packages/tensorflow/contrib/learn/python/learn/experiment.py", line 501, in train_and_evaluate\n    hooks=self._eval_hooks)\nFile "/usr/local/lib/python2.7/dist-packages/tensorflow/contrib/learn/python/learn/experiment.py", line 681, in _call_evaluate\n    hooks=hooks)\nFile "/usr/local/lib/python2.7/dist-packages/tensorflow/python/estimator/estimator.py", line 292, in evaluate\n    name=name)\nFile "/usr/local/lib/python2.7/dist-packages/tensorflow/python/estimator/estimator.py", line 638, in _evaluate_model\n    features, labels, model_fn_lib.ModeKeys.EVAL)\nFile "/usr/local/lib/python2.7/dist-packages/tensorflow/python/estimator/estimator.py", line 545, in _call_model_fn\n    features=features, labels=labels, **kwargs)\nFile "cifar10_main.py", line 331, in _resnet_model_fn\n    gradvars, global_step=tf.train.get_global_step())\nFile "/usr/local/lib/python2.7/dist-packages/tensorflow/python/training/sync_replicas_optimizer.py", line 252, in apply_gradients\n    variables.global_variables())\nFile "/usr/local/lib/python2.7/dist-packages/tensorflow/python/util/tf_should_use.py", line 170, in wrapped\n    return _add_should_use_warning(fn(*args, **kwargs))\nFile "/usr/local/lib/python2.7/dist-packages/tensorflow/python/util/tf_should_use.py", line 139, in _add_should_use_warning\n    wrapped = TFShouldUseWarningWrapper(x)\nFile "/usr/local/lib/python2.7/dist-packages/tensorflow/python/util/tf_should_use.py", line 96, in __init__\n    stack = [s.strip() for s in traceback.format_stack()]\n')),Object(o.b)("p",null,"This should not affect your training, and should be fixed on the next releases."))}u.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||_[m]||o;return n?a.a.createElement(d,i(i({ref:t},c),{},{components:n})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);