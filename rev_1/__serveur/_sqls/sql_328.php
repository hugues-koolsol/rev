<?php
function sql_328($par,&$donnees_retournees,$that){
    if($GLOBALS[DEVER_SRV]>=2){
        $donnees_retournees[__x_signaux][__xif][]='info <b>sql_328</b>';
    }
    $champs0='
      `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
      `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
      `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
      `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
      `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_genres T0    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    if(($par['T0_chi_id_genre'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chi_id_genre`',$par['T0_chi_id_genre']);
    }
    if(($par['T0_chp_nom_genre'] !== '')){
        $where0.=' AND `T0`.`chp_nom_genre` LIKE '.sq2($par['T0_chp_nom_genre']).''.PHP_EOL;
    }
    if(($par['T0_chp_prefixe_genre'] !== '')){
        $where0.=' AND `T0`.`chp_prefixe_genre` LIKE '.sq2($par['T0_chp_prefixe_genre']).''.PHP_EOL;
    }
    if(($par['T0_chp_espece_genre'] !== '')){
        $where0.=' AND `T0`.`chp_espece_genre` LIKE '.sq2($par['T0_chp_espece_genre']).''.PHP_EOL;
    }
    if(($par['T0_cht_valeur_init_genre'] !== '')){
        $where0.=' AND `T0`.`cht_valeur_init_genre` LIKE '.sq2($par['T0_cht_valeur_init_genre']).''.PHP_EOL;
    }
    if(($par['T0_cht_parmis_genre'] !== '')){
        $where0.=' AND `T0`.`cht_parmis_genre` LIKE '.sq2($par['T0_cht_parmis_genre']).''.PHP_EOL;
    }
    $sql0.=$where0;
    $order0='
       ORDER BY  `T0`.`che_ordre_genre` ASC, `T0`.`chi_id_genre` DESC';
    $sql0.=$order0;
    $plage0='
        LIMIT '.sq1($par['quantitee']).' OFFSET '.sq1($par['debut']).' ';
    $sql0.=$plage0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_genre' => $tab0[0],
                'T0.chp_nom_genre' => $tab0[1],
                'T0.che_ordre_genre' => $tab0[2],
                'T0.chp_prefixe_genre' => $tab0[3],
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
                'T0.chd__dtc_genre' => $tab0[18],
                'T0.chd__dtm_genre' => $tab0[19],
                'T0.che__nur_genre' => $tab0[20],
                'T0.che_est_session_genre' => $tab0[21],
                'T0.chp_nom_en_session_genre' => $tab0[22],
                'T0.che_est_positif_genre' => $tab0[23],
            );
        }
        $stmt0->close();
        $sql1='SELECT COUNT(*) '.$from0.$where0;
        $__nbEnregs=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->querySingle($sql1);
        return array(
           __xst  => __xsu       ,
           __xva  => $donnees0   ,
           'nombre'  => $__nbEnregs ,
           'sql0'    => $sql0          ,
           'where0'  => $where0     ,
        );
    }catch(Exception $e){
        return array(
                __xst => __xer , 
                'sql0' => $sql0 ,
                'texte_requete' => 'la liste sur les genres' ,
                'exception' => $e ,
                'id_bdd' => BDD_NUMERO_1 
            );
    }
}
