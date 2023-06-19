---
id: dns-review
title: DNS Review
sidebar_position: 11
description: DNS Review
---

# DNS Review

- Text book: Chapter 17

## Name Resolution on Linux systems

- control file: /etc/nsswitch.conf

### File Based Name Resolution

**Flat file name resolution**

- mapping information store in /etc/hosts
- same contents on each system share the same name space

**DNS name resolution**

- use client-server model

**DNS Client (Resolver)**

- Configuration file: /etc/resolv.conf - mainly tells the local computer which machines should be used to answer your DNS queries.

**DNS Server (BIND)**

- Configuration file: /etc/named.conf - server options and which domains are their resposibility
- Zone files: location specified in the /etc/named.conf - contains information of the zone(s)
- Role of server:
  - Cache-only server
  - Primary Server
  - Secondary Server
  - Root name server

## DNS review/tutorial Lab

If you want to refresh your memory about setting up a DNS server, please try the following lab exercise. The following lab exercise contains a simple configuration file named.conf and the necessary zone files for you to practice. The following two links will take you to the DNS lab exercise document (in PDF format) and the gzip tar ball file, which contains the BIND configuration file and the zone files:

- [DNS Lab Exercise (pdf)](https://scs.senecac.on.ca/~raymond.chan/ops535/1503/exs/DNS-Ex1-Lab.pdf)
- [tar ball gz file with named.conf and zone files](https://scs.senecac.on.ca/~raymond.chan/ops535/1503/exs/pri-dns-4-scs.tar.gz)

After downloading the gzip tar ball file to your system, you should backup the files and sub-directories in /var/named/chroot before unpacking the files from the tar ball.

## DNS and BIND fundamental

- [Slide Presentation Created for OPS335 by Raymond Chan](https://ict.senecacollege.ca/~raymond.chan/ops335/1502/notes/DNS/DNS2012-ops335.pdf)

## DNS Extras

- [BIND&DNS Notes](https://wiki.cdot.senecacollege.ca/wiki/BIND%26DNS_Notes)
