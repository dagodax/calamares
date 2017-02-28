#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
# === This file is part of Calamares - <http://github.com/calamares> ===
#
#   Copyright 2014-2017, Anke Boersma <demm@kaosx.us>
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

import os
import shutil
import subprocess

import libcalamares


def run():
    """ Package removal module. Live only packages, surplus language packs """

    install_path = libcalamares.globalstorage.value("rootMountPoint")
    fw_type = libcalamares.globalstorage.value("firmwareType")

    # remove any db.lck
    db_lock = os.path.join(install_path, "var/lib/pacman/db.lck")
    if os.path.exists(db_lock):
        with misc.raised_privileges():
            os.remove(db_lock)

    # Remove Calamares and depends
    if os.path.exists("%s/usr/bin/calamares" % install_path):
        print('Removing installer packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rns', '--noconfirm', 'calamares', 'calamares-debug', 'console-setup'])

    # Remove welcome
    if os.path.exists("%s/usr/bin/welcome" % install_path):
        print('Removing live ISO packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-R', '--noconfirm', 'welcome'])

    # Remove hardware detection
    if os.path.exists("%s/etc/kdeos-hwdetect.conf" % install_path):
        print('Removing live start-up packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rns', '--noconfirm', 'hardware-detection'])

    # Remove init-live
    if os.path.exists("%s/etc/live" % install_path):
        print('Removing live configuration packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-R', '--noconfirm', 'init-live'])
            
    # Remove surplus bootloader packages
    if fw_type == 'efi':
        print('Removing grub packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rns', '--noconfirm', 'grub', 'grub-theme-midna'])
        
    if fw_type == 'bios':
        print('Removing EFI packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rns', '--noconfirm', 'efibootmgr'])
        
    # Remove VirtualBox Guest packages
    vbox = subprocess.check_output('systemd-detect-virt')
    if 'oracle' in str(vbox):
        print('VirtualBox')
    else:
        print('Removing guest-utils')
        libcalamares.utils.target_env_call(
            ['pacman', '-R', '--noconfirm', 'virtualbox-guest-utils', 'virtualbox-guest-modules'])
       

    # Remove KDE l10n
    this_locale = libcalamares.globalstorage.value("localeConf")["LANG"][:2]
    #this_locale = 'us'
    list_of_pkgs = []

    print(libcalamares.globalstorage.value("localeConf")["LANG"])
    print(this_locale)

    p = subprocess.Popen("pacman -Q | grep -i kde-l10n | awk '{print $1}'",
                         shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)

    # Iterates over every found pkg and put each one in a list
    for line in p.stdout.readlines():
        s = line.decode('ascii')
        s = s.rstrip('\n')
        list_of_pkgs.append(s)

    print(list_of_pkgs)

    # Print the pkgs that do not have the locale 'this_locale' for future
    # removal!
    for pkg in list_of_pkgs:
        if pkg[9:11] != this_locale:
            print(pkg)

    # Remove the pkgs that do not have the locale 'this_locale'
    for pkg in list_of_pkgs:
        if pkg[9:11] != this_locale:
            print('Removing KDE l10n packages')
            libcalamares.utils.target_env_call(
                ['pacman', '-Rddn', '--noconfirm', '%s' % (pkg)])

    # Remove Calligra l10n
    #list_of_pkgs = []

    #p = subprocess.Popen("pacman -Q | grep -i calligra-l10n | awk '{print $1}'",
    #                     shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)

    # Iterates over every found pkg and put each one in a list
    #for line in p.stdout.readlines():
    #    s = line.decode('ascii')
    #    s = s.rstrip('\n')
    #    list_of_pkgs.append(s)

    #print(list_of_pkgs)

    # Print the pkgs that do not have the locale 'this_locale' for future
    # removal!
    #for pkg in list_of_pkgs:
    #    if pkg[14:16] != this_locale:
    #        print(pkg)

    # Remove the pkgs that do not have the locale 'this_locale'
    #for pkg in list_of_pkgs:
    #    if pkg[14:16] != this_locale:
    #        print('Removing Calligra l10n packages')
    #        libcalamares.utils.target_env_call(
    #            ['pacman', '-Rddn', '--noconfirm', '%s' % (pkg)])

    #print('package removal completed')
