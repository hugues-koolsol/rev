<?php
function sql_161($par,&$donnees_retournees,$that){
    if($GLOBALS[DEVER_SRV]>=2){
        $donnees_retournees[__x_signaux][__xif][]='info <b>sql_161</b>';
    }
    $champs0='
      `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chx_projet_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , 
      `T0`.`cht_rev_source` , `T0`.`cht_genere_source` , `T1`.`chp_nom_dossier` , `T0`.`che_binaire_source`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_sources T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    if(($par['T0_chi_id_source'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chi_id_source`',$par['T0_chi_id_source']);
    }
    if(($par['T0_chi_id_source2'] !== '')){
        $where0.=' AND `T0`.`chi_id_source` > '.sq1($par['T0_chi_id_source2']).''.PHP_EOL;
    }
    if(($par['T0_chi_id_source3'] !== '')){
        $where0.=' AND `T0`.`chi_id_source` <= '.sq1($par['T0_chi_id_source3']).''.PHP_EOL;
    }
    if(($par['T0_chx_dossier_id_source'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chx_dossier_id_source`',$par['T0_chx_dossier_id_source']);
    }
    if(($par['T0_chx_projet_id_source'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chx_projet_id_source`',$par['T0_chx_projet_id_source']);
    }
    if(($par['T0_chp_nom_source'] !== '')){
        $where0.=' AND `T0`.`chp_nom_source` LIKE '.sq2($par['T0_chp_nom_source']).''.PHP_EOL;
    }
    $sql0.=$where0;
    $order0='
       ORDER BY  `T0`.`chx_dossier_id_source` ASC, `T0`.`chp_nom_source` ASC, `T0`.`chi_id_source` ASC';
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
                'T0.chi_id_source' => $tab0[0],
                'T0.chx_dossier_id_source' => $tab0[1],
                'T0.chx_projet_id_source' => $tab0[2],
                'T0.chp_nom_source' => $tab0[3],
                'T0.cht_commentaire_source' => $tab0[4],
                'T0.cht_rev_source' => $tab0[5],
                'T0.cht_genere_source' => $tab0[6],
                'T1.chp_nom_dossier' => $tab0[7],
                'T0.che_binaire_source' => $tab0[8],
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
        return array(
                __xst => __xer , 
                'sql0' => $sql0 ,
                'sql0' => 'la liste sur les sources' ,
                'exception' => $e ,
                'id_bdd' => BDD_NUMERO_1 
            );
    }
}
