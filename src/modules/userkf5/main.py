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

import libcalamares


def run():
    """ Create Distribution specific settings for users """
    install_path = libcalamares.globalstorage.value("rootMountPoint")
    user = libcalamares.globalstorage.value("username")

    print('create common dirs')
    common_dirs = [
        'Desktop',
        '.config',
        '.local/share/applications/',
        '.local/share/konqueror',
        '.local/share/konsole',
        '.config/autostart',
        '.config/plasma-workspace/env',
        '.kde4/share/config'
    ]
    for d in common_dirs:
        libcalamares.utils.chroot_call(
            ['/usr/bin/mkdir', '-p', '/home/%s/%s' % (user,  d)])

    print('setup distribution specific settings')
    distro_settings = [
        ('auroraerc', '.config/'),
        ('kwinrc', '.config/'),
        ('plasma-org.kde.plasma.desktop-appletsrc', '.config/'),
        ('bookmarks.xml', '.local/share/konqueror/'),
        ('favoriteapps.xml', '.local/share/applications/'),
        ('kdeglobals', '.config/'),
        ('kdeglobals', '.kde4/share/config/'),
        ('kscreenlockerrc', '.config/'),
        ('ksplashrc', '.config/'),
        ('kickoffrc', '.config/'),
        ('.bashrc', ''),
        ('.xinitrc', ''),
        ('mimeapps.list', '.local/share/applications/'),
        ('xdg-user-dirs-update.desktop', '.config/autostart/'),
        ('octopi-notifier.desktop', '.config/autostart/'),
        ('libre.sh', '.config/plasma-workspace/env/'),
        ('katerc', '.config/'),
        ('ksplashrc', '.config/'),
        ('plasmarc', '.config/'),
        ('plasmashellrc', '.config/'),
        ('rekonqrc', '.config/'),
        ('startupconfig', '.config/'),
        ('startupconfigkeys', '.config/'),
        ('Linux.colorscheme', '.local/share/konsole/'),
        ('Shell.profile', '.local/share/konsole/')
    ]

    for f,  d in distro_settings:
        shutil.copy2('/etc/skel/%s' % f, '%s/home/%s/%s%s' %
                     (install_path,  user,  d,  f))

    libcalamares.utils.chroot_call(
        ['chown', '-R', '%s:users' % user, "/home/%s" % user])

    #sddm_conf_path = os.path.join(install_path, "etc/sddm.conf")
    #text = []
    # with open(sddm_conf_path, "r") as sddm_conf:
    #     text = sddm_conf.readlines()
    #           with open(sddm_conf_path, "w") as sddm_conf:
    #     for line in text:
    #         if 'Current=maui' in line:
    #             line = 'Current=midna\n'
    #         if 'CursorTheme=' in line:
    #             line = 'CursorTheme=breeze\n'
    #     sddm_conf.write(line)
    # sddm_conf.close()

    # fix SUID to capable permissions on iputils
    libcalamares.utils.chroot_call(
        ['setcap', 'cap_net_raw=ep', '/usr/bin/ping'])
    libcalamares.utils.chroot_call(
        ['setcap', 'cap_net_raw=ep', '/usr/bin/ping6'])

    # set pacman.conf for kf5 needed repos
    shutil.copy2('/etc/skel/pacman.conf', '%s/etc/pacman.conf' % install_path)

    print('configure users settings done')

    return None
