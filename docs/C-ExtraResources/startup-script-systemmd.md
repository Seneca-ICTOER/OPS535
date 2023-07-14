---
id: startup-script-with-systemd
title: Startup script with systemd
sidebar_position: 21
description: Startup script with systemd
---

# Startup script with systemd

## Systemd wiki page - reference

- [Systemd](https://fedoraproject.org/wiki/Systemd)

## ops535

Example: To run a script on system boot in a systemd environment:

- Name of the script file: ops535
- File path: /usr/bin/ops535

```bash
[ops535@localhost ~]$ cat /usr/bin/ops535
#! /bin/bash
/usr/sbin/route add -net 192.168.55.0 netmask 255.255.255.0 gw 192.168.122.1
# you can put you ifconfig/ip addr command
#                 route add command
#                 and other commands here
# make sure the file permission is 655
```

## ops535.service

File Path: /etc/systemd/system/ops535.service

```bash
[Unit]
Description=OPS535 Network routes setup
After=systemd-user-sessions.service

[Service]
Type=oneshot
ExecStart=/usr/bin/ops535

[Install]
WantedBy=multi-user.target
```
