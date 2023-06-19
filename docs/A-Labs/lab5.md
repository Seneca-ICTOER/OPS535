---
id: lab5
title: Lab 5
sidebar_position: 10
description: Lab 5
---

# Lab 5

## Overview

Postfix is a complete MTA (Mail Transport Agent) package which replaced Sendmail. Postfix uses several different programs to implement the MTA functionality. Postfix is considered to be more secure than Sendmail as it requires a separate user ID for running each module. Postfix uses plain text parameters and value names in its configuration files. The Postfix program plays a variety of roles:

- Listens to the network for incoming mail
- Transports mail messages to other machines
- Performs local mail delivery or hands local mail over to a local program for delivery
- Appends mail to files, Pipes mail through other programs
- Queues mail for later delivery
- Understands the aliasing of one recipient name to another

Understanding how Postfix handles the tasks listed above is essential in keeping the email service running properly for your users.

## Objectives

In this lab, we will focus on the followings:

- Configure Postfix services to bind to specific network interface(s) for incoming SMTP connections
- Study and review the SMTP protocol
- Understand and configure mail aliases and mailing list
- Configure and manage Postfix's outgoing mail queue
- Setup appends mail to files option in Postfix

## Pre-requisites

- Must complete assignment 1 on ops535 virtual lab and ensure that
    - all your four VMs have network connectivity to each other via the ens224 network interfaces.
    - your VMs have the proper FQDN which can be resolved by your authoritative DNS server(s).
- Install the nmap-ncat, tree, and mailx packages on your host (optinally, install it on your other VMs as well).
- Install postfix if it is not installed.

## Investigation 1: Postfix package

### Perform the following steps on your VM2 (pri-dns)

- login to your VM2 as the student user.
- Find out the version of the postfix rpm available to your CentOS 8.x system with one of the following commands and keep a record of it.

```bash
rpm -q postfix

yum info postifx
```

- SMTP servers use one of the well-known ports, you can find out the port number used by the smtp protocol with the following command:

```bash
grep -w smtp /etc/services
```

   - Note that the file /etc/services is used on a Linux system to resolve TCP/UDP service names to TCP/UDP port numbers.
   - Make sure that the postfix.service is running on your VM2, if not, start the postfix.service and confirm that it is running properly.
   - Beside the systemctl command, there are two more places (or commands) you can use to confirm whether there is an SMTP server running on your system: the "ss -at" and "ps -ef" command:
   - Try the following command pipe line and look for the SMTP port number under the "Local Address" column and record the line(s) for future reference.

```bash
ss -at | grep -e "Local Address" -e "smtp"

ss -atn | grep -e "Local Addres" -e [smtp port number]
```

   - Note that if the Local Address shown is 127.0.0.1 only, your SMTP server will not be reachable by other machines.
- Run the following command pipe line and study the output carefully:

```bash
[instructor@pri-dns ~]$ ps -ef | grep -v grep | grep postfix
root      122055       1  0 18:53 ?        00:00:00 /usr/libexec/postfix/master -w
postfix   122057  122055  0 18:53 ?        00:00:00 qmgr -l -t unix -u
postfix   122105  122055  0 18:54 ?        00:00:00 tlsmgr -l -t unix -u
postfix   122216  122055  0 20:33 ?        00:00:00 pickup -l -t unix -u
```

- Look up the man page for "qmgr", "tlsmgr", and "pickup", and find out the purpose of those processes.

## Investigation 2: The SMTP Protocol

### SMTP protocol: commands/responses

- As a regular user on VM2, execute the commands given in the "Command" column and record the output in the corresponding "Response" column for future reference. Do not proceed if the first command does not establish a connection to the SMTP port on the local host.

**SMTP command / Response Table**

| - - - Command - - - |	- - - - - - - - - - - - Response - - - - - - - - - - - - |
| --- | --- |
| nc localhost 25	| 220 pri-dns.gbecker.ops ESMTP Postfix |
| HELO seneca.ops	| |
| ELHO seneca.ops	| |
| NOOP	| |
| RSET	| |
| VERB	| |
| EXPN ops535m	| |
| VRFY root	| |
| VRFY nobody	| |
| HELP	| |
| QUIT	| |

### Postfix service binding: /etc/postfix/main.cf

- Login to your VM1, and run the following nc command to try to connect to the SMTP server on your VM2:

```bash
nc 192.168.x.2 25 (replace x with your network number)
```

- You may get one of the following responses:

```bash
[instructor@router ~]$ nc 192.168.2.2 25
Ncat: No route to host.
```

or

```bash
[instructor@router ~]$ nc 192.168.2.2 25
Ncat: Connection refused.
```

- The 1st problem is due to the firewalld configuration on your VM2. You need to enable the smtp service.
- The 2nd problem is due to the configuration of postfix, its default configuration is just bind to the loop back interface.
- Switch back to VM2, backup the file /etc/postfix/main.cf to /etc/postfix/main.cf.org as root or by sudo.
- Study the contents of the file /etc/postfix/main.cf. (Look for the parameters you learned about in OPS335)
- Edit the file "/etc/postfix/main.cf" with the following changes:

```bash
comment out the line "inet_interfaces = localhost"
uncomment the line "inet_interfaces = all"
```

- Save the changes, and run the "diff" command on /etc/postfix/main.cf and /etc/postfix/main.cf.org and make sure you get something similar to the following:

```bash
[instructor@pri-dns ~]$ diff /etc/postfix/main.cf.org /etc/postfix/main.cf
132c132
< #inet_interfaces = all
---
> inet_interfaces = all
135c135
< inet_interfaces = localhost
---
> #inet_interfaces = localhost
```

- 132c132 means line 132 in /etc/postfix/main.cf.org has been changed to line 132 in /etc/postfix/main.cf and 135c135 means similarly.
- Restart "postfix" service on VM2.
- Check to confirm that postfix is listening on smtp port on all network interface (i.e. with local address 0.0.0.0):

```bash
[instructor@pri-dns ~]$ ss -at
State      Recv-Q     Send-Q         Local Address:Port           Peer Address:Port
...
LISTEN     0          100                  0.0.0.0:smtp                0.0.0.0:*
...
LISTEN     0          100                     [::]:smtp                   [::]:*
...
```

- Switch to VM1, and login as a regular user. Execute the commands given in the "Command" column and record the output in the corresponding "Response" column for future reference. Do not proceed if the first command does not establish a connection to the SMTP port on the VM2, replace the place holder \[VM2-IP-ADDR\] with your VM2's actual IP address.

**SMTP command / Response Table**

| - - - Command - - -	| - - - - - - - - - - - - Response - - - - - - - - - - - - |
| --- | --- |
| nc \[VM2-IP-ADDR\] 25 |	220 pri-dns.gbecker.ops ESMTP Postfix |
| HELO seneca.ops | |
| ELHO seneca.ops	| |
| NOOP	| |
| RSET	| |
| EXPN ops535m	| |
| VRFY ops535m	| |
| QUIT	| |

## Investigation 3: mail aliases and mailing list

### Files from the postfix rpm package

- Postfix keeps its configuration files in the /etc/postfix directory. Postfix's two main configuration files are /etc/postfix/main.cf and /etc/postfix/master.cf. On a CentOS 8.x system, you can use the "rpm -ql" command to get a list of all the files in the posftfix rpm package. You may notice that the postfix rpm package contains a few files named or partly named as "sendmail". You can get a list of those files with the following command:

```bash
rpm -ql postfix | grep sendmail
```

   - Investigate the purpose of the two files named "/usr/lib/sendmail" and "/usr/bin/sendmail".

- Postfix use an alias file to implement simple mailing list. The name and location of the alias file is configured in the main.cf file.
- Try the following command:

```bash
grep "alias_[maps|database]" main.cf | grep -v "#"
```

- and record the output for future reference.

### Configure mailing list for postfix

- On your VM2. Backup the file "/etc/aliases" to /etc/aliases.org" and execute the following commands as root:

```bash
[root@pri-dns ~]# echo "ops535m: adm,ftp" >> /etc/aliases
[root@pri-dns ~]# echo "smtp-lab:    student,instructor" >> /etc/aliases
[root@pri-dns ~]# newaliases
```

- Switch back to regular user and execute the command in the "Command" column and record the output in the "Response" column. Please replace the IP address place holder \[IP-Addr\] with the actual IP address of your VM2.

**SMTP command / Response Table**

| - - - Command - - - |	- - - - - - - - - - - - Response - - - - - - - - - - - - |
| --- | --- |
| nc \[IP-Addr\] 25 |	220 pri-dns.gbecker.ops ESMTP Postfix |
| HELO seneca.ops	| |
| EXPN ops535m	| |
| VRFY ops535m	| |
| VRFY smtp-lab	| |
| QUIT	| |

- Compare the results for "VRFY ops535m" in this investigation and the previous one and comment on their difference.
- Login using your Seneca user name <senaca_name> and execute the following command:

```bash
    /usr/sbin/sendmail -bv postmater
```

You should get a response similar to:

```text
    Mail Delivery Status Report will be mailed to <seneca_name>.
```

- Type the "mail" command and check for the "Mail Delivery Status Report" and answer the following questions:
    - (a) If a message is addressed to "postmater", who will actually receive the message?
    - (b) If a message is addressed to "smtp-lab", who (may be more than one) will actually receive the message?
- Study the /etc/aliases file on VM2.

## Investigation 4: Postfix's outgoing mail queues

### Perform the following steps as root on your VM2

- Run the following command and record the output:

```bash
    postconf queue_directory
```

- Enter the command "mailq" and "mailq -Ac" and record the outputs.
- The output of the above command indicates the directory used by Postfix to store outgoing messages that need to be transferred later. Does regular user has access to this directory? Record the name of the directory and its permission settings.
- By default, Postfix deliver incoming email messages directly to local user's mail box. Postfix can also configured to call other programs (mailers) to perform local delivery. To find out the name of the local delivery agent(s) that may be called by Postfix, try the following command:

```bash
    postconf mailbox_command
```

- According to the output from the command, what is the name of the local delivery agent?
- Configure your VM2 /etc/resolv.conf to have the nameserver point to your VM3 (i.e. you caching name server) and make sure that you can resolve your VM3's FDQN (i.e. co-nfs.mydomain.ops) to IP address. Issue the following command and record the output:

```bash
    /usr/sbin/sendmail -bv student@co-nfs.mydomain.ops
```

- Is the above email address deliverable by your Postfix server?
- If your Postfix server can handle the above email address, issue the following command and record the output:

```bash
    /usr/sbin/sendmail -v student@co-nfs.mydomain.op < /tmp/test.mesg
```

- Issue the command "mailq -Ac" and "mailq" and record the entire output for future reference.
- What is the queue IP for the queued message?
- Note: You should get something similar to the following:

```bash
[instructor@pri-dns ~]$ mailq
-Queue ID-  --Size-- ----Arrival Time---- -Sender/Recipient-------
B75BF20A6D85      294 Tue Mar  9 00:23:11  instructor@pri-dns.gbecker.ops
             (connect to co-nfs.gbecker.ops[192.168.2.3]:25: No route to host)
                                         rchan@co-nfs.gbecker.ops

-- 0 Kbytes in 1 Request.
```

- Run the following command with the Queue ID shown above (your Queue ID will not be the same as what is shown here) to find out the location of the outgoing message in the queue directory:

```bash
    cd /var/spool/postfix
    find ./ -name B75BF20A6D85 -print
```

- You should get something similar:

```bash
[instructor@pri-dns postfix]$ pwd
/var/spool/postfix
[instructor@pri-dns postfix]$ sudo find ./ -name B75BF20A6D85
./defer/B/B75BF20A6D85
./deferred/B/B75BF20A6D85
```

- If you got something similar to the above, investigate the information stored in those files (in this case, they are "./defer/B/B75BF20A6D85" and "./deferred/B/B75BF20A6D85". Record your findings for future reference.
- Issue the command /usr/sbin/sendmail -bp and compare the output to the command mailq.
- Remove both "./defer/B/B75BF20A6D85" "./deferred/B/B75BF20A6D85" and run the mailq command again.

## Investigation 5: Appends mail to files

The Postfix aliases file supports an option to append mail message addressed to a real user or virtual user to an external file. In this investigation, we are going to use a real email user named "rchan", and a virtual email user named "ops535" as the email recipients. The following are the steps to configure Postfix to append email addressed to these two email users to the file 'tmp/ops535.mail' and 'tmp/rchan.mail'.

- First, confirm that your system has the real user 'rchan' (replace with the real user name on your system) only:

```bash
  [instructor@pri-dns lab5]$ id rchan
  uid=1002(rchan) gid=1002(rchan) groups=1002(rchan)
  [instructor@pri-dns lab5]$ id ops535
  id: ‘ops535’: no such user
```

- Add the following two lines to the /etc/aliases files:

```bash
    rchan:       "/tmp/ops535.mail"
    ops535:      "/tmp/rchan.mail"
```

- Run the newaliases command to update the aliases database file.
- The above steps create a virtual email user (or mail alias) "ops535", and all the email messages addressed to "ops535" will be appended to the file "/tmp/ops535.mail".
- As a regular user on your VM2, create a file named "test.mesg" with the following contents:

```text
Postfix is a Mail Transport Agent (MTA),
supporting LDAP, SMTP AUTH (SASL), TLS
```

- Run the following two commands to send the same message to both the real email user "rchan" and virtual email user "ops535":

```bash
/usr/sbin/sendmail -v ops535 < test.mesg
/usr/sbin/sendmail -v rchan < test.mesg
```

- Go to the /tmp directory, and search for the files named "ops535.mail", and "rchan.mail". \[Hint: you have to look deeper into the /tmp directory\]
- Get the locations (i.e. path names), owners, permission settings, and contents of the above two files for lab submission.

## Completing the Lab

Please download the [check lab script named labcheck5.bash](https://raw.githubusercontent.com/rayfreeping/ops535/master/labs/labcheck5.bash) to your VM2, run the script under the 'student' user with sudo privilege and capture the output to a file and named it as lab5_vm3.txt:

```bash
    [student@pri-dns labs]$ sudo bash labcheck5.bash > lab5_vm2.txt
```

Upload the file "lab5_vm2.txt" to Blackboard by the posted lab5 due date.

## Review Questions

1. Why did you get “command not recognized” as the output for the EXPN command?
2. What does the VRFY command ask Postfix to do?
3. How do you add a mailing list called “helpdesk” on your Postfix VM so that all email send to the “helpdesk”mail list will be forwarded to user ldapuser1?
4. Would you be able to nc from your other virtual machines to the SMTP port on your VM2? If not, what do you need to change on your Postfix server to allow other machines to connect to the Postfix mail server?
5. What is the mail queue directory used by Postfix?
6. Who will receive the email address to "smtp-lab"?
7. What command will perform the same function as "/usr/sbin/sendmail -bi" ?
8. What is the absolute path and access permission of the directory used by Postfix to store outgoing messages?
9. What command would you use to get a Mail Delivery Status Report?
10. What command will show you the queue ID of an outgoing email waiting for delivery in the mail queue?
11. How do you locate the location of the queued message by Postfix?
12. How do you delete an outgoing message which is sitting in the queue directory?

## Original Lab in PDF format

- [Link to old Lab 5](https://www.dropbox.com/s/jwkc8mv7fo8b2wq/lab5.pdf?dl=1)

## References

- [RFC821](http://www.faqs.org/rfcs/rfc821.html)
- [RFC5321](http://www.faqs.org/rfcs/rfc5321.html)
