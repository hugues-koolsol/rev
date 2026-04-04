class revs1{
    /*
      ref_select=344
      ref_insert=358
      ref_delete=
      ref_update=
      ref_liste_ecran=359
    */
    moi='revs1';
    DUN_DUNE_ELEMENT_GERE='d\'un rev';
    LISTE_DES_ELEMENTS_GERES='liste des revs';
    __gi1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chi_id_rev" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chp_provenance_rev" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'provenance' ,"taille" : 8} ,
            "T1_chp_nom_source" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom source' ,"taille" : 8} ,
            "T0_chp_valeur_rev" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'valeur' ,"taille" : 8} ,
            "T0_chx_source_rev" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'source' ,"taille" : 8}
        } ,
        "sous_liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chi_id_rev" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chp_provenance_rev" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'provenance' ,"taille" : 8} ,
            "T1_chp_nom_source" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom source' ,"taille" : 8} ,
            "T0_chp_valeur_rev" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'valeur' ,"taille" : 8} ,
            "T0_chx_source_rev" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'source' ,"taille" : 8}
        }
    };
    fonction_liste='liste1';
    filtres={};
    vv_ecran_liste_boutons_avant='';
    /*
      =============================================================================================================
    */
    f1( mat , d , le_message_du_serveur=null ){
        switch (mat[d][1]){
            case 'tout_supprimer' :
                /*
                  this.__gi1.fermer_la_sous_fenetre();
                  this.entree_module( null );
                */
                break;
                
            default:
                this.__gi1.ajoute_message( {"__xst" : __xdv ,"__xme" : 'dans ' + this.moi + '_c, la fonction "' + mat[d][1] + '" n\'est pas traitée ou bien comporte une erreur'} );
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
            /* this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(page_creer1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + '" >' + this.__gi1.les_svg.nouveau_document + '</div>'; */
            this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__0" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(tout_supprimer())))" title="tout supprimer" >supprimer tout</div>';
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
        /*
          tout a été vérifié
        */
        let __fo1={};
        __fo1[co1]=fo1;
        this.__gi1.envoyer_un_message_au_worker( {
                 /*  */
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(modifier1(' + retour_a_la_liste + '))))' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
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
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_rev'] , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_rev" value="' + enreg['T0.chi_id_rev'] + '">';
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
        o1+='      <input type="hidden" id="__mat_liste_si_ok" value="' + this.__gi1.fi2( jso ) + '" />';
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
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_rev'] , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_rev" value="' + enreg['T0.chi_id_rev'] + '" />';
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
        o1+='      <input type="hidden" id="__mat_liste_si_ok" value="' + this.__gi1.fi2( jso ) + '" />';
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
        if(fo1['chp_id_rev'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "id" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_id_rev' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_type_rev'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "type" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_type_rev' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_niveau_rev'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "niveau" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_niveau_rev' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_quotee_rev'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "quotee" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_quotee_rev' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_pos_premier_rev'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pos premier" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_pos_premier_rev' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_pos_dernier_rev'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pos dernier" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_pos_dernier_rev' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_parent_rev'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "parent" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_parent_rev' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_nbr_enfants_rev'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "nbr enfants" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nbr_enfants_rev' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_num_enfant_rev'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "num enfant" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_num_enfant_rev' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_profondeur_rev'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "profondeur" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_profondeur_rev' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_pos_ouver_parenthese_rev'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pos ouver parenthese" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_pos_ouver_parenthese_rev' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_enfant_suivant_rev'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "enfant suivant" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_enfant_suivant_rev' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['chx_source_rev']=fo1['chx_source_rev'] === '' ? ( null ) : ( parseInt( fo1['chx_source_rev'] , 10 ) );
        fo1['chp_id_rev']=fo1['chp_id_rev'] === '' ? ( null ) : ( parseInt( fo1['chp_id_rev'] , 10 ) );
        fo1['chp_niveau_rev']=fo1['chp_niveau_rev'] === '' ? ( null ) : ( parseInt( fo1['chp_niveau_rev'] , 10 ) );
        fo1['chp_quotee_rev']=fo1['chp_quotee_rev'] === '' ? ( null ) : ( parseInt( fo1['chp_quotee_rev'] , 10 ) );
        fo1['chp_pos_premier_rev']=fo1['chp_pos_premier_rev'] === '' ? ( null ) : ( parseInt( fo1['chp_pos_premier_rev'] , 10 ) );
        fo1['chp_pos_dernier_rev']=fo1['chp_pos_dernier_rev'] === '' ? ( null ) : ( parseInt( fo1['chp_pos_dernier_rev'] , 10 ) );
        fo1['chp_parent_rev']=fo1['chp_parent_rev'] === '' ? ( null ) : ( parseInt( fo1['chp_parent_rev'] , 10 ) );
        fo1['chp_nbr_enfants_rev']=fo1['chp_nbr_enfants_rev'] === '' ? ( null ) : ( parseInt( fo1['chp_nbr_enfants_rev'] , 10 ) );
        fo1['chp_num_enfant_rev']=fo1['chp_num_enfant_rev'] === '' ? ( null ) : ( parseInt( fo1['chp_num_enfant_rev'] , 10 ) );
        fo1['chp_profondeur_rev']=fo1['chp_profondeur_rev'] === '' ? ( null ) : ( parseInt( fo1['chp_profondeur_rev'] , 10 ) );
        fo1['chp_pos_ouver_parenthese_rev']=fo1['chp_pos_ouver_parenthese_rev'] === '' ?
          ( 
            null
          ) : ( 
            parseInt( fo1['chp_pos_ouver_parenthese_rev'] , 10 )
          );
        fo1['chp_enfant_suivant_rev']=fo1['chp_enfant_suivant_rev'] === '' ? ( null ) : ( parseInt( fo1['chp_enfant_suivant_rev'] , 10 ) );
        /* conversion des données numériques fin */
        /*
          tout a été vérifié
        */
        let __fo1={};
        __fo1[co1]=fo1;
        this.__gi1.envoyer_un_message_au_worker( {
                 /*  */
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(creer1(' + retour_a_la_liste + '))))' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_creer1( mat , d , dupliquer=null ){
        let a=document.getElementById( 'vv_titre_de_la_page' );
        if(a === null){
            this.__gi1.initialisation_des_zones( '' + this.moi + '' );
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === 'création ' + this.DUN_DUNE_ELEMENT_GERE){
        }else{
            a.innerHTML='création ' + this.DUN_DUNE_ELEMENT_GERE;
            this.__gi1.afficher_les_zones( 'vv_ecran_creation' );
        }
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>provenance</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="64"   maxlength="64"  id="chp_provenance_rev" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_provenance_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_provenance_rev'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_provenance_rev' );
        o1+='    </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>source</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="chx_source_rev" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_source_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chx_source_rev'] );
        }else{
            o1+='';
        }
        o1+='"/>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="chp_id_rev" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_id_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_id_rev'] );
        }else{
            o1+='';
        }
        o1+='"/>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>valeur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + this.__gi1.__fnt1.boutons_edition1( 'chp_valeur_rev' );
        o1+='            </div>\r\n';
        o1+='            <textarea  id="chp_valeur_rev" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_valeur_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_valeur_rev'] );
        }else{
            o1+='';
        }
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>type</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  disabled  type="text"  size="1"   maxlength="1"  id="chp_type_rev" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_type_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_type_rev'] );
        }else{
            o1+='i';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_type_rev' );
        o1+='    </div>';
        o1+='      <br />';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_rev),valeur(valeur_constante(i)))))">i</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_rev),valeur(valeur_constante(c)))))">c</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_rev),valeur(valeur_constante(f)))))">f</div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>niveau</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="chp_niveau_rev" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_niveau_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_niveau_rev'] );
        }else{
            o1+='';
        }
        o1+='"/>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>quotee</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="chp_quotee_rev" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_quotee_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_quotee_rev'] );
        }else{
            o1+='';
        }
        o1+='"/>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>pos premier</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="chp_pos_premier_rev" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_pos_premier_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_pos_premier_rev'] );
        }else{
            o1+='';
        }
        o1+='"/>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>pos dernier</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="chp_pos_dernier_rev" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_pos_dernier_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_pos_dernier_rev'] );
        }else{
            o1+='';
        }
        o1+='"/>';
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
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="chp_parent_rev" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_parent_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_parent_rev'] );
        }else{
            o1+='';
        }
        o1+='"/>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nbr enfants</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="chp_nbr_enfants_rev" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_nbr_enfants_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_nbr_enfants_rev'] );
        }else{
            o1+='';
        }
        o1+='"/>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>num enfant</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="chp_num_enfant_rev" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_num_enfant_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_num_enfant_rev'] );
        }else{
            o1+='';
        }
        o1+='"/>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>profondeur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="chp_profondeur_rev" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_profondeur_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_profondeur_rev'] );
        }else{
            o1+='';
        }
        o1+='"/>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>pos ouver parenthese</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="chp_pos_ouver_parenthese_rev" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_pos_ouver_parenthese_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_pos_ouver_parenthese_rev'] );
        }else{
            o1+='';
        }
        o1+='"/>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>enfant suivant</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="chp_enfant_suivant_rev" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_enfant_suivant_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_enfant_suivant_rev'] );
        }else{
            o1+='';
        }
        o1+='"/>';
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
        o1+='            <div>\r\n';
        o1+='              ' + this.__gi1.__fnt1.boutons_edition1( 'chp_commentaire_rev' );
        o1+='            </div>\r\n';
        o1+='            <textarea  id="chp_commentaire_rev" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_commentaire_rev' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_commentaire_rev'] );
        }else{
            o1+='';
        }
        o1+='</textarea>';
        o1+='        </div>';
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
        o1+='      <input type="hidden" id="__mat_liste_si_ok" value="' + this.__gi1.fi2( jso ) + '" />';
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
        let de_13='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if('de_13' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                de_13=mat[i + 1][1];
            }
        }
        for(let nom_champ_filtre in this.tableau_des_filtres[this.fonction_liste]){
            let trouvé=false;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(nom_champ_filtre === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    this.filtres[this.fonction_liste][nom_champ_filtre]=mat[i + 1][1].replace( /\\'/g , '\'' ).replace( /\\\\/g , '\\' );
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
                    o1+='    <div>';
                    o1+='        <div><span>' + this.tableau_des_filtres[this.fonction_liste][i].nom + '</span></div>';
                    let bck='background:yellow;';
                    if(this.filtres[this.fonction_liste][i] === ''){
                        bck='';
                    }else{
                        if(nom_zone_non_vide === ''){
                            nom_zone_non_vide=i;
                        }
                    }
                    o1+='        <div>\r\n';
                    o1+='          <input type="text" id="' + i + '" aria-autocomplete="list" ';
                    o1+='           value="' + this.__gi1.fi1( this.filtres[this.fonction_liste][i] ) + '" ';
                    o1+='           size="' + this.tableau_des_filtres[this.fonction_liste][i].taille + '" ';
                    o1+='           maxlength="64" ';
                    o1+='           autocapitalize="off" ';
                    o1+='           style="' + bck + '" />';
                    if(this.filtres[this.fonction_liste][i] && this.filtres[this.fonction_liste][i] !== ''){
                        o1+='            <div class="rev_bouton yy__4" data-rev_click="m1(n1(__fnt1),f1(raz_zone_et_select1(id(' + i + '))))">x</div>';
                    }
                    o1+='        </div>\r\n';
                    o1+='    </div>\r\n';
                }
            }
            o1+='   <div>';
            o1+='     <div>';
            o1+='       <span> </span>';
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
                            this.aller_a_la_page( null , null , '__num_page' , 0 , false , e.target.id );
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
        if(de_13 === ''){
            this.__gi1.delai_selectionner_champ_filtre();
        }else{
            try{
                document.getElementById( de_13 ).select();
            } catch {}
        }
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
    aller_a_la_page( mat , d , ref_zone=null , num_page=null , est_table_virtuelle=false , de_13='' ){
        return(this.__gi1.aller_a_la_page( mat , d , this.moi , this.fonction_liste , this.filtres , ref_zone , num_page , est_table_virtuelle , de_13 ));
    }
    /*
      =============================================================================================================
    */
    sous_liste1( mat , d , le_message_du_serveur=null ){
        this.fonction_liste='sous_liste1';
        return(this.__gi1.sous_liste_generique1( mat , d , le_message_du_serveur , this ));
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
                parametres+=' id1(' + elem['T0.chi_id_rev'] + ')';
                let libelle1='';
                libelle1+='(' + elem['T0.chi_id_rev'] + ') ';
                parametres+=' libelle1(\'' + this.__gi1.fi1( libelle1 ) + '\')';
                parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + parametres + '">=></div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_rev'] !== null){
                    lst+=elem['T0.chi_id_rev'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_provenance_rev'] !== null){
                    lst+=elem['T0.chp_provenance_rev'].substr( 0 , 100 ).replace( />/g , '>' ).replace( /</g , '<' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T1.chp_nom_source'] !== null){
                    lst+=elem['T1.chp_nom_source'].substr( 0 , 100 ).replace( />/g , '>' ).replace( /</g , '<' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_valeur_rev'] !== null){
                    lst+=elem['T0.chp_valeur_rev'].substr( 0 , 100 ).replace( />/g , '>' ).replace( /</g , '<' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chx_source_rev'] !== null){
                    lst+=elem['T0.chx_source_rev'];
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
                o1+='<th>provenance</th>';
                o1+='<th>nom source</th>';
                o1+='<th>valeur</th>';
                o1+='<th>source</th>';
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
                /*
                  lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1('+this.moi+'),f1(page_confirmation_supprimer1(chi_id_rev('+elem['T0.chi_id_rev']+')))))">'+this.__gi1.les_svg.poubelle+'</div>';
                */
                /*
                  lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1('+this.moi+'),f1(page_modification1(chi_id_rev('+elem['T0.chi_id_rev']+')))))">'+this.__gi1.les_svg.editer+'</div>';
                  
                */
                lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_rev(' + elem['T0.chi_id_rev'] + ')))))">' + this.__gi1.les_svg.dupliquer + '</div>';
                lst+='</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_rev'] !== null){
                    lst+=elem['T0.chi_id_rev'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_provenance_rev'] !== null){
                    lst+=this.__gi1.fi2( elem['T0.chp_provenance_rev'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chx_source_rev'] !== null){
                    lst+=elem['T0.chx_source_rev'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_id_rev'] !== null){
                    lst+=elem['T0.chp_id_rev'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.chp_valeur_rev'] !== null){
                    lst+=this.__gi1.fi2( elem['T0.chp_valeur_rev'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_type_rev'] !== null){
                    lst+=this.__gi1.fi2( elem['T0.chp_type_rev'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_niveau_rev'] !== null){
                    lst+=elem['T0.chp_niveau_rev'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_quotee_rev'] !== null){
                    lst+=elem['T0.chp_quotee_rev'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_pos_premier_rev'] !== null){
                    lst+=elem['T0.chp_pos_premier_rev'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_pos_dernier_rev'] !== null){
                    lst+=elem['T0.chp_pos_dernier_rev'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_parent_rev'] !== null){
                    lst+=elem['T0.chp_parent_rev'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_nbr_enfants_rev'] !== null){
                    lst+=elem['T0.chp_nbr_enfants_rev'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_num_enfant_rev'] !== null){
                    lst+=elem['T0.chp_num_enfant_rev'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_profondeur_rev'] !== null){
                    lst+=elem['T0.chp_profondeur_rev'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_pos_ouver_parenthese_rev'] !== null){
                    lst+=elem['T0.chp_pos_ouver_parenthese_rev'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_enfant_suivant_rev'] !== null){
                    lst+=elem['T0.chp_enfant_suivant_rev'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.chp_commentaire_rev'] !== null){
                    lst+=this.__gi1.fi2( elem['T0.chp_commentaire_rev'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T1.chp_nom_source'] !== null){
                    lst+=this.__gi1.fi2( elem['T1.chp_nom_source'] );
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
                o1+='<th>provenance</th>';
                o1+='<th>source</th>';
                o1+='<th>id</th>';
                o1+='<th style="max-width:360px;">valeur</th>';
                o1+='<th>type</th>';
                o1+='<th>niveau</th>';
                o1+='<th>quotee</th>';
                o1+='<th>pos premier</th>';
                o1+='<th>pos dernier</th>';
                o1+='<th>parent</th>';
                o1+='<th>nbr enfants</th>';
                o1+='<th>num enfant</th>';
                o1+='<th>profondeur</th>';
                o1+='<th>pos ouver parenthese</th>';
                o1+='<th>enfant suivant</th>';
                o1+='<th style="max-width:360px;">commentaire</th>';
                o1+='<th>nom</th>';
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
}
export{revs1 as revs1};