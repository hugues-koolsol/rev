import {w_ast_js_vers_rev1} from './f0?n0=w_ast_js_vers_rev1_.js';
class menus1{
    /*
      ref_liste_ecran=1145;
      ref_select=1146;
      ref_insert=1147;
      ref_update=1148;
      ref_delete=1149;
    */
    moi='menus1';
    DUN_DUNE_ELEMENT_GERE='d\'un menu';
    LISTE_DES_ELEMENTS_GERES='liste des menus';
    __ig1=null;
    #objet_conversion_ast_js_vers_rev=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"nom" : '__num_page' ,"taille" : 9 ,"défaut" : 0 ,"masqué" : true} ,
            "T3_chp_nom_source" : {"nom" : 'nom source' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T1_chx_acces_autorisation" : {"nom" : 'id accès' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chi_id_menu" : {"nom" : 'id' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_cht_libelle_menu" : {"nom" : 'libelle' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chp_titre_menu" : {"nom" : 'titre' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chx_autorisation_menu" : {"nom" : 'id autorisation' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chp_methode_menu" : {"nom" : 'methode' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false}
        }
    };
    /*
    */
    filtres={};
    __variables_module={};
    vv_ecran_liste_boutons_avant='';
    /*
      =============================================================================================================
    */
    recupere_methodes1( mat , d , données ){
        let vv_liste_des_methodes='';
        if(données.__xva.hasOwnProperty( 'chp_nom_source' )){
            /*
              c'est un js, il faut le traiter dynamiquement
            */
            let parseur_javascript=null;
            try{
                parseur_javascript=window.acorn.Parser;
            }catch(e){
                return({"__xst" : __xer ,"__xme" : 'erreur de chargement du parseur js ' + this.__ig1.__m_rev1.nl2( e )});
            }
            let tableau_des_commentaires_js=[];
            let obj=null;
            try{
                obj=parseur_javascript.parse( données.__xva['cht_genere_source'] , {"ecmaVersion" : 'latest' ,"sourceType" : 'module' ,"ranges" : false ,"onComment" : tableau_des_commentaires_js} );
            }catch(e){
                return({"__xst" : __xer ,"__xme" : this.__ig1.nl2() + ' <br />erreur dans le javascript :' + e.message});
            }
            /*
              =============================================================================================
              transformation de l'ast du js en rev 
            */
            let obj1=this.#objet_conversion_ast_js_vers_rev.traite_ast( obj.body , tableau_des_commentaires_js , {} );
            if(obj1.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : 'erreur de transformation du js en rev ' + chi_id_source + '[' + this.__ig1.nl2() + ']'});
            }
            /*
              =============================================================================================
              on transforme le ast du js en rev 
            */
            let obj2=this.__ig1.__rev1.rev_tm( obj1.__xva );
            if(obj2.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
            }
            let mat1=obj2.__xva;
            let l01=mat1.length;
            for( let i=1 ; i < l01 ; i=mat1[i][12] ){
                if(mat1[i][1] === 'definition_de_classe' && mat1[i][2] === 'f'){
                    for( let j=i + 1 ; j < l01 ; j=mat1[j][12] ){
                        if(mat1[j][1] === 'contenu' && mat1[j][2] === 'f'){
                            for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                                if(mat1[k][1] === 'méthode' && mat1[k][2] === 'f'){
                                    for( let l=k + 1 ; l < l01 ; l=mat1[l][12] ){
                                        if(mat1[l][1] === 'definition' && mat1[l][2] === 'f'){
                                            for( let m=l + 1 ; m < l01 ; m=mat1[m][12] ){
                                                if(mat1[m][1] === 'nom'
                                                       && mat1[m][2] === 'f'
                                                       && mat1[m][8] === 1
                                                       && mat1[m + 1][2] === 'c'
                                                       && mat1[m + 1][1].substr( 0 , 7 ) === 'entree_'
                                                ){
                                                    vv_liste_des_methodes+='<div ';
                                                    vv_liste_des_methodes+=' class="rev_bouton"';
                                                    vv_liste_des_methodes+=' data-rev_click="';
                                                    vv_liste_des_methodes+='m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_methode_menu),valeur(valeur_constante(' + mat1[m + 1][1] + ')))))';
                                                    vv_liste_des_methodes+='"';
                                                    vv_liste_des_methodes+='>' + mat1[m + 1][1] + '</div>';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        document.getElementById( 'vv_liste_des_methodes' ).innerHTML=vv_liste_des_methodes;
        this.__ig1.ajoute_les_evenements_aux_boutons();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    affiche_methodes( mat , d ){
        let champ='';
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ=mat[i + 1][1];
            }
        }
        if(champ === ''){
            return({"__xst" : __xer ,"__xme" : 'champ vide' + __ig1.nl2( e )});
        }
        let chi_id_autorisation=parseInt( document.getElementById( champ ).value );
        if(isNaN( chi_id_autorisation )){
            return({"__xst" : __xer ,"__xme" : 'champ vide' + __ig1.nl2( e )});
        }
        this.__ig1.envoyer_un_colis_au_worker( {"__xac" : 'pm1(m1(n1(' + this.moi + '),f1(recupere_methodes1(chi_id_autorisation(' + chi_id_autorisation + ')))))'} );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    f1( mat , d , le_colis1=null ){
        switch (mat[d][1]){
            case 'xxxxx' :
                /*
                  this.__ig1.fermer_la_sous_fenetre();
                  this.entree_module( null );
                */
                break;
                
            default:
                return({"__xst" : __xer ,"__xme" : 'dans l\'interface client "' + mat[d][1] + '" n\'est pas traitée ou bien comporte une erreur'});
                
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
        for(let i in this.tableau_des_filtres){
            this.filtres[i]={};
            for(let j in this.tableau_des_filtres[i]){
                this.filtres[i][j]=this.tableau_des_filtres[i][j].défaut;
            }
        }
        let aa=sessionStorage.getItem( this.__ig1.cle_lst0 + '_' + this.moi + '_liste1' );
        if(aa !== null){
            let jso=JSON.parse( aa );
            for(let i in this.tableau_des_filtres.liste1){
                this.filtres.liste1[i]=jso[i]??this.tableau_des_filtres.liste1[i].défaut;
            }
        }
        this.vv_ecran_liste_boutons_avant+='<div class="yy_svg1 yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(page_creer1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + '" >' + this.__ig1.les_svg.nouveau_document + '</div>';
        /*
          pré chargement du module externe acorn car on peut en avoir besoin
          lors de la modification d'un menu
        */
        this.__ig1.charger_script_dynamique( '/f0?n0=bibliotheques_externes/acorn1_c.js' );
        this.#objet_conversion_ast_js_vers_rev=new w_ast_js_vers_rev1( '#objet_conversion_ast_js_vers_rev' , __ig1 );
    }
    /*
      =============================================================================================================
    */
    afficher_le_contenu_sous_pg_modif1( mat , d , le_colis1=null ){
        let o1='';
        /*#
          if(this.__variables_module.hasOwnProperty('__televersement2')){
              o1+=this.__variables_module['__televersement2']['tableau_html_des_televersements']([] , 0 , le_colis1.__xva.fichiers_televerses );
          }
        */
        if(o1 !== ''){
            o1+='<div class="yy__bdp1"></div>';
        }
        document.getElementById( 'vv_ecran_modification_zone_complement' ).innerHTML=o1;
    }
    /*
      =============================================================================================================
    */
    verifier_modifier1( mat , d , données ){
        if(this.__ig1.stockage_local.aspect['--supprimer_les_messages_affiches_lors_d_un_envoi_de_colis'].valeur === 1){
            this.__ig1.supprimer_les_messages();
        }
        let retour_a_la_liste='';
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste='retour_a_la_liste()';
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        let __les_convertions=[
            /*  */
            {"nc" : "id1" ,"nz" : 'chi_id_menu' ,"m" : 'une erreur système est survenue sur le champ "identifiant"'},
            {"nc" : "entier1" ,"nz" : 'chx_autorisation_menu' ,"vpd" : undefined ,"lib" : 'id de l&apos;autorisation'}
        ];
        let __obj_convertions=this.__ig1.__fnt1.convertir_les_zonnes_saisies( __les_convertions , fo1 );
        if(__obj_convertions.__xst !== __xsu){
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques verifier_modifier fin */
        let __les_tests=[
            /*  */
            {"nt" : 'non_vide1' ,"nz" : "cht_libelle_menu" ,"lib" : 'libelle'},
            {"nt" : 'non_vide1' ,"nz" : "chp_titre_menu" ,"lib" : 'titre'},
            {"nt" : 'non_vide1' ,"nz" : "chx_autorisation_menu" ,"lib" : 'id de l&apos;autorisation'},
            {"nt" : 'non_vide1' ,"nz" : "chp_methode_menu" ,"lib" : 'methode'}
        ];
        let __obj_tests=this.__ig1.__fnt1.tester_les_zonnes_saisies( __les_tests , fo1 );
        if(__obj_tests.__xst !== __xsu){
            return({"__xst" : __xsu});
        }
        if(fo1.cht_condition_menu !== null && fo1.cht_condition_menu !== ''){
            let obj1=this.__ig1.__rev1.rev_tm( fo1.cht_condition_menu );
            if(obj1.__xst !== __xsu){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu de "condition au format rev" n\'est pas dans un format rev valide'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'cht_condition_menu' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        let __test_4_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( fo1.cht_condition_menu , 'condition au format rev' );
        if(__test_4_1.__xst !== __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_4_1.__xme} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_condition_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1.cht_initialisation_menu !== null && fo1.cht_initialisation_menu !== ''){
            let obj1=this.__ig1.__rev1.rev_tm( fo1.cht_initialisation_menu );
            if(obj1.__xst !== __xsu){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu de "initialisation" n\'est pas dans un format rev valide'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'cht_initialisation_menu' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        let __test_6_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( fo1.cht_initialisation_menu , 'initialisation' );
        if(__test_6_1.__xst !== __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_6_1.__xme} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_initialisation_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        let __fo1={};
        __fo1[co1]=fo1;
        this.__ig1.envoyer_un_colis_au_worker( {
                 /*  */
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(modifier1(' + retour_a_la_liste + '))))' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_modification1( mat , d , le_colis1=null ){
        if(!le_colis1.__xva.hasOwnProperty( 'page_modification1' )){
            return(this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : 'cet élément n\'a pas été trouvé'} ));
        }
        let tup=le_colis1.__xva.page_modification1.__xva[0];
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , tup.T0_chi_id_menu , this.moi , 'chi_id_menu' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {"nom_du_champ" : "cht_libelle_menu" ,"__contexte" : "modification1" ,"libelle_du_champ" : "libelle" ,"rows" : 3 ,"cols" : 50} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {"nom_du_champ" : "chp_titre_menu" ,"__contexte" : "modification1" ,"longueur_du_champ" : 64 ,"libelle_du_champ" : "titre"} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_autrex2( tup , {
            "nom_du_champ" : "chx_autorisation_menu" ,
            "__contexte" : "modification1" ,
            "libelle_du_champ" : "id de l'autorisation" ,
            "bouton_vider" : false ,
            "nom_du_lien" : "autorisations2" ,
            "liste_des_champs_libelles" : ["T3_chp_nom_source","T2_chp_nom_acces"]
        } , this );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {"nom_du_champ" : "chp_methode_menu" ,"__contexte" : "modification1" ,"longueur_du_champ" : 64 ,"libelle_du_champ" : "methode"} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {
            "nom_du_champ" : "cht_condition_menu" ,
            "__contexte" : "modification1" ,
            "libelle_du_champ" : "condition au format rev" ,
            "rows" : 3 ,
            "cols" : 50 ,
            "format_du_source" : 2
        } );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {
            "nom_du_champ" : "cht_condition_js_menu" ,
            "__contexte" : "modification1" ,
            "libelle_du_champ" : "condition au format js" ,
            "rows" : 3 ,
            "cols" : 50 ,
            "format_du_source" : 1
        } );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {
            "nom_du_champ" : "cht_initialisation_menu" ,
            "__contexte" : "modification1" ,
            "libelle_du_champ" : "initialisation" ,
            "rows" : 3 ,
            "cols" : 50 ,
            "format_du_source" : 2
        } );
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_menu" value="' + tup.T0_chi_id_menu + '">';
        /*
          =====================================================================================================
        */
        let cmd='';
        cmd+='liste1(';
        for(let i in this.tableau_des_filtres['liste1']){
            if(this.filtres['liste1'][i] !== ''){
                cmd+=i + '(\'' + this.__ig1.fi2( this.filtres['liste1'][i] ) + '\')';
            }
        }
        cmd+=')';
        let obj2=this.__ig1.__rev1.rev_tm( cmd );
        let jso=JSON.stringify( obj2.__xva );
        o1+='      <input type="hidden" id="__mat_liste_si_ok" value="' + this.__ig1.fi2( jso ) + '" />';
        o1+='<div class="yy__bdp1"></div>';
        this.__ig1.maj_inner1( 'vv_ecran_modification_zone_contenu' , o1 );
        this.__ig1.maj_hash( mat , 0 );
        this.__ig1.maj_title_htm1( 'modification ' + this.DUN_DUNE_ELEMENT_GERE );
        this.afficher_le_contenu_sous_pg_modif1( mat , d , le_colis1 );
        this.__ig1.ajoute_les_evenements_aux_boutons();
        this.__ig1.repositionner_les_boutons_action( 'vv_ecran_modification_zone_boutons' );
        if(this.__ig1.decallage_page_avant_envoi > 0){
            window.scrollTo( {"top" : this.__ig1.decallage_page_avant_envoi ,"left" : 0} );
            this.__ig1.decallage_page_avant_envoi=0;
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modifier1( mat , d , le_colis1=null ){
        /*
          on recharge la page après modification au besoin
        */
        /*
          let tt='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_menu(' + le_colis1.__xva.page_modification1.__xva[0].T0_chi_id_menu + ')))))';
          this.__ig1.executer1(tt , null , null);
        */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_confirmation_supprimer1( mat , d , le_colis1=null ){
        if(!le_colis1.__xva.hasOwnProperty( 'page_confirmation_supprimer1' )){
            return(this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : 'cet élément n\'a pas été trouvé'} ));
        }
        let tup=le_colis1.__xva.page_confirmation_supprimer1.__xva[0];
        if(tup.T0_chi_id_menu === undefined){
            return({"__xst" : __xer ,"__xme" : "Attention, le champ T0_chi_id_menu n'est pas en sortie dans la requête select "});
        }
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , tup.T0_chi_id_menu , this.moi , 'chi_id_menu' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {"nom_du_champ" : "cht_libelle_menu" ,"__contexte" : "supprimer1" ,"libelle_du_champ" : "libelle" ,"rows" : 3 ,"cols" : 50} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {"nom_du_champ" : "chp_titre_menu" ,"__contexte" : "supprimer1" ,"longueur_du_champ" : 64 ,"libelle_du_champ" : "titre"} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {"nom_du_champ" : "cht_condition_menu" ,"__contexte" : "supprimer1" ,"libelle_du_champ" : "condition au format rev" ,"rows" : 3 ,"cols" : 50} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_autrex2( tup , {
            "nom_du_champ" : "chx_autorisation_menu" ,
            "__contexte" : "supprimer1" ,
            "libelle_du_champ" : "id de l'autorisation" ,
            "nom_du_lien" : "autorisations2" ,
            "liste_des_champs_libelles" : ["T3_chp_nom_source","T2_chp_nom_acces"]
        } , this );
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_menu" value="' + tup.T0_chi_id_menu + '" />';
        /*
          =====================================================================================================
        */
        let cmd='';
        cmd+='liste1(';
        for(let i in this.tableau_des_filtres['liste1']){
            if(this.filtres['liste1'][i] !== ''){
                cmd+=i + '(\'' + this.__ig1.fi2( this.filtres['liste1'][i] ) + '\')';
            }
        }
        cmd+=')';
        let obj2=this.__ig1.__rev1.rev_tm( cmd );
        let jso=JSON.stringify( obj2.__xva );
        o1+='<input type="hidden" id="__mat_liste_si_ok" value="' + this.__ig1.fi2( jso ) + '" />';
        o1+='<div class="yy__bdp1"></div>';
        this.__ig1.maj_inner1( 'vv_ecran_suppression_zone_contenu' , o1 );
        this.__ig1.maj_title_htm1( 'suppression ' + this.DUN_DUNE_ELEMENT_GERE );
        if(this.__ig1.stockage_local['parametres']['__deverminage']['valeur'] > 0){
            this.__ig1.maj_hash( mat , 0 );
        }
        this.__ig1.ajoute_les_evenements_aux_boutons();
        this.__ig1.repositionner_les_boutons_action( 'vv_ecran_suppression_zone_boutons' );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_duplication1( mat , d , le_colis1 ){
        this.page_creer1( mat , d , le_colis1.__xva.page_duplication1.__xva[0] );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    verifier_creer1( mat , d , données ){
        if(this.__ig1.stockage_local.aspect['--supprimer_les_messages_affiches_lors_d_un_envoi_de_colis'].valeur === 1){
            this.__ig1.supprimer_les_messages();
        }
        let retour_a_la_liste='';
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste='retour_a_la_liste()';
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        /* conversion des données numériques verifier_creer début */
        let __les_convertions=[
            /*  */
            {"nc" : "entier1" ,"nz" : 'chx_autorisation_menu' ,"vpd" : undefined ,"lib" : 'id de l&apos;autorisation'}
        ];
        let __obj_convertions=this.__ig1.__fnt1.convertir_les_zonnes_saisies( __les_convertions , fo1 );
        if(__obj_convertions.__xst !== __xsu){
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques verifier_creer fin */
        let __les_tests=[
            /*  */
            {"nt" : 'non_vide1' ,"nz" : "chp_titre_menu" ,"lib" : 'titre'},
            {"nt" : 'non_vide1' ,"nz" : "chx_autorisation_menu" ,"lib" : 'id de l&apos;autorisation'},
            {"nt" : 'non_vide1' ,"nz" : "chp_methode_menu" ,"lib" : 'methode'},
            {"nt" : 'non_vide1' ,"nz" : "cht_libelle_menu" ,"lib" : 'libelle'}
        ];
        let __obj_tests=this.__ig1.__fnt1.tester_les_zonnes_saisies( __les_tests , fo1 );
        if(__obj_tests.__xst !== __xsu){
            return({"__xst" : __xsu});
        }
        let __test_4_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( fo1.cht_condition_menu , 'condition au format rev' );
        if(__test_4_1.__xst !== __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_4_1.__xme} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_condition_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        let __test_6_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( fo1.cht_initialisation_menu , 'initialisation' );
        if(__test_6_1.__xst !== __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_6_1.__xme} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_initialisation_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        let __fo1={};
        __fo1[co1]=fo1;
        this.__ig1.envoyer_un_colis_au_worker( {
                 /*  */
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(creer1(' + retour_a_la_liste + '))))' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_creer1( mat , d , tup=null ){
        /* si on veut dupliquer, tup n'est pas nul */
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_creation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , null , this.moi , 'chi_id_menu' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {
            "nom_du_champ" : "chp_titre_menu" ,
            "__contexte" : "creer1" ,
            "longueur_du_champ" : 64 ,
            "libelle_du_champ" : "titre" ,
            "valeur_par_defaut" : ''
        } );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_autrex2( tup , {
            "nom_du_champ" : "chx_autorisation_menu" ,
            "__contexte" : "creer1" ,
            "libelle_du_champ" : "id de l'autorisation" ,
            "bouton_vider" : false ,
            "nom_du_lien" : "autorisations2" ,
            "liste_des_champs_libelles" : ["T3_chp_nom_source","T2_chp_nom_acces"] ,
            "valeur_par_defaut" : ""
        } , this );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {
            "nom_du_champ" : "chp_methode_menu" ,
            "__contexte" : "creer1" ,
            "longueur_du_champ" : 64 ,
            "libelle_du_champ" : "methode" ,
            "valeur_par_defaut" : ''
        } );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {
            "nom_du_champ" : "cht_libelle_menu" ,
            "__contexte" : "creer1" ,
            "libelle_du_champ" : "libelle" ,
            "rows" : 3 ,
            "cols" : 50 ,
            "format_du_source" : 0 ,
            "valeur_par_defaut" : "" ,
            "non_nulle" : true
        } );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {
            "nom_du_champ" : "cht_condition_menu" ,
            "__contexte" : "creer1" ,
            "libelle_du_champ" : "condition au format rev" ,
            "rows" : 3 ,
            "cols" : 50 ,
            "format_du_source" : 2 ,
            "valeur_par_defaut" : "" ,
            "non_nulle" : false
        } );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {
            "nom_du_champ" : "cht_condition_js_menu" ,
            "__contexte" : "creer1" ,
            "libelle_du_champ" : "condition au format js" ,
            "rows" : 3 ,
            "cols" : 50 ,
            "format_du_source" : 1 ,
            "valeur_par_defaut" : "" ,
            "non_nulle" : false
        } );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {
            "nom_du_champ" : "cht_initialisation_menu" ,
            "__contexte" : "creer1" ,
            "libelle_du_champ" : "initialisation" ,
            "rows" : 3 ,
            "cols" : 50 ,
            "format_du_source" : 2 ,
            "valeur_par_defaut" : "" ,
            "non_nulle" : false
        } );
        /*
          =====================================================================================================
        */
        let cmd='';
        cmd+='liste1(';
        for(let i in this.tableau_des_filtres['liste1']){
            if(this.filtres['liste1'][i] !== ''){
                cmd+=i + '(\'' + this.__ig1.fi2( this.filtres['liste1'][i] ) + '\')';
            }
        }
        cmd+=')';
        let obj2=this.__ig1.__rev1.rev_tm( cmd );
        let jso=JSON.stringify( obj2.__xva );
        o1+='      <input type="hidden" id="__mat_liste_si_ok" value="' + this.__ig1.fi2( jso ) + '" />';
        o1+='<div class="yy__bdp1"></div>';
        this.__ig1.maj_inner1( 'vv_ecran_creation_zone_contenu' , o1 );
        this.__ig1.maj_hash( mat , 0 );
        this.__ig1.maj_title_htm1( 'création ' + this.DUN_DUNE_ELEMENT_GERE );
        this.__ig1.ajoute_les_evenements_aux_boutons();
        this.__ig1.repositionner_les_boutons_action( 'vv_ecran_creation_zone_boutons' );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    filtre1( mat , d , le_colis1=null ){
        let a=document.getElementById( 'vv_ecran_liste_zone_contenu' );
        if(a === null){
            return(this.liste1( mat , d , le_colis1 ));
        }
        let tt=this.zones_liste1( le_colis1 );
        document.getElementById( 'vv_ecran_liste_zone_contenu' ).innerHTML=tt.o1;
        this.vv_ecran_liste_zones_navigation1( le_colis1 , this.vv_ecran_liste_boutons_avant );
        this.__ig1.ajoute_les_evenements_aux_boutons();
        let lst=document.getElementById( 'vv_filtre1' ).querySelectorAll( "input" );
        this.filtres={};
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].id){
                this.filtres[lst[i].id]=lst[i].value;
            }
        }
        let aa=sessionStorage.getItem( this.__ig1.cle_lst0 + '_' + this.moi );
        if(aa === null){
            sessionStorage.setItem( this.__ig1.cle_lst0 + '_' + this.moi , JSON.stringify( {"filtres" : this.filtres} ) );
        }else{
            let jso=JSON.parse( aa );
            jso['filtres']=this.filtres;
            sessionStorage.setItem( this.__ig1.cle_lst0 + '_' + this.moi , JSON.stringify( jso ) );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    raz_champ_filtre_grandeurs0( mat , d ){
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            this.filtres['liste1'][mat[i][1]]='';
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    zones_filtres1( mat , d , le_colis1 ){
        this.__ig1.__fnt1.zones_filtres0( mat , d , le_colis1 , this , false , 'grandeurs2' );
    }
    /*
      =============================================================================================================
    */
    aller_a_la_page( mat , d , ref_zone=null , num_page=null , est_table_virtuelle=false , de_13='' ){
        return(this.__ig1.aller_a_la_page( mat , d , this.moi , 'liste1' , this.filtres , ref_zone , num_page , est_table_virtuelle , de_13 ));
    }
    /*
      =============================================================================================================
    */
    supprimer1( mat , d , le_colis1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    creer1( mat , d , le_colis1 ){
        /* redirection vers modification */
        if(le_colis1 && le_colis1.__xva.hasOwnProperty( 'page_modification1' )){
            this.page_modification1( mat , d , le_colis1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    liste1( mat , d , le_colis1=null ){
        if(le_colis1 === null || !le_colis1.__xva.hasOwnProperty( 'liste1' )){
            if(le_colis1.__xva.hasOwnProperty( '__nbEnregs' )){
            }else{
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'il manque les données pour la liste de ' + this.moi} );
                this.__ig1.affiche_les_messages();
                return({"__xst" : __xsu});
            }
        }
        let o1='';
        let initialisation_fait=false;
        let a=document.getElementById( 'vv_titre_de_la_page' );
        if(a === null){
            this.__ig1.initialisation_des_zones( this.moi , 'chi_id_menu' );
            initialisation_fait=true;
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES && a.getAttribute( 'data-contexte' ) === this.moi){
        }else{
            if(initialisation_fait === false){
                this.__ig1.initialisation_des_zones( this.moi , 'chi_id_menu' );
                a=document.getElementById( 'vv_titre_de_la_page' );
            }
            a.innerHTML=this.LISTE_DES_ELEMENTS_GERES;
            this.__ig1.afficher_les_zones( 'vv_ecran_liste' );
        }
        this.zones_filtres1( mat , d , le_colis1 );
        this.__ig1.vv_ecran_liste_zones_navigation1( le_colis1 , this.vv_ecran_liste_boutons_avant , 'liste1' );
        document.getElementById( 'vv_ecran_liste_zone_contenu' ).innerHTML=this.zones_liste1( le_colis1 );
        this.__ig1.ajoute_les_evenements_aux_boutons();
        this.__ig1.maj_hash( mat , 0 );
        this.__ig1.maj_title_htm1( this.LISTE_DES_ELEMENTS_GERES );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        this.__ig1.recupere_liste_initiale( mat , d , this );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      ===================== utilisé pour afficher une sous liste dans une page modifier ou creer ==================
    */
    sous_liste2( mat , d , le_colis1 ){
        return(this.__ig1.generique_sous_liste2( mat , d , le_colis1 , this.moi ));
    }
    /*
      =============================================================================================================
    */
    liste_des_boutons_action1( tup , le_colis1 ){
        let lst='';
        lst+='<div class="yy_act1">';
        lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_menu(' + tup.T0_chi_id_menu + ')))))">' + this.__ig1.les_svg.poubelle + '</div>';
        lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_menu(' + tup.T0_chi_id_menu + ')))))">' + this.__ig1.les_svg.editer + '</div>';
        lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_menu(' + tup.T0_chi_id_menu + ')))))">' + this.__ig1.les_svg.dupliquer + '</div>';
        lst+='</div>';
        return lst;
    }
    /*
      =============================================================================================================
    */
    zones_liste1( le_colis1 ){
        let o1='';
        if(le_colis1 !== null && le_colis1.__xva.hasOwnProperty( 'liste1' )){
            let lst='';
            for(let i in le_colis1.__xva.liste1.__xva){
                let tup=le_colis1.__xva.liste1.__xva[i];
                lst+='<tr>';
                /*
                  =====================================================================================
                */
                lst+='<td>';
                lst+=this.liste_des_boutons_action1( tup , le_colis1 );
                lst+='</td>';
                /*
                  =====================================================================================
                */
                lst+='<td style="text-align:center;">';
                /* cas 9.1.0 */
                lst+='<span data-chi_id_menu="' + this.__ig1.fi2( tup.T0_chi_id_menu ) + '">' + this.__ig1.fi2( tup.T0_chi_id_menu ) + '</span>';
                lst+='</td>';
                /*
                  =====================================================================================
                */
                /*
                  =====================================================================================
                  combinaison libellé titre<br />condition
                */
                lst+='<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">';
                /* cas 1 */
                if(tup.T0_cht_libelle_menu !== null){
                    if(tup.T0_cht_libelle_menu.toLowerCase().substr( 0 , 4 ) === '<svg'){
                        lst+='<div style="width:25px;border:1px white solid;display:inline-block;background:var(--c_coul_fond4);">' + tup.T0_cht_libelle_menu + '</div>';
                    }else{
                        lst+='' + this.__ig1.fi2( tup.T0_cht_libelle_menu.substr( 0 , 100 ) );
                    }
                }
                /* cas 2 */
                lst+=' / <span class="" style="">' + this.__ig1.fi2( tup.T0_chp_titre_menu ) + '</span>';
                /* cas 2 */
                lst+='<hr /><span class="" style="">' + this.__ig1.fi2( tup.T0_cht_condition_menu ) + '</span>';
                lst+='</td>';
                /*
                  =====================================================================================
                */
                /*
                  =====================================================================================
                  combinaison source
                */
                lst+='<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">';
                /* cas 7.2 */
                lst+='(' + this.__ig1.fi2( tup.T1_chx_source_autorisation ) + ')';
                /* cas 10.2.2 */
                lst+='<span class="" style="">' + this.__ig1.fi2( tup.T3_chp_nom_source ) + '</span>';
                lst+='</td>';
                /*
                  =====================================================================================
                */
                /*
                  =====================================================================================
                  combinaison accès
                */
                lst+='<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">';
                /* cas 7.2 */
                lst+='(' + this.__ig1.fi2( tup.T0_chx_autorisation_menu ) + ')';
                /* cas 10.2.2 */
                lst+='<span class="" style="">' + this.__ig1.fi2( tup.T1_chx_acces_autorisation ) + '</span>';
                /* cas 10.2.2 */
                lst+='<span class="" style="">' + this.__ig1.fi2( tup.T2_chp_nom_acces ) + '</span>';
                lst+='</td>';
                /*
                  =====================================================================================
                */
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table>';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+=/* chi_id_menu */'<th>id</th>';
                o1+=/* combinaison */'<th>libellé titre<br />condition</th>';
                o1+=/* combinaison */'<th>source</th>';
                o1+=/* combinaison */'<th>accès</th>';
                o1+='</tr>';
                o1+=lst;
                o1+='</table>';
                o1+='</div>';
            }else{
                o1+=this.__ig1.la_liste_est_vide();
            }
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
}
export{menus1 as menus1};