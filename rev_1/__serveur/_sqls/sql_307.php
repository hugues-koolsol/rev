<?php
function sql_307($par,&$donnees_retournees,$that){
    $sql0='
      INSERT  INTO `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_dossiers`(
         `chi_id_dossier` , 
         `chx_projet_dossier` , 
         `chp_nom_dossier` , 
         `chx_parent_dossier` , 
         `che_contient_genere_dossier` , 
         `chp__dtm_dossier` , 
         `chp__dtc_dossier`
      ) VALUES 
    ';
    $liste_des_valeurs='';
    for($i=0;($i < count($par));$i++){
        if($liste_des_valeurs != ''){
            $liste_des_valeurs.=',';
        }
        $liste_des_valeurs.='(';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chi_id_dossier']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chx_projet_dossier']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_nom_dossier']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chx_parent_dossier']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['che_contient_genere_dossier']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp__dtm_dossier']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp__dtc_dossier']).'';
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
            'source_requete' => $sql0 , 
            'texte_requete' => 'l\'insertion dans la table des dossiers' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1
        );
    }
}
