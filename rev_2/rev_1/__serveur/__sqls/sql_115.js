class sql_115{
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
      \`T0\`.\`chi_id_source\` , \`T0\`.\`chx_dossier_id_source\` , \`T0\`.\`chp_nom_source\` , \`T0\`.\`cht_commentaire_source\` , \`T0\`.\`cht_rev_source\` , 
      \`T0\`.\`cht_genere_source\` , \`T1\`.\`chp_nom_dossier\` , \`T0\`.\`che_binaire_source\` , \`T0\`.\`che_contient_version_source\` , \`T0\`.\`che_autorisation_globale_source\`
    `;
    sql0='SELECT '+champs0;
    from0=`
      FROM  `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_sources T0
       LEFT JOIN `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
    `;
    sql0+=from0;
    where0=' WHERE 1=1 ';
    if(par.hasOwnProperty('T0_chp_nom_source') && par['T0_chp_nom_source'] !==  ''){
        where0+=` AND \`T0\`.\`chp_nom_source\` LIKE `+this.__gi1.__fnt1.sq2(par['T0_chp_nom_source'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_chi_id_source') && par['T0_chi_id_source'] !==  ''){
        where0+='\r\n'+this.__gi1.__fnt1.construction_where_sql_sur_id1('`T0`.`chi_id_source`', par['T0_chi_id_source'] );
    }
    if(par.hasOwnProperty('T0_chi_id_source2') && par['T0_chi_id_source2'] !==  ''){
        where0+=` AND \`T0\`.\`chi_id_source\` > `+this.__gi1.__fnt1.sq1(par['T0_chi_id_source2'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_chi_id_source3') && par['T0_chi_id_source3'] !==  ''){
        where0+=` AND \`T0\`.\`chi_id_source\` <= `+this.__gi1.__fnt1.sq1(par['T0_chi_id_source3'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_che_binaire_source') && par['T0_che_binaire_source'] !==  ''){
        where0+='\r\n'+this.__gi1.__fnt1.construction_where_sql_sur_id1('`T0`.`che_binaire_source`', par['T0_che_binaire_source'] );
    }
    if(par.hasOwnProperty('T0_chx_dossier_id_source') && par['T0_chx_dossier_id_source'] !==  ''){
        where0+='\r\n'+this.__gi1.__fnt1.construction_where_sql_sur_id1('`T0`.`chx_dossier_id_source`', par['T0_chx_dossier_id_source'] );
    }
    if(par.hasOwnProperty('T1_chp_nom_dossier') && par['T1_chp_nom_dossier'] !==  ''){
        where0+=` AND \`T1\`.\`chp_nom_dossier\` LIKE `+this.__gi1.__fnt1.sq2(par['T1_chp_nom_dossier'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_che_contient_version_source') && par['T0_che_contient_version_source'] !==  ''){
        where0+='\r\n'+this.__gi1.__fnt1.construction_where_sql_sur_id1('`T0`.`che_contient_version_source`', par['T0_che_contient_version_source'] );
    }
    if(par.hasOwnProperty('T0_che_autorisation_globale_source') && par['T0_che_autorisation_globale_source'] !==  ''){
        where0+='\r\n'+this.__gi1.__fnt1.construction_where_sql_sur_id1('`T0`.`che_autorisation_globale_source`', par['T0_che_autorisation_globale_source'] );
    }
    sql0+=where0;
    const order0=`
       ORDER BY  \`T0\`.\`chx_dossier_id_source\` ASC, \`T0\`.\`chp_nom_source\` ASC, \`T0\`.\`chi_id_source\` ASC`;
    sql0+=order0;
    const plage0=`
        LIMIT `+this.__gi1.__fnt1.sq1(par['quantitee'])+` OFFSET `+this.__gi1.__fnt1.sq1(par['debut'])+` `;
    sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_115 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes = await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees['__xst']=0;
            donnees_retournees['__xsi']['__xer'].push( 'erreur sql 115 '+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {__xst  : 0};
        }


        for(let numero_de_ligne in lignes){
            donnees0.push({
                'T0.chi_id_source' : lignes[numero_de_ligne][0],
                'T0.chx_dossier_id_source' : lignes[numero_de_ligne][1],
                'T0.chp_nom_source' : lignes[numero_de_ligne][2],
                'T0.cht_commentaire_source' : lignes[numero_de_ligne][3],
                'T0.cht_rev_source' : lignes[numero_de_ligne][4],
                'T0.cht_genere_source' : lignes[numero_de_ligne][5],
                'T1.chp_nom_dossier' : lignes[numero_de_ligne][6],
                'T0.che_binaire_source' : lignes[numero_de_ligne][7],
                'T0.che_contient_version_source' : lignes[numero_de_ligne][8],
                'T0.che_autorisation_globale_source' : lignes[numero_de_ligne][9],
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
    moi='sql_115';
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
export{sql_115 as sql_115};
