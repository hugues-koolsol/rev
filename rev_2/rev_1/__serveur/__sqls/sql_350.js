class sql_350{
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
      \`T0\`.\`chi_id_requete\` , \`T0\`.\`che_est_souche_requete\` , \`T0\`.\`chp_type_requete\` , \`T0\`.\`cht_rev_requete\` , \`T0\`.\`cht_sql_requete\` , 
      \`T0\`.\`cht_php_requete\` , \`T0\`.\`cht_commentaire_requete\` , \`T0\`.\`cht_matrice_requete\` , \`T0\`.\`chp_table_reference_requete\`
    `;
    sql0='SELECT '+champs0;
    from0=`
      FROM  `+((par['b1']?'`'+par['b1']+'`.':''))+`tbl_requetes T0    `;
    sql0+=from0;
    where0=' WHERE 1=1 ';
    if(par.hasOwnProperty('T0_chi_id_requete') && par['T0_chi_id_requete'] !==  ''){
        where0+='\r\n'+this.__gi1.__fnt1.construction_where_sql_sur_id1('`T0`.`chi_id_requete`', par['T0_chi_id_requete'] );
    }
    if(par.hasOwnProperty('T0_che_est_souche_requete') && par['T0_che_est_souche_requete'] !==  ''){
        where0+='\r\n'+this.__gi1.__fnt1.construction_where_sql_sur_id1('`T0`.`che_est_souche_requete`', par['T0_che_est_souche_requete'] );
    }
    if(par.hasOwnProperty('T0_chp_type_requete') && par['T0_chp_type_requete'] !==  ''){
        where0+=` AND \`T0\`.\`chp_type_requete\` LIKE `+this.__gi1.__fnt1.sq2(par['T0_chp_type_requete'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_cht_rev_requete') && par['T0_cht_rev_requete'] !==  ''){
        where0+=` AND \`T0\`.\`cht_rev_requete\` LIKE `+this.__gi1.__fnt1.sq2(par['T0_cht_rev_requete'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_cht_commentaire_requete') && par['T0_cht_commentaire_requete'] !==  ''){
        where0+=` AND \`T0\`.\`cht_commentaire_requete\` LIKE `+this.__gi1.__fnt1.sq2(par['T0_cht_commentaire_requete'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_chi_id_requete2') && par['T0_chi_id_requete2'] !==  ''){
        where0+=` AND \`T0\`.\`chi_id_requete\` <= `+this.__gi1.__fnt1.sq1(par['T0_chi_id_requete2'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_chp_table_reference_requete') && par['T0_chp_table_reference_requete'] !==  ''){
        where0+=` AND \`T0\`.\`chp_table_reference_requete\` LIKE `+this.__gi1.__fnt1.sq2(par['T0_chp_table_reference_requete'])+``+'\r\n';
    }
    sql0+=where0;
    const order0=`
       ORDER BY  \`T0\`.\`chi_id_requete\` DESC`;
    sql0+=order0;
    const plage0=`
        LIMIT `+this.__gi1.__fnt1.sq1(par['quantitee'])+` OFFSET `+this.__gi1.__fnt1.sq1(par['debut'])+` `;
    sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_350 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes = await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees['__xst']=0;
            donnees_retournees['__xsi']['__xer'].push( 'erreur sql 350 '+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {__xst  : 0};
        }


        for(let numero_de_ligne in lignes){
            donnees0.push({
                'T0.chi_id_requete' : lignes[numero_de_ligne][0],
                'T0.che_est_souche_requete' : lignes[numero_de_ligne][1],
                'T0.chp_type_requete' : lignes[numero_de_ligne][2],
                'T0.cht_rev_requete' : lignes[numero_de_ligne][3],
                'T0.cht_sql_requete' : lignes[numero_de_ligne][4],
                'T0.cht_php_requete' : lignes[numero_de_ligne][5],
                'T0.cht_commentaire_requete' : lignes[numero_de_ligne][6],
                'T0.cht_matrice_requete' : lignes[numero_de_ligne][7],
                'T0.chp_table_reference_requete' : lignes[numero_de_ligne][8],
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
    moi='sql_350';
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
export{sql_350 as sql_350};
