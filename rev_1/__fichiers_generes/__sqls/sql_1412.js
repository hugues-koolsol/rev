const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1412{
    /*
      =============================================================================================================
    */
    async sql( par ){
        const champs0=`
          \`T0\`.\`chp_parent_rev\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_revs T0        `;
        sql0+=from0;
        const where0=` WHERE (\`T0\`.\`chp_provenance_rev\` = 'source'
         AND \`T0\`.\`chp_valeur_rev\` = 'p'
         AND \`T0\`.\`chp_type_rev\` = 'f'
         AND \`T0\`.\`chx_source_rev\` IN ` + par['T0_chx_source_rev'] + `
         AND \`T0\`.\`chp_id_rev\` IN ` + par['T0_chp_id_rev'] + `)`;
        sql0+=where0;
        /* this.__ig1.ma_trace1('sql_1412 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1412 , e , sql0 , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0.chp_parent_rev" : col[0]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_1412';
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
export{sql_1412 as sql_1412};