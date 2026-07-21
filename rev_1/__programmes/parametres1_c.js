class parametres1{
    /*
      ref_liste_ecran=1181;
      ref_select=1182;
      ref_insert=1183;
      ref_update=1184;
      ref_delete=1185;
      pour_sous_liste_uniquement=0;
      est_une_grandeur=0;
    */
    moi='parametres1';
    DUN_DUNE_ELEMENT_GERE='d\'un paramètres';
    LISTE_DES_ELEMENTS_GERES='liste des paramètres';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chp_cle_parametre" : {"défaut" : '' ,"masqué" : false ,"nom" : 'cle' ,"taille" : 8} ,
            "T0_chi_id_parametre" : {"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chp_nom_parametre" : {"défaut" : '' ,"masqué" : false ,"nom" : 'nom' ,"taille" : 8} ,
            "T0_che_pour_admin_parametre" : {"défaut" : '' ,"masqué" : false ,"nom" : 'pour admin' ,"taille" : 8} ,
            "T0_cht_rev_parametre" : {"défaut" : '' ,"masqué" : false ,"nom" : 'rev' ,"taille" : 8}
        } ,
        "sous_liste2" : {
            "__num_page" : {"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chp_cle_parametre" : {"défaut" : '' ,"masqué" : false ,"nom" : 'cle' ,"taille" : 8} ,
            "T0_chi_id_parametre" : {"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_chp_nom_parametre" : {"défaut" : '' ,"masqué" : false ,"nom" : 'nom' ,"taille" : 8} ,
            "T0_che_pour_admin_parametre" : {"défaut" : '' ,"masqué" : false ,"nom" : 'pour admin' ,"taille" : 8} ,
            "T0_cht_rev_parametre" : {"défaut" : '' ,"masqué" : false ,"nom" : 'rev' ,"taille" : 8}
        }
    };
    /*
    */
    filtres={};
    vv_ecran_liste_boutons_avant='';
    /*
      =============================================================================================================
    */
    renumeroter_cette_grandeur1( mat , d ){
        let l01=mat.length;
        let chi_id_grandeur=0;
        let chi_id_parametre=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_grandeur' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_grandeur > 0 && chi_id_parametre > 0){
            let o1='';
            o1+='<h1>Attribuer un nouveau numéro à une grandeur</h1>';
            o1+='le numéro actuel est <b>' + chi_id_grandeur + '</b>';
            o1+='<br />';
            o1+='<div id="vv_grandeurs_nouveau_numero1">';
            o1+='    <input type="hidden" id="vv_ancien_numero_de_grandeur" value="' + chi_id_grandeur + '" />';
            o1+='    le nouveau numéro sera : <input type="text" id="vv_nouveau_numero_de_grandeur" value="" aria-autocomplete="list"/>';
            o1+='    <br />';
            o1+='    <div class="rev_bouton" data-rev_click="';
            o1+='fo1(co1(vv_grandeurs_nouveau_numero1),pm1(m1(n1(' + this.moi + '),f1(vv_grandeurs_nouveau_numero1(chi_id_parametre(' + chi_id_parametre + '))))))';
            o1+='">attribuer ce nouveau numéro</div>';
            o1+='</div>';
            this.__ig1.affiche_sous_fenetre1( o1 );
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    enregistrer_l_ordre_des_grandeurs1( evenement , reference_arbre ){
        let chi_id_parametre_en_cours_de_trie=document.getElementById( 'chi_id_parametre_en_cours_de_trie' ).value;
        let nouvel_ordre='';
        for(let i in reference_arbre.arbre){
            nouvel_ordre+=',' + reference_arbre.arbre[i].attributs['data-chi_id_grandeur'];
        }
        nouvel_ordre=nouvel_ordre.substr( 1 );
        let obj={
            "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(enregistrer_l_ordre_des_grandeurs2(chi_id_parametre(' + chi_id_parametre_en_cours_de_trie + ')))))' ,
            "__xva" : {"chi_id_parametre_en_cours_de_trie" : chi_id_parametre_en_cours_de_trie ,"nouvel_ordre" : nouvel_ordre}
        };
        this.__ig1.envoyer_un_colis_au_worker( obj );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modifier_la_valeur_de1( mat , d , données ){
        let chi_id_grandeur=0;
        let chi_id_parametre=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_grandeur' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        let __fo1={};
        __fo1[co1]=fo1;
        this.__ig1.envoyer_un_colis_au_worker( {
                 /*  */
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(modifier_la_valeur_de2(chi_id_grandeur(' + chi_id_grandeur + '),chi_id_parametre(' + chi_id_parametre + ')))))' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modifier_actif_de1( mat , d , données ){
        let chi_id_grandeur=0;
        let chi_id_parametre=0;
        const l01=mat.length;
        let decallage_vertical=window.scrollY;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_grandeur' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        let __fo1={};
        __fo1[co1]=fo1;
        this.__ig1.envoyer_un_colis_au_worker( {
                 /*  */
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(modifier_actif_de2(chi_id_grandeur(' + chi_id_grandeur + '),chi_id_parametre(' + chi_id_parametre + '),decallage_vertical(' + decallage_vertical + ')))))' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modifier_la_cle_de1( mat , d , données ){
        let chi_id_grandeur=0;
        let chi_id_parametre=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_grandeur' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        let __fo1={};
        __fo1[co1]=fo1;
        this.__ig1.envoyer_un_colis_au_worker( {
                 /*  */
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(modifier_la_cle_de2(chi_id_grandeur(' + chi_id_grandeur + '),chi_id_parametre(' + chi_id_parametre + ')))))' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    enregister_nouveau_parametre( mat , d , données ){
        let chi_id_parametre=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        let __fo1={};
        __fo1[co1]=fo1;
        this.__ig1.envoyer_un_colis_au_worker( {
                 /*  */
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(enregister_nouveau_parametre1(chi_id_parametre(' + chi_id_parametre + ')))))' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    f1( mat , d , le_colis1=null ){
        let chi_id_parametre=0;
        let decallage_vertical=0;
        const l01=mat.length;
        switch (mat[d][1]){
            case 'enregistrer_l_ordre_des_grandeurs2' : 
            case 'modifier_la_valeur_de2' : 
            case 'modifier_actif_de2' : 
            case 'modifier_la_cle_de2' : 
            case 'vv_grandeurs_nouveau_numero1' : 
            case 'enregister_nouveau_parametre1' :
                this.__ig1.fermer_la_sous_fenetre();
                for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                    if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                        chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
                    }else if(mat[i][1] === 'decallage_vertical' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                        decallage_vertical=parseInt( mat[i + 1][1] , 10 );
                    }
                }
                if(chi_id_parametre > 0){
                    let cmd='pm1(m1(n1(' + this.moi + '),f1(page_voir1(chi_id_parametre(' + chi_id_parametre + '),decallage_vertical(' + decallage_vertical + ')))))';
                    this.__ig1.executer1( cmd , null , null );
                }
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
    }
    /*
      =============================================================================================================
    */
    modifier1( mat , d , le_colis1=null ){
        if(le_colis1.__xva.hasOwnProperty( '__nouveau_nur' )){
            document.getElementById( 'che__nur_parametre' ).value=le_colis1.__xva.__nouveau_nur;
        }
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
        if(fo1['chp_cle_parametre'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "cle du paramètre" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_cle_parametre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_nom_parametre'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "nom du parametre" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_parametre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_pour_admin_parametre'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pour admin du parametre" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_pour_admin_parametre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_pour_admin_parametre'] !== ''){
            let tab_est_parmis_2='0,1'.split( ',' );
            if(!tab_est_parmis_2.includes( fo1['che_pour_admin_parametre'] )){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pour admin du parametre" doit être correctement renseignée (utilisez les boutons)'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'che_pour_admin_parametre' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        if(fo1['cht_rev_parametre'] !== null && fo1['cht_rev_parametre'] !== ''){
            let obj1=this.__ig1.__rev1.rev_tm( fo1['cht_rev_parametre'] );
            if(obj1.__xst !== __xsu){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu de "rev du parametre" n\'est pas dans un format rev valide'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'cht_rev_parametre' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        let __test_3_1=this.__ig1.__fnts_c_et_s.test_est_au_format_rev( fo1['cht_rev_parametre'] , 'rev du parametre' );
        if(__test_3_1.__xst !== __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_3_1.__xme} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'cht_rev_parametre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques verifier_modifier début */
        fo1['chi_id_parametre']=fo1['chi_id_parametre'] === '' ? ( null ) : ( parseInt( fo1['chi_id_parametre'] , 10 ) );
        fo1['che_pour_admin_parametre']=fo1['che_pour_admin_parametre'] === '' ? ( null ) : ( parseInt( fo1['che_pour_admin_parametre'] , 10 ) );
        if(isNaN( fo1['che_pour_admin_parametre'] )){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pour admin" doit être numérique'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_pour_admin_parametre' ).focus();
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_parametre'] , this.moi , 'chi_id_parametre' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>cle du paramètre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chp_cle_parametre'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_cle_parametre"  size="64"   maxlength="64"  value="' + this.__ig1.fi2( enreg['T0.chp_cle_parametre'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_cle_parametre' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chp_nom_parametre'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_nom_parametre"  size="64"   maxlength="64"  value="' + this.__ig1.fi2( enreg['T0.chp_nom_parametre'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_nom_parametre' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>pour admin du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.che_pour_admin_parametre'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="range" id="che_pour_admin_parametre" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__ig1.fi2( enreg['T0.che_pour_admin_parametre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>rev du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.cht_rev_parametre'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_rev3( 'cht_rev_parametre' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  data-editeur1="rev"  id="cht_rev_parametre" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( enreg['T0.cht_rev_parametre'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.cht_commentaire_parametre'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_edition1( 'cht_commentaire_parametre' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  id="cht_commentaire_parametre" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__ig1.fi2( enreg['T0.cht_commentaire_parametre'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        o1+='     <input  type="hidden" id="che__nur_parametre"   value="' + this.__ig1.fi2( enreg['T0.che__nur_parametre'] ) + '" />';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_parametre" value="' + enreg['T0.chi_id_parametre'] + '">';
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
        o1+=`<pre>champs_des_parametres(
   un_drapeau(
      #(un drapeau à 0 ou 1),
      genre_du_parametre(5)
   ),
   un_libellé_complémentaire_de_la_clé(
      #(un libellé complémentaire de la clé varchar 64 ),
      genre_du_parametre(12)
   )
   un_texte_complémentaire_de_la_clé(
      #(un texte complémentaire de la clé TEXT NULL ),
      genre_du_parametre(6)
   )
)</pre>`;
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_parametre'] , this.moi , 'chi_id_parametre' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>cle du paramètre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_cle_parametre"  size="64"   maxlength="64"  value="' + this.__ig1.fi2( enreg['T0.chp_cle_parametre'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_cle_parametre' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_nom_parametre"  size="64"   maxlength="64"  value="' + this.__ig1.fi2( enreg['T0.chp_nom_parametre'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_nom_parametre' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>pour admin du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_pour_admin_parametre" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__ig1.fi2( enreg['T0.che_pour_admin_parametre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>rev du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_rev_parametre' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_rev_parametre" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_rev_parametre'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_commentaire_parametre' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_commentaire_parametre" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_commentaire_parametre'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_parametre" value="' + enreg['T0.chi_id_parametre'] + '" />';
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_visualisation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_parametre'] , this.moi , 'chi_id_parametre' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>cle du paramètre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text" id="chp_cle_parametre"  size="64"   maxlength="64"  value="' + this.__ig1.fi2( enreg['T0.chp_cle_parametre'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_cle_parametre' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text" id="chp_nom_parametre"  size="64"   maxlength="64"  value="' + this.__ig1.fi2( enreg['T0.chp_nom_parametre'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_nom_parametre' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>pour admin du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_pour_admin_parametre" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__ig1.fi2( enreg['T0.che_pour_admin_parametre'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>rev du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_rev_parametre' );
        o1+='</div>\r\n';
        o1+='            <textarea id="cht_rev_parametre" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_rev_parametre'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_commentaire_parametre' );
        o1+='</div>\r\n';
        o1+='            <textarea id="cht_commentaire_parametre" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_commentaire_parametre'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        document.getElementById( 'vv_ecran_visualisation_zone_contenu' ).innerHTML=o1;
        /*
          =====================================================================================================
        */
        let o2='';
        if(enreg['T0.cht_rev_parametre'] !== null){
            let cht_rev_parametre=enreg['T0.cht_rev_parametre'];
            let obj_mat2=this.__ig1.__rev1.t2m( cht_rev_parametre );
            if(obj_mat2.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : "erreur de conversion de cht_rev_parametre [" + this.__ig1.nl2() + "]"});
            }
            let mat2=obj_mat2.__xva;
            o2+='<hr />';
            o2+='<h2>ajouter une grandeur</h2>';
            /*
              pour les paramètres autre que la langue
            */
            let l02=mat2.length;
            let le_tableau_parametre=[
                /*  */
                {"nom_du_parametre" : "che_actif_grandeur" ,"genre_du_parametre" : 5 ,"commentaire_du_parametre" : ""},
                {"nom_du_parametre" : "chp_cle_grandeur" ,"genre_du_parametre" : 3 ,"commentaire_du_parametre" : "entrez la valeur"}
            ];
            for( let i=1 ; i < l02 ; i=mat2[i][12] ){
                if(mat2[i][1] === 'champs_des_parametres' && mat2[i][2] === 'f'){
                    for( let j=i + 1 ; j < l02 ; j=mat2[j][12] ){
                        let nom_du_parametre='';
                        let genre_du_parametre=0;
                        let commentaire_du_parametre='';
                        if(mat2[j][2] === 'f' && mat2[j][1] === '#'){
                        }else if(mat2[j][2] === 'f'){
                            nom_du_parametre=mat2[j][1];
                            for( let k=j + 1 ; k < l02 ; k=mat2[k][12] ){
                                if(mat2[k][1] === 'genre_du_parametre' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                                    genre_du_parametre=parseInt( mat2[k + 1][1] , 10 );
                                }else if(mat2[k][1] === '#' && mat2[k][2] === 'f'){
                                    commentaire_du_parametre=mat2[k][13];
                                    /*  */
                                }
                            }
                        }
                        le_tableau_parametre.push( {"nom_du_parametre" : nom_du_parametre ,"genre_du_parametre" : genre_du_parametre ,"commentaire_du_parametre" : commentaire_du_parametre} );
                    }
                }
            }
            o2+='<div id="vv_formulaire_du_parametre">';
            for(let i in le_tableau_parametre){
                o2+='<br />';
                o2+='<b>' + le_tableau_parametre[i].nom_du_parametre + '</b>';
                o2+=' ';
                o2+=le_tableau_parametre[i].commentaire_du_parametre;
                let valeur='';
                if(le_tableau_parametre[i].nom_du_parametre === 'che_actif_grandeur'){
                    o2+='<input type="range" id="' + le_tableau_parametre[i].nom_du_parametre + '" class="yy_ouinon" min="0" max="1" step="1" value="0">';
                }else{
                    o2+='<br />';
                    if(le_tableau_parametre[i].genre_du_parametre === 5){
                        o2+='<input type="range" id="' + le_tableau_parametre[i].nom_du_parametre + '" class="yy_ouinon" min="0" max="1" step="1" value="0">';
                    }else if(le_tableau_parametre[i].genre_du_parametre === 6){
                        o2+='<textarea id="' + le_tableau_parametre[i].nom_du_parametre + '">' + valeur + '</textarea>';
                    }else{
                        o2+='<input id="' + le_tableau_parametre[i].nom_du_parametre + '" type="text" value="' + valeur + '" size="48">';
                    }
                }
                o2+='<hr />';
            }
            o2+='</div id="vv_formulaire_du_parametre">';
            o2+='<div class="rev_bouton yy__3" data-rev_click="fo1(co1(vv_formulaire_du_parametre),m1(n1(' + this.moi + '),f1(enregister_nouveau_parametre(chi_id_parametre(' + enreg['T0.chi_id_parametre'] + ')))))" title="ajouter" >ajouter</div>';
            if(enreg['T0.cht_ordre_parametre'] !== null){
                o2+='<h2>grandeurs existants</h2>';
                /* o2+=enreg['T0.cht_ordre_parametre']; */
                let obj_ordre=this.__ig1.__rev1.rev_tm( enreg['T0.cht_ordre_parametre'] , true );
                if(obj_ordre.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : "erreur de conversion de cht_ordre_parametre [" + this.__ig1.nl2() + "]"});
                }
                let mat_ordre=obj_ordre.__xva;
                console.log( "obj_ordre=" , obj_ordre );
                let les_grandeurs_du_parametre=[];
                for(let i in le_colis1.__xva.parametres_actuels){
                    les_grandeurs_du_parametre.push( {
                            "ordre_de_tri" : /* ordre de tri = 0 à priori */-1 ,
                            "chi_id_grandeur" : le_colis1.__xva.parametres_actuels[i]['T0.chi_id_grandeur'] ,
                            "chp_cle_grandeur" : le_colis1.__xva.parametres_actuels[i]['T0.chp_cle_grandeur'] ,
                            "cht_rev_grandeur" : le_colis1.__xva.parametres_actuels[i]['T0.cht_rev_grandeur'] ,
                            "che_actif_grandeur" : le_colis1.__xva.parametres_actuels[i]['T0.che_actif_grandeur']
                        } );
                }
                console.log( 'les_grandeurs_du_parametre=' , les_grandeurs_du_parametre );
                for( let i=0 ; i < les_grandeurs_du_parametre.length ; i++ ){
                    for( let j=1 ; j < mat_ordre.length ; j=mat_ordre[j][12] ){
                        if(parseInt( mat_ordre[j][1] , 10 ) === les_grandeurs_du_parametre[i].chi_id_grandeur){
                            les_grandeurs_du_parametre[i].ordre_de_tri=j - 1;
                            break;
                        }
                    }
                }
                les_grandeurs_du_parametre.sort( ( a , b ) => {
                        if(a.ordre_de_tri < b.ordre_de_tri){
                            return -1;
                        }else if(a.ordre_de_tri > b.ordre_de_tri){
                            return 1;
                        }
                        return 0;
                    } );
                o2+='<table border="1"  style="min-width:90%;">';
                o2+='<tr>';
                o2+='<th>id</th>';
                o2+='<th style="max-width:5em;">actif</th>';
                o2+='<th>cle</th>';
                o2+='<th>valeurs</th>';
                o2+='</tr>';
                for( let i=0 ; i < les_grandeurs_du_parametre.length ; i++ ){
                    o2+='<tr>';
                    /*
                    */
                    o2+='<td style="max-width:3em;text-align:center;">';
                    o2+=les_grandeurs_du_parametre[i].chi_id_grandeur;
                    o2+='<div class="rev_b_svg yy__3" data-rev_click="m1(n1(' + this.moi + '),f1(renumeroter_cette_grandeur1(';
                    o2+='chi_id_grandeur(' + les_grandeurs_du_parametre[i].chi_id_grandeur + '),';
                    o2+='chi_id_parametre(' + enreg['T0.chi_id_parametre'] + '),';
                    o2+=')))" title="renumeroter cette grandeur">' + this.__ig1.les_svg.renuméroter + '</div>';
                    o2+='</td>';
                    /*
                    */
                    o2+='<td style="max-width:5em;">';
                    o2+='<div id="vv_modifier_actif_de_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '">';
                    o2+='<input type="range" id="che_actif_grandeur_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '" class="yy_ouinon" min="0" max="1" step="1" value="' + les_grandeurs_du_parametre[i].che_actif_grandeur + '">';
                    /*  */
                    o2+='<div class="rev_b_svg yy__3" data-rev_click="fo1(co1(vv_modifier_actif_de_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '),m1(n1(' + this.moi + '),f1(modifier_actif_de1(';
                    o2+='chi_id_grandeur(' + les_grandeurs_du_parametre[i].chi_id_grandeur + '),';
                    o2+='chi_id_parametre(' + enreg['T0.chi_id_parametre'] + ')';
                    o2+='))))" title="modifier">' + this.__ig1.les_svg.editer + '</div>';
                    o2+='</div>';
                    o2+='</td>';
                    /*
                    */
                    o2+='<td>';
                    o2+='<div id="vv_modifier_la_cle_de_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '">';
                    o2+='<input type="text" id="chp_cle_grandeur_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '" class="" value="' + les_grandeurs_du_parametre[i].chp_cle_grandeur + '">';
                    /*  */
                    o2+='<div class="rev_b_svg yy__3" data-rev_click="fo1(co1(vv_modifier_la_cle_de_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '),m1(n1(' + this.moi + '),f1(modifier_la_cle_de1(';
                    o2+='chi_id_grandeur(' + les_grandeurs_du_parametre[i].chi_id_grandeur + '),';
                    o2+='chi_id_parametre(' + enreg['T0.chi_id_parametre'] + ')';
                    o2+='))))" title="modifier">' + this.__ig1.les_svg.editer + '</div>';
                    o2+='</div>';
                    o2+='</td>';
                    /*
                    */
                    o2+='<td>';
                    if(les_grandeurs_du_parametre[i].cht_rev_grandeur !== '0'){
                        o2+='<table border="1"  style="min-width:100%;">';
                        let obj_cht_rev_grandeur=this.__ig1.__rev1.t2m( les_grandeurs_du_parametre[i].cht_rev_grandeur );
                        if(obj_cht_rev_grandeur.__xst !== __xsu){
                            return({"__xst" : __xer ,"__xme" : "erreur de conversion de cht_rev_grandeur [" + this.__ig1.nl2() + "]"});
                        }
                        let mat3=obj_cht_rev_grandeur.__xva;
                        let l03=mat3.length;
                        let liste_des_noms_affiches=[];
                        for( let j=1 ; j < l03 ; j=mat3[j][12] ){
                            if(mat3[j][2] === 'f'){
                                let nom_d_val='';
                                let valeur_de_val='';
                                if(mat3[j][2] === 'f' && mat3[j][8] === 1 && mat3[j + 1][2] === 'c'){
                                    nom_d_val=mat3[j][1];
                                    valeur_de_val=mat3[j + 1][1];
                                    i;
                                }
                                if(nom_d_val !== ''){
                                    o2+='<tr>';
                                    o2+='<td>';
                                    liste_des_noms_affiches.push( nom_d_val );
                                    o2+=nom_d_val;
                                    o2+='</td>';
                                    o2+='<td>';
                                    /* o2+=valeur_de_val; */
                                    o2+='<div id="vv_modifier_la_valeur_de_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '_' + j + '">';
                                    /*  */
                                    o2+='<input type="hidden" id="__le_nom_de_la_valeur_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '_' + j + '" class="" value="' + nom_d_val + '" />';
                                    let genre_de_la_grandeur=0;
                                    for( let k=0 ; k < le_tableau_parametre.length ; k++ ){
                                        if(le_tableau_parametre[k].nom_du_parametre === nom_d_val){
                                            genre_de_la_grandeur=le_tableau_parametre[k].genre_du_parametre;
                                        }
                                    }
                                    if(genre_de_la_grandeur === 5){
                                        o2+='<input type="range" id="' + nom_d_val + '_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '" class="yy_ouinon" min="0" max="1" step="1" value="' + valeur_de_val + '" />';
                                    }else if(genre_de_la_grandeur === 6){
                                        o2+='<textarea id="' + nom_d_val + '_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '">' + valeur_de_val.replace( /\\\\/g , '\\' ).replace( /\\\'/g , '\'' ).replace( /¶LF¶/g , '\n' ).replace( /¶CR¶/g , '\r' ).replace( /¶CRLF¶/g , '\r\n' ) + '</textarea>';
                                    }else{
                                        o2+='<input type="text" id="' + nom_d_val + '_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '" class="" value="' + valeur_de_val.replace( /\\\\/g , '\\' ).replace( /\\\'/g , '\'' ) + '" />';
                                    }
                                    les_grandeurs_du_parametre[i]['valeur_de_val']=valeur_de_val;
                                    /*  */
                                    o2+='<div class="rev_b_svg yy__3" data-rev_click="fo1(co1(vv_modifier_la_valeur_de_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '_' + j + '),m1(n1(' + this.moi + '),f1(modifier_la_valeur_de1(';
                                    o2+='chi_id_grandeur(' + les_grandeurs_du_parametre[i].chi_id_grandeur + '),';
                                    o2+='chi_id_parametre(' + enreg['T0.chi_id_parametre'] + ')';
                                    o2+='))))" title="modifier">' + this.__ig1.les_svg.editer + '</div>';
                                    /*  */
                                    o2+='</div>';
                                    o2+='</td>';
                                    o2+='</tr>';
                                }
                            }
                        }
                        for( let k=0 ; k < le_tableau_parametre.length ; k++ ){
                            /* k */
                            if(le_tableau_parametre[k].nom_du_parametre === "che_actif_grandeur"
                                   || le_tableau_parametre[k].nom_du_parametre === "chp_cle_grandeur"
                            ){
                            }else{
                                if(liste_des_noms_affiches.includes( le_tableau_parametre[k].nom_du_parametre )){
                                    /* déjà affiché plus haut */
                                }else{
                                    o2+='<tr>';
                                    o2+='<td>';
                                    o2+='<span class="yy__0">' + le_tableau_parametre[k].nom_du_parametre + '</span>';
                                    /* nom_d_val */
                                    o2+='</td>';
                                    o2+='<td>';
                                    /* debugger */
                                    o2+='<div id="vv_modifier_la_valeur_de_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '_' + k + '">';
                                    /*  */
                                    o2+='<input type="hidden" id="__le_nom_de_la_valeur_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '_' + k + '" class="" value="' + le_tableau_parametre[k].nom_du_parametre + '" />';
                                    let genre_de_la_grandeur=le_tableau_parametre[k].genre_du_parametre;
                                    if(genre_de_la_grandeur === 5){
                                        o2+='<input type="range" id="' + le_tableau_parametre[k].nom_du_parametre + '_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '" class="yy_ouinon" min="0" max="1" step="1" value="0" />';
                                    }else{
                                        o2+='<input type="text" id="' + le_tableau_parametre[k].nom_du_parametre + '_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '" class="" value="" />';
                                    }
                                    /* les_grandeurs_du_parametre[i]['valeur_de_val']=valeur_de_val; // j k */
                                    /*  */
                                    o2+='<div class="rev_b_svg yy__3" data-rev_click="fo1(co1(vv_modifier_la_valeur_de_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '_' + k + '),m1(n1(' + this.moi + '),f1(modifier_la_valeur_de1(';
                                    o2+='chi_id_grandeur(' + les_grandeurs_du_parametre[i].chi_id_grandeur + '),';
                                    o2+='chi_id_parametre(' + enreg['T0.chi_id_parametre'] + ')';
                                    o2+='))))" title="modifier">' + this.__ig1.les_svg.editer + '</div>';
                                    /*  */
                                    o2+='</div>';
                                    o2+='</td>';
                                    o2+='</tr>';
                                }
                            }
                        }
                        o2+='</table>';
                    }else{
                        /* si on modifie le rev du paramètre et que précédamment il est = '0'; */
                        o2+='<table border="1"  style="min-width:100%;">';
                        for( let j=0 ; j < le_tableau_parametre.length ; j++ ){
                            if(le_tableau_parametre[j].nom_du_parametre === 'che_actif_grandeur'
                                   || le_tableau_parametre[j].nom_du_parametre === 'chp_cle_grandeur'
                            ){
                                /* pas pour les champs toujours présents */
                            }else{
                                o2+='<tr>';
                                o2+='<td>';
                                o2+='<span class="yy__2">' + le_tableau_parametre[j].nom_du_parametre + '</span>';
                                o2+='</td>';
                                o2+='<td>';
                                /* o2+=valeur_de_val; */
                                o2+='<div id="vv_modifier_la_valeur_de_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '_' + j + '">';
                                /*  */
                                o2+='<input type="hidden" id="__le_nom_de_la_valeur_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '_' + j + '" class="" value="' + le_tableau_parametre[j].nom_du_parametre + '" />';
                                if(le_tableau_parametre[j].genre_du_parametre === 5){
                                    o2+='<input type="range" id="' + le_tableau_parametre[j].nom_du_parametre + '_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '" class="yy_ouinon" min="0" max="1" step="1" value="0" >';
                                }else{
                                    o2+='<input type="text" id="' + le_tableau_parametre[j].nom_du_parametre + '_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '" class="" value="" />';
                                }
                                /*  */
                                o2+='<div class="rev_b_svg yy__3" data-rev_click="fo1(co1(vv_modifier_la_valeur_de_' + les_grandeurs_du_parametre[i].chi_id_grandeur + '_' + j + '),m1(n1(' + this.moi + '),f1(modifier_la_valeur_de1(';
                                o2+='chi_id_grandeur(' + les_grandeurs_du_parametre[i].chi_id_grandeur + '),';
                                o2+='chi_id_parametre(' + enreg['T0.chi_id_parametre'] + ')';
                                o2+='))))" title="modifier">' + this.__ig1.les_svg.editer + '</div>';
                                /*  */
                                o2+='</div>';
                                o2+='</td>';
                                o2+='</tr>';
                            }
                        }
                        o2+='</table border="1"  style="min-width:100%;">';
                    }
                    o2+='</td>';
                    /* "1( chp_cle_grandeur(fr) che_actif_grandeur(1) val_1('français'))" */
                    o2+='</tr>';
                }
                o2+='</table border="1"  style="min-width:90%;">';
                if(les_grandeurs_du_parametre.length > 1){
                    o2+='<hr /><h2>tri des grandeurs</h2>';
                    o2+='<input type="hidden" id="chi_id_parametre_en_cours_de_trie" value="' + enreg['T0.chi_id_parametre'] + '" />';
                    o2+='<div  style="display:flex;padding-bottom:3em;">';
                    o2+=' <div style="margin : 0 auto 0 auto;">';
                    o2+='   <ul id="vv_tri_' + this.moi + '">';
                    for(let i in les_grandeurs_du_parametre){
                        o2+='      <li data-chi_id_grandeur="' + les_grandeurs_du_parametre[i].chi_id_grandeur + '">';
                        o2+='      <div>';
                        if(les_grandeurs_du_parametre[i].che_actif_grandeur === 0){
                            o2+='<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_rouge1 + '</div>';
                        }else{
                            o2+='<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_vert1 + '</div>';
                        }
                        o2+=les_grandeurs_du_parametre[i].chp_cle_grandeur + '';
                        o2+='      </div>';
                        o2+='     </li>';
                    }
                    o2+='   </ul>';
                    o2+=' </div>';
                    o2+='</div>';
                    let options1={
                        "hauteur_max_en_vh" : /* entre 20 et 80 */80 ,
                        "largeur_max" : /* 'calc(100% - 50px)', */'340px' ,
                        "afficher_le_bouton_supprimer" : 0 ,
                        "class_du_bouton_supprimer" : 'rev_bouton yy__0' ,
                        "arborescent" : 0 ,
                        "class_du_bouton_deplacer" : 'rev_bouton' ,
                        "boutons_du_menu" : [] ,
                        "class_du_bouton_menu" : 'rev_bouton' ,
                        "class_du_bouton_replier" : 'rev_bouton yy__2'
                    };
                    options1.boutons_du_menu.push( {"libelle" : '💾' ,"fonction" : this.enregistrer_l_ordre_des_grandeurs1.bind( this )} );
                    options1['afficher_le_bouton_editer']=0;
                    options1['class_du_bouton_editer']='rev_bouton yy__xif';
                    import( './f0?n0=_tri_arbre1_c.js&__version=' + this.__version ).then( ( le_module ) => {
                            let aa=new le_module['_tri_arbre1']( this );
                            aa.construire_arbre( 'vv_tri_' + this.moi , options1 );
                    } );
                }
            }
        }else{
        }
        if(le_colis1.__xva.hasOwnProperty( 'decallage_vertical' ) && le_colis1.__xva.decallage_vertical > 0){
            try{
                setTimeout( () => {
                        window.scrollTo( {"top" : le_colis1.__xva.decallage_vertical} );
                    } , 100 );
            }catch(e){
                debugger;
            }
        }
        document.getElementById( 'vv_ecran_visualisation_zone_complement' ).innerHTML=o2;
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
        if(fo1['chp_cle_parametre'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "cle du paramètre" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_cle_parametre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_nom_parametre'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "nom du parametre" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_parametre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_pour_admin_parametre'] === ''){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pour admin du parametre" doit être renseignée'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_pour_admin_parametre' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_pour_admin_parametre'] !== ''){
            let tab_est_parmis_2='0,1'.split( ',' );
            if(!tab_est_parmis_2.includes( fo1['che_pour_admin_parametre'] )){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "pour admin du parametre" doit être correctement renseignée (utilisez les boutons)'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'che_pour_admin_parametre' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        /* conversion des données numériques verifier_creer début */
        fo1['che_pour_admin_parametre']=fo1['che_pour_admin_parametre'] === '' ? ( null ) : ( parseInt( fo1['che_pour_admin_parametre'] , 10 ) );
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
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_creation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , null , this.moi , 'chi_id_parametre' );
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
        o1+='      <span>cle du paramètre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="48"   maxlength="64"  id="chp_cle_parametre" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_cle_parametre' )){
            o1+=this.__ig1.fi2( dupliquer['T0.chp_cle_parametre'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_cle_parametre' );
        o1+='    </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="48"   maxlength="64"  id="chp_nom_parametre" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_nom_parametre' )){
            o1+=this.__ig1.fi2( dupliquer['T0.chp_nom_parametre'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__ig1.__fnt1.boutons_edition_text( 'chp_nom_parametre' );
        o1+='    </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>pour admin du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_pour_admin_parametre" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_pour_admin_parametre' )){
            o1+=this.__ig1.fi2( dupliquer['T0.che_pour_admin_parametre'] );
        }else{
            o1+='0';
        }
        o1+='" />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire du parametre</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + this.__ig1.__fnt1.boutons_edition1( 'cht_commentaire_parametre' );
        o1+='            </div>\r\n';
        o1+='            <textarea  id="cht_commentaire_parametre" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_commentaire_parametre' )){
            o1+=this.__ig1.fi2( dupliquer['T0.cht_commentaire_parametre'] );
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
        let cle_session=this.__ig1.cle_lst0 + '_' + this.moi + '_liste1';
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
            o1+='<div class="yy_filtre_liste1" id="liste1">';
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
                    if(this.tableau_des_filtres['liste1'][i].hasOwnProperty( 'rerefence_a_une_grandeur' )){
                        o1+='<div class="rev_bouton yy__4" data-rev_click="m1(n1(__fnt1),f1(selection_grandeur_filtre1(';
                        o1+='id_zone(' + i + ')';
                        o1+='chi_id_parametre(' + this.tableau_des_filtres['liste1'][i].rerefence_a_une_grandeur.chi_id_parametre + ')';
                        o1+='table_mere(' + this.tableau_des_filtres['liste1'][i].rerefence_a_une_grandeur.chi_id_parametre + ')';
                        o1+=')))">?</div>';
                        o1+='<div class="rev_bouton yy__4" data-rev_click="m1(n1(__fnt1),f1(raz_zone_et_select1(id(' + i + '))))">x</div>';
                    }else{
                        if(this.filtres['liste1'][i] && this.filtres['liste1'][i] !== ''){
                            o1+='<div class="rev_bouton yy__4" data-rev_click="m1(n1(__fnt1),f1(raz_zone_et_select1(id(' + i + '))))">x</div>';
                        }
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
            o1+='fo1(co1(liste1),pm1(m1(n1(' + this.moi + '),f1(liste1(__num_page(0))))))';
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
                        }
                    } );
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
        let o1='';
        let initialisation_fait=false;
        let a=document.getElementById( 'vv_titre_de_la_page' );
        if(a === null){
            this.__ig1.initialisation_des_zones( this.moi , 'chi_id_parametre' );
            initialisation_fait=true;
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES && a.getAttribute( 'data-contexte' ) === this.moi){
        }else{
            if(initialisation_fait === false){
                this.__ig1.initialisation_des_zones( this.moi , 'chi_id_parametre' );
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
                parametres+=' id2(' + elem['T0.chi_id_parametre'] + ')';
                let libelle2='';
                libelle2+='(';
                libelle2+=elem['T0.chi_id_parametre'];
                libelle2+=') ';
                libelle2+=' ';
                parametres+=' libelle2(\'' + this.__ig1.fi1( libelle2 ).replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + parametres + '">=&gt;</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_parametre'] !== null){
                    lst+=elem['T0.chi_id_parametre'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_cle_parametre'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.chp_cle_parametre'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_nom_parametre'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.chp_nom_parametre'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.che_pour_admin_parametre'] !== null){
                    if(elem['T0.che_pour_admin_parametre'] === 0){
                        lst+='<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_rouge1 + '</div>';
                    }else{
                        lst+='<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_vert1 + '</div>';
                    }
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_commentaire_parametre'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.cht_commentaire_parametre'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_rev_parametre'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.cht_rev_parametre'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_ordre_parametre'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.cht_ordre_parametre'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table border="1">';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+=/* chi_id_parametre */'<th>id</th>';
                o1+=/* chp_cle_parametre */'<th>cle</th>';
                o1+=/* chp_nom_parametre */'<th>nom</th>';
                o1+=/* che_pour_admin_parametre */'<th>pour admin</th>';
                o1+=/* cht_commentaire_parametre */'<th style="max-width:360px;">commentaire</th>';
                o1+=/* cht_rev_parametre */'<th style="max-width:360px;">rev</th>';
                o1+=/* cht_ordre_parametre */'<th style="max-width:360px;">ordre</th>';
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
                /* fonctions_spéciales1(ne_pas_supprimer_id_un(2)) */
                if(elem['T0.chi_id_parametre'] <= 2){
                    lst+='<div class="rev_b_svg yy__2 yy__2_inactif">' + this.__ig1.les_svg.poubelle + '</div>';
                }else{
                    lst+='<div class="rev_b_svg yy__2" data-rev_click="';
                    lst+='pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_parametre(' + elem['T0.chi_id_parametre'] + ')))))';
                    lst+='">' + this.__ig1.les_svg.poubelle + '</div>';
                }
                lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_voir1(chi_id_parametre(' + elem['T0.chi_id_parametre'] + ')))))">' + this.__ig1.les_svg.voir + '</div>';
                lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_parametre(' + elem['T0.chi_id_parametre'] + ')))))">' + this.__ig1.les_svg.editer + '</div>';
                lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_parametre(' + elem['T0.chi_id_parametre'] + ')))))">' + this.__ig1.les_svg.dupliquer + '</div>';
                lst+='<div class="rev_b_svg yy__1" data-rev_click="m1(n1(grandeurs1),f1(entree_module()))">grandeurs</div>';
                lst+='</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_parametre'] !== null){
                    lst+=elem['T0.chi_id_parametre'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_cle_parametre'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.chp_cle_parametre'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_nom_parametre'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.chp_nom_parametre'] );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.che_pour_admin_parametre'] !== null){
                    if(elem['T0.che_pour_admin_parametre'] === 0){
                        lst+='<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_rouge1 + '</div>';
                    }else{
                        lst+='<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_vert1 + '</div>';
                    }
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_commentaire_parametre'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.cht_commentaire_parametre'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_rev_parametre'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.cht_rev_parametre'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_ordre_parametre'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.cht_ordre_parametre'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table border="1">';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+=/* chi_id_parametre */'<th>id</th>';
                o1+=/* chp_cle_parametre */'<th>cle</th>';
                o1+=/* chp_nom_parametre */'<th>nom</th>';
                o1+=/* che_pour_admin_parametre */'<th>pour admin</th>';
                o1+=/* cht_commentaire_parametre */'<th style="max-width:360px;">commentaire</th>';
                o1+=/* cht_rev_parametre */'<th style="max-width:360px;">rev</th>';
                o1+=/* cht_ordre_parametre */'<th style="max-width:360px;">ordre</th>';
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
export{parametres1 as parametres1};