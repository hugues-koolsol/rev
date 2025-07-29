<?php
function sql_127($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_basedd` , `T0`.`chx_dossier_id_basedd` , `T0`.`chx_projet_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_commentaire_basedd` , 
      `T0`.`chp_fournisseur_basedd` , `T1`.`chi_id_dossier` , `T1`.`chx_projet_dossier` , `T1`.`chp_nom_dossier` , `T1`.`chx_parent_dossier` , 
      `T2`.`chi_id_projet` , `T2`.`chp_nom_projet` , `T2`.`cht_commentaire_projet`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_bdds T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_basedd

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_projets T2 ON T2.chi_id_projet = T0.chx_projet_id_basedd
    ';
    $sql0.=$from0;
    $where0=' WHERE `T0`.`chx_projet_id_basedd` = '.sq1($par['T0_chx_projet_id_basedd']).''.PHP_EOL;
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_basedd' => $tab0[0],
                'T0.chx_dossier_id_basedd' => $tab0[1],
                'T0.chx_projet_id_basedd' => $tab0[2],
                'T0.chp_rev_travail_basedd' => $tab0[3],
                'T0.chp_commentaire_basedd' => $tab0[4],
                'T0.chp_fournisseur_basedd' => $tab0[5],
                'T1.chi_id_dossier' => $tab0[6],
                'T1.chx_projet_dossier' => $tab0[7],
                'T1.chp_nom_dossier' => $tab0[8],
                'T1.chx_parent_dossier' => $tab0[9],
                'T2.chi_id_projet' => $tab0[10],
                'T2.chp_nom_projet' => $tab0[11],
                'T2.cht_commentaire_projet' => $tab0[12],
            );
        }
        return array(
           __xst  => __xsu  ,
           __xva  => $donnees0   ,
           'sql0'    => $sql0          ,
           'where0'  => $where0     ,
        );
    }catch(Exception $e){
        return array(__xst => __xer , 'source_requete' => $sql0 , 'texte_requete' => 'la selection sur les bdds' , 'exception' => $e , 'id_bdd' => BDD_NUMERO_1 );
    }
}
