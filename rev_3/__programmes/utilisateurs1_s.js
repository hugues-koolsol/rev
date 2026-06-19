const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */'__xst';
const __xva=/* valeurs */'__xva';
const __xsi=/* signaux */'__xsi';
const __xac=/* actions */'__xac';
import {hash as crypte_mot} from "https://deno.land/x/bcrypt/mod.ts";
/*
  =====================================================================================================================
*/
class utilisateurs1{
    /*
      =============================================================================================================
    */
    /*
      =============================================================================================================
    */
    async modifier_le_mot_de_passe( mat , d ){
        let chi_id_utilisateur=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_utilisateur'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_utilisateur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(!(chi_id_utilisateur > 1
                   || this.__ig1.donnees_retournees._CA_ >= 3
                       && this.__ig1.donnees_retournees.chi_id_utilisateur === 2)
        ){
            return({"__xst" : __xer ,"__xme" : 'vous ne pouvez pas modifier le mot de passe de cet utilisateur [' + this.__ig1.nl2() + ']'});
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        if(!(form['chp_mot_de_passe_utilisateur1'] === form['chp_mot_de_passe_utilisateur2']
                   && form['chp_mot_de_passe_utilisateur1'].length >= 7)
        ){
            return({
                    "__xst" : __xer ,
                    "__xme" : 'les deux mots de passe doivent être identiques et faire au moins 7 caractères [' + this.__ig1.nl2() + ']'
                });
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        const mdp=await crypte_mot( form['chp_mot_de_passe_utilisateur1'] );
        let criteres_1150={"c_chi_id_utilisateur" : chi_id_utilisateur ,"n_chp_mot_de_passe_utilisateur" : mdp};
        let tt1150=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_utilisateurs SET 
           `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
        WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;
        */
        /*sql_inclure_fin*/ 1150 , criteres_1150 , this.__ig1.donnees_retournees , __db1 );
        if(tt1150.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'erreur de maj du mot de passe [' + this.__ig1.nl2() + ']'});
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
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_avant_modifier( mat , d , form , __xva_avant , __db1 ){
        if(__xva_avant['T0.chi_id_utilisateur'] === 1 && form['che_actif_utilisateur'] !== 1){
            return({"__xst" : __xer ,"__xme" : ' l\'utilisateur 1 doit toujours être actif [' + this.__ig1.nl2() + ']'});
        }
        if(__xva_avant['T0.chi_id_utilisateur'] === 1 && form['chx_acces_utilisateur'] !== 1){
            return({"__xst" : __xer ,"__xme" : ' l\'utilisateur 1 doit toujours être sur l\'accès 1 [' + this.__ig1.nl2() + ']'});
        }
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
        if(form['chx_acces_utilisateur'] === 1){
            return({"__xst" : __xer ,"__xme" : ' seul l\'utilisateur 1 peut avoir l\'accès 1 [' + this.__ig1.nl2() + ']'});
        }
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
    async modifier1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /*
          conversion des données numériques update serveur début
          =====================================================================================================
        */
        form['chi_id_utilisateur']=form['chi_id_utilisateur'] === null ? ( null ) : ( parseInt( form['chi_id_utilisateur'] , 10 ) );
        if(isNaN( form['chi_id_utilisateur'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "chi_id_utilisateur" doit être numérique'});
        }
        form['chx_acces_utilisateur']=form['chx_acces_utilisateur'] === null ? ( null ) : ( parseInt( form['chx_acces_utilisateur'] , 10 ) );
        if(isNaN( form['chx_acces_utilisateur'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "acces" doit être numérique'});
        }
        form['che_actif_utilisateur']=form['che_actif_utilisateur'] === null ? ( null ) : ( parseInt( form['che_actif_utilisateur'] , 10 ) );
        if(isNaN( form['che_actif_utilisateur'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "actif" doit être numérique'});
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
        let criteres_select_1121={"T0_chi_id_utilisateur" : form['chi_id_utilisateur']};
        let tt1121=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
        `T0`.`che__nur_utilisateur` , `T0`.`chd__dtm_utilisateur` , `T0`.`chd__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces` , 
        `T0`.`che_actif_utilisateur`
         FROM b1.tbl_utilisateurs T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
        
        WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
        ;
        */
        /*sql_inclure_fin*/ 1121 , criteres_select_1121 , this.__ig1.donnees_retournees , __db1 );
        if(tt1121.__xst !== __xsu || tt1121.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1121 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt1121[__xva][0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_1122={
             /*  */
            "c_chi_id_utilisateur" : form['chi_id_utilisateur'] ,
            "n_chp_nom_de_connexion_utilisateur" : form['chp_nom_de_connexion_utilisateur'] ,
            "n_chx_acces_utilisateur" : form['chx_acces_utilisateur'] ,
            "n_che_actif_utilisateur" : form['che_actif_utilisateur']
        };
        /* =========================== mise à jour effective ======================== */
        let tt1122=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_utilisateurs SET 
           `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
           `chx_acces_utilisateur` = :n_chx_acces_utilisateur , 
           `che_actif_utilisateur` = :n_che_actif_utilisateur
        WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;
        */
        /*sql_inclure_fin*/ 1122 , criteres_1122 , this.__ig1.donnees_retournees , __db1 );
        if(tt1122.__xst !== __xsu || tt1122.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1122.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt1121[__xva][0] , __db1 );
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
        let tt1121_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
        `T0`.`che__nur_utilisateur` , `T0`.`chd__dtm_utilisateur` , `T0`.`chd__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces` , 
        `T0`.`che_actif_utilisateur`
         FROM b1.tbl_utilisateurs T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
        
        WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
        ;
        */
        /*sql_inclure_fin*/ 1121 , criteres_select_1121 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1121_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_utilisateur=null , __db1=null ){
        if(chi_id_utilisateur === null){
            const l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_utilisateur'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_utilisateur=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_utilisateur(' + chi_id_utilisateur + ')))))';
        }
        if(chi_id_utilisateur === null){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1121=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
        `T0`.`che__nur_utilisateur` , `T0`.`chd__dtm_utilisateur` , `T0`.`chd__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces` , 
        `T0`.`che_actif_utilisateur`
         FROM b1.tbl_utilisateurs T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
        
        WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
        ;
        */
        /*sql_inclure_fin*/ 1121 , {"T0_chi_id_utilisateur" : chi_id_utilisateur} , this.__ig1.donnees_retournees , __db1 );
        if(tt1121.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1121.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt1121[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1121;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_utilisateur=null ){
        if(chi_id_utilisateur === null){
            const l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_utilisateur'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_utilisateur=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1121={
             /*  */
            "T0_chi_id_utilisateur" : chi_id_utilisateur
        };
        let tt1121=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
        `T0`.`che__nur_utilisateur` , `T0`.`chd__dtm_utilisateur` , `T0`.`chd__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces` , 
        `T0`.`che_actif_utilisateur`
         FROM b1.tbl_utilisateurs T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
        
        WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
        ;
        */
        /*sql_inclure_fin*/ 1121 , criteres_1121 , this.__ig1.donnees_retournees , __db1 );
        if(tt1121.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1121.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt1121;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_utilisateur=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_utilisateur'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_utilisateur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_utilisateur === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1121={"T0_chi_id_utilisateur" : chi_id_utilisateur};
        let tt1121=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
        `T0`.`che__nur_utilisateur` , `T0`.`chd__dtm_utilisateur` , `T0`.`chd__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces` , 
        `T0`.`che_actif_utilisateur`
         FROM b1.tbl_utilisateurs T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
        
        WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
        ;
        */
        /*sql_inclure_fin*/ 1121 , critere_1121 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_voir1']=tt1121;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(2)) */
        if(form['chi_id_utilisateur'] <= 2){
            return({"__xst" : __xer ,"__xme" : 'il n\'est pas possible de supprimer cet élément [' + this.__ig1.nl2() + ']'});
        }
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1121={
             /*  */
            "T0_chi_id_utilisateur" : form['chi_id_utilisateur']
        };
        let tt1121=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
        `T0`.`che__nur_utilisateur` , `T0`.`chd__dtm_utilisateur` , `T0`.`chd__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces` , 
        `T0`.`che_actif_utilisateur`
         FROM b1.tbl_utilisateurs T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
        
        WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
        ;
        */
        /*sql_inclure_fin*/ 1121 , criteres_1121 , this.__ig1.donnees_retournees , __db1 );
        if(tt1121.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1121.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt1121[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_1123={
             /*  */
            "chi_id_utilisateur" : form['chi_id_utilisateur']
        };
        let tt1123=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_utilisateurs
        WHERE `chi_id_utilisateur` = :chi_id_utilisateur ;
        */
        /*sql_inclure_fin*/ 1123 , criteres_1123 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt1123.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1123.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , form , tt1121[__xva][0] , __db1 );
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
        let chi_id_utilisateur=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_utilisateur'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_utilisateur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_utilisateur === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1121={"T0_chi_id_utilisateur" : chi_id_utilisateur};
        let tt1121=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
        `T0`.`che__nur_utilisateur` , `T0`.`chd__dtm_utilisateur` , `T0`.`chd__dtc_utilisateur` , `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces` , 
        `T0`.`che_actif_utilisateur`
         FROM b1.tbl_utilisateurs T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
        
        WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
        ;
        */
        /*sql_inclure_fin*/ 1121 , critere_1121 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt1121;
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
        form['chx_acces_utilisateur']=form['chx_acces_utilisateur'] === null || form['chx_acces_utilisateur'] === '' || form['chx_acces_utilisateur'] === undefined ? ( null ) : ( parseInt( form['chx_acces_utilisateur'] , 10 ) );
        form['che_actif_utilisateur']=form['che_actif_utilisateur'] === null || form['che_actif_utilisateur'] === '' || form['che_actif_utilisateur'] === undefined ? ( 0 ) : ( parseInt( form['che_actif_utilisateur'] , 10 ) );
        /* conversion des données numériques insert serveur fin */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_1120={
            "donnees" : [{
                        "chp_nom_de_connexion_utilisateur" : form['chp_nom_de_connexion_utilisateur'] ,
                        "chx_acces_utilisateur" : form['chx_acces_utilisateur'] ,
                        "che_actif_utilisateur" : form['che_actif_utilisateur']
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt1120=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_utilisateurs`(
            `chp_nom_de_connexion_utilisateur` , 
            `chx_acces_utilisateur` , 
            `che_actif_utilisateur`
        ) VALUES (
            :chp_nom_de_connexion_utilisateur , 
            :chx_acces_utilisateur , 
            :che_actif_utilisateur
        );
        */
        /*sql_inclure_fin*/ 1120 , criteres_1120 , this.__ig1.donnees_retournees , __db1 );
        if(tt1120.__xst !== __xsu || tt1120['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1120.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let __aapc=await this.action_apres_creer( mat , d , tt1120['nouvel_id'] , form , __db1 );
        if(__aapc.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aapc.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt1120['nouvel_id'] , __db1 );
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
        let criteres_1119={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_1119[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_1119[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        criteres_1119['acces_pas_dans']='(-1)';
        if(this.__ig1.donnees_retournees._CA_ > 2 && this.__ig1.donnees_retournees.chi_id_utilisateur > 1){
            criteres_1119['acces_pas_dans']='(1,2)';
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1119=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chx_acces_utilisateur` , 
        `T1`.`chp_nom_acces` , `T0`.`che_actif_utilisateur` , `T1`.`che_actif_acces`
         FROM b1.tbl_utilisateurs T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
        
        WHERE (`T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
           AND `T0`.`chp_nom_de_connexion_utilisateur` LIKE :T0_chp_nom_de_connexion_utilisateur
           AND `T0`.`che_actif_utilisateur` = :T0_che_actif_utilisateur
           AND `T0`.`chx_acces_utilisateur` = :T0_chx_acces_utilisateur
           AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
           AND `T1`.`che_actif_acces` = :T1_che_actif_acces
           AND `T0`.`chi_compteur1_utilisateur` >= :T0_chi_compteur1_utilisateur
           AND `T0`.`chx_acces_utilisateur` NOT IN :acces_pas_dans) 
        ORDER BY `T0`.`chi_id_utilisateur` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 1119 , criteres_1119 , this.__ig1.donnees_retournees , __db1 );
        if(tt1119.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1119.__xme});
        }
        if(tt1119.__xst === __xsu && tt1119.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_1119['debut']=__debut;
            tt1119=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chx_acces_utilisateur` , 
            `T1`.`chp_nom_acces` , `T0`.`che_actif_utilisateur` , `T1`.`che_actif_acces`
             FROM b1.tbl_utilisateurs T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
            
            WHERE (`T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
               AND `T0`.`chp_nom_de_connexion_utilisateur` LIKE :T0_chp_nom_de_connexion_utilisateur
               AND `T0`.`che_actif_utilisateur` = :T0_che_actif_utilisateur
               AND `T0`.`chx_acces_utilisateur` = :T0_chx_acces_utilisateur
               AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
               AND `T1`.`che_actif_acces` = :T1_che_actif_acces
               AND `T0`.`chi_compteur1_utilisateur` >= :T0_chi_compteur1_utilisateur
               AND `T0`.`chx_acces_utilisateur` NOT IN :acces_pas_dans) 
            ORDER BY `T0`.`chi_id_utilisateur` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 1119 , criteres_1119 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(liste1(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva]['liste1']=tt1119;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste2( mat , d ){
        const __nbMax=40;
        let criteres_1119={};
        criteres_1119['quantitee']=__nbMax;
        /* on peut éventuellement ajouter des criteres ici, voir par exemple metiers1_s.js */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let liste2=await this.__ig1.generique_sous_liste2( mat , d , 1119 , criteres_1119 , __nbMax , __db1 );
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
    moi='utilisateurs1';
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
export{utilisateurs1 as utilisateurs1};