<?php
function sql_166($par,&$donnees_retournees,$that,$db){
    $sql0='
      SELECT 
            `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T0`.`chi_id_dossier`
                  FROM tbl_dossiers T0
            WHERE (`T0`.`chi_id_dossier` = '.sq1($par['T0_chi_id_dossier']).')
            ;
    ';
    // echo __FILE__ . ' ' . __LINE__ . ' $sql0 = <pre>' . $sql0 . '</pre>' ; exit(0);
    try{
        $db->enableExceptions(true);
        $stmt0=$db->prepare($sql0);
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=$tab0;
        }
        return array(
           __xst  => __xsu  ,
           __xva  => $donnees0   ,
           'sql0'    => $sql0          ,
        );
    }catch(Exception $e){
        return array(
            __xst => __xer ,
            'sql0' => $sql0 ,
            'texte_requete' => 'la selection sur les éléments' ,
            'exception' => $e,
        );
    }
}
