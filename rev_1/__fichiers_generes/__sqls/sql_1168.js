const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1168{
    /*
      =============================================================================================================
    */
    async sql( tup ){
        const champs0=`
          \`T0\`.\`chi_id_televersement\` , \`T0\`.\`che_bdd_televersement\` , \`T0\`.\`chp_nom_table_televersement\` , \`T0\`.\`che_id_element_televersement\` , \`T0\`.\`chx_utilisateur_televersement\` , 
          \`T0\`.\`chp_champ_cle_televersement\` , \`T0\`.\`chp_nom_original_televersement\` , \`T0\`.\`che_poids_televersement\` , \`T0\`.\`chp_nom_fichier_sur_disque_televersement\` , \`T0\`.\`chp_nom_du_dossier_televersement\` , 
          \`T0\`.\`cht_comm_glob_televersement\` , \`T0\`.\`chp_comm_fichier_televersement\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_televersements T0        `;
        sql0+=from0;
        const where0=` WHERE \`T0\`.\`chi_id_televersement\` = ` + this.__ig1.__fnt1.sq1( tup.T0_chi_id_televersement , 'T0_chi_id_televersement' ) + ``;
        sql0+=where0;
        /* this.__ig1.ma_trace1('sql_1168 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1168 , e , sql0 , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0_chi_id_televersement" : col[0] ,
                    "T0_che_bdd_televersement" : col[1] ,
                    "T0_chp_nom_table_televersement" : col[2] ,
                    "T0_che_id_element_televersement" : col[3] ,
                    "T0_chx_utilisateur_televersement" : col[4] ,
                    "T0_chp_champ_cle_televersement" : col[5] ,
                    "T0_chp_nom_original_televersement" : col[6] ,
                    "T0_che_poids_televersement" : col[7] ,
                    "T0_chp_nom_fichier_sur_disque_televersement" : col[8] ,
                    "T0_chp_nom_du_dossier_televersement" : col[9] ,
                    "T0_cht_comm_glob_televersement" : col[10] ,
                    "T0_chp_comm_fichier_televersement" : col[11]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_1168';
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
export{sql_1168 as sql_1168};