<?php
function sql_305($par,&$donnees_retournees,$that,$db){
    $sql0='
      UPDATE tbl_projets SET 
                  `chp_nom_projet` = '.sq1($par['n_chp_nom_projet']).' , 
                  `chx_dossier_requetes_projet` = '.sq1($par['n_chx_dossier_requetes_projet']).' , 
                  `chx_dossier_menus_projet` = '.sq1($par['n_chx_dossier_menus_projet']).' , 
                  `cht_commentaire_projet` = '.sq1($par['n_cht_commentaire_projet']).'
                WHERE `chi_id_projet` = '.sq1($par['c_chi_id_projet']).' ;
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
                __xme => 'erreur sql_305()'.' '.$db->lastErrorMsg(),
            )
        );
    }
}
