#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
# === This file is part of Calamares - <http://github.com/calamares> ===
#
#   Copyright 2014, Anke Boersma <demm@kaosx.us>
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
import glob
import subprocess
import re

import libcalamares


def run():
    """ Setup graphics drivers and sound """

    install_path = libcalamares.globalstorage.value("rootMountPoint")
    license = libcalamares.globalstorage.value("licenseAgree")
    print(license)
    
    if not license:
        print('License declined')
        return None

    # remove any db.lck
    db_lock = os.path.join(install_path, "var/lib/pacman/db.lck")
    if os.path.exists(db_lock):
        with misc.raised_privileges():
            os.remove(db_lock)

    # setup proprietary drivers, if detected
    print('setup proprietary drivers')
    if os.path.exists('/var/log/nvidia'):
        print('nvidia detected')
        print('removing unneeded packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rdd', '--noconfirm', 'libgl'])
        libcalamares.utils.target_env_call(
            ['pacman', '-Rdd', '--noconfirm', 'xf86-video-nouveau'])
        print('installing driver')
        shutil.copytree(
            '/opt/kdeos/pkgs', '%s/opt/kdeos/pkgs' % (install_path))
        for nvidia_utils in glob.glob('/opt/kdeos/pkgs/nvidia-utils-37*'):
            libcalamares.utils.target_env_call(
                ['pacman', '-Ud', '--force', '--noconfirm', nvidia_utils])
        for nvidia in glob.glob('/opt/kdeos/pkgs/nvidia-37*'):
            libcalamares.utils.target_env_call(
                ['pacman', '-Ud', '--force', '--noconfirm', nvidia])
        shutil.rmtree('%s/opt/kdeos/pkgs' % (install_path))
        
        sddm_conf_path = os.path.join(install_path, "etc/sddm.conf")
        text = []
        with open(sddm_conf_path, 'r') as sddm_conf:
            text = sddm_conf.readlines()
        with open(sddm_conf_path, 'w') as sddm_conf:
            for line in text:
                if re.match('Session=plasmawayland.desktop', line):
                    line = 'Session=plasma.desktop'
                sddm_conf.write(line)
                
    elif os.path.exists('/var/log/nvidia-340xx'):
        print('nvidia-340xx detected')
        print('removing unneeded packages')
        libcalamares.utils.target_env_call(
            ['pacman', '-Rdd', '--noconfirm', 'libgl'])
        libcalamares.utils.target_env_call(
            ['pacman', '-Rdd', '--noconfirm', 'xf86-video-nouveau'])
        print('installing driver')
        shutil.copytree(
            '/opt/kdeos/pkgs', '%s/opt/kdeos/pkgs' % (install_path))
        for nvidia_340_utils in glob.glob('/opt/kdeos/pkgs/nvidia-340xx-utils*'):
            libcalamares.utils.target_env_call(
                ['pacman', '-Ud', '--force', '--noconfirm', nvidia_340_utils])
        for nvidia_340 in glob.glob('/opt/kdeos/pkgs/nvidia-340xx-34*'):
            libcalamares.utils.target_env_call(
                ['pacman', '-Ud', '--force', '--noconfirm', nvidia_340])
        shutil.rmtree('%s/opt/kdeos/pkgs' % (install_path))
        
        sddm_conf_path = os.path.join(install_path, "etc/sddm.conf")
        text = []
        with open(sddm_conf_path, 'r') as sddm_conf:
            text = sddm_conf.readlines()
        with open(sddm_conf_path, 'w') as sddm_conf:
            for line in text:
                if re.match('Session=plasmawayland.desktop', line):
                    line = 'Session=plasma.desktop'
                sddm_conf.write(line)

    print('done setting up hardware')

    return None
