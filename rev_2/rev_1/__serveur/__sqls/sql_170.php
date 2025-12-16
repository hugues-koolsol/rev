<?php
function sql_170($par,&$donnees_retournees,$that){
    $sql0='
      /*meta(ne_pas_tester_les_dependances_de_suppression(1))*/
      
      DELETE FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_dossiers
    ';
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0=<pre>' . $sql0 . '</pre>' ; exit(0);
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
            'texte_requete' => 'la suppression dans la table des dossiers' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1,
            'bdd' => $GLOBALS[__BDD][BDD_NUMERO_1] ,
        );
    }
}
