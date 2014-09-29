#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
# === This file is part of Calamares - <http://github.com/calamares> ===
#
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

import os
import shutil

import libcalamares

def run():
    """ Create Distribution specific settings for users """
    install_path = libcalamares.globalstorage.value( "rootMountPoint" )
    user = libcalamares.globalstorage.value( "username" )

    print('create common dirs')
    common_dirs = [
                       'Desktop',
                       '.kde4/autostart', 
                       '.kde4/env', 
                       '.kde4/share/config', 
                       '.kde4/share/apps/konqueror', 
                       '.kde4/share/apps/homerun', 
                       '.local/share/applications', 
                       '.kde4/share/kde4/services/searchproviders',
                       '.config/autostart'
    ]
    for d in common_dirs:
        libcalamares.utils.chroot_call(['/usr/bin/mkdir', '-p', '/home/%s/%s' % (user,  d)])

    print('setup distribution specific settings')
    distro_settings = [
                      ('ksplashrc'                   , '.kde4/share/config/'), 
                      ('kcminputrc'                  , '.kde4/share/config/'), 
                      ('kwinrc'                      , '.kde4/share/config/'), 
                      ('plasma-desktop-appletsrc'    , '.kde4/share/config/'), 
                      ('plasmarc'                    , '.kde4/share/config/'), 
                      ('kcmfonts'                    , '.kde4/share/config/'), 
                      ('bookmarks.xml'               , '.kde4/share/apps/konqueror/'), 
                      ('favoriteapps.xml'            , '.kde4/share/apps/homerun/'), 
                      ('rekonqrc'                    , '.kde4/share/config/'), 
                      ('kuriikwsfilterrc'            , '.kde4/share/config/'), 
                      ('kdeglobals'                  , '.kde4/share/config/'), 
                      ('oxygenrc'                    , '.kde4/share/config/'), 
                      ('yakuakerc'                   , '.kde4/share/config/'), 
                      ('kickoffrc'                   , '.kde4/share/config/'), 
                      ('.bashrc'                     , ''), 
                      ('mimeapps.list'               , '.local/share/applications/'), 
                      ('networkmanagementrc'         , '.kde4/share/config/'),  
                      ('xdg-user-dirs-update.desktop', '.config/autostart/'), 
                      ('octopi-notifier.desktop'     , '.config/autostart/'),
                      ('katerc'                      , '.kde4/share/config/')
    ]
  
    for f,  d in distro_settings:
        shutil.copy2('/etc/skel/%s' % f, '%s/home/%s/%s%s' % (install_path,  user,  d,  f))
      
    libcalamares.utils.chroot_call(['chown', '-R', '%s:users' % user, "/home/%s" % user])
    
    # fix SUID to capable permissions on iputils
    libcalamares.utils.chroot_call(['setcap', 'cap_net_raw=ep', '/usr/bin/ping'])
    libcalamares.utils.chroot_call(['setcap', 'cap_net_raw=ep', '/usr/bin/ping6'])
    
    # set hostname static, until upstream creates the var
    hostname = 'kaos'
    hostname_path = os.path.join(install_path, "etc/hostname")
    with open(hostname_path, "w") as hostname_file:
        hostname_file.write(hostname)
    hostname_file.close()
  
    print('configure users settings done')
    
    return None
