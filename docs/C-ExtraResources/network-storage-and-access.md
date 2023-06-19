---
id: network-storage-and-access
title: Network Storage and Access
sidebar_position: 7
description: Network Storage and Access
---

# Network Storage and Access

## NFS - Network File System

- Text book: Chapter 23
  - Server side component: supports different versions of NFS via RPC framework
  - Client side component: NFS specific options for the mount command (p.615) or try "man 5 nfs"
- Version of NFS
  - NFSv2
  - NFSv3
  - NFSv4
- NFS Configuration file
  - Server side: /etc/exports
  - Client side: /etc/fstab

- NFS Configuration command
  - Server side: exportfs, showmount, rpcinfo
  - Client side: rpcinfo, mount
- NFS access/security issue
  - Dynamic ports
  - access control - machine based
  - Firewall
