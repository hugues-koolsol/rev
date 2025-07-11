<?php
function sql_34($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`chp_commentaire_projet` , `T0`.`chx_dossier_requetes_projet` , `T0`.`chx_dossier_menus_projet` , 
      `T1`.`chp_nom_dossier` , `T2`.`chp_nom_dossier`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_projets T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_menus_projet
    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chi_id_projet`',$par['T0_chi_id_projet']);
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_projet' => $tab0[0],
                'T0.chp_nom_projet' => $tab0[1],
                'T0.chp_commentaire_projet' => $tab0[2],
                'T0.chx_dossier_requetes_projet' => $tab0[3],
                'T0.chx_dossier_menus_projet' => $tab0[4],
                'T1.chp_nom_dossier' => $tab0[5],
                'T2.chp_nom_dossier' => $tab0[6],
            );
        }
        return array(
           __xst  => __xsu  ,
           __xva  => $donnees0   ,
           'sql0'    => $sql0          ,
           'where0'  => $where0     ,
        );
    }catch(Exception $e){
        return array(__xst => __xer , 'source_requete' => $sql0 , 'texte_requete' => 'la selection sur les projets' , 'exception' => $e , 'id_bdd' => BDD_NUMERO_1 );
    }
}
