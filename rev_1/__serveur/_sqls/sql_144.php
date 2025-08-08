<?php
function sql_144($par,&$donnees_retournees,$that,$db){
    $sql0='
      ALTER TABLE ' . $par['nom_de_la_table'] . ' DROP COLUMN ' . $par['nom_du_champ'] . '
    ';
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $ret=$db->exec($sql0);
        return(array( __xst => __xsu ));
    }catch(Exception $e){
        return(
            array( 
                __xst => __xer, 
                'exception' => $e , 
                'sql0'    => $sql0 ,
                'code_erreur' => $db->lastErrorCode() ,
                __xme => 'erreur sql_144()'.' '.$db->lastErrorMsg(),
            )
        );
    }
}
