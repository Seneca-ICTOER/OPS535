"use strict";(self.webpackChunkOPS535=self.webpackChunkOPS535||[]).push([[643],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(n),c=o,d=h["".concat(l,".").concat(c)]||h[c]||m[c]||r;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8225:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return p}});var a=n(3117),o=(n(7294),n(3905));const r={id:"lab2-stage1",title:"Lab 2 Part 1",sidebar_position:4,description:"Lab 2 Stage 1"},s="Lab 2 - Stage 1",i={unversionedId:"A-Labs/lab2-stage1",id:"A-Labs/lab2-stage1",title:"Lab 2 Part 1",description:"Lab 2 Stage 1",source:"@site/docs/A-Labs/lab2-stage1.md",sourceDirName:"A-Labs",slug:"/A-Labs/lab2-stage1",permalink:"/OPS535/A-Labs/lab2-stage1",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OERTemplate/tree/main/docs/A-Labs/lab2-stage1.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"lab2-stage1",title:"Lab 2 Part 1",sidebar_position:4,description:"Lab 2 Stage 1"},sidebar:"courseNotesSidebar",previous:{title:"Lab 1 Alternate",permalink:"/OPS535/A-Labs/lab1-alt"},next:{title:"Lab 2 Part 2",permalink:"/OPS535/A-Labs/lab2-stage2"}},l={},p=[{value:"Purpose",id:"purpose",level:2},{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Investigation 1: NFS Server Setup",id:"investigation-1-nfs-server-setup",level:2},{value:"Investigation 2: File ownership of new files created on NFS shares",id:"investigation-2-file-ownership-of-new-files-created-on-nfs-shares",level:2},{value:"Investigation 3: File creation permission and user name mapping on NFS shares",id:"investigation-3-file-creation-permission-and-user-name-mapping-on-nfs-shares",level:2},{value:"Completing the Lab",id:"completing-the-lab",level:2},{value:"Exploration Questions",id:"exploration-questions",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-2---stage-1"},"Lab 2 - Stage 1"),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"Network File System (NFS) allows you to access files on remote hosts in exactly the same way you would access local files. It was originally created by Sun Microsystem and the implementation on Linux is largely by Rick Sladkey, who wrote the NFS kernel code and large parts of the NFS server. For more information about NFS, please refer to Chapter 14 of the online Network Administrator guide. You should also study chapter 23 of the course text book on NFS for this Lab. Designate vm2 as the NFS server."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The pre-lab must be complete so that your virtual machines share access to a private network."),(0,o.kt)("li",{parentName:"ul"},"Create a new user on each of your virtual machines using your own Seneca login."),(0,o.kt)("li",{parentName:"ul"},"If you don't have the nfs-utils package installed, install it now.")),(0,o.kt)("h2",{id:"investigation-1-nfs-server-setup"},"Investigation 1: NFS Server Setup"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Perform the following steps on vm2:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Login to your machine as a regular user and enter the following command su -"),(0,o.kt)("li",{parentName:"ol"},"Enter the command rpcinfo -p"),(0,o.kt)("li",{parentName:"ol"},'Study the output and make notes of the first few lines. You should see two lines that end with the word "portmapper". If you don\'t, there is something wrong with your system, your system will not be able to provide NFS service. Ask for help if this is the case.'),(0,o.kt)("li",{parentName:"ol"},'You should also see a line or two (or even more) that contains the word "nfs". If you don\'t, NFS is not running. If NFS is not running, you can start up NFS with the command:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start nfs-server\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'Create a directory named "/nfs-pub". Enter the command:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /nfs-pub\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},'Change the file permission on "/nfs-pub" so everyone can read/write/list. Enter the command:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 777 /nfs-pub\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure to double check that the file permissions have been set correctly.")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},'To set the sticky bit on the directory "/nfs-pub" , use the command')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +t /nfs-pub\n")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Edit your /etc/exports file and insert the following lines:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/nfs-pub ip-of-vm1(rw,root_squash)\n/nfs-pub ip-of-vm3(rw,root_squash)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"ip-of-vm1" should be replaced by the actual IP address of vm1 (VM1),and "ip-of-vm3" should be replaced by the actual IP address of vm3 (VM3).')),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Enter the command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"exportfs -a\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to tell your NFS server to re-read the configuration file (/etc/exports) and take the appropriate action, i.e. to export the directory /nfs-pub to the specific host.")),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"Enter the command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"showmount -e\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make notes of the output and consult the man page of showmount to find out the purpose of this command.")),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},'Use the command "exit" to leave the super user shell and switch back to the regular user shell. Enter the command')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"id\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to confirm your user id. Write down your user name, user ID and group ID.")),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},"Copy the file /etc/passwd into directory /nfs-pub as passwd.S. Enter the command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp /etc/passwd /nfs-pub/passwd.S\n")),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},'Finally, confirm the file copying with the "ls -l" command and make notes of the output.'),(0,o.kt)("li",{parentName:"ol"},"Modify the firewall on your server to allow incoming nfs traffic in your internal zone. Make sure this change persists past reboot.")),(0,o.kt)("h2",{id:"investigation-2-file-ownership-of-new-files-created-on-nfs-shares"},"Investigation 2: File ownership of new files created on NFS shares"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Perform the following steps on VM1 as root:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enter the command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat /proc/filesystems\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Make notes of the output. You should see a list of file systems supported on your system. If "nfs" is missing from this list, your Linux kernel does not have NFS support compiled in. However, it is possible that your kernel do support NFS via kernel module. Try the command')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"modprobe nfs\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"and make notes of the output from the above command. If it indicates that the nfs module has been loaded successfully, try the ",(0,o.kt)("inlineCode",{parentName:"li"},"cat /proc/filesystems")," command again.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create the directory /nfs-mnt. We will use this as the mount point for the remote directory."),(0,o.kt)("li",{parentName:"ol"},"Use the mount command to attach the remote directory (",(0,o.kt)("strong",{parentName:"li"},"/nfs-pub")," from vm2) into the local mount point (",(0,o.kt)("strong",{parentName:"li"},"/nfs-mnt"),")"),(0,o.kt)("li",{parentName:"ol"},"Use commands like mount or df to check that the mount command executed successfully (that is, that VM2's ",(0,o.kt)("strong",{parentName:"li"},"/nfs-pub")," is now being treated as part of the local filesystem)."),(0,o.kt)("li",{parentName:"ol"},"Confirm that you can access the contents of ",(0,o.kt)("strong",{parentName:"li"},"/nfs-mnt"),". They should be identical to VM2's ",(0,o.kt)("strong",{parentName:"li"},"/nfs-pub")," (because it IS VM2's ",(0,o.kt)("strong",{parentName:"li"},"/nfs-pub"),"). Note the owner and the group owner of the file passwd.S."),(0,o.kt)("li",{parentName:"ol"},"Still on VM1, copy the file ",(0,o.kt)("strong",{parentName:"li"},"/etc/passwd")," into the ",(0,o.kt)("strong",{parentName:"li"},"/nfs-mnt")," directory. Name the copy ",(0,o.kt)("strong",{parentName:"li"},"passwd.A.root"),"."),(0,o.kt)("li",{parentName:"ol"},"Confirm that the file copied correctly. Again, make note of the owner and group owner of the file."),(0,o.kt)("li",{parentName:"ol"},"Switch to being a regular (",(0,o.kt)("strong",{parentName:"li"},"non-root"),") user and copy the file ",(0,o.kt)("strong",{parentName:"li"},"/etc/passwd")," into the ",(0,o.kt)("strong",{parentName:"li"},"/nfs-mnt")," directory again, this time naming the copy ",(0,o.kt)("strong",{parentName:"li"},"passwd.A.user"),". Again, make note of the owner and group owner of the file. Note how it differs from the ownership of the file created as root."),(0,o.kt)("li",{parentName:"ol"},"Repeat this investigation on VM3, so that it also has access the shared filesystem. Replace the A in the copied filenames with B (e.g. passwd.B.root).")),(0,o.kt)("h2",{id:"investigation-3-file-creation-permission-and-user-name-mapping-on-nfs-shares"},"Investigation 3: File creation permission and user name mapping on NFS shares"),(0,o.kt)("p",null,"Create new users on the NFS server (vm2), and clients (vm1 and vm3) to study the user name mapping on NFS shares:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the NFS server create two new users userS, and ops535 with the commands")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"useradd -u 5001 -m userS\nuseradd -u 5350 -m ops535\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"On vm1 create two new users userA, and ops535 with the commands")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"useradd -u 5001 -m userA\nuseradd -u 5350 -m ops535\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'And use the "passwd" command to set the passwords for those users')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"On vm1 login as userA and copy the password file to ",(0,o.kt)("strong",{parentName:"li"},"/nfs-mnt"),", naming the copy ",(0,o.kt)("strong",{parentName:"li"},"passwd.A.map"),". Confirm the copying of the file and make notes of the owner and group owner of the file."),(0,o.kt)("li",{parentName:"ol"},"Logout from userA and login as ops535. Copy the password file to ",(0,o.kt)("strong",{parentName:"li"},"/nfs-mnt"),", this time naming it ",(0,o.kt)("strong",{parentName:"li"},"passwd.A.ops"),". Again, make notes of the owner and group owner of the file."),(0,o.kt)("li",{parentName:"ol"},"Login to the NFS server, and examine the ownership of the files you just created. Who is the owner and the group owner of the respective files?"),(0,o.kt)("li",{parentName:"ol"},'On your nfs-client machine, un-mount the remote directory. Please note that this must be done by "root" and the directory /nfs-mnt is not being used by any process.'),(0,o.kt)("li",{parentName:"ol"},"On the NFS server, make the following changes to the /etc/exports file: change")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/nfs-pub ip-of-vm1(rw, root_squash)\n")),(0,o.kt)("p",null,"to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/nfs-pub ip-of-vm1(rw, no_root_squash)\n")),(0,o.kt)("p",null,"and re-export the directory."),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},'On the client, re-mount the share directory and repeat step 3 to step 6 under the super user account "root" and copy the file /etc/group to the share directory /nfs-mnt with the corresponding file name.'),(0,o.kt)("li",{parentName:"ol"},"un-mount the remote directory."),(0,o.kt)("li",{parentName:"ol"},'On the NFS server, change the "rw" option in the /etc/exports file to "ro" and re-export the directory.'),(0,o.kt)("li",{parentName:"ol"},'On the client, re-mount the share directory and repeat step 3 to step 6 under the super user account "root" and copy the file /etc/hosts to the share directory /nfs-mnt with the corresponding file name.'),(0,o.kt)("li",{parentName:"ol"},"Observe how the different settings on the server affected the ownership and permissions of files created on the client side."),(0,o.kt)("li",{parentName:"ol"},"Repeat this investigation on vm3, naming the first user userB (instead of userA), and replace the A in any file names with B. When creating files, try to predict the ownership and permissions of the resulting files.")),(0,o.kt)("h2",{id:"completing-the-lab"},"Completing the Lab"),(0,o.kt)("p",null,"You should now have a common part of the filesystem available to all three vms. Files you store there on one machine will be accessible for the other machines too. Note that this should only be available when using your internal, statically assigned addresses. You have also explored how access permissions are used between the machines, and since this service relies on UIDs accessed on each machine, keeping them synchronized between machines becomes vital. In a future lab we will explore a service that will manage that aspect of our networks."),(0,o.kt)("p",null,"Follow the instructions on blackboard to submit the lab."),(0,o.kt)("h2",{id:"exploration-questions"},"Exploration Questions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'What is the purpose of the "su -" command?'),(0,o.kt)("li",{parentName:"ol"},'What is the purpose of the "rpcinfo -p" command?'),(0,o.kt)("li",{parentName:"ol"},"What information is stored in the /etc/exports file?"),(0,o.kt)("li",{parentName:"ol"},'What information is provided by the "showmount -e" command?'),(0,o.kt)("li",{parentName:"ol"},"Did your Linux kernel have NFS support compiled in?"),(0,o.kt)("li",{parentName:"ol"},"What is the full path name of the nfs module file? i.e. where is it on your hard drive?"),(0,o.kt)("li",{parentName:"ol"},"What is the purpose of the sticky bit?"),(0,o.kt)("li",{parentName:"ol"},"Who is the owner of /nfs-mnt/passwd.A.root and /nfs-pub/passwd.A.root? Are they the same? Why?"),(0,o.kt)("li",{parentName:"ol"},"Who is the owner of the file /nfs-mnt/passwd.A.user and /nfs-pub/passwd.A.user? Are they the same? Why?"),(0,o.kt)("li",{parentName:"ol"},"Who is the owner of the file /nfs-mnt/passwd.A.map and /nfs-pub/passwd.A.map? Are they the same? Why and why not?"),(0,o.kt)("li",{parentName:"ol"},"Who is the owner of the file /nfs-mnt/passwd.A.ops and /nfs-pub/passwd.A.ops? Are they the same? Why and why not?"),(0,o.kt)("li",{parentName:"ol"},"Who is the owner of /nfs-mnt/group.A.root and /nfs-pub/group.A.root? Are they the same? Why?"),(0,o.kt)("li",{parentName:"ol"},"Did the file /nfs-mnt/hosts.A.root get created? Why or why not?")))}m.isMDXComponent=!0}}]);