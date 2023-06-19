---
id: lab2-stage1
title: Lab 2 Part 1
sidebar_position: 4
description: Lab 2 Stage 1
---

# Lab 2 - Stage 1

## Purpose

Network File System (NFS) allows you to access files on remote hosts in exactly the same way you would access local files. It was originally created by Sun Microsystem and the implementation on Linux is largely by Rick Sladkey, who wrote the NFS kernel code and large parts of the NFS server. For more information about NFS, please refer to Chapter 14 of the online Network Administrator guide. You should also study chapter 23 of the course text book on NFS for this Lab. Designate vm2 as the NFS server.

## Pre-Requisites

- The pre-lab must be complete so that your virtual machines share access to a private network.
- Create a new user on each of your virtual machines using your own Seneca login.
- If you don't have the nfs-utils package installed, install it now.

## Investigation 1: NFS Server Setup

**Perform the following steps on vm2:**

1. Login to your machine as a regular user and enter the following command su -
2. Enter the command rpcinfo -p
3. Study the output and make notes of the first few lines. You should see two lines that end with the word "portmapper". If you don't, there is something wrong with your system, your system will not be able to provide NFS service. Ask for help if this is the case.
4. You should also see a line or two (or even more) that contains the word "nfs". If you don't, NFS is not running. If NFS is not running, you can start up NFS with the command:

```bash
systemctl start nfs-server
```

5. Create a directory named "/nfs-pub". Enter the command:

```bash
mkdir /nfs-pub
```

6. Change the file permission on "/nfs-pub" so everyone can read/write/list. Enter the command:

```bash
chmod 777 /nfs-pub
```

   - Make sure to double check that the file permissions have been set correctly.

7. To set the sticky bit on the directory "/nfs-pub" , use the command

```bash
chmod +t /nfs-pub
```

8. Edit your /etc/exports file and insert the following lines:

```bash
/nfs-pub ip-of-vm1(rw,root_squash)
/nfs-pub ip-of-vm3(rw,root_squash)
```

   - "ip-of-vm1" should be replaced by the actual IP address of vm1 (VM1),and "ip-of-vm3" should be replaced by the actual IP address of vm3 (VM3).
9. Enter the command

```bash
exportfs -a
```

   - to tell your NFS server to re-read the configuration file (/etc/exports) and take the appropriate action, i.e. to export the directory /nfs-pub to the specific host.
10. Enter the command

```bash
showmount -e
```

   - Make notes of the output and consult the man page of showmount to find out the purpose of this command.
11. Use the command "exit" to leave the super user shell and switch back to the regular user shell. Enter the command

```bash
id
```

   - to confirm your user id. Write down your user name, user ID and group ID.
12. Copy the file /etc/passwd into directory /nfs-pub as passwd.S. Enter the command

```bash
cp /etc/passwd /nfs-pub/passwd.S
```

13. Finally, confirm the file copying with the "ls -l" command and make notes of the output.
14. Modify the firewall on your server to allow incoming nfs traffic in your internal zone. Make sure this change persists past reboot.

## Investigation 2: File ownership of new files created on NFS shares

**Perform the following steps on VM1 as root:**

1. Enter the command

```bash
cat /proc/filesystems
```

   - Make notes of the output. You should see a list of file systems supported on your system. If "nfs" is missing from this list, your Linux kernel does not have NFS support compiled in. However, it is possible that your kernel do support NFS via kernel module. Try the command

```bash
modprobe nfs
```

   - and make notes of the output from the above command. If it indicates that the nfs module has been loaded successfully, try the `cat /proc/filesystems` command again.

2. Create the directory /nfs-mnt. We will use this as the mount point for the remote directory.
3. Use the mount command to attach the remote directory (**/nfs-pub** from vm2) into the local mount point (**/nfs-mnt**)
4. Use commands like mount or df to check that the mount command executed successfully (that is, that VM2's **/nfs-pub** is now being treated as part of the local filesystem).
5. Confirm that you can access the contents of **/nfs-mnt**. They should be identical to VM2's **/nfs-pub** (because it IS VM2's **/nfs-pub**). Note the owner and the group owner of the file passwd.S.
6. Still on VM1, copy the file **/etc/passwd** into the **/nfs-mnt** directory. Name the copy **passwd.A.root**.
7. Confirm that the file copied correctly. Again, make note of the owner and group owner of the file.
8. Switch to being a regular (**non-root**) user and copy the file **/etc/passwd** into the **/nfs-mnt** directory again, this time naming the copy **passwd.A.user**. Again, make note of the owner and group owner of the file. Note how it differs from the ownership of the file created as root.
9. Repeat this investigation on VM3, so that it also has access the shared filesystem. Replace the A in the copied filenames with B (e.g. passwd.B.root).

## Investigation 3: File creation permission and user name mapping on NFS shares

Create new users on the NFS server (vm2), and clients (vm1 and vm3) to study the user name mapping on NFS shares:

1. On the NFS server create two new users userS, and ops535 with the commands

```bash
useradd -u 5001 -m userS
useradd -u 5350 -m ops535
```

2. On vm1 create two new users userA, and ops535 with the commands

```bash
useradd -u 5001 -m userA
useradd -u 5350 -m ops535
```

   - And use the "passwd" command to set the passwords for those users

3. On vm1 login as userA and copy the password file to **/nfs-mnt**, naming the copy **passwd.A.map**. Confirm the copying of the file and make notes of the owner and group owner of the file.
4. Logout from userA and login as ops535. Copy the password file to **/nfs-mnt**, this time naming it **passwd.A.ops**. Again, make notes of the owner and group owner of the file.
5. Login to the NFS server, and examine the ownership of the files you just created. Who is the owner and the group owner of the respective files?
6. On your nfs-client machine, un-mount the remote directory. Please note that this must be done by "root" and the directory /nfs-mnt is not being used by any process.
7. On the NFS server, make the following changes to the /etc/exports file: change

```bash
/nfs-pub ip-of-vm1(rw, root_squash)
```

to

```bash
/nfs-pub ip-of-vm1(rw, no_root_squash)
```

and re-export the directory.

8. On the client, re-mount the share directory and repeat step 3 to step 6 under the super user account "root" and copy the file /etc/group to the share directory /nfs-mnt with the corresponding file name.
9. un-mount the remote directory.
10. On the NFS server, change the "rw" option in the /etc/exports file to "ro" and re-export the directory.
11. On the client, re-mount the share directory and repeat step 3 to step 6 under the super user account "root" and copy the file /etc/hosts to the share directory /nfs-mnt with the corresponding file name.
12. Observe how the different settings on the server affected the ownership and permissions of files created on the client side.
13. Repeat this investigation on vm3, naming the first user userB (instead of userA), and replace the A in any file names with B. When creating files, try to predict the ownership and permissions of the resulting files.

## Completing the Lab

You should now have a common part of the filesystem available to all three vms. Files you store there on one machine will be accessible for the other machines too. Note that this should only be available when using your internal, statically assigned addresses. You have also explored how access permissions are used between the machines, and since this service relies on UIDs accessed on each machine, keeping them synchronized between machines becomes vital. In a future lab we will explore a service that will manage that aspect of our networks.

Follow the instructions on blackboard to submit the lab.

## Exploration Questions

1. What is the purpose of the "su -" command?
2. What is the purpose of the "rpcinfo -p" command?
3. What information is stored in the /etc/exports file?
4. What information is provided by the "showmount -e" command?
5. Did your Linux kernel have NFS support compiled in?
6. What is the full path name of the nfs module file? i.e. where is it on your hard drive?
7. What is the purpose of the sticky bit?
8. Who is the owner of /nfs-mnt/passwd.A.root and /nfs-pub/passwd.A.root? Are they the same? Why?
9. Who is the owner of the file /nfs-mnt/passwd.A.user and /nfs-pub/passwd.A.user? Are they the same? Why?
10. Who is the owner of the file /nfs-mnt/passwd.A.map and /nfs-pub/passwd.A.map? Are they the same? Why and why not?
11. Who is the owner of the file /nfs-mnt/passwd.A.ops and /nfs-pub/passwd.A.ops? Are they the same? Why and why not?
12. Who is the owner of /nfs-mnt/group.A.root and /nfs-pub/group.A.root? Are they the same? Why?
13. Did the file /nfs-mnt/hosts.A.root get created? Why or why not?
