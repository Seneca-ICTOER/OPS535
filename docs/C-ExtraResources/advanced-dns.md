---
id: advanced-dns
title: Advanced DNS - DNS Logging, Dynamics DNS, and DNSSEC
sidebar_position: 12
description: Advanced DNS - DNS Logging, Dynamics DNS, and DNSSEC
---

# Advanced DNS

- DNS Logging
  - logging Statement Definition and Usage

```bash
Sample:
    logging {
            channel default_debug {
                    file "data/named.run";
                    severity dynamic;
            };
    };
```

- Dynamic DNS
  - Dynamic Zone - Allow-update
  - Dynamic DNS update using nsupdate

```bash
Man Page:
         nsupdate is used to submit Dynamic DNS Update requests as defined in RFC 2136 to a name server. This allows resource records to be 
added or removed from a zone without manually editing the zone file. A single update request can contain requests to add or remove more than
one resource record.
```

- TSIG - Transaction SIGnatures
  - BIND primarily supports TSIG for server to server communication.
  - TSIG can also be useful for dynamic update.The nsupdate program supports TSIG via the -k and -y command line options or inline by use of the key.
- DNSSEC
  - Cryptographic authentication of DNS information is possible through the DNS Security (DNSSEC-bis) extensions, defined in RFC 4033, RFC 4034, and RFC 4035.
  - [Securing DNS with DNSSEC](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/security_guide/sec-securing_dns_traffic_with_dnssec)
  - [DNSSEC Guide](https://ftp.isc.org/isc/dnssec-guide/dnssec-guide.pdf)
