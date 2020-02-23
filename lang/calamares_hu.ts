<?xml version="1.0" ?><!DOCTYPE TS><TS language="hu" version="2.1">
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="71"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>A rendszer &lt;strong&gt;indító környezete.&lt;strong&gt; &lt;br&gt;&lt;br&gt;Régebbi x86 alapú rendszerek csak &lt;strong&gt;BIOS&lt;/strong&gt;&lt;br&gt;-t támogatják. A modern rendszerek gyakran &lt;strong&gt;EFI&lt;/strong&gt;-t használnak, de lehet, hogy BIOS-ként látható ha kompatibilitási módban fut az indító környezet. </translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="81"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>A rendszer &lt;strong&gt;EFI&lt;/strong&gt; indító környezettel lett indítva.&lt;br&gt;&lt;br&gt;Annak érdekében, hogy az EFI környezetből indíthassunk a telepítőnek telepítenie kell a rendszerbetöltő alkalmazást pl. &lt;strong&gt;GRUB&lt;/strong&gt; vagy &lt;strong&gt;systemd-boot&lt;/strong&gt; az &lt;strong&gt;EFI Rendszer Partíción.&lt;/strong&gt; Ez automatikus kivéve ha kézi partícionálást választottál ahol neked kell kiválasztani vagy létrehozni.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="93"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>A rendszer &lt;strong&gt;BIOS&lt;/strong&gt; környezetből lett indítva. &lt;br&gt;&lt;br&gt;Azért, hogy el lehessen indítani a rendszert egy BIOS környezetből a telepítőnek telepítenie kell egy indító környezetet mint pl. &lt;strong&gt;GRUB&lt;/strong&gt;. Ez telepíthető a partíció elejére vagy a &lt;strong&gt;Master Boot Record&lt;/strong&gt;-ba. javasolt a partíciós tábla elejére (javasolt). Ez automatikus kivéve ha te kézi partícionálást választottál ahol neked kell telepíteni.</translation>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="70"/>
        <source>Master Boot Record of %1</source>
        <translation>Mester Boot Record - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="104"/>
        <source>Boot Partition</source>
        <translation>Indító partíció</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="109"/>
        <source>System Partition</source>
        <translation>Rendszer Partíció</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="139"/>
        <source>Do not install a boot loader</source>
        <translation>Ne telepítsen rendszerbetöltőt</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="156"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
</context>
<context>
    <name>Calamares::BlankViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/BlankViewStep.cpp" line="70"/>
        <source>Blank Page</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::DebugWindow</name>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="14"/>
        <source>Form</source>
        <translation>Adatlap</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="24"/>
        <source>GlobalStorage</source>
        <translation>Tárolás</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="34"/>
        <source>JobQueue</source>
        <translation>Feladatok</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="44"/>
        <source>Modules</source>
        <translation>Modulok</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="57"/>
        <source>Type:</source>
        <translation>Típus:</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="64"/>
        <location filename="../src/calamares/DebugWindow.ui" line="78"/>
        <source>none</source>
        <translation>semelyik</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="71"/>
        <source>Interface:</source>
        <translation>Interfész:</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="93"/>
        <source>Tools</source>
        <translation>Eszközök</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="106"/>
        <source>Reload Stylesheet</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="113"/>
        <source>Widget Tree</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="231"/>
        <source>Debug information</source>
        <translation>Hibakeresési információk</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="92"/>
        <source>Set up</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="92"/>
        <source>Install</source>
        <translation>Telepít</translation>
    </message>
</context>
<context>
    <name>Calamares::FailJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="39"/>
        <source>Job failed (%1)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="40"/>
        <source>Programmed job failure was explicitly requested.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="118"/>
        <source>Done</source>
        <translation>Kész</translation>
    </message>
</context>
<context>
    <name>Calamares::NamedJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="27"/>
        <source>Example job (%1)</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="52"/>
        <source>Run command &apos;%1&apos; in target system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="52"/>
        <source> Run command &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="59"/>
        <source>Running command %1 %2</source>
        <translation>Parancs futtatása %1 %2</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="208"/>
        <source>Running %1 operation.</source>
        <translation>Futó %1 műveletek.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="225"/>
        <source>Bad working directory path</source>
        <translation>Rossz munkakönyvtár útvonal</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="226"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>Munkakönyvtár %1 a python folyamathoz %2 nem olvasható.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="232"/>
        <source>Bad main script file</source>
        <translation>Rossz alap script fájl</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="233"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>Alap script fájl %1 a python folyamathoz %2 nem olvasható.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="311"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>Boost. Python hiba ebben a folyamatban &quot;%1&quot;.</translation>
    </message>
</context>
<context>
    <name>Calamares::QmlViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="92"/>
        <source>Loading ...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="111"/>
        <source>QML Step &lt;i&gt;%1&lt;/i&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="319"/>
        <source>Loading failed.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::RequirementsChecker</name>
    <message numerus="yes">
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="166"/>
        <source>Waiting for %n module(s).</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="167"/>
        <source>(%n second(s))</source>
        <translation type="unfinished"><numerusform></numerusform><numerusform></numerusform></translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="172"/>
        <source>System-requirements checking is complete.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="92"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="410"/>
        <source>&amp;Back</source>
        <translation>&amp;Vissza</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="94"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="405"/>
        <source>&amp;Next</source>
        <translation>&amp;Következő</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="96"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="430"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Mégse</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="394"/>
        <source>Cancel setup without changing the system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="395"/>
        <source>Cancel installation without changing the system.</source>
        <translation>Telepítés megszakítása a rendszer módosítása nélkül.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="199"/>
        <source>Setup Failed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="200"/>
        <source>Would you like to paste the install log to the web?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="238"/>
        <source>Install Log Paste URL</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="241"/>
        <source>The upload was unsuccessful. No web-paste was done.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="257"/>
        <source>Calamares Initialization Failed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="258"/>
        <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="264"/>
        <source>&lt;br/&gt;The following modules could not be loaded:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="325"/>
        <source>Continue with installation?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="327"/>
        <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="333"/>
        <source>&amp;Set up now</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="389"/>
        <source>&amp;Set up</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="389"/>
        <source>&amp;Install</source>
        <translation>&amp;Telepítés</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="391"/>
        <source>Setup is complete. Close the setup program.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="490"/>
        <source>Cancel setup?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="490"/>
        <source>Cancel installation?</source>
        <translation>Abbahagyod a telepítést?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="491"/>
        <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="493"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>Biztos abba szeretnéd hagyni a telepítést?
Minden változtatás elveszik, ha kilépsz a telepítőből.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="220"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="497"/>
        <source>&amp;Yes</source>
        <translation>Igen</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="221"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="498"/>
        <source>&amp;No</source>
        <translation>Nem</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="227"/>
        <source>&amp;Close</source>
        <translation>Bezárás</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="325"/>
        <source>Continue with setup?</source>
        <translation>Folytatod a telepítéssel?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="330"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>A %1 telepítő változtatásokat fog elvégezni, hogy telepítse a következőt: %2.&lt;br/&gt;&lt;strong&gt;A változtatások visszavonhatatlanok lesznek.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="333"/>
        <source>&amp;Install now</source>
        <translation>&amp;Telepítés most</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="340"/>
        <source>Go &amp;back</source>
        <translation>Menj &amp;vissza</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="415"/>
        <source>&amp;Done</source>
        <translation>Elkészült</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="392"/>
        <source>The installation is complete. Close the installer.</source>
        <translation>A telepítés befejeződött. Zárja be a telepítőt.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="213"/>
        <source>Error</source>
        <translation>Hiba</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="199"/>
        <source>Installation Failed</source>
        <translation>Telepítés nem sikerült</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="308"/>
        <source>Unknown exception type</source>
        <translation>Ismeretlen kivétel típus</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="326"/>
        <source>unparseable Python error</source>
        <translation>nem egyeztethető Python hiba</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="370"/>
        <source>unparseable Python traceback</source>
        <translation>nem egyeztethető Python visszakövetés</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="377"/>
        <source>Unfetchable Python error.</source>
        <translation>Összehasonlíthatatlan Python hiba.</translation>
    </message>
</context>
<context>
    <name>CalamaresUtils</name>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="34"/>
        <source>Install log posted to:
%1</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="72"/>
        <source>%1 Setup Program</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="73"/>
        <source>%1 Installer</source>
        <translation>%1 Telepítő</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="142"/>
        <source>Show debug information</source>
        <translation>Hibakeresési információk mutatása</translation>
    </message>
</context>
<context>
    <name>CheckerContainer</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="45"/>
        <source>Gathering system information...</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="154"/>
        <source>After:</source>
        <translation>Utána:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="969"/>
        <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1271"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1309"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1332"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1358"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;Lemez törlése&lt;/strong&gt;&lt;br/&gt;Ez &lt;font color=&quot;red&quot;&gt;törölni&lt;/font&gt; fogja a lemezen levő összes adatot.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1275"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1305"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1328"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1354"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;Meglévő mellé telepíteni&lt;/strong&gt;&lt;br/&gt;A telepítő zsugorítani fogja a partíciót, hogy elférjen a %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1279"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1314"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1336"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1362"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;A partíció lecserélése&lt;/strong&gt; a következővel: %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1026"/>
        <source>Boot loader location:</source>
        <translation>Rendszerbetöltő helye:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="152"/>
        <source>Select storage de&amp;vice:</source>
        <translation>Válassz tároló eszközt:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="153"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="953"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="998"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1084"/>
        <source>Current:</source>
        <translation>Aktuális:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="330"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself. Having a GPT partition table and &lt;strong&gt;fat32 512Mb /boot partition is a must for UEFI installs&lt;/strong&gt;, either use an existing without formatting or create one.</source>
        <translation>&lt;strong&gt;Kézi particionálás&lt;/strong&gt;&lt;br/&gt;Létrehozhat vagy átméretezhet partíciókat. GPT partíciós táblára és &lt;strong&gt;512Mb méretű, fat32 fájlrendszerű /boot partíció szükséges az UEFI telepítéshez&lt;/strong&gt;, vagy használjon már meglévőket anélkül hogy formázna vagy létrehozna egyet.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="829"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>%1 partíció használata mint home partíció a %2 -n</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="954"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Válaszd ki a partíciót amit zsugorítani akarsz és egérrel méretezd át.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1075"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Válaszd ki a telepítésre szánt partíciót &lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1131"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>Nem található EFI partíció a rendszeren. Menj vissza a manuális partícionáláshoz és állíts be %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1140"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>A %1 EFI rendszer partíció lesz használva %2 indításához.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1148"/>
        <source>EFI system partition:</source>
        <translation>EFI rendszerpartíció:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1266"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Úgy tűnik ezen a tárolóeszközön nincs operációs rendszer. Mit szeretnél csinálni?&lt;br/&gt;Lehetőséged lesz átnézni és megerősíteni a választásod mielőtt bármilyen változtatás történik a tárolóeszközön.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1299"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ezen a tárolóeszközön %1 található. Mit szeretnél tenni?&lt;br/&gt;Lehetőséged lesz átnézni és megerősíteni a választásod mielőtt bármilyen változtatás történik a tárolóeszközön.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1323"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ez a tárolóeszköz már tartalmaz egy operációs rendszert. Mit szeretnél tenni?&lt;br/&gt;Lehetőséged lesz átnézni és megerősíteni a választásod mielőtt bármilyen változtatás történik a tárolóeszközön.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1349"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>A tárolóeszközön több operációs rendszer található. Mit szeretnél tenni?&lt;br/&gt;Lehetőséged lesz átnézni és megerősíteni a választásod mielőtt bármilyen változtatás történik a tárolóeszközön.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1503"/>
        <source>No Swap</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1508"/>
        <source>Reuse Swap</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1511"/>
        <source>Swap (no Hibernate)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1514"/>
        <source>Swap (with Hibernate)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1517"/>
        <source>Swap to file</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="14"/>
        <source>Form</source>
        <translation>Adatlap</translation>
    </message>
</context>
<context>
    <name>ClearMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="47"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>%1 csatolás törlése partícionáláshoz</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="55"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>%1 csatolás törlése partícionáláshoz</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="192"/>
        <source>Cleared all mounts for %1</source>
        <translation>%1 minden csatolása törölve</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="42"/>
        <source>Clear all temporary mounts.</source>
        <translation>Minden ideiglenes csatolás törlése</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="49"/>
        <source>Clearing all temporary mounts.</source>
        <translation>Minden ideiglenes csatolás törlése</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="60"/>
        <source>Cannot get list of temporary mounts.</source>
        <translation>Nem lehet lekérni az ideiglenes csatolási listát</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="99"/>
        <source>Cleared all temporary mounts.</source>
        <translation>Minden ideiglenes csatolás törölve</translation>
    </message>
</context>
<context>
    <name>CommandList</name>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="150"/>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="163"/>
        <source>Could not run command.</source>
        <translation>Parancs futtatása nem lehetséges</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="151"/>
        <source>The command runs in the host environment and needs to know the root path, but no rootMountPoint is defined.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="164"/>
        <source>The command needs to know the user&apos;s name, but no username is defined.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="14"/>
        <source>Create a Partition</source>
        <translation>Partíció Létrehozása</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="48"/>
        <source> MiB</source>
        <translation>MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="55"/>
        <source>Partition &amp;Type:</source>
        <translation>Partíció &amp;típus:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="67"/>
        <source>&amp;Primary</source>
        <translation>&amp;Elsődleges</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="77"/>
        <source>E&amp;xtended</source>
        <translation>K&amp;iterjesztett</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="119"/>
        <source>Fi&amp;le System:</source>
        <translation>Fájlrendszer:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="151"/>
        <source>LVM LV name</source>
        <translation>LVM LV név</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="188"/>
        <source>Flags:</source>
        <translation>Zászlók:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="161"/>
        <source>&amp;Mount Point:</source>
        <translation>&amp;Csatolási pont:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="38"/>
        <source>Si&amp;ze:</source>
        <translation>Mé&amp;ret:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="72"/>
        <source>En&amp;crypt</source>
        <translation>Titkosítás</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="151"/>
        <source>Logical</source>
        <translation>Logikai</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="156"/>
        <source>Primary</source>
        <translation>Elsődleges</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="173"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="262"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>A csatolási pont már használatban van. Kérem, válassz másikat.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="44"/>
        <source>Create new %2MiB partition on %4 (%3) with file system %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="55"/>
        <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="67"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>Új %1 partíció létrehozása a következőn: %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="79"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>A telepítő nem tudta létrehozni a partíciót ezen a lemezen &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="20"/>
        <source>Create Partition Table</source>
        <translation>Partíciós tábla létrehozása</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="39"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>Új partíciós tábla létrehozásával az összes létező adat törlődni fog a lemezen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="65"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>Milyen típusú partíciós táblát szeretnél létrehozni?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="72"/>
        <source>Master Boot Record (MBR)</source>
        <translation>Master Boot Record (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="82"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>GUID Partíciós Tábla (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="47"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>Új %1 partíciós tábla létrehozása a következőn: %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="54"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Új &lt;strong&gt;%1 &lt;/strong&gt; partíciós tábla létrehozása a következőn: &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="64"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>Új %1 partíciós tábla létrehozása a következőn: %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="82"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>A telepítőnek nem sikerült létrehoznia a partíciós táblát a lemezen %1.</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="51"/>
        <source>Create user %1</source>
        <translation>%1 nevű felhasználó létrehozása</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="58"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt; nevű felhasználó létrehozása.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="65"/>
        <source>Creating user %1.</source>
        <translation>%1 nevű felhasználó létrehozása</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="83"/>
        <source>Sudoers dir is not writable.</source>
        <translation>Sudoers mappa nem írható.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="89"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation>Nem lehet sudoers fájlt létrehozni írásra.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="98"/>
        <source>Cannot chmod sudoers file.</source>
        <translation>Nem lehet a sudoers fájlt &quot;chmod&quot; -olni.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="107"/>
        <source>Cannot open groups file for reading.</source>
        <translation>Nem lehet a groups fájlt megnyitni olvasásra.</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="37"/>
        <source>Create Volume Group</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CreateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="38"/>
        <source>Create new volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="45"/>
        <source>Create new volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="52"/>
        <source>Creating new volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="65"/>
        <source>The installer failed to create a volume group named &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="34"/>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="48"/>
        <source>Deactivate volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="41"/>
        <source>Deactivate volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="61"/>
        <source>The installer failed to deactivate a volume group named %1.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="40"/>
        <source>Delete partition %1.</source>
        <translation>%1 partíció törlése</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="48"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>A következő partíció törlése: &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="56"/>
        <source>Deleting partition %1.</source>
        <translation>%1 partíció törlése</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="68"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>A telepítő nem tudta törölni a %1 partíciót.</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="151"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>A &lt;strong&gt;partíciós tábla&lt;/strong&gt; típusa a kiválasztott tárolóeszközön.&lt;br&gt;&lt;br&gt;Az egyetlen lehetőség a partíciós tábla változtatására ha töröljük és újra létrehozzuk a partíciós táblát, ami megsemmisít minden adatot a tárolóeszközön.&lt;br&gt;A telepítő megtartja az aktuális partíciós táblát ha csak másképp nem döntesz.&lt;br&gt;Ha nem vagy benne biztos a legtöbb modern rendszernél GPT az elterjedt.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="108"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>Az ezköz tartalmaz egy &lt;strong&gt;%1&lt;/strong&gt; partíciós táblát.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="115"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>A választott tárolóeszköz egy &lt;strong&gt;loop&lt;/strong&gt;  eszköz.&lt;br&gt;&lt;br&gt;Ez nem egy partíciós tábla, ez egy pszeudo eszköz ami lehetővé teszi a hozzáférést egy fájlhoz, úgy mint egy blokk eszköz. Ez gyakran csak egy fájlrendszert tartalmaz.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="122"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>A telepítő &lt;strong&gt;nem talált partíciós táblát&lt;/strong&gt; a választott tárolóeszközön.&lt;br&gt;&lt;br&gt; Az eszköz nem tartalmaz partíciós táblát vagy sérült vagy  ismeretlen típusú.&lt;br&gt;  A telepítő létre tud hozni újat automatikusan vagy te magad kézi partícionálással.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="132"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;Ez az ajánlott partíciós tábla típus modern rendszerekhez ami &lt;strong&gt;EFI&lt;/strong&gt;  indító környezettel indul.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="138"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;Ez a partíciós tábla típus régebbi rendszerekhez javasolt amik &lt;strong&gt;BIOS&lt;/strong&gt; indító környezetből indulnak. Legtöbb esetben azonban GPT használata javasolt. &lt;br&gt;&lt;strong&gt;Figyelem:&lt;/strong&gt; az MSDOS partíciós tábla egy régi sztenderd lényeges korlátozásokkal. &lt;br&gt;Maximum 4 &lt;em&gt;elsődleges&lt;/em&gt; partíció hozható létre és abból a 4-ből egy lehet &lt;em&gt;kiterjesztett&lt;/em&gt; partíció.</translation>
    </message>
</context>
<context>
    <name>DeviceModel</name>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="92"/>
        <source>%1 - %2 (%3)</source>
        <extracomment>device[name] - size[number] (device-node[name])</extracomment>
        <translation>%1 - %2 (%3)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="103"/>
        <source>%1 - (%2)</source>
        <extracomment>device[name] - (device-node[name])</extracomment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>EditExistingPartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="20"/>
        <source>Edit Existing Partition</source>
        <translation>Meglévő partíció szerkesztése</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="50"/>
        <source>Content:</source>
        <translation>Tartalom:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="60"/>
        <source>&amp;Keep</source>
        <translation>&amp;megtart</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="70"/>
        <source>Format</source>
        <translation>Formázás</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="89"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>Figyelem: A partíció formázása az összes meglévő adatot törölni fogja.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="99"/>
        <source>&amp;Mount Point:</source>
        <translation>&amp;Csatolási pont:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="119"/>
        <source>Si&amp;ze:</source>
        <translation>&amp;méret:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="129"/>
        <source> MiB</source>
        <translation>MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="136"/>
        <source>Fi&amp;le System:</source>
        <translation>&amp;fájlrendszer</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="149"/>
        <source>Flags:</source>
        <translation>Zászlók:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="269"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>A csatolási pont már használatban van. Kérem, válassz másikat.</translation>
    </message>
</context>
<context>
    <name>EncryptWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="14"/>
        <source>Form</source>
        <translation>Adatlap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="32"/>
        <source>En&amp;crypt system</source>
        <translation>Rendszer titkosítása</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="42"/>
        <source>Passphrase</source>
        <translation>Jelszó</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="52"/>
        <source>Confirm passphrase</source>
        <translation>Jelszó megerősítés</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="151"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>Írd be ugyanazt a jelmondatot mindkét dobozban.</translation>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="130"/>
        <source>Set partition information</source>
        <translation>Partíció információk beállítása</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="153"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>%1 telepítése az &lt;strong&gt;új&lt;/strong&gt; %2 partícióra.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="157"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;Új&lt;/strong&gt; %2 partíció beállítása &lt;strong&gt;%1&lt;/strong&gt; csatolási ponttal.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="165"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>%2 telepítése %3 &lt;strong&gt;%1&lt;/strong&gt; rendszer partícióra.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="170"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>%3 partíció beállítása &lt;strong&gt;%1&lt;/strong&gt; &lt;strong&gt;%2&lt;/strong&gt; csatolási ponttal.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="182"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Rendszerbetöltő telepítése ide &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="192"/>
        <source>Setting up mount points.</source>
        <translation>Csatlakozási pontok létrehozása</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="14"/>
        <source>Form</source>
        <translation>Adatlap</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="95"/>
        <source>&lt;Restart checkbox tooltip&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="98"/>
        <source>&amp;Restart now</source>
        <translation>$Újraindítás most</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="54"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="58"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="66"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;Sikeres művelet.&lt;/h1&gt;&lt;br/&gt;%1 telepítve lett a számítógépére.&lt;br/&gt;Újraindítás után folytathatod az %2 éles környezetben.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="71"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="133"/>
        <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="139"/>
        <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;Telepítés sikertelen&lt;/h1&gt;&lt;br/&gt;%1 nem lett feltelepítve a számítógépre. &lt;br/&gt;Hibaüzenet: %2.</translation>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="78"/>
        <source>Finish</source>
        <translation>Befejezés</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="132"/>
        <source>Setup Complete</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="133"/>
        <source>Installation Complete</source>
        <translation>A telepítés elkészült</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="135"/>
        <source>The setup of %1 is complete.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="136"/>
        <source>The installation of %1 is complete.</source>
        <translation>%1 telepítése kész.</translation>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="41"/>
        <source>Format partition %1 (file system: %2, size: %3 MiB) on %4.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="52"/>
        <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="63"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>%1 partíció formázása %2 fájlrendszerrel.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="77"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>A telepítő nem tudta formázni a %1 partíciót a %2 lemezen.</translation>
    </message>
</context>
<context>
    <name>GeneralRequirements</name>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="126"/>
        <source>has at least %1 GiB available drive space</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="128"/>
        <source>There is not enough drive space. At least %1 GiB is required.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="137"/>
        <source>has at least %1 GiB working memory</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="139"/>
        <source>The system does not have enough working memory. At least %1 GiB is required.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="148"/>
        <source>is plugged in to a power source</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="149"/>
        <source>The system is not plugged in to a power source.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="156"/>
        <source>is connected to the Internet</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="157"/>
        <source>The system is not connected to the Internet.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="164"/>
        <source>is running the installer as an administrator (root)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="167"/>
        <source>The setup program is not running with administrator rights.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="168"/>
        <source>The installer is not running with administrator rights.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="176"/>
        <source>has a screen large enough to show the whole installer</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="179"/>
        <source>The screen is too small to display the setup program.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="180"/>
        <source>The screen is too small to display the installer.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>IDJob</name>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="38"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="47"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="59"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="67"/>
        <source>OEM Batch Identifier</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="48"/>
        <source>Could not create directories &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
        <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="68"/>
        <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>KeyboardPage</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="219"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation>Billentyűzet típus beállítása %1.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="223"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation>Billentyűzet kiosztás beállítása %1/%2.</translation>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="50"/>
        <source>Keyboard</source>
        <translation>Billentyűzet</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="32"/>
        <source>System locale setting</source>
        <translation>Területi beállítások</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="39"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>A nyelvi beállítás kihat a nyelvi és karakter beállításokra a parancssori elemeknél.&lt;br/&gt;A jelenlegi beállítás &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="63"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Mégse</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="64"/>
        <source>&amp;OK</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="14"/>
        <source>Form</source>
        <translation>Adatlap</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="22"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="149"/>
        <source>I accept the terms and conditions above.</source>
        <translation>Elfogadom a fentebbi felhasználási feltételeket.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="151"/>
        <source>Please review the End User License Agreements (EULAs).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="156"/>
        <source>This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="159"/>
        <source>If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="164"/>
        <source>In case non-free was selected, this installer will install proprietary packages &lt;br/&gt;that have additional End User License Agreements (EULAs) attached to them.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="167"/>
        <source>If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="52"/>
        <source>License</source>
        <translation>Licensz</translation>
    </message>
</context>
<context>
    <name>LicenseWidget</name>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="96"/>
        <source>URL: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="117"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="124"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="130"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="136"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="142"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="148"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="171"/>
        <source>File: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="194"/>
        <source>Hide license text</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="194"/>
        <source>Show the license text</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="198"/>
        <source>Open license agreement in browser.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="259"/>
        <source>The system language will be set to %1.</source>
        <translation>A rendszer területi beállítása %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="260"/>
        <source>The numbers and dates locale will be set to %1.</source>
        <translation>A számok és dátumok területi beállítása %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="124"/>
        <source>Region:</source>
        <translation>Régió:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="125"/>
        <source>Zone:</source>
        <translation>Zóna:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="126"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="127"/>
        <source>&amp;Change...</source>
        <translation>&amp;Változtat...</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="267"/>
        <source>Set timezone to %1/%2.&lt;br/&gt;</source>
        <translation>Időzóna beállítása %1/%2.&lt;br/&gt;</translation>
    </message>
</context>
<context>
    <name>LocaleViewStep</name>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="99"/>
        <source>Location</source>
        <translation>Hely</translation>
    </message>
</context>
<context>
    <name>LuksBootKeyFileJob</name>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="39"/>
        <source>Configuring LUKS key file.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="156"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="164"/>
        <source>No partitions are defined.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="192"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="199"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="207"/>
        <source>Encrypted rootfs setup error</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="193"/>
        <source>Root partition %1 is LUKS but no passphrase has been set.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="200"/>
        <source>Could not create LUKS key file for root partition %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="208"/>
        <source>Could configure LUKS key file on partition %1.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>MachineIdJob</name>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="46"/>
        <source>Generate machine-id.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="62"/>
        <source>Configuration Error</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="63"/>
        <source>No root mount point is set for MachineId.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>NotesQmlViewStep</name>
    <message>
        <location filename="../src/modules/notesqml/NotesQmlViewStep.cpp" line="34"/>
        <source>Notes</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>OEMPage</name>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="28"/>
        <source>Ba&amp;tch:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="38"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="48"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>OEMViewStep</name>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="121"/>
        <source>OEM Configuration</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="126"/>
        <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PWQ</name>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="57"/>
        <source>Password is too short</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="73"/>
        <source>Password is too long</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="149"/>
        <source>Password is too weak</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="157"/>
        <source>Memory allocation error when setting &apos;%1&apos;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="162"/>
        <source>Memory allocation error</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="164"/>
        <source>The password is the same as the old one</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="166"/>
        <source>The password is a palindrome</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="168"/>
        <source>The password differs with case changes only</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="170"/>
        <source>The password is too similar to the old one</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="172"/>
        <source>The password contains the user name in some form</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="174"/>
        <source>The password contains words from the real name of the user in some form</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="177"/>
        <source>The password contains forbidden words in some form</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="181"/>
        <source>The password contains less than %1 digits</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="184"/>
        <source>The password contains too few digits</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="188"/>
        <source>The password contains less than %1 uppercase letters</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="191"/>
        <source>The password contains too few uppercase letters</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="195"/>
        <source>The password contains less than %1 lowercase letters</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="198"/>
        <source>The password contains too few lowercase letters</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="202"/>
        <source>The password contains less than %1 non-alphanumeric characters</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="206"/>
        <source>The password contains too few non-alphanumeric characters</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="210"/>
        <source>The password is shorter than %1 characters</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="213"/>
        <source>The password is too short</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="215"/>
        <source>The password is just rotated old one</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="219"/>
        <source>The password contains less than %1 character classes</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="222"/>
        <source>The password does not contain enough character classes</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="226"/>
        <source>The password contains more than %1 same characters consecutively</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="230"/>
        <source>The password contains too many same characters consecutively</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="234"/>
        <source>The password contains more than %1 characters of the same class consecutively</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="238"/>
        <source>The password contains too many characters of the same class consecutively</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="243"/>
        <source>The password contains monotonic sequence longer than %1 characters</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="247"/>
        <source>The password contains too long of a monotonic character sequence</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="250"/>
        <source>No password supplied</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="252"/>
        <source>Cannot obtain random numbers from the RNG device</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="254"/>
        <source>Password generation failed - required entropy too low for settings</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="260"/>
        <source>The password fails the dictionary check - %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="263"/>
        <source>The password fails the dictionary check</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="267"/>
        <source>Unknown setting - %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="271"/>
        <source>Unknown setting</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="275"/>
        <source>Bad integer value of setting - %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="280"/>
        <source>Bad integer value</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="284"/>
        <source>Setting %1 is not of integer type</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="289"/>
        <source>Setting is not of integer type</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="293"/>
        <source>Setting %1 is not of string type</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="298"/>
        <source>Setting is not of string type</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="300"/>
        <source>Opening the configuration file failed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="302"/>
        <source>The configuration file is malformed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="304"/>
        <source>Fatal failure</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="306"/>
        <source>Unknown error</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="528"/>
        <source>Password is empty</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PackageChooserPage</name>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="20"/>
        <source>Form</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="40"/>
        <source>Product Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="53"/>
        <source>TextLabel</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="69"/>
        <source>Long Product Description</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="34"/>
        <source>Package Selection</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="35"/>
        <source>Please pick a product from the list. The selected product will be installed.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PackageChooserViewStep</name>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserViewStep.cpp" line="70"/>
        <source>Packages</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="14"/>
        <source>Form</source>
        <translation>Adatlap</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="70"/>
        <source>Keyboard Model:</source>
        <translation>Billentyűzet modell:</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="131"/>
        <source>Type here to test your keyboard</source>
        <translation>Gépelj itt a billentyűzet teszteléséhez</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="14"/>
        <source>Form</source>
        <translation>Adatlap</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="36"/>
        <source>What is your name?</source>
        <translation>Mi a neved?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="120"/>
        <source>What name do you want to use to log in?</source>
        <translation>Milyen felhasználónévvel szeretnél bejelentkezni?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="321"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Adj meg jelszót a felhasználói fiókod védelmére.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="345"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="370"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Írd be a jelszót kétszer így ellenőrizve lesznek a gépelési hibák. A jó jelszó tartalmazzon kis és nagy betűket, számokat és legalább 8 karakter hosszúságú. Ajánlott megváltoztatni rendszeres időközönként.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="219"/>
        <source>What is the name of this computer?</source>
        <translation>Mi legyen a számítógép neve?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="51"/>
        <source>Your Full Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="144"/>
        <source>login</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="243"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Ez a név lesz használva ha a számítógép látható a hálózaton.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="246"/>
        <source>Computer Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="351"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="521"/>
        <source>Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="376"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="546"/>
        <source>Repeat Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="451"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="454"/>
        <source>Require strong passwords.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="461"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>Jelszó megkérdezése nélküli automatikus bejelentkezés.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="468"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Ugyanaz a jelszó használata az adminisztrátor felhasználóhoz.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="491"/>
        <source>Choose a password for the administrator account.</source>
        <translation>Adj meg jelszót az adminisztrátor felhasználói fiókhoz.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="515"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="540"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Írd be a jelszót kétszer így ellenőrizve lesznek a gépelési hibák.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="197"/>
        <source>Root</source>
        <translation>Root</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="200"/>
        <source>Home</source>
        <translation>Home</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="202"/>
        <source>Boot</source>
        <translation>Boot</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="205"/>
        <source>EFI system</source>
        <translation>EFI rendszer</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="207"/>
        <source>Swap</source>
        <translation>Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="209"/>
        <source>New partition for %1</source>
        <translation>Új partíció %1 -ra/ -re</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="211"/>
        <source>New partition</source>
        <translation>Új partíció</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="230"/>
        <source>%1  %2</source>
        <extracomment>size[number] filesystem[name]</extracomment>
        <translation>%1  %2</translation>
    </message>
</context>
<context>
    <name>PartitionModel</name>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="144"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="176"/>
        <source>Free Space</source>
        <translation>Szabad terület</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="148"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="180"/>
        <source>New partition</source>
        <translation>Új partíció</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="264"/>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="266"/>
        <source>File System</source>
        <translation>Fájlrendszer</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="268"/>
        <source>Mount Point</source>
        <translation>Csatolási pont</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="270"/>
        <source>Size</source>
        <translation>Méret</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="14"/>
        <source>Form</source>
        <translation>Adatlap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="22"/>
        <source>Storage de&amp;vice:</source>
        <translation>Eszköz:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="51"/>
        <source>&amp;Revert All Changes</source>
        <translation>&amp;Módosítások visszavonása</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="87"/>
        <source>New Partition &amp;Table</source>
        <translation>Új partíciós &amp;tábla</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="107"/>
        <source>Cre&amp;ate</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="132"/>
        <source>New Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="139"/>
        <source>Resize Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="146"/>
        <source>Deactivate Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="153"/>
        <source>Remove Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="180"/>
        <source>I&amp;nstall boot loader on:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="114"/>
        <source>&amp;Edit</source>
        <translation>&amp;Szerkeszt</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="121"/>
        <source>&amp;Delete</source>
        <translation>&amp;Töröl</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="209"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>Biztos vagy benne, hogy létrehozol egy új partíciós táblát itt %1 ?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="238"/>
        <source>Can not create new partition</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="239"/>
        <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="78"/>
        <source>Gathering system information...</source>
        <translation>Rendszerinformációk gyűjtése...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="130"/>
        <source>Partitions</source>
        <translation>Partíciók</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="167"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system.</source>
        <translation>%1 telepítése más operációs rendszer &lt;strong&gt;mellé&lt;/strong&gt; .</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="171"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk and install %1.</source>
        <translation>&lt;strong&gt;Lemez törlés&lt;/strong&gt;és %1 telepítés.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="175"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition with %1.</source>
        <translation>&lt;strong&gt;A partíció lecserélése&lt;/strong&gt; a következővel: %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="180"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning.</source>
        <translation>&lt;strong&gt;Kézi&lt;/strong&gt; partícionálás.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="193"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system on disk &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>%1 telepítése más operációs rendszer &lt;strong&gt;mellé&lt;/strong&gt; a &lt;strong&gt;%2&lt;/strong&gt; (%3) lemezen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="199"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) and install %1.</source>
        <translation>&lt;strong&gt;%2 lemez törlése&lt;/strong&gt; (%3) és %1 telepítés.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="205"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition on disk &lt;strong&gt;%2&lt;/strong&gt; (%3) with %1.</source>
        <translation>&lt;strong&gt;A partíció lecserélése&lt;/strong&gt; a &lt;strong&gt;%2&lt;/strong&gt; lemezen(%3) a következővel: %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="212"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning on disk &lt;strong&gt;%1&lt;/strong&gt; (%2).</source>
        <translation>&lt;strong&gt;Kézi&lt;/strong&gt; telepítés a &lt;strong&gt;%1&lt;/strong&gt; (%2) lemezen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="220"/>
        <source>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
        <translation>Lemez &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="248"/>
        <source>Current:</source>
        <translation>Aktuális:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="265"/>
        <source>After:</source>
        <translation>Utána:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="419"/>
        <source>No EFI system partition configured</source>
        <translation>Nincs EFI rendszer partíció beállítva</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="420"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a FAT32 filesystem with the &lt;strong&gt;esp&lt;/strong&gt; flag enabled and mount point &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation>EFI rendszerpartíciónak léteznie kell %1 indításához.&lt;br/&gt;&lt;br/&gt; Az EFI rendszer beállításához lépj vissza és hozz létre FAT32 fájlrendszert &lt;strong&gt;esp&lt;/strong&gt; zászlóval és &lt;strong&gt;%2&lt;/strong&gt; csatolási ponttal beállítva.&lt;br/&gt;&lt;br/&gt; Folytathatod a telepítést EFI rendszerpartíció létrehozása nélkül is, de lehet, hogy a rendszer nem indul majd.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="433"/>
        <source>EFI system partition flag not set</source>
        <translation>EFI partíciós zászló nincs beállítva</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="434"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;A partition was configured with mount point &lt;strong&gt;%2&lt;/strong&gt; but its &lt;strong&gt;esp&lt;/strong&gt; flag is not set.&lt;br/&gt;To set the flag, go back and edit the partition.&lt;br/&gt;&lt;br/&gt;You can continue without setting the flag but your system may fail to start.</source>
        <translation>EFI rendszerpartíciónak léteznie kell %1 indításához.&lt;br/&gt;&lt;br/&gt; A csatolási pont &lt;strong&gt;%2&lt;/strong&gt; beállítása sikerült a partíción de a zászló nincs beállítva. A beálíltásához lépj vissza szerkeszteni a partíciót..&lt;br/&gt;&lt;br/&gt; Folytathatod a telepítést zászló beállítása nélkül is, de lehet, hogy a rendszer nem indul el majd.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="465"/>
        <source>Option to use GPT on BIOS</source>
        <translation>Lehetőség GPT használatará BIOS esetén</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="466"/>
        <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partion table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;bios_grub&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="501"/>
        <source>Boot partition not encrypted</source>
        <translation>Indító partíció nincs titkosítva</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="502"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation>Egy külön indító partíció lett beállítva egy titkosított root partícióval, de az indító partíció nincs titkosítva.br/&gt;&lt;br/&gt;Biztonsági aggályok merülnek fel ilyen beállítás mellet, mert fontos fájlok nem titkosított partíción vannak tárolva. &lt;br/&gt;Ha szeretnéd, folytathatod így, de a fájlrendszer zárolása meg fog történni az indítás után. &lt;br/&gt; Az indító partíció titkosításához lépj vissza és az újra létrehozáskor válaszd a &lt;strong&gt;Titkosít&lt;/strong&gt; opciót.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="686"/>
        <source>has at least one disk device available.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="687"/>
        <source>There are no partitons to install on.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>PreserveFiles</name>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="84"/>
        <source>Saving files for later ...</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="122"/>
        <source>No files configured to save for later.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="176"/>
        <source>Not all of the configured files could be preserved.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ProcessResult</name>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="464"/>
        <source>
There was no output from the command.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="465"/>
        <source>
Output:
</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="469"/>
        <source>External command crashed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="470"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="475"/>
        <source>External command failed to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="476"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="480"/>
        <source>Internal error when starting command.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="481"/>
        <source>Bad parameters for process job call.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="485"/>
        <source>External command failed to finish.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="486"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="493"/>
        <source>External command finished with errors.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="494"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="91"/>
        <source>Default Keyboard Model</source>
        <translation>Alapértelmezett billentyűzet</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="133"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="168"/>
        <source>Default</source>
        <translation>Alapértelmezett</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="51"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>Nem particionált, vagy ismeretlen partíció</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="207"/>
        <source>unknown</source>
        <translation>ismeretlen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="209"/>
        <source>extended</source>
        <translation>kiterjesztett</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="211"/>
        <source>unformatted</source>
        <translation>formázatlan</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="213"/>
        <source>swap</source>
        <translation>Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="47"/>
        <source>(no mount point)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamares/locale/Label.cpp" line="46"/>
        <source>%1 (%2)</source>
        <extracomment>language[name] (country[name])</extracomment>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/modulesystem/RequirementsChecker.cpp" line="65"/>
        <source>Requirements checking for module &lt;i&gt;%1&lt;/i&gt; is complete.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="45"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="53"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="57"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="101"/>
        <source>File not found</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="46"/>
        <source>Path &lt;pre&gt;%1&lt;/pre&gt; must be an absolute path.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="102"/>
        <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="79"/>
        <source>No product</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="87"/>
        <source>No description provided.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>RemoveVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="34"/>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="48"/>
        <source>Remove Volume Group named %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="41"/>
        <source>Remove Volume Group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="61"/>
        <source>The installer failed to remove a volume group named &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ReplaceWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="14"/>
        <source>Form</source>
        <translation>Adatlap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="135"/>
        <source>Select where to install %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
        <translation>Válaszd ki az telepítés helyét %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Figyelmeztetés: &lt;/font&gt;minden fájl törölve lesz a kiválasztott partíción.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="161"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>A kiválasztott elem nem tűnik érvényes partíciónak.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="169"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1 nem telepíthető, kérlek válassz egy létező partíciót.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="179"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1 nem telepíthető a kiterjesztett partícióra. Kérlek, válassz egy létező elsődleges vagy logikai partíciót.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="189"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>Nem lehet telepíteni a következőt %1 erre a partícióra.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="195"/>
        <source>Data partition (%1)</source>
        <translation>Adat partíció (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="212"/>
        <source>Unknown system partition (%1)</source>
        <translation>Ismeretlen rendszer partíció (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="217"/>
        <source>%1 system partition (%2)</source>
        <translation>%1 rendszer partíció (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="228"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;A partíció %1 túl kicsi a következőhöz %2. Kérlek, válassz egy legalább %3 GB- os partíciót.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="251"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Az EFI rendszerpartíció nem található a rendszerben. Kérlek, lépj vissza és állítsd be manuális partícionálással %1- et.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="262"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="279"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="303"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 installálva lesz a következőre: %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Figyelmeztetés: &lt;/font&gt;a partíción %2 minden törölve lesz.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="271"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>A %2 indításához az EFI rendszer partíciót használja a következőn: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="287"/>
        <source>EFI system partition:</source>
        <translation>EFI rendszer partíció:</translation>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="48"/>
        <source>Resize partition %1.</source>
        <translation>A %1 partíció átméretezése.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="55"/>
        <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="66"/>
        <source>Resizing %2MiB partition %1 to %3MiB.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="85"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>A telepítő nem tudta átméretezni a(z) %1 partíciót a(z) &apos;%2&apos; lemezen.</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="39"/>
        <source>Resize Volume Group</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="37"/>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="55"/>
        <source>Resize volume group named %1 from %2 to %3.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="46"/>
        <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="70"/>
        <source>The installer failed to resize a volume group named &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ResultsListDialog</name>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="137"/>
        <source>For best results, please ensure that this computer:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="138"/>
        <source>System requirements</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ResultsListWidget</name>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="263"/>
        <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="267"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="274"/>
        <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="278"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="287"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>ScanningDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="84"/>
        <source>Scanning storage devices...</source>
        <translation>Eszközök keresése...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="85"/>
        <source>Partitioning</source>
        <translation>Partícionálás</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="39"/>
        <source>Set hostname %1</source>
        <translation>Hálózati név beállítása a %1 -en</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="46"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Hálózati név beállítása a következőhöz: &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="53"/>
        <source>Setting hostname %1.</source>
        <translation>Hálózati név beállítása a %1 -hez</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="64"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="71"/>
        <source>Internal Error</source>
        <translation>Belső hiba</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="78"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="89"/>
        <source>Cannot write hostname to target system</source>
        <translation>Nem lehet a hálózati nevet írni a célrendszeren</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="59"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>Billentyűzet beállítása %1, elrendezés %2-%3</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="321"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>Hiba történt a billentyűzet virtuális konzolba való beállításakor</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="322"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="326"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="332"/>
        <source>Failed to write to %1</source>
        <translation>Hiba történt %1 -re történő íráskor</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="325"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>Hiba történt a billentyűzet X11- hez való beállításakor</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="331"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <translation>Hiba történt a billentyűzet konfiguráció alapértelmezett /etc/default mappába valló elmentésekor.</translation>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="49"/>
        <source>Set flags on partition %1.</source>
        <translation>Zászlók beállítása a partíción %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="52"/>
        <source>Set flags on %1MiB %2 partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="56"/>
        <source>Set flags on new partition.</source>
        <translation>Jelzők beállítása az új partíción.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="67"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Zászlók törlése a partíción: &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
        <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="85"/>
        <source>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="107"/>
        <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="121"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="75"/>
        <source>Clear flags on new partition.</source>
        <translation>Jelzők törlése az új partíción.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="79"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Zászlók beállítása &lt;strong&gt;%1&lt;/strong&gt; ,mint &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="91"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Jelző beállítása mint &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="103"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Zászlók törlése a partíción: &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="111"/>
        <source>Clearing flags on new partition.</source>
        <translation>jelzők törlése az új partíción.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="115"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Zászlók beállítása &lt;strong&gt;%2&lt;/strong&gt; a &lt;strong&gt;%1&lt;/strong&gt; partíción.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="127"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation>Jelzők beállítása az új &lt;strong&gt;%1&lt;/strong&gt; partíción.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="144"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation>A telepítőnek nem sikerült a zászlók beállítása a partíción %1.</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="49"/>
        <source>Set password for user %1</source>
        <translation>%1 felhasználó jelszó beállítása</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="56"/>
        <source>Setting password for user %1.</source>
        <translation>%1 felhasználói jelszó beállítása</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="90"/>
        <source>Bad destination system path.</source>
        <translation>Rossz célrendszer elérési út</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="91"/>
        <source>rootMountPoint is %1</source>
        <translation>rootMountPoint is %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="97"/>
        <source>Cannot disable root account.</source>
        <translation>A root account- ot nem lehet inaktiválni.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="98"/>
        <source>passwd terminated with error code %1.</source>
        <translation>passwd megszakítva %1 hibakóddal.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="106"/>
        <source>Cannot set password for user %1.</source>
        <translation>Nem lehet a %1 felhasználó jelszavát beállítani.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="107"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod megszakítva %1 hibakóddal.</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="43"/>
        <source>Set timezone to %1/%2</source>
        <translation>Időzóna beállítása %1/%2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot access selected timezone path.</source>
        <translation>A választott időzóna útvonal nem hozzáférhető.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Bad path: %1</source>
        <translation>Rossz elérési út: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="80"/>
        <source>Cannot set timezone.</source>
        <translation>Nem lehet az időzónát beállítani.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="81"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>Link létrehozása nem sikerült: %1, link év: %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="86"/>
        <source>Cannot set timezone,</source>
        <translation>Nem lehet beállítani az időzónát .</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="87"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>Nem lehet megnyitni írásra: /etc/timezone</translation>
    </message>
</context>
<context>
    <name>SlideCounter</name>
    <message>
        <location filename="../src/qml/calamares/slideshow/SlideCounter.qml" line="36"/>
        <source>%L1 / %L2</source>
        <extracomment>slide counter, %1 of %2 (numeric)</extracomment>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>SummaryPage</name>
    <message>
        <location filename="../src/modules/summary/SummaryPage.cpp" line="57"/>
        <source>This is an overview of what will happen once you start the setup procedure.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/summary/SummaryPage.cpp" line="60"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation>Ez áttekintése annak, hogy mi fog történni, ha megkezded a telepítést.</translation>
    </message>
</context>
<context>
    <name>SummaryViewStep</name>
    <message>
        <location filename="../src/modules/summary/SummaryViewStep.cpp" line="43"/>
        <source>Summary</source>
        <translation>Összefoglalás</translation>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="139"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="145"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="342"/>
        <source>Your username is too long.</source>
        <translation>A felhasználónév túl hosszú.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="349"/>
        <source>Your username must start with a lowercase letter or underscore.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="356"/>
        <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="404"/>
        <source>Only letters, numbers, underscore and hyphen are allowed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="392"/>
        <source>Your hostname is too short.</source>
        <translation>A hálózati név túl rövid.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="397"/>
        <source>Your hostname is too long.</source>
        <translation>A hálózati név túl hosszú.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="421"/>
        <source>Your passwords do not match!</source>
        <translation>A két jelszó nem egyezik!</translation>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="55"/>
        <source>Users</source>
        <translation>Felhasználók</translation>
    </message>
</context>
<context>
    <name>VariantModel</name>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="241"/>
        <source>Key</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="245"/>
        <source>Value</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>VolumeGroupBaseDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="14"/>
        <source>Create Volume Group</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="20"/>
        <source>List of Physical Volumes</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="30"/>
        <source>Volume Group Name:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="43"/>
        <source>Volume Group Type:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="56"/>
        <source>Physical Extent Size:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="66"/>
        <source> MiB</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="82"/>
        <source>Total Size:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="102"/>
        <source>Used Size:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="122"/>
        <source>Total Sectors:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="142"/>
        <source>Quantity of LVs:</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="14"/>
        <source>Form</source>
        <translation>Adatlap</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="69"/>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="82"/>
        <source>Select application and system language</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="190"/>
        <source>Open donations website</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="230"/>
        <source>&amp;Donate</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="240"/>
        <source>Open help and support website</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="300"/>
        <source>&amp;Release notes</source>
        <translation>&amp;Kiadási megjegyzések</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="290"/>
        <source>&amp;Known issues</source>
        <translation>&amp;Ismert hibák</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="243"/>
        <source>&amp;Support</source>
        <translation>&amp;Támogatás</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="180"/>
        <source>&amp;About</source>
        <translation>&amp;Névjegy</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="254"/>
        <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Üdvözlet a %1 telepítőben.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="253"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Üdvözljük a %1 Calamares telepítőjében.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="247"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1.&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="248"/>
        <source>&lt;h1&gt;Welcome to %1 setup.&lt;/h1&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="266"/>
        <source>About %1 setup</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="266"/>
        <source>About %1 installer</source>
        <translation>A %1 telepítőről</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="269"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2019 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Thanks to &lt;a href=&quot;https://calamares.io/team/&quot;&gt;the Calamares team&lt;/a&gt; and the &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="259"/>
        <source>%1 support</source>
        <translation>%1 támogatás</translation>
    </message>
</context>
<context>
    <name>WelcomeQmlViewStep</name>
    <message>
        <location filename="../src/modules/welcomeq/WelcomeQmlViewStep.cpp" line="58"/>
        <source>Welcome</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="62"/>
        <source>Welcome</source>
        <translation>Üdvözlet</translation>
    </message>
</context>
<context>
    <name>notes</name>
    <message>
        <location filename="../src/branding/kaos_branding/notes.qml" line="50"/>
        <source>&lt;h3&gt;KaOS - 2020.02&lt;/h3&gt;
            &lt;p&gt;A nice way of starting 2020 is to present to you the January release of a new stable ISO.&lt;/p&gt;
            
            &lt;p&gt;For the many changes in this release, two stand out.  First one is the addition of signed kernel modules for Linux 5.4. All internal modules are now signed automatically during the kernel build, out of tree modules like virtualbox-modules and NVIDIA packages have the signing added too. Building of those modules was adjusted to use the kernel specific signing files during each and every rebuild. You can harden your system by adding &lt;code&gt;module.sig_enforce=1&lt;/code&gt; to your kernel boot line. To check if your systems contains any unsigned:&lt;/p&gt;
            
            &lt;p&gt;&lt;code&gt;for mod in $(lsmod | tail -n +2 | cut -d' ' -f1); do modinfo ${mod} | grep -q 'signature' || echo 'no signature for module: ${mod}' ; done&lt;/code&gt;&lt;/p&gt;
            
            &lt;p&gt;Second: To better accommodate hybrid systems and non-free NVIDIA, there is now a switch from libgl to vendor neutral libglvnd. This will make the NVIDIA bumblebee packages obsolete. Xorg-server was updated to 1.20.6, this now includes the needed patches to use Prime instead of Bumblebee. The needed scripts for this are packaged as the &lt;code&gt;prime&lt;/code&gt; package. The hardware-detection scripts and Calamares installer have their code adjusted to use the new Prime option. The availability of NVIDIA hybrid testing hardware was limited, so you might still encounter some issue with Prime.&lt;/p&gt;
            
            &lt;p&gt;Work has also continued last month to further remove python2. This time it was removed as makedepend from as many as possible.&lt;/b&gt;
            
            &lt;p&gt;You will find KDE Applications 19.12 on this ISO. Highlights of 19.12 include Kdenlive now comes with a spectacular new sound mixer. Dolphin redesigned advanced search options and now you can go backwards and forwards in the history of places you have already visited. KDE-Connect implemented a new Kirigami interface which provides new features for desktop-to-desktop users, such as media control, remote input, device ringing, file transfer and running commands. For Elisa, indexing music files has improved and now supports web radios and ships with a few examples for you to try.&lt;/b&gt;
            Frameworks is at 5.65.0, Plasma at 5.17.4 and KDE Applications at 19.12.0. All built on Qt 5.14.0.
            
            &lt;p&gt;For the installer Calamares, support for non-free NVIDIA with Prime has been added.&lt;/p&gt;
            
            &lt;p&gt;Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application.  LibreOffice has thus replaced Calligra as the default Office Application for KaOS.
            
            &lt;p&gt;KaOS' creation &lt;strong&gt;Croeso&lt;/strong&gt; (Welsh for welcome) for helping with configuring a new install is included.  It will run on the newly installed system and offers to adjust some 15 commonly used settings and replaces the formerly used, PyQt based first run wizard Kaptan.  It also includes a custom Wallpaper selector, distribution info and news.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter now includes a fully rewritten (also in QML) Installation Guide.&lt;/p&gt;
            
            &lt;p&gt;There is an option to verify the authenticity of downloaded KaOS ISO files through GPG signature verification, see the Download page for further details and instructions.&lt;/p&gt;
            
            &lt;p&gt;A KaOS specific tool to write ISO files to USB is in use.  Not only does IsoWriter write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do. It includes the option to verify the written USB in comparison to the used ISO file.&lt;/p&gt;
            
            &lt;p&gt;Most notable major updates to the base of the system are LLVM/Clang 9.0.1, Glib2 2.62.4, Bison 3.4.2, Python3 3.7.6, Linux 5.4.7, Protobuf 3.11.1, Mesa 19.2.8, NetworkManager 1.22.2, Nano 4.7, GStreamer 1.16.2 and Qt 5.14.0&lt;/p&gt;
            
            &lt;p&gt;KaOS repositories no longer provide Qt 4.  It is a good three years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended.  Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS.  Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.&lt;/p&gt;
            
            &lt;p&gt;The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.&lt;/p&gt;

            &lt;p&gt;This ISO uses the &lt;b&gt;CRC and finobt enabled&lt;/b&gt; XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability  of  various  tools to validate and repair metadata corruptions when they are found.  The  free  inode  btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.&lt;/p&gt;
            
            &lt;p&gt;&lt;strong&gt;Octopi&lt;/strong&gt; is becoming a very crucial part of full system maintenance for KaOS. It is not just a GUI frontend to pacman. Tools like making sure a mirror is synced before starting any update, looking at the pacman logs, an option to get a paste from a complete snapshot of all info of a system with the SysInfo tool are included. Also included are very simple ways to open files, like copy to clipboard the file path shown in Octopi. To make sure the system doesn't start using too much disk space for the pacman cache, but still giving the user the option to retain some recent packages, the cache-cleaner tool is a great addition. The built-in tool to access &lt;b&gt;KCP&lt;/b&gt; has now a much clearer place with the addition of its own foreign icon in the menu-bar. New added is the option to select custom icons for the systemtray.&lt;/p&gt;
            
            &lt;p&gt;For UEFI installs, KaOS uses the simple, transparent but quite powerful systemd-boot as bootloader.&lt;/p&gt;
            
            &lt;p&gt;To learn more about the goals and ideas behind KaOS, please read the &lt;b&gt;http://kaosx.us/&lt;/b&gt;, &lt;b&gt;http://kaosx.us/about/&lt;/b&gt;, and &lt;b&gt;http://kaosx.us/faq/&lt;/b&gt; pages.&lt;/p&gt;
            
            &lt;p&gt;To avoid any misunderstanding and confusion, KaOS is &lt;b&gt;not based upon, derived of, or inspired by&lt;/b&gt; any one particular distribution. It is completely independent, build entirely from scratch with its own repositories. To read more about this see &lt;b&gt;http://kaosx.us/about/based/&lt;/b&gt;. A &lt;b&gt;rolling release distribution&lt;/b&gt; never has a final release, every ISO is merely a snapshot of the current status of the repositories. An idea what is currently available:&lt;/p&gt;
            
            &lt;p&gt;The ISO ships with &lt;b&gt;Frameworks 5.65.0, Plasma 5.17.4, KDE Applications 19.12.0&lt;/b&gt;, Linux 5.4.7, Systemd 243, Kmod 26, NetworkManager 1.22.2, LibreOffice 6.3.4, Krita 4.2.8, Elisa, Xorg-Server 1.20.6, Mesa 19.2.8, Glibc 2.30, GCC 9.2.0, non-free Nvidia 440.44, Pepperflash and Python3 3.7.6 to name a few.&lt;/p&gt;
            
            &lt;p&gt;The package manager is &lt;strong&gt;Pacman 5.2.1&lt;/strong&gt;, with the simple but powerful Octopi 0.9.0 as GUI frontend. Falkon is the default web browser, it is Qt based and the successor of Qupzilla. &lt;b&gt;GFXboot&lt;/b&gt; is included with KaOS artwork, Grub theme is Midna, Look &amp;amp; Feel is a KaOS exclusive version Midna.&lt;/p&gt;
            
            &lt;p&gt;&lt;b&gt;Repositories&lt;/b&gt; of KaOS will stay limited in size and expect it to stay at the current maximum of about 2100-2200. A gist of what is available, besides the stable kernel there is Linux-next 5.4, LibreOffice 6.3.4,VLC, Vokoscreen, Blender, Kodi, Calibre, Sigil, Vulkan packages, a few games like 0ad and Knights.&lt;br /&gt;
            A limited number of the most well-known GTK applications are available, examples Firefox 71.0, Chrome 81, Ardour 5.12.0, Inkscape 0.92.4, GIMP 2.10.14 and Google-talkplugin 5.41.3.0.1.&lt;br /&gt;
            Complete language packs are available for KDE, Calligra, Firefox, LibreOffice and Thunderbird. For IM, Fcitx 4.2.9.6 is available as a rather complete group.&lt;/p&gt;
            
            &lt;p&gt;&lt;b&gt;Known issues:&lt;/b&gt;&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;Some Intel CPU systems might have an issue kernel’s entropy pool and have a long boot delay, if encountered add &lt;strong&gt;random.trust_cpu=1&lt;/strong&gt; to the kernel boot line.
                &lt;li&gt;Installing on RAID is currently not possible&lt;/li&gt;
            &lt;/ul&gt;
            
            &lt;p&gt;To create &lt;b&gt;reliable&lt;/b&gt; installation media, please follow the instructions from the &lt;b&gt;http://kaosx.us/download/&lt;/b&gt; page. KaOS&apos;s ISO&apos;s &lt;b&gt;do not support Unetbootin or Rufus&lt;/b&gt;, and DVDs need a burn speed &lt;b&gt;no higher than 4x&lt;/b&gt;.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>notesqml</name>
    <message>
        <location filename="../src/modules/notesqml/notesqml.qml" line="51"/>
        <source>&lt;h3&gt;Generic GNU/Linux 2020.2 LTS &lt;quote&gt;Turgid Tuba&lt;/quote&gt;&lt;/h3&gt;
            &lt;p&gt;This an example QML file, showing options in RichText with Flickable content.&lt;/p&gt;
            
            &lt;p&gt;QML with RichText can use HTML tags, Flickable content is useful for touchscreens.&lt;/p&gt;
            
            &lt;p&gt;&lt;b&gt;This is bold text&lt;/b&gt;&lt;/p&gt;
            &lt;p&gt;&lt;i&gt;This is italic text&lt;/i&gt;&lt;/p&gt;
            &lt;p&gt;&lt;u&gt;This is underlined text&lt;/u&gt;&lt;/p&gt;
            &lt;p&gt;&lt;center&gt;This text will be center-aligned.&lt;/center&gt;&lt;/p&gt;
            &lt;p&gt;&lt;s&gt;This is strikethrough&lt;/s&gt;&lt;/p&gt;
            
            &lt;p&gt;Code example:
            &lt;code&gt;ls -l /home&lt;/code&gt;&lt;/p&gt;
            
            &lt;p&gt;&lt;b&gt;Lists:&lt;/b&gt;&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;Intel CPU systems&lt;/li&gt;
                &lt;li&gt;AMD CPU systems&lt;/li&gt;
            &lt;/ul&gt;
            
            &lt;p&gt;The vertical scrollbar is adjustable, current width set to 10.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>show</name>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="48"/>
        <source>Here the actual install of KaOS will start.&lt;br/&gt;Use the left &lt;b&gt;mouse button&lt;/b&gt; to go to the next slide, right for previous.&lt;br/&gt;After creating your chosen disk setup in the first 10 % &lt;br/&gt;the full copying of the ISO will take the longest of this install phase &lt;br/&gt;and will run until approximately 30%.&lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="74"/>
        <source>After the ISO is copied some 25 post-install modules will run.&lt;br/&gt;This includes setting user specific options, &lt;br/&gt;removing Live Session only packages&lt;br/&gt;and adjusting hardware setup.&lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="99"/>
        <source>The default Office Suite is LibreOffice.&lt;br/&gt;Calligra is available in the repositories. &lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="122"/>
        <source>Qt/KDE specific internet applications include the &lt;br/&gt;Falkon web-browser and kde-telepathy for &lt;br/&gt;chat and Instant Messaging. &lt;br/&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="146"/>
        <source>For package management Octopi is the GUI application.&lt;br/&gt;</source>
        <translation> Octopi a grafikusfelülettel rendelkező csomagkezelő alkalmazás .&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="168"/>
        <source>May using KaOS be a pleasant experience for you.</source>
        <translation>A KaOS használata kellemes élmény lesz a felhasználó számára.</translation>
    </message>
    <message>
        <location filename="../src/branding/default/show.qml" line="64"/>
        <source>This is a second Slide element.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/branding/default/show.qml" line="68"/>
        <source>This is a third Slide element.</source>
        <translation type="unfinished"/>
    </message>
</context>
</TS>