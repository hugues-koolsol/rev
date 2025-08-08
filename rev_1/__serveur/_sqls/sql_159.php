<?php
function sql_159($par,&$donnees_retournees,$that,$db){
    $sql0='
      INSERT INTO `tbl_dossiers`(
               `chi_id_dossier` , 
               `chx_projet_dossier` , 
               `chp_nom_dossier` , 
               `chx_parent_dossier`
            ) VALUES (
                '.sq1($par['chi_id_dossier']).' , 
                '.sq1($par['chx_projet_dossier']).' , 
                '.sq1($par['chp_nom_dossier']).' , 
                '.sq1($par['chx_parent_dossier']).'
            );
    ';
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$db->exec($sql0);
        return(array( __xst => __xsu ));
    }catch(Exception $e){
        return(
            array( 
                __xst => __xer, 
                'exception' => $e , 
                'sql0'    => $sql0 ,
                'code_erreur' => $db->lastErrorCode() ,
                __xme => 'erreur sql_159()'.' '.$db->lastErrorMsg(),
            )
        );
    }
}
