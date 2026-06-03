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
class acteurs1{
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
    async modifier1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /*
          conversion des données numériques début
          =====================================================================================================
        */
        form['chx_utilisateur_acteur']=form['chx_utilisateur_acteur'] === null ? ( null ) : ( parseInt( form['chx_utilisateur_acteur'] , 10 ) );
        /*
          =====================================================================================================
          conversion des données numériques fin
        */
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( 2 );
        /* sélection du champ à modifier */
        let criteres_select_176={"T0_chx_utilisateur_acteur" : form['chx_utilisateur_acteur']};
        let tt176=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(inclure_le_prefixe_de_la_base_devant_la_table(1))
        SELECT 
        `T0`.`chx_utilisateur_acteur` , `T0`.`chp_nom_acteur` , `T0`.`chp_prenom_acteur` , `T1`.`chi_id_utilisateur` , `T1`.`chp_nom_de_connexion_utilisateur` , 
        `T1`.`chx_acces_utilisateur` , `T1`.`che_actif_utilisateur` , `T2`.`chp_nom_acces` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , 
        `T3`.`chp_nom_groupe` , `T4`.`chp_nom_metier`
         FROM b2.tbl_acteurs T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur
        
         LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces
        
        WHERE `T0`.`chx_utilisateur_acteur` = :T0_chx_utilisateur_acteur
        ;
        */
        /*sql_inclure_fin*/ 176 , criteres_select_176 , this.__ig1.donnees_retournees , __db1 );
        if(tt176.__xst !== __xsu || tt176.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [176 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt176[__xva][0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_177={
             /*  */
            "c_chx_utilisateur_acteur" : form['chx_utilisateur_acteur'] ,
            "n_chp_nom_acteur" : form['chp_nom_acteur'] ,
            "n_chp_prenom_acteur" : form['chp_prenom_acteur']
        };
        /* =========================== mise à jour effective ======================== */
        let tt177=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b2.tbl_acteurs SET 
           `chp_nom_acteur` = :n_chp_nom_acteur , 
           `chp_prenom_acteur` = :n_chp_prenom_acteur
        WHERE `chx_utilisateur_acteur` = :c_chx_utilisateur_acteur ;
        */
        /*sql_inclure_fin*/ 177 , criteres_177 , this.__ig1.donnees_retournees , __db1 );
        if(tt177.__xst !== __xsu || tt177.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt177.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt176[__xva][0] , __db1 );
        if(__taam.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __taam.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true){
            if(form['__mat_liste_si_ok']){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                let d=1;
                await this.filtre1( mat1 , 1 , __db1 );
            }
            return({"__xst" : __xsu});
        }
        let tt176_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(inclure_le_prefixe_de_la_base_devant_la_table(1))
        SELECT 
        `T0`.`chx_utilisateur_acteur` , `T0`.`chp_nom_acteur` , `T0`.`chp_prenom_acteur` , `T1`.`chi_id_utilisateur` , `T1`.`chp_nom_de_connexion_utilisateur` , 
        `T1`.`chx_acces_utilisateur` , `T1`.`che_actif_utilisateur` , `T2`.`chp_nom_acces` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , 
        `T3`.`chp_nom_groupe` , `T4`.`chp_nom_metier`
         FROM b2.tbl_acteurs T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur
        
         LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces
        
        WHERE `T0`.`chx_utilisateur_acteur` = :T0_chx_utilisateur_acteur
        ;
        */
        /*sql_inclure_fin*/ 176 , criteres_select_176 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt176_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chx_utilisateur_acteur=null , __db1=null ){
        if(chx_utilisateur_acteur === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chx_utilisateur_acteur'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chx_utilisateur_acteur=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chx_utilisateur_acteur(' + chx_utilisateur_acteur + ')))))';
        }
        if(chx_utilisateur_acteur === null){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( 2 );
        }
        let tt176=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(inclure_le_prefixe_de_la_base_devant_la_table(1))
        SELECT 
        `T0`.`chx_utilisateur_acteur` , `T0`.`chp_nom_acteur` , `T0`.`chp_prenom_acteur` , `T1`.`chi_id_utilisateur` , `T1`.`chp_nom_de_connexion_utilisateur` , 
        `T1`.`chx_acces_utilisateur` , `T1`.`che_actif_utilisateur` , `T2`.`chp_nom_acces` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , 
        `T3`.`chp_nom_groupe` , `T4`.`chp_nom_metier`
         FROM b2.tbl_acteurs T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur
        
         LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces
        
        WHERE `T0`.`chx_utilisateur_acteur` = :T0_chx_utilisateur_acteur
        ;
        */
        /*sql_inclure_fin*/ 176 , {"T0_chx_utilisateur_acteur" : chx_utilisateur_acteur} , this.__ig1.donnees_retournees , __db1 );
        if(tt176.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt176.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt176[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt176;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chx_utilisateur_acteur=null ){
        if(chx_utilisateur_acteur === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chx_utilisateur_acteur'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chx_utilisateur_acteur=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( 2 );
        let criteres_176={
             /*  */
            "T0_chx_utilisateur_acteur" : chx_utilisateur_acteur
        };
        let tt176=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(inclure_le_prefixe_de_la_base_devant_la_table(1))
        SELECT 
        `T0`.`chx_utilisateur_acteur` , `T0`.`chp_nom_acteur` , `T0`.`chp_prenom_acteur` , `T1`.`chi_id_utilisateur` , `T1`.`chp_nom_de_connexion_utilisateur` , 
        `T1`.`chx_acces_utilisateur` , `T1`.`che_actif_utilisateur` , `T2`.`chp_nom_acces` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , 
        `T3`.`chp_nom_groupe` , `T4`.`chp_nom_metier`
         FROM b2.tbl_acteurs T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur
        
         LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces
        
        WHERE `T0`.`chx_utilisateur_acteur` = :T0_chx_utilisateur_acteur
        ;
        */
        /*sql_inclure_fin*/ 176 , criteres_176 , this.__ig1.donnees_retournees , __db1 );
        if(tt176.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt176.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt176;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chx_utilisateur_acteur=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chx_utilisateur_acteur'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chx_utilisateur_acteur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chx_utilisateur_acteur === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( 2 );
        let critere_176={"T0_chx_utilisateur_acteur" : chx_utilisateur_acteur};
        let tt176=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(inclure_le_prefixe_de_la_base_devant_la_table(1))
        SELECT 
        `T0`.`chx_utilisateur_acteur` , `T0`.`chp_nom_acteur` , `T0`.`chp_prenom_acteur` , `T1`.`chi_id_utilisateur` , `T1`.`chp_nom_de_connexion_utilisateur` , 
        `T1`.`chx_acces_utilisateur` , `T1`.`che_actif_utilisateur` , `T2`.`chp_nom_acces` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , 
        `T3`.`chp_nom_groupe` , `T4`.`chp_nom_metier`
         FROM b2.tbl_acteurs T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur
        
         LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces
        
        WHERE `T0`.`chx_utilisateur_acteur` = :T0_chx_utilisateur_acteur
        ;
        */
        /*sql_inclure_fin*/ 176 , critere_176 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_voir1']=tt176;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( 2 );
        let criteres_176={
             /*  */
            "T0_chx_utilisateur_acteur" : form['chx_utilisateur_acteur']
        };
        let tt176=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(inclure_le_prefixe_de_la_base_devant_la_table(1))
        SELECT 
        `T0`.`chx_utilisateur_acteur` , `T0`.`chp_nom_acteur` , `T0`.`chp_prenom_acteur` , `T1`.`chi_id_utilisateur` , `T1`.`chp_nom_de_connexion_utilisateur` , 
        `T1`.`chx_acces_utilisateur` , `T1`.`che_actif_utilisateur` , `T2`.`chp_nom_acces` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , 
        `T3`.`chp_nom_groupe` , `T4`.`chp_nom_metier`
         FROM b2.tbl_acteurs T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur
        
         LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces
        
        WHERE `T0`.`chx_utilisateur_acteur` = :T0_chx_utilisateur_acteur
        ;
        */
        /*sql_inclure_fin*/ 176 , criteres_176 , this.__ig1.donnees_retournees , __db1 );
        if(tt176.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt176.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt176[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_179={
             /*  */
            "chx_utilisateur_acteur" : form['chx_utilisateur_acteur']
        };
        let tt179=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b2.tbl_acteurs
        WHERE (`chx_utilisateur_acteur` = :chx_utilisateur_acteur
           AND `chp_nom_acteur` = :chp_nom_acteur
           AND `chp_prenom_acteur` = :chp_prenom_acteur) ;
        */
        /*sql_inclure_fin*/ 179 , criteres_179 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt179.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt179.__xme});
        }
        let aac=await this.actions_apres_supprimer( mat , d , form , tt176[__xva][0] , __db1 );
        if(aac.__xst === __xer){
            return({"__xst" : __xer ,"__xme" : aac.__xme});
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
        let chx_utilisateur_acteur=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chx_utilisateur_acteur'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chx_utilisateur_acteur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chx_utilisateur_acteur === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( 2 );
        let critere_176={"T0_chx_utilisateur_acteur" : chx_utilisateur_acteur};
        let tt176=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(inclure_le_prefixe_de_la_base_devant_la_table(1))
        SELECT 
        `T0`.`chx_utilisateur_acteur` , `T0`.`chp_nom_acteur` , `T0`.`chp_prenom_acteur` , `T1`.`chi_id_utilisateur` , `T1`.`chp_nom_de_connexion_utilisateur` , 
        `T1`.`chx_acces_utilisateur` , `T1`.`che_actif_utilisateur` , `T2`.`chp_nom_acces` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , 
        `T3`.`chp_nom_groupe` , `T4`.`chp_nom_metier`
         FROM b2.tbl_acteurs T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur
        
         LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces
        
        WHERE `T0`.`chx_utilisateur_acteur` = :T0_chx_utilisateur_acteur
        ;
        */
        /*sql_inclure_fin*/ 176 , critere_176 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt176;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer1( mat , d ){
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* conversion des données numériques début */
        form['chx_utilisateur_acteur']=form['chx_utilisateur_acteur'] === null || form['chx_utilisateur_acteur'] === '' || form['chx_utilisateur_acteur'] === undefined ? ( null ) : ( parseInt( form['chx_utilisateur_acteur'] , 10 ) );
        /* conversion des données numériques fin */
        let __db1=await this.__ig1.ouvrir_bdd( 2 );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_178={
            "donnees" : [{
                        "chx_utilisateur_acteur" : form['chx_utilisateur_acteur'] ,
                        "chp_nom_acteur" : form['chp_nom_acteur'] ,
                        "chp_prenom_acteur" : form['chp_prenom_acteur']
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt178=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(inclure_le_prefixe_de_la_base_devant_la_table(1))
        
        INSERT INTO b2.`tbl_acteurs`(
            `chx_utilisateur_acteur` , 
            `chp_nom_acteur` , 
            `chp_prenom_acteur`
        ) VALUES (
            :chx_utilisateur_acteur , 
            :chp_nom_acteur , 
            :chp_prenom_acteur
        );
        */
        /*sql_inclure_fin*/ 178 , criteres_178 , this.__ig1.donnees_retournees , __db1 );
        if(tt178.__xst !== __xsu || tt178['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt178.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let aac=await this.action_apres_creer( mat , d , tt178['nouvel_id'] , form , __db1 );
        if(aac.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : 'les actions après créer ont échouées [' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt178['nouvel_id'] , __db1 );
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
        let __db1=await this.__ig1.ouvrir_bdd( 2 );
        this.__ig1.donnees_retournees[__xva]['nouveau_numero_projet']=nouveau_numero_projet;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , __db1=null ){
        let l01=mat.length;
        let option_de_13='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'de_13' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                option_de_13='de_13(' + mat[i + 1][1] + ')';
            }
        }
        const __nbMax=40;
        let __num_page=0;
        let formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__ig1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres_175={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_175[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_181[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( 2 );
        }
        let tt175=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(inclure_le_prefixe_de_la_base_devant_la_table(1))
        SELECT 
        `T0`.`chp_nom_acteur` , `T0`.`chp_prenom_acteur` , `T0`.`chx_utilisateur_acteur` , `T1`.`chp_nom_de_connexion_utilisateur` , `T2`.`chi_id_acces` , 
        `T1`.`chx_acces_utilisateur` , `T2`.`chp_nom_acces` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , `T3`.`chp_nom_groupe` , 
        `T4`.`chp_nom_metier` , `T0`.`chx_utilisateur_acteur`
         FROM b2.tbl_acteurs T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur
        
         LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces
        
        WHERE (`T0`.`chp_nom_acteur` LIKE :T0_chp_nom_acteur
           AND `T0`.`chp_prenom_acteur` LIKE :T0_chp_prenom_acteur
           AND `T1`.`chp_nom_de_connexion_utilisateur` LIKE :T1_chp_nom_de_connexion_utilisateur
           AND `T2`.`chp_nom_acces` LIKE :T2_chp_nom_acces
           AND `T2`.`chx_groupe_acces` = :T2_chx_groupe_acces
           AND `T2`.`chx_metier_acces` = :T2_chx_metier_acces
           AND `T2`.`che_actif_acces` = :T2_che_actif_acces
           AND `T3`.`chi_id_groupe` = :T3_chi_id_groupe
           AND `T3`.`chp_nom_groupe` LIKE :T3_chp_nom_groupe
           AND `T4`.`chp_nom_metier` LIKE :T4_chp_nom_metier
           AND `T0`.`chx_utilisateur_acteur` = :T0_chx_utilisateur_acteur) 
        ORDER BY `T0`.`chx_utilisateur_acteur` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 175 , criteres_175 , this.__ig1.donnees_retournees , __db1 );
        if(tt175.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt175.__xme});
        }
        if(tt175.__xst === __xsu && tt175.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_175['debut']=__debut;
            tt175=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            meta(inclure_le_prefixe_de_la_base_devant_la_table(1))
            SELECT 
            `T0`.`chp_nom_acteur` , `T0`.`chp_prenom_acteur` , `T0`.`chx_utilisateur_acteur` , `T1`.`chp_nom_de_connexion_utilisateur` , `T2`.`chi_id_acces` , 
            `T1`.`chx_acces_utilisateur` , `T2`.`chp_nom_acces` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , `T3`.`chp_nom_groupe` , 
            `T4`.`chp_nom_metier` , `T0`.`chx_utilisateur_acteur`
             FROM b2.tbl_acteurs T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur
            
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur
            
             LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces
            
            WHERE (`T0`.`chp_nom_acteur` LIKE :T0_chp_nom_acteur
               AND `T0`.`chp_prenom_acteur` LIKE :T0_chp_prenom_acteur
               AND `T1`.`chp_nom_de_connexion_utilisateur` LIKE :T1_chp_nom_de_connexion_utilisateur
               AND `T2`.`chp_nom_acces` LIKE :T2_chp_nom_acces
               AND `T2`.`chx_groupe_acces` = :T2_chx_groupe_acces
               AND `T2`.`chx_metier_acces` = :T2_chx_metier_acces
               AND `T2`.`che_actif_acces` = :T2_che_actif_acces
               AND `T3`.`chi_id_groupe` = :T3_chi_id_groupe
               AND `T3`.`chp_nom_groupe` LIKE :T3_chp_nom_groupe
               AND `T4`.`chp_nom_metier` LIKE :T4_chp_nom_metier
               AND `T0`.`chx_utilisateur_acteur` = :T0_chx_utilisateur_acteur) 
            ORDER BY `T0`.`chx_utilisateur_acteur` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 175 , criteres_175 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva][this.fonction_liste]=tt175;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d ){
        this.fonction_liste='liste1';
        await this.filtre1( mat , d );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi='acteurs1';
    __ig1=null;
    fonction_liste='liste1';
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
export{acteurs1 as acteurs1};