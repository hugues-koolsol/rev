<?php
function sql_345($par,&$donnees_retournees,$that,$db){
    $sql0='
      INSERT INTO `tbl_genres`(
               `chi_id_genre` , 
               `chp_nom_genre` , 
               `che_ordre_genre` , 
               `chp_prefixe_genre` , 
               `chp_espece_genre` , 
               `che_longueur_genre` , 
               `che_est_primaire_genre` , 
               `che_est_incrément_genre` , 
               `che_est_obligatoire_genre` , 
               `che_a_init_genre` , 
               `che_init_est_mot_genre` , 
               `cht_valeur_init_genre` , 
               `che_est_parmis_genre` , 
               `cht_parmis_genre` , 
               `cht_fonctions_genre` , 
               `che_est_nur_genre` , 
               `che_est_tsm_genre` , 
               `che_est_tsc_genre` , 
               `chd__dtc_genre` , 
               `chd__dtm_genre` , 
               `che_est_session_genre` , 
               `chp_nom_en_session_genre` , 
               `che_est_positif_genre` , 
               `cht_particularités_genre`
            ) VALUES (
                '.sq1($par['chi_id_genre']).' , 
                '.sq1($par['chp_nom_genre']).' , 
                '.sq1($par['che_ordre_genre']).' , 
                '.sq1($par['chp_prefixe_genre']).' , 
                '.sq1($par['chp_espece_genre']).' , 
                '.sq1($par['che_longueur_genre']).' , 
                '.sq1($par['che_est_primaire_genre']).' , 
                '.sq1($par['che_est_incrément_genre']).' , 
                '.sq1($par['che_est_obligatoire_genre']).' , 
                '.sq1($par['che_a_init_genre']).' , 
                '.sq1($par['che_init_est_mot_genre']).' , 
                '.sq1($par['cht_valeur_init_genre']).' , 
                '.sq1($par['che_est_parmis_genre']).' , 
                '.sq1($par['cht_parmis_genre']).' , 
                '.sq1($par['cht_fonctions_genre']).' , 
                '.sq1($par['che_est_nur_genre']).' , 
                '.sq1($par['che_est_tsm_genre']).' , 
                '.sq1($par['che_est_tsc_genre']).' , 
                '.sq1($par['chd__dtc_genre']).' , 
                '.sq1($par['chd__dtm_genre']).' , 
                '.sq1($par['che_est_session_genre']).' , 
                '.sq1($par['chp_nom_en_session_genre']).' , 
                '.sq1($par['che_est_positif_genre']).' , 
                '.sq1($par['cht_particularités_genre']).'
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
                __xme => 'erreur sql_345()'.' '.$db->lastErrorMsg(),
            )
        );
    }
}
