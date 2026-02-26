const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_405{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
    const champs0=`
      \`T0\`.\`chi_id_requete\` , \`T0\`.\`chp_type_requete\` , \`T0\`.\`cht_rev_requete\` , \`T0\`.\`che_est_souche_requete\` , \`T0\`.\`chp_table_reference_requete\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  tbl_requetes T0    `;
    sql0+=from0;
    const where0=` WHERE \`T0\`.\`chi_id_requete\` IN ` + this.__gi1.__fnt1.sq0( par['T0_chi_id_requete'] ) + ``;
    sql0+=where0;
    const order0=`
       ORDER BY  \`T0\`.\`chi_id_requete\` DESC`;
    sql0+=order0;
    const plage0=`
        LIMIT 1000 OFFSET 0 `;
    sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_405 sql0=',sql0); */

        let lignes = [];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes = await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees.__xst=__xer;
            this.__gi1.__xsi[__xer].push( 'erreur sql_405='+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {"__xst"  : __xer};
        }

        let donnees0 = [];
        for(let col of lignes){
            donnees0.push({
                'T0.chi_id_requete' : col[0],
                'T0.chp_type_requete' : col[1],
                'T0.cht_rev_requete' : col[2],
                'T0.che_est_souche_requete' : col[3],
                'T0.chp_table_reference_requete' : col[4],
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
    moi='sql_405';
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
export{sql_405 as sql_405};