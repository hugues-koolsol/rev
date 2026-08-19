import {w_ast_js_vers_rev1} from './f0?n0=w_ast_js_vers_rev1_.js';
class menus1{
    /*
      ref_liste_ecran=1145;
      ref_select=1146;
      ref_insert=1147;
      ref_update=1148;
      ref_delete=1149;
      sans_sous_liste2=1;
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
            for(let i in this.tableau_des_filtres['liste1']){
                this.filtres['liste1'][i]=jso[i]??this.tableau_des_filtres['liste1'][i].défaut;
            }
        }
        this.vv_ecran_liste_boutons_avant+='<div class="rev_b_svg yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(page_creer1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + '" >' + this.__ig1.les_svg.nouveau_document + '</div>';
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
        if(fo1.cht_libelle_menu === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "libelle" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_libelle_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1.chp_titre_menu === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "titre" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_titre_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1.chx_autorisation_menu === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "id de l\'autorisation" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_autorisation_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1.chp_methode_menu === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "methode" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_methode_menu' ).focus();
            } catch {}
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
        /* conversion des données numériques verifier_modifier début */
        fo1.chi_id_menu=fo1.chi_id_menu === '' ? ( null ) : ( parseInt( fo1.chi_id_menu , 10 ) );
        fo1.chx_autorisation_menu=fo1.chx_autorisation_menu === '' ? ( null ) : ( parseInt( fo1.chx_autorisation_menu , 10 ) );
        if(isNaN( fo1.chx_autorisation_menu )){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "id autorisation" doit être numérique'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_autorisation_menu' ).focus();
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , tup.T0_chi_id_menu , this.moi , 'chi_id_menu' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>libelle</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(tup.T0_cht_libelle_menu === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_edition1( 'cht_libelle_menu' );
        o1+='</div>\r\n';
        o1+='            <textarea  id="cht_libelle_menu" rows="3" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( tup.T0_cht_libelle_menu );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>titre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur2">';
        if(tup.T0_chp_titre_menu === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_titre_menu"  size="48"  maxlength="64" value="' + this.__ig1.fi2( tup.T0_chp_titre_menu ) + '" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='<div style="display:inline-block;">';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_titre_menu' );
        o1+='</div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id de l\'autorisation</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(tup.T0_chx_autorisation_menu === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="hidden" value="' + tup.T0_chx_autorisation_menu + '" id="chx_autorisation_menu" />';
        o1+='        <span id="chx_autorisation_menu_libelle">';
        o1+='(' + tup.T0_chx_autorisation_menu + ') ';
        o1+='       / <span>' + this.__ig1.fi2( tup.T3_chp_nom_source ) + '</span>';
        o1+='       / <span>' + this.__ig1.fi2( tup.T2_chp_nom_acces ) + '</span>';
        o1+='</span>';
        o1+=this.__ig1.lien_parent2( 'autorisations2' , 'chx_autorisation_menu' , 'chx_autorisation_menu_libelle' , this.moi );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>methode</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur2">';
        if(tup.T0_chp_methode_menu === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div style="display:inline-block;" class="rev_bouton yy__4"  title="méthodes" ';
        o1+=' data-rev_click="m1(n1(' + this.moi + '),f1(affiche_methodes(champ(chx_autorisation_menu))))">Méthodes</div>';
        o1+='        <div style="display:inline-block;" id="vv_liste_des_methodes"></div>';
        o1+='        <br />';
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_methode_menu"  size="64"   maxlength="64"  value="' + this.__ig1.fi2( tup.T0_chp_methode_menu ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_methode_menu' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>condition au format rev</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(tup.T0_cht_condition_menu === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_rev3( 'cht_condition_menu' );
        o1+='</div>\r\n';
        o1+='            <textarea  data-editeur1="rev"  id="cht_condition_menu" rows="3" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( tup.T0_cht_condition_menu );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>condition au format js</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(tup.T0_cht_condition_js_menu === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        /*  */
        o1+='<div>\r\n';
        o1+='  <div data-rev_click="m1(n1(x_ecran_rev_vers_js1),f1(rev_vers_js1(zone_source(cht_condition_menu),zone_resultat(cht_condition_js_menu))))"';
        o1+='    class="rev_bouton yy__3" title="convertir en js">↧rev-&gt;js↧</div>';
        /*  */
        o1+='  <div data-rev_click="m1(n1(x_ecran_rev_vers_js1),f1(js_vers_rev1(zone_source(cht_condition_js_menu),zone_resultat(cht_condition_menu))))"';
        o1+='    class="rev_bouton yy__1" title="convertir en rev" >↥js->rev↥</div>';
        /*  */
        o1+=this.__ig1.__fnt1.boutons_edition1( 'cht_condition_js_menu' );
        o1+='</div>\r\n';
        o1+='            <textarea  data-editeur1="source_editeur1"  id="cht_condition_js_menu" rows="3" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( tup.T0_cht_condition_js_menu );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>initialisation</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(tup.T0_cht_initialisation_menu === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_rev3( 'cht_initialisation_menu' );
        o1+='</div>\r\n';
        o1+='            <textarea  data-editeur1="rev"  id="cht_initialisation_menu" rows="3" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( tup.T0_cht_initialisation_menu );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
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
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>libelle</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_libelle_menu' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_libelle_menu" rows="2"  cols="50" >' + this.__ig1.fi2( tup.T0_cht_libelle_menu ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>titre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_titre_menu"  size="64"   maxlength="64"  value="' + this.__ig1.fi2( tup.T0_chp_titre_menu ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_titre_menu' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id de l\'autorisation</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=tup.T0_chx_autorisation_menu;
        o1+='"  id="chx_autorisation_menu" />';
        o1+='        <span>';
        o1+='(' + tup.T0_chx_autorisation_menu + ') ';
        o1+='</span>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>methode</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_methode_menu"  size="64"   maxlength="64"  value="' + this.__ig1.fi2( tup.T0_chp_methode_menu ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_methode_menu' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>condition au format rev</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_condition_menu' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_condition_menu" rows="2"  cols="50" >' + this.__ig1.fi2( tup.T0_cht_condition_menu ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>condition au format js</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_condition_js_menu' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_condition_js_menu" rows="2"  cols="50" >' + this.__ig1.fi2( tup.T0_cht_condition_js_menu ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>initialisation</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_initialisation_menu' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_initialisation_menu" rows="2"  cols="50" >' + this.__ig1.fi2( tup.T0_cht_initialisation_menu ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
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
        if(fo1.chp_titre_menu === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "titre" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_titre_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1.chx_autorisation_menu === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "id de l\'autorisation" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_autorisation_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1.chp_methode_menu === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "methode" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_methode_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1.cht_libelle_menu === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "libelle" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_libelle_menu' ).focus();
            } catch {}
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
        /* conversion des données numériques verifier_creer début */
        fo1.chx_autorisation_menu=fo1.chx_autorisation_menu === '' ? ( null ) : ( parseInt( fo1.chx_autorisation_menu , 10 ) );
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_creation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , null , this.moi , 'chi_id_menu' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>titre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur2">';
        o1+='    <div>';
        o1+='      <input  type="text"  size="48"   maxlength="64"  id="chp_titre_menu" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(tup){
            o1+=this.__ig1.fi2( tup.T0_chp_titre_menu );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    <div style="display:inline-block;">';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_titre_menu' );
        o1+='    </div>';
        o1+='    </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id de l\'autorisation</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input id="chx_autorisation_menu" type="hidden" value="';
        if(tup){
            o1+=this.__ig1.fi2( tup.T0_chx_autorisation_menu );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='        <span id="chx_autorisation_menu_libelle">';
        if(tup){
            if(tup.T0_chx_autorisation_menu === null){
                o1+='*indéfini';
            }else{
                o1+='(' + tup.T0_chx_autorisation_menu + ') ';
                o1+='       / <span>' + this.__ig1.fi2( tup.T3_chp_nom_source ) + '</span>';
                o1+='       / <span>' + this.__ig1.fi2( tup.T2_chp_nom_acces ) + '</span>';
            }
        }else{
            o1+='*indéfini';
        }
        o1+='        </span>';
        /*
        */
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <span>';
        o1+=this.__ig1.lien_parent2( 'autorisations2' , 'chx_autorisation_menu' , 'chx_autorisation_menu_libelle' , this.moi );
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
        o1+='      <span>methode</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur2">';
        o1+='    <div>';
        o1+='      <input  type="text"  size="48"   maxlength="64"  id="chp_methode_menu" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(tup){
            o1+=this.__ig1.fi2( tup.T0_chp_methode_menu );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    <div style="display:inline-block;">';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_methode_menu' );
        o1+='    </div>';
        o1+='    </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>libelle</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + this.__ig1.__fnt1.boutons_edition1( 'cht_libelle_menu' );
        o1+='            </div>\r\n';
        o1+='            <textarea  id="cht_libelle_menu" rows="3" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(tup){
            o1+=this.__ig1.fi2( tup.T0_cht_libelle_menu );
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
        o1+='      <span>condition au format rev</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + this.__ig1.__fnt1.boutons_rev3( 'cht_condition_menu' );
        o1+='            </div>\r\n';
        o1+='            <textarea  data-editeur1="rev" id="cht_condition_menu" rows="3" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(tup){
            o1+=this.__ig1.fi2( tup.T0_cht_condition_menu );
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
        o1+='      <span>condition au format js</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='               <div data-rev_click="m1(n1(x_ecran_rev_vers_js1),f1(rev_vers_js1(zone_source(cht_condition_menu),zone_resultat(cht_condition_js_menu))))"';
        o1+='                 class="rev_bouton yy__3" title="convertir en js">↧rev-&gt;js↧</div>';
        /*  */
        o1+='               <div data-rev_click="m1(n1(x_ecran_rev_vers_js1),f1(js_vers_rev1(zone_source(cht_condition_js_menu),zone_resultat(cht_condition_menu))))"';
        o1+='                 class="rev_bouton yy__1" title="convertir en rev" >↥js->rev↥</div>';
        /*  */
        o1+='              ' + this.__ig1.__fnt1.boutons_rev3( 'cht_condition_js_menu' );
        o1+='            </div>\r\n';
        o1+='            <textarea  data-editeur1="source_editeur1"  id="cht_condition_js_menu" rows="3" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(tup){
            o1+=this.__ig1.fi2( tup.T0_cht_condition_js_menu );
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
        o1+='      <span>initialisation</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + this.__ig1.__fnt1.boutons_rev3( 'cht_initialisation_menu' );
        o1+='            </div>\r\n';
        o1+='            <textarea  data-editeur1="rev" id="cht_initialisation_menu" rows="3" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(tup){
            o1+=this.__ig1.fi2( tup.T0_cht_initialisation_menu );
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
        lst+='<div style="display:inline-flex;">';
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
            for(let i in le_colis1.__xva['liste1'].__xva){
                let tup=le_colis1.__xva['liste1'].__xva[i];
                lst+='<tr>';
                lst+='<td>';
                lst+=this.liste_des_boutons_action1( tup , le_colis1 );
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                lst+='<span data-chi_id_menu="' + this.__ig1.fi2( tup.T0_chi_id_menu ) + '">' + this.__ig1.fi2( tup.T0_chi_id_menu ) + '</span>';
                lst+='</td>';
                /*
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
                */
                lst+='<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">';
                /* cas 7.2 */
                lst+='(' + this.__ig1.fi2( tup.T1_chx_source_autorisation ) + ')';
                /* cas 9.2.2 */
                lst+='<span class="" style="">' + this.__ig1.fi2( tup.T3_chp_nom_source ) + '</span>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">';
                /* cas 7.2 */
                lst+='(' + this.__ig1.fi2( tup.T0_chx_autorisation_menu ) + ')';
                /* cas 9.2.2 */
                lst+='<span class="" style="">' + this.__ig1.fi2( tup.T1_chx_acces_autorisation ) + '</span>';
                /* cas 9.2.2 */
                lst+='<span class="" style="">' + this.__ig1.fi2( tup.T2_chp_nom_acces ) + '</span>';
                lst+='</td>';
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