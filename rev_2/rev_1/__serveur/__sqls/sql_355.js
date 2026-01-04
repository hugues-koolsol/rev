class sql_355{
    /*
      =============================================================================================================
    */
    moi='sql_355';
    __gi1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor(__gi1,__db1){
        this.__gi1=__gi1;
        this.__db1=__db1;
    }
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

    $sql0='UPDATE `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_requetes` SET '.PHP_EOL;
    $tableau_champs=array();

    if($par['n_che_est_souche_requete']==='' || is_null($par['n_che_est_souche_requete']) ){
        $tableau_champs[]='`che_est_souche_requete` = NULL';
    }else{
        $tableau_champs[]='`che_est_souche_requete` = '.sq0($par['n_che_est_souche_requete']).'';
    }
    if($par['n_chp_type_requete']==='' || is_null($par['n_chp_type_requete']) ){
        $tableau_champs[]='`chp_type_requete` = NULL';
    }else{
        $tableau_champs[]='`chp_type_requete` = \''.sq0($par['n_chp_type_requete']).'\'';
    }
    if($par['n_cht_rev_requete']==='' || is_null($par['n_cht_rev_requete']) ){
        $tableau_champs[]='`cht_rev_requete` = NULL';
    }else{
        $tableau_champs[]='`cht_rev_requete` = \''.sq0($par['n_cht_rev_requete']).'\'';
    }
    if($par['n_cht_sql_requete']==='' || is_null($par['n_cht_sql_requete']) ){
        $tableau_champs[]='`cht_sql_requete` = NULL';
    }else{
        $tableau_champs[]='`cht_sql_requete` = \''.sq0($par['n_cht_sql_requete']).'\'';
    }
    if($par['n_cht_php_requete']==='' || is_null($par['n_cht_php_requete']) ){
        $tableau_champs[]='`cht_php_requete` = NULL';
    }else{
        $tableau_champs[]='`cht_php_requete` = \''.sq0($par['n_cht_php_requete']).'\'';
    }
    if($par['n_cht_commentaire_requete']==='' || is_null($par['n_cht_commentaire_requete']) ){
        $tableau_champs[]='`cht_commentaire_requete` = NULL';
    }else{
        $tableau_champs[]='`cht_commentaire_requete` = \''.sq0($par['n_cht_commentaire_requete']).'\'';
    }
    if($par['n_chp_table_reference_requete']==='' || is_null($par['n_chp_table_reference_requete']) ){
        $tableau_champs[]='`chp_table_reference_requete` = NULL';
    }else{
        $tableau_champs[]='`chp_table_reference_requete` = \''.sq0($par['n_chp_table_reference_requete']).'\'';
    }
    if($par['n_cht_js_requete']==='' || is_null($par['n_cht_js_requete']) ){
        $tableau_champs[]='`cht_js_requete` = NULL';
    }else{
        $tableau_champs[]='`cht_js_requete` = \''.sq0($par['n_cht_js_requete']).'\'';
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
export{sql_355 as sql_355};
