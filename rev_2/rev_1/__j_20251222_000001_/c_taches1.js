class c_taches1{
    moi='c_taches1';
    DUN_DUNE_ELEMENT_GERE='d\'une tâche';
    LISTE_DES_ELEMENTS_GERES='liste des tâches';
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "$__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '$__num_page' ,"taille" : 8} ,
            "T0_chi_id_tache" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
             /* "T0_chx_utilisateur_tache" : {"type_filtre" :'INTEGER',défaut:'',masqué:false,nom:'utilisateur',taille:8}, */
            "T0_chp_texte_tache" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'texte' ,"taille" : 8} ,
            "T0_chp_priorite_tache" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'priorite' ,"taille" : 8} ,
            "T0_chp_priorite_tache2" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'priorite &lt;' ,"taille" : 8}
        } ,
        "sous_liste1" : {
            "$__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '$__num_page'} ,
            "T0_chi_id_tache" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id'} ,
             /* "T0_chx_utilisateur_tache" : {"type_filtre" :'INTEGER',défaut:'',masqué:false,nom:'utilisateur',"taille" : 8}, */
            "T0_chp_texte_tache" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'texte'} ,
            "T0_chp_priorite_tache" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'priorite'} ,
            "T0_chp_priorite_tache2" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'priorite &lt;'}
        }
    };
    fonction_liste='liste1';
    $filtres={};
    vv_ecran_liste_boutons_avant='';
    /*
      =============================================================================================================
    */
    f1( mat , d , le_message_du_serveur=null ){
        switch (mat[d][1]){
            case 'réordonner1' : 
            case 'ajouter_01_a_la_tache' : 
            case 'retrancher_01' : 
            case 'priorite_a' : this.aller_a_la_page( null , null , '$__num_page' , '$__num_page' );
                break;
            default:
                __gi1.ajoute_message( {"__xst" : __xdv ,"__xme" : 'la fonction "' + mat[d][1] + '" n\'est pas traitée ou bien comporte une erreur'} );
                return({"__xst" : __xer});
                
        }
        return({"__xst" : __xsu});
    }
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
            this.vv_ecran_liste_boutons_avant+='<div class="rev_b_svg yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(page_creer1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + ' " >' + __gi1.les_svg.nouveau_document + '</div>';
            this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xdv" data-indicateur_graphique="réordonner" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(réordonner1())))" title="réordonner" >' + __gi1.les_svg.reordonner + '</div>';
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
        if(fo1['chp_texte_tache'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "texte" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_texte_tache' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_priorite_tache'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "priorite" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_priorite_tache' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        var __test=__gi1.__fnt1.entier_compris_entre( 0 , 99 , fo1['chp_priorite_tache'] , 'priorite' );
        if(__test.__xst !== __xsu){
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_priorite_tache' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['chi_id_tache']=fo1['chi_id_tache'] === '' ? ( null ) : ( parseInt( fo1['chi_id_tache'] , 10 ) );
        fo1['chp_priorite_tache']=fo1['chp_priorite_tache'] === '' ? ( null ) : ( parseInt( fo1['chp_priorite_tache'] , 10 ) );
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
        o1+='      <span>texte</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_texte_tache'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=__gi1.__fnt1.boutons_edition1( 'chp_texte_tache' );
        o1+='</div>\r\n';
        var sty='';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  id="chp_texte_tache" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_texte_tache'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>priorite</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_priorite_tache'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_priorite_tache'] ) + '" type="number" size="32" maxlength="32" id="chp_priorite_tache" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='      <div class="yy_btn_en_ligne1">';
        o1+='        <div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_priorite_tache),valeur(valeur_constante(0)))))">00</div>';
        o1+='        <div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_priorite_tache),valeur(valeur_constante(20)))))">20</div>';
        o1+='        <div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_priorite_tache),valeur(valeur_constante(50)))))">50</div>';
        o1+='        <div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_priorite_tache),valeur(valeur_constante(80)))))">80</div>';
        o1+='        <div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_priorite_tache),valeur(valeur_constante(99)))))">99</div>';
        o1+='      </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_tache" value="' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chi_id_tache'] + '">';
        /*
          =====================================================================================================
        */
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
        o1+='      <span>texte</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea disabled id="chp_texte_tache" rows="2"  cols="50" >' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_texte_tache'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>priorite</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled type="number" size="32" maxlength="32" id="chp_priorite_tache"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_priorite_tache'] ) + '" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_tache" value="' + le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chi_id_tache'] + '" />';
        /*
          =====================================================================================================
        */
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
        let retour_a_la_liste='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste='retour_a_la_liste()';
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        if(fo1['chp_texte_tache'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "texte" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_texte_tache' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_priorite_tache'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "priorite" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_priorite_tache' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        var __test=__gi1.__fnt1.entier_compris_entre( 0 , 99 , fo1['chp_priorite_tache'] , 'priorite' );
        if(__test.__xst !== __xsu){
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_priorite_tache' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['chp_priorite_tache']=fo1['chp_priorite_tache'] === '' ? ( null ) : ( parseInt( fo1['chp_priorite_tache'] , 10 ) );
        /* conversion des données numériques fin */
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
        o1+='      <span>texte</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + __gi1.__fnt1.boutons_edition1( 'chp_texte_tache' );
        o1+='            </div>\r\n';
        o1+='            <textarea id="chp_texte_tache" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_texte_tache' )){
            o1+=__gi1.fi2( dupliquer['T0.chp_texte_tache'] );
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
        o1+='      <span>priorite</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="2" maxlength="2" max="99" style="width:4em;" id="chp_priorite_tache" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_priorite_tache' )){
            o1+=__gi1.fi2( dupliquer['T0.chp_priorite_tache'] );
        }else{
            o1+='0';
        }
        o1+='"/>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_priorite_tache),valeur(valeur_constante(0)))))">00</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_priorite_tache),valeur(valeur_constante(20)))))">20</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_priorite_tache),valeur(valeur_constante(50)))))">50</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_priorite_tache),valeur(valeur_constante(80)))))">80</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_priorite_tache),valeur(valeur_constante(99)))))">99</div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
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
                    o1+='    <div>';
                    o1+='        <div><span>' + this.tableau_des_filtres[this.fonction_liste][i].nom + '</span></div>';
                    let bck='background:yellow;';
                    if(this.$filtres[this.fonction_liste][i] === ''){
                        bck='';
                    }else{
                        if(nom_zone_non_vide === ''){
                            nom_zone_non_vide=i;
                        }
                    }
                    o1+='        <div>\r\n';
                    o1+='            <input type="text" id="' + i + '" value="' + __gi1.fi1( this.$filtres[this.fonction_liste][i] ) + '" size="8" maxlength="64" autocapitalize="off" style="' + bck + '" />\r\n';
                    if(this.$filtres[this.fonction_liste][i] && this.$filtres[this.fonction_liste][i] !== ''){
                        o1+='            <div class="rev_bouton yy__4" data-rev_click="';
                        o1+='m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(' + i + '),valeur(valeur_constante()))))';
                        o1+='">x</div>';
                    }
                    o1+='        </div>\r\n';
                    o1+='    </div>\r\n';
                }
            }
            o1+='   <div>';
            o1+='     <div>';
            o1+='       <span>&nbsp;</span>';
            o1+='     </div>';
            o1+='     <div>';
            o1+='        <div class="rev_b_svg yy_bouton_loupe" data-rev_click="';
            o1+='fo1(co1(' + this.fonction_liste + '),pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '($__num_page(0))))))';
            o1+='"';
            o1+='        >'+__gi1.les_svg.loupe+'</div>';
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
                $parametres+=' id1(' + elem['T0.chi_id_tache'] + ')';
                let libelle1='';
                libelle1+='(' + elem['T0.chi_id_tache'] + ') ';
                libelle1+=elem['T0.chp_texte_tache'] ? ( ' , ' + elem['T0.chp_texte_tache'] ) : ( '' );
                $parametres+=' libelle1(\'' + __gi1.fi1( libelle1 ) + '\')';
                $parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + $parametres + '">=&gt;</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_tache'] !== null){
                    lst+=elem['T0.chi_id_tache'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_texte_tache'] !== null){
                    lst+=elem['T0.chp_texte_tache'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_priorite_tache'] !== null){
                    lst+=elem['T0.chp_priorite_tache'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_priorite_tache'] !== null){
                    lst+=elem['T0.chp_priorite_tache'];
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
                o1+='<th>texte</th>';
                o1+='<th>priorite</th>';
                o1+='<th>priorite</th>';
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
        if(le_message_du_serveur !== null && le_message_du_serveur.__xva.hasOwnProperty( this.fonction_liste )){
            let lst='';
            for(let i in le_message_du_serveur.__xva[this.fonction_liste].__xva){
                let elem=le_message_du_serveur.__xva[this.fonction_liste].__xva[i];
                lst+='<tr>';
                lst+='<td>';
                lst+='<div style="display:inline-flex;">';
                /* yy_col_act_td1 */
                /*  */
                lst+='<div class="rev_b_svg yy__2 " data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_tache(' + elem['T0.chi_id_tache'] + ')))))">' + __gi1.les_svg.poubelle + '</div>';
                /*  */
                lst+=' <div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_tache(' + elem['T0.chi_id_tache'] + ')))))">' + __gi1.les_svg.editer + '</div>';
                /*  */
                lst+=' <div class="rev_bouton yy__1" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(priorite_a($chi_id_tache(' + elem['T0.chi_id_tache'] + '),$valeur(99)))))"  title="99">99</div>';
                /*  */
                lst+=' <div class="rev_bouton yy__1" data-indicateur_graphique="0' + this.moi + '_' + elem['T0.chi_id_tache'] + '" data-rev_click="';
                lst+='pm1(m1(n1(' + this.moi + '),f1(priorite_a($chi_id_tache(' + elem['T0.chi_id_tache'] + '),$valeur(0)))))';
                lst+='" title="0">00</div>';
                /*  */
                lst+='<div class="rev_bouton yy__4" data-indicateur_graphique="+1' + this.moi + '_' + elem['T0.chi_id_tache'] + '" data-rev_click="';
                lst+='pm1(m1(n1(' + this.moi + '),f1(ajouter_01_a_la_tache($chi_id_tache(' + elem['T0.chi_id_tache'] + ')))))';
                lst+='" title="+1">+1</div>';
                /*  */
                lst+='<div class="rev_bouton yy__4" data-indicateur_graphique="-1' + this.moi + '_' + elem['T0.chi_id_tache'] + '" data-rev_click="';
                lst+='pm1(m1(n1(' + this.moi + '),f1(retrancher_01($chi_id_tache(' + elem['T0.chi_id_tache'] + ')))))';
                lst+='"  title="-1">-1</div>';
                /*  */
                lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_tache(' + elem['T0.chi_id_tache'] + ')))))">' + __gi1.les_svg.dupliquer + '</div>';
                /*  */
                lst+='</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_tache'] !== null){
                    lst+=elem['T0.chi_id_tache'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="">';
                if(elem['T0.chp_texte_tache'] !== null){
                    lst+=__gi1.fi2( elem['T0.chp_texte_tache'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_priorite_tache'] !== null){
                    lst+=elem['T0.chp_priorite_tache'];
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
                o1+='<th>texte</th>';
                o1+='<th>priorite</th>';
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
export{c_taches1 as c_taches1};