import {x_ecran_concevoir_une_requete1} from '/f0?n0=x_ecran_concevoir_une_requete1_c.js';
class requetes1{
    /*
      ref_select=354
      ref_insert=390
      ref_delete=352
      ref_update=355
      ref_liste_ecran=350
      350,355,352,390,354
    */
    moi='requetes1';
    DUN_DUNE_ELEMENT_GERE='d\'une requete';
    LISTE_DES_ELEMENTS_GERES='liste des requetes';
    __gi1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chi_id_requete" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_che_est_souche_requete" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'est souche' ,"taille" : 8} ,
            "T0_chp_type_requete" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'type' ,"taille" : 8} ,
            "T0_cht_rev_requete" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'rev' ,"taille" : 8} ,
            "T0_cht_commentaire_requete" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'commentaire' ,"taille" : 8} ,
            "T0_chi_id_requete2" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id &lt;=' ,"taille" : 12} ,
            "T0_chp_table_reference_requete" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'table de reference' ,"taille" : 8}
        } ,
        "sous_liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chi_id_requete" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_che_est_souche_requete" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'est souche' ,"taille" : 8} ,
            "T0_chp_type_requete" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'type' ,"taille" : 8} ,
            "T0_cht_rev_requete" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'rev' ,"taille" : 8} ,
            "T0_cht_commentaire_requete" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'commentaire' ,"taille" : 8} ,
            "T0_chi_id_requete2" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id &lt;=' ,"taille" : 12} ,
            "T0_chp_table_reference_requete" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'table de reference' ,"taille" : 8}
        }
    };
    fonction_liste='liste1';
    filtres={};
    vv_ecran_liste_boutons_avant='';
    concevoir_une_requete1=null;
    /*
      =============================================================================================================
    */
    compiler_cette_liste_de_sql_en_cron1(){
        let liste_des_chi_id_requete=[];
        let lst=document.querySelectorAll( "[data-chi_id_requete]" );
        for( let i=0 ; i < lst.length ; i++ ){
            liste_des_chi_id_requete.push( parseInt( lst[i].getAttribute( 'data-chi_id_requete' ) , 10 ) );
        }
        this.__gi1.envoyer_un_message_au_worker( {
                 /*  */
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(compiler_cette_liste_de_sql_en_cron2())))' ,
                "__xva" : {"liste_des_chi_id_requete" : liste_des_chi_id_requete}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    recuperer_requete_et_base_pour_compilation_en_ligne( mat , d , le_message_du_serveur=null ){
        let l01=mat.length;
        let chi_id_requete=0;
        let bouton_compiler='';
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'bouton_compiler' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                bouton_compiler=mat[i + 1][1];
            }
        }
        let obj=this.concevoir_une_requete1.compiler_en_ligne( mat , d , le_message_du_serveur );
        if(obj.__xst === __xsu){
            if(bouton_compiler !== ''){
                document.getElementById( bouton_compiler ).className='rev_bouton yy__1';
            }
            let obj1={
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(enregistrer_une_requete_compile_en_ligne1(chi_id_requete(' + chi_id_requete + ')))))' ,
                "__xva" : {
                    "chi_id_requete" : chi_id_requete ,
                    "cht_sql_requete" : obj.source_sql ,
                    "source_js" : obj.source_js ,
                    "cht_matrice_requete" : obj.matrice_requete ,
                    "chp_table_reference_requete" : obj.chp_table_reference_requete
                }
            };
            this.__gi1.envoyer_un_message_au_worker( obj1 );
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    compiler_requete1( mat , d ){
        let l01=mat.length;
        let chi_id_requete=0;
        let bouton_compiler='';
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'bouton_compiler' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                bouton_compiler=mat[i + 1][1];
            }
        }
        let obj={
            "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(recuperer_requete_et_base_pour_compilation_en_ligne(chi_id_requete(' + chi_id_requete + '),bouton_compiler(' + bouton_compiler + '),))))' ,
            "__xva" : {}
        };
        this.__gi1.envoyer_un_message_au_worker( obj );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_nouveau_numero_requete1( mat , d ){
        let l01=mat.length;
        let chi_id_requete=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_requete > 0){
            let o1='';
            o1+='<h1>Attribuer un nouveau numéro à une requete</h1>';
            o1+='le numéro actuel est <b>' + chi_id_requete + '</b>';
            o1+='<br />';
            o1+='<div id="vv_requetes_nouveau_numero1">';
            o1+='    <input type="hidden" id="vv_ancien_numero_de_requete" value="' + chi_id_requete + '" />';
            o1+='    le nouveau numéro sera : <input type="text" id="vv_nouveau_numero_de_requete" value="" />';
            o1+='    <br />';
            o1+='    <div class="rev_bouton" data-rev_click="';
            o1+='fo1(co1(vv_requetes_nouveau_numero1),pm1(m1(n1(' + this.moi + '),f1(vv_requetes_nouveau_numero1()))))';
            o1+='">attribuer ce nouveau numéro</div>';
            o1+='</div>';
            let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
            vv_sous_fenetre1.innerHTML=o1;
            /* __contenu_modale => vv_sous_fenetre1 */
            vv_sous_fenetre1.showModal();
            this.__gi1.ajoute_les_evenements_aux_boutons( null );
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    f1( mat , d , le_message_du_serveur=null ){
        switch (mat[d][1]){
            case 'enregistrer_une_requete_compile_en_ligne1' : break;
            case 'vv_requetes_nouveau_numero1' : 
            case 'compiler_cette_liste_de_sql_en_cron2' :
                this.__gi1.fermer_la_sous_fenetre();
                this.entree_module( null );
                break;
                
            default:
                this.__gi1.ajoute_message( {"__xst" : __xdv ,"__xme" : 'dans ' + this.moi + '_c, "' + mat[d][1] + '()" n\'est pas traitée ou bien comporte une erreur'} );
                return({"__xst" : __xer});
                
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    constructor( mat , d , __gi1 ){
        this.__gi1=__gi1;
        this.concevoir_une_requete1=new x_ecran_concevoir_une_requete1( [] , 0 , __gi1 );
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
            /* this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(page_creer1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + '" >' + this.__gi1.les_svg.nouveau_document + '</div>'; */
            this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__4" data-rev_click="m1(n1(x_ecran_concevoir_une_requete1),f1(page_requete1()))">+SQL</div>';
            this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(compiler_cette_liste_de_sql_en_cron1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + '" >compiler cette liste en cron</div>';
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
        if(fo1['che_est_souche_requete'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "requête souche ?" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_souche_requete' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_type_requete'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "type de requête" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_type_requete' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['chi_id_requete']=fo1['chi_id_requete'] === '' ? ( null ) : ( parseInt( fo1['chi_id_requete'] , 10 ) );
        fo1['che_est_souche_requete']=fo1['che_est_souche_requete'] === '' ? ( null ) : ( parseInt( fo1['che_est_souche_requete'] , 10 ) );
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
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_requete'] , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>requête souche ?</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.che_est_souche_requete'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <input type="range" id="che_est_souche_requete" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__gi1.fi2( enreg['T0.che_est_souche_requete'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>type de requête</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chp_type_requete'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_type_requete"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( enreg['T0.chp_type_requete'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_type_requete' );
        o1+='      <div style="display : inline-flex;flex-wrap : balance;">';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_requete),valeur(valeur_constante(liste_ecran)))))">liste_ecran</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_requete),valeur(valeur_constante(insert)))))">insert</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_requete),valeur(valeur_constante(select)))))">select</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_requete),valeur(valeur_constante(update)))))">update</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_requete),valeur(valeur_constante(delete)))))">delete</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_requete),valeur(valeur_constante(requete_manuelle)))))">requete_manuelle</div>';
        o1+='      </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>format rev de la requête</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.cht_rev_requete'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__gi1.__fnt1.boutons_edition1( 'cht_rev_requete' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  id="cht_rev_requete" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__gi1.fi2( enreg['T0.cht_rev_requete'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>format sql de la requête</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.cht_sql_requete'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__gi1.__fnt1.boutons_edition1( 'cht_sql_requete' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  id="cht_sql_requete" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__gi1.fi2( enreg['T0.cht_sql_requete'] );
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
        if(enreg['T0.cht_commentaire_requete'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__gi1.__fnt1.boutons_edition1( 'cht_commentaire_requete' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  id="cht_commentaire_requete" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__gi1.fi2( enreg['T0.cht_commentaire_requete'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>table de référence de la requête</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chp_table_reference_requete'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_table_reference_requete"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( enreg['T0.chp_table_reference_requete'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_table_reference_requete' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_requete" value="' + enreg['T0.chi_id_requete'] + '">';
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
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_requete'] , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>requête souche ?</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input disabled type="range" id="che_est_souche_requete" class="yy_ouinon" min="0" max="1" step="1" value="' + this.__gi1.fi2( enreg['T0.che_est_souche_requete'] ) + '" >';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>type de requête</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_type_requete"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( enreg['T0.chp_type_requete'] ) + '"   />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>format rev de la requête</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea disabled id="cht_rev_requete" rows="2"  cols="50" >' + this.__gi1.fi2( enreg['T0.cht_rev_requete'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>format sql de la requête</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea disabled id="cht_sql_requete" rows="2"  cols="50" >' + this.__gi1.fi2( enreg['T0.cht_sql_requete'] ) + '</textarea>';
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
        o1+='            <textarea disabled id="cht_commentaire_requete" rows="2"  cols="50" >' + this.__gi1.fi2( enreg['T0.cht_commentaire_requete'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>table de référence de la requête</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_table_reference_requete"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( enreg['T0.chp_table_reference_requete'] ) + '"   />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_requete" value="' + enreg['T0.chi_id_requete'] + '" />';
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
        if(fo1['chp_type_requete'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "type de requête" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_type_requete' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['che_est_souche_requete'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "requête souche ?" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'che_est_souche_requete' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['che_est_souche_requete']=fo1['che_est_souche_requete'] === '' ? ( null ) : ( parseInt( fo1['che_est_souche_requete'] , 10 ) );
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
        o1+='      <span>type de requête</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  disabled  type="text"  size="64"   maxlength="64"  id="chp_type_requete" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_type_requete' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_type_requete'] );
        }else{
            o1+='liste_ecran';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_type_requete' );
        o1+='    </div>';
        o1+='      <br />';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_requete),valeur(valeur_constante(liste_ecran)))))">liste_ecran</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_requete),valeur(valeur_constante(insert)))))">insert</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_requete),valeur(valeur_constante(select)))))">select</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_requete),valeur(valeur_constante(update)))))">update</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_requete),valeur(valeur_constante(delete)))))">delete</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_type_requete),valeur(valeur_constante(requete_manuelle)))))">requete_manuelle</div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>format rev de la requête</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + this.__gi1.__fnt1.boutons_edition1( 'cht_rev_requete' );
        o1+='            </div>\r\n';
        o1+='            <textarea  id="cht_rev_requete" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_rev_requete' )){
            o1+=this.__gi1.fi2( dupliquer['T0.cht_rev_requete'] );
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
        o1+='      <span>format sql de la requête</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + this.__gi1.__fnt1.boutons_edition1( 'cht_sql_requete' );
        o1+='            </div>\r\n';
        o1+='            <textarea  id="cht_sql_requete" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_sql_requete' )){
            o1+=this.__gi1.fi2( dupliquer['T0.cht_sql_requete'] );
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
        o1+='              ' + this.__gi1.__fnt1.boutons_edition1( 'cht_commentaire_requete' );
        o1+='            </div>\r\n';
        o1+='            <textarea  id="cht_commentaire_requete" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.cht_commentaire_requete' )){
            o1+=this.__gi1.fi2( dupliquer['T0.cht_commentaire_requete'] );
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
        o1+='      <span>requête souche ?</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="range" id="che_est_souche_requete" class="yy_ouinon" min="0" max="1" step="1" value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.che_est_souche_requete' )){
            o1+=this.__gi1.fi2( dupliquer['T0.che_est_souche_requete'] );
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
        o1+='      <span>table de référence de la requête</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  type="text"  size="64"   maxlength="64"  id="chp_table_reference_requete" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_table_reference_requete' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_table_reference_requete'] );
        }else{
            o1+='';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_table_reference_requete' );
        o1+='    </div>';
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
            o1+='       <span>&nbsp;</span>';
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
                parametres+=' id1(' + elem['T0.chi_id_requete'] + ')';
                let libelle1='';
                libelle1+='(' + elem['T0.chi_id_requete'] + ') ';
                libelle1+=elem['T0.cht_commentaire_requete'] ? ( ' , ' + elem['T0.cht_commentaire_requete'] ) : ( '' );
                parametres+=' libelle1(\'' + this.__gi1.fi1( libelle1 ) + '\')';
                parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + parametres + '">=&gt;</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_requete'] !== null){
                    lst+=elem['T0.chi_id_requete'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.che_est_souche_requete'] !== null){
                    lst+=elem['T0.che_est_souche_requete'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_type_requete'] !== null){
                    lst+=elem['T0.chp_type_requete'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.cht_rev_requete'] !== null){
                    lst+=elem['T0.cht_rev_requete'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.cht_commentaire_requete'] !== null){
                    lst+=elem['T0.cht_commentaire_requete'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_requete'] !== null){
                    lst+=elem['T0.chi_id_requete'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chp_table_reference_requete'] !== null){
                    lst+=elem['T0.chp_table_reference_requete'].substr( 0 , 100 ).replace( />/g , '&gt;' ).replace( /</g , '&lt;' );
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
                o1+='<th>est souche</th>';
                o1+='<th>type</th>';
                o1+='<th>rev</th>';
                o1+='<th>commentaire</th>';
                o1+='<th>id</th>';
                o1+='<th>table de reference</th>';
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
                lst+='<div class="rev_bouton yy__4" data-rev_click="';
                lst+='m1(n1(x_ecran_concevoir_une_requete1),f1(page_requete1(chi_id_requete(' + elem['T0.chi_id_requete'] + '))))';
                lst+='">SQL</div>';
                lst+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_requete(' + elem['T0.chi_id_requete'] + ')))))">' + this.__gi1.les_svg.poubelle + '</div>';
                lst+='<div class="rev_b_svg yy__1" data-rev_click="m1(n1(' + this.moi + '),f1(page_nouveau_numero_requete1(chi_id_requete(' + elem['T0.chi_id_requete'] + '))))" title="attribuer un autre numéro" >' + this.__gi1.les_svg.renuméroter + '</div>';
                lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_requete(' + elem['T0.chi_id_requete'] + ')))))">' + this.__gi1.les_svg.editer + '</div>';
                lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_requete(' + elem['T0.chi_id_requete'] + ')))))">' + this.__gi1.les_svg.dupliquer + '</div>';
                lst+='<div class="rev_bouton yy__4" id="vv_bouton_compiler_' + elem['T0.chi_id_requete'] + '" data-rev_click="';
                lst+='m1(n1(' + this.moi + '),f1(compiler_requete1(chi_id_requete(' + elem['T0.chi_id_requete'] + '),bouton_compiler(vv_bouton_compiler_' + elem['T0.chi_id_requete'] + '))))';
                lst+='" title="compiler cette requête">' + this.__gi1.les_svg.compiler + '</div>';
                lst+='</tdiv>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_requete'] !== null){
                    lst+='<span data-chi_id_requete="' + elem['T0.chi_id_requete'] + '">' + elem['T0.chi_id_requete'] + '</span>';
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
                lst+='<td style="text-align:center;">';
                if(elem['T0.che_est_souche_requete'] !== null){
                    if(elem['T0.che_est_souche_requete'] === 0){
                        lst+='<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__gi1.les_svg.rond_rouge1 + '</div>';
                    }else{
                        lst+='<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__gi1.les_svg.rond_vert1 + '</div>';
                    }
                }
                if(elem['T0.chp_type_requete'] !== null){
                    lst+=this.__gi1.fi2( elem['T0.chp_type_requete'] );
                }
                if(elem['T0.chp_table_reference_requete'] !== null && elem['T0.chp_table_reference_requete'] !== ''){
                    lst+='<br />' + this.__gi1.fi2( elem['T0.chp_table_reference_requete'] );
                }else{
                    lst+='<br /><b class="yy__0">pas de table</b>';
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;" title="' + this.__gi1.fi2( elem['T0.cht_sql_requete'] ) + '" id="T0.cht_sql_requete_' + elem['T0.chi_id_requete'] + '" style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_sql_requete'] !== null){
                    let cmd='m1(n1(__fnt1),f1(ajoute_le_contenu_du_titre(T0.cht_sql_requete_' + elem['T0.chi_id_requete'] + ')))';
                    lst+='<div  class="rev_b_svg" data-rev_click="' + cmd + '">' + this.__gi1.les_svg.agrandir + '</div>';
                    lst+=this.__gi1.fi2( elem['T0.cht_sql_requete'].substr( 0 , 100 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_rev_requete'] !== null){
                    lst+=this.__gi1.fi2( elem['T0.cht_rev_requete'].substr( 0 , 100 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_commentaire_requete'] !== null){
                    lst+=this.__gi1.fi2( elem['T0.cht_commentaire_requete'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                /*
                  lst+='<td style="max-width:360px;overflow:hidden;">';
                  if(elem['T0.cht_matrice_requete'] !== null){
                  lst+=this.__gi1.fi2( elem['T0.cht_matrice_requete'].substr( 0 , 200 ) );
                  }
                  lst+='</td>';
                */
                /*
                  lst+='<td style="text-align:center;">';
                  lst+='</td>';
                */
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table border="1">';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+='<th>id</th>';
                /* o1+='<th>est souche</th>'; */
                o1+='<th>souche/type/table de reference</th>';
                o1+='<th style="max-width:360px;">sql</th>';
                o1+='<th style="max-width:360px;">rev</th>';
                o1+='<th style="max-width:360px;">commentaire</th>';
                /* o1+='<th style="max-width:360px;">matrice</th>'; */
                /* o1+='<th>table de reference</th>'; */
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
export{requetes1 as requetes1};