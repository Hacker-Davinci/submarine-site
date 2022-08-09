"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1544],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,c=b["".concat(s,".").concat(p)]||b[p]||m[p]||o;return n?r.createElement(c,i(i({ref:t},d),{},{components:n})):r.createElement(c,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4096:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s=void 0,u={unversionedId:"adminDocs/yarn/workbench/HowToRun",id:"version-0.6.0/adminDocs/yarn/workbench/HowToRun",title:"HowToRun",description:"\x3c!--",source:"@site/versioned_docs/version-0.6.0/adminDocs/yarn/workbench/HowToRun.md",sourceDirName:"adminDocs/yarn/workbench",slug:"/adminDocs/yarn/workbench/HowToRun",permalink:"/zh-cn/docs/0.6.0/adminDocs/yarn/workbench/HowToRun",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.6.0/adminDocs/yarn/workbench/HowToRun.md",tags:[],version:"0.6.0",frontMatter:{}},d={},m=[{value:"Two versions of Submarine Workbench",id:"two-versions-of-submarine-workbench",level:3},{value:"(WARNING: Please restart a new <strong>incognito window</strong> when you switch to different versions of Submarine Workbench)",id:"warning-please-restart-a-new-incognito-window-when-you-switch-to-different-versions-of-submarine-workbench",level:4},{value:"Launch the Submarine Workbench(Angular)",id:"launch-the-submarine-workbenchangular",level:3},{value:"Check the data in the submarine-database",id:"check-the-data-in-the-submarine-database",level:3},{value:"Run Submarine Workbench",id:"run-submarine-workbench",level:3},{value:"submarine-env.sh",id:"submarine-envsh",level:3},{value:"submarine-site.xml",id:"submarine-sitexml",level:3}],b={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-run-submarine-workbench"},"How To Run Submarine Workbench"),(0,o.kt)("p",null,"We provide two methods to launch Submarine Workbench"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Method 1:  Run Submarine Workbench on docker"),(0,o.kt)("li",{parentName:"ul"},"Method 2:  Run Submarine Workbench without docker")),(0,o.kt)("h1",{id:"run-submarine-workbench-on-docker"},"Run Submarine Workbench on docker"),(0,o.kt)("p",null,"By using the official images of Submarine, only a few docker commands are required to launch ",(0,o.kt)("strong",{parentName:"p"},"Submarine Workbench"),". The document includes information about how to launch the Submarine Workbench via the new docker images and the information about how to switch between different Submarine Workbench versions(version Vue & version Angular)."),(0,o.kt)("h3",{id:"two-versions-of-submarine-workbench"},"Two versions of Submarine Workbench"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Angular (default)"),(0,o.kt)("li",{parentName:"ol"},"Vue (This is the old version, and it will be replaced by version Angular in the future.)")),(0,o.kt)("h4",{id:"warning-please-restart-a-new-incognito-window-when-you-switch-to-different-versions-of-submarine-workbench"},"(WARNING: Please restart a new ",(0,o.kt)("strong",{parentName:"h4"},"incognito window")," when you switch to different versions of Submarine Workbench)"),(0,o.kt)("h3",{id:"launch-the-submarine-workbenchangular"},"Launch the Submarine Workbench(Angular)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It should be noted that since Submarine Workbench depends on the Submarine database, so you need to run the docker container of the Submarine database first.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it -p 3306:3306 -d --name submarine-database -e MYSQL_ROOT_PASSWORD=password apache/submarine:database-<REPLACE_VERSION>\ndocker run -it -p 8080:8080 -d --link=submarine-database:submarine-database --name submarine-server apache/submarine:server-<REPLACE_VERSION>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The login page of Submarine Workbench will be shown in ",(0,o.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:8080"),".")),(0,o.kt)("h3",{id:"check-the-data-in-the-submarine-database"},"Check the data in the submarine-database"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Step1: Enter the submarine-database container")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker exec -it submarine-database bash\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Step2: Enter MySQL database")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql -uroot -ppassword\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Step3: List the data in the table")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// list all databases\nshow databases;\n\n// choose a database\nuse ${target_database};\n\n// list all tables\nshow tables;\n\n// list the data in the table\nselect * from ${target_table};\n")),(0,o.kt)("h1",{id:"run-submarine-workbench-without-docker"},"Run Submarine Workbench without docker"),(0,o.kt)("h3",{id:"run-submarine-workbench"},"Run Submarine Workbench"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd submarine\n./bin/submarine-daemon.sh [start|stop|restart]\n")),(0,o.kt)("p",null,"To start workbench server, you need to download MySQL jdbc jar and put it in the\npath of workbench/lib for the first time. Or you can add parameter, getMysqlJar,\nto get MySQL jar automatically."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd submarine\n./bin/submarine-daemon.sh start getMysqlJar\n")),(0,o.kt)("h3",{id:"submarine-envsh"},"submarine-env.sh"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"submarine-env.sh")," is automatically executed each time the ",(0,o.kt)("inlineCode",{parentName:"p"},"submarine-daemon.sh")," script is executed, so we can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"submarine-daemon.sh")," script and the environment variables in the ",(0,o.kt)("inlineCode",{parentName:"p"},"SubmarineServer")," process via ",(0,o.kt)("inlineCode",{parentName:"p"},"submarine-env.sh"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Variable"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,o.kt)("td",{parentName:"tr",align:null},"Set your java home path, default is ",(0,o.kt)("inlineCode",{parentName:"td"},"java"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SUBMARINE_JAVA_OPTS"),(0,o.kt)("td",{parentName:"tr",align:null},"Set the JAVA OPTS parameter when the Submarine Workbench process starts. If you need to debug the Submarine Workbench process, you can set it to ",(0,o.kt)("inlineCode",{parentName:"td"},"-agentlib:jdwp=transport=dt_socket, server=y,suspend=n,address=5005"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SUBMARINE_MEM"),(0,o.kt)("td",{parentName:"tr",align:null},"Set the java memory parameter when the Submarine Workbench process starts.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MYSQL_JAR_URL"),(0,o.kt)("td",{parentName:"tr",align:null},"The customized URL to download MySQL jdbc jar.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MYSQL_VERSION"),(0,o.kt)("td",{parentName:"tr",align:null},"The version of MySQL jdbc jar to downloaded. The default value is 5.1.39. It's used to generate the default value of MYSQL_JDBC_URL")))),(0,o.kt)("h3",{id:"submarine-sitexml"},"submarine-site.xml"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"submarine-site.xml")," is the configuration file for the entire ",(0,o.kt)("inlineCode",{parentName:"p"},"Submarine")," system to run."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Variable"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submarine.server.addr"),(0,o.kt)("td",{parentName:"tr",align:null},"Submarine server address, default is ",(0,o.kt)("inlineCode",{parentName:"td"},"0.0.0.0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submarine.server.port"),(0,o.kt)("td",{parentName:"tr",align:null},"Submarine server port, default ",(0,o.kt)("inlineCode",{parentName:"td"},"8080"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submarine.ssl"),(0,o.kt)("td",{parentName:"tr",align:null},"Should SSL be used by the Submarine servers?, default ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submarine.server.ssl.port"),(0,o.kt)("td",{parentName:"tr",align:null},"Server ssl port. (used when ssl property is set to true), default ",(0,o.kt)("inlineCode",{parentName:"td"},"8483"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submarine.ssl.client.auth"),(0,o.kt)("td",{parentName:"tr",align:null},"Should client authentication be used for SSL connections?")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submarine.ssl.keystore.path"),(0,o.kt)("td",{parentName:"tr",align:null},"Path to keystore relative to Submarine configuration directory")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submarine.ssl.keystore.type"),(0,o.kt)("td",{parentName:"tr",align:null},"The format of the given keystore (e.g. JKS or PKCS12)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submarine.ssl.keystore.password"),(0,o.kt)("td",{parentName:"tr",align:null},"Keystore password. Can be obfuscated by the Jetty Password tool")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submarine.ssl.key.manager.password"),(0,o.kt)("td",{parentName:"tr",align:null},"Key Manager password. Defaults to keystore password. Can be obfuscated.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submarine.ssl.truststore.path"),(0,o.kt)("td",{parentName:"tr",align:null},"Path to truststore relative to Submarine configuration directory. Defaults to the keystore path")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submarine.ssl.truststore.type"),(0,o.kt)("td",{parentName:"tr",align:null},"The format of the given truststore (e.g. JKS or PKCS12). Defaults to the same type as the keystore type")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submarine.ssl.truststore.password"),(0,o.kt)("td",{parentName:"tr",align:null},"Truststore password. Can be obfuscated by the Jetty Password tool. Defaults to the keystore password")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"workbench.web.war"),(0,o.kt)("td",{parentName:"tr",align:null},"Submarine Workbench web war file path.")))))}p.isMDXComponent=!0}}]);