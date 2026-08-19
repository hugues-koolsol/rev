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
class sources1{
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
    async actions_et_tests_apres_page_voir( mat , d , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async modifier1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues.__xva['__co1'];
        let form=this.__ig1.donnees_recues.__xva['__fo1'][nom_formulaire];
        /*  */
        /*
          conversion des données numériques update serveur début
          =====================================================================================================
        */
        form.chi_id_source=form.chi_id_source === null ? ( null ) : ( parseInt( form.chi_id_source , 10 ) );
        if(isNaN( form.chi_id_source )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "chi_id_source" doit être numérique'});
        }
        form.che_est_fragment_source=form.che_est_fragment_source === null ? ( null ) : ( parseInt( form.che_est_fragment_source , 10 ) );
        if(isNaN( form.che_est_fragment_source )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "est fragment" doit être numérique'});
        }
        form.che_binaire_source=form.che_binaire_source === null ? ( null ) : ( parseInt( form.che_binaire_source , 10 ) );
        if(isNaN( form.che_binaire_source )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "binaire" doit être numérique'});
        }
        form.che_pour_util_source=form.che_pour_util_source === null ? ( null ) : ( parseInt( form.che_pour_util_source , 10 ) );
        if(isNaN( form.che_pour_util_source )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "pour util" doit être numérique'});
        }
        form.chx_dossier_id_source=form.chx_dossier_id_source === null ? ( null ) : ( parseInt( form.chx_dossier_id_source , 10 ) );
        if(form.chx_dossier_id_source !== null && isNaN( form.chx_dossier_id_source )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "dossier id" doit être numérique'});
        }
        form.che_autorisation_globale_source=form.che_autorisation_globale_source === null ?
          ( 
            null
          ) : ( 
            parseInt( form.che_autorisation_globale_source , 10 )
          );
        if(isNaN( form.che_autorisation_globale_source )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "auto. globale" doit être numérique'});
        }
        form.che_est_verrouille_source=form.che_est_verrouille_source === null ? ( null ) : ( parseInt( form.che_est_verrouille_source , 10 ) );
        if(isNaN( form.che_est_verrouille_source )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "vérrouillé" doit être numérique'});
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
        let criteres_select_1419={"T0_chi_id_source" : form.chi_id_source};
        let tt1419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`che_est_fragment_source` , `T0`.`che_pour_util_source` , `T0`.`che_est_verrouille_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 1419 , criteres_select_1419 , this.__ig1.donnees_retournees , __db1 );
        if(tt1419.__xst !== __xsu || tt1419.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1419 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt1419.__xva[0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_1422={
             /*  */
            "c_chi_id_source" : form.chi_id_source ,
            "n_chp_nom_source" : form.chp_nom_source ,
            "n_che_est_fragment_source" : form.che_est_fragment_source ,
            "n_che_binaire_source" : form.che_binaire_source ,
            "n_che_pour_util_source" : form.che_pour_util_source ,
            "n_chx_dossier_id_source" : form.chx_dossier_id_source === '' ? ( null ) : ( form.chx_dossier_id_source ) ,
            "n_cht_rev_source" : form.cht_rev_source === '' ? ( null ) : ( form.cht_rev_source ) ,
            "n_cht_genere_source" : form.cht_genere_source === '' ? ( null ) : ( form.cht_genere_source ) ,
            "n_cht_condition_rev_source" : form.cht_condition_rev_source === '' ? ( null ) : ( form.cht_condition_rev_source ) ,
            "n_cht_condition_js_source" : form.cht_condition_js_source === '' ? ( null ) : ( form.cht_condition_js_source ) ,
            "n_cht_notification_ko_source" : form.cht_notification_ko_source === '' ? ( null ) : ( form.cht_notification_ko_source ) ,
            "n_cht_commentaire_source" : form.cht_commentaire_source === '' ? ( null ) : ( form.cht_commentaire_source ) ,
            "n_che_autorisation_globale_source" : form.che_autorisation_globale_source ,
            "n_che_est_verrouille_source" : form.che_est_verrouille_source
        };
        /* =========================== mise à jour effective ======================== */
        let tt1422=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_sources SET 
           `chp_nom_source` = :n_chp_nom_source , 
           `che_est_fragment_source` = :n_che_est_fragment_source , 
           `che_binaire_source` = :n_che_binaire_source , 
           `che_pour_util_source` = :n_che_pour_util_source , 
           `chx_dossier_id_source` = :n_chx_dossier_id_source , 
           `cht_rev_source` = :n_cht_rev_source , 
           `cht_genere_source` = :n_cht_genere_source , 
           `cht_condition_rev_source` = :n_cht_condition_rev_source , 
           `cht_condition_js_source` = :n_cht_condition_js_source , 
           `cht_notification_ko_source` = :n_cht_notification_ko_source , 
           `cht_commentaire_source` = :n_cht_commentaire_source , 
           `che_autorisation_globale_source` = :n_che_autorisation_globale_source , 
           `che_est_verrouille_source` = :n_che_est_verrouille_source
        WHERE `chi_id_source` = :c_chi_id_source ;
        */
        /*sql_inclure_fin*/ 1422 , criteres_1422 , this.__ig1.donnees_retournees , __db1 );
        if(tt1422.__xst !== __xsu || tt1422.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1422.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt1419.__xva[0] , __db1 );
        if(__taam.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __taam.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true){
            if(form.__mat_liste_si_ok){
                let mat1=JSON.parse( form.__mat_liste_si_ok );
                await this.filtre1( mat1 , 1 , __db1 );
            }
            return({"__xst" : __xsu});
        }
        let tt1419_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`che_est_fragment_source` , `T0`.`che_pour_util_source` , `T0`.`che_est_verrouille_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 1419 , criteres_select_1419 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees.__xva['page_modification1']=tt1419_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_source=null , __db1=null ){
        if(chi_id_source === null){
            const l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    chi_id_source=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_source(' + chi_id_source + ')))))';
        }
        if(chi_id_source === null){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`che_est_fragment_source` , `T0`.`che_pour_util_source` , `T0`.`che_est_verrouille_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 1419 , {"T0_chi_id_source" : chi_id_source} , this.__ig1.donnees_retournees , __db1 );
        if(tt1419.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1419.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt1419.__xva[0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees.__xva['page_modification1']=tt1419;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_source=null ){
        if(chi_id_source === null){
            const l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    chi_id_source=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1419={
             /*  */
            "T0_chi_id_source" : chi_id_source
        };
        let tt1419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`che_est_fragment_source` , `T0`.`che_pour_util_source` , `T0`.`che_est_verrouille_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 1419 , criteres_1419 , this.__ig1.donnees_retournees , __db1 );
        if(tt1419.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1419.__xme});
        }
        this.__ig1.donnees_retournees.__xva['page_duplication1']=tt1419;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues.__xva['__co1'];
        let form=this.__ig1.donnees_recues.__xva['__fo1'][nom_formulaire];
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1419={
             /*  */
            "T0_chi_id_source" : form.chi_id_source
        };
        let tt1419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`che_est_fragment_source` , `T0`.`che_pour_util_source` , `T0`.`che_est_verrouille_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 1419 , criteres_1419 , this.__ig1.donnees_retournees , __db1 );
        if(tt1419.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1419.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt1419.__xva[0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_1421={
             /*  */
            "chi_id_source" : form.chi_id_source
        };
        let tt1421=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_sources
        WHERE `chi_id_source` = :chi_id_source
        */
        /*sql_inclure_fin*/ 1421 , criteres_1421 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt1421.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1421.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , form , tt1419.__xva[0] , __db1 );
        if(__aavc.__xst === __xer){
            return({"__xst" : __xer ,"__xme" : __aavc.__xme});
        }
        /*  */
        if(form.__mat_liste_si_ok !== ''){
            let mat1=JSON.parse( form.__mat_liste_si_ok );
            await this.filtre1( mat1 , 1 , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d ){
        let chi_id_source=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1419={"T0_chi_id_source" : chi_id_source};
        let tt1419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`che_est_fragment_source` , `T0`.`che_pour_util_source` , `T0`.`che_est_verrouille_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 1419 , critere_1419 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees.__xva['page_confirmation_supprimer1']=tt1419;
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
        let nom_formulaire=this.__ig1.donnees_recues.__xva['__co1'];
        let form=this.__ig1.donnees_recues.__xva['__fo1'][nom_formulaire];
        /* conversion des données numériques insert serveur début */
        form.chx_dossier_id_source=form.chx_dossier_id_source === null || form.chx_dossier_id_source === '' || form.chx_dossier_id_source === undefined ? ( null ) : ( parseInt( form.chx_dossier_id_source , 10 ) );
        form.che_est_fragment_source=form.che_est_fragment_source === null || form.che_est_fragment_source === '' || form.che_est_fragment_source === undefined ? ( 0 ) : ( parseInt( form.che_est_fragment_source , 10 ) );
        form.che_binaire_source=form.che_binaire_source === null || form.che_binaire_source === '' || form.che_binaire_source === undefined ? ( 0 ) : ( parseInt( form.che_binaire_source , 10 ) );
        /* conversion des données numériques insert serveur fin */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_1420={
            "donnees" : [{
                        "chx_dossier_id_source" : form.chx_dossier_id_source === '' ? ( null ) : ( form.chx_dossier_id_source ) ,
                        "chp_nom_source" : form.chp_nom_source ,
                        "che_est_fragment_source" : form.che_est_fragment_source ,
                        "cht_genere_source" : form.cht_genere_source === '' ? ( null ) : ( form.cht_genere_source ) ,
                        "cht_commentaire_source" : form.cht_commentaire_source === '' ? ( null ) : ( form.cht_commentaire_source ) ,
                        "cht_rev_source" : form.cht_rev_source === '' ? ( null ) : ( form.cht_rev_source ) ,
                        "che_binaire_source" : form.che_binaire_source
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt1420=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_sources`(
            `chx_dossier_id_source` , 
            `chp_nom_source` , 
            `che_est_fragment_source` , 
            `cht_genere_source` , 
            `cht_commentaire_source` , 
            `cht_rev_source` , 
            `che_binaire_source`
        ) VALUES (
            :chx_dossier_id_source , 
            :chp_nom_source , 
            :che_est_fragment_source , 
            :cht_genere_source , 
            :cht_commentaire_source , 
            :cht_rev_source , 
            :che_binaire_source
        );
        */
        /*sql_inclure_fin*/ 1420 , criteres_1420 , this.__ig1.donnees_retournees , __db1 );
        if(tt1420.__xst !== __xsu || tt1420['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1420.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let __aapc=await this.action_apres_creer( mat , d , tt1420['nouvel_id'] , form , __db1 );
        if(__aapc.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aapc.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true && form.__mat_liste_si_ok !== ''){
            let mat1=JSON.parse( form.__mat_liste_si_ok );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt1420['nouvel_id'] , __db1 );
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
        /* on peut initialiser une valeur ici, par exemple : */
        /* this.__ig1.donnees_retournees.__xva['xxxxx']='xxxxx'; */
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
        let criteres_1418={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_1418[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_1418[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1418=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`chx_dossier_id_source` , `T1`.`chp_nom_dossier` , `T0`.`che_est_fragment_source` , 
        `T0`.`che_autorisation_globale_source` , `T0`.`che_binaire_source` , `T0`.`che_est_verrouille_source` , `T0`.`che_pour_util_source` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_notification_ko_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chp_nom_source` LIKE :T0_chp_nom_source
           AND `T0`.`chi_id_source` = :T0_chi_id_source
           AND `T0`.`chi_id_source` > :T0_chi_id_source2
           AND `T0`.`chi_id_source` <= :T0_chi_id_source3
           AND `T0`.`che_binaire_source` = :T0_che_binaire_source
           AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
           AND `T1`.`chp_nom_dossier` LIKE :T1_chp_nom_dossier
           AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source
           AND `T0`.`che_pour_util_source` = :T0_che_pour_util_source
           AND `T0`.`che_est_verrouille_source` = :T0_che_est_verrouille_source
           AND `T0`.`che_est_fragment_source` = :T0_che_est_fragment_source) 
        ORDER BY `T0`.`chx_dossier_id_source` ASC, `T0`.`chp_nom_source` ASC, `T0`.`chi_id_source` ASC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 1418 , criteres_1418 , this.__ig1.donnees_retournees , __db1 );
        if(tt1418.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1418.__xme});
        }
        if(tt1418.__xst === __xsu && tt1418.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_1418['debut']=__debut;
            tt1418=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`chx_dossier_id_source` , `T1`.`chp_nom_dossier` , `T0`.`che_est_fragment_source` , 
            `T0`.`che_autorisation_globale_source` , `T0`.`che_binaire_source` , `T0`.`che_est_verrouille_source` , `T0`.`che_pour_util_source` , `T0`.`cht_condition_rev_source` , 
            `T0`.`cht_notification_ko_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE (   `T0`.`chp_nom_source` LIKE :T0_chp_nom_source
               AND `T0`.`chi_id_source` = :T0_chi_id_source
               AND `T0`.`chi_id_source` > :T0_chi_id_source2
               AND `T0`.`chi_id_source` <= :T0_chi_id_source3
               AND `T0`.`che_binaire_source` = :T0_che_binaire_source
               AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
               AND `T1`.`chp_nom_dossier` LIKE :T1_chp_nom_dossier
               AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source
               AND `T0`.`che_pour_util_source` = :T0_che_pour_util_source
               AND `T0`.`che_est_verrouille_source` = :T0_che_est_verrouille_source
               AND `T0`.`che_est_fragment_source` = :T0_che_est_fragment_source) 
            ORDER BY `T0`.`chx_dossier_id_source` ASC, `T0`.`chp_nom_source` ASC, `T0`.`chi_id_source` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 1418 , criteres_1418 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees.__xva['__debut']=__debut;
        this.__ig1.donnees_retournees.__xva['__num_page']=__num_page;
        this.__ig1.donnees_retournees.__xac='pm1(m1(n1(' + this.moi + '),f1(liste1(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees.__xac+='))))';
        this.__ig1.donnees_retournees.__xva['liste1']=tt1418;
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
    moi='sources1';
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
export{sources1 as sources1};