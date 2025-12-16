<?php
function sql_155($par,&$donnees_retournees,$that){
    $sql0='UPDATE `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_dossiers` SET '.PHP_EOL;
    $tableau_champs=array();

    if($par['n_chp_nom_dossier']==='' || is_null($par['n_chp_nom_dossier']) ){
        $tableau_champs[]='`chp_nom_dossier` = NULL';
    }else{
        $tableau_champs[]='`chp_nom_dossier` = \''.sq0($par['n_chp_nom_dossier']).'\'';
    }
    if($par['n_chx_parent_dossier']==='' || is_null($par['n_chx_parent_dossier']) ){
        $tableau_champs[]='`chx_parent_dossier` = NULL';
    }else{
        $tableau_champs[]='`chx_parent_dossier` = '.sq0($par['n_chx_parent_dossier']).'';
    }
    if($par['n_che_contient_genere_dossier']==='' || is_null($par['n_che_contient_genere_dossier']) ){
        $tableau_champs[]='`che_contient_genere_dossier` = NULL';
    }else{
        $tableau_champs[]='`che_contient_genere_dossier` = '.sq0($par['n_che_contient_genere_dossier']).'';
    }
    if($par['n_che_pour_les_js_dossier']==='' || is_null($par['n_che_pour_les_js_dossier']) ){
        $tableau_champs[]='`che_pour_les_js_dossier` = NULL';
    }else{
        $tableau_champs[]='`che_pour_les_js_dossier` = '.sq0($par['n_che_pour_les_js_dossier']).'';
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => 'aucun champ à mettre à jour' ,
            'id_bdd' => BDD_NUMERO_1 ,
            'sql0' => $sql0 , 
            'texte_requete' => 'la modification dans la table des dossiers' ,
            'exception' => null , 
        );
    }
    $sql0.=implode(','.PHP_EOL.'    ',$tableau_champs).PHP_EOL;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=' AND `chi_id_dossier` = '.sq1($par['c_chi_id_dossier']).''.PHP_EOL;
    $sql0.=$where0;
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0= <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'sql0' => $sql0 , 
            'texte_requete' => 'la modification dans la table des dossiers' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1,
            'bdd' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
