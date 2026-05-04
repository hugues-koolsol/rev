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
class taches2{
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , __xva_avant , __db1 ){
        /*#
          let obj=await this.faire_un_traitement( __xva_avant['T0.chi_id_tache'] ,  this.__ig1.donnees_retournees , this.__ig1.options_generales , __db1 );
          if(obj[__xst] === __xsu){
              return({"__xst" : __xsu});
          }else{
              return({"__xst" : __xer});
          }
        */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , form , __xva_avant , __db1 ){
        /*
          this.__ig1.__xsi[__xer].push( ' [' + this.__ig1.nl2() + ']' );
          this.__ig1.donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        this.__ig1.donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_avant_modifier( mat , d , form , __xva_avant , __db1 ){
        /*
          this.__ig1.__xsi[__xer].push( ' [' + this.__ig1.nl2() + ']' );
          this.__ig1.donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        this.__ig1.donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , form , __xva_avant , __db1 ){
        /*
          this.__ig1.__xsi[__xer].push( ' [' + this.__ig1.nl2() + ']' );
          this.__ig1.donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        this.__ig1.donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_apres_supprimer( mat , d , form , __xva_avant , __db1 ){
        /*
          this.__ig1.__xsi[__xer].push( ' [' + this.__ig1.nl2() + ']' );
          this.__ig1.donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        this.__ig1.donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_avant_creer( mat , d , form , __db1 ){
        /*
          this.__ig1.__xsi[__xer].push( ' [' + this.__ig1.nl2() + ']' );
          this.__ig1.donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        this.__ig1.donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async action_apres_creer( mat , d , nouvel_id , form , __db1 ){
        /*
          this.__ig1.__xsi[__xer].push( ' [' + this.__ig1.nl2() + ']' );
          this.__ig1.donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        this.__ig1.donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async modifier1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /* conversion des données numériques début */
        form['chi_id_tache']=form['chi_id_tache'] === null ? ( null ) : ( parseInt( form['chi_id_tache'] , 10 ) );
        form['chp_priorite_tache']=form['chp_priorite_tache'] === null ? ( null ) : ( parseInt( form['chp_priorite_tache'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_texte_tache'] === null || form['chp_texte_tache'] === ''){
            this.__ig1.__xsi[__xer].push( 'la valeur pour "texte" doit être renseigné [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_priorite_tache'] === null || form['chp_priorite_tache'] === ''){
            this.__ig1.__xsi[__xer].push( 'la valeur pour "priorite" doit être renseigné [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __test_1_1=this.__ig1.__fnts_c_et_s.test_entier_compris_entre( 0 , 99 , form['chp_priorite_tache'] , 'priorite' );
        if(__test_1_1[__xst] !== __xsu){
            this.__ig1.__xsi[__xer].push( 'erreur sur le contenu de "priorite" [' + this.__ig1.nl2() + ']' );
            this.__ig1.donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail , this.__ig1.donnees_retournees , this.__ig1.options_generales );
        /* sélection du champ à modifier */
        let criteres_select_160={"T0_chi_id_tache" : form['chi_id_tache']};
        let tt160=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
        ;
        */
        /*sql_inclure_fin*/ 160 , criteres_select_160 , this.__ig1.donnees_retournees , __db1 );
        if(tt160[__xst] !== __xsu){
            this.__ig1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__ig1.nl2() );
            this.__ig1.donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt160[__xst] === __xsu && tt160[__xva].length === 1){
            let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , form , tt160[__xva][0] , __db1 );
            if(__actions_et_tests_avant_modifier[__xst] !== __xsu){
                return({"__xst" : __xer});
            }
            let criteres_161={
                 /*  */
                "c_chi_id_tache" : form['chi_id_tache'] ,
                "n_chp_texte_tache" : form['chp_texte_tache'] ,
                "n_chp_priorite_tache" : form['chp_priorite_tache'] ,
                "n_chx_utilisateur_tache" : form['chx_utilisateur_tache']
            };
            await __db1.exec( 'BEGIN TRANSACTION;' );
            let tt161=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_taches SET 
               `chp_texte_tache` = :n_chp_texte_tache , 
               `chp_priorite_tache` = :n_chp_priorite_tache , 
               `chd__dtm_tache` = :n_chd__dtm_tache , 
               `chx_utilisateur_tache` = :n_chx_utilisateur_tache
            WHERE `chi_id_tache` = :c_chi_id_tache ;
            */
            /*sql_inclure_fin*/ 161 , criteres_161 , this.__ig1.donnees_retournees , __db1 );
            if(tt161[__xst] !== __xsu){
                if(tt161['__xme'] !== ''){
                    this.__ig1.__xsi[__xer].push( tt161['__xme'] + ' [' + this.__ig1.nl2() );
                }else{
                    this.__ig1.__xsi[__xer].push( 'erreur de modification [' + this.__ig1.nl2() );
                }
                this.__ig1.donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt160[__xva][0] , __db1 );
            if(__taam[__xst] !== __xsu){
                await __db1.exec( 'ROLLBACK;' );
                this.__ig1.__xsi[__xer].push( 'erreur après modification [' + this.__ig1.nl2() );
                this.__ig1.donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
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
            let tt160_bis=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
             FROM b1.tbl_taches T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
            
            WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
            ;
            */
            /*sql_inclure_fin*/ 160 , criteres_select_160 , this.__ig1.donnees_retournees , __db1 );
            this.__ig1.donnees_retournees[__xva]['page_modification1']=tt160_bis;
        }else{
            this.__ig1.donnees_retournees[__xva]['page_modification1']=tt160;
        }
        this.__ig1.donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_tache=null , __db1=null ){
        if(chi_id_tache === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_tache'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_tache=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_tache(' + chi_id_tache + ')))))';
        }
        if(chi_id_tache === null){
            this.__ig1.__xsi[__xer].push( this.__ig1.nl2() );
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail , this.__ig1.donnees_retournees , this.__ig1.options_generales );
        }
        let tt160=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
        ;
        */
        /*sql_inclure_fin*/ 160 , {"T0_chi_id_tache" : chi_id_tache} , this.__ig1.donnees_retournees , __db1 );
        if(tt160[__xst] !== __xsu){
            this.__ig1.donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt160[__xva][0] , __db1 );
        if(aetam[__xst] !== __xsu){
            this.__ig1.donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt160;
        this.__ig1.donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_tache=null ){
        if(chi_id_tache === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_tache'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_tache=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail , this.__ig1.donnees_retournees , this.__ig1.options_generales );
        let criteres_160={
             /*  */
            "T0_chi_id_tache" : chi_id_tache
        };
        let tt160=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
        ;
        */
        /*sql_inclure_fin*/ 160 , criteres_160 , this.__ig1.donnees_retournees , __db1 );
        if(tt160[__xst] !== __xsu){
            this.__ig1.__xsi[__xer].push( '[' + this.__ig1.nl2() + ']' );
            this.__ig1.donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt160;
        this.__ig1.donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail , this.__ig1.donnees_retournees , this.__ig1.options_generales );
        let criteres_160={
             /*  */
            "T0_chi_id_tache" : form['chi_id_tache']
        };
        let tt160=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
        ;
        */
        /*sql_inclure_fin*/ 160 , criteres_160 , this.__ig1.donnees_retournees , __db1 );
        if(tt160[__xst] !== __xsu){
            this.__ig1.__xsi[__xer].push( '[' + this.__ig1.nl2() + ']' );
            this.__ig1.donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt160[__xva][0] , __db1 );
        if(tas[__xst] !== __xsu){
            this.__ig1.donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_114={
             /*  */
            "chi_id_tache" : form['chi_id_tache'] ,
            "chx_utilisateur_tache" : form['chx_utilisateur_tache']
        };
        console.log("criteres_114",criteres_114);
        let tt114=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_taches
        WHERE (`chi_id_tache` = :chi_id_tache
           AND `chx_utilisateur_tache` = :chx_utilisateur_tache) ;
        */
        /*sql_inclure_fin*/ 114 , criteres_114 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt114[__xst] !== __xsu){
            this.__ig1.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let aac=await this.actions_apres_supprimer( mat , d , form , tt160[__xva][0] , __db1 );
        if(aac[__xst] === __xer){
            this.__ig1.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
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
        let chi_id_tache=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_tache'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_tache=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_tache === 0){
            this.__ig1.__xsi[__xer].push( this.__ig1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail , this.__ig1.donnees_retournees , this.__ig1.options_generales );
        let critere_160={"T0_chi_id_tache" : chi_id_tache};
        let tt160=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
        ;
        */
        /*sql_inclure_fin*/ 160 , critere_160 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt160;
        this.__ig1.donnees_retournees.__xst=__xsu;
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
        form['chp_priorite_tache']=form['chp_priorite_tache'] === null || form['chp_priorite_tache'] === '' || form['chp_priorite_tache'] === undefined ? ( 0 ) : ( parseInt( form['chp_priorite_tache'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_texte_tache'] === null || form['chp_texte_tache'] === ''){
            this.__ig1.__xsi[__xer].push( 'la valeur pour "texte" doit être renseigné [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_priorite_tache'] === null || form['chp_priorite_tache'] === ''){
            this.__ig1.__xsi[__xer].push( 'la valeur pour "priorite" doit être renseigné [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __test_2_1=this.__ig1.__fnts_c_et_s.test_entier_compris_entre( 0 , 99 , form['chp_priorite_tache'] , 'priorite' );
        if(__test_2_1[__xst] !== __xsu){
            this.__ig1.__xsi[__xer].push( 'erreur sur le contenu de  "priorite" [' + this.__ig1.nl2() + ']' );
            this.__ig1.donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail , this.__ig1.donnees_retournees , this.__ig1.options_generales );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                        "chx_utilisateur_tache" : form['chx_utilisateur_tache'] ,
                        "chp_texte_tache" : form['chp_texte_tache'] ,
                        "chp_priorite_tache" : form['chp_priorite_tache']
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt111=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_taches`(
            `chx_utilisateur_tache` , 
            `chp_texte_tache` , 
            `chp_priorite_tache` , 
            `chd__dtm_tache` , 
            `chd__dtc_tache`
        ) VALUES (
            :chx_utilisateur_tache , 
            :chp_texte_tache , 
            :chp_priorite_tache , 
            :chd__dtm_tache , 
            :chd__dtc_tache
        );
        */
        /*sql_inclure_fin*/ 111 , donnees_sql , this.__ig1.donnees_retournees , __db1 );
        if(tt111[__xst] === __xsu){
            if(tt111['changements'] === 0){
                this.__ig1.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__ig1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let aac=await this.action_apres_creer( mat , d , tt111['nouvel_id'] , form , __db1 );
            if(aac[__xst] === __xer){
                await __db1.exec( 'ROLLBACK;' );
                this.__ig1.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__ig1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            await __db1.exec( 'COMMIT;' );
            if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , __db1 );
            }else{
                await this.page_modification1( mat , d , tt111['nouvel_id'] , __db1 );
            }
            this.__ig1.donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__ig1.__xsi[__xer].push( tt111['__xme'] + '\nl\'insertion a échoué [' + this.__ig1.nl2() + ']' );
            this.__ig1.donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
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
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail , this.__ig1.donnees_retournees , this.__ig1.options_generales );
        this.__ig1.donnees_retournees[__xva]['nouveau_numero_projet']=nouveau_numero_projet;
        this.__ig1.donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , __db1=null ){
        const __nbMax=40;
        let __num_page=0;
        let formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__ig1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres_110={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_110[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail , this.__ig1.donnees_retournees , this.__ig1.options_generales );
        }
        let tt110=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T0`.`chd__dtm_tache` , 
        `T0`.`chd__dtc_tache` , `T0`.`che__nur_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (   `T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
           AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
           AND `T0`.`chp_priorite_tache` = :T0_chp_priorite_tache
           AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache2) 
        ORDER BY `T0`.`chp_priorite_tache` ASC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 110 , criteres_110 , this.__ig1.donnees_retournees , __db1 );
        if(tt110.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt110[__xst] === __xsu && tt110[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres_110['debut']=__debut;
            tt110=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T0`.`chd__dtm_tache` , 
            `T0`.`chd__dtc_tache` , `T0`.`che__nur_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
             FROM b1.tbl_taches T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
            
            WHERE (   `T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
               AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
               AND `T0`.`chp_priorite_tache` = :T0_chp_priorite_tache
               AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache2) 
            ORDER BY `T0`.`chp_priorite_tache` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 110 , criteres_110 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(';
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva][this.fonction_liste]=tt110;
        this.__ig1.donnees_retournees.__xst=__xsu;
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
    async sous_liste1( mat , d ){
        this.fonction_liste='sous_liste1';
        await this.filtre1( mat , d );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi='taches2';
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
export{taches2 as taches2};