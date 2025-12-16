<?php
function sql_116($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
      `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_sources T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
    ';
    $sql0.=$from0;
    $where0=' WHERE ( /* */ `T0`.`chi_id_source` = '.sq1($par['T0_chi_id_source']).')'.PHP_EOL;
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
                'T0.chx_dossier_id_source' => $tab0[1],
                'T0.chp_nom_source' => $tab0[2],
                'T0.cht_commentaire_source' => $tab0[3],
                'T0.cht_rev_source' => $tab0[4],
                'T0.cht_genere_source' => $tab0[5],
                'T0.che_binaire_source' => $tab0[6],
                'T0.che_contient_version_source' => $tab0[7],
                'T0.che_autorisation_globale_source' => $tab0[8],
                'T1.chp_nom_dossier' => $tab0[9],
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
