<?php
function sql_330($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , 
      `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
      `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
      `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_genres T0    ';
    $sql0.=$from0;
    $where0=' WHERE `T0`.`chi_id_genre` = '.sq1($par['T0_chi_id_genre']).''.PHP_EOL;
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_genre' => $tab0[0],
                'T0.che_ordre_genre' => $tab0[1],
                'T0.chp_prefixe_genre' => $tab0[2],
                'T0.chp_nom_genre' => $tab0[3],
                'T0.chp_espece_genre' => $tab0[4],
                'T0.che_longueur_genre' => $tab0[5],
                'T0.che_est_primaire_genre' => $tab0[6],
                'T0.che_est_incrément_genre' => $tab0[7],
                'T0.che_est_obligatoire_genre' => $tab0[8],
                'T0.che_a_init_genre' => $tab0[9],
                'T0.che_init_est_mot_genre' => $tab0[10],
                'T0.cht_valeur_init_genre' => $tab0[11],
                'T0.che_est_parmis_genre' => $tab0[12],
                'T0.cht_parmis_genre' => $tab0[13],
                'T0.cht_fonctions_genre' => $tab0[14],
                'T0.che_est_nur_genre' => $tab0[15],
                'T0.che_est_tsm_genre' => $tab0[16],
                'T0.che_est_tsc_genre' => $tab0[17],
            );
        }
        return array(
           __xst  => __xsu  ,
           __xva  => $donnees0   ,
           'sql0'    => $sql0          ,
           'where0'  => $where0     ,
        );
    }catch(Exception $e){
        return array(
           __xst => __xer ,
           'sql0' => $sql0 , 
           'texte_requete' => 'la selection sur les genres' , 
           'exception' => $e ,
            'id_bdd' => BDD_NUMERO_1
         );
    }
}
