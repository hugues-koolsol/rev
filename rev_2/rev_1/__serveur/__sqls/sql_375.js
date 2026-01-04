class sql_375{
    /*
      =============================================================================================================
    */
    moi='sql_375';
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

    const champs0=`
      \`T0\`.\`chi_id_projet\` , \`T0\`.\`chp_nom_projet\` , \`T0\`.\`chx_dossier_requetes_projet\` , \`T0\`.\`chx_dossier_menus_projet\` , \`T0\`.\`cht_commentaire_projet\` , 
      \`T1\`.\`chp_nom_dossier\` , \`T2\`.\`chp_nom_dossier\` , \`T0\`.\`chi_id_projet\` , \`T0\`.\`chp_nom_projet\` , \`T0\`.\`chx_dossier_requetes_projet\` , 
      \`T0\`.\`chx_dossier_menus_projet\` , \`T0\`.\`cht_commentaire_projet\` , \`T1\`.\`chp_nom_dossier\` , \`T2\`.\`chp_nom_dossier\` , \`T0\`.\`chi_id_projet\` , 
      \`T0\`.\`chp_nom_projet\` , \`T0\`.\`chx_dossier_requetes_projet\` , \`T0\`.\`chx_dossier_menus_projet\` , \`T0\`.\`cht_commentaire_projet\` , \`T1\`.\`chp_nom_dossier\` , 
      \`T2\`.\`chp_nom_dossier\` , \`T0\`.\`chi_id_projet\` , \`T0\`.\`chp_nom_projet\` , \`T0\`.\`chx_dossier_requetes_projet\` , \`T0\`.\`chx_dossier_menus_projet\` , 
      \`T0\`.\`cht_commentaire_projet\` , \`T1\`.\`chp_nom_dossier\` , \`T2\`.\`chp_nom_dossier\` , \`T0\`.\`chx_dossier_bdds_projet\` , \`T3\`.\`chp_nom_dossier\` , 
      \`T4\`.\`chp_nom_dossier\` , \`T0\`.\`chx_dossier_js_projet\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_projets T0
       LEFT JOIN `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet

       LEFT JOIN `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_menus_projet

       LEFT JOIN `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_dossiers T3 ON T3.chi_id_dossier = T0.chx_dossier_bdds_projet

       LEFT JOIN `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_dossiers T4 ON T4.chi_id_dossier = T0.chx_dossier_js_projet
    `;
    sql0+=from0;
    const where0=` WHERE \`T0\`.\`chi_id_projet\` = `+this.__gi1.__fnt1.sq1(par['T0_chi_id_projet'])+``;
    sql0+=where0;
        this.__gi1.ma_trace1('sql_375 sql0=',sql0);

        const statement=this.__db1.prepare( sql0 );
        const lignes = statement.values();
        const donnees0 = [];

        for(const col of lignes){
            donnees0.push({
                'T0.chi_id_projet' : col[0],
                'T0.chp_nom_projet' : col[1],
                'T0.chx_dossier_requetes_projet' : col[2],
                'T0.chx_dossier_menus_projet' : col[3],
                'T0.cht_commentaire_projet' : col[4],
                'T1.chp_nom_dossier' : col[5],
                'T2.chp_nom_dossier' : col[6],
                'T0.chi_id_projet' : col[7],
                'T0.chp_nom_projet' : col[8],
                'T0.chx_dossier_requetes_projet' : col[9],
                'T0.chx_dossier_menus_projet' : col[10],
                'T0.cht_commentaire_projet' : col[11],
                'T1.chp_nom_dossier' : col[12],
                'T2.chp_nom_dossier' : col[13],
                'T0.chi_id_projet' : col[14],
                'T0.chp_nom_projet' : col[15],
                'T0.chx_dossier_requetes_projet' : col[16],
                'T0.chx_dossier_menus_projet' : col[17],
                'T0.cht_commentaire_projet' : col[18],
                'T1.chp_nom_dossier' : col[19],
                'T2.chp_nom_dossier' : col[20],
                'T0.chi_id_projet' : col[21],
                'T0.chp_nom_projet' : col[22],
                'T0.chx_dossier_requetes_projet' : col[23],
                'T0.chx_dossier_menus_projet' : col[24],
                'T0.cht_commentaire_projet' : col[25],
                'T1.chp_nom_dossier' : col[26],
                'T2.chp_nom_dossier' : col[27],
                'T0.chx_dossier_bdds_projet' : col[28],
                'T3.chp_nom_dossier' : col[29],
                'T4.chp_nom_dossier' : col[30],
                'T0.chx_dossier_js_projet' : col[31],
            });
        }
        return {
            __xst  : 1,
            __xva  : donnees0,
            'sql0'    : sql0,
            'where0'  : where0,
        };

    }
}
export{sql_375 as sql_375};
