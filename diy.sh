#!/bin/bash
#=================================================
# Description: DIY script
# Lisence: MIT
# Author: P3TERX
# Blog: https://p3terx.com
#=================================================
# Modify default IP
sed -i 's/192.168.1.1/192.168.8.1/g' package/base-files/files/bin/config_generate
#killed led
sed -i 's/0xcc35cc35/0x00000000/g' target/linux/ar71xx/files/arch/mips/ath79/mach-wndr4300.c
sed -i 's/0xcb37cb37/0x00000000/g' target/linux/ar71xx/files/arch/mips/ath79/mach-wndr4300.c
sed -i 's/0x00f3cf00/0x00000000/g' target/linux/ar71xx/files/arch/mips/ath79/mach-wndr4300.c
