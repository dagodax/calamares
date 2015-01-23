/* === This file is part of Calamares - <http://github.com/calamares> ===
 *
 *   Copyright 2015, Teo Mrnjavac <teo@kde.org>
 *
 *   Calamares is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   Calamares is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with Calamares. If not, see <http://www.gnu.org/licenses/>.
 */

import QtQuick 2.0;
import calamares.slideshow 1.0;

Presentation
{
    id: presentation

    Timer {
        interval: 5000
        running: true
        repeat: true
        onTriggered: presentation.goToNextSlide()
    }
    
    Slide {

        Image {
            id: background
            source: "squid.png"
            width: 200; height: 200
            fillMode: Image.PreserveAspectFit
            anchors.centerIn: parent
        }
        Text {
            anchors.horizontalCenter: background.horizontalCenter
            anchors.top: background.bottom
            text: "This is a first trial for a QML slideshow.<br/>"+
                  "Just four slides during this test, if all works as should <br/>"+
                  "a full slideshow will follow.<br/>"+
                  "You can follow the installation of KaOS,<br/>"+
                  "the first 30 % will take the longest, since that copies the full ISO."
            wrapMode: Text.WordWrap
            width: root.width
            horizontalAlignment: Text.Center
        }
    }

    Slide {

        Image {
            id: background1
            source: "1.png"
            width: 600; height: 212
            fillMode: Image.PreserveAspectFit
            anchors.centerIn: parent
        }
        Text {
            anchors.horizontalCenter: background.horizontalCenter
            anchors.top: background.bottom
            text: "After the copying some 25 post-install modules will run.<br/>"+
                  "This includes setting user specific options, <br/>"+
                  "removing Live Session specific packages<br/>"+
                  "and adjusting hardware setup.<br/>"+
                  "Once the install is finished click the Done button to close the installer."
            wrapMode: Text.WordWrap
            width: root.width
            horizontalAlignment: Text.Center
        }
    }

    Slide {

        Image {
            id: background2
            source: "3.png"
            width: 600; height: 212
            fillMode: Image.PreserveAspectFit
            anchors.centerIn: parent
        }
    }
    
    Slide {

        Image {
            id: background4
            source: "4.png"
            width: 600; height: 212
            fillMode: Image.PreserveAspectFit
            anchors.centerIn: parent
        }
    }
}
