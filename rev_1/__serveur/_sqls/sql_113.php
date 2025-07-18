<?php
function sql_113($par,&$donnees_retournees,$that){
    if($GLOBALS[DEVER_SRV]>=2){
        $donnees_retournees[__x_signaux][__xif][]='info <b>sql_113</b>';
    }
    $champs0='
      `T0`.`chi_id_rev` , `T0`.`chx_projet_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , 
      `T0`.`chp_valeur_rev` , `T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , 
      `T0`.`chp_pos_dernier_rev` , `T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , 
      `T0`.`chp_pos_ouver_parenthese_rev` , `T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev` , `T1`.`chp_nom_source`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_revs T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_rev
    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    if(($par['T0_chi_id_rev'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chi_id_rev`',$par['T0_chi_id_rev']);
    }
    if(($par['T0_chx_projet_rev'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chx_projet_rev`',$par['T0_chx_projet_rev']);
    }
    if(($par['T0_chp_provenance_rev'] !== '')){
        $where0.=' AND `T0`.`chp_provenance_rev` LIKE '.sq2($par['T0_chp_provenance_rev']).''.PHP_EOL;
    }
    if(($par['T1_chp_nom_source'] !== '')){
        $where0.=' AND `T1`.`chp_nom_source` LIKE '.sq2($par['T1_chp_nom_source']).''.PHP_EOL;
    }
    if(($par['T0_chp_valeur_rev'] !== '')){
        $where0.=' AND `T0`.`chp_valeur_rev` LIKE '.sq2($par['T0_chp_valeur_rev']).''.PHP_EOL;
    }
    if(($par['T0_chx_source_rev'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chx_source_rev`',$par['T0_chx_source_rev']);
    }
    $sql0.=$where0;
    $order0='
       ORDER BY  `T0`.`chi_id_rev` ASC';
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
                'T0.chi_id_rev' => $tab0[0],
                'T0.chx_projet_rev' => $tab0[1],
                'T0.chp_provenance_rev' => $tab0[2],
                'T0.chx_source_rev' => $tab0[3],
                'T0.chp_id_rev' => $tab0[4],
                'T0.chp_valeur_rev' => $tab0[5],
                'T0.chp_type_rev' => $tab0[6],
                'T0.chp_niveau_rev' => $tab0[7],
                'T0.chp_quotee_rev' => $tab0[8],
                'T0.chp_pos_premier_rev' => $tab0[9],
                'T0.chp_pos_dernier_rev' => $tab0[10],
                'T0.chp_parent_rev' => $tab0[11],
                'T0.chp_nbr_enfants_rev' => $tab0[12],
                'T0.chp_num_enfant_rev' => $tab0[13],
                'T0.chp_profondeur_rev' => $tab0[14],
                'T0.chp_pos_ouver_parenthese_rev' => $tab0[15],
                'T0.chp_enfant_suivant_rev' => $tab0[16],
                'T0.chp_commentaire_rev' => $tab0[17],
                'T1.chp_nom_source' => $tab0[18],
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
        return array(__xst => __xer , 'source_requete' => $sql0 , 'texte_requete' => 'la liste sur les revs' , 'exception' => $e , 'id_bdd' => BDD_NUMERO_1 );
    }
}
