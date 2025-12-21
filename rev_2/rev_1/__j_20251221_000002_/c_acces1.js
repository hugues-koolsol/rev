import {tri_arbre1} from './tri_arbre1.js';
class c_acces1{
    moi='c_acces1';
    DUN_DUNE_ELEMENT_GERE='d\'un accès';
    LISTE_DES_ELEMENTS_GERES='liste des accès';
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "$__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '$__num_page' ,"taille" : 8} ,
            "T0_chi_id_acces" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chp_nom_acces" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom' ,"taille" : 8} ,
            "T0_chx_groupe_acces" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'groupe' ,"taille" : 8} ,
            "T1_chp_nom_groupe" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom groupe' ,"taille" : 8} ,
            "T0_chx_metier_acces" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'metier' ,"taille" : 8} ,
            "T2_chp_nom_metier" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom metier' ,"taille" : 8}
        } ,
        "sous_liste1" : {
            "$__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '$__num_page' ,"taille" : 8} ,
            "T0_chi_id_acces" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chp_nom_acces" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom' ,"taille" : 8} ,
            "T0_chx_groupe_acces" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'groupe' ,"taille" : 8} ,
            "T1_chp_nom_groupe" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom groupe' ,"taille" : 8} ,
            "T0_chx_metier_acces" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'metier' ,"taille" : 8} ,
            "T2_chp_nom_metier" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom metier' ,"taille" : 8}
        }
    };
    fonction_liste='liste1';
    $filtres={};
    vv_ecran_liste_boutons_avant='';
    #reference_arbre_du_menu=null;
    /*
      =============================================================================================================
    */
    enregister_le_menu_de_l_acces2( mat , d ){
        __gi1.fermer_la_sous_fenetre( null );
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
        /*
          afr this.moi n'est pas défini ici
        */
        let obj={
            "__xac" : 'pm1(m1(n1(c_acces1),f1(enregister_le_menu_de_l_acces2())))' ,
            "__xva" : {"chi_id_acces" : chi_id_acces ,"le_json" : le_json ,"le_html" : le_html}
        };
        __gi1.envoyer_un_message_au_worker( obj );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    trier_les_menus( mat , d ){
        let o1='';
        o1+='<h1>tri des menus</h1>';
        o1+='<ul id="trier_les_genres">';
        for(let i in le_message_du_serveur.__xva){
            o1+='<li id="' + le_message_du_serveur.__xva[i]['T0.chi_id_genre'] + '">';
            o1+=le_message_du_serveur.__xva[i]['T0.chp_nom_genre'] + '(' + le_message_du_serveur.__xva[i]['T0.chi_id_genre'] + ')';
            o1+='</li>';
        }
        o1+='</ul>';
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=o1;
        /* __contenu_modale => vv_sous_fenetre1 */
        vv_sous_fenetre1.showModal();
        let options={
            "hauteur_max_en_vh" : 60 ,
             /* entre 20 et 80 */
            "largeur_max" : '400px' ,
             /* 'calc(100% - 50px)', */
            "afficher_le_bouton_supprimer" : 0 ,
            "class_du_bouton_supprimer" : 'rev_bouton yy__0' ,
            "arborescent" : 0 ,
            "class_du_bouton_deplacer" : 'rev_bouton' ,
            "boutons_du_menu" : [] ,
            "class_du_bouton_menu" : 'rev_bouton' ,
            "class_du_bouton_replier" : 'rev_bouton yy__2'
        };
        options.boutons_du_menu.push( {"libelle" : '💾 enregistrer cet ordre' ,"fonction" : this.enregistrer_l_ordre_des_genres2} );
        options['afficher_le_bouton_editer']=0;
        options['class_du_bouton_editer']='rev_bouton yy__xif';
        new tri_arbre1( 'trier_les_genres' , options );
        __gi1.ajoute_les_evenements_aux_boutons( null );
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
    action_sur_tri_menu1( reference_arbre , obj ){
        console.log( 'dans action_sur_tri_menu1 ' , reference_arbre , obj );
        switch (obj.type_deplacement){
            case 'editer' :
                if(obj.id_original === 'liste_des_menus'){
                    for( let i=0 ; i < obj.arbre.length ; i++ ){
                        if(obj.id_cible === obj.arbre[i].id_interne){
                            let contenu_du_html='';
                            if(obj.arbre[i].attributs.hasOwnProperty( 'data-liste_des_menus' ) && obj.arbre[i].attributs['data-liste_des_menus'] == 1){
                                let nouveau_nom=window.prompt( "nouveau nom ?" , obj.arbre[i].contenu );
                                if(nouveau_nom){
                                    obj.arbre[i].contenu=nouveau_nom;
                                    reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre );
                                }
                            }
                            break;
                        }
                    }
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
                        if(obj.arbre[i].attributs && obj.arbre[i].attributs['data-liste_des_menus'] == 1){
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
    obtenir_les_menus_d_un_acces( mat , d , ldds ){
        let chi_id_acces=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_acces' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_acces=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let o1='';
        o1+='<h1>tri des menus</h1>';
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
        o1+='  <div id="edition_des_contitions_du_menu"></div>';
        o1+='</div>';
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=o1;
        /* __contenu_modale => vv_sous_fenetre1 */
        vv_sous_fenetre1.showModal();
        let id='liste_des_menus';
        let el=document.getElementById( id );
        let options={
            "hauteur_max_en_vh" : 80 ,
             /* entre 20 et 80 */
            "largeur_max" : '400px' ,
             /* 'calc(100% - 50px)', */
            "afficher_le_bouton_supprimer" : 1 ,
            "class_du_bouton_supprimer" : 'rev_bouton yy__0' ,
            "fonction_appelee_apres_action" : this.action_sur_tri_menu1 ,
            "arborescent" : 1 ,
            "class_du_bouton_deplacer" : 'rev_bouton' ,
            "boutons_du_menu" : [] ,
            "class_du_bouton_menu" : 'rev_bouton' ,
            "class_du_bouton_replier" : 'rev_bouton yy__2'
        };
        options.boutons_du_menu.push( {"libelle" : '+' ,"fonction" : this.ajouter_une_branche_au_menu1} );
        options.boutons_du_menu.push( {"libelle" : '💾' ,"fonction" : this.enregistrer_le_menu2} );
        options['afficher_le_bouton_editer']=1;
        options['class_du_bouton_editer']='rev_bouton yy__3';
        this.#reference_arbre_du_menu=new tri_arbre1( id , options );
        __gi1.ajoute_les_evenements_aux_boutons( null );
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
            this.vv_ecran_liste_boutons_avant+='<div class="rev_b_svg yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(page_creer1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + ' " >'+__gi1.les_svg.nouveau_document+'</div>';
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
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "nom" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_acces' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_groupe_acces'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "groupe" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_groupe_acces' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_metier_acces'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "metier" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_metier_acces' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['chi_id_acces']=fo1['chi_id_acces'] === '' ? ( null ) : ( parseInt( fo1['chi_id_acces'] , 10 ) );
        fo1['chx_groupe_acces']=fo1['chx_groupe_acces'] === '' ? ( null ) : ( parseInt( fo1['chx_groupe_acces'] , 10 ) );
        fo1['chx_metier_acces']=fo1['chx_metier_acces'] === '' ? ( null ) : ( parseInt( fo1['chx_metier_acces'] , 10 ) );
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
        o1+='      <span>nom</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_nom_acces'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input  type="text" id="chp_nom_acces"  size="64"   maxlength="64"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_nom_acces'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=__gi1.__fnt1.boutons_edition_text( 'chp_nom_acces' );
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
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_groupe_acces'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="hidden" value="';
        o1+=le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_groupe_acces'];
        o1+='"  id="chx_groupe_acces" />';
        o1+='        <span id="chx_groupe_acces_libelle">';
        o1+='(' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_groupe_acces'] + ') ';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T1.chp_nom_groupe'] );
        o1+='</span>';
        o1+=__gi1.lien_parent( 'c_groupes1' , 'chx_groupe_acces' , 'chx_groupe_acces_libelle' );
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
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_metier_acces'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="hidden" value="';
        o1+=le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_metier_acces'];
        o1+='"  id="chx_metier_acces" />';
        o1+='        <span id="chx_metier_acces_libelle">';
        o1+='(' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chx_metier_acces'] + ') ';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T2.chp_nom_metier'] );
        o1+='</span>';
        o1+=__gi1.lien_parent( 'c_metiers1' , 'chx_metier_acces' , 'chx_metier_acces_libelle' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_acces" value="' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chi_id_acces'] + '">';
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
        o1+='      <span>nom</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_nom_acces"  size="64"   maxlength="64"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_nom_acces'] ) + '"   />';
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
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T1.chp_nom_groupe'] );
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
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T2.chp_nom_metier'] );
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
        if(fo1['chp_nom_acces'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "nom" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_acces' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_groupe_acces'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "groupe" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_groupe_acces' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chx_metier_acces'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "metier" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
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
        o1+='      <span>nom</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="64"   maxlength="64"  id="chp_nom_acces" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_nom_acces' )){
            o1+=__gi1.fi2( dupliquer['T0.chp_nom_acces'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+=__gi1.__fnt1.boutons_edition_text( 'chp_nom_acces' );
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
            o1+=__gi1.fi2( dupliquer['T0.chx_groupe_acces'] );
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
                o1+=__gi1.fi2( dupliquer['T1.chp_nom_groupe'] );
            }
        }else{
            o1+='*indéfini';
        }
        o1+='</span>';
        /*
          
        */
        o1+=__gi1.lien_parent( 'c_groupes1' , 'chx_groupe_acces' , 'chx_groupe_acces_libelle' );
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
            o1+=__gi1.fi2( dupliquer['T0.chx_metier_acces'] );
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
                o1+=__gi1.fi2( dupliquer['T2.chp_nom_metier'] );
            }
        }else{
            o1+='*indéfini';
        }
        o1+='</span>';
        o1+=__gi1.lien_parent( 'c_metiers1' , 'chx_metier_acces' , 'chx_metier_acces_libelle' );
        /*  */
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
                $parametres+=' id1(' + elem['T0.chi_id_acces'] + ')';
                let libelle1='';
                libelle1+='(' + elem['T0.chi_id_acces'] + ') ';
                libelle1+=elem['T0.chp_nom_acces'] ? ( ' , ' + elem['T0.chp_nom_acces'] ) : ( '' );
                $parametres+=' libelle1(\'' + __gi1.fi1( libelle1 ) + '\')';
                $parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + $parametres + '">=&gt;</div>';
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
                    lst+=elem['T0.chp_nom_acces'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
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
                    lst+=elem['T1.chp_nom_groupe'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
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
                    lst+=elem['T2.chp_nom_metier'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
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
                if(__gi1._CA_.slice( -7 ) === '_rev_1_' || __gi1._CA_.slice( -7 ) === '_rev_2_'){
                    projet_1_ou_2=true;
                }
                let boutons_activés=false;
                if(projet_1_ou_2 === true
                       && le_message_du_serveur.__xva.chi_id_utilisateur === 1
                       && (elem['T0.chi_id_acces'] === 1
                           || elem['T0.chi_id_acces'] === 2)
                ){
                    boutons_activés=true;
                }else if(projet_1_ou_2 === true && le_message_du_serveur.__xva.chi_id_utilisateur === 2 && elem['T0.chi_id_acces'] > 2){
                    boutons_activés=true;
                }else if(projet_1_ou_2 === false && le_message_du_serveur.__xva.chi_id_utilisateur === 1 && elem['T0.chi_id_acces'] === 2){
                    boutons_activés=true;
                }else if(projet_1_ou_2 === false && le_message_du_serveur.__xva.chi_id_utilisateur === 2 && elem['T0.chi_id_acces'] > 2){
                    boutons_activés=true;
                }
                lst+='<td>';
                lst+='<div style="display:inline-flex;">';
                /* yy_col_act_td1 */
                if(boutons_activés === false){
                    lst+='<div class="rev_b_svg yy__2 yy__2_inactif">' + __gi1.les_svg.poubelle + '</div>';
                    lst+='<div class="rev_b_svg yy__3 yy__3_inactif">' + __gi1.les_svg.editer + '</div>';
                    lst+='<div class="rev_bouton yy__1 yy__1_inactif">menus</div>';
                }else{
                    lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_acces(' + elem['T0.chi_id_acces'] + ')))))">' + __gi1.les_svg.poubelle + '</div>';
                    lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_acces(' + elem['T0.chi_id_acces'] + ')))))">' + __gi1.les_svg.editer + '</div>';
                    lst+='<div class="rev_bouton yy__1" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(obtenir_les_menus_d_un_acces(chi_id_acces(' + elem['T0.chi_id_acces'] + ')))))">menus</div>';
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
                if(elem['T0.chp_nom_acces'] !== null){
                    lst+=__gi1.fi2( elem['T0.chp_nom_acces'] );
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
                    lst+=__gi1.fi2( elem['T1.chp_nom_groupe'] );
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
                    lst+=__gi1.fi2( elem['T2.chp_nom_metier'] );
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
                o1+='<th>métier</th>';
                o1+='<th>nom métier</th>';
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
export{c_acces1 as c_acces1};