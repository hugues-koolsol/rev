<?php
function sql_311($par,&$donnees_retournees,$that){
    $champs0='
      `T0`.`chi_id_page`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_pages T0    ';
    $sql0.=$from0;
    $where0=' WHERE `T0`.`chx_source_page` = '.sq1($par['T0_chx_source_page']).''.PHP_EOL;
    $sql0.=$where0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' .  $sql0  . '</pre>' ; exit(0);


    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_page' => $tab0[0],
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
           'texte_requete' => 'la selection sur les pages' , 
           'exception' => $e ,
            'id_bdd' => BDD_NUMERO_1
         );
    }
}
