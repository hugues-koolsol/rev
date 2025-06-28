<?php
function sql_57($par,&$donnees_retournees,$that){
    $sql0='
      /*meta(tester_les_dependances_dans_le_php(1))*/
      
      DELETE FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_projets
          WHERE `chi_id_projet` >= '.sq1($par['chi_id_projet']).' ;
    ';
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0=<pre>' . $sql0 . '</pre>' ; exit(0);
    $dep=$that->sql_dependances2(
      array(
          'table_parente'     => 'tbl_projets',
          'champ_parent'      => 'chi_id_projet',
          'id_enregistrement' => $par['chi_id_projet'],
          'id_bdd'   => BDD_NUMERO_1,
       ),
       $donnees_retournees
    );
    if($dep>0){
        $donnees_retournees[__x_signaux][__xer][]=' erreur lors de la suppression, il existe des dépendances sql_57() [' . __LINE__ . ']';
        return array(
            __xst => __xer,
            'source_requete' => $sql0,
            'texte_requete' => 'la suppression dans la table des projets',
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
            'texte_requete' => 'la suppression dans la table des projets' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1
        );
    }
}
