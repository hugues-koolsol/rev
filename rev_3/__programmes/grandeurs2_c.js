class grandeurs2{
    /*
      ref_liste_ecran=;
      ref_select=1225;
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
    /*
      =============================================================================================================
    */
    selectionner_une_grandeur_sous_liste2( mat , d ){
        return(this.__ig1.__fnt1.generique_selectionner_une_grandeur_sous_liste2( mat , d ));
    }
    /*
      =============================================================================================================
    */
    obtenir_les_grandeurs_pour_sous_liste2( mat , d , le_colis ){
        return(this.__ig1.__fnt1.generique_obtenir_les_grandeurs_pour_sous_liste2( mat , d , le_colis , this ));
    }
    /*
      =============================================================================================================
    */
    selectionner_des_grandeur_de_la_liste_pour_le_filtre( mat , d ){
        return(this.__ig1.__fnt1.generique_selectionner_des_grandeur_de_la_liste_pour_le_filtre( mat , d ));
    }
    /*
      =============================================================================================================
      UNE grandeurs quand on est sur une zone filtre
    */
    selectionner_une_grandeur_de_la_liste_pour_le_filtre( mat , d ){
        return(this.__ig1.__fnt1.generique_selectionner_une_grandeur_de_la_liste_pour_le_filtre( mat , d ));
    }
    /*
      =============================================================================================================
      PLUSIEURS grandeurs quand on est sur une zone filtre
    */
    obtenir_les_grandeurs_pour_filtre_liste2( mat , d , le_colis1=null ){
        return(this.__ig1.__fnt1.generique_obtenir_les_grandeurs_pour_filtre_liste2( mat , d , le_colis1 , this ));
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
        return(this.__ig1.generique_sous_liste_grandeur_pour_insertion( mat , d , le_colis1 , this.moi ));
    }
    /*
      =============================================================================================================
    */
}
export{grandeurs2 as grandeurs2};