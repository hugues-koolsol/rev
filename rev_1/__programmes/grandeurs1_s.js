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
class grandeurs1{
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
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /*
          conversion des données numériques update serveur début
          =====================================================================================================
        */
        form['chi_id_grandeur']=form['chi_id_grandeur'] === null ? ( null ) : ( parseInt( form['chi_id_grandeur'] , 10 ) );
        if(isNaN( form['chi_id_grandeur'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "chi_id_grandeur" doit être numérique'});
        }
        form['chx_parametre_grandeur']=form['chx_parametre_grandeur'] === null ? ( null ) : ( parseInt( form['chx_parametre_grandeur'] , 10 ) );
        if(isNaN( form['chx_parametre_grandeur'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "id parametre" doit être numérique'});
        }
        form['che_actif_grandeur']=form['che_actif_grandeur'] === null ? ( null ) : ( parseInt( form['che_actif_grandeur'] , 10 ) );
        if(isNaN( form['che_actif_grandeur'] )){
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
        let criteres_select_1202={"T0_chi_id_grandeur" : form['chi_id_grandeur']};
        let tt1202=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
        `T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T1`.`che_pour_admin_parametre`
         FROM b1.tbl_grandeurs T0
         LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
        
        WHERE `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
        ;
        */
        /*sql_inclure_fin*/ 1202 , criteres_select_1202 , this.__ig1.donnees_retournees , __db1 );
        if(tt1202.__xst !== __xsu || tt1202.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1202 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt1202[__xva][0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_1204={
             /*  */
            "c_chi_id_grandeur" : form['chi_id_grandeur'] ,
            "n_chx_parametre_grandeur" : form['chx_parametre_grandeur'] ,
            "n_chp_cle_grandeur" : form['chp_cle_grandeur'] === '' ? ( null ) : ( form['chp_cle_grandeur'] ) ,
            "n_cht_rev_grandeur" : form['cht_rev_grandeur'] ,
            "n_che_actif_grandeur" : form['che_actif_grandeur']
        };
        /* =========================== mise à jour effective ======================== */
        let tt1204=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_grandeurs SET 
           `chx_parametre_grandeur` = :n_chx_parametre_grandeur , 
           `chp_cle_grandeur` = :n_chp_cle_grandeur , 
           `cht_rev_grandeur` = :n_cht_rev_grandeur , 
           `che_actif_grandeur` = :n_che_actif_grandeur , 
           `chd__dtc_grandeur` = :n_chd__dtc_grandeur , 
           `chd__dtm_grandeur` = :n_chd__dtm_grandeur , 
           `che__nur_grandeur` = :n_che__nur_grandeur
        WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;
        */
        /*sql_inclure_fin*/ 1204 , criteres_1204 , this.__ig1.donnees_retournees , __db1 );
        if(tt1204.__xst !== __xsu || tt1204.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1204.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt1202[__xva][0] , __db1 );
        if(__taam.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __taam.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        this.__ig1.donnees_retournees[__xva]['__nouveau_nur']=parseInt( form['che__nur_grandeur'] , 10 ) + 1;
        if(retour_a_la_liste === true){
            if(form['__mat_liste_si_ok']){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , __db1 );
            }
            return({"__xst" : __xsu});
        }
        let tt1202_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
        `T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T1`.`che_pour_admin_parametre`
         FROM b1.tbl_grandeurs T0
         LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
        
        WHERE `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
        ;
        */
        /*sql_inclure_fin*/ 1202 , criteres_select_1202 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1202_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_grandeur=null , __db1=null ){
        if(chi_id_grandeur === null){
            const l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_grandeur'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_grandeur(' + chi_id_grandeur + ')))))';
        }
        if(chi_id_grandeur === null){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1202=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
        `T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T1`.`che_pour_admin_parametre`
         FROM b1.tbl_grandeurs T0
         LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
        
        WHERE `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
        ;
        */
        /*sql_inclure_fin*/ 1202 , {"T0_chi_id_grandeur" : chi_id_grandeur} , this.__ig1.donnees_retournees , __db1 );
        if(tt1202.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1202.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt1202[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1202;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_grandeur=null ){
        if(chi_id_grandeur === null){
            const l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_grandeur'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1202={
             /*  */
            "T0_chi_id_grandeur" : chi_id_grandeur
        };
        let tt1202=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
        `T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T1`.`che_pour_admin_parametre`
         FROM b1.tbl_grandeurs T0
         LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
        
        WHERE `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
        ;
        */
        /*sql_inclure_fin*/ 1202 , criteres_1202 , this.__ig1.donnees_retournees , __db1 );
        if(tt1202.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1202.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt1202;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_grandeur=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_grandeur' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_grandeur === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1202={"T0_chi_id_grandeur" : chi_id_grandeur};
        let tt1202=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
        `T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T1`.`che_pour_admin_parametre`
         FROM b1.tbl_grandeurs T0
         LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
        
        WHERE `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
        ;
        */
        /*sql_inclure_fin*/ 1202 , critere_1202 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_voir1']=tt1202;
        let __aetapv=await this.actions_et_tests_apres_page_voir( mat , d , tt1202[__xva][0] , __db1 );
        if(__aetapv.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __aetapv.__xme});
        }
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
        let criteres_1202={
             /*  */
            "T0_chi_id_grandeur" : form['chi_id_grandeur']
        };
        let tt1202=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
        `T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T1`.`che_pour_admin_parametre`
         FROM b1.tbl_grandeurs T0
         LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
        
        WHERE `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
        ;
        */
        /*sql_inclure_fin*/ 1202 , criteres_1202 , this.__ig1.donnees_retournees , __db1 );
        if(tt1202.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1202.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt1202[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_1205={
             /*  */
            "chi_id_grandeur" : form['chi_id_grandeur']
        };
        let tt1205=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_grandeurs
        WHERE `chi_id_grandeur` = :chi_id_grandeur ;
        */
        /*sql_inclure_fin*/ 1205 , criteres_1205 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt1205.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1205.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , form , tt1202[__xva][0] , __db1 );
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
        let chi_id_grandeur=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_grandeur'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_grandeur === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1202={"T0_chi_id_grandeur" : chi_id_grandeur};
        let tt1202=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
        `T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T1`.`che_pour_admin_parametre`
         FROM b1.tbl_grandeurs T0
         LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
        
        WHERE `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
        ;
        */
        /*sql_inclure_fin*/ 1202 , critere_1202 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt1202;
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
        form['chx_parametre_grandeur']=form['chx_parametre_grandeur'] === null || form['chx_parametre_grandeur'] === '' || form['chx_parametre_grandeur'] === undefined ? ( null ) : ( parseInt( form['chx_parametre_grandeur'] , 10 ) );
        form['che_actif_grandeur']=form['che_actif_grandeur'] === null || form['che_actif_grandeur'] === '' || form['che_actif_grandeur'] === undefined ? ( 0 ) : ( parseInt( form['che_actif_grandeur'] , 10 ) );
        /* conversion des données numériques insert serveur fin */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_1203={
            "donnees" : [{
                        "chx_parametre_grandeur" : form['chx_parametre_grandeur'] ,
                        "chp_cle_grandeur" : form['chp_cle_grandeur'] === '' ? ( null ) : ( form['chp_cle_grandeur'] ) ,
                        "cht_rev_grandeur" : form['cht_rev_grandeur'] ,
                        "che_actif_grandeur" : form['che_actif_grandeur']
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt1203=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_grandeurs`(
            `chx_parametre_grandeur` , 
            `chp_cle_grandeur` , 
            `cht_rev_grandeur` , 
            `che_actif_grandeur` , 
            `chd__dtc_grandeur` , 
            `chd__dtm_grandeur` , 
            `che__nur_grandeur`
        ) VALUES (
            :chx_parametre_grandeur , 
            :chp_cle_grandeur , 
            :cht_rev_grandeur , 
            :che_actif_grandeur , 
            :chd__dtc_grandeur , 
            :chd__dtm_grandeur , 
            :che__nur_grandeur
        );
        */
        /*sql_inclure_fin*/ 1203 , criteres_1203 , this.__ig1.donnees_retournees , __db1 );
        if(tt1203.__xst !== __xsu || tt1203['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1203.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let __aapc=await this.action_apres_creer( mat , d , tt1203['nouvel_id'] , form , __db1 );
        if(__aapc.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aapc.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt1203['nouvel_id'] , __db1 );
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
        let criteres_1201={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_1201[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_1201[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1201=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`che_actif_grandeur` , 
        `T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T1`.`che_pour_admin_parametre`
         FROM b1.tbl_grandeurs T0
         LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
        
        WHERE (`T0`.`chx_parametre_grandeur` = :T0_chx_parametre_grandeur
           AND `T0`.`chp_cle_grandeur` LIKE :T0_chp_cle_grandeur
           AND `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
           AND `T0`.`cht_rev_grandeur` LIKE :T0_cht_rev_grandeur
           AND `T0`.`che_actif_grandeur` = :T0_che_actif_grandeur) 
        ORDER BY `T0`.`chi_id_grandeur` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 1201 , criteres_1201 , this.__ig1.donnees_retournees , __db1 );
        if(tt1201.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1201.__xme});
        }
        if(tt1201.__xst === __xsu && tt1201.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_1201['debut']=__debut;
            tt1201=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`che_actif_grandeur` , 
            `T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre` , `T1`.`che_pour_admin_parametre`
             FROM b1.tbl_grandeurs T0
             LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
            
            WHERE (`T0`.`chx_parametre_grandeur` = :T0_chx_parametre_grandeur
               AND `T0`.`chp_cle_grandeur` LIKE :T0_chp_cle_grandeur
               AND `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
               AND `T0`.`cht_rev_grandeur` LIKE :T0_cht_rev_grandeur
               AND `T0`.`che_actif_grandeur` = :T0_che_actif_grandeur) 
            ORDER BY `T0`.`chi_id_grandeur` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 1201 , criteres_1201 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(liste1(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva]['liste1']=tt1201;
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
    moi='grandeurs1';
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
export{grandeurs1 as grandeurs1};