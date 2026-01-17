class sql_328{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

        let donnees0=[];
        let __nbEnregs=0;
        let where0='';
        let sql0='';
        let champs0='';
        let from0='';

    champs0=`
      \`T0\`.\`chi_id_genre\` , \`T0\`.\`chp_nom_genre\` , \`T0\`.\`che_ordre_genre\` , \`T0\`.\`chp_prefixe_genre\` , \`T0\`.\`chp_espece_genre\` , 
      \`T0\`.\`che_longueur_genre\` , \`T0\`.\`che_est_primaire_genre\` , \`T0\`.\`che_est_incrément_genre\` , \`T0\`.\`che_est_obligatoire_genre\` , \`T0\`.\`che_a_init_genre\` , 
      \`T0\`.\`che_init_est_mot_genre\` , \`T0\`.\`cht_valeur_init_genre\` , \`T0\`.\`che_est_parmis_genre\` , \`T0\`.\`cht_parmis_genre\` , \`T0\`.\`cht_fonctions_genre\` , 
      \`T0\`.\`che_est_nur_genre\` , \`T0\`.\`che_est_tsm_genre\` , \`T0\`.\`che_est_tsc_genre\` , \`T0\`.\`chd__dtc_genre\` , \`T0\`.\`chd__dtm_genre\` , 
      \`T0\`.\`che__nur_genre\` , \`T0\`.\`che_est_session_genre\` , \`T0\`.\`chp_nom_en_session_genre\` , \`T0\`.\`che_est_positif_genre\`
    `;
    sql0='SELECT '+champs0;
    from0=`
      FROM  `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_genres T0    `;
    sql0+=from0;
    where0=' WHERE 1=1 ';
    if(par.hasOwnProperty('T0_chi_id_genre') && par['T0_chi_id_genre'] !==  ''){
        where0+='\r\n'+this.__gi1.__fnt1.construction_where_sql_sur_id1('`T0`.`chi_id_genre`', par['T0_chi_id_genre'] );
    }
    if(par.hasOwnProperty('T0_chp_nom_genre') && par['T0_chp_nom_genre'] !==  ''){
        where0+=` AND \`T0\`.\`chp_nom_genre\` LIKE `+this.__gi1.__fnt1.sq2(par['T0_chp_nom_genre'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_chp_prefixe_genre') && par['T0_chp_prefixe_genre'] !==  ''){
        where0+=` AND \`T0\`.\`chp_prefixe_genre\` LIKE `+this.__gi1.__fnt1.sq2(par['T0_chp_prefixe_genre'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_chp_espece_genre') && par['T0_chp_espece_genre'] !==  ''){
        where0+=` AND \`T0\`.\`chp_espece_genre\` LIKE `+this.__gi1.__fnt1.sq2(par['T0_chp_espece_genre'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_cht_valeur_init_genre') && par['T0_cht_valeur_init_genre'] !==  ''){
        where0+=` AND \`T0\`.\`cht_valeur_init_genre\` LIKE `+this.__gi1.__fnt1.sq2(par['T0_cht_valeur_init_genre'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_cht_parmis_genre') && par['T0_cht_parmis_genre'] !==  ''){
        where0+=` AND \`T0\`.\`cht_parmis_genre\` LIKE `+this.__gi1.__fnt1.sq2(par['T0_cht_parmis_genre'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_che_ordre_genre') && par['T0_che_ordre_genre'] !==  ''){
        where0+='\r\n'+this.__gi1.__fnt1.construction_where_sql_sur_id1('`T0`.`che_ordre_genre`', par['T0_che_ordre_genre'] );
    }
    sql0+=where0;
    const order0=`
       ORDER BY  \`T0\`.\`che_ordre_genre\` ASC, \`T0\`.\`chi_id_genre\` DESC`;
    sql0+=order0;
    const plage0=`
        LIMIT `+this.__gi1.__fnt1.sq1(par['quantitee'])+` OFFSET `+this.__gi1.__fnt1.sq1(par['debut'])+` `;
    sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_328 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes = await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees['__xst']=0;
            donnees_retournees['__xsi']['__xer'].push( 'erreur sql 328 '+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {__xst  : 0};
        }


        for(let numero_de_ligne in lignes){
            donnees0.push({
                'T0.chi_id_genre' : lignes[numero_de_ligne][0],
                'T0.chp_nom_genre' : lignes[numero_de_ligne][1],
                'T0.che_ordre_genre' : lignes[numero_de_ligne][2],
                'T0.chp_prefixe_genre' : lignes[numero_de_ligne][3],
                'T0.chp_espece_genre' : lignes[numero_de_ligne][4],
                'T0.che_longueur_genre' : lignes[numero_de_ligne][5],
                'T0.che_est_primaire_genre' : lignes[numero_de_ligne][6],
                'T0.che_est_incrément_genre' : lignes[numero_de_ligne][7],
                'T0.che_est_obligatoire_genre' : lignes[numero_de_ligne][8],
                'T0.che_a_init_genre' : lignes[numero_de_ligne][9],
                'T0.che_init_est_mot_genre' : lignes[numero_de_ligne][10],
                'T0.cht_valeur_init_genre' : lignes[numero_de_ligne][11],
                'T0.che_est_parmis_genre' : lignes[numero_de_ligne][12],
                'T0.cht_parmis_genre' : lignes[numero_de_ligne][13],
                'T0.cht_fonctions_genre' : lignes[numero_de_ligne][14],
                'T0.che_est_nur_genre' : lignes[numero_de_ligne][15],
                'T0.che_est_tsm_genre' : lignes[numero_de_ligne][16],
                'T0.che_est_tsc_genre' : lignes[numero_de_ligne][17],
                'T0.chd__dtc_genre' : lignes[numero_de_ligne][18],
                'T0.chd__dtm_genre' : lignes[numero_de_ligne][19],
                'T0.che__nur_genre' : lignes[numero_de_ligne][20],
                'T0.che_est_session_genre' : lignes[numero_de_ligne][21],
                'T0.chp_nom_en_session_genre' : lignes[numero_de_ligne][22],
                'T0.che_est_positif_genre' : lignes[numero_de_ligne][23],
            });
        }

        const sql1='SELECT COUNT(*) as __nbEnregs '+from0+where0;
        let statement1=await this.__db1.prepare( sql1 );
        lignes = await statement1.values();
        await statement1.finalize();
        for(let numero_de_ligne in lignes){
            __nbEnregs=lignes[numero_de_ligne][0];
        }



        return {
            __xst  : 1,
            __xva  : donnees0,
            'nombre'  : __nbEnregs,
            'sql0'    : sql0,
            'where0'  : where0,
        };

    }
    /*
      =============================================================================================================
    */
    moi='sql_328';
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
export{sql_328 as sql_328};
