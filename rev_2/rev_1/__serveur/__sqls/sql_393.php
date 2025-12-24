<?php
function sql_393($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_projet`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_projets T0    ';
    $sql0.=$from0;
    /* ATTENTION : pas de condition dans cette liste */
    $where0=' WHERE 1 ';
    $sql0.=$where0;
    $order0='
       ORDER BY  T0.chi_id_projet DESC';
    $sql0.=$order0;
    $plage0='
        LIMIT 1 OFFSET 0 ';
    $sql0.=$plage0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->enableExceptions(true);
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_projet' => $tab0[0],
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
           'texte_requete' => 'la selection sur les projets' , 
           'exception' => $e ,
            'id_bdd' => BDD_NUMERO_1
         );
    }
}
