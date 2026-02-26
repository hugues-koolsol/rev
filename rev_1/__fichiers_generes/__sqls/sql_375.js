const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_375{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
    const champs0=`
      \`T0\`.\`chi_id_projet\` , \`T0\`.\`chp_nom_projet\` , \`T0\`.\`chx_dossier_requetes_projet\` , \`T0\`.\`chx_dossier_generes_projet\` , \`T0\`.\`cht_commentaire_projet\` , 
      \`T0\`.\`chx_dossier_programmes_projet\` , \`T0\`.\`chx_dossier_bdds_projet\` , \`T1\`.\`chp_nom_dossier\` , \`T2\`.\`chp_nom_dossier\` , \`T3\`.\`chp_nom_dossier\` , 
      \`T4\`.\`chp_nom_dossier\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  tbl_projets T0
       LEFT JOIN tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_requetes_projet

       LEFT JOIN tbl_dossiers T2 ON T2.chi_id_dossier = T0.chx_dossier_generes_projet

       LEFT JOIN tbl_dossiers T3 ON T3.chi_id_dossier = T0.chx_dossier_bdds_projet

       LEFT JOIN tbl_dossiers T4 ON T4.chi_id_dossier = T0.chx_dossier_programmes_projet
    `;
    sql0+=from0;
    const where0=` WHERE \`T0\`.\`chi_id_projet\` = ` + this.__gi1.__fnt1.sq1( par['T0_chi_id_projet'] ) + ``;
    sql0+=where0;
        /* this.__gi1.ma_trace1('sql_375 sql0=',sql0); */

        let lignes = [];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes = await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees.__xst=__xer;
            this.__gi1.__xsi[__xer].push( 'erreur sql_375='+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {"__xst"  : __xer};
        }

        let donnees0 = [];
        for(let col of lignes){
            donnees0.push({
                'T0.chi_id_projet' : col[0],
                'T0.chp_nom_projet' : col[1],
                'T0.chx_dossier_requetes_projet' : col[2],
                'T0.chx_dossier_generes_projet' : col[3],
                'T0.cht_commentaire_projet' : col[4],
                'T0.chx_dossier_programmes_projet' : col[5],
                'T0.chx_dossier_bdds_projet' : col[6],
                'T1.chp_nom_dossier' : col[7],
                'T2.chp_nom_dossier' : col[8],
                'T3.chp_nom_dossier' : col[9],
                'T4.chp_nom_dossier' : col[10],
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
    moi='sql_375';
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
export{sql_375 as sql_375};