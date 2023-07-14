---
id: get-root-zone
title: Get Root Zone
sidebar_position: 24
description: Get Root Zone
---

# Get Root Zone

## Bash Script

Sample Bash script for extracting Domain Registration page [Domainreg](./domain-reg.md) and create a root zone file. Set the following shell (environment) variables before running the script to produce a customized zone file header for that root zone that match your DNS server:

- RNS_FQDN - set this to the fully qualified domain name of your root name server.
 
```bash
export RNS_FQDN=rns.cp.net
```

- RNS_IP - set this to the IP address of your root name server.
- DNS_ADMIN_EMAIL - set this to the email address of your DNS administrator

```bash
export DNS_ADMIN_EMAIL=admin.cp.net
```

```bash
#!/bin/bash
# Created by: Raymond Chan
# for OPS535
# (c) 2016 - update for new wiki site
# (c) 2017 - update to prompt user to set the followings
#	     fqdn,ip for root name server
#	     email for dns admin
#	RNS_FQDN, RNS_IP, DNS_ADMIN_EMAIL
# (c) 2020 - update for the new wiki url
#
if [ -z "${RNS_FQDN}" ]
then
	echo "Please set the shell variable RNS_FQDN to the FQDN of your" >&2
	echo "root name server and run this script again." >&2
	exit 1
fi

if [ -z "${RNS_IP}" ]
then
	echo "Please set the shell variable RNS_IP to the IP address" >&2
        echo "of your root name server and run this script again." >&2
	exit 2
fi

if [ -z "${DNS_ADMIN_EMAIL}" ]
then
	echo "Please set the shell variable DNS_ADMIN_EMAIL to the" >&2
	echo "email address of your DNS administrator and run this" >&2
        echo "script again." >&2
	exit 3
fi
# start loading dns information from the web
url=https://wiki.cdot.senecacollege.ca/w/index.php/Domainreg

if [ ! -f raw.txt ]
then
	echo "Gettting wiki file from the web ..." >&2
	wget -O raw.txt $url
fi

buffer=$(cat raw.txt| grep ^'<td>')

nl=$(echo "$buffer"|wc -l)
a=0
b=6
# generating the zone file header
SN=$(date +%y%j%H) # yydddHH
echo "\$TTL 3600"
echo "@ IN SOA ${RNS_FQDN} ${DNS_ADMIN_EMAIL} (${SN} 1h 15m 30d 1h)"
echo "      IN NS ${RNS_FQDN}"
echo "${RNS_FQDN} IN A ${RNS_IP}"

while [ $a -lt $nl ]
do
	stuff=$(echo "$buffer"| head -"$b" | tail -5|nl|sed -e "s/<td>/x/g")
	#  echo "$stuff"
	fields=$(echo "$stuff"|sed -e "s/ //g"|awk -Fx {'print $2'})

	parameters=$(echo $fields)
	cc=$(echo $parameters | wc -w)
        # echo "paratest cc is $cc"

	if [ "$cc" -gt 0 ]
	then	
		#echo $a $parameters
		#read yyy	
		set $parameters
		if [ "$1" != "domainname" ]
		then
			if [ "$1" != "" -a "$3" != "" -a "$4" != "" ]
			then

	 			echo -e "${1}. \tIN \tNS \t$4."
	 			echo -e "${4}. \tIN \tA \t$3"
				echo " "
	
			fi
		fi
	fi

	let a=a+6
	let b=b+6

	#read xxx
done
```

## Sample Output

```bash
$TTL 3600
@ IN SOA rns.cp.net. admin.cp.net. (1735109 1h 15m 30d 1h)
      IN NS rns.cp.net.
rns.cp.net. IN A 192.168.99.253
cp.net. 	IN 	NS 	ns.cp.net.
ns.cp.net. 	IN 	A 	192.168.99.1
 
Raymond.com. 	IN 	NS 	ns.raymond.com.
ns.raymond.com. 	IN 	A 	192.168.98.53
 
gcyao.net. 	IN 	NS 	pri-dns.gcyao.net.
pri-dns.gcyao.net. 	IN 	A 	192.168.33.53
 
bdgushue.com. 	IN 	NS 	pri-dns.bdgushue.com.
pri-dns.bdgushue.com. 	IN 	A 	192.168.14.53
 
dcwood.com. 	IN 	NS 	pri-dns.dcwood.com.
pri-dns.dcwood.com. 	IN 	A 	192.168.32.53
 
falli2.com. 	IN 	NS 	pri-dns.falli2.com.
pri-dns.falli2.com. 	IN 	A 	192.168.2.53
 
tnemat.com. 	IN 	NS 	a2-dns.tnemat.com.
a2-dns.tnemat.com. 	IN 	A 	192.168.25.53
 
accarneirobrandao.net. 	IN 	NS 	pri-dns.accarneirobrandao.net.
pri-dns.accarneirobrandao.net. 	IN 	A 	192.168.7.53
```
