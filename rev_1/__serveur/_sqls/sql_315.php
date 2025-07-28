<?php
function sql_315($par,&$donnees_retournees,$that){
    $sql0='
      INSERT  INTO `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_bdds`(
         `chi_id_basedd` , 
         `chx_projet_id_basedd` , 
         `chp_commentaire_basedd` , 
         `chp_rev_travail_basedd` , 
         `chp_fournisseur_basedd` , 
         `chx_dossier_id_basedd` , 
         `chp__dtm_basedd` , 
         `chp__dtc_basedd`
      ) VALUES 
    ';
    $liste_des_valeurs='';
    for($i=0;($i < count($par));$i++){
        if($liste_des_valeurs != ''){
            $liste_des_valeurs.=',';
        }
        $liste_des_valeurs.='(';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chi_id_basedd']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chx_projet_id_basedd']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_commentaire_basedd']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_rev_travail_basedd']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_fournisseur_basedd']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chx_dossier_id_basedd']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp__dtm_basedd']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp__dtc_basedd']).'';
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
            'texte_requete' => 'l\'insertion dans la table des bdds' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1
        );
    }
}
