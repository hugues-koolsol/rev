<?php
function sql_51($par,&$donnees_retournees,$that,$db){
    $sql0='
      BEGIN TRANSACTION;
    ';
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$db->exec($sql0);
        return(array( __xst => __xsu ));
    }catch(Exception $e){
        return(array( 
            __xst => __xer, 
            'code_erreur' => $db->lastErrorCode() ,
            __xme => 'erreur sql_51()'.' '.$db->lastErrorMsg())
        );
    }
}
