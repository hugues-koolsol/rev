<?php
function sql_196($par,&$donnees_retournees,$that){
    $sql0='UPDATE `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_acces` SET '.PHP_EOL;
    $tableau_champs=array();

    if(isset($par['n_chp_nom_acces'])){
        if($par['n_chp_nom_acces']==='' || $par['n_chp_nom_acces']===NULL ){
            $tableau_champs[]='`chp_nom_acces` = NULL';
        }else{
            $tableau_champs[]='`chp_nom_acces` = \''.sq0($par['n_chp_nom_acces']).'\'';
        }
    }
    if(isset($par['n_chx_groupe_acces'])){
        if($par['n_chx_groupe_acces']==='' || $par['n_chx_groupe_acces']===NULL ){
            $tableau_champs[]='`chx_groupe_acces` = NULL';
        }else{
            $tableau_champs[]='`chx_groupe_acces` = '.sq0($par['n_chx_groupe_acces']).'';
        }
    }
    if(isset($par['n_chx_metier_acces'])){
        if($par['n_chx_metier_acces']==='' || $par['n_chx_metier_acces']===NULL ){
            $tableau_champs[]='`chx_metier_acces` = NULL';
        }else{
            $tableau_champs[]='`chx_metier_acces` = '.sq0($par['n_chx_metier_acces']).'';
        }
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => 'aucun champ à mettre à jour' ,
            'id_bdd' => BDD_NUMERO_1 ,
            'source_requete' => '' , 
            'texte_requete' => 'la modification dans la table des acces' ,
            'exception' => null , 
        );
    }
    $sql0.=implode(','.PHP_EOL.'    ',$tableau_champs).PHP_EOL;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=' AND `chi_id_acces` = '.sq1($par['c_chi_id_acces']).''.PHP_EOL;
    $sql0.=$where0;
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0= <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'source_requete' => $sql0 , 
            'texte_requete' => 'la modification dans la table des acces' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1
        );
    }
}
