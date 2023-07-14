---
id: virtual-lan
title: Virtual-Lan
sidebar_position: 21
description: Virtual-Lan
---

# Virtual-Lan

## Setup a Virtual Local Area Network environment for OPS535 Labs

### OS Installation

- Install 64-bit version of CentOS 7 with Virtualization Packages on the Host Computer (the physical unit)
- Create Four Virtual Machines, each with 10GB of disk space, 1G Memory, 1CPU
- Install CentOS 7 (excluding Virutualization Packages) on VM1 to VM3 with at least the following packages:
    + NFS
    + NIS
    + DNS
    + DHCP
    + Postfix,
    + OpenLDAP
    + Wireshark
    + tcpdump
- CentOS 7 configuration:
    + Enable iptables
    + Create a regular user account using your Seneca email ID
    + Enable SELinux
- Collect the following information:
    + IP address(es) assigned to the host OS and each VM for the virtual network
    + Name of the network device used by the host OS to connect to the virtual network
    + IP address, netmask, and gateway for each guest OS
    + Name of the device used by each guest OS to connect to the virtual network
- Install Fedora 21 (without Virtualization packages) on VM4 with the following packages:
    + NFS
    + NIS
    + DNS
    + OpenLDAP
    + Wireshark
    + tcpdump

### Virtual Network Configuration

- Default Virtual Network
    + Network Address 192.168.122.0/24
    + Network Type: NAT
- Create the 2nd Virtual Network, named "opsnet"
    + Network Address 192.168.\[x\].0/24 where \[x\] assigned by your professor
    + Network Type: Isolated
- Locate the [name of the physical network device](./get-device-name.md) connected to the lab network. The following configuration assume eth3 as the device name name.
    + assignment 172.16.\[x\].1 to the alias of eth3: ifconfig eth3:0 172.16.\[x\].1
- Adding routes to each student's "opsnet" virtual network manually or by running the following bash script on the host OS:

```bash
#!/bin/bash
ip route add 192.168.1.0/24 via 172.16.1.1
ip route add 192.168.2.0/24 via 172.16.2.1
ip route add 192.168.3.0/24 via 172.16.3.1
ip route add 192.168.4.0/24 via 172.16.4.1
...
ip route add 192.168.36.0/24 via 172.16.36.1
```

or:

```bash
#!/bin/bash
count=1
x=1 # my network id
while [ ${count} -le 32 ]
do
  if [ ${count} != ${x} ]
  then
      ip route add 192.168.${count}.0/24 via 172.16.${count}.1
  fi
  count=$(expr ${count} + 1)
done
```

- You also need to add routes on all you VMs to each student's "opsnet" and the logical network "172.16.0.0" that connects all the hosts. You can do it manually or by running the following script on each of your VMs:

```bash
#!/bin/bash
x=10 # my network id
ip route add 192.168.1.0/24 via 192.168.${x}.1
ip route add 192.168.2.0/24 via 192.168.${x}.1
ip route add 192.168.3.0/24 via 192.168.${x}.1
ip route add 192.168.4.0/24 via 192.168.${x}.1
...
ip route add 192.168.36.0/24 via 192.168.${x}.1
ip route add 172.16..0/16 via 192.168.${x}.1
```

or:

```bash
#!/bin/bash
count=1
x=10 # my network id
while [ ${count} -le 32 ]
do
  if [ ${count} != ${x} ]
  then
      ip route add 192.168.1.0/24 via 192.168.${x}.1
  fi
  count=$(expr ${count} + 1)
done
ip route add 172.16..0/16 via 192.168.${x}.1
```

- To test your static routes, pair up with a few fellow students and try to ping their VMs in their "opsnet".
- Save your network settings for the real lab.
- Reboot your Host and restart all your VMs to confirm all the settings are correct.

### Private Network Address Allocation

- [Network Address Allocation](./network-address.md)

## CentOS Installation and update Issues

If you think that the yum update process takes too long to complete, inspect the file /etc/yum.repos.d/CentOS-Base.repo and add belmont to the baseurl under the \[base\] and \[updates\] sections:

```bash
baseurl=http://belmont.senecac.on.ca/centos/$releasever/os/$basearch/
```

Place the above line before the "mirrorlist=" line and try running yum update again.

## My Questions

- I can't ping other student's vms. What should I do to fix that?

My Network is 192.168.x.0 and the other student's network is 192.168.y.0

### Checks the following setup

1. IP Addresses of your VMs
2. IP Addresses of the other student's VMs
3. IP address of the default gateway on your VMs, should be pointing to 192.168.122.1
4. IP address of the default gateway on the other student's VMs, should be pointing to 192.168.122.1
5. The kernel routing table on your host. Should have a route to 192.168.y.0 network via 172.16.y.1
6. The kernel routing table on the other student's host. Should have a route to 192.168.x.0 via 172.16.x.1
7. The ip_forward flag on your host, the contents of /proc/sys/net/ipv4/ip_forward should be set to "1"
8. The ip_forward flag on the other student's host, the contents of /proc/sys/net/ipv4/ip_forward should be set to "1"
9. A rule (or policy) in the FORWARD chain on your host's firewall to allow traffic between yours and the other student's VMs
10. A rule (or policy) in the FORWARD chain on the other student's host's firewall to allow traffic between yours and the other student's VMs

If all the above are set up properly, perform the following steps from one of your VMs:

1. ping your gateway 192.168.x.1
2. ping your host external IP 172.16.x.1
3. ping the other student's external IP 172.16.y.1
4. ping the other student's internal gateway 192.168.y.1
5. ping the other student's VMs 192.168.y.z

- If you can ping 172.16.x.1 but not 172.16.y.1, make sure that your host can ping the other student's host.
- If you can't ping 172.16.x.1, check your internet network setup.
- If you can ping 172.16.y.1, but not 192.168.y.1, ask/help the other student to check the kernel routing table on its VM.
