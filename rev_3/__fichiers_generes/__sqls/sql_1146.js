const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1146{
    /*
      =============================================================================================================
    */
    async sql( par ){
        const champs0=`
          \`T0\`.\`chi_id_menu\` , \`T0\`.\`chp_titre_menu\` , \`T0\`.\`chx_autorisation_menu\` , \`T0\`.\`chp_methode_menu\` , \`T0\`.\`cht_libelle_menu\` , 
          \`T0\`.\`cht_initialisation_menu\` , \`T0\`.\`cht_condition_menu\` , \`T1\`.\`chx_acces_autorisation\` , \`T1\`.\`chx_source_autorisation\` , \`T2\`.\`chp_nom_acces\` , 
          \`T3\`.\`chp_nom_source\` , \`T3\`.\`che_binaire_source\` , \`T0\`.\`cht_condition_js_menu\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_menus T0
           LEFT JOIN tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu

           LEFT JOIN tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

           LEFT JOIN tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        `;
        sql0+=from0;
        const where0=` WHERE \`T0\`.\`chi_id_menu\` = ` + this.__ig1.__fnt1.sq1( par['T0_chi_id_menu'] , 'T0_chi_id_menu' ) + ``;
        sql0+=where0;
        /* this.__ig1.ma_trace1('sql_1146 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1146 , e , sql0 , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0.chi_id_menu" : col[0] ,
                    "T0.chp_titre_menu" : col[1] ,
                    "T0.chx_autorisation_menu" : col[2] ,
                    "T0.chp_methode_menu" : col[3] ,
                    "T0.cht_libelle_menu" : col[4] ,
                    "T0.cht_initialisation_menu" : col[5] ,
                    "T0.cht_condition_menu" : col[6] ,
                    "T1.chx_acces_autorisation" : col[7] ,
                    "T1.chx_source_autorisation" : col[8] ,
                    "T2.chp_nom_acces" : col[9] ,
                    "T3.chp_nom_source" : col[10] ,
                    "T3.che_binaire_source" : col[11] ,
                    "T0.cht_condition_js_menu" : col[12]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_1146';
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
export{sql_1146 as sql_1146};