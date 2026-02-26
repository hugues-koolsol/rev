const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_344{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
    const champs0=`
      \`T0\`.\`chi_id_rev\` , \`T0\`.\`chp_provenance_rev\` , \`T0\`.\`chx_source_rev\` , \`T0\`.\`chp_id_rev\` , \`T0\`.\`chp_valeur_rev\` , 
      \`T0\`.\`chp_type_rev\` , \`T0\`.\`chp_niveau_rev\` , \`T0\`.\`chp_quotee_rev\` , \`T0\`.\`chp_pos_premier_rev\` , \`T0\`.\`chp_pos_dernier_rev\` , 
      \`T0\`.\`chp_parent_rev\` , \`T0\`.\`chp_nbr_enfants_rev\` , \`T0\`.\`chp_num_enfant_rev\` , \`T0\`.\`chp_profondeur_rev\` , \`T0\`.\`chp_pos_ouver_parenthese_rev\` , 
      \`T0\`.\`chp_enfant_suivant_rev\` , \`T0\`.\`chp_commentaire_rev\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  tbl_revs T0    `;
    sql0+=from0;
    const where0=` WHERE ( \`T0\`.\`chi_id_rev\` = ` + this.__gi1.__fnt1.sq1( par['T0_chi_id_rev'] ) + `)`;
    sql0+=where0;
        /* this.__gi1.ma_trace1('sql_344 sql0=',sql0); */

        let lignes = [];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes = await statement.values();
            await statement.finalize();
        }catch(e){
            donnees_retournees.__xst=__xer;
            this.__gi1.__xsi[__xer].push( 'erreur sql_344='+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {"__xst"  : __xer};
        }

        let donnees0 = [];
        for(let col of lignes){
            donnees0.push({
                'T0.chi_id_rev' : col[0],
                'T0.chp_provenance_rev' : col[1],
                'T0.chx_source_rev' : col[2],
                'T0.chp_id_rev' : col[3],
                'T0.chp_valeur_rev' : col[4],
                'T0.chp_type_rev' : col[5],
                'T0.chp_niveau_rev' : col[6],
                'T0.chp_quotee_rev' : col[7],
                'T0.chp_pos_premier_rev' : col[8],
                'T0.chp_pos_dernier_rev' : col[9],
                'T0.chp_parent_rev' : col[10],
                'T0.chp_nbr_enfants_rev' : col[11],
                'T0.chp_num_enfant_rev' : col[12],
                'T0.chp_profondeur_rev' : col[13],
                'T0.chp_pos_ouver_parenthese_rev' : col[14],
                'T0.chp_enfant_suivant_rev' : col[15],
                'T0.chp_commentaire_rev' : col[16],
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
    moi='sql_344';
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
export{sql_344 as sql_344};