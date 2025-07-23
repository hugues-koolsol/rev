<?php
function sql_125($par,&$donnees_retournees,$that){
    $sql0='
      /*meta(tester_les_dependances_dans_le_php(1))*/
      
      DELETE FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_dossiers
          WHERE (`chi_id_dossier` IN ('.sq0($par['liste_des_ids_a_supprimer']).') AND `chx_projet_dossier` = '.sq1($par['chx_projet_dossier']).') ;
    ';
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0=<pre>' . $sql0 . '</pre>' ; exit(0);
    $dep=$that->sql_dependances2(
      array(
          'table_parente'     => 'tbl_dossiers',
          'champ_parent'      => 'chi_id_dossier',
          'id_enregistrement' => $par['chi_id_dossier'],
          'id_bdd'   => BDD_NUMERO_1,
       ),
       $donnees_retournees
    );
    if($dep>0){
        $donnees_retournees[__x_signaux][__xer][]=' erreur lors de la suppression, il existe des dépendances sql_125() [' . __LINE__ . ']';
        return array(
            __xst => __xer,
            'source_requete' => $sql0,
            'texte_requete' => 'la suppression dans la table des dossiers',
            'exception' => null,
            'id_bdd' => BDD_NUMERO_1,
            'code_erreur' => 19
        );
    }
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'source_requete' => $sql0 , 
            'texte_requete' => 'la suppression dans la table des dossiers' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1
        );
    }
}
