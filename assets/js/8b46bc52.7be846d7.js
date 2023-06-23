"use strict";(self.webpackChunkOPS535=self.webpackChunkOPS535||[]).push([[50],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1655:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var n=r(3117),a=(r(7294),r(3905));const o={id:"network-storage-and-access",title:"Network Storage and Access",sidebar_position:7,description:"Network Storage and Access"},i="Network Storage and Access",s={unversionedId:"C-ExtraResources/network-storage-and-access",id:"C-ExtraResources/network-storage-and-access",title:"Network Storage and Access",description:"Network Storage and Access",source:"@site/docs/C-ExtraResources/network-storage-and-access.md",sourceDirName:"C-ExtraResources",slug:"/C-ExtraResources/network-storage-and-access",permalink:"/OPS535/C-ExtraResources/network-storage-and-access",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OERTemplate/tree/main/docs/C-ExtraResources/network-storage-and-access.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"network-storage-and-access",title:"Network Storage and Access",sidebar_position:7,description:"Network Storage and Access"},sidebar:"courseNotesSidebar",previous:{title:"Local and Network Security",permalink:"/OPS535/C-ExtraResources/local-and-network-security"},next:{title:"NFS - Network File System",permalink:"/OPS535/C-ExtraResources/network-file-system"}},c={},l=[{value:"NFS - Network File System",id:"nfs---network-file-system",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"network-storage-and-access"},"Network Storage and Access"),(0,a.kt)("h2",{id:"nfs---network-file-system"},"NFS - Network File System"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Text book: Chapter 23"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Server side component: supports different versions of NFS via RPC framework"),(0,a.kt)("li",{parentName:"ul"},'Client side component: NFS specific options for the mount command (p.615) or try "man 5 nfs"'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Version of NFS"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"NFSv2"),(0,a.kt)("li",{parentName:"ul"},"NFSv3"),(0,a.kt)("li",{parentName:"ul"},"NFSv4"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"NFS Configuration file"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Server side: /etc/exports"),(0,a.kt)("li",{parentName:"ul"},"Client side: /etc/fstab"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"NFS Configuration command"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Server side: exportfs, showmount, rpcinfo"),(0,a.kt)("li",{parentName:"ul"},"Client side: rpcinfo, mount"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"NFS access/security issue"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Dynamic ports"),(0,a.kt)("li",{parentName:"ul"},"access control - machine based"),(0,a.kt)("li",{parentName:"ul"},"Firewall")))))}p.isMDXComponent=!0}}]);