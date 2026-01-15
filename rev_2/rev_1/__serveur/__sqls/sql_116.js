class sql_116{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

    const champs0=`
      \`T0\`.\`chi_id_source\` , \`T0\`.\`chx_dossier_id_source\` , \`T0\`.\`chp_nom_source\` , \`T0\`.\`cht_commentaire_source\` , \`T0\`.\`cht_rev_source\` , 
      \`T0\`.\`cht_genere_source\` , \`T0\`.\`che_binaire_source\` , \`T0\`.\`che_contient_version_source\` , \`T0\`.\`che_autorisation_globale_source\` , \`T1\`.\`chp_nom_dossier\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_sources T0
       LEFT JOIN `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
    `;
    sql0+=from0;
    const where0=` WHERE ( \`T0\`.\`chi_id_source\` = `+this.__gi1.__fnt1.sq1(par['T0_chi_id_source'])+`)`;
    sql0+=where0;
        /* this.__gi1.ma_trace1('sql_116 sql0=',sql0); */

        let lignes = [];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes = await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees['__xst']=0;
            donnees_retournees['__xsi']['__xer'].push( 'erreur sql_116='+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {__xst  : 0};
        }

        let donnees0 = [];
        for(let col of lignes){
            donnees0.push({
                'T0.chi_id_source' : col[0],
                'T0.chx_dossier_id_source' : col[1],
                'T0.chp_nom_source' : col[2],
                'T0.cht_commentaire_source' : col[3],
                'T0.cht_rev_source' : col[4],
                'T0.cht_genere_source' : col[5],
                'T0.che_binaire_source' : col[6],
                'T0.che_contient_version_source' : col[7],
                'T0.che_autorisation_globale_source' : col[8],
                'T1.chp_nom_dossier' : col[9],
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
    moi='sql_116';
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
export{sql_116 as sql_116};
