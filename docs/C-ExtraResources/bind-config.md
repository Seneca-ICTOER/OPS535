---
id: bind-configuration
title: Bind Configuration
sidebar_position: 26
description: Bind Configuration
---

# Bind Configuration

## Minimal /etc/named.conf

```bash
options {
    directory "/var/named";
};

zone "cp.net" {
    type master;
    file "zd.cp.net";
};

zone "99.168.192.in-addr.arpa" {
    type master;
    file "zd.192.168.99";
};
```

- The "directory" directive in the options statement tells BIND where to find the files defined in each zone statement. There are many more options that can be used to control the behaviour of the BIND server.
- This configuration file defines two zones, the forward looking zone "cp.net" and reverse lookup zone - for mapping IP address to FQDN - "99.168.192.in-addr.arpa"

## ZONE files

### cp.net - /var/named/zd.cp.net

```bash
$TTL 86400
@    IN    SOA   ns.cp.net. nsadmin.cp.net.
                            (201001201200
                             1h
                             15m
                             30d
                             1h )
     IN    NS   ns.cp.net.
ns   IN    A    192.168.99.53
vm1  IN    A    192.168.99.53
vm2  IN    A    192.168.99.2
vm3  IN    A    192.168.99.3
vm4  IN    A    192.168.99.4
```

### 99.168.192.in-addr.arpa - /var/named/zd.192.168.99

```bash
$TTL 86400
@    IN    SOA   ns.cp.net. nsadmin.cp.net.
                            (201001201200
                             1h
                             15m
                             30d
                             1h )
     IN    NS   ns.cp.net.
53   IN    PTR  ns.cp.net.
2    IN    PTR  vm2.cp.net.
3    IN    PTR  vm3.cp.net.
4    IN    PTR  vm4.cp.net.
```
