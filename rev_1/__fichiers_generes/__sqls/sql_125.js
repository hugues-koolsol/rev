const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_125{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
    const champs0=`
      \`T0\`.\`chi_id_metier\` , \`T0\`.\`chp_nom_metier\` , \`T1\`.\`chp_nom_metier\` , \`T0\`.\`chx_parent_metier\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  tbl_metiers T0
       LEFT JOIN tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
    `;
    sql0+=from0;
    const where0=` WHERE \`T0\`.\`chi_id_metier\` = ` + this.__gi1.__fnt1.sq1( par['T0_chi_id_metier'] ) + ``;
    sql0+=where0;
        /* this.__gi1.ma_trace1('sql_125 sql0=',sql0); */

        let lignes = [];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes = await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees.__xst=__xer;
            this.__gi1.__xsi[__xer].push( 'erreur sql_125='+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {"__xst"  : __xer};
        }

        let donnees0 = [];
        for(let col of lignes){
            donnees0.push({
                'T0.chi_id_metier' : col[0],
                'T0.chp_nom_metier' : col[1],
                'T1.chp_nom_metier' : col[2],
                'T0.chx_parent_metier' : col[3],
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
    moi='sql_125';
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
export{sql_125 as sql_125};