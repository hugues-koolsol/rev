<?php
function sql_105($par,&$donnees_retournees,$that){
    $sql0='
      DELETE FROM `'.$GLOBALS[__BDD][BDD_NUMERO_1][PREFIXE_BDD].'`.tbl_revs
          WHERE (`chx_projet_rev` = '.sq1($par['chx_projet_rev']).' AND `chp_provenance_rev` = '.sq1($par['chp_provenance_rev']).' AND `chx_source_rev` = '.sq1($par['chx_source_rev']).') ;
    ';
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0=<pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu, 'changements' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->changes()));
    }catch(Exception $e){
        return array(/**/
            __xst => __xer , 
            'source_requete' => $sql0 , 
            'texte_requete' => 'la suppression dans la table des revs' ,
            'exception' => $e , 
            'id_bdd' => BDD_NUMERO_1
        );
    }
}
