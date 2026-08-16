const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1140{
    /*
      =============================================================================================================
    */
    async sql( tup ){
        let donnees0=[];
        let __nbEnregs=0;
        let where0='';
        let sql0='';
        let champs0='';
        let from0='';
        /*  */
        champs0=`
          \`T0\`.\`chx_source_autorisation\` , \`T2\`.\`chp_nom_source\` , \`T0\`.\`chx_acces_autorisation\` , \`T1\`.\`chp_nom_acces\` , \`T0\`.\`che_pour_sous_liste_autorisation\` , 
          \`T0\`.\`chi_id_autorisation\`
        `;
        sql0='SELECT ' + champs0;
        from0=`
          FROM  tbl_autorisations T0
            LEFT JOIN tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
     
            LEFT JOIN tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
         `;
        sql0+=from0;
        where0=' WHERE 1=1 ';
        /* this.__ig1.ma_trace1( 'tup=' , tup ); */
        try{
            if(tup.hasOwnProperty( 'T2_chp_nom_source' ) && tup.T2_chp_nom_source !== ''){
                where0+=` AND \`T2\`.\`chp_nom_source\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T2_chp_nom_source , 'T2_chp_nom_source' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_chx_acces_autorisation' ) && tup.T0_chx_acces_autorisation !== ''){
                if(tup.T0_chx_acces_autorisation === 0){
                    where0+=' AND `T0`.`chx_acces_autorisation` IS NULL \r\n';
                }else{
                    where0+='\r\n' + this.__ig1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chx_acces_autorisation`' , tup.T0_chx_acces_autorisation );
                }
            }
            if(tup.hasOwnProperty( 'T0_chx_source_autorisation' ) && tup.T0_chx_source_autorisation !== ''){
                if(tup.T0_chx_source_autorisation === 0){
                    where0+=' AND `T0`.`chx_source_autorisation` IS NULL \r\n';
                }else{
                    where0+='\r\n' + this.__ig1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chx_source_autorisation`' , tup.T0_chx_source_autorisation );
                }
            }
            if(tup.hasOwnProperty( 'T1_chp_nom_acces' ) && tup.T1_chp_nom_acces !== ''){
                where0+=` AND \`T1\`.\`chp_nom_acces\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T1_chp_nom_acces , 'T1_chp_nom_acces' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_che_pour_sous_liste_autorisation' ) && tup.T0_che_pour_sous_liste_autorisation !== ''){
                where0+=` AND \`T0\`.\`che_pour_sous_liste_autorisation\` = ` + this.__ig1.__fnt1.sq1( tup.T0_che_pour_sous_liste_autorisation , 'T0_che_pour_sous_liste_autorisation' ) + `` + '\r\n';
            }
            if(tup.hasOwnProperty( 'acces_pas_dans' ) && tup.acces_pas_dans !== ''){
                where0+=` AND \`T0\`.\`chx_acces_autorisation\` NOT IN ` + tup.acces_pas_dans + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_chi_id_autorisation' ) && tup.T0_chi_id_autorisation !== ''){
                if(tup.T0_chi_id_autorisation === 0){
                    where0+=' AND `T0`.`chi_id_autorisation` IS NULL \r\n';
                }else{
                    where0+='\r\n' + this.__ig1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chi_id_autorisation`' , tup.T0_chi_id_autorisation );
                }
            }
        }catch(e){
            return({"__xst" : __xer , "__xme" : 'erreur de construction de la requête [' + this.__ig1.nl2(e) + ' ] ' });
            
        }
        sql0+=where0;
        const order0=`
           ORDER BY  \`T0\`.\`chx_acces_autorisation\` DESC, \`T2\`.\`chp_nom_source\` ASC, \`T0\`.\`chi_id_autorisation\` DESC, \`T2\`.\`chp_nom_source\` ASC`;
        sql0+=order0;
        const plage0=`
        LIMIT ` + this.__ig1.__fnt1.sq1( tup.quantitee , 'quantitee' ) + ` OFFSET ` + this.__ig1.__fnt1.sq1( tup.debut , 'debut' ) + ` `;
        sql0+=plage0;
        /* this.__ig1.ma_trace1('sql_1140 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1140 , e , sql0 , {} ));
        }
        /*  */
        for(let numero_de_ligne in lignes){
            donnees0.push( {
                    "T0_chx_source_autorisation" : lignes[numero_de_ligne][0] ,
                    "T2_chp_nom_source" : lignes[numero_de_ligne][1] ,
                    "T0_chx_acces_autorisation" : lignes[numero_de_ligne][2] ,
                    "T1_chp_nom_acces" : lignes[numero_de_ligne][3] ,
                    "T0_che_pour_sous_liste_autorisation" : lignes[numero_de_ligne][4] ,
                    "T0_chi_id_autorisation" : lignes[numero_de_ligne][5]
                } );
        }
        /* comptage */
        const sql1='SELECT COUNT(*) as __nbEnregs ' + from0 + where0;
        let statement1=await this.__db1.prepare( sql1 );
        lignes=await statement1.values();
        await statement1.finalize();
        for(let numero_de_ligne in lignes){
            __nbEnregs=lignes[numero_de_ligne][0];
        }
        /*  */
        return({
                 /*  */
                "__xst" : __xsu ,
                "__xva" : donnees0 ,
                "nombre" : __nbEnregs ,
                "sql0" : sql0 ,
                "where0" : where0
            });
    }
    /*
      =============================================================================================================
    */
    moi='sql_1140';
    __ig1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 , __db1 ){
        this.__ig1=__ig1;
        this.__db1=__db1;
    }
}
export{sql_1140 as sql_1140};