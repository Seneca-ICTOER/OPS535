"use strict";(self.webpackChunkOPS535=self.webpackChunkOPS535||[]).push([[366],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,p=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return n?r.createElement(p,i(i({ref:t},c),{},{components:n})):r.createElement(p,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9328:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));const o={id:"lab8",title:"Lab 8",sidebar_position:13,description:"Lab 8"},i="Lab 8",s={unversionedId:"A-Labs/lab8",id:"A-Labs/lab8",title:"Lab 8",description:"Lab 8",source:"@site/docs/A-Labs/lab8.md",sourceDirName:"A-Labs",slug:"/A-Labs/lab8",permalink:"/OPS535/A-Labs/lab8",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OERTemplate/tree/main/docs/A-Labs/lab8.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{id:"lab8",title:"Lab 8",sidebar_position:13,description:"Lab 8"},sidebar:"courseNotesSidebar",previous:{title:"Lab 7",permalink:"/OPS535/A-Labs/lab7"},next:{title:"Assignment 1",permalink:"/OPS535/B-Assignments/assignment1"}},l={},u=[{value:"Objectives",id:"objectives",level:2},{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Important Notes",id:"important-notes",level:2},{value:"Investigation 1: Performing queries using DNSSEC",id:"investigation-1-performing-queries-using-dnssec",level:2},{value:"Investigation 2: Configuring DNSSEC on a Recursive Server",id:"investigation-2-configuring-dnssec-on-a-recursive-server",level:2},{value:"Investigation 3: Configuring DNSSEC on an Authoritative Server",id:"investigation-3-configuring-dnssec-on-an-authoritative-server",level:2},{value:"Completing the Lab",id:"completing-the-lab",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lab-8"},"Lab 8"),(0,a.kt)("h2",{id:"objectives"},"Objectives"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Study the responses of DNSSEC enabled DNS queries"),(0,a.kt)("li",{parentName:"ul"},"Configure an authoritative DNS server to provide DNS responses authenticated with DNSSEC.")),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Complete Labs 1 through 4"),(0,a.kt)("li",{parentName:"ul"},"Access to your own CentOS 8.x VMs at home"),(0,a.kt)("li",{parentName:"ul"},"Access to your CentOS 8.x VMs in the OPS535 Virtual Lab")),(0,a.kt)("h2",{id:"important-notes"},"Important Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For Investigation 1 and 2, you need to do it on your own CentOS 8.x VMs at home in order to access the real world root name servers and other authoritative DNS servers. If you do it on your VMs in the OPS535 Virtual Lab, your will not get the expected results as those DNS queries will be block by Seneca Internet Security Policies."),(0,a.kt)("li",{parentName:"ul"},"For Investigation 3, you should do it on your VM2 in the Virtual Lab.")),(0,a.kt)("h2",{id:"investigation-1-performing-queries-using-dnssec"},"Investigation 1: Performing queries using DNSSEC"),(0,a.kt)("p",null,"Perform the following steps on your own pri-dns CentOS 8.x at home:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ensure you have bind-utils installed."),(0,a.kt)("li",{parentName:"ol"},"Run the command dig senecacollege.ca",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You should get output similar to the following:")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[rchan@pri-dns labs]$ dig senecacollege.ca @1.1.1.1\n\n; <<>> DiG 9.11.20-RedHat-9.11.20-5.el8_3.1 <<>> senecacollege.ca @1.1.1.1\n;; global options: +cmd\n;; Got answer:\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 33464\n;; flags: qr rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 1\n\n;; OPT PSEUDOSECTION:\n; EDNS: version: 0, flags:; udp: 1232\n;; QUESTION SECTION:\n;senecacollege.ca.      IN  A\n\n;; ANSWER SECTION:\nsenecacollege.ca.   600 IN  A   52.60.173.6\nsenecacollege.ca.   600 IN  A   52.24.251.32\nsenecacollege.ca.   600 IN  A   34.243.56.93\n\n;; Query time: 71 msec\n;; SERVER: 1.1.1.1#53(1.1.1.1)\n;; WHEN: Tue Mar 30 15:31:49 EDT 2021\n;; MSG SIZE  rcvd: 93\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you did not get the expected output, go back and ensure your machine has network connectivity to the Internet).")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Once you have a response, can you be sure it is reliable?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Re-run the previous dig command, but this time add +dnssec to request authentication of the results using DNSSEC.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[rchan@pri-dns labs]$ dig senecacollege.ca @1.1.1.1 +dnssec\n\n; <<>> DiG 9.11.20-RedHat-9.11.20-5.el8_3.1 <<>> senecacollege.ca @1.1.1.1 +dnssec\n;; global options: +cmd\n;; Got answer:\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 8403\n;; flags: qr rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 1\n\n;; OPT PSEUDOSECTION:\n; EDNS: version: 0, flags: do; udp: 1232\n;; QUESTION SECTION:\n;senecacollege.ca.      IN  A\n\n;; ANSWER SECTION:\nsenecacollege.ca.   600 IN  A   52.24.251.32\nsenecacollege.ca.   600 IN  A   52.60.173.6\nsenecacollege.ca.   600 IN  A   34.243.56.93\n\n;; Query time: 54 msec\n;; SERVER: 1.1.1.1#53(1.1.1.1)\n;; WHEN: Tue Mar 30 15:34:45 EDT 2021\n;; MSG SIZE  rcvd: 93\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Notice the addition of the ",(0,a.kt)("strong",{parentName:"li"},"flags"),": ",(0,a.kt)("strong",{parentName:"li"},"do")," flag (",(0,a.kt)("strong",{parentName:"li"},"DNSSEC Ok"),", that is the server we queried is willing to perform authentication), but no other difference in output. This information is ",(0,a.kt)("strong",{parentName:"li"},"not")," authenticated.")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Now we will run a query that does get authenticated:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Run the following command (again you should get output similar to the following):")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[rchan@pri-dns labs]$ dig isc.org @1.1.1.1 +dnssec\n\n; <<>> DiG 9.11.20-RedHat-9.11.20-5.el8_3.1 <<>> isc.org @1.1.1.1 +dnssec\n;; global options: +cmd\n;; Got answer:\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 20848\n;; flags: qr rd ra ad; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1\n\n;; OPT PSEUDOSECTION:\n; EDNS: version: 0, flags: do; udp: 1232\n;; QUESTION SECTION:\n;isc.org.           IN  A\n\n;; ANSWER SECTION:\nisc.org.        60  IN  A   149.20.1.66\nisc.org.        60  IN  RRSIG   A 13 2 60 20210414183037 20210315174752 27566 isc.org. XA/axENwkfw6IP3mlRBFNz9TDt/ldecEixafcdUiPMay+4mUQ8D8vUF0 gm1MauongXELJ/Z7F2zv/2nqBmxeEg==\n\n;; Query time: 131 msec\n;; SERVER: 1.1.1.1#53(1.1.1.1)\n;; WHEN: Tue Mar 30 15:38:05 EDT 2021\n;; MSG SIZE  rcvd: 155\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Notice that in addition to the ",(0,a.kt)("strong",{parentName:"li"},"do")," flag, the answer to this query also has an ",(0,a.kt)("strong",{parentName:"li"},"ad")," flag (",(0,a.kt)("strong",{parentName:"li"},"Authenticated Data"),"), along with extra information in the answer itself (the ",(0,a.kt)("strong",{parentName:"li"},"RRSIG")," record). This result ",(0,a.kt)("strong",{parentName:"li"},"is")," authenticated."),(0,a.kt)("li",{parentName:"ul"},"If you want to see this result without the DNSSEC information, simply re-run the query without the +dnssec request.")),(0,a.kt)("h2",{id:"investigation-2-configuring-dnssec-on-a-recursive-server"},"Investigation 2: Configuring DNSSEC on a Recursive Server"),(0,a.kt)("p",null,"Perform the following steps as root on your co-nfs VM at home:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Now that you can spot the differences between authenticated and non-authenticated data, it is time to configure your local recursive DNS server to perform authentication when your client machines request it."),(0,a.kt)("li",{parentName:"ol"},"Simply set the dnssec-validation parameter in your /etc/named.conf file to yes (it is already set this way if you didn\u2019t change it in an earlier lab).",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Note that this relies on your server also having the initial key it will use to authenticate the root name servers it communicates with."),(0,a.kt)("li",{parentName:"ul"},"This can be found in /etc/named.root.key."),(0,a.kt)("li",{parentName:"ul"},"This too is included by default when you first install bind. If it is not there, add the following line to your options statement and restart your service:")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'include "/etc/named.root.key";\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Make sure your recursive DNS server is configured to provide recursive answers to other machines in your network, and that it will allow traffic to udp/tcp port 53.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"All of this should have already been done, so long as you followed the instructions in previous labs, and didn\u2019t deliberately break anything."))),(0,a.kt)("li",{parentName:"ol"},"Run the following command from one of your other VMs (making sure to use the ip address of your own DNS server instead of 192.168.49.53 shown):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[rchan@pri-dns labs]$ dig +tcp +dnssec @192.168.49.53 isc.org  \n\n; <<>> DiG 9.11.20-RedHat-9.11.20-5.el8_3.1 <<>> +tcp +dnssec @192.168.49.53 isc.org\n; (1 server found)\n;; global options: +cmd\n;; Got answer:\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 52005\n;; flags: qr rd ra ad; QUERY: 1, ANSWER: 2, AUTHORITY: 5, ADDITIONAL: 13\n\n;; OPT PSEUDOSECTION:\n; EDNS: version: 0, flags: do; udp: 4096\n; COOKIE: 8bfb94819923d7d0e71b5f5b6063828c7a5aa6d3baaf88b4 (good)\n;; QUESTION SECTION:\n;isc.org.           IN  A\n\n;; ANSWER SECTION:\nisc.org.        60  IN  A   149.20.1.66\nisc.org.        60  IN  RRSIG   A 13 2 60 20210414183037 20210315174752 27566 isc.org. XA/axENwkfw6IP3mlRBFNz9TDt/ldecEixafcdUiPMay+4mUQ8D8vUF0 gm1MauongXELJ/Z7F2zv/2nqBmxeEg==\n\n;; AUTHORITY SECTION:\nisc.org.        7131    IN  NS  ns.isc.afilias-nst.info.\nisc.org.        7131    IN  NS  ns1.isc.org.\nisc.org.        7131    IN  NS  ns2.isc.org.\nisc.org.        7131    IN  NS  ns3.isc.org.\nisc.org.        7131    IN  RRSIG   NS 13 2 7200 20210418013614 20210319004124 27566 isc.org. ReJ5eOi0Rr+UGwmh6rZ4+nLApVAxVWOzx4FFlSDkRIMc+bKoMJb7SnGd tE+ccLm6gqwalSLxyuBhTR4IW3+g+w==\n\n;; ADDITIONAL SECTION:\nns1.isc.org.        7131    IN  A   149.20.1.73\nns2.isc.org.        7131    IN  A   199.6.1.52\nns3.isc.org.        7131    IN  A   51.75.79.143\nns1.isc.org.        7131    IN  AAAA    2001:4f8:1:f::73\nns2.isc.org.        7131    IN  AAAA    2001:500:60:d::52\nns3.isc.org.        7131    IN  AAAA    2001:41d0:701:1100::2c92\nns1.isc.org.        7131    IN  RRSIG   A 13 3 7200 20210417095734 20210318094252 27566 isc.org. YCa/4JN/UBy0sE1ZwfdGxRfN5zpwchZUVjND7olME8SjPgjkHi8o/ipu kqsJX46yVxm01RYppC2oSl/kMwyONw==\nns1.isc.org.        7131    IN  RRSIG   AAAA 13 3 7200 20210420021727 20210321015317 27566 isc.org. fHPego6Su9b6sZnyw4i+7nviQDLkxjPNCL7ZKOKqGDtRcjlweTLqYBcv API02wN+HtU9ztyQf/m4ZOSbnlxl7w==\nns2.isc.org.        7131    IN  RRSIG   A 13 3 7200 20210418124611 20210319123514 27566 isc.org. L4Lhc6OGZs7rZUFSwYEerC/Jy2OEWx4sCv5ukBKcv13TdrM37oBj5p4/ sayRB7Y/luRnOCjnSfOIadpTy2mBBg==\nns2.isc.org.        7131    IN  RRSIG   AAAA 13 3 7200 20210420021727 20210321015317 27566 isc.org. 3x6UYIlixFiQW6Yfqo3EedvTHW1H4/5leZwGLBHHc4OamE8k4aE35vd2 pCNi1/cugzbFGhUGDHroBzoRbND9zg==\nns3.isc.org.        7131    IN  RRSIG   A 13 3 7200 20210420025339 20210321020638 27566 isc.org. Tj7v8c4CkATUMYYg7FUlwyAMQUKLLbWFD+XcrteO4ySF5mO9kDoYNceP CiR3W2EPAZnYWLe91+Uy1mzjmZjqGQ==\nns3.isc.org.        7131    IN  RRSIG   AAAA 13 3 7200 20210413142738 20210314141409 27566 isc.org. mTNp2I5wcUm1WPPmSsL01Yh5eMSJzgO/1Sd1nvrX+uOgsbMuyozpROYR jYWaYKg9yJCdMV8gGTgkedwE0EoF0A==\n\n;; Query time: 91 msec\n;; SERVER: 192.168.49.53#53(192.168.49.53)\n;; WHEN: Tue Mar 30 15:57:00 EDT 2021\n;; MSG SIZE  rcvd: 1127\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Again, note the ",(0,a.kt)("strong",{parentName:"li"},"do")," and ",(0,a.kt)("strong",{parentName:"li"},"ad")," flags, along with the RRSIG record (and similar data for the nameservers in the isc.org domain).")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Your server is now able to request DNSSEC records from other zones, and authenticate them.")),(0,a.kt)("h2",{id:"investigation-3-configuring-dnssec-on-an-authoritative-server"},"Investigation 3: Configuring DNSSEC on an Authoritative Server"),(0,a.kt)("p",null,"Perform the following steps as sudoer or root on your VM2 in the virtual lab:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Now that you know how to configure a recursive nameserver to perform authentication of other domains (so long as they are configured to provide authentication), it is time to configure your own domain to support authentication using DNSSEC."),(0,a.kt)("li",{parentName:"ol"},"First you need to make sure that the named service is able to modify the master zone files, as it will need to do so in order to add the RRSIG records it generates for you. This requires two things:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The SELinux boolean ",(0,a.kt)("strong",{parentName:"li"},"named_write_master_zones")," must be set to on to (this should have already been done in a previous lab, and is currently the default setting)."),(0,a.kt)("li",{parentName:"ul"},"The named account must have write permission to the /var/named directory. Again, this is currently the default setting, but double check that it is correct."),(0,a.kt)("li",{parentName:"ul"},"If either of those settings is not configured correctly, fix them now."))),(0,a.kt)("li",{parentName:"ol"},"Install the ",(0,a.kt)("strong",{parentName:"li"},"haveged")," service to generate random values for your system.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It can be found in the epel-release repo. Install that if you have not already done so."),(0,a.kt)("li",{parentName:"ul"},"You would not have to use this service on a \u2018real\u2019 server, but our VMs may not have enough activity to provide normally random data within a reasonable time-frame."),(0,a.kt)("li",{parentName:"ul"},"Start, but do not enable ",(0,a.kt)("strong",{parentName:"li"},"haveged")," service, as we will not need it on a regular basis. Anytime you need to re-generate the random keys from the next step, simply start the service."))),(0,a.kt)("li",{parentName:"ol"},"Next, we will use the ",(0,a.kt)("strong",{parentName:"li"},"dnssec-keygen")," command to generate two sets of paired keys.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Create a directory at /etc/named/<yourdomain",">","-keys",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Making sure you replace <yourdomain",">"," with the name of your domain"),(0,a.kt)("li",{parentName:"ul"},"Make sure that only ",(0,a.kt)("strong",{parentName:"li"},"root")," and ",(0,a.kt)("strong",{parentName:"li"},"named")," have read/write access to it."),(0,a.kt)("li",{parentName:"ul"},"cd into that directory so the keys you are about to generate get created there."))),(0,a.kt)("li",{parentName:"ul"},"First, to generate the ",(0,a.kt)("strong",{parentName:"li"},"Zone Signing Key")," (ZSK) that is used to sign individual records (make sure to use your own zone name):")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dnssec-keygen -a RSASHA256 -b 1024 <yourzone>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"And to generate the ",(0,a.kt)("strong",{parentName:"li"},"Key Signing Key")," (KSK) that is used to create an RRSIG for your DNSKEY (the public half of the ZSK):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dnssec-keygen -a RSASHA256 -b 2048 -f KSK <yourzone>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note that the algorithm and number of bytes used here are current standards, but may change over time."),(0,a.kt)("li",{parentName:"ul"},"Change the permissions on those files so that only root and the named service can read them.")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"There are three parameters for bind that need to be set in order to sign your zones. The first two could be set in the options statement, but the third is only acceptable in a zone statement. Our machines only have two zone statements (the forward and reverse lookups of your domain), so it won\u2019t make a significant difference where we place them. If your server hosted multiple domains, the placement of these parameters would be something to consider:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Add the following lines to your two zones (again replacing <yourdomain",">"," with the name of your domain):")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"inline-signing yes;\nauto-dnssec maintain;\nkey-directory \u201c/etc/named/<yourdomain>-keys\u201d;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Double check that the value you put in the key-directory parameter matches the directory you created your key files in.")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Make sure the dnssec-enable parameter in /etc/named.conf is set to yes so that your server will provide the extra DNSSEC records if a client requests them.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is the default value, so unless you took it out, it should already be there."),(0,a.kt)("li",{parentName:"ul"},"Note that this parameter is different from the dnssec-validation parameter which only controls whether or not your server will request those records from other servers when a client asks for them."))),(0,a.kt)("li",{parentName:"ol"},"Restart the named service. If you have dynamic DNS set up from the earlier labs, you can use named-journalprint to view the journal files for your zones in order to see the new records."),(0,a.kt)("li",{parentName:"ol"},"In order to confirm that your server will provide the extra records when requested, use the dig command to obtain a zone transfer (including the DNSSEC records) from your server:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Making sure to replace <yourzone",">"," with the name of your zone, and <ip-of-server",">"," with the ip address of your server.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dig AXFR <yourzone> @<ip-of-server>\n")),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Repeat the steps from this investigation so you have a signed copy of your reverse zone too."),(0,a.kt)("li",{parentName:"ol"},"Normally, there would be a few more steps here to create an encrypted copy of your ZSK to provide to your parent zone as a DS record, but we will not be configuring that in this lab.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Note that this means responses your server provides will not be \u2018authenticated data\u2019, and will not have the ad flag."),(0,a.kt)("li",{parentName:"ul"},"You will be performing this final step in the next assignment.")))),(0,a.kt)("h2",{id:"completing-the-lab"},"Completing the Lab"),(0,a.kt)("p",null,"Your DNS server is now capable of performing recursive queries using DNSSEC when client machines request it. It has also been configured to provide the extra DNSSEC records when clients request them. Note that it is not yet truly providing DNSSEC answers, as it is not being authenticated through the domain above yours."),(0,a.kt)("p",null,"Follow the instructions on blackboard to submit the lab."))}d.isMDXComponent=!0}}]);