<?php
function sql_139($par,&$donnees_retournees,$that){
    $sql0='
      /*meta(tester_les_dependances_dans_le_php(1))*/
      
      DELETE FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_sources
          WHERE (`chi_id_source` = '.sq1($par['chi_id_source']).' AND `chx_projet_id_source` = '.sq1($par['chx_projet_id_source']).') ;
    ';
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0=<pre>' . $sql0 . '</pre>' ; exit(0);
    $dep=$that->sql_dependances2(
      array(
          'table_parente'     => 'tbl_sources',
          'champ_parent'      => 'chi_id_source',
          'id_enregistrement' => $par['chi_id_source'],
          'id_bdd'   => BDD_NUMERO_1,
       ),
       $donnees_retournees
    );
    if($dep>0){
        $donnees_retournees[__x_signaux][__xer][]=' erreur lors de la suppression, il existe des dépendances sql_139() [' . __LINE__ . ']';
        return array(
            __xst => __xer,
            'source_requete' => $sql0,
            'texte_requete' => 'la suppression dans la table des sources',
            'exception' => null,
            'id_bdd' => BDD_NUMERO_1
        );
    }
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'source_requete' => $sql0 , 
            'texte_requete' => 'la suppression dans la table des sources' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1
        );
    }
}
