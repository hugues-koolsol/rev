class sql_389{
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
      \`T0\`.\`chi_id_dossier\` , \`T0\`.\`chp_nom_dossier\` , \`T0\`.\`che_contient_genere_dossier\` , \`T0\`.\`chx_parent_dossier\` , \`T1\`.\`chp_nom_dossier\` , 
      \`T0\`.\`che_pour_les_js_dossier\`
    `;
    sql0='SELECT '+champs0;
    from0=`
      FROM  `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_dossiers T0
       LEFT JOIN `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
    `;
    sql0+=from0;
    where0=' WHERE 1=1 ';
    if(par.hasOwnProperty('T0_chi_id_dossier') && par['T0_chi_id_dossier'] !==  ''){
        where0+='\r\n'+this.__gi1.__fnt1.construction_where_sql_sur_id1('`T0`.`chi_id_dossier`', par['T0_chi_id_dossier'] );
    }
    if(par.hasOwnProperty('T0_chp_nom_dossier') && par['T0_chp_nom_dossier'] !==  ''){
        where0+=` AND \`T0\`.\`chp_nom_dossier\` LIKE `+this.__gi1.__fnt1.sq2(par['T0_chp_nom_dossier'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_che_contient_genere_dossier') && par['T0_che_contient_genere_dossier'] !==  ''){
        where0+='\r\n'+this.__gi1.__fnt1.construction_where_sql_sur_id1('`T0`.`che_contient_genere_dossier`', par['T0_che_contient_genere_dossier'] );
    }
    if(par.hasOwnProperty('T0_chx_parent_dossier') && par['T0_chx_parent_dossier'] !==  ''){
        where0+='\r\n'+this.__gi1.__fnt1.construction_where_sql_sur_id1('`T0`.`chx_parent_dossier`', par['T0_chx_parent_dossier'] );
    }
    if(par.hasOwnProperty('T1_chp_nom_dossier') && par['T1_chp_nom_dossier'] !==  ''){
        where0+=` AND \`T1\`.\`chp_nom_dossier\` = `+this.__gi1.__fnt1.sq1(par['T1_chp_nom_dossier'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_che_pour_les_js_dossier') && par['T0_che_pour_les_js_dossier'] !==  ''){
        where0+='\r\n'+this.__gi1.__fnt1.construction_where_sql_sur_id1('`T0`.`che_pour_les_js_dossier`', par['T0_che_pour_les_js_dossier'] );
    }
    sql0+=where0;
    const order0=`
       ORDER BY  \`T0\`.\`chx_parent_dossier\` ASC, \`T0\`.\`chp_nom_dossier\` ASC`;
    sql0+=order0;
    const plage0=`
        LIMIT `+this.__gi1.__fnt1.sq1(par['quantitee'])+` OFFSET `+this.__gi1.__fnt1.sq1(par['debut'])+` `;
    sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_389 sql0=',sql0); */
        let lignes=[];
        try{
            const statement=this.__db1.prepare( sql0 );
            lignes = statement.values();
        }catch(e){
            donnees_retournees['__xst']=0;
            donnees_retournees['__xsi']['__xer'].push( 'erreur sql 389 '+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {__xst  : 0};
        }

        /* this.__gi1.ma_trace1(lignes); */


        for(let numero_de_ligne in lignes){
            donnees0.push({
                'T0.chi_id_dossier' : lignes[numero_de_ligne][0],
                'T0.chp_nom_dossier' : lignes[numero_de_ligne][1],
                'T0.che_contient_genere_dossier' : lignes[numero_de_ligne][2],
                'T0.chx_parent_dossier' : lignes[numero_de_ligne][3],
                'T1.chp_nom_dossier' : lignes[numero_de_ligne][4],
                'T0.che_pour_les_js_dossier' : lignes[numero_de_ligne][5],
            });
        }

        const sql1='SELECT COUNT(*) as __nbEnregs '+from0+where0;
        const r1=this.__db1.prepare(sql1).all();
        __nbEnregs=r1[0]['__nbEnregs'];
        /* this.__gi1.ma_trace1('__nbEnregs=',__nbEnregs); */


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
    moi='sql_389';
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
export{sql_389 as sql_389};
