<?php
function sql_313($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
      `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`chx_dossier_id_source`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM tbl_sources T0    ';
    $sql0.=$from0;
    $where0=' WHERE ((`T0`.`chi_id_source` < '.sq1($par['T0_chi_id_source']).' AND `T0`.`chp_nom_source` NOT LIKE '.sq2($par['T0_chp_nom_source']).') OR `T0`.`chi_id_source` IN ('.sq0($par['T0_chi_id_source2']).'))'.PHP_EOL;
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BASE_REFERENCE][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_source' => $tab0[0],
                'T0.chx_projet_id_source' => $tab0[1],
                'T0.chp_nom_source' => $tab0[2],
                'T0.cht_commentaire_source' => $tab0[3],
                'T0.cht_rev_source' => $tab0[4],
                'T0.cht_genere_source' => $tab0[5],
                'T0.che_binaire_source' => $tab0[6],
                'T0.chx_dossier_id_source' => $tab0[7],
            );
        }
        return array(
           __xst  => __xsu  ,
           __xva  => $donnees0   ,
           'sql0'    => $sql0          ,
           'where0'  => $where0     ,
        );
    }catch(Exception $e){
        return array(__xst => __xer , 'source_requete' => $sql0 , 'texte_requete' => 'la selection sur les sources' , 'exception' => $e , 'id_bdd' => BASE_REFERENCE );
    }
}
