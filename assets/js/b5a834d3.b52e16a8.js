"use strict";(self.webpackChunkOPS535=self.webpackChunkOPS535||[]).push([[340],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,p=c["".concat(s,".").concat(m)]||c[m]||h[m]||o;return a?r.createElement(p,i(i({ref:t},d),{},{components:a})):r.createElement(p,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8246:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=a(3117),n=(a(7294),a(3905));const o={id:"lab1",title:"Lab 1",sidebar_position:2,description:"Lab 1"},i="Lab 1",l={unversionedId:"A-Labs/lab1",id:"A-Labs/lab1",title:"Lab 1",description:"Lab 1",source:"@site/docs/A-Labs/lab1.md",sourceDirName:"A-Labs",slug:"/A-Labs/lab1",permalink:"/OPS535/A-Labs/lab1",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OERTemplate/tree/main/docs/A-Labs/lab1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"lab1",title:"Lab 1",sidebar_position:2,description:"Lab 1"},sidebar:"courseNotesSidebar",previous:{title:"Pre Lab 0",permalink:"/OPS535/A-Labs/prelab0"},next:{title:"Lab 1 Alternate",permalink:"/OPS535/A-Labs/lab1-alt"}},s={},u=[{value:"Resources",id:"resources",level:2},{value:"Purpose",id:"purpose",level:2},{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Investigation 1: Virtual Networks",id:"investigation-1-virtual-networks",level:2},{value:"Investigation 2: Advanced uses of FirewallD",id:"investigation-2-advanced-uses-of-firewalld",level:2},{value:"Completing the Lab",id:"completing-the-lab",level:2},{value:"Exploration Questions",id:"exploration-questions",level:2}],d={toc:u};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lab-1"},"Lab 1"),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.cdot.senecacollege.ca/wiki/File:OPS535-network-diagram-for-routing-config.png"},"Link to Network Diagram for Labs/Assignments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.cdot.senecacollege.ca/wiki/Virtual-Lan"},"Link to virtual-lan setup")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://zenit.senecac.on.ca/wiki/index.php/OPS535_Network_Address"},"Link for assigned network address lookup")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.tecmint.com/automating-linux-system-administration-tasks/"},"System Admin Automation using Fabric"))),(0,n.kt)("h2",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"Libvirtd provides firewall rules to allow access to virtual machines, but assumes all connections will originate from them. It does not have a good setup to allow clients from outside your network to connect to servers you might be hosting on VMs. In this lab you will gain experience managing the firewall rules that allow greater control over traffic, along with routing information to control where outgoing traffic is sent."),(0,n.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,n.kt)("p",null,"The pre-lab must be complete so that your virtual machines share access to a private network. Shut down your VMs and delete the default virtual network from your host."),(0,n.kt)("h2",{id:"investigation-1-virtual-networks"},"Investigation 1: Virtual Networks"),(0,n.kt)("p",null,"Perform the following steps on your host:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Use the skills you learned in previous courses to create a new virtual network called default (we are only keeping the same network name as the old one so we don\u2019t have to change it in every VM).",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The address range to provide is determined based on your Network Number (NN, obtained through blackboard): 192.168.X.0/24. where X = NN+100"),(0,n.kt)("li",{parentName:"ul"},"Do not provide DHCP."),(0,n.kt)("li",{parentName:"ul"},"Allow it to forward to any physical device, but set the mode to \u2018Open\u2019. In virt-manager, the major difference between the three modes is the firewall rules that it will set up for you."))),(0,n.kt)("li",{parentName:"ol"},"Boot each virtual machine and provide it a static address according to the following table. Do not alter the address it already has for your internal network.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Hostname"),(0,n.kt)("th",{parentName:"tr",align:null},"Address for external network"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"vm1.lab.<yourdomain",">",".ops"),(0,n.kt)("td",{parentName:"tr",align:null},"192.168.X.53/24")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"vm2.lab.<yourdomain",">",".ops"),(0,n.kt)("td",{parentName:"tr",align:null},"192.168.X.2/24")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"vm3.lab.<yourdomain",">",".ops"),(0,n.kt)("td",{parentName:"tr",align:null},"192.168.X.3/24")))),(0,n.kt)("h2",{id:"investigation-2-advanced-uses-of-firewalld"},"Investigation 2: Advanced uses of FirewallD"),(0,n.kt)("p",null,"Having removed the default network, you have also removed the firewall settings it was providing for you that allowed your machines to communicate with the outside world. Perform the following steps on your host."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set the virtual interface that is assigned to your new virtual network to be part of the \u2018external\u2019 zone. Make sure the change will be permanent."),(0,n.kt)("li",{parentName:"ol"},"Ensure Masquerading is set to off for this zone.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"While masquerading would allow our machines to reach the network outside by hiding their internal addresses behind the host machine\u2019s address, it would not help us allow new connections to be made to the servers inside our network. We will have to set that up ourselves."))),(0,n.kt)("li",{parentName:"ol"},"Remove all services from this zone except for ssh and dns (which you may need to add yourself)."),(0,n.kt)("li",{parentName:"ol"},"Now that you have removed the excess clutter from the zone, examine it using firewall-cmd --zone=external --list-all (assuming you have not already done so).",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You may also wish to use the old iptables commands to list individual chains. Pay particular attention to FORWARD and POSTROUTING."))),(0,n.kt)("li",{parentName:"ol"},"Using the --direct option, add a rule to the FORWARD chain that will allow traffic addressed to machines in your 192.168.X.0/24 network.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"While this (and the next step) should also work with the incoming/outgoing interface options, it does not seem to. Use the destination address only."))),(0,n.kt)("li",{parentName:"ol"},"Using the --direct option, add a rule to the FORWARD chain that will allow traffic from machines in your 192.168.X.0/24 network addressed to anywhere else."),(0,n.kt)("li",{parentName:"ol"},"The previous two steps will allow traffic between your virtual machines and the outside world, however most machines will not currently respond to them, as they are using addresses in one of the private address ranges."),(0,n.kt)("li",{parentName:"ol"},"Using the --direct option, add a rule to the POSTROUTING chain of the nat table to masquerade all traffic coming from your virtual network. Use a priority value of 3 (we will need to add a few rules before this one shortly).",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This will cause traffic coming from your network to use your host\u2019s external facing address. Unfortunately, this puts us right back where we started; any traffic your virtual machines send out will have the actual address hidden. We will need to add some rules before this to allow us to communicate with the other machines in the lab without being masqueraded."))),(0,n.kt)("li",{parentName:"ol"},"Using the --direct option, add a rule to the POSTROUTING chain of the nat table to ACCEPT all traffic coming from your virtual network that has a destination in 192.168.0.0/16. Use a priority value of 2 so that this rule will happen before the masquerading one.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This rule will allow you to communicate with machines in your assignment network (which you will create later). We have lumped all of them into one /16 rule instead of having to add a separate rule for each network you wish to communicate with. We will adjust this for the assignment"))),(0,n.kt)("li",{parentName:"ol"},"Use firewall-cmd and iptables -L to examine your firewall again. You should see the rules you added in the FORWARD chain of the filter table, and in the POSTROUTING_direct chain of the nat table.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Make sure the rule you added to POSTROUTING that ACCEPTs traffic addressed to 192.168.0.0/16 appears before the masquerade rule you added."),(0,n.kt)("li",{parentName:"ul"},"Once you are satisfied with your firewall, use firewall-cmd --runtime-to-permanent to save it."))),(0,n.kt)("li",{parentName:"ol"},"Now that your VMs can be reached by the outside world, it is important to differentiate the traffic that is on their internal network from traffic with the outside world. Boot each of your VMs and set the interface that is connected to your internal network to be in the zone called internal, while the interface connected to the open network you just created should be set in the zone called external.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Make the same changes to the external zone you did on the host (i.e. no masquerading, and delete the unneeded services)."),(0,n.kt)("li",{parentName:"ul"},"Make sure these changes persist past rebooting.")))),(0,n.kt)("h2",{id:"completing-the-lab"},"Completing the Lab"),(0,n.kt)("p",null,"You should now have a better network configuration for your VMs. Each machine has access to the internal-only network it already had, but now has the second network interface configured to allow access to other nearby networks (e.g. other networks in the same organization) without undergoing Network Address Translation."),(0,n.kt)("p",null,"Follow the instructions on blackboard to submit the lab."),(0,n.kt)("h2",{id:"exploration-questions"},"Exploration Questions"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"What does the priority number in a direct rule for firewalld affect?"),(0,n.kt)("li",{parentName:"ol"},"How are direct rules different from rich-rules?")))}h.isMDXComponent=!0}}]);