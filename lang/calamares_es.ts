<?xml version="1.0" ?><!DOCTYPE TS><TS language="es" version="2.1">
<context>
    <name>AlongsidePage</name>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="77"/>
        <source>Choose partition to shrink:</source>
        <translation>Elige la partición a reducir:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="78"/>
        <source>Allocate drive space by dragging the divider below:</source>
        <translation>Asigna el espacio de disco moviendo el separado de debajo:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="121"/>
        <source>With this operation, the partition &lt;strong&gt;%1&lt;/strong&gt; which contains %4 will be shrunk to %2MB and a new %3MB partition will be created for %5.</source>
        <translation>Con esta operación, la partición &lt;strong&gt;%1&lt;/strong&gt; que contiene %4 se reducirá a %2MB y se creará una nueva partición de %3MB para %5.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="198"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>No se encuentra una partición de un sistema EFI en este equipo. Por favor vuelva atrás y use el particionamiento manual para configurar %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="208"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>Se usará la partición de sistema EFI en %1 para iniciar %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/AlongsidePage.cpp" line="218"/>
        <source>EFI system partition:</source>
        <translation>Partición sistema EFI:</translation>
    </message>
</context>
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="61"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>El &lt;strong&gt;entorno de arranque&lt;/strong&gt; de este sistema.&lt;br&gt;&lt;br&gt;Los antiguos sistemas x86 sólo soportan &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Los sistemas modernos usan habitualmente &lt;strong&gt;EFI&lt;/strong&gt;, pero también pueden mostrarse como BIOS si inician en modo de compatibilidad.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="75"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>Este sistema fue iniciado con un entorno de arranque &lt;strong&gt;EFI&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Para configurar el inicio desde un entorno EFI, este instalador deberá colocar una aplicación que cargue el arranque, como &lt;strong&gt;GRUB&lt;/strong&gt; o &lt;strong&gt;systemd-boot&lt;/strong&gt; en una &lt;strong&gt;Partición de Sistema EFI&lt;/strong&gt;. Esto es automático, a menos que seleccione el particionado manual, en cuyo caso deberá elegirla o crearla por su propia cuenta.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="87"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>Este sistema fue iniciado con un entorno de arranque &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Para configurar el inicio desde un entorno BIOS, este instalador deberá colocar una aplicación que cargue el arranque, como &lt;strong&gt;GRUB&lt;/strong&gt;, ya sea en el comienzo de una partición o en el &lt;strong&gt;Master Boot Record&lt;/strong&gt; (preferido). Esto es automático, a menos que seleccione el particionado manual, en cuyo caso deberá elegirla o crearla por su propia cuenta.</translation>
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
        <translation>Partición de arranque</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="81"/>
        <source>System Partition</source>
        <translation>Partición de sistema</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="111"/>
        <source>Do not install a boot loader</source>
        <translation>No instalar un cargador de arranque</translation>
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
        <translation>AlmacenamientoGlobal</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="34"/>
        <source>JobQueue</source>
        <translation>ColaDeTrabajo</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.ui" line="44"/>
        <source>Modules</source>
        <translation>Módulos</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/DebugWindow.cpp" line="96"/>
        <source>Debug information</source>
        <translation>Información de depuración</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/ExecutionViewStep.cpp" line="77"/>
        <source>Install</source>
        <translation>Instalar</translation>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="89"/>
        <source>Done</source>
        <translation>Hecho.</translation>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="51"/>
        <source>Run command %1 %2</source>
        <translation>Ejecutar comando %1 %2</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="60"/>
        <source>Running command %1 %2</source>
        <translation>Ejecutando comando %1 %2</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="89"/>
        <source>External command crashed</source>
        <translation>Ha fallado el comando externo</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="90"/>
        <source>Command %1 crashed.
Output:
%2</source>
        <translation>El comando %1 ha fallado.
Salida: 
%2</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="95"/>
        <source>External command failed to start</source>
        <translation>El comando externo no ha podido iniciar</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="96"/>
        <source>Command %1 failed to start.</source>
        <translation>El comando %1 no se puede iniciar.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="100"/>
        <source>Internal error when starting command</source>
        <translation>Error interno al arrancar el comando</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="101"/>
        <source>Bad parameters for process job call.</source>
        <translation>Parámetros erróneos en la llamada al proceso.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="104"/>
        <source>External command failed to finish</source>
        <translation>El comando externo no ha podido finalizar</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="105"/>
        <source>Command %1 failed to finish in %2s.
Output:
%3</source>
        <translation>El comando %1 ha fallado al finalizar en %2.
Salida:
%3</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="111"/>
        <source>External command finished with errors</source>
        <translation>El comando externo ha finalizado con errores</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="112"/>
        <source>Command %1 finished with exit code %2.
Output:
%3</source>
        <translation>El comando %1 ha finalizado con el código %2.
Salida:
%3</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="241"/>
        <source>Running %1 operation.</source>
        <translation>Ejecutando %1 operación.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="254"/>
        <source>Bad working directory path</source>
        <translation>Ruta de trabajo errónea</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="255"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>No se puede leer la ruta de trabajo %1 de la tarea %2 de python.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="265"/>
        <source>Bad main script file</source>
        <translation>Script principal erróneo</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="266"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>No se puede leer el script principal %1 de la tarea %2 de python.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="311"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>Error de Boost.Python en la tarea &quot;%1&quot;.</translation>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="65"/>
        <source>&amp;Back</source>
        <translation>&amp;Atrás</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="66"/>
        <source>&amp;Next</source>
        <translation>&amp;Siguiente</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="67"/>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="295"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="90"/>
        <source>Cancel installation?</source>
        <translation>¿Cancelar la instalación?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="91"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>¿Realmente quiere cancelar el proceso de instalación actual?
Saldrá del instalador y se perderán todos los cambios.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="224"/>
        <source>Continue with setup?</source>
        <translation>¿Continuar con la configuración?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="225"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>El instalador de %1 está a punto de hacer cambios en su disco para instalar %2.&lt;br/&gt;&lt;strong&gt;Luego no podrá deshacer esos cambios.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="232"/>
        <source>&amp;Install now</source>
        <translation>Instalar ahora</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="233"/>
        <source>Go &amp;back</source>
        <translation>&amp;Volver</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="264"/>
        <source>&amp;Quit</source>
        <translation>&amp;Salir</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="170"/>
        <source>Error</source>
        <translation>Error</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="171"/>
        <source>Installation Failed</source>
        <translation>La instalación ha fallado</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="234"/>
        <source>Unknown exception type</source>
        <translation>Tipo de excepción desconocida</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="247"/>
        <source>unparseable Python error</source>
        <translation>Error de Python no analizable</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="263"/>
        <source>unparseable Python traceback</source>
        <translation>Rastreo de Python no analizable</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="267"/>
        <source>Unfetchable Python error.</source>
        <translation>Error de Python no alcanzable.</translation>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="44"/>
        <source>%1 Installer</source>
        <translation>%1 instalador</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="98"/>
        <source>Show debug information</source>
        <translation>Mostrar información de depuración</translation>
    </message>
</context>
<context>
    <name>CheckFileSystemJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CheckFileSystemJob.cpp" line="34"/>
        <source>Checking file system on partition %1.</source>
        <translation>Verificando el sistema de ficheros de la partición %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CheckFileSystemJob.cpp" line="58"/>
        <source>The file system check on partition %1 failed.</source>
        <translation>La verificación del sistema de ficheros de la partición %1 ha fallado.</translation>
    </message>
</context>
<context>
    <name>CheckerWidget</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="95"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>Este ordenador no cumple con los requisitos mínimos para instalar %1.&lt;br/&gt;La instalación no puede continuar. &lt;a href=&quot;#details&quot;&gt;Detalles...&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="113"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation>Este ordenador no cumple con algunos de los requerimientos para instalar %1.&lt;br/&gt;La instalación puede continuar, pero algunas características deben ser desactivadas.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="142"/>
        <source>This program will ask you some questions and set up %2 on your computer.&lt;br/&gt; Remember, this installer is still in an early stage.&lt;br/&gt;Not implemented yet is LUKS/LVM or RAID.&lt;br/&gt;For &lt;b&gt;GPT partioning on BIOS&lt;/b&gt; systems and other instructions see the Known Issues</source>
        <translation>Este programa le hará algunas preguntas y configurará %2 en su ordenador.&lt;br/&gt; Recuerde, ,este instalador aún está en sus primeras etapas.&lt;br/&gt;Todavía no se ha implementado soporte a LUKS/LVM o RAID.&lt;br/&gt;Para &lt;b&gt;particionado GPT en sistemas BIOS&lt;/b&gt; y otras instrucciones veal los Problemas Conocidos.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="170"/>
        <source>For best results, please ensure that this computer:</source>
        <translation>Para obtener mejores resultados, por favor asegúrese de que este ordenador:</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerWidget.cpp" line="198"/>
        <source>System requirements</source>
        <translation>Requerimientos del sistema</translation>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="117"/>
        <source>After:</source>
        <translation>Después:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="964"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="994"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1018"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1056"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;Borrar disco&lt;/strong&gt;&lt;br/&gt;Esto &lt;font color=&quot;red&quot;&gt;borrará&lt;/font&gt; todos los datos que se encuentren en el medio de almacenamiento seleccionado.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="989"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1013"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1051"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;Instalar junto a otro SO&lt;/strong&gt;&lt;br/&gt;El instalador reducirá la partición para hacer lugar para %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="999"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1022"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1060"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;Reemplazar una partición&lt;/strong&gt;&lt;br/&gt;Reemplaza una partición con %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="775"/>
        <source>Boot loader location:</source>
        <translation>Ubicación del cargador de arranque:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="115"/>
        <source>Select storage de&amp;vice:</source>
        <translation>Seleccione un medio de almac&amp;enamiento:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="116"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="707"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="746"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="822"/>
        <source>Current:</source>
        <translation>Actual:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="223"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself. Having a GPT partition table and &lt;strong&gt;fat32 512Mb /boot partition is a must for UEFI installs&lt;/strong&gt;, either use an existing without formatting or create one.</source>
        <translation>&lt;strong&gt;Particionado manual&lt;/strong&gt;&lt;br/&gt;Puede crear o redimensionar particiones. Tener  una tabla de particiones GPT y &lt;strong&gt;una partición /boot de 512Mb es necesario para instalaciones UEFI&lt;/strong&gt;, puede utilizar una existente sin formato o crear una.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="708"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Seleccione una partición para reducir, luego arrastre la barra de abajo para redimensionar&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="722"/>
        <source>%1 will be shrunk to %2MB and a new %3MB partition will be created for %4.</source>
        <translation>%1 será reducida a %2MB y una partición nueva de %3MB será creada para %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="813"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Seleccione la partición donde instalar&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="868"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>No se puede encontrar una partición sistema EFI en este sistema. Por favor vuelva atrás y use el particionado manual para  configurar %.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="878"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>Se usará la partición sistema EFI en %1 para iniciar %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="887"/>
        <source>EFI system partition:</source>
        <translation>Partición sistema EFI:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="959"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Este medio de almacenamiento parece no tener un sistema operativo instalado. ¿Qué desearía hacer?&lt;br/&gt;Tendrá la posibilidad de revisar y confirmar sus elecciones antes de que cualquier cambio se realice en el medio de almacenamiento.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="983"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Este medio de almacenamiento tiene %1 instalado.¿Qué le gustaría hacer?&lt;br/&gt;Tendrá la posibilidad de revisar y confirmar sus elecciones antes de que cualquier cambio se realice en el medio de almacenamiento.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1008"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Este medio de almacenamiento ya tiene un sistema operativo instalado.¿Qué desearía hacer?&lt;br/&gt;Tendrá la posibilidad de revisar y confirmar sus elecciones antes de que cualquier cambio se realice en el medio de almacenamiento.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1046"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Este medio de almacenamiento tiene varios sistemas operativos instalados.¿Qué desearía hacer?&lt;br/&gt;Tendrá la posibilidad de revisar y confirmar sus elecciones antes de que cualquier cambio se realice en el medio de almacenamiento.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulario</translation>
    </message>
</context>
<context>
    <name>ClearMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="44"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>Limpiar montajes para las operaciones de particionado en %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="52"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>Limpiando montajes para operaciones de particionado en %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="171"/>
        <source>Cleared all mounts for %1</source>
        <translation>Limpiando todos los montajes para %1</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="40"/>
        <source>Clear all temporary mounts.</source>
        <translation>Limpiar todos los montajes temporales.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="47"/>
        <source>Clearing all temporary mounts.</source>
        <translation>Limpiando todos los montajes temporarios.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="58"/>
        <source>Cannot get list of temporary mounts.</source>
        <translation>No se puede obtener la lista de los montajes temporales.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="97"/>
        <source>Cleared all temporary mounts.</source>
        <translation>Se limpiaron todos los montajes temporales.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="14"/>
        <source>Create a Partition</source>
        <translation>Crear una partición</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="38"/>
        <source>Partition &amp;Type:</source>
        <translation>&amp;Tipo de partición:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="50"/>
        <source>&amp;Primary</source>
        <translation>&amp;Primaria</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="60"/>
        <source>E&amp;xtended</source>
        <translation>E&amp;xtendida</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="89"/>
        <source>Fi&amp;le System:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="181"/>
        <source>Flags:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="118"/>
        <source>&amp;Mount Point:</source>
        <translation>&amp;Punto de montaje:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="164"/>
        <source>Si&amp;ze:</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="174"/>
        <source> MB</source>
        <translation>MB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="136"/>
        <source>Logical</source>
        <translation>Lógica</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="141"/>
        <source>Primary</source>
        <translation>Primaria</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="158"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="48"/>
        <source>Create new %2MB partition on %4 (%3) with file system %1.</source>
        <translation>Crear una nueva partición de %2MB en %4(%3) con sistema de archivos %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="59"/>
        <source>Create new &lt;strong&gt;%2MB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Crear una nueva partición de &lt;strong&gt;%2MB&lt;/strong&gt; en &lt;strong&gt;%4&lt;/strong&gt; (%3) con sistema de archivos &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="71"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>Creando nueva partición %1 en %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="83"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>El instalador no ha podido crear la partición en el disco &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="92"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>No se puede abrir el dispositivo &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="102"/>
        <source>Could not open partition table.</source>
        <translation>No se puede abrir la tabla de particiones.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="126"/>
        <source>The installer failed to create file system on partition %1.</source>
        <translation>El instalador no ha podido crear el sistema de archivos en la partición %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="134"/>
        <source>The installer failed to update partition table on disk &apos;%1&apos;.</source>
        <translation>El instalador no ha podido actualizar la tabla de particiones en el disco &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="20"/>
        <source>Create Partition Table</source>
        <translation>Crear tabla de particiones</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="39"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>Al crear una tabla de particiones se borrarán todos los datos del disco.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="65"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>¿Qué tipo de tabla de particiones quieres crear?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="72"/>
        <source>Master Boot Record (MBR)</source>
        <translation>Master Boot Record (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="82"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>GUID tabla de particiones (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="49"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>Crear una nueva tabla de partición %1 en %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="56"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Crear una nueva tabla de partición &lt;strong&gt;%1&lt;/strong&gt; en &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="66"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>Creando nueva tabla de partición %1 en %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="76"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>El instalador no ha podido crear la tabla de particiones en %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="84"/>
        <source>Could not open device %1.</source>
        <translation>No se puede abrir el dispositivo %1.</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="49"/>
        <source>Create user %1</source>
        <translation>Crear usuario %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="56"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Crear usuario &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="63"/>
        <source>Creating user %1.</source>
        <translation>Creando usuario %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="79"/>
        <source>Sudoers dir is not writable.</source>
        <translation>No se puede escribir en el directorio Sudoers.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="83"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation>No se puede crear el archivo sudoers para escribir.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="91"/>
        <source>Cannot chmod sudoers file.</source>
        <translation>No se puede ejecutar chmod sobre el archivo sudoers.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="97"/>
        <source>Cannot open groups file for reading.</source>
        <translation>No se puede abrir para leer el archivo groups.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="136"/>
        <source>Cannot create user %1.</source>
        <translation>No se puede crear el usuario %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="138"/>
        <source>useradd terminated with error code %1.</source>
        <translation>useradd ha terminado con el código de error %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="143"/>
        <source>Cannot set full name for user %1.</source>
        <translation>No se puede establecer el nombre y los apellidos del usuario %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="145"/>
        <source>chfn terminated with error code %1.</source>
        <translation>chfn ha terminado con el código de error %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="155"/>
        <source>Cannot set home directory ownership for user %1.</source>
        <translation>No se puede establecer el propietario del directorio personal del usuario %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="157"/>
        <source>chown terminated with error code %1.</source>
        <translation>chown ha terminado con el código de error %1.</translation>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="42"/>
        <source>Delete partition %1.</source>
        <translation>Borrar partición %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="50"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Borrar partición &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="58"/>
        <source>Deleting partition %1.</source>
        <translation>Borrando partición %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="67"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>El instalador no ha podido borrar la partición %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="73"/>
        <source>Partition (%1) and device (%2) do not match.</source>
        <translation>La partición (%1) y el dispositivo (%2) no coinciden.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="85"/>
        <source>Could not open device %1.</source>
        <translation>No se puede abrir el dispositivo %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="94"/>
        <source>Could not open partition table.</source>
        <translation>No se puede abrir la tabla de particiones.</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="63"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>El tipo de &lt;strong&gt;tabla de partición&lt;/strong&gt; en el medio de almacenamiento seleccionado.&lt;br&gt;&lt;br&gt;La única manera de cambiar el tipo de tabla de partición es borrándola y recrear la tabla de partición desde cero, lo que destruirá todos los datos en el medio de almacenamiento.&lt;br&gt;Este instalador mantendrá la tabla de partición actual a menos que explícitamente elija otra cosa.&lt;br&gt;Si no está seguro, en sistemas modernos, se prefiere usar GPT.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="107"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>Este dispositivo tiene una tabla de partición &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="114"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>Este es un dispositivo de &lt;strong&gt;loop&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Es un seudodispositivo sin tabla de partición que hace que un archivo sea accesible como un dispositivo de bloqueo. Este tipo de configuración habitualmente contiene un único sistema de archivos.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="121"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="131"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;Este es el tipo de tabla de partición para sistemas modernos que inician desde un entorno de inicio &lt;strong&gt;EFI&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="137"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;Este tipo de tabla de partición sólo es aconsejable en sistemas antiguos que inician desde un entorno de inicio &lt;strong&gt;BIOS&lt;/strong&gt;. En la mayoría de los otros casos se recomienda GPT.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Advertencia:&lt;/strong&gt; la tabla de particiones MBR es un estándar obsoleto de la era MS-DOS.&lt;br&gt;Se pueden crear sólo 4 particiones &lt;em&gt;primarias&lt;/em&gt;, que pueden contener muchas particiones &lt;em&gt;lógicas&lt;/em&gt;.</translation>
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
        <translation>Editar las particiones existentes.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="50"/>
        <source>Content:</source>
        <translation>Contenido:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="60"/>
        <source>&amp;Keep</source>
        <translation>&amp;Mantener</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="70"/>
        <source>Format</source>
        <translation>Formatear</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="89"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>Advertencia: Al formatear la partición se borrarán todos los datos.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="99"/>
        <source>&amp;Mount Point:</source>
        <translation>Punto de &amp;montaje:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="119"/>
        <source>Si&amp;ze:</source>
        <translation>Si&amp;ze:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="132"/>
        <source>Fi&amp;le System:</source>
        <translation>Sistema de Fi&amp;le:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="145"/>
        <source>Flags:</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="88"/>
        <source>Set partition information</source>
        <translation>Establecer la información de la partición</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="111"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>Instalar %1 en &lt;strong&gt;la nueva&lt;/strong&gt; partición de sistema %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="116"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Establecer &lt;strong&gt;la nueva&lt;/strong&gt; partición %2 con punto de montaje &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="124"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Instalar %2 en la partición de sistema %3 &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="130"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Establecer la partición %3 &lt;strong&gt;%1&lt;/strong&gt; con punto de montaje &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="142"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Instalar el cargador de arranque en &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="152"/>
        <source>Setting up mount points.</source>
        <translation>Configurando puntos de montaje.</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulario</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="77"/>
        <source>&amp;Restart now</source>
        <translation>&amp;Reiniciar ahora</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="50"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;Todo terminado.&lt;/h1&gt;&lt;br/&gt;%1 se ha instalado en su ordenador.&lt;br/&gt;Ahora puede reiniciar en su nuevo sistema, o continuar usando %2 en modo live.</translation>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="43"/>
        <source>Finish</source>
        <translation>Finalizar</translation>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="48"/>
        <source>Format partition %1 (file system: %2, size: %3 MB) on %4.</source>
        <translation>Formatear partición %1 (sistema de archivos: %2, tamaño: %3 MB) en %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="59"/>
        <source>Format &lt;strong&gt;%3MB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Formatear la partición &lt;strong&gt;%1&lt;/strong&gt; de &lt;strong&gt;%3MB&lt;/strong&gt; con sistema de archivos &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="70"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>Formateando partición %1 con sistema de archivos %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="82"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>El instalador no ha podido formatear la partición %1 en el disco &apos;%2&apos;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="90"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>No se puede abrir el dispositivo &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="99"/>
        <source>Could not open partition table.</source>
        <translation>No se puede abrir la tabla de particiones.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="107"/>
        <source>The installer failed to create file system on partition %1.</source>
        <translation>El instalador no ha podido crear el sistema de archivos en la partición %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="115"/>
        <source>The installer failed to update partition table on disk &apos;%1&apos;.</source>
        <translation>El instalador no ha podido actualizar la tabla de particiones en el disco &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>KeyboardPage</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="201"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation>Establecer el modelo de teclado a %1.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="203"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation>Establecer la disposición del teclado a %1/%2.</translation>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="49"/>
        <source>Keyboard</source>
        <translation>Teclado</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="33"/>
        <source>System locale setting</source>
        <translation>Configuración regional del sistema</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="40"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>La configuración regional del sistema afecta el idioma y el juego de caracteres para algunos elementos de la línea de comandos.&lt;br/&gt;La configuración actual es &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulario</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="88"/>
        <source>I accept the terms and conditions above.</source>
        <translation>Acepto los términos y condiciones que se describen arriba.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="115"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation>&lt;h1&gt;Acuerdo de Licencia&lt;/h1&gt;Este procedimiento de configuración instalará sofware propietario que está sujeto a los términos de una licencia.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="118"/>
        <source>Please review the End User License Agreements (EULAs) above.&lt;br/&gt;If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation>Por favor revise el Acuerdo de Licencia de Usuario Final (EULAS) de arriba.&lt;br/&gt;Si no acepta los términos, el procedimiento de configuración no podrá continuar.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="124"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;In case non-free was selected, this installer will install proprietary packages &lt;br/&gt;that have additional End User License Agreements (EULAs) attached to them.</source>
        <translation>&lt;h1&gt;Acuerdo de Licencia&lt;/h1&gt;En caso de haber seleccionado soft no libre, este instalador instalará paquetes propietarios &lt;br/&gt;que tiene adosado Acuerdos de Licencia de Usuario Final (EULAs).</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="127"/>
        <source>Please review the End User License Agreements (EULAs) above.&lt;br/&gt;If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation>Por favor revise los Acuerdos de Licencia de Usuario Final (EULAs) de arriba.&lt;br/&gt;Si no está de acuerdo con sus términos, no se instalará el software propietario, y se usarán alternativas libres en su lugar.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="157"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation>&lt;strong&gt;driver %1&lt;/strong&gt;&lt;br/&gt;por %2</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="164"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation>&lt;strong&gt;drivers de video %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;por %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="170"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;plugin de navegador web %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;por %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="176"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;codec %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;por %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="182"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;paquete %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;por %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="188"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;por %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="200"/>
        <source>&lt;a href=&quot;%1&quot;&gt;view license agreement&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;%1&quot;&gt;ver acuerdo de licencia&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="51"/>
        <source>License</source>
        <translation>Licencia</translation>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="158"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="169"/>
        <source>The system locale is set to %1.</source>
        <translation>El sistema de configuración regional se establece en %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="166"/>
        <source>Region:</source>
        <translation>Región:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="167"/>
        <source>Zone:</source>
        <translation>Zona:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="172"/>
        <source>&amp;Change...</source>
        <translation>&amp;Cambiar...</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="266"/>
        <source>Set timezone to %1/%2.&lt;br/&gt;</source>
        <translation>Establecer la zona horaria a %1%2. &lt;br/&gt;</translation>
    </message>
</context>
<context>
    <name>LocaleViewStep</name>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="48"/>
        <source>Loading location data...</source>
        <translation>Cargando datos de ubicación...</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="82"/>
        <source>Location</source>
        <translation>Ubicación</translation>
    </message>
</context>
<context>
    <name>MoveFileSystemJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="66"/>
        <source>Move file system of partition %1.</source>
        <translation>Mover el sistema de archivos de la partición %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="80"/>
        <source>Could not open file system on partition %1 for moving.</source>
        <translation>No se puede abrir para mover el sistema de archivos de la partición %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="86"/>
        <source>Could not create target for moving file system on partition %1.</source>
        <translation>No se puede crear el destino para mover el sistema de archivos en la partición %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="95"/>
        <source>Moving of partition %1 failed, changes have been rolled back.</source>
        <translation>Ha surgido un fallo al mover la partición 1%, los cambios han sido deshechos.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="101"/>
        <source>Moving of partition %1 failed. Roll back of the changes have failed.</source>
        <translation>Ha surgido un fallo al mover la partición %1. No se han podido deshacer los cambios.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="113"/>
        <source>Updating boot sector after the moving of partition %1 failed.</source>
        <translation>No se ha podido actualizar el sector de arranque después de mover la partición %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="127"/>
        <source>The logical sector sizes in the source and target for copying are not the same. This is currently unsupported.</source>
        <translation>El tamaño lógico de los sectores del destino y del origen de la copia no es el mismo. Esta operación no está soportada.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="197"/>
        <source>Source and target for copying do not overlap: Rollback is not required.</source>
        <translation>El origen y el destino no se superponen: no se necesita deshacer.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="221"/>
        <location filename="../src/modules/partition/jobs/MoveFileSystemJob.cpp" line="229"/>
        <source>Could not open device %1 to rollback copying.</source>
        <translation>No se puede abrir el dispositivo %1 para deshacer la copia.</translation>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulario</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="70"/>
        <source>Keyboard Model:</source>
        <translation>Modelo de teclado:</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="131"/>
        <source>Type here to test your keyboard</source>
        <translation>Escribe aquí para probar el teclado</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="14"/>
        <source>Form</source>
        <translation>Formulario</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="36"/>
        <source>What is your name?</source>
        <translation>¿Cuál es tu nombre?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="117"/>
        <source>What name do you want to use to log in?</source>
        <translation>¿Qué nombre quieres usar para acceder al sistema?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="197"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="306"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="437"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="582"/>
        <source>font-weight: normal</source>
        <translation>font-weight: normal</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="200"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can set up multiple accounts after installation.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Si el ordenador lo usa más de una persona puedes configurar más cuentas después de la instalación.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="335"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Elige una contraseña para proteger tu cuenta.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="440"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Escribe dos veces la misma contraseña para que se pueda comprobar si tiene errores. Una buena contraseña está formada por letras, números y signos de puntuación, tiene por lo menos ocho caracteres y hay que cambiarla cada cierto tiempo.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="226"/>
        <source>What is the name of this computer?</source>
        <translation>¿Cuál es el nombre de este ordenador?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="309"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Este es el nombre que se usará para que otros usuarios de la red puedan identificar el ordenador&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="450"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>Iniciar sesión automáticamente sin pedir la contraseña.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="457"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Usar la misma contraseña para la cuenta de administrador.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="480"/>
        <source>Choose a password for the administrator account.</source>
        <translation>Elige una contraseña para la cuenta de administrador.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="585"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Escribe dos veces la contraseña para comprobar si tiene errores&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="191"/>
        <source>Root</source>
        <translation>Root</translation>
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
        <translation>Sistema EFI</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="201"/>
        <source>Swap</source>
        <translation>Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="203"/>
        <source>New partition for %1</source>
        <translation>Partición nueva para %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="220"/>
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
        <translation>Espacio libre</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="141"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="173"/>
        <source>New partition</source>
        <translation>Nueva partición</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="242"/>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="244"/>
        <source>File System</source>
        <translation>Sistema de archivos</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="246"/>
        <source>Mount Point</source>
        <translation>Punto de montaje</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="248"/>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulario</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="22"/>
        <source>Storage de&amp;vice:</source>
        <translation>Dispositivo de almacenamiento:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="51"/>
        <source>&amp;Revert All Changes</source>
        <translation>Deshace&amp;r todos los cambios</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="84"/>
        <source>New Partition &amp;Table</source>
        <translation>Nueva &amp;tabla de particiones</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="104"/>
        <source>&amp;Create</source>
        <translation>&amp;Crear</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="111"/>
        <source>&amp;Edit</source>
        <translation>&amp;Editar</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="118"/>
        <source>&amp;Delete</source>
        <translation>Borrar</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="145"/>
        <source>Install boot &amp;loader on:</source>
        <translation>Instalar el cargador de &amp;arranque en:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="147"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>¿Estás seguro de que quieres crear una nueva tabla de particiones en %1?</translation>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="67"/>
        <source>Gathering system information...</source>
        <translation>Recogiendo información sobre el sistema...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="106"/>
        <source>Partitions</source>
        <translation>Particiones</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="143"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system.</source>
        <translation>Instalar %1 &lt;strong&gt;junto a&lt;/strong&gt; otro sistema operativo.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="148"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk and install %1.</source>
        <translation>&lt;strong&gt;Borrar /strong&gt; el disco e instalar %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="153"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition with %1.</source>
        <translation>&lt;strong&gt;Reemplazar&lt;/strong&gt; una partición con %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="158"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning.</source>
        <translation>Particionado &lt;strong&gt;Manual&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="171"/>
        <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system on disk &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Instalar %1 &lt;strong&gt;junto a&lt;/strong&gt; otro sistema operativo en el disco &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="178"/>
        <source>&lt;strong&gt;Erase&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) and install %1.</source>
        <translation>&lt;strong&gt;Borrar&lt;/strong&gt; disco &lt;strong&gt;%2&lt;/strong&gt; (%3) e instalar %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="185"/>
        <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition on disk &lt;strong&gt;%2&lt;/strong&gt; (%3) with %1.</source>
        <translation>&lt;strong&gt;Reemplazar&lt;/strong&gt; una partición en el disco  &lt;strong&gt;%2&lt;/strong&gt; (%3) con %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="192"/>
        <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning on disk &lt;strong&gt;%1&lt;/strong&gt; (%2).</source>
        <translation>Particionado &lt;strong&gt;Manual&lt;/strong&gt; en disco  &lt;strong&gt;%1&lt;/strong&gt; (%2).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="200"/>
        <source>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
        <translation>Disco &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="228"/>
        <source>Current:</source>
        <translation>Actual:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="244"/>
        <source>After:</source>
        <translation>Luego:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="386"/>
        <source>No EFI system partition configured</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="387"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a FAT32 filesystem with the &lt;strong&gt;esp&lt;/strong&gt; flag enabled and mount point &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="401"/>
        <source>EFI system partition flag not set</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="402"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;A partition was configured with mount point &lt;strong&gt;%2&lt;/strong&gt; but its &lt;strong&gt;esp&lt;/strong&gt; flag is not set.&lt;br/&gt;To set the flag, go back and edit the partition.&lt;br/&gt;&lt;br/&gt;You can continue without setting the flag but your system may fail to start.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="82"/>
        <source>Default Keyboard Model</source>
        <translation>Modelo de teclado por defecto</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="127"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="163"/>
        <source>Default</source>
        <translation>Por defecto</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="49"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>Espacio sin particionar o tabla de partición desconcida</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="157"/>
        <source>unknown</source>
        <translation>desconocida</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="159"/>
        <source>extended</source>
        <translation>extendida</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/KPMHelpers.cpp" line="161"/>
        <source>unformatted</source>
        <translation>sin formato</translation>
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
        <translation>Seleccione donde instalar %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Advertencia: &lt;/font&gt;esto borrará todos los archivos presentes en la partición seleccionada.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="161"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>El ítem seleccionado no parece ser una partición válida.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="169"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1 no puede ser instalado en un espacio vacío. Por favor selecciones una partición existente.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="180"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1 no puede ser instalado en una partición extendida. Por favor seleccione una partición primaria o una partición lógica.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="191"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>%1 no puede ser instalado en esta partición.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="198"/>
        <source>Data partition (%1)</source>
        <translation>Partición de datos (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="215"/>
        <source>Unknown system partition (%1)</source>
        <translation>Partición de sistema desconocida (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="220"/>
        <source>%1 system partition (%2)</source>
        <translation>%1 partición de sistema (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="231"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;La partición %1 es demasiado pequeña para %2. Por favor seleccione una partición con una capacidad de al menos %3 GB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="255"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;No se pudo encontrar una partición EFI en este sistema. Por favor vuelva atrás y use la partición manual para configurar %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="267"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="286"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="311"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 se instalará en %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Advertencia: &lt;/font&gt;todos los datos en la partición %2 se perderán.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="277"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>Se usará la partición sistema EFI en %1 para iniciar %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="295"/>
        <source>EFI system partition:</source>
        <translation>Partición sistema EFI:</translation>
    </message>
</context>
<context>
    <name>RequirementsChecker</name>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="57"/>
        <source>Gathering system information...</source>
        <translation>Reuniendo información del sistema...</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="98"/>
        <source>has at least %1 GB available drive space</source>
        <translation>tiene al menos %1 GB de espacio en disco disponible </translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="100"/>
        <source>There is not enough drive space. At least %1 GB is required.</source>
        <translation>No hay espacio suficiente en disco. Se requiere al menos %1 GB.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="108"/>
        <source>has at least %1 GB working memory</source>
        <translation>tiene al menos %1 GB de memoria de trabajo</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="110"/>
        <source>The system does not have enough working memory. At least %1 GB is required.</source>
        <translation>El sistema no tiene suficiente memoria de trabajo. Se requiere al menos %1 GB.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="118"/>
        <source>is plugged in to a power source</source>
        <translation>está conectado a una fuente de energía</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="119"/>
        <source>The system is not plugged in to a power source.</source>
        <translation>El sistema no está conectado a una fuente de energía.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="126"/>
        <source>is connected to the Internet</source>
        <translation>está conectado a internet</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="127"/>
        <source>The system is not connected to the Internet.</source>
        <translation>El sistema no está conectado a Internet.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/RequirementsChecker.cpp" line="135"/>
        <source>The installer is not running with administrator rights.</source>
        <translation>El instalador no se está ejecutando con permisos de administrador.</translation>
    </message>
</context>
<context>
    <name>ResizeFileSystemJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="76"/>
        <source>Resize file system on partition %1.</source>
        <translation>Redimensionar el sistema de archivos de la partición %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="91"/>
        <source>Parted failed to resize filesystem.</source>
        <translation>Parted no ha podido redimensionar el sistema de archivos.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="101"/>
        <source>Failed to resize filesystem.</source>
        <translation>No se ha podido redimensionar el sistema de archivos.</translation>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="187"/>
        <source>Resize partition %1.</source>
        <translation>Redimensionar partición %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="194"/>
        <source>Resize &lt;strong&gt;%2MB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MB&lt;/strong&gt;.</source>
        <translation>Redimensionar la partición &lt;strong&gt;%1&lt;/strong&gt; de &lt;strong&gt;2MB&lt;/strong&gt; a &lt;strong&gt;%3MB&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="205"/>
        <source>Resizing %2MB partition %1 to %3MB.</source>
        <translation>Redimensionar partición %1 de %2MB a %3MB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="232"/>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="298"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>El instalador no ha podido redimensionar la partición %1 del disco &apos;%2&apos;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="237"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation>No se puede abrir el dispositivo &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>ScanningDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="83"/>
        <source>Scanning storage devices...</source>
        <translation>Buscando medios de almacenamiento...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="84"/>
        <source>Partitioning</source>
        <translation>Particionando</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="37"/>
        <source>Set hostname %1</source>
        <translation>Establecer el nombre del equipo %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="44"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Ajustar hostname &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="51"/>
        <source>Setting hostname %1.</source>
        <translation>Configurar hostname %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="61"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="68"/>
        <source>Internal Error</source>
        <translation>Error interno</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="75"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="86"/>
        <source>Cannot write hostname to target system</source>
        <translation>No se puede escribir el nombre del equipo en el sistema destino</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="57"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>Establecer el modelo de teclado a % 1, la disposición a %2-%3</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="284"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>Error al escribir configuración del teclado para la consola virtual.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="285"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="289"/>
        <source>Failed to write to %1</source>
        <translation>Error al escribir en % 1</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="288"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>Error al escribir la configuración del teclado para X11.</translation>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="47"/>
        <source>Set flags on partition %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="56"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="59"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="74"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="90"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="98"/>
        <source>Could not open device &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="107"/>
        <source>Could not open partition table on device &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="119"/>
        <source>Could not find partition &apos;%1&apos;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>SetPartGeometryJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="144"/>
        <source>Update geometry of partition %1.</source>
        <translation>Actualizar la geometría de la partición %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="156"/>
        <source>Failed to change the geometry of the partition.</source>
        <translation>No se ha podido cambiar la geometría de la partición.</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="42"/>
        <source>Set password for user %1</source>
        <translation>Establecer contraseña del usuario %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="49"/>
        <source>Setting password for user %1.</source>
        <translation>Poner contraseña para usuario %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="59"/>
        <source>Bad destination system path.</source>
        <translation>El destino de la ruta del sistema es errónea.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="60"/>
        <source>rootMountPoint is %1</source>
        <translation>El punto de montaje de root es %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="74"/>
        <source>Cannot set password for user %1.</source>
        <translation>No se puede establecer la contraseña del usuario %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="76"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod ha terminado con el código de error %1.</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="43"/>
        <source>Set timezone to %1/%2</source>
        <translation>Establecer el uso horario a %1%2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot access selected timezone path.</source>
        <translation>No se puede encontrar la ruta a la zona horaria seleccionada.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Bad path: %1</source>
        <translation>Ruta errónea: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="86"/>
        <source>Cannot set timezone.</source>
        <translation>No se puede establecer la zona horaria.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="87"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>No se puede crear el enlace, objetivo: %1; nombre del enlace: %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="95"/>
        <source>Cannot set timezone,</source>
        <translation>No se puede ajustar la zona horaria,</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="96"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>No se puede abrir /etc/timezone para escribir en él</translation>
    </message>
</context>
<context>
    <name>SummaryPage</name>
    <message>
        <location filename="../src/modules/summary/SummaryPage.cpp" line="46"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation>Esto es un resumen de todo lo que se hará una vez que comience con el procedimiento de instalación.</translation>
    </message>
</context>
<context>
    <name>SummaryViewStep</name>
    <message>
        <location filename="../src/modules/summary/SummaryViewStep.cpp" line="43"/>
        <source>Summary</source>
        <translation>Resumen</translation>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="268"/>
        <source>Your username is too long.</source>
        <translation>Su nombre de usuario es demasiado largo.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="278"/>
        <source>Your username contains invalid characters. Only lowercase letters and numbers are allowed.</source>
        <translation>Su nombre de usuario contiene caracteres inválidos. Sólo están permitidos letras minúsculas y números.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="322"/>
        <source>Your hostname is too short.</source>
        <translation>Su nombre de host es demasiado corto.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="333"/>
        <source>Your hostname is too long.</source>
        <translation>Su nombre de host es demasiado largo.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="344"/>
        <source>Your hostname contains invalid characters. Only letters, numbers and dashes are allowed.</source>
        <translation>Su nombre de host contiene caracteres inválidos. Solamente se permiten letras, números y guiones.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="375"/>
        <location filename="../src/modules/users/UsersPage.cpp" line="408"/>
        <source>Your passwords do not match!</source>
        <translation>Tu contraseña no coincide</translation>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
        <source>Users</source>
        <translation>Usuarios</translation>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="14"/>
        <source>Form</source>
        <translation>Formulario</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="75"/>
        <source>&amp;Language:</source>
        <translation>&amp;Idioma:</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="250"/>
        <source>&amp;Release notes</source>
        <translation>&amp;Notas de lanzamiento</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="240"/>
        <source>&amp;Known issues</source>
        <translation>&amp;Problemas conocidos</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="193"/>
        <source>&amp;Support</source>
        <translation>&amp;Soporte</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="183"/>
        <source>&amp;About</source>
        <translation>&amp;Acerca de KaOS</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="56"/>
        <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenido al instalador de %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="70"/>
        <source>About %1 installer</source>
        <translation>Acerca del instalador %1</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="72"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2015 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Thanks to: Anke Boersma, Aurélien Gâteau, Kevin Kofler, Philip Müller, Pier Luigi Fiorini and Rohan Garg.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;http://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;para %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2015 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Gracias a: Anke Boersma, Aurélien Gâteau, Kevin Kofler, Philip Müller, Pier Luigi Fiorini y Rohan Garg.&lt;br/&gt;&lt;br/&gt;El desarrollo de &lt;a href=&quot;http://calamares.io/&quot;&gt;Calamares&lt;/a&gt; está patrocinado por &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="193"/>
        <source>%1 support</source>
        <translation>%1 soporte</translation>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="50"/>
        <source>Welcome</source>
        <translation>Bienvenido</translation>
    </message>
</context>
<context>
    <name>show</name>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="47"/>
        <source>Here the actual install of KaOS will start.&lt;br/&gt;Use the left &lt;b&gt;mouse button&lt;/b&gt; to go to the next slide, right for previous.&lt;br/&gt;After creating your chosen disk setup in the first 10 % &lt;br/&gt;the full copying of the ISO will take the longest of this install phase &lt;br/&gt;and will run until approximately 30%.&lt;br/&gt;</source>
        <translation>Aquí comienza la instalación de KaOS actual.&lt;br/&gt;Use &lt;b&gt;el botón izquierdo del mouse&lt;/b&gt; para ir a la siguiente diapositiva, el derecho para la anterior.&lt;br/&gt;Luego de crearse la configuración de disco elegida durante el 10 % inicial,  &lt;br/&gt;la copia completa de la ISO será lo más largo de esta fase de la &lt;br/&gt;y se hará hasta aproximadamente el 30 %.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="73"/>
        <source>After the ISO is copied some 25 post-install modules will run.&lt;br/&gt;This includes setting user specific options, &lt;br/&gt;removing Live Session only packages&lt;br/&gt;and adjusting hardware setup.&lt;br/&gt;</source>
        <translation>Luego de copiarse la ISO se ejecutarán unos 25 módulos de post-instalacion.&lt;br/&gt;Esto incluye la configuración de las opciones específicas de usuario.&lt;br/&gt;removiendo sólo los paquetes de la Sesión Live&lt;br/&gt;y ajustando la configuración del hardware.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="98"/>
        <source>The default Office Suite is Calligra.&lt;br/&gt;LibreOffice is available in the repositories. &lt;br/&gt;</source>
        <translation>La Suite de Oficina por defecto es Calligra.&lt;br/&gt;LibreOffice se encuentra disponible en los repositorios.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="121"/>
        <source>Qt/KDE specific internet applications include the &lt;br/&gt;Qupzilla web-browser and kde-telepathy for &lt;br/&gt;chat and Instant Messaging. &lt;br/&gt;</source>
        <translation>Las aplicaciones Qt/KDE específicas de internet incluen el &lt;br/&gt;navegador web Qupzilla en kde-telepathy para &lt;br/&gt;chat y Mensajería Instantánea.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="145"/>
        <source>For package management Octopi is the GUI application.&lt;br/&gt;</source>
        <translation>Para la gestión de paquetes Octopi es la aplicación GUI.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="167"/>
        <source>May using KaOS be a pleasant experience for you.</source>
        <translation>Que el uso de KaOS sea una experiencia placentera para Ud.</translation>
    </message>
</context>
</TS>