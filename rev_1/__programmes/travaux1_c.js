class travaux1{
    /*
      ref_liste_ecran=1395;
      ref_select=1396;
      ref_insert=1398;
      ref_update=1397;
      ref_delete=1399;
      pour_sous_liste_uniquement=0;
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
            "__num_page" : {"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chi_id_travail" : {"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chp_resume_travail" : {"défaut" : '' ,"masqué" : false ,"nom" : 'resumé' ,"taille" : 8} ,
            "T0_cht_rev_travail" : {"défaut" : '' ,"masqué" : false ,"nom" : 'rev' ,"taille" : 8} ,
            "T0_chx_utilisateur_travail" : {"défaut" : '' ,"masqué" : false ,"nom" : 'id utilisateur' ,"taille" : 8} ,
            "T0_chd_dtc_travail" : {"défaut" : '' ,"masqué" : false ,"nom" : 'dt création' ,"taille" : 8} ,
            "T1_chp_nom_de_connexion_utilisateur" : {"défaut" : '' ,"masqué" : false ,"nom" : 'utilisateur' ,"taille" : 8} ,
            "T0_chp_etat_travail" : {"défaut" : '' ,"masqué" : false ,"nom" : 'état' ,"taille" : 8}
        }
    };
    /*
    */
    filtres={};
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
    modifier1( mat , d , le_colis1=null ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    verifier_modifier1( mat , d , données ){
        let retour_a_la_liste='';
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste='retour_a_la_liste()';
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        if(fo1['chp_resume_travail'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "résumé du travail" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_resume_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['cht_rev_travail'] !== null && fo1['cht_rev_travail'] !== ''){
            let obj1=this.__ig1.__rev1.rev_tm( fo1['cht_rev_travail'] );
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
        let __test_1_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( fo1['cht_rev_travail'] , 'description rev du travail' );
        if(__test_1_1.__xst !== __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_1_1.__xme} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_rev_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_utilisateur_travail'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "id utilisateur du travail" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_utilisateur_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_etat_travail'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "état du travail" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_etat_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_etat_travail'] !== ''){
            let tab_est_parmis_4='en_file_d_attente,en_pause,en_cours,ok_termine,ko_termine,ok_mais_avertissement'.split( ',' );
            if(!tab_est_parmis_4.includes( fo1['chp_etat_travail'] )){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "état du travail" doit être correctement renseignée (utilisez les boutons)'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'chp_etat_travail' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        /* conversion des données numériques verifier_modifier début */
        fo1['chi_id_travail']=fo1['chi_id_travail'] === '' ? ( null ) : ( parseInt( fo1['chi_id_travail'] , 10 ) );
        fo1['chx_utilisateur_travail']=fo1['chx_utilisateur_travail'] === '' ? ( null ) : ( parseInt( fo1['chx_utilisateur_travail'] , 10 ) );
        if(isNaN( fo1['chx_utilisateur_travail'] )){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "id utilisateur" doit être numérique'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_utilisateur_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        fo1['chn_duree_travail']=fo1['chn_duree_travail'] === '' ? ( null ) : ( parseFloat( fo1['chn_duree_travail'] ) );
        if(isNaN( fo1['chn_duree_travail'] )){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "durée" doit être numérique'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chn_duree_travail' ).focus();
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
        let enreg=le_colis1.__xva.page_modification1.__xva[0];
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_travail'] , this.moi , 'chi_id_travail' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>résumé du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chp_resume_travail'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_resume_travail"  size="64"   maxlength="64"  value="' + this.__ig1.fi2( enreg['T0.chp_resume_travail'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_resume_travail' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>description rev du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.cht_rev_travail'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_rev3( 'cht_rev_travail' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  data-editeur1="rev"  id="cht_rev_travail" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( enreg['T0.cht_rev_travail'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id utilisateur du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chx_utilisateur_travail'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="hidden" value="' + enreg['T0.chx_utilisateur_travail'] + '" id="chx_utilisateur_travail" />';
        o1+='        <span id="chx_utilisateur_travail_libelle">';
        o1+='(' + enreg['T0.chx_utilisateur_travail'] + ') ';
        o1+=this.__ig1.fi2( enreg['T1.chp_nom_de_connexion_utilisateur'] );
        o1+='</span>';
        o1+=this.__ig1.lien_parent2( 'utilisateurs1' , 'chx_utilisateur_travail' , 'chx_utilisateur_travail_libelle' , this.moi );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom utilisateur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.cht_utilisateur_travail'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_edition1( 'cht_utilisateur_travail' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  id="cht_utilisateur_travail" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( enreg['T0.cht_utilisateur_travail'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>état du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chp_etat_travail'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_etat_travail"  size="32"   maxlength="32"  value="' + this.__ig1.fi2( enreg['T0.chp_etat_travail'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_etat_travail' );
        o1+='      <div style="display : inline-flex;flex-wrap : balance;">';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(en_file_d_attente)))))">en_file_d_attente</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(en_pause)))))">en_pause</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(en_cours)))))">en_cours</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(ok_termine)))))">ok_termine</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(ko_termine)))))">ko_termine</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(ok_mais_avertissement)))))">ok_mais_avertissement</div>';
        o1+='      </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>contenu du log</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.cht_log_travail'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_edition1( 'cht_log_travail' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  id="cht_log_travail" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( enreg['T0.cht_log_travail'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>durée</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chn_duree_travail'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input value="' + this.__ig1.fi2( enreg['T0.chn_duree_travail'] ) + '" type="number" size="32" maxlength="32" id="chn_duree_travail" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_travail" value="' + enreg['T0.chi_id_travail'] + '">';
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
        document.getElementById( 'vv_ecran_modification_zone_contenu' ).innerHTML=o1;
        this.__ig1.maj_hash( mat , 0 );
        this.__ig1.maj_title_htm1( 'modification ' + this.DUN_DUNE_ELEMENT_GERE );
        this.__ig1.ajoute_les_evenements_aux_boutons();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_confirmation_supprimer1( mat , d , le_colis1=null ){
        if(!le_colis1.__xva.hasOwnProperty( 'page_confirmation_supprimer1' )){
            return(this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : 'cet élément n\'a pas été trouvé'} ));
        }
        let enreg=le_colis1.__xva.page_confirmation_supprimer1.__xva[0];
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_travail'] , this.moi , 'chi_id_travail' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>résumé du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_resume_travail"  size="64"   maxlength="64"  value="' + this.__ig1.fi2( enreg['T0.chp_resume_travail'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_resume_travail' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>description rev du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_rev_travail' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_rev_travail" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_rev_travail'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id utilisateur du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=enreg['T0.chx_utilisateur_travail'];
        o1+='"  id="chx_utilisateur_travail" />';
        o1+='        <span>';
        o1+='(' + enreg['T0.chx_utilisateur_travail'] + ') ';
        o1+=this.__ig1.fi2( enreg['T1.chp_nom_de_connexion_utilisateur'] );
        o1+='</span>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom utilisateur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_utilisateur_travail' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_utilisateur_travail" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_utilisateur_travail'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>état du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_etat_travail"  size="32"   maxlength="32"  value="' + this.__ig1.fi2( enreg['T0.chp_etat_travail'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_etat_travail' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>contenu du log</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_log_travail' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_log_travail" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_log_travail'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>durée</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled type="number" size="32" maxlength="32" id="chn_duree_travail"  value="' + this.__ig1.fi2( enreg['T0.chn_duree_travail'] ) + '" />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chn_duree_travail' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_travail" value="' + enreg['T0.chi_id_travail'] + '" />';
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
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_voir1( mat , d , le_colis1=null ){
        if(!le_colis1.__xva.hasOwnProperty( 'page_voir1' )){
            return(this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : 'cet élément n\'a pas été trouvé'} ));
        }
        let enreg=le_colis1.__xva.page_voir1.__xva[0];
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_visualisation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_travail'] , this.moi , 'chi_id_travail' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>résumé du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text" id="chp_resume_travail"  size="64"   maxlength="64"  value="' + this.__ig1.fi2( enreg['T0.chp_resume_travail'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_resume_travail' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>description rev du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_rev_travail' );
        o1+='</div>\r\n';
        o1+='            <textarea id="cht_rev_travail" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_rev_travail'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id utilisateur du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=enreg['T0.chx_utilisateur_travail'];
        o1+='"  id="chx_utilisateur_travail" />';
        o1+='        <span>';
        o1+='(' + enreg['T0.chx_utilisateur_travail'] + ') ';
        o1+=this.__ig1.fi2( enreg['T1.chp_nom_de_connexion_utilisateur'] );
        o1+='</span>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom utilisateur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_utilisateur_travail' );
        o1+='</div>\r\n';
        o1+='            <textarea id="cht_utilisateur_travail" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_utilisateur_travail'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>état du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text" id="chp_etat_travail"  size="32"   maxlength="32"  value="' + this.__ig1.fi2( enreg['T0.chp_etat_travail'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_etat_travail' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>contenu du log</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_log_travail' );
        o1+='</div>\r\n';
        o1+='            <textarea id="cht_log_travail" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_log_travail'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>durée</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number" size="32" maxlength="32" id="chn_duree_travail"  value="' + this.__ig1.fi2( enreg['T0.chn_duree_travail'] ) + '" />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chn_duree_travail' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        document.getElementById( 'vv_ecran_visualisation_zone_contenu' ).innerHTML=o1;
        this.__ig1.maj_title_htm1( 'visualisation ' + this.DUN_DUNE_ELEMENT_GERE );
        this.__ig1.maj_hash( mat , 0 );
        this.__ig1.ajoute_les_evenements_aux_boutons();
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
        let retour_a_la_liste='';
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste='retour_a_la_liste()';
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        if(fo1['chp_resume_travail'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "résumé du travail" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_resume_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        let __test_1_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( fo1['cht_rev_travail'] , 'description rev du travail' );
        if(__test_1_1.__xst !== __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_1_1.__xme} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_rev_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_utilisateur_travail'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "id utilisateur du travail" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_utilisateur_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_etat_travail'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "état du travail" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_etat_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_etat_travail'] !== ''){
            let tab_est_parmis_4='en_file_d_attente,en_pause,en_cours,ok_termine,ko_termine,ok_mais_avertissement'.split( ',' );
            if(!tab_est_parmis_4.includes( fo1['chp_etat_travail'] )){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "état du travail" doit être correctement renseignée (utilisez les boutons)'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'chp_etat_travail' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        /* conversion des données numériques verifier_creer début */
        fo1['chx_utilisateur_travail']=fo1['chx_utilisateur_travail'] === '' ? ( null ) : ( parseInt( fo1['chx_utilisateur_travail'] , 10 ) );
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
    page_creer1( mat , d , dupliquer=null ){
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_creation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , null , this.moi , 'chi_id_travail' );
        let o1='';
        let a=document.getElementById( 'vv_titre_de_la_page' );
        if(a === null){
            this.__ig1.initialisation_des_zones( '' + this.moi + '' );
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === 'création ' + this.DUN_DUNE_ELEMENT_GERE){
        }else{
            a.innerHTML='création ' + this.DUN_DUNE_ELEMENT_GERE;
            this.__ig1.afficher_les_zones( 'vv_ecran_creation' );
        }
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>résumé du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="48"   maxlength="64"  id="chp_resume_travail" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_resume_travail' )){
            o1+=this.__ig1.fi2( dupliquer['T0.chp_resume_travail'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_resume_travail' );
        o1+='    </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>description rev du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + this.__ig1.__fnt1.boutons_rev3( 'cht_rev_travail' );
        o1+='            </div>\r\n';
        o1+='            <textarea  data-editeur1="rev" id="cht_rev_travail" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_rev_travail' )){
            o1+=this.__ig1.fi2( dupliquer['T0.cht_rev_travail'] );
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
        o1+='      <span>id utilisateur du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input id="chx_utilisateur_travail" type="hidden" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_utilisateur_travail' )){
            o1+=this.__ig1.fi2( dupliquer['T0.chx_utilisateur_travail'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='        <span id="chx_utilisateur_travail_libelle">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_utilisateur_travail' )){
            if(dupliquer['T0.chx_utilisateur_travail'] === null){
                o1+='*indéfini';
            }else{
                o1+='(' + dupliquer['T0.chx_utilisateur_travail'] + ') ';
                o1+=' / <span>' + this.__ig1.fi2( dupliquer['T1.chp_nom_de_connexion_utilisateur'] ) + '</span>';
            }
        }else{
            o1+='*indéfini';
        }
        o1+='        </span>';
        /*
        */
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <span>';
        o1+=this.__ig1.lien_parent2( 'utilisateurs1' , 'chx_utilisateur_travail' , 'chx_utilisateur_travail_libelle' , this.moi );
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
        o1+='      <span>état du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  disabled  type="text"  size="32"   maxlength="32"  id="chp_etat_travail" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_etat_travail' )){
            o1+=this.__ig1.fi2( dupliquer['T0.chp_etat_travail'] );
        }else{
            o1+='en_file_d_attente';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_etat_travail' );
        o1+='      <br />';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(en_file_d_attente)))))">en_file_d_attente</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(en_pause)))))">en_pause</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(en_cours)))))">en_cours</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(ok_termine)))))">ok_termine</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(ko_termine)))))">ko_termine</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(ok_mais_avertissement)))))">ok_mais_avertissement</div>';
        o1+='    </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom utilisateur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + this.__ig1.__fnt1.boutons_edition1( 'cht_utilisateur_travail' );
        o1+='            </div>\r\n';
        o1+='            <textarea  id="cht_utilisateur_travail" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_utilisateur_travail' )){
            o1+=this.__ig1.fi2( dupliquer['T0.cht_utilisateur_travail'] );
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
    zones_filtres1( mat , d , le_colis1 ){
        const l01=mat.length;
        let de_13='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if('de_13' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                de_13=mat[i + 1][1];
            }
        }
        for(let nom_champ_filtre in this.tableau_des_filtres['liste1']){
            let trouvé=false;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(nom_champ_filtre === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    this.filtres['liste1'][nom_champ_filtre]=mat[i + 1][1].replace( /\\'/g , '\'' ).replace( /\\\\/g , '\\' );
                    trouvé=true;
                    break;
                }
            }
            if(trouvé === false){
                this.filtres['liste1'][nom_champ_filtre]='';
            }
        }
        let cle_session=this.__ig1.cle_lst0 + '_' + this.moi + '_' + 'liste1';
        sessionStorage.setItem( cle_session , JSON.stringify( this.filtres['liste1'] ) );
        if(le_colis1.__xva.hasOwnProperty( '__fo1' )
               && le_colis1.__xva.__fo1 !== null
               && le_colis1.__xva.__fo1.hasOwnProperty( 'origine' )
               && le_colis1.__xva.__fo1.origine === 'aller_a_la_page'
        ){
            document.getElementById( '__num_page' ).value=__num_page;
            return;
        }
        if(document.getElementById( 'vv_ecran_liste_zone_filtre' ).innerHTML === ''){
            let o1='';
            let nom_zone_non_vide='';
            o1+='<div class="yy_filtre_liste1" id="' + 'liste1' + '">';
            for(let i in this.tableau_des_filtres['liste1']){
                if(this.tableau_des_filtres['liste1'][i].masqué === false){
                    o1+='    <div>';
                    o1+='        <div><span>' + this.tableau_des_filtres['liste1'][i].nom + '</span></div>';
                    let bck='background:yellow;';
                    if(this.filtres['liste1'][i] === ''){
                        bck='';
                    }else{
                        if(nom_zone_non_vide === ''){
                            nom_zone_non_vide=i;
                        }
                    }
                    o1+='        <div>\r\n';
                    o1+='          <input type="text" id="' + i + '" aria-autocomplete="list" ';
                    o1+='           value="' + this.__ig1.fi1( this.filtres['liste1'][i] ) + '" ';
                    o1+='           size="' + this.tableau_des_filtres['liste1'][i].taille + '" ';
                    o1+='           maxlength="64" ';
                    o1+='           autocapitalize="off" ';
                    o1+='           style="' + bck + '" />';
                    if(this.filtres['liste1'][i] && this.filtres['liste1'][i] !== ''){
                        o1+='<div class="rev_bouton yy__4" data-rev_click="m1(n1(__fnt1),f1(raz_zone_et_select1(id(' + i + '))))">x</div>';
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
            o1+='        <div class="rev_bouton yy_bouton_loupe" data-rev_click="';
            o1+='fo1(co1(' + 'liste1' + '),pm1(m1(n1(' + this.moi + '),f1(' + 'liste1' + '(__num_page(0))))))';
            o1+='"';
            o1+='        >' + this.__ig1.les_svg.loupe + '</div>';
            o1+='     </div>';
            for(let i in this.tableau_des_filtres['liste1']){
                if(this.tableau_des_filtres['liste1'][i].masqué === true){
                    o1+='     <input type="hidden" id="' + i + '" value="' + this.filtres['liste1'][i] + '" />';
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
                        }
                    } );
            }
        }else{
            for(let i in this.tableau_des_filtres['liste1']){
                try{
                    document.getElementById( i ).value=this.filtres['liste1'][i];
                    if(this.filtres['liste1'][i] !== ''){
                        document.getElementById( i ).style.background='yellow';
                    }else{
                        document.getElementById( i ).style.background='';
                    }
                } catch {}
            }
        }
        if(de_13 === ''){
            this.__ig1.delai_selectionner_champ_filtre();
        }else{
            try{
                document.getElementById( de_13 ).select();
            } catch {}
        }
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
      =========================== fragment ========================================================================
    */
    zones_liste1( le_colis1 ){
        let o1='';
        if(le_colis1 !== null && le_colis1.__xva.hasOwnProperty( 'liste1' )){
            let lst='';
            for(let i in le_colis1.__xva['liste1'].__xva){
                let elem=le_colis1.__xva['liste1'].__xva[i];
                lst+='<tr>';
                lst+='<td>';
                lst+='<div style="display:inline-flex;">';
                lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_travail(' + elem['T0.chi_id_travail'] + ')))))">' + this.__ig1.les_svg.poubelle + '</div>';
                lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_travail(' + elem['T0.chi_id_travail'] + ')))))">' + this.__ig1.les_svg.editer + '</div>';
                lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_travail(' + elem['T0.chi_id_travail'] + ')))))">' + this.__ig1.les_svg.dupliquer + '</div>';
                lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(demarrer_manuellement_job_cron(chi_id_travail(' + elem['T0.chi_id_travail'] + ')))))">' + this.__ig1.les_svg.compiler + '</div>';
                lst+='</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_travail'] !== null){
                    lst+=elem['T0.chi_id_travail'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_resume_travail'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.chp_resume_travail'] );
                }
                if(elem['T0.chp_etat_travail'] !== null){
                    lst+='<br />';
                    if('en_file_d_attente' === elem['T0.chp_etat_travail']){
                        lst+='<span class="yy__xif">';
                    }else if('ok_termine' === elem['T0.chp_etat_travail']){
                        lst+='<span class="yy__xsu">';
                    }else if('ko_termine' === elem['T0.chp_etat_travail']){
                        lst+='<span class="yy__xer">';
                    }else{
                        lst+='<span class="yy__xdv">';
                    }
                    lst+=this.__ig1.fi2( elem['T0.chp_etat_travail'] ) + '</span>';
                }
                if(elem['T1.chp_nom_de_connexion_utilisateur'] !== null){
                    lst+='<br />';
                    lst+='(' + elem['T0.chx_utilisateur_travail'] + ')';
                    lst+=this.__ig1.fi2( elem['T1.chp_nom_de_connexion_utilisateur'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_rev_travail'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.cht_rev_travail'] ).replace( /f1\(/ , 'f1(<br />' );
                }
                lst+='</td>';
                lst+='<td style="text-align:center;">';
                if(elem['T0.chx_projet_travail'] !== null){
                    lst+=elem['T0.chx_projet_travail'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chn_duree_travail'] !== null){
                    lst+=elem['T0.chn_duree_travail'];
                }
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
                /* o1+=/_* chx_utilisateur_travail *_/'<th>utilisateur</th>'; */
                /* o1+=/_* chp_nom_de_connexion_utilisateur *_/'<th>nom de connexion</th>'; */
                /* o1+=/_* chp_etat_travail *_/'<th>état</th>'; */
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