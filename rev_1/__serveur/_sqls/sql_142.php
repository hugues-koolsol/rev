<?php
function sql_142($par,&$donnees_retournees,$that){
    $sql0='
      COMMIT;
    ';
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->exec($sql0);
        return(array( __xst => __xsu ));
    }catch(Exception $e){
        return(array( 
            __xst => __xer, 
            'code_erreur' => $GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->lastErrorCode() ,
            __xme => 'erreur sql_142()'.' '.$GLOBALS[__BDD][BDD_NUMERO_1][LIEN_BDD]->lastErrorMsg())
        );
    }
}
