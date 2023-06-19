---
id: lab4-home
title: Lab 4
sidebar_position: 8
description: Lab 4
---

# Lab 4 - At Home

## Resources

## Purpose

In this lab, you are going to build a primary name server for your assigned DNS domain using the BIND package on your VM1. A primary name server does not depend upon having access to other name servers in order to function. Once you have your primary name server running for your forward and reverse zones, you will use command line DNS client tool(s) to test the correctness of the query responses from your Primary DNS server. Then you will configure both zones to support dynamic updates. Dynamic DNS accepts updates from the command line utility “nsupdate”. This lab does not configure the DNS server to use secure channel for the updates.

## Pre-Requisites

The pre-lab must be complete so that your virtual machines share access to a private network. Lab 1 must also be complete so that your machines have access to a network that will provide them access to the outside world (e.g. to install packages).

## Investigation 1: Primary Name Server

1. Use the skills you learned in previous courses to make your vm1 act as the primary name server for your assigned domain.
    - The SOA record should contain the FQDN of your primary DNS server and the email address of the person responsible for managing your DNS domain name space.
    - The NS record(s) should contain the FQDN for your authoritative DNS server(s).
    - Each A record (address record) should contain the FQDN (or host name) of each VM and its corresponding IP address.
    - Each PTR record should contain the FQDN and the corresponding IP address in reverse dotted-decimal notation format (e.g. use 53.99.168.192.in-addr.arpa. for IP address 192.168.99.53)
    - The file for your forward zone should be my-zone.txt, and the file for the reverse zone should be rev-zone.txt.
    - Make sure you configure the following major options:
        
        - listen-on: port 53 and all network interface
        - directory: /var/named
        - allow-query: any
        - recursion: yes, but only for your machines and the recursive query should be sent to your host machine.
        - dnssec-enable: yes
        - dnssec-validation: no
        - dnssec-lookaside: auto
    - Ensure you service is running, will continue to run past boot, and is accessible by the other machines in your network.
2. Modify your other lab VMs so that they use your VM1 as the first DNS server to contact, and your host as the second (in case your VM1 fails).
3. Run the appropriate "tcpdump" command on your DNS server to capture all DNS query and response packets to a file named **dns-packet** in the /root directory. While tcpdump is running on your DNS server, repeat **all** the DNS queries (SOA, NS, A, PTR) on your host.
    - Read the tcpdump file with the "-r" flag to verify that the targeted packets were captured to the file. It should contain queries and answers for each of the records in your domain.

## Investigation 2: Dynamic DNS Updates

Perform the following steps on vm1 after you have confirmed that it is providing correct forward and reverse lookups of all machines in your domain.

1. Add the following line to your forward and reverse zone entries

```bash
allow-update { localhost; };
```

2. Verify the user owner, group owner, permissions, and SELinux contexts of your zone files:
    - The user and group ownership should be set to named.
    - The user account for named must be able to write to both files.
    - The user account for named must be able to write to /var/named.
    - The SELinux context type for both zone files should be “named_zone_t”. If it is not, you can fix it with the command “chcon -t named_zone_t <file\>”.
    - The SELinux boolean that allows named to write to the /var/named directory (**named_write_master_zones**) must be set to **on**.
    - Note that in recent releases/updates of Centos these SELinux settings have become the default, so you should not have to change them, but this may not be the case if you are ever working on an older system.

  3. Restart named. If it does not complain, continue to the next step, otherwise check the system log file **/var/log/messages** for error messages. In addition to the debugging messages you may find in the system log file, you can also use the two utilities **named-checkconf** and **named-checkzone** to check for typos or syntax errors in named.conf or your zone files. Please consult the man page for **named-checkconf** and **named-checkzone** for details.
  4. Perform a dynamic update using nsupdate: Run the following command(s) on your primary DNS server in order to dynamically add a new A record. Note that you will have to fill in information for your own domain.

```bash
[root@localhost named]# nsupdate -d
> server 127.0.0.1
> update add c7host.pcallagh.ops 300 A 172.16.182.1
> send
Reply from SOA query:
;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN, id: 42401
;; flags: qr aa; QUESTION: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 0
;; QUESTION SECTION:
;c7host.pcallagh.ops. IN SOA

;; AUTHORITY SECTION:
ddns.net. 0 IN SOA vm1.pcallagh.ops. root.pcallagh.ops. 20151111 3600 900 259200 600

Found zone name: ddns.net
The master is: vm1.pcallagh.ops
Sending update to 127.0.0.1#53
Outgoing update query:
;; ->>HEADER<<- opcode: UPDATE, status: NOERROR, id: 25883
;; flags:; ZONE: 1, PREREQ: 0, UPDATE: 1, ADDITIONAL: 0
;; UPDATE SECTION:
c7host.pcallagh.ops. 300 IN A 172.16.99.10

Reply from update query:
;; ->>HEADER<<- opcode: UPDATE, status: NOERROR, id: 25883
;; flags: qr; ZONE: 1, PREREQ: 0, UPDATE: 0, ADDITIONAL: 0
;; ZONE SECTION:
ddns.net. IN SOA
```

   - The above “Reply from update query” section indicates that the update was successful with a “NOERROR” status.
   - All changes made to a zone using dynamic update are stored in the zone's journal file. In this case, the file will be in the /var/named directory and is called “<zonefile\>.jnl”. Assuming the permissions and SELinux settings are correct, this file is automatically created by the DNS server when the first dynamic update is received. Please note that the name of the journal file is formed by appending the extension “.jnl” to the name of the corresponding zone file. The journal file is in a binary format and can not be edited using a text editor.
   - The server will occasionally write the updates found in the journal file to its zone file or when a server is restarted after a shutdown.
   - Examine your /var/named directory to make sure the journal file got created. Use the **file** command to check the content type.
   - Although you will not be able to view the contents of this file using tools like **cat**, the **named-journalprint** command from the **bind** package can be used to print the contents of journal files. Run it and you should see output similar to the following (though again, with details from your own domain):

```bash
[root@localhost named]# named-journalprint my-zone.txt.jnl
del pcallagh.ops. 300 IN SOA vm1.pcallagh.ops. root.pcallagh.ops. 20151111 3600 900 259200 600
add ddns.net. 300 IN SOA vm1.pcallagh.ops. root.pcallagh.ops. 20151112 3600 900 259200 600
add c7host.pcallagh.ops. 300 IN A 172.16.182.1
```

5. Use the nsupdate command to add an incorrect record to your zone (e.g. add a PTR record giving your host the wrong address, using a final octet of 100 instead of 1). Query your server to double check that the mistaken record has been added.
6. Use nsupdate to delete a record from your zones. Inevitably, you will need to delete information from a zone at some point. In the previous step, we deliberately added incorrect information in order to delete it in this step. If you do not have an incorrect record, go back and add one before continuing. First we will try to delete a record that doesn’t exist.:

```bash
[root@localhost named]# nsupdate -d
> server 127.0.0.1
> update delete 10.182.16.172.in-addr.arpa.
> send
Reply from SOA query:
;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN, id: 17329
;; flags: qr aa; QUESTION: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 0
;; QUESTION SECTION:
10.182.16.172.in-addr.arpa. IN SOA

;; AUTHORITY SECTION:
16.172.in-addr.arpa. 0 IN SOA vm1.pcallagh.ops. root.pcallagh.ops. 20151112 3600 900 259200 600

Found zone name: 16.172.in-addr.arpa
The master is: vm1.pcallagh.ops
Sending update to 127.0.0.1#53
Outgoing update query:
;; ->>HEADER<<- opcode: UPDATE, status: NOERROR, id: 44360
;; flags:; ZONE: 1, PREREQ: 0, UPDATE: 1, ADDITIONAL: 0
;; UPDATE SECTION:
10.182.16.172.in-addr.arpa. 0 ANY ANY

Reply from update query:
;; ->>HEADER<<- opcode: UPDATE, status: NOERROR, id: 44360
;; flags: qr; ZONE: 1, PREREQ: 0, UPDATE: 0, ADDITIONAL: 0
;; ZONE SECTION:16.172.in-addr.arpa. IN SOA
```

   - Notice that there is no complaint from the server when trying to delete a record that doesn't exist. Examine your journal file to see if it recorded the attempt.
   - Now use **nsupdate** to delete the bad record from the earlier step, then examine your journal file to see if it did get deleted.

## Completing the Lab

You should now have a server providing DNS services for your network. Many other services, and most of your users, will depend on this for translation between hostnames and addresses. You have also configured the service to allow for dynamic updates, though they are limited to the local machine only. In the extension to this lab you may continue this configuration to allow such updates to be made from another machine, though this will require some extra security setup to ensure that only approved machines may make such updates.

You should be able to interpret journal files in order to understand the changes that are being made to a zone.


Follow the instructions on blackboard to submit the lab.

## Exploration Questions

1. Which rpm package provides the “nsupdate” command line utility?
2. What does the “-d” option do for the “nsupdate” command?
3. Which RFC document defines the Dynamic DNS update protocol?
4. Could nsupdate send a dynamic DNS update to a DNS server using a non-standard port? (port 53 is DNS standard port number.)
5. What are the steps using nsupdate to add an “A” record for a host with FQDN “linux.ddns.net” IP address 172.16.101.90 with a TTL of 60 seconds?
6. What are the steps using nsupdate to add a 'PTR” record for the host in question 5?
7. What are the steps using nsupdate to add a “CNAME” record for “gnu.ddns.net” that points to “linux.ddns.net”?
8. What are the steps using nsupdate to delete the “A” record created in question 5?
9. What are the steps using nsupdate to delete the “PTR” record created in question 6?
10. What are the steps using nsupdate to delete the “CNAME” record created in question 7?
11. What would happen if you try to delete a non-existence resource record (PTR, A, CNAME, MX, etc) from a dynamic DNS zone using nsupdate?
12. What would happen if you try to add a duplicate resource record to a dynamic zone using nsupdate?
