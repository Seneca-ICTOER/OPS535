---
id: sample-ansible-hosts
title: Sample Ansible Hosts
sidebar_position: 18
description: Sample Ansible Hosts
---

# Sample Ansible Hosts

## Sample Ansible Inventory File

```text
# This is the default ansible 'hosts' file.
#
# It should live in /etc/ansible/hosts
#
#   - Comments begin with the '#' character
#   - Blank lines are ignored
#   - Groups of hosts are delimited by [header] elements
#   - You can enter hostnames or ip addresses
#   - A hostname/ip can be a member of multiple groups

# Ex 1: Ungrouped hosts, specify before any group headers.

## green.example.com
## blue.example.com
## 192.168.100.1
## 192.168.100.10

# Ex 2: A collection of hosts belonging to the 'webservers' group

## [webservers]
## alpha.example.org
## beta.example.org
## 192.168.1.100
## 192.168.1.110

# If you have multiple hosts following a pattern you can specify
# them like this:

## www[001:006].example.com

# Ex 3: A collection of database servers in the 'dbservers' group

## [dbservers]
## 
## db01.intranet.mydomain.net
## db02.intranet.mydomain.net
## 10.25.1.56
## 10.25.1.57

# Here's another example of host ranges, this time there are no
# leading 0s:

## db-[99:101]-node.example.com
```

## Sample template for Ansible hosts file for Lab 9

Assuming Elisa, Miriam, Eric, Stephen, and Joseph are five of the students in the OPS435 class in different sections and each one of them was assign a VM in myvmlab with the following information:

- Section A
  - Miriam: port 7694 on myvmlab.senecacollege.ca
  - ELisa: port 7697 on myvmlab.senecacollege.ca
- Section B
  - Eric: port 7811 on myvmlab.senecacollege.ca
  - Stephen:port 7850 on myvmlab.senecacollege.ca
  - Joseph: port 7874 on myvmlab.senecacollege.ca

The following Ansible inventory file simple called "hosts" can be created and used for the "ansible" command by a regular user on matrix. You can put this inventory file in ~/ops435/lab9 directory.

```text
# This is a template for creating an inventory for the ansible or
# ansible-playbook command in matrix. You need to add your VM
# information under the appropriate section: [ops435a], [ops435b], etc.

instructor ansible_host=myvmlab.senecacollege.ca ansible_port=7001

[ops435a]
miriam    ansible_host=myvmlab.senecacollege.ca ansible_port=7694
elisa     ansible_host=myvmlab.senecacollege.ca ansible_port=7697

[ops435b]
eric      ansible_host=myvmlab.senecacollege.ca ansible_port=7811
stephen   ansible_host=myvmlab.senecacollege.ca ansible_port=7850
joseph    ansible_host=myvmlab.senecacollege.ca ansible_port=7874
```
