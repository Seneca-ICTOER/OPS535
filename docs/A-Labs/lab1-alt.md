---
id: lab1-alt
title: Lab 1 Alternate
sidebar_position: 3
description: Lab 1 Alternate
---

# Alternate Ansible Lab 1

## Objective

1. Install and configure Ansible on a controller Linux machine
2. Explore Ansible's ad hoc commands
3. Explore Ansible's built-in modules
4. Explore and create Ansible playbooks

## Overview

Ansible is an agentless IT automation engine for automating cloud provisioning, configuration management, application deployment, intra-service orchestration, and many other IT system administration tasks.

Ansible uses no additional custom security infrastructure, and it uses a very simple human readable language called 'YAML', to compose an Ansible Playbook which allow you to describes the tasks you want to automate.

## Reference

- For more detail information about ansible, check out the ansible web site at www.ansible.com
- [Overview](https://www.ansible.com/overview/how-ansible-works)
- [Ansible Latest User Guide](https://docs.ansible.com/ansible/latest/user_guide/index.html)
- [Ansible Configuration Management](https://proquest-safaribooksonline-com.libaccess.senecacollege.ca/book/operating-systems-and-server-administration/linux/9781785282300) - Second Edition
    - By: Daniel Hall, Publisher: Packt Publishing Pub.
    - Date: April 27, 2015,ISBN-13: 978-1-78528-230-0
    - Pages in Print Edition: 122

## System requirements

The instruction in this lab has been tested for CentOS 8.3.2011, and

- You must have at lease two networked machines
    - control machine - run ansible to configure remote node - need Ansible 2.9.16 (The IP address of control machine used in the example in this lab is 192.168.49.1)
    - managed machine(s) - to be managed by the control node (The IP address of the managed machine used in the examples in this lab is 192.168.49.3)
- You should be able to ssh from your control machine as a regular user to any of your remote machines as regular user without supplying a login password.
- You account on the remote machine should be a sudoer and can run sudo without password.
- You should also be able to ssh from your control machine as a regular user to any of your remote machines as root without supplying a login password
- Python 3.6+ on all nodes

## Investigation 1: Introduction to Ansible

In this introduction, we explore the main components of the Ansible configuration management system and its operating environment. we also study a simple playbook for managing the configuration of a CentOS 8.x VM.

You need at least two VMs for this lab: one VM to be used as the control machine and one or more VMs to be used as the managed machines. You only need to install Ansible on the control machine.

### Key Concepts when using Ansible

- YAML - a human-readable data serialization language use by Ansible's playbooks. To know more, your can check out the [wikipedia page here](https://en.wikipedia.org/wiki/YAML)
- Control machine - the host on which you use Ansible to execute tasks on the managed machines
- Managed machine - a host that is configured by the control machine
- [Hosts file](/C-ExtraResources/sample-ansible-hosts.md) - contains information about machines to be managed - click [here](/C-ExtraResources/sample-ansible-hosts.md) for sample hosts file
- Ad hoc commands - a simple one-off task:
    - **shell commands**
        - ansible 192.168.49.3 -a 'date'
        - ansible 192.168.49.3 -a 'df'
        - ansible 192.168.49.3 -a 'iptables -L -n -v' -u root
- Built-in modules - code that performs a particular task such as copy a file, installing a package, etc:
    - **copy module**
        - ansible 192.168.49.3 -m copy -a "src=/home/rchan/ops535/ansible.txt dest=/tmp/ansible.txt"
        - Package management
        - ansible 192.168.49.3 -m dnf -a "name=bind state=latest"
- Playbooks - contains one or multiple plays, each play defines a set of repeatable tasks on one or more managed machines. Playbooks are written in YAML. Every play in the playbook is created with environment-specific parameters for the target machines:
    - ansible-playbook -i 192.168.49.3, setup_webserver.yaml
    - ansible-playbook firstrun.yaml

### Part 1: Installing Ansible on CentOS 8

You only need to install the "ansible" package on your control VM.

- Issue the following command to install the "ansible" package:

```bash
sudo yum install ansible -y
```

- You may have to install the following dependent packages:

```bash
Dependencies resolved.
==========================================================================================
 Package                    Architecture   Version                Repository         Size
==========================================================================================
Installing:
 ansible                    noarch         2.9.17-1.el8           epel               17 M
Installing dependencies:
 libsodium                  x86_64         1.0.18-2.el8           epel              162 k
 python3-babel              noarch         2.5.1-5.el8            appstream         4.8 M
 python3-bcrypt             x86_64         3.1.6-2.el8.1          epel               44 k
 python3-jinja2             noarch         2.10.1-2.el8_0         appstream         538 k
 python3-jmespath           noarch         0.9.0-11.el8           appstream          45 k
 python3-markupsafe         x86_64         0.23-19.el8            appstream          39 k
 python3-pyasn1             noarch         0.3.7-6.el8            appstream         126 k
 python3-pynacl             x86_64         1.3.0-5.el8            epel              100 k
 sshpass                    x86_64         1.06-9.el8             epel               27 k
Installing weak dependencies:
 python3-paramiko           noarch         2.4.3-1.el8            epel              289 k

Transaction Summary
==========================================================================================
Install  11 Packages

Total download size: 23 M
Installed size: 123 M
Is this ok [y/N]:
```

- To confirm that you have Ansible installed, try the following command:

```bash
[rchan@c8 ~]$ ansible --help
usage: ansible [-h] [--version] [-v] [-b] [--become-method BECOME_METHOD]
               [--become-user BECOME_USER] [-K] [-i INVENTORY] [--list-hosts]
               [-l SUBSET] [-P POLL_INTERVAL] [-B SECONDS] [-o] [-t TREE] [-k]
               [--private-key PRIVATE_KEY_FILE] [-u REMOTE_USER]
               [-c CONNECTION] [-T TIMEOUT]
               [--ssh-common-args SSH_COMMON_ARGS]
               [--sftp-extra-args SFTP_EXTRA_ARGS]
               [--scp-extra-args SCP_EXTRA_ARGS]
               [--ssh-extra-args SSH_EXTRA_ARGS] [-C] [--syntax-check] [-D]
               [-e EXTRA_VARS] [--vault-id VAULT_IDS]
               [--ask-vault-pass | --vault-password-file VAULT_PASSWORD_FILES]
               [-f FORKS] [-M MODULE_PATH] [--playbook-dir BASEDIR]
               [-a MODULE_ARGS] [-m MODULE_NAME]
               pattern
...
```

- Take a look of all the available command line options for the "ansible" command. There are a lots of options when running Ansible. Let's move on to try a few simple ones.
- To get more detail information about the version of ansible installed on your system, try to following command:

```bash
[rchan@host ~]$ ansible --version
ansible 2.9.17
  config file = /etc/ansible/ansible.cfg
  configured module search path = ['/home/rchan/.ansible/plugins/modules', '/usr/share/ansible/plugins/modules']
  ansible python module location = /usr/lib/python3.6/site-packages/ansible
  executable location = /usr/bin/ansible
  python version = 3.6.8 (default, Aug 24 2020, 17:57:11) [GCC 8.3.1 20191121 (Red Hat 8.3.1-5)]
```

### Part 2: Sample runs for some of the Ad hoc commands

```bash
[rchan@host ~]$ ansible 192.168.49.3 -m copy -a "src=/home/rchan/ops535/ansible/ansible.txt dest=/tmp/ansible.txt"
192.168.49.3 | CHANGED => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/libexec/platform-python"
    },
    "changed": true,
    "checksum": "82548876259158d4ba80a56ff311664353e49271",
    "dest": "/tmp/ansible.txt",
    "gid": 1000,
    "group": "rchan",
    "md5sum": "0bcc4d27cff6cd55138dd615a09669ab",
    "mode": "0664",
    "owner": "rchan",
    "secontext": "unconfined_u:object_r:user_home_t:s0",
    "size": 132,
    "src": "/home/rchan/.ansible/tmp/ansible-tmp-1611895800.9722285-30336-117758560038295/source",
    "state": "file",
    "uid": 1000
}
```

- 192.168.49.3 is the remote machine's IP address.
- "-m copy" tells ansible to use the copy module (type ansible-doc copy for module documentation)
- after '-a' is the arguments to the copy module, which specify the source file and the destination for the copy action.
- If you got the same "CHANGED" status message, login to the remote machine (in this example, 192.168.49.3) and check the directory "/tmp" for the file ansible.txt.

### Part 3: Sample runs for using some Ansible's built-in modules

"yum" is a built-in ansible module. You can get a complete list of all the ansible modules installed on you system with the following command:

```bash
    ansisble-doc --list_files
```

You can also get the detail information about any ansible module with the following command:

```bash
    ansible-doc module_name

    e.g. ansible_doc copy
    e.g. ansible_doc dnf
```

The following command demonstrates how to install the "bind" package with the "yum" module and the response message under different conditions:

```bash
[rchan@host ~]$ ansible 192.168.49.3 -m dnf -a "name=bind state=present" -b
192.168.49.3 | CHANGED => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/libexec/platform-python"
    },
    "changed": true,
    "msg": "",
    "rc": 0,
    "results": [
        "Installed: bind-32:9.11.20-5.el8.x86_64"
    ]
}
```

Try the same ansible ad-hoc command again:

```bash
[rchan@host ~]$ ansible 192.168.49.3 -m dnf -a "name=bind state=present" -b
192.168.49.3 | SUCCESS => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/libexec/platform-python"
    },
    "changed": false,
    "msg": "Nothing to do",
    "rc": 0,
    "results": []
}
```

Try to install the latest version of the bind package:

```bash
[rchan@host ~]$ ansible 192.168.49.3 -m dnf -a "name=bind state=latest" -b
192.168.49.3 | SUCCESS => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/libexec/platform-python"
    },
    "changed": false,
    "msg": "Nothing to do",
    "rc": 0,
    "results": []
}
```

### Part 4: Gather software and hardware information available on remote machine

One of the main ansible module is called "setup", it is automatically called by ansible playbook to gather useful "facts" about remote hosts that can be used in ansible playbooks. It can also be executed directly by the ansible command (/usr/bin/ansible) to check what "facts" are available to a host.

```bash
[rchan@host ~]$ ansible 192.168.49.3 -m setup
192.168.49.3 | SUCCESS => {
    "ansible_facts": {
        "ansible_all_ipv4_addresses": [
            "192.168.149.3",
            "192.168.49.3",
            "192.168.99.162"
        ],
        "ansible_all_ipv6_addresses": [],
        "ansible_apparmor": {
            "status": "disabled"
        },
        "ansible_architecture": "x86_64",
        "ansible_bios_date": "04/01/2014",
        "ansible_bios_version": "1.13.0-2.module_el8.3.0+555+a55c8938",
        "ansible_cmdline": {
            "BOOT_IMAGE": "(hd0,msdos1)/vmlinuz-4.18.0-240.1.1.el8_3.x86_64",
            "crashkernel": "auto",
            "quiet": true,
            "rd.lvm.lv": "cl/swap",
            "resume": "/dev/mapper/cl-swap",
            "rhgb": true,
            "ro": true,
            "root": "/dev/mapper/cl-root"
        },
        "ansible_date_time": {
            "date": "2021-01-29",
            "day": "29",
            "epoch": "1611896933",
            "hour": "00",
            "iso8601": "2021-01-29T05:08:53Z",
            "iso8601_basic": "20210129T000853810313",

...

        "ansible_swapfree_mb": 2047,
        "ansible_swaptotal_mb": 2047,
        "ansible_system": "Linux",
        "ansible_system_capabilities": [
            ""
        ],
        "ansible_system_capabilities_enforced": "True",
        "ansible_system_vendor": "Red Hat",
        "ansible_uptime_seconds": 21711,
        "ansible_user_dir": "/home/rchan",
        "ansible_user_gecos": "Raymond Chan",
        "ansible_user_gid": 1000,
        "ansible_user_id": "rchan",
        "ansible_user_shell": "/bin/bash",
        "ansible_user_uid": 1000,
        "ansible_userspace_architecture": "x86_64",
        "ansible_userspace_bits": "64",
        "ansible_virtualization_role": "guest",
        "ansible_virtualization_type": "kvm",
        "discovered_interpreter_python": "/usr/libexec/platform-python",
        "gather_subset": [
            "all"
        ],
        "module_setup": true
    },
    "changed": false
}
```

[Click here for complete contents of the above](/C-ExtraResources/ansible-setup.md)

## Investigation 2: Ansible Playbook

### What is a playbook?

* Playbook is one of the core features of Ansible.
* Playbook tells Ansible what to execute by which user on the remote machine.
* Playbook is like a to-do list for Ansible
* Playbook is written "YAML".
* Playbook links a task to an ansible module and provide needed arguments to the module which requires them.

### Part 1: A playbook to update the /etc/motd file

Name: motd-play.yml

```bash
---
- hosts: 192.168.49.3
  user: rchan
  become: yes
  vars:
    apache_version: 2.6
    motd_warning: 'WARNING: use by ITAS faculty/students only.'
    testserver: yes
  tasks:
    - name: setup a MOTD
      copy: 
        dest: /etc/motd
        content: "{{ motd_warning }}"
```

Sample Run:

```bash
[rchan@host ansible]$ ansible-playbook motd-play.yml

PLAY [192.168.49.3] **********************************************************************

TASK [Gathering Facts] *******************************************************************
ok: [192.168.49.3]

TASK [setup a MOTD] **********************************************************************
changed: [192.168.49.3]

PLAY RECAP *******************************************************************************
192.168.49.3               : ok=2    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   

```

### Part 2: A playbook to install and start Apache Server

Name: httpd-play.yml

```bash
---
- hosts: 192.168.49.3
  user: rchan
  become: yes
  vars:
    apache_version: 2.6
    motd_warning: 'WARNING: use by ITAS faculty/students only.'
    testserver: yes
  tasks:
    - name: install apache
      action: yum name=httpd state=installed
    
    - name: restart apache
      service: 
        name: httpd
        state: restarted
```

Sample Run:

```bash
[rchan@host ansible]$ ansible-playbook httpd-play.yml

PLAY [192.168.49.3] **********************************************************************

TASK [Gathering Facts] *******************************************************************
ok: [192.168.49.3]

TASK [install apache] ********************************************************************
changed: [192.168.49.3]

TASK [restart apache] ********************************************************************
changed: [192.168.49.3]

PLAY RECAP *******************************************************************************
192.168.49.3               : ok=3    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   
 
```

Login to 192.168.49.3 and verify that apache web server has been installed and is up and running.

## Investigation 3: Using Playbook to config a CentOS 8.x VM for OPS535

- You have just installed the latest version of CentOS 8.x on a VM with minimal packages. You need to configure it for doing OPS535 labs. The following configuration need to be done on that VM:
- update all the packages installed on the VM to their latest version using the dnf module.
- install extra packages repository for enterprise Linux using the dnf module
- install the git package using the dnf module
- create a new user with your Seneca_id (i.e. your Seneca user name) with sudo access
- configure the new user account created in the previous step so that you can ssh to it without password
- setup a directory structs for completing and organizing labs as shown below:

```bash
      /home/[seneca_id]/ops535/lab1
      /home/[seneca_id]/ops535/lab2
      /home/[seneca_id]/ops535/lab3
      /home/[seneca_id]/ops535/lab4
      /home/[seneca_id]/ops535/lab5
      /home/[seneca_id]/ops535/lab6
      /home/[seneca_id]/ops535/lab7
      /home/[seneca_id]/ops535/lab8
      /home/[seneca_id]/ops535/a1
      /home/[seneca_id]/ope535/a2
```

- create a playbook named "ops535_vm_config.yml" to perform all the tasks mentioned above.
- test your playbook with the ansible-playbook command and capture its output to a text file named "ops535_ansible_lab.txt"

## Ansible Lab Sign-off (Show Instructor)

**Have the following items ready to show your instructor:**

* The Ansible playbook called "ops535_vm_config.yml" for configuring the VM.
* The result of running the playbook "ops535_vm_config.yml". Save the result in a file called "ops535_ansible_lab.txt"

**Upload the following files to blackboard**

* ops535_vm_config.yml
* ops535_ansible_lab.txt
