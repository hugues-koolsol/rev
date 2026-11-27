class taches2{
    /*
      ref_liste_ecran=2021;
      ref_select=2022;
      ref_insert=;
      ref_update=;
      ref_delete=2025;
      avec_page_voir1=1;
    */
    moi='taches2';
    DUN_DUNE_ELEMENT_GERE='d\'une tâche';
    LISTE_DES_ELEMENTS_GERES='liste des tâches';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"nom" : '__num_page' ,"taille" : 9 ,"défaut" : 0 ,"masqué" : true} ,
            "T0_chi_id_tache" : {"nom" : 'id' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chx_utilisateur_tache" : {"nom" : 'utilisateur' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chp_texte_tache" : {"nom" : 'texte' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_che_priorite_tache" : {"nom" : 'priorité' ,"taille" : 2 ,"défaut" : '' ,"masqué" : false} ,
            "T0_che_priorite_tache2" : {"nom" : 'priorité <' ,"taille" : 2 ,"défaut" : '' ,"masqué" : false} ,
            "T1_chp_nom_de_connexion_utilisateur" : {"nom" : 'nom utilisateur' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false}
        }
    };
    /*
    */
    filtres={};
    __variables_module={};
    vv_ecran_liste_boutons_avant='';
    __champs_sortie_pour_tri1={
        "`T0`.`chi_id_tache`" : 'id' ,
        "`T0`.`chx_utilisateur_tache`" : 'utilisateur' ,
        "`T0`.`chp_texte_tache`" : 'texte' ,
        "`T0`.`che_priorite_tache`" : 'priorité' ,
        "`T0`.`che_priorite_tache`" : 'priorité' ,
        "`T1`.`chp_nom_de_connexion_utilisateur`" : 'nom de connexion'
    };
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
        /*
          this.vv_ecran_liste_boutons_avant+='<button class="yy_svg1 yy__xif" rev_clic1="m1(n1('+this.moi+'),f1(page_creer1()))" title="création'+this.DUN_DUNE_ELEMENT_GERE +'" >' + this.__ig1.les_svg.nouveau_document + '</button>';
        */
    }
    /*
      =============================================================================================================
    */
    page_confirmation_supprimer1( mat , d , le_colis1=null ){
        if(!le_colis1.__xva.hasOwnProperty( 'page_confirmation_supprimer1' )){
            return(this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : 'cet élément n\'a pas été trouvé'} ));
        }
        let tup=le_colis1.__xva.page_confirmation_supprimer1.__xva[0];
        if(tup.T0_chi_id_tache === undefined){
            return({"__xst" : __xer ,"__xme" : "Attention, le champ T0_chi_id_tache n'est pas en sortie dans la requête select "});
        }
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , tup.T0_chi_id_tache , this.moi , 'chi_id_tache' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {"nom_du_champ" : "chp_texte_tache" ,"__contexte" : "supprimer1" ,"libelle_du_champ" : "texte" ,"rows" : 10 ,"cols" : 50} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_de_zones_entier2( tup , {"nom_du_champ" : "che_priorite_tache" ,"__contexte" : "supprimer1" ,"libelle_du_champ" : "priorité" ,"lng_size" : 2 ,"lng_maxlength" : 2} );
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_tache" value="' + tup.T0_chi_id_tache + '" />';
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
        this.__ig1.repositionner_les_boutons_action( 'vv_ecran_suppression_zone_boutons' );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    afficher_le_contenu_sous_pg_voir1( mat , d , le_colis1=null ){
        /* let tup=le_colis1.__xva.page_voir1.__xva[0]; */
        let o2='';
        if(o2 !== ''){
            o2+='<div class="yy__bdp1"></div>';
        }
        document.getElementById( 'vv_ecran_visualisation_zone_complement' ).innerHTML=o2;
        if(this.__ig1.__decallage_page_avant_envoi > 0){
            try{
                setTimeout( () => {
                        window.scrollTo( {"top" : this.__ig1.__decallage_page_avant_envoi} );
                        this.__ig1.__decallage_page_avant_envoi=0;
                    } , 50 );
            }catch(e){
                debugger;
            }
        }
    }
    /*
      =============================================================================================================
    */
    page_voir1( mat , d , le_colis1=null ){
        if(!le_colis1.__xva.hasOwnProperty( 'page_voir1' )){
            return(this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : 'cet élément n\'a pas été trouvé'} ));
        }
        let tup=le_colis1.__xva.page_voir1.__xva[0];
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_visualisation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , tup.T0_chi_id_tache , this.moi , 'chi_id_tache' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_autrex2( tup , {
            "nom_du_champ" : "chx_utilisateur_tache" ,
            "__contexte" : "voir1" ,
            "libelle_du_champ" : "utilisateur" ,
            "nom_du_lien" : "utilisateurs1" ,
            "liste_des_champs_libelles" : ["T1_chp_nom_de_connexion_utilisateur"]
        } , this );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_edition_de_zones_textarea2( tup , {"nom_du_champ" : "chp_texte_tache" ,"__contexte" : "voir1" ,"libelle_du_champ" : "texte" ,"rows" : 10 ,"cols" : 50} );
        /*
          =====================================================================================================
        */
        o1+=this.__ig1.__fnt1.html_de_zones_entier2( tup , {"nom_du_champ" : "che_priorite_tache" ,"__contexte" : "voir1" ,"libelle_du_champ" : "priorité"} );
        /*
          =====================================================================================================
        */
        o1+='<div class="yy__bdp1"></div>';
        this.__ig1.maj_inner1( 'vv_ecran_visualisation_zone_contenu' , o1 );
        this.afficher_le_contenu_sous_pg_voir1( mat , d , le_colis1 );
        this.__ig1.maj_title_htm1( 'visualisation ' + this.DUN_DUNE_ELEMENT_GERE );
        this.__ig1.maj_hash( mat , 0 );
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
        this.__ig1.__fnt1.zones_filtres0( mat , d , le_colis1 , this , false , 'grandeurs2' , this.__champs_sortie_pour_tri1 );
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
            this.__ig1.initialisation_des_zones( this.moi , 'chi_id_tache' );
            initialisation_fait=true;
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES && a.getAttribute( 'data-contexte' ) === this.moi){
        }else{
            if(initialisation_fait === false){
                this.__ig1.initialisation_des_zones( this.moi , 'chi_id_tache' );
                a=document.getElementById( 'vv_titre_de_la_page' );
            }
            a.innerHTML=this.LISTE_DES_ELEMENTS_GERES;
            this.__ig1.afficher_les_zones( 'vv_ecran_liste' );
        }
        this.zones_filtres1( mat , d , le_colis1 );
        this.__ig1.vv_ecran_liste_zones_navigation1( le_colis1 , this.vv_ecran_liste_boutons_avant , 'liste1' );
        document.getElementById( 'vv_ecran_liste_zone_contenu' ).innerHTML=this.zones_liste1( le_colis1 );
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
        lst+='<div class="yy_act1">';
        lst+='<button class="yy_svg1 yy__2" rev_clic1="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_tache(' + tup.T0_chi_id_tache + ')))))">' + this.__ig1.les_svg.poubelle + '</button>';
        lst+='<button class="yy_svg1 yy__2" rev_clic1="pm1(m1(n1(' + this.moi + '),f1(page_voir1(chi_id_tache(' + tup.T0_chi_id_tache + ')))))">' + this.__ig1.les_svg.voir + '</button>';
        /*
          lst+='<button class="yy_svg1 yy__3" rev_clic1="pm1(m1(n1('+this.moi+'),f1(page_modification1(chi_id_tache(' + tup.T0_chi_id_tache + ')))))">'+this.__ig1.les_svg.editer+'</button>';
        */
        /*
          lst+='<button class="yy_svg1 yy__4" rev_clic1="pm1(m1(n1('+this.moi+'),f1(page_duplication1(chi_id_tache(' + tup.T0_chi_id_tache + ')))))">'+this.__ig1.les_svg.dupliquer+'</button>';
        */
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
                lst+='<span data-chi_id_tache="' + this.__ig1.fi2( tup.T0_chi_id_tache ) + '">' + this.__ig1.fi2( tup.T0_chi_id_tache ) + '</span>';
                lst+='</td>';
                /*
                  =====================================================================================
                */
                lst+='<td style="text-align:center;">';
                /* cas 8.2 */
                lst+='(' + this.__ig1.fi2( tup.T0_chx_utilisateur_tache ) + ')';
                lst+='</td>';
                /*
                  =====================================================================================
                */
                lst+='<td style="max-width:24em;overflow:hidden;">';
                /* cas 1 */
                lst+=this.__ig1.fi2( tup.T0_chp_texte_tache ).substr( 0 , 200 );
                lst+='</td>';
                /*
                  =====================================================================================
                */
                lst+='<td style="text-align:center;">';
                /* cas 9.1.3 */
                lst+=tup.T0_che_priorite_tache;
                lst+='</td>';
                /*
                  =====================================================================================
                */
                lst+='<td style="text-align:left;">';
                /* cas 3.4 */
                lst+=this.__ig1.fi2( tup.T1_chp_nom_de_connexion_utilisateur );
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
                o1+=/* chi_id_tache */'<th>id</th>';
                o1+=/* chx_utilisateur_tache */'<th>utilisateur</th>';
                o1+=/* chp_texte_tache */'<th>texte</th>';
                o1+=/* che_priorite_tache */'<th>priorité</th>';
                o1+=/* chp_nom_de_connexion_utilisateur */'<th>nom utilisateur</th>';
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
export{taches2 as taches2};