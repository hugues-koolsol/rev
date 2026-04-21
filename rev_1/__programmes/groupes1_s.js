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
class groupes1{
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant , __db1 ){
        /*#
          let obj=await this.faire_un_traitement( __xva_avant['T0.chi_id_groupe'] ,  donnees_retournees , options_generales , __db1 );
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
          donnees_retournees.__xsi[__xer].push( ' [' + this.__ig1.nl2() + ']' );
          return({"__xst" : __xer});
        */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*
          donnees_retournees.__xsi[__xer].push( ' [' + this.__ig1.nl2() + ']' );
          return({"__xst" : __xer});
        */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*
          donnees_retournees.__xsi[__xer].push( ' [' + this.__ig1.nl2() + ']' );
          return({"__xst" : __xer});
        */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*
          donnees_retournees.__xsi[__xer].push( ' [' + this.__ig1.nl2() + ']' );
          return({"__xst" : __xer});
        */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 ){
        /*
          donnees_retournees.__xsi[__xer].push( ' [' + this.__ig1.nl2() + ']' );
          return({"__xst" : __xer});
        */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , nouvel_id , form , __db1 ){
        /*
          donnees_retournees.__xsi[__xer].push( ' [' + this.__ig1.nl2() + ']' );
          return({"__xst" : __xer});
        */
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
        form['chi_id_groupe']=form['chi_id_groupe'] === null ? ( null ) : ( parseInt( form['chi_id_groupe'] , 10 ) );
        form['chx_parent_groupe']=form['chx_parent_groupe'] === null ? ( null ) : ( parseInt( form['chx_parent_groupe'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_nom_groupe'] === null || form['chp_nom_groupe'] === ''){
            donnees_retournees.__xsi[__xer].push( 'la valeur pour "nom" doit être renseigné [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __test_0_1=this.__ig1.__fnt1.test_du_nom_technique1( form['chp_nom_groupe'] , 'nom' );
        if(__test_0_1[__xst] !== __xsu){
            donnees_retournees.__xsi[__xer].push( 'erreur sur le contenu de "nom" [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        /* sélection du champ à modifier */
        let criteres_select_131={"T0_chi_id_groupe" : form['chi_id_groupe']};
        let tt131=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
         FROM b1.tbl_groupes T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
        
        WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
        ;
        */
        /*sql_inclure_fin*/ 131 , criteres_select_131 , donnees_retournees , __db1 );
        if(tt131[__xst] !== __xsu){
            donnees_retournees.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__ig1.nl2() );
            return({"__xst" : __xer});
        }
        if(tt131[__xst] === __xsu && tt131[__xva].length === 1){
            let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt131[__xva][0] , __db1 );
            if(__actions_et_tests_avant_modifier[__xst] !== __xsu){
                return({"__xst" : __xer});
            }
            let criteres_133={
                 /*  */
                "c_chi_id_groupe" : form['chi_id_groupe'] ,
                "n_chp_nom_groupe" : form['chp_nom_groupe'] ,
                "n_chx_parent_groupe" : form['chx_parent_groupe'] === '' ? ( null ) : ( form['chx_parent_groupe'] )
            };
            await __db1.exec( 'BEGIN TRANSACTION;' );
            let tt133=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_groupes SET 
               `chp_nom_groupe` = :n_chp_nom_groupe , 
               `chx_parent_groupe` = :n_chx_parent_groupe
            WHERE `chi_id_groupe` = :c_chi_id_groupe ;
            */
            /*sql_inclure_fin*/ 133 , criteres_133 , donnees_retournees , __db1 );
            if(tt133[__xst] !== __xsu){
                if(tt133['__xme'] !== ''){
                    donnees_retournees.__xsi[__xer].push( tt133['__xme'] + ' [' + this.__ig1.nl2() );
                }else{
                    donnees_retournees.__xsi[__xer].push( 'erreur de modification [' + this.__ig1.nl2() );
                }
                return({"__xst" : __xer});
            }
            let __taam=await this.tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt131[__xva][0] , __db1 );
            if(__taam[__xst] !== __xsu){
                await __db1.exec( 'ROLLBACK;' );
                donnees_retournees.__xsi[__xer].push( 'erreur après modification [' + this.__ig1.nl2() );
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
            let tt131_bis=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
             FROM b1.tbl_groupes T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
            
            WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
            ;
            */
            /*sql_inclure_fin*/ 131 , criteres_select_131 , donnees_retournees , __db1 );
            donnees_retournees[__xva]['page_modification1']=tt131_bis;
        }else{
            donnees_retournees[__xva]['page_modification1']=tt131;
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_groupe=null , __db1=null ){
        if(chi_id_groupe === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_groupe'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_groupe=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_groupe(' + chi_id_groupe + ')))))';
        }
        if(chi_id_groupe === null){
            donnees_retournees.__xsi[__xer].push( this.__ig1.nl2() );
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt131=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
         FROM b1.tbl_groupes T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
        
        WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
        ;
        */
        /*sql_inclure_fin*/ 131 , {"T0_chi_id_groupe" : chi_id_groupe} , donnees_retournees , __db1 );
        if(tt131[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , tt131[__xva][0] , __db1 );
        if(aetam[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_modification1']=tt131;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_groupe=null ){
        if(chi_id_groupe === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_groupe'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_groupe=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_131={
             /*  */
            "T0_chi_id_groupe" : chi_id_groupe
        };
        let tt131=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
         FROM b1.tbl_groupes T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
        
        WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
        ;
        */
        /*sql_inclure_fin*/ 131 , criteres_131 , donnees_retournees , __db1 );
        if(tt131[__xst] !== __xsu){
            donnees_retournees.__xsi[__xer].push( '[' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_duplication1']=tt131;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(2)) */
        if(form['chi_id_groupe'] <= 2){
            donnees_retournees.__xsi[__xer].push( 'il n\'est pas possible de supprimer cet élément [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_131={
             /*  */
            "T0_chi_id_groupe" : form['chi_id_groupe']
        };
        let tt131=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
         FROM b1.tbl_groupes T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
        
        WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
        ;
        */
        /*sql_inclure_fin*/ 131 , criteres_131 , donnees_retournees , __db1 );
        if(tt131[__xst] !== __xsu){
            donnees_retournees.__xsi[__xer].push( '[' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt131[__xva][0] , __db1 );
        if(tas[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let criteres_134={
             /*  */
            "chi_id_groupe" : form['chi_id_groupe']
        };
        let tt134=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_groupes
        WHERE `chi_id_groupe` = :chi_id_groupe ;
        */
        /*sql_inclure_fin*/ 134 , criteres_134 , donnees_retournees , __db1 );
        /*  */
        if(tt134[__xst] !== __xsu){
            donnees_retournees.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let aac=await this.actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt131[__xva][0] , __db1 );
        if(aac[__xst] === __xer){
            donnees_retournees.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__ig1.nl2() + ']' );
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
        let chi_id_groupe=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_groupe'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_groupe=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_groupe === 0){
            donnees_retournees.__xsi[__xer].push( this.__ig1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__ig1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let critere_131={"T0_chi_id_groupe" : chi_id_groupe};
        let tt131=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
         FROM b1.tbl_groupes T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
        
        WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
        ;
        */
        /*sql_inclure_fin*/ 131 , critere_131 , donnees_retournees , __db1 );
        donnees_retournees[__xva]['page_confirmation_supprimer1']=tt131;
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
        form['chx_parent_groupe']=form['chx_parent_groupe'] === null || form['chx_parent_groupe'] === '' || form['chx_parent_groupe'] === undefined ? ( null ) : ( parseInt( form['chx_parent_groupe'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_nom_groupe'] === null || form['chp_nom_groupe'] === ''){
            donnees_retournees.__xsi[__xer].push( 'la valeur pour "nom" doit être renseigné [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __test_0_1=this.__ig1.__fnt1.test_du_nom_technique1( form['chp_nom_groupe'] , 'nom' );
        if(__test_0_1[__xst] !== __xsu){
            donnees_retournees.__xsi[__xer].push( 'erreur sur le contenu de  "nom" [' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__ig1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let __tac=await this.tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 );
        if(__tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                        "chp_nom_groupe" : form['chp_nom_groupe'] ,
                        "chx_parent_groupe" : form['chx_parent_groupe'] === '' ? ( null ) : ( form['chx_parent_groupe'] )
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt132=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_groupes`(
            `chp_nom_groupe` , 
            `chx_parent_groupe`
        ) VALUES (
            :chp_nom_groupe , 
            :chx_parent_groupe
        );
        */
        /*sql_inclure_fin*/ 132 , donnees_sql , donnees_retournees , __db1 );
        if(tt132[__xst] === __xsu){
            if(tt132['changements'] === 0){
                donnees_retournees.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__ig1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let aac=await this.action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , tt132['nouvel_id'] , form , __db1 );
            if(aac[__xst] === __xer){
                await __db1.exec( 'ROLLBACK;' );
                donnees_retournees.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__ig1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            await __db1.exec( 'COMMIT;' );
            if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
            }else{
                await this.page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , tt132['nouvel_id'] , __db1 );
            }
            return({"__xst" : __xsu});
        }else{
            donnees_retournees.__xsi[__xer].push( tt132['__xme'] + '\nl\'insertion a échoué [' + this.__ig1.nl2() + ']' );
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
        let __db1=await this.__ig1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        donnees_retournees[__xva]['nouveau_numero_projet']=nouveau_numero_projet;
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
        let formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__ig1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres_130={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_130[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt130=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
         FROM b1.tbl_groupes T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
        
        WHERE (`T0`.`chi_id_groupe` = :T0_chi_id_groupe
           AND `T0`.`chp_nom_groupe` LIKE :T0_chp_nom_groupe
           AND `T0`.`chx_parent_groupe` = :T0_chx_parent_groupe
           AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe) 
        ORDER BY `T0`.`chi_id_groupe` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 130 , criteres_130 , donnees_retournees , __db1 );
        if(tt130.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt130[__xst] === __xsu && tt130[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres_130['debut']=__debut;
            let tt130=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
             FROM b1.tbl_groupes T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe
            
            WHERE (`T0`.`chi_id_groupe` = :T0_chi_id_groupe
               AND `T0`.`chp_nom_groupe` LIKE :T0_chp_nom_groupe
               AND `T0`.`chx_parent_groupe` = :T0_chx_parent_groupe
               AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe) 
            ORDER BY `T0`.`chi_id_groupe` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 130 , criteres_130 , donnees_retournees , __db1 );
        }
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        donnees_retournees[__xac]+='))))';
        donnees_retournees[__xva][this.fonction_liste]=tt130;
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
    moi='groupes1';
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
export{groupes1 as groupes1};