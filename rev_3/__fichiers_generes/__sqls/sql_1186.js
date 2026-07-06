const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1186{
    /*
      =============================================================================================================
    */
    async sql( par ){
        const champs0=`
          \`T0\`.\`chi_id_grandeur\` , \`T0\`.\`chx_parametre_grandeur\` , \`T0\`.\`chp_cle_grandeur\` , \`T0\`.\`cht_rev_grandeur\` , \`T0\`.\`che_actif_grandeur\` , 
          \`T1\`.\`chp_cle_parametre\` , \`T1\`.\`chp_nom_parametre\` , \`T1\`.\`cht_rev_parametre\` , \`T1\`.\`cht_ordre_parametre\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_grandeurs T0
           LEFT JOIN tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
        `;
        sql0+=from0;
        const where0=` WHERE \`T0\`.\`chx_parametre_grandeur\` = ` + this.__ig1.__fnt1.sq1( par['T0_chx_parametre_grandeur'] , 'T0_chx_parametre_grandeur' ) + ``;
        sql0+=where0;
        /* this.__ig1.ma_trace1('sql_1186 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1186 , e , sql0 , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0.chi_id_grandeur" : col[0] ,
                    "T0.chx_parametre_grandeur" : col[1] ,
                    "T0.chp_cle_grandeur" : col[2] ,
                    "T0.cht_rev_grandeur" : col[3] ,
                    "T0.che_actif_grandeur" : col[4] ,
                    "T1.chp_cle_parametre" : col[5] ,
                    "T1.chp_nom_parametre" : col[6] ,
                    "T1.cht_rev_parametre" : col[7] ,
                    "T1.cht_ordre_parametre" : col[8]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_1186';
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
export{sql_1186 as sql_1186};