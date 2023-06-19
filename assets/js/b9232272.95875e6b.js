"use strict";(self.webpackChunkOPS535=self.webpackChunkOPS535||[]).push([[620],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=o,p=m["".concat(l,".").concat(h)]||m[h]||c[h]||a;return n?r.createElement(p,i(i({ref:t},d),{},{components:n})):r.createElement(p,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8057:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const a={id:"assignment1",title:"Assignment 1",sidebar_position:1,description:"Assignment 1"},i="Assignment 1",s={unversionedId:"B-Assignments/assignment1",id:"B-Assignments/assignment1",title:"Assignment 1",description:"Assignment 1",source:"@site/docs/B-Assignments/assignment1.md",sourceDirName:"B-Assignments",slug:"/B-Assignments/assignment1",permalink:"/OPS535/B-Assignments/assignment1",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OERTemplate/tree/main/docs/B-Assignments/assignment1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"assignment1",title:"Assignment 1",sidebar_position:1,description:"Assignment 1"},sidebar:"courseNotesSidebar",previous:{title:"Lab 8",permalink:"/OPS535/A-Labs/lab8"},next:{title:"Assignment 2",permalink:"/OPS535/B-Assignments/assignment2"}},l={},u=[{value:"Due Date",id:"due-date",level:2},{value:"Required VMs",id:"required-vms",level:2},{value:"Hostname and Private IP addresses for the ens224 NIC",id:"hostname-and-private-ip-addresses-for-the-ens224-nic",level:2},{value:"Required Services and roles on each VM",id:"required-services-and-roles-on-each-vm",level:2},{value:"DNS servers",id:"dns-servers",level:3},{value:"NFS Server - on VM co-nfs",id:"nfs-server---on-vm-co-nfs",level:3},{value:"LDAP Server - on VM rns-ldap",id:"ldap-server---on-vm-rns-ldap",level:3},{value:"Network, firewall, and SELinux",id:"network-firewall-and-selinux",level:3},{value:"Method of implementation",id:"method-of-implementation",level:3},{value:"Changes Log",id:"changes-log",level:2},{value:"Grading",id:"grading",level:2},{value:"Questions",id:"questions",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"assignment-1"},"Assignment 1"),(0,o.kt)("h2",{id:"due-date"},"Due Date"),(0,o.kt)("p",null,"Sunday, Feb 27, 2022"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"15% of your final grade.")),(0,o.kt)("h2",{id:"required-vms"},"Required VMs"),(0,o.kt)("p",null,"The four VMs assigned to you in the OPS535 Virtual Lab. Please ask your professor for information on how to access those VMs. The following are the general description for those four VMs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VM1 - has three virtual network interfaces connected to three different virtual networks, they are",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ens192, with IP address assigned by the lab DHCP server (172.20.v.1) for connecting to the lab's public network and the Internet. DO NOT change the network configuration on this network interface."),(0,o.kt)("li",{parentName:"ul"},"ens224, for connecting to the other three VMs in a private network. You will assign a private address 192.168.v.1 for this network interface."),(0,o.kt)("li",{parentName:"ul"},"ens256, do not use for this assignment."))),(0,o.kt)("li",{parentName:"ul"},"VM2, VM3, and VM4 - each has two virtual network interfaces connected to two different virtual networks, they are",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ens192, with IP address assigned by the lab DHCP server (172.20.v.2, 172.20.v.3, 172.20.v.4) 172.for connecting to the lab's public network and the Internet."),(0,o.kt)("li",{parentName:"ul"},"ens224, connect to the other three VMs. You will assign 192.168.v.2-4 to VM2, VM3, and VM4.")))),(0,o.kt)("h2",{id:"hostname-and-private-ip-addresses-for-the-ens224-nic"},"Hostname and Private IP addresses for the ens224 NIC"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VM1 - 192.168.v.1, router.<yourdomain",">",".ops"),(0,o.kt)("li",{parentName:"ul"},"VM2 - 192.168.v.2, pri-dns.<yourdomain",">",".ops"),(0,o.kt)("li",{parentName:"ul"},"VM3 - 192.168.v.3, co-nfs.<yourdomain",">",".ops"),(0,o.kt)("li",{parentName:"ul"},"VM4 - 192.168.v.4, rns-ldap.<yourdomain",">",".ops")),(0,o.kt)("p",null,'Please note that the value of "v" given about may not have the same value as your assigned network number on Blackboard. Please replace "v" by the value of the third octet of the IP address assigned to your ens192 network interface by the lab\'s DHCP server.'),(0,o.kt)("h2",{id:"required-services-and-roles-on-each-vm"},"Required Services and roles on each VM"),(0,o.kt)("h3",{id:"dns-servers"},"DNS servers"),(0,o.kt)("p",null,"You need three DNS servers for this assignment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Primary DNS server: running on VM2, pri-dns.<yourdomain",">",".ops, which is authoritative for your domain. It will be non-recursive, and must allow anyone to request answers to DNS queries of your domain."),(0,o.kt)("li",{parentName:"ul"},"Caching-only DNS server: running on VM3, co-nfs.<yourdomain",">",".ops, which allows DNS queries only from network devices in your own private network. It will perform recursive DNS queries to the appropriate DNS servers or on its cache for answers."),(0,o.kt)("li",{parentName:"ul"},"Root Name server: running on VM4, rns-ldap.<yourdomain",">",".ops, which is authoritative for the root zone only. It will answer queries from anyone to request DNS queries for the entire DNS namespace. You need to collaborate other root name server players in the virtual lab environment. ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.cdot.senecacollege.ca/wiki/Domainreg"},"You should register and/or check your network and domain information here"))),(0,o.kt)("h3",{id:"nfs-server---on-vm-co-nfs"},"NFS Server - on VM co-nfs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This VM will centrally host all of your ",(0,o.kt)("strong",{parentName:"li"},"new network users\u2019")," home directories, allowing remote access through NFS version 4."),(0,o.kt)("li",{parentName:"ul"},"Use the appropriate export option(s) (pay particular attention to root_squash and no_root_squash) when exporting network users' home directories."),(0,o.kt)("li",{parentName:"ul"},"Superuser on the other VMs should not have root privilege on the exported directory, with the exception of the VM that is running the LDAP server."),(0,o.kt)("li",{parentName:"ul"},"VMs outside your private network must not be able to contact this service. Every VM in your network (including those that have not yet been created) must have access to this service."),(0,o.kt)("li",{parentName:"ul"},"Network users should not have read or write access to other network users' home directories.")),(0,o.kt)("h3",{id:"ldap-server---on-vm-rns-ldap"},"LDAP Server - on VM rns-ldap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"LDAP Base Name \u2013 <yourdomain",">",".ops, where <yourdomain",">"," is your assigned domain."),(0,o.kt)("li",{parentName:"ul"},"This VM will act as an LDAPs server and provide user and group information to your other VMs."),(0,o.kt)("li",{parentName:"ul"},"Other students VMs in the virtual lab must not be able to contact this service.")),(0,o.kt)("h3",{id:"network-firewall-and-selinux"},"Network, firewall, and SELinux"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All your VMs must be accessible to each other via the private network."),(0,o.kt)("li",{parentName:"ul"},"Do not allow DNS queries from any VMs in your network to any DNS servers in the lab except your caching-only DNS server."),(0,o.kt)("li",{parentName:"ul"},"SELinux must be turned on and run in enforcing mode on all of your VMs. You may need to configure the SELinux booleans accordingly."),(0,o.kt)("li",{parentName:"ul"},"Your VM1 must use iptables.service and VM2 to VM4 must use firewalld.service as their firewall. For firewalld.service, the ens192 interface should be set up in the 'public' zone and the ens224 interface should be set up in the \u2018work\u2019 zone. In addition to ssh traffic, your firewalls should only allow the traffic necessary to fulfil the roles described above.")),(0,o.kt)("h3",{id:"method-of-implementation"},"Method of implementation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do not configure the required services manually with CLI, all the configuration must be done by using any one of the following automation framework:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"customized bash script with ssh, or"),(0,o.kt)("li",{parentName:"ul"},"fabric tasks, or"),(0,o.kt)("li",{parentName:"ul"},"ansible playbook.")))),(0,o.kt)("h2",{id:"changes-log"},"Changes Log"),(0,o.kt)("p",null,"Due to the dynamic and volatile nature of the IT industrial, this assignment specification may be changed in a daily basis to reflect the changing environment. All changes and modifications to this assignment requirement will be posted here. This requirement document will be frozen at least three days before the due date."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Released on June 4, 2021.")),(0,o.kt)("h2",{id:"grading"},"Grading"),(0,o.kt)("p",null,"Shortly before the due date I will post a rubric on blackboard. Use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"script provided on Blackboard to gather information from your VMs. Upload the required files to blackboard with your automation scripts/files."),(0,o.kt)("li",{parentName:"ul"},"run the test script from any machines to scan and test all the required services you should have provided."),(0,o.kt)("li",{parentName:"ul"},"perform a disaster recovery test - one of your VMs will be reset to its baseline condition/configuration and you have 30 minutes to apply your automation script(s) to bring it back to the level this assignment required.")),(0,o.kt)("h2",{id:"questions"},"Questions"),(0,o.kt)("p",null,"If you have any questions about this assignment, please talk to your professor before the due date."))}c.isMDXComponent=!0}}]);