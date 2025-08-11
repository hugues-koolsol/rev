<?php
function sql_309($par,&$donnees_retournees,$that){
    $sql0='UPDATE `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_projets` SET '.PHP_EOL;
    $tableau_champs=array();

    if($par['n_chx_dossier_requetes_projet']==='' || is_null($par['n_chx_dossier_requetes_projet']) ){
        $tableau_champs[]='`chx_dossier_requetes_projet` = NULL';
    }else{
        $tableau_champs[]='`chx_dossier_requetes_projet` = '.sq0($par['n_chx_dossier_requetes_projet']).'';
    }
    if($par['n_chx_dossier_menus_projet']==='' || is_null($par['n_chx_dossier_menus_projet']) ){
        $tableau_champs[]='`chx_dossier_menus_projet` = NULL';
    }else{
        $tableau_champs[]='`chx_dossier_menus_projet` = '.sq0($par['n_chx_dossier_menus_projet']).'';
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => 'aucun champ à mettre à jour' ,
            'id_bdd' => BDD_NUMERO_1 ,
            'sql0' => $sql0 , 
            'texte_requete' => 'la modification dans la table des projets' ,
            'exception' => null , 
        );
    }
    $sql0.=implode(','.PHP_EOL.'    ',$tableau_champs).PHP_EOL;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=' AND `chi_id_projet` = '.sq1($par['c_chi_id_projet']).''.PHP_EOL;
    $sql0.=$where0;
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0= <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'sql0' => $sql0 , 
            'texte_requete' => 'la modification dans la table des projets' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1,
            'bdd' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
