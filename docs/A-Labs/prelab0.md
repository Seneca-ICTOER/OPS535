---
id: prelab0
title: Pre Lab 0
sidebar_position: 1
description: Prelab 0
---

# Pre-Lab 0: Host installation and virtual network setup

## Overview

This lab will guide you to set up a lab environment on your local computer hardware. This local resources (host, VMs, and network) will be used as the staging environment for the labs and assignments of the course. You will note that it does not provide detail instructions on how to go about performing these tasks, as they are all things you should already know from previous courses. If you need to refresh your memory, you are encouraged to look back at the OPS235 and OPS335 notes.

**Pre-Requisites**

None.This will start with a brand-new installation of CentOS on your drive. You may not re-use an installation from previous semesters.

**Materials**

- One Solid State Drive (SSD), minimum capacity 240GB, in a USB3 Enclosure.
- One installation medium. Either a DVD or USB flash drive configured as an installation disc.

## Investigation 1: Host Installation

Install Centos on your host machine following the guidelines below:

- Networking Should be on.
- Set the hostname of the machine to be host.<domainname\>.ops. Check blackboard for your assigned domain name.
- Set the timezone to Americas/Toronto
- Select Server with GUI as the installation type.
- The partition setup will be similar to what you had in previous OPS courses.
    - Delete any old partitions on the drive.
    - Provide a separate mount point for /var/lib/libvirt/images with at least 100GiB.
- Set a good root password. No, not ‘P@ssw0rd’.
- Create a non-privileged user account using your MySeneca ID.
    - If your MySeneca ID is long enough that typing it would be irritating to do on a regular basis you may use an alternate name, but you must clear it with me first.

**On First Boot**

Make sure your machine meets the following conditions:

- Your NIC is set to automatically turn on when the machine does.
- SELinux is set to enforcing.
- The machine must be fully updated.
- Do install iptables-services on your CentOS virtualization host, but do not install iptables-services on guest VMs. In this course we will use both iptables and firewalld for our firewall.
- Install libvirt and virt-manager. Set the virtualization service to start automatically when the machine boots.
- Reboot your machine

## Investigation 2: Virtual Network and Machine Installation

- Leave the default virtual network in place for now. We will replace it in a later lab.
- Create a second virtual network called private.
    - Address: 192.168.\[x\].0/24, where x is the network number NN assigned to you on blackboard. E.g. if your network number is 9, your private network will be 192.168.9.0/24.
    - DHCP disabled.
    - Set it as an isolated network. It will only be used for your lab machines to communicate with each other.
- Install a new vm using the same Centos release as the host machine.
    - You may wish to provide the VM access to more than 1 CPU and 1 GiB of RAM so it installs and updates faster.
    - Click the box to ‘Customize configuration before install’, and use the ‘Add Hardware’ button to create a second network interface.
    - The VM should now have two network interfaces, one connected to each virtual network.
    - During the installation process:
        - Set the hostname to vm1.lab.<yourdomain\>.ops, using the same domain name as the host machine.
        - Configure the interface connected to your default network to use DHCP addressing, and ensure it will automatically turn on when the machine boots.
        - Configure the interface connected to the private network to use the static address 192.168.[x].53, using the same x network number assigned to that virtual network. Do not provide this interface with a gateway.
        - Set the timezone to Americas/Toronto.
        - Use a minimal installation (no GUI).
        - Set your root password, but do not create any other users.
    - Once the machine is installed, ensure it is fully updated.
- Shut down your VM, make sure the resource settings are reduced back to 1 CPU and 1 GiB of RAM.
- Clone the VM twice to create vm2, and vm3, setting their private addresses to 192.168.[x].2/24 and 192.168.[x].3/24 respectively.
    - Be sure to update their hostnames too.

## Completing the Lab

You should now have a new, fully updated, host installation with two virtual networks. One of those virtual networks should be the pre-existing default network, providing DHCP addressing and access to the world outside your own network. The second virtual network is using a separate address range, and is not providing DHCP addressing. You should also have three fully updated virtual machines, with interfaces connected to both of the virtual networks.

### Submission
It is not necessary to submit this lab. If you would like your professor to check that you have configured everything correctly, ask them to do so.
