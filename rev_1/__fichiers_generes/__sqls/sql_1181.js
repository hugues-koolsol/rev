const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1181{
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
          \`T0\`.\`chi_id_parametre\` , \`T0\`.\`chp_cle_parametre\` , \`T0\`.\`chp_nom_parametre\` , \`T0\`.\`che_pour_admin_parametre\` , \`T0\`.\`cht_commentaire_parametre\` , 
          \`T0\`.\`cht_rev_parametre\` , \`T0\`.\`cht_ordre_parametre\`
        `;
        sql0='SELECT ' + champs0;
        from0=`
          FROM  tbl_parametres T0    `;
        sql0+=from0;
        where0=' WHERE 1=1 ';
        /* this.__ig1.ma_trace1( 'tup=' , tup ); */
        try{
            if(tup.hasOwnProperty( 'T0_chp_cle_parametre' ) && tup.T0_chp_cle_parametre !== ''){
                where0+=` AND \`T0\`.\`chp_cle_parametre\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_chp_cle_parametre , 'T0_chp_cle_parametre' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_chi_id_parametre' ) && tup.T0_chi_id_parametre !== ''){
                if(tup.T0_chi_id_parametre === 0){
                    where0+=' AND `T0`.`chi_id_parametre` IS NULL \r\n';
                }else{
                    where0+='\r\n' + this.__ig1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chi_id_parametre`' , tup.T0_chi_id_parametre );
                }
            }
            if(tup.hasOwnProperty( 'T0_chp_nom_parametre' ) && tup.T0_chp_nom_parametre !== ''){
                where0+=` AND \`T0\`.\`chp_nom_parametre\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_chp_nom_parametre , 'T0_chp_nom_parametre' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_che_pour_admin_parametre' ) && tup.T0_che_pour_admin_parametre !== ''){
                where0+=` AND \`T0\`.\`che_pour_admin_parametre\` = ` + this.__ig1.__fnt1.sq1( tup.T0_che_pour_admin_parametre , 'T0_che_pour_admin_parametre' ) + `` + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_cht_commentaire_parametre' ) && tup.T0_cht_commentaire_parametre !== ''){
                where0+=` AND \`T0\`.\`cht_commentaire_parametre\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_cht_commentaire_parametre , 'T0_cht_commentaire_parametre' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_cht_rev_parametre' ) && tup.T0_cht_rev_parametre !== ''){
                where0+=` AND \`T0\`.\`cht_rev_parametre\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_cht_rev_parametre , 'T0_cht_rev_parametre' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_cht_ordre_parametre' ) && tup.T0_cht_ordre_parametre !== ''){
                where0+=` AND \`T0\`.\`cht_ordre_parametre\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_cht_ordre_parametre , 'T0_cht_ordre_parametre' ) + '\r\n';
            }
        }catch(e){
            return({"__xst" : __xer , "__xme" : 'erreur de construction de la requête [' + this.__ig1.nl2(e) + ' ] ' });
            
        }
        sql0+=where0;
        const order0=`
           ORDER BY  \`T0\`.\`chi_id_parametre\` DESC`;
        sql0+=order0;
        const plage0=`
        LIMIT ` + this.__ig1.__fnt1.sq1( tup.quantitee , 'quantitee' ) + ` OFFSET ` + this.__ig1.__fnt1.sq1( tup.debut , 'debut' ) + ` `;
        sql0+=plage0;
        /* this.__ig1.ma_trace1('sql_1181 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1181 , e , sql0 , {} ));
        }
        /*  */
        for(let numero_de_ligne in lignes){
            donnees0.push( {
                    "T0_chi_id_parametre" : lignes[numero_de_ligne][0] ,
                    "T0_chp_cle_parametre" : lignes[numero_de_ligne][1] ,
                    "T0_chp_nom_parametre" : lignes[numero_de_ligne][2] ,
                    "T0_che_pour_admin_parametre" : lignes[numero_de_ligne][3] ,
                    "T0_cht_commentaire_parametre" : (lignes[numero_de_ligne][4]===null?null:lignes[numero_de_ligne][4].substr(0,200)) ,
                    "T0_cht_rev_parametre" : (lignes[numero_de_ligne][5]===null?null:lignes[numero_de_ligne][5].substr(0,200)) ,
                    "T0_cht_ordre_parametre" : (lignes[numero_de_ligne][6]===null?null:lignes[numero_de_ligne][6].substr(0,200))
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
    moi='sql_1181';
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
export{sql_1181 as sql_1181};