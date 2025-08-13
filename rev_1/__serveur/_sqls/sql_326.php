<?php
function sql_326($par,&$donnees_retournees,$that){
    $champs0='
      `T1`.`chx_dossier_id_source` , `T1`.`chp_nom_source`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_autorisations T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_autorisation
    ';
    $sql0.=$from0;
    $where0=' WHERE `T0`.`chi_id_autorisation` = '.sq1($par['T0_chi_id_autorisation']).''.PHP_EOL;
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T1.chx_dossier_id_source' => $tab0[0],
                'T1.chp_nom_source' => $tab0[1],
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
           'texte_requete' => 'la selection sur les autorisations' , 
           'exception' => $e ,
            'id_bdd' => BDD_NUMERO_1
         );
    }
}
