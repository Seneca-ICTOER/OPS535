---
id: Get Device Name
title: Get Device Name
sidebar_position: 22
description: Get Device Name
---

# Get Device Name

Sample script for locating the Network Device name that is connected to the Lab's network in TEL Buildinig.

```bash
#! /bin/bash
# get all the NIC device name in the system
dev_names=$(/sbin/ifconfig | grep HWaddr| awk -F: '{print $1}' | sort -u )

# for centos7 replace HWaddr with flags


# set a loop to loop through each device name
#
my_dev=
TARGET_IP=10.40

for d_name in ${dev_names}
do

echo "Checking device name $d_name ..."

status=$(/sbin/ifconfig $d_name|grep ${TARGET_IP})

if [ ! -z "$status" ]
then
        echo "$d_name contains the target IP $TARGET_IP"
        my_dev=$d_name
fi
done
echo "The target NIC device name should be $my_dev"
```
