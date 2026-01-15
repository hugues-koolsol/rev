class sql_118{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

    const sql0=`
      DELETE FROM tbl_sources
          WHERE \`chi_id_source\` = `+this.__gi1.__fnt1.sq1(par['chi_id_source'])+` ;
    `;
    /* this.__gi1.ma_trace1('sql_' , sql0 ); */
    this.__gi1.ma_trace1('dependances à faire' );
/*
    $dep=$that->sql_dependances2(
      array(
          'table_parente'     => 'tbl_sources',
          'champ_parent'      => 'chi_id_source',
          'id_enregistrement' => $par['chi_id_source'],
          'id_bdd'   => BDD_NUMERO_1,
       ),
       $donnees_retournees
    );
    if($dep>0){
        $donnees_retournees[__xsi][__xer][]=' erreur lors de la suppression, il existe des dépendances sql_118() [' . __LINE__ . ']';
        return array(
            __xst => __xer,
            'sql0' => $sql0,
            'texte_requete' => 'la suppression dans la table des sources',
            'exception' => null,
            'id_bdd' => BDD_NUMERO_1,
            'code_erreur' => 19
        );
    }
*/
        try{
            const res=await this.__db1.exec(sql0);
            /* this.__gi1.ma_trace1('res=',res) */;
            return {
                __xst  : 1,
                __xva  : {},
                'sql0'    : sql0,
                'changements' : res
            };
        }catch(e){
            let __xme=(e.stack.indexOf('FOREIGN KEY')>=0?'cet enregistrement possède des dépendants<br />':'autre erreur DELETE') + ' [' + this.__gi1.nl2() + ']';
            donnees_retournees['__xsi']['__xer'].push(__xme);
            /* this.__gi1.ma_trace1('e=',e); */
            return {
                __xst  : 0,
                __xva  : {},
                __xme  : __xme,
                'sql0'    : sql0,
            };
        }

    }
    /*
      =============================================================================================================
    */
    moi='sql_118';
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
export{sql_118 as sql_118};
