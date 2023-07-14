---
id: lab6
title: Lab 6
sidebar_position: 11
description: Lab 6
---

# Lab 6

## Objectives

- Learn and respect the DOs and DON'Ts in the OPS535 Virtual Lab
- Configure VMs and routing in your Virtual LAN segment for building and testing web services (e.g. DNS, and SMTP)

## Backgroud and Overview

## OPS535 Virtual-lab

This is a learning environment created for students taking OPS535 to learn how to configure and secure Internet services. Although the virtual-lab is secured and protected by the perimeter layer of the college network with user authentication and firewalls, the VMs in the virtual-lab are not rock solid protected at the beginning to facilitate learning. Therefore, please follow the DOs and DON'Ts listed below to maintain a healthy and enjoyable learning environment for every one here.

**DOs**

- Try your best to secure the VMs assigned to you by hardening the OS, Internet services, application programs as much as possible.
- Regular user should be given access permissions on a as needed basis.
- Report any irregularities as soon as possible to your professor and shut down your affected VM(s) if it is appropriate and necessary to do so.
- Only use and test accounts and servers you have been assigned. Testing should never affect other users.

**DON'Ts**

- Don't perform any actions/activities that could harm the reliability or integrity of any services and data on the machines in the virtual-lab. Examples of harmful activities that are not permitted include but not limit to: brute forcing, denial of server (DoS), flooding, etc.
- Don't use scanners or automated tools on any network devices in the virtual-lab without written permission from the owner AND your professor.
- If you are not sure whether you should perform a certain action, then the answer is DON'T do it.

### Virtual Hardware of, and Software installed on each VM

- Please refer to the output from your baseline information collection script given to you on Blackboard.

## Configuration

### OS Configuration

- OS Configuration:
    - Do not install any software packages that is not needed,
    - Do not run any unnecessary server service.
- Security Configuration:
    - iptables/firewalld services:
         - VM1: iptables (do not perform any NAT at this stage.)
         - VM2-VM4: firewalld Enabled
    - SELinux: in enforcing mode
- Identification and authorization: verify and confirm that you have the "student" and your "Seneca user name" accounts. Make sure that both account allow you to ssh from matrix without prompting for login password.

Later labs and assignments will specify what additional software packages and services should be installed, activated, and enabled.

### Network Configuration

**Network Diagram**

Please based on this [OPS535 Virtual-lab Network Diagram](https://scs.senecac.on.ca/~raymond.chan/ops535/network/ops535_virtual_lab_network_diagram.pdf) to figure out the necessary network configuration so that all your VMs are reachable from all other VMs (i.e. all the VMs in our OPS535 Virtual-lab using the 192.168.x.y address space. Click [here](/slides/ops535_VLS_routing_slides.pdf) for more details network diagram for routing configuration.

Sample routing scripts (for reference only, do not use it as is) can be found [here](/C-ExtraResources/vls2vls-routing.md).

**IMPORTANT**: All the IP address 172.20.x.y (where 172.20.x is your network number, and y is the host part of the IP address) are assignment to your VMs by the DHCP server in the OPS535 Virtual-lab. This range of IP addresses are normally assigned to the virtual network adaptor named ens192 (may be changed in the future) on each VM. Please do not change these IP addresses, otherwise, you will cut the VM off from the network and you won't be able to ssh back into it again from matrix.

### Gateway VM Configuration

The VM1 on each student's LAN segment has three virtual network adapters: ens192, ens224, and ens256 and this VM will be used as the gateway from now on. All incoming network traffic to 192.168.x.0/24 network (i.e. to VM2, VM3 and VM4) must go through your gateway. The three virtual network adapters on VM1 are 'wired' for the following purpose:

- ens192 for connecting to the Internet and also for gateway to gateway connection within the OPS535 Virtual Lab
- ens224 for connecting to the other three VMs to form a local area private network
- ens256 for connecting your gateway to an administrative network which includes other gateways and the course lab server.
    - leave the 172.20.x.y IP address that is assigned to your gateway's (VM1) ens192 intact. Do not change it.
    - assign 192.168.x.1/24 to its ens224 virtual network adapter.
    - we may config the ens256 interface in later lab.

### VMs Configuration

Other than VM1, the other three VMs on each student's LAN segment has two virtual network adaptors: ens192 and ens224. They are 'wired' for the following purpose:

- ens192 for initial ssh login and as an emergency backdoor.
- ens224 for normal local area private network connection.
    - Leave the 172.20.x.y IP address that is assigned to your VMs (VM2, VM3, and VM4) on ens192 intact. Do not change it.
    - assign 192.168.x.y to each VM's (y = 2, 3, 4 correspondingly for VM2, VM3, VM) ens224 virtual network adaptor.

### Routing configuration

**On your gateway VM (VM1)**

- There are more than thirty virtual LAN segments (VLS) in the OPS535 Virtual Lab, each Virtual LAN segment should use the private network address space 192.168.x.0/24 for local traffic. VMs in each local LAN segment should be reachable via the gateway (your VM1) with the IP address 172.20.x.1 from VMs in other VLSs in the lab. The value of x is also ranging from 1 to 43.
- On each VM in your VLS, you can either add a custom route for each other VLS in the lab using your VM1's private IP (192.168.x.1) as the gateway. In this case, you need to add a maximum of 42 routes in order to reach all the VMs in the other 42 VLS. You **DO NOT** need a custom route to your own VLS. You can also simply add a single route to 192.168.0.0/16 using your VM1's private IP as the gateway.
- You can either use the nmtui utility to add a static custom route for each VLS y that you want to reach or use the nmcli command as given in [the page on VLS to VLS routing](/C-ExtraResources/vls2vls-routing.md)
- Before moving on to the next step, use the "ip route" command to confirm your current kernel routing table on your VM1.

**ON VM2, VM3, and VM4**

- Use the command "ip route show" to verify the default route in all your VMs' kernel routing table. It should point to 172.16.255.1. Report to your professor if it is not.
- Add the same custom route(s) to VM2, VM3, and VM4 in your VLS to other VLSs your want to reach. Each custom route should use 192.168.x.1 as the gateway (NOT as a default gateway) in each of your VM2 to VM4. You can either use the nmtui utility or the nmcli command. For details, consult [this page on VLS to VLS routing](/C-ExtraResources/vls2vls-routing.md)

## Network Connectivity Testing

Pair up with one of the student in your class who has completed the routing configuration. The following steps assume that your network number is "x" and his/her network number is "y".Perform the following test with him/her:

1. Ping from your gateway to his/her gateway's external IP address: 172.20.y.1. Move on to the next step if the result is positive.
2. Ping from your gateway to his/her gateway's internal IP address: 192.168.y.1. Move on to the next step if the result is positive.
3. Ping from your VM to your gateway's internal IP address: 192.168.x.1. Move on to the next step if the result is positive. (from VM2, VM3, VM4, one at a time, same below)
4. Ping from your VM to your gateway's external IP address: 172.20.x.1. Move on to the next step if the result is positive.
5. Ping from your VM to his/her gateway's external IP address: 172.20.y.1. Move on to the next step if the result is positive.
6. Ping from your VM to his/her gateway's internal IP address: 192.168.y.1. Move on to the next step if the result is positive.
7. Ping from your VM to his/her VM's IP address: 192.168.y.z. (z: 2,3,4)
8. Ask your partner to repeat the same steps above.

If any of the tests mentioned above failed, you need to check the IP address assignment and/or the routing configuration on all VMs (yours and your partner's) and fix any mistakes until all the tests mentioned above are successful. **Make sure that netfilter (iptables service) is not blocking the traffic and both you and your classmate have enable ip_forward on VM1s.**

## Completing the Lab

- Run the script provided on Blackboard and run it on all your four VMs, capture the output and name them as
    - lab6vm1.txt on VM1,
    - lab6vm2.txt on VM2,
    - lab6vm3.txt on VM3, and
    - lab6vm4.txt on VM4.
- Submit all four files to Blackboard by the due date.
