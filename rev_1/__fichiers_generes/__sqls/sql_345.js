const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_345{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0=`
          INSERT INTO \`tbl_genres\`(
               \`chi_id_genre\` , 
               \`chp_nom_genre\` , 
               \`che_ordre_genre\` , 
               \`chp_prefixe_genre\` , 
               \`chp_espece_genre\` , 
               \`che_longueur_genre\` , 
               \`che_est_primaire_genre\` , 
               \`che_est_incrément_genre\` , 
               \`che_est_obligatoire_genre\` , 
               \`che_a_init_genre\` , 
               \`che_init_est_mot_genre\` , 
               \`cht_valeur_init_genre\` , 
               \`che_est_parmis_genre\` , 
               \`cht_parmis_genre\` , 
               \`cht_fonctions_genre\` , 
               \`che_est_nur_genre\` , 
               \`che_est_tsm_genre\` , 
               \`che_est_tsc_genre\` , 
               \`chd__dtc_genre\` , 
               \`chd__dtm_genre\` , 
               \`che_est_session_genre\` , 
               \`chp_nom_en_session_genre\` , 
               \`che_est_positif_genre\` , 
               \`cht_particularités_genre\`
            ) VALUES (
                '.sq1($par['chi_id_genre']).' , 
                '.sq1($par['chp_nom_genre']).' , 
                '.sq1($par['che_ordre_genre']).' , 
                '.sq1($par['chp_prefixe_genre']).' , 
                '.sq1($par['chp_espece_genre']).' , 
                '.sq1($par['che_longueur_genre']).' , 
                '.sq1($par['che_est_primaire_genre']).' , 
                '.sq1($par['che_est_incrément_genre']).' , 
                '.sq1($par['che_est_obligatoire_genre']).' , 
                '.sq1($par['che_a_init_genre']).' , 
                '.sq1($par['che_init_est_mot_genre']).' , 
                '.sq1($par['cht_valeur_init_genre']).' , 
                '.sq1($par['che_est_parmis_genre']).' , 
                '.sq1($par['cht_parmis_genre']).' , 
                '.sq1($par['cht_fonctions_genre']).' , 
                '.sq1($par['che_est_nur_genre']).' , 
                '.sq1($par['che_est_tsm_genre']).' , 
                '.sq1($par['che_est_tsc_genre']).' , 
                '.sq1($par['chd__dtc_genre']).' , 
                '.sq1($par['chd__dtm_genre']).' , 
                '.sq1($par['che_est_session_genre']).' , 
                '.sq1($par['chp_nom_en_session_genre']).' , 
                '.sq1($par['che_est_positif_genre']).' , 
                '.sq1($par['cht_particularités_genre']).'
            );
        `;
    /* this.__gi1.ma_trace1(' sql0 = ' + sql0 ); */
    try{
            let ret=this.__db1.exec($sql0);
            return({ "__xst" : __xsu, 'changements' : res});;
        }catch(e){
            let __xme=e.stack.indexOf('UNIQUE constraint')>=0?'cet élément existe déjà dans la base ':'erreur SQL';
            return {/**/
                "__xst" : __xer ,
                "sql0" : sql0 ,
                "texte_requete" : '' ,
                    "exception" : e ,
                "__xme" : __xme ,
            };

        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_345';
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
export{sql_345 as sql_345};