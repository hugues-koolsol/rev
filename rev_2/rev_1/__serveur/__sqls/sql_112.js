class sql_112{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

    const champs0=`
      \`T0\`.\`chi_id_tache\` , \`T0\`.\`chx_utilisateur_tache\` , \`T0\`.\`chp_texte_tache\` , \`T0\`.\`chp_priorite_tache\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_taches T0    `;
    sql0+=from0;
    const where0=` WHERE ( \`T0\`.\`chi_id_tache\` = `+this.__gi1.__fnt1.sq1(par['T0_chi_id_tache'])+` AND \`T0\`.\`chx_utilisateur_tache\` = `+this.__gi1.__fnt1.sq1(par['T0_chx_utilisateur_tache'])+`)`;
    sql0+=where0;
        /* this.__gi1.ma_trace1('sql_112 sql0=',sql0); */

        const statement=this.__db1.prepare( sql0 );
        const lignes = statement.values();
        statement.finalize();
        const donnees0 = [];

        for(const col of lignes){
            donnees0.push({
                'T0.chi_id_tache' : col[0],
                'T0.chx_utilisateur_tache' : col[1],
                'T0.chp_texte_tache' : col[2],
                'T0.chp_priorite_tache' : col[3],
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
    moi='sql_112';
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
export{sql_112 as sql_112};
