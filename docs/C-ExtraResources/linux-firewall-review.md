---
id: linux-firewall-review
title: Firewalls Review and configuration
sidebar_position: 4
description: Linux Firewall Review
---

# Linux Firewall Review

## Concepts

- Netfilter/iptables with iptables(legacy)
- Netfilter/nftables with iptables(nt_tables)
- firewall with firewalld (front end for netfilter/iptables and netfilter/nftables)

## Command line tools

- iptables
- ip6tables
- arptables
- ebtables
- nft
- firewall-cmd

## iptables

- raw table
  - PREROUTING chain
  - OUTPUT chain
- managle table
  - PREROUTING
  - INPUT
  - FORWARD
  - OUTPUT
  - POSTROUTING
- nat table
  - PREROUTING
  - INPUT
  - OUTPUT
  - POSTROUTING
- filter table
  - INPUT
  - FORWARD
  - OUTPUT
- security table
  - INPUT
  - FORWARD
  - OUTPUT
 
## Rules

```bash
iptables -t filter -A INPUT -p tcp --dport 22 -j ACCEPT
          |---------------| |---------------| |--------|
           where and when     match spec.       action
```

## nft

- table ip filter
- table ip security
- table ip raw
- table ip mangle
- table ip nat
- table inet firewalld
- tables ip firewalld

## man pages

- man iptables
- man nft
- man firewall-cmd
