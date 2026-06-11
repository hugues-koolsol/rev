const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1141{
    /*
      =============================================================================================================
    */
    async sql( par ){
        const champs0=`
          \`T0\`.\`chi_id_autorisation\` , \`T0\`.\`chx_acces_autorisation\` , \`T0\`.\`chx_source_autorisation\` , \`T0\`.\`che_pour_sous_liste_autorisation\` , \`T1\`.\`chp_nom_acces\` , 
          \`T2\`.\`chp_nom_source\` , \`T2\`.\`che_binaire_source\` , \`T2\`.\`chx_dossier_id_source\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_autorisations T0
           LEFT JOIN tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

           LEFT JOIN tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        `;
        sql0+=from0;
        const where0=` WHERE \`T0\`.\`chi_id_autorisation\` = ` + this.__ig1.__fnt1.sq1( par['T0_chi_id_autorisation'] , 'T0_chi_id_autorisation' ) + ``;
        sql0+=where0;
        /* this.__ig1.ma_trace1('sql_1141 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1141 , e , sql0 , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0.chi_id_autorisation" : col[0] ,
                    "T0.chx_acces_autorisation" : col[1] ,
                    "T0.chx_source_autorisation" : col[2] ,
                    "T0.che_pour_sous_liste_autorisation" : col[3] ,
                    "T1.chp_nom_acces" : col[4] ,
                    "T2.chp_nom_source" : col[5] ,
                    "T2.che_binaire_source" : col[6] ,
                    "T2.chx_dossier_id_source" : col[7]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_1141';
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
export{sql_1141 as sql_1141};