class travaux1{
    /*
      ref_select=396
      ref_insert=398
      ref_delete=399
      ref_update=397
      ref_liste_ecran=395
    */
    moi='travaux1';
    DUN_DUNE_ELEMENT_GERE='d\'un travail';
    LISTE_DES_ELEMENTS_GERES='liste des travaux';
    __gi1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chi_id_travail" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chp_resume_travail" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'resumé' ,"taille" : 8} ,
            "T0_cht_rev_travail" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'rev' ,"taille" : 8} ,
            "T0_chx_utilisateur_travail" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'utilisateur' ,"taille" : 8} ,
            "T0_chd_dtc_travail" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'dt création' ,"taille" : 8} ,
            "T1_chp_nom_de_connexion_utilisateur" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom de connexion utilisateur' ,"taille" : 8} ,
            "T0_chp_etat_travail" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'état' ,"taille" : 8}
        } ,
        "sous_liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chi_id_travail" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chp_resume_travail" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'resumé' ,"taille" : 8} ,
            "T0_cht_rev_travail" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'rev' ,"taille" : 8} ,
            "T0_chx_utilisateur_travail" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'utilisateur' ,"taille" : 8} ,
            "T0_chd_dtc_travail" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'dt création' ,"taille" : 8} ,
            "T1_chp_nom_de_connexion_utilisateur" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom de connexion utilisateur' ,"taille" : 8} ,
            "T0_chp_etat_travail" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'état' ,"taille" : 8}
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
            case 'demarrer_manuellement_job_cron' : 
            case 'supprimer_les_travaux' : 
            case 'supprimer_les_travaux_termines' :
                this.__gi1.fermer_la_sous_fenetre();
                this.entree_module( null );
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
            this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(page_creer1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + '" >' + this.__gi1.les_svg.nouveau_document + '</div>';
            this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xif" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(supprimer_les_travaux_termines())))" title="supprimer les travaux termines" >' + this.__gi1.les_svg.poubelle + '</div>';
            this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xer" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(supprimer_les_travaux())))" title="supprimer les travaux" >' + this.__gi1.les_svg.poubelle + '</div>';
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
        if(fo1['chp_resume_travail'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "résumé du travail" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_resume_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['cht_rev_travail'] !== null && fo1['cht_rev_travail'] !== ''){
            let obj1=this.__gi1.__rev1.rev_tm( fo1['cht_rev_travail'] );
            if(obj1.__xst !== __xsu){
                this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu de "description rev du travail" n\'est pas dans un format rev valide'} );
                this.__gi1.affiche_les_messages();
                this.__gi1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'cht_rev_travail' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        if(fo1['chx_utilisateur_travail'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "utilisateur du travail" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_utilisateur_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_etat_travail'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "état du travail" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_etat_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_projet_travail'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "référence du projet" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_projet_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['chi_id_travail']=fo1['chi_id_travail'] === '' ? ( null ) : ( parseInt( fo1['chi_id_travail'] , 10 ) );
        fo1['chx_utilisateur_travail']=fo1['chx_utilisateur_travail'] === '' ? ( null ) : ( parseInt( fo1['chx_utilisateur_travail'] , 10 ) );
        fo1['chx_projet_travail']=fo1['chx_projet_travail'] === '' ? ( null ) : ( parseInt( fo1['chx_projet_travail'] , 10 ) );
        /* conversion des données numériques fin */
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
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_travail'] , this.moi );
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
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_resume_travail"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( enreg['T0.chp_resume_travail'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_resume_travail' );
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
        o1+=this.__gi1.__fnt1.boutons_rev3( 'cht_rev_travail' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  data-editeur1="rev"  id="cht_rev_travail" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__gi1.fi2( enreg['T0.cht_rev_travail'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>utilisateur du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chx_utilisateur_travail'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="hidden" value="';
        o1+=enreg['T0.chx_utilisateur_travail'];
        o1+='"  id="chx_utilisateur_travail" />';
        o1+='        <span id="chx_utilisateur_travail_libelle">';
        o1+='(' + enreg['T0.chx_utilisateur_travail'] + ') ';
        o1+=this.__gi1.fi2( enreg['T1.chp_nom_de_connexion_utilisateur'] );
        o1+='</span>';
        o1+=this.__gi1.lien_parent( 'utilisateurs1' , 'chx_utilisateur_travail' , 'chx_utilisateur_travail_libelle' );
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
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_etat_travail"  size="32"   maxlength="32"  value="' + this.__gi1.fi2( enreg['T0.chp_etat_travail'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_etat_travail' );
        o1+='      <div style="display : inline-flex;flex-wrap : balance;">';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(en_file_d_attente)))))">en_file_d_attente</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(en_pause)))))">en_pause</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(en_cours)))))">en_cours</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(ok_termine)))))">ok_termine</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(ko_termine)))))">ko_termine</div>';
        o1+='      </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>référence du projet</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chx_projet_travail'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input value="' + this.__gi1.fi2( enreg['T0.chx_projet_travail'] ) + '" type="number" size="32" maxlength="32" id="chx_projet_travail" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
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
        o1+=this.__gi1.__fnt1.boutons_edition1( 'cht_log_travail' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  id="cht_log_travail" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__gi1.fi2( enreg['T0.cht_log_travail'] );
        o1+='</textarea>';
        o1+='        </div>';
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
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_travail'] , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>résumé du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_resume_travail"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( enreg['T0.chp_resume_travail'] ) + '"   />';
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
        o1+='            <textarea disabled id="cht_rev_travail" rows="2"  cols="50" >' + this.__gi1.fi2( enreg['T0.cht_rev_travail'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>utilisateur du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=enreg['T0.chx_utilisateur_travail'];
        o1+='"  id="chx_utilisateur_travail" />';
        o1+='        <span>';
        o1+='(' + enreg['T0.chx_utilisateur_travail'] + ') ';
        o1+=this.__gi1.fi2( enreg['T1.chp_nom_de_connexion_utilisateur'] );
        o1+='</span>';
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
        o1+='      <input disabled  type="text" id="chp_etat_travail"  size="32"   maxlength="32"  value="' + this.__gi1.fi2( enreg['T0.chp_etat_travail'] ) + '"   />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>référence du projet</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled type="number" size="32" maxlength="32" id="chx_projet_travail"  value="' + this.__gi1.fi2( enreg['T0.chx_projet_travail'] ) + '" />';
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
        o1+='            <textarea disabled id="cht_log_travail" rows="2"  cols="50" >' + this.__gi1.fi2( enreg['T0.cht_log_travail'] ) + '</textarea>';
        o1+='        </div>';
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
        if(fo1['chp_resume_travail'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "résumé du travail" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_resume_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_etat_travail'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "état du travail" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_etat_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_projet_travail'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "référence du projet" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_projet_travail' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['chx_projet_travail']=fo1['chx_projet_travail'] === '' ? ( null ) : ( parseInt( fo1['chx_projet_travail'] , 10 ) );
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
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_creation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , null , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>résumé du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="64"   maxlength="64"  id="chp_resume_travail" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_resume_travail' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_resume_travail'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_resume_travail' );
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
        o1+='              ' + this.__gi1.__fnt1.boutons_rev3( 'cht_rev_travail' );
        o1+='            </div>\r\n';
        o1+='            <textarea  data-editeur1="rev"  id="cht_rev_travail" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_rev_travail' )){
            o1+=this.__gi1.fi2( dupliquer['T0.cht_rev_travail'] );
        }else{
            o1+='';
        }
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>utilisateur du travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input ';
        o1+=' id="chx_utilisateur_travail" ';
        o1+=' type="hidden" ';
        o1+=' value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_utilisateur_travail' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chx_utilisateur_travail'] );
        }else{
            o1+='';
        }
        o1+='"';
        o1+=' />';
        o1+='        <span id="chx_utilisateur_travail_libelle">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_utilisateur_travail' )){
            if(dupliquer['T0.chx_utilisateur_travail'] === null){
                o1+='*indéfini';
            }else{
                o1+='(' + dupliquer['T0.chx_utilisateur_travail'] + ') ';
                o1+=this.__gi1.fi2( dupliquer['T1.chp_nom_de_connexion_utilisateur'] );
            }
        }else{
            o1+='*indéfini';
        }
        o1+='</span>';
        /*
          ;
        */
        o1+=this.__gi1.lien_parent( 'utilisateurs1' , 'chx_utilisateur_travail' , 'chx_utilisateur_travail_libelle' );
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
            o1+=this.__gi1.fi2( dupliquer['T0.chp_etat_travail'] );
        }else{
            o1+='en_file_d_attente';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_etat_travail' );
        o1+='    </div>';
        o1+='      <br />';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(en_file_d_attente)))))">en_file_d_attente</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(en_pause)))))">en_pause</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(en_cours)))))">en_cours</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(ok_termine)))))">ok_termine</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_etat_travail),valeur(valeur_constante(ko_termine)))))">ko_termine</div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>référence du projet</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="chx_projet_travail" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_projet_travail' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chx_projet_travail'] );
        }else{
            o1+='';
        }
        o1+='"/>';
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
                parametres+=' id1(' + elem['T0.chi_id_travail'] + ')';
                let libelle1='';
                libelle1+='(' + elem['T0.chi_id_travail'] + ') ';
                parametres+=' libelle1(\'' + this.__gi1.fi1( libelle1 ) + '\')';
                parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + parametres + '">=&gt;</div>';
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
                    lst+=this.__gi1.fi2( elem['T0.chp_resume_travail'].substr( 0 , 100 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.cht_rev_travail'] !== null){
                    lst+=this.__gi1.fi2( elem['T0.cht_rev_travail'].substr( 0 , 100 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T1.chp_nom_de_connexion_utilisateur'] !== null){
                    lst+=this.__gi1.fi2( elem['T1.chp_nom_de_connexion_utilisateur'].substr( 0 , 100 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_etat_travail'] !== null){
                    lst+=this.__gi1.fi2( elem['T0.chp_etat_travail'].substr( 0 , 100 ) );
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
                o1+=/* chp_resume_travail */'<th>resumé</th>';
                o1+=/* cht_rev_travail */'<th>rev</th>';
                o1+=/* chp_nom_de_connexion_utilisateur */'<th>nom de connexion utilisateur</th>';
                o1+=/* chp_etat_travail */'<th>état</th>';
                o1+=/* chn_duree_travail */'<th>durée</th>';
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
                lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_travail(' + elem['T0.chi_id_travail'] + ')))))">' + this.__gi1.les_svg.poubelle + '</div>';
                lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_travail(' + elem['T0.chi_id_travail'] + ')))))">' + this.__gi1.les_svg.editer + '</div>';
                lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_travail(' + elem['T0.chi_id_travail'] + ')))))">' + this.__gi1.les_svg.dupliquer + '</div>';
                lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(demarrer_manuellement_job_cron(chi_id_travail(' + elem['T0.chi_id_travail'] + ')))))">' + this.__gi1.les_svg.compiler + '</div>';
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
                    lst+=this.__gi1.fi2( elem['T0.chp_resume_travail'] );
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
                    lst+=this.__gi1.fi2( elem['T0.chp_etat_travail'] ) + '</span>';
                }
                if(elem['T1.chp_nom_de_connexion_utilisateur'] !== null){
                    lst+='<br />';
                    lst+='(' + elem['T0.chx_utilisateur_travail'] + ')';
                    lst+=this.__gi1.fi2( elem['T1.chp_nom_de_connexion_utilisateur'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_rev_travail'] !== null){
                    lst+=this.__gi1.fi2( elem['T0.cht_rev_travail'] ).replace( /f1\(/ , 'f1(<br />' );
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
                o1+=this.__gi1.la_liste_est_vide();
            }
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
}
export{travaux1 as travaux1};