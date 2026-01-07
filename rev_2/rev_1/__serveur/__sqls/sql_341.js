class sql_341{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

    const champs0=`
      \`T0\`.\`chp_nom_source\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_sources T0    `;
    sql0+=from0;
    const where0=` WHERE \`T0\`.\`chx_dossier_id_source\` = `+this.__gi1.__fnt1.sq1(par['T0_chx_dossier_id_source'])+``;
    sql0+=where0;
        /* this.__gi1.ma_trace1('sql_341 sql0=',sql0); */

        const statement=this.__db1.prepare( sql0 );
        const lignes = statement.values();
        const donnees0 = [];

        for(const col of lignes){
            donnees0.push({
                'T0.chp_nom_source' : col[0],
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
    moi='sql_341';
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
export{sql_341 as sql_341};
