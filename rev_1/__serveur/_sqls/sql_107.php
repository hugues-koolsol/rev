<?php
function sql_107($par,&$donnees_retournees,$that){
    $sql0='
      INSERT  INTO `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.`tbl_requetes`(
         `chx_projet_requete` , 
         `chp_type_requete` , 
         `cht_rev_requete` , 
         `cht_sql_requete` , 
         `cht_php_requete` , 
         `cht_commentaire_requete`
      ) VALUES 
    ';
    $liste_des_valeurs='';
    for($i=0;($i < count($par));$i++){
        if($liste_des_valeurs != ''){
            $liste_des_valeurs.=',';
        }
        $liste_des_valeurs.='(';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chx_projet_requete']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_type_requete']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_rev_requete']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_sql_requete']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_php_requete']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_commentaire_requete']).'';
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
