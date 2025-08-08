<?php
function sql_154($par,&$donnees_retournees,$that){
    $sql0='
      INSERT  INTO `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_sources`(
         `chx_dossier_id_source` , 
         `chx_projet_id_source` , 
         `chp_nom_source` , 
         `cht_commentaire_source` , 
         `cht_rev_source` , 
         `cht_genere_source` , 
         `che_binaire_source`
      ) VALUES 
    ';
    $liste_des_valeurs='';
    for($i=0;($i < count($par));$i++){
        if($liste_des_valeurs != ''){
            $liste_des_valeurs.=',';
        }
        $liste_des_valeurs.='(';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chx_dossier_id_source']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chx_projet_id_source']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_nom_source']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_commentaire_source']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_rev_source']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_genere_source']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['che_binaire_source']).'';
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
            'texte_requete' => 'l\'insertion dans la table des sources' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1,
            'bdd' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
