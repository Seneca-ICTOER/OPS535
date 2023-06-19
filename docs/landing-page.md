---
id: landing-page
title: Welcome to OPS535
sidebar_position: 1
slug: /
description: Landing Page for OPS535
---

# Welcome to OPS535 

## Advanced Network Administration

## Quick Links

| [Weekly Schedule](./weekly-schedule.md) | [Course Outline](https://scs.senecac.on.ca/course/ops535) | [Fedora Project](http://fedoraproject.org/) | [Fedora documentation](http://docs.fedoraproject.org/) |
| --- | --- | --- | --- |

## Assignments

| [Assignment 1](/B-Assignments/assignment1.md) | [Assignment 2](/B-Assignments/assignment2.md) |
| --- | --- |

## What This Course is About

This course teaches the maintenance, administration, and troubleshooting in an Linux virtualized environment . Students will learn to install configure, customize, test and maintain common services available on Linux servers. This course is the fifth in a series of courses about Linux technologies.

- ULI101 taught you to be Linux user.
- OPS235 taught you to move from being a Linux user to being a Linux system administrator.
- OPS335 taught you to administer Linux servers (web servers, DNS servers, FTP servers, file sharing servers).
- OPS435 taught you how to automate server administration tasks using scripting tools
- OPS535 give you an opportunity to put your Linux Sever administrator skills in action by integrating NFS, DNS, LDAP, HTTP, SMTP and networking services and provide solutions to real world problems.

In this course you use a removable disk pack with the lab computers to set up a Linux system as a IP network router. You will also create and set up several VMs on your Linux host to provide various network services.

## Learning by Doing

Most of the learning in this course occurs through the hands-on problem solving that takes place in doing labs and two assignments. Therefore, it's very important to stay up-to-date with the coursework, and to practice until you have confidently mastered each task.

All of the software used in this course is _open source_ software, so you are free to use, modify, and redistribute it. This means that you can install it as many times as you want on as many different computers as you would like. It also means that you can tinker with it -- you can take it apart, see how it works, and put it back together in the same or a different way, limited only by your time and ambition. You are encouraged to experiment and question liberally.

## Weekly Schedule

Weekly topic, lab, and assignment information is available on the [OPS535 Weekly Schedule](./weekly-schedule.md) page.

## Supplies Checklist

Needed by the second class:

  1. **Centos 8 Full Install DVD** (x86_64). The image is available from:

      - [Seneca's mirror of centos](https://mirror.senecacollege.ca/centos/8/isos/x86_64/CentOS-8.2.2004-x86_64-dvd1.iso)
      - https://www.centos.org/download/mirrors/ - Centos mirror list accessible from any Internet connection.

  2. One **Solid State Drive (SSD), mininmum capacity: 240 GB (USB 3.0)**. It is strongly advised you dedicate a drive for this course only.
  3. **USB flash drive** (64GB or larger recommended).
  4. **Text** - Linux Administration - A Beginner's Guide, 7th Edition by Wale Soyinka, ISBN 978-0-07-184536-6, Published by Mc Graw Hill

**Bring all of these supplies to each class. Even after installation, the installation DVD and flash drive may be required.**

**Do not share your OPS535 disk drive with another course: The work you do in this course will render your other work inaccessible and may erase it.**

## Faculty

During the Fall 2020 semester, OPS535 is taught by:

- [Raymond Chan](https://matrix.senecacollege.ca/~raymond.chan)

## Course Information

**Important Websites**

- [School of Information and Communications Technology](https://ict.senecacollege.ca/students/home) (includes class cancellation information and general bulletins)

**Evaluation:**

| Evaluation | Marks |
| --- | --- |
| 10 labs | 10% |
| Quizzes (Minimum 5) | 10% |
| Tests (Minimum 1) | 20% |
| Two assignments | 30% |
| Final Assessment | 30% |

## Tips and Suggestions

- Always shut down your system under software control, rather than using the reset or power buttons. You can shutdown using the GUI or with the `poweroff`, `reboot`, `init`, or `shutdown` commands.

**Always shut down your virtual machines before shutting down your main system: If you do not shut down the virtual machines first, they may become unstable or unusable.**

- If you get a message about the gnome-power-manager configuration at the login screen, you may have run out of disk space. Switch to a character-mode virtual terminal (for example, switch to VT2 by pressing Ctrl-Alt-F2). Login and take a look at the available space (with the command: `df -h`). If the / filesystem is full, delete some files (such as unused VM images in `/var/lib/libvirt/images`) and then reboot the system.
