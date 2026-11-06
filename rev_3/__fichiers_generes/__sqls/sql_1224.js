const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1224{
    /*
      ================================select=============================================================================
    */
    async sql( tup ){
        const champs0=`
          \`T0\`.\`chi_id_grandeur\` , \`T0\`.\`chx_parametre_grandeur\` , \`T0\`.\`chp_cle_grandeur\` , \`T0\`.\`cht_rev_grandeur\` , \`T0\`.\`che_actif_grandeur\` , 
          \`T0\`.\`chc_couleur_texte_grandeur\` , \`T0\`.\`chc_couleur_fond_grandeur\` , \`T1\`.\`cht_rev_parametre\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_grandeurs T0
           LEFT JOIN tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
        `;
        sql0+=from0;
        /* ATTENTION : pas de condition dans cette liste */
        const where0=' WHERE 1 ';
        sql0+=where0;
    const order0=`
       ORDER BY  \`T0\`.\`chx_parametre_grandeur\` ASC, \`T0\`.\`chi_id_grandeur\` ASC`;
    sql0+=order0;
    const plage0='';
    sql0+=plage0;
        /* this.__ig1.ma_trace1('sql_1224 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1224 , e , sql0 , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0_chi_id_grandeur" : col[0] ,
                    "T0_chx_parametre_grandeur" : col[1] ,
                    "T0_chp_cle_grandeur" : col[2] ,
                    "T0_cht_rev_grandeur" : col[3] ,
                    "T0_che_actif_grandeur" : col[4] ,
                    "T0_chc_couleur_texte_grandeur" : col[5] ,
                    "T0_chc_couleur_fond_grandeur" : col[6] ,
                    "T1_cht_rev_parametre" : col[7]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_1224';
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
export{sql_1224 as sql_1224};