---
id: lab3-stage2
title: Lab 3 Part 2
sidebar_position: 7
description: Lab 3 Stage 2
---

# Lab 3 - Stage 2 (using Virtual Lab)

## Objectives

- Design the algorithm for setup and configure an OpenLDAP server based on [Lab 3 - Stage 1 LDAP lab](./lab3-stage1.md)
- Create remote administration script(s) using bash/ansible based on your algorithm
- Deploy the remote administration scripts using bash/ansible on your Seneca VM4 in the OPS535 Virtual Lab

## Pre-Requisites

- Has access to Seneca VPN, and matrix.senecacollege.ca
- Complete the collection of baseline information on your assigned VMs (VM1, VM2, VM3, and VM4)
- Complete the [Lab 3 - Stage 1 LDAP lab](./lab3-stage1.md) on your home VMs
- Setup and configure private network for your assigned VMs in the OPS535 Virtual Lab
- Configure VM1 as your control workstation for performing remote administration tasks on VM\[2-4\]

## Investigation 1: Algorithm for setup and configure an OpenLDAP server

Based on the steps you performed on [Lab 3 - Stage 1 LDAP lab](./lab3-stage1.md), design and create an appropriate algorithm to setup and configure an OpenLDAP server on your Seneca VM4 remotely from your control VM (Seneca VM1). You can follow the format used in Investigate 3, Task 1 in Lab 2 - NFS Lab on VL (ADD LINK)

- Name your algorithm as "lab3-ldap-algorithm.txt"
- Save your algorithm file to ~student/ops535/lab3/lab3-ldap-algorithm.txt

## Investigation 2: Scripts for remote deployment of an OpenLDAP server

### Task 1

Based on your algorithm created for investigation 1, write a bash script named "lab3-ldap-setup.bash" to implement all the steps on VM4 (co-ldap)

- save the script to ~student/ops535/lab3/scripts/lab3-ldap-setup.bash

### Task 2

Create an ansible playbook named "config-ldap.yml" to perform the same tasks as mentioned in task 1.

- save the ansible playbook to ~student/ops535/lab3/playbook/config-ldap.yml

### Task 3

Run the playbook create in Task 2 above, and capture the output to a file named lab3_inv2_task3.txt in the directory ~student/ops535/lab3/log/

## Completing the Lab

Follow the instructions on blackboard to submit the lab by the due date.
