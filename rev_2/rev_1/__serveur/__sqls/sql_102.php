<?php
function sql_102($par,&$donnees_retournees,$that){
    $sql0='
      INSERT  INTO `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_utilisateurs`(
         `chi_id_utilisateur` , 
         `chp_nom_de_connexion_utilisateur` , 
         `chp_mot_de_passe_utilisateur` , 
         `chx_acces_utilisateur` , 
         `chd__dtm_utilisateur` , 
         `chd__dtc_utilisateur`
      ) VALUES 
    ';
    $liste_des_valeurs='';
    for($i=0;($i < count($par));$i++){
        if($liste_des_valeurs != ''){
            $liste_des_valeurs.=',';
        }
        $liste_des_valeurs.='(';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chi_id_utilisateur']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_nom_de_connexion_utilisateur']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_mot_de_passe_utilisateur']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chx_acces_utilisateur']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($GLOBALS[__date_ms]).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($GLOBALS[__date_ms]).'';
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
            'texte_requete' => 'l\'insertion dans la table des utilisateurs' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1,
            'bdd' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
