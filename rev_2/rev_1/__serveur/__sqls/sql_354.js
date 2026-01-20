class sql_354{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

    const champs0=`
      \`T0\`.\`chi_id_requete\` , \`T0\`.\`chp_type_requete\` , \`T0\`.\`cht_rev_requete\` , \`T0\`.\`cht_sql_requete\` , \`T0\`.\`cht_php_requete\` , 
      \`T0\`.\`cht_commentaire_requete\` , \`T0\`.\`cht_matrice_requete\` , \`T0\`.\`che_est_souche_requete\` , \`T0\`.\`chp_table_reference_requete\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_requetes T0    `;
    sql0+=from0;
    const where0=` WHERE \`T0\`.\`chi_id_requete\` = `+this.__gi1.__fnt1.sq1(par['T0_chi_id_requete'])+``;
    sql0+=where0;
        /* this.__gi1.ma_trace1('sql_354 sql0=',sql0); */

        let lignes = [];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes = await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees['__xst']=0;
            donnees_retournees['__xsi']['__xer'].push( 'erreur sql_354='+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {__xst  : 0};
        }

        let donnees0 = [];
        for(let col of lignes){
            donnees0.push({
                'T0.chi_id_requete' : col[0],
                'T0.chp_type_requete' : col[1],
                'T0.cht_rev_requete' : col[2],
                'T0.cht_sql_requete' : col[3],
                'T0.cht_php_requete' : col[4],
                'T0.cht_commentaire_requete' : col[5],
                'T0.cht_matrice_requete' : col[6],
                'T0.che_est_souche_requete' : col[7],
                'T0.chp_table_reference_requete' : col[8],
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
    moi='sql_354';
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
export{sql_354 as sql_354};
