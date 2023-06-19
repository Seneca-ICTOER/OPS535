---
id: lab2-stage2
title: Lab 2 Part 2
sidebar_position: 5
description: Lab 2 Stage 2
---

# Lab 2 - Stage 2 (using Virtual Lab)

## Objectives

- Setup and configure private network for your assigned VMs in the OPS535 Virtual Lab for this lab, future labs, and assignments
- Configure VM1 as your control workstation for performing remote administration tasks on VM\[2-4\]
- Create and deploy remote administration scripts using bash/ansible

## Pre-Requisites

- Has access to Seneca VPN, and matrix.senecacollege.ca
- Complete the collection of baseline information on your assigned VMs (VM1, VM2, VM3, and VM4)
- Complete the [Lab 2 - NFS lab](./lab2-stage1.md) on your home VMs

## Investigation 1: VMs Configuration

### Background

Make sure you have ssh access to your assigned VMs from matrix.senecacollege.ca using the port numbers, user name, and the corresponding password given on Blackboard via the router ops535.myvmlab.senecacollege.ca. The access router (ops535.myvmlab.senecacollege) maps the ports (9xxy) to the corresponding internal IP addresses (172.20.xx.y) of your VMs. Note that 'xx' is you assigned network number, and 'y' is the VM number. The following are the port mapping and the network configuration you should have on each VM. The values shown in the table are for the student with network number '14':

| VM	| Port	| ens192 ip |	ens224 ip |	ens256 ip |	hostname |
| --- | --- | --- | --- | --- | --- |
| VM y |	9xxy |	172.20.xx.y |	192.168.xx.y |	---- |	---- |
| VM 1 |	9141 |	172.20.14.1 |	192.168.14.1 |	do-not-use | router |
| VM 2 |	9142 |	172.20.14.2 |	192.168.14.2 |	none |	pri-dns |
| VM 3 |	9143 |	172.20.14.3 |	192.168.14.3 |	none |	co-nfs |
| VM 4 |	9144 |	172.20.14.4 |	192.168.14.4 |	none |	rns-ldap |

### Task 1 : setup and configure VM1

- ssh to your VM1 from matrix

```bash
ssh -p 9141 student@ops535.myvmlab.senecacollege.ca
```

- confirm the IP address on the network device 'ens192'.
- run the 'nmtui' command under sudo and configure the network device **ens224** with the appropriate IP address (192.168.xx.1) as shown.
- run the 'nmtui' command to set the hostname
- install the 'epel-release' package
- install the 'ansible' package
- install the 'git' package
- install the 'wget' package
- run the command to update all the packages installed on the system

### Task 2: setup and configure VM2 - VM4

- ssh from matrix to your VM2 - VM4, replace \[2-4\] with 2, 3, or 4:

```bash
ssh -p 914[2-4] student@ops435.myvmlab.senecacollege.ca
```

- confirm the IP address on the network device 'ens192'
- run the 'nmtui' command under sudo and configure the network device **ens224** with the approprate IP address as shown in the table above.
- run the 'nmtui' command to set the hostname

## Investigation 2: Control Workstation Configuration

### Background

You will configure VM1 as the control workstation for performing remote administration task on your VM2 - VM4. The prefer method is to configure your control workstation to use ssh key-based authentication when connecting to your VM2 - VM4 remotely. If you are planning in using ansible to perform remote configuration, you need to set up the inventory file for ansible.

### Task 1 : Configure ssh key-based authentication on VM1

- login to your VM 1 as 'student'.
- add the following IP address to hostname/FQDN mapping to the /etc/hosts file:

```bash
192.168.xx.1 router router.<your dns domain>
192.168.xx.2 pri-dns pri-dns.<your dns domain>
192.168.xx.3 co-nfs co-nfs.<your dns domain>
192.168.xx.4 rns-ldap rns-ldap.<your dns domain>
```

- run the 'ssh-keygen' to generate the public-private key pair for key-based authentication
- run the following commands to copy to public key to VM2 - VM4.
   - for VM2

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub student@pri-dns
```

   - for VM3

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub student@co-rns
```

   - for VM4

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub student@rns-ldap
```

- verify and confirm that you can ssh to your VM2, VM3, and VM4 as 'student' without password.

### Task 2: Configure ansible's inventory file

- login to your VM1 (route) as 'student'
- Using the following as a template, add your VM2 to VM3 information to the end of /etc/ansible/hosts:

```bash
[your dns domain]
pri-dns.<your dns domain> ansible_host=192.168.xx.2
co-nfs.<your dns domain> ansible_host=192.168.xx.3
rns-ldap.<your dns domain> ansible_host=192.168.xx.4
```

- The following is an example for student with domain name stud14.ops (please do not include '.ops' in the group name) and network number 14:

```bash
[stud14]
pri-dns.stud14.ops ansible_host=192.168.14.2
co-nfs.stud14.ops ansible_host=192.168.14.3
rns-ldap.stud14.ops ansible_host=192.168.14.4
```

- create the directory ops535 and labs subdirectory under user student's home directory in VM1

```bash
student
└── ops535
    ├── a1
    ├── lab2
    ├── lab3
    └── lab4
```

- change the working directory to ~student/ops535/lab2, and run the following commands to gather useful variables about remote hosts that can be used in ansible playbooks:
    - for remote host: vm2

```bash
ansible pri-dns.<your dns domain> -m setup > pri-dns-setup.txt
```

   - for remote host: vm3

```bash
ansible co-nfs.<your dns domain> -m setup > co-nfs-setup.txt
```

   - for remote host: vm4

```bash
ansible rns-ldap.<your dns domain> -m setup > rns-ldap-setup.txt
```

## Investigation 3: Scripts for remote administrations

### Task 1

Based on [Lab 2 - NFS lab](./lab2-stage1.md), write a bash script named "lab2-nfs-setup.bash" to perform the following tasks on VM3 (co-rns)

- move the network interface ens224 from firewalld's public zone to internal zone
- install the nfs-utils rpm package if it has not already been installed
- create an nfs share directory named '/nfs-pub' with mode '1777'
- update the /etc/exports as required in [Lab 2 - NFS lab](./lab2-stage1.md)
- enable nfs-server service if has not already been enabled
- start nfs-server service if has not already been started
- update firewalld's internal zone to allow nfs service
- update firewalld's internal zone to allow nfs3 server service
- update firewalld's internal zone to allow rpc-bind service
- save the script to ~student/ops535/lab2/scripts/lab2-nfs-setup.bash

### Task 2

Create an ansible playbook named "config-nfs.yml" to perform the same tasks as mentioned in task 1.

- save the ansible playbook to ~student/ops535/lab2/playbook/config-nfs.yml
- Run the playbook and capture the output to a file named lab2_inv3_task2.txt in the directory ~student/ops535/lab2/log/

## Completing the Lab

Follow the instructions on blackboard to submit the lab by the due date.
