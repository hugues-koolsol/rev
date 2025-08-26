<?php
function sql_329($par,&$donnees_retournees,$that){
    $sql0='
      INSERT  INTO `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_genres`(
         `chp_nom_genre` , 
         `chp_espece_genre` , 
         `che_longueur_genre` , 
         `che_est_primaire_genre` , 
         `che_est_incrément_genre` , 
         `che_est_obligatoire_genre` , 
         `che_a_init_genre` , 
         `che_init_est_mot_genre` , 
         `cht_valeur_init_genre` , 
         `chp_prefixe_genre` , 
         `che_est_parmis_genre` , 
         `cht_parmis_genre` , 
         `che_est_ts_genre` , 
         `cht_fonctions_genre` , 
         `che_est_nur_genre`
      ) VALUES 
    ';
    $liste_des_valeurs='';
    for($i=0;($i < count($par));$i++){
        if($liste_des_valeurs != ''){
            $liste_des_valeurs.=',';
        }
        $liste_des_valeurs.='(';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_nom_genre']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_espece_genre']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['che_longueur_genre']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['che_est_primaire_genre']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['che_est_incrément_genre']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['che_est_obligatoire_genre']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['che_a_init_genre']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['che_init_est_mot_genre']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_valeur_init_genre']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_prefixe_genre']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['che_est_parmis_genre']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_parmis_genre']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['che_est_ts_genre']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_fonctions_genre']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['che_est_nur_genre']).'';
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
            'texte_requete' => 'l\'insertion dans la table des genres' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1,
            'bdd' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
