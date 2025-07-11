<?php
function sql_91($par,&$donnees_retournees,$that){
    $sql0='UPDATE `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_pages` SET '.PHP_EOL;
    $tableau_champs=array();

    if(isset($par['n_chp_nom_page'])){
        if($par['n_chp_nom_page']==='' || $par['n_chp_nom_page']===NULL ){
            $tableau_champs[]='`chp_nom_page` = NULL';
        }else{
            $tableau_champs[]='`chp_nom_page` = \''.sq0($par['n_chp_nom_page']).'\'';
        }
    }
    if(isset($par['n_chx_parent_page'])){
        if($par['n_chx_parent_page']==='' || $par['n_chx_parent_page']===NULL ){
            $tableau_champs[]='`chx_parent_page` = NULL';
        }else{
            $tableau_champs[]='`chx_parent_page` = '.sq0($par['n_chx_parent_page']).'';
        }
    }
    if(isset($par['n_chx_acces_page'])){
        if($par['n_chx_acces_page']==='' || $par['n_chx_acces_page']===NULL ){
            $tableau_champs[]='`chx_acces_page` = NULL';
        }else{
            $tableau_champs[]='`chx_acces_page` = '.sq0($par['n_chx_acces_page']).'';
        }
    }
    if(isset($par['n_chx_source_page'])){
        if($par['n_chx_source_page']==='' || $par['n_chx_source_page']===NULL ){
            $tableau_champs[]='`chx_source_page` = NULL';
        }else{
            $tableau_champs[]='`chx_source_page` = '.sq0($par['n_chx_source_page']).'';
        }
    }
    if(isset($par['n_chp_methode_page'])){
        if($par['n_chp_methode_page']==='' || $par['n_chp_methode_page']===NULL ){
            $tableau_champs[]='`chp_methode_page` = NULL';
        }else{
            $tableau_champs[]='`chp_methode_page` = \''.sq0($par['n_chp_methode_page']).'\'';
        }
    }
    if(isset($par['n_chx_projet_page'])){
        if($par['n_chx_projet_page']==='' || $par['n_chx_projet_page']===NULL ){
            $tableau_champs[]='`chx_projet_page` = NULL';
        }else{
            $tableau_champs[]='`chx_projet_page` = '.sq0($par['n_chx_projet_page']).'';
        }
    }
    if(isset($par['n_chp_complement_page'])){
        if($par['n_chp_complement_page']==='' || $par['n_chp_complement_page']===NULL ){
            $tableau_champs[]='`chp_complement_page` = NULL';
        }else{
            $tableau_champs[]='`chp_complement_page` = \''.sq0($par['n_chp_complement_page']).'\'';
        }
    }
    if(isset($par['n_chp_contenu_methode_page'])){
        if($par['n_chp_contenu_methode_page']==='' || $par['n_chp_contenu_methode_page']===NULL ){
            $tableau_champs[]='`chp_contenu_methode_page` = NULL';
        }else{
            $tableau_champs[]='`chp_contenu_methode_page` = \''.sq0($par['n_chp_contenu_methode_page']).'\'';
        }
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => 'aucun champ à mettre à jour' ,
            'id_bdd' => BDD_NUMERO_1 ,
            'source_requete' => '' , 
            'texte_requete' => 'la modification dans la table des pages' ,
            'exception' => null , 
        );
    }
    $sql0.=implode(','.PHP_EOL.'    ',$tableau_champs).PHP_EOL;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=' AND `chi_id_page` = '.sq1($par['c_chi_id_page']).''.PHP_EOL;
    $sql0.=$where0;
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0= <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'source_requete' => $sql0 , 
            'texte_requete' => 'la modification dans la table des pages' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1
        );
    }
}
