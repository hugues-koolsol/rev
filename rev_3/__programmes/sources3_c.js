class sources3{
    /*
      ref_liste_ecran=2011;
      ref_select=2012;
      ref_insert=;
      ref_update=;
      ref_delete=2015;
    */
    moi='sources3';
    DUN_DUNE_ELEMENT_GERE='d\'un source';
    LISTE_DES_ELEMENTS_GERES='liste des sources';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"nom" : '__num_page' ,"taille" : 9 ,"défaut" : 0 ,"masqué" : true} ,
            "T0_chp_nom_source" : {"nom" : 'nom' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chi_id_source" : {"nom" : 'id' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chi_id_source2" : {"nom" : 'id >' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chi_id_source3" : {"nom" : 'id <=' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_che_binaire_source" : {"nom" : 'binaire' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false ,"genre" : 5} ,
            "T0_che_autorisation_globale_source" : {"nom" : 'autorisation globale' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false ,"genre" : 5}
        }
    };
    /*
    */
    filtres={};
    __variables_module={};
    vv_ecran_liste_boutons_avant='';
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
            for(let i in this.tableau_des_filtres['liste1']){
                this.filtres['liste1'][i]=jso[i]??this.tableau_des_filtres['liste1'][i].défaut;
            }
        }
        /*
          this.vv_ecran_liste_boutons_avant+='<div class="yy_svg1 yy__xif" data-rev_click="m1(n1('+this.moi+'),f1(page_creer1()))" title="création'+this.DUN_DUNE_ELEMENT_GERE +'" >' + this.__ig1.les_svg.nouveau_document + '</div>';
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
        if(tup.T0_chi_id_source === undefined){
            return({"__xst" : __xer ,"__xme" : "Attention, le champ T0_chi_id_source n'est pas en sortie dans la requête select "});
        }
        this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , tup.T0_chi_id_source , this.moi , 'chi_id_source' );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_source" value="' + tup.T0_chi_id_source + '" />';
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
        
        this.__ig1.repositionner_les_boutons_action( 'vv_ecran_suppression_zone_boutons' );
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
    liste_des_boutons_action1( tup , le_colis1 ){
        let lst='';
        lst+='<div style="display:inline-flex;">';
        lst+='<div class="yy_svg1 yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_source(' + tup.T0_chi_id_source + ')))))">' + this.__ig1.les_svg.poubelle + '</div>';
        /*
          lst+='<div class="yy_svg1 yy__3" data-rev_click="pm1(m1(n1('+this.moi+'),f1(page_modification1(chi_id_source(' + tup.T0_chi_id_source + ')))))">'+this.__ig1.les_svg.editer+'</div>';
        */
        /*
          lst+='<div class="yy_svg1 yy__4" data-rev_click="pm1(m1(n1('+this.moi+'),f1(page_duplication1(chi_id_source(' + tup.T0_chi_id_source + ')))))">'+this.__ig1.les_svg.dupliquer+'</div>';
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
            for(let i in le_colis1.__xva['liste1'].__xva){
                let tup=le_colis1.__xva['liste1'].__xva[i];
                lst+='<tr>';
                lst+='<td>';
                lst+=this.liste_des_boutons_action1( tup , le_colis1 );
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                lst+='<span data-chi_id_source="' + this.__ig1.fi2( tup.T0_chi_id_source ) + '">' + this.__ig1.fi2( tup.T0_chi_id_source ) + '</span>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                /* cas 3.4 */
                lst+=this.__ig1.fi2( tup.T0_chp_nom_source );
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                /* cas 5 */
                if(tup.T0_che_binaire_source === 0){
                    lst+='<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_rouge1 + '</div>';
                }else{
                    lst+='<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_vert1 + '</div>';
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:24em;overflow:hidden;">';
                /* cas 1 */
                lst+=this.__ig1.fi2( tup.T0_cht_commentaire_source ).substr( 0 , 200 );
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                /* cas 5 */
                if(tup.T0_che_autorisation_globale_source === 0){
                    lst+='<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_rouge1 + '</div>';
                }else{
                    lst+='<div style="display:inline-block;height:var(--t_police);width:var(--t_police);margin:0 auto;">' + this.__ig1.les_svg.rond_vert1 + '</div>';
                }
                lst+='</td>';
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table>';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+=/* chi_id_source */'<th>id</th>';
                o1+=/* chp_nom_source */'<th>nom</th>';
                o1+=/* che_binaire_source */'<th>binaire</th>';
                o1+=/* cht_commentaire_source */'<th>commentaire</th>';
                o1+=/* che_autorisation_globale_source */'<th>autorisation globale</th>';
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
export{sources3 as sources3};