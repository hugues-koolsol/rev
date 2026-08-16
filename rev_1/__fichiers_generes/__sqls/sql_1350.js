const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1350{
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
          \`T0\`.\`chi_id_requete\` , \`T0\`.\`che_est_souche_requete\` , \`T0\`.\`chp_type_requete\` , \`T0\`.\`chp_table_reference_requete\` , \`T0\`.\`cht_sql_requete\` , 
          \`T0\`.\`cht_commentaire_requete\` , \`T0\`.\`che_base_reference_requete\`
        `;
        sql0='SELECT ' + champs0;
        from0=`
          FROM  tbl_requetes T0    `;
        sql0+=from0;
        where0=' WHERE 1=1 ';
        /* this.__ig1.ma_trace1( 'tup=' , tup ); */
        try{
            if(tup.hasOwnProperty( 'T0_chi_id_requete' ) && tup.T0_chi_id_requete !== ''){
                if(tup.T0_chi_id_requete === 0){
                    where0+=' AND `T0`.`chi_id_requete` IS NULL \r\n';
                }else{
                    where0+='\r\n' + this.__ig1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chi_id_requete`' , tup.T0_chi_id_requete );
                }
            }
            if(tup.hasOwnProperty( 'T0_che_est_souche_requete' ) && tup.T0_che_est_souche_requete !== ''){
                where0+=` AND \`T0\`.\`che_est_souche_requete\` = ` + this.__ig1.__fnt1.sq1( tup.T0_che_est_souche_requete , 'T0_che_est_souche_requete' ) + `` + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_chp_type_requete' ) && tup.T0_chp_type_requete !== ''){
                where0+=` AND \`T0\`.\`chp_type_requete\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_chp_type_requete , 'T0_chp_type_requete' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_cht_rev_requete' ) && tup.T0_cht_rev_requete !== ''){
                where0+=` AND \`T0\`.\`cht_rev_requete\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_cht_rev_requete , 'T0_cht_rev_requete' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_cht_commentaire_requete' ) && tup.T0_cht_commentaire_requete !== ''){
                where0+=` AND \`T0\`.\`cht_commentaire_requete\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_cht_commentaire_requete , 'T0_cht_commentaire_requete' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_chi_id_requete2' ) && tup.T0_chi_id_requete2 !== ''){
                where0+=` AND \`T0\`.\`chi_id_requete\` <= ` + this.__ig1.__fnt1.sq1( tup.T0_chi_id_requete2 , 'T0_chi_id_requete2' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_chp_table_reference_requete' ) && tup.T0_chp_table_reference_requete !== ''){
                where0+=` AND \`T0\`.\`chp_table_reference_requete\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_chp_table_reference_requete , 'T0_chp_table_reference_requete' ) + '\r\n';
            }
        }catch(e){
            return({"__xst" : __xer , "__xme" : 'erreur de construction de la requête [' + this.__ig1.nl2(e) + ' ] ' });
            
        }
        sql0+=where0;
        const order0=`
           ORDER BY  \`T0\`.\`chi_id_requete\` DESC`;
        sql0+=order0;
        const plage0=`
        LIMIT ` + this.__ig1.__fnt1.sq1( tup.quantitee , 'quantitee' ) + ` OFFSET ` + this.__ig1.__fnt1.sq1( tup.debut , 'debut' ) + ` `;
        sql0+=plage0;
        /* this.__ig1.ma_trace1('sql_1350 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1350 , e , sql0 , {} ));
        }
        /*  */
        for(let numero_de_ligne in lignes){
            donnees0.push( {
                    "T0_chi_id_requete" : lignes[numero_de_ligne][0] ,
                    "T0_che_est_souche_requete" : lignes[numero_de_ligne][1] ,
                    "T0_chp_type_requete" : lignes[numero_de_ligne][2] ,
                    "T0_chp_table_reference_requete" : lignes[numero_de_ligne][3] ,
                    "T0_cht_sql_requete" : (lignes[numero_de_ligne][4]===null?null:lignes[numero_de_ligne][4].substr(0,5000)) ,
                    "T0_cht_commentaire_requete" : (lignes[numero_de_ligne][5]===null?null:lignes[numero_de_ligne][5].substr(0,200)) ,
                    "T0_che_base_reference_requete" : lignes[numero_de_ligne][6]
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
    moi='sql_1350';
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
export{sql_1350 as sql_1350};