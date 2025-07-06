<?php
function sql_1($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_id_utilisateur` , `T0`.`chx_groupe_utilisateur`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_utilisateurs T0    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=' AND `T0`.`chp_nom_de_connexion_utilisateur` = '.sq1($par['T0_chp_nom_de_connexion_utilisateur']).''.PHP_EOL;
    $sql0.=$where0;
    $order0='';
    $sql0.=$order0;
    $plage0='
        LIMIT 1 OFFSET 0 ';
    $sql0.=$plage0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chp_mot_de_passe_utilisateur' => $tab0[0],
                'T0.chi_id_utilisateur' => $tab0[1],
                'T0.chx_groupe_utilisateur' => $tab0[2],
            );
        }
        return array(
           __xst  => __xsu  ,
           __xva  => $donnees0   ,
           'sql0'    => $sql0          ,
           'where0'  => $where0     ,
        );
    }catch(Exception $e){
        return array(__xst => __xer , 'source_requete' => $sql0 , 'texte_requete' => 'la selection sur les utilisateurs' , 'exception' => $e , 'id_bdd' => BDD_NUMERO_1 );
    }
}
