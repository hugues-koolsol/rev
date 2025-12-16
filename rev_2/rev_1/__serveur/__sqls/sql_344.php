<?php
function sql_344($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
      `T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
      `T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
      `T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_revs T0    ';
    $sql0.=$from0;
    $where0=' WHERE ( /* */ `T0`.`chi_id_rev` = '.sq1($par['T0_chi_id_rev']).')'.PHP_EOL;
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->enableExceptions(true);
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_rev' => $tab0[0],
                'T0.chp_provenance_rev' => $tab0[1],
                'T0.chx_source_rev' => $tab0[2],
                'T0.chp_id_rev' => $tab0[3],
                'T0.chp_valeur_rev' => $tab0[4],
                'T0.chp_type_rev' => $tab0[5],
                'T0.chp_niveau_rev' => $tab0[6],
                'T0.chp_quotee_rev' => $tab0[7],
                'T0.chp_pos_premier_rev' => $tab0[8],
                'T0.chp_pos_dernier_rev' => $tab0[9],
                'T0.chp_parent_rev' => $tab0[10],
                'T0.chp_nbr_enfants_rev' => $tab0[11],
                'T0.chp_num_enfant_rev' => $tab0[12],
                'T0.chp_profondeur_rev' => $tab0[13],
                'T0.chp_pos_ouver_parenthese_rev' => $tab0[14],
                'T0.chp_enfant_suivant_rev' => $tab0[15],
                'T0.chp_commentaire_rev' => $tab0[16],
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
           'texte_requete' => 'la selection sur les revs' , 
           'exception' => $e ,
            'id_bdd' => BDD_NUMERO_1
         );
    }
}
