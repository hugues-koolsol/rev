<?php
function sql_173($par,&$donnees_retournees,$that){
    if($GLOBALS[DEVER_SRV]>=2){
        $donnees_retournees[__x_signaux][__xif][]='info <b>sql_173</b>';
    }
    $champs0='
      `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_groupes T0    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    if(($par['T0_chi_id_groupe'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chi_id_groupe`',$par['T0_chi_id_groupe']);
    }
    if(($par['T0_chp_nom_groupe'] !== '')){
        $where0.=' AND `T0`.`chp_nom_groupe` LIKE '.sq2($par['T0_chp_nom_groupe']).''.PHP_EOL;
    }
    $sql0.=$where0;
    $order0='
       ORDER BY  `T0`.`chi_id_groupe` DESC';
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
                'T0.chi_id_groupe' => $tab0[0],
                'T0.chp_nom_groupe' => $tab0[1],
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
                'sql0' => 'la liste sur les groupes' ,
                'exception' => $e ,
                'id_bdd' => BDD_NUMERO_1 
            );
    }
}
