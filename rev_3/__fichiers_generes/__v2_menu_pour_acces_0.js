class v2_menu_pour_acces_0{
    /*
      =============================================================================================================
    */
    __ig1=null;
    constructor(__ig1){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
    obtenir_le_html_des_menus( donnees_retournees ){
        let les_menu1='';
        /* contenu initialisé avec une chaine vide pour indice 0 */
        let les_sous_menus=[''];
        les_menu1+=`<li><div id="menu_1" data-id_auto="36" data-id_menu="15" class="rev_bouton" data-rev_click="m1(n1(x_ecran_a_propos1),f1(entree_module()))" title="à propos">à propos</div></li>`;


        if(les_menu1 !== ''){
            les_menu1='<ul data-rev_menu="1" class="vv_nav_centre_defilement" style="display:none;"  id="v2_menu_pour_acces_0">' + les_menu1 + '</ul>';
        }
        return les_menu1;

    }
}
export{v2_menu_pour_acces_0 as v2_menu_pour_acces_0};

