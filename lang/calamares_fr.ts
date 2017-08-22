<?xml version="1.0" ?><!DOCTYPE TS><TS language="fr" version="2.1">
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="61"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>L’&lt;strong&gt;environnement de démarrage&lt;/strong&gt; de ce système.&lt;br&gt;&lt;br&gt;Les vieux systèmes x86 supportent uniquement &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Les systèmes modernes utilisent généralement &lt;strong&gt;EFI&lt;/strong&gt; mais peuvent aussi se présenter comme BIOS si l’environnement de démarrage fonctionne en mode compatibilité.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="75"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>Ce système a été démarré avec un environnement de démarrage &lt;strong&gt;EFI&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Pour démarrer depuis une environnement de démarrage EFI, cet installateur doit déployer une application de démarrage, comme &lt;strong&gt;GRUB&lt;/strong&gt; ou &lt;strong&gt;systemd-boot&lt;/strong&gt; sur une &lt;strong&gt;partition système EFI&lt;/strong&gt;. C’est automatique, à moins que vous ne choisissiez le partitionnement manuel, et dans ce cas, vous devez le choisir ou le créer.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="87"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>Ce système a été démarré avec un environnement de démarrage &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Pour démarrer depuis un environnement BIOS, cet installateur doit installer un chargeur de démarrage, comme &lt;strong&gt;GRUB&lt;/strong&gt;, soit au début de la partition, soit sur le &lt;strong&gt;Master Boot Record&lt;/strong&gt; au tout début à côté de la table de partitions (préféré). C’est automatique, à moins que vous ne choisissiez le partitionnement manuel, et dans ce cas, vous devez le choisir ou le créer.</translation>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="59"/>
        <source>Master Boot Record of %1</source>
        <translation>Master Boot Record de %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="76"/>
        <source>Boot Partition</source>
        <translation>Partition de démarrage</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="81"/>
        <source>System Partition</source>
        <translation>Partition Système</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="111"/>
        <source>Do not install a boot loader</source>
        <translation>Ne pas installer le chargeur de démarrage</translation>
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
        <translation>GlobalStorage</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="34"/>
        <source>JobQueue</source>
        <translation>JobQueue</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="44"/>
        <source>Modules</source>
        <translation>Modules</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="57"/>
        <source>Type:</source>
        <translation>Type :</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="64"/>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="78"/>
        <source>none</source>
        <translation>aucun</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="71"/>
        <source>Interface:</source>
        <translation>Interface :</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="93"/>
        <source>Tools</source>
        <translation>Outils</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.cpp" line="182"/>
        <source>Debug information</source>
        <translation>Informations de débogage</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/ExecutionViewStep.cpp" line="77"/>
        <source>Install</source>
        <translation>Installer</translation>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="89"/>
        <source>Done</source>
        <translation>Fait</translation>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="51"/>
        <source>Run command %1 %2</source>
        <translation>Exécuter la commande %1 %2</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="60"/>
        <source>Running command %1 %2</source>
        <translation>Exécution de la commande %1 %2</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="89"/>
        <source>External command crashed</source>
        <translation>La commande externe a échoué</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="90"/>
        <source>Command %1 crashed.
Output:
%2</source>
        <translation>La commande %1 a échoué.
Sortie :
%2</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="95"/>
        <source>External command failed to start</source>
        <translation>La commande externe n&apos;a pu être lancée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="96"/>
        <source>Command %1 failed to start.</source>
        <translation>La commande %1 n&apos;a pu être lancée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="100"/>
        <source>Internal error when starting command</source>
        <translation>Erreur interne au lancement de la commande</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="101"/>
        <source>Bad parameters for process job call.</source>
        <translation>Mauvais paramètres pour l&apos;appel au processus de job.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="104"/>
        <source>External command failed to finish</source>
        <translation>La commande externe ne s&apos;est pas terminée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="105"/>
        <source>Command %1 failed to finish in %2s.
Output:
%3</source>
        <translation>La commande %1 ne s&apos;est pas terminée en %2s.
Sortie :
%3</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="111"/>
        <source>External command finished with errors</source>
        <translation>La commande externe s&apos;est terminée avec des erreurs</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="112"/>
        <source>Command %1 finished with exit code %2.
Output:
%3</source>
        <translation>La commande %1 s&apos;est terminée avec le code de sortie %2.
Sortie :
%3</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="265"/>
        <source>Running %1 operation.</source>
        <translation>Opération %1 lancée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="280"/>
        <source>Bad working directory path</source>
        <translation>Chemin du répertoire de travail invalide</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="281"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>Le répertoire de travail %1 pour le job python %2 n&apos;est pas accessible en lecture.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="291"/>
        <source>Bad main script file</source>
        <translation>Fichier de script principal invalide</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="292"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>Le fichier de script principal %1 pour la tâche python %2 n&apos;est pas accessible en lecture.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="368"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>Erreur Boost.Python pour le job &quot;%1&quot;.</translation>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="73"/>
        <source>&amp;Back</source>
        <translation>&amp;Précédent</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="74"/>
        <source>&amp;Next</source>
        <translation>&amp;Suivant</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="75"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="309"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuler</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="76"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="310"/>
        <source>Cancel installation without changing the system.</source>
        <translation>Annuler l’installation sans changer le système.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="99"/>
        <source>Cancel installation?</source>
        <translation>Annuler l&apos;installation ?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="100"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>Voulez-vous réellement annuler l&apos;installation en cours ?
L&apos;installateur va fermer et tous les changements seront perdus.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="105"/>
        <source>&amp;Yes</source>
        <translation>&amp;Oui</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="106"/>
        <source>&amp;No</source>
        <translation>&amp;Non</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="186"/>
        <source>&amp;Close</source>
        <translation>&amp;Fermer</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="238"/>
        <source>Continue with setup?</source>
        <translation>Continuer avec cette configuration ?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="239"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>L’installateur %1 s’apprête à effectuer des changement sur votre disque pour installer %2.&lt;br/&gt;&lt;strong&gt;Vous ne pourrez pas annuler ces changements.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="244"/>
        <source>&amp;Install now</source>
        <translation>&amp;Installer maintenant</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="245"/>
        <source>Go &amp;back</source>
        <translation>&amp;Revenir en arrière</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="276"/>
        <source>&amp;Done</source>
        <translation>&amp;Terminé</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="277"/>
        <source>The installation is complete. Close the installer.</source>
        <translation>L’installation est complète. Vous pouvez fermer l’installateur.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="183"/>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="184"/>
        <source>Installation Failed</source>
        <translation>Installation échouée</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="263"/>
        <source>Unknown exception type</source>
        <translation>Type d&apos;exception inconnu</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="276"/>
        <source>unparseable Python error</source>
        <translation>Erreur Python non analysable</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="292"/>
        <source>unparseable Python traceback</source>
        <translation>Traçage Python non exploitable</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="296"/>
        <source>Unfetchable Python error.</source>
        <translation>Erreur Python non rapportable.</translation>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="45"/>
        <source>%1 Installer</source>
        <translation>Installateur %1</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="112"/>
        <source>Show debug information</source>
        <translation>Afficher les informations de débogage</translation>
    </message>
</context>
<context>
    <name>CheckFileSystemJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CheckFileSystemJob.cpp" line="39"/>
        <source>Checking file system on partition %1.</source>
        <translation>Vérification du système de fichiers sur la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CheckFileSystemJob.cpp" line="77"/>
        <source>The file system check on partition %1 failed.</source>
        <translation>La vérification du système de fichiers sur la partition %1 a échoué.</translation>
    </message>
</context>
<context>
    <name>CheckerWidget</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="96"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>Cet ordinateur ne satisfait pas les conditions requises pour installer %1.&lt;br/&gt;L’installation ne peut pas continuer.&lt;a href=&quot;#details&quot;&gt;Détails…&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="113"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation>Cet ordinateur ne satisfait pas les conditions requises pour installer %1.&lt;br/&gt;L’installation peut continuer, mais certaines fonctionnalités peuvent être désactivées.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="151"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation>Ce programme va vous poser des questions et configurer %2 sur votre ordinateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="174"/>
        <source>For best results, please ensure that this computer:</source>
        <translation>Pour les meilleurs résultats, assurez-vous que cet ordinateur :</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="202"/>
        <source>System requirements</source>
        <translation>Prérequis du système</translation>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="128"/>
        <source>After:</source>
        <translation>Après :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1179"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1216"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1238"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1274"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;Effacer le disque&lt;/strong&gt;&lt;br/&gt;Cela va&lt;font color=&quot;red&quot;&gt;supprimer&lt;/font&gt; toutes les données présentes dans le périphérique de stockage.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1183"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1212"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1234"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1270"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;Installer à côté&lt;/strong&gt;&lt;br/&gt;L’installateur va rétrécir le volume pour faire de la place pour %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1187"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1221"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1242"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1278"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;Remplacer une partition&lt;/strong&gt;&lt;br/&gt; Remplace une partition avec %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="974"/>
        <source>Boot loader location:</source>
        <translation>Emplacement du chargeur de démarrage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="126"/>
        <source>Select storage de&amp;vice:</source>
        <translation>Sélectionner le pé&amp;riphérique de stockage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="127"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="900"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="946"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1025"/>
        <source>Current:</source>
        <translation>Actuel :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="235"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself. Having a GPT partition table and &lt;strong&gt;fat32 512Mb /boot partition is a must for UEFI installs&lt;/strong&gt;, either use an existing without formatting or create one.</source>
        <translation>&lt;strong&gt;Partitionnement manuel&lt;/strong&gt;&lt;br/&gt;Vous pouvez créer ou redimensionner les partitions vous-même. En ayant une table de partitions GPT et &lt;strong&gt;une partition /boot fat32 512Mo est l’idéal pour les installations UEFI&lt;/strong&gt;, ou bien pour utiliser une partition existante sans formater ou encore en créer une.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="778"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>Utiliser %1 comme partition home pour %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="901"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Sélectionner la partition à rétrécir, puis glisser sur la barre du bas pour modifier la taille&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="918"/>
        <source>%1 will be shrunk to %2MB and a new %3MB partition will be created for %4.</source>
        <translation>%1 va être rétrécie à %2Mo et une nouvolle partition de %3Mo sera créée pour %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1016"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Sélectionner la partition d’installation&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1072"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>Aucune partition système EFI n’a pu être trouvée sur ce système. Veuillez recommencer et utiliser le partitionnement manuel pour configurer %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1081"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>La partition système EFI %1 sera utilisée pour démarrer %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1089"/>
        <source>EFI system partition:</source>
        <translation>Partition système EFI :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1174"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ce périphérique de stockage ne semble pas avoir de système d’exploitation. Que voulez-vous faire ?&lt;br/&gt;Vous pourrez vérifier et confirmer vos choix avant que les changements soient appliqués sur ce périphérique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1206"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ce périphérique de stockage contient %1. Que voulez-vous faire ?&lt;br/&gt;Vous pourrez vérifier et confirmer vos choix avant que les changements soient appliqués sur ce périphérique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1229"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ce périphérique de stockage contient un système d’exploitation. Que voulez-vous faire ?&lt;br/&gt;Vous pourrez vérifier et confirmer vos choix avant que les changements soient appliqués sur ce périphérique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1265"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ce périphérique de stockage a plusieurs systèmes d’exploitation. Que voulez-vous faire ?&lt;br/&gt;Vous pourrez vérifier et confirmer vos choix avant que les changements soient appliqués sur ce périphérique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
</context>
<context>
    <name>ClearMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="45"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>Effacer les montages pour les opérations de partitionnement sur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="53"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>Effacement des montages pour les opérations de partitionnement sur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="190"/>
        <source>Cleared all mounts for %1</source>
        <translation>Tous les les partitions sont démontées pour %1</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="42"/>
        <source>Clear all temporary mounts.</source>
        <translation>Effacer tous les montages temporaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="49"/>
        <source>Clearing all temporary mounts.</source>
        <translation>Effacement tous les montages temporaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="60"/>
        <source>Cannot get list of temporary mounts.</source>
        <translation>Impossible de récupérer la liste des points de montage temporaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="99"/>
        <source>Cleared all temporary mounts.</source>
        <translation>Tous les montages temporaires ont été effacés.</translation>
    </message>
</context>
<context>
    <name>CrashReporter</name>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.ui" line="29"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.ui" line="29"/>
        <source>Tomahawk Crash Reporter</source>
        <translation>Outil de rapport de crash Tomahawk</translation>
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
        <translation>Annuler</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.ui" line="257"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.ui" line="156"/>
        <source>Send this report</source>
        <translation>Envoyer ce rappert</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.ui" line="264"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.ui" line="163"/>
        <source>Don&apos;t send</source>
        <translation>Ne pas envoyer</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.ui" line="284"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.ui" line="258"/>
        <source>You can disable sending crash reports in the configuration dialog.</source>
        <translation>Vous pouvez désactiver l’envoi de rapport de crash dans la boîte de dialogue de configuration.</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="107"/>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="114"/>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="150"/>
        <source>We cannot gather useful debug information on your system.</source>
        <translation>Aucune information pertinente pour le débogage n’a pu être trouvée sur votre système.</translation>
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
        <translation>Fermer</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="143"/>
        <source>Ready to send debug information (&lt;a href=&quot;%1&quot;&gt;view backtrace&lt;/a&gt;).</source>
        <translation>Prêt à envoyer une information de débogage (&lt;a href=&quot;%1&quot;&gt;Afficher le backtrace&lt;/a&gt;).</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="159"/>
        <source>Gathering debug information...</source>
        <translation>Récupération des informations de débogage…</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="258"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.cpp" line="170"/>
        <source>Uploaded %L1 of %L2 KB.</source>
        <translation>%L1 sur %L2 Ko téléchargés.</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="285"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.cpp" line="196"/>
        <source>Sent! &lt;b&gt;Many thanks&lt;/b&gt;. Please refer to crash &lt;b&gt;%1&lt;/b&gt; in bug reports.</source>
        <translation>Envoyé ! &lt;b&gt;Merci beaucoup&lt;/b&gt;. Veuillez vous référer au crash &lt;b&gt;%1&lt;/b&gt; dans les rapports de bogues.</translation>
    </message>
    <message>
        <location filename="../thirdparty/libcrashreporter-qt/src/libcrashreporter-gui/CrashReporter.cpp" line="294"/>
        <location filename="../thirdparty/libcrashreporter-qt_a/src/libcrashreporter-gui/CrashReporter.cpp" line="205"/>
        <source>Failed to send crash info.</source>
        <translation>Échec à l’envoi des informations de crash.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="14"/>
        <source>Create a Partition</source>
        <translation>Créer une partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="48"/>
        <source> MiB</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="55"/>
        <source>Partition &amp;Type:</source>
        <translation>Type de partition :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="67"/>
        <source>&amp;Primary</source>
        <translation>&amp;Primaire</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="77"/>
        <source>E&amp;xtended</source>
        <translation>É&amp;tendue</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="119"/>
        <source>Fi&amp;le System:</source>
        <translation>Système de Fi&amp;chiers :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="178"/>
        <source>Flags:</source>
        <translation>Drapeaux :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="151"/>
        <source>&amp;Mount Point:</source>
        <translation>Point de &amp;Montage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="38"/>
        <source>Si&amp;ze:</source>
        <translation>Ta&amp;ille :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="65"/>
        <source>En&amp;crypt</source>
        <translation>En&amp;crypter</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="161"/>
        <source>Logical</source>
        <translation>Logique</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="166"/>
        <source>Primary</source>
        <translation>Primaire</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="183"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="268"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>Le point de montage est déjà utilisé. Veuillez en choisir un autre.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="48"/>
        <source>Create new %2MB partition on %4 (%3) with file system %1.</source>
        <translation>Créer une nouvelle partition de %2Mo sur %4 (%3) avec un système de fichier %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="59"/>
        <source>Create new &lt;strong&gt;%2MB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Créer une nouvelle partition de &lt;strong&gt;%2Mo&lt;/strong&gt; sur &lt;strong&gt;%4&lt;/strong&gt; (%3) avec une système de fichier &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="71"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>Création d’une nouvelle table de partitions %1 sur %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="83"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>Le programme d&apos;installation n&apos;a pu créer la partition sur le disque &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="92"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>Impossible d&apos;ouvrir le périphérique &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="102"/>
        <source>Could not open partition table.</source>
        <translation>Impossible d&apos;ouvrir la table de partitionnement.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="126"/>
        <source>The installer failed to create file system on partition %1.</source>
        <translation>Le programme d&apos;installation n&apos;a pu créer le système de fichiers sur la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="134"/>
        <source>The installer failed to update partition table on disk &apos;%1&apos;.</source>
        <translation>Le programme d&apos;installation n&apos;a pu mettre à jour la table de partitionnement sur le disque &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="20"/>
        <source>Create Partition Table</source>
        <translation>Créer une table de partitionnement</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="39"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>Créer une nouvelle table de partitionnement supprimera toutes les données existantes sur le disque.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="65"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>Quel type de table de partitionnement voulez-vous créer ?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="72"/>
        <source>Master Boot Record (MBR)</source>
        <translation>Master Boot Record (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="82"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>Table de partitionnement GUID (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="49"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>Créer une nouvelle table de partitions %1 sur %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="56"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Créer une nouvelle table de partitions &lt;strong&gt;%1&lt;/strong&gt; sur &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="66"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>Création d’une nouvelle table de partitions %1 sur %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="76"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>Le programme d&apos;installation n&apos;a pu créer la table de partitionnement sur le disque %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="84"/>
        <source>Could not open device %1.</source>
        <translation>Impossible d&apos;ouvrir le périphérique %1.</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="50"/>
        <source>Create user %1</source>
        <translation>Créer l&apos;utilisateur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="57"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Créer l’utilisateur &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="64"/>
        <source>Creating user %1.</source>
        <translation>Création de l’utilisateur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="80"/>
        <source>Sudoers dir is not writable.</source>
        <translation>Le répertoire Superutilisateur n&apos;est pas inscriptible.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="84"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation>Impossible de créer le fichier sudoers en écriture.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="92"/>
        <source>Cannot chmod sudoers file.</source>
        <translation>Impossible d&apos;exécuter chmod sur le fichier sudoers.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="98"/>
        <source>Cannot open groups file for reading.</source>
        <translation>Impossible d&apos;ouvrir le fichier groups en lecture.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="160"/>
        <source>Cannot create user %1.</source>
        <translation>Impossible de créer l&apos;utilisateur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="162"/>
        <source>useradd terminated with error code %1.</source>
        <translation>useradd s&apos;est terminé avec le code erreur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="171"/>
        <source>Cannot add user %1 to groups: %2.</source>
        <translation>Impossible d’ajouter l&apos;utilisateur %1 aux groupes %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="174"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod s&apos;est terminé avec le code erreur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="184"/>
        <source>Cannot set home directory ownership for user %1.</source>
        <translation>Impossible de définir le propriétaire du répertoire home pour l&apos;utilisateur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="186"/>
        <source>chown terminated with error code %1.</source>
        <translation>chown s&apos;est terminé avec le code erreur %1.</translation>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="42"/>
        <source>Delete partition %1.</source>
        <translation>Effacer la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="50"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Effacer la partition &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="58"/>
        <source>Deleting partition %1.</source>
        <translation>Suppression de la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="67"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>Le programme d&apos;installation n&apos;a pu supprimer la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="73"/>
        <source>Partition (%1) and device (%2) do not match.</source>
        <translation>La partition (%1) et le périphérique (%2) ne correspondent pas.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="85"/>
        <source>Could not open device %1.</source>
        <translation>Impossible d&apos;ouvrir le périphérique %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="94"/>
        <source>Could not open partition table.</source>
        <translation>Impossible d&apos;ouvrir la table de partitionnement.</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="63"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>Le type de &lt;strong&gt;table de partitions&lt;/strong&gt; actuellement présent sur le périphérique de stockage sélectionné.&lt;br&gt;&lt;br&gt;La seule façon de changer la table de partitions et de l’écraser et de la recréer de zéro, ce qui va détruire toutes les données du périphérique.&lt;br&gt;Cet installateur va conserver la table de partitions actuelle à moins que vous ne choisissiez autrement.&lt;br&gt;Si vous n’êtes pas sûr, GPT est un bon choix pour les systèmes modernes.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="107"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>Ce périphérique a une table de partitions &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="114"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>Ceci est un périphérique &lt;strong&gt;loop&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;C’est un pseudo-périphérique sans table de partitions qui permet d’accéder à un fichier comme un périphérique physique. Ce type de configuration contient généralement qu’un seul système de fichiers.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="121"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>Cet installateur &lt;strong&gt;ne peut détecter de table de partitions&lt;/strong&gt; sur le périphérique de stockage sélectionné.&lt;br&gt;&lt;br&gt;Soit ce périphérique n’a pas de table de partitions, soit la table de partitions est corrompues ou d’un type inconnu.&lt;br&gt;Cet installateur peut créer une nouvelle table de partitions pour vous, soit automatiquement, soit via la page de partitionnement manuel.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="131"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;C’est le type de table de partitions recommandé pour les systèmes modernes qui démarrent depuis un environnement de démarrage &lt;strong&gt;EFI&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="137"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;Ce type de table de partitions est nécessaire uniquement sur les vieux systèmes démarrant depuis un environnement &lt;strong&gt;BIOS&lt;/strong&gt;. Pour la plupart des usages, GPT devrait être préféré.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Attention :&lt;/strong&gt; la table de partitions MBR est un stantard obsolète.&lt;br&gt;Seules 4 partitions &lt;em&gt;primaires&lt;/em&gt; peuvent être créées, et parmi ces 4, une peut être une partition &lt;em&gt;étendue&lt;/em&gt; qui peut elle-même contenir de nombreuses partitions &lt;em&gt;logiques&lt;/em&gt;.</translation>
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
        <translation>Éditer une partition existante</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="50"/>
        <source>Content:</source>
        <translation>Contenu :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="60"/>
        <source>&amp;Keep</source>
        <translation>&amp;Garder</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="70"/>
        <source>Format</source>
        <translation>Formater</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="89"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>Attention : le formatage de cette partition effacera toutes les données existantes.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="99"/>
        <source>&amp;Mount Point:</source>
        <translation>Point de &amp;Montage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="119"/>
        <source>Si&amp;ze:</source>
        <translation>Ta&amp;ille :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="129"/>
        <source> MiB</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="136"/>
        <source>Fi&amp;le System:</source>
        <translation>Système de Fi&amp;chiers :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="149"/>
        <source>Flags:</source>
        <translation>Drapeaux :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="306"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>Le point de montage est déjà utilisé. Veuillez en choisir un autre.</translation>
    </message>
</context>
<context>
    <name>EncryptWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="14"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="32"/>
        <source>En&amp;crypt system</source>
        <translation>Enc&amp;rypter le système</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="42"/>
        <source>Passphrase</source>
        <translation>Phrase secrète</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="52"/>
        <source>Confirm passphrase</source>
        <translation>Confirmer la phrase secrète</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="150"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>Veuillez saisir la même phrase secrète dans les deux boîtes.</translation>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="123"/>
        <source>Set partition information</source>
        <translation>Configurer les informations de la partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="147"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>Installer %1 sur une &lt;strong&gt;nouvelle&lt;/strong&gt; partition système %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="151"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Configurer une &lt;strong&gt;nouvelle&lt;/strong&gt; partition %2 avec un point de montage &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="159"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Installer %2 sur %3 avec la partition système &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="164"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Configurer la partition %3 &lt;strong&gt;%1&lt;/strong&gt; avec le point de montage &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="176"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Installer le chargeur de démarrage sur &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="186"/>
        <source>Setting up mount points.</source>
        <translation>Configuration des points de montage.</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="77"/>
        <source>&amp;Restart now</source>
        <translation>&amp;Redémarrer maintenant</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="52"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;Installation terminée&lt;/h1&gt;&lt;br/&gt;%1 a été installé sur votre ordinateur.&lt;br/&gt;Vous pouvez redémarrer maintenant sur votre nouveau système, ou continuer à utiliser l&apos;environnement Livre %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="110"/>
        <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;L’installation a échoué&lt;/h1&gt;&lt;br/&gt;%1 n’a pas été installé sur votre ordinateur.&lt;br/&gt;Message d’erreur : %2.</translation>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="56"/>
        <source>Finish</source>
        <translation>Terminer</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="117"/>
        <source>Installation Complete</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="118"/>
        <source>The installation of %1 is complete.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="49"/>
        <source>Format partition %1 (file system: %2, size: %3 MB) on %4.</source>
        <translation>Formater la partition %1 (système de fichier : %2, taille : %3 Mo) sur %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="60"/>
        <source>Format &lt;strong&gt;%3MB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Formation la partition &lt;strong&gt;%1&lt;/strong&gt; de &lt;strong&gt;%3Mo&lt;/strong&gt; avec le système de fichier &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="71"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>Formatage de la partition %1 avec le système de fichier %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="83"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>Le programme d&apos;installation n&apos;a pu formater la partition %1 sur le disque &apos;%2&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="91"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>Impossible d&apos;ouvrir le périphérique &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="100"/>
        <source>Could not open partition table.</source>
        <translation>Impossible d&apos;ouvrir la table de partitionnement.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="124"/>
        <source>The installer failed to create file system on partition %1.</source>
        <translation>Le programme d&apos;installation n&apos;a pu créer le système de fichiers sur la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="133"/>
        <source>The installer failed to update partition table on disk &apos;%1&apos;.</source>
        <translation>Le programme d&apos;installation n&apos;a pu mettre à jour la table de partitionnement sur le disque &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>KeyboardPage</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="208"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation>Configurer le modèle de clavier à %1.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="210"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation>Configurer l&apos;agencement clavier à %1/%2.</translation>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="50"/>
        <source>Keyboard</source>
        <translation>Clavier</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="34"/>
        <source>System locale setting</source>
        <translation>Configuration des paramètres régionaux</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="41"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>La configuration des paramètres régionaux affecte la langue et le jeu de caractère pour les éléments de l&apos;interface utilisateur en ligne de commande.&lt;br/&gt;La configuration actuelle est &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="88"/>
        <source>I accept the terms and conditions above.</source>
        <translation>J’accepte les termes et les conditions ci-dessus.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="115"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation>&lt;h1&gt;Accord de licence&lt;/h1&gt;Cette procédure de configuration installera un logiciel propriétaire qui est sujet à des termes de licence.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="118"/>
        <source>Please review the End User License Agreements (EULAs) above.&lt;br/&gt;If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation>Veuillez lire les Contrats de Licence Utilisateur Final (CLUFs) ci-dessus.&lt;br/&gt;Si vous n’êtes pas d’accord avec ces termes, la procédure de configuration ne pourra pas continuer.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="124"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;In case non-free was selected, this installer will install proprietary packages &lt;br/&gt;that have additional End User License Agreements (EULAs) attached to them.</source>
        <translation>&lt;h1&gt;Accord de licence&lt;/h1&gt;Au cas ou non-free a été sélectionné, cet installateur installateur installera des paquets propriétaires &lt;br/&gt; qui sont soumis à un Contrat de Licence Utilisateur Final (CLUF).</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="127"/>
        <source>Please review the End User License Agreements (EULAs) above.&lt;br/&gt;If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation>Veuillez lire les Contrats de Licence Utilisateur Final (CLUFs) ci-dessus.&lt;br/&gt;Si vous n’êtes pas d’accord avec ces termes, les logiciels propriétaires ne sont pas installés, les alternatives Open Sources seront utilisées à la place.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="157"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation>&lt;strong&gt;Pilote %1&lt;/strong&gt;&lt;br/&gt; par %2</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="164"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation>&lt;strong&gt;Pilote graphique %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="170"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;Plugin de navigateur %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="176"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;Codec %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="182"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;Paquet %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="188"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="200"/>
        <source>&lt;a href=&quot;%1&quot;&gt;view license agreement&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;%1&quot;&gt;Afficher l’accord de licence&lt;/a&gt;</translation>
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
        <location filename="../src/modules/locale/LocalePage.cpp" line="387"/>
        <source>The system language will be set to %1.</source>
        <translation>La langue du système utilisée sera %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="389"/>
        <source>The numbers and dates locale will be set to %1.</source>
        <translation>Le format local des nombres et des dates utilisé sera %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="215"/>
        <source>Region:</source>
        <translation>Région :</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="216"/>
        <source>Zone:</source>
        <translation>Zone :</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="220"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="221"/>
        <source>&amp;Change...</source>
        <translation>&amp;Changer…</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="398"/>
        <source>Set timezone to %1/%2.&lt;br/&gt;</source>
        <translation>Configurer la zone de temps à %1/%2.&lt;br/&gt;</translation>
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
        <translation>Chargement des données de localisation...</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="160"/>
        <source>Location</source>
        <translation>Localisation</translation>
    </message>
</context>
<context>
    <name>MoveFileSystemJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="66"/>
        <source>Move file system of partition %1.</source>
        <translation>Déplacer le système de fichier de la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="80"/>
        <source>Could not open file system on partition %1 for moving.</source>
        <translation>Impossible d&apos;ouvrir le sytème de fichiers sur la partition %1 à déplacer.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="86"/>
        <source>Could not create target for moving file system on partition %1.</source>
        <translation>Impossible de créer la cible pour le déplacement du système de fichiers sur la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="95"/>
        <source>Moving of partition %1 failed, changes have been rolled back.</source>
        <translation>Le déplacement de la partition %1 a échoué, les changements ont été annulés.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="101"/>
        <source>Moving of partition %1 failed. Roll back of the changes have failed.</source>
        <translation>Le déplacement de la partition %1 a échoué. L&apos;annulation des changements a échoué.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="113"/>
        <source>Updating boot sector after the moving of partition %1 failed.</source>
        <translation>La mise à jour du secteur de démarrage après le déplacement de la partition %1 a échoué.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="127"/>
        <source>The logical sector sizes in the source and target for copying are not the same. This is currently unsupported.</source>
        <translation>Les tailles des secteurs logiques source et cible pour la copie ne sont pas les mêmes. Ceci est actuellement non supporté.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="197"/>
        <source>Source and target for copying do not overlap: Rollback is not required.</source>
        <translation>La source et la cible pour la copie ne se chevauchent pas : un retour en arrière n&apos;est pas nécessaire.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="221"/>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="229"/>
        <source>Could not open device %1 to rollback copying.</source>
        <translation>Impossible d&apos;ouvrir le périphérique %1 pour annuler la copie.</translation>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="70"/>
        <source>Keyboard Model:</source>
        <translation>Modèle Clavier :</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="131"/>
        <source>Type here to test your keyboard</source>
        <translation>Veuillez saisir ici pour tester votre clavier</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="14"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="36"/>
        <source>What is your name?</source>
        <translation>Quel est vote nom ?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="117"/>
        <source>What name do you want to use to log in?</source>
        <translation>Quel nom souhaitez-vous utiliser pour la connexion ?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="306"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="437"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="582"/>
        <source>font-weight: normal</source>
        <translation>style de police : normal</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="200"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can set up multiple accounts after installation.&lt;/small&gt;</source>
        <translation>&lt;small&gt;si plusieurs personnes utilisent cet ordinateur, vous pourrez créer plusieurs comptes après l&apos;installation.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="335"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Veuillez saisir le mot de passe pour sécuriser votre compte.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="440"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Veuillez entrer le même mot de passe deux fois afin de vérifier qu&apos;il n&apos;y ait pas d&apos;erreur de frappe. Un bon mot de passe doit contenir un mélange de lettres, de nombres et de caractères de ponctuation, contenir au moins huit caractères et être changé à des intervalles réguliers.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="226"/>
        <source>What is the name of this computer?</source>
        <translation>Quel est le nom de votre ordinateur ?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="309"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Ce nom sera utilisé pour rendre l&apos;ordinateur visible des autres sur le réseau.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="450"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>Se connecter automatiquement sans demander de mot de passe.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="457"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Choisir le même mot de passe pour le compte administrateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="480"/>
        <source>Choose a password for the administrator account.</source>
        <translation>Choisir un mot de passe pour le compte administrateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="585"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Veuillez entrer le même mot de passe deux fois, afin de vérifier qu&apos;ils n&apos;y ait pas d&apos;erreur de frappe.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="191"/>
        <source>Root</source>
        <translation>Racine</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="194"/>
        <source>Home</source>
        <translation>Home</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="196"/>
        <source>Boot</source>
        <translation>Boot</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="199"/>
        <source>EFI system</source>
        <translation>Système EFI</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="201"/>
        <source>Swap</source>
        <translation>Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="203"/>
        <source>New partition for %1</source>
        <translation>Nouvelle partition pour %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="205"/>
        <source>New partition</source>
        <translation>Nouvelle partition</translation>
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
        <translation>Espace libre</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="141"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="173"/>
        <source>New partition</source>
        <translation>Nouvelle partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="257"/>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="259"/>
        <source>File System</source>
        <translation>Système de fichiers</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="261"/>
        <source>Mount Point</source>
        <translation>Point de montage</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="263"/>
        <source>Size</source>
        <translation>Taille</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="14"/>
        <source>Form</source>
        <translation>Forme</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="22"/>
        <source>Storage de&amp;vice:</source>
        <translation>Pé&amp;riphérique de stockage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="51"/>
        <source>&amp;Revert All Changes</source>
        <translation>&amp;Annuler tous les changements</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="87"/>
        <source>New Partition &amp;Table</source>
        <translation>Nouvelle &amp;table de partitionnement</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="107"/>
        <source>&amp;Create</source>
        <translation>&amp;Créer</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="114"/>
        <source>&amp;Edit</source>
        <translation>&amp;Modifier</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="121"/>
        <source>&amp;Delete</source>
        <translation>&amp;Supprimer</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="148"/>
        <source>Install boot &amp;loader on:</source>
        <translation>Installer le chargeur de &amp;démarrage sur :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="160"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>Êtes-vous sûr de vouloir créer une nouvelle table de partitionnement sur %1 ?</translation>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="70"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="70"/>
        <source>Gathering system information...</source>
        <translation>Récupération des informations système…</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="121"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="121"/>
        <source>Partitions</source>
        <translation>Partitions</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="158"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="158"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system.</source>
        <translation>Installer %1 &lt;strong&gt;à côté&lt;/strong&gt; d’un autre système d’exploitation.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="162"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="163"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk and install %1.</source>
        <translation>&lt;strong&gt;Écraser&lt;/strong&gt; le disque et installer %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="166"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="168"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition with %1.</source>
        <translation>&lt;strong&gt;Remplacer&lt;/strong&gt; un partition avec %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="171"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="173"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning.</source>
        <translation>Partitionnement &lt;strong&gt;manuel&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="184"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="186"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system on disk &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Installer %1 &lt;strong&gt;à côté&lt;/strong&gt; d’un autre système d’exploitation sur le disque &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="190"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="193"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) and install %1.</source>
        <translation>&lt;strong&gt;Écraser&lt;/strong&gt; le disque &lt;strong&gt;%2&lt;/strong&gt; (%3) et installer %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="196"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="200"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition on disk &lt;strong&gt;%2&lt;/strong&gt; (%3) with %1.</source>
        <translation>&lt;strong&gt;Remplacer&lt;/strong&gt; une partition sur le disque &lt;strong&gt;%2&lt;/strong&gt; (%3) avec %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="203"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="207"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning on disk &lt;strong&gt;%1&lt;/strong&gt; (%2).</source>
        <translation>Partitionnement &lt;strong&gt;manuel&lt;/strong&gt; sur le disque &lt;strong&gt;%1&lt;/strong&gt; (%2).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="211"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="215"/>
        <source>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
        <translation>Disque &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="239"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="243"/>
        <source>Current:</source>
        <translation>Actuel :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="256"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="261"/>
        <source>After:</source>
        <translation>Après :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="403"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="405"/>
        <source>No EFI system partition configured</source>
        <translation>Aucune partition système EFI configurée</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="404"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="406"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a FAT32 filesystem with the &lt;strong&gt;esp&lt;/strong&gt; flag enabled and mount point &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation>Une partition système EFI est nécessaire pour démarrer %1.&lt;br/&gt;&lt;br/&gt;Pour configurer une partition système EFI, revenez en arrière, sélectionnez ou créez un système de fichier FAT32 avec le flag &lt;strong&gt;esp&lt;/strong&gt; autorisé et le point de montage &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;Vous pouvez continuer sans configurer une partition système EFI mais votre système ne pourra pas démarrer.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="417"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="420"/>
        <source>EFI system partition flag not set</source>
        <translation>Aucun flag sur la partition système EFI n’est configuré</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="418"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="421"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;A partition was configured with mount point &lt;strong&gt;%2&lt;/strong&gt; but its &lt;strong&gt;esp&lt;/strong&gt; flag is not set.&lt;br/&gt;To set the flag, go back and edit the partition.&lt;br/&gt;&lt;br/&gt;You can continue without setting the flag but your system may fail to start.</source>
        <translation>Une partition système EFI est nécessaire pour démarrer %1.&lt;br/&gt;&lt;br/&gt; Une partition a été configurée avec le point de montage &lt;strong&gt;%2&lt;/strong&gt; mais le flag &lt;strong&gt;esp&lt;/strong&gt; n’est pas configuré.&lt;br/&gt; Pour 
ajoute le flag, revenez en arrière et éditez la partition.&lt;br/&gt;&lt;br/&gt;Vous pouvez continuer sans cela mais votre système ne pourra pas démarrer.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="448"/>
        <source>Option to use GPT on BIOS</source>
        <translation>Options pour utiliser GPT sur BIOS</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="449"/>
        <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partion table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;bios_grub&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
        <translation>Une table de partitions GPT est la meilleure option pour tous les systèmes. Cet installateur supporte une configuration de ce type pour les systèmes BIOS également.&lt;br/&gt;&lt;br/&gt;Pour configurer une table de partitions GPT sur BIOS (si ce n’est déjà fait), retournez en arrière et sélectionnez la table de partitions GPT, puis créez une partition non formatée de 8 Mo avec le flag &lt;strong&gt;bios_grub&lt;/strong&gt; autorisé.&lt;br/&gt;&lt;br/&gt;Une partition de 8 Mo est nécessaire pour démarrer %1 sur un système BIOS avec GPT.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="484"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="456"/>
        <source>Boot partition not encrypted</source>
        <translation>La partition de démarrage n’est pas cryptée</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="485"/>
        <location filename="../src/modules/partition/gui/PartitionViewStep_orig.cpp" line="457"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation>Une partition de démarrage distincte a été configurée avec une partition racine cryptée, mais elle n’est pas cryptée.&lt;br/&gt;&lt;br/&gt;Ce type d’installation pose des problèmes de sécurité car les fichiers système importants sont conservés sur une partition non cryptée.&lt;br/&gt;Vous pouvez continuer si vous le souhaitez, mais le déverrouillage du système de fichiers se produira plus tard au démarrage du système.&lt;br/&gt;Pour crypter la partition de démarrage, revenez en arrière et recréez-la, en sélectionnant &lt;strong&gt;Crypter&lt;/strong&gt; dans la fenêtre de création de la partition.</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="82"/>
        <source>Default Keyboard Model</source>
        <translation>Modèle Clavier par défaut</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="127"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="163"/>
        <source>Default</source>
        <translation>Défaut</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="49"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>Espace non partitionné ou table de partitions inconnnue</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="198"/>
        <source>unknown</source>
        <translation>inconnu</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="200"/>
        <source>extended</source>
        <translation>étendu</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="202"/>
        <source>unformatted</source>
        <translation>non formaté</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="204"/>
        <source>swap</source>
        <translation>swap</translation>
    </message>
</context>
<context>
    <name>ReplaceWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="14"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="134"/>
        <source>Select where to install %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
        <translation>Sélectionner la partition où installer %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Attention : &lt;/font&gt;cela supprimera tous les fichiers de la partition sélectionnée.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="160"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>La partition sélectionnée ne semble pas être une partition valide.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="168"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1 ne peut être installé sur un espace vide. Veuillez sélectionner une partition existante.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="178"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1 ne peut être installé sur une partition étendue. Veuillez choisir une partition primaire ou une partition logique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="188"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>%1 ne peut être installé sur cette partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="194"/>
        <source>Data partition (%1)</source>
        <translation>Partition de données (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="211"/>
        <source>Unknown system partition (%1)</source>
        <translation>Partition système inconnue (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="216"/>
        <source>%1 system partition (%2)</source>
        <translation>Partition système %1 (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="227"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;La partition %1 est trop petite pour %2. Veuillez selectionner une partition ayant une taille d’au moins %3 Gio.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="250"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Aucune partition système EFI n’a pu être trouvée sur ce système. Veuillez recommencer et utiliser le partitionnement manuel pour configurer %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="261"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="278"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="302"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 sera installé sur %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Attention : &lt;/font&gt;toutes les données sur la partition %2 seront perdues.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="270"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>La partition système EFI %1 sera utilisée pour démarrer %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="286"/>
        <source>EFI system partition:</source>
        <translation>Partition système EFI :</translation>
    </message>
</context>
<context>
    <name>RequirementsChecker</name>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="64"/>
        <source>Gathering system information...</source>
        <translation>Récupération des informations système...</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="108"/>
        <source>has at least %1 GB available drive space</source>
        <translation>a au moins %1 Go de d&apos;espace disque disponible</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="110"/>
        <source>There is not enough drive space. At least %1 GB is required.</source>
        <translation>Il n’y a pas assez d’espace disque. Au moins %1 Go sont nécessaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="118"/>
        <source>has at least %1 GB working memory</source>
        <translation>a au moins %1 Go de mémoire de travail</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="120"/>
        <source>The system does not have enough working memory. At least %1 GB is required.</source>
        <translation>Le système n’a pas assez de mémoire de travail. Au moins %1 Go sont nécessaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="128"/>
        <source>is plugged in to a power source</source>
        <translation>est branché à une source de courant</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="129"/>
        <source>The system is not plugged in to a power source.</source>
        <translation>Le système n’est pas branché à une source d’alimentation.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="136"/>
        <source>is connected to the Internet</source>
        <translation>est connecté à Internet</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="137"/>
        <source>The system is not connected to the Internet.</source>
        <translation>Le système n’est pas connecté à Internet.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="145"/>
        <source>The installer is not running with administrator rights.</source>
        <translation>L’installeur doit être lancé en mode administrateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="153"/>
        <source>The screen is too small to display the installer.</source>
        <translation>L’écran est trop petit pour afficher l’installateur.</translation>
    </message>
</context>
<context>
    <name>ResizeFileSystemJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="76"/>
        <source>Resize file system on partition %1.</source>
        <translation>Redimensionner le système de fichiers sur la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="91"/>
        <source>Parted failed to resize filesystem.</source>
        <translation>Parted n&apos;a pu redimensionner le système de fichiers.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="101"/>
        <source>Failed to resize filesystem.</source>
        <translation>Échec au redimensionnement du système de fichiers.</translation>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="187"/>
        <source>Resize partition %1.</source>
        <translation>Redimensionner la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="194"/>
        <source>Resize &lt;strong&gt;%2MB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MB&lt;/strong&gt;.</source>
        <translation>Redimensionner la partition &lt;strong&gt;%1&lt;/strong&gt; de &lt;strong&gt;%2Mo&lt;/strong&gt; à &lt;strong&gt;%3Mo&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="205"/>
        <source>Resizing %2MB partition %1 to %3MB.</source>
        <translation>Redimensionnement de la partition %1 de %2Mo à %3Mo.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="232"/>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="298"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>Le programme d&apos;installation n&apos;a pu redimensionner la partition %1 sur le disque &apos;%2&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="237"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>Impossible d&apos;ouvrir le périphérique &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>ScanningDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="83"/>
        <source>Scanning storage devices...</source>
        <translation>Analyse des périphériques de stockage…</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="84"/>
        <source>Partitioning</source>
        <translation>Partitionnage</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="37"/>
        <source>Set hostname %1</source>
        <translation>Définir le nom d&apos;hôte %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="44"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Définir le nom d&apos;hôte &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="51"/>
        <source>Setting hostname %1.</source>
        <translation>Définition du nom d&apos;hôte %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="61"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="68"/>
        <source>Internal Error</source>
        <translation>Erreur interne</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="75"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="86"/>
        <source>Cannot write hostname to target system</source>
        <translation>Impossible d&apos;écrire le nom d&apos;hôte sur le système cible.</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="59"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>Configurer le modèle clavier à %1, l&apos;agencement à %2-%3</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="320"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>Impossible d&apos;écrire la configuration clavier pour la console virtuelle.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="321"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="325"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="331"/>
        <source>Failed to write to %1</source>
        <translation>Impossible d&apos;écrire sur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="324"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>Impossible d&apos;écrire la configuration clavier pour X11.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="330"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <translation>Impossible d&apos;écrire la configuration clavier dans le répertoire existant /etc/default.</translation>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="48"/>
        <source>Set flags on partition %1.</source>
        <translation>Configurer les flags sur la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="51"/>
        <source>Set flags on %1MB %2 partition.</source>
        <translation>Configurer les flags sur la partition %2 de %1Mo.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="55"/>
        <source>Set flags on new partition.</source>
        <translation>Configurer les flags sur la nouvelle partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="66"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Effacer les flags sur la partition &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="70"/>
        <source>Clear flags on %1MB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Effacer les flags sur la partition &lt;strong&gt;%2&lt;/strong&gt; de %1Mo.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="74"/>
        <source>Clear flags on new partition.</source>
        <translation>Effacer les flags sur la nouvelle partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="78"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Marquer la partition &lt;strong&gt;%1&lt;/strong&gt; comme &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="84"/>
        <source>Flag %1MB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>Configuration des flags &lt;strong&gt;%3&lt;/strong&gt; pour la partition &lt;strong&gt;%2&lt;/strong&gt; de %1Mo.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="90"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Configuration du flag &lt;strong&gt;%1&lt;/strong&gt; pour la nouvelle partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="102"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Effacement des flags sur la partition &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="106"/>
        <source>Clearing flags on %1MB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Effacement des flags sur la partition &lt;strong&gt;%2&lt;/strong&gt; de %1Mo.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="110"/>
        <source>Clearing flags on new partition.</source>
        <translation>Effacement des flags sur la nouvelle partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="114"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Configuration des flags &lt;strong&gt;%2&lt;/strong&gt; pour la partition &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="120"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Configuration des flags &lt;strong&gt;%3&lt;/strong&gt; pour la partition &lt;strong&gt;%2&lt;/strong&gt; de %1Mo.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="126"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation>Configuration des flags &lt;strong&gt;%1&lt;/strong&gt; pour la nouvell partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="140"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation>L’installateur n’a pu configurer les flags sur la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="148"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>Impossible d&apos;ouvrir le périphérique &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="157"/>
        <source>Could not open partition table on device &apos;%1&apos;.</source>
        <translation>Impossible d’ouvrir la table de partitionnement sur le périphérique &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="169"/>
        <source>Could not find partition &apos;%1&apos;.</source>
        <translation>Impossible de trouver la partition &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>SetPartGeometryJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="144"/>
        <source>Update geometry of partition %1.</source>
        <translation>Mettre à jour la géométrie de la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="156"/>
        <source>Failed to change the geometry of the partition.</source>
        <translation>Échec au changement de géométrie de la partition.</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="44"/>
        <source>Set password for user %1</source>
        <translation>Définir le mot de passe pour l&apos;utilisateur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="51"/>
        <source>Setting password for user %1.</source>
        <translation>Configuration du mot de passe utilisateur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="108"/>
        <source>Bad destination system path.</source>
        <translation>Mauvaise destination pour le chemin système.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="109"/>
        <source>rootMountPoint is %1</source>
        <translation>Le point de montage racine est %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="119"/>
        <source>Cannot disable root account.</source>
        <translation>Impossible de désactiver le compte root.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="120"/>
        <source>passwd terminated with error code %1.</source>
        <translation>passwd s’est terminé avec le code erreur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="135"/>
        <source>Cannot set password for user %1.</source>
        <translation>Impossible de créer le mot de passe pour l&apos;utilisateur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="137"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod s&apos;est terminé avec le code erreur %1.</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="43"/>
        <source>Set timezone to %1/%2</source>
        <translation>Configurer le fuseau-horaire à %1/%2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot access selected timezone path.</source>
        <translation>Impossible d&apos;accéder au chemin d&apos;accès du fuseau horaire sélectionné.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Bad path: %1</source>
        <translation>Mauvais chemin : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="86"/>
        <source>Cannot set timezone.</source>
        <translation>Impossible de définir le fuseau horaire.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="87"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>Création du lien échouée, destination : %1; nom du lien : %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="96"/>
        <source>Cannot set timezone,</source>
        <translation>Impossible de définir le fuseau horaire,</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="97"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>Impossible d’ouvrir /etc/timezone en écriture.</translation>
    </message>
</context>
<context>
    <name>SummaryPage</name>
    <message>
        <location filename="../src/modules/summary/SummaryPage.cpp" line="46"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation>Ceci est un aperçu de ce qui va se passer une fois la procédure d’installation lancée.</translation>
    </message>
</context>
<context>
    <name>SummaryViewStep</name>
    <message>
        <location filename="../src/modules/summary/SummaryViewStep.cpp" line="43"/>
        <source>Summary</source>
        <translation>Résumé</translation>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="275"/>
        <source>Your username is too long.</source>
        <translation>Votre nom d’utilisateur est trop long.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="285"/>
        <source>Your username contains invalid characters. Only lowercase letters and numbers are allowed.</source>
        <translation>Votre nom d’utilisateur contient des caractères invalides. Seuls les lettre minuscules et les nombres sont autorisés.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="329"/>
        <source>Your hostname is too short.</source>
        <translation>Votre nom d’hôte est trop court.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="340"/>
        <source>Your hostname is too long.</source>
        <translation>Votre nom d’hôte est trop long.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="351"/>
        <source>Your hostname contains invalid characters. Only letters, numbers and dashes are allowed.</source>
        <translation>Votre nom de hôte contient des caractères invalides. Seules les lettres, les chiffres et les tirets sont autorisés.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="382"/>
        <location filename="../src/modules/users/UsersPage.cpp" line="415"/>
        <source>Your passwords do not match!</source>
        <translation>Vos mots de passe ne correspondent pas !</translation>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
        <source>Users</source>
        <translation>Utilisateurs</translation>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="14"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="75"/>
        <source>&amp;Language:</source>
        <translation>&amp;Langue :</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="250"/>
        <source>&amp;Release notes</source>
        <translation>&amp;Notes de version</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="240"/>
        <source>&amp;Known issues</source>
        <translation>&amp;Problèmes connus</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="193"/>
        <source>&amp;Support</source>
        <translation>&amp;Support</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="183"/>
        <source>&amp;About</source>
        <translation>&amp;À propos</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="60"/>
        <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenu sur l’installateur %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="60"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenu sur l’installateur Calamares pour %1&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="73"/>
        <source>About %1 installer</source>
        <translation>À propose de l&apos;installateur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="75"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Thanks to: Anke Boersma, Aurélien Gâteau, Kevin Kofler, Lisa Vitolo, Philip Müller, Pier Luigi Fiorini, Rohan Garg and the &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;http://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;pour %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Merci à : Anke Boersma, Aurélien Gâteau, Kevin Kofler, Lisa Vitolo, Philip Müller, Pier Luigi Fiorini, Rohan Garg et l’&lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;équipe de traducteurs KaOS&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;http://calamares.io/&quot;&gt;Calamares&lt;/a&gt; est sponsorisé par &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="201"/>
        <source>%1 support</source>
        <translation>%1 supporte</translation>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="51"/>
        <source>Welcome</source>
        <translation>Bienvenue</translation>
    </message>
</context>
<context>
    <name>show</name>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="47"/>
        <source>Here the actual install of KaOS will start.&lt;br/&gt;Use the left &lt;b&gt;mouse button&lt;/b&gt; to go to the next slide, right for previous.&lt;br/&gt;After creating your chosen disk setup in the first 10 % &lt;br/&gt;the full copying of the ISO will take the longest of this install phase &lt;br/&gt;and will run until approximately 30%.&lt;br/&gt;</source>
        <translation>L’installation de KaOS va commencer à partir d’ici.&lt;br/&gt;Veuillez utiliser le &lt;b&gt;bouton gauche de la souris&lt;/b&gt; pour passer à la diapositive suivante, bouton droit pour la précédente.&lt;br/&gt;Une fois les disques choisis créés dans les premier 10%,&lt;br/&gt; la copie de toute l’ISO sera la phase la plus longue de l’installation&lt;br/&gt; et durera jusqu’à environ 30%.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="73"/>
        <source>After the ISO is copied some 25 post-install modules will run.&lt;br/&gt;This includes setting user specific options, &lt;br/&gt;removing Live Session only packages&lt;br/&gt;and adjusting hardware setup.&lt;br/&gt;</source>
        <translation>Une fois l’ISO copiée, près de 25 modules post-installation seront exécutés.&lt;br/&gt;Cela comprend la configuration d’options utilisateur spécifiques,&lt;br/&gt;la suppression des paquets uniquement utilisés pour la session Live&lt;br/&gt;et la configuration des paramètres matériels.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="98"/>
        <source>The default Office Suite is Calligra.&lt;br/&gt;LibreOffice is available in the repositories. &lt;br/&gt;</source>
        <translation>La suite Office par défaut est Calligra.&lt;br/&gt;LibreOffice est disponible dans les dépôts.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="121"/>
        <source>Qt/KDE specific internet applications include the &lt;br/&gt;Qupzilla web-browser and kde-telepathy for &lt;br/&gt;chat and Instant Messaging. &lt;br/&gt;</source>
        <translation>Parmi les applications internet spécifiquement Qt/KDE, on peut noter &lt;br/&gt;le navigateur QupZilla kde-telepathy pour &lt;br/&gt;la messagerie instantanée et client chat.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="145"/>
        <source>For package management Octopi is the GUI application.&lt;br/&gt;</source>
        <translation>Octopi est l’interface graphique pour la gestion de paquets.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="167"/>
        <source>May using KaOS be a pleasant experience for you.</source>
        <translation>En espérant que KaOS vous soit une expérience agréable.</translation>
    </message>
</context>
</TS>