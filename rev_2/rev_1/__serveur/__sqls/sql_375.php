<?php
function sql_375($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , 
      `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , 
      `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , 
      `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , 
      `T2`.`chp_nom_dossier` , `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , 
      `T0`.`cht_commentaire_projet` , `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier` , `T0`.`chx_dossier_bdds_projet` , `T3`.`chp_nom_dossier` , 
      `T4`.`chp_nom_dossier` , `T0`.`chx_dossier_js_projet`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_projets T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_menus_projet

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_dossiers T3 ON T3.chi_id_dossier = T0.chx_dossier_bdds_projet

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_dossiers T4 ON T4.chi_id_dossier = T0.chx_dossier_js_projet
    ';
    $sql0.=$from0;
    $where0=' WHERE `T0`.`chi_id_projet` = '.sq1($par['T0_chi_id_projet']).''.PHP_EOL;
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->enableExceptions(true);
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_projet' => $tab0[0],
                'T0.chp_nom_projet' => $tab0[1],
                'T0.chx_dossier_requetes_projet' => $tab0[2],
                'T0.chx_dossier_menus_projet' => $tab0[3],
                'T0.cht_commentaire_projet' => $tab0[4],
                'T1.chp_nom_dossier' => $tab0[5],
                'T2.chp_nom_dossier' => $tab0[6],
                'T0.chi_id_projet' => $tab0[7],
                'T0.chp_nom_projet' => $tab0[8],
                'T0.chx_dossier_requetes_projet' => $tab0[9],
                'T0.chx_dossier_menus_projet' => $tab0[10],
                'T0.cht_commentaire_projet' => $tab0[11],
                'T1.chp_nom_dossier' => $tab0[12],
                'T2.chp_nom_dossier' => $tab0[13],
                'T0.chi_id_projet' => $tab0[14],
                'T0.chp_nom_projet' => $tab0[15],
                'T0.chx_dossier_requetes_projet' => $tab0[16],
                'T0.chx_dossier_menus_projet' => $tab0[17],
                'T0.cht_commentaire_projet' => $tab0[18],
                'T1.chp_nom_dossier' => $tab0[19],
                'T2.chp_nom_dossier' => $tab0[20],
                'T0.chi_id_projet' => $tab0[21],
                'T0.chp_nom_projet' => $tab0[22],
                'T0.chx_dossier_requetes_projet' => $tab0[23],
                'T0.chx_dossier_menus_projet' => $tab0[24],
                'T0.cht_commentaire_projet' => $tab0[25],
                'T1.chp_nom_dossier' => $tab0[26],
                'T2.chp_nom_dossier' => $tab0[27],
                'T0.chx_dossier_bdds_projet' => $tab0[28],
                'T3.chp_nom_dossier' => $tab0[29],
                'T4.chp_nom_dossier' => $tab0[30],
                'T0.chx_dossier_js_projet' => $tab0[31],
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
           'texte_requete' => 'la selection sur les projets' , 
           'exception' => $e ,
            'id_bdd' => BDD_NUMERO_1
         );
    }
}
