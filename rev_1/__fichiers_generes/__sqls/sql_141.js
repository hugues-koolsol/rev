const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_141{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
    const champs0=`
      \`T0\`.\`chi_id_autorisation\` , \`T0\`.\`chp_nom_autorisation\` , \`T0\`.\`chx_acces_autorisation\` , \`T0\`.\`chx_source_autorisation\` , \`T1\`.\`chp_nom_acces\` , 
      \`T2\`.\`chp_nom_source\` , \`T2\`.\`che_binaire_source\` , \`T2\`.\`chx_dossier_id_source\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  tbl_autorisations T0
       LEFT JOIN tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

       LEFT JOIN tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
    `;
    sql0+=from0;
    const where0=` WHERE \`T0\`.\`chi_id_autorisation\` = ` + this.__gi1.__fnt1.sq1( par['T0_chi_id_autorisation'] ) + ``;
    sql0+=where0;
        /* this.__gi1.ma_trace1('sql_141 sql0=',sql0); */

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
            this.__gi1.__xsi[__xer].push( 'erreur sql_141='+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {"__xst"  : __xer};
        }

        let donnees0 = [];
        for(let col of lignes){
            donnees0.push({
                'T0.chi_id_autorisation' : col[0],
                'T0.chp_nom_autorisation' : col[1],
                'T0.chx_acces_autorisation' : col[2],
                'T0.chx_source_autorisation' : col[3],
                'T1.chp_nom_acces' : col[4],
                'T2.chp_nom_source' : col[5],
                'T2.che_binaire_source' : col[6],
                'T2.chx_dossier_id_source' : col[7],
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
    moi='sql_141';
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
export{sql_141 as sql_141};