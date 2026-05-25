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
    verifier_coherence( par ){
        this.__ig1.options_generales.erreur_controlee=true;
        if((par.chp_espece_genre
                   || par.che_longueur_genre)
               && par.chp_espece_genre.toUpperCase() === 'VARCHAR'
               && par.che_longueur_genre === null
        ){
            throw new Error( 'une longueur doit être indiquée pour le l\'espèce VARCHAR' );
        }
        if((par.chp_espece_genre
                   || par.che_longueur_genre)
               && par.chp_espece_genre.toUpperCase() === 'DECIMAL'
               && par.che_longueur_genre === null
        ){
            throw new Error( 'une longueur doit être indiquée pour le l\'espèce DECIMAL' );
        }
        this.__ig1.options_generales.erreur_controlee=false;
        return({"__xst" : __xsu});
    }

    /*
      =============================================================================================================
    */
    async sql( par ){
        let sql0=`
      INSERT  INTO \`tbl_genres\`(
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
         \`che__nur_genre\` , 
         \`che_est_session_genre\` , 
         \`chp_nom_en_session_genre\` , 
         \`che_est_positif_genre\` , 
         \`cht_particularités_genre\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                const elem=par.donnees[i];
                /* test "non nul" sur le champ "chi_id_genre" */
                if(elem['chi_id_genre'] === null || elem['chi_id_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "id" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chp_nom_genre" */
                if(elem['chp_nom_genre'] === null || elem['chp_nom_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "nom du genre" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "che_ordre_genre" */
                if(elem['che_ordre_genre'] === null || elem['che_ordre_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "ordre" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "chp_prefixe_genre" */
                if(elem['chp_prefixe_genre'] === null || elem['chp_prefixe_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "prefixe" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === test spécifique sur le champ "chp_prefixe_genre" ===
                */
                let __test_3_1=this.__ig1.__fnts_c_et_s.test_doit_contenir_n_caracteres(3,elem['chp_prefixe_genre'],'prefixe');
                if(__test_3_1.__xst !== __xsu){
                    this.__ig1.donnees_retournees.__xsi[__xer].push(__test_3_1.__xme);
                    return{"__xst" : __xer};
                }

                /* test "non nul" sur le champ "chp_espece_genre" */
                if(elem['chp_espece_genre'] === null || elem['chp_espece_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "espece" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === test spécifique sur le champ "che_longueur_genre" ===
                */
                let __test_5_1=this.__ig1.__fnts_c_et_s.test_longueur_de_champ_dans_genre(elem['che_longueur_genre'],'longueur du genre');
                if(__test_5_1.__xst !== __xsu){
                    this.__ig1.donnees_retournees.__xsi[__xer].push(__test_5_1.__xme);
                    return{"__xst" : __xer};
                }

                /* test "non nul" sur le champ "che_est_primaire_genre" */
                if(elem['che_est_primaire_genre'] === null || elem['che_est_primaire_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "est primaire" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "che_est_incrément_genre" */
                if(elem['che_est_incrément_genre'] === null || elem['che_est_incrément_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "est incrément" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "che_est_obligatoire_genre" */
                if(elem['che_est_obligatoire_genre'] === null || elem['che_est_obligatoire_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "est obligatoire" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "che_a_init_genre" */
                if(elem['che_a_init_genre'] === null || elem['che_a_init_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "a init" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "che_init_est_mot_genre" */
                if(elem['che_init_est_mot_genre'] === null || elem['che_init_est_mot_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "init est mot" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "che_est_parmis_genre" */
                if(elem['che_est_parmis_genre'] === null || elem['che_est_parmis_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "est parmis" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === test spécifique sur le champ "cht_fonctions_genre" ===
                */
                let __test_14_1=this.__ig1.__fnts_c_et_s.test_fonctions_de_c_fonctions1(elem['cht_fonctions_genre'],'fonctions');
                if(__test_14_1.__xst !== __xsu){
                    this.__ig1.donnees_retournees.__xsi[__xer].push(__test_14_1.__xme);
                    return{"__xst" : __xer};
                }

                /* test "non nul" sur le champ "che_est_nur_genre" */
                if(elem['che_est_nur_genre'] === null || elem['che_est_nur_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "est nur" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "che_est_tsm_genre" */
                if(elem['che_est_tsm_genre'] === null || elem['che_est_tsm_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "est tsm" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "che_est_tsc_genre" */
                if(elem['che_est_tsc_genre'] === null || elem['che_est_tsc_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "est tsc" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  === pas === de test sur le champ "chd__dtc_genre"
                */
                /*
                  === pas === de test sur le champ "chd__dtm_genre"
                */
                /* test "non nul" sur le champ "che__nur_genre" */
                if(elem['che__nur_genre'] === null || elem['che__nur_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour " nur" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "che_est_session_genre" */
                if(elem['che_est_session_genre'] === null || elem['che_est_session_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "est session" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /* test "non nul" sur le champ "che_est_positif_genre" */
                if(elem['che_est_positif_genre'] === null || elem['che_est_positif_genre'] === ''){
                    return({"__xst" : __xer ,"__xme" : 'la valeur pour "est positif" doit être renseignée [' + this.__ig1.nl2() + ']'});
                }
                /*
                  =====================================================================================================
                  ================== appel de la fonction de coherence qui fait un throw ==============================
                  =====================================================================================================
                */
                this.verifier_coherence(elem);
                /*
                  =====================================================================================================
                  ================== appel de la fonction de coherence qui fait un throw ==============================
                  =====================================================================================================
                */
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['chi_id_genre'] , 'chi_id_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_nom_genre'] , 'chp_nom_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_ordre_genre'] , 'che_ordre_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_prefixe_genre'] , 'chp_prefixe_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_espece_genre'] , 'chp_espece_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['che_longueur_genre'] , 'che_longueur_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_est_primaire_genre'] , 'che_est_primaire_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_est_incrément_genre'] , 'che_est_incrément_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_est_obligatoire_genre'] , 'che_est_obligatoire_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_a_init_genre'] , 'che_a_init_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_init_est_mot_genre'] , 'che_init_est_mot_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_valeur_init_genre'] , 'cht_valeur_init_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_est_parmis_genre'] , 'che_est_parmis_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_parmis_genre'] , 'cht_parmis_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_fonctions_genre'] , 'cht_fonctions_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_est_nur_genre'] , 'che_est_nur_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_est_tsm_genre'] , 'che_est_tsm_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_est_tsc_genre'] , 'che_est_tsc_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( this.__ig1.donnees_retournees.date_heure_serveur ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( this.__ig1.donnees_retournees.date_heure_serveur ) + '' + ',';
                liste_des_valeurs+='\r\n      '+this.__ig1.__fnt1.sq1('0') + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_est_session_genre'] , 'che_est_session_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['chp_nom_en_session_genre'] , 'chp_nom_en_session_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq1( par.donnees[i]['che_est_positif_genre'] , 'che_est_positif_genre' ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__ig1.__fnt1.sq4( par.donnees[i]['cht_particularités_genre'] , 'cht_particularités_genre' ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__ig1.ma_trace1( 'sql_345=' + sql0 ); */
                res=await this.__db1.exec( sql0 );
                /* this.__ig1.ma_trace1('res=',res); */
                const sql1='SELECT last_insert_rowid() as nouvel_id; ';
                let statement1=await this.__db1.prepare( sql1 );
                let lignes=await statement1.values();
                await statement1.finalize();
                for(let numero_de_ligne in lignes){
                    nouvel_id=lignes[numero_de_ligne][0];
                }
            }
            return({
                    "__xst" : __xsu ,
                    "__xva" : {} ,
                    "sql0" : sql0 ,
                    "changements" : res ,
                    "nouvel_id" : nouvel_id ,
                    "__xme" : ''
                });
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 345 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_345';
    __ig1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 , __db1 ){
        this.__ig1=__ig1;
        this.__db1=__db1;
    }
}
export{sql_345 as sql_345};