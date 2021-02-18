(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{136:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var a=n(0),t=n.n(a);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=t.a.createContext({}),d=function(e){var r=t.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=d(e.components);return t.a.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.a.createElement(t.a.Fragment,{},r)}},b=t.a.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,m=p["".concat(s,".").concat(b)]||p[b]||l[b]||o;return n?t.a.createElement(m,c(c({ref:r},u),{},{components:n})):t.a.createElement(m,c({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return t.a.createElement.apply(null,s)}return t.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},80:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return s})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return d}));var a=n(3),t=n(7),o=(n(0),n(136)),s={title:"Test and Troubleshooting"},c={unversionedId:"userDocs/yarn/TestAndTroubleshooting",id:"userDocs/yarn/TestAndTroubleshooting",isDocsHomePage:!1,title:"Test and Troubleshooting",description:"\x3c!--",source:"@site/docs/userDocs/yarn/TestAndTroubleshooting.md",slug:"/userDocs/yarn/TestAndTroubleshooting",permalink:"/docs/userDocs/yarn/TestAndTroubleshooting",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/userDocs/yarn/TestAndTroubleshooting.md",version:"current",sidebar:"docs",previous:{title:"YARN Runtime Quick Start Guide",permalink:"/docs/userDocs/yarn/YARNRuntimeGuide"},next:{title:"Write Dockerfiles for Submarine",permalink:"/docs/userDocs/yarn/Dockerfiles"}},i=[{value:"Test with a tensorflow job",id:"test-with-a-tensorflow-job",children:[]},{value:"Issues:",id:"issues",children:[{value:"Issue 1: Fail to start nodemanager after system reboot",id:"issue-1-fail-to-start-nodemanager-after-system-reboot",children:[]},{value:"Issue 2: container-executor permission denied",id:"issue-2-container-executor-permission-denied",children:[]},{value:"Issue 3\uff1aHow to get docker service log",id:"issue-3\uff1ahow-to-get-docker-service-log",children:[]},{value:"Issue 4\uff1adocker can&#39;t remove containers with errors like <code>device or resource busy</code>",id:"issue-4\uff1adocker-cant-remove-containers-with-errors-like-device-or-resource-busy",children:[]},{value:"Issue 5\uff1aYarn failed to start containers",id:"issue-5\uff1ayarn-failed-to-start-containers",children:[]}]}],u={toc:i};function d(e){var r=e.components,n=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"test-with-a-tensorflow-job"},"Test with a tensorflow job"),Object(o.b)("p",null,"Distributed-shell + GPU + cgroup"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},' ... \\\n job run \\\n --env DOCKER_JAVA_HOME=/opt/java \\\n --env DOCKER_HADOOP_HDFS_HOME=/hadoop-current --name distributed-tf-gpu \\\n --env YARN_CONTAINER_RUNTIME_DOCKER_CONTAINER_NETWORK=calico-network \\\n --worker_docker_image tf-1.13.1-gpu:0.0.1 \\\n --ps_docker_image tf-1.13.1-cpu:0.0.1 \\\n --input_path hdfs://${dfs_name_service}/tmp/cifar-10-data \\\n --checkpoint_path hdfs://${dfs_name_service}/user/hadoop/tf-distributed-checkpoint \\\n --num_ps 0 \\\n --ps_resources memory=4G,vcores=2,gpu=0 \\\n --ps_launch_cmd "python /test/cifar10_estimator/cifar10_main.py --data-dir=hdfs://${dfs_name_service}/tmp/cifar-10-data --job-dir=hdfs://${dfs_name_service}/tmp/cifar-10-jobdir --num-gpus=0" \\\n --worker_resources memory=4G,vcores=2,gpu=1 --verbose \\\n --num_workers 1 \\\n --worker_launch_cmd "python /test/cifar10_estimator/cifar10_main.py --data-dir=hdfs://${dfs_name_service}/tmp/cifar-10-data --job-dir=hdfs://${dfs_name_service}/tmp/cifar-10-jobdir --train-steps=500 --eval-batch-size=16 --train-batch-size=16 --sync --num-gpus=1"\n')),Object(o.b)("h2",{id:"issues"},"Issues:"),Object(o.b)("h3",{id:"issue-1-fail-to-start-nodemanager-after-system-reboot"},"Issue 1: Fail to start nodemanager after system reboot"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"2018-09-20 18:54:39,785 ERROR org.apache.hadoop.yarn.server.nodemanager.LinuxContainerExecutor: Failed to bootstrap configured resource subsystems!\norg.apache.hadoop.yarn.server.nodemanager.containermanager.linux.resources.ResourceHandlerException: Unexpected: Cannot create yarn cgroup Subsystem:cpu Mount points:/proc/mounts User:yarn Path:/sys/fs/cgroup/cpu,cpuacct/hadoop-yarn\n  at org.apache.hadoop.yarn.server.nodemanager.containermanager.linux.resources.CGroupsHandlerImpl.initializePreMountedCGroupController(CGroupsHandlerImpl.java:425)\n  at org.apache.hadoop.yarn.server.nodemanager.containermanager.linux.resources.CGroupsHandlerImpl.initializeCGroupController(CGroupsHandlerImpl.java:377)\n  at org.apache.hadoop.yarn.server.nodemanager.containermanager.linux.resources.CGroupsCpuResourceHandlerImpl.bootstrap(CGroupsCpuResourceHandlerImpl.java:98)\n  at org.apache.hadoop.yarn.server.nodemanager.containermanager.linux.resources.CGroupsCpuResourceHandlerImpl.bootstrap(CGroupsCpuResourceHandlerImpl.java:87)\n  at org.apache.hadoop.yarn.server.nodemanager.containermanager.linux.resources.ResourceHandlerChain.bootstrap(ResourceHandlerChain.java:58)\n  at org.apache.hadoop.yarn.server.nodemanager.LinuxContainerExecutor.init(LinuxContainerExecutor.java:320)\n  at org.apache.hadoop.yarn.server.nodemanager.NodeManager.serviceInit(NodeManager.java:389)\n  at org.apache.hadoop.service.AbstractService.init(AbstractService.java:164)\n  at org.apache.hadoop.yarn.server.nodemanager.NodeManager.initAndStartNodeManager(NodeManager.java:929)\n  at org.apache.hadoop.yarn.server.nodemanager.NodeManager.main(NodeManager.java:997)\n2018-09-20 18:54:39,789 INFO org.apache.hadoop.service.AbstractService: Service NodeManager failed in state INITED\n")),Object(o.b)("p",null,"Solution: Grant user yarn the access to  ",Object(o.b)("inlineCode",{parentName:"p"},"/sys/fs/cgroup/cpu,cpuacct"),", which is the subfolder of cgroup mount destination."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"chown :yarn -R /sys/fs/cgroup/cpu,cpuacct\nchmod g+rwx -R /sys/fs/cgroup/cpu,cpuacct\n")),Object(o.b)("p",null,"If GPUs are used\uff0cthe access to cgroup devices folder is neede as well"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"chown :yarn -R /sys/fs/cgroup/devices\nchmod g+rwx -R /sys/fs/cgroup/devices\n")),Object(o.b)("h3",{id:"issue-2-container-executor-permission-denied"},"Issue 2: container-executor permission denied"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'2018-09-21 09:36:26,102 WARN org.apache.hadoop.yarn.server.nodemanager.containermanager.linux.privileged.PrivilegedOperationExecutor: IOException executing command:\njava.io.IOException: Cannot run program "/etc/yarn/sbin/Linux-amd64-64/container-executor": error=13, Permission denied\n        at java.lang.ProcessBuilder.start(ProcessBuilder.java:1048)\n        at org.apache.hadoop.util.Shell.runCommand(Shell.java:938)\n        at org.apache.hadoop.util.Shell.run(Shell.java:901)\n        at org.apache.hadoop.util.Shell$ShellCommandExecutor.execute(Shell.java:1213)\n')),Object(o.b)("p",null,"Solution: The permission of ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/yarn/sbin/Linux-amd64-64/container-executor")," should be 6050"),Object(o.b)("h3",{id:"issue-3\uff1ahow-to-get-docker-service-log"},"Issue 3\uff1aHow to get docker service log"),Object(o.b)("p",null,"Solution: we can get docker log with the following command"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"journalctl -u docker\n")),Object(o.b)("h3",{id:"issue-4\uff1adocker-cant-remove-containers-with-errors-like-device-or-resource-busy"},"Issue 4\uff1adocker can't remove containers with errors like ",Object(o.b)("inlineCode",{parentName:"h3"},"device or resource busy")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ docker rm 0bfafa146431\nError response from daemon: Unable to remove filesystem for 0bfafa146431771f6024dcb9775ef47f170edb2f1852f71916ba44209ca6120a: remove /app/docker/containers/0bfafa146431771f6024dcb9775ef47f170edb2f152f71916ba44209ca6120a/shm: device or resource busy\n")),Object(o.b)("p",null,"Solution: to find which process leads to a ",Object(o.b)("inlineCode",{parentName:"p"},"device or resource busy"),", we can add a shell script, named ",Object(o.b)("inlineCode",{parentName:"p"},"find-busy-mnt.sh")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n\n# A simple script to get information about mount points and pids and their\n# mount namespaces.\n\nif [ $# -ne 1 ];then\necho "Usage: $0 <devicemapper-device-id>"\nexit 1\nfi\n\nID=$1\n\nMOUNTS=`find /proc/*/mounts | xargs grep $ID 2>/dev/null`\n\n[ -z "$MOUNTS" ] &&  echo "No pids found" && exit 0\n\nprintf "PID\\tNAME\\t\\tMNTNS\\n"\necho "$MOUNTS" | while read LINE; do\nPID=`echo $LINE | cut -d ":" -f1 | cut -d "/" -f3`\n# Ignore self and thread-self\nif [ "$PID" == "self" ] || [ "$PID" == "thread-self" ]; then\n  continue\nfi\nNAME=`ps -q $PID -o comm=`\nMNTNS=`readlink /proc/$PID/ns/mnt`\nprintf "%s\\t%s\\t\\t%s\\n" "$PID" "$NAME" "$MNTNS"\ndone\n')),Object(o.b)("p",null,"Kill the process by pid, which is found by the script"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ chmod +x find-busy-mnt.sh\n./find-busy-mnt.sh 0bfafa146431771f6024dcb9775ef47f170edb2f152f71916ba44209ca6120a\n# PID   NAME            MNTNS\n# 5007  ntpd            mnt:[4026533598]\n$ kill -9 5007\n")),Object(o.b)("h3",{id:"issue-5\uff1ayarn-failed-to-start-containers"},"Issue 5\uff1aYarn failed to start containers"),Object(o.b)("p",null,"if the number of GPUs required by applications is larger than the number of GPUs in the cluster, there would be some containers can't be created."))}d.isMDXComponent=!0}}]);