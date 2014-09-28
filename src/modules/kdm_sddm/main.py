#!/usr/bin/env python3
# encoding: utf-8
# === This file is part of Calamares - <http://github.com/calamares> ===
#
#   Copyright 2014, Philip Müller <philm@manjaro.org>
#   Copyright 2014, Teo Mrnjavac <teo@kde.org>
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
import libcalamares


def set_autologin(username, displaymanagers, root_mount_point):
    """ Enables automatic login for the installed desktop managers """

    if "kdm" in displaymanagers:
        # Systems with KDM as Desktop Manager
        kdm_conf_path = os.path.join(
            root_mount_point, "usr/share/config/kdm/kdmrc")
        text = []
        if os.path.exists(kdm_conf_path):
            with open(kdm_conf_path, 'r') as kdm_conf:
                text = kdm_conf.readlines()
            with open(kdm_conf_path, 'w') as kdm_conf:
                for line in text:
                    if '#AutoLoginEnable=true' in line:
                        line = 'AutoLoginEnable=true\n'
                    if 'AutoLoginUser=' in line:
                        line = 'AutoLoginUser=%s\n' % username
                    if 'Theme=/usr/share/apps/kdm/themes/elarun' in line:
                        line = 'Theme=/usr/share/apps/kdm/themes/midna\n'
                    if '#AntiAliasing=true' in line:
                        line = 'AntiAliasing=true\n' 
                    if '#TerminateServer=false' in line:
                        line = 'TerminateServer=true\n' 
                    if '#HaltCmd=' in line:
                        line = 'HaltCmd=/sbin/poweroff\n' 
                    if '#RebootCmd=' in line:
                        line = 'RebootCmd=/sbin/reboot\n'     
                    kdm_conf.write(line)
        else:
            return "Cannot write KDM configuration file", "KDM config file %s does not exist" % kdm_conf_path

    if "sddm" in displaymanagers:
        # Systems with Sddm as Desktop Manager
        sddm_conf_path = os.path.join(root_mount_point, "etc/sddm.conf")
        text = []
        if os.path.exists(sddm_conf_path):
            with open(sddm_conf_path, 'r') as sddm_conf:
                text = sddm_conf.readlines()
            with open(sddm_conf_path, 'w') as sddm_conf:
                for line in text:
                    if 'User=' in line:
                        line = 'User={}\n'.format(username)
                    if 'Current=maui' in line:
                        line = 'Current=breeze\n' 
                    if 'CursorTheme=' in line:
                        line = 'CursorTheme=breeze\n'    
                    sddm_conf.write(line)
        else:
            return "Cannot write SDDM configuration file", "SDDM config file %s does not exist" % sddm_conf_path

    return None


def run():
    """ Configure display managers """
    # We acquire a list of displaymanagers, either from config or (overridden) from globalstorage.
    # This module will try to set up (including autologin) all the displaymanagers in the list, in that specific order.
    # Most distros will probably only ship one displaymanager.
    # If a displaymanager is in the list but not installed, this module quits with error.

    if "displaymanagers" in libcalamares.job.configuration:
        displaymanagers = libcalamares.job.configuration["displaymanagers"]

    if libcalamares.globalstorage.contains("displaymanagers"):
        displaymanagers = libcalamares.globalstorage.value("displaymanagers")

    if displaymanagers is None:
        return "No display managers selected for the displaymanager module.",\
               "The displaymanagers list is empty or undefined in both globalstorage and displaymanager.conf."

    username = libcalamares.globalstorage.value("autologinUser")
    root_mount_point = libcalamares.globalstorage.value("rootMountPoint")

    # Setup sddm
    if "sddm" in displaymanagers:
        if not os.path.exists("%s/usr/bin/sddm" % root_mount_point):
            return "sddm selected but not installed", ""

    # Setup kdm
    if "kdm" in displaymanagers:
        if not os.path.exists("%s/usr/bin/kdm" % root_mount_point):
            return "kdm selected but not installed", ""

    if username != None:
        libcalamares.utils.debug(
            "Setting up autologin for user %s." % username)
        return set_autologin(username, displaymanagers, root_mount_point)

    return None
