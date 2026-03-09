const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_326{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        const champs0=`
          \`T1\`.\`chx_dossier_id_source\` , \`T1\`.\`chp_nom_source\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_autorisations T0
           LEFT JOIN tbl_sources T1 ON T1.chi_id_source = T0.chx_source_autorisation
        `;
        sql0+=from0;
        const where0=` WHERE \`T0\`.\`chi_id_autorisation\` = ` + this.__gi1.__fnt1.sq1( par['T0_chi_id_autorisation'] ) + ``;
        sql0+=where0;
        /* this.__gi1.ma_trace1('sql_326 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 326 , e , sql0 , donnees_retournees , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T1.chx_dossier_id_source" : col[0] ,
                    "T1.chp_nom_source" : col[1]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_326';
    __gi1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor( __gi1 , __db1 ){
        this.__gi1=__gi1;
        this.__db1=__db1;
    }
}
export{sql_326 as sql_326};