class sql_390{
    /*
      =============================================================================================================
      node:sqlite
    */
    moi='sql_390';
    __gi1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor(__gi1,__db1){
//        console.log( 'constructor ' + this.moi );
        this.__gi1=__gi1;
        this.__db1=__db1;
    }
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

    $sql0='
      INSERT  INTO `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_requetes`(
         `chp_type_requete` , 
         `cht_rev_requete` , 
         `cht_sql_requete` , 
         `cht_php_requete` , 
         `cht_commentaire_requete` , 
         `che_est_souche_requete` , 
         `chp_table_reference_requete` , 
         `cht_js_requete`
      ) VALUES 
    ';
    $liste_des_valeurs='';
    for($i=0;($i < count($par));$i++){
        if($liste_des_valeurs != ''){
            $liste_des_valeurs.=',';
        }
        $liste_des_valeurs.='(';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_type_requete']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_rev_requete']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_sql_requete']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_php_requete']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_commentaire_requete']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['che_est_souche_requete']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_table_reference_requete']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_js_requete']).'';
        $liste_des_valeurs.=')';
    }
    $sql0.=$liste_des_valeurs;
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( 
            __xst      => __xsu,
            'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes(),
            'nouvel_id'   => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->lastInsertRowID(),
        ));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'sql0' => $sql0 , 
            'texte_requete' => 'l\'insertion dans la table des requetes' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1,
            'bdd' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
export{sql_390 as sql_390};
