#!/usr/bin/env python3
# encoding: utf-8
# === This file is part of Calamares - <http://github.com/calamares> ===
#
#   Copyright 2014, Aurélien Gâteau <agateau@kde.org>
#   Copyright 2014 KaOS (http://kaosx.us)
#
#   Calamares is free software: you can redistribute it and/or modify
#   it under the terms of the GNU General Public License as published by
#   the Free Software Foundation, either version 3 of the License, or
#   (at your option) any later version.
#
#   Calamares is distributed in the hope that it will be useful,
#   but WITHOUT ANY WARRANTY; without even the implied warranty of
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
#   GNU General Public License for more details.
#
#   You should have received a copy of the GNU General Public License
#   along with Calamares. If not, see <http://www.gnu.org/licenses/>.

import libcalamares

import os
import shutil
import subprocess

from libcalamares.utils import check_chroot_call

def detect_firmware_type():
    # Check for EFI variables support
    if(os.path.exists("/sys/firmware/efi/efivars")):
        fw_type = 'efi'
    else:
        fw_type = 'bios'

    libcalamares.globalstorage.insert("firmwareType", fw_type)
    libcalamares.utils.debug("Firmware type: {!s}".format(fw_type))

def install_grub(boot_loader, fw_type):
    if fw_type == 'efi':
        install_path = boot_loader["installPath"]
        #check_chroot_call(["blkid -s", "PARTUUID -o value", install_path])
        #check_chroot_call(["mount", "/dev/sda1", "/boot"])
        #check_chroot_call(["gummiboot", "install", install_path])
        #shutil.copytree('/usr/lib/gummiboot/loader', '%s/boot/loader' % (install_path))
        print('UEFI install not supported at this time, no bootloader installed')
    else:
        install_path = boot_loader["installPath"]
        check_chroot_call(["grub-install", install_path])
        check_chroot_call(["grub-mkconfig", "-o", "/boot/grub/grub.cfg"])

def run():
    detect_firmware_type()
    boot_loader = libcalamares.globalstorage.value("bootLoader")
    fw_type = libcalamares.globalstorage.value("firmwareType")
    install_grub(boot_loader, fw_type)
    return None
