<?php
function sql_347($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`che_contient_version_source` , `T0`.`chx_dossier_id_source`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_sources T0    ';
    $sql0.=$from0;
    $where0=' WHERE `T0`.`che_contient_version_source` = '.sq1($par['T0_che_contient_version_source']).''.PHP_EOL;
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->enableExceptions(true);
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_source' => $tab0[0],
                'T0.chp_nom_source' => $tab0[1],
                'T0.che_contient_version_source' => $tab0[2],
                'T0.chx_dossier_id_source' => $tab0[3],
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
           'texte_requete' => 'la selection sur les sources' , 
           'exception' => $e ,
            'id_bdd' => BDD_NUMERO_1
         );
    }
}
