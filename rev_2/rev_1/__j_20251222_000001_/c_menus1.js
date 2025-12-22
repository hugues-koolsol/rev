import {z_ast_js_vers_rev1} from './z_ast_js_vers_rev1.js';
import {z_ast_phpparseur_vers_rev1} from './z_ast_phpparseur_vers_rev1.js';
import {z_rev_vers_php1} from './z_rev_vers_php1.js';
class c_menus1{
    /*
      ref_select=146
      ref_insert=147
      ref_delete=149
      ref_update=148
      ref_liste_ecran=145
    */
    moi='c_menus1';
    DUN_DUNE_ELEMENT_GERE='d\'un menu';
    LISTE_DES_ELEMENTS_GERES='liste des menus';
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "$__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '$__num_page' ,"taille" : 8} ,
            "T0_chi_id_menu" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_cht_libelle_menu" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'libelle' ,"taille" : 8} ,
            "T0_chp_titre_menu" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'titre' ,"taille" : 8} ,
            "T0_chx_autorisation_menu" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'autorisation' ,"taille" : 8} ,
            "T1_chp_nom_autorisation" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom autorisation' ,"taille" : 8} ,
            "T0_chp_methode_menu" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'methode' ,"taille" : 8} ,
            "T1_chx_acces_autorisation" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'acces autorisation' ,"taille" : 8}
        } ,
        "sous_liste1" : {
            "$__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '$__num_page' ,"taille" : 8} ,
            "T0_chi_id_menu" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_cht_libelle_menu" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'libelle' ,"taille" : 8} ,
            "T0_chp_titre_menu" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'titre' ,"taille" : 8} ,
            "T0_chx_autorisation_menu" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'autorisation' ,"taille" : 8} ,
            "T1_chp_nom_autorisation" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom autorisation' ,"taille" : 8} ,
            "T0_chp_methode_menu" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'methode' ,"taille" : 8} ,
            "T1_chx_acces_autorisation" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'acces autorisation' ,"taille" : 8}
        }
    };
    fonction_liste='liste1';
    $filtres={};
    vv_ecran_liste_boutons_avant='';
    #objet_conversion_ast_js_vers_rev=null;
    #objet_conversion_astphpparseur_vers_rev1=null;
    #objet_conversion_rev_vers_php=null;
    #parseur_phpparseur=null;
    /*
      =============================================================================================================
    */
    constructor( mat , d ){
        __gi1.charger_script_dynamique( __gi1.__version + '/bibliotheques_externes/acorn.js' );
        __gi1.charger_script_dynamique( __gi1.__version + '/bibliotheques_externes/php_parser.js' );
        this.#objet_conversion_ast_js_vers_rev=new z_ast_js_vers_rev1( '#objet_conversion_ast_js_vers_rev' , __gi1.__rev1 );
        /*
          phpparseur
        */
        this.#objet_conversion_astphpparseur_vers_rev1=new z_ast_phpparseur_vers_rev1( '#objet_conversion_astphpparseur_vers_rev1' , __gi1.__rev1 , null );
        this.#objet_conversion_rev_vers_php=new z_rev_vers_php1( '#objet_conversion_rev_vers_php' , __gi1.__rev1 , null );
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
        }
    }
    /*
      =============================================================================================================
    */
    php_sans_tag_vers_rev( mat , d ){
        if(this.#parseur_phpparseur === null){
            try{
                this.#parseur_phpparseur=window.PhpParser.Engine( {"parser" : {"extractDoc" : true} ,"ast" : {"withPositions" : true}} );
            }catch(e){
                return({"__xst" : __xer});
            }
        }
        let zone_source='';
        let zone_resultat='';
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'zone_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_source=mat[i + 1][1];
            }else if(mat[i][1] === 'zone_resultat' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_resultat=mat[i + 1][1];
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            let txt='<?php\r\n' + document.getElementById( zone_source ).value;
            let ast_de_php='';
            try{
                ast_de_php=this.#parseur_phpparseur.parseCode( txt );
            }catch(e1){
                if(e1.message.indexOf( 'on line ' )){
                    let tt=e1.message.substr( e1.message.indexOf( 'on line ' ) + 8 );
                    console.log( tt );
                    if(__gi1.est_num( tt )){
                        return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message ,"ligne" : parseInt( tt , 10 )} ));
                    }else{
                        return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message} ));
                    }
                }else{
                    return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message} ));
                }
            }
            try{
                let obj1=this.#objet_conversion_astphpparseur_vers_rev1.traite_ast( ast_de_php , {"nettoyer_html" : false} );
                if(obj1.__xst === __xsu){
                    document.getElementById( zone_resultat ).value=obj1.__xva;
                    return({"__xst" : __xsu});
                }else{
                    let cumul_message=__xsu;
                    if(obj1.hasOwnProperty( 'cumul_message' ) && obj1.cumul_message === __xer){
                        cumul_message=__xer;
                        return({"__xst" : __xer ,"__xme" : __gi1.nl2() + '<br />erreur lors de la convertion du php' , cumul_message  , cumul_message });
                    }else{
                        return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.nl2() + '<br />erreur lors de la convertion du php'} ));
                    }
                }
            }catch(e2){
                return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.nl2( e2 ) + '<br />erreur lors de la convertion du php'} ));
            }
        }
        return({"__xst" : __xsu});
        debugger;
        /*
          o1+='<div class="rev_bouton yy__1" data-rev_click="';
          o1+='m1(n1('+this.moi+'ecran_rev_vers_php1),f1(php1_vers_rev(zone_source(cht_condition_php_menu),zone_resultat(cht_condition_menu),options(nettoyer_html(1)))))';
          o1+='" title="convertir en rev par php_parseur">↥p-&gt;r↥</div>';
        */
    }
    /*
      =============================================================================================================
    */
    recupere_methodes1( mat , d , données ){
        let vv_liste_des_methodes='';
        if(données.__xva.hasOwnProperty( 'class_methods' )){
            for(let i in données.__xva.class_methods){
                vv_liste_des_methodes+='<div ';
                vv_liste_des_methodes+=' class="rev_bouton"';
                vv_liste_des_methodes+=' data-rev_click="';
                vv_liste_des_methodes+='m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_methode_menu),valeur(valeur_constante(' + données.__xva.class_methods[i] + ')))))';
                vv_liste_des_methodes+='"';
                vv_liste_des_methodes+='>' + données.__xva.class_methods[i] + '</div>';
            }
        }else if(données.__xva.hasOwnProperty( 'chp_nom_source' )){
            /*
              c'est un js, il faut le traiter dynamiquement
            */
            let parseur_javascript=null;
            try{
                parseur_javascript=window.acorn.Parser;
            }catch(e){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de chargement du parseur js ' + __gi1.__m_rev1.nl2( e )} );
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
                    if(match && __gi1.est_num( match[1] ) && __gi1.est_num( match[2] )){
                        lig_col=[parseInt( match[1] , 10 ),parseInt( match[2] , 10 )];
                    }
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + ' <br />erreur dans le javascript :' + e.message} );
                }
                return({"__xst" : __xer});
            }
            /* on transforme le ast du js en rev */
            let obj1=this.#objet_conversion_ast_js_vers_rev.traite_ast( obj.body , tableau_des_commentaires_js , {} );
            if(obj1.__xst !== __xsu){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} );
                return({"__xst" : __xer});
            }
            let obj2=__gi1.__rev1.rev_tm( obj1.__xva );
            if(obj2.__xst !== __xsu){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} );
                return({"__xst" : __xer});
            }
            let mat1=obj2.__xva;
            let l01=mat1.length;
            /*#
              importer(bibliotheque_spécifiée(z_xxx),provenance('./z_xxx.js')),
              definition_de_classe(
                  nom_classe(yyy),
                  contenu(
                      méthode(
                          definition(nom(zzz),argument(reponse)),
                      )
                  )
              )
            */
            for( let i=1 ; i < l01 ; i=mat1[i][12] ){
                if(mat1[i][1] === 'definition_de_classe' && mat1[i][2] === 'f'){
                    for( let j=i + 1 ; j < l01 ; j=mat1[j][12] ){
                        if(mat1[j][1] === 'contenu' && mat1[j][2] === 'f'){
                            for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                                if(mat1[k][1] === 'méthode' && mat1[k][2] === 'f'){
                                    for( let l=k + 1 ; l < l01 ; l=mat1[l][12] ){
                                        if(mat1[l][1] === 'definition' && mat1[l][2] === 'f'){
                                            for( let m=l + 1 ; m < l01 ; m=mat1[m][12] ){
                                                if(mat1[m][1] === 'nom' && mat1[m][2] === 'f' && mat1[m][8] === 1 && mat1[m + 1][2] === 'c'){
                                                    vv_liste_des_methodes+='<div ';
                                                    vv_liste_des_methodes+=' class="rev_bouton"';
                                                    vv_liste_des_methodes+=' data-rev_click="';
                                                    vv_liste_des_methodes+='m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_methode_menu),valeur(valeur_constante(' + mat1[m + 1][1] + ')))))';
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
        __gi1.ajoute_les_evenements_aux_boutons();
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
        __gi1.envoyer_un_message_au_worker( {"__xac" : 'pm1(m1(n1(' + this.moi + '),f1(recupere_methodes1(chi_id_autorisation(' + chi_id_autorisation + ')))))'} );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    f1( mat , d , le_message_du_serveur=null ){
        switch (mat[d][1]){
            case 'xxxxx' : break;
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
        if(fo1['cht_libelle_menu'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "libelle" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_libelle_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_titre_menu'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "titre" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_titre_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_autorisation_menu'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "autorisation" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_autorisation_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['cht_condition_menu'] !== null && fo1['cht_condition_menu'] !== ''){
            let obj1=__gi1.__rev1.rev_tm( fo1['cht_condition_menu'] );
            if(obj1.__xst !== __xsu){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu de "condition" n\'est pas dans un format rev valide'} );
                __gi1.affiche_les_messages();
                __gi1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'cht_condition_menu' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        if(fo1['chp_methode_menu'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "methode" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_methode_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
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
        o1+='      <span>libelle</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_libelle_menu'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=__gi1.__fnt1.boutons_edition1( 'cht_libelle_menu' );
        o1+='</div>\r\n';
        var sty='';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  id="cht_libelle_menu" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_libelle_menu'] );
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
        o1+='            <textarea id="cht_initialisation_menu" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='      <div class="yy_edition_libelle1">';
        o1+='          <span>titre</span>';
        o1+='      </div>';
        o1+='      <div class="yy_edition_valeur1">';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_titre_menu'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='          <input  type="text" id="chp_titre_menu"  size="64"   maxlength="64"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_titre_menu'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='          <div style="display:inline-flex;">';
        o1+=__gi1.__fnt1.boutons_edition_text( 'chp_titre_menu' );
        o1+='          </div>';
        o1+='      </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>autorisation</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_autorisation_menu'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="hidden" value="';
        o1+=le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_autorisation_menu'];
        o1+='"  id="chx_autorisation_menu" />';
        o1+='        <span id="chx_autorisation_menu_libelle">';
        o1+='(' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_autorisation_menu'] + ') ';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T2.chp_nom_acces'] + ' ' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T3.chp_nom_source'] );
        o1+='        </span>';
        o1+=__gi1.lien_parent( 'c_autorisations1' , 'chx_autorisation_menu' , 'chx_autorisation_menu_libelle' );
        o1+='        <div class="rev_bouton yy__4" data-rev_click="m1(n1(' + this.moi + '),f1(affiche_methodes(champ(chx_autorisation_menu))))" title="méthodes">Méthodes</div>';
        o1+='        <div id="vv_liste_des_methodes"></div>';
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
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_methode_menu'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input  type="text" id="chp_methode_menu"  size="64"   maxlength="64"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_methode_menu'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='     <div style="display:inline-flex;">';
        o1+=__gi1.__fnt1.boutons_edition_text( 'chp_methode_menu' );
        o1+='    </div>';
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
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_condition_menu'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=__gi1.__fnt1.boutons_rev3( 'cht_condition_menu' );
        o1+='</div>\r\n';
        var sty='';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_condition_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea data-editeur1="rev"  id="cht_condition_menu" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_condition_menu'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>condition php</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_condition_php_menu'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+='  <div class="rev_bouton yy__3" data-rev_click="';
        o1+='    m1(n1(ecran_rev_vers_php1),f1(rev_vers_php1(zone_source(cht_condition_menu),zone_resultat(cht_condition_php_menu))))';
        o1+='" title="convertir en php">↧r-&gt;p↧</div>';
        o1+='  <div class="rev_bouton yy__1" data-rev_click="';
        o1+='    m1(n1(ecran_rev_vers_php1),f1(php1_vers_rev(zone_source(cht_condition_php_menu),zone_resultat(cht_condition_menu),options(nettoyer_html(0)))))';
        o1+='" title="convertir en rev par php_parseur">↥p-&gt;r↥</div>';
        o1+=__gi1.__fnt1.boutons_edition1( 'cht_condition_php_menu' );
        o1+='</div>\r\n';
        var sty='';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea data-editeur1="source_editeur1" id="cht_condition_php_menu" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_condition_php_menu'] );
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
        o1+='<div>\r\n';
        o1+=__gi1.__fnt1.boutons_rev3( 'cht_initialisation_menu' );
        o1+='</div>\r\n';
        var sty='';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea id="cht_initialisation_menu" data-editeur1="rev" rows="10"  cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_initialisation_menu'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_menu" value="' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chi_id_menu'] + '">';
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
        o1+='      <div class="yy_edition_libelle1">';
        o1+='          <span>libelle</span>';
        o1+='      </div>';
        o1+='      <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='          <textarea disabled id="cht_libelle_menu" rows="2"  cols="50" >' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.cht_libelle_menu'] ) + '</textarea>';
        o1+='        </div>';
        o1+='      </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>titre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_titre_menu"  size="64"   maxlength="64"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_titre_menu'] ) + '"   />';
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
        o1+=le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chx_autorisation_menu'];
        o1+='"  id="chx_autorisation_menu" />';
        o1+='        <span>';
        o1+='(' + le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chx_autorisation_menu'] + ') ';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T1.chp_nom_autorisation'] );
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
        o1+='      <input disabled  type="text" id="chp_methode_menu"  size="64"   maxlength="64"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_methode_menu'] ) + '"   />';
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
        o1+='            <textarea disabled id="cht_condition_menu" rows="2"  cols="50" >' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.cht_condition_menu'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>condition php</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea disabled id="cht_condition_php_menu" rows="2"  cols="50" >' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.cht_condition_php_menu'] ) + '</textarea>';
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
        o1+='            <textarea disabled id="cht_initialisation_menu" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.cht_initialisation_menu'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_menu" value="' + le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chi_id_menu'] + '" />';
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
        if(fo1['cht_libelle_menu'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "libelle" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_libelle_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_titre_menu'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "titre" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_titre_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_autorisation_menu'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "autorisation" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_autorisation_menu' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_methode_menu'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "methode" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_methode_menu' ).focus();
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
        o1+='      <span>titre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="64"   maxlength="64"  id="chp_titre_menu" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_titre_menu' )){
            o1+=__gi1.fi2( dupliquer['T0.chp_titre_menu'] );
        }else{
            o1+='';
        }
        o1+='"     />';
        o1+='      <div style="display:inline-flex;">';
        o1+=__gi1.__fnt1.boutons_edition_text( 'chp_titre_menu' );
        o1+='      </div>';
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
        o1+='        <input ';
        o1+=' id="chx_autorisation_menu" ';
        o1+=' type="hidden" ';
        o1+=' value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_autorisation_menu' )){
            o1+=__gi1.fi2( dupliquer['T0.chx_autorisation_menu'] );
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
                o1+=' ' + __gi1.fi2( dupliquer['T2.chp_nom_acces'] );
                o1+=' ' + __gi1.fi2( dupliquer['T3.chp_nom_source'] );
            }
        }else{
            o1+='*indéfini';
        }
        o1+='</span>';
        /*
        */
        o1+=__gi1.lien_parent( 'c_autorisations1' , 'chx_autorisation_menu' , 'chx_autorisation_menu_libelle' );
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
            o1+=__gi1.fi2( dupliquer['T0.chp_methode_menu'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=__gi1.__fnt1.boutons_edition_text( 'chp_methode_menu' );
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
        o1+='              ' + __gi1.__fnt1.boutons_edition1( 'cht_libelle_menu' );
        o1+='            </div>\r\n';
        o1+='            <textarea  id="cht_libelle_menu" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_libelle_menu' )){
            o1+=__gi1.fi2( dupliquer['T0.cht_libelle_menu'] );
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
        o1+='              ' + __gi1.__fnt1.boutons_rev3( 'cht_condition_menu' );
        o1+='            </div>\r\n';
        o1+='            <textarea  data-editeur1="rev"  id="cht_condition_menu" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_condition_menu' )){
            o1+=__gi1.fi2( dupliquer['T0.cht_condition_menu'] );
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
        o1+='      <span>condition php</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + __gi1.__fnt1.boutons_edition1( 'cht_condition_php_menu' );
        o1+='            </div>\r\n';
        o1+='            <textarea  data-editeur1="source_editeur1"  id="cht_condition_php_menu" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_condition_php_menu' )){
            o1+=__gi1.fi2( dupliquer['T0.cht_condition_php_menu'] );
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
        o1+='              ' + __gi1.__fnt1.boutons_rev3( 'cht_initialisation_menu' );
        o1+='            </div>\r\n';
        o1+='            <textarea  data-editeur1="rev"  id="cht_initialisation_menu" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_initialisation_menu' )){
            o1+=__gi1.fi2( dupliquer['T0.cht_initialisation_menu'] );
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
                    o1+='        <div>\r\n';
                    o1+='          <input ';
                    o1+='           type="text" id="' + i + '" ';
                    o1+='           value="' + __gi1.fi1( this.$filtres[this.fonction_liste][i] ) + '" ';
                    o1+='           size="' + this.tableau_des_filtres[this.fonction_liste][i].taille + '" ';
                    o1+='           maxlength="64" ';
                    o1+='           autocapitalize="off" ';
                    o1+='           style="' + bck + '" />';
                    if(this.$filtres[this.fonction_liste][i] && this.$filtres[this.fonction_liste][i] !== ''){
                        o1+='            <div class="rev_bouton yy__4" data-rev_click="';
                        o1+='m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(' + i + '),valeur(valeur_constante()))))';
                        o1+='">x</div>';
                    }
                    o1+='        </div>\r\n';
                    o1+='    </div>';
                }
            }
            o1+='   <div>';
            o1+='     <div>';
            o1+='       <span>&nbsp;</span>';
            o1+='     </div>';
            o1+='     <div>';
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
                $parametres+=' id1(' + elem['T0.chi_id_menu'] + ')';
                let libelle1='';
                libelle1+='(' + elem['T0.chi_id_menu'] + ') ';
                libelle1+=elem['T0.chp_titre_menu'] ? ( ' , ' + elem['T0.chp_titre_menu'] ) : ( '' );
                $parametres+=' libelle1(\'' + __gi1.fi1( libelle1 ) + '\')';
                $parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + $parametres + '">=&gt;</div>';
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
                    lst+=elem['T0.cht_libelle_menu'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_titre_menu'] !== null){
                    lst+=elem['T0.chp_titre_menu'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
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
                if(elem['T0.chp_methode_menu'] !== null){
                    lst+=elem['T0.chp_methode_menu'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
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
                o1+='<th>methode</th>';
                o1+='<th>acces autorisation</th>';
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
                lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_menu(' + elem['T0.chi_id_menu'] + ')))))">' + __gi1.les_svg.poubelle + '</div>';
                lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_menu(' + elem['T0.chi_id_menu'] + ')))))">' + __gi1.les_svg.editer + '</div>';
                lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_menu(' + elem['T0.chi_id_menu'] + ')))))">' + __gi1.les_svg.dupliquer + '</div>';
                lst+='</div>';
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
                    if(elem['T0.cht_libelle_menu'].indexOf( '<svg ' ) >= 0){
                        lst+=elem['T0.cht_libelle_menu'].replace( /<svg / , '<svg style="width:25px;" data-repere="c_menu.js" class="rev_bouton" ' );
                    }else{
                        lst+=__gi1.fi2( elem['T0.cht_libelle_menu'] );
                    }
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_titre_menu'] !== null){
                    lst+=__gi1.fi2( elem['T0.chp_titre_menu'] );
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
                if(elem['T0.chp_methode_menu'] !== null){
                    lst+=__gi1.fi2( elem['T0.chp_methode_menu'] );
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
                o1+='<th>methode</th>';
                o1+='<th>acces autorisation</th>';
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
export{c_menus1 as c_menus1};