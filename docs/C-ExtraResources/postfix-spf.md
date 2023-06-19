---
id: postfix-spf
title: Sender Policy Framework
sidebar_position: 16
description: Postfix SPF
---

# Postfix SPF

## Objective

- Configure Postfix to check for SPF record and reject spam mails

## References

Please read the information provided by the following three links to get a better understanding of basic concept of the Sender Policy Framework (SPF)

- [Postfix Restriction](https://wiki.centos.org/HowTos/postfix_restrictions)
- [Sender Policy Framework](http://www.openspf.org/Project_Overview)
- [Define an SPF record and examples](http://www.zytrax.com/books/dns/ch9/spf.html)

## Pre-requisite

- Root name server
- Primary DNS server
- Caching-only DNS server
- Postfix installed and configured for your domain

## Required Packages for checking SPF in Postfix

- pypolicyd-spf (from the epel repository, if epel is not enable on your CentOS 7.0 system, you need to run "yum install epel-release" to install it.)
- pypolicyd-spf depends on python-pydns, python-pyspf, and python-ipaddr packages. All three python modules will be installed if you use yum to install pypolicyd-spf.

## Tasks

- update your primary DNS server with SPF record
- configure your postfix server to check sender address

## Primary DNS updates - email sender

Assumption: You own the bigfoot.com domain

You should have the following zone entry in the file /etc/named.conf on your primary DNS server:

```bash
zone "bigfoot.com" IN {
    type master;
    file "zone-bigfoot.com";
};
```

You should have the zone file for your bigfoot.com zone in /var/named directory:

```bash
[root@pri named]# cat zone-bigfoot.com 
$TTL 300
@ IN SOA pri.cp.net.    root.cp.net. (
                20151111 ; serial
                1h     ; refresh
                15m     ; retry
                3d     ; expire
                10m)     ; minimum
     IN NS    pri.cp.net.
mail    IN A     192.168.99.1
bigfoot.com.    IN MX 10    mail.bigfoot.com.

bigfoot.com.    IN TXT "v=spf1 mx -all"
```

## MTA configuration updates - email receiver

/etc/postfix/master.cf

```bash
[root@mail ~]# diff /etc/postfix/master.cf /etc/postfix/master.cf.org
128,131d127
< # 
< # Add pypolicyd-spf to test for SPF record
< policyd-spf unix -    n    n    -    0    spawn    user=nobody    argv=/usr/libexec/postfix/policyd-spf
< 
```

/etc/postfix/main.cf

```bash
[root@mail ~]# diff /etc/postfix/main.cf /etc/postfix/main.cf.org
113c113
< inet_interfaces = all
---
> #inet_interfaces = all
116c116
< #inet_interfaces = localhost
---
> inet_interfaces = localhost
680,686d679
< 
< disable_vrfy_command = yes
< 
< smtpd_recipient_restrictions =
<     reject_unauth_destination
<     check_policy_service unix:private/policyd-spf
< policyd-spf_time_limit = 3600
```

Restart the postfix service after making changes to master.cf and main.cf.

## Examples

Before sender added the SPF record to their DNS domain:

```bash
[root@localhost ~]# telnet 192.168.99.25 25
Trying 192.168.99.25...
Connected to 192.168.99.25.
Escape character is '^]'.
220 mail.cp.net ESMTP Postfix
HELO bigfoot.com
250 mail.cp.net
MAIL FROM: raymond@bigfoot.com
250 2.1.0 Ok
RCPT TO: root
250 2.1.5 Ok
data
354 End data with <CR><LF>.<CR><LF>
HEllo,
spf okay?
.
250 2.0.0 Ok: queued as DE38A10D8AEC
quit
221 2.0.0 Bye
Connection closed by foreign host.
```

After sender added the SPF record to their DNS domain and email from non-authorized host:

```bash
[root@localhost ~]# telnet 192.168.99.25 25
Trying 192.168.99.25...
Connected to 192.168.99.25.
Escape character is '^]'.
220 mail.cp.net ESMTP Postfix
helo bigfoot.com.
250 mail.cp.net
mail from: ray@bigfoot.com 
250 2.1.0 Ok
rcpt to: root
550 5.7.1 <root>: Recipient address rejected: Message rejected due to: SPF fail - not authorized. Please see http://www.openspf.net/Why?s=mfrom;id=ray@bigfoot.com;ip=192.168.99.1;r=root
quit
221 2.0.0 Bye
Connection closed by foreign host.
```

Email from authorized host:

```bash
[root@localhost ~]# telnet 192.168.99.25 25
Trying 192.168.99.25...
Connected to 192.168.99.25.
Escape character is '^]'.
220 mail.cp.net ESMTP Postfix
helo bigfoot.com.
250 mail.cp.net
mail from: ray@bigfoot.com
250 2.1.0 Ok
rcpt to: root
250 2.1.5 Ok
data
354 End data with <CR><LF>.<CR><LF>
Hello, this email should pass your mail server's spf filter.
bye.
.
250 2.0.0 Ok: queued as 1CEE61055143
quit
221 2.0.0 Bye
Connection closed by foreign host.
```

## Messages In root's Mail Box

```bash
[root@mail ~]# cat /var/mail/root
From raymond@bigfoot.com  Tue Nov 24 12:56:07 2015
Return-Path: <raymond@bigfoot.com>
X-Original-To: root
Delivered-To: root@mail.cp.net
Received-SPF: None (no SPF record) identity=mailfrom; client-ip=192.168.99.1; helo=bigfoot.com; envelope-from=raymond@bigfoot.com; receiver=root 
Received: from bigfoot.com (unknown [192.168.99.1])
    by mail.cp.net (Postfix) with SMTP id DE38A10D8AEC
    for <root>; Tue, 24 Nov 2015 12:55:52 -0700 (MST)

HEllo,
spf okay?

From ray@bigfoot.com  Tue Nov 24 16:07:33 2015
Return-Path: <ray@bigfoot.com>
X-Original-To: root
Delivered-To: root@mail.cp.net
Received-SPF: Pass (sender SPF authorized) identity=mailfrom; client-ip=192.168.99.1; helo=bigfoot.com.; envelope-from=ray@bigfoot.com; receiver=root 
Received: from bigfoot.com. (mail.bigfoot.com [192.168.99.1])
    by mail.cp.net (Postfix) with SMTP id 1CEE61055143
    for <root>; Tue, 24 Nov 2015 16:07:06 -0700 (MST)

Hello, how your spf filter will pass this email.
bye.
```

## MailLog (postfix)

```bash
[root@mail log]# ls -l maillog
-rw-------. 1 root root 5896 Nov 24 16:16 maillog
[root@mail log]# cat maillog

Nov 24 12:55:20 mail postfix/postfix-script[2283]: starting the Postfix mail system
Nov 24 12:55:20 mail postfix/master[2285]: daemon started -- version 2.10.1, configuration /etc/postfix
Nov 24 12:55:26 mail postfix/smtpd[2289]: connect from unknown[192.168.99.1]
Nov 24 12:55:57 mail policyd-spf[2293]: None; identity=helo; client-ip=192.168.99.1; helo=bigfoot.com; envelope-from=raymond@bigfoot.com; receiver=root
Nov 24 12:55:57 mail policyd-spf[2293]: None; identity=mailfrom; client-ip=192.168.99.1; helo=bigfoot.com; envelope-from=raymond@bigfoot.com; receiver=root
Nov 24 12:55:57 mail postfix/smtpd[2289]: DE38A10D8AEC: client=unknown[192.168.99.1]
Nov 24 12:56:07 mail postfix/cleanup[2294]: DE38A10D8AEC: message-id=<>
Nov 24 12:56:07 mail postfix/qmgr[2287]: DE38A10D8AEC: from=<raymond@bigfoot.com>, size=327, nrcpt=1 (queue active)
Nov 24 12:56:07 mail postfix/local[2295]: DE38A10D8AEC: to=<root@mail.cp.net>, orig_to=<root>, relay=local, delay=16, delays=16/0.04/0/0.02, dsn=2.0.0, status=sent (delivered to mailbox)
Nov 24 12:56:07 mail postfix/qmgr[2287]: DE38A10D8AEC: removed
Nov 24 12:56:14 mail postfix/smtpd[2289]: disconnect from unknown[192.168.99.1]
Nov 24 16:04:34 mail postfix/smtpd[2843]: connect from mail.bigfoot.com[192.168.99.1]
Nov 24 16:04:58 mail policyd-spf[2847]: None; identity=helo; client-ip=192.168.99.1; helo=bigfoot.com.; envelope-from=ray@bigfoot.com; receiver=root
Nov 24 16:04:58 mail policyd-spf[2847]: Fail; identity=mailfrom; client-ip=192.168.99.1; helo=bigfoot.com.; envelope-from=ray@bigfoot.com; receiver=root
Nov 24 16:04:58 mail postfix/smtpd[2843]: NOQUEUE: reject: RCPT from mail.bigfoot.com[192.168.99.1]: 550 5.7.1 <root>: Recipient address rejected: Message rejected due to: SPF fail - not authorized. Please see http://www.openspf.net/Why?s=mfrom;id=ray@bigfoot.com;ip=192.168.99.1;r=root; from=<ray@bigfoot.com> to=<root> proto=SMTP helo=<bigfoot.com.>
Nov 24 16:06:47 mail postfix/smtpd[2843]: disconnect from mail.bigfoot.com[192.168.99.1]
Nov 24 16:06:48 mail postfix/smtpd[2843]: connect from mail.bigfoot.com[192.168.99.1]
Nov 24 16:07:11 mail policyd-spf[2847]: None; identity=helo; client-ip=192.168.99.1; helo=bigfoot.com.; envelope-from=ray@bigfoot.com; receiver=root
Nov 24 16:07:11 mail policyd-spf[2847]: Pass; identity=mailfrom; client-ip=192.168.99.1; helo=bigfoot.com.; envelope-from=ray@bigfoot.com; receiver=root
Nov 24 16:07:11 mail postfix/smtpd[2843]: 1CEE61055143: client=mail.bigfoot.com[192.168.99.1]
Nov 24 16:07:33 mail postfix/cleanup[2849]: 1CEE61055143: message-id=<>
Nov 24 16:07:33 mail postfix/qmgr[2287]: 1CEE61055143: from=<ray@bigfoot.com>, size=379, nrcpt=1 (queue active)
Nov 24 16:07:33 mail postfix/local[2850]: 1CEE61055143: to=<root@mail.cp.net>, orig_to=<root>, relay=local, delay=27, delays=27/0.03/0/0.02, dsn=2.0.0, status=sent (delivered to mailbox)
Nov 24 16:07:33 mail postfix/qmgr[2287]: 1CEE61055143: removed
Nov 24 16:07:36 mail postfix/smtpd[2843]: disconnect from mail.bigfoot.com[192.168.99.1]
Nov 24 16:14:54 mail postfix/smtpd[2853]: connect from pri[192.168.99.53]
Nov 24 16:15:21 mail policyd-spf[2857]: None; identity=helo; client-ip=192.168.99.53; helo=bigfoot.com.; envelope-from=tommy@bigfoot.com; receiver=root
Nov 24 16:15:21 mail policyd-spf[2857]: Fail; identity=mailfrom; client-ip=192.168.99.53; helo=bigfoot.com.; envelope-from=tommy@bigfoot.com; receiver=root
Nov 24 16:15:21 mail postfix/smtpd[2853]: NOQUEUE: reject: RCPT from pri[192.168.99.53]: 550 5.7.1 <root>: Recipient address rejected: Message rejected due to: SPF fail - not authorized. Please see http://www.openspf.net/Why?s=mfrom;id=tommy@bigfoot.com;ip=192.168.99.53;r=root; from=<tommy@bigfoot.com> to=<root> proto=SMTP helo=<bigfoot.com.>
Nov 24 16:16:03 mail postfix/smtpd[2853]: NOQUEUE: reject: RCPT from pri[192.168.99.53]: 550 5.7.1 <spr500>: Recipient address rejected: Received-SPF: Fail (SPF fail - not authorized) identity=mailfrom; client-ip=192.168.99.53; helo=bigfoot.com.; envelope-from=tommy@bigfoot.com; receiver=root ; from=<tommy@bigfoot.com> to=<spr500> proto=SMTP helo=<bigfoot.com.>
Nov 24 16:16:06 mail postfix/smtpd[2853]: disconnect from pri[192.168.99.53]
```
