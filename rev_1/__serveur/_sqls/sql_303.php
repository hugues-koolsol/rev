<?php
function sql_303($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_menu` , `T0`.`cht_prerequis_rev_menu` , `T0`.`cht_prerequis_php_menu` , `T0`.`cht_libelle_menu` , `T1`.`chp_nom_page` , 
      `T1`.`chp_methode_page` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , `T3`.`chp_nom_source` , `T1`.`cht_complement_page` , 
      `T1`.`cht_contenu_methode_page`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_menus T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_pages T1 ON T1.chi_id_page = T0.chx_page_menu

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_page

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_page
    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=' AND `T0`.`chi_id_menu` > '.sq1($par['T0_chi_id_menu']).''.PHP_EOL;
    $sql0.=$where0;
    $order0='
       ORDER BY  `T2`.`chx_groupe_acces` ASC, `T2`.`chx_metier_acces` ASC, `T0`.`che_ordre_menu` ASC';
    $sql0.=$order0;
    /* ATTENTION : pas de limites */
    $plage0='';
    $sql0.=$plage0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_menu' => $tab0[0],
                'T0.cht_prerequis_rev_menu' => $tab0[1],
                'T0.cht_prerequis_php_menu' => $tab0[2],
                'T0.cht_libelle_menu' => $tab0[3],
                'T1.chp_nom_page' => $tab0[4],
                'T1.chp_methode_page' => $tab0[5],
                'T2.chx_groupe_acces' => $tab0[6],
                'T2.chx_metier_acces' => $tab0[7],
                'T3.chp_nom_source' => $tab0[8],
                'T1.cht_complement_page' => $tab0[9],
                'T1.cht_contenu_methode_page' => $tab0[10],
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
