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
class menus1{
    /*
      =============================================================================================================
    */
    async recupere_methodes1( mat , d , donnees_recues , donnees_retournees , options_generales ){
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
            this.__gi1.__xsi[__xer].push( 'la valeur pour "autorisation" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_select_141={"T0_chi_id_autorisation" : chi_id_autorisation};
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
        if(tt141[__xva][0]['T2.che_binaire_source'] === 1){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let chemin_fichier='../rev_' + donnees_retournees.chi_id_projet + '/__programmes/' + tt141[__xva][0]['T2.chp_nom_source'];
        if(tt141[__xva][0]['T2.chp_nom_source'].substr( tt141[__xva][0]['T2.chp_nom_source'].length - 3 ) === '.js'){
            /*
              si c'est un source js, on retource le source et on fera le traitement dans c_menus1.js
            */
            if(!(await this.__gi1.is_file( chemin_fichier ))){
                this.__gi1.__xsi[__xer].push( ' erreur sur la construction du chemin [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            donnees_retournees[__xva]['cht_genere_source']=await this.__gi1.file_get_contents( chemin_fichier );
            donnees_retournees[__xva]['chp_nom_source']=tt141[__xva][0]['T2.chp_nom_source'];
            donnees_retournees[__xst]=__xsu;
            return({"__xst" : __xsu});
        }
        this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant , __db1 ){
        /*#
          let obj=await this.faire_un_traitement( __xva_avant['T0.chi_id_menu'] ,  donnees_retournees , options_generales , __db1 );
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
          après maj du menu, on met à jour le tri du menu
        */
        /* this.__gi1.ma_trace1('__xva_avant=',__xva_avant); */
        /* this.__gi1.ma_trace1('form=',form); */
        /*#
          __xva_avant={
            "T0.chi_id_menu": 4,
            "T0.chp_titre_menu": "convertion de php",
            "T0.chx_autorisation_menu": 40,
            "T0.chp_methode_menu": "entree_module",
            "T0.cht_libelle_menu": "php",
            "T0.cht_initialisation_menu": null,
            "T0.cht_condition_menu": null,
            "T1.chx_acces_autorisation": 1,
            "T1.chx_source_autorisation": 522,
            "T2.chp_nom_acces": "dev",
            "T3.chp_nom_source": "x_ecran_rev_vers_php1_c.js",
            "T3.che_binaire_source": 0,
            "T0.cht_condition_js_menu": null,
            "T1.chp_nom_autorisation": "rev php js"
          }
        */
        let criteres_select_141={"T0_chi_id_autorisation" : form['chx_autorisation_menu']};
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
        /* this.__gi1.ma_trace1('tt141=',tt141[__xva][0]); */
        let criteres_136={
             /*  */
            "T0_chi_id_acces" : tt141[__xva][0]['T0.chx_acces_autorisation']
        };
        let tt136=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
        `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier` , `T0`.`che_actif_acces`
         FROM b1.tbl_acces T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
        
        WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
        ;
        */
        /*sql_inclure_fin*/ 136 , criteres_136 , donnees_retournees , __db1 );
        if(tt136[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /* this.__gi1.ma_trace1('tt136=',tt136[__xva][0]['T0.cht_parametres_acces']); */
        let json_de_l_acces=JSON.parse( tt136[__xva][0]['T0.cht_parametres_acces'] );
        /* this.__gi1.ma_trace1('json_de_l_acces=',json_de_l_acces); */
        let le_json_du_menu=null;
        if( typeof json_de_l_acces.le_json_du_menu === 'string'){
            le_json_du_menu=JSON.parse( json_de_l_acces.le_json_du_menu );
        }else{
            le_json_du_menu=json_de_l_acces.le_json_du_menu;
        }
        /* this.__gi1.ma_trace1('le_json_du_menu=',JSON.stringify(le_json_du_menu,null,2)); */
        /*
          {
          "id_interne": 26,
          "id_interne_parent": 22,
          "replie": 0,
          "contient_des_enfants": 0,
          "contenu": "php",
          "attributs": {
          "data-chi_id_source": "522",
          "data-chp_nom_source": "x_ecran_rev_vers_php1_c.js",
          "data-chp_methode_menu": "ecran_rev_php",
          "data-chi_id_menu": "4",
          "data-cht_initialisation_menu": "null",
          "data-chp_titre_menu": "convertion de php",
          "data-cht_condition_js_menu": "null",
          "data-cht_condition_menu": "null",
          "data-chx_autorisation_menu": "40"
          }
          },
        */
        for(let i in le_json_du_menu){
            /* this.__gi1.ma_trace1('le_json_du_menu[i].attributs=',le_json_du_menu[i].attributs); */
            if(le_json_du_menu[i].attributs.hasOwnProperty( 'data-chi_id_menu' )
                   && parseInt( le_json_du_menu[i].attributs['data-chi_id_menu'] , 10 ) === parseInt( form['chi_id_menu'] , 10 )
            ){
                /* this.__gi1.ma_trace1('avant le_json_du_menu[i]=',le_json_du_menu[i]); */
                le_json_du_menu[i].contenu=form['cht_libelle_menu'];
                le_json_du_menu[i].attributs['data-chi_id_source']=tt141[__xva][0]['T0.chx_source_autorisation'];
                le_json_du_menu[i].attributs['data-chp_nom_source']=tt141[__xva][0]['T2.chp_nom_source'];
                le_json_du_menu[i].attributs['data-chp_methode_menu']=form['chp_methode_menu'];
                le_json_du_menu[i].attributs['data-chi_id_menu']=parseInt( form['chi_id_menu'] , 10 );
                le_json_du_menu[i].attributs['data-chp_titre_menu']=form['chp_titre_menu'];
                le_json_du_menu[i].attributs['data-cht_initialisation_menu']=form['cht_initialisation_menu'] === '' ? ( null ) : ( form['cht_initialisation_menu'] );
                le_json_du_menu[i].attributs['data-cht_condition_js_menu']=form['cht_condition_js_menu'] === '' ? ( null ) : ( form['cht_condition_js_menu'] );
                le_json_du_menu[i].attributs['data-cht_condition_menu']=form['cht_condition_menu'] === '' ? ( null ) : ( form['cht_condition_menu'] );
                /* this.__gi1.ma_trace1('après le_json_du_menu[i]=',le_json_du_menu[i]); */
                json_de_l_acces.le_json_du_menu=le_json_du_menu;
                let nouveau_json_texte=JSON.stringify( json_de_l_acces , null , 2 );
                /* this.__gi1.ma_trace1('nouveau_json_texte=' , nouveau_json_texte ); */
                let criteres_154={"c_chi_id_acces" : tt141[__xva][0]['T0.chx_acces_autorisation'] ,"n_cht_parametres_acces" : nouveau_json_texte};
                let tt154=await this.__gi1.sql_iii(
                /*sql_inclure_deb*/ /*#
                UPDATE b1.tbl_acces SET 
                   `cht_parametres_acces` = :n_cht_parametres_acces
                WHERE `chi_id_acces` = :c_chi_id_acces ;
                */
                /*sql_inclure_fin*/ 154 , criteres_154 , donnees_retournees , __db1 );
                if(tt154[__xst] !== __xsu){
                    this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
            }
        }
        /* l'id acces qui est passé au module acces pour régénération du menu */
        donnees_recues[__xva]['chi_id_acces']=tt141[__xva][0]['T0.chx_acces_autorisation'];
        let m=await import( './acces1_s.js' );
        let o=new m['acces1']( this.__gi1 );
        let obj=await o.produire_le_menu( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur de génération du menu [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(donnees_retournees._CA_ === donnees_retournees.chi_id_projet){
            await this.__gi1.obtenir_les_menus( mat , d , donnees_recues , donnees_retournees , options_generales );
        }
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
        form['chi_id_menu']=form['chi_id_menu'] === null ? ( null ) : ( parseInt( form['chi_id_menu'] , 10 ) );
        form['chx_autorisation_menu']=form['chx_autorisation_menu'] === null ? ( null ) : ( parseInt( form['chx_autorisation_menu'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['cht_libelle_menu'] === null || form['cht_libelle_menu'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "libelle" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_titre_menu'] === null || form['chp_titre_menu'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "titre" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chx_autorisation_menu'] === null || form['chx_autorisation_menu'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "autorisation" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_methode_menu'] === null || form['chp_methode_menu'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "methode" doit être renseigné [' + this.__gi1.nl2() + ']' );
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
        let criteres_select_146={"T0_chi_id_menu" : form['chi_id_menu']};
        let tt146=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
        `T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu` , `T1`.`chp_nom_autorisation`
         FROM b1.tbl_menus T0
         LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
        ;
        */
        /*sql_inclure_fin*/ 146 , criteres_select_146 , donnees_retournees , __db1 );
        if(tt146[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt146[__xst] === __xsu && tt146[__xva].length === 1){
            let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt146[__xva][0] , __db1 );
            if(__actions_et_tests_avant_modifier[__xst] !== __xsu){
                return({"__xst" : __xer});
            }
            let criteres_148={
                 /*  */
                "c_chi_id_menu" : form['chi_id_menu'] ,
                "n_cht_libelle_menu" : form['cht_libelle_menu'] ,
                "n_chp_titre_menu" : form['chp_titre_menu'] ,
                "n_chx_autorisation_menu" : form['chx_autorisation_menu'] ,
                "n_chp_methode_menu" : form['chp_methode_menu'] ,
                "n_cht_condition_menu" : form['cht_condition_menu'] === '' ? ( null ) : ( form['cht_condition_menu'] ) ,
                "n_cht_initialisation_menu" : form['cht_initialisation_menu'] === '' ? ( null ) : ( form['cht_initialisation_menu'] ) ,
                "n_cht_condition_js_menu" : form['cht_condition_js_menu'] === '' ? ( null ) : ( form['cht_condition_js_menu'] )
            };
            await __db1.exec( 'BEGIN TRANSACTION;' );
            let tt148=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_menus SET 
               `cht_libelle_menu` = :n_cht_libelle_menu , 
               `chp_titre_menu` = :n_chp_titre_menu , 
               `chx_autorisation_menu` = :n_chx_autorisation_menu , 
               `chp_methode_menu` = :n_chp_methode_menu , 
               `cht_condition_menu` = :n_cht_condition_menu , 
               `cht_initialisation_menu` = :n_cht_initialisation_menu , 
               `cht_condition_js_menu` = :n_cht_condition_js_menu
            WHERE `chi_id_menu` = :c_chi_id_menu ;
            */
            /*sql_inclure_fin*/ 148 , criteres_148 , donnees_retournees , __db1 );
            if(tt148[__xst] !== __xsu){
                if(tt148['__xme'] !== ''){
                    this.__gi1.__xsi[__xer].push( tt148['__xme'] + ' [' + this.__gi1.nl2() );
                }else{
                    this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                }
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let __taam=await this.tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt146[__xva][0] , __db1 );
            if(__taam[__xst] !== __xsu){
                await __db1.exec( 'ROLLBACK;' );
                this.__gi1.__xsi[__xer].push( 'erreur après modification [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            await __db1.exec( 'COMMIT;' );
            if(retour_a_la_liste === true){
                if(form['__mat_liste_si_ok']){
                    /* this.__gi1.ma_trace1('form[__mat_liste_si_ok]='+form['__mat_liste_si_ok']); */
                    let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                    let d=1;
                    await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales );
                }
                return({"__xst" : __xsu});
            }
            let tt146_bis=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
            `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
            `T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu` , `T1`.`chp_nom_autorisation`
             FROM b1.tbl_menus T0
             LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
            
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
            
            WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
            ;
            */
            /*sql_inclure_fin*/ 146 , criteres_select_146 , donnees_retournees , __db1 );
            donnees_retournees[__xva]['page_modification1']=tt146_bis;
        }else{
            donnees_retournees[__xva]['page_modification1']=tt146;
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_menu=null , __db1=null ){
        if(chi_id_menu === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_menu'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_menu=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_menu(' + chi_id_menu + ')))))';
        }
        if(chi_id_menu === null){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt146=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
        `T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu` , `T1`.`chp_nom_autorisation`
         FROM b1.tbl_menus T0
         LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
        ;
        */
        /*sql_inclure_fin*/ 146 , {"T0_chi_id_menu" : chi_id_menu} , donnees_retournees , __db1 );
        if(tt146[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , tt146[__xva][0] , __db1 );
        if(aetam[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_modification1']=tt146;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_menu=null ){
        if(chi_id_menu === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_menu'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_menu=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_146={
             /*  */
            "T0_chi_id_menu" : chi_id_menu
        };
        let tt146=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
        `T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu` , `T1`.`chp_nom_autorisation`
         FROM b1.tbl_menus T0
         LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
        ;
        */
        /*sql_inclure_fin*/ 146 , criteres_146 , donnees_retournees , __db1 );
        if(tt146[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_duplication1']=tt146;
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
        let criteres_146={
             /*  */
            "T0_chi_id_menu" : form['chi_id_menu']
        };
        let tt146=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
        `T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu` , `T1`.`chp_nom_autorisation`
         FROM b1.tbl_menus T0
         LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
        ;
        */
        /*sql_inclure_fin*/ 146 , criteres_146 , donnees_retournees , __db1 );
        if(tt146[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt146[__xva][0] , __db1 );
        if(tas[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_149={
             /*  */
            "chi_id_menu" : form['chi_id_menu']
        };
        let tt149=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_menus
        WHERE `chi_id_menu` = :chi_id_menu ;
        */
        /*sql_inclure_fin*/ 149 , criteres_149 , donnees_retournees , __db1 );
        /*  */
        if(tt149[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let aac=await this.actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt146[__xva][0] , __db1 );
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
        let chi_id_menu=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_menu'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_menu=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_menu === 0){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let critere_146={"T0_chi_id_menu" : chi_id_menu};
        let tt146=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
        `T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu` , `T1`.`chp_nom_autorisation`
         FROM b1.tbl_menus T0
         LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
        ;
        */
        /*sql_inclure_fin*/ 146 , critere_146 , donnees_retournees , __db1 );
        donnees_retournees[__xva]['page_confirmation_supprimer1']=tt146;
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
        form['chx_autorisation_menu']=form['chx_autorisation_menu'] === null || form['chx_autorisation_menu'] === '' || form['chx_autorisation_menu'] === undefined ? ( null ) : ( parseInt( form['chx_autorisation_menu'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_titre_menu'] === null || form['chp_titre_menu'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "titre" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chx_autorisation_menu'] === null || form['chx_autorisation_menu'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "autorisation" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chp_methode_menu'] === null || form['chp_methode_menu'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "methode" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['cht_libelle_menu'] === null || form['cht_libelle_menu'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "libelle" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let __tac=await this.tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 );
        if(__tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{
                        "chp_titre_menu" : form['chp_titre_menu'] ,
                        "chx_autorisation_menu" : form['chx_autorisation_menu'] ,
                        "chp_methode_menu" : form['chp_methode_menu'] ,
                        "cht_libelle_menu" : form['cht_libelle_menu'] ,
                        "cht_condition_menu" : form['cht_condition_menu'] === '' ? ( null ) : ( form['cht_condition_menu'] ) ,
                        "cht_initialisation_menu" : form['cht_initialisation_menu'] === '' ? ( null ) : ( form['cht_initialisation_menu'] )
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt147=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_menus`(
            `chp_titre_menu` , 
            `chx_autorisation_menu` , 
            `chp_methode_menu` , 
            `cht_libelle_menu` , 
            `cht_condition_menu` , 
            `cht_initialisation_menu`
        ) VALUES (
            :chp_titre_menu , 
            :chx_autorisation_menu , 
            :chp_methode_menu , 
            :cht_libelle_menu , 
            :cht_condition_menu , 
            :cht_initialisation_menu
        );
        */
        /*sql_inclure_fin*/ 147 , donnees_sql , donnees_retournees , __db1 );
        if(tt147[__xst] === __xsu){
            if(tt147['changements'] === 0){
                this.__gi1.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let aac=await this.action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , tt147['nouvel_id'] , form , __db1 );
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
                await this.page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , tt147['nouvel_id'] , __db1 );
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( tt147['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
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
        let criteres145={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres145[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt145=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source`
         FROM b1.tbl_menus T0
         LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE (`T3`.`chp_nom_source` LIKE :T3_chp_nom_source
           AND `T0`.`chi_id_menu` = :T0_chi_id_menu
           AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
           AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
           AND `T0`.`chx_autorisation_menu` = :T0_chx_autorisation_menu
           AND `T1`.`chp_nom_autorisation` LIKE :T1_chp_nom_autorisation
           AND `T0`.`chp_methode_menu` LIKE :T0_chp_methode_menu
           AND `T1`.`chx_acces_autorisation` = :T1_chx_acces_autorisation) 
        ORDER BY `T0`.`chi_id_menu` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 145 , criteres145 , donnees_retournees , __db1 );
        if(tt145.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt145[__xst] === __xsu && tt145[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres145['debut']=__debut;
            let tt145=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
            `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source`
             FROM b1.tbl_menus T0
             LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
            
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
            
            WHERE (`T3`.`chp_nom_source` LIKE :T3_chp_nom_source
               AND `T0`.`chi_id_menu` = :T0_chi_id_menu
               AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
               AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
               AND `T0`.`chx_autorisation_menu` = :T0_chx_autorisation_menu
               AND `T1`.`chp_nom_autorisation` LIKE :T1_chp_nom_autorisation
               AND `T0`.`chp_methode_menu` LIKE :T0_chp_methode_menu
               AND `T1`.`chx_acces_autorisation` = :T1_chx_acces_autorisation) 
            ORDER BY `T0`.`chi_id_menu` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 145 , criteres145 , donnees_retournees , __db1 );
        }
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(';
        for(let i in formulaire){
            donnees_retournees[__xac]+=this.__gi1.__fnt1.critere_liste( formulaire , i );
        }
        donnees_retournees[__xac]+='))))';
        donnees_retournees[__xva][this.fonction_liste]=tt145;
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
    moi='menus1';
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
export{menus1 as menus1};