import {w_ast_js_vers_rev1} from './f0?n0=w_ast_js_vers_rev1_.js';
class menus1{
    /*
      ref_select=146
      ref_insert=147
      ref_delete=149
      ref_update=148
      ref_liste_ecran=145
    */
    moi='menus1';
    DUN_DUNE_ELEMENT_GERE='d\'un menu';
    LISTE_DES_ELEMENTS_GERES='liste des menus';
    __gi1=null;
    #objet_conversion_ast_js_vers_rev=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chi_id_menu" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T3_chp_nom_source" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom source' ,"taille" : 8} ,
            "T0_cht_libelle_menu" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'libelle' ,"taille" : 8} ,
            "T0_chp_titre_menu" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'titre' ,"taille" : 8} ,
            "T0_chx_autorisation_menu" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id autorisation' ,"taille" : 8} ,
            "T1_chp_nom_autorisation" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom autorisation' ,"taille" : 8} ,
            "T0_chp_methode_menu" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'methode' ,"taille" : 8} ,
            "T1_chx_acces_autorisation" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id acces' ,"taille" : 8}
        } ,
        "sous_liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chi_id_menu" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T3_chp_nom_source" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom source' ,"taille" : 8} ,
            "T0_cht_libelle_menu" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'libelle' ,"taille" : 8} ,
            "T0_chp_titre_menu" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'titre' ,"taille" : 8} ,
            "T0_chx_autorisation_menu" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id autorisation' ,"taille" : 8} ,
            "T1_chp_nom_autorisation" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom autorisation' ,"taille" : 8} ,
            "T0_chp_methode_menu" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'methode' ,"taille" : 8} ,
            "T1_chx_acces_autorisation" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id acces' ,"taille" : 8}
        }
    };
    fonction_liste='liste1';
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
                this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de chargement du parseur js ' + this.__gi1.__m_rev1.nl2( e )} );
                return({"__xst" : __xer});
            }
            let tableau_des_commentaires_js=[];
            let obj=null;
            try{
                obj=parseur_javascript.parse( données.__xva['cht_genere_source'] , {"ecmaVersion" : 'latest' ,"sourceType" : 'module' ,"ranges" : false ,"onComment" : tableau_des_commentaires_js} );
            }catch(e){
                if(e.message){
                    let tt=e.message.substr( e.message.indexOf( 'Unexpected token ' ) + 17 );
                    let lig_col=null;
                    /* const text = "anything(aa:bb)otherthing"; */
                    const regex=/(?<=\()(\w+):(\w+)(?=\))/;
                    const match=tt.match( regex );
                    if(match && this.__gi1.est_num( match[1] ) && this.__gi1.est_num( match[2] )){
                        lig_col=[parseInt( match[1] , 10 ),parseInt( match[2] , 10 )];
                    }
                    this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + ' <br />erreur dans le javascript :' + e.message} );
                }
                return({"__xst" : __xer});
            }
            /*
              =============================================================================================
              transformation de l'ast du js en rev 
            */
            let obj1=this.#objet_conversion_ast_js_vers_rev.traite_ast( obj.body , tableau_des_commentaires_js , {} );
            if(obj1.__xst !== __xsu){
                /* this.__gi1.__rev1.empiler _ erreur( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2()} ); */
                this.__gi1.__xsi[__xer].push( ' erreur de transformation du js en rev ' + chi_id_source + '[' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            /*
              =============================================================================================
              on transforme le ast du js en rev 
            */
            let obj2=this.__gi1.__rev1.rev_tm( obj1.__xva );
            if(obj2.__xst !== __xsu){
                this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2()} );
                return({"__xst" : __xer});
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
                                                    vv_liste_des_methodes+='m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_methode_menu),valeur(valeur_constante(' + mat1[m + 1][1] + ')))))';
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
        this.__gi1.ajoute_les_evenements_aux_boutons();
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
            return({"__xst" : __xer ,"__xme" : 'champ vide' + __gi1.nl2( e )});
        }
        let chi_id_autorisation=parseInt( document.getElementById( champ ).value );
        if(isNaN( chi_id_autorisation )){
            return({"__xst" : __xer ,"__xme" : 'champ vide' + __gi1.nl2( e )});
        }
        this.__gi1.envoyer_un_message_au_worker( {"__xac" : 'pm1(m1(n1(' + this.moi + '),f1(recupere_methodes1(chi_id_autorisation(' + chi_id_autorisation + ')))))'} );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    f1( mat , d , le_message_du_serveur=null ){
        switch (mat[d][1]){
            case 'xxxxx' :
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
            this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(page_creer1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + '" >' + this.__gi1.les_svg.nouveau_document + '</div>';
        }
        /*
          pré chargement du module externe acorn car on peut en avoir besoin
          lors de la modification d'un menu
        */
        this.__gi1.charger_script_dynamique( '/f0?n0=bibliotheques_externes/acorn1_c.js' );
        this.#objet_conversion_ast_js_vers_rev=new w_ast_js_vers_rev1( '#objet_conversion_ast_js_vers_rev' , __gi1 );
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
        if(fo1['cht_libelle_menu'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "libelle" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_libelle_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_titre_menu'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "titre" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_titre_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_autorisation_menu'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "autorisation" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_autorisation_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_methode_menu'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "methode" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_methode_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['cht_condition_menu'] !== null && fo1['cht_condition_menu'] !== ''){
            let obj1=this.__gi1.__rev1.rev_tm( fo1['cht_condition_menu'] );
            if(obj1.__xst !== __xsu){
                this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu de "condition" n\'est pas dans un format rev valide'} );
                this.__gi1.affiche_les_messages();
                this.__gi1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'cht_condition_menu' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        if(fo1['cht_initialisation_menu'] !== null && fo1['cht_initialisation_menu'] !== ''){
            let obj1=this.__gi1.__rev1.rev_tm( fo1['cht_initialisation_menu'] );
            if(obj1.__xst !== __xsu){
                this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu de "initialisation" n\'est pas dans un format rev valide'} );
                this.__gi1.affiche_les_messages();
                this.__gi1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'cht_initialisation_menu' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        /* conversion des données numériques début */
        fo1['chi_id_menu']=fo1['chi_id_menu'] === '' ? ( null ) : ( parseInt( fo1['chi_id_menu'] , 10 ) );
        fo1['chx_autorisation_menu']=fo1['chx_autorisation_menu'] === '' ? ( null ) : ( parseInt( fo1['chx_autorisation_menu'] , 10 ) );
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
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_menu'] , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>libelle</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.cht_libelle_menu'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__gi1.__fnt1.boutons_edition1( 'cht_libelle_menu' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  id="cht_libelle_menu" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__gi1.fi2( enreg['T0.cht_libelle_menu'] );
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
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chp_titre_menu'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_titre_menu"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( enreg['T0.chp_titre_menu'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_titre_menu' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>autorisation</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chx_autorisation_menu'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="hidden" value="';
        o1+=enreg['T0.chx_autorisation_menu'];
        o1+='"  id="chx_autorisation_menu" />';
        o1+='        <span id="chx_autorisation_menu_libelle">';
        o1+='(' + enreg['T0.chx_autorisation_menu'] + ') ';
        o1+=this.__gi1.fi2( enreg['T1.chp_nom_autorisation'] );
        o1+='</span>';
        o1+=this.__gi1.lien_parent( 'autorisations1' , 'chx_autorisation_menu' , 'chx_autorisation_menu_libelle' );
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
        if(enreg['T0.chp_methode_menu'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div style="display:inline-block;" class="rev_bouton yy__4" data-rev_click="m1(n1(' + this.moi + '),f1(affiche_methodes(champ(chx_autorisation_menu))))" title="méthodes">Méthodes</div>';
        o1+='        <div style="display:inline-block;" id="vv_liste_des_methodes"></div>';
        o1+='        <br />';
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_methode_menu"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( enreg['T0.chp_methode_menu'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_methode_menu' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>condition</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.cht_condition_menu'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__gi1.__fnt1.boutons_rev3( 'cht_condition_menu' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  data-editeur1="rev"  id="cht_condition_menu" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__gi1.fi2( enreg['T0.cht_condition_menu'] );
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
        if(enreg['T0.cht_condition_js_menu'] === undefined){
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
        o1+=this.__gi1.__fnt1.boutons_edition1( 'cht_condition_js_menu' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  data-editeur1="source_editeur1"  id="cht_condition_js_menu" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__gi1.fi2( enreg['T0.cht_condition_js_menu'] );
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
        if(enreg['T0.cht_initialisation_menu'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__gi1.__fnt1.boutons_rev3( 'cht_initialisation_menu' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  data-editeur1="rev"  id="cht_initialisation_menu" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__gi1.fi2( enreg['T0.cht_initialisation_menu'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_menu" value="' + enreg['T0.chi_id_menu'] + '">';
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
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_menu'] , this.moi );
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
        o1+='            <textarea disabled id="cht_libelle_menu" rows="2"  cols="50" >' + this.__gi1.fi2( enreg['T0.cht_libelle_menu'] ) + '</textarea>';
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
        o1+='      <input disabled  type="text" id="chp_titre_menu"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( enreg['T0.chp_titre_menu'] ) + '"   />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>autorisation</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=enreg['T0.chx_autorisation_menu'];
        o1+='"  id="chx_autorisation_menu" />';
        o1+='        <span>';
        o1+='(' + enreg['T0.chx_autorisation_menu'] + ') ';
        o1+=this.__gi1.fi2( enreg['T1.chp_nom_autorisation'] );
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
        o1+='      <input disabled  type="text" id="chp_methode_menu"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( enreg['T0.chp_methode_menu'] ) + '"   />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>condition</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea disabled id="cht_condition_menu" rows="2"  cols="50" >' + this.__gi1.fi2( enreg['T0.cht_condition_menu'] ) + '</textarea>';
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
        o1+='            <textarea disabled id="cht_condition_js_menu" rows="2"  cols="50" >' + this.__gi1.fi2( enreg['T0.cht_condition_js_menu'] ) + '</textarea>';
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
        o1+='            <textarea disabled id="cht_initialisation_menu" rows="2"  cols="50" >' + this.__gi1.fi2( enreg['T0.cht_initialisation_menu'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_menu" value="' + enreg['T0.chi_id_menu'] + '" />';
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
        if(fo1['chp_titre_menu'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "titre" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_titre_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_autorisation_menu'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "autorisation" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_autorisation_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_methode_menu'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "methode" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_methode_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['cht_libelle_menu'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "libelle" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_libelle_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['chx_autorisation_menu']=fo1['chx_autorisation_menu'] === '' ? ( null ) : ( parseInt( fo1['chx_autorisation_menu'] , 10 ) );
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
        o1+='      <span>titre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="64"   maxlength="64"  id="chp_titre_menu" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_titre_menu' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_titre_menu'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_titre_menu' );
        o1+='    </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>autorisation</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input ';
        o1+=' id="chx_autorisation_menu" ';
        o1+=' type="hidden" ';
        o1+=' value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_autorisation_menu' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chx_autorisation_menu'] );
        }else{
            o1+='';
        }
        o1+='"';
        o1+=' />';
        o1+='        <span id="chx_autorisation_menu_libelle">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_autorisation_menu' )){
            if(dupliquer['T0.chx_autorisation_menu'] === null){
                o1+='*indéfini';
            }else{
                o1+='(' + dupliquer['T0.chx_autorisation_menu'] + ') ';
                o1+=this.__gi1.fi2( dupliquer['T1.chp_nom_autorisation'] );
            }
        }else{
            o1+='*indéfini';
        }
        o1+='</span>';
        /*
          ;
        */
        o1+=this.__gi1.lien_parent( 'autorisations1' , 'chx_autorisation_menu' , 'chx_autorisation_menu_libelle' );
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
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="64"   maxlength="64"  id="chp_methode_menu" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_methode_menu' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_methode_menu'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_methode_menu' );
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
        o1+='              ' + this.__gi1.__fnt1.boutons_edition1( 'cht_libelle_menu' );
        o1+='            </div>\r\n';
        o1+='            <textarea  id="cht_libelle_menu" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_libelle_menu' )){
            o1+=this.__gi1.fi2( dupliquer['T0.cht_libelle_menu'] );
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
        o1+='      <span>condition</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + this.__gi1.__fnt1.boutons_rev3( 'cht_condition_menu' );
        o1+='            </div>\r\n';
        o1+='            <textarea  data-editeur1="rev"  id="cht_condition_menu" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_condition_menu' )){
            o1+=this.__gi1.fi2( dupliquer['T0.cht_condition_menu'] );
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
        o1+='              ' + this.__gi1.__fnt1.boutons_rev3( 'cht_initialisation_menu' );
        o1+='            </div>\r\n';
        o1+='            <textarea  data-editeur1="rev"  id="cht_initialisation_menu" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_initialisation_menu' )){
            o1+=this.__gi1.fi2( dupliquer['T0.cht_initialisation_menu'] );
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
                    o1+='          <input ';
                    o1+='           type="text" id="' + i + '" ';
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
    aller_a_la_page( mat , d , ref_zone=null , num_page=null ){
        return(this.__gi1.aller_a_la_page( mat , d , this.moi , this.fonction_liste , this.filtres , ref_zone , num_page ));
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
                parametres+=' id1(' + elem['T0.chi_id_menu'] + ')';
                let libelle1='';
                libelle1+='(' + elem['T0.chi_id_menu'] + ') ';
                libelle1+=elem['T0.chp_titre_menu'] ? ( ' , ' + elem['T0.chp_titre_menu'] ) : ( '' );
                parametres+=' libelle1(\'' + this.__gi1.fi1( libelle1 ) + '\')';
                parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + parametres + '">=></div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_menu'] !== null){
                    lst+=elem['T0.chi_id_menu'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.cht_libelle_menu'] !== null){
                    lst+=elem['T0.cht_libelle_menu'].substr( 0 , 100 ).replace( />/g , '>' ).replace( /</g , '<' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_titre_menu'] !== null){
                    lst+=elem['T0.chp_titre_menu'].substr( 0 , 100 ).replace( />/g , '>' ).replace( /</g , '<' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chx_autorisation_menu'] !== null){
                    lst+=elem['T0.chx_autorisation_menu'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T1.chp_nom_autorisation'] !== null){
                    lst+=elem['T1.chp_nom_autorisation'].substr( 0 , 100 ).replace( />/g , '>' ).replace( /</g , '<' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_methode_menu'] !== null){
                    lst+=elem['T0.chp_methode_menu'].substr( 0 , 100 ).replace( />/g , '>' ).replace( /</g , '<' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T1.chx_acces_autorisation'] !== null){
                    lst+=elem['T1.chx_acces_autorisation'];
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
                o1+='<th>libelle</th>';
                o1+='<th>titre</th>';
                o1+='<th>autorisation</th>';
                o1+='<th>nom autorisation</th>';
                o1+='<th>methode</th>';
                o1+='<th>acces autorisation</th>';
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
                lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_menu(' + elem['T0.chi_id_menu'] + ')))))">' + this.__gi1.les_svg.poubelle + '</div>';
                lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_menu(' + elem['T0.chi_id_menu'] + ')))))">' + this.__gi1.les_svg.editer + '</div>';
                lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_menu(' + elem['T0.chi_id_menu'] + ')))))">' + this.__gi1.les_svg.dupliquer + '</div>';
                lst+='</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_menu'] !== null){
                    lst+='<b>(' + elem['T0.chi_id_menu'] + ')</b>';
                }
                if(elem['T3.chp_nom_source'] !== null){
                    lst+='<br />' + elem['T3.chp_nom_source'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                    lst+='(' + elem['T1.chx_source_autorisation'] + ')';
                }
                if(elem['T0.chp_methode_menu'] !== null){
                    lst+='<br />' + this.__gi1.fi2( elem['T0.chp_methode_menu'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chx_autorisation_menu'] !== null){
                    lst+=elem['T0.chx_autorisation_menu'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.chp_titre_menu'] !== null){
                    lst+='<br /><b class="yy__3">' + this.__gi1.fi2( elem['T0.chp_titre_menu'] ) + '</b>';
                }
                if(elem['T0.cht_libelle_menu'] !== null){
                    lst+='<br />' + this.__gi1.fi2( elem['T0.cht_libelle_menu'].substr( 0 , 100 ) );
                }
                if(elem['T0.cht_condition_menu'] !== null){
                    lst+='<hr />' + this.__gi1.fi2( elem['T0.cht_condition_menu'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T1.chx_acces_autorisation'] !== null){
                    lst+=elem['T1.chx_acces_autorisation'];
                }
                if(elem['T2.chp_nom_acces'] !== null){
                    lst+='<br />' + this.__gi1.fi2( elem['T2.chp_nom_acces'] );
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
                o1+='<th>id,nom source,titre,méthode</th>';
                o1+='<th>autorisation</th>';
                o1+='<th style="max-width:360px;">titre/libelle/condition</th>';
                o1+='<th>id acces / nom</th>';
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
export{menus1 as menus1};