<?php
function sql_135($par,&$donnees_retournees,$that){
    if($GLOBALS[DEVER_SRV]>=2){
        $donnees_retournees[__xsi][__xif][]='info <b>sql_135</b>';
    }
    $champs0='
      `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
      `T2`.`chp_nom_metier`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_acces T0
       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces

       LEFT JOIN `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    if(( isset($par['T0_chi_id_acces']) && $par['T0_chi_id_acces'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chi_id_acces`',$par['T0_chi_id_acces']);
    }
    if(( isset($par['T0_chp_nom_acces']) && $par['T0_chp_nom_acces'] !== '')){
        $where0.=' AND `T0`.`chp_nom_acces` LIKE '.sq2($par['T0_chp_nom_acces']).''.PHP_EOL;
    }
    if(( isset($par['T0_chx_groupe_acces']) && $par['T0_chx_groupe_acces'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chx_groupe_acces`',$par['T0_chx_groupe_acces']);
    }
    if(( isset($par['T1_chp_nom_groupe']) && $par['T1_chp_nom_groupe'] !== '')){
        $where0.=' AND `T1`.`chp_nom_groupe` LIKE '.sq2($par['T1_chp_nom_groupe']).''.PHP_EOL;
    }
    if(( isset($par['T0_chx_metier_acces']) && $par['T0_chx_metier_acces'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chx_metier_acces`',$par['T0_chx_metier_acces']);
    }
    if(( isset($par['T2_chp_nom_metier']) && $par['T2_chp_nom_metier'] !== '')){
        $where0.=' AND `T2`.`chp_nom_metier` LIKE '.sq2($par['T2_chp_nom_metier']).''.PHP_EOL;
    }
    $sql0.=$where0;
    $order0='
       ORDER BY  `T0`.`chi_id_acces` DESC';
    $sql0.=$order0;
    $plage0='
        LIMIT '.sq1($par['quantitee']).' OFFSET '.sq1($par['debut']).' ';
    $sql0.=$plage0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->enableExceptions(true);
        $stmt0=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_acces' => $tab0[0],
                'T0.chp_nom_acces' => $tab0[1],
                'T0.chx_groupe_acces' => $tab0[2],
                'T0.chx_metier_acces' => $tab0[3],
                'T1.chp_nom_groupe' => $tab0[4],
                'T2.chp_nom_metier' => $tab0[5],
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
                'texte_requete' => 'la liste sur les acces' ,
                'exception' => $e ,
                'id_bdd' => BDD_NUMERO_1 
            );
    }
}
