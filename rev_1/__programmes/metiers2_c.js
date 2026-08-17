class metiers2{
    /*
      ref_liste_ecran=1217;
      ref_select=;
      ref_insert=;
      ref_update=;
      ref_delete=;
      pour_sous_liste_uniquement=1;
    */
    moi='metiers2';
    DUN_DUNE_ELEMENT_GERE='d\'un metier';
    LISTE_DES_ELEMENTS_GERES='liste des metiers';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "sous_liste2" : {
            "__num_page" : {"nom" : '__num_page' ,"taille" : 9 ,"défaut" : 0 ,"masqué" : true} ,
            "T0_chi_id_metier" : {"nom" : 'id' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chp_nom_metier" : {"nom" : 'nom' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chx_parent_metier" : {"nom" : 'id parent' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T1_chp_nom_metier" : {"nom" : 'métier parent' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false}
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
        let aa=sessionStorage.getItem( this.__ig1.cle_lst0 + '_' + this.moi );
        if(aa !== null){
            let jso=JSON.parse( aa );
            for(let i in this.tableau_des_filtres['sous_liste2']){
                this.filtres['sous_liste2'][i]=jso[i]??this.tableau_des_filtres['sous_liste2'][i].défaut;
            }
        }else{
            sessionStorage.setItem( this.__ig1.cle_lst0 + '_' + this.moi , JSON.stringify( {"filtres" : this.filtres} ) );
        }
        /*
          this.vv_ecran_liste_boutons_avant+='<div class="rev_b_svg yy__xif" data-rev_click="m1(n1('+this.moi+'),f1(page_creer1()))" title="création'+this.DUN_DUNE_ELEMENT_GERE +'" >' + this.__ig1.les_svg.nouveau_document + '</div>';
        */
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
        let obj2=this.__ig1.construire_les_zones_filtres2( mat , d , le_colis1 , this , 'grandeurs2' );
        o1+=obj2.html2;
        if(le_colis1 !== null && le_colis1.__xva.hasOwnProperty( 'sous_liste2' )){
            let la_methode='';
            let contient_une_methode=false;
            if(le_colis1.__xva.hasOwnProperty( 'methode_sur_click2' ) && le_colis1.__xva.methode_sur_click2.trim() !== ''){
                let methode_sur_click2=le_colis1.__xva.methode_sur_click2.trim();
                methode_sur_click2='m1(' + methode_sur_click2.substr( methode_sur_click2 , methode_sur_click2.length - 2 );
                la_methode='' + methode_sur_click2;
                contient_une_methode=true;
            }else{
                la_methode='m1(n1(__ig1),f1(choisir_dans_sous_fenetre2(';
            }
            let lst='';
            for(let i in le_colis1.__xva['sous_liste2'].__xva){
                let tup=le_colis1.__xva['sous_liste2'].__xva[i];
                lst+='<tr>';
                lst+='<td style="text-wrap-mode: nowrap;">';
                let parametres='';
                parametres+=la_methode;
                parametres+=' nom_champ_dans_parent2(' + obj2.nom_champ_dans_parent2 + ')';
                parametres+=' nom_libelle_dans_parent2(' + obj2.nom_libelle_dans_parent2 + ')';
                parametres+=' id2(' + tup.T0_chi_id_metier + ')';
                let libelle2='';
                libelle2+='(' + tup.T0_chi_id_metier + ') ';
                libelle2+=tup.T0_chp_nom_metier ? ( ' , ' + this.__ig1.fi2( tup.T0_chp_nom_metier ) ) : ( '' );
                parametres+=' libelle2(\'' + this.__ig1.fi1( libelle2 ).replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + parametres + '">=&gt;</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                lst+=this.__ig1.fi2( tup.T0_chi_id_metier );
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                lst+=this.__ig1.fi2( tup.T0_chp_nom_metier );
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                /* cas liste2 6.2 */
                lst+='(' + this.__ig1.fi2( tup.T0_chx_parent_metier ) + ') ';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                lst+=this.__ig1.fi2( tup.T1_chp_nom_metier );
                lst+='</td>';
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table>';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+=/* chi_id_metier */'<th>id</th>';
                o1+=/* chp_nom_metier */'<th>nom</th>';
                o1+=/* chx_parent_metier */'<th>id parent</th>';
                o1+=/* chp_nom_metier */'<th>métier parent</th>';
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
}
export{metiers2 as metiers2};