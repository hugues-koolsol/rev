class autorisations1{
    /*
      ref_liste_ecran=1140;
      ref_select=1141;
      ref_insert=1142;
      ref_update=1143;
      ref_delete=1144;
      sans_sous_liste2=1;
    */
    moi='autorisations1';
    DUN_DUNE_ELEMENT_GERE='d\'une autorisation';
    LISTE_DES_ELEMENTS_GERES='liste des autorisations';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"nom" : '__num_page' ,"taille" : 9 ,"défaut" : 0 ,"masqué" : true} ,
            "T2_chp_nom_source" : {"nom" : 'nom source' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T1_chp_nom_acces" : {"nom" : 'nom accès' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chx_source_autorisation" : {"nom" : 'id source' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chx_acces_autorisation" : {"nom" : 'id accès' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_che_pour_sous_liste_autorisation" : {"nom" : 'pour s/liste' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false ,"genre" : 5} ,
            "T0_chi_id_autorisation" : {"nom" : 'id' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false}
        }
    };
    /*
    */
    filtres={};
    vv_ecran_liste_boutons_avant='';
    /*
      =============================================================================================================
    */
    f1( mat , d , le_colis1=null ){
        switch (mat[d][1]){
            case 'gererer_les_autorisation_serveur' : break;
            case 'xxx' :
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
            for(let i in this.tableau_des_filtres['liste1']){
                this.filtres['liste1'][i]=jso[i]??this.tableau_des_filtres['liste1'][i].défaut;
            }
        }
        this.vv_ecran_liste_boutons_avant+='<div class="rev_b_svg yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(page_creer1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + '" >' + this.__ig1.les_svg.nouveau_document + '</div>';
        this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xif" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(gererer_les_autorisation_serveur())))" title="" >générer les autorisations</div>';
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
        if(fo1.chx_acces_autorisation === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "id accès" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_acces_autorisation' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1.chx_source_autorisation === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "id source" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_source_autorisation' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1.che_pour_sous_liste_autorisation === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pour sous liste" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_pour_sous_liste_autorisation' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1.che_pour_sous_liste_autorisation !== ''){
            let tab_est_parmis_2='0,1'.split( ',' );
            if(!tab_est_parmis_2.includes( fo1.che_pour_sous_liste_autorisation )){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pour sous liste" doit être correctement renseignée (utilisez les boutons)'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'che_pour_sous_liste_autorisation' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        /* conversion des données numériques verifier_modifier début */
        fo1.chi_id_autorisation=fo1.chi_id_autorisation === '' ? ( null ) : ( parseInt( fo1.chi_id_autorisation , 10 ) );
        fo1.chx_acces_autorisation=fo1.chx_acces_autorisation === '' ? ( null ) : ( parseInt( fo1.chx_acces_autorisation , 10 ) );
        if(isNaN( fo1.chx_acces_autorisation )){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "id accès" doit être numérique'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_acces_autorisation' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        fo1.chx_source_autorisation=fo1.chx_source_autorisation === '' ? ( null ) : ( parseInt( fo1.chx_source_autorisation , 10 ) );
        if(isNaN( fo1.chx_source_autorisation )){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "id source" doit être numérique'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_source_autorisation' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        fo1.che_pour_sous_liste_autorisation=fo1.che_pour_sous_liste_autorisation === '' ?
          ( 
            null
          ) : ( 
            parseInt( fo1.che_pour_sous_liste_autorisation , 10 )
          );
        if(isNaN( fo1.che_pour_sous_liste_autorisation )){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pour s/liste" doit être numérique'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_pour_sous_liste_autorisation' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques verifier_modifier fin */
        /*
          tout a été vérifié
        */
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , tup.T0_chi_id_autorisation , this.moi , 'chi_id_autorisation' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id accès</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(tup.T0_chx_acces_autorisation === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="hidden" value="' + tup.T0_chx_acces_autorisation + '" id="chx_acces_autorisation" />';
        o1+='        <span id="chx_acces_autorisation_libelle">';
        o1+='(' + tup.T0_chx_acces_autorisation + ') ';
        o1+=this.__ig1.fi2( tup.T1_chp_nom_acces );
        o1+='</span>';
        o1+=this.__ig1.lien_parent2( 'acces2' , 'chx_acces_autorisation' , 'chx_acces_autorisation_libelle' , this.moi );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id source</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(tup.T0_chx_source_autorisation === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="hidden" value="' + tup.T0_chx_source_autorisation + '" id="chx_source_autorisation" />';
        o1+='        <span id="chx_source_autorisation_libelle">';
        o1+='(' + tup.T0_chx_source_autorisation + ') ';
        o1+=this.__ig1.fi2( tup.T2_chp_nom_source );
        o1+='</span>';
        if(this.__ig1._CA_ === 1){
            o1+=this.__ig1.lien_parent2( 'sources1' , 'chx_source_autorisation' , 'chx_source_autorisation_libelle' , this.moi );
        }else{
            o1+=this.__ig1.lien_parent2( 'sources2' , 'chx_source_autorisation' , 'chx_source_autorisation_libelle' , this.moi );
        }
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>pour sous liste</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(tup.T0_che_pour_sous_liste_autorisation === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="range" id="che_pour_sous_liste_autorisation" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__ig1.fi2( tup.T0_che_pour_sous_liste_autorisation ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_autorisation" value="' + tup.T0_chi_id_autorisation + '">';
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
        o1+='  <div class="yy__bdp1"></div>';
        document.getElementById( 'vv_ecran_modification_zone_contenu' ).innerHTML=o1;
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
          let tt='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_autorisation(' + le_colis1.__xva.page_modification1.__xva[0].T0_chi_id_autorisation + ')))))';
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
        if(tup.T0_chi_id_autorisation === undefined){
            return({"__xst" : __xer ,"__xme" : "Attention, le champ T0_chi_id_autorisation n'est pas en sortie dans la requête select "});
        }
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , tup.T0_chi_id_autorisation , this.moi , 'chi_id_autorisation' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id accès</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=tup.T0_chx_acces_autorisation;
        o1+='"  id="chx_acces_autorisation" />';
        o1+='        <span>';
        o1+='(' + tup.T0_chx_acces_autorisation + ') ';
        o1+=this.__ig1.fi2( tup.T1_chp_nom_acces );
        o1+='</span>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id source</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=tup.T0_chx_source_autorisation;
        o1+='"  id="chx_source_autorisation" />';
        o1+='        <span>';
        o1+='(' + tup.T0_chx_source_autorisation + ') ';
        o1+=this.__ig1.fi2( tup.T2_chp_nom_source );
        o1+='</span>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>pour sous liste</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_pour_sous_liste_autorisation" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__ig1.fi2( tup.T0_che_pour_sous_liste_autorisation ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_autorisation" value="' + tup.T0_chi_id_autorisation + '" />';
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
        document.getElementById( 'vv_ecran_suppression_zone_contenu' ).innerHTML=o1;
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
        if(fo1.chx_acces_autorisation === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "id accès" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_acces_autorisation' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1.chx_source_autorisation === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "id source" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_source_autorisation' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1.che_pour_sous_liste_autorisation === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pour sous liste" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_pour_sous_liste_autorisation' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1.che_pour_sous_liste_autorisation !== ''){
            let tab_est_parmis_2='0,1'.split( ',' );
            if(!tab_est_parmis_2.includes( fo1.che_pour_sous_liste_autorisation )){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pour sous liste" doit être correctement renseignée (utilisez les boutons)'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'che_pour_sous_liste_autorisation' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        /* conversion des données numériques verifier_creer début */
        fo1.chx_acces_autorisation=fo1.chx_acces_autorisation === '' ? ( null ) : ( parseInt( fo1.chx_acces_autorisation , 10 ) );
        fo1.chx_source_autorisation=fo1.chx_source_autorisation === '' ? ( null ) : ( parseInt( fo1.chx_source_autorisation , 10 ) );
        fo1.che_pour_sous_liste_autorisation=fo1.che_pour_sous_liste_autorisation === '' ?
          ( 
            null
          ) : ( 
            parseInt( fo1.che_pour_sous_liste_autorisation , 10 )
          );
        /* conversion des données numériques verifier_creer fin */
        /*
          tout a été vérifié
        */
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_creation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , null , this.moi , 'chi_id_autorisation' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id accès</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input id="chx_acces_autorisation" type="hidden" value="';
        if(tup){
            o1+=this.__ig1.fi2( tup.T0_chx_acces_autorisation );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='        <span id="chx_acces_autorisation_libelle">';
        if(tup){
            if(tup.T0_chx_acces_autorisation === null){
                o1+='*indéfini';
            }else{
                o1+='(' + tup.T0_chx_acces_autorisation + ') ';
                o1+=' / <span>' + this.__ig1.fi2( tup.T1_chp_nom_acces ) + '</span>';
            }
        }else{
            o1+='*indéfini';
        }
        o1+='        </span>';
        /*
        */
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <span>';
        o1+=this.__ig1.lien_parent2( 'acces2' , 'chx_acces_autorisation' , 'chx_acces_autorisation_libelle' , this.moi );
        o1+='</span>';
        o1+='    </div>';
        /*  */
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id source</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input id="chx_source_autorisation" type="hidden" value="';
        if(tup){
            o1+=this.__ig1.fi2( tup.T0_chx_source_autorisation );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='        <span id="chx_source_autorisation_libelle">';
        if(tup){
            if(tup.T0_chx_source_autorisation === null){
                o1+='*indéfini';
            }else{
                o1+='(' + tup.T0_chx_source_autorisation + ') ';
                o1+=' / <span>' + this.__ig1.fi2( tup.T2_chp_nom_source ) + '</span>';
            }
        }else{
            o1+='*indéfini';
        }
        o1+='        </span>';
        /*
        */
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <span>';
        /*
          if(this.__ig1._chi_id_projet === 1){
          o1+=this.__ig1.lien_parent2( 'sources2' , 'chx_source_autorisation' , 'chx_source_autorisation_libelle' , this.moi );
          }else{
          o1+=this.__ig1.lien_parent2( 'sources4' , 'chx_source_autorisation' , 'chx_source_autorisation_libelle' , this.moi );
          }
        */
        o1+=this.__ig1.lien_parent2( 'sources2' , 'chx_source_autorisation' , 'chx_source_autorisation_libelle' , this.moi );
        o1+='</span>';
        o1+='    </div>';
        /*  */
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>pour sous liste</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_pour_sous_liste_autorisation" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(tup){
            o1+=this.__ig1.fi2( tup.T0_che_pour_sous_liste_autorisation );
        }else{
            o1+='0';
        }
        o1+='" />';
        o1+='    </div>';
        o1+='  </div>';
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
        document.getElementById( 'vv_ecran_creation_zone_contenu' ).innerHTML=o1;
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
            this.__ig1.initialisation_des_zones( this.moi , 'chi_id_autorisation' );
            initialisation_fait=true;
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES && a.getAttribute( 'data-contexte' ) === this.moi){
        }else{
            if(initialisation_fait === false){
                this.__ig1.initialisation_des_zones( this.moi , 'chi_id_autorisation' );
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
        lst+='<div style="display:inline-flex;">';
        let peut_gerer_cette_autorisation=false;
        if(le_colis1._CA_ > 2 && le_colis1.chi_id_utilisateur > 1){
            if(tup.T0_chx_acces_autorisation === 0 || tup.T0_chx_acces_autorisation > 2){
                peut_gerer_cette_autorisation=true;
            }
        }else{
            peut_gerer_cette_autorisation=true;
        }
        if(peut_gerer_cette_autorisation === true){
            lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_autorisation(' + tup.T0_chi_id_autorisation + ')))))">' + this.__ig1.les_svg.poubelle + '</div>';
            lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_autorisation(' + tup.T0_chi_id_autorisation + ')))))">' + this.__ig1.les_svg.editer + '</div>';
            lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_autorisation(' + tup.T0_chi_id_autorisation + ')))))">' + this.__ig1.les_svg.dupliquer + '</div>';
        }else{
            lst+='<div class="rev_b_svg yy__2 yy__2_inactif">' + this.__ig1.les_svg.poubelle + '</div>';
            lst+='<div class="rev_b_svg yy__3 yy__3_inactif">' + this.__ig1.les_svg.editer + '</div>';
            lst+='<div class="rev_b_svg yy__4 yy__4_inactif">' + this.__ig1.les_svg.dupliquer + '</div>';
        }
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
            for(let i in le_colis1.__xva['liste1'].__xva){
                let tup=le_colis1.__xva['liste1'].__xva[i];
                lst+='<tr>';
                lst+='<td>';
                lst+=this.liste_des_boutons_action1( tup , le_colis1 );
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                lst+='<span data-chi_id_autorisation="' + this.__ig1.fi2( tup.T0_chi_id_autorisation ) + '">' + this.__ig1.fi2( tup.T0_chi_id_autorisation ) + '</span>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">';
                /* cas 7.2 */
                lst+='(' + this.__ig1.fi2( tup.T0_chx_source_autorisation ) + ')';
                /* cas 9.2.2 */
                lst+='<span class="" style="">' + this.__ig1.fi2( tup.T2_chp_nom_source ) + '</span>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">';
                /* cas 7.2 */
                lst+='(' + this.__ig1.fi2( tup.T0_chx_acces_autorisation ) + ')';
                /* cas 9.2.2 */
                lst+='<span class="" style="">' + this.__ig1.fi2( tup.T1_chp_nom_acces ) + '</span>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                /* cas 5 */
                if(tup.T0_che_pour_sous_liste_autorisation === 0){
                    lst+='<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_rouge1 + '</div>';
                }else{
                    lst+='<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_vert1 + '</div>';
                }
                lst+='</td>';
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table>';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+=/* chi_id_autorisation */'<th>id</th>';
                o1+=/* combinaison */'<th>source</th>';
                o1+=/* combinaison */'<th>accès</th>';
                o1+=/* che_pour_sous_liste_autorisation */'<th>pour s/liste</th>';
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
export{autorisations1 as autorisations1};