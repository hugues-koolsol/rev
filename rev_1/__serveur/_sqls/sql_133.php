<?php
function sql_133($par,&$donnees_retournees,$that){
    if($GLOBALS[DEVER_SRV]>=2){
        $donnees_retournees[__x_signaux][__xif][]='info <b>sql_133</b>';
    }
    $champs0='
      `T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
    ';
    $sql0='SELECT '.$champs0;
    $from0='
      FROM tbl_projets T0    ';
    $sql0.=$from0;
    $where0=' WHERE 1=1 '.PHP_EOL;
    if(($par['T0_chi_id_projet'] !== '')){
        $where0.=PHP_EOL.construction_where_sql_sur_id1('`T0`.`chi_id_projet`',$par['T0_chi_id_projet']);
    }
    if(($par['T0_chp_nom_projet'] !== '')){
        $where0.=' AND `T0`.`chp_nom_projet` LIKE '.sq2($par['T0_chp_nom_projet']).''.PHP_EOL;
    }
    if(($par['T0_cht_commentaire_projet'] !== '')){
        $where0.=' AND `T0`.`cht_commentaire_projet` LIKE '.sq2($par['T0_cht_commentaire_projet']).''.PHP_EOL;
    }
    $sql0.=$where0;
    $order0='
       ORDER BY  `T0`.`chi_id_projet` ASC';
    $sql0.=$order0;
    $plage0='
        LIMIT '.sq1($par['quantitee']).' OFFSET '.sq1($par['debut']).' ';
    $sql0.=$plage0;
    $donnees0=array();
    //echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $stmt0=$GLOBALS[__BDD][BASE_REFERENCE][LIEN_BDD]->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=array(
                'T0.chi_id_projet' => $tab0[0],
                'T0.chp_nom_projet' => $tab0[1],
                'T0.cht_commentaire_projet' => $tab0[2],
            );
        }
        $stmt0->close();
        $sql1='SELECT COUNT(*) '.$from0.$where0;
        $__nbEnregs=$GLOBALS[__BDD][BASE_REFERENCE][LIEN_BDD]->querySingle($sql1);
        return array(
           __xst  => __xsu       ,
           __xva  => $donnees0   ,
           'nombre'  => $__nbEnregs ,
           'sql0'    => $sql0          ,
           'where0'  => $where0     ,
        );
    }catch(Exception $e){
        return array(__xst => __xer , 'source_requete' => $sql0 , 'texte_requete' => 'la liste sur les projets' , 'exception' => $e , 'id_bdd' => BASE_REFERENCE );
    }
}
