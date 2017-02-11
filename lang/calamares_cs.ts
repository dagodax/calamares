<?xml version="1.0" ?><!DOCTYPE TS><TS language="cs" version="2.1">
<context>
    <name>AlongsidePage</name>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="77"/>
        <source>Choose partition to shrink:</source>
        <translation>Vyberte oddíl, který si přejete zmenšit.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="78"/>
        <source>Allocate drive space by dragging the divider below:</source>
        <translation>Přidělte místo na disku pomocí rozdělovače níže:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="121"/>
        <source>With this operation, the partition &lt;strong&gt;%1&lt;/strong&gt; which contains %4 will be shrunk to %2MB and a new %3MB partition will be created for %5.</source>
        <translation>Touto operací bude oddíl &lt;strong&gt;%1&lt;/strong&gt;, který obsahuje %4, zmenšen na %2 MB a pro %5 bude vytvořen nový oddíl o velikosti %3 MB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="198"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>Nikde na tomto systému nelze najít systémový oddíl EFI. Jděte, prosím, zpět a použijte k nastavení %1 ruční vytváření oddílů.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="208"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>Systémový oddíl EFI na %1 se bude používat ke spouštění %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="218"/>
        <source>EFI system partition:</source>
        <translation>Systémový oddíl EFI:</translation>
    </message>
</context>
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="61"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>&lt;strong&gt;Prostředí spuštění&lt;/strong&gt; tohoto systému.&lt;br&gt;&lt;br&gt;Starší systémy x86 podporují jen &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Moderní systémy obvykle používají &lt;strong&gt;EFI&lt;/strong&gt;, ale mohou se představit i jako BIOS, pokud prostředí spuštění pracuje v režimu slučitelnosti.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="75"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>Tento systém byl spuštěn v režimu &lt;strong&gt;EFI&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Aby bylo možné zajistit spuštění systému v režimu EFI, musí tento instalátor uložit spouštěcí aplikaci jako je například &lt;strong&gt;GRUB&lt;/strong&gt; nebo &lt;strong&gt;systemd-boot&lt;/strong&gt; na &lt;strong&gt;systémový oddíl EFI&lt;/strong&gt;. Toto se provede automaticky, pokud nebylo vybráno ruční rozdělní oddílů - v tomto případě je potřeba systémový oddíl EFI vytvořit nebo zvolit.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="87"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>Tento systém byl spuštěn v režimu &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Aby bylo možné zajistit spuštění v režimu BIOS, musí tento instalátor uložit spouštěč &lt;strong&gt;GRUB&lt;/strong&gt; buď na začátek oddílu nebo na &lt;strong&gt;Master Boot Record&lt;/strong&gt; blízko začítku tabulky oddílů (preferovaná varianta). Toto se provede automaticky pokud nebylo vybráno ruční rozdělení disku - v tomto případě se musí spouštěč donastavit ručně. </translation>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="59"/>
        <source>Master Boot Record of %1</source>
        <translation>Master Boot Record %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="76"/>
        <source>Boot Partition</source>
        <translation>Zaváděcí oddíl</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="81"/>
        <source>System Partition</source>
        <translation>Systémový oddíl</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="111"/>
        <source>Do not install a boot loader</source>
        <translation>Neinstalovat samozaváděcí program</translation>
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
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="24"/>
        <source>GlobalStorage</source>
        <translation>Úložiště</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="34"/>
        <source>JobQueue</source>
        <translation>Řada úloh</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="44"/>
        <source>Modules</source>
        <translation>Moduly</translation>
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
        <translation>žádný</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="71"/>
        <source>Interface:</source>
        <translation>Rozhraní:</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="93"/>
        <source>Tools</source>
        <translation>Nástroje</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.cpp" line="182"/>
        <source>Debug information</source>
        <translation>Informace o ladění</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/ExecutionViewStep.cpp" line="77"/>
        <source>Install</source>
        <translation>Instalovat</translation>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="89"/>
        <source>Done</source>
        <translation>Hotovo</translation>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="51"/>
        <source>Run command %1 %2</source>
        <translation>Spustit příkaz %1 %2</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="60"/>
        <source>Running command %1 %2</source>
        <translation>Spouští se příkaz %1 %2</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="89"/>
        <source>External command crashed</source>
        <translation>Vnější příkaz spadl</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="90"/>
        <source>Command %1 crashed.
Output:
%2</source>
        <translation>Příkaz %1 spadl
Výstup:
%2</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="95"/>
        <source>External command failed to start</source>
        <translation>Vnější příkaz se nepodařilo spustit</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="96"/>
        <source>Command %1 failed to start.</source>
        <translation>Příkaz %1 se nepodařilo spustit.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="100"/>
        <source>Internal error when starting command</source>
        <translation>Vnitřní chyba při spouštění příkazu</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="101"/>
        <source>Bad parameters for process job call.</source>
        <translation>Špatné parametry pro volání úlohy procesu.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="104"/>
        <source>External command failed to finish</source>
        <translation>Vnější příkaz se nepodařilo dokončit</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="105"/>
        <source>Command %1 failed to finish in %2s.
Output:
%3</source>
        <translation>Příkaz %1 se nepodařilo dokončit za %2s.
Výstup:
%3</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="111"/>
        <source>External command finished with errors</source>
        <translation>Vnější příkaz skončil s chybami</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="112"/>
        <source>Command %1 finished with exit code %2.
Output:
%3</source>
        <translation>Příkaz %1 sskončil s hodnotou %2.
Výstup:
%3</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="250"/>
        <source>Running %1 operation.</source>
        <translation>Spouští se %1 operace.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="263"/>
        <source>Bad working directory path</source>
        <translation>Neplatná cesta k pracovnímu adresáři</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="264"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>Pracovní adresář %1 pro pythonovskou úlohu %2 není čitelný.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="274"/>
        <source>Bad main script file</source>
        <translation>Špatný soubor s hlavním skriptem</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="275"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>Soubor s hlavním skriptem %1 pro pythonovskou úlohu %2 není čitelný.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="320"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>Chyba Boost.Python v úloze &quot;%1&quot;.</translation>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="65"/>
        <source>&amp;Back</source>
        <translation>&amp;Zpět</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="66"/>
        <source>&amp;Next</source>
        <translation>&amp;Další</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="67"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="295"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Zrušit</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="90"/>
        <source>Cancel installation?</source>
        <translation>Zrušit instalaci?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="91"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>Opravdu chcete ukončit nynější instalační proces?
Instalátor bude ukončen a všechny změny budou ztraceny.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="224"/>
        <source>Continue with setup?</source>
        <translation>Pokračovat v nastavování?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="225"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>Instalátor %1 se chystá k provedení změn na vašem disku, aby nainstaloval %2.&lt;br/&gt;&lt;strong&gt;Tyto změny nebudete po jejich provedení moci vrátit zpět.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="232"/>
        <source>&amp;Install now</source>
        <translation>&amp;Instalovat nyní</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="233"/>
        <source>Go &amp;back</source>
        <translation>Jít &amp;zpět</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="264"/>
        <source>&amp;Quit</source>
        <translation>&amp;Ukončit</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="170"/>
        <source>Error</source>
        <translation>Chyba</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="171"/>
        <source>Installation Failed</source>
        <translation>Instalace se nezdařila</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="263"/>
        <source>Unknown exception type</source>
        <translation>Neznámý typ výjimky</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="276"/>
        <source>unparseable Python error</source>
        <translation>Nezpracovatelná chyba Pythonu</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="292"/>
        <source>unparseable Python traceback</source>
        <translation>Nezpracovatelné vyznačení Pythonu</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="296"/>
        <source>Unfetchable Python error.</source>
        <translation>Nezapočitatelná chaby Pythonu.</translation>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="44"/>
        <source>%1 Installer</source>
        <translation>Instalátor %1</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="98"/>
        <source>Show debug information</source>
        <translation>Ukázat informace o ladění</translation>
    </message>
</context>
<context>
    <name>CheckFileSystemJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CheckFileSystemJob.cpp" line="39"/>
        <source>Checking file system on partition %1.</source>
        <translation>Ověřování souborového systému na diskovém oddílu %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CheckFileSystemJob.cpp" line="77"/>
        <source>The file system check on partition %1 failed.</source>
        <translation>Ověření souborového systému na diskovém oddílu %1 se nezdařilo.</translation>
    </message>
</context>
<context>
    <name>CheckerWidget</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="95"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>Tento počítač nesplňuje ty nejmenší požadavky na instalaci %1.&lt;br/&gt;Instalace nemůže pokračovat. &lt;a href=&quot;#details&quot;&gt;Podrobnosti...&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="113"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation>Tento počítač nesplňuje některé z doporučených požadavků na instalaci %1.&lt;br/&gt;Instalace může pokračovat. některé funkce však mohou být zakázány.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="142"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation>Tento program vám položí několik otázek a nastaví %2 na váš počítač.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="166"/>
        <source>For best results, please ensure that this computer:</source>
        <translation>Pro nejlepší výsledky zajistěte, aby měl tento počítač:</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="194"/>
        <source>System requirements</source>
        <translation>Systémové požadavky</translation>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="127"/>
        <source>After:</source>
        <translation>Po:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1178"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1218"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1242"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1280"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;Vymazat disk&lt;/strong&gt;&lt;br/&gt;Toto &lt;font color=&quot;red&quot;&gt;smaže&lt;/font&gt; všechna data nyní přítomná na vybraném ukládacím zařízení.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1182"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1213"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1237"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1275"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;Nainstalovat vedle&lt;/strong&gt;&lt;br/&gt;Instalátor zmenší diskový oddíl, aby udělal místo pro %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1187"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1223"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1246"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1284"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;Nahradit oddíl&lt;/strong&gt;&lt;br/&gt;Nahradí diskový oddíl %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="971"/>
        <source>Boot loader location:</source>
        <translation>Umístění samozaváděcího programu:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="125"/>
        <source>Select storage de&amp;vice:</source>
        <translation>Vybrat ukládací &amp;zařízení:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="126"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="895"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="942"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1022"/>
        <source>Current:</source>
        <translation>Nynější:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="240"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself. Having a GPT partition table and &lt;strong&gt;fat32 512Mb /boot partition is a must for UEFI installs&lt;/strong&gt;, either use an existing without formatting or create one.</source>
        <translation>&lt;strong&gt;Ruční rozdělení&lt;/strong&gt;&lt;br/&gt;Můžete vytvořit nebo změnit velikost oddílů ručně. Pro UEFI instalaci je nezbytné mít GPT tabulku oddílů a &lt;strong&gt;fat32 512Mb /boot oddíl&lt;/strong&gt;. Můžete použít existující bez formátování nebo vytvořit nový.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="772"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>Znovu použít %1 jako domovský oddíl pro %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="896"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Vyberte oddíl pro zmenšení, a potom posuňte spodní úchyt pro změnu velikosti&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="913"/>
        <source>%1 will be shrunk to %2MB and a new %3MB partition will be created for %4.</source>
        <translation>%1 bude zmenšen na %2MB a nový %3MB oddíl bude vytvořen pro %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1013"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Vyberte oddíl, na který se má instalovat&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1069"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>Nikde na tomto systému nelze najít systémový oddíl EFI. Jděte, prosím, zpět a použijte ruční rozdělení k nastavení %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1079"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>Systémový oddíl EFI na %1 se bude používat ke spouštění %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1088"/>
        <source>EFI system partition:</source>
        <translation>Systémový oddíl EFI:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1173"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Zdá se, že na tomto ukládacím zařízení není operační systém. Co chcete dělat?&lt;br/&gt;Budete moci přezkoumat a potvrdit svoje volby, předtím než bude na ukládacím zařízení provedena jakákoli změna.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1207"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Na tomto ukládacím zařízení je %1. Co chcete dělat?&lt;br/&gt;Budete moci přezkoumat a potvrdit svoje volby, předtím než bude na ukládacím zařízení provedena jakákoli změna.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1232"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Na tomto ukládacím zařízení již je operační systém. Co chcete dělat?&lt;br/&gt;Budete moci přezkoumat a potvrdit svoje volby, předtím než bude na ukládacím zařízení provedena jakákoli změna.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1270"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Na tomto ukládacím zařízení je více operačních systémů. Co chcete dělat?&lt;br/&gt;Budete moci přezkoumat a potvrdit svoje volby, předtím než bude na ukládacím zařízení provedena jakákoli změna.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
</context>
<context>
    <name>ClearMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="45"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>Uklidit připojení pro operace rozdělení disku na %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="53"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>Uklízí se připojení pro operace rozdělení disku na %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="190"/>
        <source>Cleared all mounts for %1</source>
        <translation>Uklizena všechna připojení pro %1</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="40"/>
        <source>Clear all temporary mounts.</source>
        <translation>Uklidit všechna dočasná připojení.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="47"/>
        <source>Clearing all temporary mounts.</source>
        <translation>Uklízí se všechna dočasná připojení.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="58"/>
        <source>Cannot get list of temporary mounts.</source>
        <translation>Nelze získat seznam dočasných připojení.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="97"/>
        <source>Cleared all temporary mounts.</source>
        <translation>Uklizena všechna dočasná připojení.</translation>
    </message>
</context>
<context>
    <name>CrashReporter</name>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.ui" line="29"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.ui" line="29"/>
        <source>Tomahawk Crash Reporter</source>
        <translation>Hlášení pádů Tomahawk</translation>
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
        <translation>Zrušit</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.ui" line="257"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.ui" line="156"/>
        <source>Send this report</source>
        <translation>Poslat toto hlášení</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.ui" line="264"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.ui" line="163"/>
        <source>Don&apos;t send</source>
        <translation>Neposílat</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.ui" line="284"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.ui" line="258"/>
        <source>You can disable sending crash reports in the configuration dialog.</source>
        <translation>Můžete vypnout zasílání hlášení o pádech v nastavovacím dialogu.</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="107"/>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="114"/>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="150"/>
        <source>We cannot gather useful debug information on your system.</source>
        <translation>Nebylo možné posbírat užitečné informace o ladění z vašeho systému.</translation>
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
        <translation>Zavřít</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="143"/>
        <source>Ready to send debug information (&lt;a href=&quot;%1&quot;&gt;view backtrace&lt;/a&gt;).</source>
        <translation>Připraveno k zaslání ladících informací (&lt;a href=&quot;%1&quot;&gt;prohlídnout si backtrace&lt;/a&gt;).</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="159"/>
        <source>Gathering debug information...</source>
        <translation>Získávání ladících informací...</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="258"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.cpp" line="170"/>
        <source>Uploaded %L1 of %L2 KB.</source>
        <translation>Nahráno %L1 z %L2 KB.</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="285"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.cpp" line="196"/>
        <source>Sent! &lt;b&gt;Many thanks&lt;/b&gt;. Please refer to crash &lt;b&gt;%1&lt;/b&gt; in bug reports.</source>
        <translation>Odesláno! &lt;b&gt;Velké díky&lt;/b&gt;. Prosím, odkažte se na &lt;b&gt;%1&lt;/b&gt; v chybovém hlášení.</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="294"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.cpp" line="205"/>
        <source>Failed to send crash info.</source>
        <translation>Odeslání informací o pádu selhalo.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="14"/>
        <source>Create a Partition</source>
        <translation>Vytvořit oddíl</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="55"/>
        <source>Partition &amp;Type:</source>
        <translation>Typ &amp;oddílu:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="67"/>
        <source>&amp;Primary</source>
        <translation>&amp;Hlavní</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="77"/>
        <source>E&amp;xtended</source>
        <translation>&amp;Rozšířený</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="119"/>
        <source>Fi&amp;le System:</source>
        <translation>&amp;Souborový systém:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="168"/>
        <source>Flags:</source>
        <translation>Příznaky:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="148"/>
        <source>&amp;Mount Point:</source>
        <translation>&amp;Přípojný bod:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="38"/>
        <source>Si&amp;ze:</source>
        <translation>V&amp;elikost:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="48"/>
        <source> MB</source>
        <translation> MB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="63"/>
        <source>En&amp;crypt</source>
        <translation>&amp;Zašifrovat</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="155"/>
        <source>Logical</source>
        <translation>Logický</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="160"/>
        <source>Primary</source>
        <translation>Hlavní</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="177"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="48"/>
        <source>Create new %2MB partition on %4 (%3) with file system %1.</source>
        <translation>Vytvořit nový %2MB diskový oddíl na &gt;%4 (%3) se souborovým systémem %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="59"/>
        <source>Create new &lt;strong&gt;%2MB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Vytvořit nový &lt;strong&gt;%2MB&lt;/strong&gt; diskový oddíl na &lt;strong&gt;%4&lt;/strong&gt; (%3) se souborovým systémem &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="71"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>Vytváří se nový diskový oddíl %1 na %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="83"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>Instalátoru se nepodařilo vytvořit oddíl na disku &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="92"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>Nepodařilo se otevřít zařízení &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="102"/>
        <source>Could not open partition table.</source>
        <translation>Nepodařilo se otevřít tabulku oddílů.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="126"/>
        <source>The installer failed to create file system on partition %1.</source>
        <translation>Instalátoru se nepodařilo vytvořit souborový systém na disku &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="134"/>
        <source>The installer failed to update partition table on disk &apos;%1&apos;.</source>
        <translation>Instalátoru se nepodařilo aktualizovat oddíl na disku &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="20"/>
        <source>Create Partition Table</source>
        <translation>Vytvořit tabulku oddílů</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="39"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>Vytvoření nové tabulky oddílů smaže všechna stávající data na disku.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="65"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>Jaký druh tabulky oddílů chcete vytvořit?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="72"/>
        <source>Master Boot Record (MBR)</source>
        <translation>Master Boot Record (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="82"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>Tabulku oddílů GUID (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="49"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>Vytvořit nový diskový oddíl %1 na %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="56"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Vytvořit novou &lt;strong&gt;%1&lt;/strong&gt; tabulku oddílů na &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="66"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>Vytváří se nová tabulka oddílů %1 na %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="76"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>Instalátoru se nepodařilo vytvořit tabulku oddílů na disku &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="84"/>
        <source>Could not open device %1.</source>
        <translation>Nepodařilo se otevřít zařízení %1.</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="50"/>
        <source>Create user %1</source>
        <translation>Vytvořit uživatele %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="57"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Vytvořit uživatele &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="64"/>
        <source>Creating user %1.</source>
        <translation>Vytváří se uživatel %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="80"/>
        <source>Sudoers dir is not writable.</source>
        <translation>Adresář správce (oprávnění root - su) není zapisovatelný.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="84"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation>Nelze vytvořit soubor správce (su) pro zápis.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="92"/>
        <source>Cannot chmod sudoers file.</source>
        <translation>Nelze spustit chmod na souboru správce (su).</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="98"/>
        <source>Cannot open groups file for reading.</source>
        <translation>Nelze otevřít soubor se skupinami pro čtení.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="160"/>
        <source>Cannot create user %1.</source>
        <translation>Nelze vytvořit uživatele %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="162"/>
        <source>useradd terminated with error code %1.</source>
        <translation>useradd je ukončen s kódem chyby %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="171"/>
        <source>Cannot add user %1 to groups: %2.</source>
        <translation>Nelze přidat uživatele %1 do skupin: %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="174"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod je ukončen s kódem chyby %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="184"/>
        <source>Cannot set home directory ownership for user %1.</source>
        <translation>Nelze nastavit vlastnictví domovského adresáře pro uživatele %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="186"/>
        <source>chown terminated with error code %1.</source>
        <translation>chown je ukončen s kódem chyby %1.</translation>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="42"/>
        <source>Delete partition %1.</source>
        <translation>Smazat diskový oddíl %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="50"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Smazat diskový oddíl &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="58"/>
        <source>Deleting partition %1.</source>
        <translation>Maže se diskový oddíl %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="67"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>Instalátoru se nepodařilo smazat oddíl %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="73"/>
        <source>Partition (%1) and device (%2) do not match.</source>
        <translation>Oddíl (%1) a zařízení (%2) se neshodují.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="85"/>
        <source>Could not open device %1.</source>
        <translation>Nepodařilo se otevřít zařízení %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="94"/>
        <source>Could not open partition table.</source>
        <translation>Nepodařilo se otevřít tabulku oddílů.</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="63"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>Typ &lt;strong&gt;tabulky rozdělení&lt;/strong&gt; na vybraném ukládacím zařízení.&lt;br&gt;&lt;br&gt;Jediný způsob, jak změnit typ tabulky rozdělení, je vymazat ji a znovuvytvořit, což smaže všechna data na ukládacím zařízení.&lt;br&gt;Tento instalátor zachová současnou tabulku, pokud nevyberete jinou možnost.&lt;br&gt;Pokud si nejste jistý, tak na moderních systémech je upřednostňována varianta s GPT.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="107"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>Toto zařízení má &lt;strong&gt;%1&lt;/strong&gt; tabulku rozdělení.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="114"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>Toto je &lt;strong&gt;loop&lt;/strong&gt; zařízení.&lt;br&gt;&lt;br&gt;Jde o pseudozařízení, které nemá žádnou tabulku rozdělení pro zpřístupnění souborů, jako je tomu na blokovém zařízení. V tomto druhu nastavení se obvykle používá jeden typ souborového systému.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="121"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>Tento instalátor &lt;strong&gt;nemůže zjistit tabulku rozdělení&lt;/strong&gt; na vybraném úložném zařízení.&lt;br&gt;&lt;br&gt;Zařízení buď neobsahuje tabulku rozdělení do oddílů nebo je tabulka poškozená a nebo jde o neznámý typ.&lt;br&gt;Tento instalátor může vytvořit novou tabulku rozdělení a to buď automaticky, nebo skrze volbu manuálního rozdělení.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="131"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;Toto je doporučený typ tabulky oddílů pro moderní systémy, které se spouští ze spouštěcího prostředí &lt;strong&gt;EFI&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="137"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;Tento typ rozdělení je doporučený pouze pro starší systémy, které startují v režimu BIOS. GPT je vhodnější volba ve většině případů.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Varování:&lt;/strong&gt; zastaralá tabulka rozdělení MBR z éry MS-DOS.&lt;br&gt;Pouze 4 &lt;em&gt;primární&lt;/em&gt; oddíly mohou být vytvořeny a z nich pouze jeden může být &lt;em&gt;rozšířený&lt;/em&gt; oddíl, který může obsahovat mnoho &lt;em&gt;logických&lt;/em&gt; oddílů.</translation>
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
        <translation>Upravit stávající oddíl</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="50"/>
        <source>Content:</source>
        <translation>Obsah:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="60"/>
        <source>&amp;Keep</source>
        <translation>&amp;Zachovat</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="70"/>
        <source>Format</source>
        <translation>Formátovat</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="89"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>Varování: Formátování oddílu smaže všechna stávající data na disku.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="99"/>
        <source>&amp;Mount Point:</source>
        <translation>&amp;Přípojný bod:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="119"/>
        <source>Si&amp;ze:</source>
        <translation>Ve&amp;likost:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="132"/>
        <source>Fi&amp;le System:</source>
        <translation>&amp;Souborový systém:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="145"/>
        <source>Flags:</source>
        <translation>Příznaky:</translation>
    </message>
</context>
<context>
    <name>EncryptWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="14"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="32"/>
        <source>En&amp;crypt system</source>
        <translation>&amp;Zašifrovat systém</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="42"/>
        <source>Passphrase</source>
        <translation>Heslo</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="52"/>
        <source>Confirm passphrase</source>
        <translation>Potvrdit heslo</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="150"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>Vložte, prosím, stejné přístupové údaje do obou polí. </translation>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="123"/>
        <source>Set partition information</source>
        <translation>Nastavit informace o oddílu</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="147"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>Instalovat %1 na &lt;strong&gt;novém&lt;/strong&gt; %2 systémový diskový oddílu.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="152"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Zřídit &lt;strong&gt;nový&lt;/strong&gt; %2 diskový oddíl s bodem připojení &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="160"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Instalovat %2 na %3 systémový diskový oddíl &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="166"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Zřídit %3 partition &lt;strong&gt;%1&lt;/strong&gt; diskový oddíl s bodem připojení &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="178"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Instalovat samozaváděcí program na &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="188"/>
        <source>Setting up mount points.</source>
        <translation>Nastavují se přípojné body.</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="77"/>
        <source>&amp;Restart now</source>
        <translation>&amp;Restartovat nyní</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="50"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;Vše je hotovo.&lt;/h1&gt;&lt;br/&gt;%1 byl nainstalován na váš počítač.&lt;br/&gt;Nyní proveďte restart do nového systému, nebo pokračujte naživo s prostředím  %2.</translation>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="43"/>
        <source>Finish</source>
        <translation>Dokončit</translation>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="49"/>
        <source>Format partition %1 (file system: %2, size: %3 MB) on %4.</source>
        <translation>Formátovat oddíl %1 (souborový systém: %2, velikost: %3 MB) na %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="60"/>
        <source>Format &lt;strong&gt;%3MB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Formátování oddílu &lt;strong&gt;%1&lt;/strong&gt; o &lt;strong&gt;%3 MB&lt;/strong&gt; se souborovým systémem &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="71"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>Formátuje seoddíl %1 se souborovým systémem %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="83"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>Instalátoru se nepodařilo zormátovat oddíl %1 na disku &apos;%2&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="91"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>Nepodařilo se otevřít zařízení &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="100"/>
        <source>Could not open partition table.</source>
        <translation>Nepodařilo se otevřít tabulku oddílů.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="124"/>
        <source>The installer failed to create file system on partition %1.</source>
        <translation>Instalátoru se nepodařilo vytvořit souborový systém na disku %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="133"/>
        <source>The installer failed to update partition table on disk &apos;%1&apos;.</source>
        <translation>Instalátoru se nepodařilo aktualizovat tabulku oddílů na disku &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>KeyboardPage</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="193"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation>Nastavit model klávesnice na %1.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="195"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation>Nastavit rozvržení klávesnice na %1/%2.</translation>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="50"/>
        <source>Keyboard</source>
        <translation>Klávesnice</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="33"/>
        <source>System locale setting</source>
        <translation>Nastavení jazyka systému</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="40"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Nastavení zemských parametrů ovlivní jazyk a znakovou sadu pro některé prvky uživatelského rozhraní v příkazovém řádku.&lt;br/&gt;Nynější nastavení je &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="88"/>
        <source>I accept the terms and conditions above.</source>
        <translation>Přijímám smluvní podmínky a podmínky řečené výše.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="115"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation>&lt;h1&gt;Licenční ujednání&lt;/h1&gt;Tento postup nastavení nainstaluje soukromě vlastněný software, který podléhá licenčním podmínkám.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="118"/>
        <source>Please review the End User License Agreements (EULAs) above.&lt;br/&gt;If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation>Čtěte, prosím, Licenční ujednání koncového uživatele (EULA) výše.&lt;br/&gt; Pokud nesouhlasíte s podmínkami, postup nastavení nebude moci pokračovat.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="124"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;In case non-free was selected, this installer will install proprietary packages &lt;br/&gt;that have additional End User License Agreements (EULAs) attached to them.</source>
        <translation>&lt;h1&gt;Licenční ujednání&lt;/h1&gt;V případě že bylo vybráno ne-svobodné, tento instalátor nainstaluje balíčky vlastněné soukromě,&lt;br/&gt;jež mají dodatečná Licenční ujednání koncového uživatele.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="127"/>
        <source>Please review the End User License Agreements (EULAs) above.&lt;br/&gt;If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation>Čtěte, prosím, Licenční ujednání koncového uživatele (EULA) výše.&lt;br/&gt; Pokud nesouhlasíte s podmínkami, soukromě vlastněný software nebude nainstalován a místo toho se použijí náhrady s otevřeným zdrojovým kódem.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="157"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation>&lt;strong&gt;Ovladač %1 /strong&gt;&lt;br/&gt;od %2</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="164"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation>&lt;strong&gt;Grafický ovladač %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;od %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="170"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;Modul prohlížeče %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;od %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="176"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;Kodek %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;od %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="182"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;Balíček %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;od %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="188"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;od %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="200"/>
        <source>&lt;a href=&quot;%1&quot;&gt;view license agreement&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;%1&quot;&gt;Zobrazit licenční ujednání&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="51"/>
        <source>License</source>
        <translation>Licence</translation>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="174"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="237"/>
        <source>The system language will be set to %1.</source>
        <translation>Jazyk systému bude nastaven na %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="206"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="240"/>
        <source>The numbers and dates locale will be set to %1.</source>
        <translation>Čísla a datumy budou nastaveny na %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="216"/>
        <source>Region:</source>
        <translation>Oblast:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="217"/>
        <source>Zone:</source>
        <translation>Pásmo:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="221"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="222"/>
        <source>&amp;Change...</source>
        <translation>&amp;Změnit...</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="390"/>
        <source>Set timezone to %1/%2.&lt;br/&gt;</source>
        <translation>Nastavit časové pásmo na %1/%2.&lt;br/&gt;</translation>
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
        <translation>Nahrávají se polohová data...</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="160"/>
        <source>Location</source>
        <translation>Poloha</translation>
    </message>
</context>
<context>
    <name>MoveFileSystemJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="66"/>
        <source>Move file system of partition %1.</source>
        <translation>Přesunout souborový systém na oddílu %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="80"/>
        <source>Could not open file system on partition %1 for moving.</source>
        <translation>Nepodařilo se otevřít souborový systém na oddílu %1 pro přesun.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="86"/>
        <source>Could not create target for moving file system on partition %1.</source>
        <translation>Nepodařilo se vytvořit cíl pro přesouvaný souborový systém na oddílu %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="95"/>
        <source>Moving of partition %1 failed, changes have been rolled back.</source>
        <translation>Přesun oddílu %1 se nezdařil. Změny byly vráceny zpět.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="101"/>
        <source>Moving of partition %1 failed. Roll back of the changes have failed.</source>
        <translation>Přesun oddílu %1 se nezdařil. Změny se nepodařilo vrátit zpět.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="113"/>
        <source>Updating boot sector after the moving of partition %1 failed.</source>
        <translation>Aktualizace zaváděcího sektoru po přesunu oddílu %1 selhala.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="127"/>
        <source>The logical sector sizes in the source and target for copying are not the same. This is currently unsupported.</source>
        <translation>Výchozí a koncová velikost logického sektoru si neodpovídají. Tato operace není v současnosti podporovaná.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="197"/>
        <source>Source and target for copying do not overlap: Rollback is not required.</source>
        <translation>Zdroj a cíl kopírování se nepřekrývají: Není nutné vracet změny..</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="221"/>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="229"/>
        <source>Could not open device %1 to rollback copying.</source>
        <translation>Nepodařilo se otevřít zařízení %1 pro zpětné kopírování.</translation>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="70"/>
        <source>Keyboard Model:</source>
        <translation>Model klávesnice:</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="131"/>
        <source>Type here to test your keyboard</source>
        <translation>Zde pište pro vyzkoušení vaší klávesnice</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="14"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="36"/>
        <source>What is your name?</source>
        <translation>Jak se jmenujete?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="117"/>
        <source>What name do you want to use to log in?</source>
        <translation>Jaké jméno chcete používat při přihlašování?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="197"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="306"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="437"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="582"/>
        <source>font-weight: normal</source>
        <translation>Písmo: normální</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="200"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can set up multiple accounts after installation.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Pokud bude tento počítač používat více než jedna osoba, můžete více účtů nastavit po dokončení instalace.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="335"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Zvolte heslo pro uchování vašeho účtu v bezpečí.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="440"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Zadejte totéž heslo dvakrát, aby mohlo proběhnout jeho ověření na chyby při psaní. Dobré heslo je směsí písmen, čísel a interpunkce, má být alespoň osm znaků dlouhé, a mělo by se pravidelně měnit.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="226"/>
        <source>What is the name of this computer?</source>
        <translation>Jaký je název tohoto počítače?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="309"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Tento název se použije, jestliže počítač zviditelníte pro ostatní v síti.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="450"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>Přihlásit se automaticky bez žádání hesla.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="457"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Použít stejné heslo pro účet správce (superuživatel).</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="480"/>
        <source>Choose a password for the administrator account.</source>
        <translation>Zvolte heslo pro účet správce.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="585"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Zadejte totéž heslo dvakrát, aby mohlo proběhnout jeho ověření na chyby při psaní.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="191"/>
        <source>Root</source>
        <translation>Kořen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="194"/>
        <source>Home</source>
        <translation>Domovská složka</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="196"/>
        <source>Boot</source>
        <translation>Boot</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="199"/>
        <source>EFI system</source>
        <translation>Systém EFI</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="201"/>
        <source>Swap</source>
        <translation>Odkládací místo</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="203"/>
        <source>New partition for %1</source>
        <translation>Nový oddíl pro %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="205"/>
        <source>New partition</source>
        <translation>Nový oddíl</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="222"/>
        <source>%1  %2</source>
        <translation>%1 %2</translation>
    </message>
</context>
<context>
    <name>PartitionModel</name>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="137"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="169"/>
        <source>Free Space</source>
        <translation>Volné místo</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="141"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="173"/>
        <source>New partition</source>
        <translation>Nový oddíl</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="257"/>
        <source>Name</source>
        <translation>Název</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="259"/>
        <source>File System</source>
        <translation>Souborový systém</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="261"/>
        <source>Mount Point</source>
        <translation>Přípojný bod</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="263"/>
        <source>Size</source>
        <translation>Velikost</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="22"/>
        <source>Storage de&amp;vice:</source>
        <translation>Ukládací &amp;zařízení:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="51"/>
        <source>&amp;Revert All Changes</source>
        <translation>&amp;Vrátit všechny změny</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="87"/>
        <source>New Partition &amp;Table</source>
        <translation>Nová &amp;tabulka oddílů</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="107"/>
        <source>&amp;Create</source>
        <translation>&amp;Vytvořit</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="114"/>
        <source>&amp;Edit</source>
        <translation>&amp;Upravit</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="121"/>
        <source>&amp;Delete</source>
        <translation>&amp;Smazat</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="148"/>
        <source>Install boot &amp;loader on:</source>
        <translation>Instalovat samo&amp;zaváděcí program na:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="156"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>Opravdu chcete vytvořit novou tabulku oddílů na %1?</translation>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="70"/>
        <source>Gathering system information...</source>
        <translation>Sbírají se informace o oddílu...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="121"/>
        <source>Partitions</source>
        <translation>Oddíly</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="158"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system.</source>
        <translation>Nainstalovat %1 &lt;strong&gt;vedle&lt;/strong&gt; jiného operačního systému.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="163"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk and install %1.</source>
        <translation>&lt;strong&gt;Vymazat&lt;/strong&gt; disk a instalovat %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="168"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition with %1.</source>
        <translation>&lt;strong&gt;Nahradit&lt;/strong&gt; diskový oddíl %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="173"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning.</source>
        <translation>&lt;strong&gt;Ruční&lt;/strong&gt; vytváření diskových oddílů.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="186"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system on disk &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Nainstalovat %1 &lt;strong&gt;vedle&lt;/strong&gt; jiného operačního systému na disku &lt;strong&gt;%2&lt;/strong&gt; (%3).&lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="193"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) and install %1.</source>
        <translation>&lt;strong&gt;Vymazat&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) a instalovat %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="200"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition on disk &lt;strong&gt;%2&lt;/strong&gt; (%3) with %1.</source>
        <translation>&lt;strong&gt;Nahradit&lt;/strong&gt; diskový oddíl na disku &lt;strong&gt;%2&lt;/strong&gt; (%3) %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="207"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning on disk &lt;strong&gt;%1&lt;/strong&gt; (%2).</source>
        <translation>&lt;strong&gt;Ruční&lt;/strong&gt; vytváření diskových oddílů na disku &lt;strong&gt;%1&lt;/strong&gt; (%2).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="215"/>
        <source>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
        <translation>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="243"/>
        <source>Current:</source>
        <translation>Nynější:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="261"/>
        <source>After:</source>
        <translation>Po:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="405"/>
        <source>No EFI system partition configured</source>
        <translation>Není nastaven žádný oddíl EFI</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="406"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a FAT32 filesystem with the &lt;strong&gt;esp&lt;/strong&gt; flag enabled and mount point &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation>Systémový oddíl EFI je nezbytný pro start %1.&lt;br/&gt;&lt;br/&gt;Pro nastavení systémového oddílu EFI se vraťte a vyberte nebo vytvořte souborový systém FAT32 s příznakem &lt;strong&gt;esp&lt;/strong&gt; a přípojným bodem &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;Můžete pokračovat bez nastavení systémového oddílu EFI, ale váš systém se nemusí spustit.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="420"/>
        <source>EFI system partition flag not set</source>
        <translation>Příznak systémoho oddílu EFI není nastaven</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="421"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;A partition was configured with mount point &lt;strong&gt;%2&lt;/strong&gt; but its &lt;strong&gt;esp&lt;/strong&gt; flag is not set.&lt;br/&gt;To set the flag, go back and edit the partition.&lt;br/&gt;&lt;br/&gt;You can continue without setting the flag but your system may fail to start.</source>
        <translation>Systémový oddíl EFI je nezbytný pro start %1.&lt;br/&gt;&lt;br/&gt;Oddíl má přípojný bod &lt;strong&gt;%2&lt;/strong&gt;, ale jeho &lt;strong&gt;esp&lt;/strong&gt; příznak není nastaven.&lt;br/&gt;Pro nastavení příznaku se vraťte a upravte oddíl.&lt;br/&gt;&lt;br/&gt;Můžete pokračovat bez nastavení příznaku, ale systém nemusí nastartovat.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="456"/>
        <source>Boot partition not encrypted</source>
        <translation>Zaváděcí oddíl nezašifrován</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="457"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation>Bootovací oddíl byl nastaven spolu se zašifrovaným kořenovým oddílem, ale bootovací oddíl šifrovaný není.&lt;br/&gt;&lt;br/&gt;Toto není považováno za bezpečnou konfiguraci, protože důležité systémové soubory jsou uloženy na nešifrovaném oddílu.&lt;br/&gt;Můžete pokračovat, pokud si to přejete, ale k odemčení systému souborů dojde později během spouštění systému.&lt;br/&gt;Zašifrovat bootovací oddíl můžete, pokud se vrátíte o krok zpět a znovu ho vytvoříte a současně vyberete &lt;strong&gt;zašifrovat&lt;/strong&gt; v okně vytváření oddílu.</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="82"/>
        <source>Default Keyboard Model</source>
        <translation>Výchozí model klávesnice</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="127"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="163"/>
        <source>Default</source>
        <translation>Výchozí</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="49"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>Místo nerozdělené do oddílů nebo neznámá tabulka oddílů</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="201"/>
        <source>unknown</source>
        <translation>neznámý</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="203"/>
        <source>extended</source>
        <translation>rozšířený</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="205"/>
        <source>unformatted</source>
        <translation>neformátovaný</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="207"/>
        <source>swap</source>
        <translation>Odkládací místo</translation>
    </message>
</context>
<context>
    <name>ReplaceWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="14"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="134"/>
        <source>Select where to install %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
        <translation>Vyberte, kam se má nainstalovat %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Varování: &lt;/font&gt; Toto smaže všechny soubory na vybraném diskovém oddílu.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="161"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>Zdá se, že vybraná položka není platný oddíl.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="169"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1 nelze nainstalovat na prázdné místo. Vyberte, prosím, existující oddíl.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="180"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1 nelze nainstalovat na rozšířený oddíl. Vyberte, prosím, existující hlavní nebo logický oddíl.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="191"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>%1 nelze nainstalovat na tento oddíl.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="198"/>
        <source>Data partition (%1)</source>
        <translation>Oddíl s daty (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="215"/>
        <source>Unknown system partition (%1)</source>
        <translation>Neznámý systémový oddíl (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="220"/>
        <source>%1 system partition (%2)</source>
        <translation>Systémový oddíl %1 (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="231"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Oddíl %1 je pro %2 příliš malý. Vyberte, prosím, oddíl o velikosti alespoň %3 GiB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="255"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Nikde na tomto systému nelze najít systémový oddíl EFI. Jděte, prosím, zpět a použijte k nastavení %1 ruční vytváření oddílů.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="267"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="286"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="311"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 bude nainstalován na %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Varování: &lt;/font&gt;všechna data na diskovém oddílu %2 budou ztracena.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="277"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>Systémový oddíl EFI na %1 se bude používat ke spouštění %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="295"/>
        <source>EFI system partition:</source>
        <translation>Systémový oddíl EFI:</translation>
    </message>
</context>
<context>
    <name>RequirementsChecker</name>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="58"/>
        <source>Gathering system information...</source>
        <translation>Shromažďují se informace o systému...</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="99"/>
        <source>has at least %1 GB available drive space</source>
        <translation>má dostupných alespoň %1 GB místa na disku</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="101"/>
        <source>There is not enough drive space. At least %1 GB is required.</source>
        <translation>Není dost místa na disku. Je požadováno alespoň %1 GB.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="109"/>
        <source>has at least %1 GB working memory</source>
        <translation>má dostupných alespoň %1 GB pracovní paměti</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="111"/>
        <source>The system does not have enough working memory. At least %1 GB is required.</source>
        <translation>Systém nemá dostatek pracovní paměti. Je požadováno alespoň %1 GB.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="119"/>
        <source>is plugged in to a power source</source>
        <translation>je připojen k síťovému energetickému zdroji</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="120"/>
        <source>The system is not plugged in to a power source.</source>
        <translation>Systém není připojen k síťovému energetickému zdroji.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="127"/>
        <source>is connected to the Internet</source>
        <translation>Je připojen k internetu</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="128"/>
        <source>The system is not connected to the Internet.</source>
        <translation>Systém není připojen k internetu.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="136"/>
        <source>The installer is not running with administrator rights.</source>
        <translation>Instalátor neběží s právy správce (superuživatele).</translation>
    </message>
</context>
<context>
    <name>ResizeFileSystemJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="76"/>
        <source>Resize file system on partition %1.</source>
        <translation>Změnit velikost souborového systému na oddílu %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="91"/>
        <source>Parted failed to resize filesystem.</source>
        <translation>Parted se velikost souborového systému změnit nepodařilo.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="101"/>
        <source>Failed to resize filesystem.</source>
        <translation>Nepodařilo se změnit velikost souborového systému.</translation>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="187"/>
        <source>Resize partition %1.</source>
        <translation>Změnit velikost oddílu %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="194"/>
        <source>Resize &lt;strong&gt;%2MB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MB&lt;/strong&gt;.</source>
        <translation>Změnit velikost &lt;strong&gt;%2MB&lt;/strong&gt; diskového oddílu &lt;strong&gt;%1&lt;/strong&gt; na &lt;strong&gt;%3MB&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="205"/>
        <source>Resizing %2MB partition %1 to %3MB.</source>
        <translation>Mění se velikost oddílu %1 z %2 MBna %3 MB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="232"/>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="298"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>Instalátoru se nepodařilo změnit velikost oddílu %1 na disku &apos;%2&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="237"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>Nepodařilo se otevřít zařízení &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>ScanningDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="83"/>
        <source>Scanning storage devices...</source>
        <translation>Prohledávání úložného zařízení...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="84"/>
        <source>Partitioning</source>
        <translation>Zpracování oddílů</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="37"/>
        <source>Set hostname %1</source>
        <translation>Nastavit jméno hostitele %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="44"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Nastavit název hostitelského počítače &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="51"/>
        <source>Setting hostname %1.</source>
        <translation>Nastavuje se název hostitelského počítače %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="61"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="68"/>
        <source>Internal Error</source>
        <translation>Vnitřní chyba</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="75"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="86"/>
        <source>Cannot write hostname to target system</source>
        <translation>Nelze zapsat jméno hostitele na cílový systém</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="59"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>Nastavit model klávesnice na %1, rozvržení na %2-%3</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="320"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>Nastavení klávesnice se nepodařilo zapsat pro virtuální konsoli.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="321"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="325"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="331"/>
        <source>Failed to write to %1</source>
        <translation>Nepodařilo se zapisovat do %1</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="324"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>Nepodařilo se zapsat astavení klávesnice pro X11.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="330"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <translation>Nastavení klávesnice se nepodařilo zapsat do stávajícího adresáře /etc/default.</translation>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="48"/>
        <source>Set flags on partition %1.</source>
        <translation>Nastavit příznaky na oddílu %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="51"/>
        <source>Set flags on %1MB %2 partition.</source>
        <translation>Nastavit příznaky na oddílu %1MB %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="55"/>
        <source>Set flags on new partition.</source>
        <translation>Nastavit příznaky na novém oddílu.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="66"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Smazat příznaky na oddílu &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="70"/>
        <source>Clear flags on %1MB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Smazat příznaky na oddílu %1MB &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="74"/>
        <source>Clear flags on new partition.</source>
        <translation>Smazat příznaky na novém oddílu.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="78"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Příznak oddílu &lt;strong&gt;%1&lt;/strong&gt; stejný jako &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="84"/>
        <source>Flag %1MB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>Označit příznakem %1MB &lt;strong&gt;%2&lt;/strong&gt; nový oddíl jako &lt;strong&gt;%3&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="90"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Označit příznakem nový oddíl jako &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="102"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Čištění příznaků na oddílu &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="106"/>
        <source>Clearing flags on %1MB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Smazání příznaků na oddílu %1MB &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="110"/>
        <source>Clearing flags on new partition.</source>
        <translation>Smazání příznaků na novém oddílu.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="114"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Nastavení příznaků &lt;strong&gt;%2&lt;/strong&gt; na oddílu &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="120"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Nastavení příznaků &lt;strong&gt;%3&lt;/strong&gt; na oddílu %1MB &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="126"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation>Nastavení příznaků &lt;strong&gt;%1&lt;/strong&gt; na novém oddílu.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="140"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation>Instalátor nemohl nastavit příznaky na oddílu %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="148"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>Nelze otevřít zařízení &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="157"/>
        <source>Could not open partition table on device &apos;%1&apos;.</source>
        <translation>Nelze otevřít tabulku oddílů na zařízení &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="169"/>
        <source>Could not find partition &apos;%1&apos;.</source>
        <translation>Nelze najít oddíl &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>SetPartGeometryJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="144"/>
        <source>Update geometry of partition %1.</source>
        <translation>Aktualizovat uspořádání oddílu %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="156"/>
        <source>Failed to change the geometry of the partition.</source>
        <translation>Nepodařilo se změnit uspořádání oddílu.</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="42"/>
        <source>Set password for user %1</source>
        <translation>Nastavit heslo pro uživatele %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="49"/>
        <source>Setting password for user %1.</source>
        <translation>Nastavuje se heslo pro uživatele %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="59"/>
        <source>Bad destination system path.</source>
        <translation>Špatný cíl pro systémovou cestu.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="60"/>
        <source>rootMountPoint is %1</source>
        <translation>Přípojný bod pro root je %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="74"/>
        <source>Cannot set password for user %1.</source>
        <translation>Nelze nastavit heslo pro uživatele %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="76"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod je ukončen s kódem chyby %1.</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="43"/>
        <source>Set timezone to %1/%2</source>
        <translation>Nastavit časové pásmo na %1/%2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot access selected timezone path.</source>
        <translation>Nelze přistoupit k cestě vybraného časového pásma.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Bad path: %1</source>
        <translation>Špatná cesta: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="86"/>
        <source>Cannot set timezone.</source>
        <translation>Nelze nastavit časové pásmo.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="87"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>Nepodařilo se vytvořit odkaz: %1; název odkazu: %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="96"/>
        <source>Cannot set timezone,</source>
        <translation>Nelze nastavit časové pásmo,</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="97"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>Nelze vytvořit /etc/timezone pro zápis.</translation>
    </message>
</context>
<context>
    <name>SummaryPage</name>
    <message>
        <location filename="../src/modules/summary/SummaryPage.cpp" line="46"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation>Toto je přehled toho, co se stane, když spustíte postup instalace.</translation>
    </message>
</context>
<context>
    <name>SummaryViewStep</name>
    <message>
        <location filename="../src/modules/summary/SummaryViewStep.cpp" line="43"/>
        <source>Summary</source>
        <translation>Shrnutí</translation>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="269"/>
        <source>Your username is too long.</source>
        <translation>Uživatelské jméno je příliš dlouhé.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="279"/>
        <source>Your username contains invalid characters. Only lowercase letters and numbers are allowed.</source>
        <translation>Uživatelské jméno obsahuje neplatné znaky. Jsou dovolena pouze malá písmena a čísla.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="323"/>
        <source>Your hostname is too short.</source>
        <translation>Jméno hostitelského počítače je příliš krátké.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="334"/>
        <source>Your hostname is too long.</source>
        <translation>Jméno hostitelského počítače je příliš dlouhé.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="345"/>
        <source>Your hostname contains invalid characters. Only letters, numbers and dashes are allowed.</source>
        <translation>Jméno hostitelského počítače obsahuje neplatné znaky. Jsou dovolena pouze písmena, čísla a čárky.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="376"/>
        <location filename="../src/modules/users/UsersPage.cpp" line="409"/>
        <source>Your passwords do not match!</source>
        <translation>Hesla se neshodují!</translation>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
        <source>Users</source>
        <translation>Uživatelé</translation>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulář</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="75"/>
        <source>&amp;Language:</source>
        <translation>&amp;Jazyk:</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="250"/>
        <source>&amp;Release notes</source>
        <translation>Poznámky k &amp;vydání</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="240"/>
        <source>&amp;Known issues</source>
        <translation>Známé &amp;potíže</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="193"/>
        <source>&amp;Support</source>
        <translation>P&amp;odpora</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="183"/>
        <source>&amp;About</source>
        <translation>O &amp;programu</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="56"/>
        <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Vítejte v instalátoru %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="70"/>
        <source>About %1 installer</source>
        <translation>O %1 instalátoru</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="72"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2015 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Thanks to: Anke Boersma, Aurélien Gâteau, Kevin Kofler, Philip Müller, Pier Luigi Fiorini, Rohan Garg and the &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;http://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;pro %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2015 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Děkujeme: Anke Boersma, Aurélien Gâteau, Kevin Kofler, Philip Müller, Pier Luigi Fiorini, Rohan Garg a &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt; týmu překladatelů KaOS&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;Vývoj &lt;a href=&quot;http://calamares.io/&quot;&gt;Calamares&lt;/a&gt; sponzoruje &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="196"/>
        <source>%1 support</source>
        <translation>%1 podpora</translation>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="51"/>
        <source>Welcome</source>
        <translation>Vítejte</translation>
    </message>
</context>
<context>
    <name>show</name>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="47"/>
        <source>Here the actual install of KaOS will start.&lt;br/&gt;Use the left &lt;b&gt;mouse button&lt;/b&gt; to go to the next slide, right for previous.&lt;br/&gt;After creating your chosen disk setup in the first 10 % &lt;br/&gt;the full copying of the ISO will take the longest of this install phase &lt;br/&gt;and will run until approximately 30%.&lt;br/&gt;</source>
        <translation>Zde začne skutečná instalace KaOS.&lt;br/&gt;Použijte levé &lt;b&gt;tlačítko myši&lt;/b&gt; pro přechod na další snímek, pravé tlačítko pro návrat na předchozí.&lt;br/&gt;Po vytvoření nastavení vybraného disku v prvních 10 % &lt;br/&gt;zabere nejvíce času tohoto úseku instalace plné zkopírování obrazu ISO &lt;br/&gt;a poběží až do přibližně 30 %.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="73"/>
        <source>After the ISO is copied some 25 post-install modules will run.&lt;br/&gt;This includes setting user specific options, &lt;br/&gt;removing Live Session only packages&lt;br/&gt;and adjusting hardware setup.&lt;br/&gt;</source>
        <translation>Po zkopírování obrazu ISO poběží 25 poinstalačních modulů.&lt;br/&gt;To zahrnuje nastavení určitých uživatelských voleb, &lt;br/&gt;odstranění balíčků používaných jedině při živém sezení&lt;br/&gt;a upravení nastavení technického vybavení.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="98"/>
        <source>The default Office Suite is Calligra.&lt;br/&gt;LibreOffice is available in the repositories. &lt;br/&gt;</source>
        <translation>Výchozím kancelářským balíkem je Calligra.&lt;br/&gt;LibreOffice je dostupný ve skladištích. &lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="121"/>
        <source>Qt/KDE specific internet applications include the &lt;br/&gt;Qupzilla web-browser and kde-telepathy for &lt;br/&gt;chat and Instant Messaging. &lt;br/&gt;</source>
        <translation>Internetové aplikace postavené na Qt/KDE zahrnují &lt;br/&gt;prohlížeč Qupzilla a kde-telepathy pro &lt;br/&gt;vedení rozhovorů a okamžitou výměnu zpráv.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="145"/>
        <source>For package management Octopi is the GUI application.&lt;br/&gt;</source>
        <translation>Obrazovým rozhraním ku správě balíčků je Octopi.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="167"/>
        <source>May using KaOS be a pleasant experience for you.</source>
        <translation>Ať je pro vás používání KaOS příjemným zážitkem.</translation>
    </message>
</context>
</TS>