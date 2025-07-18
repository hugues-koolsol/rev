<?php
function sql_188($par,&$donnees_retournees,$that){
    if($GLOBALS[DEVER_SRV]>=2){
        $donnees_retournees[__x_signaux][__xif][]='info <b>sql_188</b>';
    }
    $champs0='
      `T0`.`chi_id_page` , `T0`.`chp_nom_page` , `T0`.`chx_parent_page` , `T0`.`chx_source_page` , `T0`.`chp_methode_page` , 
      `T0`.`cht_complement_page` , `T1`.`chp_nom_page` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source` , `T1`.`cht_contenu_methode_page`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_pages T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_pages T1 ON T1.chi_id_page = T0.chx_parent_page

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_acces T2 ON T2.chi_id_acces = T0.chx_acces_page

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_sources T3 ON T3.chi_id_source = T0.chx_source_page
    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    if(($par['T0_chi_id_page'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chi_id_page`',$par['T0_chi_id_page']);
    }
    if(($par['T0_chp_nom_page'] !== '')){
        $where0.=' AND `T0`.`chp_nom_page` LIKE '.sq2($par['T0_chp_nom_page']).''.PHP_EOL;
    }
    $sql0.=$where0;
    $order0='
       ORDER BY  `T0`.`chi_id_page` DESC';
    $sql0.=$order0;
    $plage0='
        LIMIT '.sq1($par['quantitee']).' OFFSET '.sq1($par['debut']).' ';
    $sql0.=$plage0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_page' => $tab0[0],
                'T0.chp_nom_page' => $tab0[1],
                'T0.chx_parent_page' => $tab0[2],
                'T0.chx_source_page' => $tab0[3],
                'T0.chp_methode_page' => $tab0[4],
                'T0.cht_complement_page' => $tab0[5],
                'T1.chp_nom_page' => $tab0[6],
                'T2.chp_nom_acces' => $tab0[7],
                'T3.chp_nom_source' => $tab0[8],
                'T1.cht_contenu_methode_page' => $tab0[9],
            );
        }
        $stmt0->close();
        $sql1='SELECT COUNT(*) '.$from0.$where0;
        $__nbEnregs=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->querySingle($sql1);
        return array(
           __xst  => __xsu       ,
           __xva  => $donnees0   ,
           'nombre'  => $__nbEnregs ,
           'sql0'    => $sql0          ,
           'where0'  => $where0     ,
        );
    }catch(Exception $e){
        return array(__xst => __xer , 'source_requete' => $sql0 , 'texte_requete' => 'la liste sur les pages' , 'exception' => $e , 'id_bdd' => BDD_NUMERO_1 );
    }
}
