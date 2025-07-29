<?php
function sql_136($par,&$donnees_retournees,$that){
    $sql0='
      INSERT  INTO `tbl_projets`(
         `chp_nom_projet` , 
         `cht_commentaire_projet`
      ) VALUES 
    ';
    $liste_des_valeurs='';
    for($i=0;($i < count($par));$i++){
        if($liste_des_valeurs != ''){
            $liste_des_valeurs.=',';
        }
        $liste_des_valeurs.='(';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['chp_nom_projet']).''.',';
        $liste_des_valeurs.=PHP_EOL.'      '.sq1($par[$i]['cht_commentaire_projet']).'';
        $liste_des_valeurs.=')';
    }
    $sql0.=$liste_des_valeurs;
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BASE_REFERENCE][LIEN_BDD]->exec($sql0);
        return(array( 
            __xst      => __xsu,
            'changements' => $GLOBALS[__BDD][BASE_REFERENCE][LIEN_BDD]->changes(),
            'nouvel_id'   => $GLOBALS[__BDD][BASE_REFERENCE][LIEN_BDD]->lastInsertRowID(),
        ));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'source_requete' => $sql0 , 
            'texte_requete' => 'l\'insertion dans la table des projets' ,
            'exception' => $e , 
            'id_bdd' => BASE_REFERENCE
        );
    }
}
