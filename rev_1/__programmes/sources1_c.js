class sources1{
    /*
      ref_liste_ecran=1418;
      ref_select=1419;
      ref_insert=1420;
      ref_update=1422;
      ref_delete=1421;
      pour_sous_liste_uniquement=0;
    */
    moi='sources1';
    DUN_DUNE_ELEMENT_GERE='d\'un source';
    LISTE_DES_ELEMENTS_GERES='liste des sources';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chp_nom_source" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom' ,"taille" : 8} ,
            "T0_chi_id_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chi_id_source2" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id &gt;' ,"taille" : 12} ,
            "T0_chi_id_source3" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id &lt;=' ,"taille" : 12} ,
            "T0_che_binaire_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'binaire' ,"taille" : 8} ,
            "T0_chx_dossier_id_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'dossier id' ,"taille" : 8} ,
            "T1_chp_nom_dossier" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom dossier' ,"taille" : 8} ,
            "T0_che_autorisation_globale_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'autorisation globale' ,"taille" : 8} ,
            "T0_che_pour_util_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'pour util' ,"taille" : 8}
        } ,
        "sous_liste2" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chp_nom_source" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom' ,"taille" : 8} ,
            "T0_chi_id_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chi_id_source2" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id &gt;' ,"taille" : 12} ,
            "T0_chi_id_source3" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id &lt;=' ,"taille" : 12} ,
            "T0_che_binaire_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'binaire' ,"taille" : 8} ,
            "T0_chx_dossier_id_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'dossier id' ,"taille" : 8} ,
            "T1_chp_nom_dossier" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom dossier' ,"taille" : 8} ,
            "T0_che_autorisation_globale_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'autorisation globale' ,"taille" : 8} ,
            "T0_che_pour_util_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'pour util' ,"taille" : 8}
        }
    };
    /*
    */
    filtres={};
    vv_ecran_liste_boutons_avant='';
    /*
      =========================== fragment ========================================================================
    */
    page_nouveau_numero_source1( mat , d ){
        let l01=mat.length;
        let chi_id_source=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source > 0){
            let o1='';
            o1+='<h1>Attribuer un nouveau numéro à un source</h1>';
            o1+='le numéro actuel est <b>' + chi_id_source + '</b>';
            o1+='<br />';
            o1+='<div id="vv_sources_nouveau_numero1">';
            o1+='    <input type="hidden" id="vv_ancien_numero_de_source" value="' + chi_id_source + '" />';
            o1+='    le nouveau numéro sera : <input type="text" id="vv_nouveau_numero_de_source" value="" />';
            o1+='    <br />';
            o1+='    <div class="rev_bouton" data-rev_click="';
            o1+='fo1(co1(vv_sources_nouveau_numero1),pm1(m1(n1(' + this.moi + '),f1(vv_sources_nouveau_numero1()))))';
            o1+='">attribuer ce nouveau numéro</div>';
            o1+='</div>';
            this.__ig1.affiche_sous_fenetre1( o1 );
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =========================== fragment ========================================================================
    */
    constituer_la_liste_et_envoyer_en_cron( mat , d ){
        let la_liste=[];
        let lst=document.getElementById( 'vv_ecran_liste_zone_contenu' ).querySelectorAll( "[data-chi_id_source]" );
        for( let i=0 ; i < lst.length ; i++ ){
            if(!lst[i].getAttribute( 'data-chx_dossier_id_source' ) === 'null'){
                la_liste.push( lst[i].getAttribute( 'data-chi_id_source' ) );
            }
        }
        if(la_liste.length > 0 && document.getElementById( 'vv_chaine_remplacee' ).value !== ''){
            this.__ig1.envoyer_un_colis_au_worker( {
                     /*  */
                    "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(remplacer_une_chaine_par_une_autre())))' ,
                    "__xva" : {
                        "vv_chaine_remplacee" : document.getElementById( 'vv_chaine_remplacee' ).value ,
                        "vv_chaine_qui_la_remplace" : document.getElementById( 'vv_chaine_qui_la_remplace' ).value ,
                        "liste_des_chi_id_source" : la_liste
                    }
                } );
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =========================== fragment ========================================================================
    */
    remplacer_une_chaine_par_une_autre_dans_les_sources( mat , d ){
        let la_liste=[];
        let lst=document.getElementById( 'vv_ecran_liste_zone_contenu' ).querySelectorAll( "[data-chi_id_source]" );
        for( let i=0 ; i < lst.length ; i++ ){
            la_liste.push( lst[i].getAttribute( 'data-chi_id_source' ) );
        }
        let o1='';
        o1+='<h1>remplacer en arière plan un mot par un autre dans les sources de cette liste</h1>';
        o1+='remplacer ceci :';
        o1+='<br />';
        o1+='<input type="text" value="__ g i 1" id="vv_chaine_remplacee">';
        o1+='<br />';
        o1+='par cela';
        o1+='<br />';
        o1+='<input type="text" value="__ig1" id="vv_chaine_qui_la_remplace">';
        o1+='<br />';
        if(la_liste.length > 0){
            o1+='Liste des sources =  ';
            o1+='<br />';
            o1+='' + la_liste.join( ',' );
            o1+='<br />';
            o1+='<div class="rev_bouton yy__xal" data-rev_click="m1(n1(' + this.moi + '),f1(constituer_la_liste_et_envoyer_en_cron()))" title="" >remplacer pour la liste affichée</div>';
        }
        this.__ig1.affiche_sous_fenetre1( o1 );
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    compiler_cette_liste_de_js_en_cron1(){
        let liste_des_chi_id_source=[];
        let lst=document.querySelectorAll( "[data-chi_id_source]" );
        for( let i=0 ; i < lst.length ; i++ ){
            liste_des_chi_id_source.push( parseInt( lst[i].getAttribute( 'data-chi_id_source' ) , 10 ) );
        }
        this.__ig1.envoyer_un_colis_au_worker( {
                 /*  */
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(compiler_cette_liste_de_js_en_cron2())))' ,
                "__xva" : {"liste_des_chi_id_source" : liste_des_chi_id_source}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    charger_source_pour_compilation1( mat , d , le_colis1=null ){
        /* au retour du serveur */
        let tt=this.__ig1.__rev1.matrice_vers_source_rev1( mat , d , true , d + 1 );
        let action='m1(n1(_developpement1),f1(compiler_source1(' + tt.__xva + ')))';
        this.__ig1.executer1( action , le_colis1 );
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    rev_vers_rev( mat , d ){
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_source=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_resultat=mat[i + 1][1];
            }
        }
        if(zone_source === '' || zone_resultat === ''){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        this.__ig1.zone_d_edition_en_cours=zone_source;
        let t1=document.getElementById( zone_source );
        let t2=document.getElementById( zone_resultat );
        if(!(t1 && t2)){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        t2.innerHTML='';
        let tableau1=this.__ig1.__rev1.txt_en_tableau( t1.value );
        let obj2=this.__ig1.__rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
        if(obj2.__xst === __xsu){
            let ttt=this.__ig1.__rev1.matrice_vers_source_rev1( obj2.__xva , 0 , true , 1 );
            if(ttt.__xst === __xsu){
                t2.value=ttt.__xva;
                return({"__xst" : __xsu});
            }else{
                return(this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __ig1.__rev1.nl2() + '<br />de la matrice'} ));
            }
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =========================== fragment ========================================================================
    */
    lire_ce_source_du_disque1( mat , d , le_colis1=null ){
        document.getElementById( 'cht_genere_source' ).value=le_colis1.__xva.contenu_du_fichier;
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    enregistrer_un_source_compile1( mat , d , le_colis1=null ){
        let chi_id_source=0;
        let bouton_compiler='';
        let pas_de_message_de_succes=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'bouton_compiler' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                bouton_compiler=mat[i + 1][1];
            }else if(mat[i][1] === 'pas_de_message_de_succes' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                pas_de_message_de_succes=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(bouton_compiler !== ''){
            try{
                document.getElementById( bouton_compiler ).className='rev_bouton yy__1';
            } catch {}
        }
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    f1( mat , d , le_colis1=null ){
        switch (mat[d][1]){
            case 'vv_sources_nouveau_numero1' :
                this.__ig1.fermer_la_sous_fenetre();
                this.entree_module( null );
                break;
                
            case 'remplacer_une_chaine_par_une_autre' : this.__ig1.fermer_la_sous_fenetre();
                break;
            case 'exporter_dans_rev_un' : 
            case 'importer_de_rev_un' : this.__ig1.delai_selectionner_champ_filtre();
                break;
            case 'compiler_cette_liste_de_js_en_cron2' : 
            case 'ecrire_ce_source_sur_disque1' : 
            case 'supprimer_ce_source_du_disque1' : 
            case 'charger_source_pour_compilation2' : 
            case 'exporter_dans_base_de_prod1' : break;
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
        /*
          =====================================================================================================
          il faut précharger les bibliothèques externes qui viennent du réseau
          =====================================================================================================
        */
        this.__ig1.charger_script_dynamique( '/f0?n0=bibliotheques_externes/acorn1_c.js' );
        this.__ig1.charger_script_dynamique( '/f0?n0=bibliotheques_externes/php_parser1_c.js' );
        this.__ig1.charger_script_dynamique( '/f0?n0=bibliotheques_externes/sqlite_parser1_c.js' );
        this.__ig1.charger_script_dynamique( '/f0?n0=bibliotheques_externes/postcss1_c.js' );
        for(let i in this.tableau_des_filtres){
            this.filtres[i]={};
            for(let j in this.tableau_des_filtres[i]){
                this.filtres[i][j]=this.tableau_des_filtres[i][j].défaut;
            }
        }
        let aa=sessionStorage.getItem( this.__ig1.cle_lst0 + '_' + this.moi + '_' + 'liste1' );
        if(aa !== null){
            let jso=JSON.parse( aa );
            for(let i in this.tableau_des_filtres['liste1']){
                this.filtres['liste1'][i]=jso[i]??this.tableau_des_filtres['liste1'][i].défaut;
            }
        }
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
        if(fo1['chp_nom_source'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "nom du source" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        let __test_0_1=this.__ig1.__fnts_c_et_s.test_du_nom_technique1( fo1['chp_nom_source'] , 'nom du source' );
        if(__test_0_1.__xst !== __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_0_1.__xme} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_usage_source'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "usage du source" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_usage_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_usage_source'] !== ''){
            let tab_est_parmis_1='fichier,fragment'.split( ',' );
            if(!tab_est_parmis_1.includes( fo1['chp_usage_source'] )){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "usage du source" doit être correctement renseignée (utilisez les boutons)'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'chp_usage_source' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        if(fo1['che_binaire_source'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "binaire" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_binaire_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_binaire_source'] !== ''){
            let tab_est_parmis_2='0,1'.split( ',' );
            if(!tab_est_parmis_2.includes( fo1['che_binaire_source'] )){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "binaire" doit être correctement renseignée (utilisez les boutons)'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'che_binaire_source' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        if(fo1['che_pour_util_source'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pour util" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_pour_util_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_pour_util_source'] !== ''){
            let tab_est_parmis_3='0,1'.split( ',' );
            if(!tab_est_parmis_3.includes( fo1['che_pour_util_source'] )){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pour util" doit être correctement renseignée (utilisez les boutons)'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'che_pour_util_source' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        if(fo1['cht_rev_source'] !== null && fo1['cht_rev_source'] !== ''){
            let obj1=this.__ig1.__rev1.rev_tm( fo1['cht_rev_source'] );
            if(obj1.__xst !== __xsu){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu de "rev" n\'est pas dans un format rev valide'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'cht_rev_source' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        let __test_5_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( fo1['cht_rev_source'] , 'rev' );
        if(__test_5_1.__xst !== __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_5_1.__xme} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_rev_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['cht_condition_rev_source'] !== null && fo1['cht_condition_rev_source'] !== ''){
            let obj1=this.__ig1.__rev1.rev_tm( fo1['cht_condition_rev_source'] );
            if(obj1.__xst !== __xsu){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu de "condition au format rev" n\'est pas dans un format rev valide'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'cht_condition_rev_source' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        let __test_7_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( fo1['cht_condition_rev_source'] , 'condition au format rev' );
        if(__test_7_1.__xst !== __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_7_1.__xme} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_condition_rev_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_autorisation_globale_source'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "autorisation globale" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_autorisation_globale_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_autorisation_globale_source'] !== ''){
            let tab_est_parmis_11='0,1'.split( ',' );
            if(!tab_est_parmis_11.includes( fo1['che_autorisation_globale_source'] )){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "autorisation globale" doit être correctement renseignée (utilisez les boutons)'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'che_autorisation_globale_source' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        /* conversion des données numériques verifier_modifier début */
        fo1['chi_id_source']=fo1['chi_id_source'] === '' ? ( null ) : ( parseInt( fo1['chi_id_source'] , 10 ) );
        fo1['che_binaire_source']=fo1['che_binaire_source'] === '' ? ( null ) : ( parseInt( fo1['che_binaire_source'] , 10 ) );
        if(isNaN( fo1['che_binaire_source'] )){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "binaire" doit être numérique'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_binaire_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        fo1['che_pour_util_source']=fo1['che_pour_util_source'] === '' ? ( null ) : ( parseInt( fo1['che_pour_util_source'] , 10 ) );
        if(isNaN( fo1['che_pour_util_source'] )){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pour util" doit être numérique'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_pour_util_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        fo1['chx_dossier_id_source']=fo1['chx_dossier_id_source'] === '' ? ( null ) : ( parseInt( fo1['chx_dossier_id_source'] , 10 ) );
        fo1['che_autorisation_globale_source']=fo1['che_autorisation_globale_source'] === '' ?
          ( 
            null
          ) : ( 
            parseInt( fo1['che_autorisation_globale_source'] , 10 )
          );
        if(isNaN( fo1['che_autorisation_globale_source'] )){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "autorisation globale" doit être numérique'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_autorisation_globale_source' ).focus();
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_source'] , this.moi , 'chi_id_source' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom du source</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chp_nom_source'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_nom_source"   maxlength="128"  value="' + this.__ig1.fi2( enreg['T0.chp_nom_source'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_nom_source' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>usage du source</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chp_usage_source'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_usage_source"  size="32"   maxlength="32"  value="' + this.__ig1.fi2( enreg['T0.chp_usage_source'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_usage_source' );
        o1+='      <div style="display : inline-flex;flex-wrap : balance;">';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_usage_source),valeur(valeur_constante(fichier)))))">fichier</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_usage_source),valeur(valeur_constante(fragment)))))">fragment</div>';
        o1+='      </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>binaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.che_binaire_source'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="range" id="che_binaire_source" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__ig1.fi2( enreg['T0.che_binaire_source'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>pour util</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.che_pour_util_source'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="range" id="che_pour_util_source" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__ig1.fi2( enreg['T0.che_pour_util_source'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>dossier id</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chx_dossier_id_source'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="hidden" value="' + enreg['T0.chx_dossier_id_source'] + '" id="chx_dossier_id_source" />';
        o1+='        <span id="chx_dossier_id_source_libelle">';
        o1+='(' + enreg['T0.chx_dossier_id_source'] + ') ';
        o1+=this.__ig1.fi2( enreg['T1.chp_nom_dossier'] );
        o1+='</span>';
        o1+=this.__ig1.lien_parent2( 'dossiers1' , 'chx_dossier_id_source' , 'chx_dossier_id_source_libelle' , this.moi );
        if(enreg['T0.chx_dossier_id_source'] !== null && this.__ig1.est_num( enreg['T0.chx_dossier_id_source'] )){
            o1+='<div class="rev_bouton yy__1" style="float:right;" data-rev_click="pm1(m1(n1(dossiers1),f1(page_modification1(chi_id_dossier(' + enreg['T0.chx_dossier_id_source'] + ')))))" title="aller au dossier" > aller au dossier</div>';
            o1+='<div class="rev_bouton yy__2" data-rev_click="pm1(m1(n1(sources1),f1(page_confirmation_supprimer1(chi_id_source(' + enreg['T0.chi_id_source'] + ')))))">Supprimer</div>';
        }
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>rev</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.cht_rev_source'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_rev3( 'cht_rev_source' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  data-editeur1="rev"  id="cht_rev_source" rows="20" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( enreg['T0.cht_rev_source'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>genere</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.cht_genere_source'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        if(enreg['T0.chp_nom_source'].toLowerCase().slice( -4 ) === '.htm'
               || enreg['T0.chp_nom_source'].toLowerCase().slice( -5 ) === '.html'
        ){
            /*  */
            o1+='<div class="rev_bouton yy__3" data-rev_click="';
            o1+='m1(n1(x_ecran_rev_vers_html1),f1(rev_vers_html1(zone_source(cht_rev_source),zone_resultat(cht_genere_source))))';
            o1+='" title="convertir en html" >↧rev-&gt;html↧</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" ';
            o1+=' data-rev_click="m1(n1(x_ecran_rev_vers_html1),f1(html_vers_rev1(zone_source(cht_genere_source),zone_resultat(cht_rev_source))))"';
            o1+=' title="convertir en rev" >↥html->rev↥';
            o1+='</div>';
            /*  */
        }else if(enreg['T0.chp_nom_source'].toLowerCase().slice( -4 ) === '.php'){
            /*  */
            o1+='<div class="rev_bouton yy__3" data-rev_click="';
            o1+='m1(n1(x_ecran_rev_vers_php1),f1(rev_vers_php1(zone_source(cht_rev_source),zone_resultat(cht_genere_source))))';
            o1+='" title="convertir en php">↧r-&gt;p↧</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" data-rev_click="';
            o1+='m1(n1(x_ecran_rev_vers_php1),f1(php1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),options(nettoyer_html(1)))))';
            o1+='" title="convertir en rev par php_parseur">↥p-&gt;r↥</div>';
            /*  */
            o1+='<div class="rev_bouton yy__3" data-rev_click="';
            o1+='m1(n1(x_ecran_rev_vers_php1),f1(php1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),options(nettoyer_html(0)))))';
            o1+='" title="convertir en rev par php_parseur sans nettoyage html">↥p-&gt;r↥</div>';
            /*  */
        }else if(enreg['T0.chp_nom_source'].toLowerCase().slice( -3 ) === '.js'){
            /*  */
            o1+='<div class="rev_bouton yy__3" data-rev_click="';
            o1+='m1(n1(x_ecran_rev_vers_js1),f1(rev_vers_js1(zone_source(cht_rev_source),zone_resultat(cht_genere_source))))';
            o1+='" title="convertir en html" >↧rev-&gt;js↧</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" data-rev_click="';
            o1+='m1(n1(x_ecran_rev_vers_js1),f1(js_vers_rev1(zone_source(cht_genere_source),zone_resultat(cht_rev_source),normaliser_le_rev(1))))';
            o1+='" title="convertir en rev" >↥js->rev↥';
            o1+='</div>';
            /*  */
        }else if(enreg['T0.chp_nom_source'].toLowerCase().slice( -4 ) === '.sql'){
            /*  */
            o1+='<div class="rev_bouton yy__3" data-rev_click="';
            o1+='m1(n1(x_ecran_rev_vers_sql1),f1(rev_vers_sql1(zone_source(cht_rev_source),zone_resultat(cht_genere_source))))';
            o1+='" title="convertir en html" >↧rev-&gt;sql↧</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" data-rev_click="';
            o1+='m1(n1(x_ecran_rev_vers_sql1),f1(sql1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source))))';
            o1+='" title="convertir en rev" >↥sql->rev↥';
            o1+='</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" data-rev_click="';
            o1+='m1(n1(x_ecran_rev_vers_sql1),f1(sql2_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source))))';
            o1+='" title="convertir en rev" >↥sql->rev↥';
            o1+='</div>';
            /*  */
        }else if(enreg['T0.chp_nom_source'].toLowerCase().slice( -4 ) === '.css'){
            /*  */
            o1+='<div class="rev_bouton yy__3" data-rev_click="';
            o1+='m1(n1(x_ecran_rev_vers_css1),f1(rev_vers_css1(zone_source(cht_rev_source),zone_resultat(cht_genere_source))))';
            o1+='" title="convertir en css" >↧rev-&gt;css↧</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" data-rev_click="';
            o1+='m1(n1(x_ecran_rev_vers_css1),f1(css1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source))))';
            o1+='" title="convertir en rev" >↥css->rev↥';
            o1+='</div>';
            /*  */
        }else if(enreg['T0.chp_nom_source'].toLowerCase().slice( -4 ) === '.rev'){
            /*  */
            o1+='<div class="rev_bouton yy__3" data-rev_click="';
            o1+='m1(n1(' + this.moi + '),f1(rev_vers_rev(zone_source(cht_rev_source),zone_resultat(cht_genere_source))))';
            o1+='" title="convertir en texte" >↧rev-&gt;rev↧</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" data-rev_click="';
            o1+='m1(n1(' + this.moi + '),f1(rev_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source))))';
            o1+='" title="convertir en rev" >↥rev->rev↥';
            o1+='</div>';
            /*  */
        }else{
            /*  */
            o1+='<div class="rev_bouton yy__3" data-rev_click="';
            o1+='m1(n1(x_ecran_rev_vers_txt1),f1(rev_vers_texte1(zone_source(cht_rev_source),zone_resultat(cht_genere_source))))';
            o1+='" title="convertir en texte" >↧rev-&gt;txt↧</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" data-rev_click="';
            o1+='m1(n1(x_ecran_rev_vers_txt1),f1(texte1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source))))';
            o1+='" title="convertir en rev" >↥txt->rev↥';
            o1+='</div>';
            /*  */
        }
        o1+=this.__ig1.__fnt1.boutons_edition1( 'cht_genere_source' );
        o1+='<div class="rev_bouton yy__1" style="float:right;" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(lire_ce_source_du_disque1(chi_id_source(' + enreg['T0.chi_id_source'] + ')))))" title="lire du disque" >📤 du 💽</div>';
        o1+='<div class="rev_bouton yy__2" style="float:right;" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(ecrire_ce_source_sur_disque1(chi_id_source(' + enreg['T0.chi_id_source'] + ')))))" title="écrire sur disque" >📥 sur 💽</div>';
        o1+='<div class="rev_bouton yy__0" style="float:right;" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(supprimer_ce_source_du_disque1(chi_id_source(' + enreg['T0.chi_id_source'] + ')))))" title="supprimer du disque" >🗑 du 💽</div>';
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  data-editeur1="source_editeur1"  id="cht_genere_source" rows="20" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( enreg['T0.cht_genere_source'] );
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
        if(enreg['T0.cht_condition_rev_source'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_rev3( 'cht_condition_rev_source' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  data-editeur1="rev"  id="cht_condition_rev_source" rows="3" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( enreg['T0.cht_condition_rev_source'] );
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
        if(enreg['T0.cht_condition_js_source'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+='  <div data-rev_click="m1(n1(x_ecran_rev_vers_js1),f1(rev_vers_js1(zone_source(cht_condition_rev_source),zone_resultat(cht_condition_js_source))))"';
        o1+='    class="rev_bouton yy__3" title="convertir en js">↧rev-&gt;js↧</div>';
        /*  */
        o1+='  <div data-rev_click="m1(n1(x_ecran_rev_vers_js1),f1(js_vers_rev1(zone_source(cht_condition_js_source),zone_resultat(cht_condition_rev_source))))"';
        o1+='    class="rev_bouton yy__1" title="convertir en rev" >↥js->rev↥</div>';
        o1+=this.__ig1.__fnt1.boutons_edition1( 'cht_condition_js_source' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  data-editeur1="source_editeur1"  id="cht_condition_js_source" rows="3" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( enreg['T0.cht_condition_js_source'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>notification si condition ko</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.cht_notification_ko_source'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_edition1( 'cht_notification_ko_source' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  id="cht_notification_ko_source" rows="3" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( enreg['T0.cht_notification_ko_source'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.cht_commentaire_source'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_edition1( 'cht_commentaire_source' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  id="cht_commentaire_source" rows="3" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( enreg['T0.cht_commentaire_source'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>autorisation globale</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.che_autorisation_globale_source'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="range" id="che_autorisation_globale_source" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__ig1.fi2( enreg['T0.che_autorisation_globale_source'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_source" value="' + enreg['T0.chi_id_source'] + '">';
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_source'] , this.moi , 'chi_id_source' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom du source</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_nom_source"   maxlength="128"  value="' + this.__ig1.fi2( enreg['T0.chp_nom_source'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_nom_source' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>usage du source</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_usage_source"  size="32"   maxlength="32"  value="' + this.__ig1.fi2( enreg['T0.chp_usage_source'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_usage_source' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>binaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_binaire_source" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__ig1.fi2( enreg['T0.che_binaire_source'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>pour util</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_pour_util_source" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__ig1.fi2( enreg['T0.che_pour_util_source'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>dossier id</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=enreg['T0.chx_dossier_id_source'];
        o1+='"  id="chx_dossier_id_source" />';
        o1+='        <span>';
        o1+='(' + enreg['T0.chx_dossier_id_source'] + ') ';
        o1+=this.__ig1.fi2( enreg['T1.chp_nom_dossier'] );
        o1+='</span>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>rev</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_rev_source' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_rev_source" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_rev_source'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>genere</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_genere_source' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_genere_source" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_genere_source'] ) + '</textarea>';
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
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_condition_rev_source' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_condition_rev_source" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_condition_rev_source'] ) + '</textarea>';
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
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_condition_js_source' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_condition_js_source" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_condition_js_source'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>notification si condition ko</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_notification_ko_source' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_notification_ko_source" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_notification_ko_source'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_commentaire_source' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_commentaire_source" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_commentaire_source'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>autorisation globale</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_autorisation_globale_source" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__ig1.fi2( enreg['T0.che_autorisation_globale_source'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_source" value="' + enreg['T0.chi_id_source'] + '" />';
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_visualisation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_source'] , this.moi , 'chi_id_source' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom du source</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text" id="chp_nom_source"   maxlength="128"  value="' + this.__ig1.fi2( enreg['T0.chp_nom_source'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_nom_source' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>usage du source</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text" id="chp_usage_source"  size="32"   maxlength="32"  value="' + this.__ig1.fi2( enreg['T0.chp_usage_source'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_usage_source' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>binaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_binaire_source" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__ig1.fi2( enreg['T0.che_binaire_source'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>pour util</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_pour_util_source" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__ig1.fi2( enreg['T0.che_pour_util_source'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>dossier id</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=enreg['T0.chx_dossier_id_source'];
        o1+='"  id="chx_dossier_id_source" />';
        o1+='        <span>';
        o1+='(' + enreg['T0.chx_dossier_id_source'] + ') ';
        o1+=this.__ig1.fi2( enreg['T1.chp_nom_dossier'] );
        o1+='</span>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>rev</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_rev_source' );
        o1+='</div>\r\n';
        o1+='            <textarea id="cht_rev_source" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_rev_source'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>genere</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_genere_source' );
        o1+='</div>\r\n';
        o1+='            <textarea id="cht_genere_source" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_genere_source'] ) + '</textarea>';
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
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_condition_rev_source' );
        o1+='</div>\r\n';
        o1+='            <textarea id="cht_condition_rev_source" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_condition_rev_source'] ) + '</textarea>';
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
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_condition_js_source' );
        o1+='</div>\r\n';
        o1+='            <textarea id="cht_condition_js_source" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_condition_js_source'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>notification si condition ko</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_notification_ko_source' );
        o1+='</div>\r\n';
        o1+='            <textarea id="cht_notification_ko_source" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_notification_ko_source'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_commentaire_source' );
        o1+='</div>\r\n';
        o1+='            <textarea id="cht_commentaire_source" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_commentaire_source'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>autorisation globale</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_autorisation_globale_source" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__ig1.fi2( enreg['T0.che_autorisation_globale_source'] ) + '" >';
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
        if(fo1['chp_nom_source'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "nom du source" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        let __test_1_1=this.__ig1.__fnts_c_et_s.test_du_nom_technique1( fo1['chp_nom_source'] , 'nom du source' );
        if(__test_1_1.__xst !== __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_1_1.__xme} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_usage_source'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "usage du source" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_usage_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_usage_source'] !== ''){
            let tab_est_parmis_2='fichier,fragment'.split( ',' );
            if(!tab_est_parmis_2.includes( fo1['chp_usage_source'] )){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "usage du source" doit être correctement renseignée (utilisez les boutons)'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'chp_usage_source' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        let __test_5_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( fo1['cht_rev_source'] , 'rev' );
        if(__test_5_1.__xst !== __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_5_1.__xme} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_rev_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_binaire_source'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "binaire" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_binaire_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_binaire_source'] !== ''){
            let tab_est_parmis_6='0,1'.split( ',' );
            if(!tab_est_parmis_6.includes( fo1['che_binaire_source'] )){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "binaire" doit être correctement renseignée (utilisez les boutons)'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'che_binaire_source' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        /* conversion des données numériques verifier_creer début */
        fo1['chx_dossier_id_source']=fo1['chx_dossier_id_source'] === '' ? ( null ) : ( parseInt( fo1['chx_dossier_id_source'] , 10 ) );
        fo1['che_binaire_source']=fo1['che_binaire_source'] === '' ? ( null ) : ( parseInt( fo1['che_binaire_source'] , 10 ) );
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_creation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , null , this.moi , 'chi_id_source' );
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
        o1+='      <span>dossier id</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input id="chx_dossier_id_source" type="hidden" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_dossier_id_source' )){
            o1+=this.__ig1.fi2( dupliquer['T0.chx_dossier_id_source'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='        <span id="chx_dossier_id_source_libelle">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_dossier_id_source' )){
            if(dupliquer['T0.chx_dossier_id_source'] === null){
                o1+='*indéfini';
            }else{
                o1+='(' + dupliquer['T0.chx_dossier_id_source'] + ') ';
                o1+=' / <span>' + this.__ig1.fi2( dupliquer['T1.chp_nom_dossier'] ) + '</span>';
            }
        }else{
            o1+='*indéfini';
        }
        o1+='        </span>';
        /*
        */
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <span>';
        o1+=this.__ig1.lien_parent2( 'dossiers1' , 'chx_dossier_id_source' , 'chx_dossier_id_source_libelle' , this.moi );
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
        o1+='      <span>nom du source</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="48"   maxlength="128"  id="chp_nom_source" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_nom_source' )){
            o1+=this.__ig1.fi2( dupliquer['T0.chp_nom_source'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_nom_source' );
        o1+='    </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>usage du source</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  disabled  type="text"  size="32"   maxlength="32"  id="chp_usage_source" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_usage_source' )){
            o1+=this.__ig1.fi2( dupliquer['T0.chp_usage_source'] );
        }else{
            o1+='fichier';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_usage_source' );
        o1+='      <br />';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_usage_source),valeur(valeur_constante(fichier)))))">fichier</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(chp_usage_source),valeur(valeur_constante(fragment)))))">fragment</div>';
        o1+='    </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>genere</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + this.__ig1.__fnt1.boutons_edition1( 'cht_genere_source' );
        o1+='            </div>\r\n';
        o1+='            <textarea  data-editeur1="source_editeur1"  id="cht_genere_source" rows="20" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_genere_source' )){
            o1+=this.__ig1.fi2( dupliquer['T0.cht_genere_source'] );
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
        o1+='      <span>commentaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + this.__ig1.__fnt1.boutons_edition1( 'cht_commentaire_source' );
        o1+='            </div>\r\n';
        o1+='            <textarea  id="cht_commentaire_source" rows="3" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_commentaire_source' )){
            o1+=this.__ig1.fi2( dupliquer['T0.cht_commentaire_source'] );
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
        o1+='      <span>rev</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + this.__ig1.__fnt1.boutons_rev3( 'cht_rev_source' );
        o1+='            </div>\r\n';
        o1+='            <textarea  data-editeur1="rev" id="cht_rev_source" rows="20" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_rev_source' )){
            o1+=this.__ig1.fi2( dupliquer['T0.cht_rev_source'] );
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
        o1+='      <span>binaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_binaire_source" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_binaire_source' )){
            o1+=this.__ig1.fi2( dupliquer['T0.che_binaire_source'] );
        }else{
            o1+='0';
        }
        o1+='" />';
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
                        }} );
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
        this.vv_ecran_liste_boutons_avant='';
        this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(compiler_cette_liste_de_js_en_cron1()))" title="compiler" >compiler cette liste en cron</div>';
        this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(page_creer1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + '" >' + this.__ig1.les_svg.nouveau_document + '</div>';
        if(this.__ig1.chi_id_projet >= 3){
            this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xal" data-rev_click="m1(n1(' + this.moi + '),f1(remplacer_une_chaine_par_une_autre_dans_les_sources()))" title="remplacer une chaîne par une autre">remplacer</div>';
        }
        let o1='';
        let initialisation_fait=false;
        let a=document.getElementById( 'vv_titre_de_la_page' );
        if(a === null){
            this.__ig1.initialisation_des_zones( this.moi , 'chi_id_source' );
            initialisation_fait=true;
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES && a.getAttribute( 'data-contexte' ) === this.moi){
        }else{
            if(initialisation_fait === false){
                this.__ig1.initialisation_des_zones( this.moi , 'chi_id_source' );
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
    zones_sous_liste2( mat , d , le_colis1 ){
        let o1='';
        let obj2=this.__ig1.construire_les_zones_filtres2( mat , d , le_colis1 , this );
        o1+=obj2.html2;
        if(le_colis1 !== null && le_colis1.__xva.hasOwnProperty( 'sous_liste2' )){
            let lst='';
            for(let i in le_colis1.__xva['sous_liste2'].__xva){
                let elem=le_colis1.__xva['sous_liste2'].__xva[i];
                lst+='<tr>';
                lst+='<td style="text-wrap-mode: nowrap;">';
                let parametres='';
                parametres+='m1(n1(__ig1),f1(choisir_dans_sous_fenetre2(';
                parametres+=' nom_champ_dans_parent2(' + obj2.nom_champ_dans_parent2 + ')';
                parametres+=' nom_libelle_dans_parent2(' + obj2.nom_libelle_dans_parent2 + ')';
                parametres+=' id2(' + elem['T0.chi_id_source'] + ')';
                let libelle1='';
                libelle1+='(' + elem['T0.chi_id_source'] + ') ';
                libelle1+=elem['T0.chp_nom_source'] ? ( ' , ' + elem['T0.chp_nom_source'] ) : ( '' );
                parametres+=' libelle2(\'' + this.__ig1.fi1( libelle1 ) + '\')';
                parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + parametres + '">=&gt;</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_nom_source'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.chp_nom_source'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_source'] !== null){
                    lst+=elem['T0.chi_id_source'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_source'] !== null){
                    lst+=elem['T0.chi_id_source'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_source'] !== null){
                    lst+=elem['T0.chi_id_source'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.che_binaire_source'] !== null){
                    lst+=elem['T0.che_binaire_source'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chx_dossier_id_source'] !== null){
                    lst+=elem['T0.chx_dossier_id_source'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T1.chp_nom_dossier'] !== null){
                    lst+=elem['T1.chp_nom_dossier'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.che_autorisation_globale_source'] !== null){
                    lst+=elem['T0.che_autorisation_globale_source'];
                }
                lst+='</td>';
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table border="1">';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+='<th>nom</th>';
                o1+='<th>id</th>';
                o1+='<th>id</th>';
                o1+='<th>id</th>';
                o1+='<th>binaire</th>';
                o1+='<th>dossier id</th>';
                o1+='<th>nom dossier</th>';
                o1+='<th>autorisation globale</th>';
                o1+='</tr>';
                o1+=lst;
                o1+='</table>';
                o1+='</div>';
            }else{
                o1+=this.__ig1.la_liste_est_vide();
            }
        }
        this.__ig1.initialisation_filtre_sous_fenetre2( 'sous_liste2' , o1 , this.DUN_DUNE_ELEMENT_GERE );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
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
                /*
                  =====================================================================================
                  boutons de la liste début
                  =====================================================================================
                */
                lst+='<div class="rev_b_svg yy__1" data-rev_click="pm1(m1(n1(dossiers1),f1(page_modification1(chi_id_dossier(' + elem['T0.chx_dossier_id_source'] + ')))))">' + this.__ig1.les_svg.dossier + '</div>';
                lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_source(' + elem['T0.chi_id_source'] + ')))))">' + this.__ig1.les_svg.poubelle + '</div>';
                lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_source(' + elem['T0.chi_id_source'] + ')))))">' + this.__ig1.les_svg.editer + '</div>';
                lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_source(' + elem['T0.chi_id_source'] + ')))))">' + this.__ig1.les_svg.dupliquer + '</div>';
                let affiche_bouton_compiler=true;
                if(elem['T0.che_binaire_source'] === 1 || elem['T0.chx_dossier_id_source'] === null){
                    affiche_bouton_compiler=false;
                }else{
                    /* sur rev1 / projet 1 ou 2, on ne peut compiler que la racine */
                    if(this.__ig1._CA_ === 1){
                        if(le_colis1.chi_id_projet === 1 || le_colis1.chi_id_projet === 2){
                            if(elem['T0.chx_dossier_id_source'] !== 1){
                                affiche_bouton_compiler=false;
                            }else{
                                if(elem['T0.chp_nom_source'].indexOf( 'test' ) < 0){
                                    affiche_bouton_compiler=false;
                                }
                            }
                        }
                    }
                }
                if(affiche_bouton_compiler === true){
                    lst+='<div ';
                    lst+=' id="vv_bouton_compiler_' + elem['T0.chi_id_source'] + '" ';
                    lst+=' class="rev_bouton yy__4" ';
                    lst+=' data-rev_click="';
                    lst+='pm1(m1(n1(' + this.moi + '),f1(charger_source_pour_compilation1(';
                    lst+=' chi_id_source(' + elem['T0.chi_id_source'] + '),';
                    lst+=' bouton_compiler(vv_bouton_compiler_' + elem['T0.chi_id_source'] + '),';
                    lst+=' pas_de_message_de_succes(1),';
                    lst+='))))"  title="compiler">' + this.__ig1.les_svg.compiler + '</div>';
                }else{
                    lst+='<div class="rev_bouton yy__4 yy__4_inactif" title="compiler">' + this.__ig1.les_svg.compiler + '</div>';
                }
                if(this.__ig1._CA_ === 2){
                    /*  */
                    lst+='  <div class="rev_bouton yy__4" data-rev_click="';
                    lst+='pm1(m1(n1(' + this.moi + '),f1(importer_de_rev_un(chi_id_source(' + elem['T0.chi_id_source'] + '),origine(1)))))';
                    lst+='" >importer de 1(0)</div>';
                }else if(this.__ig1._CA_ === 1 && (le_colis1.chi_id_projet === 2 || le_colis1.chi_id_projet === 3)){
                    if(le_colis1.chi_id_projet === 3
                           && (elem['T0.chp_nom_source'] === 'sources1_c.js'
                               || elem['T0.chp_nom_source'] === 'sources1_s.js')
                    ){
                        /*  */
                        lst+='  <div class="rev_bouton yy__4 yy__4_inactif">importer de 1(1)</div>';
                    }else{
                        /*  */
                        lst+='  <div class="rev_bouton yy__4" data-rev_click="';
                        lst+='pm1(m1(n1(' + this.moi + '),f1(importer_de_rev_un(chi_id_source(' + elem['T0.chi_id_source'] + '),origine(1)))))';
                        lst+='" >importer de 1(1)</div>';
                    }
                }else if(this.__ig1._CA_ === 1 && le_colis1.chi_id_projet > 3){
                    /*  */
                    lst+='  <div class="rev_bouton yy__4" data-rev_click="';
                    lst+='pm1(m1(n1(' + this.moi + '),f1(importer_de_rev_un(chi_id_source(' + elem['T0.chi_id_source'] + '),origine(3)))))';
                    lst+='" >&gt; de 3</div>';
                }
                if(this.__ig1._CA_ === 2){
                    if(elem['T0.chp_usage_source']  === 'fragment'){
                        /*  */
                        lst+='  <div class="rev_bouton yy__0 yy__0_inactif" >exporter dans 1</div>';
                        /*  */
                    }else{
                        lst+='  <div class="rev_bouton yy__0" data-rev_click="';
                        lst+='pm1(m1(n1(' + this.moi + '),f1(exporter_dans_rev_un(chi_id_source(' + elem['T0.chi_id_source'] + ')))))';
                        lst+='" >exporter dans 1</div>';
                    }
                }
                lst+='<div class="rev_b_svg yy__1" data-rev_click="m1(n1(' + this.moi + '),f1(page_nouveau_numero_source1(chi_id_source(' + elem['T0.chi_id_source'] + '))))" title="attribuer un autre numéro" >' + this.__ig1.les_svg.renuméroter + '</div>';
                if(this.__ig1._CA_ === 1 && le_colis1.chi_id_projet > 2 && elem['T0.che_pour_util_source'] === 1){
                    lst+='  <div class="rev_bouton yy__2" data-rev_click="';
                    lst+='pm1(m1(n1(' + this.moi + '),f1(exporter_dans_base_de_prod1(chi_id_source(' + elem['T0.chi_id_source'] + ')))))';
                    lst+='" >-&gt; prod</div>';
                }
                /*
                  =====================================================================================
                  boutons de la liste fin
                  =====================================================================================
                */
                lst+='</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_source'] !== null){
                    lst+='<span data-chi_id_source="' + elem['T0.chi_id_source'] + '" data-chx_dossier_id_source="' + elem['T0.chx_dossier_id_source'] + '">' + elem['T0.chi_id_source'] + '</span>';
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_nom_source'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.chp_nom_source'] );
                }
                lst+='<br />';
                if(elem['T0.che_autorisation_globale_source'] !== null){
                    if(elem['T0.che_autorisation_globale_source'] === 0){
                        lst+='<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;display:inline-block;">' + this.__ig1.les_svg.rond_rouge1 + '</div>';
                    }else{
                        lst+='<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;display:inline-block;">' + this.__ig1.les_svg.rond_vert1 + '</div>';
                    }
                }
                if(elem['T0.che_binaire_source'] !== null){
                    if(elem['T0.che_binaire_source'] === 0){
                        lst+='<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;display:inline-block;">' + this.__ig1.les_svg.rond_rouge1 + '</div>';
                    }else{
                        lst+='<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;display:inline-block;">' + this.__ig1.les_svg.rond_vert1 + '</div>';
                    }
                }
                if(elem['T0.chp_usage_source'] === 'fragment'){
                    lst+=' <b style="color:red;">' + this.__ig1.fi2( elem['T0.chp_usage_source'] ) + '</b>';
                }else if(elem['T0.chp_usage_source'] === 'fichier'){
                }else{
                    lst+=' <b style="color:blue;">' + this.__ig1.fi2( elem['T0.chp_usage_source'] ) + '</b>';
                }
                lst+='<br />';
                if(elem['T0.chx_dossier_id_source'] !== null){
                    lst+='(' + elem['T0.chx_dossier_id_source'] + ')';
                }
                if(elem['T1.chp_nom_dossier'] !== null){
                    lst+=this.__ig1.fi2( elem['T1.chp_nom_dossier'] );
                }
                lst+='</td>';
                /*
                */
                /* lst+='<td style="text-align:center;">'; */
                /* lst+='</td>'; */
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_rev_source'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.cht_rev_source'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_genere_source'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.cht_genere_source'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                /*
                  lst+='<td style="text-align:center;">';
                  lst+='</td>';
                */
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_condition_rev_source'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.cht_condition_rev_source'].substr( 0 , 200 ) );
                }
                lst+='<hr />';
                if(elem['T0.cht_notification_ko_source'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.cht_notification_ko_source'] );
                }else{
                    if(elem['T0.cht_condition_rev_source'] !== null){
                        lst+='<div class="yy__2">une notification serait la bienvenue !</div>';
                    }
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_commentaire_source'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.cht_commentaire_source'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.che_pour_util_source'] !== null){
                    if(elem['T0.che_pour_util_source'] === 0){
                        lst+='<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_rouge1 + '</div>';
                    }else{
                        lst+='<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_vert1 + '</div>';
                    }
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
                o1+='<th>id</th>';
                o1+='<th>nom / auto globale / binaire<br />dossiers</th>';
                /* o1+='<th>dossier</th>'; */
                o1+='<th style="max-width:360px;">rev</th>';
                o1+='<th style="max-width:360px;">genere</th>';
                /* o1+='<th>nom</th>'; */
                /* o1+='<th>binaire</th>'; */
                /* o1+='<th>autorisation globale</th>'; */
                o1+=/* cht_condition_rev_source */'<th style="max-width:360px;">condition rev</th>';
                o1+='<th style="max-width:360px;">commentaire</th>';
                o1+=/* che_pour_util_source */'<th>pour util</th>';
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
export{sources1 as sources1};