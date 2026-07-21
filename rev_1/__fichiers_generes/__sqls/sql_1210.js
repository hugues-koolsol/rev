const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1210{
    /*
      =============================================================================================================
    */
    async sql( par ){
        let donnees0=[];
        let __nbEnregs=0;
        let where0='';
        let sql0='';
        let champs0='';
        let from0='';
        /*  */
        champs0=`
          \`T0\`.\`chi_id_grandeur\` , \`T0\`.\`chp_cle_grandeur\` , \`T0\`.\`cht_rev_grandeur\`
        `;
        sql0='SELECT ' + champs0;
        from0=`
          FROM  tbl_grandeurs T0
            LEFT JOIN tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
         `;
        sql0+=from0;
        where0=' WHERE 1=1 ';
        where0+=` AND \`T0\`.\`chx_parametre_grandeur\` = 2`;
        if(par.hasOwnProperty( 'T0_chp_cle_grandeur' ) && par['T0_chp_cle_grandeur'] !== ''){
            where0+=` AND \`T0\`.\`chp_cle_grandeur\` LIKE ` + this.__ig1.__fnt1.sq2( par['T0_chp_cle_grandeur'] , 'T0_chp_cle_grandeur' ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T0_chi_id_grandeur' ) && par['T0_chi_id_grandeur'] !== ''){
            if(par['T0_chi_id_grandeur'] === 0){
                where0+=' AND `T0`.`chi_id_grandeur` IS NULL \r\n';
            }else{
                where0+='\r\n' + this.__ig1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chi_id_grandeur`' , par['T0_chi_id_grandeur'] );
            }
        }
        if(par.hasOwnProperty( 'T0_cht_rev_grandeur' ) && par['T0_cht_rev_grandeur'] !== ''){
            where0+=` AND \`T0\`.\`cht_rev_grandeur\` LIKE ` + this.__ig1.__fnt1.sq2( par['T0_cht_rev_grandeur'] , 'T0_cht_rev_grandeur' ) + '\r\n';
        }
        where0+=` AND \`T0\`.\`che_actif_grandeur\` = 1`;
        sql0+=where0;
        const order0=`
           ORDER BY  \`T0\`.\`chi_id_grandeur\` DESC`;
        sql0+=order0;
        const plage0=`
        LIMIT ` + this.__ig1.__fnt1.sq1( par['quantitee'] , 'quantitee' ) + ` OFFSET ` + this.__ig1.__fnt1.sq1( par['debut'] , 'debut' ) + ` `;
        sql0+=plage0;
        /* this.__ig1.ma_trace1('sql_1210 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1210 , e , sql0 , {} ));
        }
        /*  */
        for(let numero_de_ligne in lignes){
            donnees0.push( {
                    "T0.chi_id_grandeur" : lignes[numero_de_ligne][0] ,
                    "T0.chp_cle_grandeur" : lignes[numero_de_ligne][1] ,
                    "T0.cht_rev_grandeur" : lignes[numero_de_ligne][2]
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
    moi='sql_1210';
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
export{sql_1210 as sql_1210};