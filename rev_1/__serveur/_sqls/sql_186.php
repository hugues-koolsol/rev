<?php
function sql_186($par,&$donnees_retournees,$that){
    $sql0='UPDATE `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_metiers` SET '.PHP_EOL;
    $tableau_champs=array();

    if(isset($par['n_chp_nom_metier'])){
        if($par['n_chp_nom_metier']==='' || $par['n_chp_nom_metier']===NULL ){
            $tableau_champs[]='`chp_nom_metier` = NULL';
        }else{
            $tableau_champs[]='`chp_nom_metier` = \''.sq0($par['n_chp_nom_metier']).'\'';
        }
    }
    if(isset($par['n_chx_parent_metier'])){
        if($par['n_chx_parent_metier']==='' || $par['n_chx_parent_metier']===NULL ){
            $tableau_champs[]='`chx_parent_metier` = NULL';
        }else{
            $tableau_champs[]='`chx_parent_metier` = '.sq0($par['n_chx_parent_metier']).'';
        }
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => 'aucun champ à mettre à jour' ,
            'id_bdd' => BDD_NUMERO_1 ,
            'sql0' => $sql0 , 
            'texte_requete' => 'la modification dans la table des metiers' ,
            'exception' => null , 
        );
    }
    $sql0.=implode(','.PHP_EOL.'    ',$tableau_champs).PHP_EOL;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=' AND `chi_id_metier` = '.sq1($par['c_chi_id_metier']).''.PHP_EOL;
    $sql0.=$where0;
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0= <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'sql0' => $sql0 , 
            'texte_requete' => 'la modification dans la table des metiers' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1,
            'bdd' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
