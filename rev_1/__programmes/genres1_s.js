const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */'__xst';
const __xva=/* valeurs */'__xva';
const __xsi=/* signaux */'__xsi';
const __xac=/* actions */'__xac';
/*
  =====================================================================================================================
*/
class genres1{
    /*
      =============================================================================================================
    */
    async integrer_ce_genre_dans_un_autre_projet( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_genre=0;
        let chi_id_projet=0;
        let l01=mat.length;
        for( let i=1 ; i < l01 ; i++ ){
            if(mat[i][1] === 'chi_id_genre'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_genre=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'chi_id_projet'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_projet=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(!(chi_id_projet > 0 && chi_id_genre > 0)){
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_select_330={"T0_chi_id_genre" : chi_id_genre};
        let tt330=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 330 , criteres_select_330 , donnees_retournees , __db1 );
        if(tt330[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                         /*  */
                        "chi_id_genre" : chi_id_genre ,
                        "chp_nom_genre" : tt330[__xva][0]['T0.chp_nom_genre'] ,
                        "che_ordre_genre" : tt330[__xva][0]['T0.che_ordre_genre'] ,
                        "chp_prefixe_genre" : tt330[__xva][0]['T0.chp_prefixe_genre'] ,
                        "chp_espece_genre" : tt330[__xva][0]['T0.chp_espece_genre'] ,
                        "che_longueur_genre" : tt330[__xva][0]['T0.che_longueur_genre'] ,
                        "che_est_primaire_genre" : tt330[__xva][0]['T0.che_est_primaire_genre'] ,
                        "che_est_incrément_genre" : tt330[__xva][0]['T0.che_est_incrément_genre'] ,
                        "che_est_obligatoire_genre" : tt330[__xva][0]['T0.che_est_obligatoire_genre'] ,
                        "che_a_init_genre" : tt330[__xva][0]['T0.che_a_init_genre'] ,
                        "che_init_est_mot_genre" : tt330[__xva][0]['T0.che_init_est_mot_genre'] ,
                        "cht_valeur_init_genre" : tt330[__xva][0]['T0.cht_valeur_init_genre'] ,
                        "che_est_parmis_genre" : tt330[__xva][0]['T0.che_est_parmis_genre'] ,
                        "cht_parmis_genre" : tt330[__xva][0]['T0.cht_parmis_genre'] ,
                        "cht_fonctions_genre" : tt330[__xva][0]['T0.cht_fonctions_genre'] ,
                        "che_est_nur_genre" : tt330[__xva][0]['T0.che_est_nur_genre'] ,
                        "che_est_tsm_genre" : tt330[__xva][0]['T0.che_est_tsm_genre'] ,
                        "che_est_tsc_genre" : tt330[__xva][0]['T0.che_est_tsc_genre'] ,
                        "che_est_session_genre" : tt330[__xva][0]['T0.che_est_session_genre'] ,
                        "chp_nom_en_session_genre" : tt330[__xva][0]['T0.chp_nom_en_session_genre'] ,
                        "che_est_positif_genre" : tt330[__xva][0]['T0.che_est_positif_genre'] ,
                        "cht_particularités_genre" : tt330[__xva][0]['T0.cht_particularités_genre'] ,
                        "chd__dtc_genre" : donnees_retournees.date_heure_serveur ,
                        "chd__dtm_genre" : donnees_retournees.date_heure_serveur
                    }]
        };
        let __db_autre=await this.__gi1.ouvrir_bdd( chi_id_projet , donnees_retournees , options_generales );
        let tt345=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_genres`(
            `chi_id_genre` , 
            `chp_nom_genre` , 
            `che_ordre_genre` , 
            `chp_prefixe_genre` , 
            `chp_espece_genre` , 
            `che_longueur_genre` , 
            `che_est_primaire_genre` , 
            `che_est_incrément_genre` , 
            `che_est_obligatoire_genre` , 
            `che_a_init_genre` , 
            `che_init_est_mot_genre` , 
            `cht_valeur_init_genre` , 
            `che_est_parmis_genre` , 
            `cht_parmis_genre` , 
            `cht_fonctions_genre` , 
            `che_est_nur_genre` , 
            `che_est_tsm_genre` , 
            `che_est_tsc_genre` , 
            `chd__dtc_genre` , 
            `chd__dtm_genre` , 
            `che__nur_genre` , 
            `che_est_session_genre` , 
            `chp_nom_en_session_genre` , 
            `che_est_positif_genre` , 
            `cht_particularités_genre`
        ) VALUES (
            :chi_id_genre , 
            :chp_nom_genre , 
            :che_ordre_genre , 
            :chp_prefixe_genre , 
            :chp_espece_genre , 
            :che_longueur_genre , 
            :che_est_primaire_genre , 
            :che_est_incrément_genre , 
            :che_est_obligatoire_genre , 
            :che_a_init_genre , 
            :che_init_est_mot_genre , 
            :cht_valeur_init_genre , 
            :che_est_parmis_genre , 
            :cht_parmis_genre , 
            :cht_fonctions_genre , 
            :che_est_nur_genre , 
            :che_est_tsm_genre , 
            :che_est_tsc_genre , 
            :chd__dtc_genre , 
            :chd__dtm_genre , 
            :che__nur_genre , 
            :che_est_session_genre , 
            :chp_nom_en_session_genre , 
            :che_est_positif_genre , 
            :cht_particularités_genre
        );
        */
        /*sql_inclure_fin*/ 345 , donnees_sql , donnees_retournees , __db_autre );
        if(tt345[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur d\'insertion [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        await __db_autre.close();
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_integrer_ce_genre_dans_un_autre_projet( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_select_316={};
        let tt316=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
         FROM b1.tbl_projets T0
        WHERE `T0`.`chi_id_projet` > 2
        ;
        */
        /*sql_inclure_fin*/ 316 , criteres_select_316 , donnees_retournees , __db1 );
        if(tt316[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]=tt316[__xva];
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async vv_genres_nouveau_numero1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let form=donnees_recues[__xva]['__fo1'][donnees_recues[__xva]['__co1']];
        /*
          [
          'vv_ancien_numero_de_genre' => '110',
          'vv_nouveau_numero_de_genre' => '110',
          ]
        */
        let chi_id_genre_ancienne=0;
        let chi_id_genre_nouvelle=0;
        if(form.hasOwnProperty( 'vv_nouveau_numero_de_genre' ) && this.__gi1.est_num( form['vv_nouveau_numero_de_genre'] )){
            chi_id_genre_nouvelle=parseInt( form['vv_nouveau_numero_de_genre'] , 10 );
        }else{
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(form.hasOwnProperty( 'vv_ancien_numero_de_genre' ) && this.__gi1.est_num( form['vv_ancien_numero_de_genre'] )){
            chi_id_genre_ancienne=parseInt( form['vv_ancien_numero_de_genre'] , 10 );
        }else{
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(chi_id_genre_ancienne === chi_id_genre_nouvelle){
            this.__gi1.__xsi[__xer].push( 'le nouveau numéro doit être différent de l\'ancien [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_select_330={"T0_chi_id_genre" : chi_id_genre_ancienne};
        let tt330=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 330 , criteres_select_330 , donnees_retournees , __db1 );
        if(tt330[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_select_330_2={"T0_chi_id_genre" : chi_id_genre_nouvelle};
        let tt330_2=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 330 , criteres_select_330_2 , donnees_retournees , __db1 );
        if(tt330_2[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt330_2[__xva].length === 1){
            this.__gi1.__xsi[__xer].push( 'le genre ' + chi_id_genre_nouvelle + ' existe déjà [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let obj=await this.verifier_que_le_genre_n_est_pas_utilise_dans_la_base( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_genre_ancienne , __db1 );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'le genre est utilisé dans une base [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(chi_id_genre_nouvelle < 100 && donnees_retournees._CA_ === 1 && donnees_retournees.chi_id_utilisateur !== 1){
            if(!(donnees_retournees.chi_id_projet === 1 && donnees_retournees.chi_id_utilisateur === 1)){
                this.__gi1.__xsi[__xer].push( 'seul l\'utilisateur principale peut renuméroter un genre à moins de 100 [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        let criteres_334={"n_chi_id_genre" : chi_id_genre_nouvelle ,"c_chi_id_genre" : chi_id_genre_ancienne};
        let tt334=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_genres SET 
           `chi_id_genre` = :n_chi_id_genre
        WHERE `chi_id_genre` = :c_chi_id_genre ;
        */
        /*sql_inclure_fin*/ 334 , criteres_334 , donnees_retournees , __db1 );
        if(tt334[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(chi_id_genre_nouvelle < 100 && donnees_retournees._CA_ === 1 && donnees_retournees.chi_id_projet === 1){
            this.__gi1.__xsi[__xdv].push( 'afr il faut aller créer ce genre dans les autres projets [' + this.__gi1.nl2() );
        }
        await this.mettre_a_jour_le_js_des_genres( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async mettre_a_jour_le_js_des_genres( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 ){
        /*
          on récupère tous les genres
        */
        let criteres_select_333={};
        let tt333=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
        `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
        `T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_ordre_genre` , `T0`.`che_est_tsc_genre` , 
        `T0`.`cht_fonctions_genre` , `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , 
        `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0 ORDER BY  `T0`.`che_ordre_genre` ASC, `T0`.`chp_nom_genre` ASC
        ;
        */
        /*sql_inclure_fin*/ 333 , criteres_select_333 , donnees_retournees , __db1 );
        if(tt333[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrements non trouvés [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let __liste_des_genres={};
        let nombre_de_genres=0;
        for(let k1 in tt333[__xva]){
            let v1=tt333[__xva][k1];
            __liste_des_genres[v1['T0.chi_id_genre']]={
                "chi_id_genre" : v1['T0.chi_id_genre'] ,
                "chp_nom_genre" : v1['T0.chp_nom_genre'] ,
                "chp_espece_genre" : v1['T0.chp_espece_genre'] ,
                "che_longueur_genre" : v1['T0.che_longueur_genre'] ,
                "che_est_primaire_genre" : v1['T0.che_est_primaire_genre'] ,
                "che_est_incrément_genre" : v1['T0.che_est_incrément_genre'] ,
                "che_est_obligatoire_genre" : v1['T0.che_est_obligatoire_genre'] ,
                "che_a_init_genre" : v1['T0.che_a_init_genre'] ,
                "che_init_est_mot_genre" : v1['T0.che_init_est_mot_genre'] ,
                "cht_valeur_init_genre" : v1['T0.cht_valeur_init_genre'] ,
                "chp_prefixe_genre" : v1['T0.chp_prefixe_genre'] ,
                "che_est_parmis_genre" : v1['T0.che_est_parmis_genre'] ,
                "cht_parmis_genre" : v1['T0.cht_parmis_genre'] ,
                "che_ordre_genre" : v1['T0.che_ordre_genre'] ,
                "che_est_tsc_genre" : v1['T0.che_est_tsc_genre'] ,
                "che_est_tsm_genre" : v1['T0.che_est_tsm_genre'] ,
                "cht_fonctions_genre" : v1['T0.cht_fonctions_genre'] ,
                "che_est_nur_genre" : v1['T0.che_est_nur_genre'] ,
                "che_est_session_genre" : v1['T0.che_est_session_genre'] ,
                "chp_nom_en_session_genre" : v1['T0.chp_nom_en_session_genre'] ,
                "che_est_positif_genre" : v1['T0.che_est_positif_genre'] ,
                "cht_particularités_genre" : v1['T0.cht_particularités_genre']
            };
            nombre_de_genres++;
        }
        if(nombre_de_genres > 0){
            let chemin_fichier__liste_des_genres='';
            if(donnees_retournees._CA_ === 2){
                chemin_fichier__liste_des_genres='../rev_2/__fichiers_generes/__liste_des_genres.json';
            }else{
                chemin_fichier__liste_des_genres='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/__liste_des_genres.json';
            }
            /* this.__gi1.ma_trace1( '__liste_des_genres=',__liste_des_genres); */
            let contenu_fichier__liste_des_genres='' + JSON.stringify( __liste_des_genres , null , 2 ) + '';
            try{
                await this.__gi1.file_put_contents( chemin_fichier__liste_des_genres , contenu_fichier__liste_des_genres );
            }catch{
                this.__gi1.__xsi[__xer].push( 'erreur d\'écriture du fichier js des genres [' + this.__gi1.nl2( e ) + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        donnees_retournees[__xva]['__liste_des_genres']=__liste_des_genres;
        donnees_retournees[__xac]+='m1(n1(_developpement1_),f1(maj_liste_des_genres()))';
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async enregister_l_ordre_des_genres( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        for(let k1 in donnees_recues[__xva]['tableau_des_ordre']){
            let v1=donnees_recues[__xva]['tableau_des_ordre'][k1];
            let criteres_select_335={"c_chi_id_genre" : v1[0] ,"n_che_ordre_genre" : v1[1]};
            let tt335=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_genres SET 
               `che_ordre_genre` = :n_che_ordre_genre
            WHERE `chi_id_genre` = :c_chi_id_genre ;
            */
            /*sql_inclure_fin*/ 335 , criteres_select_335 , donnees_retournees , __db1 );
            if(tt335[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        let obj=await this.mettre_a_jour_le_js_des_genres( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur sur la maj de la liste des genres [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async recuperer_les_genres_pour_tri( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_select_333={};
        let tt333=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
        `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
        `T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_ordre_genre` , `T0`.`che_est_tsc_genre` , 
        `T0`.`cht_fonctions_genre` , `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , 
        `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0 ORDER BY  `T0`.`che_ordre_genre` ASC, `T0`.`chp_nom_genre` ASC
        ;
        */
        /*sql_inclure_fin*/ 333 , criteres_select_333 , donnees_retournees , __db1 );
        if(tt333[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]=tt333[__xva];
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async verifier_que_le_genre_n_est_pas_utilise_dans_la_base( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_genre , __db1 ){
        let criteres_select_171={};
        let tt171=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        ;
        */
        /*sql_inclure_fin*/ 171 , criteres_select_171 , donnees_retournees , __db1 );
        if(tt171[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        for(let k1 in tt171[__xva]){
            let v1=tt171[__xva][k1];
            let obj_matrice=this.__gi1.__rev1.rev_tm( v1['T0.chp_rev_travail_basedd'] );
            if(obj_matrice[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let mat=obj_matrice[__xva];
            let l01=mat.length;
            for( let i=1 ; i < l01 ; i++ ){
                if(mat[i][2] === 'f' && mat[i][8] === 1 && mat[i][1] === 'genre'){
                    if(parseInt( mat[i + 1][1] , 10 ) === chi_id_genre){
                        this.__gi1.__xsi[__xer].push( 'le numéro actuel est encore utilisé dans la base "' + v1['T0.chi_id_basedd'] + '" [' + this.__gi1.nl2() );
                        donnees_retournees.__xst=__xer;
                        return({"__xst" : __xer});
                    }
                }
            }
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      ================================= FONCTIONS DE REFERENCE ====================================================
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant , __db1 ){
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        let obj=await this.mettre_a_jour_le_js_des_genres( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur sur la maj de la liste des genres [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        let obj=await this.verifier_que_le_genre_n_est_pas_utilise_dans_la_base( mat , d , donnees_recues , donnees_retournees , options_generales , form['chi_id_genre'] , __db1 );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'le genre est utilisé dans une base [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        let obj=await this.mettre_a_jour_le_js_des_genres( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur sur la maj de la liste des genres [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , nouvel_id , form , __db1 ){
        let obj=await this.mettre_a_jour_le_js_des_genres( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur sur la maj de la liste des genres [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async modifier1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /* conversion des données numériques début */
        form['chi_id_genre']=form['chi_id_genre'] === null ? ( null ) : ( parseInt( form['chi_id_genre'] , 10 ) );
        form['che_ordre_genre']=form['che_ordre_genre'] === null ? ( null ) : ( parseInt( form['che_ordre_genre'] , 10 ) );
        form['che_longueur_genre']=form['che_longueur_genre'] === null ? ( null ) : ( parseInt( form['che_longueur_genre'] , 10 ) );
        form['che_est_primaire_genre']=form['che_est_primaire_genre'] === null ? ( null ) : ( parseInt( form['che_est_primaire_genre'] , 10 ) );
        form['che_est_incrément_genre']=form['che_est_incrément_genre'] === null ? ( null ) : ( parseInt( form['che_est_incrément_genre'] , 10 ) );
        form['che_est_obligatoire_genre']=form['che_est_obligatoire_genre'] === null ? ( null ) : ( parseInt( form['che_est_obligatoire_genre'] , 10 ) );
        form['che_a_init_genre']=form['che_a_init_genre'] === null ? ( null ) : ( parseInt( form['che_a_init_genre'] , 10 ) );
        form['che_init_est_mot_genre']=form['che_init_est_mot_genre'] === null ? ( null ) : ( parseInt( form['che_init_est_mot_genre'] , 10 ) );
        form['che_est_parmis_genre']=form['che_est_parmis_genre'] === null ? ( null ) : ( parseInt( form['che_est_parmis_genre'] , 10 ) );
        form['che_est_nur_genre']=form['che_est_nur_genre'] === null ? ( null ) : ( parseInt( form['che_est_nur_genre'] , 10 ) );
        form['che_est_tsm_genre']=form['che_est_tsm_genre'] === null ? ( null ) : ( parseInt( form['che_est_tsm_genre'] , 10 ) );
        form['che_est_tsc_genre']=form['che_est_tsc_genre'] === null ? ( null ) : ( parseInt( form['che_est_tsc_genre'] , 10 ) );
        form['che_est_session_genre']=form['che_est_session_genre'] === null ? ( null ) : ( parseInt( form['che_est_session_genre'] , 10 ) );
        form['che_est_positif_genre']=form['che_est_positif_genre'] === null ? ( null ) : ( parseInt( form['che_est_positif_genre'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_nom_genre'] === null || form['chp_nom_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "nom" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_ordre_genre'] === null || form['che_ordre_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "ordre" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_prefixe_genre'] === null || form['chp_prefixe_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "prefixe" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __test_2_1=this.__gi1.__fnt1.doit_contenir_n_caracteres( 3 , form['chp_prefixe_genre'] , 'prefixe' );
        if(__test_2_1[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur sur le contenu de "prefixe" [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(form['chp_espece_genre'] === null || form['chp_espece_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "espece" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_primaire_genre'] === null || form['che_est_primaire_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est primaire" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_incrément_genre'] === null || form['che_est_incrément_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est incrément" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_obligatoire_genre'] === null || form['che_est_obligatoire_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est obligatoire" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_a_init_genre'] === null || form['che_a_init_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "a init" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_init_est_mot_genre'] === null || form['che_init_est_mot_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "init est mot" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_parmis_genre'] === null || form['che_est_parmis_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est parmis" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __test_13_1=this.__gi1.__fnt1.test_fonctions_de_c_fonctions1( form['cht_fonctions_genre'] , 'fonctions' );
        if(__test_13_1[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur sur le contenu de "fonctions" [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(form['che_est_nur_genre'] === null || form['che_est_nur_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est nur" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_tsm_genre'] === null || form['che_est_tsm_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est tsm" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_tsc_genre'] === null || form['che_est_tsc_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est tsc" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_session_genre'] === null || form['che_est_session_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est session" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_positif_genre'] === null || form['che_est_positif_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est positif" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        /* sélection du champ à modifier */
        let criteres_select_330={"T0_chi_id_genre" : form['chi_id_genre']};
        let tt330=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 330 , criteres_select_330 , donnees_retournees , __db1 );
        if(tt330[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt330[__xst] === __xsu && tt330[__xva].length === 1){
            let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt330[__xva][0] , __db1 );
            if(__actions_et_tests_avant_modifier[__xst] !== __xsu){
                return({"__xst" : __xer});
            }
            let donnees_sql={
                "c_chi_id_genre" : form['chi_id_genre'] ,
                "n_chp_nom_genre" : form['chp_nom_genre'] ,
                "n_che_ordre_genre" : form['che_ordre_genre'] ,
                "n_chp_prefixe_genre" : form['chp_prefixe_genre'] ,
                "n_chp_espece_genre" : form['chp_espece_genre'] ,
                "n_che_longueur_genre" : form['che_longueur_genre'] === '' ? ( null ) : ( form['che_longueur_genre'] ) ,
                "n_che_est_primaire_genre" : form['che_est_primaire_genre'] ,
                "n_che_est_incrément_genre" : form['che_est_incrément_genre'] ,
                "n_che_est_obligatoire_genre" : form['che_est_obligatoire_genre'] ,
                "n_che_a_init_genre" : form['che_a_init_genre'] ,
                "n_che_init_est_mot_genre" : form['che_init_est_mot_genre'] ,
                "n_cht_valeur_init_genre" : form['cht_valeur_init_genre'] === '' ? ( null ) : ( form['cht_valeur_init_genre'] ) ,
                "n_che_est_parmis_genre" : form['che_est_parmis_genre'] ,
                "n_cht_parmis_genre" : form['cht_parmis_genre'] === '' ? ( null ) : ( form['cht_parmis_genre'] ) ,
                "n_cht_fonctions_genre" : form['cht_fonctions_genre'] === '' ? ( null ) : ( form['cht_fonctions_genre'] ) ,
                "n_che_est_nur_genre" : form['che_est_nur_genre'] ,
                "n_che_est_tsm_genre" : form['che_est_tsm_genre'] ,
                "n_che_est_tsc_genre" : form['che_est_tsc_genre'] ,
                "n_che_est_session_genre" : form['che_est_session_genre'] ,
                "n_chp_nom_en_session_genre" : form['chp_nom_en_session_genre'] === '' ? ( null ) : ( form['chp_nom_en_session_genre'] ) ,
                "n_che_est_positif_genre" : form['che_est_positif_genre'] ,
                "n_cht_particularités_genre" : form['cht_particularités_genre'] === '' ? ( null ) : ( form['cht_particularités_genre'] )
            };
            await __db1.exec( 'BEGIN TRANSACTION;' );
            let tt331=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_genres SET 
               `chp_nom_genre` = :n_chp_nom_genre , 
               `che_ordre_genre` = :n_che_ordre_genre , 
               `chp_prefixe_genre` = :n_chp_prefixe_genre , 
               `chp_espece_genre` = :n_chp_espece_genre , 
               `che_longueur_genre` = :n_che_longueur_genre , 
               `che_est_primaire_genre` = :n_che_est_primaire_genre , 
               `che_est_incrément_genre` = :n_che_est_incrément_genre , 
               `che_est_obligatoire_genre` = :n_che_est_obligatoire_genre , 
               `che_a_init_genre` = :n_che_a_init_genre , 
               `che_init_est_mot_genre` = :n_che_init_est_mot_genre , 
               `cht_valeur_init_genre` = :n_cht_valeur_init_genre , 
               `che_est_parmis_genre` = :n_che_est_parmis_genre , 
               `cht_parmis_genre` = :n_cht_parmis_genre , 
               `cht_fonctions_genre` = :n_cht_fonctions_genre , 
               `che_est_nur_genre` = :n_che_est_nur_genre , 
               `che_est_tsm_genre` = :n_che_est_tsm_genre , 
               `che_est_tsc_genre` = :n_che_est_tsc_genre , 
               `chd__dtm_genre` = :n_chd__dtm_genre , 
               `che__nur_genre` = :n_che__nur_genre , 
               `che_est_session_genre` = :n_che_est_session_genre , 
               `chp_nom_en_session_genre` = :n_chp_nom_en_session_genre , 
               `che_est_positif_genre` = :n_che_est_positif_genre , 
               `cht_particularités_genre` = :n_cht_particularités_genre
            WHERE `chi_id_genre` = :c_chi_id_genre ;
            */
            /*sql_inclure_fin*/ 331 , donnees_sql , donnees_retournees , __db1 );
            if(tt331[__xst] !== __xsu){
                if(tt331['__xme'] !== ''){
                    this.__gi1.__xsi[__xer].push( tt331['__xme'] + ' [' + this.__gi1.nl2() );
                }else{
                    this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                }
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let __taam=await this.tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt330[__xva][0] , __db1 );
            if(__taam[__xst] !== __xsu){
                await __db1.exec( 'ROLLBACK;' );
                this.__gi1.__xsi[__xer].push( 'erreur après modification [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            await __db1.exec( 'COMMIT;' );
            if(retour_a_la_liste === true){
                if(form['__mat_liste_si_ok']){
                    let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                    let d=1;
                    await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales );
                }
                return({"__xst" : __xsu});
            }
            let tt330_bis=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
            `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
            `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
            `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
            `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
             FROM b1.tbl_genres T0
            WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
            ;
            */
            /*sql_inclure_fin*/ 330 , criteres_select_330 , donnees_retournees , __db1 );
            donnees_retournees[__xva]['page_modification1']=tt330_bis;
        }else{
            donnees_retournees[__xva]['page_modification1']=tt330;
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_genre=null , __db1=null ){
        if(chi_id_genre === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_genre'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_genre=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_genre(' + chi_id_genre + ')))))';
        }
        if(chi_id_genre === null){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt330=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 330 , {"T0_chi_id_genre" : chi_id_genre} , donnees_retournees , __db1 );
        if(tt330[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , tt330[__xva][0] , __db1 );
        if(aetam[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_modification1']=tt330;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_duplication1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_genre=null ){
        if(chi_id_genre === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_genre'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_genre=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_330={
             /*  */
            "T0_chi_id_genre" : chi_id_genre
        };
        let tt330=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 330 , criteres_330 , donnees_retournees , __db1 );
        if(tt330[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_duplication1']=tt330;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(1)) */
        if(form['chi_id_genre'] <= 1){
            this.__gi1.__xsi[__xer].push( 'il n\'est pas possible de supprimer cet élément [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_330={
             /*  */
            "T0_chi_id_genre" : form['chi_id_genre']
        };
        let tt330=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 330 , criteres_330 , donnees_retournees , __db1 );
        if(tt330[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt330[__xva][0] , __db1 );
        if(tas[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_332={
             /*  */
            "chi_id_genre" : form['chi_id_genre']
        };
        let tt332=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_genres
        WHERE `chi_id_genre` = :chi_id_genre ;
        */
        /*sql_inclure_fin*/ 332 , criteres_332 , donnees_retournees , __db1 );
        /*  */
        if(tt332[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let aac=await this.actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt330[__xva][0] , __db1 );
        if(aac[__xst] === __xer){
            this.__gi1.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /*  */
        if(form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_genre=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_genre'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_genre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_genre === 0){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let critere_330={"T0_chi_id_genre" : chi_id_genre};
        let tt330=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 330 , critere_330 , donnees_retournees , __db1 );
        donnees_retournees[__xva]['page_confirmation_supprimer1']=tt330;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* conversion des données numériques début */
        form['che_ordre_genre']=form['che_ordre_genre'] === null || form['che_ordre_genre'] === '' || form['che_ordre_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_ordre_genre'] , 10 ) );
        form['che_longueur_genre']=form['che_longueur_genre'] === null || form['che_longueur_genre'] === '' || form['che_longueur_genre'] === undefined ? ( null ) : ( parseInt( form['che_longueur_genre'] , 10 ) );
        form['che_est_primaire_genre']=form['che_est_primaire_genre'] === null || form['che_est_primaire_genre'] === '' || form['che_est_primaire_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_primaire_genre'] , 10 ) );
        form['che_est_incrément_genre']=form['che_est_incrément_genre'] === null || form['che_est_incrément_genre'] === '' || form['che_est_incrément_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_incrément_genre'] , 10 ) );
        form['che_est_obligatoire_genre']=form['che_est_obligatoire_genre'] === null || form['che_est_obligatoire_genre'] === '' || form['che_est_obligatoire_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_obligatoire_genre'] , 10 ) );
        form['che_a_init_genre']=form['che_a_init_genre'] === null || form['che_a_init_genre'] === '' || form['che_a_init_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_a_init_genre'] , 10 ) );
        form['che_init_est_mot_genre']=form['che_init_est_mot_genre'] === null || form['che_init_est_mot_genre'] === '' || form['che_init_est_mot_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_init_est_mot_genre'] , 10 ) );
        form['che_est_parmis_genre']=form['che_est_parmis_genre'] === null || form['che_est_parmis_genre'] === '' || form['che_est_parmis_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_parmis_genre'] , 10 ) );
        form['che_est_nur_genre']=form['che_est_nur_genre'] === null || form['che_est_nur_genre'] === '' || form['che_est_nur_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_nur_genre'] , 10 ) );
        form['che_est_tsm_genre']=form['che_est_tsm_genre'] === null || form['che_est_tsm_genre'] === '' || form['che_est_tsm_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_tsm_genre'] , 10 ) );
        form['che_est_tsc_genre']=form['che_est_tsc_genre'] === null || form['che_est_tsc_genre'] === '' || form['che_est_tsc_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_tsc_genre'] , 10 ) );
        form['che_est_session_genre']=form['che_est_session_genre'] === null || form['che_est_session_genre'] === '' || form['che_est_session_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_session_genre'] , 10 ) );
        form['che_est_positif_genre']=form['che_est_positif_genre'] === null || form['che_est_positif_genre'] === '' || form['che_est_positif_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_positif_genre'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_nom_genre'] === null || form['chp_nom_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "nom" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_ordre_genre'] === null || form['che_ordre_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "ordre" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_prefixe_genre'] === null || form['chp_prefixe_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "prefixe" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __test_2_1=this.__gi1.__fnt1.doit_contenir_n_caracteres( 3 , form['chp_prefixe_genre'] , 'prefixe' );
        if(__test_2_1[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur sur le contenu de  "prefixe" [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(form['chp_espece_genre'] === null || form['chp_espece_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "espece" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_primaire_genre'] === null || form['che_est_primaire_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est primaire" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_incrément_genre'] === null || form['che_est_incrément_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est incrément" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_obligatoire_genre'] === null || form['che_est_obligatoire_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est obligatoire" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_a_init_genre'] === null || form['che_a_init_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "a init" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_init_est_mot_genre'] === null || form['che_init_est_mot_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "init est mot" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_parmis_genre'] === null || form['che_est_parmis_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est parmis" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __test_13_1=this.__gi1.__fnt1.test_fonctions_de_c_fonctions1( form['cht_fonctions_genre'] , 'fonctions' );
        if(__test_13_1[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur sur le contenu de  "fonctions" [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(form['che_est_nur_genre'] === null || form['che_est_nur_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est nur" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_tsm_genre'] === null || form['che_est_tsm_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est tsm" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_tsc_genre'] === null || form['che_est_tsc_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est tsc" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_session_genre'] === null || form['che_est_session_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est session" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_est_positif_genre'] === null || form['che_est_positif_genre'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "est positif" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let __tac=await this.tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 );
        if(__tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                        "chp_nom_genre" : form['chp_nom_genre'] ,
                        "che_ordre_genre" : form['che_ordre_genre'] ,
                        "chp_prefixe_genre" : form['chp_prefixe_genre'] ,
                        "chp_espece_genre" : form['chp_espece_genre'] ,
                        "che_longueur_genre" : form['che_longueur_genre'] === '' ? ( null ) : ( form['che_longueur_genre'] ) ,
                        "che_est_primaire_genre" : form['che_est_primaire_genre'] ,
                        "che_est_incrément_genre" : form['che_est_incrément_genre'] ,
                        "che_est_obligatoire_genre" : form['che_est_obligatoire_genre'] ,
                        "che_a_init_genre" : form['che_a_init_genre'] ,
                        "che_init_est_mot_genre" : form['che_init_est_mot_genre'] ,
                        "cht_valeur_init_genre" : form['cht_valeur_init_genre'] === '' ? ( null ) : ( form['cht_valeur_init_genre'] ) ,
                        "che_est_parmis_genre" : form['che_est_parmis_genre'] ,
                        "cht_parmis_genre" : form['cht_parmis_genre'] === '' ? ( null ) : ( form['cht_parmis_genre'] ) ,
                        "cht_fonctions_genre" : form['cht_fonctions_genre'] === '' ? ( null ) : ( form['cht_fonctions_genre'] ) ,
                        "che_est_nur_genre" : form['che_est_nur_genre'] ,
                        "che_est_tsm_genre" : form['che_est_tsm_genre'] ,
                        "che_est_tsc_genre" : form['che_est_tsc_genre'] ,
                        "che_est_session_genre" : form['che_est_session_genre'] ,
                        "chp_nom_en_session_genre" : form['chp_nom_en_session_genre'] === '' ? ( null ) : ( form['chp_nom_en_session_genre'] ) ,
                        "che_est_positif_genre" : form['che_est_positif_genre'] ,
                        "cht_particularités_genre" : form['cht_particularités_genre'] === '' ? ( null ) : ( form['cht_particularités_genre'] )
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt329=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_genres`(
            `chp_nom_genre` , 
            `che_ordre_genre` , 
            `chp_prefixe_genre` , 
            `chp_espece_genre` , 
            `che_longueur_genre` , 
            `che_est_primaire_genre` , 
            `che_est_incrément_genre` , 
            `che_est_obligatoire_genre` , 
            `che_a_init_genre` , 
            `che_init_est_mot_genre` , 
            `cht_valeur_init_genre` , 
            `che_est_parmis_genre` , 
            `cht_parmis_genre` , 
            `cht_fonctions_genre` , 
            `che_est_nur_genre` , 
            `che_est_tsm_genre` , 
            `che_est_tsc_genre` , 
            `chd__dtc_genre` , 
            `chd__dtm_genre` , 
            `che_est_session_genre` , 
            `chp_nom_en_session_genre` , 
            `che_est_positif_genre` , 
            `cht_particularités_genre`
        ) VALUES (
            :chp_nom_genre , 
            :che_ordre_genre , 
            :chp_prefixe_genre , 
            :chp_espece_genre , 
            :che_longueur_genre , 
            :che_est_primaire_genre , 
            :che_est_incrément_genre , 
            :che_est_obligatoire_genre , 
            :che_a_init_genre , 
            :che_init_est_mot_genre , 
            :cht_valeur_init_genre , 
            :che_est_parmis_genre , 
            :cht_parmis_genre , 
            :cht_fonctions_genre , 
            :che_est_nur_genre , 
            :che_est_tsm_genre , 
            :che_est_tsc_genre , 
            :chd__dtc_genre , 
            :chd__dtm_genre , 
            :che_est_session_genre , 
            :chp_nom_en_session_genre , 
            :che_est_positif_genre , 
            :cht_particularités_genre
        );
        */
        /*sql_inclure_fin*/ 329 , donnees_sql , donnees_retournees , __db1 );
        if(tt329[__xst] === __xsu){
            if(tt329['changements'] === 0){
                this.__gi1.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let aac=await this.action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , tt329['nouvel_id'] , form , __db1 );
            if(aac[__xst] === __xer){
                await __db1.exec( 'ROLLBACK;' );
                this.__gi1.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            await __db1.exec( 'COMMIT;' );
            if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
            }else{
                await this.page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , tt329['nouvel_id'] , __db1 );
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( tt329['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
    */
    async page_creer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /*#
          page optionnelle si on veut vérifier quelque chose avant de créer un projet
          dans ce cas, dans le lien de la page, il faudra remplacer :
               m1[n1['+this.moi+'],f1[page_creer1[]]] ]
          par :
          pm1[ m1[n1['+this.moi+'],f1[page_creer1[]]] ]
        */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        donnees_retournees[__xva]['nouveau_numero_projet']=nouveau_numero_projet;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , __db1=null ){
        const __nbMax=40;
        let __num_page=0;
        let formulaire=this.__gi1.__fnt1.debut_filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__gi1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres328={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres328[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt328=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre`T0`.`chp_nom_genre` LIKE :T0_chp_nom_genre`T0`.`chp_prefixe_genre` LIKE :T0_chp_prefixe_genre`T0`.`chp_espece_genre` LIKE :T0_chp_espece_genre`T0`.`cht_valeur_init_genre` LIKE :T0_cht_valeur_init_genre`T0`.`cht_parmis_genre` LIKE :T0_cht_parmis_genre`T0`.`che_ordre_genre` = :T0_che_ordre_genre 
        ORDER BY `T0`.`che_ordre_genre` ASC, `T0`.`chi_id_genre` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 328 , criteres328 , donnees_retournees , __db1 );
        if(tt328.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt328[__xst] === __xsu && tt328[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres328['debut']=__debut;
            let tt328=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
            `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
            `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
            `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
            `T0`.`che__nur_genre` , `T0`.`che_est_session_genre` , `T0`.`chp_nom_en_session_genre` , `T0`.`che_est_positif_genre`
             FROM b1.tbl_genres T0
            WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre`T0`.`chp_nom_genre` LIKE :T0_chp_nom_genre`T0`.`chp_prefixe_genre` LIKE :T0_chp_prefixe_genre`T0`.`chp_espece_genre` LIKE :T0_chp_espece_genre`T0`.`cht_valeur_init_genre` LIKE :T0_cht_valeur_init_genre`T0`.`cht_parmis_genre` LIKE :T0_cht_parmis_genre`T0`.`che_ordre_genre` = :T0_che_ordre_genre 
            ORDER BY `T0`.`che_ordre_genre` ASC, `T0`.`chi_id_genre` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 328 , criteres328 , donnees_retournees , __db1 );
        }
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(';
        for(let i in formulaire){
            donnees_retournees[__xac]+=this.__gi1.__fnt1.critere_liste( formulaire , i );
        }
        donnees_retournees[__xac]+='))))';
        donnees_retournees[__xva][this.fonction_liste]=tt328;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        this.fonction_liste='liste1';
        await this.filtre1( mat , d , donnees_recues , donnees_retournees , options_generales );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        this.fonction_liste='sous_liste1';
        await this.filtre1( mat , d , donnees_recues , donnees_retournees , options_generales );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi='genres1';
    __gi1=null;
    fonction_liste='liste1';
    /*
      =============================================================================================================
    */
    constructor( __gi1 ){
        this.__gi1=__gi1;
    }
    /*
      =============================================================================================================
    */
}
export{genres1 as genres1};