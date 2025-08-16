<?php
function sql_331($par,&$donnees_retournees,$that){
    $sql0='UPDATE `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_genres` SET '.PHP_EOL;
    $tableau_champs=array();

    if($par['n_chp_nom_genre']==='' || is_null($par['n_chp_nom_genre']) ){
        $tableau_champs[]='`chp_nom_genre` = NULL';
    }else{
        $tableau_champs[]='`chp_nom_genre` = \''.sq0($par['n_chp_nom_genre']).'\'';
    }
    if($par['n_chp_espece_genre']==='' || is_null($par['n_chp_espece_genre']) ){
        $tableau_champs[]='`chp_espece_genre` = NULL';
    }else{
        $tableau_champs[]='`chp_espece_genre` = \''.sq0($par['n_chp_espece_genre']).'\'';
    }
    if($par['n_che_longueur_genre']==='' || is_null($par['n_che_longueur_genre']) ){
        $tableau_champs[]='`che_longueur_genre` = NULL';
    }else{
        $tableau_champs[]='`che_longueur_genre` = '.sq0($par['n_che_longueur_genre']).'';
    }
    if($par['n_che_est_primaire_genre']==='' || is_null($par['n_che_est_primaire_genre']) ){
        $tableau_champs[]='`che_est_primaire_genre` = NULL';
    }else{
        $tableau_champs[]='`che_est_primaire_genre` = '.sq0($par['n_che_est_primaire_genre']).'';
    }
    if($par['n_che_est_incrément_genre']==='' || is_null($par['n_che_est_incrément_genre']) ){
        $tableau_champs[]='`che_est_incrément_genre` = NULL';
    }else{
        $tableau_champs[]='`che_est_incrément_genre` = '.sq0($par['n_che_est_incrément_genre']).'';
    }
    if($par['n_che_est_obligatoire_genre']==='' || is_null($par['n_che_est_obligatoire_genre']) ){
        $tableau_champs[]='`che_est_obligatoire_genre` = NULL';
    }else{
        $tableau_champs[]='`che_est_obligatoire_genre` = '.sq0($par['n_che_est_obligatoire_genre']).'';
    }
    if($par['n_che_a_init_genre']==='' || is_null($par['n_che_a_init_genre']) ){
        $tableau_champs[]='`che_a_init_genre` = NULL';
    }else{
        $tableau_champs[]='`che_a_init_genre` = '.sq0($par['n_che_a_init_genre']).'';
    }
    if($par['n_che_init_est_mot_genre']==='' || is_null($par['n_che_init_est_mot_genre']) ){
        $tableau_champs[]='`che_init_est_mot_genre` = NULL';
    }else{
        $tableau_champs[]='`che_init_est_mot_genre` = '.sq0($par['n_che_init_est_mot_genre']).'';
    }
    if($par['n_cht_valeur_init_genre']==='' || is_null($par['n_cht_valeur_init_genre']) ){
        $tableau_champs[]='`cht_valeur_init_genre` = NULL';
    }else{
        $tableau_champs[]='`cht_valeur_init_genre` = \''.sq0($par['n_cht_valeur_init_genre']).'\'';
    }
    if($par['n_chp_prefixe_genre']==='' || is_null($par['n_chp_prefixe_genre']) ){
        $tableau_champs[]='`chp_prefixe_genre` = NULL';
    }else{
        $tableau_champs[]='`chp_prefixe_genre` = \''.sq0($par['n_chp_prefixe_genre']).'\'';
    }

    if(count($tableau_champs)===0){
        return array(/**/
            __xst => __xer ,
            __xme => 'aucun champ à mettre à jour' ,
            'id_bdd' => BDD_NUMERO_1 ,
            'sql0' => $sql0 , 
            'texte_requete' => 'la modification dans la table des genres' ,
            'exception' => null , 
        );
    }
    $sql0.=implode(','.PHP_EOL.'    ',$tableau_champs).PHP_EOL;
    $where0=' WHERE 1=1 '.PHP_EOL;
    $where0.=' AND `chi_id_genre` = '.sq1($par['c_chi_id_genre']).''.PHP_EOL;
    $sql0.=$where0;
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0= <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'sql0' => $sql0 , 
            'texte_requete' => 'la modification dans la table des genres' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1,
            'bdd' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
