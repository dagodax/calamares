#!/usr/bin/env python3
# encoding: utf-8
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

import subprocess
import shutil

import libcalamares
from libcalamares.utils import check_chroot_call


def run():
    """ Run mkinitcpio """
    
    kernel = libcalamares.job.configuration['kernel']
    check_chroot_call(['mkinitcpio', '-p', kernel])

    """ Set hardware clock """

    root_mount_point = libcalamares.globalstorage.value("rootMountPoint")
    try:
        subprocess.check_call(["hwclock", "--systohc", "--utc"])
    except subprocess.CalledProcessError as e:
        return "Cannot set hardware clock.",\
               "hwclock terminated with exit code {}.".format(e.returncode)

    shutil.copy2("/etc/adjtime", "%s/etc/" % root_mount_point)
    
    """ Set Alsa """
    
    # setup alsa volume levels, alsa blacklist for the pc speaker, blacklist
    # for broken realtek nics
    print('setup alsa config')
    libcalamares.utils.chroot_call(
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
