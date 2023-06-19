---
id: ansible-setup
title: Ansible Setup
sidebar_position: 19
description: Ansible Setup
---

# Ansible setup

Running ansible's setup module to collect system information on the remote host 192.168.49.3:

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
            "iso8601_basic_short": "20210129T000853",
            "iso8601_micro": "2021-01-29T05:08:53.810313Z",
            "minute": "08",
            "month": "01",
            "second": "53",
            "time": "00:08:53",
            "tz": "EST",
            "tz_offset": "-0500",
            "weekday": "Friday",
            "weekday_number": "5",
            "weeknumber": "04",
            "year": "2021"
        },
        "ansible_default_ipv4": {
            "address": "192.168.99.162",
            "alias": "enp8s0",
            "broadcast": "192.168.99.255",
            "gateway": "192.168.99.1",
            "interface": "enp8s0",
            "macaddress": "52:54:00:c8:60:dd",
            "mtu": 1500,
            "netmask": "255.255.255.0",
            "network": "192.168.99.0",
            "type": "ether"
        },
        "ansible_default_ipv6": {},
        "ansible_device_links": {
            "ids": {
                "dm-0": [
                    "dm-name-cl-root",
                    "dm-uuid-LVM-kI8g04LhMHqP311vX3ExXkcwfufMAagztxUDodjPQTShDrr0DDC21iEYYGF7l10N"
                ],
                "dm-1": [
                    "dm-name-cl-swap",
                    "dm-uuid-LVM-kI8g04LhMHqP311vX3ExXkcwfufMAagzJ8L3iUdyv1rowndx3cVkdfZEHhGmbjlr"
                ],
                "sr0": [
                    "ata-QEMU_DVD-ROM_QM00001"
                ],
                "vda2": [
                    "lvm-pv-uuid-7fqaY9-YakN-6tuX-VjOP-0VIC-dd9P-cL5oNf"
                ]
            },
            "labels": {},
            "masters": {
                "vda2": [
                    "dm-0",
                    "dm-1"
                ]
            },
            "uuids": {
                "dm-0": [
                    "6d849d81-ff8d-409a-b505-8eb18e855fcd"
                ],
                "dm-1": [
                    "a50569a8-2b55-4691-a119-a8c0ba5a3f60"
                ],
                "vda1": [
                    "18f0fa7d-fef4-4242-9f64-94e113f2fc64"
                ]
            }
        },
        "ansible_devices": {
            "dm-0": {
                "holders": [],
                "host": "",
                "links": {
                    "ids": [
                        "dm-name-cl-root",
                        "dm-uuid-LVM-kI8g04LhMHqP311vX3ExXkcwfufMAagztxUDodjPQTShDrr0DDC21iEYYGF7l10N"
                    ],
                    "labels": [],
                    "masters": [],
                    "uuids": [
                        "6d849d81-ff8d-409a-b505-8eb18e855fcd"
                    ]
                },
                "model": null,
                "partitions": {},
                "removable": "0",
                "rotational": "1",
                "sas_address": null,
                "sas_device_handle": null,
                "scheduler_mode": "",
                "sectors": "35643392",
                "sectorsize": "512",
                "size": "17.00 GB",
                "support_discard": "512",
                "vendor": null,
                "virtual": 1
            },
            "dm-1": {
                "holders": [],
                "host": "",
                "links": {
                    "ids": [
                        "dm-name-cl-swap",
                        "dm-uuid-LVM-kI8g04LhMHqP311vX3ExXkcwfufMAagzJ8L3iUdyv1rowndx3cVkdfZEHhGmbjlr"
                    ],
                    "labels": [],
                    "masters": [],
                    "uuids": [
                        "a50569a8-2b55-4691-a119-a8c0ba5a3f60"
                    ]
                },
                "model": null,
                "partitions": {},
                "removable": "0",
                "rotational": "1",
                "sas_address": null,
                "sas_device_handle": null,
                "scheduler_mode": "",
                "sectors": "4194304",
                "sectorsize": "512",
                "size": "2.00 GB",
                "support_discard": "512",
                "vendor": null,
                "virtual": 1
            },
            "sr0": {
                "holders": [],
                "host": "SATA controller: Intel Corporation 82801IR/IO/IH (ICH9R/DO/DH) 6 port SATA Controller [AHCI mode] (rev 02)",
                "links": {
                    "ids": [
                        "ata-QEMU_DVD-ROM_QM00001"
                    ],
                    "labels": [],
                    "masters": [],
                    "uuids": []
                },
                "model": "QEMU DVD-ROM",
                "partitions": {},
                "removable": "1",
                "rotational": "1",
                "sas_address": null,
                "sas_device_handle": null,
                "scheduler_mode": "mq-deadline",
                "sectors": "2097151",
                "sectorsize": "512",
                "size": "1024.00 MB",
                "support_discard": "0",
                "vendor": "QEMU",
                "virtual": 1
            },
            "vda": {
                "holders": [],
                "host": "SCSI storage controller: Red Hat, Inc. Virtio block device (rev 01)",
                "links": {
                    "ids": [],
                    "labels": [],
                    "masters": [],
                    "uuids": []
                },
                "model": null,
                "partitions": {
                    "vda1": {
                        "holders": [],
                        "links": {
                            "ids": [],
                            "labels": [],
                            "masters": [],
                            "uuids": [
                                "18f0fa7d-fef4-4242-9f64-94e113f2fc64"
                            ]
                        },
                        "sectors": "2097152",
                        "sectorsize": 512,
                        "size": "1.00 GB",
                        "start": "2048",
                        "uuid": "18f0fa7d-fef4-4242-9f64-94e113f2fc64"
                    },
                    "vda2": {
                        "holders": [
                            "cl-swap",
                            "cl-root"
                        ],
                        "links": {
                            "ids": [
                                "lvm-pv-uuid-7fqaY9-YakN-6tuX-VjOP-0VIC-dd9P-cL5oNf"
                            ],
                            "labels": [],
                            "masters": [
                                "dm-0",
                                "dm-1"
                            ],
                            "uuids": []
                        },
                        "sectors": "39843840",
                        "sectorsize": 512,
                        "size": "19.00 GB",
                        "start": "2099200",
                        "uuid": null
                    }
                },
                "removable": "0",
                "rotational": "1",
                "sas_address": null,
                "sas_device_handle": null,
                "scheduler_mode": "mq-deadline",
                "sectors": "41943040",
                "sectorsize": "512",
                "size": "20.00 GB",
                "support_discard": "512",
                "vendor": "0x1af4",
                "virtual": 1
            }
        },
        "ansible_distribution": "CentOS",
        "ansible_distribution_file_parsed": true,
        "ansible_distribution_file_path": "/etc/redhat-release",
        "ansible_distribution_file_variety": "RedHat",
        "ansible_distribution_major_version": "8",
        "ansible_distribution_release": "NA",
        "ansible_distribution_version": "8.3",
        "ansible_dns": {
            "nameservers": [
                "192.168.99.1"
            ],
            "search": [
                "nat"
            ]
        },
        "ansible_domain": "localdomain",
        "ansible_effective_group_id": 1000,
        "ansible_effective_user_id": 1000,
        "ansible_enp1s0": {
            "active": true,
            "device": "enp1s0",
            "features": {
                "esp_hw_offload": "off [fixed]",
                "esp_tx_csum_hw_offload": "off [fixed]",
                "fcoe_mtu": "off [fixed]",
                "generic_receive_offload": "on",
                "generic_segmentation_offload": "on",
                "highdma": "on [fixed]",
                "hw_tc_offload": "off [fixed]",
                "l2_fwd_offload": "off [fixed]",
                "large_receive_offload": "off [fixed]",
                "loopback": "off [fixed]",
                "netns_local": "off [fixed]",
                "ntuple_filters": "off [fixed]",
                "receive_hashing": "off [fixed]",
                "rx_all": "off [fixed]",
                "rx_checksumming": "on [fixed]",
                "rx_fcs": "off [fixed]",
                "rx_gro_hw": "off [fixed]",
                "rx_udp_tunnel_port_offload": "off [fixed]",
                "rx_vlan_filter": "on [fixed]",
                "rx_vlan_offload": "off [fixed]",
                "rx_vlan_stag_filter": "off [fixed]",
                "rx_vlan_stag_hw_parse": "off [fixed]",
                "scatter_gather": "on",
                "tcp_segmentation_offload": "on",
                "tls_hw_record": "off [fixed]",
                "tls_hw_rx_offload": "off [fixed]",
                "tls_hw_tx_offload": "off [fixed]",
                "tx_checksum_fcoe_crc": "off [fixed]",
                "tx_checksum_ip_generic": "on",
                "tx_checksum_ipv4": "off [fixed]",
                "tx_checksum_ipv6": "off [fixed]",
                "tx_checksum_sctp": "off [fixed]",
                "tx_checksumming": "on",
                "tx_esp_segmentation": "off [fixed]",
                "tx_fcoe_segmentation": "off [fixed]",
                "tx_gre_csum_segmentation": "off [fixed]",
                "tx_gre_segmentation": "off [fixed]",
                "tx_gso_partial": "off [fixed]",
                "tx_gso_robust": "on [fixed]",
                "tx_ipxip4_segmentation": "off [fixed]",
                "tx_ipxip6_segmentation": "off [fixed]",
                "tx_lockless": "off [fixed]",
                "tx_nocache_copy": "off",
                "tx_scatter_gather": "on",
                "tx_scatter_gather_fraglist": "off [fixed]",
                "tx_sctp_segmentation": "off [fixed]",
                "tx_tcp6_segmentation": "on",
                "tx_tcp_ecn_segmentation": "on",
                "tx_tcp_mangleid_segmentation": "off",
                "tx_tcp_segmentation": "on",
                "tx_udp_segmentation": "off [fixed]",
                "tx_udp_tnl_csum_segmentation": "off [fixed]",
                "tx_udp_tnl_segmentation": "off [fixed]",
                "tx_vlan_offload": "off [fixed]",
                "tx_vlan_stag_hw_insert": "off [fixed]",
                "vlan_challenged": "off [fixed]"
            },
            "hw_timestamp_filters": [],
            "ipv4": {
                "address": "192.168.149.3",
                "broadcast": "192.168.149.255",
                "netmask": "255.255.255.0",
                "network": "192.168.149.0"
            },
            "macaddress": "52:54:00:2b:36:ea",
            "module": "virtio_net",
            "mtu": 1500,
            "pciid": "virtio0",
            "promisc": false,
            "speed": -1,
            "timestamping": [
                "tx_software",
                "rx_software",
                "software"
            ],
            "type": "ether"
        },
        "ansible_enp7s0": {
            "active": true,
            "device": "enp7s0",
            "features": {
                "esp_hw_offload": "off [fixed]",
                "esp_tx_csum_hw_offload": "off [fixed]",
                "fcoe_mtu": "off [fixed]",
                "generic_receive_offload": "on",
                "generic_segmentation_offload": "on",
                "highdma": "on [fixed]",
                "hw_tc_offload": "off [fixed]",
                "l2_fwd_offload": "off [fixed]",
                "large_receive_offload": "off [fixed]",
                "loopback": "off [fixed]",
                "netns_local": "off [fixed]",
                "ntuple_filters": "off [fixed]",
                "receive_hashing": "off [fixed]",
                "rx_all": "off [fixed]",
                "rx_checksumming": "on [fixed]",
                "rx_fcs": "off [fixed]",
                "rx_gro_hw": "off [fixed]",
                "rx_udp_tunnel_port_offload": "off [fixed]",
                "rx_vlan_filter": "on [fixed]",
                "rx_vlan_offload": "off [fixed]",
                "rx_vlan_stag_filter": "off [fixed]",
                "rx_vlan_stag_hw_parse": "off [fixed]",
                "scatter_gather": "on",
                "tcp_segmentation_offload": "on",
                "tls_hw_record": "off [fixed]",
                "tls_hw_rx_offload": "off [fixed]",
                "tls_hw_tx_offload": "off [fixed]",
                "tx_checksum_fcoe_crc": "off [fixed]",
                "tx_checksum_ip_generic": "on",
                "tx_checksum_ipv4": "off [fixed]",
                "tx_checksum_ipv6": "off [fixed]",
                "tx_checksum_sctp": "off [fixed]",
                "tx_checksumming": "on",
                "tx_esp_segmentation": "off [fixed]",
                "tx_fcoe_segmentation": "off [fixed]",
                "tx_gre_csum_segmentation": "off [fixed]",
                "tx_gre_segmentation": "off [fixed]",
                "tx_gso_partial": "off [fixed]",
                "tx_gso_robust": "on [fixed]",
                "tx_ipxip4_segmentation": "off [fixed]",
                "tx_ipxip6_segmentation": "off [fixed]",
                "tx_lockless": "off [fixed]",
                "tx_nocache_copy": "off",
                "tx_scatter_gather": "on",
                "tx_scatter_gather_fraglist": "off [fixed]",
                "tx_sctp_segmentation": "off [fixed]",
                "tx_tcp6_segmentation": "on",
                "tx_tcp_ecn_segmentation": "on",
                "tx_tcp_mangleid_segmentation": "off",
                "tx_tcp_segmentation": "on",
                "tx_udp_segmentation": "off [fixed]",
                "tx_udp_tnl_csum_segmentation": "off [fixed]",
                "tx_udp_tnl_segmentation": "off [fixed]",
                "tx_vlan_offload": "off [fixed]",
                "tx_vlan_stag_hw_insert": "off [fixed]",
                "vlan_challenged": "off [fixed]"
            },
            "hw_timestamp_filters": [],
            "ipv4": {
                "address": "192.168.49.3",
                "broadcast": "192.168.49.255",
                "netmask": "255.255.255.0",
                "network": "192.168.49.0"
            },
            "macaddress": "52:54:00:72:ac:a8",
            "module": "virtio_net",
            "mtu": 1500,
            "pciid": "virtio5",
            "promisc": false,
            "speed": -1,
            "timestamping": [
                "tx_software",
                "rx_software",
                "software"
            ],
            "type": "ether"
        },
        "ansible_enp8s0": {
            "active": true,
            "device": "enp8s0",
            "features": {
                "esp_hw_offload": "off [fixed]",
                "esp_tx_csum_hw_offload": "off [fixed]",
                "fcoe_mtu": "off [fixed]",
                "generic_receive_offload": "on",
                "generic_segmentation_offload": "on",
                "highdma": "on [fixed]",
                "hw_tc_offload": "off [fixed]",
                "l2_fwd_offload": "off [fixed]",
                "large_receive_offload": "off [fixed]",
                "loopback": "off [fixed]",
                "netns_local": "off [fixed]",
                "ntuple_filters": "off [fixed]",
                "receive_hashing": "off [fixed]",
                "rx_all": "off [fixed]",
                "rx_checksumming": "on [fixed]",
                "rx_fcs": "off [fixed]",
                "rx_gro_hw": "off [fixed]",
                "rx_udp_tunnel_port_offload": "off [fixed]",
                "rx_vlan_filter": "on [fixed]",
                "rx_vlan_offload": "off [fixed]",
                "rx_vlan_stag_filter": "off [fixed]",
                "rx_vlan_stag_hw_parse": "off [fixed]",
                "scatter_gather": "on",
                "tcp_segmentation_offload": "on",
                "tls_hw_record": "off [fixed]",
                "tls_hw_rx_offload": "off [fixed]",
                "tls_hw_tx_offload": "off [fixed]",
                "tx_checksum_fcoe_crc": "off [fixed]",
                "tx_checksum_ip_generic": "on",
                "tx_checksum_ipv4": "off [fixed]",
                "tx_checksum_ipv6": "off [fixed]",
                "tx_checksum_sctp": "off [fixed]",
                "tx_checksumming": "on",
                "tx_esp_segmentation": "off [fixed]",
                "tx_fcoe_segmentation": "off [fixed]",
                "tx_gre_csum_segmentation": "off [fixed]",
                "tx_gre_segmentation": "off [fixed]",
                "tx_gso_partial": "off [fixed]",
                "tx_gso_robust": "on [fixed]",
                "tx_ipxip4_segmentation": "off [fixed]",
                "tx_ipxip6_segmentation": "off [fixed]",
                "tx_lockless": "off [fixed]",
                "tx_nocache_copy": "off",
                "tx_scatter_gather": "on",
                "tx_scatter_gather_fraglist": "off [fixed]",
                "tx_sctp_segmentation": "off [fixed]",
                "tx_tcp6_segmentation": "on",
                "tx_tcp_ecn_segmentation": "on",
                "tx_tcp_mangleid_segmentation": "off",
                "tx_tcp_segmentation": "on",
                "tx_udp_segmentation": "off [fixed]",
                "tx_udp_tnl_csum_segmentation": "off [fixed]",
                "tx_udp_tnl_segmentation": "off [fixed]",
                "tx_vlan_offload": "off [fixed]",
                "tx_vlan_stag_hw_insert": "off [fixed]",
                "vlan_challenged": "off [fixed]"
            },
            "hw_timestamp_filters": [],
            "ipv4": {
                "address": "192.168.99.162",
                "broadcast": "192.168.99.255",
                "netmask": "255.255.255.0",
                "network": "192.168.99.0"
            },
            "macaddress": "52:54:00:c8:60:dd",
            "module": "virtio_net",
            "mtu": 1500,
            "pciid": "virtio6",
            "promisc": false,
            "speed": -1,
            "timestamping": [
                "tx_software",
                "rx_software",
                "software"
            ],
            "type": "ether"
        },
        "ansible_env": {
            "DBUS_SESSION_BUS_ADDRESS": "unix:path=/run/user/1000/bus",
            "HOME": "/home/rchan",
            "LANG": "en_US.UTF-8",
            "LESSOPEN": "||/usr/bin/lesspipe.sh %s",
            "LOGNAME": "rchan",
            "LS_COLORS": "rs=0:di=38;5;33:ln=38;5;51:mh=00:pi=40;38;5;11:so=38;5;13:do=38;5;5:bd=48;5;232;38;5;11:cd=48;5;232;38;5;3:or=48;5;232;38;5;9:mi=01;05;37;41:su=48;5;196;38;5;15:sg=48;5;11;38;5;16:ca=48;5;196;38;5;226:tw=48;5;10;38;5;16:ow=48;5;10;38;5;21:st=48;5;21;38;5;15:ex=38;5;40:*.tar=38;5;9:*.tgz=38;5;9:*.arc=38;5;9:*.arj=38;5;9:*.taz=38;5;9:*.lha=38;5;9:*.lz4=38;5;9:*.lzh=38;5;9:*.lzma=38;5;9:*.tlz=38;5;9:*.txz=38;5;9:*.tzo=38;5;9:*.t7z=38;5;9:*.zip=38;5;9:*.z=38;5;9:*.dz=38;5;9:*.gz=38;5;9:*.lrz=38;5;9:*.lz=38;5;9:*.lzo=38;5;9:*.xz=38;5;9:*.zst=38;5;9:*.tzst=38;5;9:*.bz2=38;5;9:*.bz=38;5;9:*.tbz=38;5;9:*.tbz2=38;5;9:*.tz=38;5;9:*.deb=38;5;9:*.rpm=38;5;9:*.jar=38;5;9:*.war=38;5;9:*.ear=38;5;9:*.sar=38;5;9:*.rar=38;5;9:*.alz=38;5;9:*.ace=38;5;9:*.zoo=38;5;9:*.cpio=38;5;9:*.7z=38;5;9:*.rz=38;5;9:*.cab=38;5;9:*.wim=38;5;9:*.swm=38;5;9:*.dwm=38;5;9:*.esd=38;5;9:*.jpg=38;5;13:*.jpeg=38;5;13:*.mjpg=38;5;13:*.mjpeg=38;5;13:*.gif=38;5;13:*.bmp=38;5;13:*.pbm=38;5;13:*.pgm=38;5;13:*.ppm=38;5;13:*.tga=38;5;13:*.xbm=38;5;13:*.xpm=38;5;13:*.tif=38;5;13:*.tiff=38;5;13:*.png=38;5;13:*.svg=38;5;13:*.svgz=38;5;13:*.mng=38;5;13:*.pcx=38;5;13:*.mov=38;5;13:*.mpg=38;5;13:*.mpeg=38;5;13:*.m2v=38;5;13:*.mkv=38;5;13:*.webm=38;5;13:*.ogm=38;5;13:*.mp4=38;5;13:*.m4v=38;5;13:*.mp4v=38;5;13:*.vob=38;5;13:*.qt=38;5;13:*.nuv=38;5;13:*.wmv=38;5;13:*.asf=38;5;13:*.rm=38;5;13:*.rmvb=38;5;13:*.flc=38;5;13:*.avi=38;5;13:*.fli=38;5;13:*.flv=38;5;13:*.gl=38;5;13:*.dl=38;5;13:*.xcf=38;5;13:*.xwd=38;5;13:*.yuv=38;5;13:*.cgm=38;5;13:*.emf=38;5;13:*.ogv=38;5;13:*.ogx=38;5;13:*.aac=38;5;45:*.au=38;5;45:*.flac=38;5;45:*.m4a=38;5;45:*.mid=38;5;45:*.midi=38;5;45:*.mka=38;5;45:*.mp3=38;5;45:*.mpc=38;5;45:*.ogg=38;5;45:*.ra=38;5;45:*.wav=38;5;45:*.oga=38;5;45:*.opus=38;5;45:*.spx=38;5;45:*.xspf=38;5;45:",
            "PATH": "/home/rchan/.local/bin:/home/rchan/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin",
            "PWD": "/home/rchan",
            "SELINUX_LEVEL_REQUESTED": "",
            "SELINUX_ROLE_REQUESTED": "",
            "SELINUX_USE_CURRENT_RANGE": "",
            "SHELL": "/bin/bash",
            "SHLVL": "2",
            "SSH_CLIENT": "192.168.49.1 51548 22",
            "SSH_CONNECTION": "192.168.49.1 51548 192.168.49.3 22",
            "SSH_TTY": "/dev/pts/0",
            "TERM": "xterm-256color",
            "USER": "rchan",
            "XDG_RUNTIME_DIR": "/run/user/1000",
            "XDG_SESSION_ID": "44",
            "_": "/usr/libexec/platform-python"
        },
        "ansible_fibre_channel_wwn": [],
        "ansible_fips": false,
        "ansible_form_factor": "Other",
        "ansible_fqdn": "localhost.localdomain",
        "ansible_hostname": "localhost",
        "ansible_hostnqn": "",
        "ansible_interfaces": [
            "enp7s0",
            "lo",
            "enp1s0",
            "enp8s0"
        ],
        "ansible_is_chroot": false,
        "ansible_iscsi_iqn": "iqn.1994-05.com.redhat:78ac51cd57c2",
        "ansible_kernel": "4.18.0-240.1.1.el8_3.x86_64",
        "ansible_kernel_version": "#1 SMP Thu Nov 19 17:20:08 UTC 2020",
        "ansible_lo": {
            "active": true,
            "device": "lo",
            "features": {
                "esp_hw_offload": "off [fixed]",
                "esp_tx_csum_hw_offload": "off [fixed]",
                "fcoe_mtu": "off [fixed]",
                "generic_receive_offload": "on",
                "generic_segmentation_offload": "on",
                "highdma": "on [fixed]",
                "hw_tc_offload": "off [fixed]",
                "l2_fwd_offload": "off [fixed]",
                "large_receive_offload": "off [fixed]",
                "loopback": "on [fixed]",
                "netns_local": "on [fixed]",
                "ntuple_filters": "off [fixed]",
                "receive_hashing": "off [fixed]",
                "rx_all": "off [fixed]",
                "rx_checksumming": "on [fixed]",
                "rx_fcs": "off [fixed]",
                "rx_gro_hw": "off [fixed]",
                "rx_udp_tunnel_port_offload": "off [fixed]",
                "rx_vlan_filter": "off [fixed]",
                "rx_vlan_offload": "off [fixed]",
                "rx_vlan_stag_filter": "off [fixed]",
                "rx_vlan_stag_hw_parse": "off [fixed]",
                "scatter_gather": "on",
                "tcp_segmentation_offload": "on",
                "tls_hw_record": "off [fixed]",
                "tls_hw_rx_offload": "off [fixed]",
                "tls_hw_tx_offload": "off [fixed]",
                "tx_checksum_fcoe_crc": "off [fixed]",
                "tx_checksum_ip_generic": "on [fixed]",
                "tx_checksum_ipv4": "off [fixed]",
                "tx_checksum_ipv6": "off [fixed]",
                "tx_checksum_sctp": "on [fixed]",
                "tx_checksumming": "on",
                "tx_esp_segmentation": "off [fixed]",
                "tx_fcoe_segmentation": "off [fixed]",
                "tx_gre_csum_segmentation": "off [fixed]",
                "tx_gre_segmentation": "off [fixed]",
                "tx_gso_partial": "off [fixed]",
                "tx_gso_robust": "off [fixed]",
                "tx_ipxip4_segmentation": "off [fixed]",
                "tx_ipxip6_segmentation": "off [fixed]",
                "tx_lockless": "on [fixed]",
                "tx_nocache_copy": "off [fixed]",
                "tx_scatter_gather": "on [fixed]",
                "tx_scatter_gather_fraglist": "on [fixed]",
                "tx_sctp_segmentation": "on",
                "tx_tcp6_segmentation": "on",
                "tx_tcp_ecn_segmentation": "on",
                "tx_tcp_mangleid_segmentation": "on",
                "tx_tcp_segmentation": "on",
                "tx_udp_segmentation": "off [fixed]",
                "tx_udp_tnl_csum_segmentation": "off [fixed]",
                "tx_udp_tnl_segmentation": "off [fixed]",
                "tx_vlan_offload": "off [fixed]",
                "tx_vlan_stag_hw_insert": "off [fixed]",
                "vlan_challenged": "on [fixed]"
            },
            "hw_timestamp_filters": [],
            "ipv4": {
                "address": "127.0.0.1",
                "broadcast": "",
                "netmask": "255.0.0.0",
                "network": "127.0.0.0"
            },
            "ipv6": [
                {
                    "address": "::1",
                    "prefix": "128",
                    "scope": "host"
                }
            ],
            "mtu": 65536,
            "promisc": false,
            "timestamping": [
                "tx_software",
                "rx_software",
                "software"
            ],
            "type": "loopback"
        },
        "ansible_local": {},
        "ansible_lsb": {},
        "ansible_machine": "x86_64",
        "ansible_machine_id": "a5d861df585b41c2aa37e364b91ae846",
        "ansible_memfree_mb": 172,
        "ansible_memory_mb": {
            "nocache": {
                "free": 555,
                "used": 253
            },
            "real": {
                "free": 172,
                "total": 808,
                "used": 636
            },
            "swap": {
                "cached": 0,
                "free": 2047,
                "total": 2047,
                "used": 0
            }
        },
        "ansible_memtotal_mb": 808,
        "ansible_mounts": [
            {
                "block_available": 3797952,
                "block_size": 4096,
                "block_total": 4452864,
                "block_used": 654912,
                "device": "/dev/mapper/cl-root",
                "fstype": "xfs",
                "inode_available": 8831589,
                "inode_total": 8910848,
                "inode_used": 79259,
                "mount": "/",
                "options": "rw,seclabel,relatime,attr2,inode64,logbufs=8,logbsize=32k,noquota",
                "size_available": 15556411392,
                "size_total": 18238930944,
                "uuid": "6d849d81-ff8d-409a-b505-8eb18e855fcd"
            },
            {
                "block_available": 183564,
                "block_size": 4096,
                "block_total": 249830,
                "block_used": 66266,
                "device": "/dev/vda1",
                "fstype": "ext4",
                "inode_available": 65220,
                "inode_total": 65536,
                "inode_used": 316,
                "mount": "/boot",
                "options": "rw,seclabel,relatime",
                "size_available": 751878144,
                "size_total": 1023303680,
                "uuid": "18f0fa7d-fef4-4242-9f64-94e113f2fc64"
            }
        ],
        "ansible_nodename": "localhost.localdomain",
        "ansible_os_family": "RedHat",
        "ansible_pkg_mgr": "dnf",
        "ansible_proc_cmdline": {
            "BOOT_IMAGE": "(hd0,msdos1)/vmlinuz-4.18.0-240.1.1.el8_3.x86_64",
            "crashkernel": "auto",
            "quiet": true,
            "rd.lvm.lv": [
                "cl/root",
                "cl/swap"
            ],
            "resume": "/dev/mapper/cl-swap",
            "rhgb": true,
            "ro": true,
            "root": "/dev/mapper/cl-root"
        },
        "ansible_processor": [
            "0",
            "GenuineIntel",
            "Intel Core 2 Duo P9xxx (Penryn Class Core 2)"
        ],
        "ansible_processor_cores": 1,
        "ansible_processor_count": 1,
        "ansible_processor_threads_per_core": 1,
        "ansible_processor_vcpus": 1,
        "ansible_product_name": "KVM",
        "ansible_product_serial": "NA",
        "ansible_product_uuid": "NA",
        "ansible_product_version": "RHEL-8.2.0 PC (Q35 + ICH9, 2009)",
        "ansible_python": {
            "executable": "/usr/libexec/platform-python",
            "has_sslcontext": true,
            "type": "cpython",
            "version": {
                "major": 3,
                "micro": 8,
                "minor": 6,
                "releaselevel": "final",
                "serial": 0
            },
            "version_info": [
                3,
                6,
                8,
                "final",
                0
            ]
        },
        "ansible_python_version": "3.6.8",
        "ansible_real_group_id": 1000,
        "ansible_real_user_id": 1000,
        "ansible_selinux": {
            "config_mode": "enforcing",
            "mode": "enforcing",
            "policyvers": 32,
            "status": "enabled",
            "type": "targeted"
        },
        "ansible_selinux_python_present": true,
        "ansible_service_mgr": "systemd",
        "ansible_ssh_host_key_ecdsa_public": "AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBNLN9B5hS07VlaYwadNxBhP8JyZGi/OziN/PhKiSdlWKS4lgoMHKHEs6kcl3+ZLnj17ep3BcS9AzN041O5T2xJI=",
        "ansible_ssh_host_key_ed25519_public": "AAAAC3NzaC1lZDI1NTE5AAAAICvNG2m49SoXBopg0sNhwAiAowvFX2OHQBf+nqrukHvm",
        "ansible_ssh_host_key_rsa_public": "AAAAB3NzaC1yc2EAAAADAQABAAABgQDSGhimTCeyAiNYlHgPW4J0H7ris0HVnABJ7NEwfcEldYlM0hRt5vGNUzQ732GwkP91e3uo5ZDNG/xLfTdq8jgqgC8SK9iGj5BotMzffi0+pWGz5u2v2lmiVnSidPX6PGrDcAQ5LuAOsuoY5pygpVlOPqE2Ao9vRnS+JiYlutXFGHCnuJBszixP6ZlkJOQuKr8+40OzFfTnRdFCH2OrqjIrkBoXERUgA/CHQA4NZq0bV3y9JROUzbnS0zJpUP3lKpj7V7PTmz2MGqyMcmbtRegw/VEIjHZdY2Ys42JGPXvknFHzsHeuehCELEtr2j8jbo1QTpbFsIyHdkEGUhcZEPZMBSZOcAg0Xec/GsM3mhPejMvRE1gqKmj/tprXR/46WEq/68PrAyyMSv+mAka9s2WJS8+1fJks4AR28RSVmnsUx4pQZgxRtL5Fcs5MDBmUrHPTtuEUeqVT4sJTjZE6kNy4wG4BmMddBRHTxalm4clCoE1QsPO5W+tt8PMVhaw0LFU=",
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
