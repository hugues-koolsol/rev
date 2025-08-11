<?php
function sql_103($par,&$donnees_retournees,$that){
    $sql0='UPDATE `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_requetes` SET '.PHP_EOL;
    $tableau_champs=array();

    if($par['n_chi_id_requete']==='' || is_null($par['n_chi_id_requete']) ){
        $tableau_champs[]='`chi_id_requete` = NULL';
    }else{
        $tableau_champs[]='`chi_id_requete` = '.sq0($par['n_chi_id_requete']).'';
    }
    if($par['n_cht_php_requete']==='' || is_null($par['n_cht_php_requete']) ){
        $tableau_champs[]='`cht_php_requete` = NULL';
    }else{
        $tableau_champs[]='`cht_php_requete` = \''.sq0($par['n_cht_php_requete']).'\'';
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => 'aucun champ à mettre à jour' ,
            'id_bdd' => BDD_NUMERO_1 ,
            'sql0' => $sql0 , 
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
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'sql0' => $sql0 , 
            'texte_requete' => 'la modification dans la table des requetes' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1,
            'bdd' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
