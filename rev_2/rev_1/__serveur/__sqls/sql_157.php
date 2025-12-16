<?php
function sql_157($par,&$donnees_retournees,$that){
    $sql0='
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
        $donnees_retournees[__xsi][__xer][]=' erreur lors de la suppression, il existe des dépendances sql_157() [' . __LINE__ . ']';
        return array(
            __xst => __xer,
            'sql0' => $sql0,
            'texte_requete' => 'la suppression dans la table des projets',
            'exception' => null,
            'id_bdd' => BDD_NUMERO_1,
            'code_erreur' => 19
        );
    }
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){

        $le_message='Erreur lors de la suppression';
        if($e->getCode()===19){
            $le_message='il existe des enregistrements dépendants';
        }

        return array(/**/
            __xst => __xer , 
            __xme => $le_message , 
            'sql0' => $sql0 , 
            'texte_requete' => 'la suppression dans la table des projets' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1,
            'bdd' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
