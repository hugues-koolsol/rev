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
    async gererer_les_autorisation_serveur( mat , d , donnees_recues , donnees_retournees , options_generales , __db1=null ){
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let criteres_select_162={
             /* recherche des accès >1 */
            };
        let tt162=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_acces`
         FROM b1.tbl_acces T0
        WHERE `T0`.`chi_id_acces` > 1
        ;
        */
        /*sql_inclure_fin*/ 162 , criteres_select_162 , donnees_retournees , __db1 );
        if(tt162[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_select_151={
             /* recherche des autorisations globales */
            };
        let tt151=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chp_nom_source`
         FROM b1.tbl_sources T0
        WHERE `T0`.`che_autorisation_globale_source` = 1
        ;
        */
        /*sql_inclure_fin*/ 151 , criteres_select_151 , donnees_retournees , __db1 );
        if(tt151[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let autorisations_globales={};
        for(let k1 in tt151.__xva){
            autorisations_globales[tt151.__xva[k1]['T0.chp_nom_source'].substr( 0 , tt151.__xva[k1]['T0.chp_nom_source'].length - 5 )]=0;
        }
        let criteres_select_152={"T1_chp_nom_source" : /* on récupère les autorisations serveur */'%_s.js'};
        let tt152=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_autorisation
        
        WHERE (`T1`.`chp_nom_source` LIKE :T1_chp_nom_source
           AND `T0`.`chx_acces_autorisation` > 1) 
        ORDER BY `T0`.`chx_acces_autorisation` ASC
        ;
        */
        /*sql_inclure_fin*/ 152 , criteres_select_152 , donnees_retournees , __db1 );
        if(tt152.__xst !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chx_acces_autorisation=0;
        let tableau_des_auto={};
        for(let k1 in tt152.__xva){
            let v1=tt152.__xva[k1];
            if(chx_acces_autorisation !== v1['T0.chx_acces_autorisation']){
                if(chx_acces_autorisation === 0){
                    tableau_des_auto[v1['T1.chp_nom_source'].substr( 0 , v1['T1.chp_nom_source'].length - 5 )]=v1['T0.chi_id_autorisation'];
                }else{
                    /* on concatène les autorisations générales et particulières array_merge , concat */
                    tableau_des_auto={ ...tableau_des_auto  , ...autorisations_globales };
                    let nom_du_fichier='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/___autorisations1_pour_acces_' + chx_acces_autorisation + '_.json';
                    try{
                        this.__gi1.file_put_contents( nom_du_fichier , JSON.stringify( tableau_des_auto , null , 2 ) );
                    }catch(e){
                        donnees_retournees.__xsi[__xal].push( '[' + this.__gi1.nl2() + ']' );
                        return({"__xst" : __xer});
                    }
                    for(let i in tt162.__xva){
                        if(tt162.__xva[i]['T0.chi_id_acces'] === chx_acces_autorisation){
                            /* marquer que l'accès est traité */
                            tt162.__xva[i]['acces_ecrit']=true;
                            break;
                        }
                    }
                    tableau_des_auto={};
                    tableau_des_auto[v1['T1.chp_nom_source'].substr( 0 , v1['T1.chp_nom_source'].length - 5 )]=v1['T0.chi_id_autorisation'];
                }
                chx_acces_autorisation=v1['T0.chx_acces_autorisation'];
            }else{
                tableau_des_auto[v1['T1.chp_nom_source'].substr( 0 , v1['T1.chp_nom_source'].length - 5 )]=v1['T0.chi_id_autorisation'];
            }
        }
        if(chx_acces_autorisation > 1){
            tableau_des_auto={ ...tableau_des_auto  , ...autorisations_globales };
            let nom_du_fichier='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/___autorisations1_pour_acces_' + chx_acces_autorisation + '_.json';
            try{
                this.__gi1.file_put_contents( nom_du_fichier , JSON.stringify( tableau_des_auto , null , 2 ) );
                for(let i in tt162.__xva){
                    if(tt162.__xva[i]['T0.chi_id_acces'] === chx_acces_autorisation){
                        /* marquer que l'accès est traité */
                        tt162.__xva[i]['acces_ecrit']=true;
                        break;
                    }
                }
            }catch(e){
                donnees_retournees.__xsi[__xal].push( '[' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
        }
        /*
          Pour les accès non traités, on écrit les autorisations globales seulement 
        */
        for(let i in tt162.__xva){
            if(!tt162.__xva[i].hasOwnProperty( 'acces_ecrit' )){
                let nom_du_fichier='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/___autorisations1_pour_acces_' + tt162.__xva[i]['T0.chi_id_acces'] + '_.json';
                try{
                    this.__gi1.file_put_contents( nom_du_fichier , JSON.stringify( autorisations_globales , null , 2 ) );
                }catch(e){
                    donnees_retournees.__xsi[__xal].push( '[' + this.__gi1.nl2() + ']' );
                    return({"__xst" : __xer});
                }
                break;
            }
        }
        /*
          le fichier contenant la liste des modules qui ne requièrent pas d'autorisation:
          __gi1_s.js, _connexion1_s.js
        */
        let nom_du_fichier='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/___autorisations1_pour_acces_0_.json';
        try{
            this.__gi1.file_put_contents( nom_du_fichier , JSON.stringify( autorisations_globales , null , 2 ) );
        }catch(e){
            donnees_retournees.__xsi[__xal].push( '[' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        let obj=await this.gererer_les_autorisation_serveur( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        if(obj[__xst] === __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xsu});
        }else{
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
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
        let obj=await this.gererer_les_autorisation_serveur( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        if(obj[__xst] === __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xsu});
        }else{
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
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
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async action_apres_commit_creer( mat , d , donnees_recues , donnees_retournees , options_generales , nouvel_id , form , __db1 ){
        let obj=await this.gererer_les_autorisation_serveur( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        if(obj[__xst] === __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xsu});
        }else{
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
    */
    async modifier1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /* conversion des données numériques début */
        form['chi_id_autorisation']=form['chi_id_autorisation'] === null ? ( null ) : ( parseInt( form['chi_id_autorisation'] , 10 ) );
        form['chx_acces_autorisation']=form['chx_acces_autorisation'] === null ? ( null ) : ( parseInt( form['chx_acces_autorisation'] , 10 ) );
        form['chx_source_autorisation']=form['chx_source_autorisation'] === null ? ( null ) : ( parseInt( form['chx_source_autorisation'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chx_acces_autorisation'] === null || form['chx_acces_autorisation'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "acces" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chx_source_autorisation'] === null || form['chx_source_autorisation'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "source" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_nom_autorisation'] === null || form['chp_nom_autorisation'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "nom" doit être renseigné [' + this.__gi1.nl2() + ']' );
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
        let criteres_select_141={"T0_chi_id_autorisation" : form['chi_id_autorisation']};
        let tt141=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
        ;
        */
        /*sql_inclure_fin*/ 141 , criteres_select_141 , donnees_retournees , __db1 );
        if(tt141[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt141[__xst] === __xsu && tt141[__xva].length === 1){
            let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt141[__xva][0] , __db1 );
            if(__actions_et_tests_avant_modifier[__xst] !== __xsu){
                return({"__xst" : __xer});
            }
            let criteres_143={
                 /*  */
                "c_chi_id_autorisation" : form['chi_id_autorisation'] ,
                "n_chx_acces_autorisation" : form['chx_acces_autorisation'] ,
                "n_chx_source_autorisation" : form['chx_source_autorisation'] ,
                "n_chp_nom_autorisation" : form['chp_nom_autorisation']
            };
            await __db1.exec( 'BEGIN TRANSACTION;' );
            let tt143=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_autorisations SET 
               `chx_acces_autorisation` = :n_chx_acces_autorisation , 
               `chx_source_autorisation` = :n_chx_source_autorisation , 
               `chp_nom_autorisation` = :n_chp_nom_autorisation
            WHERE `chi_id_autorisation` = :c_chi_id_autorisation ;
            */
            /*sql_inclure_fin*/ 143 , criteres_143 , donnees_retournees , __db1 );
            if(tt143[__xst] !== __xsu){
                if(tt143['__xme'] !== ''){
                    this.__gi1.__xsi[__xer].push( tt143['__xme'] + ' [' + this.__gi1.nl2() );
                }else{
                    this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                }
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let __taam=await this.tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt141[__xva][0] , __db1 );
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
            let tt141_bis=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
            `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
             FROM b1.tbl_autorisations T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
            
            WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
            ;
            */
            /*sql_inclure_fin*/ 141 , criteres_select_141 , donnees_retournees , __db1 );
            donnees_retournees[__xva]['page_modification1']=tt141_bis;
        }else{
            donnees_retournees[__xva]['page_modification1']=tt141;
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_autorisation=null , __db1=null ){
        if(chi_id_autorisation === null){
            let l01=mat.length;
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
            donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_autorisation(' + chi_id_autorisation + ')))))';
        }
        if(chi_id_autorisation === null){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt141=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
        ;
        */
        /*sql_inclure_fin*/ 141 , {"T0_chi_id_autorisation" : chi_id_autorisation} , donnees_retournees , __db1 );
        if(tt141[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , tt141[__xva][0] , __db1 );
        if(aetam[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_modification1']=tt141;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_autorisation=null ){
        if(chi_id_autorisation === null){
            let l01=mat.length;
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
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_141={
             /*  */
            "T0_chi_id_autorisation" : chi_id_autorisation
        };
        let tt141=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
        ;
        */
        /*sql_inclure_fin*/ 141 , criteres_141 , donnees_retournees , __db1 );
        if(tt141[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_duplication1']=tt141;
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
        let criteres_141={
             /*  */
            "T0_chi_id_autorisation" : form['chi_id_autorisation']
        };
        let tt141=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
        ;
        */
        /*sql_inclure_fin*/ 141 , criteres_141 , donnees_retournees , __db1 );
        if(tt141[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt141[__xva][0] , __db1 );
        if(tas[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_144={
             /*  */
            "chi_id_autorisation" : form['chi_id_autorisation']
        };
        let tt144=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_autorisations
        WHERE `chi_id_autorisation` = :chi_id_autorisation ;
        */
        /*sql_inclure_fin*/ 144 , criteres_144 , donnees_retournees , __db1 );
        /*  */
        if(tt144[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let aac=await this.actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt141[__xva][0] , __db1 );
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
        let chi_id_autorisation=0;
        let l01=mat.length;
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
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let critere_141={"T0_chi_id_autorisation" : chi_id_autorisation};
        let tt141=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
        ;
        */
        /*sql_inclure_fin*/ 141 , critere_141 , donnees_retournees , __db1 );
        donnees_retournees[__xva]['page_confirmation_supprimer1']=tt141;
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
        form['chx_acces_autorisation']=form['chx_acces_autorisation'] === null || form['chx_acces_autorisation'] === '' || form['chx_acces_autorisation'] === undefined ? ( null ) : ( parseInt( form['chx_acces_autorisation'] , 10 ) );
        form['chx_source_autorisation']=form['chx_source_autorisation'] === null || form['chx_source_autorisation'] === '' || form['chx_source_autorisation'] === undefined ? ( null ) : ( parseInt( form['chx_source_autorisation'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chx_acces_autorisation'] === null || form['chx_acces_autorisation'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "acces" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chx_source_autorisation'] === null || form['chx_source_autorisation'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "source" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_nom_autorisation'] === null || form['chp_nom_autorisation'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "nom" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let __tac=await this.tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 );
        if(__tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                        "chx_acces_autorisation" : form['chx_acces_autorisation'] ,
                        "chx_source_autorisation" : form['chx_source_autorisation'] ,
                        "chp_nom_autorisation" : form['chp_nom_autorisation']
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION' );
        let tt142=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_autorisations`(
            `chx_acces_autorisation` , 
            `chx_source_autorisation` , 
            `chp_nom_autorisation`
        ) VALUES (
            :chx_acces_autorisation , 
            :chx_source_autorisation , 
            :chp_nom_autorisation
        );
        */
        /*sql_inclure_fin*/ 142 , donnees_sql , donnees_retournees , __db1 );
        if(tt142[__xst] === __xsu){
            if(tt142['changements'] === 0){
                this.__gi1.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let aac=await this.action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , tt142['nouvel_id'] , form , __db1 );
            if(aac[__xst] === __xer){
                await __db1.exec( 'ROLLBACK;' );
                this.__gi1.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            await __db1.exec( 'COMMIT' );
            let aacc=await this.action_apres_commit_creer( mat , d , donnees_recues , donnees_retournees , options_generales , tt142['nouvel_id'] , form , __db1 );
            if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
            }else{
                await this.page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , tt142['nouvel_id'] , __db1 );
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( tt142['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
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
        let l01=mat.length;
        let option_de_13='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'de_13' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                option_de_13='de_13(' + mat[i + 1][1] + ')';
            }
        }
        const __nbMax=40;
        let __num_page=0;
        let formulaire=this.__gi1.__fnt1.debut_filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__gi1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres_140={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_140[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt140=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE (`T2`.`chp_nom_source` LIKE :T2_chp_nom_source
           AND `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
           AND `T0`.`chx_acces_autorisation` = :T0_chx_acces_autorisation
           AND `T0`.`chx_source_autorisation` = :T0_chx_source_autorisation
           AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces) 
        ORDER BY `T0`.`chx_acces_autorisation` DESC, `T2`.`chp_nom_source` ASC, `T0`.`chi_id_autorisation` DESC, `T2`.`chp_nom_source` ASC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 140 , criteres_140 , donnees_retournees , __db1 );
        if(tt140.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt140[__xst] === __xsu && tt140[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres_140['debut']=__debut;
            let tt140=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_autorisation` , `T0`.`chp_nom_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T1`.`chp_nom_acces` , 
            `T2`.`chp_nom_source` , `T2`.`chx_dossier_id_source`
             FROM b1.tbl_autorisations T0
             LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
            
            WHERE (`T2`.`chp_nom_source` LIKE :T2_chp_nom_source
               AND `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
               AND `T0`.`chx_acces_autorisation` = :T0_chx_acces_autorisation
               AND `T0`.`chx_source_autorisation` = :T0_chx_source_autorisation
               AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces) 
            ORDER BY `T0`.`chx_acces_autorisation` DESC, `T2`.`chp_nom_source` ASC, `T0`.`chi_id_autorisation` DESC, `T2`.`chp_nom_source` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 140 , criteres_140 , donnees_retournees , __db1 );
        }
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            donnees_retournees[__xac]+=this.__gi1.__fnt1.critere_liste( formulaire , i );
        }
        donnees_retournees[__xac]+='))))';
        donnees_retournees[__xva][this.fonction_liste]=tt140;
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
    moi='autorisations1';
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
export{autorisations1 as autorisations1};