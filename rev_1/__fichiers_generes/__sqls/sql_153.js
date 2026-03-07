const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_153{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
    const champs0=`
      \`T1\`.\`chx_source_autorisation\` , \`T0\`.\`chp_titre_menu\` , \`T0\`.\`chp_methode_menu\` , \`T3\`.\`chp_nom_source\` , \`T0\`.\`cht_libelle_menu\` , 
      \`T0\`.\`cht_initialisation_menu\` , \`T0\`.\`chi_id_menu\` , \`T0\`.\`cht_condition_menu\` , \`T0\`.\`cht_condition_js_menu\` , \`T0\`.\`chx_autorisation_menu\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  tbl_menus T0      , 
           tbl_autorisations T1
       LEFT JOIN tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation

       LEFT JOIN tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
    `;
    sql0+=from0;
    const where0=` WHERE ( \`T2\`.\`chi_id_acces\` = ` + this.__gi1.__fnt1.sq1( par['T2_chi_id_acces'] ) + `
         AND T1.chi_id_autorisation = T0.chx_autorisation_menu)`;
    sql0+=where0;
        /* this.__gi1.ma_trace1('sql_153 sql0=',sql0); */

        let lignes = [];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes = await statement.values();
            await statement.finalize();
        }catch(e){
            if(e.stack.indexOf('API misuse')>=0){
                console.log('%c\nATTENTION API MISUSE, un await est il manquant quelquepart ?\n\n'+e.stack,'color:red;background-color:yellow;')
            }
            donnees_retournees.__xst=__xer;
            this.__gi1.__xsi[__xer].push( 'erreur sql_153='+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {"__xst"  : __xer};
        }

        let donnees0 = [];
        for(let col of lignes){
            donnees0.push({
                'T1.chx_source_autorisation' : col[0],
                'T0.chp_titre_menu' : col[1],
                'T0.chp_methode_menu' : col[2],
                'T3.chp_nom_source' : col[3],
                'T0.cht_libelle_menu' : col[4],
                'T0.cht_initialisation_menu' : col[5],
                'T0.chi_id_menu' : col[6],
                'T0.cht_condition_menu' : col[7],
                'T0.cht_condition_js_menu' : col[8],
                'T0.chx_autorisation_menu' : col[9],
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
    moi='sql_153';
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
export{sql_153 as sql_153};