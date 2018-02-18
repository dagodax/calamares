<?xml version="1.0" ?><!DOCTYPE TS><TS language="it" version="2.1">
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="69"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>L&apos; &lt;strong&gt;ambiente di avvio&lt;/strong&gt; di questo sistema.&lt;br&gt;&lt;br&gt;I vecchi sistemi x86 supportano solo &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;I sistemi moderni generalmente usano &lt;strong&gt;EFI&lt;/strong&gt;, ma potrebbero anche mostrare il BIOS se avviati in modalità compatibilità.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="79"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>Questo sistema è stato avviato da un ambiente di avvio &lt;strong&gt;EFI&lt;/strong&gt;.&lt;br&gt;&lt;br&gt; Per configurare l&apos;avvio da EFI, questo installer dovrà installare un boot loader, come &lt;strong&gt;GRUB&lt;/strong&gt; oppure &lt;strong&gt;systemd-boot&lt;/strong&gt; su una &lt;strong&gt;Partizione di Sistema EFI&lt;/strong&gt;. Questo processo è automatico, a meno che non si scelga il partizionamento manuale, nel qual caso lo si dovrà impostare manualmente.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="91"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>Questo sistema è stato avviato da un ambiente di avvio &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;&lt;br&gt; Per configurare l&apos;avvio da BIOS, questo installer dovrà installare un boot loader, come &lt;strong&gt;GRUB&lt;/strong&gt;, o all&apos;inizio di una partizione o sul &lt;strong&gt;Master Boot Record&lt;/strong&gt; vicino l&apos;inizio della tabella delle partizioni (metodo consigliato). Questo processo è automatico, a meno che non si scelga il partizionamento manuale, nel qual caso lo si dovrà impostare manualmente.</translation>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="59"/>
        <source>Master Boot Record of %1</source>
        <translation>Master Boot Record di %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="76"/>
        <source>Boot Partition</source>
        <translation>Partizione di avvio</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="81"/>
        <source>System Partition</source>
        <translation>Partizione di sistema</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="111"/>
        <source>Do not install a boot loader</source>
        <translation>Non installare il boot loader</translation>
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
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="24"/>
        <source>GlobalStorage</source>
        <translation>Storage Globale</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="34"/>
        <source>JobQueue</source>
        <translation>Coda di lavoro</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="44"/>
        <source>Modules</source>
        <translation>Moduli</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="57"/>
        <source>Type:</source>
        <translation>Tipo:</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="64"/>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="78"/>
        <source>none</source>
        <translation>niente</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="71"/>
        <source>Interface:</source>
        <translation>Interfaccia:</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="93"/>
        <source>Tools</source>
        <translation>Strumenti</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.cpp" line="182"/>
        <source>Debug information</source>
        <translation>Informazioni di debug</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/ExecutionViewStep.cpp" line="77"/>
        <source>Install</source>
        <translation>Installa</translation>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="86"/>
        <source>Done</source>
        <translation>Fatto</translation>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="51"/>
        <source>Run command %1 %2</source>
        <translation>Esegui il comando %1 %2</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="60"/>
        <source>Running command %1 %2</source>
        <translation>Esegui comando %1 %2</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="265"/>
        <source>Running %1 operation.</source>
        <translation>Eseguo %1 operazioni.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="280"/>
        <source>Bad working directory path</source>
        <translation>Il percorso della cartella corrente non è corretto</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="281"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>La cartella corrente %1 per l&apos;attività di Python %2 non è accessibile.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="291"/>
        <source>Bad main script file</source>
        <translation>File dello script principale non valido</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="292"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>Il file principale dello script %1 per l&apos;attività di python %2 non è accessibile.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="368"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>Errore da Boost.Python nell&apos;operazione &quot;%1&quot;.</translation>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="73"/>
        <source>&amp;Back</source>
        <translation>&amp;Indietro</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="74"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="257"/>
        <source>&amp;Next</source>
        <translation>&amp;Avanti</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="75"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="266"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Annulla</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="76"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="267"/>
        <source>Cancel installation without changing the system.</source>
        <translation>Cancella l&apos;installazione senza modificare il sistema.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="255"/>
        <source>&amp;Install</source>
        <translation>&amp;Installa</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="303"/>
        <source>Cancel installation?</source>
        <translation>Annullare l&apos;installazione?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="304"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>Vuoi davvero annullare il processo di installazione in corso?
Il programma di installazione verrà chiuso e tutte le modifiche andranno perse.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="309"/>
        <source>&amp;Yes</source>
        <translation>&amp;Si</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="310"/>
        <source>&amp;No</source>
        <translation>&amp;No</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="162"/>
        <source>&amp;Close</source>
        <translation>&amp;Chiudi</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="215"/>
        <source>Continue with setup?</source>
        <translation>Continuare con l&apos;installazione?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="216"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>L&apos;installer %1 sta per effettuare delle modifiche al disco per installare %2.&lt;br/&gt;&lt;strong&gt;Questo processo è irreversibile.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="221"/>
        <source>&amp;Install now</source>
        <translation>&amp;Installa ora</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="222"/>
        <source>Go &amp;back</source>
        <translation>Torna &amp;indietro</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="261"/>
        <source>&amp;Done</source>
        <translation>%Finito</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="262"/>
        <source>The installation is complete. Close the installer.</source>
        <translation>L&apos;installazione è completata. Chiudi il programma.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="159"/>
        <source>Error</source>
        <translation>Errore</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="160"/>
        <source>Installation Failed</source>
        <translation>Installazione non riuscita</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="270"/>
        <source>Unknown exception type</source>
        <translation>Tipo di eccezione sconosciuto</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="284"/>
        <source>unparseable Python error</source>
        <translation>Errore Python non definibile</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="324"/>
        <source>unparseable Python traceback</source>
        <translation>Traceback Python non definibile</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="329"/>
        <source>Unfetchable Python error.</source>
        <translation>Errore di Python non definibile.</translation>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="44"/>
        <source>%1 Installer</source>
        <translation>Programma di installazione di %1</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="111"/>
        <source>Show debug information</source>
        <translation>Visualizza informazioni di debug</translation>
    </message>
</context>
<context>
    <name>CheckerWidget</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="96"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>Questo computer non soddisfa i requisiti minimi per l&apos;installazione di %1.&lt;br/&gt;L&apos;installazione non può continuare.&lt;a href=&quot;#details&quot;&gt;Dettagli...&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="113"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation>Questo computer non soddisfa alcuni dei requisiti raccomandati per l&apos;installazione di %1.&lt;br/&gt;L&apos;installazione può continuare ma alcune funzionalità potrebbero essere disattivate.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="151"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation>Questo programma ti farà delle domande per inizializzare %2 sul tuo computer.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="174"/>
        <source>For best results, please ensure that this computer:</source>
        <translation>Per un risultato ottimale, assicurarsi che il computer:</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="202"/>
        <source>System requirements</source>
        <translation>Requisiti di sistema</translation>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="128"/>
        <source>After:</source>
        <translation>Dopo:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1207"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1244"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1266"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1290"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;Cancella disco&lt;/strong&gt;&lt;br/&gt;Questo &lt;font color=&quot;red&quot;&gt;cancellerà&lt;/font&gt; tutti i dati presenti sul dispositivo selezionato.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1211"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1240"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1262"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1286"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;Installa a fianco&lt;/strong&gt;&lt;br/&gt;L&apos;installer ridurrà la partizione per fare spazio a %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1215"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1249"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1270"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1294"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;Sostituisci una partizione&lt;/strong&gt;&lt;br/&gt;Sostituisce una partizione con %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1000"/>
        <source>Boot loader location:</source>
        <translation>Posizione del Boot Loader:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="126"/>
        <source>Select storage de&amp;vice:</source>
        <translation>Seleziona il dispositi&amp;vo:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="127"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="926"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="972"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1051"/>
        <source>Current:</source>
        <translation>Corrente:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="235"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself. Having a GPT partition table and &lt;strong&gt;fat32 512Mb /boot partition is a must for UEFI installs&lt;/strong&gt;, either use an existing without formatting or create one.</source>
        <translation>&lt;strong&gt;Partizionamento manuale&lt;/strong&gt;&lt;br/&gt;E&apos; possibile creare o ridimensionare le partizioni. Una tabella delle partizioni GPT e &lt;strong&gt;una partizione fat32 da 512Mb per /boot sono necessarie per installazioni su sistemi UEFI&lt;/strong&gt;, puoi usare una partizione esistente senza formattarla oppure crearne una nuova.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="797"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>Riusa %1 come partizione home per %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="927"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Seleziona una partizione da ridimensionare, poi trascina la barra per ridimensionarla&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="944"/>
        <source>%1 will be shrunk to %2MB and a new %3MB partition will be created for %4.</source>
        <translation>%1 verrà ridotta a %2MB e una nuova partizione da %3MB sarà creata per %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1042"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Seleziona una partizione sulla quale installare&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1098"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>Impossibile trovare una partizione di sistema EFI. Torna indietro e usa il partizionamento per impostare %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1107"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>La partizione di sistema EFI %1 sarà usata per avviare %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1115"/>
        <source>EFI system partition:</source>
        <translation>Partizione di sistema EFI:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1202"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Il dispositivo non sembra avere alcun sistema operativo su di esso. Cosa vorresti fare?&lt;br/&gt;Sarai in grado di ricontrollare e confermare le tue scelte prima che venga fatto alcun cambiamento sul disco.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1234"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Sul dispositivo è presente %1. Cosa vorresti fare?&lt;br/&gt; Sarai in grado di ricontrollare e confermare le tue scelte prima che venga fatto alcun cambiamento sul disco.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1257"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>C&apos;è già un sistema operativo sul dispositivo. Cosa vorresti fare?&lt;br/&gt; Sarai in grado di ricontrollare e confermare le tue scelte prima che venga fatto alcun cambiamento sul disco.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1281"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ci sono diversi sistemi operativi sul dispositivo. Cosa vorresti fare?&lt;br/&gt; Sarai in grado di ricontrollare e confermare le tue scelte prima che venga fatto alcun cambiamento sul disco.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="14"/>
        <source>Form</source>
        <translation>Modulo</translation>
    </message>
</context>
<context>
    <name>ClearMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="45"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>Rimozione dei punti di montaggio per le operazioni di partizionamento su %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="53"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>Rimozione dei punti di montaggio per le operazioni di partizionamento su %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="190"/>
        <source>Cleared all mounts for %1</source>
        <translation>Rimossi tutti i punti di montaggio per %1</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="42"/>
        <source>Clear all temporary mounts.</source>
        <translation>Rimozione di tutti i punti di montaggio temporanei.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="49"/>
        <source>Clearing all temporary mounts.</source>
        <translation>Rimozione di tutti i punti di montaggio temporanei.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="60"/>
        <source>Cannot get list of temporary mounts.</source>
        <translation>Impossibile ottenere la lista dei punti di montaggio temporanei.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="99"/>
        <source>Cleared all temporary mounts.</source>
        <translation>Rimossi tutti i punti di montaggio temporanei.</translation>
    </message>
</context>
<context>
    <name>CommandList</name>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="113"/>
        <source>Could not run command.</source>
        <translation>Impossibile eseguire il comando.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="114"/>
        <source>No rootMountPoint is defined, so command cannot be run in the target environment.</source>
        <translation>Nessun rootMountPoint è stato definito, quindi non è stato possibile eseguire il comando nell&apos;ambiente target.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="14"/>
        <source>Create a Partition</source>
        <translation>Crea una partizione</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="48"/>
        <source> MiB</source>
        <translation>MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="55"/>
        <source>Partition &amp;Type:</source>
        <translation>&amp;Tipo di partizione:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="67"/>
        <source>&amp;Primary</source>
        <translation>&amp;Primaria</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="77"/>
        <source>E&amp;xtended</source>
        <translation>E&amp;stesa</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="119"/>
        <source>Fi&amp;le System:</source>
        <translation>Fi&amp;le System:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="151"/>
        <source>LVM LV name</source>
        <translation>LVM LV nome</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="188"/>
        <source>Flags:</source>
        <translation>Flags:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="161"/>
        <source>&amp;Mount Point:</source>
        <translation>Punto di &amp;mount:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="38"/>
        <source>Si&amp;ze:</source>
        <translation>&amp;Dimensione:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="68"/>
        <source>En&amp;crypt</source>
        <translation>&amp;Cifra</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="177"/>
        <source>Logical</source>
        <translation>Logica</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="182"/>
        <source>Primary</source>
        <translation>Primaria</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="199"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="288"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>Punto di montaggio già in uso. Prego selezionarne un altro.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="44"/>
        <source>Create new %2MB partition on %4 (%3) with file system %1.</source>
        <translation>Crea una nuova partizione da %2MB su %4 (%3) con il file system %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="55"/>
        <source>Create new &lt;strong&gt;%2MB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Crea una nuova partizione da &lt;strong&gt;%2MB&lt;/strong&gt; su &lt;strong&gt;%4&lt;/strong&gt; (%3) con il file system &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="67"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>Creazione di una nuova partizione %1 su %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="79"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>Il programma di installazione non è riuscito a creare la partizione sul disco &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="20"/>
        <source>Create Partition Table</source>
        <translation>Crea tabella delle partizioni</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="39"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>La creazione di una nuova tabella delle partizioni cancellerà tutti i dati esistenti sul disco.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="65"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>Che tipo di tabella delle partizioni vuoi creare?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="72"/>
        <source>Master Boot Record (MBR)</source>
        <translation>Master Boot Record (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="82"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>Tabella delle Partizioni GUID (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="45"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>Crea una nuova tabella di partizioni %1 su %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="52"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Crea una nuova tabella delle partizioni &lt;strong&gt;%1&lt;/strong&gt; su &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="62"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>Creazione di una nuova tabella partizioni %1 su %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="72"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>Il programma di installazione non è riuscito a creare una tabella delle partizioni su %1.</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="50"/>
        <source>Create user %1</source>
        <translation>Crea l&apos;utente %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="57"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Crea utente &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="64"/>
        <source>Creating user %1.</source>
        <translation>Creazione utente %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="80"/>
        <source>Sudoers dir is not writable.</source>
        <translation>La cartella sudoers non è scrivibile.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="84"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation>Impossibile creare il file sudoers in scrittura.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="92"/>
        <source>Cannot chmod sudoers file.</source>
        <translation>Impossibile eseguire chmod sul file sudoers.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="98"/>
        <source>Cannot open groups file for reading.</source>
        <translation>Impossibile aprire il file groups in lettura.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="159"/>
        <source>Cannot create user %1.</source>
        <translation>Impossibile creare l&apos;utente %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="161"/>
        <source>useradd terminated with error code %1.</source>
        <translation>useradd si è chiuso con codice di errore %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="170"/>
        <source>Cannot add user %1 to groups: %2.</source>
        <translation>Impossibile aggiungere l&apos;utente %1 ai gruppi: %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="173"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod terminato con errore %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="183"/>
        <source>Cannot set home directory ownership for user %1.</source>
        <translation>Impossibile impostare i diritti sulla cartella home per l&apos;utente %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="185"/>
        <source>chown terminated with error code %1.</source>
        <translation>chown si è chiuso con codice di errore %1.</translation>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="40"/>
        <source>Delete partition %1.</source>
        <translation>Elimina la partizione %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="48"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Elimina la partizione &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="56"/>
        <source>Deleting partition %1.</source>
        <translation>Cancellazione partizione %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="68"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>Il programma di installazione non è riuscito a cancellare la partizione %1.</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="150"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>Il tipo di &lt;strong&gt;tabella delle partizioni&lt;/strong&gt; sul dispositivo selezionato.&lt;br&gt;&lt;br&gt;L&apos;unico modo per cambiare  il tipo di tabella delle partizioni è di eliminarla e crearne una nuova, il che distruggerà tutti i dati sul dispositivo di memoria.&lt;br&gt;Il programma di installazione manterrà l&apos;attuale tabella delle partizioni a meno che non si scelga esplicitamente il contrario.&lt;br&gt;Se non si è sicuri, sui sistemi moderni è preferibile usare GPT.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="107"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>Questo dispositivo ha una tabella delle partizioni &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="114"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>Questo è un dispositivo di &lt;strong&gt;loop&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;E&apos; uno pseudo dispositivo senza tabella delle partizioni che rende possibile accedere ad un file come fosse un dispositivo a blocchi. Questo tipo di setup generalmente contiene un solo filesystem.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="121"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>L&apos;installer &lt;strong&gt;non riesce a rilevare una tabella delle partizioni&lt;/strong&gt; sul dispositivo di memoria selezionato.&lt;br&gt;&lt;br&gt;Il dispositivo non ha una tabella delle partizioni, oppure la tabella delle partizioni è corrotta o di un tipo sconosciuto.&lt;br&gt;Questo installer può creare una nuova tabella delle partizioni per te, o automaticamente, oppure attraverso la pagina di partizionamento manuale.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="131"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;Questa è il tipo di tabella di partizioni raccomandata per i sistemi moderni, che si avviano da &lt;strong&gt;EFI&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="137"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;Questo tipo di tabella delle partizioni è consigliabile solo su vecchi sistemi che si avviano dal &lt;strong&gt;BIOS&lt;/strong&gt;. GPT è raccomandata nella maggior parte dei casi.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Attenzione:&lt;/strong&gt; la tabella delle partizioni MBR è uno standard obsoleto dell&apos;era di MS-DOS.&lt;br&gt;Solo 4 partizioni &lt;em&gt;primarie&lt;/em&gt; possono essere create, e di queste 4, una può essere una partizione &lt;em&gt;estesa&lt;/em&gt;, che a sua volta può contenere più partizioni &lt;em&gt;logiche&lt;/em&gt;.</translation>
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
        <translation>Modifica la partizione esistente</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="50"/>
        <source>Content:</source>
        <translation>Contenuto:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="60"/>
        <source>&amp;Keep</source>
        <translation>&amp;Lascia</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="70"/>
        <source>Format</source>
        <translation>Formatta</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="89"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>Attenzione: la formattazione della partizione cancellerà tutti i dati!</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="99"/>
        <source>&amp;Mount Point:</source>
        <translation>Punto di &amp;Mount:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="119"/>
        <source>Si&amp;ze:</source>
        <translation>Dimensione:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="129"/>
        <source> MiB</source>
        <translation>MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="136"/>
        <source>Fi&amp;le System:</source>
        <translation>Fi&amp;le System:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="149"/>
        <source>Flags:</source>
        <translation>Flags:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="307"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>Punto di montaggio già in uso. Prego selezionarne un altro.</translation>
    </message>
</context>
<context>
    <name>EncryptWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="14"/>
        <source>Form</source>
        <translation>Modulo</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="32"/>
        <source>En&amp;crypt system</source>
        <translation>&amp;Cifra il sistema</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="42"/>
        <source>Passphrase</source>
        <translation>Passphrase</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="52"/>
        <source>Confirm passphrase</source>
        <translation>Conferma la passphrase</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="151"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>Prego inserire la stessa passphrase in entrambi i riquadri.</translation>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="123"/>
        <source>Set partition information</source>
        <translation>Imposta informazioni partizione</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="147"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>Installa %1 su una &lt;strong&gt;nuova&lt;/strong&gt; partizione di sistema %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="151"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Imposta una &lt;strong&gt;nuova&lt;/strong&gt; partizione %2 con punto di mount &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="159"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Installa %2 su %3 partizione di sistema &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="164"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Inizializza %3 partizione &lt;strong&gt;%1&lt;/strong&gt; con punto di montaggio &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="176"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Installa il boot loader su &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="186"/>
        <source>Setting up mount points.</source>
        <translation>Inizializzazione dei punti di montaggio.</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="14"/>
        <source>Form</source>
        <translation>Modulo</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="95"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot; font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Se selezionata, il tuo sistema si riavvierà immediatamente quando cliccherai su &lt;span style=&quot; font-style:italic;&quot;&gt;Fatto&lt;/span&gt; o chiuderai il programma di installazione.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="98"/>
        <source>&amp;Restart now</source>
        <translation>&amp;Riavvia ora</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="52"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;Finito!&lt;/h1&gt;&lt;br/&gt;%1 è stato installato sul tuo computer.&lt;br/&gt;Ora puoi riavviare e usare il tuo nuovo sistema, oppure continuare a usare %2 dall&apos;ambiente Live.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="110"/>
        <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;Installazione Fallita&lt;/h1&gt;&lt;br/&gt;%1 non è stato installato sul tuo computer.&lt;br/&gt;Il messaggio di errore è: %2.</translation>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="59"/>
        <source>Finish</source>
        <translation>Finito</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="124"/>
        <source>Installation Complete</source>
        <translation>Installazione completata</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="125"/>
        <source>The installation of %1 is complete.</source>
        <translation>L&apos;installazione di %1 è completa.</translation>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="41"/>
        <source>Format partition %1 (file system: %2, size: %3 MB) on %4.</source>
        <translation>Formatta partizione %1 (file system: %2, dimensioni: %3 MB) su %4</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="52"/>
        <source>Format &lt;strong&gt;%3MB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Formatta la partizione &lt;strong&gt;%1&lt;/strong&gt; da &lt;strong&gt;%3MB&lt;/strong&gt; con file system &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="63"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>Sto formattando la partizione %1 con filesystem %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="77"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>Il programma di installazione non è riuscito a formattare la partizione %1 sul disco &apos;%2&apos;.</translation>
    </message>
</context>
<context>
    <name>KeyboardPage</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="220"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation>Imposta il modello di tastiera a %1.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="222"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation>Imposta il layout della tastiera a %1%2.</translation>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="50"/>
        <source>Keyboard</source>
        <translation>Tastiera</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="34"/>
        <source>System locale setting</source>
        <translation>Partizione di sistema</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="41"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>La configurazione del &quot;system locale&quot; permette di impostare la lingua e il set di caratteri utilizzati dai componenti del sistema operativo.&lt;br/&gt;L&apos;impostazione attuale è &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="66"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Annulla</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="67"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="14"/>
        <source>Form</source>
        <translation>Modulo</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="88"/>
        <source>I accept the terms and conditions above.</source>
        <translation>Accetto i termini e le condizioni sopra descritte.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="115"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation>&lt;h1&gt;Contratto di Licenza&lt;/h1&gt;Questa procedura installerà software proprietario che è soggetto a dei termini di licenza.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="118"/>
        <source>Please review the End User License Agreements (EULAs) above.&lt;br/&gt;If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation>Per favore esamina gli accordi di licenza per l&apos;utente finale (EULAs) sopra descritti.&lt;br/&gt;Se non accetti i termini di licenza, l&apos;installazione non potrà continuare.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="124"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;In case non-free was selected, this installer will install proprietary packages &lt;br/&gt;that have additional End User License Agreements (EULAs) attached to them.</source>
        <translation>&lt;h1&gt;Contratto di Licenza&lt;/h1&gt;Nel caso in cui fosse stato selezionato &quot;non-free&quot;, il programma di installazione installerà dei pacchetti proprietari &lt;br/&gt;che hanno ulteriori accordi di licenza per l&apos;utente finale (EULAs) allegati.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="127"/>
        <source>Please review the End User License Agreements (EULAs) above.&lt;br/&gt;If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation>Per favore esamina gli accordi di licenza per l&apos;utente finale (EULAs) sopra descritti.&lt;br/&gt;Se non accetti i termini di licenza, non verrà installato alcun software proprietario, e verranno usate alternative open source.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="157"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;fornito da %2</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="164"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation>&lt;strong&gt;%1 driver grafico&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;fornito da %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="170"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 plugin del browser&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;fornito da %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="176"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;fornito da %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="182"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 pacchetto&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;fornito da %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="188"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;fornito da %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="200"/>
        <source>&lt;a href=&quot;%1&quot;&gt;view license agreement&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;%1&quot;&gt;leggi i termini di licenza&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="51"/>
        <source>License</source>
        <translation>Licenza</translation>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="387"/>
        <source>The system language will be set to %1.</source>
        <translation>La lingua di sistema verrà impostata a %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="389"/>
        <source>The numbers and dates locale will be set to %1.</source>
        <translation>I numeri e la data verranno impostati a %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="215"/>
        <source>Region:</source>
        <translation>Area:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="216"/>
        <source>Zone:</source>
        <translation>Zona:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="220"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="221"/>
        <source>&amp;Change...</source>
        <translation>Modifica...</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="398"/>
        <source>Set timezone to %1/%2.&lt;br/&gt;</source>
        <translation>Imposta il fuso orario a %1%2.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="480"/>
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
        <translation>Caricamento dei dati di posizione...</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="169"/>
        <source>Location</source>
        <translation>Posizione</translation>
    </message>
</context>
<context>
    <name>PWQ</name>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="67"/>
        <source>Password is too short</source>
        <translation>La Password è troppo corta</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="89"/>
        <source>Password is too long</source>
        <translation>La Password è troppo lunga</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="155"/>
        <source>Password is too weak</source>
        <translation>Password troppo semplice</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="162"/>
        <source>Memory allocation error when setting &apos;%1&apos;</source>
        <translation>Allocazione della memoria fallita durante il settaggio di &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="166"/>
        <source>Memory allocation error</source>
        <translation>Allocazione della memoria fallita</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="168"/>
        <source>The password is the same as the old one</source>
        <translation>La password è uguale a quella vecchia</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="170"/>
        <source>The password is a palindrome</source>
        <translation>La password è una parola palindroma</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="172"/>
        <source>The password differs with case changes only</source>
        <translation>La password differisce solo per maiuscole e minuscole</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="174"/>
        <source>The password is too similar to the old one</source>
        <translation>La password è troppo simile a quella vecchia</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="176"/>
        <source>The password contains the user name in some form</source>
        <translation>La password contiene il nome utente</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="178"/>
        <source>The password contains words from the real name of the user in some form</source>
        <translation>La password contiene parole dal nome reale dell&apos;utente</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="180"/>
        <source>The password contains forbidden words in some form</source>
        <translation>La password contiene parole proibite</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="183"/>
        <source>The password contains less than %1 digits</source>
        <translation>La password contiene meno di %1 cifre</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="184"/>
        <source>The password contains too few digits</source>
        <translation>La password contiene troppe poche cifre</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="187"/>
        <source>The password contains less than %1 uppercase letters</source>
        <translation>La password contiene meno di %1 lettere maiuscole</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="188"/>
        <source>The password contains too few uppercase letters</source>
        <translation>La password contiene troppe poche lettere minuscole</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="191"/>
        <source>The password contains less than %1 lowercase letters</source>
        <translation>La password contiene meno di %1 lettere minuscole</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="192"/>
        <source>The password contains too few lowercase letters</source>
        <translation>La password contiene troppe poche lettere minuscole</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="195"/>
        <source>The password contains less than %1 non-alphanumeric characters</source>
        <translation>La password contiene meno di %1 caratteri alfanumerici</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="196"/>
        <source>The password contains too few non-alphanumeric characters</source>
        <translation>La password contiene troppi pochi caratteri non alfanumerici</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="199"/>
        <source>The password is shorter than %1 characters</source>
        <translation>La password è più corta di %1 caratteri</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="200"/>
        <source>The password is too short</source>
        <translation>La password è troppo corta</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="202"/>
        <source>The password is just rotated old one</source>
        <translation>La password è uguale alla vecchia ruotata</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="205"/>
        <source>The password contains less than %1 character classes</source>
        <translation>La password contiene meno di %1 classi di caratteri</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="206"/>
        <source>The password does not contain enough character classes</source>
        <translation>La password non contiene abbastanza classi di caratteri</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="209"/>
        <source>The password contains more than %1 same characters consecutively</source>
        <translation>La password contiene più di %1 caratteri uguali consecutivi</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="210"/>
        <source>The password contains too many same characters consecutively</source>
        <translation>La password contiene troppi caratteri uguali consecutivi</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="213"/>
        <source>The password contains more than %1 characters of the same class consecutively</source>
        <translation>La password contiene più di %1 caratteri della stessa classe consecutivi</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="214"/>
        <source>The password contains too many characters of the same class consecutively</source>
        <translation>La password contiene troppi caratteri della stessa classe consecutivi</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="217"/>
        <source>The password contains monotonic sequence longer than %1 characters</source>
        <translation>La password contiene sequenze monotone più lunghe di %1 caratteri</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="218"/>
        <source>The password contains too long of a monotonic character sequence</source>
        <translation>La password contiene una sequenza monotona di caratteri troppo lunga</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="220"/>
        <source>No password supplied</source>
        <translation>Nessuna password specificata</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="222"/>
        <source>Cannot obtain random numbers from the RNG device</source>
        <translation>Impossibile ottenere numeri casuali dal dispositivo RNG</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="224"/>
        <source>Password generation failed - required entropy too low for settings</source>
        <translation>Generazione password fallita - entropia richiesta troppo bassa</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="229"/>
        <source>The password fails the dictionary check - %1</source>
        <translation>La password ha fallito il test del dizionario - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="231"/>
        <source>The password fails the dictionary check</source>
        <translation>La password ha fallito il test del dizionario</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="235"/>
        <source>Unknown setting - %1</source>
        <translation>Impostazione sconosciuta - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="239"/>
        <source>Unknown setting</source>
        <translation>Impostazione sconosciuta</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="243"/>
        <source>Bad integer value of setting - %1</source>
        <translation>Valore intero invalido per l&apos;impostazione - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="247"/>
        <source>Bad integer value</source>
        <translation>Valore intero invalido</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="251"/>
        <source>Setting %1 is not of integer type</source>
        <translation>L&apos;impostazione %1 non è di tipo intero</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="255"/>
        <source>Setting is not of integer type</source>
        <translation>L&apos;impostazione non è di tipo intero</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="259"/>
        <source>Setting %1 is not of string type</source>
        <translation>L&apos;impostazione %1 non è di tipo stringa</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="263"/>
        <source>Setting is not of string type</source>
        <translation>L&apos;impostazione non è di tipo stringa</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="265"/>
        <source>Opening the configuration file failed</source>
        <translation>Errore durante l&apos;apertura del file di configurazione</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="267"/>
        <source>The configuration file is malformed</source>
        <translation>Il file di configurazione è mal formattato</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="269"/>
        <source>Fatal failure</source>
        <translation>Errore fatale</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="271"/>
        <source>Unknown error</source>
        <translation>Errore sconosciuto</translation>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="14"/>
        <source>Form</source>
        <translation>Modulo</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="70"/>
        <source>Keyboard Model:</source>
        <translation>Modello della tastiera:</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="131"/>
        <source>Type here to test your keyboard</source>
        <translation>Digita qui per provare la tastiera</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="14"/>
        <source>Form</source>
        <translation>Modulo</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="36"/>
        <source>What is your name?</source>
        <translation>Qual&apos;è il tuo nome?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="117"/>
        <source>What name do you want to use to log in?</source>
        <translation>Che nome vuoi usare per autenticarti?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="306"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="437"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="582"/>
        <source>font-weight: normal</source>
        <translation>Dimensione font: normale</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="200"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can set up multiple accounts after installation.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Se più utenti useranno questo computer, puoi impostare altri account dopo l&apos;installazione.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="335"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Scegli una password per rendere sicuro il tuo account.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="440"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Inserisci la password due volte per controllare eventuali errori di battitura. Una buona password contiene lettere, numeri e segni di punteggiatura. Deve essere lunga almeno otto caratteri e dovrebbe essere cambiata a intervalli regolari.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="226"/>
        <source>What is the name of this computer?</source>
        <translation>Qual è il nome di questo computer?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="309"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Questo nome sarà usato se rendi visibile il computer ad altre persone in una rete.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="450"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>Esegui il log in automatico senza richiedere la password.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="457"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Usa la stessa password per l&apos;account amministratore</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="480"/>
        <source>Choose a password for the administrator account.</source>
        <translation>Scegli una password per l&apos;account dell&apos;amministratore.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="585"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Inserisci la password due volte per controllare eventuali errori di battitura.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="193"/>
        <source>Root</source>
        <translation>Radice</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="196"/>
        <source>Home</source>
        <translation>Home</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="198"/>
        <source>Boot</source>
        <translation>Boot</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="201"/>
        <source>EFI system</source>
        <translation>Sistema EFI</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="203"/>
        <source>Swap</source>
        <translation>Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="205"/>
        <source>New partition for %1</source>
        <translation>Nuova partizione per %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="207"/>
        <source>New partition</source>
        <translation>Nuova partizione</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="224"/>
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
        <translation>Spazio disponibile</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="141"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="173"/>
        <source>New partition</source>
        <translation>Nuova partizione</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="257"/>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="259"/>
        <source>File System</source>
        <translation>File System</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="261"/>
        <source>Mount Point</source>
        <translation>Punto di mount</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="263"/>
        <source>Size</source>
        <translation>Dimensione</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="14"/>
        <source>Form</source>
        <translation>Modulo</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="22"/>
        <source>Storage de&amp;vice:</source>
        <translation>Dispositi&amp;vo:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="51"/>
        <source>&amp;Revert All Changes</source>
        <translation>&amp;Annulla tutte le modifiche</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="87"/>
        <source>New Partition &amp;Table</source>
        <translation>Nuova &amp;Tabella delle partizioni</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="107"/>
        <source>&amp;Create</source>
        <translation>&amp;Crea</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="114"/>
        <source>&amp;Edit</source>
        <translation>&amp;Modifica</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="121"/>
        <source>&amp;Delete</source>
        <translation>&amp;Cancella</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="148"/>
        <source>Install boot &amp;loader on:</source>
        <translation>Installa il boot &amp;loader su:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="168"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>Sei sicuro di voler creare una nuova tabella delle partizioni su %1?</translation>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="70"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="70"/>
        <source>Gathering system information...</source>
        <translation>Raccolta delle informazioni di sistema...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="121"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="121"/>
        <source>Partitions</source>
        <translation>Partizioni</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="158"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="158"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system.</source>
        <translation>Installa %1 &lt;strong&gt;al fianco&lt;/strong&gt; di un altro sistema operativo.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="162"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="163"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk and install %1.</source>
        <translation>&lt;strong&gt;Cancella&lt;/strong&gt; il disco e installa %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="166"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="168"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition with %1.</source>
        <translation>&lt;strong&gt;Sostituisci&lt;/strong&gt; una partizione con %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="171"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="173"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning.</source>
        <translation>Partizionamento &lt;strong&gt;Manuale&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="184"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="186"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system on disk &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Installa %1 &lt;strong&gt;al fianco&lt;/strong&gt; di un altro sistema operativo sul disco &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="190"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="193"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) and install %1.</source>
        <translation>&lt;strong&gt;Cancella&lt;/strong&gt; il disco &lt;strong&gt;%2&lt;/strong&gt; (%3) e installa %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="196"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="200"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition on disk &lt;strong&gt;%2&lt;/strong&gt; (%3) with %1.</source>
        <translation>&lt;strong&gt;Sostituisci&lt;/strong&gt; una partizione sul disco &lt;strong&gt;%2&lt;/strong&gt; (%3) con %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="203"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="207"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning on disk &lt;strong&gt;%1&lt;/strong&gt; (%2).</source>
        <translation>Partizionamento &lt;strong&gt;manuale&lt;/strong&gt; sul disco &lt;strong&gt;%1&lt;/strong&gt; (%2).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="211"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="215"/>
        <source>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
        <translation>Disco &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="239"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="243"/>
        <source>Current:</source>
        <translation>Attuale:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="256"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="261"/>
        <source>After:</source>
        <translation>Dopo:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="403"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="405"/>
        <source>No EFI system partition configured</source>
        <translation>Nessuna partizione di sistema EFI configurata</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="404"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="406"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a FAT32 filesystem with the &lt;strong&gt;esp&lt;/strong&gt; flag enabled and mount point &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation>E&apos; necessaria una partizione di sistema EFI per avviare %1.&lt;br/&gt;&lt;br/&gt;Per configurare una partizione di sistema EFI, torna indietro e seleziona o crea una partizione con filesystem FAT32 con la flag &lt;strong&gt;esp&lt;/strong&gt; attivata e punto di montaggio &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;Puoi continuare anche senza configurare una partizione di sistema EFI ma il tuo sistema potrebbe non avviarsi.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="417"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="420"/>
        <source>EFI system partition flag not set</source>
        <translation>Flag della partizione di sistema EFI non impostata.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="418"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="421"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;A partition was configured with mount point &lt;strong&gt;%2&lt;/strong&gt; but its &lt;strong&gt;esp&lt;/strong&gt; flag is not set.&lt;br/&gt;To set the flag, go back and edit the partition.&lt;br/&gt;&lt;br/&gt;You can continue without setting the flag but your system may fail to start.</source>
        <translation>E&apos; necessaria una partizione di sistema EFI per avviare %1.&lt;br/&gt;&lt;br/&gt;E&apos; stata configurata una partizione con punto di montaggio &lt;strong&gt;%2&lt;/strong&gt; ma la sua flag &lt;strong&gt;esp&lt;/strong&gt; non è stata impostata.&lt;br/&gt;Per impostare la flag, torna indietro e modifica la partizione.&lt;br/&gt;&lt;br/&gt;Puoi continuare anche senza impostare la flag ma il suo sistema potrebbe non avviarsi.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="449"/>
        <source>Option to use GPT on BIOS</source>
        <translation>Opzione per usare GPT su BIOS</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="450"/>
        <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partion table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;bios_grub&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
        <translation>Una tabella delle partizioni GPT è l&apos;opzione migliore per tutti i sistemi. Il programma di installazione supporta tale configurazione anche per sistemi BIOS.&lt;br/&gt;&lt;br/&gt;Per configurare una tabella delle partizioni GPT sul BIOS, (se non lo hai già fatto) torna indietro e imposta la tabella delle partizioni a GPT, poi crea una partizione non formattata da 8MB con la flag &lt;strong&gt;bios_grub&lt;/strong&gt; impostata.&lt;br/&gt;&lt;br/&gt;Una partizione da 8 MB non formattata è necessaria per avviare %1 da sistemi BIOS con tabella delle partizioni GPT.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="485"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="456"/>
        <source>Boot partition not encrypted</source>
        <translation>Partizione di avvio non cifrata</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="486"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="457"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation>E&apos; stata impostata una partizione di avvio separata insieme ad una partizione di sistema cifrata, ma la partizione di avvio non è cifrata.&lt;br/&gt;&lt;br/&gt;Ci sono problemi di sicurezza legati a questo tipo di configurazione, perché file di sistema importanti sono tenuti su una partizione non cifrata. &lt;br/&gt;Puoi continuare se vuoi, ma lo sbloccaggio del filesystem avverrà in seguito, durante l&apos;avvio del sistema.&lt;br/&gt; Per cifrare la partizione di avvio, torna indietro e ricreala, selezionando &lt;strong&gt;Cifra&lt;/strong&gt; nella finestra di creazione delle partizioni.</translation>
    </message>
</context>
<context>
    <name>PlasmaLnfJob</name>
    <message>
        <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="41"/>
        <source>Plasma Look-and-Feel Job</source>
        <translation>Operazione Plasma Look-and-Feel</translation>
    </message>
    <message>
        <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="73"/>
        <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="74"/>
        <source>Could not select KDE Plasma Look-and-Feel package</source>
        <translation>Impossibile selezionare il pacchetto KDE Plasma Look-and-Feel</translation>
    </message>
</context>
<context>
    <name>PlasmaLnfPage</name>
    <message>
        <location filename="../src/modules/plasmalnf/page_plasmalnf.ui" line="14"/>
        <source>Form</source>
        <translation>Modulo</translation>
    </message>
    <message>
        <location filename="../src/modules/plasmalnf/page_plasmalnf.ui" line="20"/>
        <source>Placeholder</source>
        <translation>Segnaposto</translation>
    </message>
    <message>
        <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="64"/>
        <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is installed.</source>
        <translation>Seleziona un tema per il desktop KDE Plasma. Puoi saltare questo passaggio e selezionare un tema una volta che il sistema è stato avviato.</translation>
    </message>
</context>
<context>
    <name>PlasmaLnfViewStep</name>
    <message>
        <location filename="../src/modules/plasmalnf/PlasmaLnfViewStep.cpp" line="51"/>
        <source>Look-and-Feel</source>
        <translation>Look-and-Feel</translation>
    </message>
</context>
<context>
    <name>ProcessResult</name>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="263"/>
        <source>
There was no output from the command.</source>
        <translation>Nessun output dal comando</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="264"/>
        <source>
Output:
</source>
        <translation>
Output:
</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="267"/>
        <source>External command crashed.</source>
        <translation>Il comando esterno si è arrestato improvvisamente.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="268"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
        <translation>Il comando esterno &lt;i&gt;%1&lt;/i&gt; si è arrestato improvvisamente.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="273"/>
        <source>External command failed to start.</source>
        <translation>Impossibile avviare il comando esterno.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="274"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
        <translation>Impossibile avviare il comando esterno &lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="278"/>
        <source>Internal error when starting command.</source>
        <translation>Errore interno all&apos;avvio del comando.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="279"/>
        <source>Bad parameters for process job call.</source>
        <translation>Parametri errati per elaborare l&apos;attività richiesta.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="282"/>
        <source>External command failed to finish.</source>
        <translation>Il comando esterno non è stato portato a termine.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="283"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
        <translation>Il comando &lt;i&gt;%1&lt;/i&gt; non è stato portato a termine in %2 secondi.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="289"/>
        <source>External command finished with errors.</source>
        <translation>Il comando esterno è terminato con errori.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="290"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
        <translation>Il comando &lt;i&gt;%1&lt;/i&gt; è terminato con codice di uscita %2.</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="82"/>
        <source>Default Keyboard Model</source>
        <translation>Modello tastiera di default</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="127"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="163"/>
        <source>Default</source>
        <translation>Default</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="49"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>Spazio non partizionato o tabella delle partizioni sconosciuta</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="206"/>
        <source>unknown</source>
        <translation>sconosciuto</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="208"/>
        <source>extended</source>
        <translation>estesa</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="210"/>
        <source>unformatted</source>
        <translation>non formattata</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="212"/>
        <source>swap</source>
        <translation>swap</translation>
    </message>
</context>
<context>
    <name>ReplaceWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="14"/>
        <source>Form</source>
        <translation>Modulo</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="134"/>
        <source>Select where to install %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
        <translation>Seleziona dove installare %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Attenzione: &lt;/font&gt;questa operazione cancellerà tutti i file sulla partizione selezionata.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="160"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>L&apos;oggetto selezionato non sembra una partizione valida.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="168"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1 non può essere installato su uno spazio vuoto. Selezionare una partizione esistente.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="178"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1 non può essere installato su una partizione estesa. Selezionare una partizione primaria o una partizione logica esistente.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="188"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>%1 non può essere installato su questa partizione.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="194"/>
        <source>Data partition (%1)</source>
        <translation>Partizione Dati (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="211"/>
        <source>Unknown system partition (%1)</source>
        <translation>Partizione di sistema sconosciuta (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="216"/>
        <source>%1 system partition (%2)</source>
        <translation>%1 partizione di sistema (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="227"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;La partizione %1 è troppo piccola per %2. Selezionare una partizione di dimensione non inferiore a  %3 GiB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="250"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Impossibile trovare una partizione di sistema EFI su questo sistema. Torna indietro e usa il partizionamento manuale per impostare %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="261"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="278"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="302"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 sarà installato su %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Attenzione: &lt;/font&gt;tutti i dati sulla partizione %2 andranno persi.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="270"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>La partizione di sistema EFI su %1 sarà usata per avviare %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="286"/>
        <source>EFI system partition:</source>
        <translation>Partizione di sistema EFI:</translation>
    </message>
</context>
<context>
    <name>RequirementsChecker</name>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="68"/>
        <source>Gathering system information...</source>
        <translation>Raccolta informazioni sul sistema...</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="116"/>
        <source>has at least %1 GB available drive space</source>
        <translation>ha almeno %1 GB di spazio libero</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="118"/>
        <source>There is not enough drive space. At least %1 GB is required.</source>
        <translation>Non c&apos;è abbastanza spazio sul dispositivo. Sono richiesti almeno %1 GB.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="126"/>
        <source>has at least %1 GB working memory</source>
        <translation>ha almeno %1 GB di memoria RAM</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="128"/>
        <source>The system does not have enough working memory. At least %1 GB is required.</source>
        <translation>Il sistema non ha abbastanza memoria RAM. Sono richiesti almeno %1 GB.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="136"/>
        <source>is plugged in to a power source</source>
        <translation>è collegato a una presa di alimentazione</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="137"/>
        <source>The system is not plugged in to a power source.</source>
        <translation>Il sistema non è collegato a una presa di alimentazione.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="144"/>
        <source>is connected to the Internet</source>
        <translation>è connesso a Internet</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="145"/>
        <source>The system is not connected to the Internet.</source>
        <translation>Il sistema non è connesso a Internet.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="153"/>
        <source>The installer is not running with administrator rights.</source>
        <translation>Il programma di installazione non è stato avviato con diritti di amministratore.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="161"/>
        <source>The screen is too small to display the installer.</source>
        <translation>Lo schermo è troppo piccolo per poter mostrare il programma di installazione.</translation>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="48"/>
        <source>Resize partition %1.</source>
        <translation>Ridimensiona partizione %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="55"/>
        <source>Resize &lt;strong&gt;%2MB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MB&lt;/strong&gt;.</source>
        <translation>Ridimensiona la partizione da &lt;strong&gt;%2MB&lt;/strong&gt;  &lt;strong&gt;%1&lt;/strong&gt; a &lt;strong&gt;%3MB&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="66"/>
        <source>Resizing %2MB partition %1 to %3MB.</source>
        <translation>Ridimensionamento della partizione %1 da %2MB a %3MB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="85"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>Il programma di installazione non è riuscito a ridimensionare la partizione %1 sul disco &apos;%2&apos;.</translation>
    </message>
</context>
<context>
    <name>ScanningDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="84"/>
        <source>Scanning storage devices...</source>
        <translation>Scansione dei dispositivi...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="85"/>
        <source>Partitioning</source>
        <translation>Partizionamento</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="37"/>
        <source>Set hostname %1</source>
        <translation>Imposta hostname %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="44"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Imposta hostname &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="51"/>
        <source>Setting hostname %1.</source>
        <translation>Configurazione hostname %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="61"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="68"/>
        <source>Internal Error</source>
        <translation>Errore interno</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="75"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="86"/>
        <source>Cannot write hostname to target system</source>
        <translation>Impossibile scrivere l&apos;hostname nel sistema di destinazione</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="59"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>Impostazione del modello di tastiera da %1, a %2-%3</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="318"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>Non è possibile impostare la configurazione della tastiera per la virtual console.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="319"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="323"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="329"/>
        <source>Failed to write to %1</source>
        <translation>Non è possibile scrivere su  %1</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="322"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>Non è possibile scrivere la configurazione della tastiera per X11.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="328"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <translation>Impossibile scrivere la configurazione della tastiera nella cartella esistente /etc/default .</translation>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="49"/>
        <source>Set flags on partition %1.</source>
        <translation>Configurazione flags sulla partizione %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="52"/>
        <source>Set flags on %1MB %2 partition.</source>
        <translation>Configurazione flag sulla partizione %2 da %1MB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="56"/>
        <source>Set flags on new partition.</source>
        <translation>Configurazione flags sulla nuova partizione.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="67"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Pulizia flags sulla partizione &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
        <source>Clear flags on %1MB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Pulizia flags sulla partizione &lt;strong&gt;%2&lt;/strong&gt; da %1MB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="75"/>
        <source>Clear flags on new partition.</source>
        <translation>Pulizia flags sulla nuova partizione.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="79"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Configurazione partizione &lt;strong&gt;%1&lt;/strong&gt; come &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="85"/>
        <source>Flag %1MB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>Configurazione partizione &lt;strong&gt;%2&lt;/strong&gt; da %1MB come &lt;strong&gt;%3&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="91"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Configura nuova partizione come &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="103"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Pulizia flags sulla partizione &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="107"/>
        <source>Clearing flags on %1MB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Pulizia flags sulla partizione &lt;strong&gt;%2&lt;/strong&gt; da %1MB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="111"/>
        <source>Clearing flags on new partition.</source>
        <translation>Pulizia flags sulla nuova partizione.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="115"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Configurazione flags &lt;strong&gt;%2&lt;/strong&gt; sulla partizione &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="121"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Configurazione flags &lt;strong&gt;%3&lt;/strong&gt; sulla partizione &lt;strong&gt;%2&lt;/strong&gt; da %1MB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="127"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation>Configurazione flag &lt;strong&gt;%1&lt;/strong&gt; sulla nuova partizione.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="140"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation>Il programma di installazione non è riuscito a configurare le flags sulla partizione %1.</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="48"/>
        <source>Set password for user %1</source>
        <translation>Imposta la password per l&apos;utente %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="55"/>
        <source>Setting password for user %1.</source>
        <translation>Configurazione password per l&apos;utente %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="112"/>
        <source>Bad destination system path.</source>
        <translation>Percorso di destinazione del sistema errato.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="113"/>
        <source>rootMountPoint is %1</source>
        <translation>punto di mount per root è %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="123"/>
        <source>Cannot disable root account.</source>
        <translation>Impossibile disabilitare account amministratore.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="124"/>
        <source>passwd terminated with error code %1.</source>
        <translation>passwd si è chiuso con codice di errore %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="139"/>
        <source>Cannot set password for user %1.</source>
        <translation>Impossibile impostare la password per l&apos;utente %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="141"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod si è chiuso con codice di errore %1.</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="43"/>
        <source>Set timezone to %1/%2</source>
        <translation>Imposta il fuso orario su %1%2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot access selected timezone path.</source>
        <translation>Impossibile accedere al percorso della timezone selezionata.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Bad path: %1</source>
        <translation>Percorso errato: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="86"/>
        <source>Cannot set timezone.</source>
        <translation>Impossibile impostare il fuso orario.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="87"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>Creazione del collegamento non riuscita, destinazione: %1; nome collegamento: %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="96"/>
        <source>Cannot set timezone,</source>
        <translation>Impossibile impostare il fuso orario.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="97"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>Impossibile aprire /etc/timezone in scrittura</translation>
    </message>
</context>
<context>
    <name>SummaryPage</name>
    <message>
        <location filename="../src/modules/summary/SummaryPage.cpp" line="49"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation>Questa è una panoramica di cosa accadrà una volta che si avvia la procedura di installazione.</translation>
    </message>
</context>
<context>
    <name>SummaryViewStep</name>
    <message>
        <location filename="../src/modules/summary/SummaryViewStep.cpp" line="43"/>
        <source>Summary</source>
        <translation>Riepilogo</translation>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="289"/>
        <source>Your username is too long.</source>
        <translation>Il nome utente è troppo lungo.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="295"/>
        <source>Your username contains invalid characters. Only lowercase letters and numbers are allowed.</source>
        <translation>Il nome utente contiene caratteri non validi. Sono ammessi solo lettere minuscole e numeri.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="333"/>
        <source>Your hostname is too short.</source>
        <translation>Il nome del computer è troppo corto.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="339"/>
        <source>Your hostname is too long.</source>
        <translation>Il nome del computer è troppo lungo.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="345"/>
        <source>Your hostname contains invalid characters. Only letters, numbers and dashes are allowed.</source>
        <translation>Il nome del computer contiene caratteri non validi. Sono ammessi solo lettere, numeri e trattini. </translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="373"/>
        <location filename="../src/modules/users/UsersPage.cpp" line="417"/>
        <source>Your passwords do not match!</source>
        <translation>Le tue password non corrispondono!</translation>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="51"/>
        <source>Users</source>
        <translation>Utenti</translation>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="14"/>
        <source>Form</source>
        <translation>Modulo</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="75"/>
        <source>&amp;Language:</source>
        <translation>&amp;Lingua</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="250"/>
        <source>&amp;Release notes</source>
        <translation>&amp;Note di rilascio</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="240"/>
        <source>&amp;Known issues</source>
        <translation>&amp;Problemi noti</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="193"/>
        <source>&amp;Support</source>
        <translation>&amp;Supporto</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="183"/>
        <source>&amp;About</source>
        <translation>%About</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="60"/>
        <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Benvenuto nel programma di installazione %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="60"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Benvenuto nel programma di installazione Calamares per %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="73"/>
        <source>About %1 installer</source>
        <translation>Riguardo l&apos;installer di %1</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="75"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Thanks to: Anke Boersma, Aurélien Gâteau, Kevin Kofler, Lisa Vitolo, Philip Müller, Pier Luigi Fiorini, Rohan Garg and the &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Grazie a: Anke Boersma, Aurélien Gâteau, Kevin Kofler, Lisa Vitolo, Philip Müller, Pier Luigi Fiorini, Rohan Garg and the &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;il team di traduttori di KaOS&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;Lo sviluppo di &lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; è sponsorizzato da &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="201"/>
        <source>%1 support</source>
        <translation>1% supporto</translation>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="51"/>
        <source>Welcome</source>
        <translation>Benvenuto</translation>
    </message>
</context>
<context>
    <name>show</name>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="47"/>
        <source>Here the actual install of KaOS will start.&lt;br/&gt;Use the left &lt;b&gt;mouse button&lt;/b&gt; to go to the next slide, right for previous.&lt;br/&gt;After creating your chosen disk setup in the first 10 % &lt;br/&gt;the full copying of the ISO will take the longest of this install phase &lt;br/&gt;and will run until approximately 30%.&lt;br/&gt;</source>
        <translation>Quì inizierà l&apos;installazione vera e propria di KaOS.&lt;br/&gt;Usa il pulsante sinistro del &lt;b&gt;mouse&lt;/b&gt; per andare alla slide successiva, il destro per la precedente.&lt;br/&gt;Dopo aver configurato il disco nella prima parte, circa il 10%, &lt;br/&gt;la copia dell&apos;intera ISO impiegherà la maggior parte del tempo e verrà eseguita fino a circa il 30%.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="73"/>
        <source>After the ISO is copied some 25 post-install modules will run.&lt;br/&gt;This includes setting user specific options, &lt;br/&gt;removing Live Session only packages&lt;br/&gt;and adjusting hardware setup.&lt;br/&gt;</source>
        <translation>Dopo che sarà stata copiata la ISO, verranno avviati circa 25 moduli di post-installazione.&lt;br/&gt;Questa fase si occuperà di impostare opzioni specifiche per utente, &lt;br/&gt;rimuovere pacchetti della sessione Live&lt;br/&gt;e configurare l&apos;hardware&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="98"/>
        <source>The default Office Suite is Calligra.&lt;br/&gt;LibreOffice is available in the repositories. &lt;br/&gt;</source>
        <translation>La suite di ufficio predefinita è Calligra.&lt;br/&gt;LibreOffice è disponibile nei repository. &lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="121"/>
        <source>Qt/KDE specific internet applications include the &lt;br/&gt;Qupzilla web-browser and kde-telepathy for &lt;br/&gt;chat and Instant Messaging. &lt;br/&gt;</source>
        <translation>Applicazioni internet specifiche Qt/KDE includono &lt;br/&gt;il browser web Qupzilla e kde-telepathy per &lt;br/&gt; la chat e la messaggistica istantanea.</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="145"/>
        <source>For package management Octopi is the GUI application.&lt;br/&gt;</source>
        <translation>L&apos;applicazione con interfaccia grafica per la gestione dei pacchetti è Octopi.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="167"/>
        <source>May using KaOS be a pleasant experience for you.</source>
        <translation>Possa KaOS regalarti un&apos;esperienza piacevole.</translation>
    </message>
</context>
</TS>