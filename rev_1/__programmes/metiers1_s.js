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
class metiers1{
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
        if(this.__ig1.donnees_retournees._CA_ > 2
               && this.__ig1.donnees_retournees.chi_id_utilisateur > 1
               && __xva_avant['T0.chi_id_metier'] <= 2
        ){
            return({"__xst" : __xer ,"__xme" : ' vous ne pouvez pas modifier le métier (' + __xva_avant['T0.chi_id_metier'] + ')'});
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
        form['chi_id_metier']=form['chi_id_metier'] === null ? ( null ) : ( parseInt( form['chi_id_metier'] , 10 ) );
        if(isNaN( form['chi_id_metier'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "chi_id_metier" doit être numérique'});
        }
        form['chx_parent_metier']=form['chx_parent_metier'] === null ? ( null ) : ( parseInt( form['chx_parent_metier'] , 10 ) );
        if(form['chx_parent_metier'] !== null && isNaN( form['chx_parent_metier'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "id parent" doit être numérique'});
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
        let criteres_select_1125={"T0_chi_id_metier" : form['chi_id_metier']};
        let tt1125=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
         FROM b1.tbl_metiers T0
         LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
        
        WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
        ;
        */
        /*sql_inclure_fin*/ 1125 , criteres_select_1125 , this.__ig1.donnees_retournees , __db1 );
        if(tt1125.__xst !== __xsu || tt1125.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1125 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt1125[__xva][0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_1127={
             /*  */
            "c_chi_id_metier" : form['chi_id_metier'] ,
            "n_chp_nom_metier" : form['chp_nom_metier'] ,
            "n_chx_parent_metier" : form['chx_parent_metier'] === '' ? ( null ) : ( form['chx_parent_metier'] )
        };
        /* =========================== mise à jour effective ======================== */
        let tt1127=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_metiers SET 
           `chp_nom_metier` = :n_chp_nom_metier , 
           `chx_parent_metier` = :n_chx_parent_metier
        WHERE `chi_id_metier` = :c_chi_id_metier ;
        */
        /*sql_inclure_fin*/ 1127 , criteres_1127 , this.__ig1.donnees_retournees , __db1 );
        if(tt1127.__xst !== __xsu || tt1127.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1127.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt1125[__xva][0] , __db1 );
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
        let tt1125_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
         FROM b1.tbl_metiers T0
         LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
        
        WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
        ;
        */
        /*sql_inclure_fin*/ 1125 , criteres_select_1125 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1125_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_metier=null , __db1=null ){
        if(chi_id_metier === null){
            const l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_metier'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_metier=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_metier(' + chi_id_metier + ')))))';
        }
        if(chi_id_metier === null){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1125=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
         FROM b1.tbl_metiers T0
         LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
        
        WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
        ;
        */
        /*sql_inclure_fin*/ 1125 , {"T0_chi_id_metier" : chi_id_metier} , this.__ig1.donnees_retournees , __db1 );
        if(tt1125.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1125.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt1125[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1125;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_metier=null ){
        if(chi_id_metier === null){
            const l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_metier'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_metier=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1125={
             /*  */
            "T0_chi_id_metier" : chi_id_metier
        };
        let tt1125=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
         FROM b1.tbl_metiers T0
         LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
        
        WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
        ;
        */
        /*sql_inclure_fin*/ 1125 , criteres_1125 , this.__ig1.donnees_retournees , __db1 );
        if(tt1125.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1125.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt1125;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_metier=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_metier'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_metier=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_metier === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1125={"T0_chi_id_metier" : chi_id_metier};
        let tt1125=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
         FROM b1.tbl_metiers T0
         LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
        
        WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
        ;
        */
        /*sql_inclure_fin*/ 1125 , critere_1125 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_voir1']=tt1125;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(2)) */
        if(form['chi_id_metier'] <= 2){
            return({"__xst" : __xer ,"__xme" : 'il n\'est pas possible de supprimer cet élément [' + this.__ig1.nl2() + ']'});
        }
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1125={
             /*  */
            "T0_chi_id_metier" : form['chi_id_metier']
        };
        let tt1125=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
         FROM b1.tbl_metiers T0
         LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
        
        WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
        ;
        */
        /*sql_inclure_fin*/ 1125 , criteres_1125 , this.__ig1.donnees_retournees , __db1 );
        if(tt1125.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1125.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt1125[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_1129={
             /*  */
            "chi_id_metier" : form['chi_id_metier']
        };
        let tt1129=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_metiers
        WHERE `chi_id_metier` = :chi_id_metier ;
        */
        /*sql_inclure_fin*/ 1129 , criteres_1129 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt1129.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1129.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , form , tt1125[__xva][0] , __db1 );
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
        let chi_id_metier=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_metier'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_metier=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_metier === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1125={"T0_chi_id_metier" : chi_id_metier};
        let tt1125=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
         FROM b1.tbl_metiers T0
         LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
        
        WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
        ;
        */
        /*sql_inclure_fin*/ 1125 , critere_1125 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt1125;
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
        form['chx_parent_metier']=form['chx_parent_metier'] === null || form['chx_parent_metier'] === '' || form['chx_parent_metier'] === undefined ? ( null ) : ( parseInt( form['chx_parent_metier'] , 10 ) );
        /* conversion des données numériques insert serveur fin */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_1126={
            "donnees" : [{
                        "chp_nom_metier" : form['chp_nom_metier'] ,
                        "chx_parent_metier" : form['chx_parent_metier'] === '' ? ( null ) : ( form['chx_parent_metier'] )
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt1126=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_metiers`(
            `chp_nom_metier` , 
            `chx_parent_metier`
        ) VALUES (
            :chp_nom_metier , 
            :chx_parent_metier
        );
        */
        /*sql_inclure_fin*/ 1126 , criteres_1126 , this.__ig1.donnees_retournees , __db1 );
        if(tt1126.__xst !== __xsu || tt1126['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1126.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let __aapc=await this.action_apres_creer( mat , d , tt1126['nouvel_id'] , form , __db1 );
        if(__aapc.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aapc.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt1126['nouvel_id'] , __db1 );
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
        let criteres_1124={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_1124[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_1124[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        criteres_1124['metier_mini']=0;
        if(this.__ig1.donnees_retournees._CA_ > 2 && this.__ig1.donnees_retournees.chi_id_utilisateur > 1){
            criteres_1124['metier_mini']=3;
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1124=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T0`.`chx_parent_metier` , `T1`.`chp_nom_metier`
         FROM b1.tbl_metiers T0
         LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
        
        WHERE (   `T0`.`chi_id_metier` = :T0_chi_id_metier
           AND `T0`.`chp_nom_metier` LIKE :T0_chp_nom_metier
           AND `T0`.`chx_parent_metier` = :T0_chx_parent_metier
           AND `T1`.`chp_nom_metier` LIKE :T1_chp_nom_metier
           AND `T0`.`chi_id_metier` >= :metier_mini) 
        ORDER BY `T0`.`chi_id_metier` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 1124 , criteres_1124 , this.__ig1.donnees_retournees , __db1 );
        if(tt1124.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1124.__xme});
        }
        if(tt1124.__xst === __xsu && tt1124.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_1124['debut']=__debut;
            tt1124=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T0`.`chx_parent_metier` , `T1`.`chp_nom_metier`
             FROM b1.tbl_metiers T0
             LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
            
            WHERE (   `T0`.`chi_id_metier` = :T0_chi_id_metier
               AND `T0`.`chp_nom_metier` LIKE :T0_chp_nom_metier
               AND `T0`.`chx_parent_metier` = :T0_chx_parent_metier
               AND `T1`.`chp_nom_metier` LIKE :T1_chp_nom_metier
               AND `T0`.`chi_id_metier` >= :metier_mini) 
            ORDER BY `T0`.`chi_id_metier` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 1124 , criteres_1124 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(liste1(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva]['liste1']=tt1124;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste2( mat , d ){
        const __nbMax=40;
        let criteres_1124={};
        criteres_1124['quantitee']=__nbMax;
        /* on peut éventuellement ajouter des criteres ici, voir par exemple metiers1_s.js */
        criteres_1124['metier_mini']=0;
        if(this.__ig1.donnees_retournees._CA_ > 2 && this.__ig1.donnees_retournees.chi_id_utilisateur > 1){
            criteres_1124['metier_mini']=3;
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let liste2=await this.__ig1.generique_sous_liste2( mat , d , 1124 , criteres_1124 , __nbMax , __db1 );
        if(liste2.__xst === __xsu){
            /* faire éventuellement faire quelque chose ici avec les éléments contenus dans this.__ig1.donnees_retournees.__xva.sous_liste2.__xva */
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
    moi='metiers1';
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
export{metiers1 as metiers1};