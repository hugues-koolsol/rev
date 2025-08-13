<?php
function sql_324($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_menu` , `T0`.`chp_libelle_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , 
      `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_menus T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
    ';
    $sql0.=$from0;
    $where0=' WHERE (`T0`.`chi_id_menu` = '.sq1($par['T0_chi_id_menu']).')'.PHP_EOL;
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_menu' => $tab0[0],
                'T0.chp_libelle_menu' => $tab0[1],
                'T0.chp_titre_menu' => $tab0[2],
                'T0.chx_autorisation_menu' => $tab0[3],
                'T0.chp_methode_menu' => $tab0[4],
                'T1.chx_acces_autorisation' => $tab0[5],
                'T1.chx_source_autorisation' => $tab0[6],
                'T2.chp_nom_acces' => $tab0[7],
                'T3.chp_nom_source' => $tab0[8],
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
           'texte_requete' => 'la selection sur les menus' , 
           'exception' => $e ,
            'id_bdd' => BDD_NUMERO_1
         );
    }
}
