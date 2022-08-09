"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5210],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,b=m["".concat(u,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(b,c(c({ref:t},l),{},{components:r})):n.createElement(b,c({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},148:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={},u=void 0,p={type:"mdx",permalink:"/zh-cn/releases/submarine-release-0.4.0",source:"@site/i18n/zh-cn/docusaurus-plugin-content-pages/releases/submarine-release-0.4.0.md",description:"\x3c!--",frontMatter:{}},l=[],s={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"apache-submarine-release-040"},"Apache Submarine Release 0.4.0"),(0,o.kt)("p",null,"Apache Submarine \u793e\u533a\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03 ",(0,o.kt)("inlineCode",{parentName:"p"},"0.4.0")," \u7248\u672c\u5df2\u7ecf\u53d1\u5e03\u3002"),(0,o.kt)("p",null,"\u81ea\u4e0a\u6b21\u53d1\u5e03\u4ee5\u6765\uff0c\u793e\u533a\u6295\u5165\u4e86\u5927\u91cf\u7cbe\u529b\u6765\u6539\u8fdb Apache Submarine\u3002\n\u603b\u8ba1\u6709 175 \u4e2a\u7528\u4e8e\u6539\u8fdb\u548c\u9519\u8bef\u4fee\u590d\u7684\u8865\u4e01\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u65b0\u7279\u6027\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Submarine Experiments: \u91cd\u6784\u4f5c\u4e1a\u4ee5\u8fdb\u884c experiment \u5e76\u91cd\u65b0\u5b9a\u4e49 experiment spec"),(0,o.kt)("li",{parentName:"ul"},"SSubmarine Helm Charts: \u63d0\u4f9b\u4e00\u4e2a\u547d\u4ee4\u884c\u65b9\u5f0f\u5c06 submarine \u5b89\u88c5\u5230 Kubernetes \u96c6\u7fa4\u4e2d"),(0,o.kt)("li",{parentName:"ul"},"PySubmarine: Submarine Python SDK")),(0,o.kt)("p",null,"\u6211\u4eec\u63a8\u8350 ",(0,o.kt)("a",{parentName:"p",href:"../docs/download"},"\u4e0b\u8f7d")," \u6700\u65b0\u7248\u672c\u8fdb\u884c\u4f53\u9a8c\u548c\u4f7f\u7528\uff0c\u5e76\u975e\u5e38\u6b22\u8fce\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"../docs/community/"},"\u90ae\u4ef6\u5217\u8868")," \u63d0\u4f9b\u53cd\u9988\u3002"),(0,o.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322824&version=12346621"},"\u95ee\u9898\u8ddf\u8e2a\u5668")," \u4ee5\u83b7\u53d6\u5df2\u89e3\u51b3\u95ee\u9898\u7684\u5b8c\u6574\u5217\u8868\u3002"))}m.isMDXComponent=!0}}]);