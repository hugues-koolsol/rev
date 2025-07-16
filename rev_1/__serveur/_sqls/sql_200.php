<?php
function sql_200($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_menu` , `T0`.`chx_page_menu` , `T0`.`che_ordre_menu` , `T0`.`cht_prerequis_rev_menu` , `T0`.`cht_prerequis_php_menu` , 
      `T0`.`cht_libelle_menu` , `T1`.`chp_nom_page` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_groupe` , `T2`.`chx_groupe_acces` , 
      `T2`.`chi_id_acces` , `T4`.`chp_nom_metier` , `T2`.`chx_metier_acces` , `T1`.`cht_complement_page` , `T1`.`cht_contenu_methode_page`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_menus T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_pages T1 ON T1.chi_id_page = T0.chx_page_menu

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_page

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces
    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chi_id_menu`',$par['T0_chi_id_menu']);
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_menu' => $tab0[0],
                'T0.chx_page_menu' => $tab0[1],
                'T0.che_ordre_menu' => $tab0[2],
                'T0.cht_prerequis_rev_menu' => $tab0[3],
                'T0.cht_prerequis_php_menu' => $tab0[4],
                'T0.cht_libelle_menu' => $tab0[5],
                'T1.chp_nom_page' => $tab0[6],
                'T2.chp_nom_acces' => $tab0[7],
                'T3.chp_nom_groupe' => $tab0[8],
                'T2.chx_groupe_acces' => $tab0[9],
                'T2.chi_id_acces' => $tab0[10],
                'T4.chp_nom_metier' => $tab0[11],
                'T2.chx_metier_acces' => $tab0[12],
                'T1.cht_complement_page' => $tab0[13],
                'T1.cht_contenu_methode_page' => $tab0[14],
            );
        }
        return array(
           __xst  => __xsu  ,
           __xva  => $donnees0   ,
           'sql0'    => $sql0          ,
           'where0'  => $where0     ,
        );
    }catch(Exception $e){
        return array(__xst => __xer , 'source_requete' => $sql0 , 'texte_requete' => 'la selection sur les menus' , 'exception' => $e , 'id_bdd' => BDD_NUMERO_1 );
    }
}
