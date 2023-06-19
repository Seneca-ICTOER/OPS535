---
id: assignment1
title: Assignment 1
sidebar_position: 1
description: Assignment 1
---

# Assignment 1

## Due Date

Sunday, Feb 27, 2022

- 15% of your final grade.

## Required VMs

The four VMs assigned to you in the OPS535 Virtual Lab. Please ask your professor for information on how to access those VMs. The following are the general description for those four VMs:

- VM1 - has three virtual network interfaces connected to three different virtual networks, they are
    - ens192, with IP address assigned by the lab DHCP server (172.20.v.1) for connecting to the lab's public network and the Internet. DO NOT change the network configuration on this network interface.
    - ens224, for connecting to the other three VMs in a private network. You will assign a private address 192.168.v.1 for this network interface.
    - ens256, do not use for this assignment.
- VM2, VM3, and VM4 - each has two virtual network interfaces connected to two different virtual networks, they are
    - ens192, with IP address assigned by the lab DHCP server (172.20.v.2, 172.20.v.3, 172.20.v.4) 172.for connecting to the lab's public network and the Internet.
    - ens224, connect to the other three VMs. You will assign 192.168.v.2-4 to VM2, VM3, and VM4.

## Hostname and Private IP addresses for the ens224 NIC

- VM1 - 192.168.v.1, router.<yourdomain\>.ops
- VM2 - 192.168.v.2, pri-dns.<yourdomain\>.ops
- VM3 - 192.168.v.3, co-nfs.<yourdomain\>.ops
- VM4 - 192.168.v.4, rns-ldap.<yourdomain\>.ops

Please note that the value of "v" given about may not have the same value as your assigned network number on Blackboard. Please replace "v" by the value of the third octet of the IP address assigned to your ens192 network interface by the lab's DHCP server.

## Required Services and roles on each VM

### DNS servers

You need three DNS servers for this assignment:

- Primary DNS server: running on VM2, pri-dns.<yourdomain\>.ops, which is authoritative for your domain. It will be non-recursive, and must allow anyone to request answers to DNS queries of your domain.
- Caching-only DNS server: running on VM3, co-nfs.<yourdomain\>.ops, which allows DNS queries only from network devices in your own private network. It will perform recursive DNS queries to the appropriate DNS servers or on its cache for answers.
- Root Name server: running on VM4, rns-ldap.<yourdomain\>.ops, which is authoritative for the root zone only. It will answer queries from anyone to request DNS queries for the entire DNS namespace. You need to collaborate other root name server players in the virtual lab environment. [You should register and/or check your network and domain information here](https://wiki.cdot.senecacollege.ca/wiki/Domainreg)

### NFS Server - on VM co-nfs

- This VM will centrally host all of your **new network users’** home directories, allowing remote access through NFS version 4.
- Use the appropriate export option(s) (pay particular attention to root_squash and no_root_squash) when exporting network users' home directories.
- Superuser on the other VMs should not have root privilege on the exported directory, with the exception of the VM that is running the LDAP server.
- VMs outside your private network must not be able to contact this service. Every VM in your network (including those that have not yet been created) must have access to this service.
- Network users should not have read or write access to other network users' home directories.

### LDAP Server - on VM rns-ldap

- LDAP Base Name – <yourdomain\>.ops, where <yourdomain\> is your assigned domain.
- This VM will act as an LDAPs server and provide user and group information to your other VMs.
- Other students VMs in the virtual lab must not be able to contact this service.

### Network, firewall, and SELinux

- All your VMs must be accessible to each other via the private network.
- Do not allow DNS queries from any VMs in your network to any DNS servers in the lab except your caching-only DNS server.
- SELinux must be turned on and run in enforcing mode on all of your VMs. You may need to configure the SELinux booleans accordingly.
- Your VM1 must use iptables.service and VM2 to VM4 must use firewalld.service as their firewall. For firewalld.service, the ens192 interface should be set up in the 'public' zone and the ens224 interface should be set up in the ‘work’ zone. In addition to ssh traffic, your firewalls should only allow the traffic necessary to fulfil the roles described above.

### Method of implementation

- Do not configure the required services manually with CLI, all the configuration must be done by using any one of the following automation framework:
    - customized bash script with ssh, or
    - fabric tasks, or
    - ansible playbook.

## Changes Log

Due to the dynamic and volatile nature of the IT industrial, this assignment specification may be changed in a daily basis to reflect the changing environment. All changes and modifications to this assignment requirement will be posted here. This requirement document will be frozen at least three days before the due date.

- Released on June 4, 2021.

## Grading

Shortly before the due date I will post a rubric on blackboard. Use

- script provided on Blackboard to gather information from your VMs. Upload the required files to blackboard with your automation scripts/files.
- run the test script from any machines to scan and test all the required services you should have provided.
- perform a disaster recovery test - one of your VMs will be reset to its baseline condition/configuration and you have 30 minutes to apply your automation script(s) to bring it back to the level this assignment required.

## Questions

If you have any questions about this assignment, please talk to your professor before the due date.
