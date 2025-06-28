<?php
function sql_11($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_bdds T0    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=' AND `T0`.`chi_id_basedd` IN ('.sq0($par['T0_chi_id_basedd']).')'.PHP_EOL;
    $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chx_projet_id_basedd`',$par['T0_chx_projet_id_basedd']);
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_basedd' => $tab0[0],
                'T0.chp_rev_travail_basedd' => $tab0[1],
                'T0.chx_dossier_id_basedd' => $tab0[2],
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
