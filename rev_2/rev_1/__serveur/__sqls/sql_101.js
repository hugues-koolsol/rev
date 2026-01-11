class sql_101{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

    const champs0=`
      \`T0\`.\`chp_mot_de_passe_utilisateur\` , \`T0\`.\`chi_id_utilisateur\` , \`T0\`.\`chx_acces_utilisateur\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM tbl_utilisateurs T0    `;
    sql0+=from0;
    const where0=` WHERE \`T0\`.\`chp_nom_de_connexion_utilisateur\` = `+this.__gi1.__fnt1.sq1(par['T0_chp_nom_de_connexion_utilisateur'])+``;
    sql0+=where0;
    const order0='';
    sql0+=order0;
    const plage0=`
        LIMIT 1 OFFSET 0 `;
    sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_101 sql0=',sql0); */

        const statement=this.__db1.prepare( sql0 );
        const lignes = statement.values();
        statement.finalize();
        const donnees0 = [];

        for(const col of lignes){
            donnees0.push({
                'T0.chp_mot_de_passe_utilisateur' : col[0],
                'T0.chi_id_utilisateur' : col[1],
                'T0.chx_acces_utilisateur' : col[2],
            });
        }
        return {
            __xst  : 1,
            __xva  : donnees0,
            'sql0'    : sql0,
            'where0'  : where0,
        };

    }
    /*
      =============================================================================================================
    */
    moi='sql_101';
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
export{sql_101 as sql_101};
