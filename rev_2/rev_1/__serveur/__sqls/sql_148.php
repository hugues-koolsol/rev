<?php
function sql_148($par,&$donnees_retournees,$that){
    $sql0='UPDATE `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_menus` SET '.PHP_EOL;
    $tableau_champs=array();

    if($par['n_cht_libelle_menu']==='' || is_null($par['n_cht_libelle_menu']) ){
        $tableau_champs[]='`cht_libelle_menu` = NULL';
    }else{
        $tableau_champs[]='`cht_libelle_menu` = \''.sq0($par['n_cht_libelle_menu']).'\'';
    }
    if($par['n_chp_titre_menu']==='' || is_null($par['n_chp_titre_menu']) ){
        $tableau_champs[]='`chp_titre_menu` = NULL';
    }else{
        $tableau_champs[]='`chp_titre_menu` = \''.sq0($par['n_chp_titre_menu']).'\'';
    }
    if($par['n_chx_autorisation_menu']==='' || is_null($par['n_chx_autorisation_menu']) ){
        $tableau_champs[]='`chx_autorisation_menu` = NULL';
    }else{
        $tableau_champs[]='`chx_autorisation_menu` = '.sq0($par['n_chx_autorisation_menu']).'';
    }
    if($par['n_chp_methode_menu']==='' || is_null($par['n_chp_methode_menu']) ){
        $tableau_champs[]='`chp_methode_menu` = NULL';
    }else{
        $tableau_champs[]='`chp_methode_menu` = \''.sq0($par['n_chp_methode_menu']).'\'';
    }
    if($par['n_cht_condition_menu']==='' || is_null($par['n_cht_condition_menu']) ){
        $tableau_champs[]='`cht_condition_menu` = NULL';
    }else{
        $tableau_champs[]='`cht_condition_menu` = \''.sq0($par['n_cht_condition_menu']).'\'';
    }
    if($par['n_cht_condition_php_menu']==='' || is_null($par['n_cht_condition_php_menu']) ){
        $tableau_champs[]='`cht_condition_php_menu` = NULL';
    }else{
        $tableau_champs[]='`cht_condition_php_menu` = \''.sq0($par['n_cht_condition_php_menu']).'\'';
    }
    if($par['n_cht_initialisation_menu']==='' || is_null($par['n_cht_initialisation_menu']) ){
        $tableau_champs[]='`cht_initialisation_menu` = NULL';
    }else{
        $tableau_champs[]='`cht_initialisation_menu` = \''.sq0($par['n_cht_initialisation_menu']).'\'';
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => 'aucun champ à mettre à jour' ,
            'id_bdd' => BDD_NUMERO_1 ,
            'sql0' => $sql0 , 
            'texte_requete' => 'la modification dans la table des menus' ,
            'exception' => null , 
        );
    }
    $sql0.=implode(','.PHP_EOL.'    ',$tableau_champs).PHP_EOL;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=' AND `chi_id_menu` = '.sq1($par['c_chi_id_menu']).''.PHP_EOL;
    $sql0.=$where0;
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0= <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'sql0' => $sql0 , 
            'texte_requete' => 'la modification dans la table des menus' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1,
            'bdd' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
