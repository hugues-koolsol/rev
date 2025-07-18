<?php
function sql_135($par,&$donnees_retournees,$that){
    $sql0='UPDATE `'.$GLOBALS[__BDD][BASE_REFERENCE][PREFIXE_BDD].'`.`tbl_requetes` SET '.PHP_EOL;
    $tableau_champs=array();

    if(isset($par['n_cht_php_requete'])){
        if($par['n_cht_php_requete']==='' || $par['n_cht_php_requete']===NULL ){
            $tableau_champs[]='`cht_php_requete` = NULL';
        }else{
            $tableau_champs[]='`cht_php_requete` = \''.sq0($par['n_cht_php_requete']).'\'';
        }
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => 'aucun champ à mettre à jour' ,
            'id_bdd' => BASE_REFERENCE ,
            'source_requete' => '' , 
            'texte_requete' => 'la modification dans la table des requetes' ,
            'exception' => null , 
        );
    }
    $sql0.=implode(','.PHP_EOL.'    ',$tableau_champs).PHP_EOL;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=' AND `chi_id_requete` = '.sq1($par['c_chi_id_requete']).''.PHP_EOL;
    $where0.=' AND `chx_projet_requete` = '.sq1($par['c_chx_projet_requete']).''.PHP_EOL;
    $sql0.=$where0;
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0= <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BASE_REFERENCE][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BASE_REFERENCE][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'source_requete' => $sql0 , 
            'texte_requete' => 'la modification dans la table des requetes' ,
            'exception' => $e , 
            'id_bdd' => BASE_REFERENCE
        );
    }
}
