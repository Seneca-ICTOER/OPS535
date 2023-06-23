"use strict";(self.webpackChunkOPS535=self.webpackChunkOPS535||[]).push([[894],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),b=r,d=m["".concat(s,".").concat(b)]||m[b]||p[b]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1291:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const i={id:"lab4-vl",title:"Lab 4 Alternate",sidebar_position:9,description:"Lab 4 Alternate"},o="Lab 4 - Using Virtual Lab",l={unversionedId:"A-Labs/lab4-vl",id:"A-Labs/lab4-vl",title:"Lab 4 Alternate",description:"Lab 4 Alternate",source:"@site/docs/A-Labs/lab4-vl.md",sourceDirName:"A-Labs",slug:"/A-Labs/lab4-vl",permalink:"/OPS535/A-Labs/lab4-vl",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OERTemplate/tree/main/docs/A-Labs/lab4-vl.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"lab4-vl",title:"Lab 4 Alternate",sidebar_position:9,description:"Lab 4 Alternate"},sidebar:"courseNotesSidebar",previous:{title:"Lab 4",permalink:"/OPS535/A-Labs/lab4-home"},next:{title:"Lab 5",permalink:"/OPS535/A-Labs/lab5"}},s={},u=[{value:"Objectives",id:"objectives",level:2},{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Investigation 1: Algorithm for setup and configure an Primary DNS server with Dynamic Zone",id:"investigation-1-algorithm-for-setup-and-configure-an-primary-dns-server-with-dynamic-zone",level:2},{value:"Investigation 2: Scripts for remote deployment of Primary DNS server with Dynamic Zone",id:"investigation-2-scripts-for-remote-deployment-of-primary-dns-server-with-dynamic-zone",level:2},{value:"Task 1",id:"task-1",level:3},{value:"Task 2",id:"task-2",level:3},{value:"Task 3",id:"task-3",level:3},{value:"Completing the Lab",id:"completing-the-lab",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lab-4---using-virtual-lab"},"Lab 4 - Using Virtual Lab"),(0,r.kt)("h2",{id:"objectives"},"Objectives"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Design the algorithm for setup and configure a Primary DNS server with dynamic zone based on ",(0,r.kt)("a",{parentName:"li",href:"/OPS535/A-Labs/lab4-home"},"Lab 4 - Dynamic DNS lab")),(0,r.kt)("li",{parentName:"ul"},"Create remote administration script(s) using bash/ansible based on your algorithm"),(0,r.kt)("li",{parentName:"ul"},"Deploy the remote administration scripts using bash/ansible on your Seneca VM2 in the OPS535 Virtual Lab")),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Has access to Seneca VPN, and matrix.senecacollege.ca"),(0,r.kt)("li",{parentName:"ul"},"Complete the collection of baseline information on your assigned VMs (VM1, VM2, VM3, and VM4)"),(0,r.kt)("li",{parentName:"ul"},"Complete the ",(0,r.kt)("a",{parentName:"li",href:"/OPS535/A-Labs/lab4-home"},"Lab 4 - Dynamic DNS lab")," on your home VMs"),(0,r.kt)("li",{parentName:"ul"},"Setup and configure private network for your assigned VMs in the OPS535 Virtual Lab"),(0,r.kt)("li",{parentName:"ul"},"Configure VM1 as your control workstation for performing remote administration tasks on VM","[","2-4","]")),(0,r.kt)("h2",{id:"investigation-1-algorithm-for-setup-and-configure-an-primary-dns-server-with-dynamic-zone"},"Investigation 1: Algorithm for setup and configure an Primary DNS server with Dynamic Zone"),(0,r.kt)("p",null,"Based on the steps you performed on ",(0,r.kt)("a",{parentName:"p",href:"/OPS535/A-Labs/lab4-home"},"Lab 4 - Dynamic DNS lab"),", design and create an appropriate algorithm to setup and configure a Primary DNS server with Dynamic zone on your Seneca VM2 remotely from your control VM (Seneca VM1). You can follow the format used in Investigate 3, Task 1 in Lab 2 - NFS Lab on VL (ADD LINK)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Name your algorithm as "lab4-ddns-algorithm.txt"'),(0,r.kt)("li",{parentName:"ul"},"Save your algorithm file to ~student/ops535/lab4/lab4-ddns-algorithm.txt")),(0,r.kt)("h2",{id:"investigation-2-scripts-for-remote-deployment-of-primary-dns-server-with-dynamic-zone"},"Investigation 2: Scripts for remote deployment of Primary DNS server with Dynamic Zone"),(0,r.kt)("h3",{id:"task-1"},"Task 1"),(0,r.kt)("p",null,'Based on your algorithm created for investigation 1, write a bash script named "lab4-ddns-setup.bash" to implement all the steps on VM2 (pri-dns)'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"save the script to ~student/ops535/lab4/scripts/lab4-ddns-setup.bash")),(0,r.kt)("h3",{id:"task-2"},"Task 2"),(0,r.kt)("p",null,'Create an ansible playbook named "config-ddns.yml" to perform the same tasks as mentioned in task 1.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"save the ansible playbook to ~student/ops535/lab4/playbook/config-ddns.yml")),(0,r.kt)("h3",{id:"task-3"},"Task 3"),(0,r.kt)("p",null,"Run the playbook create in Task 2 above, and capture the output to a file named lab4_inv2_task3.txt in the directory ~student/ops535/lab3/log/"),(0,r.kt)("h2",{id:"completing-the-lab"},"Completing the Lab"),(0,r.kt)("p",null,"Follow the instructions on blackboard to submit the lab by the due date."))}p.isMDXComponent=!0}}]);