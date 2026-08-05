const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1166{
    /*
      =============================================================================================================
    */
    async sql( par ){
        const champs0=`
          \`T0\`.\`chi_id_televersement\` , \`T0\`.\`chp_nom_du_dossier_televersement\` , \`T0\`.\`chp_nom_fichier_sur_disque_televersement\` , \`T0\`.\`chp_nom_original_televersement\` , \`T0\`.\`cht_comm_glob_televersement\` , 
          \`T0\`.\`chp_comm_fichier_televersement\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_televersements T0        `;
        sql0+=from0;
        const where0=` WHERE ( \`T0\`.\`che_bdd_televersement\` = ` + this.__ig1.__fnt1.sq1( par['T0_che_bdd_televersement'] , 'T0_che_bdd_televersement' ) + `
         AND \`T0\`.\`chp_nom_table_televersement\` = ` + this.__ig1.__fnt1.sq1( par['T0_chp_nom_table_televersement'] , 'T0_chp_nom_table_televersement' ) + `
         AND \`T0\`.\`che_id_element_televersement\` = ` + this.__ig1.__fnt1.sq1( par['T0_che_id_element_televersement'] , 'T0_che_id_element_televersement' ) + `
         AND \`T0\`.\`chp_champ_cle_televersement\` = ` + this.__ig1.__fnt1.sq1( par['T0_chp_champ_cle_televersement'] , 'T0_chp_champ_cle_televersement' ) + `)`;
        sql0+=where0;
    const order0=`
       ORDER BY  \`T0\`.\`chi_id_televersement\` DESC`;
    sql0+=order0;
    const plage0=`
        LIMIT 500 OFFSET 0 `;
    sql0+=plage0;
        /* this.__ig1.ma_trace1('sql_1166 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1166 , e , sql0 , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0.chi_id_televersement" : col[0] ,
                    "T0.chp_nom_du_dossier_televersement" : col[1] ,
                    "T0.chp_nom_fichier_sur_disque_televersement" : col[2] ,
                    "T0.chp_nom_original_televersement" : col[3] ,
                    "T0.cht_comm_glob_televersement" : col[4] ,
                    "T0.chp_comm_fichier_televersement" : col[5]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_1166';
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
export{sql_1166 as sql_1166};