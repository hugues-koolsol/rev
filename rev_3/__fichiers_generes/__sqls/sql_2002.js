const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_2002{
    /*
      =============================================================================================================
    */
    async sql( par ){
        const champs0=`
          \`T0\`.\`chx_utilisateur_acteur\` , \`T0\`.\`chp_nom_acteur\` , \`T0\`.\`chp_prenom_acteur\` , \`T1\`.\`chi_id_utilisateur\` , \`T1\`.\`chp_nom_de_connexion_utilisateur\` , 
          \`T1\`.\`chx_acces_utilisateur\` , \`T1\`.\`che_actif_utilisateur\` , \`T2\`.\`chp_nom_acces\` , \`T2\`.\`chx_groupe_acces\` , \`T2\`.\`chx_metier_acces\` , 
          \`T3\`.\`chp_nom_groupe\` , \`T4\`.\`chp_nom_metier\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  b2.tbl_acteurs T0
           LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur

           LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur

           LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces

           LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces
        `;
        sql0+=from0;
        const where0=` WHERE \`T0\`.\`chx_utilisateur_acteur\` = ` + this.__ig1.__fnt1.sq1( par['T0_chx_utilisateur_acteur'] , 'T0_chx_utilisateur_acteur' ) + ``;
        sql0+=where0;
        /* this.__ig1.ma_trace1('sql_2002 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 2002 , e , sql0 , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0.chx_utilisateur_acteur" : col[0] ,
                    "T0.chp_nom_acteur" : col[1] ,
                    "T0.chp_prenom_acteur" : col[2] ,
                    "T1.chi_id_utilisateur" : col[3] ,
                    "T1.chp_nom_de_connexion_utilisateur" : col[4] ,
                    "T1.chx_acces_utilisateur" : col[5] ,
                    "T1.che_actif_utilisateur" : col[6] ,
                    "T2.chp_nom_acces" : col[7] ,
                    "T2.chx_groupe_acces" : col[8] ,
                    "T2.chx_metier_acces" : col[9] ,
                    "T3.chp_nom_groupe" : col[10] ,
                    "T4.chp_nom_metier" : col[11]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_2002';
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
export{sql_2002 as sql_2002};