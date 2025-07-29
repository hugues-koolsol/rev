<?php
function sql_167($par,&$donnees_retournees,$that,$db){
    $sql0='
      UPDATE tbl_utilisateurs SET 
                  `chp_nom_de_connexion_utilisateur` = '.sq1($par['n_chp_nom_de_connexion_utilisateur']).' , 
                  `chp_mot_de_passe_utilisateur` = '.sq1($par['n_chp_mot_de_passe_utilisateur']).'
                WHERE `chi_id_utilisateur` = '.sq1($par['c_chi_id_utilisateur']).' ;
    ';
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$db->exec($sql0);
        return(array( __xst => __xsu ));
    }catch(Exception $e){
        return(array( 
            __xst => __xer, 
            'code_erreur' => $db->lastErrorCode() ,
            __xme => 'erreur sql_167()'.' '.$db->lastErrorMsg())
        );
    }
}
