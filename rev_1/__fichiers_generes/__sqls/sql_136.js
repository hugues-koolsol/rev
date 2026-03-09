const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_136{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        const champs0=`
          \`T0\`.\`chi_id_acces\` , \`T0\`.\`chp_nom_acces\` , \`T0\`.\`chx_groupe_acces\` , \`T0\`.\`chx_metier_acces\` , \`T0\`.\`cht_parametres_acces\` , 
          \`T1\`.\`chp_nom_groupe\` , \`T2\`.\`chp_nom_metier\` , \`T0\`.\`che_actif_acces\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_acces T0
           LEFT JOIN tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces

           LEFT JOIN tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
        `;
        sql0+=from0;
        const where0=` WHERE \`T0\`.\`chi_id_acces\` = ` + this.__gi1.__fnt1.sq1( par['T0_chi_id_acces'] ) + ``;
        sql0+=where0;
        /* this.__gi1.ma_trace1('sql_136 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 136 , e , sql0 , donnees_retournees , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0.chi_id_acces" : col[0] ,
                    "T0.chp_nom_acces" : col[1] ,
                    "T0.chx_groupe_acces" : col[2] ,
                    "T0.chx_metier_acces" : col[3] ,
                    "T0.cht_parametres_acces" : col[4] ,
                    "T1.chp_nom_groupe" : col[5] ,
                    "T2.chp_nom_metier" : col[6] ,
                    "T0.che_actif_acces" : col[7]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_136';
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
export{sql_136 as sql_136};