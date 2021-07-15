(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(144)),o={title:"How to Run Frontend Integration Test"},c={unversionedId:"devDocs/IntegrationTestE2E",id:"devDocs/IntegrationTestE2E",isDocsHomePage:!1,title:"How to Run Frontend Integration Test",description:"\x3c!---",source:"@site/docs/devDocs/IntegrationTestE2E.md",slug:"/devDocs/IntegrationTestE2E",permalink:"/docs/devDocs/IntegrationTestE2E",editUrl:"https://github.com/apache/submarine/edit/master/website/docs/devDocs/IntegrationTestE2E.md",version:"current",sidebar:"docs",previous:{title:"How to Run Integration K8s Test",permalink:"/docs/devDocs/IntegrationTestK8s"},next:{title:"Apache Submarine Community",permalink:"/docs/community/README"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Run E2E test locally",id:"run-e2e-test-locally",children:[]},{value:"Run E2E test in GitHub Actions",id:"run-e2e-test-in-github-actions",children:[]},{value:"Add a new frontend E2E test case",id:"add-a-new-frontend-e2e-test-case",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The test cases under the directory ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/submarine/tree/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/integration"},"test-e2e")," are integration tests to ensure the correctness of the Submarine Workbench.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"These test cases can be run either locally or on GitHub Actions."))),Object(i.b)("h2",{id:"run-e2e-test-locally"},"Run E2E test locally"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Ensure you have setup the submarine locally. If not, you can refer to ",Object(i.b)("inlineCode",{parentName:"p"},"Submarine Local Deployment"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Forward port"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward --address 0.0.0.0 service/submarine-traefik 32080:80\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Modify run_frontend_e2e.sh"),Object(i.b)("p",{parentName:"li"}," You need to modify the port and the URL in this script to where you run the workbench on."),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"Example:\nIf your Submarine workbench is running on 127.0.0.1:4200, you should modify the ",Object(i.b)("strong",{parentName:"p"},"WORKBENCH_PORT")," to 4200.")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},'# at submarine-test/test_e2e/run_frontend_e2e.sh\n...\n# ======= Modifiable Variables ======= #\n # Note: URL must start with "http" \n # (Ref: https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriver.html#get(java.lang.String))\n WORKBENCH_PORT=8080 #<= modify this\n URL="http://127.0.0.1" #<=modify this\n # ==================================== #\n ...\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run run_frontend_e2e.sh (Run a specific test case)"),Object(i.b)("p",{parentName:"li"},"This script will check whether the port can be accessed or not, and run the test case."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# at submarine-test/test_e2e\n./run_fronted_e2e.sh ${TESTCASE}\n# TESTCASE is the IT you want to run, ex: loginIT, experimentIT...\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run all test cases"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Following commands will compile all files and run all files ending with "IT" in the ',Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/submarine/tree/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/integration"},"directory"),"."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# Make sure the Submarine workbench is running on 127.0.0.1:8080\ncd submarine/submarine-test/test-e2e\n# Method 1: \nmvn verify\n\n# Method 2:\nmvn clean install -U\n")))),Object(i.b)("h2",{id:"run-e2e-test-in-github-actions"},"Run E2E test in GitHub Actions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each time a commit is pushed, GitHub Actions will be triggered automatically.")),Object(i.b)("h2",{id:"add-a-new-frontend-e2e-test-case"},"Add a new frontend E2E test case"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"WARNING"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You ",Object(i.b)("strong",{parentName:"li"},"MUST")," read the ",Object(i.b)("a",{parentName:"li",href:"https://www.selenium.dev/documentation/en/webdriver/waits/"},"document")," carefully, and understand the difference between ",Object(i.b)("strong",{parentName:"li"},"explicit wait"),", ",Object(i.b)("strong",{parentName:"li"},"implicit wait"),", and ",Object(i.b)("strong",{parentName:"li"},"fluent wait"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Do not mix implicit and explicit waits.")," Doing so can cause unpredictable wait times."))),Object(i.b)("li",{parentName:"ul"},"We define many useful functions in ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-test/test-e2e/src/test/java/org/apache/submarine/AbstractSubmarineIT.java"},"AbstractSubmarineIT.java"),".")))}b.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);