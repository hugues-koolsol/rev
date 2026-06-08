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
    async recupere_methodes1( mat , d ){
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
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "autorisation" doit être renseignée [' + this.__ig1.nl2() + ']'});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_141={"T0_chi_id_autorisation" : chi_id_autorisation};
        let tt141=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
        ;
        */
        /*sql_inclure_fin*/ 141 , criteres_select_141 , this.__ig1.donnees_retournees , __db1 );
        if(tt141.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt141.__xme});
        }
        if(tt141[__xva][0]['T2.che_binaire_source'] === 1){
            return({"__xst" : __xer ,"__xme" : 'on ne peut pas récupérer les méthodes d\'un fichier binaire [' + this.__ig1.nl2() + ']'});
        }
        let chemin_fichier='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__programmes/' + tt141[__xva][0]['T2.chp_nom_source'];
        if(tt141[__xva][0]['T2.chp_nom_source'].substr( tt141[__xva][0]['T2.chp_nom_source'].length - 3 ) === '.js'){
            /*
              si c'est un source js, on retource le source et on fera le traitement dans c_menus1.js
            */
            if(!(await this.__ig1.is_file( chemin_fichier ))){
                return({"__xst" : __xer ,"__xme" : ' erreur sur la construction du chemin [' + this.__ig1.nl2() + ']'});
            }
            this.__ig1.donnees_retournees[__xva]['cht_genere_source']=await this.__ig1.file_get_contents( chemin_fichier );
            this.__ig1.donnees_retournees[__xva]['chp_nom_source']=tt141[__xva][0]['T2.chp_nom_source'];
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
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
        /*
          après maj du menu, on met à jour le tri du menu
        */
        /* this.__ig1.ma_trace1( '__xva_avant=' , __xva_avant ); */
        /* this.__ig1.ma_trace1( 'form=' , form ); */
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
          }
        */
        let criteres_select_141={"T0_chi_id_autorisation" : form['chx_autorisation_menu']};
        let tt141=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_acces` , 
        `T2`.`chp_nom_source` , `T2`.`che_binaire_source` , `T2`.`chx_dossier_id_source`
         FROM b1.tbl_autorisations T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation
        
        WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
        ;
        */
        /*sql_inclure_fin*/ 141 , criteres_select_141 , this.__ig1.donnees_retournees , __db1 );
        if(tt141.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [' + this.__ig1.nl2() + ']'});
        }
        /* this.__ig1.ma_trace1( 'tt141=' , tt141[__xva][0] ); */
        if(tt141[__xva][0]['T0.chx_acces_autorisation'] === null){
            /* c'est un menu qui est pour les utilisateurs non connectés */
            tt141[__xva][0]['T0.chx_acces_autorisation']=0;
            /* return({"__xst" : __xsu}); */
        }
        if(tt141[__xva][0]['T2.chp_nom_source'].slice( -5 ) === '_s.js'){
            return({"__xst" : __xer ,"__xme" : 'l\'autorisation de ce menu pointe sur un source serveur et devrait pointer sur un source client'});
        }
        let criteres_136={
             /*  */
            "T0_chi_id_acces" : tt141[__xva][0]['T0.chx_acces_autorisation']
        };
        let tt136=await this.__ig1.sql_iii(
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
        /*sql_inclure_fin*/ 136 , criteres_136 , this.__ig1.donnees_retournees , __db1 );
        if(tt136.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        /* this.__ig1.ma_trace1( 'tt136=' , tt136[__xva] ); */
        let json_de_l_acces=JSON.parse( tt136[__xva][0]['T0.cht_parametres_acces'] );
        /* this.__ig1.ma_trace1('json_de_l_acces=',json_de_l_acces); */
        let le_json_du_menu=null;
        if( typeof json_de_l_acces.le_json_du_menu === 'string'){
            le_json_du_menu=JSON.parse( json_de_l_acces.le_json_du_menu );
        }else{
            le_json_du_menu=json_de_l_acces.le_json_du_menu;
        }
        /* this.__ig1.ma_trace1('le_json_du_menu=',JSON.stringify(le_json_du_menu,null,2)); */
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
            /* this.__ig1.ma_trace1('le_json_du_menu[i].attributs=',le_json_du_menu[i].attributs); */
            if(le_json_du_menu[i].attributs.hasOwnProperty( 'data-chi_id_menu' )
                   && parseInt( le_json_du_menu[i].attributs['data-chi_id_menu'] , 10 ) === parseInt( form['chi_id_menu'] , 10 )
            ){
                /* this.__ig1.ma_trace1('avant le_json_du_menu[i]=',le_json_du_menu[i]); */
                le_json_du_menu[i].contenu=form['cht_libelle_menu'];
                le_json_du_menu[i].attributs['data-chi_id_source']=tt141[__xva][0]['T0.chx_source_autorisation'];
                le_json_du_menu[i].attributs['data-chp_nom_source']=tt141[__xva][0]['T2.chp_nom_source'];
                le_json_du_menu[i].attributs['data-chp_methode_menu']=form['chp_methode_menu'];
                le_json_du_menu[i].attributs['data-chi_id_menu']=parseInt( form['chi_id_menu'] , 10 );
                le_json_du_menu[i].attributs['data-chp_titre_menu']=form['chp_titre_menu'];
                le_json_du_menu[i].attributs['data-cht_initialisation_menu']=form['cht_initialisation_menu'] === '' ? ( null ) : ( form['cht_initialisation_menu'] );
                le_json_du_menu[i].attributs['data-cht_condition_js_menu']=form['cht_condition_js_menu'] === '' ? ( null ) : ( form['cht_condition_js_menu'] );
                le_json_du_menu[i].attributs['data-cht_condition_menu']=form['cht_condition_menu'] === '' ? ( null ) : ( form['cht_condition_menu'] );
                /* this.__ig1.ma_trace1('après le_json_du_menu[i]=',le_json_du_menu[i]); */
                json_de_l_acces.le_json_du_menu=le_json_du_menu;
                let nouveau_json_texte=JSON.stringify( json_de_l_acces , null , 2 );
                /* this.__ig1.ma_trace1('nouveau_json_texte=' , nouveau_json_texte ); */
                let criteres_154={"c_chi_id_acces" : tt141[__xva][0]['T0.chx_acces_autorisation'] ,"n_cht_parametres_acces" : nouveau_json_texte};
                let tt154=await this.__ig1.sql_iii(
                /*sql_inclure_deb*/ /*#
                UPDATE b1.tbl_acces SET 
                   `cht_parametres_acces` = :n_cht_parametres_acces
                WHERE `chi_id_acces` = :c_chi_id_acces ;
                */
                /*sql_inclure_fin*/ 154 , criteres_154 , this.__ig1.donnees_retournees , __db1 );
                if(tt154.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
                }
            }
        }
        /* l'id acces qui est passé au module acces pour régénération du menu */
        this.__ig1.donnees_recues[__xva]['chi_id_acces']=tt141[__xva][0]['T0.chx_acces_autorisation'];
        let m=await import( './acces1_s.js' );
        let o=new m['acces1']( this.__ig1 );
        let obj=await o.produire_le_menu( mat , d , __db1 );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'erreur de génération du menu [' + this.__ig1.nl2()});
        }
        if(this.__ig1.donnees_retournees._CA_ === this.__ig1.donnees_retournees.chi_id_projet){
            await this.__ig1.obtenir_les_menus( mat , d );
        }
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
        form['chi_id_menu']=form['chi_id_menu'] === null ? ( null ) : ( parseInt( form['chi_id_menu'] , 10 ) );
        form['chx_autorisation_menu']=form['chx_autorisation_menu'] === null ? ( null ) : ( parseInt( form['chx_autorisation_menu'] , 10 ) );
        if(isNaN( form['chx_autorisation_menu'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "autorisation" doit être numérique'});
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
        let criteres_select_146={"T0_chi_id_menu" : form['chi_id_menu']};
        let tt146=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
        `T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu`
         FROM b1.tbl_menus T0
         LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
        ;
        */
        /*sql_inclure_fin*/ 146 , criteres_select_146 , this.__ig1.donnees_retournees , __db1 );
        if(tt146.__xst !== __xsu || tt146.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [146 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt146[__xva][0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_148={
             /*  */
            "c_chi_id_menu" : form['chi_id_menu'] ,
            "n_cht_libelle_menu" : form['cht_libelle_menu'] ,
            "n_chp_titre_menu" : form['chp_titre_menu'] ,
            "n_chx_autorisation_menu" : form['chx_autorisation_menu'] ,
            "n_chp_methode_menu" : form['chp_methode_menu'] ,
            "n_cht_condition_menu" : form['cht_condition_menu'] === '' ? ( null ) : ( form['cht_condition_menu'] ) ,
            "n_cht_condition_js_menu" : form['cht_condition_js_menu'] === '' ? ( null ) : ( form['cht_condition_js_menu'] ) ,
            "n_cht_initialisation_menu" : form['cht_initialisation_menu'] === '' ? ( null ) : ( form['cht_initialisation_menu'] )
        };
        /* =========================== mise à jour effective ======================== */
        let tt148=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_menus SET 
           `cht_libelle_menu` = :n_cht_libelle_menu , 
           `chp_titre_menu` = :n_chp_titre_menu , 
           `chx_autorisation_menu` = :n_chx_autorisation_menu , 
           `chp_methode_menu` = :n_chp_methode_menu , 
           `cht_condition_menu` = :n_cht_condition_menu , 
           `cht_condition_js_menu` = :n_cht_condition_js_menu , 
           `cht_initialisation_menu` = :n_cht_initialisation_menu
        WHERE `chi_id_menu` = :c_chi_id_menu ;
        */
        /*sql_inclure_fin*/ 148 , criteres_148 , this.__ig1.donnees_retournees , __db1 );
        if(tt148.__xst !== __xsu || tt148.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt148.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt146[__xva][0] , __db1 );
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
        let tt146_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
        `T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu`
         FROM b1.tbl_menus T0
         LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
        ;
        */
        /*sql_inclure_fin*/ 146 , criteres_select_146 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt146_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_menu=null , __db1=null ){
        if(chi_id_menu === null){
            const l01=mat.length;
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
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_menu(' + chi_id_menu + ')))))';
        }
        if(chi_id_menu === null){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt146=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
        `T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu`
         FROM b1.tbl_menus T0
         LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
        ;
        */
        /*sql_inclure_fin*/ 146 , {"T0_chi_id_menu" : chi_id_menu} , this.__ig1.donnees_retournees , __db1 );
        if(tt146.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt146.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt146[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt146;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_menu=null ){
        if(chi_id_menu === null){
            const l01=mat.length;
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
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_146={
             /*  */
            "T0_chi_id_menu" : chi_id_menu
        };
        let tt146=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
        `T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu`
         FROM b1.tbl_menus T0
         LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
        ;
        */
        /*sql_inclure_fin*/ 146 , criteres_146 , this.__ig1.donnees_retournees , __db1 );
        if(tt146.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt146.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt146;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_menu=0;
        const l01=mat.length;
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_146={"T0_chi_id_menu" : chi_id_menu};
        let tt146=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
        `T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu`
         FROM b1.tbl_menus T0
         LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
        ;
        */
        /*sql_inclure_fin*/ 146 , critere_146 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_voir1']=tt146;
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
        let criteres_146={
             /*  */
            "T0_chi_id_menu" : form['chi_id_menu']
        };
        let tt146=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
        `T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu`
         FROM b1.tbl_menus T0
         LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
        ;
        */
        /*sql_inclure_fin*/ 146 , criteres_146 , this.__ig1.donnees_retournees , __db1 );
        if(tt146.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt146.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt146[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_149={
             /*  */
            "chi_id_menu" : form['chi_id_menu']
        };
        let tt149=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_menus
        WHERE `chi_id_menu` = :chi_id_menu ;
        */
        /*sql_inclure_fin*/ 149 , criteres_149 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt149.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt149.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , form , tt146[__xva][0] , __db1 );
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
        let chi_id_menu=0;
        const l01=mat.length;
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
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_146={"T0_chi_id_menu" : chi_id_menu};
        let tt146=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_initialisation_menu` , `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , 
        `T3`.`chp_nom_source` , `T3`.`che_binaire_source` , `T0`.`cht_condition_js_menu`
         FROM b1.tbl_menus T0
         LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE `T0`.`chi_id_menu` = :T0_chi_id_menu
        ;
        */
        /*sql_inclure_fin*/ 146 , critere_146 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt146;
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
        form['chx_autorisation_menu']=form['chx_autorisation_menu'] === null || form['chx_autorisation_menu'] === '' || form['chx_autorisation_menu'] === undefined ? ( null ) : ( parseInt( form['chx_autorisation_menu'] , 10 ) );
        /* conversion des données numériques fin */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_147={
            "donnees" : [{
                        "chp_titre_menu" : form['chp_titre_menu'] ,
                        "chx_autorisation_menu" : form['chx_autorisation_menu'] ,
                        "chp_methode_menu" : form['chp_methode_menu'] ,
                        "cht_libelle_menu" : form['cht_libelle_menu'] ,
                        "cht_condition_menu" : form['cht_condition_menu'] === '' ? ( null ) : ( form['cht_condition_menu'] ) ,
                        "cht_condition_js_menu" : form['cht_condition_js_menu'] === '' ? ( null ) : ( form['cht_condition_js_menu'] ) ,
                        "cht_initialisation_menu" : form['cht_initialisation_menu'] === '' ? ( null ) : ( form['cht_initialisation_menu'] )
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt147=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_menus`(
            `chp_titre_menu` , 
            `chx_autorisation_menu` , 
            `chp_methode_menu` , 
            `cht_libelle_menu` , 
            `cht_condition_menu` , 
            `cht_condition_js_menu` , 
            `cht_initialisation_menu`
        ) VALUES (
            :chp_titre_menu , 
            :chx_autorisation_menu , 
            :chp_methode_menu , 
            :cht_libelle_menu , 
            :cht_condition_menu , 
            :cht_condition_js_menu , 
            :cht_initialisation_menu
        );
        */
        /*sql_inclure_fin*/ 147 , criteres_147 , this.__ig1.donnees_retournees , __db1 );
        if(tt147.__xst !== __xsu || tt147['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt147.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let __aapc=await this.action_apres_creer( mat , d , tt147['nouvel_id'] , form , __db1 );
        if(__aapc.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aapc.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt147['nouvel_id'] , __db1 );
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
        let criteres_145={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_145[i]=formulaire[i];
            }
        }
        criteres_145['acces_pas_dans']='(-1)';
        if(this.__ig1.donnees_retournees._CA_ > 2 && this.__ig1.donnees_retournees.chi_id_utilisateur > 1){
            criteres_145['acces_pas_dans']='(1,2)';
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt145=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source`
         FROM b1.tbl_menus T0
         LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE (`T3`.`chp_nom_source` LIKE :T3_chp_nom_source
           AND `T1`.`chx_acces_autorisation` = :T1_chx_acces_autorisation
           AND `T0`.`chi_id_menu` = :T0_chi_id_menu
           AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
           AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
           AND `T0`.`chx_autorisation_menu` = :T0_chx_autorisation_menu
           AND `T0`.`chp_methode_menu` LIKE :T0_chp_methode_menu
           AND `T1`.`chx_acces_autorisation` NOT IN :acces_pas_dans) 
        ORDER BY `T0`.`chi_id_menu` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 145 , criteres_145 , this.__ig1.donnees_retournees , __db1 );
        if(tt145.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt145.__xme});
        }
        if(tt145.__xst === __xsu && tt145.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_145['debut']=__debut;
            tt145=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_menu` , `T0`.`chp_titre_menu` , `T0`.`chx_autorisation_menu` , `T0`.`chp_methode_menu` , `T0`.`cht_libelle_menu` , 
            `T0`.`cht_condition_menu` , `T1`.`chx_acces_autorisation` , `T1`.`chx_source_autorisation` , `T2`.`chp_nom_acces` , `T3`.`chp_nom_source`
             FROM b1.tbl_menus T0
             LEFT JOIN b1.tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
            
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
            
            WHERE (`T3`.`chp_nom_source` LIKE :T3_chp_nom_source
               AND `T1`.`chx_acces_autorisation` = :T1_chx_acces_autorisation
               AND `T0`.`chi_id_menu` = :T0_chi_id_menu
               AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
               AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
               AND `T0`.`chx_autorisation_menu` = :T0_chx_autorisation_menu
               AND `T0`.`chp_methode_menu` LIKE :T0_chp_methode_menu
               AND `T1`.`chx_acces_autorisation` NOT IN :acces_pas_dans) 
            ORDER BY `T0`.`chi_id_menu` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 145 , criteres_145 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva][this.fonction_liste]=tt145;
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
    moi='menus1';
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
export{menus1 as menus1};