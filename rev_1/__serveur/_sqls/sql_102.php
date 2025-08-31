<?php
function sql_102($par,&$donnees_retournees,$that){
    if($GLOBALS[DEVER_SRV]>=2){
        $donnees_retournees[__x_signaux][__xif][]='info <b>sql_102</b>';
    }
    $champs0='
      `T0`.`chi_id_requete` , `T0`.`chx_projet_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
      `T0`.`cht_php_requete` , `T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_requetes T0    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    if(($par['T0_chi_id_requete'] !== '')){
        $where0.=' AND `T0`.`chi_id_requete` = '.sq1($par['T0_chi_id_requete']).''.PHP_EOL;
    }
    if(($par['T0_chx_projet_requete'] !== '')){
        $where0.=' AND `T0`.`chx_projet_requete` = '.sq1($par['T0_chx_projet_requete']).''.PHP_EOL;
    }
    if(($par['T0_chp_type_requete'] !== '')){
        $where0.=' AND `T0`.`chp_type_requete` LIKE '.sq2($par['T0_chp_type_requete']).''.PHP_EOL;
    }
    if(($par['T0_cht_rev_requete'] !== '')){
        $where0.=' AND `T0`.`cht_rev_requete` LIKE '.sq2($par['T0_cht_rev_requete']).''.PHP_EOL;
    }
    if(($par['T0_chi_id_requete2'] !== '')){
        $where0.=' AND `T0`.`chi_id_requete` <= '.sq1($par['T0_chi_id_requete2']).''.PHP_EOL;
    }
    if(($par['T0_cht_commentaire_requete'] !== '')){
        $where0.=' AND `T0`.`cht_commentaire_requete` LIKE '.sq2($par['T0_cht_commentaire_requete']).''.PHP_EOL;
    }
    $sql0.=$where0;
    $order0='
       ORDER BY  `T0`.`chi_id_requete` DESC';
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
                'T0.chi_id_requete' => $tab0[0],
                'T0.chx_projet_requete' => $tab0[1],
                'T0.chp_type_requete' => $tab0[2],
                'T0.cht_rev_requete' => $tab0[3],
                'T0.cht_sql_requete' => $tab0[4],
                'T0.cht_php_requete' => $tab0[5],
                'T0.cht_commentaire_requete' => $tab0[6],
                'T0.cht_matrice_requete' => $tab0[7],
                'T0.che_est_souche_requete' => $tab0[8],
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
                'texte_requete' => 'la liste sur les requetes' ,
                'exception' => $e ,
                'id_bdd' => BDD_NUMERO_1 
            );
    }
}
