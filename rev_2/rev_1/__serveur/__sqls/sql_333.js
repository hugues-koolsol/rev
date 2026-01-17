class sql_333{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

    const champs0=`
      \`T0\`.\`chi_id_genre\` , \`T0\`.\`chp_nom_genre\` , \`T0\`.\`chp_espece_genre\` , \`T0\`.\`che_longueur_genre\` , \`T0\`.\`che_est_primaire_genre\` , 
      \`T0\`.\`che_est_incrément_genre\` , \`T0\`.\`che_est_obligatoire_genre\` , \`T0\`.\`che_a_init_genre\` , \`T0\`.\`che_init_est_mot_genre\` , \`T0\`.\`cht_valeur_init_genre\` , 
      \`T0\`.\`chp_prefixe_genre\` , \`T0\`.\`che_est_parmis_genre\` , \`T0\`.\`cht_parmis_genre\` , \`T0\`.\`che_ordre_genre\` , \`T0\`.\`che_est_tsc_genre\` , 
      \`T0\`.\`cht_fonctions_genre\` , \`T0\`.\`che_est_nur_genre\` , \`T0\`.\`che_est_tsm_genre\` , \`T0\`.\`che_est_session_genre\` , \`T0\`.\`chp_nom_en_session_genre\` , 
      \`T0\`.\`che_est_positif_genre\` , \`T0\`.\`cht_particularités_genre\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_genres T0    `;
    sql0+=from0;
    /* ATTENTION : pas de condition dans cette liste */
    const where0=' WHERE 1 ';
    sql0+=where0;
    const order0=`
       ORDER BY  \`T0\`.\`che_ordre_genre\` ASC, \`T0\`.\`chp_nom_genre\` ASC`;
    sql0+=order0;
    const plage0='';
    sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_333 sql0=',sql0); */

        let lignes = [];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes = await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees['__xst']=0;
            donnees_retournees['__xsi']['__xer'].push( 'erreur sql_333='+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {__xst  : 0};
        }

        let donnees0 = [];
        for(let col of lignes){
            donnees0.push({
                'T0.chi_id_genre' : col[0],
                'T0.chp_nom_genre' : col[1],
                'T0.chp_espece_genre' : col[2],
                'T0.che_longueur_genre' : col[3],
                'T0.che_est_primaire_genre' : col[4],
                'T0.che_est_incrément_genre' : col[5],
                'T0.che_est_obligatoire_genre' : col[6],
                'T0.che_a_init_genre' : col[7],
                'T0.che_init_est_mot_genre' : col[8],
                'T0.cht_valeur_init_genre' : col[9],
                'T0.chp_prefixe_genre' : col[10],
                'T0.che_est_parmis_genre' : col[11],
                'T0.cht_parmis_genre' : col[12],
                'T0.che_ordre_genre' : col[13],
                'T0.che_est_tsc_genre' : col[14],
                'T0.cht_fonctions_genre' : col[15],
                'T0.che_est_nur_genre' : col[16],
                'T0.che_est_tsm_genre' : col[17],
                'T0.che_est_session_genre' : col[18],
                'T0.chp_nom_en_session_genre' : col[19],
                'T0.che_est_positif_genre' : col[20],
                'T0.cht_particularités_genre' : col[21],
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
    moi='sql_333';
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
export{sql_333 as sql_333};
