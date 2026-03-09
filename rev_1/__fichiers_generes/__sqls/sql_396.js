const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_396{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        const champs0=`
          \`T0\`.\`chi_id_travail\` , \`T0\`.\`chp_resume_travail\` , \`T0\`.\`cht_rev_travail\` , \`T0\`.\`chx_utilisateur_travail\` , \`T0\`.\`chd_dtc_travail\` , 
          \`T1\`.\`chp_nom_de_connexion_utilisateur\` , \`T0\`.\`chp_etat_travail\` , \`T0\`.\`chx_projet_travail\` , \`T1\`.\`chx_acces_utilisateur\` , \`T0\`.\`cht_log_travail\` , 
          \`T0\`.\`cht_utilisateur_travail\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_travaux T0
           LEFT JOIN tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        `;
        sql0+=from0;
        const where0=` WHERE (\`T0\`.\`chi_id_travail\` = ` + this.__gi1.__fnt1.sq1( par['T0_chi_id_travail'] ) + `
         AND \`T0\`.\`chx_utilisateur_travail\` = ` + this.__gi1.__fnt1.sq1( par['T0_chx_utilisateur_travail'] ) + `)`;
        sql0+=where0;
        /* this.__gi1.ma_trace1('sql_396 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 396 , e , sql0 , donnees_retournees , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0.chi_id_travail" : col[0] ,
                    "T0.chp_resume_travail" : col[1] ,
                    "T0.cht_rev_travail" : col[2] ,
                    "T0.chx_utilisateur_travail" : col[3] ,
                    "T0.chd_dtc_travail" : col[4] ,
                    "T1.chp_nom_de_connexion_utilisateur" : col[5] ,
                    "T0.chp_etat_travail" : col[6] ,
                    "T0.chx_projet_travail" : col[7] ,
                    "T1.chx_acces_utilisateur" : col[8] ,
                    "T0.cht_log_travail" : col[9] ,
                    "T0.cht_utilisateur_travail" : col[10]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_396';
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
export{sql_396 as sql_396};