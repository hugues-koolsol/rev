const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_371{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
    const champs0=`
      \`T0\`.\`chi_id_basedd\` , \`T0\`.\`chp_commentaire_basedd\` , \`T0\`.\`chp_rev_travail_basedd\` , \`T0\`.\`chp_fournisseur_basedd\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  tbl_bdds T0    `;
    sql0+=from0;
    const where0=` WHERE \`T0\`.\`chi_id_basedd\` = ` + this.__gi1.__fnt1.sq1( par['T0_chi_id_basedd'] ) + ``;
    sql0+=where0;
        /* this.__gi1.ma_trace1('sql_371 sql0=',sql0); */

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
            this.__gi1.__xsi[__xer].push( 'erreur sql_371='+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {"__xst"  : __xer};
        }

        let donnees0 = [];
        for(let col of lignes){
            donnees0.push({
                'T0.chi_id_basedd' : col[0],
                'T0.chp_commentaire_basedd' : col[1],
                'T0.chp_rev_travail_basedd' : col[2],
                'T0.chp_fournisseur_basedd' : col[3],
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
    moi='sql_371';
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
export{sql_371 as sql_371};