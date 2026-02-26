class v2_menu_pour_acces_3{
    /*
      =============================================================================================================
    */
    constructor(){
        /* console.log('constructor de menu3'); */
    }
    /*
      =============================================================================================================
    */
    obtenir_le_html_des_menus( donnees_retournees ){
        let les_menu1='';
        /* contenu initialisé avec une chaine vide pour indice 0 */
        let les_sous_menus=[''];
        les_menu1+=`<li><div id="menu_1" data-id_auto="17" data-id_menu="11" class="rev_bouton" data-rev_click="m1(n1(taches1),f1(entree_module(null)))" title="tâches">mes tâches</div></li>`;
        les_menu1+=`<li><div id="menu_2" data-id_auto="19" data-id_menu="12" class="rev_bouton" data-rev_click="m1(n1(x_ecran_coordonnees1),f1(entree_module(null)))" title="mes coordonnées">mes coordonnées</div></li>`;


        if(les_menu1 !== ''){
            les_menu1='<ul data-rev_menu="1" class="vv_nav_centre_defilement" style="display:none;"  id="v2_menu_pour_acces_3">' + les_menu1 + '</ul>';
        }
        return les_menu1;

    }
}
export{v2_menu_pour_acces_3 as v2_menu_pour_acces_3};

