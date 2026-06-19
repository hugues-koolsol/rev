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
class autorisations1{
    /*
      =============================================================================================================
    */
    async ecrire_fichier_des_autorisations_pour_un_acces( tableau_des_auto , chx_acces_autorisation , __db1 ){
        if(this.__ig1.donnees_retournees._CA_ > 2 && chx_acces_autorisation <= 2){
            /*
              l'utilisateur admin ( > 2 ) ne peut pas modifier les autorisations des accès < 2 ...
            */
            if(chx_acces_autorisation === 0){
                /*
                  ... sauf celui des anonymes
                */
            }else{
                return({"__xst" : __xsu});
            }
        }
        let tableau_des_auto_client={};
        for(let i in tableau_des_auto){
            if(i.substr( i.length - 4 ) === '_.js' || i.substr( i.length - 5 ) === '_c.js'){
                tableau_des_auto_client[i]=tableau_des_auto[i];
            }
        }
        let nom_du_fichier_client='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/___autorisations1_pour_acces_' + chx_acces_autorisation + '_client.json';
        try{
            this.__ig1.file_put_contents( nom_du_fichier_client , JSON.stringify( tableau_des_auto_client , null , 2 ) );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2( e ) + ']'});
        }
        let tableau_des_auto_serveur={};
        for(let i in tableau_des_auto){
            if(i.substr( i.length - 4 ) === '_.js' || i.substr( i.length - 5 ) === '_s.js'){
                tableau_des_auto_serveur[i]=tableau_des_auto[i];
            }
        }
        let nom_du_fichier_serveur='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/___autorisations1_pour_acces_' + chx_acces_autorisation + '_serveur.json';
        try{
            this.__ig1.file_put_contents( nom_du_fichier_serveur , JSON.stringify( tableau_des_auto_serveur , null , 2 ) );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2( e ) + ']'});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async gererer_les_autorisation_serveur( mat , d , __db1=null ){
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let criteres_select_1162={
             /* recherche des accès >1 */
            };
        let tt1162=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_acces`
         FROM b1.tbl_acces T0
        WHERE `T0`.`chi_id_acces` >= 1
        ;
        */
        /*sql_inclure_fin*/ 1162 , criteres_select_1162 , this.__ig1.donnees_retournees , __db1 );
        if(tt1162.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1162.__xme});
        }
        /* this.__ig1.ma_trace1("tt1162=",tt1162); // __xva: [ { "T0.chi_id_acces": 1 }, { "T0.chi_id_acces": 2 } ], */
        let criteres_select_1151={
             /* recherche des autorisations globales */
            };
        let tt1151=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chp_nom_source`
         FROM b1.tbl_sources T0
        WHERE `T0`.`che_autorisation_globale_source` = 1
        ;
        */
        /*sql_inclure_fin*/ 1151 , criteres_select_1151 , this.__ig1.donnees_retournees , __db1 );
        if(tt1151.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1151.__xme});
        }
        let autorisations_globales={
            "_connexion1_c.js" : {
                "id_autorisation" : 0 ,
                "autorisation_cote_client" : true ,
                "cht_condition_js_source" : null ,
                "cht_notification_ko_source" : null ,
                "che_pour_sous_liste_autorisation" : 0
            } ,
            "_connexion1_s.js" : {
                "id_autorisation" : 0 ,
                "autorisation_cote_client" : true ,
                "cht_condition_js_source" : null ,
                "cht_notification_ko_source" : null ,
                "che_pour_sous_liste_autorisation" : 0
            } ,
            "__ig1_c.js" : {
                "id_autorisation" : 0 ,
                "autorisation_cote_client" : true ,
                "cht_condition_js_source" : null ,
                "cht_notification_ko_source" : null ,
                "che_pour_sous_liste_autorisation" : 0
            } ,
            "__ig1_s.js" : {
                "id_autorisation" : 0 ,
                "autorisation_cote_client" : true ,
                "cht_condition_js_source" : null ,
                "cht_notification_ko_source" : null ,
                "che_pour_sous_liste_autorisation" : 0
            }
        };
        for(let k1 in tt1151.__xva){
            /* autorisations_globales[tt1151.__xva[k1]['T0.chp_nom_source'].substr( 0 , tt1151.__xva[k1]['T0.chp_nom_source'].length - 5 )]={"che_autorisation_globale_source" : true ,"id_autorisation" : 0 ,"autorisation_cote_client" : true}; */
            autorisations_globales[tt1151.__xva[k1]['T0.chp_nom_source']]={
                "id_autorisation" : /* "che_autorisation_globale_source" : true , */0 ,
                "autorisation_cote_client" : true ,
                "cht_condition_js_source" : /* "cht_condition_rev_source" : null , */null ,
                "cht_notification_ko_source" : null ,
                "che_pour_sous_liste_autorisation" : 0
            };
        }
        let criteres_select_1152={"T1_chp_nom_source" : /* on récupère les autorisations serveur */'%_s.js'};
        let tt1152=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_source` , 
        `T1`.`cht_condition_rev_source` , `T1`.`cht_condition_js_source` , `T1`.`cht_notification_ko_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chx_acces_autorisation` >= 1 
        ORDER BY `T0`.`chx_acces_autorisation` ASC
        ;
        */
        /*sql_inclure_fin*/ 1152 , criteres_select_1152 , this.__ig1.donnees_retournees , __db1 );
        if(tt1152.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1152.__xme});
        }
        /* this.__ig1.ma_trace1("tt1152=",tt1152); */
        let chx_acces_autorisation=0;
        let tableau_des_auto={};
        for(let k1 in tt1152.__xva){
            let v1=tt1152.__xva[k1];
            if(chx_acces_autorisation !== v1['T0.chx_acces_autorisation']){
                if(chx_acces_autorisation === 0){
                    /* tableau_des_auto[v1['T1.chp_nom_source'].substr( 0 , v1['T1.chp_nom_source'].length - 5 )]={"che_autorisation_globale_source" : false ,"id_autorisation" : v1['T0.chi_id_autorisation'] ,"autorisation_cote_client" : 0}; */
                    tableau_des_auto[v1['T1.chp_nom_source']]={
                         /*  */
                         /* "che_autorisation_globale_source" : false , */
                        "id_autorisation" : v1['T0.chi_id_autorisation'] ,
                        "autorisation_cote_client" : 0 ,
                         /* "cht_condition_rev_source" : v1['T1.cht_condition_rev_source'] , */
                        "cht_condition_js_source" : v1['T1.cht_condition_js_source'] ,
                        "cht_notification_ko_source" : v1['T1.cht_notification_ko_source'] ,
                        "che_pour_sous_liste_autorisation" : v1['T0.che_pour_sous_liste_autorisation']
                    };
                }else{
                    /* on concatène les autorisations générales et particulières array_merge , concat */
                    tableau_des_auto={ ...tableau_des_auto  , ...autorisations_globales };
                    let nom_du_fichier='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/___autorisations1_pour_acces_' + chx_acces_autorisation + '_.json';
                    let ret=await this.ecrire_fichier_des_autorisations_pour_un_acces( tableau_des_auto , chx_acces_autorisation , __db1 );
                    if(ret.__xst !== __xsu){
                        return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
                    }
                    for(let i in tt1162.__xva){
                        if(tt1162.__xva[i]['T0.chi_id_acces'] === chx_acces_autorisation){
                            /* marquer que l'accès est traité */
                            tt1162.__xva[i]['acces_ecrit']=true;
                            break;
                        }
                    }
                    tableau_des_auto={};
                    /* tableau_des_auto[v1['T1.chp_nom_source'].substr( 0 , v1['T1.chp_nom_source'].length - 5 )]={"che_autorisation_globale_source" : false ,"id_autorisation" : v1['T0.chi_id_autorisation'] ,"autorisation_cote_client" : 0}; */
                    tableau_des_auto[v1['T1.chp_nom_source']]={
                         /*  */
                         /* "che_autorisation_globale_source" : false , */
                        "id_autorisation" : v1['T0.chi_id_autorisation'] ,
                        "autorisation_cote_client" : 0 ,
                         /* "cht_condition_rev_source" : v1['T1.cht_condition_rev_source'] , */
                        "cht_condition_js_source" : v1['T1.cht_condition_js_source'] ,
                        "cht_notification_ko_source" : v1['T1.cht_notification_ko_source'] ,
                        "che_pour_sous_liste_autorisation" : v1['T0.che_pour_sous_liste_autorisation']
                    };
                }
                chx_acces_autorisation=v1['T0.chx_acces_autorisation'];
            }else{
                /* tableau_des_auto[v1['T1.chp_nom_source'].substr( 0 , v1['T1.chp_nom_source'].length - 5 )]={"che_autorisation_globale_source" : false ,"id_autorisation" : v1['T0.chi_id_autorisation'] ,"autorisation_cote_client" : 0}; */
                tableau_des_auto[v1['T1.chp_nom_source']]={
                     /*  */
                     /* "che_autorisation_globale_source" : false , */
                    "id_autorisation" : v1['T0.chi_id_autorisation'] ,
                    "autorisation_cote_client" : 0 ,
                     /* "cht_condition_rev_source" : v1['T1.cht_condition_rev_source'] , */
                    "cht_condition_js_source" : v1['T1.cht_condition_js_source'] ,
                    "cht_notification_ko_source" : v1['T1.cht_notification_ko_source'] ,
                    "che_pour_sous_liste_autorisation" : v1['T0.che_pour_sous_liste_autorisation']
                };
            }
        }
        if(chx_acces_autorisation >= 1){
            tableau_des_auto={ ...tableau_des_auto  , ...autorisations_globales };
            let nom_du_fichier='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/___autorisations1_pour_acces_' + chx_acces_autorisation + '_.json';
            let ret=await this.ecrire_fichier_des_autorisations_pour_un_acces( tableau_des_auto , chx_acces_autorisation , __db1 );
            if(ret.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
            }
            for(let i in tt1162.__xva){
                if(tt1162.__xva[i]['T0.chi_id_acces'] === chx_acces_autorisation){
                    /* marquer que l'accès est traité */
                    tt1162.__xva[i]['acces_ecrit']=true;
                    break;
                }
            }
        }
        /*
          Pour les accès non traités, on écrit les autorisations globales seulement 
        */
        for(let i in tt1162.__xva){
            if(!tt1162.__xva[i].hasOwnProperty( 'acces_ecrit' )){
                let nom_du_fichier='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/___autorisations1_pour_acces_' + tt1162.__xva[i]['T0.chi_id_acces'] + '_.json';
                let ret=await this.ecrire_fichier_des_autorisations_pour_un_acces( tableau_des_auto , tt1162.__xva[i]['T0.chi_id_acces'] , __db1 );
                if(ret.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
                }
                break;
            }
        }
        /*
          le fichier contenant la liste des modules qui ne requièrent pas d'autorisation:
          __ig1_s.js, _connexion1_s.js
        */
        let nom_du_fichier='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/___autorisations1_pour_acces_0_.json';
        let ret=await this.ecrire_fichier_des_autorisations_pour_un_acces( autorisations_globales , 0 , __db1 );
        if(ret.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        /*
          il faut raz les autorisations des utilisateurs en cours de connexion
        */
        let repertoire_des_sessions='';
        if(this.__ig1.donnees_retournees._CA_ === 1){
            if(this.__ig1.donnees_retournees.chi_id_projet === 1){
                repertoire_des_sessions='./__sessions/';
            }else if(this.__ig1.donnees_retournees.chi_id_projet >= 3){
                repertoire_des_sessions='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__sessions/';
            }
        }else if(this.__ig1.donnees_retournees._CA_ >= 3){
            repertoire_des_sessions='./__sessions/';
        }
        if(repertoire_des_sessions !== ''){
            for await (const dirEntry of Deno.readDir( repertoire_des_sessions )){
                if(dirEntry.isFile === true){
                    let chemin_de_fichier=repertoire_des_sessions + dirEntry.name;
                    const text_json=await Deno.readTextFile( chemin_de_fichier );
                    let le_json=JSON.parse( text_json );
                    le_json.__autorisations_serveur={};
                    Deno.writeTextFile( chemin_de_fichier , JSON.stringify( le_json ) );
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
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , form , __xva_avant , __db1 ){
        let obj=await this.gererer_les_autorisation_serveur( mat , d , __db1 );
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
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_apres_supprimer( mat , d , form , __xva_avant , __db1 ){
        let obj=await this.gererer_les_autorisation_serveur( mat , d , __db1 );
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
      =============================================================================================================
    */
    async action_apres_creer( mat , d , nouvel_id , form , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async action_apres_commit_creer( mat , d , nouvel_id , form , __db1 ){
        let obj=await this.gererer_les_autorisation_serveur( mat , d , __db1 );
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
        form['chi_id_autorisation']=form['chi_id_autorisation'] === null ? ( null ) : ( parseInt( form['chi_id_autorisation'] , 10 ) );
        if(isNaN( form['chi_id_autorisation'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "chi_id_autorisation" doit être numérique'});
        }
        form['chx_acces_autorisation']=form['chx_acces_autorisation'] === null ? ( null ) : ( parseInt( form['chx_acces_autorisation'] , 10 ) );
        if(isNaN( form['chx_acces_autorisation'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "acces" doit être numérique'});
        }
        form['chx_source_autorisation']=form['chx_source_autorisation'] === null ? ( null ) : ( parseInt( form['chx_source_autorisation'] , 10 ) );
        if(isNaN( form['chx_source_autorisation'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "source" doit être numérique'});
        }
        form['che_pour_sous_liste_autorisation']=form['che_pour_sous_liste_autorisation'] === null ?
          ( 
            null
          ) : ( 
            parseInt( form['che_pour_sous_liste_autorisation'] , 10 )
          );
        if(isNaN( form['che_pour_sous_liste_autorisation'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "pour sous liste" doit être numérique'});
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
        let criteres_select_1141={"T0_chi_id_autorisation" : form['chi_id_autorisation']};
        let tt1141=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
        ;
        */
        /*sql_inclure_fin*/ 1141 , criteres_select_1141 , this.__ig1.donnees_retournees , __db1 );
        if(tt1141.__xst !== __xsu || tt1141.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1141 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt1141[__xva][0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_1143={
             /*  */
            "c_chi_id_autorisation" : form['chi_id_autorisation'] ,
            "n_chx_acces_autorisation" : form['chx_acces_autorisation'] ,
            "n_chx_source_autorisation" : form['chx_source_autorisation'] ,
            "n_che_pour_sous_liste_autorisation" : form['che_pour_sous_liste_autorisation']
        };
        /* =========================== mise à jour effective ======================== */
        let tt1143=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_autorisations SET 
           `chx_acces_autorisation` = :n_chx_acces_autorisation , 
           `chx_source_autorisation` = :n_chx_source_autorisation , 
           `che_pour_sous_liste_autorisation` = :n_che_pour_sous_liste_autorisation
        WHERE `chi_id_autorisation` = :c_chi_id_autorisation ;
        */
        /*sql_inclure_fin*/ 1143 , criteres_1143 , this.__ig1.donnees_retournees , __db1 );
        if(tt1143.__xst !== __xsu || tt1143.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1143.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt1141[__xva][0] , __db1 );
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
        let tt1141_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
        ;
        */
        /*sql_inclure_fin*/ 1141 , criteres_select_1141 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1141_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_autorisation=null , __db1=null ){
        if(chi_id_autorisation === null){
            const l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_autorisation'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_autorisation=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_autorisation(' + chi_id_autorisation + ')))))';
        }
        if(chi_id_autorisation === null){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1141=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
        ;
        */
        /*sql_inclure_fin*/ 1141 , {"T0_chi_id_autorisation" : chi_id_autorisation} , this.__ig1.donnees_retournees , __db1 );
        if(tt1141.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1141.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt1141[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1141;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_autorisation=null ){
        if(chi_id_autorisation === null){
            const l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_autorisation'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_autorisation=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1141={
             /*  */
            "T0_chi_id_autorisation" : chi_id_autorisation
        };
        let tt1141=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
        ;
        */
        /*sql_inclure_fin*/ 1141 , criteres_1141 , this.__ig1.donnees_retournees , __db1 );
        if(tt1141.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1141.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt1141;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_autorisation=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_autorisation'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_autorisation=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_autorisation === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1141={"T0_chi_id_autorisation" : chi_id_autorisation};
        let tt1141=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
        ;
        */
        /*sql_inclure_fin*/ 1141 , critere_1141 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_voir1']=tt1141;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1141={
             /*  */
            "T0_chi_id_autorisation" : form['chi_id_autorisation']
        };
        let tt1141=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
        ;
        */
        /*sql_inclure_fin*/ 1141 , criteres_1141 , this.__ig1.donnees_retournees , __db1 );
        if(tt1141.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1141.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt1141[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_1144={
             /*  */
            "chi_id_autorisation" : form['chi_id_autorisation']
        };
        let tt1144=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_autorisations
        WHERE `chi_id_autorisation` = :chi_id_autorisation ;
        */
        /*sql_inclure_fin*/ 1144 , criteres_1144 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt1144.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1144.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , form , tt1141[__xva][0] , __db1 );
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
        let chi_id_autorisation=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_autorisation'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_autorisation=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_autorisation === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1141={"T0_chi_id_autorisation" : chi_id_autorisation};
        let tt1141=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
        ;
        */
        /*sql_inclure_fin*/ 1141 , critere_1141 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt1141;
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
        form['chx_acces_autorisation']=form['chx_acces_autorisation'] === null || form['chx_acces_autorisation'] === '' || form['chx_acces_autorisation'] === undefined ? ( null ) : ( parseInt( form['chx_acces_autorisation'] , 10 ) );
        form['chx_source_autorisation']=form['chx_source_autorisation'] === null || form['chx_source_autorisation'] === '' || form['chx_source_autorisation'] === undefined ? ( null ) : ( parseInt( form['chx_source_autorisation'] , 10 ) );
        form['che_pour_sous_liste_autorisation']=form['che_pour_sous_liste_autorisation'] === null || form['che_pour_sous_liste_autorisation'] === '' || form['che_pour_sous_liste_autorisation'] === undefined ?
          ( 
            0
          ) : ( 
            parseInt( form['che_pour_sous_liste_autorisation'] , 10 )
          );
        /* conversion des données numériques insert serveur fin */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_1142={
            "donnees" : [{
                        "chx_acces_autorisation" : form['chx_acces_autorisation'] ,
                        "chx_source_autorisation" : form['chx_source_autorisation'] ,
                        "che_pour_sous_liste_autorisation" : form['che_pour_sous_liste_autorisation']
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt1142=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_autorisations`(
            `chx_acces_autorisation` , 
            `chx_source_autorisation` , 
            `che_pour_sous_liste_autorisation`
        ) VALUES (
            :chx_acces_autorisation , 
            :chx_source_autorisation , 
            :che_pour_sous_liste_autorisation
        );
        */
        /*sql_inclure_fin*/ 1142 , criteres_1142 , this.__ig1.donnees_retournees , __db1 );
        if(tt1142.__xst !== __xsu || tt1142['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1142.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let __aapc=await this.action_apres_creer( mat , d , tt1142['nouvel_id'] , form , __db1 );
        if(__aapc.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aapc.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        let aacc=await this.action_apres_commit_creer( mat , d , tt1142['nouvel_id'] , form , __db1 );
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt1142['nouvel_id'] , __db1 );
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
        let criteres_1140={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_1140[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_1140[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        criteres_1140['acces_pas_dans']='(-1)';
        if(this.__ig1.donnees_retournees._CA_ > 2 && this.__ig1.donnees_retournees.chi_id_utilisateur > 1){
            criteres_1140['acces_pas_dans']='(1,2)';
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1140=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_acces` , `T2`.`chp_nom_source` , 
        `T0`.`chi_id_autorisation`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE (`T2`.`chp_nom_source` LIKE :T2_chp_nom_source
           AND `T0`.`chx_acces_autorisation` = :T0_chx_acces_autorisation
           AND `T0`.`chx_source_autorisation` = :T0_chx_source_autorisation
           AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
           AND `T0`.`che_pour_sous_liste_autorisation` = :T0_che_pour_sous_liste_autorisation
           AND `T0`.`chx_acces_autorisation` NOT IN :acces_pas_dans
           AND `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation) 
        ORDER BY `T0`.`chx_acces_autorisation` DESC, `T2`.`chp_nom_source` ASC, `T0`.`chi_id_autorisation` DESC, `T2`.`chp_nom_source` ASC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 1140 , criteres_1140 , this.__ig1.donnees_retournees , __db1 );
        if(tt1140.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1140.__xme});
        }
        if(tt1140.__xst === __xsu && tt1140.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_1140['debut']=__debut;
            tt1140=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_acces` , `T2`.`chp_nom_source` , 
            `T0`.`chi_id_autorisation`
             FROM b1.tbl_autorisations T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
            
            WHERE (`T2`.`chp_nom_source` LIKE :T2_chp_nom_source
               AND `T0`.`chx_acces_autorisation` = :T0_chx_acces_autorisation
               AND `T0`.`chx_source_autorisation` = :T0_chx_source_autorisation
               AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
               AND `T0`.`che_pour_sous_liste_autorisation` = :T0_che_pour_sous_liste_autorisation
               AND `T0`.`chx_acces_autorisation` NOT IN :acces_pas_dans
               AND `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation) 
            ORDER BY `T0`.`chx_acces_autorisation` DESC, `T2`.`chp_nom_source` ASC, `T0`.`chi_id_autorisation` DESC, `T2`.`chp_nom_source` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 1140 , criteres_1140 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(liste1(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva]['liste1']=tt1140;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste2( mat , d ){
        const __nbMax=40;
        let criteres_1140={};
        criteres_1140['quantitee']=__nbMax;
        /* on peut éventuellement ajouter des criteres ici, voir par exemple metiers1_s.js */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let liste2=await this.__ig1.generique_sous_liste2( mat , d , 1140 , criteres_1140 , __nbMax , __db1 );
        if(liste2.__xst === __xsu){
            /* faire éventuellement quelque chose ici avec les éléments contenus dans this.__ig1.donnees_retournees.__xva.sous_liste2.__xva */
            /* voir par exemple dossiers1_s.js */
        }
        return liste2;
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
    moi='autorisations1';
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
export{autorisations1 as autorisations1};