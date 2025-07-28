<?php
function sql_116($par,&$donnees_retournees,$that){
    $sql0='UPDATE `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_bdds` SET '.PHP_EOL;
    $tableau_champs=array();

    if(isset($par['n_chx_dossier_id_basedd'])){
        if($par['n_chx_dossier_id_basedd']==='' || $par['n_chx_dossier_id_basedd']===NULL ){
            $tableau_champs[]='`chx_dossier_id_basedd` = NULL';
        }else{
            $tableau_champs[]='`chx_dossier_id_basedd` = '.sq0($par['n_chx_dossier_id_basedd']).'';
        }
    }
    if(isset($par['n_chp_commentaire_basedd'])){
        if($par['n_chp_commentaire_basedd']==='' || $par['n_chp_commentaire_basedd']===NULL ){
            $tableau_champs[]='`chp_commentaire_basedd` = NULL';
        }else{
            $tableau_champs[]='`chp_commentaire_basedd` = \''.sq0($par['n_chp_commentaire_basedd']).'\'';
        }
    }
    if(isset($par['n_chp_rev_travail_basedd'])){
        if($par['n_chp_rev_travail_basedd']==='' || $par['n_chp_rev_travail_basedd']===NULL ){
            $tableau_champs[]='`chp_rev_travail_basedd` = NULL';
        }else{
            $tableau_champs[]='`chp_rev_travail_basedd` = \''.sq0($par['n_chp_rev_travail_basedd']).'\'';
        }
    }
    if(isset($par['n_chp_fournisseur_basedd'])){
        if($par['n_chp_fournisseur_basedd']==='' || $par['n_chp_fournisseur_basedd']===NULL ){
            $tableau_champs[]='`chp_fournisseur_basedd` = NULL';
        }else{
            $tableau_champs[]='`chp_fournisseur_basedd` = \''.sq0($par['n_chp_fournisseur_basedd']).'\'';
        }
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => 'aucun champ à mettre à jour' ,
            'id_bdd' => BDD_NUMERO_1 ,
            'source_requete' => '' , 
            'texte_requete' => 'la modification dans la table des bdds' ,
            'exception' => null , 
        );
    }
    $sql0.=implode(','.PHP_EOL.'    ',$tableau_champs).PHP_EOL;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=' AND `chi_id_basedd` = '.sq1($par['c_chi_id_basedd']).''.PHP_EOL;
    $where0.=' AND `chx_projet_id_basedd` = '.sq1($par['c_chx_projet_id_basedd']).''.PHP_EOL;
    $sql0.=$where0;
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0= <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'source_requete' => $sql0 , 
            'texte_requete' => 'la modification dans la table des bdds' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1
        );
    }
}
