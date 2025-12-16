<?php
function sql_316($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM tbl_projets T0    ';
    $sql0.=$from0;
    $where0=' WHERE `T0`.`chi_id_projet` > 2'.PHP_EOL;
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $GLOBALS[__BDD][BASE_REFERENCE][LIEN_BDD]->enableExceptions(true);
        $stmt0=$GLOBALS[__BDD][BASE_REFERENCE][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_projet' => $tab0[0],
                'T0.chp_nom_projet' => $tab0[1],
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
            'id_bdd' => BASE_REFERENCE
         );
    }
}
