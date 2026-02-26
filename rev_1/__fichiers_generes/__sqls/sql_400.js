const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_400{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
    const champs0=`
      \`T0\`.\`chi_id_travail\` , \`T0\`.\`chp_resume_travail\` , \`T0\`.\`cht_rev_travail\` , \`T0\`.\`chx_utilisateur_travail\` , \`T0\`.\`chd_dtc_travail\` , 
      \`T0\`.\`chp_etat_travail\` , \`T0\`.\`chx_projet_travail\` , \`T1\`.\`chx_acces_utilisateur\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  tbl_travaux T0
       LEFT JOIN tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_travail
    `;
    sql0+=from0;
    const where0=` WHERE (\`T0\`.\`chp_etat_travail\` = ` + this.__gi1.__fnt1.sq1( par['T0_chp_etat_travail'] ) + `)`;
    sql0+=where0;
    const order0=`
       ORDER BY  \`T0\`.\`chi_id_travail\` ASC`;
    sql0+=order0;
    const plage0=`
        LIMIT ` + this.__gi1.__fnt1.sq1( par['quantitee'] ) + ` OFFSET 0 `;
    sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_400 sql0=',sql0); */

        let lignes = [];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes = await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees.__xst=__xer;
            this.__gi1.__xsi[__xer].push( 'erreur sql_400='+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {"__xst"  : __xer};
        }

        let donnees0 = [];
        for(let col of lignes){
            donnees0.push({
                'T0.chi_id_travail' : col[0],
                'T0.chp_resume_travail' : col[1],
                'T0.cht_rev_travail' : col[2],
                'T0.chx_utilisateur_travail' : col[3],
                'T0.chd_dtc_travail' : col[4],
                'T0.chp_etat_travail' : col[5],
                'T0.chx_projet_travail' : col[6],
                'T1.chx_acces_utilisateur' : col[7],
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
    moi='sql_400';
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
export{sql_400 as sql_400};