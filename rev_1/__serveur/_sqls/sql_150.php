<?php
function sql_150($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_dossier` , `T0`.`chx_projet_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier` , 
      `T0`.`che_contient_genere_dossier`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_dossiers T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
    ';
    $sql0.=$from0;
    $where0=' WHERE (`T0`.`chi_id_dossier` = '.sq1($par['T0_chi_id_dossier']).' AND `T0`.`chx_projet_dossier` = '.sq1($par['T0_chx_projet_dossier']).')'.PHP_EOL;
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_dossier' => $tab0[0],
                'T0.chx_projet_dossier' => $tab0[1],
                'T0.chp_nom_dossier' => $tab0[2],
                'T0.chx_parent_dossier' => $tab0[3],
                'T1.chp_nom_dossier' => $tab0[4],
                'T0.che_contient_genere_dossier' => $tab0[5],
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
           'texte_requete' => 'la selection sur les dossiers' , 
           'exception' => $e ,
            'id_bdd' => BDD_NUMERO_1
         );
    }
}
