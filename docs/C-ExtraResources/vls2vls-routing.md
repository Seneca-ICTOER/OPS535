---
id: vls2vls-routing
title: VLS2VLS Routing
sidebar_position: 20
description: VLS2VLS Routing
---

# VLS2VLS Routing

## Background Information

The following configuration may be used to set up the proper routes between private Virtual LAN Segments (VLS) in OPS535 Virtual Lab on CentOS 8.x virtual machines. The custom routes added to the gateway VM (VM1), and their corresponding VMs (VM2 to VM4) in their private VLS will enable VMs in each private VLS to communicate with VMs in the other private VLS.

## Virtual LAN Segment setting

Consider three VLSs (one for each student) where there are 3 gateways, one for each VLS in the OPS535 virtual lab:

## VLS 1

VLS network: 192.168.1.0/24

Gateway (Host) IPs: Internal (ens224): 192.168.1.1 External (ens192): 172.20.1.1

VMs IPs:

- VM2: 192.168.1.2
- VM3: 192.168.1.3
- VM4: 192.168.1.4

Default gateway on each VM2: 172.20.255.1 Gateway to the 192.168.0.0/16 network: 192.168.1.1

## VLS 2

VLS network: 192.168.2.0/24

Gateway (Host) IPs: Internal (ens224): 192.168.2.1 External (ens192): 172.20.2.1

VMs IPs:

- VM2: 192.168.2.2
- VM3: 192.168.2.3
- VM4: 192.168.2.4

Default gateway on each VM2: 172.20.255.1 Gateway to the 192.168.0.0/16 network: 192.168.2.1

## VLS 3

VLS network: 192.168.3.0/24

Gateway (Host) IPs: Internal (ens224): 192.168.3.1 External (ens192): 172.20.3.1

VMs IPs:

- VM2: 192.168.3.2
- VM3: 192.168.3.3
- VM4: 192.168.3.4

Default gateway on each VM2: 172.20.255.1 Gateway to the 192.168.0.0/16 network: 192.168.3.1

## Manually configure custom routes on the gateways to reach VMs in other VLSs

You only need to create the custom routes on your own VLS, but make sure that other student's VLS has the custom routes to your VLS.

### On VLS 1

On VLS 1's gateway (192.168.1.1 or 172.20.1.1): Using nmcli:

- nmcli con modify ens192 +ipv4.routes "192.168.2.0/24 172.20.2.1 100"
- nmcli con modify ens192 +ipv4.routes "192.168.3.0/24 172.20.3.1 100"
- nmcli con down ens192
- nmcli con up ens192

Check to make sure that your kernel routing table has the proper entries with the following command:

- ip route show

### On VLS 2

On VLS 2's gateway (192.168.2.1 or 172.20.2.1): Using nmcli:

- nmcli con modify ens192 +ipv4.routes "192.168.1.0/24 172.20.1.1 100"
- nmcli con modify ens192 +ipv4.routes "192.168.3.0/24 172.20.3.1 100"
- nmcli con down ens192
- nmcli con up ens192

Check to make sure that your kernel routing table has the proper entries with the following command:

- ip route show

### On VLS 3

On VLS 3's gateway (192.168.3.1 or 172.20.3.1): Using nmcli:

- nmcli con modify ens192 +ipv4.routes "192.168.1.0/24 172.20.1.1 100"
- nmcli con modify ens192 +ipv4.routes "192.168.2.0/24 172.20.2.1 100"
- nmcli con down ens192
- nmcli con up ens192

Check to make sure that your kernel routing table has the proper entries with the following command:

- ip route show

## Manually Configure routes on each VM in each VLS

You only need to create the custom routes on the VM in your VLS, but make sure that other students have proper routes on their VMs as well.

### VLS 1 VM2 to VM4

On VLS 1's VM (192.168.1.2 .. 192.168.1.4)

- nmcli con modify ens224 +ipv4.routes "192.168.0.0/16 192.168.1.1 100"
- nmcli con down ens224
- nmcli con up ens224
- ip route show

### VLS 2 VM2 to VM4

On VLS 2's VM (192.168.2.2 .. 192.168.2.4)

- nmcli con modify ens224 +ipv4.routes "192.168.0.0/16 192.168.2.1 100"
- nmcli con down ens224
- nmcli con up ens224
- ip route show

### VLS 3 VM2 to VM4

On VLS 3's VM (192.168.3.2 .. 192.168.3.4)

- nmcli con modify ens224 +ipv4.routes "192.168.0.0/16 192.168.3.1 100"
- nmcli con down ens224
- nmcli con up ens224
- ip route show

## Automate the process using BASH script

The above example shows that 2 custom routes on each VLS are needed to provides the proper routing to reach 2 other VLS on the your gateway (VM1). It will be quite time consuming to manage all the routes if the number of VLS is much greater (how about 40 VLSs?). The following script will be more practical if your need to set up all the necessary routes for a large number of VLSs. Both scripts use the shell environment variables "MY\_VLS\_NO" and "OTHER\_VLS\_NOS" to allow customization for different values of VLSs.

## Shell Script for adding custom routes on your gateway to other's VLSs

- set the shell variable MY\_VLS\_NO to your assigned network ID (I use 2 here as an example, please change 2 to your assigned network ID)

```bash
export MY_VLS_NO=2
```

- edit the shell variable OTHER\_VLS\_NOS to the list of VLS you want to have a route to their VLS network. The following example assign the list of network numbers 1 to 43 that you want to create a custom route on your gateway.
   
   
```bash
   OTHER_VLS_NOS=`seq 1 43`
```

The following Bash script to add 42 new custom routes to your gateway VM's routing table:

```bash
#! /bin/bash
if [ -z "$MY_VLS_NO" ]
then
	echo "Please run the following command to assign your network number" >&2
	echo "to the shell varible MY_VLS_NO and run this script again." >&2
	echo "Please replace xx with your actual network number." >&2
	echo "  export MY_VLS_NO=xx" >&2
	exit 1
fi
X=${MY_VLS_NO}
echo "Your Network Number is $X"

# change the following variable if necessary
OTHER_VLS_NOS=`seq 1 43`

Y=`echo ${OTHER_VLS_NOS}`
echo "Route to be added for the network number(s) $Y"
echo -n "Press ENTER to continue ... "
read dummy

# Add new route
for y in $Y
do
	if [ "$X" -ne "$y" ]
	then
	    nmcli con modify ens192 +ipv4.routes "192.168.${y}.0/24 172.20.${y}.1 100"
	    echo "Adding route to 192.168.${y}.0 network." 
	fi
done
nmcli con down ens192
nmcli con up ens192
ip route show
 
# enable IP forwarding on the gateway, add "net.ipv4.ip_forward = 1" to /etc/sysctl.conf 
echo "1" > /proc/sys/net/ipv4/ip_forward
```
