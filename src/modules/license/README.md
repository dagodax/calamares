### License Approval Module
---------
For distributions shipping proprietary software, this module creates a globalstorage entry when the user declines to accept a presented End User License Agreements file.
The number of licenses shown are configurable.  The license.conf has a few examples of how to add URLs.
The reason for this module not being accpepted in Calamares master is that the text on the buttons cannot be set from license.conf.  That will need to be edited directly in https://github.com/KaOSx/calamares/blob/master/src/modules/license/LicensePage.cpp, look for the four instances of ```
ui->license1Button->setText( "..... License" );
``` and set the text according to your needs.

How to implement the removal or not installing of proprietary software is up to any distribution to implement.  For example, proprietary graphics drivers cannot simply be removed in the packages module, a free version will need to be installed.
An example of where the licenseAgree globalstorage entry is used:
https://github.com/KaOSx/calamares/blob/master/src/modules/nonfree_drivers/main.py

![License Page](http://wstaw.org/m/2015/08/22/Screenshot_20150822_131050.png)
