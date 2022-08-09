"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3925],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9719:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"How to Verify"},c=void 0,l={unversionedId:"devDocs/HowToVerify",id:"version-0.7.0/devDocs/HowToVerify",title:"How to Verify",description:"\x3c!--",source:"@site/versioned_docs/version-0.7.0/devDocs/HowToVerify.md",sourceDirName:"devDocs",slug:"/devDocs/HowToVerify",permalink:"/zh-cn/docs/devDocs/HowToVerify",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.7.0/devDocs/HowToVerify.md",tags:[],version:"0.7.0",frontMatter:{title:"How to Verify"},sidebar:"docs",previous:{title:"How to Release",permalink:"/zh-cn/docs/devDocs/HowToRelease"},next:{title:"Apache Submarine Community",permalink:"/zh-cn/docs/community/"}},u={},h=[{value:"Verification of the release candidate",id:"verification-of-the-release-candidate",level:3},{value:"1. Download the candidate version to be released to the local environment",id:"1-download-the-candidate-version-to-be-released-to-the-local-environment",level:2},{value:"2. Verify whether the uploaded version is compliant",id:"2-verify-whether-the-uploaded-version-is-compliant",level:2},{value:"2.1 Check if the release package is complete",id:"21-check-if-the-release-package-is-complete",level:3},{value:"2.2 Check gpg signature",id:"22-check-gpg-signature",level:3},{value:"2.3 Check sha512 hash",id:"23-check-sha512-hash",level:3},{value:"2.4. Check the file content of the source package.",id:"24-check-the-file-content-of-the-source-package",level:3},{value:"2.5 Check the binary package (if the binary package is uploaded)",id:"25-check-the-binary-package-if-the-binary-package-is-uploaded",level:3}],p={toc:h};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"verification-of-the-release-candidate"},"Verification of the release candidate"),(0,i.kt)("h2",{id:"1-download-the-candidate-version-to-be-released-to-the-local-environment"},"1. Download the candidate version to be released to the local environment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"svn co https://dist.apache.org/repos/dist/dev/submarine/${release_version}-${rc_version}/\n")),(0,i.kt)("h2",{id:"2-verify-whether-the-uploaded-version-is-compliant"},"2. Verify whether the uploaded version is compliant"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Begin the verification process, which includes but is not limited to the following content and forms.")),(0,i.kt)("h3",{id:"21-check-if-the-release-package-is-complete"},"2.1 Check if the release package is complete"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The package uploaded to dist must include the source code package, and the binary package is optional.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Whether it includes the source code package."),(0,i.kt)("li",{parentName:"ol"},"Whether it includes the signature of the source code package."),(0,i.kt)("li",{parentName:"ol"},"Whether it includes the sha512 of the source code package."),(0,i.kt)("li",{parentName:"ol"},"If the binary package is uploaded, also check the contents listed in (2)-(4).")),(0,i.kt)("h3",{id:"22-check-gpg-signature"},"2.2 Check gpg signature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Import the public key")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://dist.apache.org/repos/dist/dev/submarine/KEYS > KEYS # Download KEYS\ngpg --import KEYS # Import KEYS to local\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Trust the public key",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Trust the KEY used in this version.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  gpg --edit-key xxxxxxxxxx # The KEY used in this version\n  gpg (GnuPG) 2.2.21; Copyright (C) 2020 Free Software Foundation, Inc.\n  This is free software: you are free to change and redistribute it.\n  There is NO WARRANTY, to the extent permitted by law.\n\n  Secret key is available.\n\n  sec  rsa4096/5EF3A66D57EC647A\n       created: 2020-05-19  expires: never       usage: SC\n       trust: ultimate      validity: ultimate\n  ssb  rsa4096/17628566FEED6AF7\n       created: 2020-05-19  expires: never       usage: E\n  [ultimate] (1). XXX YYYZZZ <yourAccount@apache.org>\n\n  gpg> trust\n  sec  rsa4096/5EF3A66D57EC647A\n       created: 2020-05-19  expires: never       usage: SC\n       trust: ultimate      validity: ultimate\n  ssb  rsa4096/17628566FEED6AF7\n       created: 2020-05-19  expires: never       usage: E\n  [ultimate] (1). XXX YYYZZZ <yourAccount@apache.org>\n\n  Please decide how far you trust this user to correctly verify other users' keys\n  (by looking at passports, checking fingerprints from different sources, etc.)\n\n    1 = I don't know or won't say\n    2 = I do NOT trust\n    3 = I trust marginally\n    4 = I trust fully\n    5 = I trust ultimately\n    m = back to the main menu\n\n  Your decision? 5 #choose 5\n  Do you really want to set this key to ultimate trust? (y/N) y # choose y\n\n  sec  rsa4096/5EF3A66D57EC647A\n       created: 2020-05-19  expires: never       usage: SC\n       trust: ultimate      validity: ultimate\n  ssb  rsa4096/17628566FEED6AF7\n       created: 2020-05-19  expires: never       usage: E\n  [ultimate] (1). XXX YYYZZZ <yourAccount@apache.org>\n\n  gpg>\n\n  sec  rsa4096/5EF3A66D57EC647A\n       created: 2020-05-19  expires: never       usage: SC\n       trust: ultimate      validity: ultimate\n  ssb  rsa4096/17628566FEED6AF7\n       created: 2020-05-19  expires: never       usage: E\n  [ultimate] (1). XXX YYYZZZ <yourAccount@apache.org>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the following command to check the signature.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done\n#Or\ngpg --verify apache-submarine-${release_version}-src.tar.gz.asc apache-submarine-${release_version}-src.tar.gz\n# If you upload a binary package, you also need to check whether the signature of the binary package is correct.\ngpg --verify apache-submarine-server-${release_version}-bin.tar.gz.asc apache-submarine-server-${release_version}-bin.tar.gz\ngpg --verify apache-submarine-client-${release_version}-bin.tar.gz.asc apache-submarine-client-${release_version}-bin.tar.gz\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check the result",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"If something like the following appears, it means that the signature is correct. The keyword\uff1a",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Good signature")))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'apache-submarine-${release_version}-src.tar.gz\ngpg: Signature made Sat May 30 11:45:01 2020 CST\ngpg:                using RSA key 9B12C2228BDFF4F4CFE849445EF3A66D57EC647A\ngpg: Good signature from "XXX YYYZZZ <yourAccount@apache.org>" [ultimate]gular2\n')),(0,i.kt)("h3",{id:"23-check-sha512-hash"},"2.3 Check sha512 hash"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"After calculating the sha512 hash locally, verify whether it is consistent with the one on dist.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i; done\n#Or\ngpg --print-md SHA512 apache-submarine-${release_version}-src.tar.gz\n# If you upload a binary package, you also need to check the sha512 hash of the binary package.\ngpg --print-md SHA512 apache-submarine-server-${release_version}-bin.tar.gz\ngpg --print-md SHA512 apache-submarine-client-${release_version}-bin.tar.gz\n# \u6216\u8005\nfor i in *.tar.gz.sha512; do echo $i; sha512sum -c $i; done\n")),(0,i.kt)("h3",{id:"24-check-the-file-content-of-the-source-package"},"2.4. Check the file content of the source package."),(0,i.kt)("p",null,"Unzip ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-submarine-${release_version}-src.tar.gz")," and check as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Whether the DISCLAIMER file exists and whether the content is correct."),(0,i.kt)("li",{parentName:"ul"},"Whether the LICENSE and NOTICE file exists and whether the content is correct."),(0,i.kt)("li",{parentName:"ul"},"Whether all files have ASF License header."),(0,i.kt)("li",{parentName:"ul"},"Whether the source code can be compiled normally."),(0,i.kt)("li",{parentName:"ul"},"Whether the single test is passed."),(0,i.kt)("li",{parentName:"ul"},"....")),(0,i.kt)("h3",{id:"25-check-the-binary-package-if-the-binary-package-is-uploaded"},"2.5 Check the binary package (if the binary package is uploaded)"),(0,i.kt)("p",null,"Unzip ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-submarine-client-${release_version}-src.tar.gz")," and ",(0,i.kt)("inlineCode",{parentName:"p"}," apache-submarine-server-${release_version}-src.tar.gz"),", then check as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Whether the DISCLAIMER file exists and whether the content is correct."),(0,i.kt)("li",{parentName:"ul"},"Whether the LICENSE and the NOTICE file exists and whether the content is correct."),(0,i.kt)("li",{parentName:"ul"},"Whether the deployment is successful."),(0,i.kt)("li",{parentName:"ul"},"Deploy a test environment to verify whether production and consumption can run normally."),(0,i.kt)("li",{parentName:"ul"},"Verify what you think might go wrong.")))}d.isMDXComponent=!0}}]);