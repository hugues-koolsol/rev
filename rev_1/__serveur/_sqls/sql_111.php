<?php
function sql_111($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chx_dossier_id_basedd`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM tbl_bdds T0    ';
    $sql0.=$from0;
    $where0=' WHERE (`T0`.`chi_id_basedd` IN ('.sq0($par['T0_chi_id_basedd']).') AND `T0`.`chx_projet_id_basedd` = '.sq1($par['T0_chx_projet_id_basedd']).')'.PHP_EOL;
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' BASE_REFERENCE=' . var_export( $GLOBALS[__BDD][BASE_REFERENCE] , true ) . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BASE_REFERENCE][LIEN_BDD]->prepare($sql0);
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
        return array(__xst => __xer , 'source_requete' => $sql0 , 'texte_requete' => 'la selection sur les bdds' , 'exception' => $e , 'id_bdd' => BASE_REFERENCE );
    }
}
