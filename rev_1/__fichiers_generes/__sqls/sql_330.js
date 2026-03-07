const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_330{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
    const champs0=`
      \`T0\`.\`chi_id_genre\` , \`T0\`.\`chp_nom_genre\` , \`T0\`.\`che_ordre_genre\` , \`T0\`.\`chp_prefixe_genre\` , \`T0\`.\`chp_espece_genre\` , 
      \`T0\`.\`che_longueur_genre\` , \`T0\`.\`che_est_primaire_genre\` , \`T0\`.\`che_est_incrément_genre\` , \`T0\`.\`che_est_obligatoire_genre\` , \`T0\`.\`che_a_init_genre\` , 
      \`T0\`.\`che_init_est_mot_genre\` , \`T0\`.\`cht_valeur_init_genre\` , \`T0\`.\`che_est_parmis_genre\` , \`T0\`.\`cht_parmis_genre\` , \`T0\`.\`cht_fonctions_genre\` , 
      \`T0\`.\`che_est_nur_genre\` , \`T0\`.\`che_est_tsm_genre\` , \`T0\`.\`che_est_tsc_genre\` , \`T0\`.\`chd__dtc_genre\` , \`T0\`.\`chd__dtm_genre\` , 
      \`T0\`.\`che__nur_genre\` , \`T0\`.\`che_est_session_genre\` , \`T0\`.\`chp_nom_en_session_genre\` , \`T0\`.\`che_est_positif_genre\` , \`T0\`.\`cht_particularités_genre\`
    `;
    let sql0='SELECT '+champs0;
    const from0=`
      FROM  tbl_genres T0    `;
    sql0+=from0;
    const where0=` WHERE \`T0\`.\`chi_id_genre\` = ` + this.__gi1.__fnt1.sq1( par['T0_chi_id_genre'] ) + ``;
    sql0+=where0;
        /* this.__gi1.ma_trace1('sql_330 sql0=',sql0); */

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
            this.__gi1.__xsi[__xer].push( 'erreur sql_330='+sql0+' [' + this.__gi1.nl2(e) + ']' );
            return {"__xst"  : __xer};
        }

        let donnees0 = [];
        for(let col of lignes){
            donnees0.push({
                'T0.chi_id_genre' : col[0],
                'T0.chp_nom_genre' : col[1],
                'T0.che_ordre_genre' : col[2],
                'T0.chp_prefixe_genre' : col[3],
                'T0.chp_espece_genre' : col[4],
                'T0.che_longueur_genre' : col[5],
                'T0.che_est_primaire_genre' : col[6],
                'T0.che_est_incrément_genre' : col[7],
                'T0.che_est_obligatoire_genre' : col[8],
                'T0.che_a_init_genre' : col[9],
                'T0.che_init_est_mot_genre' : col[10],
                'T0.cht_valeur_init_genre' : col[11],
                'T0.che_est_parmis_genre' : col[12],
                'T0.cht_parmis_genre' : col[13],
                'T0.cht_fonctions_genre' : col[14],
                'T0.che_est_nur_genre' : col[15],
                'T0.che_est_tsm_genre' : col[16],
                'T0.che_est_tsc_genre' : col[17],
                'T0.chd__dtc_genre' : col[18],
                'T0.chd__dtm_genre' : col[19],
                'T0.che__nur_genre' : col[20],
                'T0.che_est_session_genre' : col[21],
                'T0.chp_nom_en_session_genre' : col[22],
                'T0.che_est_positif_genre' : col[23],
                'T0.cht_particularités_genre' : col[24],
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
    moi='sql_330';
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
export{sql_330 as sql_330};