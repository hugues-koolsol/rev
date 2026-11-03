class sources2{
    /*
      ref_liste_ecran=1221;
      ref_select=;
      ref_insert=;
      ref_update=;
      ref_delete=;
      pour_sous_liste_uniquement=1;
    */
    moi='sources2';
    DUN_DUNE_ELEMENT_GERE='d\'un source';
    LISTE_DES_ELEMENTS_GERES='liste des sources';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "sous_liste2" : {
            "__num_page" : {"nom" : '__num_page' ,"taille" : 9 ,"défaut" : 0 ,"masqué" : true} ,
            "T0_chp_nom_source" : {"nom" : 'nom' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chi_id_source" : {"nom" : 'id' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chi_id_source2" : {"nom" : 'id >' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_chi_id_source3" : {"nom" : 'id <=' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false} ,
            "T0_cht_rev_source" : {"nom" : 'rev' ,"taille" : 9 ,"défaut" : '' ,"masqué" : false}
        }
    };
    /*
    */
    filtres={};
    __variables_module={};
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
            for(let i in this.tableau_des_filtres.sous_liste2){
                this.filtres.sous_liste2[i]=jso[i]??this.tableau_des_filtres.sous_liste2[i].défaut;
            }
        }else{
            sessionStorage.setItem( this.__ig1.cle_lst0 + '_' + this.moi , JSON.stringify( {"filtres" : this.filtres} ) );
        }
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
            for(let i in le_colis1.__xva.sous_liste2.__xva){
                let tup=le_colis1.__xva.sous_liste2.__xva[i];
                lst+='<tr>';
                lst+='<td style="text-wrap-mode: nowrap;">';
                let parametres='';
                parametres+=la_methode;
                parametres+=' nom_champ_dans_parent2(' + obj2.nom_champ_dans_parent2 + ')';
                parametres+=' nom_libelle_dans_parent2(' + obj2.nom_libelle_dans_parent2 + ')';
                parametres+=' id2(' + tup.T0_chi_id_source + ')';
                let libelle2='';
                libelle2+='(' + tup.T0_chi_id_source + ') ';
                libelle2+=tup.T0_chp_nom_source ? ( ' , ' + this.__ig1.fi2( tup.T0_chp_nom_source ) ) : ( '' );
                parametres+=' libelle2(\'' + this.__ig1.fi1( libelle2 ).replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                parametres+=')))';
                lst+='  <button class="yy_b1 yy__2" rev_clic1="' + parametres + '">=&gt;</button>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                /* cas liste2 4.2 */
                lst+=this.__ig1.fi2( tup.T0_chi_id_source );
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                lst+=this.__ig1.fi2( tup.T0_chp_nom_source );
                lst+='</td>';
                /*
                */
                /* combinaison */
                lst+='<td style="max-width:24em;overflow:hidden;">';
                lst+=this.__ig1.fi2( tup.T0_cht_condition_rev_source ).substr( 0 , 200 );
                /* cas liste2 1.1 */
                lst+='<hr /><span class="" style="">' + this.__ig1.fi2( tup.T0_cht_notification_ko_source ) + '</span>';
                lst+='</td>';
                /*
                */
                /* combinaison */
                lst+='<td style="max-width:24em;overflow:hidden;">';
                lst+=this.__ig1.fi2( tup.T0_cht_commentaire_source ).substr( 0 , 200 );
                /* cas liste2 1.1 */
                lst+='<hr /><span class="" style="">' + this.__ig1.fi2( tup.T0_cht_rev_source ) + '</span>';
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
                o1+=/* combinaison */'<th>condition rev / message KO </th>';
                o1+=/* combinaison */'<th>commentaire / rev </th>';
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
export{sources2 as sources2};