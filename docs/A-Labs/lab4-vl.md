---
id: lab4-vl
title: Lab 4 Alternate
sidebar_position: 9
description: Lab 4 Alternate
---

# Lab 4 - Using Virtual Lab

## Objectives

- Design the algorithm for setup and configure a Primary DNS server with dynamic zone based on [Lab 4 - Dynamic DNS lab](./lab4-home.md)
- Create remote administration script(s) using bash/ansible based on your algorithm
- Deploy the remote administration scripts using bash/ansible on your Seneca VM2 in the OPS535 Virtual Lab

## Pre-Requisites

- Has access to Seneca VPN, and matrix.senecacollege.ca
- Complete the collection of baseline information on your assigned VMs (VM1, VM2, VM3, and VM4)
- Complete the [Lab 4 - Dynamic DNS lab](./lab4-home.md) on your home VMs
- Setup and configure private network for your assigned VMs in the OPS535 Virtual Lab
- Configure VM1 as your control workstation for performing remote administration tasks on VM\[2-4\]

## Investigation 1: Algorithm for setup and configure an Primary DNS server with Dynamic Zone

Based on the steps you performed on [Lab 4 - Dynamic DNS lab](./lab4-home.md), design and create an appropriate algorithm to setup and configure a Primary DNS server with Dynamic zone on your Seneca VM2 remotely from your control VM (Seneca VM1). You can follow the format used in Investigate 3, Task 1 in Lab 2 - NFS Lab on VL (ADD LINK)

- Name your algorithm as "lab4-ddns-algorithm.txt"
- Save your algorithm file to ~student/ops535/lab4/lab4-ddns-algorithm.txt

## Investigation 2: Scripts for remote deployment of Primary DNS server with Dynamic Zone

### Task 1

Based on your algorithm created for investigation 1, write a bash script named "lab4-ddns-setup.bash" to implement all the steps on VM2 (pri-dns)

- save the script to ~student/ops535/lab4/scripts/lab4-ddns-setup.bash

### Task 2

Create an ansible playbook named "config-ddns.yml" to perform the same tasks as mentioned in task 1.

- save the ansible playbook to ~student/ops535/lab4/playbook/config-ddns.yml

### Task 3

Run the playbook create in Task 2 above, and capture the output to a file named lab4_inv2_task3.txt in the directory ~student/ops535/lab3/log/

## Completing the Lab

Follow the instructions on blackboard to submit the lab by the due date.
