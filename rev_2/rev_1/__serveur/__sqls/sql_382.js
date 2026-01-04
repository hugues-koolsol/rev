class sql_382{
    /*
      =============================================================================================================
    */
    moi='sql_382';
    __gi1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor(__gi1,__db1){
        this.__gi1=__gi1;
        this.__db1=__db1;
    }
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

    const sql0=`
      DELETE FROM tbl_projets
          WHERE (\`chi_id_projet\` = `+this.__gi1.__fnt1.sq1(par['chi_id_projet'])+`) ;
    `;
    this.__gi1.ma_trace1('sql_' , sql0 );
    this.__gi1.ma_trace1('dependances à faire' );
/*
    $dep=$that->sql_dependances2(
      array(
          'table_parente'     => 'tbl_projets',
          'champ_parent'      => 'chi_id_projet',
          'id_enregistrement' => $par['chi_id_projet'],
          'id_bdd'   => BASE_REFERENCE,
       ),
       $donnees_retournees
    );
    if($dep>0){
        $donnees_retournees[__xsi][__xer][]=' erreur lors de la suppression, il existe des dépendances sql_382() [' . __LINE__ . ']';
        return array(
            __xst => __xer,
            'sql0' => $sql0,
            'texte_requete' => 'la suppression dans la table des projets',
            'exception' => null,
            'id_bdd' => BASE_REFERENCE,
            'code_erreur' => 19
        );
    }
*/
        try{
            const res=await this.__db1.exec(sql0);
            this.__gi1.ma_trace1('res=',res);
            return {
                __xst  : 1,
                __xva  : {},
                'sql0'    : sql0,
                'changements' : res
            };
        }catch(e){
            donnees_retournees['__xsi']['__xer'].push(this.__gi1.nl2());
            this.__gi1.ma_trace1('e=',e);
            return {
                __xst  : 0,
                __xva  : {},
                'sql0'    : sql0,
            };
        }

    }
}
export{sql_382 as sql_382};
