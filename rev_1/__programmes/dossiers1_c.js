class dossiers1{
    moi='dossiers1';
    DUN_DUNE_ELEMENT_GERE='d\'un dossier';
    LISTE_DES_ELEMENTS_GERES='liste des dossiers';
    __gi1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page'} ,
            "T0_chi_id_dossier" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id'} ,
            "T0_chp_nom_dossier" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom'} ,
            "T0_chx_parent_dossier" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id parent'} ,
            "T1_chp_nom_dossier" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom parent'}
        } ,
        "sous_liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page'} ,
            "T0_chi_id_dossier" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id'} ,
            "T0_chp_nom_dossier" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom'} ,
            "T0_chx_parent_dossier" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id parent'} ,
            "T1_chp_nom_dossier" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom parent'}
        }
    };
    fonction_liste='liste1';
    filtres={};
    vv_ecran_liste_boutons_avant='';
    /*
      =============================================================================================================
    */
    page_nouveau_numero_dossier1( mat , d ){
        let l01=mat.length;
        let chi_id_dossier=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_dossier' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_dossier=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_dossier > 0){
            let o1='';
            o1+='<h1>Attribuer un nouveau numéro à un dossier</h1>';
            o1+='le numéro actuel est <b>' + chi_id_dossier + '</b>';
            o1+='<br />';
            o1+='<div id="vv_dossiers_nouveau_numero1">';
            o1+='    <input type="hidden" id="vv_ancien_numero_de_dossier" value="' + chi_id_dossier + '" />';
            o1+='    le nouveau numéro sera : <input type="text" id="vv_nouveau_numero_de_dossier" value="" />';
            o1+='    <br />';
            o1+='    <div class="rev_bouton" data-rev_click="';
            o1+='fo1(co1(vv_dossiers_nouveau_numero1),pm1(m1(n1(' + this.moi + '),f1(vv_dossiers_nouveau_numero1()))))';
            o1+='">attribuer ce nouveau numéro</div>';
            o1+='</div>';
            let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
            vv_sous_fenetre1.innerHTML=o1;
            /* __contenu_modale => vv_sous_fenetre1 */
            vv_sous_fenetre1.showModal();
            this.__gi1.ajoute_les_evenements_aux_boutons( null );
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    liste_des_des_fichiers_et_dossiers( __xva , titre , provenance ){
        let o1='';
        o1+='<div class="yy_conteneur_table">';
        o1+='<table border="1">';
        o1+='<tr>';
        o1+='<th colspan="4" class="yy__3">';
        o1+=titre;
        o1+='</th>';
        o1+='</tr>';
        o1+='<tr>';
        o1+='<th class="yy__1">';
        o1+='d/f';
        o1+='</th>';
        o1+='<th class="yy__1">';
        o1+='nom';
        o1+='</th>';
        o1+='<th class="yy__1">';
        o1+='dossier';
        o1+='</th>';
        o1+='<th class="yy__1">';
        o1+='fichier';
        o1+='</th>';
        o1+='</tr>';
        let cmd='';
        if(provenance === 'racine'){
            cmd+='liste1(';
            for(let i in this.tableau_des_filtres[this.fonction_liste]){
                if(this.filtres[this.fonction_liste][i] !== ''){
                    cmd+=i + '(\'' + this.__gi1.fi2( this.filtres[this.fonction_liste][i] ) + '\')';
                }
            }
            cmd+=')';
        }
        for(let i in __xva.liste_des_fido){
            o1+='<tr>';
            o1+='<td style="text-align:center;">';
            o1+=__xva.liste_des_fido[i].type_element;
            o1+='</td>';
            o1+='<td>';
            o1+=__xva.liste_des_fido[i].nom;
            o1+='</td>';
            o1+='<td>';
            if(__xva.liste_des_fido[i].type_element === 'd'){
                /*
                  les dossiers
                */
                if(__xva.liste_des_fido[i].present_en_base === __xsu){
                    o1+='le dossier est présent en bdd';
                }else{
                    o1+='<div';
                    o1+=' class="rev_bouton yy__1"';
                    o1+=' data-rev_click="';
                    o1+='pm1(m1(n1(' + this.moi + '),f1(integrer_ce_dossier1(';
                    o1+=' chp_nom_dossier(\'' + __xva.liste_des_fido[i].nom + '\'),';
                    o1+=' chx_parent_dossier(' + __xva.chi_id_dossier + ')';
                    o1+=' provenance(' + provenance + ')';
                    o1+=cmd;
                    o1+='))))';
                    o1+='">intégrer</div>';
                    o1+='<div';
                    o1+=' class="rev_bouton yy__3"';
                    o1+=' data-rev_click="';
                    o1+='pm1(m1(n1(' + this.moi + '),f1(integrer_ce_dossier1(';
                    o1+=' chp_nom_dossier(\'' + __xva.liste_des_fido[i].nom + '\'),';
                    o1+=' chx_parent_dossier(' + __xva.chi_id_dossier + ')';
                    o1+=' provenance(' + provenance + ')';
                    o1+=cmd;
                    o1+='))))';
                    o1+='">intégrer généré</div>';
                    o1+='<div';
                    o1+=' class="rev_bouton yy__0"';
                    o1+=' data-rev_click="';
                    o1+='confirmer1(pm1(m1(n1(' + this.moi + '),f1(supprimer_un_dossier_du_disque(';
                    o1+=' chp_nom_dossier(\'' + __xva.liste_des_fido[i].nom + '\'),';
                    o1+=' chi_id_dossier(' + __xva.chi_id_dossier + '),';
                    o1+=' provenance(' + provenance + ')';
                    o1+=cmd;
                    o1+=')))))';
                    o1+='">supprimer du disque</div>';
                }
            }
            o1+='</td>';
            o1+='<td>';
            if(__xva.liste_des_fido[i].type_element === 'f'){
                /*
                  les fichiers
                */
                if(__xva.liste_des_fido[i].present_en_base === __xsu){
                    o1+='le fichier est présent en bdd';
                }else{
                    o1+='<div';
                    o1+=' class="rev_bouton yy__1"';
                    o1+=' data-rev_click="';
                    o1+='pm1(m1(n1(' + this.moi + '),f1(integrer_ce_fichier_dans_les_sources(';
                    o1+=' chp_nom_source(\'' + __xva.liste_des_fido[i].nom + '\'),';
                    o1+=' chi_id_dossier(' + __xva.chi_id_dossier + ')';
                    o1+=' provenance(' + provenance + ')';
                    o1+=cmd;
                    o1+='))))';
                    o1+='">intégrer</div>';
                    o1+='<div';
                    o1+=' class="rev_bouton yy__2"';
                    o1+=' data-rev_click="';
                    o1+='pm1(m1(n1(' + this.moi + '),f1(integrer_ce_fichier_dans_les_sources(';
                    o1+=' chp_nom_source(\'' + __xva.liste_des_fido[i].nom + '\'),';
                    o1+=' chi_id_dossier(' + __xva.chi_id_dossier + '),';
                    o1+=' $che_binaire_source(1)';
                    o1+=' provenance(' + provenance + ')';
                    o1+=cmd;
                    o1+='))))';
                    o1+='">intégrer binaire</div>';
                    o1+='<div';
                    o1+=' class="rev_bouton yy__0"';
                    o1+=' data-rev_click="';
                    o1+='confirmer1(pm1(m1(n1(' + this.moi + '),f1(supprimer_un_fichier_du_disque(';
                    o1+=' chp_nom_source(\'' + __xva.liste_des_fido[i].nom + '\'),';
                    o1+=' chi_id_dossier(' + __xva.chi_id_dossier + '),';
                    o1+=' provenance(' + provenance + ')';
                    o1+=cmd;
                    o1+=')))))';
                    o1+='">supprimer du disque</div>';
                }
            }
            o1+='</td>';
            o1+='</tr>';
        }
        o1+='</table>';
        o1+='</div>';
        if(__xva.chi_id_dossier === 1){
            document.getElementById( 'vv_ecran_liste_zone_complement' ).innerHTML=o1;
            this.__gi1.ajoute_les_evenements_aux_boutons();
        }else{
            document.getElementById( 'vv_ecran_modification_zone_complement' ).innerHTML=o1;
            this.__gi1.ajoute_les_evenements_aux_boutons();
        }
    }
    /*
      =============================================================================================================
    */
    f1( mat , d , le_message_du_serveur=null ){
        switch (mat[d][1]){
            case 'vv_dossiers_nouveau_numero1' :
                this.__gi1.fermer_la_sous_fenetre();
                this.entree_module( null );
                break;
                
            case 'creer_le_dossier_sur_disque' : 
            case 'integrer_ce_dossier1' : 
            case 'integrer_ce_fichier_dans_les_sources' : 
            case 'supprimer_un_fichier_du_disque' :
                if(le_message_du_serveur && le_message_du_serveur.__xva.hasOwnProperty( 'liste_des_fido' )){
                    this.liste_des_des_fichiers_et_dossiers( le_message_du_serveur.__xva , 'Dossiers et fichiers  de ce dossier' );
                }
                break;
                
            default:
                this.__gi1.ajoute_message( {"__xst" : __xdv ,"__xme" : 'la fonction "' + mat[d][1] + '" n\'est pas traitée ou bien comporte une erreur'} );
                return({"__xst" : __xer});
                
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    constructor( mat , d , __gi1 ){
        this.__gi1=__gi1;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'nom_champ_dans_parent1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                this.nom_champ_dans_parent1=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_libelle_dans_parent1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                this.nom_libelle_dans_parent1=mat[i + 1][1];
            }
        }
        for(let i in this.tableau_des_filtres){
            this.filtres[i]={};
            for(let j in this.tableau_des_filtres[i]){
                this.filtres[i][j]=this.tableau_des_filtres[i][j].défaut;
            }
        }
        if(this.fonction_liste === 'liste1'){
            let aa=sessionStorage.getItem( this.__gi1.cle_lst0 + '_' + this.moi + '_' + this.fonction_liste );
            if(aa !== null){
                let jso=JSON.parse( aa );
                for(let i in this.tableau_des_filtres[this.fonction_liste]){
                    this.filtres[this.fonction_liste][i]=jso[i]??this.tableau_des_filtres[this.fonction_liste][i].défaut;
                }
            }
            this.vv_ecran_liste_boutons_avant+='<div class="rev_b_svg yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(page_creer1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + ' " >' + this.__gi1.les_svg.nouveau_document + '</div>';
        }
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
        var __test=this.__gi1.__fnt1.test_du_nom_de_fichier1( fo1['chp_nom_dossier'] , 'nom' );
        if(__test.__xst !== __xsu){
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_dossier' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_parent_dossier'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "parent" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_parent_dossier' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques */
        fo1['chi_id_dossier']=fo1['chi_id_dossier'] === '' ? ( null ) : ( parseInt( fo1['chi_id_dossier'] , 10 ) );
        fo1['chx_parent_dossier']=fo1['chx_parent_dossier'] === '' ? ( null ) : ( parseInt( fo1['chx_parent_dossier'] , 10 ) );
        /*
          tout a été vérifié
        */
        let __fo1={};
        __fo1[co1]=fo1;
        this.__gi1.envoyer_un_message_au_worker( {"__xac" : 'pm1(m1(n1(' + this.moi + '),f1(modifier1(' + retour_a_la_liste + '))))' ,"__xva" : {"__fo1" : __fo1 ,"__co1" : co1}} );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_modification1( mat , d , le_message_du_serveur=null ){
        if(!le_message_du_serveur.__xva.hasOwnProperty( 'page_modification1' )){
            return(this.__gi1.affiche_les_messages( {"__xst" : __xer ,"__xme" : 'cet élément n\'a pas été trouvé'} ));
        }
        let enreg=le_message_du_serveur.__xva.page_modification1.__xva[0];
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_basedd'] , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text" id="chp_nom_dossier"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_nom_dossier'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>parent</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_parent_dossier'];
        o1+='"  id="chx_parent_dossier" />';
        o1+='        <span id="chx_parent_dossier_libelle">';
        o1+='(' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_parent_dossier'] + ') ';
        o1+=this.__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T1.chp_nom_dossier'] );
        o1+='</span>';
        o1+=this.__gi1.lien_parent( 'dossiers1' , 'chx_parent_dossier' , 'chx_parent_dossier_libelle' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_dossier" value="' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chi_id_dossier'] + '">';
        /*
          =====================================================================================================
        */
        let cmd='';
        cmd+='liste1(';
        for(let i in this.tableau_des_filtres[this.fonction_liste]){
            if(this.filtres[this.fonction_liste][i] !== ''){
                cmd+=i + '(\'' + this.__gi1.fi2( this.filtres[this.fonction_liste][i] ) + '\')';
            }
        }
        cmd+=')';
        let obj2=this.__gi1.__rev1.rev_tm( cmd );
        let jso=JSON.stringify( obj2.__xva );
        o1+='      <input type="hidden" id="__mat_liste_si_ok" size="128" value="' + this.__gi1.fi2( jso ) + '" />';
        if(le_message_du_serveur.__xva.hasOwnProperty( 'liste_des_fido' )){
            this.liste_des_des_fichiers_et_dossiers( le_message_du_serveur.__xva , 'Dossiers et fichiers de ce dossier' , 'modification' );
        }
        document.getElementById( 'vv_ecran_modification_zone_contenu' ).innerHTML=o1;
        this.__gi1.maj_hash( mat , 0 );
        this.__gi1.maj_title_htm1( 'modification ' + this.DUN_DUNE_ELEMENT_GERE );
        this.__gi1.ajoute_les_evenements_aux_boutons();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_confirmation_supprimer1( mat , d , le_message_du_serveur=null ){
        if(!le_message_du_serveur.__xva.hasOwnProperty( 'page_confirmation_supprimer1' )){
            return(this.__gi1.affiche_les_messages( {"__xst" : __xer ,"__xme" : 'cet élément n\'a pas été trouvé'} ));
        }
        let enreg=le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0];
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_dossier'] , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_nom_dossier"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( enreg['T0.chp_nom_dossier'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>parent</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=enreg['T0.chx_parent_dossier'];
        o1+='"  id="chx_parent_dossier" />';
        o1+='        <span>';
        o1+='(' + enreg['T0.chx_parent_dossier'] + ') ';
        o1+=this.__gi1.fi2( enreg['T1.chp_nom_dossier'] );
        o1+='</span>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>voir les dépendants</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="rev_bouton" data-rev_click="m1(n1(sources1),f1(entree_module(';
        o1+='T0_chx_dossier_id_source(' + enreg['T0.chi_id_dossier'] + ')';
        o1+='T0_chi_id_source(\'\')';
        o1+=')))" title="liste des sources" >sources</div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_dossier" value="' + enreg['T0.chi_id_dossier'] + '" />';
        let cmd='';
        cmd+='liste1(';
        for(let i in this.tableau_des_filtres[this.fonction_liste]){
            if(this.filtres[this.fonction_liste][i] !== ''){
                cmd+=i + '(\'' + this.__gi1.fi2( this.filtres[this.fonction_liste][i] ) + '\')';
            }
        }
        cmd+=')';
        let obj2=this.__gi1.__rev1.rev_tm( cmd );
        let jso=JSON.stringify( obj2.__xva );
        o1+='      <input type="hidden" id="__mat_liste_si_ok" size="128" value="' + this.__gi1.fi2( jso ) + '" />';
        document.getElementById( 'vv_ecran_suppression_zone_contenu' ).innerHTML=o1;
        this.__gi1.maj_title_htm1( 'suppression ' + this.DUN_DUNE_ELEMENT_GERE );
        if(this.__gi1.stockage_local['parametres']['__deverminage']['valeur'] > 0){
            this.__gi1.maj_hash( mat , 0 );
        }
        this.__gi1.ajoute_les_evenements_aux_boutons();
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
        let retour_a_la_liste='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste='retour_a_la_liste()';
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        var __test=this.__gi1.__fnt1.test_du_nom_de_fichier1( fo1['chp_nom_dossier'] , 'nom' );
        if(__test.__xst !== __xsu){
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_dossier' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_parent_dossier'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'c: la valeur "parent" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_parent_dossier' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['chx_parent_dossier']=fo1['chx_parent_dossier'] === '' ? ( null ) : ( parseInt( fo1['chx_parent_dossier'] , 10 ) );
        /* conversion des données numériques fin */
        /*
          tout a été vérifié
        */
        /*
          tout a été vérifié
        */
        let __fo1={};
        __fo1[co1]=fo1;
        this.__gi1.envoyer_un_message_au_worker( {"__xac" : 'pm1(m1(n1(' + this.moi + '),f1(creer1(' + retour_a_la_liste + '))))' ,"__xva" : {"__fo1" : __fo1 ,"__co1" : co1}} );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_creer1( mat , d , dupliquer=null ){
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_creation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , null , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="64"   maxlength="64"  id="chp_nom_dossier" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_nom_dossier' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_nom_dossier'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>parent</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input ';
        o1+=' id="chx_parent_dossier" ';
        o1+=' type="hidden" ';
        o1+=' value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_parent_dossier' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chx_parent_dossier'] );
        }else{
            o1+='1';
        }
        o1+='"';
        o1+=' />';
        o1+='        <span id="chx_parent_dossier_libelle">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_parent_dossier' )){
            if(dupliquer['T0.chx_parent_dossier'] === null){
                o1+='*indéfini';
            }else{
                o1+='(' + dupliquer['T0.chx_parent_dossier'] + ') ';
                o1+=this.__gi1.fi2( dupliquer['T1.chp_nom_dossier'] );
            }
        }else{
            o1+='1';
        }
        o1+='</span>';
        /*
          ;
        */
        o1+=this.__gi1.lien_parent( 'dossiers1' , 'chx_parent_dossier' , 'chx_parent_dossier_libelle' );
        /*  */
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        let cmd='';
        cmd+='liste1(';
        for(let i in this.tableau_des_filtres[this.fonction_liste]){
            if(this.filtres[this.fonction_liste][i] !== ''){
                cmd+=i + '(\'' + this.__gi1.fi2( this.filtres[this.fonction_liste][i] ) + '\')';
            }
        }
        cmd+=')';
        let obj2=this.__gi1.__rev1.rev_tm( cmd );
        let jso=JSON.stringify( obj2.__xva );
        o1+='      <input type="hidden" id="__mat_liste_si_ok" size="128" value="' + this.__gi1.fi2( jso ) + '" />';
        document.getElementById( 'vv_ecran_creation_zone_contenu' ).innerHTML=o1;
        this.__gi1.maj_hash( mat , 0 );
        this.__gi1.maj_title_htm1( 'création ' + this.DUN_DUNE_ELEMENT_GERE );
        this.__gi1.ajoute_les_evenements_aux_boutons();
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
        this.__gi1.ajoute_les_evenements_aux_boutons();
        let lst=document.getElementById( 'vv_filtre1' ).querySelectorAll( "input" );
        this.filtres={};
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].id){
                this.filtres[lst[i].id]=lst[i].value;
            }
        }
        let aa=sessionStorage.getItem( this.__gi1.cle_lst0 + '_' + this.moi );
        if(aa === null){
            sessionStorage.setItem( this.__gi1.cle_lst0 + '_' + this.moi , JSON.stringify( {"filtres" : this.filtres} ) );
        }else{
            let jso=JSON.parse( aa );
            jso['filtres']=this.filtres;
            sessionStorage.setItem( this.__gi1.cle_lst0 + '_' + this.moi , JSON.stringify( jso ) );
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
                    this.filtres[this.fonction_liste][nom_champ_filtre]=mat[i + 1][1];
                    trouvé=true;
                    break;
                }
            }
            if(trouvé === false){
                this.filtres[this.fonction_liste][nom_champ_filtre]='';
            }
        }
        let cle_session=this.__gi1.cle_lst0 + '_' + this.moi + '_' + this.fonction_liste;
        sessionStorage.setItem( cle_session , JSON.stringify( this.filtres[this.fonction_liste] ) );
        if(le_message_du_serveur.__xva.hasOwnProperty( '__fo1' )
               && le_message_du_serveur.__xva.__fo1 !== null
               && le_message_du_serveur.__xva.__fo1.hasOwnProperty( 'origine' )
               && le_message_du_serveur.__xva.__fo1.origine === 'aller_a_la_page'
        ){
            document.getElementById( '__num_page' ).value=__num_page;
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
                    if(this.filtres[this.fonction_liste][i] === ''){
                        bck='';
                    }else{
                        if(nom_zone_non_vide === ''){
                            nom_zone_non_vide=i;
                        }
                    }
                    o1+='      <div><input type="text" id="' + i + '" value="' + this.__gi1.fi1( this.filtres[this.fonction_liste][i] ) + '" size="8" maxlength="64" autocapitalize="off" style="' + bck + '" /></div>';
                    o1+='   </div>';
                }
            }
            o1+='   <div>';
            o1+='     <div>';
            o1+='       <span>&nbsp;</span>';
            o1+='     </div>';
            o1+='     <div>';
            o1+='        <div class="rev_bouton yy_bouton_loupe" data-rev_click="';
            o1+='fo1(co1(' + this.fonction_liste + '),pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(__num_page(0))))))';
            o1+='"';
            o1+='        >🔎</div>';
            o1+='     </div>';
            for(let i in this.tableau_des_filtres[this.fonction_liste]){
                if(this.tableau_des_filtres[this.fonction_liste][i].masqué === true){
                    o1+='     <input type="hidden" id="' + i + '" value="' + this.filtres[this.fonction_liste][i] + '" />';
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
                            this.aller_a_la_page( null , null , '__num_page' , 0 );
                            console.log( e , this );
                        }} );
            }
        }else{
            for(let i in this.tableau_des_filtres[this.fonction_liste]){
                document.getElementById( i ).value=this.filtres[this.fonction_liste][i];
                if(this.filtres[this.fonction_liste][i] !== ''){
                    document.getElementById( i ).style.background='yellow';
                }else{
                    document.getElementById( i ).style.background='';
                }
            }
        }
        this.__gi1.delai_selectionner_champ_filtre();
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
            let __num_page=-1;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][2] === 'c'){
                    nom_de_zone=mat[i][1];
                }
            }
        }
        if(nom_de_zone !== ''){
            let __num_page=-1;
            if(ref_zone !== null){
                if(isNaN( $num_page )){
                    try{
                        __num_page=parseInt( document.getElementById( ref_zone ).value , 10 );
                    }catch{
                        __num_page=0;
                    }
                }else{
                    __num_page=$num_page;
                }
            }else{
                __num_page=parseInt( document.getElementById( nom_de_zone ).getAttribute( 'data-numero_page' ) , 10 );
            }
            if(__num_page >= 0){
                document.getElementById( '__num_page' ).value=__num_page;
                let lst=document.getElementById( this.fonction_liste ).querySelectorAll( "input" );
                this.filtres[this.fonction_liste]={};
                for( let i=0 ; i < lst.length ; i++ ){
                    if(lst[i].id){
                        this.filtres[this.fonction_liste][lst[i].id]=lst[i].value;
                    }
                }
                let __fo1={};
                __fo1[this.fonction_liste]=this.filtres[this.fonction_liste];
                this.__gi1.envoyer_un_message_au_worker( {
                        "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '())))' ,
                        "__xva" : {"__fo1" : __fo1 ,"__co1" : this.fonction_liste}
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
            this.__gi1.initialisation_des_zones( this.moi );
            initialisation_fait=true;
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES){
        }else{
            if(initialisation_fait === false){
                this.__gi1.initialisation_des_zones( this.moi );
                a=document.getElementById( 'vv_titre_de_la_page' );
            }
            a.innerHTML=this.LISTE_DES_ELEMENTS_GERES;
            this.__gi1.afficher_les_zones( 'vv_ecran_liste' );
        }
        this.zones_filtres1( mat , d , le_message_du_serveur );
        this.__gi1.vv_ecran_liste_zones_navigation1( le_message_du_serveur , '' , this.fonction_liste );
        document.getElementById( 'vv_ecran_liste_zone_contenu' ).innerHTML=this.zones_sous_liste1( le_message_du_serveur );
        this.__gi1.ajoute_les_evenements_aux_boutons();
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
            this.__gi1.initialisation_des_zones( this.moi );
            initialisation_fait=true;
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES){
        }else{
            if(initialisation_fait === false){
                this.__gi1.initialisation_des_zones( this.moi );
                a=document.getElementById( 'vv_titre_de_la_page' );
            }
            a.innerHTML=this.LISTE_DES_ELEMENTS_GERES;
            this.__gi1.afficher_les_zones( 'vv_ecran_liste' );
        }
        this.zones_filtres1( mat , d , le_message_du_serveur );
        this.__gi1.vv_ecran_liste_zones_navigation1( le_message_du_serveur , this.vv_ecran_liste_boutons_avant , this.fonction_liste );
        document.getElementById( 'vv_ecran_liste_zone_contenu' ).innerHTML=this.zones_liste1( le_message_du_serveur );
        this.__gi1.ajoute_les_evenements_aux_boutons();
        this.__gi1.maj_hash( mat , 0 );
        this.__gi1.maj_title_htm1( this.LISTE_DES_ELEMENTS_GERES );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        this.__gi1.recupere_liste_initiale( mat , d , this );
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
                let parametres='';
                parametres+='m1(n1(__gi1),f1(choisir_dans_sous_fenetre1(';
                parametres+=' nom_champ_dans_parent1(' + this.nom_champ_dans_parent1 + ')';
                parametres+=' nom_libelle_dans_parent1(' + this.nom_libelle_dans_parent1 + ')';
                parametres+=' id1(' + elem['T0.chi_id_dossier'] + ')';
                if(elem['T0.chx_parent_dossier'] === null){
                    parametres+=' libelle1(\'' + elem['T0.chi_id_dossier'] + '\')';
                }else{
                    let libelle1='';
                    libelle1+='(' + elem['T0.chi_id_dossier'] + ') ';
                    /* libelle1+=elem['T0.chp_nom_dossier']; */
                    libelle1+=elem['nom_chemin_relatif2'];
                    parametres+=' libelle1(\'' + this.__gi1.fi1( libelle1 ) + '\')';
                }
                parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + parametres + '">=&gt;</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_dossier'] !== null){
                    lst+=elem['T0.chi_id_dossier'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:left;">';
                if(elem['T0.chp_nom_dossier'] !== null){
                    lst+=this.__gi1.fi2( elem['nom_chemin_relatif2'] ).replace( /\//g , '<b>/</b>' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chx_parent_dossier'] !== null){
                    lst+=elem['T0.chx_parent_dossier'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T1.chp_nom_dossier'] !== null){
                    /* lst+=elem['T1.chp_nom_dossier'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' ); */
                    lst+=this.__gi1.fi2( elem['parent_nom_chemin_relatif2'] ).replace( /\//g , '<b>/</b>' );
                }
                lst+='</td>';
                /*
                */
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table border="1">';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+='<th>id</th>';
                o1+='<th>nom</th>';
                o1+='<th>parent</th>';
                o1+='<th>nom dossier</th>';
                o1+='</tr>';
                o1+=lst;
                o1+='</table>';
                o1+='</div>';
            }else{
                o1+=this.__gi1.la_liste_est_vide();
            }
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
    zones_liste1( le_message_du_serveur ){
        let o1='';
        if(le_message_du_serveur !== null && le_message_du_serveur.__xva.hasOwnProperty( this.fonction_liste )){
            let lst='';
            for(let i in le_message_du_serveur.__xva[this.fonction_liste].__xva){
                let elem=le_message_du_serveur.__xva[this.fonction_liste].__xva[i];
                lst+='<tr>';
                lst+='<td>';
                lst+='<div style="display:inline-flex;">';
                /* yy_col_act_td1 */
                if(elem['T0.chi_id_dossier'] > 7){
                    lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_dossier(' + elem['T0.chi_id_dossier'] + ')))))">' + this.__gi1.les_svg.poubelle + '</div>';
                }else{
                    lst+='<div class="rev_b_svg yy__2 yy__2_inactif">' + this.__gi1.les_svg.poubelle + '</div>';
                }
                if(elem['T0.chi_id_dossier'] > 1){
                    lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_dossier(' + elem['T0.chi_id_dossier'] + ')))))">' + this.__gi1.les_svg.editer + '</div>';
                    lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_dossier(' + elem['T0.chi_id_dossier'] + ')))))">' + this.__gi1.les_svg.dupliquer + '</div>';
                    lst+='<div class="rev_bouton yy__1" data-rev_click="m1(n1(' + this.moi + '),f1(page_nouveau_numero_dossier1(chi_id_dossier(' + elem['T0.chi_id_dossier'] + '))))" >' + this.__gi1.les_svg.renuméroter + '</div>';
                    lst+='<div class="rev_bouton yy__1" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(creer_le_dossier_sur_disque(chi_id_dossier(' + elem['T0.chi_id_dossier'] + ')))))" >créer</div>';
                }else{
                    lst+='<div class="rev_b_svg yy__3 yy__3_inactif">' + this.__gi1.les_svg.editer + '</div>';
                    lst+='<div class="rev_b_svg yy__4 yy__4_inactif">' + this.__gi1.les_svg.dupliquer + '</div>';
                    lst+='<div class="rev_b_svg yy__1 yy__1_inactif">' + this.__gi1.les_svg.renuméroter + '</div>';
                    lst+='<div class="rev_bouton yy__1 yy__1_inactif">créer</div>';
                }
                lst+='<div class="rev_bouton" data-rev_click="m1(n1(sources1),f1(entree_module(T0_chx_dossier_id_source(' + elem['T0.chi_id_dossier'] + '),*(\'\'))))" title="liste des sources">sources</div>';
                lst+='</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_dossier'] !== null){
                    lst+=elem['T0.chi_id_dossier'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:left;">';
                if(elem['T0.chp_nom_dossier'] !== null){
                    /* lst+=this.__gi1.fi2( elem['T0.chp_nom_dossier'] ); */
                    lst+=this.__gi1.fi2( elem['nom_chemin_relatif2'] ).replace( /\//g , '<b>/</b>' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chx_parent_dossier'] !== null){
                    lst+=elem['T0.chx_parent_dossier'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:left;">';
                if(elem['T1.chp_nom_dossier'] !== null){
                    /* lst+=this.__gi1.fi2( elem['T1.chp_nom_dossier'] ); */
                    lst+=this.__gi1.fi2( elem['parent_nom_chemin_relatif2'] ).replace( /\//g , '<b>/</b>' );
                }
                lst+='</td>';
                /*
                */
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table border="1">';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+='<th>id</th>';
                o1+='<th>nom</th>';
                o1+='<th>id parent</th>';
                o1+='<th>dossier parent</th>';
                o1+='</tr>';
                o1+=lst;
                o1+='</table>';
                o1+='</div>';
            }else{
                o1+=this.__gi1.la_liste_est_vide();
            }
        }
        if(le_message_du_serveur !== null){
            if(le_message_du_serveur.__xva.hasOwnProperty( 'liste_des_fido' )){
                this.liste_des_des_fichiers_et_dossiers( le_message_du_serveur.__xva , 'Dossiers et fichiers à la racine' , 'racine' );
            }
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
}
export{dossiers1 as dossiers1};