<?php
function sql_182($par,&$donnees_retournees,$that){
    $sql0='
      DELETE FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_utilisateurs
          WHERE `chi_id_utilisateur` = '.sq1($par['chi_id_utilisateur']).' ;
    ';
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0=<pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'source_requete' => $sql0 , 
            'texte_requete' => 'la suppression dans la table des utilisateurs' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1
        );
    }
}
