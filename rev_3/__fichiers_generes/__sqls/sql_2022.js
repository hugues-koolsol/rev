const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_2022{
    /*
      =============================================================================================================
    */
    async sql( par ){
        const champs0=`
          \`T0\`.\`chi_id_tache\` , \`T0\`.\`chx_utilisateur_tache\` , \`T0\`.\`chp_texte_tache\` , \`T0\`.\`che_priorite_tache\` , \`T1\`.\`chp_nom_de_connexion_utilisateur\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_taches T0
           LEFT JOIN tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        `;
        sql0+=from0;
        const where0=` WHERE \`T0\`.\`chi_id_tache\` = ` + this.__ig1.__fnt1.sq1( par['T0_chi_id_tache'] , 'T0_chi_id_tache' ) + ``;
        sql0+=where0;
        /* this.__ig1.ma_trace1('sql_2022 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 2022 , e , sql0 , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0.chi_id_tache" : col[0] ,
                    "T0.chx_utilisateur_tache" : col[1] ,
                    "T0.chp_texte_tache" : col[2] ,
                    "T0.che_priorite_tache" : col[3] ,
                    "T1.chp_nom_de_connexion_utilisateur" : col[4]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_2022';
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
export{sql_2022 as sql_2022};