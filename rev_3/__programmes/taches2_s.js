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
        form['chi_id_tache']=form['chi_id_tache'] === null ? ( null ) : ( parseInt( form['chi_id_tache'] , 10 ) );
        form['chp_priorite_tache']=form['chp_priorite_tache'] === null ? ( null ) : ( parseInt( form['chp_priorite_tache'] , 10 ) );
        if(isNaN( form['chp_priorite_tache'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "priorite" doit être numérique'});
        }
        form['chx_utilisateur_tache']=form['chx_utilisateur_tache'] === null ? ( null ) : ( parseInt( form['chx_utilisateur_tache'] , 10 ) );
        if(isNaN( form['chx_utilisateur_tache'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "utilisateur" doit être numérique'});
        }
        /*
          =====================================================================================================
          conversion des données numériques fin
        */
        let retour_a_la_liste=false;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        /* sélection du champ à modifier */
        let criteres_select_511={"T0_chi_id_tache" : form['chi_id_tache']};
        let tt511=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
        ;
        */
        /*sql_inclure_fin*/ 511 , criteres_select_511 , this.__ig1.donnees_retournees , __db1 );
        if(tt511.__xst !== __xsu || tt511.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [511 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt511[__xva][0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_512={
             /*  */
            "c_chi_id_tache" : form['chi_id_tache'] ,
            "n_chp_texte_tache" : form['chp_texte_tache'] ,
            "n_chp_priorite_tache" : form['chp_priorite_tache'] ,
            "n_chx_utilisateur_tache" : form['chx_utilisateur_tache']
        };
        /* =========================== mise à jour effective ======================== */
        let tt512=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_taches SET 
           `chp_texte_tache` = :n_chp_texte_tache , 
           `chp_priorite_tache` = :n_chp_priorite_tache , 
           `chd__dtm_tache` = :n_chd__dtm_tache , 
           `chx_utilisateur_tache` = :n_chx_utilisateur_tache
        WHERE `chi_id_tache` = :c_chi_id_tache ;
        */
        /*sql_inclure_fin*/ 512 , criteres_512 , this.__ig1.donnees_retournees , __db1 );
        if(tt512.__xst !== __xsu || tt512.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt512.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt511[__xva][0] , __db1 );
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
        let tt511_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
        ;
        */
        /*sql_inclure_fin*/ 511 , criteres_select_511 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt511_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_tache=null , __db1=null ){
        if(chi_id_tache === null){
            const l01=mat.length;
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
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( 1 );
        }
        let tt511=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
        ;
        */
        /*sql_inclure_fin*/ 511 , {"T0_chi_id_tache" : chi_id_tache} , this.__ig1.donnees_retournees , __db1 );
        if(tt511.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt511.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt511[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt511;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_tache=null ){
        if(chi_id_tache === null){
            const l01=mat.length;
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
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let criteres_511={
             /*  */
            "T0_chi_id_tache" : chi_id_tache
        };
        let tt511=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
        ;
        */
        /*sql_inclure_fin*/ 511 , criteres_511 , this.__ig1.donnees_retournees , __db1 );
        if(tt511.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt511.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt511;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_tache=0;
        const l01=mat.length;
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let critere_511={"T0_chi_id_tache" : chi_id_tache};
        let tt511=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
        ;
        */
        /*sql_inclure_fin*/ 511 , critere_511 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_voir1']=tt511;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let criteres_511={
             /*  */
            "T0_chi_id_tache" : form['chi_id_tache']
        };
        let tt511=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
        ;
        */
        /*sql_inclure_fin*/ 511 , criteres_511 , this.__ig1.donnees_retournees , __db1 );
        if(tt511.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt511.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt511[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_514={
             /*  */
            "chi_id_tache" : form['chi_id_tache']
        };
        let tt514=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_taches
        WHERE `chi_id_tache` = :chi_id_tache ;
        */
        /*sql_inclure_fin*/ 514 , criteres_514 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt514.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt514.__xme});
        }
        let aac=await this.actions_apres_supprimer( mat , d , form , tt511[__xva][0] , __db1 );
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
        let chi_id_tache=0;
        const l01=mat.length;
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let critere_511={"T0_chi_id_tache" : chi_id_tache};
        let tt511=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE `T0`.`chi_id_tache` = :T0_chi_id_tache
        ;
        */
        /*sql_inclure_fin*/ 511 , critere_511 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt511;
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
        /* conversion des données numériques début */
        form['chx_utilisateur_tache']=form['chx_utilisateur_tache'] === null || form['chx_utilisateur_tache'] === '' || form['chx_utilisateur_tache'] === undefined ? ( null ) : ( parseInt( form['chx_utilisateur_tache'] , 10 ) );
        form['chp_priorite_tache']=form['chp_priorite_tache'] === null || form['chp_priorite_tache'] === '' || form['chp_priorite_tache'] === undefined ? ( 0 ) : ( parseInt( form['chp_priorite_tache'] , 10 ) );
        /* conversion des données numériques fin */
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_513={
            "donnees" : [{
                        "chx_utilisateur_tache" : form['chx_utilisateur_tache'] ,
                        "chp_texte_tache" : form['chp_texte_tache'] ,
                        "chp_priorite_tache" : form['chp_priorite_tache']
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt513=await this.__ig1.sql_iii(
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
        /*sql_inclure_fin*/ 513 , criteres_513 , this.__ig1.donnees_retournees , __db1 );
        if(tt513.__xst !== __xsu || tt513['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt513.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let aac=await this.action_apres_creer( mat , d , tt513['nouvel_id'] , form , __db1 );
        if(aac.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : 'les actions après créer ont échouées [' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt513['nouvel_id'] , __db1 );
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
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
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
        const formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__ig1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres_510={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_510[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_181[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( 1 );
        }
        let tt510=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T0`.`chd__dtm_tache` , 
        `T0`.`chd__dtc_tache` , `T0`.`che__nur_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
         FROM b1.tbl_taches T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
        
        WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
           AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
           AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
           AND `T0`.`chp_priorite_tache` = :T0_chp_priorite_tache
           AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache2
           AND `T1`.`chp_nom_de_connexion_utilisateur` LIKE :T1_chp_nom_de_connexion_utilisateur) 
        ORDER BY `T0`.`chp_priorite_tache` ASC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 510 , criteres_510 , this.__ig1.donnees_retournees , __db1 );
        if(tt510.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt510.__xme});
        }
        if(tt510.__xst === __xsu && tt510.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_510['debut']=__debut;
            tt510=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`chp_priorite_tache` , `T0`.`chd__dtm_tache` , 
            `T0`.`chd__dtc_tache` , `T0`.`che__nur_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
             FROM b1.tbl_taches T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache
            
            WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
               AND `T0`.`chx_utilisateur_tache` = :T0_chx_utilisateur_tache
               AND `T0`.`chp_texte_tache` LIKE :T0_chp_texte_tache
               AND `T0`.`chp_priorite_tache` = :T0_chp_priorite_tache
               AND `T0`.`chp_priorite_tache` < :T0_chp_priorite_tache2
               AND `T1`.`chp_nom_de_connexion_utilisateur` LIKE :T1_chp_nom_de_connexion_utilisateur) 
            ORDER BY `T0`.`chp_priorite_tache` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 510 , criteres_510 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva][this.fonction_liste]=tt510;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d ){
        this.fonction_liste='liste1';
        return(await this.filtre1( mat , d ));
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