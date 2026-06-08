const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */'__xst';
const __xva=/* valeurs */'__xva';
const __xsi=/* signaux */'__xsi';
const __xac=/* actions */'__xac';
import {Database} from "https://deno.land/x/sqlite3/mod.ts";
/*
  =====================================================================================================================
*/
class travaux1{
    /*
      =============================================================================================================
      ================================== Attention, lancée en asynchrone ==========================================
      =============================================================================================================
    */
    async lancer_la_compilation( mat , d ){
        function sleep0( ms ){
            return(new Promise( ( resolve ) => {
                    setTimeout( resolve , ms );} ));
        }
        let t_init=performance.now();
        /*
          on attend 0.3 secondes
        */
        await sleep0( 300 );
        /* this.__ig1.ma_trace1( 'lancer_la_compilation' ); */
        /*
          this.__ig1.ma_trace1( 'this.__ig1.donnees_recues' , this.__ig1.donnees_recues );
          this.__ig1.ma_trace1( 'this.__ig1.donnees_retournees' , this.__ig1.donnees_retournees );
          this.__ig1.ma_trace1( 'this.__ig1.options_generales' , this.__ig1.options_generales );
        */
        try{
            /*
              on constitue la liste des projets 
            */
            let chemin_bdd_1='./__bases_de_donnees/bdd_1.sqlite';
            let __db1=null;
            try{
                __db1=new Database( chemin_bdd_1 , {"create" : false} );
            }catch(e){
                return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
            }
            let criteres_316={"T0_chi_id_projet" : 3};
            if(this.__ig1.donnees_retournees._CA_ === 2){
                criteres_316={"T0_chi_id_projet" : 1};
            }
            let tt316=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
             FROM b1.tbl_projets T0
            WHERE `T0`.`chi_id_projet` >= :T0_chi_id_projet
            ;
            */
            /*sql_inclure_fin*/ 316 , criteres_316 , this.__ig1.donnees_retournees , __db1 );
            if(this.__ig1.donnees_retournees._CA_ === 2){
                /* dans le cas du projet 2, on force un résultat */
                tt316.__xva.push( {"T0.chi_id_projet" : 1} );
            }else{
                if(tt316.__xst !== __xsu || tt316.__xva.length === 0){
                    return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
                }
            }
            await __db1.close();
            this.__ig1.ma_trace1( 't_init=' + t_init );
            let continuer=true;
            /* this.__ig1.ma_trace1( 'tt316.__xva=' , tt316.__xva ); */
            do{
                for(let i in tt316.__xva){
                    try{
                        /*
                          base système du projet
                        */
                        let chemin_bdd_1='';
                        if(this.__ig1.donnees_retournees._CA_ === 2){
                            chemin_bdd_1='../rev_2/__bases_de_donnees/bdd_1.sqlite';
                        }else{
                            chemin_bdd_1='../rev_1/__bases_de_donnees/bdd_' + tt316.__xva[i]['T0.chi_id_projet'] + '.sqlite';
                        }
                        /* this.__ig1.ma_trace1( 'chemin_bdd_1=' + chemin_bdd_1 ); */
                        let __dbn=null;
                        try{
                            __dbn=new Database( chemin_bdd_1 , {"create" : false} );
                            /* this.__ig1.ma_trace1( 'OK ouverture ' + chemin_bdd_1 ); */
                        }catch(e){
                            /*
                              console.log( 'e=' , e , e.stack );
                              this.__ig1.ma_trace1( 'Erreur ouverture ' + chemin_bdd_1 );
                            */
                            continue;
                        }
                        /* this.__ig1.ma_trace1( '__dbn=' , __dbn ); */
                        let criteres_400={
                             /*
                              on ne prend que 50 travaux par projet pour ne pas bloquer les autres
                             */
                            "T0_chp_etat_travail" : 'en_file_d_attente' ,
                            "quantitee" : /* 5 */50
                        };
                        let tt400=await this.__ig1.sql_iii(
                        /*sql_inclure_deb*/ /*#
                        SELECT 
                        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
                        `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur`
                         FROM b1.tbl_travaux T0
                         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_travail
                        
                        WHERE (`T0`.`chp_etat_travail` = :T0_chp_etat_travail) 
                        ORDER BY `T0`.`chi_id_travail` ASC  
                        LIMIT :quantitee OFFSET 0 
                        ;
                        */
                        /*sql_inclure_fin*/ 400 , criteres_400 , this.__ig1.donnees_retournees , __dbn );
                        await __dbn.close();
                        if(tt400.__xst !== __xsu){
                            return({"__xst" : __xer ,"__xme" : tt400.__xme});
                        }
                        /* this.__ig1.ma_trace1( 'tt400.__xva.length=' + tt400.__xva.length ); */
                        for( let i=0 ; i < tt400.__xva.length ; i++ ){
                            __dbn=new Database( chemin_bdd_1 , {"create" : false} );
                            let criteres_401_0={
                                "c_chi_id_travail" : tt400.__xva[i]['T0.chi_id_travail'] ,
                                "n_chp_etat_travail" : 'en_cours' ,
                                "n_cht_log_travail" : JSON.stringify( this.__ig1.donnees_retournees.__xsi , null , 2 ) ,
                                "n_chn_duree_travail" : 0
                            };
                            let tt401_0=await this.__ig1.sql_iii(
                            /*sql_inclure_deb*/ /*#
                            UPDATE b1.tbl_travaux SET 
                               `chp_etat_travail` = :n_chp_etat_travail , 
                               `cht_log_travail` = :n_cht_log_travail , 
                               `chn_duree_travail` = :n_chn_duree_travail
                            WHERE `chi_id_travail` = :c_chi_id_travail ;
                            */
                            /*sql_inclure_fin*/ 401 , criteres_401_0 , this.__ig1.donnees_retournees , __dbn );
                            await __dbn.close();
                            if(tt401_0.__xst !== __xsu){
                                return({"__xst" : __xer ,"__xme" : tt401.__xme});
                            }
                            this.__ig1.donnees_retournees.chi_id_utilisateur=1;
                            this.__ig1.donnees_retournees.chi_id_projet=tt400.__xva[i]['T0.chx_projet_travail'];
                            this.__ig1.donnees_retournees.chi_id_acces=tt400.__xva[i]['T1.chx_acces_utilisateur'];
                            this.__ig1.options_generales.base_de_travail=tt400.__xva[i]['T0.chx_projet_travail'];
                            if(this.__ig1.donnees_retournees._CA_ === 1 || this.__ig1.donnees_retournees._CA_ === 2){
                                await this.__ig1.obtenir_les_sql( [] , 0 );
                                await this.__ig1.obtenir_les_genres( [] , 0 );
                            }
                            let cht_rev_travail=tt400.__xva[i]['T0.cht_rev_travail'];
                            /* this.__ig1.ma_trace1('cht_rev_travail='+cht_rev_travail); */
                            let obj_matrice=await this.__ig1.__rev1.rev_tcm( cht_rev_travail );
                            if(obj_matrice.__xst !== __xsu){
                                return({"__xst" : __xer ,"__xme" : ' erreur de convertion en matrice [' + this.__ig1.nl2() + ']'});
                            }
                            let ret=null;
                            let heure_debut_travail=performance.now();
                            try{
                                /*
                                  =====================================================
                                  on exécute le travail ici
                                  =====================================================
                                */
                                /* this.__ig1.ma_trace1( 'obj_matrice[__xva]=' , obj_matrice[__xva] ); */
                                /* this.__ig1.ma_trace1( 'OK ici' ); */
                                ret=await this.__ig1.appel_fonction( obj_matrice[__xva] , 1 );
                                /* this.__ig1.ma_trace1('ret=',ret,obj_matrice[__xva]); */
                                function sleep1( ms ){
                                    return(new Promise( ( resolve ) => {
                                            setTimeout( resolve , ms );} ));
                                }
                                /*
                                  on fait une petite pause pour libérer du temps pour l'interface
                                */
                                await sleep1( 50 );
                            }catch(e){
                                this.__ig1.donnees_retournees.__xsi[__xal].push( ' erreur de appel_fonction [' + this.__ig1.nl2( e ) + ']' );
                                this.__ig1.ma_trace1( "return __xer" );
                                ret={"__xst" : __xer};
                            }
                            if(ret.__xst !== __xsu){
                                __dbn=new Database( chemin_bdd_1 , {"create" : false} );
                                let criteres_401={
                                    "c_chi_id_travail" : tt400.__xva[i]['T0.chi_id_travail'] ,
                                    "n_chp_etat_travail" : 'ko_termine' ,
                                    "n_cht_log_travail" : JSON.stringify( this.__ig1.donnees_retournees.__xsi , null , 2 ) ,
                                    "n_chn_duree_travail" : 0
                                };
                                let tt401=await this.__ig1.sql_iii(
                                /*sql_inclure_deb*/ /*#
                                UPDATE b1.tbl_travaux SET 
                                   `chp_etat_travail` = :n_chp_etat_travail , 
                                   `cht_log_travail` = :n_cht_log_travail , 
                                   `chn_duree_travail` = :n_chn_duree_travail
                                WHERE `chi_id_travail` = :c_chi_id_travail ;
                                */
                                /*sql_inclure_fin*/ 401 , criteres_401 , this.__ig1.donnees_retournees , __dbn );
                                if(tt401.__xst !== __xsu){
                                    await __dbn.close();
                                    return({"__xst" : __xer ,"__xme" : tt401.__xme});
                                }
                                await __dbn.close();
                                return({"__xst" : __xer ,"__xme" : ' erreur de appel_fonction [' + this.__ig1.nl2() + ']'});
                            }
                            let heure_fin_travail=performance.now();
                            let etat_travail='ok_termine';
                            let duree=parseInt( (heure_fin_travail - heure_debut_travail) * 1000 , 10 ) / 1000;
                            if(duree >= 3000){
                                /* un travail qui dure 3 secondes doit être signalé */
                                etat_travail='ok_mais_avertissement';
                            }
                            __dbn=new Database( chemin_bdd_1 , {"create" : false} );
                            let criteres_401={
                                 /*  */
                                "c_chi_id_travail" : tt400.__xva[i]['T0.chi_id_travail'] ,
                                "n_chp_etat_travail" : etat_travail ,
                                "n_cht_log_travail" : 'statut(OK),executer_job_cron(' + duree + ')' ,
                                "n_chn_duree_travail" : duree
                            };
                            let tt401=await this.__ig1.sql_iii(
                            /*sql_inclure_deb*/ /*#
                            UPDATE b1.tbl_travaux SET 
                               `chp_etat_travail` = :n_chp_etat_travail , 
                               `cht_log_travail` = :n_cht_log_travail , 
                               `chn_duree_travail` = :n_chn_duree_travail
                            WHERE `chi_id_travail` = :c_chi_id_travail ;
                            */
                            /*sql_inclure_fin*/ 401 , criteres_401 , this.__ig1.donnees_retournees , __dbn );
                            if(tt401.__xst !== __xsu){
                                await __dbn.close();
                                return({"__xst" : __xer ,"__xme" : tt401.__xme});
                            }
                            await __dbn.close();
                        }
                        let t1=performance.now();
                        let delta=t1 - t_init;
                        if(delta < 55000){
                            /*
                              à priori, on continue
                            */
                            continuer=true;
                            /*
                              mais si on n'a rien eu à faire et que le traitement a duré moins de 100ms ...
                            */
                            if(tt400.__xva.length === 0 && delta < 100){
                                /*
                                  ... alors on attend la prochaine vague
                                */
                                continuer=false;
                                this.__ig1.ma_trace1( 'on attend la prochaine vague' );
                            }else{
                                function sleep2( ms ){
                                    return(new Promise( ( resolve ) => {
                                            setTimeout( resolve , ms );} ));
                                }
                                /*
                                  on attend 1 secondes
                                */
                                await sleep2( 1000 );
                            }
                        }else{
                            continuer=false;
                        }
                    }catch(e){
                        this.__ig1.ma_trace1( 'rrrraaaah' , e );
                    }
                }
            }while(continuer === true);
            this.__ig1.envoyer_un_message_a_l_utilisateur( {"__xst" : __xal ,"__xme" : '⏲️ 👍 les travaux en arrière plan sont terminés'} );
        }catch(e){
            this.__ig1.envoyer_un_message_a_l_utilisateur( {"__xst" : __xer ,"__xme" : '⏲️ erreur dans les travaux en arrière plan'} );
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async compiler_les_travaux( mat , d ){
        /* lancement en asynchrone */
        this.lancer_la_compilation( mat , d );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer_les_travaux_termines( mat , d ){
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_404={
             /*  */
            "chp_etat_travail" : 'ok_termine'
        };
        let tt404=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(ne_pas_tester_les_dependances_de_suppression(1))
        
        DELETE FROM b1.tbl_travaux
        WHERE `chp_etat_travail` = :chp_etat_travail ;
        */
        /*sql_inclure_fin*/ 404 , criteres_404 , this.__ig1.donnees_retournees , __db1 );
        if(tt404.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt404.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer_les_travaux( mat , d ){
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_403={
             /*  */
            };
        let tt403=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(ne_pas_tester_les_dependances_de_suppression(1))
        
        DELETE FROM b1.tbl_travaux
        */
        /*sql_inclure_fin*/ 403 , criteres_403 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt403.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt403.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async demarrer_manuellement_job_cron( mat , d ){
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
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_396={"T0_chi_id_travail" : chi_id_travail ,"T0_chx_utilisateur_travail" : this.__ig1.donnees_retournees.chi_id_utilisateur};
        let tt396=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
        `T0`.`cht_utilisateur_travail` , `T0`.`chn_duree_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        
        WHERE `T0`.`chi_id_travail` = :T0_chi_id_travail
        ;
        */
        /*sql_inclure_fin*/ 396 , criteres_396 , this.__ig1.donnees_retournees , __db1 );
        /* this.__ig1.ma_trace1('tt396.__xva=',tt396.__xva); */
        if(tt396.__xst !== __xsu || tt396.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : tt396.__xme});
        }
        this.__ig1.donnees_recues.chi_id_utiliseteur=tt396.__xva[0]['T0.chx_utilisateur_travail'];
        this.__ig1.donnees_recues.chi_id_projet=tt396.__xva[0]['T0.chx_projet_travail'];
        this.__ig1.donnees_recues.chi_id_acces=tt396.__xva[0]['T1.chx_acces_utilisateur'];
        let cht_rev_travail=tt396.__xva[0]['T0.cht_rev_travail'];
        let obj_matrice=await this.__ig1.__rev1.rev_tcm( cht_rev_travail );
        if(obj_matrice.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : ' erreur de convertion en matrice [' + this.__ig1.nl2() + ']'});
        }
        /* this.__ig1.ma_trace1('cht_rev_travail=',cht_rev_travail); */
        this.__ig1.obtenir_les_genres( mat , d );
        this.__ig1.obtenir_les_sql( mat , d );
        /*
          =====================================================================================================
          éxécution du travail
        */
        let heure_debut_travail=performance.now();
        /* this.__ig1.ma_trace1('obj_matrice[__xva]=',obj_matrice[__xva]); */
        let ret=await this.__ig1.appel_fonction( obj_matrice[__xva] , 1 );
        /* this.__ig1.ma_trace1('ret=',ret,'cht_rev_travail='+cht_rev_travail); */
        if(ret.__xst !== __xsu){
            let criteres_401={
                "c_chi_id_travail" : chi_id_travail ,
                "n_chp_etat_travail" : 'ko_termine' ,
                "n_cht_log_travail" : JSON.stringify( this.__ig1.donnees_retournees.__xsi , null , 2 ) ,
                "n_chn_duree_travail" : 0
            };
            let tt401=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_travaux SET 
               `chp_etat_travail` = :n_chp_etat_travail , 
               `cht_log_travail` = :n_cht_log_travail , 
               `chn_duree_travail` = :n_chn_duree_travail
            WHERE `chi_id_travail` = :c_chi_id_travail ;
            */
            /*sql_inclure_fin*/ 401 , criteres_401 , this.__ig1.donnees_retournees , __db1 );
            return({"__xst" : __xer ,"__xme" : ' erreur de appel_fonction [' + this.__ig1.nl2() + ']'});
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
        let tt401=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_travaux SET 
           `chp_etat_travail` = :n_chp_etat_travail , 
           `cht_log_travail` = :n_cht_log_travail , 
           `chn_duree_travail` = :n_chn_duree_travail
        WHERE `chi_id_travail` = :c_chi_id_travail ;
        */
        /*sql_inclure_fin*/ 401 , criteres_401 , this.__ig1.donnees_retournees , __db1 );
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
        form['chi_id_travail']=form['chi_id_travail'] === null ? ( null ) : ( parseInt( form['chi_id_travail'] , 10 ) );
        form['chx_utilisateur_travail']=form['chx_utilisateur_travail'] === null ? ( null ) : ( parseInt( form['chx_utilisateur_travail'] , 10 ) );
        if(isNaN( form['chx_utilisateur_travail'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "utilisateur" doit être numérique'});
        }
        form['chn_duree_travail']=form['chn_duree_travail'] === null ? ( null ) : ( parseFloat( form['chn_duree_travail'] ) );
        if(isNaN( form['chn_duree_travail'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "durée" doit être numérique'});
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
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        /* sélection du champ à modifier */
        let criteres_select_396={"T0_chi_id_travail" : form['chi_id_travail']};
        let tt396=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
        `T0`.`cht_utilisateur_travail` , `T0`.`chn_duree_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        
        WHERE `T0`.`chi_id_travail` = :T0_chi_id_travail
        ;
        */
        /*sql_inclure_fin*/ 396 , criteres_select_396 , this.__ig1.donnees_retournees , __db1 );
        if(tt396.__xst !== __xsu || tt396.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [396 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt396[__xva][0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_397={
             /*  */
            "c_chi_id_travail" : form['chi_id_travail'] ,
            "n_chp_resume_travail" : form['chp_resume_travail'] ,
            "n_cht_rev_travail" : form['cht_rev_travail'] === '' ? ( null ) : ( form['cht_rev_travail'] ) ,
            "n_chx_utilisateur_travail" : form['chx_utilisateur_travail'] ,
            "n_cht_utilisateur_travail" : form['cht_utilisateur_travail'] === '' ? ( null ) : ( form['cht_utilisateur_travail'] ) ,
            "n_chp_etat_travail" : form['chp_etat_travail'] ,
            "n_cht_log_travail" : form['cht_log_travail'] === '' ? ( null ) : ( form['cht_log_travail'] ) ,
            "n_chn_duree_travail" : form['chn_duree_travail'] === '' ? ( null ) : ( form['chn_duree_travail'] )
        };
        /* =========================== mise à jour effective ======================== */
        let tt397=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_travaux SET 
           `chp_resume_travail` = :n_chp_resume_travail , 
           `cht_rev_travail` = :n_cht_rev_travail , 
           `chx_utilisateur_travail` = :n_chx_utilisateur_travail , 
           `cht_utilisateur_travail` = :n_cht_utilisateur_travail , 
           `chp_etat_travail` = :n_chp_etat_travail , 
           `cht_log_travail` = :n_cht_log_travail , 
           `chn_duree_travail` = :n_chn_duree_travail , 
           `chx_projet_travail` = chi_id_projet
        WHERE `chi_id_travail` = :c_chi_id_travail ;
        */
        /*sql_inclure_fin*/ 397 , criteres_397 , this.__ig1.donnees_retournees , __db1 );
        if(tt397.__xst !== __xsu || tt397.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt397.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt396[__xva][0] , __db1 );
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
        let tt396_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
        `T0`.`cht_utilisateur_travail` , `T0`.`chn_duree_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        
        WHERE `T0`.`chi_id_travail` = :T0_chi_id_travail
        ;
        */
        /*sql_inclure_fin*/ 396 , criteres_select_396 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt396_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_travail=null , __db1=null ){
        if(chi_id_travail === null){
            const l01=mat.length;
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
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_travail(' + chi_id_travail + ')))))';
        }
        if(chi_id_travail === null){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt396=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
        `T0`.`cht_utilisateur_travail` , `T0`.`chn_duree_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        
        WHERE `T0`.`chi_id_travail` = :T0_chi_id_travail
        ;
        */
        /*sql_inclure_fin*/ 396 , {"T0_chi_id_travail" : chi_id_travail} , this.__ig1.donnees_retournees , __db1 );
        if(tt396.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt396.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt396[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt396;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_travail=null ){
        if(chi_id_travail === null){
            const l01=mat.length;
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
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_396={
             /*  */
            "T0_chi_id_travail" : chi_id_travail
        };
        let tt396=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
        `T0`.`cht_utilisateur_travail` , `T0`.`chn_duree_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        
        WHERE `T0`.`chi_id_travail` = :T0_chi_id_travail
        ;
        */
        /*sql_inclure_fin*/ 396 , criteres_396 , this.__ig1.donnees_retournees , __db1 );
        if(tt396.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt396.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt396;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_travail=0;
        const l01=mat.length;
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_396={"T0_chi_id_travail" : chi_id_travail};
        let tt396=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
        `T0`.`cht_utilisateur_travail` , `T0`.`chn_duree_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        
        WHERE `T0`.`chi_id_travail` = :T0_chi_id_travail
        ;
        */
        /*sql_inclure_fin*/ 396 , critere_396 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_voir1']=tt396;
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
        let criteres_396={
             /*  */
            "T0_chi_id_travail" : form['chi_id_travail']
        };
        let tt396=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
        `T0`.`cht_utilisateur_travail` , `T0`.`chn_duree_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        
        WHERE `T0`.`chi_id_travail` = :T0_chi_id_travail
        ;
        */
        /*sql_inclure_fin*/ 396 , criteres_396 , this.__ig1.donnees_retournees , __db1 );
        if(tt396.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt396.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt396[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_399={
             /*  */
            "chi_id_travail" : form['chi_id_travail']
        };
        let tt399=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_travaux
        WHERE `chi_id_travail` = :chi_id_travail ;
        */
        /*sql_inclure_fin*/ 399 , criteres_399 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt399.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt399.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , form , tt396[__xva][0] , __db1 );
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
        let chi_id_travail=0;
        const l01=mat.length;
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_396={"T0_chi_id_travail" : chi_id_travail};
        let tt396=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
        `T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
        `T0`.`cht_utilisateur_travail` , `T0`.`chn_duree_travail`
         FROM b1.tbl_travaux T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail
        
        WHERE `T0`.`chi_id_travail` = :T0_chi_id_travail
        ;
        */
        /*sql_inclure_fin*/ 396 , critere_396 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt396;
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
        form['chx_utilisateur_travail']=form['chx_utilisateur_travail'] === null || form['chx_utilisateur_travail'] === '' || form['chx_utilisateur_travail'] === undefined ? ( null ) : ( parseInt( form['chx_utilisateur_travail'] , 10 ) );
        /* conversion des données numériques fin */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_398={
            "donnees" : [{
                        "chp_resume_travail" : form['chp_resume_travail'] ,
                        "cht_rev_travail" : form['cht_rev_travail'] === '' ? ( null ) : ( form['cht_rev_travail'] ) ,
                        "chx_utilisateur_travail" : form['chx_utilisateur_travail'] ,
                        "chp_etat_travail" : form['chp_etat_travail'] ,
                        "cht_utilisateur_travail" : form['cht_utilisateur_travail'] === '' ? ( null ) : ( form['cht_utilisateur_travail'] )
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt398=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_travaux`(
            `chp_resume_travail` , 
            `cht_rev_travail` , 
            `chx_utilisateur_travail` , 
            `chd_dtc_travail` , 
            `chp_etat_travail` , 
            `cht_utilisateur_travail` , 
            `chx_projet_travail`
        ) VALUES (
            :chp_resume_travail , 
            :cht_rev_travail , 
            :chx_utilisateur_travail , 
            :chd_dtc_travail , 
            :chp_etat_travail , 
            :cht_utilisateur_travail , 
            chi_id_projet
        );
        */
        /*sql_inclure_fin*/ 398 , criteres_398 , this.__ig1.donnees_retournees , __db1 );
        if(tt398.__xst !== __xsu || tt398['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt398.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let __aapc=await this.action_apres_creer( mat , d , tt398['nouvel_id'] , form , __db1 );
        if(__aapc.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aapc.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt398['nouvel_id'] , __db1 );
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
        const formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__ig1.est_num( formulaire.__num_page )){
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
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_395[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt395=await this.__ig1.sql_iii(
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
        /*sql_inclure_fin*/ 395 , criteres_395 , this.__ig1.donnees_retournees , __db1 );
        if(tt395.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt395.__xme});
        }
        if(tt395.__xst === __xsu && tt395.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_395['debut']=__debut;
            tt395=await this.__ig1.sql_iii(
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
            /*sql_inclure_fin*/ 395 , criteres_395 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva][this.fonction_liste]=tt395;
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
    moi='travaux1';
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
export{travaux1 as travaux1};