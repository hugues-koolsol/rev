class v2_menu_pour_acces_2{
    /*
      =============================================================================================================
    */
    constructor(){
        /* console.log('constructor de menu2'); */
    }
    /*
      =============================================================================================================
    */
    obtenir_le_html_des_menus( donnees_retournees ){
        let les_menu1='';
        /* contenu initialisé avec une chaine vide pour indice 0 */
        let les_sous_menus=[''];
        les_menu1+=`<li><div id="menu_1" data-id_auto="4" data-id_menu="2" class="rev_bouton" data-rev_click="m1(n1(x_ecran_coordonnees1),f1(page_coordonnees()))" title="mes coordonnées">mes coordonnées</div></li>`;
        les_menu1+=`<li><div id="menu_2" data-id_auto="5" data-id_menu="1" class="rev_bouton" data-rev_click="m1(n1(taches1),f1(entree_module()))" title="tâches">mes tâches</div></li>`;
        /* ================== */
        les_sous_menus[0]+=`<li><div  id="menu_4"   data-id_auto="6" data-id_menu="3" class="rev_bouton"  title="groupes" data-rev_click="m1(n1(groupes1),f1(entree_module()))">groupes</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_5"   data-id_auto="8" data-id_menu="4" class="rev_bouton"  title="métiers" data-rev_click="m1(n1(metiers1),f1(entree_module()))">métiers</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_6"   data-id_auto="12" data-id_menu="6" class="rev_bouton"  title="accès" data-rev_click="m1(n1(acces1),f1(entree_module()))">accès</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_7"   data-id_auto="23" data-id_menu="10" class="rev_bouton"  title="utilisateurs" data-rev_click="m1(n1(utilisateurs1),f1(entree_module()))">utilisateurs</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_8"   data-id_auto="14" data-id_menu="7" class="rev_bouton"  title="sources" data-rev_click="m1(n1(sources1),f1(entree_module()))">sources</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_9"   data-id_auto="10" data-id_menu="5" class="rev_bouton"  title="autorisations" data-rev_click="m1(n1(autorisations1),f1(entree_module()))">autorisations</div></li>`;
        les_sous_menus[0]+=`<li><div  id="menu_10"   data-id_auto="21" data-id_menu="8" class="rev_bouton"  title="menus" data-rev_click="m1(n1(menus1),f1(entree_module()))">menus</div></li>`;
        /* niveau 0 */
        if(les_sous_menus[0] !== ''){
            les_menu1+='<li><div data-separateur="0" data-libelle_noeud_menu1="0">organisation</div>';
            les_menu1+=`<ul id="menu_3" data-id_menu="3">`;
            les_menu1+=les_sous_menus[0];
            les_menu1+=`</ul>`;
            les_menu1+='</li>';
        }
        les_sous_menus.pop();


        if(les_menu1 !== ''){
            les_menu1='<ul data-rev_menu="1" class="vv_nav_centre_defilement" style="display:none;"  id="v2_menu_pour_acces_2">' + les_menu1 + '</ul>';
        }
        return les_menu1;

    }
}
export{v2_menu_pour_acces_2 as v2_menu_pour_acces_2};

