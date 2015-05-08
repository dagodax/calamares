set( COMPONENT_NAME "kaos_branding" )

#set( BRANDING_DIR ${CMAKE_INSTALL_SYSCONFDIR}/calamares/branding )
#set( BRANDING_COMPONENT_DESTINATION ${BRANDING_DIR}/${COMPONENT_NAME} )

if( IS_DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}/lang" )
    add_subdirectory( lang )
endif()

file( GLOB SUBDIRECTORIES RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} "*" )
foreach( SUBDIRECTORY ${SUBDIRECTORIES} )
    if( IS_DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}/${SUBDIRECTORY}" )
        calamares_add_branding_subdirectory( ${SUBDIRECTORY} )
    endif()
endforeach()
