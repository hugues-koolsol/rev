const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_313{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        const champs0=`
          \`T0\`.\`chi_id_source\` , \`T0\`.\`chp_nom_source\` , \`T0\`.\`cht_commentaire_source\` , \`T0\`.\`cht_rev_source\` , \`T0\`.\`cht_genere_source\` , 
          \`T0\`.\`che_binaire_source\` , \`T0\`.\`chx_dossier_id_source\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_sources T0        `;
        sql0+=from0;
        const where0=` WHERE ((\`T0\`.\`chi_id_source\` < ` + this.__gi1.__fnt1.sq1( par['T0_chi_id_source'] ) + `
         AND \`T0\`.\`chp_nom_source\` NOT LIKE ` + this.__gi1.__fnt1.sq2( par['T0_chp_nom_source'] ) + `)
         OR \`T0\`.\`chi_id_source\` IN (` + this.__gi1.__fnt1.sq0( par['T0_chi_id_source2'] ) + `))`;
        sql0+=where0;
        /* this.__gi1.ma_trace1('sql_313 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 313 , e , sql0 , donnees_retournees , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0.chi_id_source" : col[0] ,
                    "T0.chp_nom_source" : col[1] ,
                    "T0.cht_commentaire_source" : col[2] ,
                    "T0.cht_rev_source" : col[3] ,
                    "T0.cht_genere_source" : col[4] ,
                    "T0.che_binaire_source" : col[5] ,
                    "T0.chx_dossier_id_source" : col[6]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_313';
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
export{sql_313 as sql_313};