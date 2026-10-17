const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1429{
    /*
      ================================select=============================================================================
    */
    async sql( tup ){
        const champs0=`
          \`T0\`.\`chi_id_source\` , \`T0\`.\`chp_nom_source\` , \`T0\`.\`cht_rev_source\` , \`T0\`.\`cht_genere_source\` , \`T0\`.\`che_binaire_source\` , 
          \`T0\`.\`chx_dossier_id_source\` , \`T0\`.\`cht_commentaire_source\` , \`T0\`.\`che_autorisation_globale_source\` , \`T0\`.\`cht_condition_rev_source\` , \`T0\`.\`cht_condition_js_source\` , 
          \`T0\`.\`cht_notification_ko_source\` , \`T0\`.\`che_pour_util_source\` , \`T0\`.\`che_est_fragment_source\` , \`T0\`.\`che_est_verrouille_source\` , \`T0\`.\`cht_import_module_rev_source\` , 
          \`T0\`.\`cht_variables_module_rev_source\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_sources T0        `;
        sql0+=from0;
        const where0=` WHERE \`T0\`.\`chp_nom_source\` IN (` + tup.T0_chp_nom_source + `)`;
        sql0+=where0;
        /* this.__ig1.ma_trace1('sql_1429 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 0 , e , sql0 , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0_chi_id_source" : col[0] ,
                    "T0_chp_nom_source" : col[1] ,
                    "T0_cht_rev_source" : col[2] ,
                    "T0_cht_genere_source" : col[3] ,
                    "T0_che_binaire_source" : col[4] ,
                    "T0_chx_dossier_id_source" : col[5] ,
                    "T0_cht_commentaire_source" : col[6] ,
                    "T0_che_autorisation_globale_source" : col[7] ,
                    "T0_cht_condition_rev_source" : col[8] ,
                    "T0_cht_condition_js_source" : col[9] ,
                    "T0_cht_notification_ko_source" : col[10] ,
                    "T0_che_pour_util_source" : col[11] ,
                    "T0_che_est_fragment_source" : col[12] ,
                    "T0_che_est_verrouille_source" : col[13] ,
                    "T0_cht_import_module_rev_source" : col[14] ,
                    "T0_cht_variables_module_rev_source" : col[15]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_1429';
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
export{sql_1429 as sql_1429};