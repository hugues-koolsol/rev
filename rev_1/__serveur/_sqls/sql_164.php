<?php
function sql_164($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_taches T0    ';
    $sql0.=$from0;
    $where0=' WHERE ( /* */ `T0`.`chx_utilisateur_tache` = '.sq1($par['T0_chx_utilisateur_tache']).' AND `T0`.`chp_priorite_tache` < '.sq1($par['T0_chp_priorite_tache']).' AND `T0`.`chx_projet_tache` = '.sq1($par['T0_chx_projet_tache']).')'.PHP_EOL;
    $sql0.=$where0;
    $order0='
       ORDER BY  `T0`.`chp_priorite_tache` ASC';
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
                'T0.chi_id_tache' => $tab0[0],
                'T0.chx_utilisateur_tache' => $tab0[1],
                'T0.chp_texte_tache' => $tab0[2],
                'T0.chp_priorite_tache' => $tab0[3],
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
           'texte_requete' => 'la selection sur les taches' , 
           'exception' => $e ,
            'id_bdd' => BDD_NUMERO_1
         );
    }
}
