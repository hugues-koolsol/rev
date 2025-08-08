<?php
function sql_304($par,&$donnees_retournees,$that){
    $champs0='
      `T1`.`chp_nom_page` , `T0`.`chi_id_menu`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_menus T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_pages T1 ON T1.chi_id_page = T0.chx_page_menu
    ';
    $sql0.=$from0;
    $where0=' WHERE `T1`.`chx_acces_page` = '.sq1($par['T1_chx_acces_page']).''.PHP_EOL;
    $sql0.=$where0;
    $order0='
       ORDER BY  `T0`.`che_ordre_menu` ASC';
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
                'T1.chp_nom_page' => $tab0[0],
                'T0.chi_id_menu' => $tab0[1],
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
           'texte_requete' => 'la selection sur les menus' , 
           'exception' => $e ,
            'id_bdd' => BDD_NUMERO_1
         );
    }
}
