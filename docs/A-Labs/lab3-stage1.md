---
id: lab3-stage1
title: Lab 3 Part 1
sidebar_position: 6
description: Lab 3 Stage 1
---

# Lab 3 - Stage 1

## Purpose

The OpenLDAP software package is a Free and Open Source implementation of the Lightweight Directory Access Protocol (LDAP). It is gaining wide acceptance as the directory access method of the Internet and also with corporate intranets. In this lab, you set up and configure an OpenLDAP server to provide directory service for LDAP Clients to authenticate network users. You can use OpenLDAP server to replace NIS to centrally store network user account information for OpenLDAP client to authenticate network users. The basic components of an LDAP server are its Object Classes and Attribute types defined in one or more Schema. To provide the necessary attribute types (ie. Field) for storing Linux (or Unix, aka Posix) user accounts, you need to include the “cosine”, “nis”, and “inetorgperson” schemata in addition to the “core” schema. Notes: OpenLDAP Use TCP port 389 for regular network communication between clients and servers, and use port 636 for encrypted network communication between clients and servers. If you have firewalls between your LDAP server and LDAP clients, you need to open the above TCP ports on the firewall to allow LDAP traffic to get through.

Designate vm1 as your LDAP server and use vm2 and vm3 as LDAP clients

## Pre-Requisites

The pre-lab must be complete so that your virtual machines share access to a private network. Lab 1 must be complete so each machine has a well configured firewall. Make sure each machine is fully updated.

## References

- https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_authentication_and_authorization_in_rhel/configuring-sssd-to-use-ldap-and-require-tls-authentication_configuring-authentication-and-authorization-in-rhel
- https://www.golinuxcloud.com/configure-openldap-with-tls-certificates/
- https://www.golinuxcloud.com/ldap-client-rhel-centos-8
- https://kifarunix.com/configure-sssd-for-openldap-authentication-on-centos-8/

## Investigation 1: OpenLDAP Server Setup and Configuration

**Warning: Make a backup before you start this lab. It is very difficult to recover this service if you make a mistake in configuration.**

**Perform the following steps on vm1**

1. Install yum-utils
2. Install the symas ldap repo (who now maintain a version of it available for Centos 8:

    - yum-config-manager --add-repo=https://repo.symas.com/configs/SOFL/rhel8/sofl.repo

3. Install the following packages

    - openldap
    - symas-openldap-clients
    - symas-openldap-servers
    - perl

4. In older releases a package called 'migrationtools' was available that contained a number of perl scripts used to convert information from other sources (e.g. /etc/passwd) into ldif files. Since it is no longer part of standard repos in Centos 8, download the copy I have provided on blackboard and extract it to /usr/share/migrationtools.
5. Check the content of the file directory **/etc/openldap/slapd.d/cn=config/** for the top branch of OpenLDAP directory configuration files:

```bash
cn=schema
cn=schema.ldif
olcDatabase={0}config.ldif
olcDatabase={1}monitor.ldif
olcDatabase={-1}frontend.ldif
olcDatabase={2}mdb.ldif
```

   - Examine the contents of olcDatabase={2}mbd.ldif:

```bash
# AUTO-GENERATED FILE - DO NOT EDIT!! Use ldapmodify.
# CRC32 d9b49d55
dn: olcDatabase={2}hdb
objectClass: olcDatabaseConfig
objectClass: olcMdbConfig
olcDatabase: {2}mdb
olcDbDirectory: /var/lib/ldap
olcSuffix: dc=my-domain,dc=com
olcRootDN: cn=Manager,dc=my-domain,dc=com
olcDbIndex: objectClass eq,pres
olcDbIndex: ou,cn,mail,surname,givenname eq,pres,sub
structuralObjectClass: olcMdbConfig
entryUUID: 5a8d299a-3f2f-1036-9244-a7abff537081
creatorsName: cn=config
createTimestamp: 20161115032843Z
entryCSN: 20161115032843.258885Z#000000#000#000000
modifiersName: cn=config
modifyTimestamp: 20161115032843Z
```

6. Verify that the directory for storing the OpenLDAP database (**/var/lib/ldap**) is owned by ldap:ldap. If this is not the case, fix it now.
7. Verify that the core schema file (**/etc/openldap/slapd.d/cn=config/cn=schema**) is also owned by ldap:ldap.
8. Start the ldap service (**slapd**), and ensure that it will automatically start when your machine boots. Check the status of the service and ensure that it started without error before continuing.
9. Use the ldap add command to add the cosine, nis, and inetorgperson schemata to your server **in that order**. Use the authentication type **EXTERNAL**, and **ldapi:///** as the host.
10. List the schema directory again. This time you should see the core schema, along with the three schemata you just added.
11. Run an ldapsearch to check that the service is running and will respond to queries:

```bash
[root@rns ~]# ldapsearch -x -b '' -s base '(objectClass=*)' namingContexts
# extended LDIF
#
# LDAPv3
# base <> with scope baseObject
# filter: (objectClass=*)
# requesting: namingContexts
#
#
dn:
namingContexts: dc=my-domain,dc=com
# search result
search: 2
result: 0 Success
# numResponses: 2
# numEntries: 1
```

12. Next, you will need a password for the ldap administrator (RootDN), so that they can run commands to modify the database. Use the slappasswd command to create one, and record the output.
13. Insert your new password into the following ldif file, and apply it to your database with the ldapmodify command

**Warning: Do not store your ldif files (or any other files) in the ldap configuration directory. Every file in that directory is automatically read as configuration for ldap.**

```bash
# customize domain name
dn: olcDatabase={2}mdb,cn=config
changetype: modify
replace: olcSuffix
olcSuffix: dc=ops535,dc=com

dn: olcDatabase={2}mdb,cn=config
changetype: modify
replace: olcRootDN
olcRootDN: cn=Manager,dc=ops535,dc=com

dn: olcDatabase={2}mdb,cn=config
changetype: modify
add: olcRootPW
olcRootPW: {SSHA}1Di4Suea6ojE2bFxJhLDScjQyQ97GSef
```

   - Make note of the field that this file will modify.
   - As before, use the authentication type **EXTERNAL**, and **ldapi:///** as the host.
   - When you run the command you should get output similar to the following:

```bash
SASL/EXTERNAL authentication started
SASL username: gidNumber=0+uidNumber=0,cn=peercred,cn=external,cn=auth
SASL SSF: 0
modifying entry "olcDatabase={2}mdb,cn=config"

modifying entry "olcDatabase={2}mdb,cn=config"

modifying entry "olcDatabase={2}mdb,cn=config"
```

14. Examine the contents of your **/etc/openldap/slapd.d/cn=config/olcDatabase={2}mdb.ldif** file again. Your ldif file should have changed three fields. Try to identify them.
15. Create an LDIF file for the base context ops535.com entry to be added to the OpenLDAP directory. Name the file as base.ldif.

```bash
dn: dc=ops535,dc=com
dc: ops535
description: root LDAP entry for ops535
objectClass: dcObject
objectClass: organizationalUnit
ou: rootobject
```

16. Create an LDIF file for the People container to be added to the OpenLDAP directory. Name the file as people.ldif

```bash
dn: ou=People, dc=ops535, dc=com
ou: People
description: All people in ops535
objectClass: organizationalUnit
```

17. Apply those two ldif files to your database. This time you will need to use simple authentication, identify yourself with a distinguished name (use the ldap administrator whose password you just set), and get prompted for a password.
18. Before we start adding users, we need to provide the migration tools some information about our domain. Before you change anything, make a backup of the /usr/share/migrationstools/migrate_common.ph to the /root directory. Modify the following parameters in the original file to the values shown below:

```bash
$DEFAULT_MAIL_DOMAIN = "ops535.com";
$DEFAULT_BASE = "dc=ops535,dc=com";
$EXTENDED_SCHEMA = 1;
```

19. Create two new users (**ldapuser1** and **ldapuser2**) on your machine, and set their passwords. Importing those users into your ldap database will take several steps:

    - Extract the passwd entries of ldapuser1 and ldapuser2 from /etc/passwd to a file called "ldapusers.entry"

```bash
grep -w ldapuser1 /etc/passwd > /root/ldapusers.entry
grep -w ldapuser2 /etc/passwd >> /root/ldapusers.entry
```

   - Use the migrate_passwd.pl file to convert the user information you extracted earlier into an ldif file:

```bash
/usr/share/migrationtools/migrate_passwd.pl ldapusers.entry /root/ldapusers.ldif
```

   - This should generate an ldif file similar to the following:

```bash
dn: uid=ldapuser1,ou=People,dc=ops535,dc=com
uid: ldapuser1
cn: ldapuser1
sn: ldapuser1
mail: ldapuser1@ops535.com
objectClass: person
objectClass: organizationalPerson
objectClass: inetOrgPerson
objectClass: posixAccount
objectClass: top
objectClass: shadowAccount
userPassword: {crypt}
$6$PBqQXRo/ugCCjBe0.ZgvmJl8U2tVjpdR8X9bh4OZ1cl3mv4xf0Hv1HSDavkxusO8R3lI
uuJ7skrfqpTQpbZ6hbd3e3BGB.
shadowLastChange: 17120
shadowMin: 0
shadowMax: 99999
shadowWarning: 7
loginShell: /bin/bash
uidNumber: 5001
gidNumber: 5001
homeDirectory: /home/ldapuser1

dn: uid=ldapuser2,ou=People,dc=ops535,dc=com
uid: ldapuser2
cn: ldapuser2
sn: ldapuser2
mail: ldapuser2@ops535.com
objectClass: person
objectClass: organizationalPersonobjectClass: inetOrgPerson
objectClass: posixAccount
objectClass: top
objectClass: shadowAccount
userPassword: {crypt}
$6$VNkVk1TQ$Rgz4GnQlqPBcHhIinUqxFGnqHZmnHHrFyCQ1ZsekoRjHnaKvb84YtjfFRPL
/xcbryrQRL5eNZeP01A3AdC2lv1
shadowLastChange: 17120
shadowMin: 0
shadowMax: 99999
shadowWarning: 7
loginShell: /bin/bash
uidNumber: 5002
gidNumber: 5002
homeDirectory: /home/ldapuser2
```

20. Use ldapadd to enter this new information into the database. As before use simple authentication, the distinguished name of the ldap administrator, and get prompted for a password.
21. Use ldapsearch to confirm that the new users have been added to the database. You should get output similar to the following:

```bash
# extended LDIF
#
# LDAPv3
# base <dc=ops535,dc=com> with scope subtree
# filter: (objectClass=*)
# requesting: ALL
#

# ops535.com
dn: dc=ops535,dc=com
objectClass: top
objectClass: dcObject
objectClass: organization
o: ops535 com
dc: ops535

# Manager, ops535.com
dn: cn=Manager,dc=ops535,dc=com
objectClass: organizationalRole
cn: Manager
description: Directory Manager

# People, ops535.com
dn: ou=People,dc=ops535,dc=com
objectClass: organizationalUnit
ou: People

# ldapuser1, People, ops535.com
dn: uid=ldapuser1,ou=People,dc=ops535,dc=com
uid: ldapuser1
cn: ldapuser1
sn: ldapuser1
mail: ldapuser1@ops535.com
objectClass: personobjectClass: organizationalPerson
objectClass: inetOrgPerson
objectClass: posixAccount
objectClass: top
objectClass: shadowAccount
userPassword:: e2NyeXB0fSQ2JFBCcVFYUm8vJHVnQ0NqQmUwLlpndm1KbDhVMnRWanBkUjhYOWJ
oNE9aMWNsM212NHhmMEh2MUhTRGF2a3h1c084UjNsSXV1Sjdza3JmcXBUUXBiWjZoYmQzZTNCR0Iu
shadowLastChange: 17120
shadowMin: 0
shadowMax: 99999
shadowWarning: 7
loginShell: /bin/bash
uidNumber: 5001
gidNumber: 5001
homeDirectory: /home/ldapuser1

# ldapuser2, People, ops535.com
dn: uid=ldapuser2,ou=People,dc=ops535,dc=com
uid: ldapuser2
cn: ldapuser2
sn: ldapuser2
mail: ldapuser2@ops535.com
objectClass: person
objectClass: organizationalPerson
objectClass: inetOrgPerson
objectClass: posixAccount
objectClass: top
objectClass: shadowAccount
userPassword:: e2NyeXB0fSQ2JFZOa1ZrMVRRJFJnejRHblFscVBCY0hoSWluVXF4RkducUhabW5
ISHJGeUNRMVpzZWtvUmpIbmFLdmI4NFl0amZGUlBML3hjYnJ5clFSTDVlTlplUDAxQTNBZEMybHYx
shadowLastChange: 17120
shadowMin: 0
shadowMax: 99999
shadowWarning: 7
loginShell: /bin/bash
uidNumber: 5002
gidNumber: 5002
homeDirectory: /home/ldapuser2

# search result
search: 2
result: 0 Success

# numResponses: 10
# numEntries: 5
```

22. Create an ldif file called group.ldif that will add an organizational unit with the distinguished name **ou=Group**, **dc=ops535**, **dc=com**. It will act as an organizer for group information.
23. Use the /etc/group file and migrate_group.pl to create an ldif file that will add the group entries for ldapuser1 and ldapuser2 to your database.
24. Add the group entries for ldapuser1 and ldapuser2 to your database. Use ldapsearch to confirm that they have been added.
25. Modify your firewall to allow incoming ldap traffic from your internal zone. Make sure that this change persists past reboot.

## Investigation 2: Modifying OpenLDAP Server Configuration to use TLS

**Warning: This is a good time to make another backup of VM1.**

In this investigation we will modify the OpenLDAP server we just created to use TLS to encrypt the data it provides, you should notice that many of these steps are similar to the process of modifying postfix and apache servers to use TLS. Perform these steps on vm1.

1. Install the openssl package
2. Run the following commands to create a self-signed TLS certificate for your server (make sure you replace the values with ones from your machine):

**Warning: As you run these commands, read the output carefully. If you encounter any errors you must resolve them before continuing to the next command.**

```bash
openssl genrsa -des3 -out ca.key 4096
openssl req -new -x509 -days 365 -key ca.key -out ca.cert.pem
openssl genrsa -out vm1.pcallagh.ops.key 4096
openssl req -new -key vm1.pcallagh.ops.key -out vm1.pcallagh.ops.csr
openssl x509 -req -in vm1.pcallagh.ops.csr -CA ca.cert.pem -CAkey ca.key -out vm1.pcallagh.ops.crt -CAcreateserial -days 365 -sha256
```

3. Copy the certificate, the private key, and the certificte authority file to an appropriate directory (make sure the directory and the files in it are owned by the ldap account and that the directory has permissions set to 0700 and the files have 0600):

```bash
cp ldap.pcallagh.ops.crt ldap.pcallagh.ops.key ca.cert.pem /etc/openldap/certs/
```

4. Write an ldif file and add the following values to **dn: cn=config** (again making sure to put in values from your own machine):

```bash
olcTLSCertificateFile: /etc/openldap/certs/vm1.pcallagh.ops.crt
olcTLSCertificateKeyFile: /etc/openldap/certs/vm1.pcallagh.ops.key
olcTLSCACertificateFile: /etc/openldap/certs/ca.cert.pem
```

**Warning: Read the output of the ldapmodify command carefully. If you encounter any errors you must resolve them before continuing to the next command.**

5. You can use slapcat to ensure they are set correctly:

```bash
slapcat -b "cn=config" | egrep "Certificate(Key)?File"
```

6. Update /etc/openldap/ldap.conf to locate your CACERT, and to indicate that ldaps is now allowed:

    - Set the URI parameter to ldaps://vm1.<yourdomain\>.ops. It is suggested you also include ldapi:/// so local connections are allowed.
    - Set TLSCACERT to the absolute path of your certificate authority file (e.g. /etc/openldap/certs/ca.cert.pem).
    - Set TLSCACERTDIR to the directory your certificate authority file is in (e.g. /etc/openldap/certs).

7. Update your firewall to permanently allow ldaps instead of ldap.
8. Double check that you can still use ldapsearch before continuing to the next investigation.

## Investigation 3: Setup and Configure OpenLdap Client Through SSSD

Perform the following steps on vm2:

1. Install yum-utils
2. Install the symas ldap repo
3. Install the following packages

    - symas-openldap-clients
    - sssd
    - sssd-ldap
    - sssd-tools
    - openssl-perl

4. If you would like to actually log into the client machines as an ldap user, you need to reconfigure the way the system authentication processes your login. To do this, you will use the authselect tool on the client machine.

    - Note: the ldap user does not have home directory on the client unless you provide it via NFS.

5. Copy the server's signed certificate onto the client:

    - openssl s_client -connect <hostname or ip address of your ldap server\>:636 -showcerts < /dev/null | openssl x509 -text > /etc/openldap/certs/cacert.crt

6. Set up the SSSD service to use ldap for authentication.

    - Start by adding the following settings to /etc/sssd/sssd.conf
    - Note that you may have to create /etc/sssd/sssd.conf yourself. Make sure the file is owned by root:root and that the permissions are 0600.

```bash
[sssd]
services = nss, pam
config_file_version = 2
domains = default

[sudo]

[nss]
homedir_substring = /home

[pam]
offline_credentials_expiration = 60

[domain/default]
ldap_id_use_start_tls = True
cache_credentials = True
ldap_search_base = <The Base DN from your ldap server>
id_provider = ldap
auth_provider = ldap
chpass_provider = ldap
access_provider = ldap
ldap_uri = ldaps://<HOSTNAME or IP ADDRESS of your ldap server>
ldap_chpass_uri = ldaps://<HOSTNAME or IP ADDRESS of your ldap server>
ldap_tls_reqcert = allow
ldap_tls_cacert = <The absolute path of the certificate you copied over from the server>
ldap_tls_cacertdir = <The absolute path to the directory the server's certificate is in>
ldap_search_timeout = 50
ldap_network_timeout = 60
ldap_access_order = filter
ldap_access_filter = (objectClass=posixAccount)
```

   - Now direct sssd to use those changes by running 'authselect select sssd --force'. you need the --force option to make it make changes to several files.
   - Test your configuration with 'sssctl config-check' and fix any errors it identifies
   - Once your configuration passes the sssctl check, start and enable sssd.

7. Test that your machine is connected to the ldap server by searching for the ldapuser 1 account:

```bash
id ldapuser1
```

   - You should get something similar to the following (but may not be exactly the same):

```bash
uid=1002(ldapuser1) gid=1002(ldapuser1) groups=1002(ldapuser1)
```

8. If you want to be able to use commands like ldapsearch from this machine, you will also need to configure ldap in /etc/openldap/ldap.conf. This configuration file should already exist, you just need to modify the parameters to identify the LDAP server and location of its certificate.

    - BASE <base DC from your ldap server\>
    - URI ldaps://<hostname or ip address of your ldap server\>
    - TLS_CACERT <the absolute path of the certificate you downloaded from the server earlier.\>
    - TLS_CACERTDIR <the directory you saved the certificate in\>

9. Test your OpenLDAP client with the ldapsearch command.

```bash
ldapsearch -x 'uid=ldapuser1'
```

   - You should get results similar to the following:

```bash
# extended LDIF
#
# LDAPv3
# base <dc=ops535,dc=com> (default) with scope subtree
# filter: uid=ldapuser1
# requesting: ALL
#

# ldapuser1, People, ops535.com
dn: uid=ldapuser1,ou=People,dc=ops535,dc=com
uid: ldapuser1
cn: ldapuser1
sn: ldapuser1
mail: ldapuser1@ops535.com
objectClass: person
objectClass: organizationalPerson
objectClass: inetOrgPerson
objectClass: posixAccount
objectClass: top
objectClass: shadowAccount
userPassword:: e2NyeXB0fSQ2JFBCcVFYUm8vJHVnQ0NqQmUwLlpndm1KbDhVMnRWanBkUjhYOWJ
oNE9aMWNsM212NHhmMEh2MUhTRGF2a3h1c084UjNsSXV1Sjdza3JmcXBUUXBiWjZoYmQzZTNCR0Iu
shadowLastChange: 17120
shadowMin: 0
shadowMax: 99999
shadowWarning: 7
loginShell: /bin/bash
uidNumber: 5001
gidNumber: 5001
homeDirectory: /home/ldapuser1
# search resultsearch: 2
result: 0 Success
# numResponses: 2
# numEntries: 1
```

10. Logout of the client machine, then log back in using the ldapuser1 account.
11. Repeat steps 1 through 7 on vm3.
 

## Investigation 4: Update LDAP Configuration

1. Add the following user accounts to your LDAP server:

    - user name: your seneca id – password: pick your own
    - rchan – password: ops535
    - seneca – password: ops535

2. Run the ldapsearch command for each user, and confirm that their information is correct
3. Consult the man page on ldappasswd to find out how to change an LDAP user's password. Change seneca's password to seneca.
4. Consult the man page on ldapdelete to find out how to remove an LDAP user. Delete ldapuser2.

## Completing the Lab

You should now have a server providing centralized management of your user information. A service like this will make it much easier to manage and maintain users in your network. When combined with a service like NFS, this centralizes user management and make it much easier to scale your network up.

Follow the instructions on blackboard to submit the lab.

## Exploration Questions

1. What changes would you make in NFS to provide remote access to home directories?
