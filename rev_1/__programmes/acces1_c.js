import {_tri_arbre1} from '/f0?n0=_tri_arbre1_c.js';
class acces1{
    /*
      ref_liste_ecran=1135;
      ref_select=1136;
      ref_insert=1137;
      ref_update=1138;
      ref_delete=1139;
    */
    moi='acces1';
    DUN_DUNE_ELEMENT_GERE='d\'un accès';
    LISTE_DES_ELEMENTS_GERES='liste des accès';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"nom" : '__num_page' ,"taille" : 9 ,"défaut" : 0 ,"masqué" : true} ,
            "T0_chi_id_acces" : {"nom" : 'id' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chp_nom_acces" : {"nom" : 'nom' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_che_actif_acces" : {"nom" : 'actif' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false ,"genre" : 5} ,
            "T0_chx_groupe_acces" : {"nom" : 'id groupe' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T1_chp_nom_groupe" : {"nom" : 'groupe' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chx_metier_acces" : {"nom" : 'id métier' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T2_chp_nom_metier" : {"nom" : 'métier' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false}
        }
    };
    /*
    */
    filtres={};
    __variables_module={};
    vv_ecran_liste_boutons_avant='';
    #reference_arbre_du_menu=null;
    _tri_arbre1=null;
    /*
      =============================================================================================================
    */
    enregister_le_menu_de_l_acces2( mat , d ){
        this.__ig1.fermer_la_sous_fenetre( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    enregistrer_le_menu2( evenement , reference_arbre ){
        let id_original=reference_arbre.reference_zone_triable.getAttribute( 'data-id_original_pour_tri' );
        let chi_id_acces=parseInt( document.getElementById( id_original ).getAttribute( 'data-chi_id_acces' ) , 10 );
        let le_json=JSON.stringify( reference_arbre.arbre ).replace( /rev_svg_dans_menu0/g , 'rev_svg_dans_menu1' );
        let le_html=document.getElementById( id_original ).innerHTML.replace( /rev_svg_dans_menu0/g , 'rev_svg_dans_menu1' );
        let obj={
            "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(enregister_le_menu_de_l_acces2())))' ,
            "__xva" : {"chi_id_acces" : chi_id_acces ,"le_json" : le_json ,"le_html" : le_html}
        };
        this.__ig1.envoyer_un_colis_au_worker( obj );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    ajouter_une_branche_au_menu1( evenement , reference_arbre ){
        let id_original=reference_arbre.reference_zone_triable.getAttribute( 'data-id_original_pour_tri' );
        if(id_original === 'liste_des_menus'){
            let max=0;
            for( let i=0 ; i < reference_arbre.arbre.length ; i++ ){
                if(reference_arbre.arbre[i].id_interne > max){
                    max=reference_arbre.arbre[i].id_interne;
                }
            }
            max++;
            let a={
                "id_interne" : max ,
                "id_interne_parent" : 0 ,
                "replie" : 0 ,
                "contient_des_enfants" : 0 ,
                "contenu" : "nouvelle branche " + max ,
                "attributs" : {}
            };
            if(id_original === 'liste_des_menus'){
                a["attributs"]={"data-liste_des_menus" : 1};
            }
            reference_arbre.arbre.splice( 0 , 0 , a );
            reference_arbre.action_externe_sur_arbre( 'ajoute_branche' , reference_arbre.arbre );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modification_branche( mat , d ){
        let id_interne=0;
        let cle_aleatoire='';
        let indice=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if('id_interne' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_interne=parseInt( mat[i + 1][1] , 10 );
            }else if('cle_aleatoire' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                cle_aleatoire=mat[i + 1][1];
            }else if('indice' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                indice=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(id_interne > 0 && cle_aleatoire !== ''){
            let id_racine='liste_des_menus_' + cle_aleatoire;
            let les_elements=document.getElementById( id_racine ).querySelectorAll( '[data-id_interne="' + id_interne + '"]' );
            if(les_elements.length === 1){
                les_elements[0].innerHTML=document.getElementById( 'libelle_' + cle_aleatoire ).value;
                les_elements[0].setAttribute( 'data-separateur' , document.getElementById( 'separateur_' + cle_aleatoire ).value );
                les_elements[0].parentNode.setAttribute( 'data-separateur' , document.getElementById( 'separateur_' + cle_aleatoire ).value );
                les_elements[0].parentNode.setAttribute( 'data-contenu_original' , document.getElementById( 'libelle_' + cle_aleatoire ).value );
                this.#reference_arbre_du_menu.arbre[indice].contenu=document.getElementById( 'libelle_' + cle_aleatoire ).value;
                debugger;
                this.#reference_arbre_du_menu.arbre[indice].separateur=document.getElementById( 'separateur_' + cle_aleatoire ).value;
                /* obj.arbre[i].contenu=nouveau_nom; */
                /* reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre ); */
            }
        }
        document.getElementById( 'edition_de_la_branche' ).innerHTML='';
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    action_sur_tri_menu1( reference_arbre , obj ){
        console.log( 'dans action_sur_tri_menu1 ' , reference_arbre , obj );
        document.getElementById( 'edition_de_la_branche' ).innerHTML='';
        switch (obj.type_deplacement){
            case 'editer' :
                let trouvé=false;
                if(obj.id_original === 'liste_des_menus'){
                    for( let i=0 ; i < obj.arbre.length ; i++ ){
                        if(obj.id_cible === obj.arbre[i].id_interne){
                            let contenu_du_html='';
                            if(obj.arbre[i].attributs.hasOwnProperty( 'data-liste_des_menus' ) && obj.arbre[i].attributs['data-liste_des_menus'] == 1){
                                trouvé=true;
                                /*#
                                  let nouveau_nom=window.prompt( "nouveau nom ?" , obj.arbre[i].contenu );
                                  if(nouveau_nom){
                                      obj.arbre[i].contenu=nouveau_nom;
                                      reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre );
                                  }
                                */
                                let t="";
                                t+="libellé";
                                t+="<br />";
                                t+='<input type="text" id="libelle_' + reference_arbre.cle_aleatoire + '" value="' + obj.arbre[i].contenu + '" />';
                                t+="<br />";
                                t+="séparateur<br />";
                                t+='<input type="range" id="separateur_' + reference_arbre.cle_aleatoire + '" class="yy_ouinon" min="0" max="1" step="1" value="' + obj.arbre[i].separateur + '" />';
                                t+="<br />";
                                t+='<div class="rev_b_svg yy__3" data-rev_click="m1(n1(' + this.moi + '),f1(modification_branche(indice(' + i + '),id_interne(' + obj.arbre[i].id_interne + '),cle_aleatoire(' + reference_arbre.cle_aleatoire + '))))">modifier</div>';
                                document.getElementById( 'edition_de_la_branche' ).innerHTML=t;
                                this.__ig1.ajoute_les_evenements_aux_boutons();
                            }
                            break;
                        }
                    }
                }
                if(trouvé === false){
                    document.getElementById( 'edition_de_la_branche' ).innerHTML='Cette branche ne peut pas être éditée';
                }
                break;
                
            case 'supprimer' :
                /*
                  on ne peut supprimer que les branches qui ont été créées data-liste_des_menus
                */
                for( let i=0 ; i < obj.arbre.length ; i++ ){
                    if(obj.id_cible === obj.arbre[i].id_interne){
                        if(obj.arbre[i].attributs && obj.arbre[i].attributs['data-liste_des_menus'] == 1){
                            obj.arbre.splice( i , 1 );
                        }
                        break;
                    }
                }
                reference_arbre.action_externe_sur_arbre( 'supprimer_un_element' , obj.arbre );
                break;
                
            case 'dedans' :
                /* l'id_cible doit être une branche créée */
                for( let i=0 ; i < obj.arbre.length ; i++ ){
                    if(obj.id_cible === obj.arbre[i].id_interne){
                        if(obj.arbre[i].attributs
                               && obj.arbre[i].attributs['data-liste_des_menus'] == 1
                               && obj.arbre[i].attributs['data-separateur'] != 1
                        ){
                            reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre );
                        }else{
                            reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre_avant );
                        }
                        break;
                    }
                }
                break;
                
            case 'avant' : 
            case 'apres' : reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre );
                break;
            default: break;
        }
        console.log( reference_arbre , obj );
    }
    /*
      =============================================================================================================
    */
    recuperer_les_menus_d_un_acces( mat , d , ldds ){
        let chi_id_acces=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_acces' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_acces=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let o1='';
        o1+='<h1>tri des menus</h1>';
        o1+="<style>";
        o1+="#liste_des_menus_ancien li{margin-left:-25px;}";
        o1+="</style>";
        o1+='<div style="display:flex;flex-direction:row;justify-content: space-evenly;">';
        o1+='  <div style="">';
        o1+='    <ul id="liste_des_menus_ancien" data-chi_id_acces="' + chi_id_acces + '">';
        if(ldds.__xva['cht_parametres_acces'] !== ''
               && ldds.__xva['cht_parametres_acces'] !== null
               && ( typeof ldds.__xva['cht_parametres_acces'] === 'string'
                   || ldds.__xva['cht_parametres_acces'] instanceof String)
        ){
            o1+=ldds.__xva['cht_parametres_acces'].replace( /class="rev_svg_dans_menu0"/g , '' ).replace( /<svg /g , '<svg class="rev_svg_dans_menu0" ' );
        }
        o1+='    </ul>';
        o1+='  </div>';
        o1+='  <div style="">';
        o1+='    <ul id="liste_des_menus" data-chi_id_acces="' + chi_id_acces + '">';
        o1+=ldds.__xva.le_nouveau_html.replace( /class="rev_svg_dans_menu0"/g , '' ).replace( /<svg /g , '<svg class="rev_svg_dans_menu0"' );
        o1+='    </ul>';
        o1+='  </div>';
        o1+='  <div id="edition_de_la_branche"></div>';
        o1+='</div>';
        this.__ig1.affiche_sous_fenetre1( o1 );
        let id='liste_des_menus';
        let el=document.getElementById( id );
        let options={
            "hauteur_max_en_vh" : /* entre 20 et 80 */80 ,
            "largeur_max" : /* 'calc(100% - 50px)', */'400px' ,
            "afficher_le_bouton_supprimer" : 1 ,
            "class_du_bouton_supprimer" : 'rev_bouton yy__0' ,
            "fonction_appelee_apres_action" : this.action_sur_tri_menu1.bind( this ) ,
            "arborescent" : 1 ,
            "class_du_bouton_deplacer" : 'rev_bouton' ,
            "boutons_du_menu" : [] ,
            "class_du_bouton_menu" : 'rev_bouton' ,
            "class_du_bouton_replier" : 'rev_bouton yy__2'
        };
        options.boutons_du_menu.push( {"libelle" : '+' ,"fonction" : this.ajouter_une_branche_au_menu1} );
        options.boutons_du_menu.push( {"libelle" : '💾' ,"fonction" : this.enregistrer_le_menu2.bind( this )} );
        options['afficher_le_bouton_editer']=1;
        options['class_du_bouton_editer']='rev_bouton yy__3';
        this._tri_arbre1.construire_arbre( id , options );
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
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
        import( '/f0?n0=_tri_arbre1_c.js&__version=' + this.__ig1.__version ).then( ( m ) => {
                this._tri_arbre1=new m['_tri_arbre1']( this );
                this.#reference_arbre_du_menu=this._tri_arbre1;
        } );
        for(let i in this.tableau_des_filtres){
            this.filtres[i]={};
            for(let j in this.tableau_des_filtres[i]){
                this.filtres[i][j]=this.tableau_des_filtres[i][j].défaut;
            }
        }
        let aa=sessionStorage.getItem( this.__ig1.cle_lst0 + '_' + this.moi + '_liste1' );
        if(aa !== null){
            let jso=JSON.parse( aa );
            for(let i in this.tableau_des_filtres.liste1){
                this.filtres.liste1[i]=jso[i]??this.tableau_des_filtres.liste1[i].défaut;
            }
        }
        this.vv_ecran_liste_boutons_avant+='<div class="yy_svg1 yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(page_creer1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + '" >' + this.__ig1.les_svg.nouveau_document + '</div>';
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
        let __les_convertions=[
            /*  */
            {"nc" : "id1" ,"nz" : 'chi_id_acces' ,"m" : 'une erreur système est survenue sur le champ "identifiant"'},
            {"nc" : "entier1" ,"nz" : 'che_actif_acces' ,"vpd" : 1 ,"lib" : 'actif'},
            {"nc" : "entier1" ,"nz" : 'chx_groupe_acces' ,"vpd" : undefined ,"lib" : 'id du groupe'},
            {"nc" : "entier1" ,"nz" : 'chx_metier_acces' ,"vpd" : undefined ,"lib" : 'id du métier'}
        ];
        let __obj_convertions=this.__ig1.__fnt1.convertir_les_zonnes_saisies( __les_convertions , fo1 );
        if(__obj_convertions.__xst !== __xsu){
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques verifier_modifier fin */
        let __les_tests=[
            /*  */
            {"nt" : 'non_vide1' ,"nz" : "chp_nom_acces" ,"lib" : 'nom'},
            {"nt" : 'parmis1' ,"nz" : "che_actif_acces" ,"lib" : 'actif' ,"p" : [0,1]},
            {"nt" : 'non_vide1' ,"nz" : "chx_groupe_acces" ,"lib" : 'id du groupe'},
            {"nt" : 'non_vide1' ,"nz" : "chx_metier_acces" ,"lib" : 'id du métier'}
        ];
        let __obj_tests=this.__ig1.__fnt1.tester_les_zonnes_saisies( __les_tests , fo1 );
        if(__obj_tests.__xst !== __xsu){
            return({"__xst" : __xsu});
        }
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , tup.T0_chi_id_acces , this.moi , 'chi_id_acces' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {"nom_du_champ" : "chp_nom_acces" ,"__contexte" : "modification1" ,"longueur_du_champ" : 64 ,"libelle_du_champ" : "nom"} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_zero_un2( tup , {"nom_du_champ" : "che_actif_acces" ,"__contexte" : "modification1" ,"libelle_du_champ" : "actif"} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_autrex2( tup , {
            "nom_du_champ" : "chx_groupe_acces" ,
            "__contexte" : "modification1" ,
            "libelle_du_champ" : "id du groupe" ,
            "bouton_vider" : false ,
            "nom_du_lien" : "groupes2" ,
            "liste_des_champs_libelles" : ["T1_chp_nom_groupe"]
        } , this );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_autrex2( tup , {
            "nom_du_champ" : "chx_metier_acces" ,
            "__contexte" : "modification1" ,
            "libelle_du_champ" : "id du métier" ,
            "bouton_vider" : false ,
            "nom_du_lien" : "metiers2" ,
            "liste_des_champs_libelles" : ["T2_chp_nom_metier"]
        } , this );
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_acces" value="' + tup.T0_chi_id_acces + '">';
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
        o1+='<div class="yy__bdp1"></div>';
        this.__ig1.maj_inner1( 'vv_ecran_modification_zone_contenu' , o1 );
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
          let tt='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_acces(' + le_colis1.__xva.page_modification1.__xva[0].T0_chi_id_acces + ')))))';
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
        if(tup.T0_chi_id_acces === undefined){
            return({"__xst" : __xer ,"__xme" : "Attention, le champ T0_chi_id_acces n'est pas en sortie dans la requête select "});
        }
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , tup.T0_chi_id_acces , this.moi , 'chi_id_acces' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {"nom_du_champ" : "chp_nom_acces" ,"__contexte" : "supprimer1" ,"longueur_du_champ" : 64 ,"libelle_du_champ" : "nom"} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_zero_un2( tup , {"nom_du_champ" : "che_actif_acces" ,"__contexte" : "supprimer1" ,"libelle_du_champ" : "actif"} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_autrex2( tup , {
            "nom_du_champ" : "chx_groupe_acces" ,
            "__contexte" : "supprimer1" ,
            "libelle_du_champ" : "id du groupe" ,
            "nom_du_lien" : "groupes2" ,
            "liste_des_champs_libelles" : ["T1_chp_nom_groupe"]
        } , this );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_autrex2( tup , {
            "nom_du_champ" : "chx_metier_acces" ,
            "__contexte" : "supprimer1" ,
            "libelle_du_champ" : "id du métier" ,
            "nom_du_lien" : "metiers2" ,
            "liste_des_champs_libelles" : ["T2_chp_nom_metier"]
        } , this );
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_acces" value="' + tup.T0_chi_id_acces + '" />';
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
        o1+='<input type="hidden" id="__mat_liste_si_ok" value="' + this.__ig1.fi2( jso ) + '" />';
        o1+='<div class="yy__bdp1"></div>';
        this.__ig1.maj_inner1( 'vv_ecran_suppression_zone_contenu' , o1 );
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
        /* conversion des données numériques verifier_creer début */
        let __les_convertions=[
            /*  */
            {"nc" : "entier1" ,"nz" : 'chx_groupe_acces' ,"vpd" : undefined ,"lib" : 'id du groupe'},
            {"nc" : "entier1" ,"nz" : 'chx_metier_acces' ,"vpd" : undefined ,"lib" : 'id du métier'}
        ];
        let __obj_convertions=this.__ig1.__fnt1.convertir_les_zonnes_saisies( __les_convertions , fo1 );
        if(__obj_convertions.__xst !== __xsu){
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques verifier_creer fin */
        let __les_tests=[
            /*  */
            {"nt" : 'non_vide1' ,"nz" : "chp_nom_acces" ,"lib" : 'nom'},
            {"nt" : 'non_vide1' ,"nz" : "chx_groupe_acces" ,"lib" : 'id du groupe'},
            {"nt" : 'non_vide1' ,"nz" : "chx_metier_acces" ,"lib" : 'id du métier'}
        ];
        let __obj_tests=this.__ig1.__fnt1.tester_les_zonnes_saisies( __les_tests , fo1 );
        if(__obj_tests.__xst !== __xsu){
            return({"__xst" : __xsu});
        }
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_creation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , null , this.moi , 'chi_id_acces' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {
            "nom_du_champ" : "chp_nom_acces" ,
            "__contexte" : "creer1" ,
            "longueur_du_champ" : 64 ,
            "libelle_du_champ" : "nom" ,
            "valeur_par_defaut" : ''
        } );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_autrex2( tup , {
            "nom_du_champ" : "chx_groupe_acces" ,
            "__contexte" : "creer1" ,
            "libelle_du_champ" : "id du groupe" ,
            "bouton_vider" : false ,
            "nom_du_lien" : "groupes2" ,
            "liste_des_champs_libelles" : ["T1_chp_nom_groupe"] ,
            "valeur_par_defaut" : ""
        } , this );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_autrex2( tup , {
            "nom_du_champ" : "chx_metier_acces" ,
            "__contexte" : "creer1" ,
            "libelle_du_champ" : "id du métier" ,
            "bouton_vider" : false ,
            "nom_du_lien" : "metiers2" ,
            "liste_des_champs_libelles" : ["T2_chp_nom_metier"] ,
            "valeur_par_defaut" : ""
        } , this );
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
        o1+='<div class="yy__bdp1"></div>';
        this.__ig1.maj_inner1( 'vv_ecran_creation_zone_contenu' , o1 );
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
            this.__ig1.initialisation_des_zones( this.moi , 'chi_id_acces' );
            initialisation_fait=true;
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES && a.getAttribute( 'data-contexte' ) === this.moi){
        }else{
            if(initialisation_fait === false){
                this.__ig1.initialisation_des_zones( this.moi , 'chi_id_acces' );
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
        let elem=tup;
        /*#
                              Si l'utilisateur courant est ... 
                                                       il peut gérer le menu pour l'acces(chi_id)
          dans le projet(rev), utilisateur courant => dev(1) admin(2) autres 
                 1/2              dev(1)            =>  1       1        0
                 1/2              adm(2)            =>  0       0        1
                 n                dev(1)            =>  0       1        0
                 n                adm(2)            =>  0       0        1
        */
        let projet_1_ou_2=false;
        if(le_colis1._CA_ === 1 || le_colis1._CA_ === 2){
            projet_1_ou_2=true;
        }
        let boutons_activés=false;
        if(projet_1_ou_2 === true && le_colis1.chi_id_utilisateur === 1){
            boutons_activés=true;
        }else if(projet_1_ou_2 === true && le_colis1.chi_id_utilisateur === 2 && tup.T0_chi_id_acces > 2){
            boutons_activés=true;
        }else if(projet_1_ou_2 === false && le_colis1.chi_id_utilisateur === 1 && tup.T0_chi_id_acces === 2){
            boutons_activés=true;
        }else if(projet_1_ou_2 === false && le_colis1.chi_id_utilisateur === 2 && tup.T0_chi_id_acces > 2){
            boutons_activés=true;
        }
        lst+='<div style="display:inline-flex;">';
        if(boutons_activés === false){
            lst+='<div class="rev_b_svg yy__2 yy__2_inactif">' + this.__ig1.les_svg.poubelle + '</div>';
            lst+='<div class="rev_b_svg yy__3 yy__3_inactif">' + this.__ig1.les_svg.editer + '</div>';
        }else{
            if([
                    /* tbel */
                    0,1,2].includes( tup.T0_chi_id_acces )){
                lst+='<div class="rev_b_svg yy__2 yy__2_inactif">' + this.__ig1.les_svg.poubelle + '</div>';
            }else{
                lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_acces(' + tup.T0_chi_id_acces + ')))))">' + this.__ig1.les_svg.poubelle + '</div>';
            }
            lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_acces(' + tup.T0_chi_id_acces + ')))))">' + this.__ig1.les_svg.editer + '</div>';
        }
        if(boutons_activés === false){
            if(tup.T0_chi_id_acces === 0){
                lst+='<div class="rev_bouton yy__1" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(recuperer_les_menus_d_un_acces(chi_id_acces(' + tup.T0_chi_id_acces + ')))))">menus</div>';
            }else{
                lst+='<div class="rev_bouton yy__1 yy__1_inactif">menus</div>';
            }
        }else{
            lst+='<div class="rev_bouton yy__1" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(recuperer_les_menus_d_un_acces(chi_id_acces(' + tup.T0_chi_id_acces + ')))))">menus</div>';
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
            for(let i in le_colis1.__xva.liste1.__xva){
                let tup=le_colis1.__xva.liste1.__xva[i];
                lst+='<tr>';
                /*
                  =====================================================================================
                */
                lst+='<td>';
                lst+=this.liste_des_boutons_action1( tup , le_colis1 );
                lst+='</td>';
                /*
                  =====================================================================================
                */
                lst+='<td style="text-align:center;">';
                /* cas 9.1.0 */
                lst+='<span data-chi_id_acces="' + this.__ig1.fi2( tup.T0_chi_id_acces ) + '">' + this.__ig1.fi2( tup.T0_chi_id_acces ) + '</span>';
                lst+='</td>';
                /*
                  =====================================================================================
                */
                /*
                  =====================================================================================
                  combinaison actif / nom
                */
                lst+='<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">';
                /* cas 5 */
                if(tup.T0_che_actif_acces === 1){
                    lst+='<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_vert1 + '</div>';
                }else{
                    lst+='<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_rouge1 + '</div>';
                }
                /* cas 6.1 */
                lst+=this.__ig1.fi2( tup.T0_chp_nom_acces );
                lst+='</td>';
                /*
                  =====================================================================================
                */
                /*
                  =====================================================================================
                  combinaison groupe
                */
                lst+='<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">';
                /* cas 7.2 */
                lst+='(' + this.__ig1.fi2( tup.T0_chx_groupe_acces ) + ')';
                /* cas 10.2.2 */
                lst+='<span class="" style="">' + this.__ig1.fi2( tup.T1_chp_nom_groupe ) + '</span>';
                lst+='</td>';
                /*
                  =====================================================================================
                */
                /*
                  =====================================================================================
                  combinaison métier
                */
                lst+='<td style="text-align: center; max-width: 24em;overflow-wrap: break-word;">';
                /* cas 7.2 */
                lst+='(' + this.__ig1.fi2( tup.T0_chx_metier_acces ) + ')';
                /* cas 10.2.2 */
                lst+='<span class="" style="">' + this.__ig1.fi2( tup.T2_chp_nom_metier ) + '</span>';
                lst+='</td>';
                /*
                  =====================================================================================
                */
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table>';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+=/* chi_id_acces */'<th>id</th>';
                o1+=/* combinaison */'<th>actif / nom</th>';
                o1+=/* combinaison */'<th>groupe</th>';
                o1+=/* combinaison */'<th>métier</th>';
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
export{acces1 as acces1};