class grandeurs2{
    /*
      ref_liste_ecran=1210;
      ref_select=;
      ref_insert=;
      ref_update=;
      ref_delete=;
      pour_sous_liste_uniquement=1;
      est_une_grandeur=1;
    */
    moi='grandeurs2';
    DUN_DUNE_ELEMENT_GERE='d\'une grandeur';
    LISTE_DES_ELEMENTS_GERES='liste des grandeurs';
    __ig1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chp_cle_grandeur" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'cle' ,"taille" : 8} ,
            "T0_chi_id_grandeur" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_cht_rev_grandeur" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'rev' ,"taille" : 8}
        } ,
        "sous_liste2" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chp_cle_grandeur" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'cle' ,"taille" : 8} ,
            "T0_chi_id_grandeur" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12} ,
            "T0_cht_rev_grandeur" : {"type_filtre" : 'TEXT' ,"défaut" : '' ,"masqué" : false ,"nom" : 'rev' ,"taille" : 8}
        }
    };
    /*
    */
    filtres={};
    vv_ecran_liste_boutons_avant='';
    
    
    /*
      =============================================================================================================
    */
    selectionner_des_grandeur_de_la_liste_pour_le_filtre( mat , d ){
        let id_zone='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'id_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_zone=mat[i + 1][1];
            }
        }
        if(id_zone !== ''){
            let la_liste='';
            let les_cases=document.getElementById('vv_liste_des_grandeurs').getElementsByTagName('input');
            for( let i=0 ; i < les_cases.length ; i++){
                if(les_cases[i].checked === true){
                   la_liste+=','+les_cases[i].value;
                }
            }
            if(la_liste!==''){
               la_liste=la_liste.substr(1);
               try{
                document.getElementById(id_zone).value=la_liste;
                this.__ig1.fermer_la_sous_fenetre();
               }catch{}
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    selectionner_une_grandeur_de_la_liste_pour_le_filtre( mat , d ){
        let chi_id_grandeur=0;
        let id_zone='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_grandeur' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_zone=mat[i + 1][1];
            }
        }
        if(chi_id_grandeur > 0 && id_zone !== ''){
         try{
          document.getElementById(id_zone).value=chi_id_grandeur;
          this.__ig1.fermer_la_sous_fenetre();
         }catch{}
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    obtenir_les_grandeurs_pour_filtre_liste2( mat , d , le_colis1=null ){
        let chi_id_parametre=le_colis1.__xva.chi_id_parametre
        let id_zone=le_colis1.__xva.id_zone
        let o1='';
        o1+='<h1>Choisir une grandeur</h1>';
        o1+='<table border="1" id="vv_liste_des_grandeurs">';
        o1+='<tr>';
        o1+='<th>';
        o1+='<div class="rev_bouton yy__1" data-rev_click="m1(n1(' + this.moi + '),f1(selectionner_des_grandeur_de_la_liste_pour_le_filtre(id_zone(' + id_zone + '))))">=&gt;</div>';
        o1+='';
        o1+='</th>';
        o1+='<th>id</th>';
        o1+='<th>cle</th>';
        o1+='</tr>';
        for(let i in le_colis1.__xva.liste_des_grandeurs){
            o1+='<tr>';
            o1+='<td>';
            o1+='<input type="checkbox" unchecked value="' +le_colis1.__xva.liste_des_grandeurs[i]['T0.chi_id_grandeur'] + '" />';
            o1+='<div class="rev_bouton yy__1" data-rev_click="m1(n1(' + this.moi + '),f1(selectionner_une_grandeur_de_la_liste_pour_le_filtre(';
            o1+='chi_id_grandeur(' +le_colis1.__xva.liste_des_grandeurs[i]['T0.chi_id_grandeur'] + '),'
            o1+='id_zone(' + id_zone + '),'
            o1+=')))">=&gt;</div>';
            o1+='</td>';
            o1+='<td>';
            o1+=le_colis1.__xva.liste_des_grandeurs[i]['T0.chi_id_grandeur'];
            o1+='</td>';
            o1+='<td>';
            o1+=le_colis1.__xva.liste_des_grandeurs[i]['T0.chp_cle_grandeur'];
            o1+='</td>';
            o1+='</tr>';
        }
        o1+='</table border="1">';
        
//        o1+='choisir une valeur ' + d + ' xxxx ' + JSON.stringify(le_colis1);
        this.__ig1.affiche_sous_fenetre1( o1 );
        return({"__xst" : __xsu});
    }
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
                parametres+=' id2(' + elem['T0.chi_id_grandeur'] + ')';
                let libelle2='';
                libelle2+='(';
                libelle2+=elem['T0.chi_id_grandeur'];
                libelle2+=') ';
                libelle2+=' ';
                libelle2+=elem['T0.chp_cle_grandeur'] ? ( ' , ' + elem['T0.chp_cle_grandeur'] ) : ( '' );
                parametres+=' libelle2(\'' + this.__ig1.fi1( libelle2 ).replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + parametres + '">=&gt;</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_grandeur'] !== null){
                    lst+=elem['T0.chi_id_grandeur'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.chp_cle_grandeur'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.chp_cle_grandeur'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.cht_rev_grandeur'] !== null){
                    lst+=this.__ig1.fi2( elem['T0.cht_rev_grandeur'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table border="1">';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+=/* chi_id_grandeur */'<th>id</th>';
                o1+=/* chp_cle_grandeur */'<th style="max-width:360px;">cle</th>';
                o1+=/* cht_rev_grandeur */'<th style="max-width:360px;">rev</th>';
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
export{grandeurs2 as grandeurs2};