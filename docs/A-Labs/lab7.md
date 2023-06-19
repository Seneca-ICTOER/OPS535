---
id: lab7
title: Lab 7
sidebar_position: 12
description: Lab 7
---

# Lab 7

## Objectives

In this lab you will learn to

- configure postfix (an SMTP server) to use extra security to filter unwanted and suspicious email,
- configure DNS servers to provide extra records to allow mail servers to authenticate incoming mail.

## Pre-Requisites

- Complete Lab 5 (SMTP Lab), and Lab 6 (Routing Lab).
- A working primary DNS server for your domain,
- A basic knowledge of the SMTP protocol (covered in lab 5.

## Investigation 1: Configuring Postfix to use Restrictions

**Referenec**

- [Postfix Restrictions](https://wiki.centos.org/HowTos/postfix_restrictions)

**Perform the following steps as a regular user on your VM1**

1. Using the nc command and the smtp commands you already learned, connect to VM2 and send an email to your root user. Make sure to use the address and hostnames of your own VMs.

```bash
> nc 192.168.6.2 25
220 pri-dns.rchan.ops ESMTP Postfix
helo router.rchan.ops
250 pri-dns.rchan.ops
mail from: root@router.rchan.ops
250 2.1.0 Ok
rcpt to:root@pri-dns.rchan.ops
250 2.1.5 Ok
data
354 End data with <CR><LF>.<CR><LF>
test
.
250 2.0.0 Ok: queued as 728CB82ECF6
quit
221 2.0.0 Bye
```

2. Send another email, but this time skip the HELO command.
  - Notice that the email is accepted anyway.
3. Edit the /etc/posftfix/main.cf file on VM2 and add the following line (restarting once you have done so):

```bash
smtpd_helo_required = yes
```

4. Try sending an email without the HELO command again.
    - Notice that it is immediately rejected.
    - This simple step will filter out a surprising amount of spam, as many spam email servers skip the helo step in order to save time when sending massive amounts of email.
5. Send another email using nc, this time include the helo command, but just put junk in it.
    - smtpd_helo_required doesn’t do anything to check the data in the helo command, it just requires that the connecting server says helo.
6. Edit the /etc/posftfix/main.cf file on VM2 and add the following line (restarting once you have done so):

```bash
smtpd_helo_restrictions = reject_non_fqdn_helo_hostname, permit
```

   - Send another email, again using junk in the helo command.
   - Notice that the email does get rejected on the basis of the non-fully-qualified hostname, but that it does not happen until you try to use the rcpt to command.
   - By default, most rejections will behave this way, gathering as much information as possible about the potentially malicious machine, but preventing it from actually sending the mail.By default, most rejections will behave this way, gathering as much information as possible about the potentially malicious machine, but preventing it from actually sending the mail.

7. We will force rejections to happen immediately, so that you can see the effects of each parameter as we add them.
    - Edit the /etc/posftfix/main.cf file on VM2 and add the following line:

```bash
smtpd_delay_reject = no
```

   - I am going to stop reminding you to restart the service after changing every parameter, just assume that you should do so anytime you make a change to the configuration file.
8. Try to send your email again.
    - This time you should see the rejection message as soon as you try to use the malformed helo command.
     There are other restrictions you can use to filter mail based on the contents of the helo command, but I will let you explore those yourself.
9. You can also filter mail based on the client machine attempting to connect to you. For example, if it doesn’t have an A or PTR records in DNS, then it almost certainly is not a legitimate email server.
    - Edit the /etc/posftfix/main.cf file on VM2 and add the following line:

```bash
smtpd_client_restrictions = reject_unknown_client_hostname, permit
```

   - Checking the effects of this might be more complicated, as you will need a machine that doesn’t exist in DNS.
        - Change your VM1's 192.168.x.0/24 IP address to a different value, for example, 192.168.x.53. but in the same network.
        - Try to connect with nc again. You should get rejected immediately.
   - Edit the smtpd_client_restrictions line you just added to /etc/posftfix/main.cf file on VM2:

```bash
smtpd_client_restrictions = permit_mynetworks, reject_unknown_client_hostname, permit
```

   - Try to connect with nc again. This time you are allowed to connect. Because you are in a network defined in the servers mynetworks parameter (that is, your other machine is ‘trusted’), you pass this check and are not subject to the reject_unknown_client_hostname restriction.
10. You can also filter mail based on the sender’s address. For example, if it isn’t a properly formatted email address, it is probably spam.
    - edit the /etc/posftfix/main.cf file on VM2 and add the following line:

```bash
smtpd_sender_restrictions = permit_mynetworks, reject_non_fqdn_sender, reject_unknown_sender_domain, permit
```

   - These will reject email if the sender’s address provided in the mail from command is not a fully qualified email address, or if the sending email address does not have an MX record that matches it (this is why your emails to Seneca’s servers in OPS335 often failed).
   - Notice the inclusion of two settings we also used in previous restrictions, particularly permit_mynetworks, exempting your own machines from these checks.
   - Back on VM1, us the nc command to try to send emails that will pass and fail this restriction.
11. You can filter mail based on the recipient’s address as well. For example, if it isn’t a properly formatted email address, it is possibly spam.
    - Edit the /etc/posftfix/main.cf file on VM2 and add the following line:

```bash
smtpd_recipient_restrictions = permit_mynetworks, reject_non_fqdn_recipient, reject_unauth_destination, permit
```

   - These will reject email if the recipient address provided in the rcpt to command is not a fully qualified email address, or if email address it is being sent to would not match your mydestination parameter.
   - Notice the inclusion of two settings we also used in previous restrictions, particularly permit_mynetworks, exempting your own machines from these checks.
   - Back on VM1, us the nc command to try to send emails that will pass and fail this restriction.
12. There are even restrictions you can place on email that you are relaying to another server. These are governed by the smtpd_relay_restrictions parameter.
    - Edit the /etc/posftfix/main.cf file on VM2 and add the following line:

```bash
smtpd_relay_restrictions = reject_unauth_destination, reject_unknown_recipient_domain, permit
```

   - These restrictions will reject that the sending MTA tried to relay through your server if the destination is not in relay_domains, or if the domain has no MX record.
   - Note that the reject_unauth_destination setting can show up here and in recipient restrictions. It is the same parameter, but has a different effect.
13. There are more restrictions that you can place on incoming email, but the checks you have added in this investigation will eliminate the vast majority of spam. Anything that is not following the RFCs properly (e.g. skipping the helo command) will be blocked. One thing you will notice about the checks related to DNS records is that they are only checking that the records are there, not that they are correct, or that the server sending us mail actually is the machine it is claiming to be.

## Investigation 2: Configuring Postfix to Check SPF Records

Perform the following steps as root on your VM2

1. Now that you know your email server is restricting incoming (and relayed) mail based on some simple checks, we can add in some information from DNS to improve these checks. For example, we can lookup the DNS records for the domain that seems to be sending us email and check if the ip address of the machine sending us mail matches on of the MX records.
2. To see what is not being caught by the restrictions so far, use nc to send an email to your server claiming to be from root@rchan.ops.
    - The email goes through because that domain has a properly configured MX record, even though your ip address doesn’t match it.
    - Sender Policy Framework (SPF) will fix that.
3. First we will add the sender policy framework to our mail server:
    - Install the pypolicyd-spf package
    - Add spf as a spawnable process. To do so, add the following line to /etc/postfix/master.cf:

```bash
policyd-spf unix – n n – 0 spawn user=nobody argv=/usr/libexec/postfix/policyd-spf
```

   - Finally, add an spf check to the recipient restrictions in /etc/postfix/main.cf:

```bash
check_policy_service unix:private/policyd-spf
```

4. Now try to send another email to your server, again claiming to be from root@rchan.ops.
    - This time it will get blocked, because your server looks up the DNS record and finds out that you are not actually the mail server for that domain.
  
## Investigation 3: Configuring DNS to Provide SPF Records

Perform the following steps as root on your VM2(also your primary DNS server)

1. SPF depends on the DNS server providing information about which machines are supposed to be sending mail for that domain.
2. Each spf record (a specially formatted TXT record) identifies which machines can send mail for the domain, and the machines in that domain, and which machines can not.
3. Add the following record to your DNS zone:

```text
@ IN TXT "v=spf1 mx -all"
```

   - This specifies that for your domain (@), machines with MX records are allowed to send email, but no other machines should (-all).
4. Now try to send email to your server, claiming to be host.<yourdomain\>.ops sending mail from root@<yourdomain\>.ops
    - It should now fail, because SPF sees that it doesn’t match.
5. Try to send that email again, this time claiming to be from root@host.<yourdomain\>.ops
    - This gets through the check because the record you added in step three is only for the domain, not the individual machines in it.
    - To properly secure mail, you need an spf record for every machine too.
    - So add an spf record like the one above for every machine in your domain, replacing the @ with the hostname.
       - If you remember how to use white-space at the beginning of records, you can save yourself some typing.
    - Now try to send the email claiming to be root@host.<yourdomain\>.ops again. This time it should fail.
6. There is one more SPF record needed to stop someone from spoofing our mail. We need a record for the machines that don’t exist, otherwise someone can just claim to be sending mail from a machine name you don’t have, or a sub-domain.
    - First, send yet another email, this time claiming to be from root@.void<yourdomain\>.ops (or some other machine that doesn’t exist).
    - Now add the following record to your zone:

```bash
*.<yourdomain>.ops. IN TXT "v=spf1 mx:<yourdomain>.ops -all"
```

   - This acts as a wildcard and says that any machine in your domain that doesn’t have a record, and any sub-domain that doesn’t have a record should only be sending email from one of your mail servers with the MX records.
   - Try sending your spoofed email again. It should no longer work.

## Completing the Lab

Your DNS and email servers are now cooperating to filter email and prevent malicious email from being sent to your users. They are also providing information making it difficult for others to impersonate your domain. There are more restrictions that can be used, and situations where your spf records would look different, but this is a good basis for any domain.

Follow the instructions on blackboard to submit the lab.
