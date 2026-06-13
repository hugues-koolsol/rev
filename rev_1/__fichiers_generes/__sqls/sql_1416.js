const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1416{
    /*
      =============================================================================================================
    */
    async sql( par ){
        const champs0=`
          \`T0\`.\`chi_id_source\` , \`T0\`.\`chx_dossier_id_source\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_sources T0        `;
        sql0+=from0;
        const where0=` WHERE (\`T0\`.\`chp_nom_source\` = ` + this.__ig1.__fnt1.sq1( par['T0_chp_nom_source'] , 'T0_chp_nom_source' ) + `
         AND \`T0\`.\`chx_dossier_id_source\` IS NOT NULL)`;
        sql0+=where0;
        /* this.__ig1.ma_trace1('sql_1416 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1416 , e , sql0 , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0.chi_id_source" : col[0] ,
                    "T0.chx_dossier_id_source" : col[1]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_1416';
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
export{sql_1416 as sql_1416};