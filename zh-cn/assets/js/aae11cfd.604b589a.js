"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7130],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7939:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"How to Run Integration K8s Test"},l=void 0,u={unversionedId:"devDocs/IntegrationTestK8s",id:"version-0.7.0/devDocs/IntegrationTestK8s",title:"How to Run Integration K8s Test",description:"\x3c!---",source:"@site/versioned_docs/version-0.7.0/devDocs/IntegrationTestK8s.md",sourceDirName:"devDocs",slug:"/devDocs/IntegrationTestK8s",permalink:"/zh-cn/docs/devDocs/IntegrationTestK8s",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.7.0/devDocs/IntegrationTestK8s.md",tags:[],version:"0.7.0",frontMatter:{title:"How to Run Integration K8s Test"},sidebar:"docs",previous:{title:"Development Guide",permalink:"/zh-cn/docs/devDocs/Development"},next:{title:"How to Run Frontend Integration Test",permalink:"/zh-cn/docs/devDocs/IntegrationTestE2E"}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Run k8s test locally",id:"run-k8s-test-locally",level:2},{value:"Run k8s test in GitHub Actions",id:"run-k8s-test-in-github-actions",level:2}],m={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The test cases under the directory ",(0,i.kt)("inlineCode",{parentName:"p"},"test-k8s")," are integration tests to ensure the correctness of the Submarine RESTful API.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can run these tests either locally or on GitHub Actions."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Before running the tests, the minikube (KinD) cluster must be created. "),(0,i.kt)("li",{parentName:"ul"},"Then, compile and package the submarine project in ",(0,i.kt)("inlineCode",{parentName:"li"},"submarine-dist")," directory for building a docker image. "),(0,i.kt)("li",{parentName:"ul"},"In addition, the 8080 port in submarine-traefik should be forwarded.")))),(0,i.kt)("h2",{id:"run-k8s-test-locally"},"Run k8s test locally"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure you have setup the KinD cluster or minikube cluster. If you haven't, follow this ",(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},(0,i.kt)("inlineCode",{parentName:"a"},"minikube tutorial")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Build the submarine from source and upgrade the server pod through this ",(0,i.kt)("a",{parentName:"p",href:"./Development/#build-from-source"},(0,i.kt)("inlineCode",{parentName:"a"},"guide")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Forward port"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward --address 0.0.0.0 service/submarine-traefik 8080:80\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Install the latest package "submarine-server-core" into the local repository, for use as a dependency in the module ',(0,i.kt)("inlineCode",{parentName:"p"},"test-k8s")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn install -DskipTests\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Execute the test command"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn verify -DskipRat -pl :submarine-test-k8s -Phadoop-2.9 -B\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(298).Z,width:"1920",height:"1018"})),(0,i.kt)("h2",{id:"run-k8s-test-in-github-actions"},"Run k8s test in GitHub Actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each time a code is submitted, GitHub Actions is triggered automatically.")))}d.isMDXComponent=!0},298:function(e,t,n){t.Z=n.p+"assets/images/test-k8s-result-883d99774542cc9898f086937cb80190.png"}}]);