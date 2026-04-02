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
    async actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant , __db1 ){
        /*#
          let obj=await this.faire_un_traitement( __xva_avant['T0.chi_id_metier'] ,  donnees_retournees , options_generales , __db1 );
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
        form['chi_id_metier']=form['chi_id_metier'] === null ? ( null ) : ( parseInt( form['chi_id_metier'] , 10 ) );
        form['chx_parent_metier']=form['chx_parent_metier'] === null ? ( null ) : ( parseInt( form['chx_parent_metier'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_nom_metier'] === null || form['chp_nom_metier'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "nom" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __test_0_1=this.__gi1.__fnt1.test_du_nom_technique1( form['chp_nom_metier'] , 'nom' );
        if(__test_0_1[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur sur le contenu de "nom" [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
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
        let criteres_select_125={"T0_chi_id_metier" : form['chi_id_metier']};
        let tt125=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
         FROM b1.tbl_metiers T0
         LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
        
        WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
        ;
        */
        /*sql_inclure_fin*/ 125 , criteres_select_125 , donnees_retournees , __db1 );
        if(tt125[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt125[__xst] === __xsu && tt125[__xva].length === 1){
            let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt125[__xva][0] , __db1 );
            if(__actions_et_tests_avant_modifier[__xst] !== __xsu){
                return({"__xst" : __xer});
            }
            let criteres_127={
                 /*  */
                "c_chi_id_metier" : form['chi_id_metier'] ,
                "n_chp_nom_metier" : form['chp_nom_metier'] ,
                "n_chx_parent_metier" : form['chx_parent_metier'] === '' ? ( null ) : ( form['chx_parent_metier'] )
            };
            await __db1.exec( 'BEGIN TRANSACTION;' );
            let tt127=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_metiers SET 
               `chp_nom_metier` = :n_chp_nom_metier , 
               `chx_parent_metier` = :n_chx_parent_metier
            WHERE `chi_id_metier` = :c_chi_id_metier ;
            */
            /*sql_inclure_fin*/ 127 , criteres_127 , donnees_retournees , __db1 );
            if(tt127[__xst] !== __xsu){
                if(tt127['__xme'] !== ''){
                    this.__gi1.__xsi[__xer].push( tt127['__xme'] + ' [' + this.__gi1.nl2() );
                }else{
                    this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                }
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let __taam=await this.tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt125[__xva][0] , __db1 );
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
            let tt125_bis=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
             FROM b1.tbl_metiers T0
             LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
            
            WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
            ;
            */
            /*sql_inclure_fin*/ 125 , criteres_select_125 , donnees_retournees , __db1 );
            donnees_retournees[__xva]['page_modification1']=tt125_bis;
        }else{
            donnees_retournees[__xva]['page_modification1']=tt125;
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_metier=null , __db1=null ){
        if(chi_id_metier === null){
            let l01=mat.length;
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
            donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_metier(' + chi_id_metier + ')))))';
        }
        if(chi_id_metier === null){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt125=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
         FROM b1.tbl_metiers T0
         LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
        
        WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
        ;
        */
        /*sql_inclure_fin*/ 125 , {"T0_chi_id_metier" : chi_id_metier} , donnees_retournees , __db1 );
        if(tt125[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , tt125[__xva][0] , __db1 );
        if(aetam[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_modification1']=tt125;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_metier=null ){
        if(chi_id_metier === null){
            let l01=mat.length;
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
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_125={
             /*  */
            "T0_chi_id_metier" : chi_id_metier
        };
        let tt125=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
         FROM b1.tbl_metiers T0
         LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
        
        WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
        ;
        */
        /*sql_inclure_fin*/ 125 , criteres_125 , donnees_retournees , __db1 );
        if(tt125[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_duplication1']=tt125;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(2)) */
        if(form['chi_id_metier'] <= 2){
            this.__gi1.__xsi[__xer].push( 'il n\'est pas possible de supprimer cet élément [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_125={
             /*  */
            "T0_chi_id_metier" : form['chi_id_metier']
        };
        let tt125=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
         FROM b1.tbl_metiers T0
         LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
        
        WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
        ;
        */
        /*sql_inclure_fin*/ 125 , criteres_125 , donnees_retournees , __db1 );
        if(tt125[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt125[__xva][0] , __db1 );
        if(tas[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_129={
             /*  */
            "chi_id_metier" : form['chi_id_metier']
        };
        let tt129=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_metiers
        WHERE `chi_id_metier` = :chi_id_metier ;
        */
        /*sql_inclure_fin*/ 129 , criteres_129 , donnees_retournees , __db1 );
        /*  */
        if(tt129[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let aac=await this.actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt125[__xva][0] , __db1 );
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
        let chi_id_metier=0;
        let l01=mat.length;
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
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let critere_125={"T0_chi_id_metier" : chi_id_metier};
        let tt125=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
         FROM b1.tbl_metiers T0
         LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
        
        WHERE `T0`.`chi_id_metier` = :T0_chi_id_metier
        ;
        */
        /*sql_inclure_fin*/ 125 , critere_125 , donnees_retournees , __db1 );
        donnees_retournees[__xva]['page_confirmation_supprimer1']=tt125;
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
        form['chx_parent_metier']=form['chx_parent_metier'] === null || form['chx_parent_metier'] === '' || form['chx_parent_metier'] === undefined ? ( null ) : ( parseInt( form['chx_parent_metier'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_nom_metier'] === null || form['chp_nom_metier'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "nom" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __test_0_1=this.__gi1.__fnt1.test_du_nom_technique1( form['chp_nom_metier'] , 'nom' );
        if(__test_0_1[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur sur le contenu de  "nom" [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let __tac=await this.tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 );
        if(__tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                        "chp_nom_metier" : form['chp_nom_metier'] ,
                        "chx_parent_metier" : form['chx_parent_metier'] === '' ? ( null ) : ( form['chx_parent_metier'] )
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt126=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_metiers`(
            `chp_nom_metier` , 
            `chx_parent_metier`
        ) VALUES (
            :chp_nom_metier , 
            :chx_parent_metier
        );
        */
        /*sql_inclure_fin*/ 126 , donnees_sql , donnees_retournees , __db1 );
        if(tt126[__xst] === __xsu){
            if(tt126['changements'] === 0){
                this.__gi1.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let aac=await this.action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , tt126['nouvel_id'] , form , __db1 );
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
                await this.page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , tt126['nouvel_id'] , __db1 );
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( tt126['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
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
        let criteres_124={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_124[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt124=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
         FROM b1.tbl_metiers T0
         LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
        
        WHERE (`T0`.`chi_id_metier` = :T0_chi_id_metier
           AND `T0`.`chp_nom_metier` LIKE :T0_chp_nom_metier) 
        ORDER BY `T0`.`chi_id_metier` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 124 , criteres_124 , donnees_retournees , __db1 );
        if(tt124.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt124[__xst] === __xsu && tt124[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres_124['debut']=__debut;
            let tt124=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_metier` , `T0`.`chp_nom_metier` , `T1`.`chp_nom_metier` , `T0`.`chx_parent_metier`
             FROM b1.tbl_metiers T0
             LEFT JOIN b1.tbl_metiers T1 ON T1.chi_id_metier = T0.chx_parent_metier
            
            WHERE (`T0`.`chi_id_metier` = :T0_chi_id_metier
               AND `T0`.`chp_nom_metier` LIKE :T0_chp_nom_metier) 
            ORDER BY `T0`.`chi_id_metier` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 124 , criteres_124 , donnees_retournees , __db1 );
        }
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            donnees_retournees[__xac]+=this.__gi1.__fnt1.critere_liste( formulaire , i );
        }
        donnees_retournees[__xac]+='))))';
        donnees_retournees[__xva][this.fonction_liste]=tt124;
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
    moi='metiers1';
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
export{metiers1 as metiers1};