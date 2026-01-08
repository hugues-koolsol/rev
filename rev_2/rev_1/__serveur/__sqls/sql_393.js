class sql_393{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

    const champs0=`
      \`T0\`.\`chi_id_projet\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_projets T0    `;
    sql0+=from0;
    /* ATTENTION : pas de condition dans cette liste */
    const where0=' WHERE 1 ';
    sql0+=where0;
    const order0=`
       ORDER BY  T0.chi_id_projet DESC`;
    sql0+=order0;
    const plage0=`
        LIMIT 1 OFFSET 0 `;
    sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_393 sql0=',sql0); */

        const statement=this.__db1.prepare( sql0 );
        const lignes = statement.values();
        statement.finalize();
        const donnees0 = [];

        for(const col of lignes){
            donnees0.push({
                'T0.chi_id_projet' : col[0],
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
    moi='sql_393';
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
export{sql_393 as sql_393};
