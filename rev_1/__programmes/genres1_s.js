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
      =========================== fragment ========================================================================
    */
    async integrer_ce_genre_dans_un_autre_projet( mat , d ){
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1330={"T0_chi_id_genre" : chi_id_genre};
        let tt1330=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 1330 , criteres_select_1330 , this.__ig1.donnees_retournees , __db1 );
        if(tt1330.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [' + this.__ig1.nl2()});
        }
        let donnees_sql={
            "donnees" : [{
                         /*  */
                        "chi_id_genre" : chi_id_genre ,
                        "chp_nom_genre" : tt1330[__xva][0]['T0.chp_nom_genre'] ,
                        "che_ordre_genre" : tt1330[__xva][0]['T0.che_ordre_genre'] ,
                        "chp_prefixe_genre" : tt1330[__xva][0]['T0.chp_prefixe_genre'] ,
                        "chp_espece_genre" : tt1330[__xva][0]['T0.chp_espece_genre'] ,
                        "che_longueur_genre" : tt1330[__xva][0]['T0.che_longueur_genre'] ,
                        "che_est_primaire_genre" : tt1330[__xva][0]['T0.che_est_primaire_genre'] ,
                        "che_est_incrément_genre" : tt1330[__xva][0]['T0.che_est_incrément_genre'] ,
                        "che_est_obligatoire_genre" : tt1330[__xva][0]['T0.che_est_obligatoire_genre'] ,
                        "che_a_init_genre" : tt1330[__xva][0]['T0.che_a_init_genre'] ,
                        "che_init_est_mot_genre" : tt1330[__xva][0]['T0.che_init_est_mot_genre'] ,
                        "cht_valeur_init_genre" : tt1330[__xva][0]['T0.cht_valeur_init_genre'] ,
                        "che_est_parmis_genre" : tt1330[__xva][0]['T0.che_est_parmis_genre'] ,
                        "cht_parmis_genre" : tt1330[__xva][0]['T0.cht_parmis_genre'] ,
                        "cht_fonctions_genre" : tt1330[__xva][0]['T0.cht_fonctions_genre'] ,
                        "che_est_nur_genre" : tt1330[__xva][0]['T0.che_est_nur_genre'] ,
                        "che_est_tsm_genre" : tt1330[__xva][0]['T0.che_est_tsm_genre'] ,
                        "che_est_tsc_genre" : tt1330[__xva][0]['T0.che_est_tsc_genre'] ,
                        "che_est_positif_genre" : tt1330[__xva][0]['T0.che_est_positif_genre'] ,
                        "cht_particularités_genre" : tt1330[__xva][0]['T0.cht_particularités_genre'] ,
                        "chd__dtc_genre" : this.__ig1.donnees_retournees.date_heure_serveur ,
                        "chd__dtm_genre" : this.__ig1.donnees_retournees.date_heure_serveur
                    }]
        };
        let __db_autre=await this.__ig1.ouvrir_bdd( chi_id_projet , this.__ig1.donnees_retournees , this.__ig1.options_generales );
        let tt1345=await this.__ig1.sql_iii(
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
            :che_est_positif_genre , 
            :cht_particularités_genre
        );
        */
        /*sql_inclure_fin*/ 1345 , donnees_sql , this.__ig1.donnees_retournees , __db_autre );
        if(tt1345.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1345.__xme});
        }
        await __db_autre.close();
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async page_integrer_ce_genre_dans_un_autre_projet( mat , d ){
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1316={"T0_chi_id_projet" : 3};
        let tt1316=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
         FROM b1.tbl_projets T0
        WHERE `T0`.`chi_id_projet` >= :T0_chi_id_projet
        ;
        */
        /*sql_inclure_fin*/ 1316 , criteres_select_1316 , this.__ig1.donnees_retournees , __db1 );
        if(tt1316.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1316.__xme});
        }
        this.__ig1.donnees_retournees[__xva]=tt1316[__xva];
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async vv_genres_nouveau_numero1( mat , d ){
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][this.__ig1.donnees_recues[__xva]['__co1']];
        let chi_id_genre_ancienne=0;
        let chi_id_genre_nouvelle=0;
        if(form.hasOwnProperty( 'vv_nouveau_numero_de_genre' ) && this.__ig1.est_num( form['vv_nouveau_numero_de_genre'] )){
            chi_id_genre_nouvelle=parseInt( form['vv_nouveau_numero_de_genre'] , 10 );
        }else{
            return({"__xst" : __xer ,"__xme" : ' [' + this.__ig1.nl2() + ']'});
        }
        if(form.hasOwnProperty( 'vv_ancien_numero_de_genre' ) && this.__ig1.est_num( form['vv_ancien_numero_de_genre'] )){
            chi_id_genre_ancienne=parseInt( form['vv_ancien_numero_de_genre'] , 10 );
        }else{
            return({"__xst" : __xer ,"__xme" : ' [' + this.__ig1.nl2() + ']'});
        }
        if(chi_id_genre_ancienne === chi_id_genre_nouvelle){
            return({"__xst" : __xer ,"__xme" : 'le nouveau numéro doit être différent de l\'ancien [' + this.__ig1.nl2() + ']'});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1330={"T0_chi_id_genre" : chi_id_genre_ancienne};
        let tt1330=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 1330 , criteres_select_1330 , this.__ig1.donnees_retournees , __db1 );
        if(tt1330.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1330.__xme});
        }
        let criteres_select_1330_2={"T0_chi_id_genre" : chi_id_genre_nouvelle};
        let tt1330_2=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 1330 , criteres_select_1330_2 , this.__ig1.donnees_retournees , __db1 );
        if(tt1330_2.__xst !== __xsu){
            this.__ig1.donnees_retournees.__xsi[__xer].push( ' [' + this.__ig1.nl2() );
            return({"__xst" : __xer ,"__xme" : tt1330_2.__xme});
        }
        if(tt1330_2[__xva].length === 1){
            return({"__xst" : __xer ,"__xme" : 'le genre ' + chi_id_genre_nouvelle + ' existe déjà [' + this.__ig1.nl2() + ']'});
        }
        let obj=await this.verifier_que_le_genre_n_est_pas_utilise_dans_la_base( mat , d , chi_id_genre_ancienne , __db1 );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'le genre est utilisé dans une base [' + this.__ig1.nl2() + ']'});
        }
        if(chi_id_genre_nouvelle < 100
               && this.__ig1.donnees_retournees._CA_ === 1
               && this.__ig1.donnees_retournees.chi_id_utilisateur !== 1
        ){
            if(!(this.__ig1.donnees_retournees.chi_id_projet === 1 && this.__ig1.donnees_retournees.chi_id_utilisateur === 1)){
                return({"__xst" : __xer ,"__xme" : 'seul l\'utilisateur principale peut renuméroter un genre à moins de 100 [' + this.__ig1.nl2() + ']'});
            }
        }
        let criteres_1334={"n_chi_id_genre" : chi_id_genre_nouvelle ,"c_chi_id_genre" : chi_id_genre_ancienne};
        let tt1334=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_genres SET 
           `chi_id_genre` = :n_chi_id_genre
        WHERE `chi_id_genre` = :c_chi_id_genre ;
        */
        /*sql_inclure_fin*/ 1334 , criteres_1334 , this.__ig1.donnees_retournees , __db1 );
        if(tt1334.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1334.__xme});
        }
        if(chi_id_genre_nouvelle < 100
               && this.__ig1.donnees_retournees._CA_ === 1
               && this.__ig1.donnees_retournees.chi_id_projet === 1
        ){
            this.__ig1.donnees_retournees.__xsi[__xdv].push( 'afr il faut aller créer ce genre dans les autres projets [' + this.__ig1.nl2() );
        }
        await this.mettre_a_jour_le_js_des_genres( mat , d , __db1 );
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async mettre_a_jour_le_js_des_genres( mat , d , __db1 ){
        /*
          on récupère tous les genres
        */
        let criteres_select_1333={};
        let tt1333=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
        `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
        `T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_ordre_genre` , `T0`.`che_est_tsc_genre` , 
        `T0`.`cht_fonctions_genre` , `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0 ORDER BY  `T0`.`che_ordre_genre` ASC, `T0`.`chp_nom_genre` ASC
        ;
        */
        /*sql_inclure_fin*/ 1333 , criteres_select_1333 , this.__ig1.donnees_retournees , __db1 );
        if(tt1333.__xst !== __xsu){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'enregistrements non trouvés [' + this.__ig1.nl2() );
            return({"__xst" : __xer ,"__xme" : tt1333.__xme});
        }
        let __liste_des_genres={};
        let nombre_de_genres=0;
        for(let k1 in tt1333[__xva]){
            let v1=tt1333[__xva][k1];
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
                "che_est_positif_genre" : v1['T0.che_est_positif_genre'] ,
                "cht_particularités_genre" : v1['T0.cht_particularités_genre']
            };
            nombre_de_genres++;
        }
        if(nombre_de_genres > 0){
            let chemin_fichier__liste_des_genres='';
            if(this.__ig1.donnees_retournees._CA_ === 2){
                chemin_fichier__liste_des_genres='../rev_2/__fichiers_generes/__liste_des_genres.json';
            }else{
                chemin_fichier__liste_des_genres='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/__liste_des_genres.json';
            }
            /* this.__ig1.ma_trace1( '__liste_des_genres=',__liste_des_genres); */
            let contenu_fichier__liste_des_genres='' + JSON.stringify( __liste_des_genres , null , 2 ) + '';
            try{
                await this.__ig1.file_put_contents( chemin_fichier__liste_des_genres , contenu_fichier__liste_des_genres );
            }catch{
                return({"__xst" : __xer ,"__xme" : 'erreur d\'écriture du fichier js des genres [' + this.__ig1.nl2( e ) + ']'});
            }
        }
        this.__ig1.donnees_retournees[__xva]['__liste_des_genres']=__liste_des_genres;
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async enregister_l_ordre_des_genres( mat , d ){
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        for(let k1 in this.__ig1.donnees_recues[__xva]['tableau_des_ordre']){
            let v1=this.__ig1.donnees_recues[__xva]['tableau_des_ordre'][k1];
            let criteres_select_1335={"c_chi_id_genre" : v1[0] ,"n_che_ordre_genre" : v1[1]};
            let tt1335=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_genres SET 
               `che_ordre_genre` = :n_che_ordre_genre
            WHERE `chi_id_genre` = :c_chi_id_genre ;
            */
            /*sql_inclure_fin*/ 1335 , criteres_select_1335 , this.__ig1.donnees_retournees , __db1 );
            if(tt1335.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt1335.__xme});
            }
        }
        let obj=await this.mettre_a_jour_le_js_des_genres( mat , d , __db1 );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : obj.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async recuperer_les_genres_pour_tri( mat , d ){
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1333={};
        let tt1333=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
        `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
        `T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_ordre_genre` , `T0`.`che_est_tsc_genre` , 
        `T0`.`cht_fonctions_genre` , `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0 ORDER BY  `T0`.`che_ordre_genre` ASC, `T0`.`chp_nom_genre` ASC
        ;
        */
        /*sql_inclure_fin*/ 1333 , criteres_select_1333 , this.__ig1.donnees_retournees , __db1 );
        if(tt1333.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1333.__xme});
        }
        this.__ig1.donnees_retournees[__xva]=tt1333[__xva];
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async verifier_que_le_genre_n_est_pas_utilise_dans_la_base( mat , d , chi_id_genre , __db1 ){
        let criteres_select_1302={};
        let tt1302=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        ;
        */
        /*sql_inclure_fin*/ 1302 , criteres_select_1302 , this.__ig1.donnees_retournees , __db1 );
        if(tt1302.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1302.__xme});
        }
        for(let k1 in tt1302[__xva]){
            let v1=tt1302[__xva][k1];
            let obj_matrice=this.__ig1.__rev1.rev_tm( v1['T0.chp_rev_travail_basedd'] );
            if(obj_matrice.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : ' [' + this.__ig1.nl2() + ']'});
            }
            let mat=obj_matrice[__xva];
            let l01=mat.length;
            for( let i=1 ; i < l01 ; i++ ){
                if(mat[i][2] === 'f' && mat[i][8] === 1 && mat[i][1] === 'genre'){
                    if(parseInt( mat[i + 1][1] , 10 ) === chi_id_genre){
                        return({
                                "__xst" : __xer ,
                                "__xme" : 'le numéro actuel est encore utilisé dans la base "' + v1['T0.chi_id_basedd'] + '" [' + this.__ig1.nl2() + ']'
                            });
                    }
                }
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , form , __xva_avant , __db1 ){
        let obj=await this.mettre_a_jour_le_js_des_genres( mat , d , __db1 );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : obj.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_avant_modifier( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async test_avant_supprimer( mat , d , form , __xva_avant , __db1 ){
        let obj=await this.verifier_que_le_genre_n_est_pas_utilise_dans_la_base( mat , d , form['chi_id_genre'] , __db1 );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : obj.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async actions_apres_supprimer( mat , d , form , __xva_avant , __db1 ){
        let obj=await this.mettre_a_jour_le_js_des_genres( mat , d , __db1 );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : obj.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_avant_creer( mat , d , form , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async action_apres_creer( mat , d , nouvel_id , form , __db1 ){
        let obj=await this.mettre_a_jour_le_js_des_genres( mat , d , __db1 );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : obj.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async modifier1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /*
          conversion des données numériques update serveur début
          =====================================================================================================
        */
        form['chi_id_genre']=form['chi_id_genre'] === null ? ( null ) : ( parseInt( form['chi_id_genre'] , 10 ) );
        if(isNaN( form['chi_id_genre'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "chi_id_genre" doit être numérique'});
        }
        form['che_ordre_genre']=form['che_ordre_genre'] === null ? ( null ) : ( parseInt( form['che_ordre_genre'] , 10 ) );
        if(isNaN( form['che_ordre_genre'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "ordre" doit être numérique'});
        }
        form['che_est_primaire_genre']=form['che_est_primaire_genre'] === null ? ( null ) : ( parseInt( form['che_est_primaire_genre'] , 10 ) );
        if(isNaN( form['che_est_primaire_genre'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est primaire" doit être numérique'});
        }
        form['che_est_incrément_genre']=form['che_est_incrément_genre'] === null ? ( null ) : ( parseInt( form['che_est_incrément_genre'] , 10 ) );
        if(isNaN( form['che_est_incrément_genre'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est incrément" doit être numérique'});
        }
        form['che_est_obligatoire_genre']=form['che_est_obligatoire_genre'] === null ? ( null ) : ( parseInt( form['che_est_obligatoire_genre'] , 10 ) );
        if(isNaN( form['che_est_obligatoire_genre'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est obligatoire" doit être numérique'});
        }
        form['che_a_init_genre']=form['che_a_init_genre'] === null ? ( null ) : ( parseInt( form['che_a_init_genre'] , 10 ) );
        if(isNaN( form['che_a_init_genre'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "a init" doit être numérique'});
        }
        form['che_init_est_mot_genre']=form['che_init_est_mot_genre'] === null ? ( null ) : ( parseInt( form['che_init_est_mot_genre'] , 10 ) );
        if(isNaN( form['che_init_est_mot_genre'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "init est mot" doit être numérique'});
        }
        form['che_est_parmis_genre']=form['che_est_parmis_genre'] === null ? ( null ) : ( parseInt( form['che_est_parmis_genre'] , 10 ) );
        if(isNaN( form['che_est_parmis_genre'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est parmis" doit être numérique'});
        }
        form['che_est_nur_genre']=form['che_est_nur_genre'] === null ? ( null ) : ( parseInt( form['che_est_nur_genre'] , 10 ) );
        if(isNaN( form['che_est_nur_genre'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est nur" doit être numérique'});
        }
        form['che_est_tsm_genre']=form['che_est_tsm_genre'] === null ? ( null ) : ( parseInt( form['che_est_tsm_genre'] , 10 ) );
        if(isNaN( form['che_est_tsm_genre'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est tsm" doit être numérique'});
        }
        form['che_est_tsc_genre']=form['che_est_tsc_genre'] === null ? ( null ) : ( parseInt( form['che_est_tsc_genre'] , 10 ) );
        if(isNaN( form['che_est_tsc_genre'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est tsc" doit être numérique'});
        }
        form['che_est_positif_genre']=form['che_est_positif_genre'] === null ? ( null ) : ( parseInt( form['che_est_positif_genre'] , 10 ) );
        if(isNaN( form['che_est_positif_genre'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est positif" doit être numérique'});
        }
        /*
          =====================================================================================================
          conversion des données numériques update serveur fin
        */
        let retour_a_la_liste=false;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        /* sélection du champ à modifier */
        let criteres_select_1330={"T0_chi_id_genre" : form['chi_id_genre']};
        let tt1330=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 1330 , criteres_select_1330 , this.__ig1.donnees_retournees , __db1 );
        if(tt1330.__xst !== __xsu || tt1330.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1330 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt1330[__xva][0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_1331={
             /*  */
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
            "n_che_est_positif_genre" : form['che_est_positif_genre'] ,
            "n_cht_particularités_genre" : form['cht_particularités_genre'] === '' ? ( null ) : ( form['cht_particularités_genre'] )
        };
        /* =========================== mise à jour effective ======================== */
        let tt1331=await this.__ig1.sql_iii(
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
           `che_est_positif_genre` = :n_che_est_positif_genre , 
           `cht_particularités_genre` = :n_cht_particularités_genre
        WHERE `chi_id_genre` = :c_chi_id_genre ;
        */
        /*sql_inclure_fin*/ 1331 , criteres_1331 , this.__ig1.donnees_retournees , __db1 );
        if(tt1331.__xst !== __xsu || tt1331.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1331.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt1330[__xva][0] , __db1 );
        if(__taam.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __taam.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true){
            if(form['__mat_liste_si_ok']){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , __db1 );
            }
            return({"__xst" : __xsu});
        }
        let tt1330_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 1330 , criteres_select_1330 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1330_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_genre=null , __db1=null ){
        if(chi_id_genre === null){
            const l01=mat.length;
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
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_genre(' + chi_id_genre + ')))))';
        }
        if(chi_id_genre === null){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1330=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 1330 , {"T0_chi_id_genre" : chi_id_genre} , this.__ig1.donnees_retournees , __db1 );
        if(tt1330.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1330.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt1330[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1330;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_genre=null ){
        if(chi_id_genre === null){
            const l01=mat.length;
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
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1330={
             /*  */
            "T0_chi_id_genre" : chi_id_genre
        };
        let tt1330=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 1330 , criteres_1330 , this.__ig1.donnees_retournees , __db1 );
        if(tt1330.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1330.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt1330;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_genre=0;
        const l01=mat.length;
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1330={"T0_chi_id_genre" : chi_id_genre};
        let tt1330=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 1330 , critere_1330 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_voir1']=tt1330;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(1)) */
        if(form['chi_id_genre'] <= 1){
            return({"__xst" : __xer ,"__xme" : 'il n\'est pas possible de supprimer cet élément [' + this.__ig1.nl2() + ']'});
        }
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1330={
             /*  */
            "T0_chi_id_genre" : form['chi_id_genre']
        };
        let tt1330=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 1330 , criteres_1330 , this.__ig1.donnees_retournees , __db1 );
        if(tt1330.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1330.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt1330[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_1332={
             /*  */
            "chi_id_genre" : form['chi_id_genre']
        };
        let tt1332=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_genres
        WHERE `chi_id_genre` = :chi_id_genre ;
        */
        /*sql_inclure_fin*/ 1332 , criteres_1332 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt1332.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1332.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , form , tt1330[__xva][0] , __db1 );
        if(__aavc.__xst === __xer){
            return({"__xst" : __xer ,"__xme" : __aavc.__xme});
        }
        /*  */
        if(form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d ){
        let chi_id_genre=0;
        const l01=mat.length;
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1330={"T0_chi_id_genre" : chi_id_genre};
        let tt1330=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
        ;
        */
        /*sql_inclure_fin*/ 1330 , critere_1330 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt1330;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer1( mat , d ){
        let retour_a_la_liste=false;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* conversion des données numériques insert serveur début */
        form['che_ordre_genre']=form['che_ordre_genre'] === null || form['che_ordre_genre'] === '' || form['che_ordre_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_ordre_genre'] , 10 ) );
        form['che_est_primaire_genre']=form['che_est_primaire_genre'] === null || form['che_est_primaire_genre'] === '' || form['che_est_primaire_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_primaire_genre'] , 10 ) );
        form['che_est_incrément_genre']=form['che_est_incrément_genre'] === null || form['che_est_incrément_genre'] === '' || form['che_est_incrément_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_incrément_genre'] , 10 ) );
        form['che_est_obligatoire_genre']=form['che_est_obligatoire_genre'] === null || form['che_est_obligatoire_genre'] === '' || form['che_est_obligatoire_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_obligatoire_genre'] , 10 ) );
        form['che_a_init_genre']=form['che_a_init_genre'] === null || form['che_a_init_genre'] === '' || form['che_a_init_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_a_init_genre'] , 10 ) );
        form['che_init_est_mot_genre']=form['che_init_est_mot_genre'] === null || form['che_init_est_mot_genre'] === '' || form['che_init_est_mot_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_init_est_mot_genre'] , 10 ) );
        form['che_est_parmis_genre']=form['che_est_parmis_genre'] === null || form['che_est_parmis_genre'] === '' || form['che_est_parmis_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_parmis_genre'] , 10 ) );
        form['che_est_nur_genre']=form['che_est_nur_genre'] === null || form['che_est_nur_genre'] === '' || form['che_est_nur_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_nur_genre'] , 10 ) );
        form['che_est_tsm_genre']=form['che_est_tsm_genre'] === null || form['che_est_tsm_genre'] === '' || form['che_est_tsm_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_tsm_genre'] , 10 ) );
        form['che_est_tsc_genre']=form['che_est_tsc_genre'] === null || form['che_est_tsc_genre'] === '' || form['che_est_tsc_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_tsc_genre'] , 10 ) );
        form['che_est_positif_genre']=form['che_est_positif_genre'] === null || form['che_est_positif_genre'] === '' || form['che_est_positif_genre'] === undefined ? ( 0 ) : ( parseInt( form['che_est_positif_genre'] , 10 ) );
        /* conversion des données numériques insert serveur fin */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_1329={
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
                        "che_est_positif_genre" : form['che_est_positif_genre'] ,
                        "cht_particularités_genre" : form['cht_particularités_genre'] === '' ? ( null ) : ( form['cht_particularités_genre'] )
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt1329=await this.__ig1.sql_iii(
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
            :che_est_positif_genre , 
            :cht_particularités_genre
        );
        */
        /*sql_inclure_fin*/ 1329 , criteres_1329 , this.__ig1.donnees_retournees , __db1 );
        if(tt1329.__xst !== __xsu || tt1329['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1329.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let __aapc=await this.action_apres_creer( mat , d , tt1329['nouvel_id'] , form , __db1 );
        if(__aapc.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aapc.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt1329['nouvel_id'] , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_creer1( mat , d ){
        /*#
          page optionnelle si on veut vérifier quelque chose avant de créer un projet
          dans ce cas, dans le lien de la page, il faudra remplacer :
               m1(n1('+this.moi+'),f1(page_creer1()))
          par :
          pm1( m1(n1('+this.moi+'),f1(page_creer1())) )
        */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        this.__ig1.donnees_retournees[__xva]['nouveau_numero_projet']=nouveau_numero_projet;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , __db1=null ){
        const l01=mat.length;
        let option_de_13='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'de_13' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                option_de_13='de_13(' + mat[i + 1][1] + ')';
            }
        }
        const __nbMax=40;
        let __num_page=0;
        const formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , 'liste1' );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__ig1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres_1328={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_1328[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_1328[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1328=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
        `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
        `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
        `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
        `T0`.`che__nur_genre` , `T0`.`che_est_positif_genre`
         FROM b1.tbl_genres T0
        WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre`T0`.`chp_nom_genre` LIKE :T0_chp_nom_genre`T0`.`chp_prefixe_genre` LIKE :T0_chp_prefixe_genre`T0`.`chp_espece_genre` LIKE :T0_chp_espece_genre`T0`.`cht_valeur_init_genre` LIKE :T0_cht_valeur_init_genre`T0`.`cht_parmis_genre` LIKE :T0_cht_parmis_genre`T0`.`che_ordre_genre` = :T0_che_ordre_genre 
        ORDER BY `T0`.`che_ordre_genre` ASC, `T0`.`chi_id_genre` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 1328 , criteres_1328 , this.__ig1.donnees_retournees , __db1 );
        if(tt1328.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1328.__xme});
        }
        if(tt1328.__xst === __xsu && tt1328.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_1328['debut']=__debut;
            tt1328=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
            `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
            `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
            `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
            `T0`.`che__nur_genre` , `T0`.`che_est_positif_genre`
             FROM b1.tbl_genres T0
            WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre`T0`.`chp_nom_genre` LIKE :T0_chp_nom_genre`T0`.`chp_prefixe_genre` LIKE :T0_chp_prefixe_genre`T0`.`chp_espece_genre` LIKE :T0_chp_espece_genre`T0`.`cht_valeur_init_genre` LIKE :T0_cht_valeur_init_genre`T0`.`cht_parmis_genre` LIKE :T0_cht_parmis_genre`T0`.`che_ordre_genre` = :T0_che_ordre_genre 
            ORDER BY `T0`.`che_ordre_genre` ASC, `T0`.`chi_id_genre` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 1328 , criteres_1328 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(liste1(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva]['liste1']=tt1328;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d ){
        return(await this.filtre1( mat , d ));
    }
    /*
      =============================================================================================================
    */
    moi='genres1';
    __ig1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
}
export{genres1 as genres1};