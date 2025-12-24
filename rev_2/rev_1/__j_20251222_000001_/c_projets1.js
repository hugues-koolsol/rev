class c_projets1{
    moi='c_projets1';
    DUN_DUNE_ELEMENT_GERE='d\'un projet';
    LISTE_DES_ELEMENTS_GERES='liste des projets';
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "$__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '$__num_page'} ,
            "T0_chi_id_projet" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id'} ,
            "T0_chp_nom_projet" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom'} ,
            "T0_cht_commentaire_projet" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'commentaire'}
        } ,
        "sous_liste1" : {
            "$__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '$__num_page'} ,
            "T0_chi_id_projet" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id'} ,
            "T0_chp_nom_projet" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom'} ,
            "T0_cht_commentaire_projet" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'commentaire'}
        }
    };
    fonction_liste='liste1';
    $filtres={};
    vv_ecran_liste_boutons_avant='';
    /*
      =============================================================================================================
    */
    constructor( mat , d ){
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === '$nom_champ_dans_parent1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                this.$nom_champ_dans_parent1=mat[i + 1][1];
            }else if(mat[i][1] === '$nom_libelle_dans_parent1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                this.$nom_libelle_dans_parent1=mat[i + 1][1];
            }
        }
        for(let i in this.tableau_des_filtres){
            this.$filtres[i]={};
            for(let j in this.tableau_des_filtres[i]){
                this.$filtres[i][j]=this.tableau_des_filtres[i][j].défaut;
            }
        }
        if(this.fonction_liste === 'liste1'){
            let aa=sessionStorage.getItem( __gi1.cle_lst0 + '_' + this.moi + '_' + this.fonction_liste );
            if(aa !== null){
                let jso=JSON.parse( aa );
                for(let i in this.tableau_des_filtres[this.fonction_liste]){
                    this.$filtres[this.fonction_liste][i]=jso[i]??this.tableau_des_filtres[this.fonction_liste][i].défaut;
                }
            }
            this.vv_ecran_liste_boutons_avant+='<div id="vv_nouveau_projet" class="rev_b_svg yy__xif" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_creer1())))" title="création' + this.DUN_DUNE_ELEMENT_GERE + ' " >' + __gi1.les_svg.nouveau_document + '</div>';
        }
    }
    /*
      =============================================================================================================
    */
    initialiser_le_clone( mat , d , le_message_du_serveur ){
        __gi1.maj_menu( mat , d , le_message_du_serveur );
        this.liste_du_menu0( null , null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    activer1( mat , d , le_message_du_serveur ){
        this.$chi_id_projet=0;
        if(le_message_du_serveur.__xst === __xsu){
            this.$chi_id_projet=le_message_du_serveur.__xva.chi_id_projet;
            __gi1.executer1( 'm1(n1(_fonctions1),f1(maj_liste_des_genres()))' , le_message_du_serveur );
            __gi1.executer1( 'm1(n1(_fonctions1),f1(maj_liste_des_sql()))' , le_message_du_serveur );
            __gi1.executer1( 'm1(n1(__interface1),f1(maj_menu()))' , le_message_du_serveur );
        }
        try{
            let tt=le_message_du_serveur.__xva.chp_nom_de_connexion_utilisateur;
            if(le_message_du_serveur.__xva.chi_id_projet > 0){
                tt+=' ' + le_message_du_serveur.__xva.chi_id_projet;
            }
            document.getElementById( 'vv_bouton_connexion' ).title=tt;
        } catch {}
        this.liste_du_menu0( null , null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    desactiver1( mat , d , le_message_du_serveur ){
        this.$chi_id_projet=0;
        __gi1.executer1( 'm1(n1(_fonctions1),f1(maj_liste_des_genres()))' , le_message_du_serveur );
        __gi1.executer1( 'm1(n1(_fonctions1),f1(maj_liste_des_sql()))' , le_message_du_serveur );
        __gi1.executer1( 'm1(n1(__interface1),f1(maj_menu()))' , le_message_du_serveur );
        try{
            let tt=le_message_du_serveur.__xva.chp_nom_de_connexion_utilisateur;
            document.getElementById( 'vv_bouton_connexion' ).title=tt;
        } catch {}
        this.liste_du_menu0( null , null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    f1( mat , d , le_message_du_serveur=null ){
        switch (mat[d][1]){
            case 'initialiser_projet_2' : break;
            default:
                __gi1.ajoute_message( {"__xst" : __xdv ,"__xme" : 'la fonction "' + mat[d][1] + '" n\'est pas traitée ou bien comporte une erreur'} );
                return({"__xst" : __xer});
                
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modifier1( mat , d , le_message_du_serveur=null ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    verifier_modifier1( mat , d , données ){
        let retour_a_la_liste='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste='retour_a_la_liste()';
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        if(fo1['chp_nom_projet'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "nom" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_projet' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_dossier_requetes_projet'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "dossier requetes" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_dossier_requetes_projet' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_dossier_menus_projet'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "dossier menus" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_dossier_menus_projet' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_dossier_js_projet'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "dossier des javascript" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_dossier_js_projet' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['chi_id_projet']=fo1['chi_id_projet'] === '' ? ( null ) : ( parseInt( fo1['chi_id_projet'] , 10 ) );
        fo1['chx_dossier_requetes_projet']=fo1['chx_dossier_requetes_projet'] === '' ?
          ( 
            null
          ) : ( 
            parseInt( fo1['chx_dossier_requetes_projet'] , 10 )
          );
        fo1['chx_dossier_menus_projet']=fo1['chx_dossier_menus_projet'] === '' ? ( null ) : ( parseInt( fo1['chx_dossier_menus_projet'] , 10 ) );
        fo1['chx_dossier_js_projet']=fo1['chx_dossier_js_projet'] === '' ? ( null ) : ( parseInt( fo1['chx_dossier_js_projet'] , 10 ) );
        /* conversion des données numériques fin */
        /*
          tout a été vérifié
        */
        let __fo1={};
        __fo1[co1]=fo1;
        __gi1.__worker.postMessage( {
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(modifier1(' + retour_a_la_liste + '))))' ,
                "__xva" : {"__parametres" : __gi1.stockage_local['parametres'] ,"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_modification1( mat , d , le_message_du_serveur=null ){
        let a=document.getElementById( 'vv_titre_de_la_page' );
        if(a === null){
            __gi1.initialisation_des_zones( '' + this.moi + '' );
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === 'modification ' + this.DUN_DUNE_ELEMENT_GERE){
        }else{
            a.innerHTML='modification ' + this.DUN_DUNE_ELEMENT_GERE;
            __gi1.afficher_les_zones( 'vv_ecran_modification' );
        }
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea id="chp_nom_projet" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_nom_projet'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>dossier requetes</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_dossier_requetes_projet'];
        o1+='"  id="chx_dossier_requetes_projet" />';
        o1+='        <span id="chx_dossier_requetes_projet_libelle">';
        o1+='(' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_dossier_requetes_projet'] + ') ';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T1.chp_nom_dossier'] );
        o1+='</span>';
        o1+=__gi1.lien_parent( 'c_dossiers1' , 'chx_dossier_requetes_projet' , 'chx_dossier_requetes_projet_libelle' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>dossier des bases de données</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_dossier_bdds_projet'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="hidden" value="';
        o1+=le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_dossier_bdds_projet'];
        o1+='"  id="chx_dossier_bdds_projet" />';
        o1+='        <span id="chx_dossier_bdds_projet_libelle">';
        o1+='(' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_dossier_bdds_projet'] + ') ';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T3.chp_nom_dossier'] );
        o1+='</span>';
        o1+=__gi1.lien_parent( 'c_dossiers1' , 'chx_dossier_bdds_projet' , 'chx_dossier_bdds_projet_libelle' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>dossier menus</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_dossier_menus_projet'];
        o1+='"  id="chx_dossier_menus_projet" />';
        o1+='        <span id="chx_dossier_menus_projet_libelle">';
        o1+='(' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_dossier_menus_projet'] + ') ';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T2.chp_nom_dossier'] );
        o1+='</span>';
        o1+=__gi1.lien_parent( 'c_dossiers1' , 'chx_dossier_menus_projet' , 'chx_dossier_menus_projet_libelle' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>dossier des javascript</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_dossier_js_projet'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="hidden" value="';
        o1+=le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_dossier_js_projet'];
        o1+='"  id="chx_dossier_js_projet" />';
        o1+='        <span id="chx_dossier_js_projet_libelle">';
        o1+='(' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_dossier_js_projet'] + ') ';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T4.chp_nom_dossier'] );
        o1+='</span>';
        o1+=__gi1.lien_parent( 'c_dossiers1' , 'chx_dossier_js_projet' , 'chx_dossier_js_projet_libelle' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea id="cht_commentaire_projet" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_commentaire_projet'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        o1+='      <input type="hidden" id="chi_id_projet" value="' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chi_id_projet'] + '">';
        let cmd='';
        cmd+='liste1(';
        for(let i in this.tableau_des_filtres[this.fonction_liste]){
            if(this.$filtres[this.fonction_liste][i] !== ''){
                cmd+=i + '(\'' + __gi1.fi2( this.$filtres[this.fonction_liste][i] ) + '\')';
            }
        }
        cmd+=')';
        let obj2=__gi1.__rev1.rev_tm( cmd );
        let jso=JSON.stringify( obj2.__xva );
        o1+='      <input type="hidden" id="__mat_liste_si_ok" size="128" value="' + __gi1.fi2( jso ) + '" />';
        document.getElementById( 'vv_ecran_modification_zone_contenu' ).innerHTML=o1;
        __gi1.maj_hash( mat , 0 );
        __gi1.maj_title_htm1( 'modification ' + this.DUN_DUNE_ELEMENT_GERE );
        __gi1.ajoute_les_evenements_aux_boutons();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_confirmation_supprimer1( mat , d , le_message_du_serveur=null ){
        let a=document.getElementById( 'vv_titre_de_la_page' );
        if(a === null){
            __gi1.initialisation_des_zones( '' + this.moi + '' );
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === 'suppression ' + this.DUN_DUNE_ELEMENT_GERE){
        }else{
            a.innerHTML='suppression ' + this.DUN_DUNE_ELEMENT_GERE;
            __gi1.afficher_les_zones( 'vv_ecran_suppression' );
        }
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea disabled id="chp_nom_projet" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_nom_projet'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>dossier requetes</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chx_dossier_requetes_projet'];
        o1+='"  id="chx_dossier_requetes_projet" />';
        o1+='        <span>';
        o1+='(' + le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chx_dossier_requetes_projet'] + ') ';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T1.chp_nom_dossier'] );
        o1+='</span>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>dossier menus</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chx_dossier_menus_projet'];
        o1+='"  id="chx_dossier_menus_projet" />';
        o1+='        <span>';
        o1+='(' + le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chx_dossier_menus_projet'] + ') ';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T2.chp_nom_dossier'] );
        o1+='</span>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea disabled id="cht_commentaire_projet" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.cht_commentaire_projet'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        o1+='      <input type="hidden" id="chi_id_projet" value="' + le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chi_id_projet'] + '" />';
        let cmd='';
        cmd+='liste1(';
        for(let i in this.tableau_des_filtres[this.fonction_liste]){
            if(this.$filtres[this.fonction_liste][i] !== ''){
                cmd+=i + '(\'' + __gi1.fi2( this.$filtres[this.fonction_liste][i] ) + '\')';
            }
        }
        cmd+=')';
        let obj2=__gi1.__rev1.rev_tm( cmd );
        let jso=JSON.stringify( obj2.__xva );
        o1+='      <input type="hidden" id="__mat_liste_si_ok" size="128" value="' + __gi1.fi2( jso ) + '" />';
        document.getElementById( 'vv_ecran_suppression_zone_contenu' ).innerHTML=o1;
        __gi1.maj_title_htm1( 'suppression ' + this.DUN_DUNE_ELEMENT_GERE );
        if(__gi1.stockage_local['parametres']['--deverminage']['valeur'] > 0){
            __gi1.maj_hash( mat , 0 );
        }
        __gi1.ajoute_les_evenements_aux_boutons();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_duplication1( mat , d , le_message_du_serveur ){
        this.page_creer1( mat , d , le_message_du_serveur.__xva.page_duplication1.__xva[0] );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    verifier_creer1( mat , d , données ){
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        
        let retour_a_la_liste='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste='retour_a_la_liste()';
            }
        }
        
        
        if(fo1['chp_nom_projet'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "nom" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_projet' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /*
          tout a été vérifié
        */
        let __fo1={};
        __fo1[co1]=fo1;
        __gi1.__worker.postMessage( {
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(creer1(' + retour_a_la_liste + '))))' ,
                "__xva" : {"__parametres" : __gi1.stockage_local['parametres'] ,"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_creer1( mat , d , dupliquer=null ){
        let a=document.getElementById( 'vv_titre_de_la_page' );
        if(a === null){
            __gi1.initialisation_des_zones( '' + this.moi + '' );
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === 'création ' + this.DUN_DUNE_ELEMENT_GERE){
        }else{
            a.innerHTML='création ' + this.DUN_DUNE_ELEMENT_GERE;
            __gi1.afficher_les_zones( 'vv_ecran_creation' );
        }
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea id="chp_nom_projet" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+='';
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea id="cht_commentaire_projet" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+='';
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        let cmd='';
        cmd+='liste1(';
        for(let i in this.tableau_des_filtres[this.fonction_liste]){
            if(this.$filtres[this.fonction_liste][i] !== ''){
                cmd+=i + '(\'' + __gi1.fi2( this.$filtres[this.fonction_liste][i] ) + '\')';
            }
        }
        cmd+=')';
        let obj2=__gi1.__rev1.rev_tm( cmd );
        let jso=JSON.stringify( obj2.__xva );
        o1+='      <input type="hidden" id="__mat_liste_si_ok" size="128" value="' + __gi1.fi2( jso ) + '" />';
        document.getElementById( 'vv_ecran_creation_zone_contenu' ).innerHTML=o1;
        __gi1.maj_hash( mat , 0 );
        __gi1.maj_title_htm1( 'création ' + this.DUN_DUNE_ELEMENT_GERE );
        __gi1.ajoute_les_evenements_aux_boutons();
        document.getElementById('vv_ajouter_un_element_'+this.moi).style.visibility='hidden';
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    filtre1( mat , d , le_message_du_serveur=null ){
        let a=document.getElementById( 'vv_ecran_liste_zone_contenu' );
        if(a === null){
            return(this[this.fonction_liste]( mat , d , le_message_du_serveur ));
        }
        let tt=this.zones_liste1( le_message_du_serveur );
        document.getElementById( 'vv_ecran_liste_zone_contenu' ).innerHTML=tt.o1;
        this.vv_ecran_liste_zones_navigation1( le_message_du_serveur , this.vv_ecran_liste_boutons_avant );
        __gi1.ajoute_les_evenements_aux_boutons();
        let lst=document.getElementById( 'vv_filtre1' ).querySelectorAll( "input" );
        this.$filtres={};
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].id){
                this.$filtres[lst[i].id]=lst[i].value;
            }
        }
        let aa=sessionStorage.getItem( __gi1.cle_lst0 + '_' + this.moi );
        if(aa === null){
            sessionStorage.setItem( __gi1.cle_lst0 + '_' + this.moi , JSON.stringify( {"$filtres" : this.$filtres} ) );
        }else{
            let jso=JSON.parse( aa );
            jso['$filtres']=this.$filtres;
            sessionStorage.setItem( __gi1.cle_lst0 + '_' + this.moi , JSON.stringify( jso ) );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    zones_filtres1( mat , d , le_message_du_serveur ){
        let l01=mat.length;
        for(let nom_champ_filtre in this.tableau_des_filtres[this.fonction_liste]){
            let trouvé=false;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(nom_champ_filtre === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    this.$filtres[this.fonction_liste][nom_champ_filtre]=mat[i + 1][1];
                    trouvé=true;
                    break;
                }
            }
            if(trouvé === false){
                this.$filtres[this.fonction_liste][nom_champ_filtre]='';
            }
        }
        let cle_session=__gi1.cle_lst0 + '_' + this.moi + '_' + this.fonction_liste;
        sessionStorage.setItem( cle_session , JSON.stringify( this.$filtres[this.fonction_liste] ) );
        if(le_message_du_serveur.__xva.hasOwnProperty( '__fo1' )
               && le_message_du_serveur.__xva.__fo1 !== null
               && le_message_du_serveur.__xva.__fo1.hasOwnProperty( 'origine' )
               && le_message_du_serveur.__xva.__fo1.origine === 'aller_a_la_page'
        ){
            document.getElementById( '$__num_page' ).value=$__num_page;
            return;
        }
        if(document.getElementById( 'vv_ecran_liste_zone_filtre' ).innerHTML === ''){
            let o1='';
            let nom_zone_non_vide='';
            o1+='<div class="yy_filtre_liste1" id="' + this.fonction_liste + '">';
            for(let i in this.tableau_des_filtres[this.fonction_liste]){
                if(this.tableau_des_filtres[this.fonction_liste][i].masqué === false){
                    o1+='   <div>';
                    o1+='      <div><span>' + this.tableau_des_filtres[this.fonction_liste][i].nom + '</span></div>';
                    let bck='background:yellow;';
                    if(this.$filtres[this.fonction_liste][i] === ''){
                        bck='';
                    }else{
                        if(nom_zone_non_vide === ''){
                            nom_zone_non_vide=i;
                        }
                    }
                    o1+='      <div><input type="text" id="' + i + '" value="' + __gi1.fi1( this.$filtres[this.fonction_liste][i] ) + '" size="8" maxlength="64" autocapitalize="off" style="' + bck + '" /></div>';
                    o1+='   </div>';
                }
            }
            o1+='   <div>';
            o1+='     <div>';
            o1+='       <span>&nbsp;</span>';
            o1+='     </div>';
            o1+='     <div>';
            /* fo1(co1(vv_formulaire_de_connexion),pm1(m1(n1(_connexion1),f1(page_connexion1())))) */
            /* c_formulaire1(conteneur1('+this.fonction_liste+'),classe_et_methode1('+this.moi+'.filtre1($__num_page(0)))) */
            o1+='        <div class="rev_bouton yy_bouton_loupe" data-rev_click="';
            o1+='fo1(co1(' + this.fonction_liste + '),pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '($__num_page(0))))))';
            o1+='"';
            o1+='        >🔎</div>';
            o1+='     </div>';
            for(let i in this.tableau_des_filtres[this.fonction_liste]){
                if(this.tableau_des_filtres[this.fonction_liste][i].masqué === true){
                    o1+='     <input type="hidden" id="' + i + '" value="' + this.$filtres[this.fonction_liste][i] + '" />';
                }
            }
            o1+='   </div>';
            o1+='</div>';
            document.getElementById( 'vv_ecran_liste_zone_filtre' ).innerHTML=o1;
            if(nom_zone_non_vide !== ''){
                document.getElementById( nom_zone_non_vide ).select();
            }
            let lst=document.getElementById( 'vv_ecran_liste_zone_filtre' ).querySelectorAll( 'input' );
            for( let i=0 ; i < lst.length ; i++ ){
                lst[i].addEventListener( 'keyup' , ( e ) => {
                        if(e.keyCode === 13){
                            this.aller_a_la_page( null , null , '$__num_page' , 0 );
                            console.log( e , this );
                        }} );
            }
        }else{
            for(let i in this.tableau_des_filtres[this.fonction_liste]){
                document.getElementById( i ).value=this.$filtres[this.fonction_liste][i];
                if(this.$filtres[this.fonction_liste][i] !== ''){
                    document.getElementById( i ).style.background='yellow';
                }else{
                    document.getElementById( i ).style.background='';
                }
            }
        }
        setTimeout( () => {
                let premier=null;
                let non_vide=null;
                let lst=document.getElementById( 'vv_ecran_liste_zone_filtre' ).querySelectorAll( 'input' );
                for( let i=0 ; i < lst.length ; i++ ){
                    if(i === 0){
                        premier=lst[i];
                    }
                    if(lst[i].value && lst.value !== '' && non_vide === null){
                        non_vide=lst[i];
                    }
                }
                if(non_vide !== null){
                    non_vide.select();
                }else{
                    if(premier !== null){
                        premier.select();
                    }
                }} , 100 );
    }
    /*
      =============================================================================================================
    */
    supprimer1( mat , d , le_message_du_serveur ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    creer1( mat , d , le_message_du_serveur ){
        /* redirection vers modification */
        if(le_message_du_serveur && le_message_du_serveur.__xva.hasOwnProperty( 'page_modification1' )){
            this.page_modification1( mat , d , le_message_du_serveur );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    aller_a_la_page( mat , d , ref_zone=null , $num_page=null ){
        let nom_de_zone='';
        if(ref_zone !== null){
            nom_de_zone=ref_zone;
        }else{
            let l01=mat.length;
            let $__num_page=-1;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][2] === 'c'){
                    nom_de_zone=mat[i][1];
                }
            }
        }
        if(nom_de_zone !== ''){
            let $__num_page=-1;
            if(ref_zone !== null){
                if(isNaN( $num_page )){
                    try{
                        $__num_page=parseInt( document.getElementById( ref_zone ).value , 10 );
                    }catch{
                        $__num_page=0;
                    }
                }else{
                    $__num_page=$num_page;
                }
            }else{
                $__num_page=parseInt( document.getElementById( nom_de_zone ).getAttribute( 'data-numero_page' ) , 10 );
            }
            if($__num_page >= 0){
                document.getElementById( '$__num_page' ).value=$__num_page;
                let lst=document.getElementById( this.fonction_liste ).querySelectorAll( "input" );
                this.$filtres[this.fonction_liste]={};
                for( let i=0 ; i < lst.length ; i++ ){
                    if(lst[i].id){
                        this.$filtres[this.fonction_liste][lst[i].id]=lst[i].value;
                    }
                }
                let __fo1={};
                __fo1[this.fonction_liste]=this.$filtres[this.fonction_liste];
                __gi1.__worker.postMessage( {
                        "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '())))' ,
                        "__xva" : {"__parametres" : __gi1.stockage_local['parametres'] ,"__fo1" : __fo1 ,"__co1" : this.fonction_liste}
                    } );
            }else{
                if(ref_zone == null){
                    setTimeout( ( a ) => {
                            (document.getElementById( a.nom_de_zone ).classList).remove( 'yy_invisible' );} , 100 , {"nom_de_zone" : nom_de_zone} );
                }
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    sous_liste1( mat , d , le_message_du_serveur=null ){
        this.fonction_liste='sous_liste1';
        if(le_message_du_serveur == null || !le_message_du_serveur.__xva.hasOwnProperty( this.fonction_liste )){
            /* F5 */
            debugger;
            /* this.#init1(null,'liste1'); */
            return({"__xst" : __xsu});
        }
        let o1='';
        let initialisation_fait=false;
        let a=document.getElementById( 'vv_titre_de_la_page' );
        if(a === null){
            __gi1.initialisation_des_zones( this.moi );
            initialisation_fait=true;
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES){
        }else{
            if(initialisation_fait === false){
                __gi1.initialisation_des_zones( this.moi );
                a=document.getElementById( 'vv_titre_de_la_page' );
            }
            a.innerHTML=this.LISTE_DES_ELEMENTS_GERES;
            __gi1.afficher_les_zones( 'vv_ecran_liste' );
        }
        this.zones_filtres1( mat , d , le_message_du_serveur );
        __gi1.vv_ecran_liste_zones_navigation1( le_message_du_serveur , '' , this.fonction_liste );
        document.getElementById( 'vv_ecran_liste_zone_contenu' ).innerHTML=this.zones_sous_liste1( le_message_du_serveur );
        __gi1.ajoute_les_evenements_aux_boutons();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    liste1( mat , d , le_message_du_serveur=null ){
        if(le_message_du_serveur == null || !le_message_du_serveur.__xva.hasOwnProperty( this.fonction_liste )){
            /* F5 */
            debugger;
            /* this.#init1(null,'liste1'); */
            return({"__xst" : __xsu});
        }
        let o1='';
        let initialisation_fait=false;
        let a=document.getElementById( 'vv_titre_de_la_page' );
        if(a === null){
            __gi1.initialisation_des_zones( this.moi );
            initialisation_fait=true;
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES){
        }else{
            if(initialisation_fait === false){
                __gi1.initialisation_des_zones( this.moi );
                a=document.getElementById( 'vv_titre_de_la_page' );
            }
            a.innerHTML=this.LISTE_DES_ELEMENTS_GERES;
            __gi1.afficher_les_zones( 'vv_ecran_liste' );
        }
        this.zones_filtres1( mat , d , le_message_du_serveur );
        __gi1.vv_ecran_liste_zones_navigation1( le_message_du_serveur , this.vv_ecran_liste_boutons_avant , this.fonction_liste );
        document.getElementById( 'vv_ecran_liste_zone_contenu' ).innerHTML=this.zones_liste1( le_message_du_serveur );
        __gi1.ajoute_les_evenements_aux_boutons();
        __gi1.maj_hash( mat , 0 );
        __gi1.maj_title_htm1( this.LISTE_DES_ELEMENTS_GERES );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    liste_du_menu0( mat , d ){
        __gi1.liste_du_menu000( mat , d , this );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    zones_sous_liste1( le_message_du_serveur ){
        let o1='';
        if(le_message_du_serveur !== null && le_message_du_serveur.__xva.hasOwnProperty( this.fonction_liste )){
            let lst='';
            for(let i in le_message_du_serveur.__xva[this.fonction_liste].__xva){
                let elem=le_message_du_serveur.__xva[this.fonction_liste].__xva[i];
                lst+='<tr>';
                lst+='<td style="text-wrap-mode: nowrap;">';
                let $parametres='';
                $parametres+='m1(n1(__interface1),f1(choisir_dans_sous_fenetre1(';
                $parametres+=' $nom_champ_dans_parent1(' + this.$nom_champ_dans_parent1 + ')';
                $parametres+=' $nom_libelle_dans_parent1(' + this.$nom_libelle_dans_parent1 + ')';
                $parametres+=' id1(' + elem['T0.chi_id_projet'] + ')';
                if(elem['T0.chx_parent_dossier'] === null){
                    $parametres+=' libelle1(\'' + elem['T0.chi_id_projet'] + '\')';
                }else{
                    let libelle1='';
                    libelle1+='(' + elem['T0.chi_id_projet'] + ') ';
                    libelle1+=elem['T0.chp_nom_projet'];
                    $parametres+=' libelle1(\'' + __gi1.fi1( libelle1 ) + '\')';
                }
                $parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + $parametres + '">=&gt;</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_projet'] !== null){
                    lst+=elem['T0.chi_id_projet'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_nom_projet'] !== null){
                    lst+=elem['T0.chp_nom_projet'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.cht_commentaire_projet'] !== null){
                    lst+=elem['T0.cht_commentaire_projet'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table border="1">';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+='<th>id</th>';
                o1+='<th>nom</th>';
                o1+='<th>commentaire</th>';
                o1+='</tr>';
                o1+=lst;
                o1+='</table>';
                o1+='</div>';
            }else{
                o1+=__gi1.la_liste_est_vide();
            }
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
    zones_liste1( le_message_du_serveur ){
        let o1='';
        if( __gi1.chi_id_projet === 1
            && __gi1.chi_id_utilisateur === 1
            && __gi1._CA_.slice( -7 ) === '_rev_1_'
        ){
            document.getElementById('vv_nouveau_projet').style.visibility='visible';
        }else{
            document.getElementById('vv_nouveau_projet').style.visibility='hidden';
        }
        
        if(le_message_du_serveur !== null && le_message_du_serveur.__xva.hasOwnProperty( this.fonction_liste )){
            /*
              projet courant
            */
            this.$chi_id_projet=le_message_du_serveur.__xva.chi_id_projet;
            /*  */
            let lst='';
            for(let i in le_message_du_serveur.__xva[this.fonction_liste].__xva){
                let elem=le_message_du_serveur.__xva[this.fonction_liste].__xva[i];
                lst+='<tr>';
                lst+='<td style="min-width:15em;">';
                lst+='<div style="display:inline-flex;">';
                /* yy_col_act_td1 */
                /* activer */
                if(this.$chi_id_projet === elem['T0.chi_id_projet']){
                    lst+='<div class="rev_bouton yy__3 yy__3_inactif" >=&gt;</div>';
                }else{
                    if(elem['T0.chi_id_projet'] === 2){
                        lst+='<div class="rev_bouton yy__3 yy__3_inactif" >=&gt;</div>';
                    }else{
                        lst+='<div class="rev_bouton yy__3 ' + (this.$chi_id_projet === elem['T0.chi_id_projet'] ? ( 'yy__3_inactif' ) : ( '' )) + '" data-rev_click="';
                        lst+='pm1(m1(n1(' + this.moi + '),f1(activer1(';
                        lst+=' $chi_id_projet(' + elem['T0.chi_id_projet'] + ')';
                        lst+='))))';
                        lst+='"  title="activer">=&gt;</div>';
                    }
                }
                /* DEsactiver */
                if(this.$chi_id_projet === elem['T0.chi_id_projet']){
                    lst+='<div class="rev_bouton yy__0 ' + (this.$chi_id_projet === elem['T0.chi_id_projet'] ? ( '' ) : ( 'yy__0_inactif' )) + '" data-rev_click="';
                    lst+='pm1(m1(n1(' + this.moi + '),f1(desactiver1(';
                    lst+=' $chi_id_projet(' + elem['T0.chi_id_projet'] + ')';
                    lst+='))))';
                    lst+='"  title="désactiver">=&lt;</div>';
                }else{
                    lst+='<div class="rev_bouton yy__0 yy__0_inactif" >=&lt;</div>';
                }
                /* editer */
                if(this.$chi_id_projet === 0 || this.$chi_id_projet !== elem['T0.chi_id_projet']){
                    lst+='<div class="rev_b_svg yy__3 yy__3_inactif" >' + __gi1.les_svg.editer + '</div>';
                    /* ✎ */
                }else{
                    lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_projet(' + elem['T0.chi_id_projet'] + ')))))">' + __gi1.les_svg.editer + '</div>';
                }
                /* supprimer */
                if(elem['T0.chi_id_projet'] <= 3){
                    lst+='<div class="rev_b_svg yy__0 yy__2_inactif" >' + __gi1.les_svg.poubelle + '</div>';
                }else{
                    /* seul le dev principal peut supprimer un projet */
                    if( __gi1.chi_id_projet === 1
                        && __gi1.chi_id_utilisateur === 1
                        && __gi1._CA_.slice( -7 ) === '_rev_1_'
                    ){
                        lst+='<div class="rev_b_svg yy__0" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_projet(' + elem['T0.chi_id_projet'] + ')))))">' + __gi1.les_svg.poubelle + '</div>';
                    }else{
                        lst+='<div class="rev_b_svg yy__0 yy__2_inactif" >' + __gi1.les_svg.poubelle + '</div>';
                    }
                }
                if(elem['T0.chi_id_projet'] === 1
                       && __gi1.chi_id_projet === 1
                       && __gi1.chi_id_utilisateur === 1
                       && __gi1._CA_.slice( -7 ) === '_rev_1_'
                ){
                    lst+='<div class="rev_bouton yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(initialiser_projet_2())))" title="initialiser projet 2" >initprojet 2</div>';
                }
                if(elem['T0.chi_id_projet'] === 2 && __gi1.chi_id_utilisateur === 1 && __gi1._CA_.slice( -7 ) === '_rev_2_'){
                    lst+='<div class="rev_bouton yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(initialiser_le_clone())))" title="initialiser_le_clone" >init clone</div>';
                }
                lst+='</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_projet'] !== null){
                    lst+=elem['T0.chi_id_projet'];
                }
                lst+='</td>';
                /*
                */
                if(this.$chi_id_projet === elem['T0.chi_id_projet']){
                    lst+='<td style="text-align:center;" class="yy__1">';
                }else{
                    lst+='<td style="text-align:center;">';
                }
                if(elem['T0.chp_nom_projet'] !== null){
                    lst+=elem['T0.chp_nom_projet'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.cht_commentaire_projet'] !== null){
                    lst+=elem['T0.cht_commentaire_projet'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table border="1">';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+='<th>id</th>';
                o1+='<th>nom</th>';
                o1+='<th>commentaire</th>';
                o1+='</tr>';
                o1+=lst;
                o1+='</table>';
                o1+='</div>';
            }else{
                o1+=__gi1.la_liste_est_vide();
            }
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
}
export{c_projets1 as c_projets1};