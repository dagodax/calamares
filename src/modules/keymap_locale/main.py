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

import os
import shutil

import libcalamares


def run():
    """ Create locale """

    keyboard_layout = libcalamares.globalstorage.value("keyboardLayout")
    print(keyboard_layout)
    keyboard_variant = libcalamares.globalstorage.value("keyboardVariant")
    print(keyboard_variant)

    us = '#en_US'
    # locale = libcalamares.globalstorage.value("localeSetting")
    locale = 'en_US.UTF-8'

    install_path = libcalamares.globalstorage.value("rootMountPoint")
    shutil.copy2('%s/etc/locale.gen.bak' %
                 (install_path), '%s/etc/locale.gen' % (install_path))

    text = []
    with open("%s/etc/locale.gen" % install_path, "r") as gen:
        text = gen.readlines()

    # always enable en_US
    with open("%s/etc/locale.gen" % install_path, "w") as gen:
        for line in text:
            if us in line and line[0] == "#":
                # uncomment line
                line = line[1:]
            if locale in line and line[0] == "#":
                # uncomment line
                line = line[1:]
            gen.write(line)

    libcalamares.utils.chroot_call(['locale-gen'])
    locale_conf_path = os.path.join(install_path, "etc/locale.conf")
    with open(locale_conf_path, "w") as locale_conf:
        locale_conf.write('LANG=%s\n' % locale)

    environment_path = os.path.join(install_path, "etc/environment")
    with open(environment_path, "w") as environment:
        environment.write('LANG=%s\n' % locale)

    ## Set /etc/vconsole.conf
    #vconsole_conf_path = os.path.join(install_path, "etc/vconsole.conf")
    #with open(vconsole_conf_path, "w") as vconsole_conf:
    #    vconsole_conf.write('KEYMAP=%s\n' % keyboard_layout)
    
    ## Write  Xorg keyboard.conf
    #xkb_path = os.path.join(
    #          install_path, "etc", "X11", "xorg.conf.d", "10-keyboard.conf")
    #with open(xkb_path, "w") as xkb:
    #    xkb.write("# Read and parsed by systemd-localed. Better not\n")
    #    xkb.write('# edit this file manually too freely.\n')
    #    xkb.write('Section "InputClass"\n')
    #    xkb.write('        Identifier             "system-keyboard"\n')
    #    xkb.write('        MatchIsKeyboard        "on"\n')
    #    xkb.write('        Option "XkbLayout"     "%s"\n' % keyboard_layout)
    #    if keyboard_variant != '':
    #        xkb.write('        Option "XkbVariant"    "%s"\n' % keyboard_variant)
    #    xkb.write('EndSection\n')
    #    print("10-keyboard.conf written.")

    return None
