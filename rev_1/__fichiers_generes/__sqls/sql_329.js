const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_329{
    /*
      =============================================================================================================
    */
    async sql( par ){
        let sql0=`
      INSERT  INTO \`tbl_genres\`(
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
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                /* test "non nul" sur le champ "chp_nom_genre" */
                if(par.donnees[i]['chp_nom_genre'] === null || par.donnees[i]['chp_nom_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "nom du genre" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "che_ordre_genre" */
                if(par.donnees[i]['che_ordre_genre'] === null || par.donnees[i]['che_ordre_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "ordre" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "chp_prefixe_genre" */
                if(par.donnees[i]['chp_prefixe_genre'] === null || par.donnees[i]['chp_prefixe_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "prefixe" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /*
                  === test spécifique sur le champ "chp_prefixe_genre" ===
                */
                let __test_2_1=this.__ig1.__fnts_c_et_s.test_doit_contenir_n_caracteres(3,par.donnees[i]['chp_prefixe_genre'],'prefixe');
                if(__test_2_1.__xst !== __xsu){
                    this.__ig1.donnees_retournees.__xsi[__xer].push(__test_2_1.__xme);
                    return{"__xst" : __xer};
                }

                /* test "non nul" sur le champ "chp_espece_genre" */
                if(par.donnees[i]['chp_espece_genre'] === null || par.donnees[i]['chp_espece_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "espece" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /*
                  === test spécifique sur le champ "che_longueur_genre" ===
                */
                let __test_4_1=this.__ig1.__fnts_c_et_s.test_longueur_de_champ_dans_genre(par.donnees[i]['che_longueur_genre'],'longueur du genre');
                if(__test_4_1.__xst !== __xsu){
                    this.__ig1.donnees_retournees.__xsi[__xer].push(__test_4_1.__xme);
                    return{"__xst" : __xer};
                }

                /* test "non nul" sur le champ "che_est_primaire_genre" */
                if(par.donnees[i]['che_est_primaire_genre'] === null || par.donnees[i]['che_est_primaire_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "est primaire" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "che_est_incrément_genre" */
                if(par.donnees[i]['che_est_incrément_genre'] === null || par.donnees[i]['che_est_incrément_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "est incrément" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "che_est_obligatoire_genre" */
                if(par.donnees[i]['che_est_obligatoire_genre'] === null || par.donnees[i]['che_est_obligatoire_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "est obligatoire" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "che_a_init_genre" */
                if(par.donnees[i]['che_a_init_genre'] === null || par.donnees[i]['che_a_init_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "a init" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "che_init_est_mot_genre" */
                if(par.donnees[i]['che_init_est_mot_genre'] === null || par.donnees[i]['che_init_est_mot_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "init est mot" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "che_est_parmis_genre" */
                if(par.donnees[i]['che_est_parmis_genre'] === null || par.donnees[i]['che_est_parmis_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "est parmis" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /*
                  === test spécifique sur le champ "cht_fonctions_genre" ===
                */
                let __test_13_1=this.__ig1.__fnts_c_et_s.test_fonctions_de_c_fonctions1(par.donnees[i]['cht_fonctions_genre'],'fonctions');
                if(__test_13_1.__xst !== __xsu){
                    this.__ig1.donnees_retournees.__xsi[__xer].push(__test_13_1.__xme);
                    return{"__xst" : __xer};
                }

                /* test "non nul" sur le champ "che_est_nur_genre" */
                if(par.donnees[i]['che_est_nur_genre'] === null || par.donnees[i]['che_est_nur_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "est nur" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "che_est_tsm_genre" */
                if(par.donnees[i]['che_est_tsm_genre'] === null || par.donnees[i]['che_est_tsm_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "est tsm" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "che_est_tsc_genre" */
                if(par.donnees[i]['che_est_tsc_genre'] === null || par.donnees[i]['che_est_tsc_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "est tsc" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /*
                  === pas === de test sur le champ "chd__dtc_genre"
                */
                /*
                  === pas === de test sur le champ "chd__dtm_genre"
                */
                /* test "non nul" sur le champ "che_est_session_genre" */
                if(par.donnees[i]['che_est_session_genre'] === null || par.donnees[i]['che_est_session_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "est session" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                /* test "non nul" sur le champ "che_est_positif_genre" */
                if(par.donnees[i]['che_est_positif_genre'] === null || par.donnees[i]['che_est_positif_genre']===''){
                    this.__ig1.donnees_retournees.__xsi[__xer].push('la valeur pour "est positif" doit être renseigné [' + this.__ig1.nl2() + ']');
                    return{__xst:__xer};
                }
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
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
                /* this.__ig1.ma_trace1( 'sql_329=' + sql0 ); */
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
            return({"__xst" : __xsu ,"__xva" : {} ,"sql0" : sql0 ,"changements" : res ,"nouvel_id" : nouvel_id});
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 329 , e , sql0 , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_329';
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
export{sql_329 as sql_329};