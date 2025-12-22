class c_sources1{
    moi='c_sources1';
    DUN_DUNE_ELEMENT_GERE='d\'un source';
    LISTE_DES_ELEMENTS_GERES='liste des sources';
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "$__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '$__num_page' ,"taille" : 8} ,
            "T0_chp_nom_source" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom' ,"taille" : 8} ,
            "T0_chi_id_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chi_id_source2" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id &gt;' ,"taille" : 12} ,
            "T0_chi_id_source3" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id &lt;=' ,"taille" : 12} ,
            "T0_che_binaire_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'binaire' ,"taille" : 8} ,
            "T0_chx_dossier_id_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'dossier id' ,"taille" : 8} ,
            "T1_chp_nom_dossier" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom dossier' ,"taille" : 8} ,
            "T0_che_contient_version_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'contient version' ,"taille" : 8} ,
            "T0_che_autorisation_globale_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'autorisation globale' ,"taille" : 8}
        } ,
        "sous_liste1" : {
            "$__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '$__num_page' ,"taille" : 8} ,
            "T0_chp_nom_source" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom' ,"taille" : 8} ,
            "T0_chi_id_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chi_id_source2" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id &gt;' ,"taille" : 12} ,
            "T0_chi_id_source3" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id &lt;=' ,"taille" : 12} ,
            "T0_che_binaire_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'binaire' ,"taille" : 8} ,
            "T0_chx_dossier_id_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'dossier id' ,"taille" : 8} ,
            "T1_chp_nom_dossier" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom dossier'} ,
            "T0_che_contient_version_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'contient version' ,"taille" : 8} ,
            "T0_che_autorisation_globale_source" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'autorisation globale' ,"taille" : 8}
        }
    };
    fonction_liste='liste1';
    $filtres={};
    vv_ecran_liste_boutons_avant='';
    /*
      =============================================================================================================
    */
    exporter_dans_base_de_prod1( mat , d ){
        /* retour insert */
        let l01=mat.length;
        let chi_id_source='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'chi_id_source' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_source > 0){
        }
    }
    /*
      =============================================================================================================
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
            return({"__xst" : __xer});
        }
        __gi1.zone_d_edition_en_cours=zone_source;
        let t1=document.getElementById( zone_source );
        let t2=document.getElementById( zone_resultat );
        if(!(t1 && t2)){
            return({"__xst" : __xer});
        }
        t2.innerHTML='';
        let tableau1=__gi1.__rev1.txt_en_tableau( t1.value );
        let obj2=__gi1.__rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
        if(obj2.__xst === __xsu){
            let ttt=__gi1.__rev1.matrice_vers_source_rev1( obj2.__xva , 0 , true , 1 );
            if(ttt.__xst === __xsu){
                t2.value=ttt.__xva;
                return({"__xst" : __xsu});
            }else{
                return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + '<br />de la matrice'} ));
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      au retour du serveur
    */
    enregistrer_un_source_compile1( mat , d , le_message_du_serveur=null ){
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
      =============================================================================================================
      au retour du serveur
    */
    charger_source_pour_compilation1( mat , d , le_message_du_serveur=null ){
        let tt=__gi1.__rev1.matrice_vers_source_rev1( mat , d , true , d + 1 );
        let action='m1(n1(_developpement1),f1(compiler_source1(' + tt.__xva + ')))';
        __gi1.executer1( action , le_message_du_serveur );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    ast_nicki1( mat , d , le_message_du_serveur=null ){
        let action='m1(n1(ecran_rev_vers_php1),f1(traite_astnikic1()))';
        __gi1.executer1( action , le_message_du_serveur );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    lire_ce_source_du_disque1( mat , d , le_message_du_serveur=null ){
        document.getElementById( 'cht_genere_source' ).value=le_message_du_serveur.__xva.contenu_du_fichier;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    f1( mat , d , le_message_du_serveur=null ){
        switch (mat[d][1]){
            case 'ecrire_ce_source_sur_disque1' : 
            case 'supprimer_ce_source_du_disque1' : 
            case 'importer_de_rev_un' : 
            case 'exporter_dans_rev_un' : break;
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
        __gi1.charger_script_dynamique( __gi1.__version + '/bibliotheques_externes/acorn.js' );
        __gi1.charger_script_dynamique( __gi1.__version + '/bibliotheques_externes/php_parser.js' );
        __gi1.charger_script_dynamique( __gi1.__version + '/bibliotheques_externes/sql_parser_cst.js' );
        __gi1.charger_script_dynamique( __gi1.__version + '/bibliotheques_externes/sqlite_parser.js' );
        __gi1.charger_script_dynamique( __gi1.__version + '/bibliotheques_externes/postcss0.js' );
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
        if(fo1['chx_dossier_id_source'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "dossier id" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_dossier_id_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_nom_source'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "nom" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        var __test=__gi1.__fnt1.test_du_nom_de_fichier1( fo1['chp_nom_source'] , 'nom' );
        if(__test.__xst !== __xsu){
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_binaire_source'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "binaire" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_binaire_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['cht_rev_source'] !== null && fo1['cht_rev_source'] !== ''){
            let obj1=__gi1.__rev1.rev_tm( fo1['cht_rev_source'] );
            if(obj1.__xst !== __xsu){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "rev" n\'est pas dans un format rev valide'} );
                __gi1.affiche_les_messages();
                __gi1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'cht_rev_source' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        if(fo1['che_contient_version_source'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "contient version" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_contient_version_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_autorisation_globale_source'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "autorisation globale" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_autorisation_globale_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['chi_id_source']=fo1['chi_id_source'] === '' ? ( null ) : ( parseInt( fo1['chi_id_source'] , 10 ) );
        fo1['che_binaire_source']=fo1['che_binaire_source'] === '' ? ( null ) : ( parseInt( fo1['che_binaire_source'] , 10 ) );
        fo1['chx_dossier_id_source']=fo1['chx_dossier_id_source'] === '' ? ( null ) : ( parseInt( fo1['chx_dossier_id_source'] , 10 ) );
        fo1['che_contient_version_source']=fo1['che_contient_version_source'] === '' ?
          ( 
            null
          ) : ( 
            parseInt( fo1['che_contient_version_source'] , 10 )
          );
        fo1['che_autorisation_globale_source']=fo1['che_autorisation_globale_source'] === '' ?
          ( 
            null
          ) : ( 
            parseInt( fo1['che_autorisation_globale_source'] , 10 )
          );
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
        let enreg=le_message_du_serveur.__xva.page_modification1.__xva[0];
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_conteneur_table">';
        o1+='      <table border="1" style="width:100%;">';
        /*  */
        o1+='          <tr>';
        o1+='              <th>nom</th>';
        o1+='              <td>';
        o1+='                  <input  type="text" id="chp_nom_source"  size="64"   maxlength="64"  value="' + __gi1.fi2( enreg['T0.chp_nom_source'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+='                  <div class="yy_btn_en_ligne1">';
        o1+=__gi1.__fnt1.boutons_edition_text( 'chp_nom_source' );
        o1+='                  </div>';
        o1+='              </td>';
        o1+='          </tr>';
        /*
        */
        o1+='          <tr>';
        o1+='              <th>binaire</th>';
        o1+='              <td>';
        o1+='                  <input type="range" id="che_binaire_source" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( enreg['T0.che_binaire_source'] ) + '" >';
        o1+='              </td>';
        o1+='          </tr>';
        /*
        */
        o1+='          <tr>';
        o1+='              <th>dossier id</th>';
        o1+='              <td>';
        o1+='                  <input type="hidden" id="chx_dossier_id_source" value="' + enreg['T0.chx_dossier_id_source'] + '" />';
        o1+='                  <span id="chx_dossier_id_source_libelle">';
        o1+='                     (' + enreg['T0.chx_dossier_id_source'] + ') ';
        o1+='                     ' + __gi1.fi2( enreg['T2.chp_nom_dossier'] );
        o1+='                  </span>';
        o1+=__gi1.lien_parent( 'c_dossiers1' , 'chx_dossier_id_source' , 'chx_dossier_id_source_libelle' );
        o1+='              </td>';
        o1+='          </tr>';
        /*
        */
        o1+='          <tr>';
        o1+='              <th>rev</th>';
        o1+='              <td>';
        o1+='                  <div class="yy_conteneur_txtara">';
        o1+='                      <div>\r\n';
        o1+='                          ' + __gi1.__fnt1.boutons_rev3( 'cht_rev_source' );
        o1+='                      </div>\r\n';
        o1+='                      <textarea id="cht_rev_source" rows="10" data-editeur1="rev" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( enreg['T0.cht_rev_source'] ) + '</textarea>';
        o1+='                   </div>';
        o1+='              </td>';
        o1+='          </tr>';
        /*
        */
        o1+='          <tr>';
        o1+='              <th>généré</th>';
        o1+='              <td>';
        o1+='                  <div class="yy_conteneur_txtara">';
        o1+='                      <div>\r\n';
        if(enreg['T0.chp_nom_source'].toLowerCase().slice( -4 ) === '.htm'
               || enreg['T0.chp_nom_source'].toLowerCase().slice( -5 ) === '.html'
        ){
            /*  */
            o1+='<div class="rev_bouton yy__3" data-rev_click="';
            o1+='m1(n1(ecran_rev_vers_html1),f1(rev_vers_html1(zone_source(cht_rev_source),zone_resultat(cht_genere_source))))';
            o1+='" title="convertir en html" >↧rev-&gt;html↧</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" ';
            o1+=' data-rev_click="m1(n1(ecran_rev_vers_html1),f1(html_vers_rev1(zone_source(cht_genere_source),zone_resultat(cht_rev_source))))"';
            o1+=' title="convertir en rev" >↥html->rev↥';
            o1+='</div>';
            /*  */
        }else if(enreg['T0.chp_nom_source'].toLowerCase().slice( -4 ) === '.php'){
            /*  */
            o1+='<div class="rev_bouton yy__3" data-rev_click="';
            o1+='m1(n1(ecran_rev_vers_php1),f1(rev_vers_php1(zone_source(cht_rev_source),zone_resultat(cht_genere_source))))';
            o1+='" title="convertir en php">↧r-&gt;p↧</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" data-rev_click="';
            o1+='m1(n1(ecran_rev_vers_php1),f1(php1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),options(nettoyer_html(1)))))';
            o1+='" title="convertir en rev par php_parseur">↥p-&gt;r↥</div>';
            /*  */
            o1+='<div class="rev_bouton yy__3" data-rev_click="';
            o1+='m1(n1(ecran_rev_vers_php1),f1(php1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),options(nettoyer_html(0)))))';
            o1+='" title="convertir en rev par php_parseur sans nettoyage html">↥p-&gt;r↥</div>';
            /*  */
            o1+='<div class="rev_bouton yy__2" data-rev_click="';
            o1+='m1(n1(ecran_rev_vers_php1),f1(php2_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),options(nettoyer_html(1)),moi(' + this.moi + '))))';
            o1+='" title="convertir en rev par nikic">↥p-&gt;r↥</div>';
            /*  */
            o1+='<div class="rev_bouton yy__4" data-rev_click="';
            o1+='m1(n1(ecran_rev_vers_php1),f1(php2_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source),options(nettoyer_html(0)),moi(' + this.moi + '))))';
            o1+='" title="convertir en rev par nikic sans nettoyage html">↥p-&gt;r↥</div>';
            /*  */
        }else if(enreg['T0.chp_nom_source'].toLowerCase().slice( -3 ) === '.js'){
            /*  */
            o1+='<div class="rev_bouton yy__3" data-rev_click="';
            o1+='m1(n1(ecran_rev_vers_js1),f1(rev_vers_js1(zone_source(cht_rev_source),zone_resultat(cht_genere_source))))';
            o1+='" title="convertir en html" >↧rev-&gt;js↧</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" data-rev_click="';
            o1+='m1(n1(ecran_rev_vers_js1),f1(js_vers_rev1(zone_source(cht_genere_source),zone_resultat(cht_rev_source))))';
            o1+='" title="convertir en rev" >↥js->rev↥';
            o1+='</div>';
            /*  */
        }else if(enreg['T0.chp_nom_source'].toLowerCase().slice( -4 ) === '.sql'){
            /*  */
            o1+='<div class="rev_bouton yy__3" data-rev_click="';
            o1+='m1(n1(ecran_rev_vers_sql1),f1(rev_vers_sql1(zone_source(cht_rev_source),zone_resultat(cht_genere_source))))';
            o1+='" title="convertir en html" >↧rev-&gt;sql↧</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" data-rev_click="';
            o1+='m1(n1(ecran_rev_vers_sql1),f1(sql1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source))))';
            o1+='" title="convertir en rev" >↥sql->rev↥';
            o1+='</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" data-rev_click="';
            o1+='m1(n1(ecran_rev_vers_sql1),f1(sql2_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source))))';
            o1+='" title="convertir en rev" >↥sql->rev↥';
            o1+='</div>';
            /*  */
        }else if(enreg['T0.chp_nom_source'].toLowerCase().slice( -4 ) === '.css'){
            /*  */
            o1+='<div class="rev_bouton yy__3" data-rev_click="';
            o1+='m1(n1(ecran_rev_vers_css1),f1(rev_vers_css1(zone_source(cht_rev_source),zone_resultat(cht_genere_source))))';
            o1+='" title="convertir en css" >↧rev-&gt;css↧</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" data-rev_click="';
            o1+='m1(n1(ecran_rev_vers_css1),f1(css1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source))))';
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
            o1+='m1(n1(ecran_rev_vers_txt1),f1(rev_vers_texte1(zone_source(cht_rev_source),zone_resultat(cht_genere_source))))';
            o1+='" title="convertir en texte" >↧rev-&gt;txt↧</div>';
            /*  */
            o1+='<div class="rev_bouton yy__1" data-rev_click="';
            o1+='m1(n1(ecran_rev_vers_txt1),f1(texte1_vers_rev(zone_source(cht_genere_source),zone_resultat(cht_rev_source))))';
            o1+='" title="convertir en rev" >↥txt->rev↥';
            o1+='</div>';
            /*  */
        }
        o1+='                          ' + __gi1.__fnt1.boutons_rev3( 'cht_genere_source' );
        o1+='                          <div class="rev_bouton yy__1" style="float:right;" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(lire_ce_source_du_disque1(chi_id_source(' + enreg['T0.chi_id_source'] + ')))))" title="lire du disque" >📤 du 💽</div>';
        o1+='                          <div class="rev_bouton yy__2" style="float:right;" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(ecrire_ce_source_sur_disque1(chi_id_source(' + enreg['T0.chi_id_source'] + ')))))" title="écrire sur disque" >📥 sur 💽</div>';
        o1+='                          <div class="rev_bouton yy__0" style="float:right;" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(supprimer_ce_source_du_disque1(chi_id_source(' + enreg['T0.chi_id_source'] + ')))))" title="supprimer du disque" >🗑 du 💽</div>';
        o1+='                      </div>\r\n';
        o1+='                      <textarea data-editeur1="source_editeur1" id="cht_genere_source" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( enreg['T0.cht_genere_source'] ) + '</textarea>';
        o1+='                  </div>';
        o1+='              </td>';
        o1+='          </tr>';
        /*
        */
        o1+='          <tr>';
        o1+='              <th>contient version</th>';
        o1+='              <td>';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_contient_version_source'] === undefined){
            o1+='              <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='                  <input type="range" id="che_contient_version_source" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_contient_version_source'] ) + '" >';
        o1+='              </td>';
        o1+='          </tr>';
        /*
        */
        o1+='          <tr>';
        o1+='              <th>autorisation globale</th>';
        o1+='              <td>';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_autorisation_globale_source'] === undefined){
            o1+='              <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='                  <input type="range" id="che_autorisation_globale_source" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.che_autorisation_globale_source'] ) + '" >';
        o1+='              </td>';
        o1+='          </tr>';
        o1+='          <tr>';
        o1+='              <th>commentaire</th>';
        o1+='              <td>';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_commentaire_source'] === undefined){
            o1+='              <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='                  <div class="yy_conteneur_txtara">';
        o1+='                      <div>\r\n';
        o1+='                          ' + __gi1.__fnt1.boutons_edition1( 'cht_commentaire_source' );
        o1+='                      </div>\r\n';
        var sty='';
        if(le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='                      <textarea  id="cht_commentaire_source" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0]['T0.cht_commentaire_source'] );
        o1+='</textarea>';
        o1+='              </td>';
        o1+='          </tr>';
        /*
        */
        o1+='          <tr>';
        o1+='              <td>';
        o1+='                  <input type="hidden" id="chi_id_source" value="' + enreg['T0.chi_id_source'] + '">';
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
        o1+='                  <input type="hidden" id="__mat_liste_si_ok" size="128" value="' + __gi1.fi2( jso ) + '" />';
        o1+='              </td>';
        o1+='          </tr>';
        o1+='      </table>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
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
        o1+='      <span>dossier id</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chx_dossier_id_source'];
        o1+='"  id="chx_dossier_id_source" />';
        o1+='        <span>';
        o1+='(' + le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chx_dossier_id_source'] + ') ';
        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T2.chp_nom_dossier'] );
        o1+='</span>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_nom_source"  size="64"   maxlength="64"  value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_nom_source'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
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
        o1+='            <textarea disabled id="cht_commentaire_source" rows="2"  cols="50" >' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.cht_commentaire_source'] ) + '</textarea>';
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
        o1+='            <textarea disabled id="cht_rev_source" rows="2"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.cht_rev_source'] ) + '</textarea>';
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
        o1+='            <textarea disabled id="cht_genere_source" rows="2"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.cht_genere_source'] ) + '</textarea>';
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
        o1+='        <input disabled type="range" id="che_binaire_source" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_binaire_source'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>contient version</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_contient_version_source" class="yy_ouinon" min="0" max="1" step="1" value="' + __gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.che_contient_version_source'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_source" value="' + le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chi_id_source'] + '" />';
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
        if(fo1['chx_dossier_id_source'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "dossier id" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chx_dossier_id_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_nom_source'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "nom" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        var __test=__gi1.__fnt1.test_du_nom_de_fichier1( fo1['chp_nom_source'] , 'nom' );
        if(__test.__xst !== __xsu){
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_source' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_binaire_source'] === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur "binaire" doit être renseigné'} );
            __gi1.affiche_les_messages();
            __gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_binaire_source' ).focus();
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
          
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>dossier id</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input ';
        o1+=' id="chx_dossier_id_source" ';
        o1+=' type="hidden" ';
        o1+=' value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_dossier_id_source' )){
            o1+=__gi1.fi2( dupliquer['T0.chx_dossier_id_source'] );
        }else{
            o1+='';
        }
        o1+='"';
        o1+=' />';
        o1+='        <span id="chx_dossier_id_source_libelle">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chx_dossier_id_source' )){
            if(dupliquer['T0.chx_dossier_id_source'] === null){
                o1+='*indéfini';
            }else{
                o1+='(' + dupliquer['T0.chx_dossier_id_source'] + ') ';
                o1+=__gi1.fi2( dupliquer['T2.chp_nom_dossier'] );
            }
        }else{
            o1+='*indéfini';
        }
        o1+='</span>';
        /*
          ;
        */
        o1+=__gi1.lien_parent( 'c_dossiers1' , 'chx_dossier_id_source' , 'chx_dossier_id_source_libelle' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="64"   maxlength="64"  id="chp_nom_source" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_nom_source' )){
            o1+=__gi1.fi2( dupliquer['T0.chp_nom_source'] );
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
        o1+='      <span>commentaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea id="cht_commentaire_source" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_commentaire_source' )){
            o1+=__gi1.fi2( dupliquer['T0.cht_commentaire_source'] );
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
        o1+='            <textarea id="cht_rev_source" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_rev_source' )){
            o1+=__gi1.fi2( dupliquer['T0.cht_rev_source'] );
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
        o1+='      <span>genere</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea id="cht_genere_source" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_genere_source' )){
            o1+=__gi1.fi2( dupliquer['T0.cht_genere_source'] );
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
            o1+=__gi1.fi2( dupliquer['T0.che_binaire_source'] );
        }else{
            o1+='0';
        }
        o1+='" >';
        o1+='    </div>';
        o1+='  </div>';
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
        if(le_message_du_serveur === null || !le_message_du_serveur.__xva.hasOwnProperty( this.fonction_liste )){
            /* F5 */
            __gi1.affiche_les_messages();
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
                $parametres+=' id1(' + elem['T0.chi_id_source'] + ')';
                if(elem['T0.chx_parent_dossier'] === null){
                    $parametres+=' libelle1(\'' + elem['T0.chi_id_source'] + '\')';
                }else{
                    let libelle1='';
                    libelle1+='(' + elem['T0.chi_id_source'] + ') ';
                    libelle1+=elem['T0.chp_nom_source'];
                    $parametres+=' libelle1(\'' + __gi1.fi1( libelle1 ) + '\')';
                }
                $parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + $parametres + '">=&gt;</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_nom_source'] !== null){
                    lst+=elem['T0.chp_nom_source'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
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
                if(elem['T0.che_contient_version_source'] !== null){
                    lst+=elem['T0.che_contient_version_source'];
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
                o1+='<th>dossier id</th>';
                o1+='<th>nom dossier</th>';
                o1+='<th>contient version</th>';
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
                /*  */
                lst+='<td style="min-width:23em;">';
                lst+='<div style="display:inline-flex;">';
                /* yy_col_act_td1 */
                /*  */
                lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_source(' + elem['T0.chi_id_source'] + ')))))">' + __gi1.les_svg.poubelle + '</div>';
                lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_source(' + elem['T0.chi_id_source'] + ')))))">' + __gi1.les_svg.editer + '</div>';
                lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_source(' + elem['T0.chi_id_source'] + ')))))">' + __gi1.les_svg.dupliquer + '</div>';
                let affiche_bouton_compiler=true;
                if(elem['T0.che_binaire_source']){
                    affiche_bouton_compiler=false;
                }else{
                    /* sur rev1 / projet 1 ou 2, on ne peut compiler que la racine */
                    if(__gi1._CA_.slice( -7 ) === '_rev_1_'){
                        if(__gi1.chi_id_projet === 1 || __gi1.chi_id_projet === 2){
                            if(elem['T0.chx_dossier_id_source'] !== 1){
                                affiche_bouton_compiler=false;
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
                    lst+='))))">compiler</div>';
                }else{
                    lst+='<div class="rev_bouton yy__4 yy__4_inactif">compiler</div>';
                }
                if(__gi1._CA_.slice( -7 ) === '_rev_2_'){
                    /*  */
                    lst+='  <div class="rev_bouton yy__4" data-rev_click="';
                    lst+='pm1(m1(n1(' + this.moi + '),f1(importer_de_rev_un(chi_id_source(' + elem['T0.chi_id_source'] + ')))))';
                    lst+='" >importer de 1</div>';
                    /*  */
                    lst+='  <div class="rev_bouton yy__0" data-rev_click="';
                    lst+='pm1(m1(n1(' + this.moi + '),f1(exporter_dans_rev_un(chi_id_source(' + elem['T0.chi_id_source'] + ')))))';
                    lst+='" >exporter dans 1</div>';
                    /*  */
                }
                if(__gi1._CA_.slice( -7 ) === '_rev_1_' && le_message_du_serveur.__xva.chi_id_projet > 2){
                    lst+='  <div class="rev_bouton yy__2" data-rev_click="';
                    lst+='pm1(m1(n1(' + this.moi + '),f1(exporter_dans_base_de_prod1(chi_id_source(' + elem['T0.chi_id_source'] + ')))))';
                    lst+='" >⎘ dans la base de prod</div>';
                }
                lst+='</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_nom_source'] !== null){
                    lst+=__gi1.fi2( elem['T0.chp_nom_source'] );
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
                if(elem['T0.chx_dossier_id_source'] !== null){
                    lst+=elem['T0.chx_dossier_id_source'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T1.chp_nom_dossier'] !== null){
                    lst+=__gi1.fi2( elem['T1.chp_nom_dossier'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.che_contient_version_source'] !== null){
                    lst+='<input type="range" disabled id="che_est_souche_requete" class="yy_ouinon" min="0" max="1" step="1" value="' + elem['T0.che_contient_version_source'] + '">';
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.che_autorisation_globale_source'] !== null){
                    lst+='<input type="range" disabled id="che_est_souche_requete" class="yy_ouinon" min="0" max="1" step="1" value="' + elem['T0.che_autorisation_globale_source'] + '">';
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
                o1+='<th>dossier id</th>';
                o1+='<th>nom dossier</th>';
                o1+='<th>contient version</th>';
                o1+='<th>autorisation globale</th>';
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
export{c_sources1 as c_sources1};