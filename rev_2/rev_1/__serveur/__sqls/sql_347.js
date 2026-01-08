class sql_347{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

    const champs0=`
      \`T0\`.\`chi_id_source\` , \`T0\`.\`chp_nom_source\` , \`T0\`.\`che_contient_version_source\` , \`T0\`.\`chx_dossier_id_source\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_sources T0    `;
    sql0+=from0;
    const where0=` WHERE \`T0\`.\`che_contient_version_source\` = `+this.__gi1.__fnt1.sq1(par['T0_che_contient_version_source'])+``;
    sql0+=where0;
        /* this.__gi1.ma_trace1('sql_347 sql0=',sql0); */

        const statement=this.__db1.prepare( sql0 );
        const lignes = statement.values();
        statement.finalize();
        const donnees0 = [];

        for(const col of lignes){
            donnees0.push({
                'T0.chi_id_source' : col[0],
                'T0.chp_nom_source' : col[1],
                'T0.che_contient_version_source' : col[2],
                'T0.chx_dossier_id_source' : col[3],
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
    moi='sql_347';
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
export{sql_347 as sql_347};
