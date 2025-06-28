<?php
function sql_49($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_requetes T0    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chx_projet_requete`',$par['T0_chx_projet_requete']);
    $where0.=' AND `T0`.`chi_id_requete` < '.sq1($par['nb_max']).''.PHP_EOL;
    $where0.=' AND 1 = 1'.PHP_EOL;
    $sql0.=$where0;
    $order0='
       ORDER BY  `T0`.`chi_id_requete` ASC';
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
                'T0.chi_id_requete' => $tab0[0],
                'T0.cht_sql_requete' => $tab0[1],
                'T0.cht_commentaire_requete' => $tab0[2],
            );
        }
        return array(
           __xst  => __xsu  ,
           __xva  => $donnees0   ,
           'sql0'    => $sql0          ,
           'where0'  => $where0     ,
        );
    }catch(Exception $e){
        return array(__xst => __xer , 'source_requete' => $sql0 , 'texte_requete' => 'la selection sur les requetes' , 'exception' => $e , 'id_bdd' => BDD_NUMERO_1 );
    }
}
