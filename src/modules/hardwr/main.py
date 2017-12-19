#!/usr/bin/env python3
# -*- coding: utf-8 -*-
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
import subprocess
import shutil

import libcalamares
from libcalamares.utils import check_target_env_call


def run():
    """ Run mkinitcpio """
    
    kernel = libcalamares.job.configuration['kernel']
    check_target_env_call(['mkinitcpio', '-p', kernel])

    """ Set hardware clock """

    hwclock_rtc = ["hwclock", "--systohc", "--utc"]
    hwclock_isa = ["hwclock", "--systohc", "--utc", "--directisa"]
    is_broken_rtc = False
    is_broken_isa = False

    ret = libcalamares.utils.target_env_call(hwclock_rtc)
    if ret != 0:
        is_broken_rtc = True
        libcalamares.utils.debug("Hwclock returned error code {}".format(ret))
        libcalamares.utils.debug("  .. RTC method failed, trying ISA bus method.")
    else:
        libcalamares.utils.debug("Hwclock set using RTC method.")
    if is_broken_rtc:
        ret = libcalamares.utils.target_env_call(hwclock_isa)
        if  ret != 0:
            is_broken_isa = True
            libcalamares.utils.debug("Hwclock returned error code {}".format(ret))
            libcalamares.utils.debug("  .. ISA bus method failed.")
        else:
            libcalamares.utils.debug("Hwclock set using ISA bus methode.")
    if is_broken_rtc and is_broken_isa:
        libcalamares.utils.debug("BIOS or Kernel BUG: Setting hwclock failed.")
    
    """ Set Alsa """
    
    # setup alsa volume levels, alsa blacklist for the pc speaker, blacklist
    # for broken realtek nics
    print('setup alsa config')
    install_path = libcalamares.globalstorage.value("rootMountPoint")
    libcalamares.utils.target_env_call(
        ['/usr/bin/mkdir', '-p', '%s/etc/modprobe.d' % install_path])
    if os.path.exists('/etc/asound.state'):
        shutil.copy2('/etc/asound.state', '%s/etc/asound.state' % install_path)
    if os.path.exists('/etc/modprobe.d/alsa_blacklist.conf'):
        shutil.copy2('/etc/modprobe.d/alsa_blacklist.conf',
                     '%s/etc/modprobe.d/alsa_blacklist.conf' % install_path)
    if os.path.exists('/etc/modprobe.d/realtek_blacklist.conf'):
        shutil.copy2('/etc/modprobe.d/realtek_blacklist.conf',
                     '%s/etc/modprobe.d/realtek_blacklist.conf' % install_path)

    return None
