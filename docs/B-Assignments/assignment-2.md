---
id: assignment-2
title: Assignment 2
sidebar_position: 2
description: Assignment 2
---

# Assignment 2

## Due Date

**TBA**

- Weight: This assignment worth 15% of your final grade.
- **Important**: You must join and present in the online assessment meeting on the due date to demonstration the required task on your systems (VMs) in order to have your assignment graded.

## Specification

### Required VMs

The four VMs assigned to you in the OPS535 Virtual Lab.

- VM1 - config two of the three virtual network interfaces the same way as you did for assignment 1 plus the appropriate routing and firewall rules:
    - ens192, with IP address assigned by the lab DHCP server (172.20.v.1). DO NOT change the network configuration on this network interface.
    - ens224, for connecting to the other three VMs in a private network. Manually assign a private address 192.168.v.1 for this network interface.
    - Add routes to route traffic to other students' private network 192.168.x.0/24.
- VM2, VM3, and VM4 - each has two virtual network interfaces connected to two different virtual networks, they are
    - ens192, with IP address assigned by the lab DHCP server (172.20.v.2, 172.20.v.3, 172.20.v.4) 172.for connecting to the lab's public network and the Internet.
    - ens224, connect to the other three VMs. Manually assign 192.168.v.2-4 to VM2, VM3, and VM4.
    - Add routes to route traffic to 192.168.0.0/16 network via your VM1 IP 192.168.v.1

### Hostname, Private IP addresses for the ens224 NIC on each VM

- VM1 - 192.168.v.1, router.<yourdomain\>.ops
- VM2 - 192.168.v.2, pri-dns.<yourdomain\>.ops
- VM3 - 192.168.v.3, co-nfs.<yourdomain\>.ops
- VM4 - 192.168.v.4, rns-ldap.<yourdomain\>.ops

### DNS Servers Setup

Based on what you have done for assignment 1, you should have the following DNS servers:

- VM2 - primary DNS server for your domain's forward and reverse lookup zone
- VM3 - caching only DNS server that uses the root name server(s) for our OPS535 Virtual Lab environment
- VM4 - root name server that provides DNS name delegation of each student's registered domain to their primary DNS servers.

### Basic Services

Install and configure an Internet email system for your assigned Domain using the four Virtual Machines assigned to your in the OPS535 Virtual Lab. Your Internet email system must provide the deliverables listed below.

**Assignment Deliverables**

- A SMTP email server (running postfix) that is capable of receiving and sending emails
    - Users in your domain must be able to **send** emails to users in the same domain and users in other students' domains in the class.
    - Users in your domain must be able to **receive** emails from other email users (both in your domain and from other domains).
- You email server must be configured to check the SPF (sender policy framework) of other domains for incoming email and reject emails that are violating the sender policy.
- Configure your pri-dns server to implement and provide the SPF protection for your assignment domain.
- DNSSEC Configuration (Bonus 10%)
    - Configure your pri-dns server to implement and provide the DNSSEC records for your assignment domain.
    - Provide the administrator for your top domain (The root name server operator(s)) with a copy of the DS key for your domain. If you have not already done so, include the glue record as well.
    - Configure a DNSSEC Trust Anchor so that your co-nfs server considers your primary DNS server (the one with the <yourname\>.ops zone) to already be authenticated.
 
### Supporting Services

You need the following services and network infrastructure to support your Internet Email System (some of which should have been configured in assignment 1):

- pri-dns (VM2) must be the primary DNS name server for your domain updated with the proper MX record(s), SPF record(s), A record(s), and PTR record(s). It must be queriable by any machines in the 192.168.0.0/16 network.
    - Provide the root name server operator(s) of the <yourname>.ops domain with glue records for your domain.
- co-nfs (VM3) must be the caching DNS server, accessible only to machines in your networks, that will start its query with the root name server(s) in the virtual lab (e.g. rns-ldap.rdu6.ops (192.168.6.4), rns-ldap.wsu15.ops (192.168.35.4)), and then the appropriate primary DNS server.
- if you are one of the root name server operators, your rns-ldap (VM4) must provide authoritative responses to any valid DNS queries.
    - All authorized root name servers in the virtual lab must response to queries by any network devices from the 192.168.0.0/16 network.
    - It must have a copy of the root zone data of the virtual lab.

### Monitoring an Logging Services

**Email activities**

Two domains may send out a lot of emails to your users and you need to monitor the network traffic to and from those two domains' SMTP servers. Use ip accounting to keep track or log those activities. You need to be able to produce the following type of reports:

- total number of packets and total number of bytes received in a given period of time from a given SMTP server.
- total number of packets and total number of bytes sent in a given period of time to a given SMTP server.
- total number of packets and total number of bytes received in a given period of time from all the SMTP servers in the 192.168.0.0/16 network.
- total number of packets and total number of bytes sent in a given period of time to all the SMTP servers in the 192.168.0.0/16 network.

**DNS queries activities**

You also want to monitor the DNS queries your primary DNS server received in a given period of time. Use ip accounting to keep track or log those DNS queries activities. You need to be able to produce the following type of reports:

- total number of packets and total number of bytes received in a given period of time to your primary DNS server.

## Changes Log

Due to the dynamic and volatile nature of the IT industrial, this assignment specification may be changed in a daily basis to reflect the changing environment. All changes and modifications to this assignment requirement will be posted here. This requirement document will be frozen at least three days before the due date (i.e. April 9, 2021).

- Released on March 24, 2021.

## Evaluation and Grading

### Tasks to be performed during online assessment

On the due date you will be tasked to:

1. Add two new email users to your domain. Name of the new users will be given during the online assessment meeting.
2. send an email by one of the new email users to the other new email user in your own domain.
3. send an email by one of the new email users to a specific user of other domain.
4. receive an email from a specific user(s) in other domain and send a reply to that email.
5. receive the reply email from the user in another domain who you have sent an email to previously.
6. add a A resource record to your primary DNS server with given data.
7. add a PTR resource record to your primary DNS server with given data.
8. add a resource record to authorize a specific host to send email on behalf of your domain.
9. query one or more resource records (A, MX, NS, PTR, SOA, SPF) record of other domains.
10. query one or more resource records of other domain with dnssec information included.
11. produce the network activities report for your SMTP server and primary DNS server.

## Completing the Assignment

- On the assignment due date on Apr 12, 2021, please attend the online assessment meeting to complete the final task and demonstrate the assignment deliverables as prescribed.
- A script will be posted to blackboard for you to download to your VMs to capture your configuration and logs. You will run this script on your VMs and upload the output to blackboard after the online assessment is over.

If you have any questions or need any clarification, please email your instructor at least one week before the posted due date.
