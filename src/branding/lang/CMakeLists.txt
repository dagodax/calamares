foreach( lang en es es_AR fr nl_NL )
   list( APPEND TS_FILES "${CMAKE_CURRENT_SOURCE_DIR}/calamares-${COMPONENT_NAME}_${lang}.ts" )
endforeach()
qt5_add_translation( QM_FILES ${TS_FILES} )

add_custom_target( translations ALL DEPENDS ${QM_FILES} )
install( FILES ${QM_FILES} DESTINATION share/calamares/branding/${COMPONENT_NAME}/lang )