<?xml version="1.0" ?><!DOCTYPE TS><TS language="de" version="2.1">
<context>
    <name>AlongsidePage</name>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="77"/>
        <source>Choose partition to shrink:</source>
        <translation>Wählen Sie eine Partition zum Verkleinern:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="78"/>
        <source>Allocate drive space by dragging the divider below:</source>
        <translation>Teilen Sie Festplattenplatz auf, indem Sie den Balken unten verschieben:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="121"/>
        <source>With this operation, the partition &lt;strong&gt;%1&lt;/strong&gt; which contains %4 will be shrunk to %2MB and a new %3MB partition will be created for %5.</source>
        <translation>Mit dieser Aktion wird die Partition &lt;strong&gt;%1&lt;/strong&gt; welche %4 beinhaltet, auf %2MB verkleinert und eine neue %3MB Partition für %5 erstellt.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="198"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>Auf diesem System kann keine EFI Systempartition gefunden werden. Bitte geh zurück und wähle manuelle Partitionierung, um %1 einzurichten.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="208"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>Die EFI Partition auf %1 wird verwendet, um %2 zu starten.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="218"/>
        <source>EFI system partition:</source>
        <translation>EFI-Systempartition:</translation>
    </message>
</context>
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="61"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="75"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="87"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="59"/>
        <source>Master Boot Record of %1</source>
        <translation>Master Boot Record von %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="76"/>
        <source>Boot Partition</source>
        <translation>Boot Partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="81"/>
        <source>System Partition</source>
        <translation>System Partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="111"/>
        <source>Do not install a boot loader</source>
        <translation>Keinen Bootloader installieren</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="125"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
</context>
<context>
    <name>Calamares::DebugWindow</name>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="14"/>
        <source>Form</source>
        <translation>Formular</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="24"/>
        <source>GlobalStorage</source>
        <translation>Hauptspeicher</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="34"/>
        <source>JobQueue</source>
        <translation>Job Warteschlange</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="44"/>
        <source>Modules</source>
        <translation>Bausteine</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="57"/>
        <source>Type:</source>
        <translation>Typ:</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="64"/>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="78"/>
        <source>none</source>
        <translation>keine</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="71"/>
        <source>Interface:</source>
        <translation>Schnittstelle:</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="93"/>
        <source>Tools</source>
        <translation>Werkzeuge</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.cpp" line="182"/>
        <source>Debug information</source>
        <translation>Debug Information</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/ExecutionViewStep.cpp" line="77"/>
        <source>Install</source>
        <translation>Installieren</translation>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="89"/>
        <source>Done</source>
        <translation>Abgeschlossen</translation>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="51"/>
        <source>Run command %1 %2</source>
        <translation>Befehl  %1 %2 ausführen</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="60"/>
        <source>Running command %1 %2</source>
        <translation>Befehl %1 %2 läuft</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="89"/>
        <source>External command crashed</source>
        <translation>Externer Befehl abgestürzt</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="90"/>
        <source>Command %1 crashed.
Output:
%2</source>
        <translation>Befehl %1 ist abgestürzt.
Ausgabe:
%2</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="95"/>
        <source>External command failed to start</source>
        <translation>Externer Befehl konnte nicht gestartet werden</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="96"/>
        <source>Command %1 failed to start.</source>
        <translation>Befehl %1 konnte nicht gestartet werden</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="100"/>
        <source>Internal error when starting command</source>
        <translation>Interner Fehler beim Ausführen des Befehls</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="101"/>
        <source>Bad parameters for process job call.</source>
        <translation>Ungültige Parameter für Prozessaufruf.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="104"/>
        <source>External command failed to finish</source>
        <translation>Externer Befehl konnte nicht abgeschlossen werden</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="105"/>
        <source>Command %1 failed to finish in %2s.
Output:
%3</source>
        <translation>Befehl %1 wurde nicht innerhalb %2s beendet.
Ausgabe:
%3</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="111"/>
        <source>External command finished with errors</source>
        <translation>Externer Befehl mit Fehlern abgeschlossen</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="112"/>
        <source>Command %1 finished with exit code %2.
Output:
%3</source>
        <translation>Befehl %1 mit Ausgabe code %2 beendet.
Ausgabe:
%3</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="250"/>
        <source>Running %1 operation.</source>
        <translation>%1 Aufgabe läuft.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="263"/>
        <source>Bad working directory path</source>
        <translation>Fehlerhafter Verzeichnis-Pfad</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="264"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>Arbeitsverzeichnis %1 für Python-Job %2 ist nicht lesbar.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="274"/>
        <source>Bad main script file</source>
        <translation>Fehlerhaftes Hauptskript</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="275"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>Hauptskript-Datei %1 für Python-Job %2 ist nicht lesbar.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="320"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>Boost.Python-Fehler in Job &quot;%1&quot;.</translation>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="65"/>
        <source>&amp;Back</source>
        <translation>&amp;zurück</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="66"/>
        <source>&amp;Next</source>
        <translation>&amp;weiter</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="67"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="295"/>
        <source>&amp;Cancel</source>
        <translation>&amp;abbrechen</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="90"/>
        <source>Cancel installation?</source>
        <translation>Installation abbrechen ?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="91"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>Wollen Sie die Installation wirklich abbrechen ?
Das Installationsprogramm wird beendet und alle Eingaben werden verworfen.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="224"/>
        <source>Continue with setup?</source>
        <translation>Möchtest du diese Einrichtung jetzt fortsetzen?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="225"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>Das %1 Installationsprogramm wird jetzt gleich Veränderungen an deiner Festplatte vornehmen, um %2 zu installieren. &lt;br/&gt;&lt;strong&gt;Diese Veränderungen sind unumkehrbar. &lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="232"/>
        <source>&amp;Install now</source>
        <translation>Jetzt &amp;installieren</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="233"/>
        <source>Go &amp;back</source>
        <translation>&amp;Zurück</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="264"/>
        <source>&amp;Quit</source>
        <translation>&amp;beenden</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="170"/>
        <source>Error</source>
        <translation>Fehler</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="171"/>
        <source>Installation Failed</source>
        <translation>Die Installation ist gescheitert</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="263"/>
        <source>Unknown exception type</source>
        <translation>unbekannter Ausnahme Typ</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="276"/>
        <source>unparseable Python error</source>
        <translation>nicht analysierbarer Python-Fehler</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="292"/>
        <source>unparseable Python traceback</source>
        <translation>nicht analysierbarer Python-Traceback</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="296"/>
        <source>Unfetchable Python error.</source>
        <translation>nicht zuzuordnender Python-Fehler</translation>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="44"/>
        <source>%1 Installer</source>
        <translation>%1 Installationsprogramm</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="98"/>
        <source>Show debug information</source>
        <translation>zeige debug Information</translation>
    </message>
</context>
<context>
    <name>CheckFileSystemJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CheckFileSystemJob.cpp" line="39"/>
        <source>Checking file system on partition %1.</source>
        <translation>Das Dateisystem auf Partition %1 wird überprüft.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CheckFileSystemJob.cpp" line="77"/>
        <source>The file system check on partition %1 failed.</source>
        <translation>Die Überprüfung des Dateisystems auf Partition %1 ist fehlgeschlagen.</translation>
    </message>
</context>
<context>
    <name>CheckerWidget</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="95"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>Dieser Computer erfüllt die minimalen Resourcen nicht, welche für eine Installation von %1 sinnvoll sind.&lt;br/&gt;Die Installation kann nicht fortgesetzt werden. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="113"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation>Dieser Computer erfüllt die minimalen Resourcen nicht, welche für eine Installation von %1 empfohlen werden.&lt;br/&gt;Die Installation kann fortgesetzt werden, manche Funktionen könnten nicht funktionieren. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="142"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation>Dieses Programm wird Ihnen ein paar Fragen stellen und %2 auf Ihrem Computer einrichten.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="166"/>
        <source>For best results, please ensure that this computer:</source>
        <translation>Um optimale Funktionalität zu sichern, garantieren sie bitte, das dieser Computer:</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="194"/>
        <source>System requirements</source>
        <translation>Systemanforderungen</translation>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="127"/>
        <source>After:</source>
        <translation>Danach:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1184"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1224"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1248"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1286"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;Festplatte löschen&lt;/strong&gt;&lt;br/&gt;Dies wird alle momentan auf dem ausgewählten Speichergerät vorhandenen Daten &lt;font color=&quot;red&quot;&gt;löschen&lt;/font&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1188"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1219"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1243"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1281"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;Nebenher installieren&lt;/strong&gt;&lt;br/&gt;Das Installationsprogramm wird eine Partition verkleinern, um Platz für %1 zu schaffen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1193"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1229"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1252"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1290"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;Partition ersetzen&lt;/strong&gt;&lt;br/&gt;Ersetzt eine Partition mit %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="977"/>
        <source>Boot loader location:</source>
        <translation>Bootloader Platzierung:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="125"/>
        <source>Select storage de&amp;vice:</source>
        <translation>Speicherge&amp;rät auswählen:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="126"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="901"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="948"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1028"/>
        <source>Current:</source>
        <translation>Aktuell:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="234"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself. Having a GPT partition table and &lt;strong&gt;fat32 512Mb /boot partition is a must for UEFI installs&lt;/strong&gt;, either use an existing without formatting or create one.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="778"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>%1 als Home-Partition für %2 wiederverwenden.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="902"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="919"/>
        <source>%1 will be shrunk to %2MB and a new %3MB partition will be created for %4.</source>
        <translation>%1 wird auf %2MB verkleinert und eine neue %3MB Partition wird fürr %4 erstellt.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1019"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Wählen Sie eine Partition aus, auf die installiert werden soll&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1075"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>Auf diesem System kann keine EFI-Systempartition gefunden werden. Bitte gehen Sie zurück und wählen Sie manuelle Partitionierung, um %1 einzurichten.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1085"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>Die EFI-Systempartition auf %1 wird zum Starten von %2 verwendet.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1094"/>
        <source>EFI system partition:</source>
        <translation>EFI-Systempartition:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1179"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1213"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1238"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1276"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="14"/>
        <source>Form</source>
        <translation>Formular</translation>
    </message>
</context>
<context>
    <name>ClearMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="45"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>Kläre eingehängte Partitionen für Operationen auf %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="53"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>Löse eingehängte Partitionen für Operationen auf %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="190"/>
        <source>Cleared all mounts for %1</source>
        <translation>Kläre alle eingehängten Partitionen für %1</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="40"/>
        <source>Clear all temporary mounts.</source>
        <translation>Löse alle temporär eingehängten Partitionen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="47"/>
        <source>Clearing all temporary mounts.</source>
        <translation>Alle temporären Einbindungen werden gelöst.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="58"/>
        <source>Cannot get list of temporary mounts.</source>
        <translation>Das Installationsprogramm kann keine Liste der temporär eingehängten Partitionen machen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="97"/>
        <source>Cleared all temporary mounts.</source>
        <translation>Alle temporär eingehängten Partitionen sind jetzt entbunden.</translation>
    </message>
</context>
<context>
    <name>CrashReporter</name>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.ui" line="29"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.ui" line="29"/>
        <source>Tomahawk Crash Reporter</source>
        <translation>Tomahawk-Absturzberichterstatter</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.ui" line="104"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.ui" line="104"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.ui" line="213"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.ui" line="238"/>
        <source>Abort</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.ui" line="257"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.ui" line="156"/>
        <source>Send this report</source>
        <translation>Diesen Bericht senden</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.ui" line="264"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.ui" line="163"/>
        <source>Don&apos;t send</source>
        <translation>Nicht senden</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.ui" line="284"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.ui" line="258"/>
        <source>You can disable sending crash reports in the configuration dialog.</source>
        <translation>Du kannst das versenden der Fehlerberichte in den Einstellungen abdrehen.</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="107"/>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="114"/>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="150"/>
        <source>We cannot gather useful debug information on your system.</source>
        <translation>Wir können auf Ihrem Systen keine nützlichen Fehlersuchinformationen sammeln.</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="108"/>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="115"/>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="151"/>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="272"/>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="293"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.cpp" line="184"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.cpp" line="204"/>
        <source>Close</source>
        <translation>Schließen</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="143"/>
        <source>Ready to send debug information (&lt;a href=&quot;%1&quot;&gt;view backtrace&lt;/a&gt;).</source>
        <translation>Bereit zum Senden der Fehlersuchinformationen (&lt;a href=&quot;%1&quot;&gt;Rückverfolgung ansehen&lt;/a&gt;).</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="159"/>
        <source>Gathering debug information...</source>
        <translation>Fehlersuchinformationen werden gesammelt...</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="258"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.cpp" line="170"/>
        <source>Uploaded %L1 of %L2 KB.</source>
        <translation>%L1 von %L2 KB hochgeladen.</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="285"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.cpp" line="196"/>
        <source>Sent! &lt;b&gt;Many thanks&lt;/b&gt;. Please refer to crash &lt;b&gt;%1&lt;/b&gt; in bug reports.</source>
        <translation>Gesendet! &lt;b&gt;Vielen Dank&lt;/b&gt;. Bitte gehen Sie zu Absturz &lt;b&gt;%1&lt;/b&gt; in den Fehlerberichten.</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="294"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.cpp" line="205"/>
        <source>Failed to send crash info.</source>
        <translation>Fehlerberichtsinformationen konnten nicht gesendet werden.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="14"/>
        <source>Create a Partition</source>
        <translation>Partition erstellen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="55"/>
        <source>Partition &amp;Type:</source>
        <translation>Partitions&amp;typ:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="67"/>
        <source>&amp;Primary</source>
        <translation>&amp;Primär</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="77"/>
        <source>E&amp;xtended</source>
        <translation>Er&amp;weitert</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="119"/>
        <source>Fi&amp;le System:</source>
        <translation>Da&amp;teisystem:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="178"/>
        <source>Flags:</source>
        <translation>Markierungen:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="151"/>
        <source>&amp;Mount Point:</source>
        <translation>Ein&amp;hängepunkt:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="38"/>
        <source>Si&amp;ze:</source>
        <translation>Gr&amp;öße:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="48"/>
        <source> MB</source>
        <translation>MB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="65"/>
        <source>En&amp;crypt</source>
        <translation>Vers&amp;chlüsseln</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="161"/>
        <source>Logical</source>
        <translation>Logisch</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="166"/>
        <source>Primary</source>
        <translation>Primär</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="183"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="268"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="48"/>
        <source>Create new %2MB partition on %4 (%3) with file system %1.</source>
        <translation>Neue %2MB Partition auf %4 (%3) mit Dateisystem %1 erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="59"/>
        <source>Create new &lt;strong&gt;%2MB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Neue &lt;strong&gt;%2MB&lt;/strong&gt; Partition auf &lt;strong&gt;%4&lt;/strong&gt; (%3) mit Dateisystem &lt;strong&gt;%1&lt;/strong&gt; erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="71"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>Neue %1 Partition wird auf %2 erstellt.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="83"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>Das Installationsprogramm konnte die Partition auf Datenträger &apos;%1&apos; nicht erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="92"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>Konnte Gerät &apos;%1&apos; nicht öffnen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="102"/>
        <source>Could not open partition table.</source>
        <translation>Konnte Partitionstabelle nicht öffnen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="126"/>
        <source>The installer failed to create file system on partition %1.</source>
        <translation>Das Installationsprogramm konnte das Dateisystem auf Partition %1 nicht erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="134"/>
        <source>The installer failed to update partition table on disk &apos;%1&apos;.</source>
        <translation>Das Installationsprogramm konnte die Partitionstabelle auf Datenträger &apos;%1&apos; nicht aktualisieren.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="20"/>
        <source>Create Partition Table</source>
        <translation>Partitionstabelle erstellen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="39"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>Beim Erstellen einer neuen Partitionstabelle werden alle Daten auf dem Datenträger gelöscht.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="65"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>Welchen Partitionstabellen-Typ möchten Sie erstellen?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="72"/>
        <source>Master Boot Record (MBR)</source>
        <translation>Master Boot Record (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="82"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>GUID Partitions-Tabelle (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="49"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>Neue %1 Partitionstabelle erstellen auf %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="56"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Neue &lt;strong&gt;%1&lt;/strong&gt; Partitionstabelle erstellen auf &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="66"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>Neue %1 Partitionstabelle wird auf %2 erstellt.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="76"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>Das Installationsprogramm konnte die Partitionstabelle auf %1 nicht erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="84"/>
        <source>Could not open device %1.</source>
        <translation>Konnte Gerät %1 nicht öffnen.</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="50"/>
        <source>Create user %1</source>
        <translation>Erstelle Benutzer %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="57"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Benutzer &lt;strong&gt;%1&lt;/strong&gt; erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="64"/>
        <source>Creating user %1.</source>
        <translation>Benutzer %1 wird erstellt.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="80"/>
        <source>Sudoers dir is not writable.</source>
        <translation>Sudoers-Verzeichnis ist nicht beschreibbar.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="84"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation>Kann sudoers-Datei nicht zum Schreiben erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="92"/>
        <source>Cannot chmod sudoers file.</source>
        <translation>Kann chmod nicht auf sudoers-Datei anwenden.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="98"/>
        <source>Cannot open groups file for reading.</source>
        <translation>Kann groups-Datei nicht zum Lesen öffnen.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="160"/>
        <source>Cannot create user %1.</source>
        <translation>Kann Benutzer %1 nicht erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="162"/>
        <source>useradd terminated with error code %1.</source>
        <translation>useradd wurde mit Fehlercode %1 beendet.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="171"/>
        <source>Cannot add user %1 to groups: %2.</source>
        <translation>Kann Benutzer %1 nicht zu Gruppen hinzufügen: %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="174"/>
        <source>usermod terminated with error code %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="184"/>
        <source>Cannot set home directory ownership for user %1.</source>
        <translation>Kann Besitzrechte des Home-Verzeichnisses von Benutzer %1 nicht setzen.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="186"/>
        <source>chown terminated with error code %1.</source>
        <translation>chown wurde mit Fehlercode %1 beendet.</translation>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="42"/>
        <source>Delete partition %1.</source>
        <translation>Partition %1 löschen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="50"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Partition &lt;strong&gt;%1&lt;/strong&gt; löschen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="58"/>
        <source>Deleting partition %1.</source>
        <translation>Partition %1 wird gelöscht.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="67"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>Das Installationsprogramm konnte Partition %1 nicht löschen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="73"/>
        <source>Partition (%1) and device (%2) do not match.</source>
        <translation>Partition (%1) und Gerät (%2) stimmen nicht überein.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="85"/>
        <source>Could not open device %1.</source>
        <translation>Kann Gerät %1 nicht öffnen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="94"/>
        <source>Could not open partition table.</source>
        <translation>Kann Partitionstabelle nicht öffnen.</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="63"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="107"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>Dieses Gerät hat eine &lt;strong&gt;%1&lt;/strong&gt; Partitionstabelle.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="114"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="121"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="131"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="137"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>DeviceModel</name>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="80"/>
        <source>%1 - %2 (%3)</source>
        <translation>%1 - %2 (%3)</translation>
    </message>
</context>
<context>
    <name>EditExistingPartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="20"/>
        <source>Edit Existing Partition</source>
        <translation>Editiere bestehende Partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="50"/>
        <source>Content:</source>
        <translation>Inhalt:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="60"/>
        <source>&amp;Keep</source>
        <translation>&amp;Beibehalten</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="70"/>
        <source>Format</source>
        <translation>Formatieren</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="89"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>Warnung: Beim Formatieren der Partition werden alle Daten gelöscht.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="99"/>
        <source>&amp;Mount Point:</source>
        <translation>Einhängepun&amp;kt:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="119"/>
        <source>Si&amp;ze:</source>
        <translation>Gr&amp;öße:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="132"/>
        <source>Fi&amp;le System:</source>
        <translation>Da&amp;teisystem:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="145"/>
        <source>Flags:</source>
        <translation>Markierungen:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="306"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>EncryptWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="14"/>
        <source>Form</source>
        <translation>Formular</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="32"/>
        <source>En&amp;crypt system</source>
        <translation>System vers&amp;chlüsseln</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="42"/>
        <source>Passphrase</source>
        <translation>Passphrase</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="52"/>
        <source>Confirm passphrase</source>
        <translation>Passphrase bestätigen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="150"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>Bitte geben Sie einen beiden Kästen die gleiche Passphrase ein.</translation>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="123"/>
        <source>Set partition information</source>
        <translation>Setze Partitionsinformationen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="147"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>%1 auf &lt;strong&gt;neuer&lt;/strong&gt; %2 Systempartition installieren.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="152"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;Neue&lt;/strong&gt; %2 Partition mit Einhängepunkt &lt;strong&gt;%1&lt;/strong&gt; einrichten.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="160"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>%2 auf %3 Systempartition &lt;strong&gt;%1&lt;/strong&gt; installieren.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="166"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>%3 Partition &lt;strong&gt;%1&lt;/strong&gt; mit Einhängepunkt &lt;strong&gt;%2&lt;/strong&gt; einrichten.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="178"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Installiere Bootloader auf &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="188"/>
        <source>Setting up mount points.</source>
        <translation>Einhängepunkte werden eingerichtet.</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="14"/>
        <source>Form</source>
        <translation>Formular</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="77"/>
        <source>&amp;Restart now</source>
        <translation>&amp;Neustart</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="50"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;Alles ist fertig.&lt;/h1&gt;&lt;br/&gt;%1 wurde erfolgreich auf deinem Computer installiert.&lt;br/&gt; Du kannst jetzt einfach neu starten oder auch diesen temporären %2  Live Modus weiter verwenden.</translation>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="43"/>
        <source>Finish</source>
        <translation>Fertigstellen</translation>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="49"/>
        <source>Format partition %1 (file system: %2, size: %3 MB) on %4.</source>
        <translation>Partition %1 formatieren (Dateisystem: %2, Größe: %3 MB) auf %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="60"/>
        <source>Format &lt;strong&gt;%3MB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%3MB&lt;/strong&gt; Partition &lt;strong&gt;%1&lt;/strong&gt; mit Dateisystem &lt;strong&gt;%2&lt;/strong&gt; formatieren.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="71"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>Formatiere Partition %1  mit dem Dateisystem %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="83"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>Das Installationsprogramm konnte die Partition %1 auf Datenträger &apos;%2&apos; nicht formatieren.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="91"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>Gerät &apos;%1&apos; konnte nicht geöffnet werden.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="100"/>
        <source>Could not open partition table.</source>
        <translation>Partitionstabelle konnte nicht geöffnet werden. </translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="124"/>
        <source>The installer failed to create file system on partition %1.</source>
        <translation>Das Installationsprogramm konnte das Dateisystem auf Partition %1 nicht erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="133"/>
        <source>The installer failed to update partition table on disk &apos;%1&apos;.</source>
        <translation>Das Installationsprogramm konnte die Partitionstabelle auf Datenträger &apos;%1&apos; nicht aktualisieren.</translation>
    </message>
</context>
<context>
    <name>KeyboardPage</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="193"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation>Setze Tastaturmodell auf %1.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="195"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation>Setze Tastaturbelegung auf %1/%2.</translation>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="50"/>
        <source>Keyboard</source>
        <translation>Tastatur</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="33"/>
        <source>System locale setting</source>
        <translation>System weite Spracheinstellungen</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="40"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Die System weite Spracheinstellung kann sich negativ auf manche Kommandozeilen UI Elemente auswirken..&lt;br/&gt; Die aktuelle Einstellung ist: &lt;b&gt;%1&lt;/b&gt;.</translation>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="14"/>
        <source>Form</source>
        <translation>Formular</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="88"/>
        <source>I accept the terms and conditions above.</source>
        <translation>Ich akzeptiere die obigen Geschäftsbedingungen.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="115"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation>&lt;h1&gt;Lizenzvereinbarung&lt;/h1&gt;Diese Einrichtungsprozedur wird proprietäre Software installieren, die diesen Lizenzbedingungen unterliegt.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="118"/>
        <source>Please review the End User License Agreements (EULAs) above.&lt;br/&gt;If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation>Bitte sehen Sie die obigen Endbenutzer-Lizenzvereinbarungen (EULAs) durch.&lt;br/&gt;Wenn Sie mit den Bedingungen nicht einverstanden sind, kann die Einrichtungsprozedur nicht fortgesetzt werden.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="124"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;In case non-free was selected, this installer will install proprietary packages &lt;br/&gt;that have additional End User License Agreements (EULAs) attached to them.</source>
        <translation>&lt;h1&gt;Lizenzvereinbarung&lt;/h1&gt;Falls nichtfrei gewählt wurde, wird dieses Installationsprogramm proprietäre Pakete &lt;br/&gt;, die zusätzliche Endbenutzer-Lizenzvereinbarungen (EULAs) haben, installieren.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="127"/>
        <source>Please review the End User License Agreements (EULAs) above.&lt;br/&gt;If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation>Bitte sehen Sie die obigen Endbenutzer-Lizenzvereinbarungen (EULAs) durch.&lt;br/&gt;Wenn Sie mit den Bedingungen nicht einverstanden sind, wird keine proprietäre Software installiert und quelloffene Alternativen werden stattdessen verwendet.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="157"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation>&lt;strong&gt;%1 Treiber&lt;/strong&gt;&lt;br/&gt;von %2</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="164"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation>&lt;strong&gt;%1 Grafiktreiber&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;von %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="170"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 Browser-Plugin&lt;/strong&gt;&lt;br/&gt;&lt;von color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="176"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 Codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;von %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="182"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 Paket&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;von %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="188"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;von %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="200"/>
        <source>&lt;a href=&quot;%1&quot;&gt;view license agreement&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;%1&quot;&gt;Lizenzvereinbarung ansehen&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="51"/>
        <source>License</source>
        <translation>Lizenz</translation>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="174"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="237"/>
        <source>The system language will be set to %1.</source>
        <translation>Die Systemsprache wird auf %1 festgelegt.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="206"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="240"/>
        <source>The numbers and dates locale will be set to %1.</source>
        <translation>Die Zahlen- und Datumsumgebung wird auf %1 festgelegt.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="216"/>
        <source>Region:</source>
        <translation>Region:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="217"/>
        <source>Zone:</source>
        <translation>Zeitzone:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="221"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="222"/>
        <source>&amp;Change...</source>
        <translation>&amp;Ändern...</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="390"/>
        <source>Set timezone to %1/%2.&lt;br/&gt;</source>
        <translation>Setze Zeitzone auf %1/%2.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="465"/>
        <source>%1 (%2)</source>
        <extracomment>Language (Country)</extracomment>
        <translation>%1 (%2)</translation>
    </message>
</context>
<context>
    <name>LocaleViewStep</name>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="52"/>
        <source>Loading location data...</source>
        <translation>Lade Standortdaten...</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="160"/>
        <source>Location</source>
        <translation>Standort</translation>
    </message>
</context>
<context>
    <name>MoveFileSystemJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="66"/>
        <source>Move file system of partition %1.</source>
        <translation>Verschiebe Dateisystem von Partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="80"/>
        <source>Could not open file system on partition %1 for moving.</source>
        <translation>Kann Dateisystem auf Partition %1 nicht zum Verschieben öffnen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="86"/>
        <source>Could not create target for moving file system on partition %1.</source>
        <translation>Konnte das Ziel für das Verschieben des Dateisystems auf Partition %1 nicht erstellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="95"/>
        <source>Moving of partition %1 failed, changes have been rolled back.</source>
        <translation>Verschieben der Partition %1 ist fehlgeschlagen, Änderungen wurden zurückgesetzt.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="101"/>
        <source>Moving of partition %1 failed. Roll back of the changes have failed.</source>
        <translation>Verschieben der Partition %1 ist fehlgeschlagen. Zurücksetzen der Änderungen ist fehlgeschlagen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="113"/>
        <source>Updating boot sector after the moving of partition %1 failed.</source>
        <translation>Erneuern des Bootsektors nach dem Verschieben der Partition %1 ist fehlgeschlagen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="127"/>
        <source>The logical sector sizes in the source and target for copying are not the same. This is currently unsupported.</source>
        <translation>Die logischen Sektorgrößen von Quelle und Ziel des Kopiervorgangs sind nicht identisch. Dies wird zur Zeit nicht unterstützt.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="197"/>
        <source>Source and target for copying do not overlap: Rollback is not required.</source>
        <translation>Quelle und Ziel für den Kopiervorgang überlappen nicht: Ein Zurücksetzen ist nicht erforderlich.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="221"/>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="229"/>
        <source>Could not open device %1 to rollback copying.</source>
        <translation>Kann Gerät %1 nicht öffnen, um den Kopiervorgang rückgängig zu machen.</translation>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="14"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="70"/>
        <source>Keyboard Model:</source>
        <translation>Tastaturmodell:</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="131"/>
        <source>Type here to test your keyboard</source>
        <translation>Tippen Sie hier, um die Tastaturbelegung zu testen</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="14"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="36"/>
        <source>What is your name?</source>
        <translation>Wie ist Ihr Vor- und Nachname?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="117"/>
        <source>What name do you want to use to log in?</source>
        <translation>Welchen Namen möchten Sie zum Anmelden benutzen?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="197"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="306"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="437"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="582"/>
        <source>font-weight: normal</source>
        <translation>Schriftstil: normal</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="200"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can set up multiple accounts after installation.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Falls dieser Computer von mehr als einer Person benutzt werden soll, können weitere Benutzerkonten nach der Installation eingerichtet werden.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="335"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Wählen Sie ein Passwort, um Ihr Konto zu sichern.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="440"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Bitte geben Sie Ihr Passwort zweimal ein, um Tippfehler auszuschliessen. Ein gutes Passwort enthält Buchstaben, Zahlen und Sonderzeichen. Ferner sollte es mindestens acht Zeichen umfassen und regelmässig geändert werden.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="226"/>
        <source>What is the name of this computer?</source>
        <translation>Wie ist der Name dieses Computers?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="309"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Dieser Name wird benutzt, wenn Sie den Computer im Netzwerk sichtbar machen.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="450"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>Automatisch anmelden ohne nach dem Passwort zu fragen.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="457"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Das gleiche Passwort für das Administratorkonto verwenden.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="480"/>
        <source>Choose a password for the administrator account.</source>
        <translation>Wählen Sie ein Passwort für das Administratorkonto aus.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="585"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Geben Sie das Passwort zweimal ein, um es auf Tippfehler zu prüfen.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="191"/>
        <source>Root</source>
        <translation>Wurzelverzeichnis</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="194"/>
        <source>Home</source>
        <translation>Heimatverzeichnis</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="196"/>
        <source>Boot</source>
        <translation>Boot</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="199"/>
        <source>EFI system</source>
        <translation>EFI-System</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="201"/>
        <source>Swap</source>
        <translation>Auslagerung</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="203"/>
        <source>New partition for %1</source>
        <translation>Neue Partition für %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="205"/>
        <source>New partition</source>
        <translation>Neue Partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="222"/>
        <source>%1  %2</source>
        <translation>%1  %2</translation>
    </message>
</context>
<context>
    <name>PartitionModel</name>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="137"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="169"/>
        <source>Free Space</source>
        <translation>Freier Platz</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="141"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="173"/>
        <source>New partition</source>
        <translation>Neue Partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="257"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="259"/>
        <source>File System</source>
        <translation>Dateisystem</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="261"/>
        <source>Mount Point</source>
        <translation>Einhängepunkt</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="263"/>
        <source>Size</source>
        <translation>Größe</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="14"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="22"/>
        <source>Storage de&amp;vice:</source>
        <translation>Speicherge&amp;rät:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="51"/>
        <source>&amp;Revert All Changes</source>
        <translation>Alle Änderungen &amp;rückgängig machen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="87"/>
        <source>New Partition &amp;Table</source>
        <translation>Neue Partitions&amp;tabelle</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="107"/>
        <source>&amp;Create</source>
        <translation>&amp;Erstellen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="114"/>
        <source>&amp;Edit</source>
        <translation>Ä&amp;ndern</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="121"/>
        <source>&amp;Delete</source>
        <translation>Lösc&amp;hen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="148"/>
        <source>Install boot &amp;loader on:</source>
        <translation>Bootloader &amp;installieren auf:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="160"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>Sind Sie sicher, dass Sie eine neue Partitionstabelle auf %1 erstellen möchten?</translation>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="70"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="70"/>
        <source>Gathering system information...</source>
        <translation>Systeminformationen werden gesammelt...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="121"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="121"/>
        <source>Partitions</source>
        <translation>Partitionen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="158"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="158"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system.</source>
        <translation>%1 &lt;strong&gt;neben&lt;/strong&gt; einem anderen Betriebssystem installieren.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="163"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="163"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk and install %1.</source>
        <translation>Partition &lt;strong&gt;ersetzen&lt;/strong&gt; mit %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="168"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="168"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition with %1.</source>
        <translation>Eine Partition &lt;strong&gt;ersetzen&lt;/strong&gt; mit %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="173"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="173"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning.</source>
        <translation>&lt;strong&gt;Manuelle&lt;/strong&gt; Partitionierung.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="186"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="186"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system on disk &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>%1 &lt;strong&gt;neben&lt;/strong&gt; einem anderen Betriebssystem auf Festplatte &lt;strong&gt;%2&lt;/strong&gt; installieren (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="193"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="193"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) and install %1.</source>
        <translation>Partition &lt;strong&gt;%2&lt;/strong&gt; (%3) &lt;strong&gt;ersetzen&lt;/strong&gt; mit %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="200"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="200"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition on disk &lt;strong&gt;%2&lt;/strong&gt; (%3) with %1.</source>
        <translation>Eine Partition auf Festplatte &lt;strong&gt;%2&lt;/strong&gt; (%3) &lt;strong&gt;ersetzen&lt;/strong&gt; mit %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="207"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="207"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning on disk &lt;strong&gt;%1&lt;/strong&gt; (%2).</source>
        <translation>&lt;strong&gt;Manuelle&lt;/strong&gt; Partitionierung auf Festplatte &lt;strong&gt;%1&lt;/strong&gt; (%2).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="215"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="215"/>
        <source>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
        <translation>Festplatte &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="243"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="243"/>
        <source>Current:</source>
        <translation>Aktuell:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="261"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="261"/>
        <source>After:</source>
        <translation>Danach:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="409"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="405"/>
        <source>No EFI system partition configured</source>
        <translation>Keine EFI-Systempartition konfiguriert</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="410"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="406"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a FAT32 filesystem with the &lt;strong&gt;esp&lt;/strong&gt; flag enabled and mount point &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="424"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="420"/>
        <source>EFI system partition flag not set</source>
        <translation>EFI-Systempartitionsmarkierung nicht festgelegt</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="425"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="421"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;A partition was configured with mount point &lt;strong&gt;%2&lt;/strong&gt; but its &lt;strong&gt;esp&lt;/strong&gt; flag is not set.&lt;br/&gt;To set the flag, go back and edit the partition.&lt;br/&gt;&lt;br/&gt;You can continue without setting the flag but your system may fail to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="456"/>
        <source>Option to use GPT on BIOS</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="457"/>
        <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, go back and set the partion table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;bios_grub&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="491"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="456"/>
        <source>Boot partition not encrypted</source>
        <translation>Boot-Partition nicht verschlüsselt</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="492"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="457"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="82"/>
        <source>Default Keyboard Model</source>
        <translation>Standard-Tastaturmodell</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="127"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="163"/>
        <source>Default</source>
        <translation>Standard</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="49"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>Unpartitionierter Bereich oder unbekannte Partitionstabelle</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="201"/>
        <source>unknown</source>
        <translation>unbekannt</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="203"/>
        <source>extended</source>
        <translation>erweitert</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="205"/>
        <source>unformatted</source>
        <translation>unformatiert</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="207"/>
        <source>swap</source>
        <translation>Auslagerung</translation>
    </message>
</context>
<context>
    <name>ReplaceWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="14"/>
        <source>Form</source>
        <translation>Formular</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="134"/>
        <source>Select where to install %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
        <translation>Wählen Sie aus, wo %1 installiert werden soll. &lt;br/&gt;&lt;font color=&quot;red&quot;&gt; Warnung: &lt;/font&gt;Dies wird alle Dateien auf der ausgewählten Partition löschen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="161"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>Das ausgewählte Objekt ist offenbar keine funktionierende Partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="169"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1 kann nicht auf einem leeren Speicher installiert werden. Bitte wählen Sie eine vorhandene Partition aus.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="180"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1 kann nicht auf einer erweiterten Partition installiert werden. Bitte wählen Sie eine vorhandene primäre oder logische Partition aus.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="191"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>%1 kann auf dieser Partition nicht installiert werden. </translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="198"/>
        <source>Data partition (%1)</source>
        <translation>Datenpartition (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="215"/>
        <source>Unknown system partition (%1)</source>
        <translation>Unbekannte Systempartition (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="220"/>
        <source>%1 system partition (%2)</source>
        <translation>%1 Systempartition (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="231"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;b&gt;%4&lt;/b&gt;&lt;br/&gt;&lt;br/&gt;Die Partition %1 ist zu klein für %2. Bitte wähle eine Partition mit mindestens %3 GiB aus.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="255"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Auf diesem System kann keine EFI Systempartition gefunden werden. Bitte geh zurück und wähle manuelle Partitionierung, um %1 einzurichten.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="267"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="286"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="311"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;b&gt;%3&lt;/b&gt;&lt;br/&gt;&lt;br/&gt;%1 wird auf %2 installiert werden. &lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warnung: &lt;/font&gt;Alle Daten auf %2 werden gelöscht.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="277"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>Die EFI-Partition auf %1 wird verwendet, um %2 zu starten.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="295"/>
        <source>EFI system partition:</source>
        <translation>EFI-Systempartition:</translation>
    </message>
</context>
<context>
    <name>RequirementsChecker</name>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="61"/>
        <source>Gathering system information...</source>
        <translation>Systeminformationen werden gesammelt...</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="102"/>
        <source>has at least %1 GB available drive space</source>
        <translation>hat mindestens %1 GB freien Festplattenplatz</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="104"/>
        <source>There is not enough drive space. At least %1 GB is required.</source>
        <translation>Es ist nicht genügend Speicherplatz vorhanden, bitte zumindest %1 GB freimachen.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="112"/>
        <source>has at least %1 GB working memory</source>
        <translation>hat mindestens %1 GB Arbeitsspeicher</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="114"/>
        <source>The system does not have enough working memory. At least %1 GB is required.</source>
        <translation>Dieser Computer hat nicht genügend Arbeitsspeicher verfügbar: Zumindest %1 GB sind sinnvoll.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="122"/>
        <source>is plugged in to a power source</source>
        <translation>ist an eine Stromquelle angeschlossen</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="123"/>
        <source>The system is not plugged in to a power source.</source>
        <translation>Das System ist noch nicht an eine Stromquelle angeschlossen.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="130"/>
        <source>is connected to the Internet</source>
        <translation>ist mit dem Internet verbunden</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="131"/>
        <source>The system is not connected to the Internet.</source>
        <translation>Das System ist nicht mit dem Internet verbunden.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="139"/>
        <source>The installer is not running with administrator rights.</source>
        <translation>Das Installationsprogramm läuft nicht mit administrativen Rechten.</translation>
    </message>
</context>
<context>
    <name>ResizeFileSystemJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="76"/>
        <source>Resize file system on partition %1.</source>
        <translation>Dateisystemgröße auf Partition %1 ändern.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="91"/>
        <source>Parted failed to resize filesystem.</source>
        <translation>Parted konnte die Dateisystemgröße nicht ändern.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="101"/>
        <source>Failed to resize filesystem.</source>
        <translation>Ändern der Dateisystemgröße fehlgeschlagen.</translation>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="187"/>
        <source>Resize partition %1.</source>
        <translation>Größe von Partition %1 ändern.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="194"/>
        <source>Resize &lt;strong&gt;%2MB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MB&lt;/strong&gt;.</source>
        <translation>Größe der &lt;strong&gt;%2MB&lt;/strong&gt; Partition &lt;strong&gt;%1&lt;/strong&gt; auf &lt;strong&gt;%3MB&lt;/strong&gt; ändern.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="205"/>
        <source>Resizing %2MB partition %1 to %3MB.</source>
        <translation>Größe von %2MB Partition %1 auf %3MB ändern.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="232"/>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="298"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>Das Installationsprogramm konnte die Größe von Partition %1 auf Datenträger &apos;%2&apos; nicht ändern.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="237"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>Konnte &apos;%1&apos; nicht öffnen.</translation>
    </message>
</context>
<context>
    <name>ScanningDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="83"/>
        <source>Scanning storage devices...</source>
        <translation>Speicherge&amp;rät werden durchsucht...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="84"/>
        <source>Partitioning</source>
        <translation>Partitionierung</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="37"/>
        <source>Set hostname %1</source>
        <translation>Setze Computername auf %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="44"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Computername &lt;strong&gt;%1&lt;/strong&gt; festlegen.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="51"/>
        <source>Setting hostname %1.</source>
        <translation>Computername %1 wird festgelegt.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="61"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="68"/>
        <source>Internal Error</source>
        <translation>Interner Fehler</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="75"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="86"/>
        <source>Cannot write hostname to target system</source>
        <translation>Kann den Computernamen nicht auf das Zielsystem schreiben</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="59"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>Setze Tastaturmodell auf %1 und die Belegung auf %2-%3</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="320"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>Konnte die Tastaturbelegung für die virtuelle Konsole nicht schreiben.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="321"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="325"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="331"/>
        <source>Failed to write to %1</source>
        <translation>Schreiben auf %1 ist gescheitert !</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="324"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>Konnte die Tastaturbelegung für X11 nicht schreiben.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="330"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="48"/>
        <source>Set flags on partition %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="51"/>
        <source>Set flags on %1MB %2 partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="55"/>
        <source>Set flags on new partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="66"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="70"/>
        <source>Clear flags on %1MB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="74"/>
        <source>Clear flags on new partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="78"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="84"/>
        <source>Flag %1MB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="90"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="102"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="106"/>
        <source>Clearing flags on %1MB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="110"/>
        <source>Clearing flags on new partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="114"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="120"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="126"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="140"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="148"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>Gerät &apos;%1&apos; konnte nicht geöffnet werden.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="157"/>
        <source>Could not open partition table on device &apos;%1&apos;.</source>
        <translation>Partitionstabelle auf Gerät &apos;%1&apos; konnte nicht geöffnet werden.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="169"/>
        <source>Could not find partition &apos;%1&apos;.</source>
        <translation>Partition &apos;%1&apos; konnte nicht gefunden werden.</translation>
    </message>
</context>
<context>
    <name>SetPartGeometryJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="144"/>
        <source>Update geometry of partition %1.</source>
        <translation>Aktualisiere Struktur von Partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="156"/>
        <source>Failed to change the geometry of the partition.</source>
        <translation>Kann Struktur der Partition nicht ändern.</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="42"/>
        <source>Set password for user %1</source>
        <translation>Setze Passwort für Benutzer %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="49"/>
        <source>Setting password for user %1.</source>
        <translation>Passwort für Benutzer %1 wird festgelegt.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="59"/>
        <source>Bad destination system path.</source>
        <translation>Ungültiger System-Zielpfad.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="60"/>
        <source>rootMountPoint is %1</source>
        <translation>root-Einhängepunkt ist %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="70"/>
        <source>Cannot disable root account.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="71"/>
        <source>passwd terminated with error code %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="87"/>
        <source>Cannot set password for user %1.</source>
        <translation>Passwort für Benutzer %1 kann nicht gesetzt werden.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="89"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod wurde mit Fehlercode %1 beendet.</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="43"/>
        <source>Set timezone to %1/%2</source>
        <translation>Setze Zeitzone auf %1/%2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot access selected timezone path.</source>
        <translation>Zugriff auf den Pfad der gewählten Zeitzone fehlgeschlagen.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Bad path: %1</source>
        <translation>Ungültiger Pfad: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="86"/>
        <source>Cannot set timezone.</source>
        <translation>Kann Zeitzone nicht festlegen.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="87"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>Erstellen der Verknüpfung fehlgeschlagen, Ziel: %1; Verknüpfung: %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="96"/>
        <source>Cannot set timezone,</source>
        <translation>Kann Zeitzone nicht festlegen,</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="97"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>Kann /etc/timezone nicht zum Schreiben öffnen</translation>
    </message>
</context>
<context>
    <name>SummaryPage</name>
    <message>
        <location filename="../src/modules/summary/SummaryPage.cpp" line="46"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation>Dies hier ist eine Übersicht der Aktionen, welche durchgeführt werden, sobald du den Installationsprozess einleitest.</translation>
    </message>
</context>
<context>
    <name>SummaryViewStep</name>
    <message>
        <location filename="../src/modules/summary/SummaryViewStep.cpp" line="43"/>
        <source>Summary</source>
        <translation>Zusammenfassung</translation>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="275"/>
        <source>Your username is too long.</source>
        <translation>Ihr Benutzername ist zu lang.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="285"/>
        <source>Your username contains invalid characters. Only lowercase letters and numbers are allowed.</source>
        <translation>Ihr Benutzername enthält ungültige Zeichen!</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="329"/>
        <source>Your hostname is too short.</source>
        <translation>Ihr Hostname ist zu kurz.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="340"/>
        <source>Your hostname is too long.</source>
        <translation>Ihr Hostname ist zu lang.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="351"/>
        <source>Your hostname contains invalid characters. Only letters, numbers and dashes are allowed.</source>
        <translation>Ihr Benutzername enthält ungültige Zeichen. Nur Buchstaben, Zahlen und Bindestriche sind erlaubt.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="382"/>
        <location filename="../src/modules/users/UsersPage.cpp" line="415"/>
        <source>Your passwords do not match!</source>
        <translation>Ihre Passwörter stimmen nicht überein!</translation>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
        <source>Users</source>
        <translation>Benutzer</translation>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="14"/>
        <source>Form</source>
        <translation>Formular</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="75"/>
        <source>&amp;Language:</source>
        <translation>&amp;Sprache:</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="250"/>
        <source>&amp;Release notes</source>
        <translation>Ve&amp;rsionshinweise</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="240"/>
        <source>&amp;Known issues</source>
        <translation>Be&amp;kannte Schwierigkeiten:</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="193"/>
        <source>&amp;Support</source>
        <translation>Unter&amp;stützung</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="183"/>
        <source>&amp;About</source>
        <translation>&amp;Über</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="56"/>
        <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
        <translation>Willkommen im %1 Installationsprogramm.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="70"/>
        <source>About %1 installer</source>
        <translation>Über das %1 Installationsprogramm</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="72"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Thanks to: Anke Boersma, Aurélien Gâteau, Kevin Kofler, Lisa Vitolo, Philip Müller, Pier Luigi Fiorini, Rohan Garg and the &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;http://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="196"/>
        <source>%1 support</source>
        <translation>%1 Unterstützung</translation>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="51"/>
        <source>Welcome</source>
        <translation>Willkommen</translation>
    </message>
</context>
<context>
    <name>show</name>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="47"/>
        <source>Here the actual install of KaOS will start.&lt;br/&gt;Use the left &lt;b&gt;mouse button&lt;/b&gt; to go to the next slide, right for previous.&lt;br/&gt;After creating your chosen disk setup in the first 10 % &lt;br/&gt;the full copying of the ISO will take the longest of this install phase &lt;br/&gt;and will run until approximately 30%.&lt;br/&gt;</source>
        <translation>Die Installation von KaOS beginnt nun. &lt;br/&gt;Verwende die linke &lt;b&gt; Maustaste, um auf die nächste Seite dieser Vorführung zu gelangen, sowie die rechte, um einen Schritt zurückzugeblättern. &lt;br/&gt; Nachdem die Partitionierung bei 10 % eingerichtet ist, &lt;br/&gt;wird der Kopiervorgang dieser ISO die längste Phase der Installation einnehmen  und ist bei rund 30% des Gesamtfortschritts fertig gestellt.</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="73"/>
        <source>After the ISO is copied some 25 post-install modules will run.&lt;br/&gt;This includes setting user specific options, &lt;br/&gt;removing Live Session only packages&lt;br/&gt;and adjusting hardware setup.&lt;br/&gt;</source>
        <translation>Nachdem die ISO erfolgreich kopiert ist, werden rund 25 Module ausgeführt.&lt;br/&gt; Diese inkludieren, das setzen spezifischer Anwender Optionen, &lt;br/&gt; das entfernen der speziellen Live Programme und die Einrichtung deiner Hardware.</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="98"/>
        <source>The default Office Suite is Calligra.&lt;br/&gt;LibreOffice is available in the repositories. &lt;br/&gt;</source>
        <translation>Das Standard-Office-Paket ist Calligra.&lt;br/&gt;LibreOffice ist in den Repositorien verfügbar. &lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="121"/>
        <source>Qt/KDE specific internet applications include the &lt;br/&gt;Qupzilla web-browser and kde-telepathy for &lt;br/&gt;chat and Instant Messaging. &lt;br/&gt;</source>
        <translation>Qt/KDE spezifische Anwendungen umfassen den Qupzilla Webbrowser &lt;br/&gt; sowie KDE Telepathy für Chat und Kurznachrichten.</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="145"/>
        <source>For package management Octopi is the GUI application.&lt;br/&gt;</source>
        <translation>For package management Octopi is the GUI application.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="167"/>
        <source>May using KaOS be a pleasant experience for you.</source>
        <translation>Möge KaOS eine angenehme Erfahrung für dich sein.</translation>
    </message>
</context>
</TS>