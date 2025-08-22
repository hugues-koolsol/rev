<?php
function sql_322($par,&$donnees_retournees,$that){
    if($GLOBALS[DEVER_SRV]>=2){
        $donnees_retournees[__x_signaux][__xif][]='info <b>sql_322</b>';
    }
    $champs0='
      `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
      `T0`.`cht_condition_menu` , `T0`.`cht_condition_php_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chi_id_acces` , 
      `T2`.`chp_nom_acces` , `T3`.`chp_nom_source`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_menus T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    if(($par['T0_chi_id_menu'] !== '')){
        $where0.=' AND `T0`.`chi_id_menu` LIKE '.sq2($par['T0_chi_id_menu']).''.PHP_EOL;
    }
    if(($par['T0_cht_libelle_menu'] !== '')){
        $where0.=' AND `T0`.`cht_libelle_menu` LIKE '.sq2($par['T0_cht_libelle_menu']).''.PHP_EOL;
    }
    if(($par['T0_chp_titre_menu'] !== '')){
        $where0.=' AND `T0`.`chp_titre_menu` LIKE '.sq2($par['T0_chp_titre_menu']).''.PHP_EOL;
    }
    if(($par['T0_chx_autorisation_menu'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chx_autorisation_menu`',$par['T0_chx_autorisation_menu']);
    }
    if(($par['T0_chp_methode_menu'] !== '')){
        $where0.=' AND `T0`.`chp_methode_menu` LIKE '.sq2($par['T0_chp_methode_menu']).''.PHP_EOL;
    }
    if(($par['T1_chx_acces_autorisation'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T1`.`chx_acces_autorisation`',$par['T1_chx_acces_autorisation']);
    }
    $sql0.=$where0;
    $order0='
       ORDER BY  `T0`.`chi_id_menu` DESC';
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
                'T0.chi_id_menu' => $tab0[0],
                'T0.chp_titre_menu' => $tab0[1],
                'T0.chx_autorisation_menu' => $tab0[2],
                'T0.chp_methode_menu' => $tab0[3],
                'T0.cht_libelle_menu' => $tab0[4],
                'T0.cht_condition_menu' => $tab0[5],
                'T0.cht_condition_php_menu' => $tab0[6],
                'T1.chx_acces_autorisation' => $tab0[7],
                'T1.chx_source_autorisation' => $tab0[8],
                'T2.chi_id_acces' => $tab0[9],
                'T2.chp_nom_acces' => $tab0[10],
                'T3.chp_nom_source' => $tab0[11],
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
                'texte_requete' => 'la liste sur les menus' ,
                'exception' => $e ,
                'id_bdd' => BDD_NUMERO_1 
            );
    }
}
