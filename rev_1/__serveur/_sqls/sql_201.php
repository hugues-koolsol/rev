<?php
function sql_201($par,&$donnees_retournees,$that){
    $sql0='UPDATE `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_menus` SET '.PHP_EOL;
    $tableau_champs=array();

    if(isset($par['n_chx_page_menu'])){
        if($par['n_chx_page_menu']==='' || $par['n_chx_page_menu']===NULL ){
            $tableau_champs[]='`chx_page_menu` = NULL';
        }else{
            $tableau_champs[]='`chx_page_menu` = '.sq0($par['n_chx_page_menu']).'';
        }
    }
    if(isset($par['n_che_ordre_menu'])){
        if($par['n_che_ordre_menu']==='' || $par['n_che_ordre_menu']===NULL ){
            $tableau_champs[]='`che_ordre_menu` = NULL';
        }else{
            $tableau_champs[]='`che_ordre_menu` = '.sq0($par['n_che_ordre_menu']).'';
        }
    }
    if(isset($par['n_chp_prerequis_menu'])){
        if($par['n_chp_prerequis_menu']==='' || $par['n_chp_prerequis_menu']===NULL ){
            $tableau_champs[]='`chp_prerequis_menu` = NULL';
        }else{
            $tableau_champs[]='`chp_prerequis_menu` = \''.sq0($par['n_chp_prerequis_menu']).'\'';
        }
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => 'aucun champ à mettre à jour' ,
            'id_bdd' => BDD_NUMERO_1 ,
            'source_requete' => '' , 
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
            'source_requete' => $sql0 , 
            'texte_requete' => 'la modification dans la table des menus' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1
        );
    }
}
