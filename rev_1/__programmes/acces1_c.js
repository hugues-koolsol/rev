import {_tri_arbre1} from '/f0?n0=_tri_arbre1_c.js';
class acces1{
    /*
      ref_select=136
      ref_insert=137
      ref_delete=139
      ref_update=138
      ref_liste_ecran=135
    */
    moi='acces1';
    DUN_DUNE_ELEMENT_GERE='d\'un accès';
    LISTE_DES_ELEMENTS_GERES='liste des accès';
    __gi1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chi_id_acces" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chp_nom_acces" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom' ,"taille" : 8} ,
            "T0_che_actif_acces" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'actif' ,"taille" : 8} ,
            "T0_chx_groupe_acces" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id groupe' ,"taille" : 8} ,
            "T1_chp_nom_groupe" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom groupe' ,"taille" : 8} ,
            "T0_chx_metier_acces" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id metier' ,"taille" : 8} ,
            "T2_chp_nom_metier" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom metier' ,"taille" : 8}
        } ,
        "sous_liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chi_id_acces" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chp_nom_acces" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom' ,"taille" : 8} ,
            "T0_che_actif_acces" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'actif' ,"taille" : 8} ,
            "T0_chx_groupe_acces" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'groupe' ,"taille" : 8} ,
            "T1_chp_nom_groupe" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom groupe' ,"taille" : 8} ,
            "T0_chx_metier_acces" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'metier' ,"taille" : 8} ,
            "T2_chp_nom_metier" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom metier' ,"taille" : 8}
        }
    };
    fonction_liste='liste1';
    filtres={};
    vv_ecran_liste_boutons_avant='';
    #reference_arbre_du_menu=null;
    /*
      =============================================================================================================
    */
    enregister_le_menu_de_l_acces2( mat , d ){
        this.__gi1.fermer_la_sous_fenetre( null );
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
        this.__gi1.envoyer_un_message_au_worker( obj );
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
                                this.__gi1.ajoute_les_evenements_aux_boutons();
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
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=o1;
        /* __contenu_modale => vv_sous_fenetre1 */
        vv_sous_fenetre1.showModal();
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
        this.#reference_arbre_du_menu=new _tri_arbre1( id , options );
        this.__gi1.ajoute_les_evenements_aux_boutons( null );
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
        if(fo1['chp_nom_acces'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "nom" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_acces' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_groupe_acces'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "groupe" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_groupe_acces' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_metier_acces'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "metier" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_metier_acces' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_actif_acces'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "actif" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_actif_acces' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['chi_id_acces']=fo1['chi_id_acces'] === '' ? ( null ) : ( parseInt( fo1['chi_id_acces'] , 10 ) );
        fo1['chx_groupe_acces']=fo1['chx_groupe_acces'] === '' ? ( null ) : ( parseInt( fo1['chx_groupe_acces'] , 10 ) );
        fo1['chx_metier_acces']=fo1['chx_metier_acces'] === '' ? ( null ) : ( parseInt( fo1['chx_metier_acces'] , 10 ) );
        fo1['che_actif_acces']=fo1['che_actif_acces'] === '' ? ( null ) : ( parseInt( fo1['che_actif_acces'] , 10 ) );
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
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_acces'] , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chp_nom_acces'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_nom_acces"  size="48"   maxlength="64"  value="' + this.__gi1.fi2( enreg['T0.chp_nom_acces'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_nom_acces' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>actif</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.che_actif_acces'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="range" id="che_actif_acces" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__gi1.fi2( enreg['T0.che_actif_acces'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>groupe</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chx_groupe_acces'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="hidden" value="';
        o1+=enreg['T0.chx_groupe_acces'];
        o1+='"  id="chx_groupe_acces" />';
        o1+='        <span id="chx_groupe_acces_libelle">';
        o1+='(' + enreg['T0.chx_groupe_acces'] + ') ';
        o1+=this.__gi1.fi2( enreg['T1.chp_nom_groupe'] );
        o1+='</span>';
        o1+=this.__gi1.lien_parent( 'groupes1' , 'chx_groupe_acces' , 'chx_groupe_acces_libelle' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>metier</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chx_metier_acces'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="hidden" value="';
        o1+=enreg['T0.chx_metier_acces'];
        o1+='"  id="chx_metier_acces" />';
        o1+='        <span id="chx_metier_acces_libelle">';
        o1+='(' + enreg['T0.chx_metier_acces'] + ') ';
        o1+=this.__gi1.fi2( enreg['T2.chp_nom_metier'] );
        o1+='</span>';
        o1+=this.__gi1.lien_parent( 'metiers1' , 'chx_metier_acces' , 'chx_metier_acces_libelle' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_acces" value="' + enreg['T0.chi_id_acces'] + '">';
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
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_acces'] , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_nom_acces"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_nom_acces'] ) + '"   />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>groupe</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chx_groupe_acces'];
        o1+='"  id="chx_groupe_acces" />';
        o1+='        <span>';
        o1+='(' + le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chx_groupe_acces'] + ') ';
        o1+=this.__gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T1.chp_nom_groupe'] );
        o1+='</span>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>metier</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chx_metier_acces'];
        o1+='"  id="chx_metier_acces" />';
        o1+='        <span>';
        o1+='(' + le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chx_metier_acces'] + ') ';
        o1+=this.__gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T2.chp_nom_metier'] );
        o1+='</span>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_acces" value="' + le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chi_id_acces'] + '" />';
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
        if(fo1['chp_nom_acces'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "nom" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_acces' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_groupe_acces'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "groupe" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_groupe_acces' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_metier_acces'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "metier" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_metier_acces' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['chx_groupe_acces']=fo1['chx_groupe_acces'] === '' ? ( null ) : ( parseInt( fo1['chx_groupe_acces'] , 10 ) );
        fo1['chx_metier_acces']=fo1['chx_metier_acces'] === '' ? ( null ) : ( parseInt( fo1['chx_metier_acces'] , 10 ) );
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
        o1+='      <span>nom</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="64"   maxlength="64"  id="chp_nom_acces" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_nom_acces' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_nom_acces'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_nom_acces' );
        o1+='    </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>groupe</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input ';
        o1+=' id="chx_groupe_acces" ';
        o1+=' type="hidden" ';
        o1+=' value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_groupe_acces' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chx_groupe_acces'] );
        }else{
            o1+='';
        }
        o1+='"';
        o1+=' />';
        o1+='        <span id="chx_groupe_acces_libelle">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_groupe_acces' )){
            if(dupliquer['T0.chx_groupe_acces'] === null){
                o1+='*indéfini';
            }else{
                o1+='(' + dupliquer['T0.chx_groupe_acces'] + ') ';
                o1+=this.__gi1.fi2( dupliquer['T1.chp_nom_groupe'] );
            }
        }else{
            o1+='*indéfini';
        }
        o1+='</span>';
        /*
          ;
        */
        o1+=this.__gi1.lien_parent( 'groupes1' , 'chx_groupe_acces' , 'chx_groupe_acces_libelle' );
        /*  */
        o1+='    </div>';
        o1+='  </div>';
        /*
          
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>metier</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input ';
        o1+=' id="chx_metier_acces" ';
        o1+=' type="hidden" ';
        o1+=' value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_metier_acces' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chx_metier_acces'] );
        }else{
            o1+='';
        }
        o1+='"';
        o1+=' />';
        o1+='        <span id="chx_metier_acces_libelle">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_metier_acces' )){
            if(dupliquer['T0.chx_metier_acces'] === null){
                o1+='*indéfini';
            }else{
                o1+='(' + dupliquer['T0.chx_metier_acces'] + ') ';
                o1+=this.__gi1.fi2( dupliquer['T2.chp_nom_metier'] );
            }
        }else{
            o1+='*indéfini';
        }
        o1+='</span>';
        /*
          ;
        */
        o1+=this.__gi1.lien_parent( 'metiers1' , 'chx_metier_acces' , 'chx_metier_acces_libelle' );
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
                parametres+=' id1(' + elem['T0.chi_id_acces'] + ')';
                let libelle1='';
                libelle1+='(' + elem['T0.chi_id_acces'] + ') ';
                libelle1+=elem['T0.chp_nom_acces'] ? ( ' , ' + elem['T0.chp_nom_acces'] ) : ( '' );
                parametres+=' libelle1(\'' + this.__gi1.fi1( libelle1 ) + '\')';
                parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + parametres + '">=></div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_acces'] !== null){
                    lst+=elem['T0.chi_id_acces'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_nom_acces'] !== null){
                    lst+=elem['T0.chp_nom_acces'].substr( 0 , 100 ).replace( />/g , '>' ).replace( /</g , '<' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chx_groupe_acces'] !== null){
                    lst+=elem['T0.chx_groupe_acces'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T1.chp_nom_groupe'] !== null){
                    lst+=elem['T1.chp_nom_groupe'].substr( 0 , 100 ).replace( />/g , '>' ).replace( /</g , '<' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chx_metier_acces'] !== null){
                    lst+=elem['T0.chx_metier_acces'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T2.chp_nom_metier'] !== null){
                    lst+=elem['T2.chp_nom_metier'].substr( 0 , 100 ).replace( />/g , '>' ).replace( /</g , '<' );
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
                o1+='<th>groupe</th>';
                o1+='<th>nom groupe</th>';
                o1+='<th>metier</th>';
                o1+='<th>nom metier</th>';
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
                if(le_message_du_serveur._CA_ === 1 || le_message_du_serveur._CA_ === 2){
                    projet_1_ou_2=true;
                }
                let boutons_activés=false;
                if(projet_1_ou_2 === true
                       && le_message_du_serveur.chi_id_utilisateur === 1
                       && (elem['T0.chi_id_acces'] === 1
                           || elem['T0.chi_id_acces'] === 2)
                ){
                    boutons_activés=true;
                }else if(projet_1_ou_2 === true && le_message_du_serveur.chi_id_utilisateur === 2 && elem['T0.chi_id_acces'] > 2){
                    boutons_activés=true;
                }else if(projet_1_ou_2 === false && le_message_du_serveur.chi_id_utilisateur === 1 && elem['T0.chi_id_acces'] === 2){
                    boutons_activés=true;
                }else if(projet_1_ou_2 === false && le_message_du_serveur.chi_id_utilisateur === 2 && elem['T0.chi_id_acces'] > 2){
                    boutons_activés=true;
                }
                lst+='<td>';
                lst+='<div style="display:inline-flex;">';
                /* yy_col_act_td1 */
                if(boutons_activés === false){
                    lst+='<div class="rev_b_svg yy__2 yy__2_inactif">' + this.__gi1.les_svg.poubelle + '</div>';
                    lst+='<div class="rev_b_svg yy__3 yy__3_inactif">' + this.__gi1.les_svg.editer + '</div>';
                    lst+='<div class="rev_bouton yy__1 yy__1_inactif">menus</div>';
                }else{
                    if(elem['T0.chi_id_acces'] <= 2){
                        lst+='<div class="rev_b_svg yy__2 yy__2_inactif">' + this.__gi1.les_svg.poubelle + '</div>';
                    }else{
                        lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_acces(' + elem['T0.chi_id_acces'] + ')))))">' + this.__gi1.les_svg.poubelle + '</div>';
                    }
                    lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_acces(' + elem['T0.chi_id_acces'] + ')))))">' + this.__gi1.les_svg.editer + '</div>';
                    lst+='<div class="rev_bouton yy__1" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(recuperer_les_menus_d_un_acces(chi_id_acces(' + elem['T0.chi_id_acces'] + ')))))">menus</div>';
                }
                lst+='</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_acces'] !== null){
                    lst+=elem['T0.chi_id_acces'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.che_actif_acces'] !== null){
                    if(elem['T0.che_actif_acces'] === 0){
                        lst+='<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__gi1.les_svg.rond_rouge1 + '</div>';
                    }else{
                        lst+='<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__gi1.les_svg.rond_vert1 + '</div>';
                    }
                }
                if(elem['T0.chp_nom_acces'] !== null){
                    lst+=this.__gi1.fi2( elem['T0.chp_nom_acces'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chx_groupe_acces'] !== null){
                    lst+='(' + elem['T0.chx_groupe_acces'] + ')';
                }
                if(elem['T1.chp_nom_groupe'] !== null){
                    lst+=this.__gi1.fi2( elem['T1.chp_nom_groupe'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chx_metier_acces'] !== null){
                    lst+='(' + elem['T0.chx_metier_acces'] + ')';
                }
                if(elem['T2.chp_nom_metier'] !== null){
                    lst+=this.__gi1.fi2( elem['T2.chp_nom_metier'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
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
                o1+='<th>groupe</th>';
                o1+='<th>metier</th>';
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
export{acces1 as acces1};