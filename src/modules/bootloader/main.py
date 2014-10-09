#!/usr/bin/env python3
# encoding: utf-8
# === This file is part of Calamares - <http://github.com/calamares> ===
#
#   Copyright 2014, Aurélien Gâteau <agateau@kde.org>
#   Copyright 2014 Anke Boersma <demm@kaosx.us>
#   Copyright 2014, Daniel Hillenbrand <codeworkx@bbqlinux.org>
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

def get_partuuid():
    root_mount_point = libcalamares.globalstorage.value("rootMountPoint")
    p = subprocess.Popen("blkid -s PARTUUID -o value %s" % root_mount_point, 
                         shell=True, stdout=subprocess.PIPE)
    l = p.stdout.readlines()
    if len(l):
        return l[0]
    return "" #shouldn't happen
    
def create_conf(partuuid, conf_path):
    lines = [
        '## This is just an exmaple config file.\n',
        '## Please edit the paths and kernel parameters according to your system.\n',
        '\n',
        'title   KaOS GNU/Linux, with Linux core repo kernel\n',
        'linux   /vmlinuz-linux\n',
        'initrd  /initramfs-linux.img\n',
        'options root=PARTUUID=%s quiet rw\n' % partuuid,
    ]
    
    with open(conf_path, 'w') as f:
        for l in lines:
            f.write(l)
    f.close()
  
def create_loader(loader_path):
    lines = [
        'timeout 10\n',
        'default KaOS\n',
    ]
    
    with open(loader_path, 'w') as f:
        for l in lines:
            f.write(l)
    f.close()
    
def install_grub(boot_loader, fw_type):
    if fw_type == 'efi':
        install_path = libcalamares.globalstorage.value( "rootMountPoint" )
        partuuid = get_partuuid()
        conf_path = os.path.join(install_path, "loader", "entries", "KaOS.conf")
        loader_path = os.path.join(install_path, "loader", "loader.conf")
        subprocess.call(["gummiboot", "--path=%s/boot" % install_path, "install"])
        create_conf(partuuid, conf_path)
        create_loader(loader_path)
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
