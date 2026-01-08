class sql_374{
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
      \`T0\`.\`chi_id_projet\` , \`T0\`.\`chp_nom_projet\` , \`T0\`.\`cht_commentaire_projet\`
    `;
    sql0='SELECT '+champs0;
    from0=`
      FROM tbl_projets T0    `;
    sql0+=from0;
    where0=' WHERE 1=1 ';
    if(par.hasOwnProperty('T0_chi_id_projet') && par['T0_chi_id_projet'] !==  ''){
        where0+='\r\n'+this.__gi1.__fnt1.construction_where_sql_sur_id1('`T0`.`chi_id_projet`', par['T0_chi_id_projet'] );
    }
    if(par.hasOwnProperty('T0_chp_nom_projet') && par['T0_chp_nom_projet'] !==  ''){
        where0+=` AND \`T0\`.\`chp_nom_projet\` LIKE `+this.__gi1.__fnt1.sq2(par['T0_chp_nom_projet'])+``+'\r\n';
    }
    if(par.hasOwnProperty('T0_cht_commentaire_projet') && par['T0_cht_commentaire_projet'] !==  ''){
        where0+=` AND \`T0\`.\`cht_commentaire_projet\` LIKE `+this.__gi1.__fnt1.sq2(par['T0_cht_commentaire_projet'])+``+'\r\n';
    }
    sql0+=where0;
    const order0=`
       ORDER BY  \`T0\`.\`chi_id_projet\` ASC`;
    sql0+=order0;
    const plage0=`
        LIMIT `+this.__gi1.__fnt1.sq1(par['quantitee'])+` OFFSET `+this.__gi1.__fnt1.sq1(par['debut'])+` `;
    sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_374 sql0=',sql0); */
        let lignes=[];
        try{
            const statement=this.__db1.prepare( sql0 );
            lignes = statement.values();
            statement.finalize();
        }catch(e){
            donnees_retournees['__xst']=0;
            donnees_retournees['__xsi']['__xer'].push( 'erreur sql 374 '+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {__xst  : 0};
        }

        /* this.__gi1.ma_trace1(lignes); */


        for(let numero_de_ligne in lignes){
            donnees0.push({
                'T0.chi_id_projet' : lignes[numero_de_ligne][0],
                'T0.chp_nom_projet' : lignes[numero_de_ligne][1],
                'T0.cht_commentaire_projet' : lignes[numero_de_ligne][2],
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
    moi='sql_374';
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
export{sql_374 as sql_374};
