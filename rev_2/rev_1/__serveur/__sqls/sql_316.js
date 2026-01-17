class sql_316{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

    const champs0=`
      \`T0\`.\`chi_id_projet\` , \`T0\`.\`chp_nom_projet\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM tbl_projets T0    `;
    sql0+=from0;
    const where0=` WHERE \`T0\`.\`chi_id_projet\` > 2`;
    sql0+=where0;
        /* this.__gi1.ma_trace1('sql_316 sql0=',sql0); */

        let lignes = [];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes = await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees['__xst']=0;
            donnees_retournees['__xsi']['__xer'].push( 'erreur sql_316='+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {__xst  : 0};
        }

        let donnees0 = [];
        for(let col of lignes){
            donnees0.push({
                'T0.chi_id_projet' : col[0],
                'T0.chp_nom_projet' : col[1],
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
    moi='sql_316';
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
export{sql_316 as sql_316};
