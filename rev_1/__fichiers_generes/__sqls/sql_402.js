const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_402{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
    const champs0=`
      \`T0\`.\`chi_id_source\` , \`T0\`.\`chp_nom_source\` , \`T0\`.\`chx_dossier_id_source\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  tbl_sources T0    `;
    sql0+=from0;
    const where0=` WHERE ( \`T0\`.\`chi_id_source\` IN ` + this.__gi1.__fnt1.sq0( par['T0_chi_id_source'] ) + `
         AND \`T0\`.\`chp_nom_source\` LIKE '%.js'
         AND \`T0\`.\`che_binaire_source\` = 0)`;
    sql0+=where0;
        /* this.__gi1.ma_trace1('sql_402 sql0=',sql0); */

        let lignes = [];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes = await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees.__xst=__xer;
            this.__gi1.__xsi[__xer].push( 'erreur sql_402='+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {"__xst"  : __xer};
        }

        let donnees0 = [];
        for(let col of lignes){
            donnees0.push({
                'T0.chi_id_source' : col[0],
                'T0.chp_nom_source' : col[1],
                'T0.chx_dossier_id_source' : col[2],
            });
        }
        return {
            "__xst"  : __xsu,
            "__xva"  : donnees0,
            "sql0"    : sql0,
            "where0"  : where0,
        };

    }
    /*
      =============================================================================================================
    */
    moi='sql_402';
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
export{sql_402 as sql_402};