class travaux1{
    /*
      ref_liste_ecran=1395;
      ref_select=1396;
      ref_insert=1398;
      ref_update=1397;
      ref_delete=1399;
    */
    moi='travaux1';
    DUN_DUNE_ELEMENT_GERE='d\'un travail';
    LISTE_DES_ELEMENTS_GERES='liste des travaux';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"nom" : '__num_page' ,"taille" : 9 ,"défaut" : 0 ,"masqué" : true} ,
            "T0_chi_id_travail" : {"nom" : 'id' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chp_resume_travail" : {"nom" : 'resumé' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_cht_rev_travail" : {"nom" : 'rev' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chx_utilisateur_travail" : {"nom" : 'id utilisateur' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chd_dtc_travail" : {"nom" : 'dt création' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T1_chp_nom_de_connexion_utilisateur" : {"nom" : 'utilisateur' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chp_etat_travail" : {"nom" : 'état' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false}
        }
    };
    /*
    */
    filtres={};
    __variables_module={};
    vv_ecran_liste_boutons_avant='';
    /*
      =========================== fragment ========================================================================
    */
    f1( mat , d , le_colis1=null ){
        switch (mat[d][1]){
            case 'compiler_les_travaux' : 
            case 'demarrer_manuellement_job_cron' : 
            case 'supprimer_les_travaux' : 
            case 'supprimer_les_travaux_termines' :
                this.__ig1.fermer_la_sous_fenetre();
                this.entree_module( null );
                break;
                
            default:
                return({"__xst" : __xer ,"__xme" : 'dans l\'interface client "' + mat[d][1] + '" n\'est pas traitée ou bien comporte une erreur'});
                
        }
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
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
            for(let i in this.tableau_des_filtres['liste1']){
                this.filtres['liste1'][i]=jso[i]??this.tableau_des_filtres['liste1'][i].défaut;
            }
        }
        this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(page_creer1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + '" >' + this.__ig1.les_svg.nouveau_document + '</div>';
        this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xif" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(supprimer_les_travaux_termines())))" title="supprimer les travaux termines" >' + this.__ig1.les_svg.poubelle + '</div>';
        this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xer" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(supprimer_les_travaux())))" title="supprimer les travaux" >' + this.__ig1.les_svg.poubelle + '</div>';
        this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xer" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(compiler_les_travaux())))" title="compiler les travaux" >' + this.__ig1.les_svg.compiler + '</div>';
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
            {"nc" : "id1" ,"nz" : 'chi_id_travail' ,"m" : 'une erreur système est survenue sur le champ "identifiant"'},
            {"nc" : "entier1" ,"nz" : 'chx_utilisateur_travail' ,"vpd" : undefined ,"lib" : 'id utilisateur du travail'},
            {"nc" : "float1" ,"nz" : 'chn_duree_travail' ,"vpd" : 0 ,"lib" : 'durée'}
        ];
        let __obj_convertions=this.__ig1.__fnt1.convertir_les_zonnes_saisies( __les_convertions , fo1 );
        if(__obj_convertions.__xst !== __xsu){
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques verifier_modifier fin */
        let __les_tests=[
            /*  */
            {"nt" : 'non_vide1' ,"nz" : "chp_resume_travail" ,"lib" : 'résumé du travail'},
            {"nt" : 'non_vide1' ,"nz" : "chx_utilisateur_travail" ,"lib" : 'id utilisateur du travail'},
            {
                    "nt" : 'parmis1' ,
                    "nz" : "chp_etat_travail" ,
                    "lib" : 'état du travail' ,
                    "p" : [
                        /* tbel */
                        'en_file_d_attente','en_pause','en_cours','ok_termine','ko_termine','ok_mais_avertissement']
                }
        ];
        let __obj_tests=this.__ig1.__fnt1.tester_les_zonnes_saisies( __les_tests , fo1 );
        if(__obj_tests.__xst !== __xsu){
            return({"__xst" : __xsu});
        }
        if(fo1.cht_rev_travail !== null && fo1.cht_rev_travail !== ''){
            let obj1=this.__ig1.__rev1.rev_tm( fo1.cht_rev_travail );
            if(obj1.__xst !== __xsu){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu de "description rev du travail" n\'est pas dans un format rev valide'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'cht_rev_travail' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        let __test_1_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( fo1.cht_rev_travail , 'description rev du travail' );
        if(__test_1_1.__xst !== __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_1_1.__xme} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_rev_travail' ).focus();
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , tup.T0_chi_id_travail , this.moi , 'chi_id_travail' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {"nom_du_champ" : "chp_resume_travail" ,"__contexte" : "modification1" ,"longueur_du_champ" : 64 ,"libelle_du_champ" : "résumé du travail"} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {
            "nom_du_champ" : "cht_rev_travail" ,
            "__contexte" : "modification1" ,
            "libelle_du_champ" : "description rev du travail" ,
            "rows" : 10 ,
            "cols" : 50 ,
            "format_du_source" : 2
        } );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_autrex2( tup , {
            "nom_du_champ" : "chx_utilisateur_travail" ,
            "__contexte" : "modification1" ,
            "libelle_du_champ" : "id utilisateur du travail" ,
            "bouton_vider" : false ,
            "nom_du_lien" : "utilisateurs1" ,
            "liste_des_champs_libelles" : ["T1_chp_nom_de_connexion_utilisateur"]
        } , this );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {"nom_du_champ" : "cht_utilisateur_travail" ,"__contexte" : "modification1" ,"libelle_du_champ" : "nom utilisateur" ,"rows" : 10 ,"cols" : 50} );
        /*
          =====================================================================================================
        */
        /* Liste des Liens Parmis Du Genre */
        let llpdg_chp_etat_travail=[
            /*  */
            `<div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante('en_file_d_attente')))))">en_file_d_attente</div>`,
            `<div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante('en_pause')))))">en_pause</div>`,
            `<div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante('en_cours')))))">en_cours</div>`,
            `<div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante('ok_termine')))))">ok_termine</div>`,
            `<div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante('ko_termine')))))">ko_termine</div>`,
            `<div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante('ok_mais_avertissement')))))">ok_mais_avertissement</div>`
        ];
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {
            "nom_du_champ" : "chp_etat_travail" ,
            "__contexte" : "modification1" ,
            "longueur_du_champ" : 32 ,
            "liste_des_liens_parmis_du_genre" : llpdg_chp_etat_travail ,
            "libelle_du_champ" : "état du travail"
        } );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {"nom_du_champ" : "cht_log_travail" ,"__contexte" : "modification1" ,"libelle_du_champ" : "contenu du log" ,"rows" : 10 ,"cols" : 50} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_de_zones_entier2( tup , {
            "nom_du_champ" : "chn_duree_travail" ,
            "__contexte" : "modification1" ,
            "les_suggestions" : [] ,
            "libelle_du_champ" : "durée" ,
            "lng_size" : 21 ,
            "lng_maxlength" : null
        } );
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_travail" value="' + tup.T0_chi_id_travail + '">';
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
          let tt='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_travail(' + le_colis1.__xva.page_modification1.__xva[0].T0_chi_id_travail + ')))))';
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
        if(tup.T0_chi_id_travail === undefined){
            return({"__xst" : __xer ,"__xme" : "Attention, le champ T0_chi_id_travail n'est pas en sortie dans la requête select "});
        }
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , tup.T0_chi_id_travail , this.moi , 'chi_id_travail' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {"nom_du_champ" : "chp_resume_travail" ,"__contexte" : "supprimer1" ,"longueur_du_champ" : 64 ,"libelle_du_champ" : "résumé du travail"} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {"nom_du_champ" : "cht_rev_travail" ,"__contexte" : "supprimer1" ,"libelle_du_champ" : "description rev du travail" ,"rows" : 10 ,"cols" : 50} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {"nom_du_champ" : "chp_etat_travail" ,"__contexte" : "supprimer1" ,"longueur_du_champ" : 32 ,"libelle_du_champ" : "état du travail"} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_de_zones_entier2( tup , {"nom_du_champ" : "chx_projet_travail" ,"__contexte" : "supprimer1" ,"libelle_du_champ" : "référence du projet" ,"lng_size" : 21 ,"lng_maxlength" : null} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {"nom_du_champ" : "cht_utilisateur_travail" ,"__contexte" : "supprimer1" ,"libelle_du_champ" : "nom utilisateur" ,"rows" : 10 ,"cols" : 50} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_de_zones_float2( tup , {"nom_du_champ" : "chn_duree_travail" ,"__contexte" : "supprimer1" ,"libelle_du_champ" : "durée"} );
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_travail" value="' + tup.T0_chi_id_travail + '" />';
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
            {"nc" : "entier1" ,"nz" : 'chx_utilisateur_travail' ,"vpd" : undefined ,"lib" : 'id utilisateur du travail'}
        ];
        let __obj_convertions=this.__ig1.__fnt1.convertir_les_zonnes_saisies( __les_convertions , fo1 );
        if(__obj_convertions.__xst !== __xsu){
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques verifier_creer fin */
        let __les_tests=[
            /*  */
            {"nt" : 'non_vide1' ,"nz" : "chp_resume_travail" ,"lib" : 'résumé du travail'},
            {"nt" : 'non_vide1' ,"nz" : "chx_utilisateur_travail" ,"lib" : 'id utilisateur du travail'},
            {
                    "nt" : 'parmis1' ,
                    "nz" : "chp_etat_travail" ,
                    "lib" : 'état du travail' ,
                    "p" : [
                        /* tbel */
                        'en_file_d_attente','en_pause','en_cours','ok_termine','ko_termine','ok_mais_avertissement']
                }
        ];
        let __obj_tests=this.__ig1.__fnt1.tester_les_zonnes_saisies( __les_tests , fo1 );
        if(__obj_tests.__xst !== __xsu){
            return({"__xst" : __xsu});
        }
        let __test_1_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( fo1.cht_rev_travail , 'description rev du travail' );
        if(__test_1_1.__xst !== __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_1_1.__xme} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_rev_travail' ).focus();
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_creation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , null , this.moi , 'chi_id_travail' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {
            "nom_du_champ" : "chp_resume_travail" ,
            "__contexte" : "creer1" ,
            "longueur_du_champ" : 64 ,
            "les_suggestions" : [] ,
            "libelle_du_champ" : "résumé du travail" ,
            "valeur_par_defaut" : ''
        } );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {
            "nom_du_champ" : "cht_rev_travail" ,
            "__contexte" : "creer1" ,
            "les_suggestions" : [] ,
            "libelle_du_champ" : "description rev du travail" ,
            "rows" : 10 ,
            "cols" : 50 ,
            "format_du_source" : 2 ,
            "valeur_par_defaut" : "" ,
            "non_nulle" : false
        } );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_autrex2( tup , {
            "nom_du_champ" : "chx_utilisateur_travail" ,
            "__contexte" : "creer1" ,
            "les_suggestions" : [] ,
            "libelle_du_champ" : "id utilisateur du travail" ,
            "bouton_vider" : false ,
            "nom_du_lien" : "utilisateurs1" ,
            "liste_des_champs_libelles" : ["T1_chp_nom_de_connexion_utilisateur"] ,
            "valeur_par_defaut" : ""
        } , this );
        /*
          =====================================================================================================
        */
        /* Liste des Liens Parmis Du Genre */
        let llpdg_chp_etat_travail=[
            /*  */
            `<div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante('en_file_d_attente')))))">en_file_d_attente</div>`,
            `<div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante('en_pause')))))">en_pause</div>`,
            `<div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante('en_cours')))))">en_cours</div>`,
            `<div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante('ok_termine')))))">ok_termine</div>`,
            `<div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante('ko_termine')))))">ko_termine</div>`,
            `<div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante('ok_mais_avertissement')))))">ok_mais_avertissement</div>`
        ];
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {
            "nom_du_champ" : "chp_etat_travail" ,
            "__contexte" : "creer1" ,
            "longueur_du_champ" : 32 ,
            "les_suggestions" : [] ,
            "libelle_du_champ" : "état du travail" ,
            "liste_des_liens_parmis_du_genre" : llpdg_chp_etat_travail ,
            "valeur_par_defaut" : 'en_file_d_attente'
        } );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {
            "nom_du_champ" : "cht_utilisateur_travail" ,
            "__contexte" : "creer1" ,
            "les_suggestions" : [] ,
            "libelle_du_champ" : "nom utilisateur" ,
            "rows" : 10 ,
            "cols" : 50 ,
            "format_du_source" : 0 ,
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
            this.__ig1.initialisation_des_zones( this.moi , 'chi_id_travail' );
            initialisation_fait=true;
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES && a.getAttribute( 'data-contexte' ) === this.moi){
        }else{
            if(initialisation_fait === false){
                this.__ig1.initialisation_des_zones( this.moi , 'chi_id_travail' );
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
        lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_travail(' + tup.T0_chi_id_travail + ')))))">' + this.__ig1.les_svg.poubelle + '</div>';
        lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_travail(' + tup.T0_chi_id_travail + ')))))">' + this.__ig1.les_svg.editer + '</div>';
        lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_travail(' + tup.T0_chi_id_travail + ')))))">' + this.__ig1.les_svg.dupliquer + '</div>';
        lst+='</div>';
        return lst;
    }
    /*
      =========================== fragment ========================================================================
    */
    zones_liste1( le_colis1 ){
        let o1='';
        if(le_colis1 !== null && le_colis1.__xva.hasOwnProperty( 'liste1' )){
            let lst='';
            for(let i in le_colis1.__xva['liste1'].__xva){
                let tup=le_colis1.__xva['liste1'].__xva[i];
                lst+='<tr>';
                lst+='<td>';
                lst+=this.liste_des_boutons_action1( tup , le_colis1 );
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                lst+=this.__ig1.fi2( tup.T0_chi_id_travail );
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                lst+=this.__ig1.fi2( tup.T0_chp_resume_travail );
                if(tup.T0_chp_etat_travail !== null){
                    lst+='<br />';
                    if('en_file_d_attente' === tup.T0_chp_etat_travail){
                        lst+='<span class="yy__xif">';
                    }else if('ok_termine' === tup.T0_chp_etat_travail){
                        lst+='<span class="yy__xsu">';
                    }else if('ko_termine' === tup.T0_chp_etat_travail){
                        lst+='<span class="yy__xer">';
                    }else{
                        lst+='<span class="yy__xdv">';
                    }
                    lst+=this.__ig1.fi2( tup.T0_chp_etat_travail ) + '</span>';
                }
                lst+='<br />';
                lst+='(' + tup.T0_chx_utilisateur_travail + ')';
                lst+=this.__ig1.fi2( tup.T1_chp_nom_de_connexion_utilisateur );
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                lst+=this.__ig1.fi2( tup.T0_cht_rev_travail ).replace( /f1\(/ , 'f1(<br />' );
                lst+='</td>';
                lst+='<td style="text-align:center;">';
                lst+=this.__ig1.fi2( tup.T0_chx_projet_travail );
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                lst+=this.__ig1.fi2( tup.T0_chn_duree_travail );
                lst+='</td>';
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table border="1">';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+=/* chi_id_travail */'<th>id</th>';
                o1+=/* chp_resume_travail */'<th>resumé/état/utilisateur</th>';
                o1+=/* cht_rev_travail */'<th style="max-width:360px;">rev</th>';
                o1+=/* chx_projet_travail */'<th>projet</th>';
                o1+=/* chn_duree_travail */'<th>durée</th>';
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
export{travaux1 as travaux1};