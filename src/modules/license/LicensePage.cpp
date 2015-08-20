/* === This file is part of Calamares - <http://github.com/calamares> ===
 *
 *   Copyright 2015, Anke Boersma <demm@kaosx.us>
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

#include "LicensePage.h"

#include "ui_LicensePage.h"
#include "JobQueue.h"
#include "GlobalStorage.h"
#include "utils/Logger.h"
#include "utils/CalamaresUtilsGui.h"
#include "utils/Retranslator.h"
#include "ViewManager.h"

#include <QApplication>
#include <QBoxLayout>
#include <QDesktopServices>
#include <QFocusEvent>
#include <QLabel>
#include <QComboBox>
#include <QMessageBox>

LicensePage::LicensePage(QWidget *parent)
    : QWidget( parent )
    , ui( new Ui::LicensePage )
{
    ui->setupUi( this );

    ui->verticalLayout->insertSpacing( 1, CalamaresUtils::defaultFontHeight() * 4 );

    ui->mainText->setAlignment( Qt::AlignCenter );
    ui->mainText->setWordWrap( true );
    ui->mainText->setOpenExternalLinks( true );

    CALAMARES_RETRANSLATE(
        ui->mainText->setText( tr( "<h1>License Approval</h1>" 
                                "In case non-free was selected, this installer will install proprietary <br/>"
                                "packages that have additional EULA's attached to them, do you accept these terms? <br/>"
                                "If declined a free version will be used (when available)." ) );
        ui->retranslateUi( this );
    )
    
    connect( ui->nvidiaButton, &QPushButton::clicked,
             this, [ this ]
    {
        QDesktopServices::openUrl(QUrl(m_nvidiaUrl));
        cDebug() << "Is: " << m_nvidiaUrl;
        //QDesktopServices::openUrl(QUrl("https://www.nvidia.com/content/DriverDownload-March2009/licence.php?lang=us"));
    } );
    
    connect( ui->catalystButton, &QPushButton::clicked,
             this, [ this ]
    {
        //QDesktopServices::openUrl(QUrl(configurationMap.value("licenseUrl").toString());
        QDesktopServices::openUrl(QUrl("http://support.amd.com/en-us/download/eula"));
    } );
    
    connect( ui->flashButton, &QPushButton::clicked,
             this, [ this ]
    {
        //QDesktopServices::openUrl(QUrl(configurationMap.value("licenseUrl").toString());
        QDesktopServices::openUrl(QUrl("http://www.adobe.com/products/eulas/pdfs/PlatformClients_PC_WWEULA_Combined_20100108_1657.pdf"));
    } );
    
    connect( ui->licenseButton, &QPushButton::clicked,
             this, [ this ]
    {
        //QDesktopServices::openUrl(QUrl(configurationMap.value("licenseUrl").toString());
        QDesktopServices::openUrl(QUrl("file:///usr/share/licenses/nvidia/LICENSE"));
    } );
    
    Calamares::GlobalStorage* gs = Calamares::JobQueue::instance()->globalStorage();
    if ( ui->disagreeButton->isChecked() )
        gs->insert( "licenseAgree", false ); 
    
}

void
LicensePage::showNvidiaUrl( bool enabled )
{
    ui->nvidiaButton->setVisible( enabled );
}

void
LicensePage::showCatalystUrl( bool enabled )
{
    ui->catalystButton->setVisible( enabled );
}

void
LicensePage::showFlashUrl( bool enabled )
{
    ui->flashButton->setVisible( enabled );
}

void
LicensePage::showLicenseUrl( bool enabled )
{
    ui->licenseButton->setVisible( enabled );
}

