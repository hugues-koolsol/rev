import {tri_arbre1} from './tri_arbre1.js';
class c_genres1{
    moi='c_genres1';
    DUN_DUNE_ELEMENT_GERE='d\'un genre';
    LISTE_DES_ELEMENTS_GERES='liste des genres';
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "$__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '$__num_page'} ,
            "T0_chi_id_genre" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id'} ,
            "T0_chp_nom_genre" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom'} ,
            "T0_chp_prefixe_genre" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'préfixe'} ,
            "T0_chp_espece_genre" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'espèce'} ,
            "T0_cht_valeur_init_genre" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'valeur init'} ,
            "T0_cht_parmis_genre" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'parmis'} ,
            "T0_che_ordre_genre" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'ordre'}
        } ,
        "sous_liste1" : {
            "$__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '$__num_page'} ,
            "T0_chi_id_genre" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id'} ,
            "T0_chp_nom_genre" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom'} ,
            "T0_chp_prefixe_genre" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'préfixe'} ,
            "T0_chp_espece_genre" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'espèce'} ,
            "T0_cht_valeur_init_genre" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'valeur init'} ,
            "T0_cht_parmis_genre" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'parmis'} ,
            "T0_che_ordre_genre" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'ordre'}
        }
    };
    fonction_liste='liste1';
    $filtres={};
    vv_ecran_liste_boutons_avant='';
    /*
      =============================================================================================================
    */
    page_integrer_ce_genre_dans_un_autre_projet( mat , d , le_message_du_serveur ){
        let l01=mat.length;
        let chi_id_genre=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_genre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_genre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_genre > 0){
            let o1='';
            o1+='<h1>intégrer le genre (' + chi_id_genre + ') dans un autre projet</h1>';
            o1+='<h2>Sélectionnez le projet cible</h2>';
            o1+='<ul>';
            for(let i in le_message_du_serveur.__xva){
                o1+='    <div class="rev_bouton" data-rev_click="';
                o1+='pm1(m1(n1(' + this.moi + '),f1(integrer_ce_genre_dans_un_autre_projet(chi_id_genre(' + chi_id_genre + '),chi_id_projet(' + le_message_du_serveur.__xva[i]['T0.chi_id_projet'] + ')))))';
                o1+='">(' + le_message_du_serveur.__xva[i]['T0.chi_id_projet'] + ') ' + __gi1.fi0( le_message_du_serveur.__xva[i]['T0.chp_nom_projet'] ) + '</div>';
            }
            o1+='</ul>';
            let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
            vv_sous_fenetre1.innerHTML=o1;
            vv_sous_fenetre1.showModal();
            __gi1.ajoute_les_evenements_aux_boutons( null );
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    enregister_l_ordre_des_genres( mat , d , le_message_du_serveur ){
        __gi1.__liste_des_genres=le_message_du_serveur.__xva.__liste_des_genres;
        __gi1.fermer_la_sous_fenetre();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    enregistrer_l_ordre_des_genres_du_bouton1( evenement , reference_arbre ){
        let tableau_des_ordre=[];
        let ordre=1;
        for(let i in reference_arbre.arbre){
            tableau_des_ordre.push( [reference_arbre.arbre[i].attributs.id,ordre++] );
        }
        let id_original=reference_arbre.reference_zone_triable.getAttribute( 'data-id_original_pour_tri' );
        let le_json=JSON.stringify( reference_arbre.arbre );
        let le_html=document.getElementById( id_original ).innerHTML;
        let obj={
             /*  */
            "__xac" : 'pm1(m1(n1(c_genres1),f1(enregister_l_ordre_des_genres())))' ,
            "__xva" : {"tableau_des_ordre" : tableau_des_ordre}
        };
        __gi1.envoyer_un_message_au_worker( obj );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    trier_les_genres( mat , d , le_message_du_serveur ){
        let o1='';
        o1+='<h1>tri des genres</h1>';
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
        options.boutons_du_menu.push( {"libelle" : '💾 enregistrer cet ordre' ,"fonction" : this.enregistrer_l_ordre_des_genres_du_bouton1} );
        options['afficher_le_bouton_editer']=0;
        options['class_du_bouton_editer']='rev_bouton yy__xif';
        new tri_arbre1( 'trier_les_genres' , options );
        __gi1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    vv_genres_nouveau_numero1( mat , d ){
        __gi1.fermer_la_sous_fenetre();
        this.aller_a_la_page( null , null , '$__num_page' , 0 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_nouveau_numero( mat , d ){
        let l01=mat.length;
        let chi_id_genre=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_genre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_genre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_genre > 0){
            let o1='';
            o1+='<h1>Attribuer un nouveau numéro à un genre</h1>';
            o1+='le numéro actuel est <b>' + chi_id_genre + '</b>';
            o1+='<br />';
            o1+='<div id="vv_genres_nouveau_numero1">';
            o1+='    <input type="hidden" id="vv_ancien_numero_de_genre" value="' + chi_id_genre + '" />';
            o1+='    le nouveau numéro sera : <input type="text" id="vv_nouveau_numero_de_genre" value="" />';
            o1+='    <br />';
            o1+='    <div class="rev_bouton" data-rev_click="';
            o1+='fo1(co1(vv_genres_nouveau_numero1),pm1(m1(n1(' + this.moi + '),f1(vv_genres_nouveau_numero1()))))';
            o1+='">attribuer ce nouveau numéro</div>';
            o1+='</div>';
            let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
            vv_sous_fenetre1.innerHTML=o1;
            /* __contenu_modale => vv_sous_fenetre1 */
            vv_sous_fenetre1.showModal();
            __gi1.ajoute_les_evenements_aux_boutons( null );
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    f1( mat , d , le_message_du_serveur=null ){
        switch (mat[d][1]){
            case 'integrer_ce_genre_dans_un_autre_projet' : __gi1.fermer_la_sous_fenetre();
                break;
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
            this.vv_ecran_liste_boutons_avant+='&nbsp;';
            this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__1" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(trier_les_genres())))" title="trier les genres">trier</div>';
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
        if(fo1['chp_nom_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "nom" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_ordre_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "ordre" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_ordre_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_prefixe_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "préfixe" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_prefixe_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        var __test=__gi1.__fnt1.doit_contenir_n_caracteres( 3 , fo1['chp_prefixe_genre'] , 'préfixe' );
        if(__test.__xst !== __xsu){
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_prefixe_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_espece_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "espèce" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_espece_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_primaire_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est primaire" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_primaire_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_incrément_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est incrément" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_incrément_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_obligatoire_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est obligatoire" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_obligatoire_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_a_init_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "a init" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_a_init_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_init_est_mot_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "init est mot" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_init_est_mot_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_parmis_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est parmis" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_parmis_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        var __test=__gi1.__fnt1.test_fonctions_de_c_fonctions1( fo1['cht_fonctions_genre'] , 'fonctions' );
        if(__test.__xst !== __xsu){
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_fonctions_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_nur_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est nur" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_nur_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_tsm_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est tsm" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_tsm_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_tsc_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est tsc" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_tsc_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_session_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est utilisateur" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_session_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_positif_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est positif" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_positif_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['cht_particularités_genre'] !== null && fo1['cht_particularités_genre'] !== ''){
            let obj1=__gi1.__rev1.rev_tm( fo1['cht_particularités_genre'] );
            if(obj1.__xst !== __xsu){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "particularités" n\'est pas dans un format rev valide'} );
                __gi1.affiche_les_messages();
                __gi1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'cht_particularités_genre' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        if(fo1['cht_particularités_genre'] !== null && fo1['cht_particularités_genre'] !== ''){
            let obj1=__gi1.__rev1.rev_tm( fo1['cht_particularités_genre'] );
            if(obj1.__xst !== __xsu){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "particularités" n\'est pas dans un format rev valide'} );
                __gi1.affiche_les_messages();
                __gi1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'cht_particularités_genre' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
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
        o1+='      <input  type="text" id="chp_nom_genre"  size="64"   maxlength="64"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_nom_genre'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>ordre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_ordre_genre'] ) + '" type="number" size="32" maxlength="32" id="che_ordre_genre" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>préfixe</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_prefixe_genre"  size="3"   maxlength="3"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_prefixe_genre'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=__gi1.__fnt1.boutons_edition_text( 'chp_prefixe_genre' );
        o1+='      <div style="display : inline-flex;flex-wrap : balance;">';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_prefixe_genre),valeur(valeur_constante(cht)))))">cht</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_prefixe_genre),valeur(valeur_constante(chi)))))">chi</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_prefixe_genre),valeur(valeur_constante(che)))))">che</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_prefixe_genre),valeur(valeur_constante(chx)))))">chx</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_prefixe_genre),valeur(valeur_constante(chp)))))">chp</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_prefixe_genre),valeur(valeur_constante(chd)))))">chd</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_prefixe_genre),valeur(valeur_constante(chu)))))">chu</div>';
        o1+='      </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>espèce</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text" id="chp_espece_genre"  size="32" style="height: var(--t_hauteur_input1);"  maxlength="64"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_espece_genre'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=__gi1.__fnt1.boutons_edition_text( 'chp_prefixe_genre' );
        o1+='      <div style="display : inline-flex;flex-wrap : balance;">\r\n';
        o1+='        <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_espece_genre),valeur(valeur_constante(TEXT)))))">TEXT</div>';
        o1+='        <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_espece_genre),valeur(valeur_constante(VARCHAR)))))">VARCHAR</div>';
        o1+='        <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_espece_genre),valeur(valeur_constante(INTEGER)))))">INTEGER</div>';
        o1+='        <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_espece_genre),valeur(valeur_constante(FLOAT)))))">FLOAT</div>';
        o1+='        <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_espece_genre),valeur(valeur_constante(DECIMAL)))))">DECIMAL</div>';
        o1+='      </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>longueur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_longueur_genre'] ) + '" type="number" size="32" maxlength="32" id="che_longueur_genre" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est primaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_primaire_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_est_primaire_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est incrément</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_incrément_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_est_incrément_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est obligatoire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_obligatoire_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_est_obligatoire_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>a init</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_a_init_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_a_init_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>init est mot</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_init_est_mot_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_init_est_mot_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>valeur init</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea id="cht_valeur_init_genre" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_valeur_init_genre'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est parmis</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_parmis_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_est_parmis_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>parmis</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea id="cht_parmis_genre" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_parmis_genre'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>fonctions</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea id="cht_fonctions_genre" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_fonctions_genre'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est nur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_nur_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_est_nur_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est tsm</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_tsm_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_est_tsm_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est tsc</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_tsc_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_est_tsc_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        o1+='     <input  type="hidden" id="che__nur_genre"   value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che__nur_genre'] ) + '" />';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est utilisateur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_session_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_est_session_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom en session</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text" id="chp_nom_en_session_genre"  size="64"   maxlength="64"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chp_nom_en_session_genre'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est positif</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_positif_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_est_positif_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>particularités</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=__gi1.__fnt1.boutons_rev3( 'cht_particularités_genre' );
        o1+='</div>\r\n';
        o1+='            <textarea id="cht_particularités_genre" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_particularités_genre'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_genre" value="' + le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.chi_id_genre'] + '">';
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
        o1+='      <input disabled  type="text" id="chp_nom_genre"  size="64"   maxlength="64"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_nom_genre'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>ordre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled type="number" size="32" maxlength="32" id="che_ordre_genre"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_ordre_genre'] ) + '" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>préfixe</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_prefixe_genre"  size="3"   maxlength="3"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_prefixe_genre'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>espèce</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_espece_genre"  size="64"   maxlength="64"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_espece_genre'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>longueur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled type="number" size="32" maxlength="32" id="che_longueur_genre"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_longueur_genre'] ) + '" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est primaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_est_primaire_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_est_primaire_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est incrément</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_est_incrément_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_est_incrément_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est obligatoire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_est_obligatoire_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_est_obligatoire_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>a init</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_a_init_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_a_init_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>init est mot</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_init_est_mot_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_init_est_mot_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>valeur init</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea disabled id="cht_valeur_init_genre" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.cht_valeur_init_genre'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est parmis</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_est_parmis_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_est_parmis_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>parmis</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea disabled id="cht_parmis_genre" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.cht_parmis_genre'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>fonctions</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea disabled id="cht_fonctions_genre" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.cht_fonctions_genre'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est nur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_est_nur_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_est_nur_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est tsm</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_est_tsm_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_est_tsm_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est tsc</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_est_tsc_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_est_tsc_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est utilisateur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_est_session_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_est_session_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom en session</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_nom_en_session_genre"  size="64"   maxlength="64"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_nom_en_session_genre'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est positif</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_est_positif_genre" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_est_positif_genre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>particularités</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea disabled id="cht_particularités_genre" rows="2"  cols="50" >' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.cht_particularités_genre'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_genre" value="' + le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chi_id_genre'] + '" />';
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
        if(fo1['chp_nom_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "nom" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_ordre_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "ordre" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_ordre_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_prefixe_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "préfixe" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_prefixe_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        var __test=__gi1.__fnt1.doit_contenir_n_caracteres( 3 , fo1['chp_prefixe_genre'] , 'préfixe' );
        if(__test.__xst !== __xsu){
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_prefixe_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_espece_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "espèce" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_espece_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_primaire_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est primaire" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_primaire_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_incrément_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est incrément" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_incrément_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_obligatoire_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est obligatoire" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_obligatoire_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_a_init_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "a init" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_a_init_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_init_est_mot_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "init est mot" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_init_est_mot_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_parmis_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est parmis" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_parmis_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        var __test=__gi1.__fnt1.test_fonctions_de_c_fonctions1( fo1['cht_fonctions_genre'] , 'fonctions' );
        if(__test.__xst !== __xsu){
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_fonctions_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_nur_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est nur" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_nur_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_tsm_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est tsm" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_tsm_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_tsc_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est tsc" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_tsc_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_session_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est utilisateur" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_session_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_positif_genre'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "est positif" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_positif_genre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
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
        o1+='      <input  type="text"  size="64"   maxlength="64"  id="chp_nom_genre" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_nom_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.chp_nom_genre'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>ordre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="che_ordre_genre" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_ordre_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.che_ordre_genre'] );
        }else{
            o1+='0';
        }
        o1+='"/>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>préfixe</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  disabled  type="text"  size="3"   maxlength="3"  id="chp_prefixe_genre" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_prefixe_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.chp_prefixe_genre'] );
        }else{
            o1+='cht';
        }
        o1+='" />';
        o1+='      <br />';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_prefixe_genre),valeur(valeur_constante(cht)))))">cht</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_prefixe_genre),valeur(valeur_constante(chi)))))">chi</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_prefixe_genre),valeur(valeur_constante(che)))))">che</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_prefixe_genre),valeur(valeur_constante(chx)))))">chx</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_prefixe_genre),valeur(valeur_constante(chp)))))">chp</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_prefixe_genre),valeur(valeur_constante(chd)))))">chd</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_prefixe_genre),valeur(valeur_constante(chu)))))">chu</div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>espèce</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  disabled  type="text"  size="64"   maxlength="64"  id="chp_espece_genre" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_espece_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.chp_espece_genre'] );
        }else{
            o1+='TEXT';
        }
        o1+='" />';
        o1+='      <br />';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_espece_genre),valeur(valeur_constante(TEXT)))))">TEXT</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_espece_genre),valeur(valeur_constante(VARCHAR)))))">VARCHAR</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_espece_genre),valeur(valeur_constante(INTEGER)))))">INTEGER</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_espece_genre),valeur(valeur_constante(FLOAT)))))">FLOAT</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(chp_espece_genre),valeur(valeur_constante(DECIMAL)))))">DECIMAL</div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>longueur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input type="number"  size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999"  id="che_longueur_genre" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_longueur_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.che_longueur_genre'] );
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
        o1+='      <span>est primaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_primaire_genre" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_est_primaire_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.che_est_primaire_genre'] );
        }else{
            o1+='0';
        }
        o1+='" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est incrément</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_incrément_genre" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_est_incrément_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.che_est_incrément_genre'] );
        }else{
            o1+='0';
        }
        o1+='" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est obligatoire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_obligatoire_genre" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_est_obligatoire_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.che_est_obligatoire_genre'] );
        }else{
            o1+='0';
        }
        o1+='" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>a init</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_a_init_genre" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_a_init_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.che_a_init_genre'] );
        }else{
            o1+='0';
        }
        o1+='" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>init est mot</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_init_est_mot_genre" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_init_est_mot_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.che_init_est_mot_genre'] );
        }else{
            o1+='0';
        }
        o1+='" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>valeur init</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea id="cht_valeur_init_genre" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_valeur_init_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.cht_valeur_init_genre'] );
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
        o1+='      <span>est parmis</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_parmis_genre" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_est_parmis_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.che_est_parmis_genre'] );
        }else{
            o1+='0';
        }
        o1+='" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>parmis</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea id="cht_parmis_genre" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_parmis_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.cht_parmis_genre'] );
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
        o1+='      <span>fonctions</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea id="cht_fonctions_genre" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_fonctions_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.cht_fonctions_genre'] );
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
        o1+='      <span>est nur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_nur_genre" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_est_nur_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.che_est_nur_genre'] );
        }else{
            o1+='0';
        }
        o1+='" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est tsm</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_tsm_genre" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_est_tsm_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.che_est_tsm_genre'] );
        }else{
            o1+='0';
        }
        o1+='" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est tsc</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_tsc_genre" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_est_tsc_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.che_est_tsc_genre'] );
        }else{
            o1+='0';
        }
        o1+='" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est utilisateur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_session_genre" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_est_session_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.che_est_session_genre'] );
        }else{
            o1+='0';
        }
        o1+='" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom en session</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="64"   maxlength="64"  id="chp_nom_en_session_genre" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_nom_en_session_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.chp_nom_en_session_genre'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>est positif</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_positif_genre" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_est_positif_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.che_est_positif_genre'] );
        }else{
            o1+='0';
        }
        o1+='" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>particularités</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea id="cht_particularités_genre" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_particularités_genre' )){
            o1+=__gi1.fi2( dupliquer['T0.cht_particularités_genre'] );
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
                    o1+='      <div><input type="text" id="' + i + '" value="' + __gi1.fi1( this.$filtres[this.fonction_liste][i] ) + '" size="8" maxlength="64" autocapitalize="off" style="' + bck + '" /></div>';
                    o1+='   </div>';
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
                $parametres+=' id1(' + elem['T0.chi_id_genre'] + ')';
                if(elem['T0.chx_parent_dossier'] === null){
                    $parametres+=' libelle1(\'' + elem['T0.chi_id_genre'] + '\')';
                }else{
                    let libelle1='';
                    libelle1+='(' + elem['T0.chi_id_genre'] + ') ';
                    libelle1+=elem['T0.chp_nom_genre'];
                    $parametres+=' libelle1(\'' + __gi1.fi1( libelle1 ) + '\')';
                }
                $parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + $parametres + '">=&gt;</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_genre'] !== null){
                    lst+=elem['T0.chi_id_genre'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_nom_genre'] !== null){
                    lst+=elem['T0.chp_nom_genre'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_prefixe_genre'] !== null){
                    lst+=elem['T0.chp_prefixe_genre'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_espece_genre'] !== null){
                    lst+=elem['T0.chp_espece_genre'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.cht_valeur_init_genre'] !== null){
                    lst+=elem['T0.cht_valeur_init_genre'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.cht_parmis_genre'] !== null){
                    lst+=elem['T0.cht_parmis_genre'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.che_ordre_genre'] !== null){
                    lst+=elem['T0.che_ordre_genre'];
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
                o1+='<th>préfixe</th>';
                o1+='<th>espèce</th>';
                o1+='<th>valeur init</th>';
                o1+='<th>parmis</th>';
                o1+='<th>ordre</th>';
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
                /*  */
                lst+='<tr>';
                lst+='<td>';
                lst+='<div style="display:inline-flex;">';
                /* yy_col_act_td1 */
                /*  */
                /* fonctions_spéciales1(ne_pas_supprimer_id_un(1)) */
                if(elem['T0.chi_id_genre'] === 1){
                    lst+='<div class="rev_b_svg yy__2 yy__2_inactif">' + __gi1.les_svg.poubelle + '</div>';
                }else{
                    lst+='<div class="rev_b_svg yy__2" data-rev_click="';
                    lst+='pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_genre(' + elem['T0.chi_id_genre'] + ')))))';
                    lst+='">' + __gi1.les_svg.poubelle + '</div>';
                }
                lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_genre(' + elem['T0.chi_id_genre'] + ')))))">' + __gi1.les_svg.editer + '</div>';
                lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_genre(' + elem['T0.chi_id_genre'] + ')))))">' + __gi1.les_svg.dupliquer + '</div>';
                lst+='<div class="rev_b_svg yy__1" data-rev_click="m1(n1(' + this.moi + '),f1(page_nouveau_numero(chi_id_genre(' + elem['T0.chi_id_genre'] + '))))">'+__gi1.les_svg.renuméroter+'</div>';
                if(__gi1._CA_.slice( -7 ) === '_rev_1_' && __gi1.chi_id_projet === 1){
                    lst+='<div class="rev_bouton yy__4" data-rev_click="';
                    lst+='pm1(m1(n1(' + this.moi + '),f1(page_integrer_ce_genre_dans_un_autre_projet(chi_id_genre(' + elem['T0.chi_id_genre'] + ')))))';
                    lst+='" title="integrer ce genre dans un autre projet">intégrer</div>';
                }
                lst+='</div>';
                lst+='</td>';
                /*
                */
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_genre'] !== null){
                    lst+=elem['T0.chi_id_genre'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_nom_genre'] !== null){
                    lst+=__gi1.fi2( elem['T0.chp_nom_genre'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_prefixe_genre'] !== null){
                    lst+=__gi1.fi2( elem['T0.chp_prefixe_genre'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_espece_genre'] !== null){
                    lst+=__gi1.fi2( elem['T0.chp_espece_genre'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td>';
                if(elem['T0.cht_valeur_init_genre'] !== null){
                    lst+=__gi1.fi2( elem['T0.cht_valeur_init_genre'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td>';
                if(elem['T0.cht_parmis_genre'] !== null){
                    lst+=__gi1.fi2( elem['T0.cht_parmis_genre'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.che_ordre_genre'] !== null){
                    lst+=elem['T0.che_ordre_genre'];
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
                o1+='<th>préfixe</th>';
                o1+='<th>espèce</th>';
                o1+='<th>valeur init</th>';
                o1+='<th>parmis</th>';
                o1+='<th>ordre</th>';
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
export{c_genres1 as c_genres1};