const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
/*
  =====================================================================================================================
*/
class revs1{
    /*
      =============================================================================================================
    */
    async tout_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant ){
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_360={};
        let tt360=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(ne_pas_tester_les_dependances_de_suppression(1))
        
        DELETE FROM b1.tbl_revs
        */
        /*sql_inclure_fin*/ 360 , criteres_360 , donnees_retournees , __db1 );
        /*  */
        if(tt360[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        await this.filtre1( mat , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
        return({"__xst" : __xsu});
        donnees_retournees.__xst=__xsu;
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant , __db1 ){
        /*#
          let obj=await this.faire_un_traitement( __xva_avant['T0.chi_id_rev'] ,  donnees_retournees , options_generales , __db1 );
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
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_rev=null ){
        if(chi_id_rev === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_rev'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_rev=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_344={
             /*  */
            "T0_chi_id_rev" : chi_id_rev
        };
        let tt344=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
        `T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
        `T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
        `T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev`
         FROM b1.tbl_revs T0
        WHERE (   `T0`.`chi_id_rev` = :T0_chi_id_rev)
        ;
        */
        /*sql_inclure_fin*/ 344 , criteres_344 , donnees_retournees , __db1 );
        if(tt344[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_duplication1']=tt344;
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
        form['chx_source_rev']=form['chx_source_rev'] === null || form['chx_source_rev'] === '' || form['chx_source_rev'] === undefined ? ( null ) : ( parseInt( form['chx_source_rev'] , 10 ) );
        form['chp_id_rev']=form['chp_id_rev'] === null || form['chp_id_rev'] === '' || form['chp_id_rev'] === undefined ? ( null ) : ( parseInt( form['chp_id_rev'] , 10 ) );
        form['chp_niveau_rev']=form['chp_niveau_rev'] === null || form['chp_niveau_rev'] === '' || form['chp_niveau_rev'] === undefined ? ( null ) : ( parseInt( form['chp_niveau_rev'] , 10 ) );
        form['chp_quotee_rev']=form['chp_quotee_rev'] === null || form['chp_quotee_rev'] === '' || form['chp_quotee_rev'] === undefined ? ( null ) : ( parseInt( form['chp_quotee_rev'] , 10 ) );
        form['chp_pos_premier_rev']=form['chp_pos_premier_rev'] === null || form['chp_pos_premier_rev'] === '' || form['chp_pos_premier_rev'] === undefined ? ( null ) : ( parseInt( form['chp_pos_premier_rev'] , 10 ) );
        form['chp_pos_dernier_rev']=form['chp_pos_dernier_rev'] === null || form['chp_pos_dernier_rev'] === '' || form['chp_pos_dernier_rev'] === undefined ? ( null ) : ( parseInt( form['chp_pos_dernier_rev'] , 10 ) );
        form['chp_parent_rev']=form['chp_parent_rev'] === null || form['chp_parent_rev'] === '' || form['chp_parent_rev'] === undefined ? ( null ) : ( parseInt( form['chp_parent_rev'] , 10 ) );
        form['chp_nbr_enfants_rev']=form['chp_nbr_enfants_rev'] === null || form['chp_nbr_enfants_rev'] === '' || form['chp_nbr_enfants_rev'] === undefined ? ( null ) : ( parseInt( form['chp_nbr_enfants_rev'] , 10 ) );
        form['chp_num_enfant_rev']=form['chp_num_enfant_rev'] === null || form['chp_num_enfant_rev'] === '' || form['chp_num_enfant_rev'] === undefined ? ( null ) : ( parseInt( form['chp_num_enfant_rev'] , 10 ) );
        form['chp_profondeur_rev']=form['chp_profondeur_rev'] === null || form['chp_profondeur_rev'] === '' || form['chp_profondeur_rev'] === undefined ? ( null ) : ( parseInt( form['chp_profondeur_rev'] , 10 ) );
        form['chp_pos_ouver_parenthese_rev']=form['chp_pos_ouver_parenthese_rev'] === null || form['chp_pos_ouver_parenthese_rev'] === '' || form['chp_pos_ouver_parenthese_rev'] === undefined ?
          ( 
            null
          ) : ( 
            parseInt( form['chp_pos_ouver_parenthese_rev'] , 10 )
          );
        form['chp_enfant_suivant_rev']=form['chp_enfant_suivant_rev'] === null || form['chp_enfant_suivant_rev'] === '' || form['chp_enfant_suivant_rev'] === undefined ? ( null ) : ( parseInt( form['chp_enfant_suivant_rev'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_id_rev'] === null || form['chp_id_rev'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "id" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_type_rev'] === null || form['chp_type_rev'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "type" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_niveau_rev'] === null || form['chp_niveau_rev'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "niveau" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_quotee_rev'] === null || form['chp_quotee_rev'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "quotee" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_pos_premier_rev'] === null || form['chp_pos_premier_rev'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "pos premier" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_pos_dernier_rev'] === null || form['chp_pos_dernier_rev'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "pos dernier" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_parent_rev'] === null || form['chp_parent_rev'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "parent" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_nbr_enfants_rev'] === null || form['chp_nbr_enfants_rev'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "nbr enfants" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_num_enfant_rev'] === null || form['chp_num_enfant_rev'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "num enfant" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_profondeur_rev'] === null || form['chp_profondeur_rev'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "profondeur" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_pos_ouver_parenthese_rev'] === null || form['chp_pos_ouver_parenthese_rev'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "pos ouver parenthese" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_enfant_suivant_rev'] === null || form['chp_enfant_suivant_rev'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "enfant suivant" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let __tac=await this.tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 );
        if(__tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                        "chp_provenance_rev" : form['chp_provenance_rev'] === '' ? ( null ) : ( form['chp_provenance_rev'] ) ,
                        "chx_source_rev" : form['chx_source_rev'] === '' ? ( null ) : ( form['chx_source_rev'] ) ,
                        "chp_id_rev" : form['chp_id_rev'] ,
                        "chp_valeur_rev" : form['chp_valeur_rev'] === '' ? ( null ) : ( form['chp_valeur_rev'] ) ,
                        "chp_type_rev" : form['chp_type_rev'] ,
                        "chp_niveau_rev" : form['chp_niveau_rev'] ,
                        "chp_quotee_rev" : form['chp_quotee_rev'] ,
                        "chp_pos_premier_rev" : form['chp_pos_premier_rev'] ,
                        "chp_pos_dernier_rev" : form['chp_pos_dernier_rev'] ,
                        "chp_parent_rev" : form['chp_parent_rev'] ,
                        "chp_nbr_enfants_rev" : form['chp_nbr_enfants_rev'] ,
                        "chp_num_enfant_rev" : form['chp_num_enfant_rev'] ,
                        "chp_profondeur_rev" : form['chp_profondeur_rev'] ,
                        "chp_pos_ouver_parenthese_rev" : form['chp_pos_ouver_parenthese_rev'] ,
                        "chp_enfant_suivant_rev" : form['chp_enfant_suivant_rev'] ,
                        "chp_commentaire_rev" : form['chp_commentaire_rev'] === '' ? ( null ) : ( form['chp_commentaire_rev'] )
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt358=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_revs`(
            `chp_provenance_rev` , 
            `chx_source_rev` , 
            `chp_id_rev` , 
            `chp_valeur_rev` , 
            `chp_type_rev` , 
            `chp_niveau_rev` , 
            `chp_quotee_rev` , 
            `chp_pos_premier_rev` , 
            `chp_pos_dernier_rev` , 
            `chp_parent_rev` , 
            `chp_nbr_enfants_rev` , 
            `chp_num_enfant_rev` , 
            `chp_profondeur_rev` , 
            `chp_pos_ouver_parenthese_rev` , 
            `chp_enfant_suivant_rev` , 
            `chp_commentaire_rev`
        ) VALUES (
            :chp_provenance_rev , 
            :chx_source_rev , 
            :chp_id_rev , 
            :chp_valeur_rev , 
            :chp_type_rev , 
            :chp_niveau_rev , 
            :chp_quotee_rev , 
            :chp_pos_premier_rev , 
            :chp_pos_dernier_rev , 
            :chp_parent_rev , 
            :chp_nbr_enfants_rev , 
            :chp_num_enfant_rev , 
            :chp_profondeur_rev , 
            :chp_pos_ouver_parenthese_rev , 
            :chp_enfant_suivant_rev , 
            :chp_commentaire_rev
        );
        */
        /*sql_inclure_fin*/ 358 , donnees_sql , donnees_retournees , __db1 );
        if(tt358[__xst] === __xsu){
            if(tt358['changements'] === 0){
                this.__gi1.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let aac=await this.action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , tt358['nouvel_id'] , form , __db1 );
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
                await this.page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , tt358['nouvel_id'] , __db1 );
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( tt358['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
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
        let criteres359={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres359[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        /* this.__gi1.ma_trace1('criteres359=',criteres359); */
        let tt359=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
        `T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
        `T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
        `T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev` , `T1`.`chp_nom_source`
         FROM b1.tbl_revs T0
         LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_rev
        
        WHERE (   `T0`.`chi_id_rev` = :T0_chi_id_rev
           AND `T0`.`chp_provenance_rev` LIKE :T0_chp_provenance_rev
           AND `T1`.`chp_nom_source` LIKE :T1_chp_nom_source
           AND `T0`.`chp_valeur_rev` LIKE :T0_chp_valeur_rev
           AND `T0`.`chx_source_rev` = :T0_chx_source_rev) 
        ORDER BY `T0`.`chi_id_rev` ASC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 359 , criteres359 , donnees_retournees , __db1 );
        if(tt359.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt359[__xst] === __xsu && tt359[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres359['debut']=__debut;
            let tt359=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
            `T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
            `T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
            `T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev` , `T1`.`chp_nom_source`
             FROM b1.tbl_revs T0
             LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_rev
            
            WHERE (   `T0`.`chi_id_rev` = :T0_chi_id_rev
               AND `T0`.`chp_provenance_rev` LIKE :T0_chp_provenance_rev
               AND `T1`.`chp_nom_source` LIKE :T1_chp_nom_source
               AND `T0`.`chp_valeur_rev` LIKE :T0_chp_valeur_rev
               AND `T0`.`chx_source_rev` = :T0_chx_source_rev) 
            ORDER BY `T0`.`chi_id_rev` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 359 , criteres359 , donnees_retournees , __db1 );
        }
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            donnees_retournees[__xac]+=this.__gi1.__fnt1.critere_liste( formulaire , i );
        }
        donnees_retournees[__xac]+='))))';
        donnees_retournees[__xva][this.fonction_liste]=tt359;
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
    moi='revs1';
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
export{revs1 as revs1};