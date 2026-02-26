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
class travaux1{
    /*
      =============================================================================================================
    */
    async supprimer_les_travaux_termines( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_404={
             /*  */
            "chp_etat_travail" : 'ok_termine'
        };
        let tt404=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(ne_pas_tester_les_dependances_de_suppression(1))
        
        DELETE FROM b1.tbl_travaux
        WHERE `chp_etat_travail` = :chp_etat_travail ;
        */
        /*sql_inclure_fin*/ 404 , criteres_404 , donnees_retournees , __db1 );
        if(tt404[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer_les_travaux( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_403={
             /*  */
            };
        let tt403=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(ne_pas_tester_les_dependances_de_suppression(1))
        
        DELETE FROM b1.tbl_travaux
        */
        /*sql_inclure_fin*/ 403 , criteres_403 , donnees_retournees , __db1 );
        /*  */
        if(tt403[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async demarrer_manuellement_job_cron( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_travail=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_travail'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_travail=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_396={"T0_chi_id_travail" : chi_id_travail ,"T0_chx_utilisateur_travail" : donnees_retournees.chi_id_utilisateur};
        let tt396=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
        `T0`.`cht_utilisateur_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        
        WHERE (`T0`.`chi_id_travail` = :T0_chi_id_travail
           AND `T0`.`chx_utilisateur_travail` = :T0_chx_utilisateur_travail)
        ;
        */
        /*sql_inclure_fin*/ 396 , criteres_396 , donnees_retournees , __db1 );
        /* this.__gi1.ma_trace1('tt396.__xva=',tt396.__xva); */
        if(tt396.__xst !== __xsu || tt396.__xva.length !== 1){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        donnees_recues.chi_id_utiliseteur=tt396.__xva[0]['T0.chx_utilisateur_travail'];
        donnees_recues.chi_id_projet=tt396.__xva[0]['T0.chx_projet_travail'];
        donnees_recues.chi_id_acces=tt396.__xva[0]['T1.chx_acces_utilisateur'];
        let cht_rev_travail=tt396.__xva[0]['T0.cht_rev_travail'];
        let obj_matrice=await this.__gi1.__rev1.rev_tcm( cht_rev_travail );
        if(obj_matrice[__xst] !== __xsu){
            this.__gi1.__xsi[__xal].push( ' erreur de convertion en matrice [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /* this.__gi1.ma_trace1('cht_rev_travail=',cht_rev_travail); */
        this.__gi1.obtenir_les_genres( mat , d , donnees_recues , donnees_retournees , options_generales );
        this.__gi1.obtenir_les_sql( mat , d , donnees_recues , donnees_retournees , options_generales );
        /*
          =====================================================================================================
          éxécution du travail
        */
        let heure_debut_travail=performance.now();
        let ret=await this.__gi1.appel_fonction( obj_matrice[__xva] , 1 , donnees_recues , donnees_retournees , options_generales );
        /* this.__gi1.ma_trace1('ret=',ret,'cht_rev_travail='+cht_rev_travail); */
        if(ret.__xst !== __xsu){
            let criteres_401={
                "c_chi_id_travail" : chi_id_travail ,
                "n_chp_etat_travail" : 'ko_termine' ,
                "n_cht_log_travail" : JSON.stringify( this.__gi1.__xsi , null , 2 ) ,
                "n_chn_duree_travail" : 0
            };
            let tt401=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_travaux SET 
               `chp_etat_travail` = :n_chp_etat_travail , 
               `cht_log_travail` = :n_cht_log_travail , 
               `chn_duree_travail` = :n_chn_duree_travail
            WHERE `chi_id_travail` = :c_chi_id_travail ;
            */
            /*sql_inclure_fin*/ 401 , criteres_401 , donnees_retournees , __db1 );
            this.__gi1.__xsi[__xal].push( ' erreur de appel_fonction [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let heure_fin_travail=performance.now();
        let etat_travail='ok_termine';
        let duree=parseInt( (heure_fin_travail - heure_debut_travail) * 1000 , 10 ) / 1000;
        if(duree >= 3000){
            /* un travail qui dure 3 secondes doit être signalé */
            etat_travail='ok_mais_avertissement';
        }
        let criteres_401={
             /*  */
            "c_chi_id_travail" : chi_id_travail ,
            "n_chp_etat_travail" : etat_travail ,
            "n_cht_log_travail" : 'statut(OK),executer_job_cron(' + duree + ')' ,
            "n_chn_duree_travail" : duree
        };
        let tt401=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_travaux SET 
           `chp_etat_travail` = :n_chp_etat_travail , 
           `cht_log_travail` = :n_cht_log_travail , 
           `chn_duree_travail` = :n_chn_duree_travail
        WHERE `chi_id_travail` = :c_chi_id_travail ;
        */
        /*sql_inclure_fin*/ 401 , criteres_401 , donnees_retournees , __db1 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant , __db1 ){
        /*#
          let obj=await this.faire_un_traitement( __xva_avant['T0.chi_id_travail'] ,  donnees_retournees , options_generales , __db1 );
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
    async tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
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
    async actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
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
    async modifier1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /* conversion des données numériques début */
        form['chi_id_travail']=form['chi_id_travail'] === null ? ( null ) : ( parseInt( form['chi_id_travail'] , 10 ) );
        form['chx_utilisateur_travail']=form['chx_utilisateur_travail'] === null ? ( null ) : ( parseInt( form['chx_utilisateur_travail'] , 10 ) );
        form['chx_projet_travail']=form['chx_projet_travail'] === null ? ( null ) : ( parseInt( form['chx_projet_travail'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_resume_travail'] === null || form['chp_resume_travail'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "résumé du travail" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_etat_travail'] === null || form['chp_etat_travail'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "état du travail" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chx_projet_travail'] === null || form['chx_projet_travail'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "référence du projet" doit être renseigné [' + this.__gi1.nl2() + ']' );
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
        let criteres_select_396={"T0_chi_id_travail" : form['chi_id_travail'] ,"T0_chx_utilisateur_travail" : donnees_retournees.chi_id_utilisateur};
        let tt396=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
        `T0`.`cht_utilisateur_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        
        WHERE (`T0`.`chi_id_travail` = :T0_chi_id_travail
           AND `T0`.`chx_utilisateur_travail` = :T0_chx_utilisateur_travail)
        ;
        */
        /*sql_inclure_fin*/ 396 , criteres_select_396 , donnees_retournees , __db1 );
        if(tt396[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt396[__xst] === __xsu && tt396[__xva].length === 1){
            let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt396[__xva][0] , __db1 );
            if(__actions_et_tests_avant_modifier[__xst] !== __xsu){
                return({"__xst" : __xer});
            }
            let criteres_397={
                 /*  */
                "c_chi_id_travail" : form['chi_id_travail'] ,
                "n_chp_resume_travail" : form['chp_resume_travail'] ,
                "n_cht_rev_travail" : form['cht_rev_travail'] === '' ? ( null ) : ( form['cht_rev_travail'] ) ,
                "n_chp_etat_travail" : form['chp_etat_travail'] ,
                "n_chx_projet_travail" : form['chx_projet_travail'] ,
                "n_chd_dtc_travail" : donnees_retournees.date_heure_serveur
            };
            await __db1.exec( 'BEGIN TRANSACTION;' );
            let tt397=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_travaux SET 
               `chp_resume_travail` = :n_chp_resume_travail , 
               `cht_rev_travail` = :n_cht_rev_travail , 
               `chd_dtc_travail` = :n_chd_dtc_travail , 
               `chp_etat_travail` = :n_chp_etat_travail , 
               `chx_projet_travail` = :n_chx_projet_travail , 
               `cht_log_travail` = :n_cht_log_travail
            WHERE `chi_id_travail` = :c_chi_id_travail ;
            */
            /*sql_inclure_fin*/ 397 , criteres_397 , donnees_retournees , __db1 );
            if(tt397[__xst] !== __xsu){
                if(tt397['__xme'] !== ''){
                    this.__gi1.__xsi[__xer].push( tt397['__xme'] + ' [' + this.__gi1.nl2() );
                }else{
                    this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                }
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let __taam=await this.tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt396[__xva][0] , __db1 );
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
            let tt396_bis=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
            `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
            `T0`.`cht_utilisateur_travail`
             FROM b1.tbl_travaux T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
            
            WHERE (`T0`.`chi_id_travail` = :T0_chi_id_travail
               AND `T0`.`chx_utilisateur_travail` = :T0_chx_utilisateur_travail)
            ;
            */
            /*sql_inclure_fin*/ 396 , criteres_select_396 , donnees_retournees , __db1 );
            donnees_retournees[__xva]['page_modification1']=tt396_bis;
        }else{
            donnees_retournees[__xva]['page_modification1']=tt396;
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_travail=null , __db1=null ){
        if(chi_id_travail === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_travail'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_travail=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_travail(' + chi_id_travail + ')))))';
        }
        if(chi_id_travail === null){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt396=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
        `T0`.`cht_utilisateur_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        
        WHERE (`T0`.`chi_id_travail` = :T0_chi_id_travail
           AND `T0`.`chx_utilisateur_travail` = :T0_chx_utilisateur_travail)
        ;
        */
        /*sql_inclure_fin*/ 396 , {"T0_chi_id_travail" : chi_id_travail ,"T0_chx_utilisateur_travail" : donnees_retournees.chi_id_utilisateur} , donnees_retournees , __db1 );
        if(tt396[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , tt396[__xva][0] , __db1 );
        if(aetam[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_modification1']=tt396;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_travail=null ){
        if(chi_id_travail === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_travail'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_travail=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_396={
             /*  */
            "T0_chi_id_travail" : chi_id_travail ,
            "T0_chx_utilisateur_travail" : donnees_retournees.chi_id_utilisateur
        };
        let tt396=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
        `T0`.`cht_utilisateur_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        
        WHERE (`T0`.`chi_id_travail` = :T0_chi_id_travail
           AND `T0`.`chx_utilisateur_travail` = :T0_chx_utilisateur_travail)
        ;
        */
        /*sql_inclure_fin*/ 396 , criteres_396 , donnees_retournees , __db1 );
        if(tt396[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_duplication1']=tt396;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_396={
             /*  */
            "T0_chi_id_travail" : form['chi_id_travail'] ,
            "T0_chx_utilisateur_travail" : donnees_retournees.chi_id_utilisateur
        };
        let tt396=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
        `T0`.`cht_utilisateur_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        
        WHERE (`T0`.`chi_id_travail` = :T0_chi_id_travail
           AND `T0`.`chx_utilisateur_travail` = :T0_chx_utilisateur_travail)
        ;
        */
        /*sql_inclure_fin*/ 396 , criteres_396 , donnees_retournees , __db1 );
        if(tt396[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt396[__xva][0] , __db1 );
        if(tas[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_399={
             /*  */
            "chi_id_travail" : form['chi_id_travail']
        };
        let tt399=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_travaux
        WHERE `chi_id_travail` = :chi_id_travail ;
        */
        /*sql_inclure_fin*/ 399 , criteres_399 , donnees_retournees , __db1 );
        /*  */
        if(tt399[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let aac=await this.actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt396[__xva][0] , __db1 );
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
        let chi_id_travail=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_travail'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_travail=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_travail === 0){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let critere_396={"T0_chi_id_travail" : chi_id_travail ,"T0_chx_utilisateur_travail" : donnees_retournees.chi_id_utilisateur};
        let tt396=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
        `T0`.`cht_utilisateur_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        
        WHERE (`T0`.`chi_id_travail` = :T0_chi_id_travail
           AND `T0`.`chx_utilisateur_travail` = :T0_chx_utilisateur_travail)
        ;
        */
        /*sql_inclure_fin*/ 396 , critere_396 , donnees_retournees , __db1 );
        donnees_retournees[__xva]['page_confirmation_supprimer1']=tt396;
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
        form['chx_projet_travail']=form['chx_projet_travail'] === null || form['chx_projet_travail'] === '' || form['chx_projet_travail'] === undefined ? ( 1 ) : ( parseInt( form['chx_projet_travail'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_resume_travail'] === null || form['chp_resume_travail'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "résumé du travail" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_etat_travail'] === null || form['chp_etat_travail'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "état du travail" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chx_projet_travail'] === null || form['chx_projet_travail'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "référence du projet" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let __tac=await this.tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 );
        if(__tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                        "chp_resume_travail" : form['chp_resume_travail'] ,
                        "cht_rev_travail" : form['cht_rev_travail'] === '' ? ( null ) : ( form['cht_rev_travail'] ) ,
                        "chx_utilisateur_travail" : form['chx_utilisateur_travail'] ,
                        "cht_utilisateur_travail" : donnees_retournees.chp_nom_de_connexion_utilisateur ,
                        "chp_etat_travail" : form['chp_etat_travail'] ,
                        "chx_projet_travail" : form['chx_projet_travail']
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt398=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_travaux`(
            `chp_resume_travail` , 
            `cht_rev_travail` , 
            `chx_utilisateur_travail` , 
            `chd_dtc_travail` , 
            `chp_etat_travail` , 
            `chx_projet_travail` , 
            `cht_utilisateur_travail`
        ) VALUES (
            :chp_resume_travail , 
            :cht_rev_travail , 
            :chx_utilisateur_travail , 
            :chd_dtc_travail , 
            :chp_etat_travail , 
            :chx_projet_travail , 
            :cht_utilisateur_travail
        );
        */
        /*sql_inclure_fin*/ 398 , donnees_sql , donnees_retournees , __db1 );
        if(tt398[__xst] === __xsu){
            if(tt398['changements'] === 0){
                this.__gi1.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let aac=await this.action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , tt398['nouvel_id'] , form , __db1 );
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
                await this.page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , tt398['nouvel_id'] , __db1 );
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( tt398['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
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
               m1(n1('+this.moi+'),f1(page_creer1()))
          par :
          pm1( m1(n1('+this.moi+'),f1(page_creer1())) )
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
        let criteres_395={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_395[i]=formulaire[i];
            }
        }
        /* debut ==== on force le(s) champ(s) en session =============================== */
        criteres_395['T0_chx_utilisateur_travail']=donnees_retournees.chi_id_utilisateur;
        /* fin ====== on force le(s) champ(s) en session =============================== */
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt395=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T0`.`cht_utilisateur_travail` , `T0`.`chn_duree_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_travail
        
        WHERE (`T0`.`chi_id_travail` = :T0_chi_id_travail
           AND `T0`.`chp_resume_travail` LIKE :T0_chp_resume_travail
           AND `T0`.`cht_rev_travail` LIKE :T0_cht_rev_travail
           AND `T0`.`chx_utilisateur_travail` = :T0_chx_utilisateur_travail
           AND `T0`.`chd_dtc_travail` LIKE :T0_chd_dtc_travail
           AND `T1`.`chp_nom_de_connexion_utilisateur` LIKE :T1_chp_nom_de_connexion_utilisateur
           AND `T0`.`chp_etat_travail` LIKE :T0_chp_etat_travail) 
        ORDER BY `T0`.`chi_id_travail` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 395 , criteres_395 , donnees_retournees , __db1 );
        if(tt395.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt395[__xst] === __xsu && tt395[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres_395['debut']=__debut;
            let tt395=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
            `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T0`.`cht_utilisateur_travail` , `T0`.`chn_duree_travail`
             FROM b1.tbl_travaux T0
             LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_travail
            
            WHERE (`T0`.`chi_id_travail` = :T0_chi_id_travail
               AND `T0`.`chp_resume_travail` LIKE :T0_chp_resume_travail
               AND `T0`.`cht_rev_travail` LIKE :T0_cht_rev_travail
               AND `T0`.`chx_utilisateur_travail` = :T0_chx_utilisateur_travail
               AND `T0`.`chd_dtc_travail` LIKE :T0_chd_dtc_travail
               AND `T1`.`chp_nom_de_connexion_utilisateur` LIKE :T1_chp_nom_de_connexion_utilisateur
               AND `T0`.`chp_etat_travail` LIKE :T0_chp_etat_travail) 
            ORDER BY `T0`.`chi_id_travail` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 395 , criteres_395 , donnees_retournees , __db1 );
        }
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(';
        for(let i in formulaire){
            donnees_retournees[__xac]+=this.__gi1.__fnt1.critere_liste( formulaire , i );
        }
        donnees_retournees[__xac]+='))))';
        donnees_retournees[__xva][this.fonction_liste]=tt395;
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
    moi='travaux1';
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
export{travaux1 as travaux1};