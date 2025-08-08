<?php
function sql_156($par,&$donnees_retournees,$that,$db){
    $sql0='
      INSERT INTO `tbl_projets`(
               `chi_id_projet` , 
               `chp_nom_projet`
            ) VALUES (
                '.sq1($par['chi_id_projet']).' , 
                '.sq1($par['chi_id_projet']).'
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
                __xme => 'erreur sql_156()'.' '.$db->lastErrorMsg(),
            )
        );
    }
}
