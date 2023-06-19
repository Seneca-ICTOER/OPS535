---
id: lab8
title: Lab 8
sidebar_position: 13
description: Lab 8
---

# Lab 8

## Objectives

- Study the responses of DNSSEC enabled DNS queries
- Configure an authoritative DNS server to provide DNS responses authenticated with DNSSEC.

## Pre-Requisites

- Complete Labs 1 through 4
- Access to your own CentOS 8.x VMs at home
- Access to your CentOS 8.x VMs in the OPS535 Virtual Lab

## Important Notes

- For Investigation 1 and 2, you need to do it on your own CentOS 8.x VMs at home in order to access the real world root name servers and other authoritative DNS servers. If you do it on your VMs in the OPS535 Virtual Lab, your will not get the expected results as those DNS queries will be block by Seneca Internet Security Policies.
- For Investigation 3, you should do it on your VM2 in the Virtual Lab.

## Investigation 1: Performing queries using DNSSEC

Perform the following steps on your own pri-dns CentOS 8.x at home:

1. Ensure you have bind-utils installed.
2. Run the command dig senecacollege.ca
    - You should get output similar to the following:

```bash
[rchan@pri-dns labs]$ dig senecacollege.ca @1.1.1.1

; <<>> DiG 9.11.20-RedHat-9.11.20-5.el8_3.1 <<>> senecacollege.ca @1.1.1.1
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 33464
;; flags: qr rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
;; QUESTION SECTION:
;senecacollege.ca.		IN	A

;; ANSWER SECTION:
senecacollege.ca.	600	IN	A	52.60.173.6
senecacollege.ca.	600	IN	A	52.24.251.32
senecacollege.ca.	600	IN	A	34.243.56.93

;; Query time: 71 msec
;; SERVER: 1.1.1.1#53(1.1.1.1)
;; WHEN: Tue Mar 30 15:31:49 EDT 2021
;; MSG SIZE  rcvd: 93
```

   - If you did not get the expected output, go back and ensure your machine has network connectivity to the Internet).
3. Once you have a response, can you be sure it is reliable?
    - Re-run the previous dig command, but this time add +dnssec to request authentication of the results using DNSSEC.

```bash
[rchan@pri-dns labs]$ dig senecacollege.ca @1.1.1.1 +dnssec

; <<>> DiG 9.11.20-RedHat-9.11.20-5.el8_3.1 <<>> senecacollege.ca @1.1.1.1 +dnssec
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 8403
;; flags: qr rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags: do; udp: 1232
;; QUESTION SECTION:
;senecacollege.ca.		IN	A

;; ANSWER SECTION:
senecacollege.ca.	600	IN	A	52.24.251.32
senecacollege.ca.	600	IN	A	52.60.173.6
senecacollege.ca.	600	IN	A	34.243.56.93

;; Query time: 54 msec
;; SERVER: 1.1.1.1#53(1.1.1.1)
;; WHEN: Tue Mar 30 15:34:45 EDT 2021
;; MSG SIZE  rcvd: 93
```

   - Notice the addition of the **flags**: **do** flag (**DNSSEC Ok**, that is the server we queried is willing to perform authentication), but no other difference in output. This information is **not** authenticated.
4. Now we will run a query that does get authenticated:
    - Run the following command (again you should get output similar to the following):

```bash
[rchan@pri-dns labs]$ dig isc.org @1.1.1.1 +dnssec

; <<>> DiG 9.11.20-RedHat-9.11.20-5.el8_3.1 <<>> isc.org @1.1.1.1 +dnssec
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 20848
;; flags: qr rd ra ad; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags: do; udp: 1232
;; QUESTION SECTION:
;isc.org.			IN	A

;; ANSWER SECTION:
isc.org.		60	IN	A	149.20.1.66
isc.org.		60	IN	RRSIG	A 13 2 60 20210414183037 20210315174752 27566 isc.org. XA/axENwkfw6IP3mlRBFNz9TDt/ldecEixafcdUiPMay+4mUQ8D8vUF0 gm1MauongXELJ/Z7F2zv/2nqBmxeEg==

;; Query time: 131 msec
;; SERVER: 1.1.1.1#53(1.1.1.1)
;; WHEN: Tue Mar 30 15:38:05 EDT 2021
;; MSG SIZE  rcvd: 155
```

   - Notice that in addition to the **do** flag, the answer to this query also has an **ad** flag (**Authenticated Data**), along with extra information in the answer itself (the **RRSIG** record). This result **is** authenticated.
   - If you want to see this result without the DNSSEC information, simply re-run the query without the +dnssec request.

## Investigation 2: Configuring DNSSEC on a Recursive Server

Perform the following steps as root on your co-nfs VM at home:

1. Now that you can spot the differences between authenticated and non-authenticated data, it is time to configure your local recursive DNS server to perform authentication when your client machines request it.
2. Simply set the dnssec-validation parameter in your /etc/named.conf file to yes (it is already set this way if you didn’t change it in an earlier lab).
    - Note that this relies on your server also having the initial key it will use to authenticate the root name servers it communicates with.
    - This can be found in /etc/named.root.key.
    - This too is included by default when you first install bind. If it is not there, add the following line to your options statement and restart your service:

```bash
include "/etc/named.root.key";
```

3. Make sure your recursive DNS server is configured to provide recursive answers to other machines in your network, and that it will allow traffic to udp/tcp port 53.
    - All of this should have already been done, so long as you followed the instructions in previous labs, and didn’t deliberately break anything.
4. Run the following command from one of your other VMs (making sure to use the ip address of your own DNS server instead of 192.168.49.53 shown):

```bash
[rchan@pri-dns labs]$ dig +tcp +dnssec @192.168.49.53 isc.org  

; <<>> DiG 9.11.20-RedHat-9.11.20-5.el8_3.1 <<>> +tcp +dnssec @192.168.49.53 isc.org
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 52005
;; flags: qr rd ra ad; QUERY: 1, ANSWER: 2, AUTHORITY: 5, ADDITIONAL: 13

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags: do; udp: 4096
; COOKIE: 8bfb94819923d7d0e71b5f5b6063828c7a5aa6d3baaf88b4 (good)
;; QUESTION SECTION:
;isc.org.			IN	A

;; ANSWER SECTION:
isc.org.		60	IN	A	149.20.1.66
isc.org.		60	IN	RRSIG	A 13 2 60 20210414183037 20210315174752 27566 isc.org. XA/axENwkfw6IP3mlRBFNz9TDt/ldecEixafcdUiPMay+4mUQ8D8vUF0 gm1MauongXELJ/Z7F2zv/2nqBmxeEg==

;; AUTHORITY SECTION:
isc.org.		7131	IN	NS	ns.isc.afilias-nst.info.
isc.org.		7131	IN	NS	ns1.isc.org.
isc.org.		7131	IN	NS	ns2.isc.org.
isc.org.		7131	IN	NS	ns3.isc.org.
isc.org.		7131	IN	RRSIG	NS 13 2 7200 20210418013614 20210319004124 27566 isc.org. ReJ5eOi0Rr+UGwmh6rZ4+nLApVAxVWOzx4FFlSDkRIMc+bKoMJb7SnGd tE+ccLm6gqwalSLxyuBhTR4IW3+g+w==

;; ADDITIONAL SECTION:
ns1.isc.org.		7131	IN	A	149.20.1.73
ns2.isc.org.		7131	IN	A	199.6.1.52
ns3.isc.org.		7131	IN	A	51.75.79.143
ns1.isc.org.		7131	IN	AAAA	2001:4f8:1:f::73
ns2.isc.org.		7131	IN	AAAA	2001:500:60:d::52
ns3.isc.org.		7131	IN	AAAA	2001:41d0:701:1100::2c92
ns1.isc.org.		7131	IN	RRSIG	A 13 3 7200 20210417095734 20210318094252 27566 isc.org. YCa/4JN/UBy0sE1ZwfdGxRfN5zpwchZUVjND7olME8SjPgjkHi8o/ipu kqsJX46yVxm01RYppC2oSl/kMwyONw==
ns1.isc.org.		7131	IN	RRSIG	AAAA 13 3 7200 20210420021727 20210321015317 27566 isc.org. fHPego6Su9b6sZnyw4i+7nviQDLkxjPNCL7ZKOKqGDtRcjlweTLqYBcv API02wN+HtU9ztyQf/m4ZOSbnlxl7w==
ns2.isc.org.		7131	IN	RRSIG	A 13 3 7200 20210418124611 20210319123514 27566 isc.org. L4Lhc6OGZs7rZUFSwYEerC/Jy2OEWx4sCv5ukBKcv13TdrM37oBj5p4/ sayRB7Y/luRnOCjnSfOIadpTy2mBBg==
ns2.isc.org.		7131	IN	RRSIG	AAAA 13 3 7200 20210420021727 20210321015317 27566 isc.org. 3x6UYIlixFiQW6Yfqo3EedvTHW1H4/5leZwGLBHHc4OamE8k4aE35vd2 pCNi1/cugzbFGhUGDHroBzoRbND9zg==
ns3.isc.org.		7131	IN	RRSIG	A 13 3 7200 20210420025339 20210321020638 27566 isc.org. Tj7v8c4CkATUMYYg7FUlwyAMQUKLLbWFD+XcrteO4ySF5mO9kDoYNceP CiR3W2EPAZnYWLe91+Uy1mzjmZjqGQ==
ns3.isc.org.		7131	IN	RRSIG	AAAA 13 3 7200 20210413142738 20210314141409 27566 isc.org. mTNp2I5wcUm1WPPmSsL01Yh5eMSJzgO/1Sd1nvrX+uOgsbMuyozpROYR jYWaYKg9yJCdMV8gGTgkedwE0EoF0A==

;; Query time: 91 msec
;; SERVER: 192.168.49.53#53(192.168.49.53)
;; WHEN: Tue Mar 30 15:57:00 EDT 2021
;; MSG SIZE  rcvd: 1127
```

   - Again, note the **do** and **ad** flags, along with the RRSIG record (and similar data for the nameservers in the isc.org domain).
5. Your server is now able to request DNSSEC records from other zones, and authenticate them.

## Investigation 3: Configuring DNSSEC on an Authoritative Server

Perform the following steps as sudoer or root on your VM2 in the virtual lab:

1. Now that you know how to configure a recursive nameserver to perform authentication of other domains (so long as they are configured to provide authentication), it is time to configure your own domain to support authentication using DNSSEC.
2. First you need to make sure that the named service is able to modify the master zone files, as it will need to do so in order to add the RRSIG records it generates for you. This requires two things:
    - The SELinux boolean **named_write_master_zones** must be set to on to (this should have already been done in a previous lab, and is currently the default setting).
    - The named account must have write permission to the /var/named directory. Again, this is currently the default setting, but double check that it is correct.
    - If either of those settings is not configured correctly, fix them now.
3. Install the **haveged** service to generate random values for your system.
    - It can be found in the epel-release repo. Install that if you have not already done so.
    - You would not have to use this service on a ‘real’ server, but our VMs may not have enough activity to provide normally random data within a reasonable time-frame.
    - Start, but do not enable **haveged** service, as we will not need it on a regular basis. Anytime you need to re-generate the random keys from the next step, simply start the service.
4. Next, we will use the **dnssec-keygen** command to generate two sets of paired keys.
    - Create a directory at /etc/named/<yourdomain\>-keys
        - Making sure you replace <yourdomain\> with the name of your domain
        - Make sure that only **root** and **named** have read/write access to it.
        - cd into that directory so the keys you are about to generate get created there.
    - First, to generate the **Zone Signing Key** (ZSK) that is used to sign individual records (make sure to use your own zone name):

```bash
dnssec-keygen -a RSASHA256 -b 1024 <yourzone>
```

   - And to generate the **Key Signing Key** (KSK) that is used to create an RRSIG for your DNSKEY (the public half of the ZSK):

```bash
dnssec-keygen -a RSASHA256 -b 2048 -f KSK <yourzone>
```

   - Note that the algorithm and number of bytes used here are current standards, but may change over time.
   - Change the permissions on those files so that only root and the named service can read them.
5. There are three parameters for bind that need to be set in order to sign your zones. The first two could be set in the options statement, but the third is only acceptable in a zone statement. Our machines only have two zone statements (the forward and reverse lookups of your domain), so it won’t make a significant difference where we place them. If your server hosted multiple domains, the placement of these parameters would be something to consider:
    - Add the following lines to your two zones (again replacing <yourdomain\> with the name of your domain):

```bash
inline-signing yes;
auto-dnssec maintain;
key-directory “/etc/named/<yourdomain>-keys”;
```

   - Double check that the value you put in the key-directory parameter matches the directory you created your key files in.
6. Make sure the dnssec-enable parameter in /etc/named.conf is set to yes so that your server will provide the extra DNSSEC records if a client requests them.
    - This is the default value, so unless you took it out, it should already be there.
    - Note that this parameter is different from the dnssec-validation parameter which only controls whether or not your server will request those records from other servers when a client asks for them.
7. Restart the named service. If you have dynamic DNS set up from the earlier labs, you can use named-journalprint to view the journal files for your zones in order to see the new records.
8. In order to confirm that your server will provide the extra records when requested, use the dig command to obtain a zone transfer (including the DNSSEC records) from your server:
    - Making sure to replace <yourzone\> with the name of your zone, and <ip-of-server\> with the ip address of your server.

```bash
dig AXFR <yourzone> @<ip-of-server>
```

9. Repeat the steps from this investigation so you have a signed copy of your reverse zone too.
10. Normally, there would be a few more steps here to create an encrypted copy of your ZSK to provide to your parent zone as a DS record, but we will not be configuring that in this lab.
    - Note that this means responses your server provides will not be ‘authenticated data’, and will not have the ad flag.
    - You will be performing this final step in the next assignment.
   
## Completing the Lab

Your DNS server is now capable of performing recursive queries using DNSSEC when client machines request it. It has also been configured to provide the extra DNSSEC records when clients request them. Note that it is not yet truly providing DNSSEC answers, as it is not being authenticated through the domain above yours.

Follow the instructions on blackboard to submit the lab.
