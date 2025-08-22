<?php
function sql_163($par,&$donnees_retournees,$that){
    $sql0='UPDATE `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_sources` SET '.PHP_EOL;
    $tableau_champs=array();

    if($par['n_chx_dossier_id_source']==='' || is_null($par['n_chx_dossier_id_source']) ){
        $tableau_champs[]='`chx_dossier_id_source` = NULL';
    }else{
        $tableau_champs[]='`chx_dossier_id_source` = '.sq0($par['n_chx_dossier_id_source']).'';
    }
    if($par['n_chp_nom_source']==='' || is_null($par['n_chp_nom_source']) ){
        $tableau_champs[]='`chp_nom_source` = NULL';
    }else{
        $tableau_champs[]='`chp_nom_source` = \''.sq0($par['n_chp_nom_source']).'\'';
    }
    if($par['n_cht_commentaire_source']==='' || is_null($par['n_cht_commentaire_source']) ){
        $tableau_champs[]='`cht_commentaire_source` = NULL';
    }else{
        $tableau_champs[]='`cht_commentaire_source` = \''.sq0($par['n_cht_commentaire_source']).'\'';
    }
    if($par['n_cht_rev_source']==='' || is_null($par['n_cht_rev_source']) ){
        $tableau_champs[]='`cht_rev_source` = NULL';
    }else{
        $tableau_champs[]='`cht_rev_source` = \''.sq0($par['n_cht_rev_source']).'\'';
    }
    if($par['n_cht_genere_source']==='' || is_null($par['n_cht_genere_source']) ){
        $tableau_champs[]='`cht_genere_source` = NULL';
    }else{
        $tableau_champs[]='`cht_genere_source` = \''.sq0($par['n_cht_genere_source']).'\'';
    }
    if($par['n_che_binaire_source']==='' || is_null($par['n_che_binaire_source']) ){
        $tableau_champs[]='`che_binaire_source` = NULL';
    }else{
        $tableau_champs[]='`che_binaire_source` = '.sq0($par['n_che_binaire_source']).'';
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => 'aucun champ à mettre à jour' ,
            'id_bdd' => BDD_NUMERO_1 ,
            'sql0' => $sql0 , 
            'texte_requete' => 'la modification dans la table des sources' ,
            'exception' => null , 
        );
    }
    $sql0.=implode(','.PHP_EOL.'    ',$tableau_champs).PHP_EOL;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=' AND `chi_id_source` = '.sq1($par['c_chi_id_source']).''.PHP_EOL;
    $where0.=' AND `chx_projet_id_source` = '.sq1($par['c_chx_projet_id_source']).''.PHP_EOL;
    $sql0.=$where0;
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0= <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'sql0' => $sql0 , 
            'texte_requete' => 'la modification dans la table des sources' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1,
            'bdd' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
