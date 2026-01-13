class sql_392{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

    $sql0='
      UPDATE tbl_projets SET 
                  `chi_id_projet` = '.sq1($par['n_chi_id_projet']).' , 
                  `chp_nom_projet` = '.sq1($par['n_chp_nom_projet']).'
                WHERE `chi_id_projet` = '.sq1($par['c_chi_id_projet']).' ;
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
                __xme => 'erreur sql_392()'.' '.$db->lastErrorMsg(),
            )
        );
    }
    /*
      =============================================================================================================
    */
    moi='sql_392';
    __gi1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor(__gi1,__db1){
        this.__gi1=__gi1;
        this.__db1=__db1;
    }
}
export{sql_392 as sql_392};
