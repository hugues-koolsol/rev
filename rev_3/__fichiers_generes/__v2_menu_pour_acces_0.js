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
        if(les_menu1 !== ''){
            les_menu1='<ul data-rev_menu="1" class="vv_nav_centre_defilement" style="display:none;"  id="v2_menu_pour_acces_0">' + les_menu1 + '</ul>';
        }
        return les_menu1;

    }
}
export{v2_menu_pour_acces_0 as v2_menu_pour_acces_0};

