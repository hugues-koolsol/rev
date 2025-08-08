<?php
function sql_112($par,&$donnees_retournees,$that){
    $sql0='
      INSERT  INTO `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_revs`(
         `chx_projet_rev` , 
         `chp_provenance_rev` , 
         `chx_source_rev` , 
         `chp_id_rev` , 
         `chp_valeur_rev` , 
         `chp_type_rev` , 
         `chp_niveau_rev` , 
         `chp_quotee_rev` , 
         `chp_pos_premier_rev` , 
         `chp_pos_dernier_rev` , 
         `chp_parent_rev` , 
         `chp_nbr_enfants_rev` , 
         `chp_num_enfant_rev` , 
         `chp_profondeur_rev` , 
         `chp_pos_ouver_parenthese_rev` , 
         `chp_enfant_suivant_rev` , 
         `chp_commentaire_rev`
      ) VALUES 
    ';
    $liste_des_valeurs='';
    for($i=0;($i < count($par));$i++){
        if($liste_des_valeurs != ''){
            $liste_des_valeurs.=',';
        }
        $liste_des_valeurs.='(';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chx_projet_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_provenance_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chx_source_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_id_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_valeur_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_type_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_niveau_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_quotee_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_pos_premier_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_pos_dernier_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_parent_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_nbr_enfants_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_num_enfant_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_profondeur_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_pos_ouver_parenthese_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_enfant_suivant_rev']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_commentaire_rev']).'';
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
            'texte_requete' => 'l\'insertion dans la table des revs' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1,
            'bdd' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
